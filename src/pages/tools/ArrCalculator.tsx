import { useState, useMemo } from "react";
import { ToolPage, Field, Result, type Faq } from "@/components/tools/ToolPage";

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
      seoContent={<ArrSeo />}
      faqs={arrFaqs}
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
    </ToolPage>
  );
}

function ArrSeo() {
  return (
    <>
      <h2>ARR Nedir ve Neden Önemlidir?</h2>
      <p>
        <strong>ARR (Annual Recurring Revenue)</strong>, abonelik tabanlı iş modellerinde bir yıl boyunca
        yinelemesi beklenen sözleşmesel gelirin toplamıdır. Tek seferlik satışlar, kurulum ücretleri veya
        değişken kullanım gelirleri ARR'ye dahil edilmez; sadece <em>tahmin edilebilir</em> ve
        <em> yinelenen</em> gelir kalemleri hesaba katılır. Bu nedenle ARR, SaaS ve subscription
        işletmelerinin gerçek büyüme hızını, sağlığını ve öngörülebilirliğini ölçen en temel finansal
        metrik olarak kabul edilir.
      </p>
      <p>
        Yatırımcılar, ARR'yi hem şirket değerlemesinin çıpası hem de operasyonel performansın göstergesi
        olarak kullanır. Aylık MRR'ye kıyasla ARR, sezonsallıktan arındırılmış bir görünüm sunar ve
        yıllık planlama, bütçeleme ve hedef belirleme süreçlerinde daha kararlı bir referans oluşturur.
        Net New ARR, Expansion ARR ve Churned ARR gibi alt kırılımlar ise büyümenin nereden geldiğini
        anlamak için kritik önemdedir.
      </p>
      <p>
        ARR'nin doğru yorumlanması için tek başına değil, <strong>büyüme oranı, net revenue retention
        (NRR)</strong> ve <strong>CAC geri kazanım süresi</strong> gibi metriklerle birlikte
        değerlendirilmesi gerekir. Yüksek ARR büyümesi ancak sağlıklı bir birim ekonomi ile
        birleştiğinde sürdürülebilir bir SaaS işine dönüşür.
      </p>
    </>
  );
}

const arrFaqs: Faq[] = [
  {
    q: "ARR ile MRR arasındaki fark nedir?",
    a: "MRR aylık yinelenen geliri, ARR ise yıllık yinelenen geliri ifade eder. En basit ilişkisiyle ARR = MRR × 12'dir; ancak yıllık planlama, kohort analizi ve yatırımcı iletişiminde ARR kullanılır.",
  },
  {
    q: "Tek seferlik gelirler ARR'ye dahil edilir mi?",
    a: "Hayır. Kurulum ücretleri, danışmanlık, tek seferlik lisans satışları veya değişken kullanım gelirleri ARR'nin dışında tutulur. ARR yalnızca sözleşmesel ve yinelenen abonelik gelirini içerir.",
  },
  {
    q: "Sağlıklı bir ARR büyüme oranı nedir?",
    a: "Erken aşama SaaS şirketleri için %100+ yıllık ARR büyümesi hedef alınır; ölçekleşen şirketlerde %40-60 aralığı 'iyi' kabul edilir. Sektör, pazar büyüklüğü ve müşteri segmentine göre değişkenlik gösterir.",
  },
  {
    q: "Net New ARR nedir?",
    a: "Bir dönemde eklenen yeni ARR ile mevcut müşterilerden gelen genişleme (expansion) ARR'nin toplamından, churn ve daralma (contraction) ARR'nin çıkarılmasıyla bulunur. Gerçek büyüme kalitesini gösterir.",
  },
];