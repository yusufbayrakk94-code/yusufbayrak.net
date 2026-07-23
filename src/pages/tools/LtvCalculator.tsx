import { useState, useMemo } from "react";
import { ToolPage, Field, Result } from "@/components/tools/ToolPage";

const fmt = (n: number) =>
  new Intl.NumberFormat("tr-TR", { style: "currency", currency: "TRY", maximumFractionDigits: 2 }).format(n);

export default function LtvCalculator() {
  const [arpu, setArpu] = useState("");
  const [margin, setMargin] = useState("");
  const [churn, setChurn] = useState("");
  const [cac, setCac] = useState("");

  const { ltv, ratio } = useMemo(() => {
    const a = parseFloat(arpu) || 0;
    const m = (parseFloat(margin) || 100) / 100;
    const c = parseFloat(churn);
    if (!c || c <= 0) return { ltv: 0, ratio: 0 };
    const ltv = (a * m) / (c / 100);
    const cacNum = parseFloat(cac);
    const ratio = cacNum && cacNum > 0 ? ltv / cacNum : 0;
    return { ltv, ratio };
  }, [arpu, margin, churn, cac]);

  return (
    <ToolPage
      title="LTV Hesaplayıcı"
      description="Müşteri yaşam boyu değerini (LTV) ARPU, brüt marj ve churn oranıyla hesaplayın; CAC ile karşılaştırın."
      path="/ucretsiz-araclar/ltv-hesaplayici"
      intro="LTV (Lifetime Value), bir müşterinin ilişki süresi boyunca ürettiği toplam gelirin bugünkü değeridir. Sağlıklı bir işletme için LTV/CAC oranının 3 ve üzeri olması hedeflenir."
    >
      <div className="space-y-5">
        <div className="grid grid-cols-2 gap-4">
          <Field label="Aylık ARPU" value={arpu} onChange={setArpu} suffix="₺" placeholder="500" />
          <Field label="Brüt Marj (%)" value={margin} onChange={setMargin} suffix="%" placeholder="80" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Field label="Aylık Churn (%)" value={churn} onChange={setChurn} suffix="%" placeholder="5" />
          <Field label="CAC (opsiyonel)" value={cac} onChange={setCac} suffix="₺" placeholder="1500" />
        </div>
        <Result label="Müşteri Yaşam Boyu Değeri (LTV)" value={fmt(ltv)} hint="LTV = (ARPU × Brüt Marj) / Aylık Churn Oranı" />
        {ratio > 0 && (
          <Result label="LTV / CAC Oranı" value={`${ratio.toFixed(2)}x`} hint="Hedef: ≥ 3x" />
        )}
      </div>
    </ToolPage>
  );
}