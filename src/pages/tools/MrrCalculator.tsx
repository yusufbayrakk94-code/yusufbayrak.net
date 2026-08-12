import { useState, useMemo } from "react";
import { ToolPage, Field, Result, useCurrencyFormatter } from "@/components/tools/ToolPage";
import { useLocale } from "@/i18n/useLocale";

const strings = {
  tr: {
    total: "Toplam Aylık Yinelenen Gelir", or: "— veya —",
    customers: "Aktif Müşteri Sayısı", price: "Ortalama Aylık Abonelik Bedeli (ARPA)",
    mrr: "Aylık Yinelenen Gelir (MRR)", arr: "Yıllık Yinelenen Gelir (ARR)",
    hint: "MRR = Müşteri Sayısı × Ortalama Aylık Bedel",
    arrHint: "ARR = MRR × 12 — aynı gelirin yıllık ölçekteki karşılığı.",
    note: "Yıllık ödenen planları 12'ye bölerek aylık karşılığıyla ekleyin; kurulum ve tek seferlik gelirleri MRR'ye dahil etmeyin.",
  },
  en: {
    total: "Total Monthly Recurring Revenue", or: "— or —",
    customers: "Active Customers", price: "Average Monthly Price (ARPA)",
    mrr: "Monthly Recurring Revenue (MRR)", arr: "Annual Recurring Revenue (ARR)",
    hint: "MRR = Customers × Average Monthly Price",
    arrHint: "ARR = MRR × 12 — the same revenue on an annual scale.",
    note: "Normalise annual plans by dividing them by 12, and keep setup fees or one-off sales out of MRR.",
  },
};

export default function MrrCalculator() {
  const locale = useLocale();
  const s = strings[locale];
  const fmt = useCurrencyFormatter();
  const [total, setTotal] = useState("");
  const [customers, setCustomers] = useState("");
  const [price, setPrice] = useState("");

  const mrr = useMemo(() => {
    const t = parseFloat(total);
    if (!Number.isNaN(t) && t > 0) return t;
    const c = parseFloat(customers);
    const p = parseFloat(price);
    if (!Number.isNaN(c) && !Number.isNaN(p)) return c * p;
    return 0;
  }, [total, customers, price]);

  return (
    <ToolPage toolKey="mrr">
      <div className="space-y-5">
        <Field label={s.total} value={total} onChange={setTotal} suffix={locale === "en" ? "$" : "₺"} placeholder="50000" />
        <div className="text-center font-mono text-xs text-muted-foreground">{s.or}</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label={s.customers} value={customers} onChange={setCustomers} placeholder="100" />
          <Field label={s.price} value={price} onChange={setPrice} suffix={locale === "en" ? "$" : "₺"} placeholder="500" />
        </div>
        <Result label={s.mrr} value={fmt(mrr, 0)} hint={s.hint} />
        <Result label={s.arr} value={fmt(mrr * 12, 0)} hint={s.arrHint} />
        <p className="font-mono text-xs text-muted-foreground leading-relaxed">{"//"} {s.note}</p>
      </div>
    </ToolPage>
  );
}
