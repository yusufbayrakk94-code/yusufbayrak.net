import { useEffect, useMemo, useState } from "react";
import { ToolPage, Field, Result } from "@/components/tools/ToolPage";
import { useLocale } from "@/i18n/useLocale";

// Desi (volumetric weight) calculator.
//
//   desi        = L × W × H (cm) / divisor          (TR domestic: 3000)
//   chargeable  = round(max(desi, actual kg))       per package
//   shipment    = Σ chargeable_i × qty_i
//
// Divisor and rounding differ per carrier agreement, so both are selectable
// instead of hard-coding carrier-specific claims we cannot verify.

type Unit = "cm" | "mm" | "in";
type Rounding = "ceil" | "half" | "none";
interface Pkg { l: string; w: string; h: string; kg: string; q: string }

const EMPTY: Pkg = { l: "", w: "", h: "", kg: "", q: "1" };
const DIVISORS = ["3000", "4000", "5000", "6000"];

const T = {
  tr: {
    unit: "Ölçü birimi",
    units: { cm: "cm", mm: "mm", in: "inç" },
    divisor: "Bölen (hacim katsayısı)",
    divisorHints: {
      "3000": "3000 — Türkiye yurt içi kargoda yaygın",
      "4000": "4000 — bazı anlaşmalı tarifeler",
      "5000": "5000 — uluslararası hava kargo (DHL, UPS, FedEx standardı)",
      "6000": "6000 — bazı ekonomi / kara-deniz hizmetleri",
      custom: "Özel bölen",
    } as Record<string, string>,
    customDivisor: "Özel bölen",
    rounding: "Yuvarlama",
    roundings: { ceil: "Yukarı tam sayıya (yaygın)", half: "0,5'e yukarı", none: "Yuvarlama yok" },
    pkg: "Koli",
    l: "En",
    w: "Boy",
    h: "Yükseklik",
    kg: "Gerçek ağırlık",
    q: "Adet",
    add: "+ Koli ekle",
    remove: "Kaldır",
    rate: "Desi/kg başı kargo ücreti (opsiyonel)",
    rateNote: "Anlaşmanızdaki desi başı fiyatı ve varsa koli başı sabit ücreti girerseniz tahmini kargo ücreti hesaplanır: Ücret = Koli sayısı × sabit ücret + Ücrete esas desi × desi başı fiyat. Kademeli tarifelerde ilgili kademenin fiyatını veya ortalama birim fiyatı kullanın.",
    base: "Koli başı sabit ücret (opsiyonel)",
    perParcel: "Koli başı ortalama ücret",
    desi: "Toplam desi",
    desiHint: "Yuvarlama öncesi hacimsel ağırlık",
    chargeable: "Ücrete esas ağırlık (desi/kg)",
    chargeableHint: "Her koli için desi ile kg'dan büyük olan, yuvarlanmış ve toplanmış",
    cost: "Tahmini kargo ücreti",
    by: { desi: "desi belirledi", kg: "ağırlık belirledi" },
    table: "Koli bazında sonuç",
    cols: ["Koli", "Hacim (cm³)", "Desi", "Kg", "Esas", "Adet", "Toplam"],
    optimize: "Kutu küçülürse ne değişir? (1. koli, her ölçüden)",
    optCols: ["Her ölçüden küçültme", "Ölçü (cm)", "Esas desi", "Fark"],
    targetH: "1. kolide esas ağırlığı 1 desi düşürmek için yükseklik en fazla",
    unreachable: "Ağırlık belirliyor — kutu küçültmek ücreti düşürmez",
    share: "Bu hesabı paylaş",
    copied: "Link kopyalandı",
    toMarket: "Kargo ücretini kâr hesabına taşı → Trendyol & Hepsiburada Kâr Hesaplama",
    marketHref: "/ucretsiz-araclar/trendyol-hepsiburada-kar-hesaplama/",
    disclaimer: "Sonuç bilgi amaçlıdır; kesin desi kargo firmasının ölçümüne ve sözleşmenizdeki bölen/yuvarlama kuralına göre belirlenir.",
  },
  en: {
    unit: "Unit",
    units: { cm: "cm", mm: "mm", in: "inch" },
    divisor: "Divisor (volumetric factor)",
    divisorHints: {
      "3000": "3000 — common for domestic shipping in Turkey",
      "4000": "4000 — some negotiated rates",
      "5000": "5000 — international air express (DHL, UPS, FedEx standard)",
      "6000": "6000 — some economy / road-sea services",
      custom: "Custom divisor",
    } as Record<string, string>,
    customDivisor: "Custom divisor",
    rounding: "Rounding",
    roundings: { ceil: "Up to whole number (common)", half: "Up to 0.5", none: "No rounding" },
    pkg: "Box",
    l: "Length",
    w: "Width",
    h: "Height",
    kg: "Actual weight",
    q: "Qty",
    add: "+ Add box",
    remove: "Remove",
    rate: "Rate per desi/kg (optional)",
    rateNote: "Enter your contracted rate per desi/kg and, if any, a fixed fee per parcel to estimate the shipping cost: Cost = Parcels × fixed fee + Chargeable desi × rate. For tiered price lists use the rate of the relevant tier or your average unit rate.",
    base: "Fixed fee per parcel (optional)",
    perParcel: "Average cost per parcel",
    desi: "Total desi (volumetric weight)",
    desiHint: "Before rounding",
    chargeable: "Chargeable weight (desi/kg)",
    chargeableHint: "Per box, the larger of desi and kg — rounded, then summed",
    cost: "Estimated shipping cost",
    by: { desi: "volume decides", kg: "weight decides" },
    table: "Per-box result",
    cols: ["Box", "Volume (cm³)", "Desi", "Kg", "Chargeable", "Qty", "Total"],
    optimize: "What if the box were smaller? (box 1, every dimension)",
    optCols: ["Reduction per dimension", "Size (cm)", "Chargeable", "Change"],
    targetH: "Max height for box 1 to drop one chargeable unit",
    unreachable: "Weight decides — a smaller box won't lower the charge",
    share: "Share this calculation",
    copied: "Link copied",
    toMarket: "Use the shipping cost in a profit calculation → Marketplace Profit Calculator",
    marketHref: "/en/free-tools/marketplace-profit-calculator/",
    disclaimer: "For guidance only; the billed desi depends on the carrier's own measurement and the divisor/rounding in your contract.",
  },
};

const num = (v: string) => {
  const n = parseFloat(String(v).replace(",", "."));
  return Number.isFinite(n) && n > 0 ? n : 0;
};

function roundCharge(x: number, mode: Rounding) {
  if (mode === "ceil") return Math.ceil(x - 1e-9);
  if (mode === "half") return Math.ceil(x * 2 - 1e-9) / 2;
  return x;
}

export default function DesiCalculator() {
  const locale = useLocale();
  const s = locale === "en" ? T.en : T.tr;
  const nf = (n: number, d = 2) =>
    n.toLocaleString(locale === "en" ? "en-US" : "tr-TR", { maximumFractionDigits: d });
  const fmtMoney = (n: number) =>
    new Intl.NumberFormat(locale === "en" ? "en-US" : "tr-TR", { style: "currency", currency: "TRY", maximumFractionDigits: 2 }).format(n);

  const [unit, setUnit] = useState<Unit>("cm");
  const [div, setDiv] = useState("3000");
  const [customDiv, setCustomDiv] = useState("");
  const [rounding, setRounding] = useState<Rounding>("ceil");
  const [pkgs, setPkgs] = useState<Pkg[]>([{ ...EMPTY }]);
  const [rate, setRate] = useState("");
  const [base, setBase] = useState("");
  const [copied, setCopied] = useState(false);

  // Restore from URL: p=L-W-H-KG-Q_L-W-H-KG-Q, d, cd, r, u, pr
  useEffect(() => {
    try {
      const q = new URLSearchParams(window.location.search);
      const u = q.get("u");
      if (u === "cm" || u === "mm" || u === "in") setUnit(u);
      const d = q.get("d");
      if (d) setDiv(d);
      const cd = q.get("cd");
      if (cd) setCustomDiv(cd);
      const r = q.get("r");
      if (r === "ceil" || r === "half" || r === "none") setRounding(r);
      const pr = q.get("pr");
      if (pr) setRate(pr);
      const pb = q.get("pb");
      if (pb) setBase(pb);
      const p = q.get("p");
      if (p) {
        const parsed = p.split("_").slice(0, 20).map((chunk) => {
          const [l = "", w = "", h = "", kg = "", qq = "1"] = chunk.split("-");
          return { l, w, h, kg, q: qq || "1" };
        });
        if (parsed.length) setPkgs(parsed);
      }
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    try {
      const q = new URLSearchParams();
      const p = pkgs.map((x) => [x.l, x.w, x.h, x.kg, x.q].join("-")).join("_");
      if (pkgs.some((x) => x.l || x.w || x.h || x.kg)) q.set("p", p);
      if (unit !== "cm") q.set("u", unit);
      if (div !== "3000") q.set("d", div);
      if (div === "custom" && customDiv) q.set("cd", customDiv);
      if (rounding !== "ceil") q.set("r", rounding);
      if (rate) q.set("pr", rate);
      if (base) q.set("pb", base);
      const qs = q.toString();
      window.history.replaceState(null, "", qs ? `${window.location.pathname}?${qs}` : window.location.pathname);
    } catch {
      /* ignore */
    }
  }, [pkgs, unit, div, customDiv, rounding, rate, base]);

  const toCm = unit === "mm" ? 0.1 : unit === "in" ? 2.54 : 1;
  const divisor = div === "custom" ? num(customDiv) : num(div);

  const r = useMemo(() => {
    const rows = pkgs.map((p) => {
      const l = num(p.l) * toCm, w = num(p.w) * toCm, h = num(p.h) * toCm;
      const vol = l * w * h;
      const desi = divisor > 0 ? vol / divisor : 0;
      const kg = num(p.kg);
      const qty = Math.max(1, Math.round(num(p.q) || 1));
      const charge = roundCharge(Math.max(desi, kg), rounding);
      return { l, w, h, vol, desi, kg, qty, charge, total: charge * qty, byKg: kg > desi };
    });
    const ready = rows.some((x) => x.vol > 0 || x.kg > 0) && divisor > 0;
    const totalDesi = rows.reduce((a, x) => a + x.desi * x.qty, 0);
    const totalCharge = rows.reduce((a, x) => a + x.total, 0);
    const price = num(rate);
    const baseFee = num(base);
    const parcels = rows.reduce((a, x) => a + (x.vol > 0 || x.kg > 0 ? x.qty : 0), 0);
    const cost = totalCharge * price + parcels * baseFee;
    const first = rows[0];
    const opt = first && first.vol > 0
      ? [1, 2, 3, 5].map((c) => {
          const l = Math.max(first.l - c, 0), w = Math.max(first.w - c, 0), h = Math.max(first.h - c, 0);
          const charge = roundCharge(Math.max((l * w * h) / divisor, first.kg), rounding);
          return { c, l, w, h, charge, diff: charge - first.charge };
        })
      : [];
    // Height that brings box 1 one chargeable unit lower (if volume decides).
    const step = rounding === "half" ? 0.5 : 1;
    const target = first ? first.charge - step : 0;
    const maxH = first && !first.byKg && first.l > 0 && first.w > 0 && target > first.kg && target > 0
      ? (target * divisor) / (first.l * first.w)
      : NaN;
    return { rows, ready, totalDesi, totalCharge, price, baseFee, parcels, cost, opt, maxH, first };
  }, [pkgs, toCm, divisor, rounding, rate, base]);

  const update = (i: number, key: keyof Pkg, v: string) =>
    setPkgs((prev) => prev.map((p, j) => (j === i ? { ...p, [key]: v } : p)));

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
  const u = s.units[unit];

  return (
    <ToolPage toolKey="desi">
      <div className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <label className="block">
            <span className="font-mono text-sm text-muted-foreground block mb-2">{s.divisor}</span>
            <select value={div} onChange={(e) => setDiv(e.target.value)} className={selectCls}>
              {[...DIVISORS, "custom"].map((d) => (
                <option key={d} value={d}>{s.divisorHints[d]}</option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="font-mono text-sm text-muted-foreground block mb-2">{s.rounding}</span>
            <select value={rounding} onChange={(e) => setRounding(e.target.value as Rounding)} className={selectCls}>
              {(Object.keys(s.roundings) as Rounding[]).map((k) => (
                <option key={k} value={k}>{s.roundings[k]}</option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="font-mono text-sm text-muted-foreground block mb-2">{s.unit}</span>
            <select value={unit} onChange={(e) => setUnit(e.target.value as Unit)} className={selectCls}>
              {(Object.keys(s.units) as Unit[]).map((k) => (
                <option key={k} value={k}>{s.units[k]}</option>
              ))}
            </select>
          </label>
        </div>
        {div === "custom" && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Field label={s.customDivisor} value={customDiv} onChange={setCustomDiv} placeholder="3000" />
          </div>
        )}

        {pkgs.map((p, i) => (
          <fieldset key={i} className="space-y-3">
            <legend className="font-mono text-xs text-foreground mb-2 flex items-center gap-3">
              <span>{"//"} {s.pkg} {i + 1}</span>
              {pkgs.length > 1 && (
                <button type="button" onClick={() => setPkgs((prev) => prev.filter((_, j) => j !== i))} className="text-muted-foreground hover:text-accent underline">
                  {s.remove}
                </button>
              )}
            </legend>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              <Field label={s.l} value={p.l} onChange={(v) => update(i, "l", v)} suffix={u} placeholder="40" />
              <Field label={s.w} value={p.w} onChange={(v) => update(i, "w", v)} suffix={u} placeholder="30" />
              <Field label={s.h} value={p.h} onChange={(v) => update(i, "h", v)} suffix={u} placeholder="20" />
              <Field label={s.kg} value={p.kg} onChange={(v) => update(i, "kg", v)} suffix="kg" placeholder="3" />
              <Field label={s.q} value={p.q} onChange={(v) => update(i, "q", v)} placeholder="1" />
            </div>
          </fieldset>
        ))}
        {pkgs.length < 20 && (
          <button type="button" onClick={() => setPkgs((prev) => [...prev, { ...EMPTY }])} className="h-10 px-4 rounded-md border border-border text-muted-foreground font-mono text-xs hover:border-accent hover:text-accent transition-colors">
            {s.add}
          </button>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Field label={s.rate} value={rate} onChange={setRate} suffix="₺" placeholder="12" />
          <Field label={s.base} value={base} onChange={setBase} suffix="₺" placeholder="0" />
        </div>
        <p className="font-mono text-xs text-muted-foreground">{s.rateNote}</p>

        {r.ready && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Result label={s.desi} value={nf(r.totalDesi)} hint={s.desiHint} />
              <Result
                label={s.chargeable}
                value={nf(r.totalCharge)}
                hint={r.rows.length === 1 && r.first ? `${s.chargeableHint} · ${r.first.byKg ? s.by.kg : s.by.desi}` : s.chargeableHint}
              />
              {(r.price > 0 || r.baseFee > 0) && <Result label={s.cost} value={fmtMoney(r.cost)} />}
              {(r.price > 0 || r.baseFee > 0) && r.parcels > 1 && <Result label={s.perParcel} value={fmtMoney(r.cost / r.parcels)} />}
            </div>

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
                      <td className="px-3 py-2 text-muted-foreground">{i + 1}</td>
                      <td className="px-3 py-2">{nf(x.vol, 0)}</td>
                      <td className="px-3 py-2">{nf(x.desi)}</td>
                      <td className="px-3 py-2">{nf(x.kg)}</td>
                      <td className="px-3 py-2 text-accent">{nf(x.charge)}</td>
                      <td className="px-3 py-2">{x.qty}</td>
                      <td className="px-3 py-2">{nf(x.total)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {r.first && r.first.vol > 0 && (
              <div className="border border-border rounded-lg overflow-x-auto">
                <div className="px-4 py-3 font-mono text-xs text-foreground border-b border-border">{s.optimize}</div>
                {r.first.byKg ? (
                  <p className="px-4 py-3 font-mono text-xs text-muted-foreground">{s.unreachable}</p>
                ) : (
                  <table className="w-full font-mono text-sm">
                    <thead>
                      <tr className="border-b border-border text-muted-foreground text-xs">
                        {s.optCols.map((c) => <th key={c} className="px-3 py-2 text-left font-normal whitespace-nowrap">{c}</th>)}
                      </tr>
                    </thead>
                    <tbody>
                      {r.opt.map((o) => (
                        <tr key={o.c} className="border-b border-border last:border-0">
                          <td className="px-3 py-2 text-muted-foreground">−{o.c} cm</td>
                          <td className="px-3 py-2 whitespace-nowrap">{nf(o.l, 1)} × {nf(o.w, 1)} × {nf(o.h, 1)}</td>
                          <td className="px-3 py-2">{nf(o.charge)}</td>
                          <td className="px-3 py-2 text-accent">{nf(o.diff)}{r.price > 0 ? ` (${fmtMoney(o.diff * r.price)})` : ""}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
                {Number.isFinite(r.maxH) && r.maxH > 0 && (
                  <p className="px-4 py-3 font-mono text-xs text-muted-foreground border-t border-border">
                    {s.targetH}: <span className="text-accent">{nf(Math.floor(r.maxH * 10) / 10, 1)} cm</span>
                  </p>
                )}
              </div>
            )}

            <div className="flex flex-wrap gap-3">
              <button type="button" onClick={share} className="h-10 px-4 rounded-md border border-accent text-accent font-mono text-xs hover:bg-accent/10 transition-colors">
                {copied ? s.copied : s.share}
              </button>
              <a href={s.marketHref} className="h-10 px-4 inline-flex items-center rounded-md border border-border text-muted-foreground font-mono text-xs hover:border-accent hover:text-accent transition-colors">
                {s.toMarket}
              </a>
            </div>
          </div>
        )}
        <p className="font-mono text-[11px] text-muted-foreground">{s.disclaimer}</p>
      </div>
    </ToolPage>
  );
}
