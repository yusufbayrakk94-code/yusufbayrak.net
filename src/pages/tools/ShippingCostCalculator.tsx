import { useEffect, useMemo, useState } from "react";
import { ToolPage, Field, Result, useCurrencyFormatter } from "@/components/tools/ToolPage";
import { useLocale } from "@/i18n/useLocale";

// Shipping cost calculator: the user's own tier table, not a carrier price list.
//
//   chargeable  = round(max(L × W × H / divisor, actual kg))
//   carriage    = price of the first tier whose limit ≥ chargeable
//                 (above the last tier: last price + excess × rate per extra unit)
//   per parcel  = (carriage + extras) × (1 + percentage surcharge)
//   shipment    = per parcel × parcels
//
// Up to three tariffs share one set of tier limits so offers can be compared.
// Carrier prices change often and depend on the contract, so the prefilled
// values are labelled samples and every cell is editable.

type Rounding = "ceil" | "nearest" | "none";
interface Tariff { name: string; prices: string[]; extra: string; service: string; pct: string }

const TIER_COUNT = 5;
const DEFAULT_LIMITS = ["1", "5", "10", "20", "30"];
const blank: Tariff = { name: "C", prices: ["", "", "", "", ""], extra: "", service: "", pct: "" };
const DEFAULTS: Record<"tr" | "en", Tariff[]> = {
  tr: [
    { name: "A", prices: ["85", "125", "175", "290", "420"], extra: "15", service: "10", pct: "2.35" },
    { name: "B", prices: ["95", "115", "165", "310", "450"], extra: "16", service: "", pct: "2.35" },
    blank,
  ],
  en: [
    { name: "A", prices: ["7", "9", "12", "20", "29"], extra: "1", service: "0.5", pct: "5" },
    { name: "B", prices: ["8", "8.5", "11", "22", "31"], extra: "1.1", service: "", pct: "5" },
    blank,
  ],
};

const T = {
  tr: {
    pkg: "Koli",
    l: "En",
    w: "Boy",
    h: "Yükseklik",
    kg: "Gerçek ağırlık",
    q: "Koli adedi",
    divisor: "Desi böleni",
    divisors: { "3000": "3000 — yurt içi kargo", "5000": "5000 — yurt dışı hava kargo", "6000": "6000 — bazı ekonomi hizmetleri" } as Record<string, string>,
    rounding: "Yuvarlama",
    roundings: { ceil: "Yukarı tam sayıya", nearest: "0,50 ve üstü yukarı, altı aşağı", none: "Yuvarlama yok" },
    tariffs: "Tarifeler",
    sample: "A ve B örnek tutarlardır, gerçek bir firmanın fiyatı değildir. Kendi fiyat listenizi veya teklifinizi yazın. Mesafeye göre değişen tarifede gönderinizin hattındaki sütunu girin.",
    tariffName: "Tarife adı",
    upTo: "Desi/kg üst sınırı",
    extra: "Son kademe üstü, her ek desi/kg",
    service: "Koli başı ek hizmet (SMS, adres vb.)",
    pct: "Yüzdesel ek bedel (%)",
    chargeable: "Ücrete esas ağırlık (desi/kg)",
    by: { desi: "desi belirledi", kg: "ağırlık belirledi" },
    rawDesi: "Hesaplanan desi",
    best: "En düşük tutar",
    perParcel: "koli başı",
    table: "Tarife karşılaştırması",
    cols: ["Tarife", "Kademe", "Taşıma", "Koli başı", "Toplam", "Fark"],
    incomplete: "fiyat eksik",
    overLast: "son kademe +",
    tierHead: "Kademe analizi",
    tierDrop: (lim: string, save: string, h: string) => `Ücrete esas ağırlığı ${lim} desi/kg'a indirirseniz koli başı ${save} tasarruf edersiniz. Bunun için en ve boy sabitken yükseklik en fazla ${h} cm olmalı.`,
    tierWeight: "Ağırlık belirliyor; kutuyu küçültmek ücreti düşürmez. Daha hafif ambalaj ya da başka bir tarife denenebilir.",
    tierLowest: "Bu gönderi tarifenin en düşük kademesinde.",
    tierRoom: (lim: string) => `Bu kademede ${lim} desi/kg'a kadar ücret değişmez.`,
    seller: "Satıcılar için: kargo sipariş kârını ne kadar yiyor?",
    sellerNote: "Hesap en düşük tutarlı tarifeyle yapılır ve kargonun tamamını sizin üstlendiğinizi varsayar.",
    basket: "Ortalama sepet tutarı",
    margin: "Kargo öncesi marj",
    target: "Sipariş başı hedef kâr",
    orders: "Aylık gönderi sayısı",
    shareOfBasket: "Kargonun sepete oranı",
    profitAfter: "Kargo sonrası sipariş kârı",
    shareHint: (p: string) => `Kargo öncesi kârın ${p} kadarı`,
    threshold: "Ücretsiz kargo eşiği",
    thresholdHint: "(Kargo + hedef kâr) / marj; bu sepetin altında kargoyu siz öderseniz hedefin altına düşersiniz",
    monthly: "Aylık kargo gideri",
    gap: (name: string, diff: string) => `En pahalı seçenek (${name}) ile fark ayda ${diff}`,
    share: "Bu hesabı paylaş",
    copied: "Link kopyalandı",
    toMarket: "Kargoyu kâr hesabına taşı → Trendyol Komisyon ve Kâr Hesaplama",
    marketHref: "/ucretsiz-araclar/trendyol-hepsiburada-kar-hesaplama/",
    toDesi: "Çoklu koli ve kutu küçültme → Desi Hesaplama",
    desiHref: "/ucretsiz-araclar/desi-hesaplama/",
    disclaimer: "Sonuç tahminidir. Kesin ücreti kargo firmasının ölçümü, güncel tarifesi ve sözleşmeniz belirler.",
  },
  en: {
    pkg: "Parcel",
    l: "Length",
    w: "Width",
    h: "Height",
    kg: "Actual weight",
    q: "Parcels",
    divisor: "Dimensional divisor",
    divisors: { "3000": "3000 — domestic Turkey", "5000": "5000 — international air express", "6000": "6000 — some economy services" } as Record<string, string>,
    rounding: "Rounding",
    roundings: { ceil: "Up to whole number", nearest: ".50 and above up, below down", none: "No rounding" },
    tariffs: "Rate cards",
    sample: "A and B are sample figures, not any carrier's real prices. Enter your own price list or quote. If rates vary by distance, enter the column for your route.",
    tariffName: "Rate card name",
    upTo: "Weight break (desi/kg)",
    extra: "Above last break, per extra unit",
    service: "Extras per parcel (SMS, address…)",
    pct: "Percentage surcharge (%)",
    chargeable: "Chargeable weight (desi/kg)",
    by: { desi: "volume decides", kg: "weight decides" },
    rawDesi: "Calculated desi",
    best: "Lowest cost",
    perParcel: "per parcel",
    table: "Rate card comparison",
    cols: ["Rate card", "Tier", "Carriage", "Per parcel", "Total", "Diff."],
    incomplete: "price missing",
    overLast: "last tier +",
    tierHead: "Tier analysis",
    tierDrop: (lim: string, save: string, h: string) => `Get the chargeable weight down to ${lim} and you save ${save} per parcel. With length and width fixed, height must be at most ${h} cm.`,
    tierWeight: "Weight decides, so a smaller box won't lower the charge. Try lighter packaging or another rate card.",
    tierLowest: "This parcel is already in the lowest tier.",
    tierRoom: (lim: string) => `The charge stays the same up to ${lim} desi/kg in this tier.`,
    seller: "For sellers: how much of the order profit does shipping take?",
    sellerNote: "Uses the lowest-cost rate card and assumes you absorb all of the shipping.",
    basket: "Average order value",
    margin: "Margin before shipping",
    target: "Target profit per order",
    orders: "Parcels per month",
    shareOfBasket: "Shipping as % of order",
    profitAfter: "Order profit after shipping",
    shareHint: (p: string) => `${p} of pre-shipping profit`,
    threshold: "Free shipping threshold",
    thresholdHint: "(Shipping + target profit) / margin; absorb shipping below this order value and you miss the target",
    monthly: "Monthly shipping cost",
    gap: (name: string, diff: string) => `Gap to the most expensive option (${name}): ${diff} a month`,
    share: "Share this calculation",
    copied: "Link copied",
    toMarket: "Use shipping in a profit calculation → Marketplace Profit Calculator",
    marketHref: "/en/free-tools/marketplace-profit-calculator/",
    toDesi: "Multiple boxes and box shrinking → Dimensional Weight Calculator",
    desiHref: "/en/free-tools/dimensional-weight-calculator/",
    disclaimer: "An estimate only. The final charge depends on the carrier's own measurement, current rates and your contract.",
  },
};

const num = (v: string) => {
  const n = parseFloat(String(v).replace(",", "."));
  return Number.isFinite(n) && n > 0 ? n : 0;
};

function roundCharge(x: number, mode: Rounding) {
  if (mode === "ceil") return Math.ceil(x - 1e-9);
  if (mode === "nearest") return Math.floor(x + 0.5 + 1e-9);
  return x;
}

// Valid tiers of one tariff, ascending by limit.
function tiersOf(limits: string[], prices: string[]) {
  return limits
    .map((l, i) => ({ limit: num(l), price: num(prices[i] ?? "") }))
    .filter((t) => t.limit > 0 && t.price > 0)
    .sort((a, b) => a.limit - b.limit);
}

export default function ShippingCostCalculator() {
  const locale = useLocale();
  const s = locale === "en" ? T.en : T.tr;
  const money = useCurrencyFormatter();
  const nf = (n: number, d = 2) =>
    n.toLocaleString(locale === "en" ? "en-US" : "tr-TR", { maximumFractionDigits: d });

  const pct = (n: number) => (locale === "en" ? `${nf(n, 1)}%` : `%${nf(n, 1)}`);

  const [l, setL] = useState("");
  const [w, setW] = useState("");
  const [h, setH] = useState("");
  const [kg, setKg] = useState("");
  const [qty, setQty] = useState("1");
  const [div, setDiv] = useState("3000");
  const [rounding, setRounding] = useState<Rounding>("ceil");
  const [limits, setLimits] = useState<string[]>(DEFAULT_LIMITS);
  const defaults = DEFAULTS[locale === "en" ? "en" : "tr"];
  const [tariffs, setTariffs] = useState<Tariff[]>(defaults);
  const [basket, setBasket] = useState("");
  const [margin, setMargin] = useState("");
  const [target, setTarget] = useState("");
  const [orders, setOrders] = useState("");
  const [copied, setCopied] = useState(false);

  // Restore from a shared link.
  useEffect(() => {
    try {
      const q = new URLSearchParams(window.location.search);
      const p = q.get("p");
      if (p) {
        const [a = "", b = "", c = "", d = "", e = "1"] = p.split("-");
        setL(a); setW(b); setH(c); setKg(d); setQty(e || "1");
      }
      const d = q.get("d");
      if (d && s.divisors[d]) setDiv(d);
      const r = q.get("r");
      if (r === "ceil" || r === "nearest" || r === "none") setRounding(r);
      const lim = q.get("lim");
      if (lim) {
        const parts = lim.split(",").slice(0, TIER_COUNT);
        if (parts.length === TIER_COUNT) setLimits(parts);
      }
      const t = q.get("t");
      if (t) {
        const parsed = t.split("|").slice(0, 3).map((chunk, i) => {
          const [name = defaults[i].name, prices = "", extra = "", service = "", pct = ""] = chunk.split("~");
          const list = prices.split(",");
          return { name, prices: Array.from({ length: TIER_COUNT }, (_, j) => list[j] ?? ""), extra, service, pct };
        });
        if (parsed.length === 3) setTariffs(parsed);
      }
      const b = q.get("b");
      if (b) {
        const [x = "", y = "", z = "", v = ""] = b.split("-");
        setBasket(x); setMargin(y); setTarget(z); setOrders(v);
      }
    } catch {
      /* ignore */
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    try {
      const q = new URLSearchParams();
      if (l || w || h || kg) q.set("p", [l, w, h, kg, qty].join("-"));
      if (div !== "3000") q.set("d", div);
      if (rounding !== "ceil") q.set("r", rounding);
      if (limits.join() !== DEFAULT_LIMITS.join()) q.set("lim", limits.join(","));
      if (JSON.stringify(tariffs) !== JSON.stringify(defaults)) {
        q.set("t", tariffs.map((t) => [t.name, t.prices.join(","), t.extra, t.service, t.pct].join("~")).join("|"));
      }
      if (basket || margin || target || orders) q.set("b", [basket, margin, target, orders].join("-"));
      const qs = q.toString();
      window.history.replaceState(null, "", qs ? `${window.location.pathname}?${qs}` : window.location.pathname);
    } catch {
      /* ignore */
    }
  }, [l, w, h, kg, qty, div, rounding, limits, tariffs, basket, margin, target, orders]);

  const r = useMemo(() => {
    const L = num(l), W = num(w), H = num(h), K = num(kg);
    const parcels = Math.max(1, Math.round(num(qty) || 1));
    const divisor = num(div);
    const desi = divisor > 0 ? (L * W * H) / divisor : 0;
    const ready = desi > 0 || K > 0;
    const byKg = K > desi;
    const charge = roundCharge(Math.max(desi, K), rounding);

    const rows = tariffs.map((t) => {
      const tiers = tiersOf(limits, t.prices);
      if (!tiers.length) return null;
      const last = tiers[tiers.length - 1];
      const idx = tiers.findIndex((x) => charge <= x.limit);
      const over = idx === -1;
      if (over && num(t.extra) <= 0) {
        return { name: t.name, tiers, pos: tiers.length, over, limit: last.limit, carriage: NaN, parcel: NaN, total: NaN, incomplete: true, fee: 0, rate: 0 };
      }
      const carriage = over ? last.price + (charge - last.limit) * num(t.extra) : tiers[idx].price;
      const fee = num(t.service);
      const rate = num(t.pct) / 100;
      const parcel = (carriage + fee) * (1 + rate);
      return { name: t.name, tiers, pos: over ? tiers.length : idx, over, limit: over ? last.limit : tiers[idx].limit, carriage, parcel, total: parcel * parcels, incomplete: false, fee, rate };
    }).filter((x): x is NonNullable<typeof x> => x !== null);

    const priced = rows.filter((x) => !x.incomplete);
    const best = priced.length ? priced.reduce((a, b) => (b.total < a.total ? b : a)) : null;
    const worst = priced.length ? priced.reduce((a, b) => (b.total > a.total ? b : a)) : null;

    // Tier analysis on the cheapest rate card: what dropping one tier would save.
    let drop: { limit: number; save: number; maxH: number } | null = null;
    if (best && !byKg && best.pos > 0) {
      const lower = best.tiers[best.pos - 1];
      const parcelLower = (lower.price + best.fee) * (1 + best.rate);
      // Rounding "ceil" allows exactly the limit; "nearest" allows up to limit + 0.49.
      const cap = rounding === "nearest" ? lower.limit + 0.49 : lower.limit;
      const maxH = L > 0 && W > 0 ? (cap * divisor) / (L * W) : NaN;
      if (lower.limit >= K && best.parcel - parcelLower > 0) {
        drop = { limit: lower.limit, save: best.parcel - parcelLower, maxH };
      }
    }

    const B = num(basket);
    const M = num(margin) / 100;
    const P = num(target);
    const O = num(orders);
    const shipping = best ? best.total : 0;
    const gross = B * M;
    const seller = best && B > 0 && M > 0
      ? {
          share: (shipping / B) * 100,
          after: gross - shipping,
          ofGross: (shipping / gross) * 100,
          threshold: (shipping + P) / M,
        }
      : null;
    const monthly = best && O > 0
      ? { cost: best.parcel * O, gap: worst ? (worst.parcel - best.parcel) * O : 0, worst: worst?.name ?? "" }
      : null;

    return { ready, desi, K, byKg, charge, parcels, rows, best, worst, drop, seller, monthly };
  }, [l, w, h, kg, qty, div, rounding, limits, tariffs, basket, margin, target, orders]);

  const setTariff = (i: number, patch: Partial<Tariff>) =>
    setTariffs((prev) => prev.map((t, j) => (j === i ? { ...t, ...patch } : t)));
  const setPrice = (i: number, tier: number, v: string) =>
    setTariffs((prev) => prev.map((t, j) => (j === i ? { ...t, prices: t.prices.map((p, k) => (k === tier ? v : p)) } : t)));

  const share = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  };

  const selectCls = "w-full h-11 px-3 bg-background border border-border rounded-md text-foreground font-mono text-sm focus:outline-none focus:border-accent";
  const cellCls = "w-full min-w-[4.5rem] h-9 px-2 bg-background border border-border rounded-md text-foreground font-mono text-sm focus:outline-none focus:border-accent";
  const rowLabelCls = "px-3 py-2 text-xs text-muted-foreground align-middle min-w-[9rem]";

  return (
    <ToolPage toolKey="shippingCost">
      <div className="space-y-6">
        <fieldset className="space-y-3">
          <legend className="font-mono text-xs text-foreground mb-2">{"//"} {s.pkg}</legend>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            <Field label={s.l} value={l} onChange={setL} suffix="cm" placeholder="40" />
            <Field label={s.w} value={w} onChange={setW} suffix="cm" placeholder="30" />
            <Field label={s.h} value={h} onChange={setH} suffix="cm" placeholder="20" />
            <Field label={s.kg} value={kg} onChange={setKg} suffix="kg" placeholder="3" />
            <Field label={s.q} value={qty} onChange={setQty} placeholder="1" />
          </div>
        </fieldset>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <label className="block">
            <span className="font-mono text-sm text-muted-foreground block mb-2">{s.divisor}</span>
            <select value={div} onChange={(e) => setDiv(e.target.value)} className={selectCls}>
              {Object.keys(s.divisors).map((d) => <option key={d} value={d}>{s.divisors[d]}</option>)}
            </select>
          </label>
          <label className="block">
            <span className="font-mono text-sm text-muted-foreground block mb-2">{s.rounding}</span>
            <select value={rounding} onChange={(e) => setRounding(e.target.value as Rounding)} className={selectCls}>
              {(Object.keys(s.roundings) as Rounding[]).map((k) => <option key={k} value={k}>{s.roundings[k]}</option>)}
            </select>
          </label>
        </div>

        <div className="border border-border rounded-lg overflow-x-auto">
          <div className="px-4 py-3 font-mono text-xs text-foreground border-b border-border">{s.tariffs}</div>
          <table className="w-full font-mono text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className={`${rowLabelCls} text-left font-normal`} scope="col">{s.tariffName}</th>
                {tariffs.map((t, i) => (
                  <th key={i} className="px-2 py-2 font-normal" scope="col">
                    <input aria-label={`${s.tariffName} ${i + 1}`} value={t.name} maxLength={16} onChange={(e) => setTariff(i, { name: e.target.value.replace(/[~|]/g, "") })} className={cellCls} />
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {limits.map((lim, k) => (
                <tr key={k} className="border-b border-border">
                  <td className={rowLabelCls}>
                    <label className="flex items-center gap-2">
                      <span>≤</span>
                      <input aria-label={`${s.upTo} ${k + 1}`} type="number" value={lim} onChange={(e) => setLimits((prev) => prev.map((x, j) => (j === k ? e.target.value : x)))} className={`${cellCls} !min-w-[3.5rem] max-w-[4.5rem]`} />
                    </label>
                  </td>
                  {tariffs.map((t, i) => (
                    <td key={i} className="px-2 py-2">
                      <input aria-label={`${t.name} ≤ ${lim}`} type="number" value={t.prices[k]} onChange={(e) => setPrice(i, k, e.target.value)} className={cellCls} />
                    </td>
                  ))}
                </tr>
              ))}
              {([
                ["extra", s.extra],
                ["service", s.service],
                ["pct", s.pct],
              ] as const).map(([key, label]) => (
                <tr key={key} className="border-b border-border last:border-0">
                  <td className={rowLabelCls}>{label}</td>
                  {tariffs.map((t, i) => (
                    <td key={i} className="px-2 py-2">
                      <input aria-label={`${t.name}: ${label}`} type="number" value={t[key]} onChange={(e) => setTariff(i, { [key]: e.target.value })} className={cellCls} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="font-mono text-xs text-muted-foreground">{s.sample}</p>

        {r.ready && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Result
                label={s.chargeable}
                value={nf(r.charge)}
                hint={`${s.rawDesi}: ${nf(r.desi)} · ${r.byKg ? s.by.kg : s.by.desi}`}
              />
              {r.best && (
                <Result
                  label={`${s.best} (${r.best.name})`}
                  value={money(r.best.total)}
                  hint={r.parcels > 1 ? `${money(r.best.parcel)} ${s.perParcel}` : undefined}
                />
              )}
            </div>

            {r.rows.length > 0 && (
              <div className="border border-border rounded-lg overflow-x-auto">
                <div className="px-4 py-3 font-mono text-xs text-foreground border-b border-border">{s.table}</div>
                <table className="w-full font-mono text-sm">
                  <thead>
                    <tr className="border-b border-border text-muted-foreground text-xs">
                      {s.cols.map((c) => <th key={c} className="px-3 py-2 text-left font-normal whitespace-nowrap">{c}</th>)}
                    </tr>
                  </thead>
                  <tbody>
                    {r.rows.map((x, i) => (
                      <tr key={i} className="border-b border-border last:border-0">
                        <td className="px-3 py-2 text-muted-foreground">{x.name}</td>
                        {x.incomplete ? (
                          <td colSpan={5} className="px-3 py-2 text-muted-foreground text-xs">{s.incomplete}</td>
                        ) : (
                          <>
                            <td className="px-3 py-2 whitespace-nowrap">{x.over ? `${s.overLast} ${nf(r.charge - x.limit)}` : `≤ ${nf(x.limit)}`}</td>
                            <td className="px-3 py-2 whitespace-nowrap">{money(x.carriage)}</td>
                            <td className="px-3 py-2 whitespace-nowrap">{money(x.parcel)}</td>
                            <td className="px-3 py-2 whitespace-nowrap text-accent">{money(x.total)}</td>
                            <td className="px-3 py-2 whitespace-nowrap">{r.best && x.total > r.best.total ? `+${money(x.total - r.best.total)}` : "—"}</td>
                          </>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {r.best && (
              <div className="border border-border rounded-lg">
                <div className="px-4 py-3 font-mono text-xs text-foreground border-b border-border">{s.tierHead} ({r.best.name})</div>
                <p className="px-4 py-3 font-mono text-xs text-muted-foreground">
                  {r.drop
                    ? s.tierDrop(nf(r.drop.limit), money(r.drop.save), Number.isFinite(r.drop.maxH) ? nf(Math.floor(r.drop.maxH * 10) / 10, 1) : "—")
                    : r.byKg || r.best.pos > 0 ? s.tierWeight : s.tierLowest}
                  {!r.best.over && r.charge < r.best.limit ? ` ${s.tierRoom(nf(r.best.limit))}` : ""}
                </p>
              </div>
            )}

            <fieldset className="space-y-3">
              <legend className="font-mono text-xs text-foreground mb-2">{"//"} {s.seller}</legend>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <Field label={s.basket} value={basket} onChange={setBasket} placeholder={locale === "en" ? "40" : "600"} />
                <Field label={s.margin} value={margin} onChange={setMargin} suffix="%" placeholder="30" />
                <Field label={s.target} value={target} onChange={setTarget} placeholder={locale === "en" ? "5" : "60"} />
                <Field label={s.orders} value={orders} onChange={setOrders} placeholder="500" />
              </div>
              <p className="font-mono text-xs text-muted-foreground">{s.sellerNote}</p>
              {(r.seller || r.monthly) && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {r.seller && <Result label={s.shareOfBasket} value={pct(r.seller.share)} />}
                  {r.seller && <Result label={s.profitAfter} value={money(r.seller.after)} hint={s.shareHint(pct(r.seller.ofGross))} />}
                  {r.seller && <Result label={s.threshold} value={money(r.seller.threshold)} hint={s.thresholdHint} />}
                  {r.monthly && <Result label={s.monthly} value={money(r.monthly.cost, 0)} hint={r.monthly.gap > 0 ? s.gap(r.monthly.worst, money(r.monthly.gap, 0)) : undefined} />}
                </div>
              )}
            </fieldset>

            <div className="flex flex-wrap gap-3">
              <button type="button" onClick={share} className="h-10 px-4 rounded-md border border-accent text-accent font-mono text-xs hover:bg-accent/10 transition-colors">
                {copied ? s.copied : s.share}
              </button>
              <a href={s.marketHref} className="min-h-10 px-4 py-2 inline-flex items-center rounded-md border border-border text-muted-foreground font-mono text-xs hover:border-accent hover:text-accent transition-colors">
                {s.toMarket}
              </a>
              <a href={s.desiHref} className="min-h-10 px-4 py-2 inline-flex items-center rounded-md border border-border text-muted-foreground font-mono text-xs hover:border-accent hover:text-accent transition-colors">
                {s.toDesi}
              </a>
            </div>
          </div>
        )}
        <p className="font-mono text-[11px] text-muted-foreground">{s.disclaimer}</p>
      </div>
    </ToolPage>
  );
}
