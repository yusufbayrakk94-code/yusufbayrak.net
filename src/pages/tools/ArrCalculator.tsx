import { useState, useMemo } from "react";
import { ToolPage, Field, Result, useCurrencyFormatter } from "@/components/tools/ToolPage";
import { useLocale } from "@/i18n/useLocale";

const strings = {
  tr: { mrr: "Aylık Yinelenen Gelir (MRR)", or: "— veya —", customers: "Müşteri Sayısı", arpu: "Ortalama Aylık Gelir (ARPU)", arr: "Yıllık Yinelenen Gelir (ARR)", hint: "ARR = MRR × 12" },
  en: { mrr: "Monthly Recurring Revenue (MRR)", or: "— or —", customers: "Customer Count", arpu: "Average Monthly Revenue (ARPU)", arr: "Annual Recurring Revenue (ARR)", hint: "ARR = MRR × 12" },
};

export default function ArrCalculator() {
  const locale = useLocale();
  const s = strings[locale];
  const fmt = useCurrencyFormatter();
  const [mrr, setMrr] = useState(""); const [customers, setCustomers] = useState(""); const [arpu, setArpu] = useState("");
  const arr = useMemo(() => {
    const m = parseFloat(mrr); if (!isNaN(m) && m > 0) return m * 12;
    const c = parseFloat(customers); const a = parseFloat(arpu);
    if (!isNaN(c) && !isNaN(a)) return c * a * 12;
    return 0;
  }, [mrr, customers, arpu]);

  return (
    <ToolPage toolKey="arr">
      <div className="space-y-5">
        <Field label={s.mrr} value={mrr} onChange={setMrr} suffix={locale === "en" ? "$" : "₺"} placeholder="50000" />
        <div className="text-center font-mono text-xs text-muted-foreground">{s.or}</div>
        <div className="grid grid-cols-2 gap-4">
          <Field label={s.customers} value={customers} onChange={setCustomers} placeholder="100" />
          <Field label={s.arpu} value={arpu} onChange={setArpu} suffix={locale === "en" ? "$" : "₺"} placeholder="500" />
        </div>
        <Result label={s.arr} value={fmt(arr, 0)} hint={s.hint} />
      </div>
    </ToolPage>
  );
}
