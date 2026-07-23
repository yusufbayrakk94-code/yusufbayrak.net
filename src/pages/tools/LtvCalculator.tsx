import { useState, useMemo } from "react";
import { ToolPage, Field, Result, useCurrencyFormatter } from "@/components/tools/ToolPage";
import { useLocale } from "@/i18n/useLocale";

const strings = {
  tr: { arpu: "Aylık ARPU", margin: "Brüt Marj (%)", churn: "Aylık Churn (%)", cac: "CAC (opsiyonel)", ltv: "Müşteri Yaşam Boyu Değeri (LTV)", ratio: "LTV / CAC Oranı", hintLtv: "LTV = (ARPU × Brüt Marj) / Aylık Churn Oranı", hintRatio: "Hedef: ≥ 3x" },
  en: { arpu: "Monthly ARPU", margin: "Gross Margin (%)", churn: "Monthly Churn (%)", cac: "CAC (optional)", ltv: "Customer Lifetime Value (LTV)", ratio: "LTV / CAC Ratio", hintLtv: "LTV = (ARPU × Gross Margin) / Monthly Churn", hintRatio: "Target: ≥ 3x" },
};

export default function LtvCalculator() {
  const locale = useLocale();
  const s = strings[locale];
  const fmt = useCurrencyFormatter();
  const [arpu, setArpu] = useState(""); const [margin, setMargin] = useState(""); const [churn, setChurn] = useState(""); const [cac, setCac] = useState("");
  const { ltv, ratio } = useMemo(() => {
    const a = parseFloat(arpu) || 0; const m = (parseFloat(margin) || 100) / 100; const c = parseFloat(churn);
    if (!c || c <= 0) return { ltv: 0, ratio: 0 };
    const ltv = (a * m) / (c / 100);
    const cacNum = parseFloat(cac);
    const ratio = cacNum && cacNum > 0 ? ltv / cacNum : 0;
    return { ltv, ratio };
  }, [arpu, margin, churn, cac]);

  return (
    <ToolPage toolKey="ltv">
      <div className="space-y-5">
        <div className="grid grid-cols-2 gap-4">
          <Field label={s.arpu} value={arpu} onChange={setArpu} suffix={locale === "en" ? "$" : "₺"} placeholder="500" />
          <Field label={s.margin} value={margin} onChange={setMargin} suffix="%" placeholder="80" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Field label={s.churn} value={churn} onChange={setChurn} suffix="%" placeholder="5" />
          <Field label={s.cac} value={cac} onChange={setCac} suffix={locale === "en" ? "$" : "₺"} placeholder="1500" />
        </div>
        <Result label={s.ltv} value={fmt(ltv)} hint={s.hintLtv} />
        {ratio > 0 && <Result label={s.ratio} value={`${ratio.toFixed(2)}x`} hint={s.hintRatio} />}
      </div>
    </ToolPage>
  );
}
