import { useEffect, useMemo, useState } from "react";
import { ToolPage, Field, Result, useCurrencyFormatter } from "@/components/tools/ToolPage";
import { useLocale } from "@/i18n/useLocale";
import { pickTools } from "@/content";

// Discount calculator.
//
//   sale price     = list × Π (1 − rate_i)            (stacked discounts multiply)
//   discount rate  = (list − sale) / list
//   original price = sale / (1 − rate)
//   buy X pay Y    = 1 − Y / X
//
// Seller block (optional): profit = price × (1 − commission) − unit cost.
//   required sales uplift = profit_before / profit_after − 1
//   break-even discount   = 1 − cost / (list × (1 − commission))

type Mode = "price" | "rate" | "original" | "bundle";

const PRESETS = [10, 15, 20, 25, 30, 40, 50, 70];
const TABLE_RATES = [10, 20, 25, 30, 40, 50];

const T = {
  tr: {
    modes: { price: "İndirimli fiyat", rate: "İndirim oranı", original: "Eski fiyat", bundle: "X al Y öde" },
    list: "Normal fiyat",
    sale: "İndirimli fiyat",
    pct: "İndirim oranı",
    extra1: "Ek indirim (sepet, kupon)",
    extra2: "İkinci ek indirim",
    unit: "Birim fiyat",
    buy: "Kaç adet alıyorsunuz (X)",
    pay: "Kaç adet ödüyorsunuz (Y)",
    rSale: "İndirimli fiyat",
    rOriginal: "İndirimden önceki fiyat",
    rRate: "Toplam indirim oranı",
    rSaved: "İndirim tutarı",
    hintSale: "Normal fiyat × (1 − indirim oranı)",
    hintStack: "Üst üste indirimler toplanmaz, çarpılır",
    hintRate: "(Normal fiyat − İndirimli fiyat) / Normal fiyat",
    hintOriginal: "İndirimli fiyat / (1 − indirim oranı)",
    hintBundle: "1 − Y / X",
    warnHigher: "İndirimli fiyat normal fiyattan yüksek: bu bir indirim değil, zam.",
    warnBundle: "Ödenen adet, alınan adetten az olmalı.",
    table: "Bu fiyatta hazır indirim oranları",
    cols: ["İndirim", "Fiyat", "Tutar"],
    sellerCols: ["İndirim", "Fiyat", "Birim kâr", "Gerekli satış artışı"],
    sellerTitle: "Satıcı mısınız? İndirimin kârınıza etkisini görün",
    sellerNote: "Birim maliyeti girin; indirim sonrası kâr, gerekli satış artışı ve en fazla yapabileceğiniz indirim hesaplansın.",
    cost: "Birim maliyet (ürün + kargo + paketleme)",
    commission: "Pazaryeri / ödeme komisyonu (opsiyonel)",
    qty: "Aylık satış adedi (opsiyonel)",
    bundleCostNote: "X al Y öde modunda maliyet X adet üzerinden hesaplanır.",
    before: "İndirimden önce kâr",
    after: "İndirim sonrası kâr",
    marginWord: "marj",
    uplift: "Aynı kâr için gerekli satış artışı",
    upliftHint: (a: string, b: string) => `${a} adet yerine en az ${b} adet`,
    upliftNoQty: "Kâr düştüğü için aynı toplam kârı daha çok satışla yakalamalısınız",
    maxDiscount: "Zarar etmeden en fazla indirim",
    maxHint: "Bu orandan sonra her satış zarar yazar (reklam hariç)",
    roas: "Başabaş ROAS",
    roasHint: (a: string) => `İndirimden önce ${a}. Reklam yapıyorsanız bu eşiğin altı zarardır`,
    loss: "Bu indirimle her satış zarar ediyor. Satış adedini artırmak kârı getirmez, zararı büyütür.",
    na: "—",
    share: "Bu hesabı paylaş",
    copied: "Link kopyalandı",
    toMarket: "Komisyon ve kargoyla tam hesap → Trendyol Kâr Hesaplama",
    marketHref: "/ucretsiz-araclar/trendyol-hepsiburada-kar-hesaplama/",
    disclaimer: "Sonuçlar bilgi amaçlıdır; kuruş yuvarlaması mağazaya göre değişebilir.",
  },
  en: {
    modes: { price: "Sale price", rate: "Discount rate", original: "Original price", bundle: "Buy X pay Y" },
    list: "Original price",
    sale: "Sale price",
    pct: "Discount",
    extra1: "Extra discount (cart, coupon)",
    extra2: "Second extra discount",
    unit: "Unit price",
    buy: "Units you take (X)",
    pay: "Units you pay for (Y)",
    rSale: "Sale price",
    rOriginal: "Original price",
    rRate: "Total discount",
    rSaved: "You save",
    hintSale: "Original price × (1 − discount)",
    hintStack: "Stacked discounts multiply, they do not add up",
    hintRate: "(Original price − Sale price) / Original price",
    hintOriginal: "Sale price / (1 − discount)",
    hintBundle: "1 − Y / X",
    warnHigher: "The sale price is above the original price: that is a markup, not a discount.",
    warnBundle: "Units paid for must be fewer than units taken.",
    table: "Common discounts at this price",
    cols: ["Discount", "Price", "Saved"],
    sellerCols: ["Discount", "Price", "Unit profit", "Sales uplift needed"],
    sellerTitle: "Selling? See what the discount does to your profit",
    sellerNote: "Enter your unit cost to see profit after the discount, the sales uplift you need and the deepest discount you can afford.",
    cost: "Unit cost (product + shipping + packaging)",
    commission: "Marketplace / payment fee (optional)",
    qty: "Monthly units sold (optional)",
    bundleCostNote: "In Buy X pay Y mode, cost is counted for X units.",
    before: "Profit before discount",
    after: "Profit after discount",
    marginWord: "margin",
    uplift: "Sales uplift needed for the same profit",
    upliftHint: (a: string, b: string) => `at least ${b} units instead of ${a}`,
    upliftNoQty: "Profit per sale falls, so you need more sales for the same total",
    maxDiscount: "Deepest discount before a loss",
    maxHint: "Beyond this rate every sale loses money (before ads)",
    roas: "Break-even ROAS",
    roasHint: (a: string) => `${a} before the discount. If you advertise, anything below this loses money`,
    loss: "Every sale loses money at this discount. Selling more will grow the loss, not recover it.",
    na: "—",
    share: "Share this calculation",
    copied: "Link copied",
    toMarket: "Full math with fees and shipping → Marketplace Profit Calculator",
    marketHref: "/en/free-tools/marketplace-profit-calculator/",
    disclaimer: "Results are for information only; rounding may vary by store.",
  },
};

const num = (v: string) => {
  const n = parseFloat(v);
  return Number.isFinite(n) ? n : 0;
};

export default function DiscountCalculator() {
  const locale = useLocale();
  const s = T[locale === "en" ? "en" : "tr"];
  const fmt = useCurrencyFormatter();
  const money = locale === "en" ? "$" : "₺";
  const numberLocale = pickTools(locale).numberLocale;
  const nf = (n: number, d = 2) => new Intl.NumberFormat(numberLocale, { maximumFractionDigits: d }).format(n);
  const pctFmt = (n: number, d = 2) => (locale === "en" ? `${nf(n, d)}%` : `%${nf(n, d)}`);

  const [mode, setMode] = useState<Mode>("price");
  const [list, setList] = useState("");
  const [sale, setSale] = useState("");
  const [pct, setPct] = useState("");
  const [extra1, setExtra1] = useState("");
  const [extra2, setExtra2] = useState("");
  const [unit, setUnit] = useState("");
  const [buy, setBuy] = useState("3");
  const [pay, setPay] = useState("2");
  const [cost, setCost] = useState("");
  const [commission, setCommission] = useState("");
  const [qty, setQty] = useState("");
  const [copied, setCopied] = useState(false);

  // Restore a shared calculation from the URL (client only, after hydration).
  useEffect(() => {
    try {
      const q = new URLSearchParams(window.location.search);
      const m = q.get("m");
      if (m === "price" || m === "rate" || m === "original" || m === "bundle") setMode(m);
      const set: Array<[string, (v: string) => void]> = [
        ["l", setList], ["s", setSale], ["p", setPct], ["e1", setExtra1], ["e2", setExtra2],
        ["u", setUnit], ["x", setBuy], ["y", setPay], ["c", setCost], ["k", setCommission], ["n", setQty],
      ];
      set.forEach(([key, fn]) => {
        const v = q.get(key);
        if (v !== null) fn(v);
      });
    } catch {
      /* ignore malformed query */
    }
  }, []);

  // Keep the URL shareable; only touched once something was entered.
  useEffect(() => {
    try {
      const q = new URLSearchParams();
      const pairs: Array<[string, string]> = [
        ["l", list], ["s", sale], ["p", pct], ["e1", extra1], ["e2", extra2],
        ["u", unit], ["c", cost], ["k", commission], ["n", qty],
      ];
      pairs.forEach(([k, v]) => { if (v) q.set(k, v); });
      if (mode === "bundle") { q.set("x", buy); q.set("y", pay); }
      const hasInput = pairs.some(([, v]) => v);
      if (!hasInput) return;
      q.set("m", mode);
      window.history.replaceState(null, "", `${window.location.pathname}?${q.toString()}`);
    } catch {
      /* ignore */
    }
  }, [mode, list, sale, pct, extra1, extra2, unit, buy, pay, cost, commission, qty]);

  const r = useMemo(() => {
    const rate = Math.min(num(pct), 100) / 100;
    let L = 0;
    let F = 0;
    let units = 1;
    let warn = "";
    let stacked = false;
    if (mode === "price") {
      L = num(list);
      const e1 = Math.min(num(extra1), 100) / 100;
      const e2 = Math.min(num(extra2), 100) / 100;
      stacked = e1 > 0 || e2 > 0;
      F = L * (1 - rate) * (1 - e1) * (1 - e2);
    } else if (mode === "rate") {
      L = num(list);
      F = num(sale);
      if (L > 0 && F > L) warn = s.warnHigher;
    } else if (mode === "original") {
      F = num(sale);
      L = rate < 1 ? F / (1 - rate) : 0;
    } else {
      const X = Math.floor(num(buy));
      const Y = Math.floor(num(pay));
      const u = num(unit);
      if (X > 0 && Y >= X) warn = s.warnBundle;
      L = u * X;
      F = u * Y;
      units = X > 0 ? X : 1;
    }
    const ready = L > 0 && F >= 0 && !warn && (mode === "rate" ? F > 0 : mode === "original" ? F > 0 && num(pct) > 0 : mode === "price" ? num(pct) > 0 : true);
    const discountRate = L > 0 ? (1 - F / L) * 100 : 0;

    const c = Math.min(num(commission), 100) / 100;
    const C = num(cost) * units;
    const hasCost = ready && C > 0;
    const profit = (p: number) => p * (1 - c) - C;
    const before = profit(L);
    const after = profit(F);
    const uplift = before > 0 && after > 0 ? before / after - 1 : null;
    const net = L * (1 - c);
    const maxDiscount = net > 0 ? Math.max(0, (1 - C / net) * 100) : 0;
    const n = num(qty);
    const rows = TABLE_RATES.map((d) => {
      const price = L * (1 - d / 100);
      const unitProfit = profit(price);
      return {
        d,
        price,
        saved: L - price,
        unitProfit,
        uplift: before > 0 && unitProfit > 0 ? (before / unitProfit - 1) * 100 : null,
      };
    });
    return { L, F, warn, stacked, ready, discountRate, hasCost, before, after, uplift, maxDiscount, n, rows };
  }, [mode, list, sale, pct, extra1, extra2, unit, buy, pay, cost, commission, qty, s]);

  const share = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  };

  const tabClass = (active: boolean) =>
    `h-10 px-3 rounded-md border font-mono text-xs transition-colors ${
      active ? "border-accent text-accent bg-accent/10" : "border-border text-muted-foreground hover:border-accent hover:text-accent"
    }`;
  const hint = mode === "price"
    ? (r.stacked ? s.hintStack : s.hintSale)
    : mode === "rate" ? s.hintRate : mode === "original" ? s.hintOriginal : s.hintBundle;
  const marginOf = (profit: number, price: number) => (price > 0 ? pctFmt((profit / price) * 100, 1) : s.na);

  return (
    <ToolPage toolKey="discount">
      <div className="space-y-5">
        <div className="flex flex-wrap gap-2" role="group">
          {(Object.keys(s.modes) as Mode[]).map((m) => (
            <button key={m} type="button" onClick={() => setMode(m)} aria-pressed={mode === m} className={tabClass(mode === m)}>
              {s.modes[m]}
            </button>
          ))}
        </div>

        {mode === "bundle" ? (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Field label={s.unit} value={unit} onChange={setUnit} suffix={money} placeholder="300" />
            <Field label={s.buy} value={buy} onChange={setBuy} placeholder="3" />
            <Field label={s.pay} value={pay} onChange={setPay} placeholder="2" />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {mode !== "original" && <Field label={s.list} value={list} onChange={setList} suffix={money} placeholder="1200" />}
            {mode !== "price" && <Field label={s.sale} value={sale} onChange={setSale} suffix={money} placeholder="900" />}
            {mode !== "rate" && <Field label={s.pct} value={pct} onChange={setPct} suffix="%" placeholder="25" />}
          </div>
        )}

        {(mode === "price" || mode === "original") && (
          <div className="flex flex-wrap gap-2">
            {PRESETS.map((p) => (
              <button key={p} type="button" onClick={() => setPct(String(p))} className={tabClass(num(pct) === p)}>
                {pctFmt(p, 0)}
              </button>
            ))}
          </div>
        )}

        {mode === "price" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label={s.extra1} value={extra1} onChange={setExtra1} suffix="%" placeholder="10" />
            <Field label={s.extra2} value={extra2} onChange={setExtra2} suffix="%" placeholder="0" />
          </div>
        )}

        {r.warn && <p className="font-mono text-xs text-destructive">{r.warn}</p>}

        {r.ready && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {mode === "original" ? (
              <Result label={s.rOriginal} value={fmt(r.L)} hint={hint} />
            ) : mode === "rate" ? (
              <Result label={s.rRate} value={pctFmt(r.discountRate)} hint={hint} />
            ) : (
              <Result label={s.rSale} value={fmt(r.F)} hint={hint} />
            )}
            <Result label={s.rSaved} value={fmt(r.L - r.F)} />
            {(mode === "bundle" || r.stacked) && <Result label={s.rRate} value={pctFmt(r.discountRate)} />}
          </div>
        )}

        {r.ready && mode !== "bundle" && (
          <div className="border border-border rounded-lg overflow-x-auto">
            <div className="px-4 py-3 font-mono text-xs text-foreground border-b border-border">{s.table}</div>
            <table className="w-full font-mono text-sm">
              <thead>
                <tr className="border-b border-border text-muted-foreground text-xs">
                  {(r.hasCost ? s.sellerCols : s.cols).map((c) => (
                    <th key={c} className="px-3 py-2 text-left font-normal whitespace-nowrap">{c}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {r.rows.map((x) => (
                  <tr key={x.d} className="border-b border-border last:border-0">
                    <td className="px-3 py-2 text-muted-foreground">{pctFmt(x.d, 0)}</td>
                    <td className="px-3 py-2 text-accent whitespace-nowrap">{fmt(x.price)}</td>
                    {r.hasCost ? (
                      <>
                        <td className="px-3 py-2 whitespace-nowrap">{fmt(x.unitProfit)}</td>
                        <td className="px-3 py-2">{x.uplift === null ? s.na : pctFmt(x.uplift, 0)}</td>
                      </>
                    ) : (
                      <td className="px-3 py-2 whitespace-nowrap">{fmt(x.saved)}</td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="border border-border rounded-lg p-4 space-y-4">
          <div>
            <h2 className="font-mono text-sm text-foreground">{s.sellerTitle}</h2>
            <p className="font-mono text-xs text-muted-foreground mt-1">
              {s.sellerNote}{mode === "bundle" ? ` ${s.bundleCostNote}` : ""}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Field label={s.cost} value={cost} onChange={setCost} suffix={money} placeholder="700" />
            <Field label={s.commission} value={commission} onChange={setCommission} suffix="%" placeholder="0" />
            <Field label={s.qty} value={qty} onChange={setQty} placeholder="100" />
          </div>
          {r.hasCost && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Result label={s.before} value={fmt(r.before)} hint={`${s.marginWord} ${marginOf(r.before, r.L)}`} />
                <Result label={s.after} value={fmt(r.after)} hint={`${s.marginWord} ${marginOf(r.after, r.F)}`} />
                {r.uplift !== null && (
                  <Result
                    label={s.uplift}
                    value={pctFmt(r.uplift * 100, 1)}
                    hint={r.n > 0 ? s.upliftHint(nf(r.n, 0), nf(Math.ceil(r.n * (1 + r.uplift)), 0)) : s.upliftNoQty}
                  />
                )}
                <Result label={s.maxDiscount} value={pctFmt(r.maxDiscount, 1)} hint={s.maxHint} />
                {r.after > 0 && r.before > 0 && (
                  <Result label={s.roas} value={nf(r.F / r.after)} hint={s.roasHint(nf(r.L / r.before))} />
                )}
              </div>
              {r.after <= 0 && <p className="font-mono text-xs text-destructive">{s.loss}</p>}
            </div>
          )}
        </div>

        {r.ready && (
          <div className="flex flex-wrap gap-3">
            <button type="button" onClick={share} className="h-10 px-4 rounded-md border border-accent text-accent font-mono text-xs hover:bg-accent/10 transition-colors">
              {copied ? s.copied : s.share}
            </button>
            <a href={s.marketHref} className="h-10 px-4 inline-flex items-center rounded-md border border-border text-muted-foreground font-mono text-xs hover:border-accent hover:text-accent transition-colors">
              {s.toMarket}
            </a>
          </div>
        )}
        <p className="font-mono text-[11px] text-muted-foreground">{s.disclaimer}</p>
      </div>
    </ToolPage>
  );
}
