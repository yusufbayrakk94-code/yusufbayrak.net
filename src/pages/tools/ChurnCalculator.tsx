import { useState, useMemo } from "react";
import { ToolPage, Field, Result, useCurrencyFormatter } from "@/components/tools/ToolPage";
import { useLocale } from "@/i18n/useLocale";

// Customer churn + derived annual churn and lifetime, plus optional revenue
// (MRR) churn: gross revenue churn and net revenue churn (after expansion).
// Annual from monthly compounds: 1 − (1 − m)^12 (not m × 12).

const strings = {
  tr: {
    start: "Dönem Başı Müşteri Sayısı", lost: "Kaybedilen Müşteri Sayısı",
    churn: "Aylık Churn Rate", retention: "Elde Tutma Oranı (Retention)",
    hint: "Churn = (Kaybedilen / Dönem başı müşteri) × 100",
    annual: "Yıllık Churn (bileşik)", annualHint: "1 − (1 − aylık churn)^12 — aylık × 12 değil",
    lifetime: "Ortalama Müşteri Ömrü", months: "ay", lifetimeHint: "1 / aylık churn",
    revTitle: "Gelir churn'ü (opsiyonel)",
    startMrr: "Dönem Başı MRR", lostMrr: "İptal + Daralma MRR", expMrr: "Genişleme MRR (upsell)",
    gross: "Brüt Gelir Churn'ü", net: "Net Gelir Churn'ü",
    netHint: "Negatifse mevcut müşterilerden gelen büyüme kayıpları aşıyor (negatif churn).",
  },
  en: {
    start: "Starting Customers", lost: "Lost Customers",
    churn: "Monthly Churn Rate", retention: "Retention Rate",
    hint: "Churn = (Lost / Starting customers) × 100",
    annual: "Annual Churn (compounded)", annualHint: "1 − (1 − monthly churn)^12 — not monthly × 12",
    lifetime: "Average Customer Lifetime", months: "months", lifetimeHint: "1 / monthly churn",
    revTitle: "Revenue churn (optional)",
    startMrr: "Starting MRR", lostMrr: "Cancelled + Contraction MRR", expMrr: "Expansion MRR (upsell)",
    gross: "Gross Revenue Churn", net: "Net Revenue Churn",
    netHint: "Negative means growth from existing customers outweighs losses (negative churn).",
  },
};

export default function ChurnCalculator() {
  const locale = useLocale();
  const s = strings[locale];
  const fmt = useCurrencyFormatter();
  const nf = (n: number, d = 2) => n.toLocaleString(locale === "en" ? "en-US" : "tr-TR", { maximumFractionDigits: d });
  const cur = locale === "en" ? "$" : "₺";
  const [start, setStart] = useState(""); const [lost, setLost] = useState("");
  const [startMrr, setStartMrr] = useState(""); const [lostMrr, setLostMrr] = useState(""); const [expMrr, setExpMrr] = useState("");

  const c = useMemo(() => {
    const st = parseFloat(start); const l = parseFloat(lost);
    if (!st || st <= 0 || isNaN(l)) return null;
    const m = l / st;
    return { m, annual: 1 - Math.pow(1 - Math.min(m, 1), 12), lifetime: m > 0 ? 1 / m : NaN };
  }, [start, lost]);

  const rev = useMemo(() => {
    const sm = parseFloat(startMrr); const lm = parseFloat(lostMrr) || 0; const em = parseFloat(expMrr) || 0;
    if (!sm || sm <= 0) return null;
    return { gross: lm / sm, net: (lm - em) / sm };
  }, [startMrr, lostMrr, expMrr]);

  return (
    <ToolPage toolKey="churn">
      <div className="space-y-5">
        <div className="grid grid-cols-2 gap-4">
          <Field label={s.start} value={start} onChange={setStart} placeholder="1000" />
          <Field label={s.lost} value={lost} onChange={setLost} placeholder="50" />
        </div>
        <Result label={s.churn} value={`%${nf((c?.m ?? 0) * 100)}`} hint={s.hint} />
        <Result label={s.retention} value={`%${nf(100 - (c?.m ?? 0) * 100)}`} />
        {c && c.m > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Result label={s.annual} value={`%${nf(c.annual * 100, 1)}`} hint={s.annualHint} />
            <Result label={s.lifetime} value={`${nf(c.lifetime, 1)} ${s.months}`} hint={s.lifetimeHint} />
          </div>
        )}
        <div className="pt-2 font-mono text-xs text-foreground">{"//"} {s.revTitle}</div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Field label={s.startMrr} value={startMrr} onChange={setStartMrr} suffix={cur} placeholder="200000" />
          <Field label={s.lostMrr} value={lostMrr} onChange={setLostMrr} suffix={cur} placeholder="8000" />
          <Field label={s.expMrr} value={expMrr} onChange={setExpMrr} suffix={cur} placeholder="5000" />
        </div>
        {rev && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Result label={s.gross} value={`%${nf(rev.gross * 100)}`} hint={fmt(parseFloat(lostMrr) || 0, 0)} />
            <Result label={s.net} value={`%${nf(rev.net * 100)}`} hint={s.netHint} />
          </div>
        )}
      </div>
    </ToolPage>
  );
}
