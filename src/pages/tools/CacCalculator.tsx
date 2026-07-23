import { useState, useMemo } from "react";
import { ToolPage, Field, Result, useCurrencyFormatter } from "@/components/tools/ToolPage";
import { useLocale } from "@/i18n/useLocale";

const strings = {
  tr: { m: "Pazarlama Gideri", s: "Satış Gideri", c: "Kazanılan Müşteri Sayısı", cac: "Müşteri Edinme Maliyeti (CAC)", hint: "CAC = (Pazarlama + Satış Gideri) / Yeni Müşteri Sayısı" },
  en: { m: "Marketing Spend", s: "Sales Spend", c: "Customers Acquired", cac: "Customer Acquisition Cost (CAC)", hint: "CAC = (Marketing + Sales) / New Customers" },
};

export default function CacCalculator() {
  const locale = useLocale();
  const t = strings[locale];
  const fmt = useCurrencyFormatter();
  const [marketing, setMarketing] = useState(""); const [sales, setSales] = useState(""); const [customers, setCustomers] = useState("");
  const cac = useMemo(() => {
    const m = parseFloat(marketing) || 0; const s = parseFloat(sales) || 0; const c = parseFloat(customers);
    if (!c || c <= 0) return 0;
    return (m + s) / c;
  }, [marketing, sales, customers]);

  return (
    <ToolPage toolKey="cac">
      <div className="space-y-5">
        <div className="grid grid-cols-2 gap-4">
          <Field label={t.m} value={marketing} onChange={setMarketing} suffix={locale === "en" ? "$" : "₺"} placeholder="50000" />
          <Field label={t.s} value={sales} onChange={setSales} suffix={locale === "en" ? "$" : "₺"} placeholder="30000" />
        </div>
        <Field label={t.c} value={customers} onChange={setCustomers} placeholder="100" />
        <Result label={t.cac} value={fmt(cac)} hint={t.hint} />
      </div>
    </ToolPage>
  );
}
