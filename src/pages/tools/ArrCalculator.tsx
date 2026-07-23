import { useState, useMemo } from "react";
import { ToolPage, Field, Result } from "@/components/tools/ToolPage";

const fmt = (n: number) =>
  new Intl.NumberFormat("tr-TR", { style: "currency", currency: "TRY", maximumFractionDigits: 0 }).format(n);

export default function ArrCalculator() {
  const [mrr, setMrr] = useState("");
  const [customers, setCustomers] = useState("");
  const [arpu, setArpu] = useState("");

  const arr = useMemo(() => {
    const m = parseFloat(mrr);
    if (!isNaN(m) && m > 0) return m * 12;
    const c = parseFloat(customers);
    const a = parseFloat(arpu);
    if (!isNaN(c) && !isNaN(a)) return c * a * 12;
    return 0;
  }, [mrr, customers, arpu]);

  return (
    <ToolPage
      title="ARR Hesaplayıcı"
      description="Yıllık Yinelenen Geliri (ARR) MRR veya müşteri sayısı ve ARPU üzerinden saniyeler içinde hesaplayın."
      path="/ucretsiz-araclar/arr-hesaplayici"
      intro="ARR (Annual Recurring Revenue), SaaS işletmenizin yıllık yinelenen gelirini gösterir. MRR'nizi girin ya da müşteri sayısı ile ortalama gelir üzerinden hesaplayın."
    >
      <div className="space-y-5">
        <Field label="Aylık Yinelenen Gelir (MRR)" value={mrr} onChange={setMrr} suffix="₺" placeholder="Örn. 50000" />
        <div className="text-center font-mono text-xs text-muted-foreground">— veya —</div>
        <div className="grid grid-cols-2 gap-4">
          <Field label="Müşteri Sayısı" value={customers} onChange={setCustomers} placeholder="100" />
          <Field label="Ortalama Aylık Gelir (ARPU)" value={arpu} onChange={setArpu} suffix="₺" placeholder="500" />
        </div>
        <Result label="Yıllık Yinelenen Gelir (ARR)" value={fmt(arr)} hint="ARR = MRR × 12" />
      </div>

      {arrSeoContent}
    </ToolPage>
  );
}

const arrSeoContent = null; // placeholder overwritten below