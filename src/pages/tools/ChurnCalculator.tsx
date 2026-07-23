import { useState, useMemo } from "react";
import { ToolPage, Field, Result } from "@/components/tools/ToolPage";

export default function ChurnCalculator() {
  const [start, setStart] = useState("");
  const [lost, setLost] = useState("");

  const churn = useMemo(() => {
    const s = parseFloat(start);
    const l = parseFloat(lost);
    if (!s || s <= 0 || isNaN(l)) return 0;
    return (l / s) * 100;
  }, [start, lost]);

  const retention = 100 - churn;

  return (
    <ToolPage
      title="Churn Rate Hesaplayıcı"
      description="Müşteri kayıp oranınızı (churn rate) dönem başındaki müşteri sayısı ve kaybedilen müşteri sayısıyla hesaplayın."
      path="/ucretsiz-araclar/churn-rate-hesaplayici"
      intro="Churn Rate, belirli bir dönemde kaybettiğiniz müşteri oranıdır. Düşük churn, sağlıklı bir SaaS büyümesinin en önemli göstergelerinden biridir."
    >
      <div className="space-y-5">
        <div className="grid grid-cols-2 gap-4">
          <Field label="Dönem Başı Müşteri Sayısı" value={start} onChange={setStart} placeholder="1000" />
          <Field label="Kaybedilen Müşteri Sayısı" value={lost} onChange={setLost} placeholder="50" />
        </div>
        <Result label="Churn Rate" value={`%${churn.toFixed(2)}`} hint="Churn = (Kaybedilen / Başlangıç) × 100" />
        <Result label="Elde Tutma Oranı (Retention)" value={`%${retention.toFixed(2)}`} />
      </div>
    </ToolPage>
  );
}