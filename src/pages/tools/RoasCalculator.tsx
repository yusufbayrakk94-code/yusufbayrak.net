import { useState, useMemo } from "react";
import { ToolPage, Field, Result } from "@/components/tools/ToolPage";

const fmt = (n: number) =>
  new Intl.NumberFormat("tr-TR", { style: "currency", currency: "TRY", maximumFractionDigits: 2 }).format(n);

export default function RoasCalculator() {
  const [revenue, setRevenue] = useState("");
  const [spend, setSpend] = useState("");

  const { roas, roi } = useMemo(() => {
    const r = parseFloat(revenue) || 0;
    const s = parseFloat(spend);
    if (!s || s <= 0) return { roas: 0, roi: 0 };
    return { roas: r / s, roi: ((r - s) / s) * 100 };
  }, [revenue, spend]);

  return (
    <ToolPage
      title="ROAS Hesaplayıcı"
      description="Reklam harcaması getiri oranınızı (ROAS) reklam gelirini reklam harcamasına oranlayarak hesaplayın."
      path="/ucretsiz-araclar/roas-hesaplayici"
      intro="ROAS (Return on Ad Spend), reklam harcamalarınızın kaç katı gelir ürettiğini gösterir. Kampanya karlılığını ölçmek için en yaygın kullanılan performans metriğidir."
    >
      <div className="space-y-5">
        <div className="grid grid-cols-2 gap-4">
          <Field label="Reklamdan Gelen Gelir" value={revenue} onChange={setRevenue} suffix="₺" placeholder="100000" />
          <Field label="Reklam Harcaması" value={spend} onChange={setSpend} suffix="₺" placeholder="25000" />
        </div>
        <Result label="ROAS" value={`${roas.toFixed(2)}x`} hint="ROAS = Reklam Geliri / Reklam Harcaması" />
        <Result label="Net Kâr" value={fmt((parseFloat(revenue) || 0) - (parseFloat(spend) || 0))} />
        <Result label="ROI" value={`%${roi.toFixed(2)}`} />
      </div>
    </ToolPage>
  );
}