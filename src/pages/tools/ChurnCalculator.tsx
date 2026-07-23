import { useState, useMemo } from "react";
import { ToolPage, Field, Result } from "@/components/tools/ToolPage";
import { useLocale } from "@/i18n/useLocale";

const strings = {
  tr: { start: "Dönem Başı Müşteri Sayısı", lost: "Kaybedilen Müşteri Sayısı", churn: "Churn Rate", retention: "Elde Tutma Oranı (Retention)", hint: "Churn = (Kaybedilen / Başlangıç) × 100" },
  en: { start: "Starting Customers", lost: "Lost Customers", churn: "Churn Rate", retention: "Retention Rate", hint: "Churn = (Lost / Starting) × 100" },
};

export default function ChurnCalculator() {
  const s = strings[useLocale()];
  const [start, setStart] = useState(""); const [lost, setLost] = useState("");
  const churn = useMemo(() => {
    const st = parseFloat(start); const l = parseFloat(lost);
    if (!st || st <= 0 || isNaN(l)) return 0;
    return (l / st) * 100;
  }, [start, lost]);
  const retention = 100 - churn;
  return (
    <ToolPage toolKey="churn">
      <div className="space-y-5">
        <div className="grid grid-cols-2 gap-4">
          <Field label={s.start} value={start} onChange={setStart} placeholder="1000" />
          <Field label={s.lost} value={lost} onChange={setLost} placeholder="50" />
        </div>
        <Result label={s.churn} value={`%${churn.toFixed(2)}`} hint={s.hint} />
        <Result label={s.retention} value={`%${retention.toFixed(2)}`} />
      </div>
    </ToolPage>
  );
}
