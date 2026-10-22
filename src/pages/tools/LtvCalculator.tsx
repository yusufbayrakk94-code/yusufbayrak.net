import { useState, useMemo } from "react";
import { ToolPage, Field, Result, useCurrencyFormatter } from "@/components/tools/ToolPage";
import { useLocale } from "@/i18n/useLocale";

// Two LTV models:
//  - SaaS / subscription: (ARPU × gross margin) / monthly churn
//  - E-commerce: AOV × orders per year × customer lifespan (years) × gross margin
// Both are margin-based (profit LTV, not revenue LTV). Optional CAC gives the
// LTV:CAC ratio.

type Mode = "saas" | "ecom";

const strings = {
  tr: {
    modes: { saas: "SaaS / Abonelik", ecom: "E-ticaret" },
    arpu: "Aylık ARPU", margin: "Brüt Marj (%)", churn: "Aylık Churn (%)", cac: "CAC (opsiyonel)",
    aov: "Ortalama Sipariş Tutarı", freq: "Yıllık Sipariş Sayısı (müşteri başı)", years: "Müşteri Ömrü (yıl)",
    ltv: "Müşteri Yaşam Boyu Değeri (LTV)", ratio: "LTV / CAC Oranı",
    revLtv: "Ciro bazlı LTV (karşılaştırma için)",
    hintSaas: "LTV = (ARPU × Brüt Marj) / Aylık Churn Oranı",
    hintEcom: "LTV = Sipariş Tutarı × Yıllık Sipariş × Ömür × Brüt Marj",
    hintRatio: "Hedef: ≥ 3x. 1x'in altı: her müşteri zarar ettiriyor.",
  },
  en: {
    modes: { saas: "SaaS / Subscription", ecom: "E-commerce" },
    arpu: "Monthly ARPU", margin: "Gross Margin (%)", churn: "Monthly Churn (%)", cac: "CAC (optional)",
    aov: "Average Order Value", freq: "Orders per Year (per customer)", years: "Customer Lifespan (years)",
    ltv: "Customer Lifetime Value (LTV)", ratio: "LTV / CAC Ratio",
    revLtv: "Revenue-based LTV (for comparison)",
    hintSaas: "LTV = (ARPU × Gross Margin) / Monthly Churn",
    hintEcom: "LTV = AOV × Orders per Year × Lifespan × Gross Margin",
    hintRatio: "Target: ≥ 3x. Below 1x: every customer loses money.",
  },
};

export default function LtvCalculator() {
  const locale = useLocale();
  const s = strings[locale];
  const fmt = useCurrencyFormatter();
  const cur = locale === "en" ? "$" : "₺";
  const [mode, setMode] = useState<Mode>("saas");
  const [arpu, setArpu] = useState(""); const [margin, setMargin] = useState(""); const [churn, setChurn] = useState(""); const [cac, setCac] = useState("");
  const [aov, setAov] = useState(""); const [freq, setFreq] = useState(""); const [years, setYears] = useState("");

  const { ltv, revLtv, ratio } = useMemo(() => {
    const m = (parseFloat(margin) || 100) / 100;
    let rev = 0;
    if (mode === "saas") {
      const a = parseFloat(arpu) || 0; const c = parseFloat(churn);
      if (c && c > 0) rev = a / (c / 100);
    } else {
      rev = (parseFloat(aov) || 0) * (parseFloat(freq) || 0) * (parseFloat(years) || 0);
    }
    const ltv = rev * m;
    const cacNum = parseFloat(cac);
    return { ltv, revLtv: rev, ratio: cacNum && cacNum > 0 ? ltv / cacNum : 0 };
  }, [mode, arpu, margin, churn, cac, aov, freq, years]);

  return (
    <ToolPage toolKey="ltv">
      <div className="space-y-5">
        <div className="grid grid-cols-2 gap-2" role="radiogroup">
          {(["saas", "ecom"] as Mode[]).map((m) => (
            <button
              key={m}
              type="button"
              role="radio"
              aria-checked={mode === m}
              onClick={() => setMode(m)}
              className={`h-11 rounded-md border font-mono text-xs transition-colors ${
                mode === m ? "border-accent bg-accent/10 text-accent" : "border-border text-muted-foreground hover:border-accent"
              }`}
            >
              {s.modes[m]}
            </button>
          ))}
        </div>
        {mode === "saas" ? (
          <div className="grid grid-cols-2 gap-4">
            <Field label={s.arpu} value={arpu} onChange={setArpu} suffix={cur} placeholder="500" />
            <Field label={s.churn} value={churn} onChange={setChurn} suffix="%" placeholder="5" />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Field label={s.aov} value={aov} onChange={setAov} suffix={cur} placeholder="650" />
            <Field label={s.freq} value={freq} onChange={setFreq} placeholder="3" />
            <Field label={s.years} value={years} onChange={setYears} placeholder="2" />
          </div>
        )}
        <div className="grid grid-cols-2 gap-4">
          <Field label={s.margin} value={margin} onChange={setMargin} suffix="%" placeholder={mode === "saas" ? "80" : "40"} />
          <Field label={s.cac} value={cac} onChange={setCac} suffix={cur} placeholder="1500" />
        </div>
        <Result label={s.ltv} value={fmt(ltv)} hint={mode === "saas" ? s.hintSaas : s.hintEcom} />
        {revLtv > 0 && revLtv !== ltv && <Result label={s.revLtv} value={fmt(revLtv)} />}
        {ratio > 0 && <Result label={s.ratio} value={`${ratio.toLocaleString(locale === "en" ? "en-US" : "tr-TR", { maximumFractionDigits: 2 })}x`} hint={s.hintRatio} />}
      </div>
    </ToolPage>
  );
}
