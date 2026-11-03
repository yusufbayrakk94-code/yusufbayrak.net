import { useEffect, useMemo, useState } from "react";
import { ToolPage, Field, Result, useCurrencyFormatter } from "@/components/tools/ToolPage";
import { useLocale } from "@/i18n/useLocale";

// Profit margin + markup calculator.
//
//   margin = (price − cost) / price          (share of the selling price)
//   markup = (price − cost) / cost           (share of the cost)
//   price from markup = cost × (1 + markup)
//   price from margin = cost / (1 − margin)
//   markup = margin / (1 − margin)  ·  margin = markup / (1 + markup)
//   break-even ROAS   = 1 / margin

type Mode = "margin" | "markup" | "price";

const TABLE_MARGINS = [10, 15, 20, 25, 30, 40, 50, 60];

const T = {
  tr: {
    modes: { margin: "Kar marjı bul", markup: "Kar oranıyla fiyat", price: "Hedef marjla fiyat" },
    rev: "Satış fiyatı / toplam gelir",
    cost: "Maliyet (COGS)",
    markupIn: "Kar oranı (markup)",
    marginIn: "Hedef kar marjı",
    margin: "Kar marjı (brüt)",
    profit: "Brüt kâr",
    markup: "Kar oranı (markup)",
    price: "Satış fiyatı",
    roas: "Başabaş ROAS (reklam dahil)",
    hintMargin: "Kar marjı = (Satış fiyatı − Maliyet) / Satış fiyatı × 100",
    hintMarkup: "Kar oranı = (Satış fiyatı − Maliyet) / Maliyet × 100",
    hintPriceMarkup: "Satış fiyatı = Maliyet × (1 + Kar oranı)",
    hintPriceMargin: "Satış fiyatı = Maliyet / (1 − Kar marjı)",
    hintRoas: "1 / Kar marjı. Kargo ve komisyonu da düşerseniz eşik yükselir",
    warnLoss: "Maliyet satış fiyatının üzerinde: bu satış zarar ediyor.",
    warnMargin: "Kar marjı %100 veya üzeri olamaz: maliyeti sıfır olmayan üründe fiyat sonsuza gider.",
    naive: (m: string, wrong: string, real: string) =>
      `Dikkat: maliyete ${m} eklerseniz fiyat ${wrong} olur ve marjınız ${m} değil ${real} kalır.`,
    table: "Kar marjı ↔ kar oranı dönüşüm tablosu",
    cols: ["Kar marjı", "Kar oranı", "Başabaş ROAS"],
    colPrice: "Satış fiyatı",
    bench: "Referans: e-ticaret genelde %20-50, hizmet %40-60, SaaS %70-90 bandında görülür. Kesin hedef değil, kıyas için yönlendirici aralıklardır.",
    share: "Bu hesabı paylaş",
    copied: "Link kopyalandı",
    na: "—",
  },
  en: {
    modes: { margin: "Find margin", markup: "Price from markup", price: "Price from target margin" },
    rev: "Selling price / total revenue",
    cost: "Cost (COGS)",
    markupIn: "Markup",
    marginIn: "Target profit margin",
    margin: "Gross profit margin",
    profit: "Gross profit",
    markup: "Markup",
    price: "Selling price",
    roas: "Break-even ROAS (with ads)",
    hintMargin: "Margin = (Selling price − Cost) / Selling price × 100",
    hintMarkup: "Markup = (Selling price − Cost) / Cost × 100",
    hintPriceMarkup: "Selling price = Cost × (1 + Markup)",
    hintPriceMargin: "Selling price = Cost / (1 − Margin)",
    hintRoas: "1 / Margin. Subtract shipping and fees too and the threshold rises",
    warnLoss: "Cost is above the selling price: this sale loses money.",
    warnMargin: "Margin cannot reach 100%: with any cost above zero the price would be infinite.",
    naive: (m: string, wrong: string, real: string) =>
      `Watch out: adding ${m} to cost gives a price of ${wrong}, and your margin is ${real}, not ${m}.`,
    table: "Margin ↔ markup conversion table",
    cols: ["Margin", "Markup", "Break-even ROAS"],
    colPrice: "Selling price",
    bench: "Reference: e-commerce typically 20-50%, services 40-60%, SaaS 70-90%. Orientation only, not a fixed target.",
    share: "Share this calculation",
    copied: "Link copied",
    na: "—",
  },
};

const num = (v: string) => {
  const n = parseFloat(v);
  return Number.isFinite(n) ? n : 0;
};

export default function GrossMarginCalculator() {
  const locale = useLocale();
  const s = T[locale];
  const fmt = useCurrencyFormatter();
  const money = locale === "en" ? "$" : "₺";
  const pct = (v: number, d = 2) => {
    const n = v.toLocaleString(locale === "en" ? "en-US" : "tr-TR", { minimumFractionDigits: d, maximumFractionDigits: d });
    return locale === "en" ? `${n}%` : `%${n}`;
  };
  const dec = (v: number) =>
    v.toLocaleString(locale === "en" ? "en-US" : "tr-TR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  const [mode, setMode] = useState<Mode>("margin");
  const [revenue, setRevenue] = useState("");
  const [cogs, setCogs] = useState("");
  const [rate, setRate] = useState("");
  const [copied, setCopied] = useState(false);

  // Restore a shared calculation from the URL (client only, after hydration).
  useEffect(() => {
    try {
      const q = new URLSearchParams(window.location.search);
      const m = q.get("m");
      if (m === "margin" || m === "markup" || m === "price") setMode(m);
      const set: Array<[string, (v: string) => void]> = [["r", setRevenue], ["c", setCogs], ["p", setRate]];
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
      if (!revenue && !cogs && !rate) return;
      const q = new URLSearchParams();
      q.set("m", mode);
      if (revenue) q.set("r", revenue);
      if (cogs) q.set("c", cogs);
      if (rate) q.set("p", rate);
      window.history.replaceState(null, "", `${window.location.pathname}?${q.toString()}`);
    } catch {
      /* ignore */
    }
  }, [mode, revenue, cogs, rate]);

  const r = useMemo(() => {
    const c = num(cogs);
    const p = num(rate);
    let price = 0;
    if (mode === "margin") price = num(revenue);
    else if (mode === "markup") price = c > 0 ? c * (1 + p / 100) : 0;
    else price = c > 0 && p < 100 ? c / (1 - p / 100) : 0;
    const profit = price > 0 ? price - c : 0;
    const margin = price > 0 ? (profit / price) * 100 : 0;
    const markup = c > 0 && price > 0 ? (profit / c) * 100 : null;
    const roas = margin > 0 ? 100 / margin : null;
    // "Add X% to cost" is the classic pricing mistake; show what it really yields.
    const naivePrice = mode === "price" && c > 0 && p > 0 && p < 100 ? c * (1 + p / 100) : 0;
    const naiveMargin = naivePrice > 0 ? ((naivePrice - c) / naivePrice) * 100 : 0;
    return { c, p, price, profit, margin, markup, roas, naivePrice, naiveMargin };
  }, [mode, revenue, cogs, rate]);

  const rows = TABLE_MARGINS.map((m) => ({
    m,
    markup: (m / (100 - m)) * 100,
    roas: 100 / m,
    price: r.c > 0 ? r.c / (1 - m / 100) : null,
  }));

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
  const warn = mode === "price" && r.p >= 100 ? s.warnMargin : r.price > 0 && r.profit < 0 ? s.warnLoss : "";

  return (
    <ToolPage toolKey="grossMargin">
      <div className="space-y-5">
        <div className="flex flex-wrap gap-2" role="group">
          {(Object.keys(s.modes) as Mode[]).map((m) => (
            <button key={m} type="button" onClick={() => setMode(m)} aria-pressed={mode === m} className={tabClass(mode === m)}>
              {s.modes[m]}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {mode === "margin" && <Field label={s.rev} value={revenue} onChange={setRevenue} suffix={money} placeholder="250000" />}
          <Field label={s.cost} value={cogs} onChange={setCogs} suffix={money} placeholder={mode === "margin" ? "150000" : "600"} />
          {mode === "markup" && <Field label={s.markupIn} value={rate} onChange={setRate} suffix="%" placeholder="50" />}
          {mode === "price" && <Field label={s.marginIn} value={rate} onChange={setRate} suffix="%" placeholder="40" />}
        </div>

        {warn && <p className="font-mono text-xs text-destructive leading-relaxed">{warn}</p>}

        {mode === "margin" ? (
          <Result label={s.margin} value={pct(r.margin)} hint={s.hintMargin} />
        ) : (
          <Result label={s.price} value={fmt(r.price)} hint={mode === "markup" ? s.hintPriceMarkup : s.hintPriceMargin} />
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {mode !== "margin" && <Result label={s.margin} value={pct(r.margin)} />}
          <Result label={s.profit} value={fmt(r.profit)} />
          <Result label={s.markup} value={r.markup === null ? s.na : pct(r.markup)} hint={mode === "margin" ? s.hintMarkup : undefined} />
          <Result label={s.roas} value={r.roas === null ? s.na : dec(r.roas)} hint={s.hintRoas} />
        </div>

        {r.naivePrice > 0 && (
          <p className="font-mono text-xs text-muted-foreground leading-relaxed">
            {"//"} {s.naive(pct(r.p, 0), fmt(r.naivePrice), pct(r.naiveMargin, 1))}
          </p>
        )}

        {(revenue || cogs || rate) && (
          <button type="button" onClick={share} className={tabClass(false)}>
            {copied ? s.copied : s.share}
          </button>
        )}

        <div>
          <div className="font-mono text-xs text-muted-foreground mb-2">{"//"} {s.table}</div>
          <div className="overflow-x-auto">
            <table className="w-full font-mono text-xs">
              <thead>
                <tr className="text-left text-muted-foreground border-b border-border">
                  {s.cols.map((c) => <th key={c} className="py-2 pr-3 font-normal">{c}</th>)}
                  {r.c > 0 && <th className="py-2 font-normal">{s.colPrice}</th>}
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.m} className="border-b border-border/50">
                    <td className="py-2 pr-3">{pct(row.m, 0)}</td>
                    <td className="py-2 pr-3">{pct(row.markup, 1)}</td>
                    <td className="py-2 pr-3">{dec(row.roas)}</td>
                    {row.price !== null && <td className="py-2">{fmt(row.price)}</td>}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="font-mono text-xs text-muted-foreground leading-relaxed">{"//"} {s.bench}</p>
      </div>
    </ToolPage>
  );
}
