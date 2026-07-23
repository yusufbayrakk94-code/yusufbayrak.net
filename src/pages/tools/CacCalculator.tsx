import { useState, useMemo } from "react";
import { ToolPage, Field, Result } from "@/components/tools/ToolPage";

const fmt = (n: number) =>
  new Intl.NumberFormat("tr-TR", { style: "currency", currency: "TRY", maximumFractionDigits: 2 }).format(n);

export default function CacCalculator() {
  const [marketing, setMarketing] = useState("");
  const [sales, setSales] = useState("");
  const [customers, setCustomers] = useState("");

  const cac = useMemo(() => {
    const m = parseFloat(marketing) || 0;
    const s = parseFloat(sales) || 0;
    const c = parseFloat(customers);
    if (!c || c <= 0) return 0;
    return (m + s) / c;
  }, [marketing, sales, customers]);

  return (
    <ToolPage
      title="CAC Hesaplayıcı"
      description="Müşteri edinme maliyetinizi (CAC) pazarlama ve satış giderleriyle kazanılan müşteri sayısına göre hesaplayın."
      path="/ucretsiz-araclar/cac-hesaplayici"
      intro="CAC (Customer Acquisition Cost), bir müşteri kazanmak için harcadığınız ortalama maliyettir. Kanal verimliliğini ve büyüme sürdürülebilirliğini ölçmek için kritik bir metriktir."
    >
      <div className="space-y-5">
        <div className="grid grid-cols-2 gap-4">
          <Field label="Pazarlama Gideri" value={marketing} onChange={setMarketing} suffix="₺" placeholder="50000" />
          <Field label="Satış Gideri" value={sales} onChange={setSales} suffix="₺" placeholder="30000" />
        </div>
        <Field label="Kazanılan Müşteri Sayısı" value={customers} onChange={setCustomers} placeholder="100" />
        <Result label="Müşteri Edinme Maliyeti (CAC)" value={fmt(cac)} hint="CAC = (Pazarlama + Satış Gideri) / Yeni Müşteri Sayısı" />
      </div>
    </ToolPage>
  );
}