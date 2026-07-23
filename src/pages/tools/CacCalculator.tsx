import { useState, useMemo } from "react";
import { ToolPage, Field, Result, type Faq } from "@/components/tools/ToolPage";

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
      seoContent={<CacSeo />}
      faqs={cacFaqs}
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

function CacSeo() {
  return (
    <>
      <h2>CAC (Müşteri Edinme Maliyeti) Nedir?</h2>
      <p>
        <strong>CAC (Customer Acquisition Cost)</strong>, belirli bir dönemde yeni bir müşteri kazanmak
        için harcanan toplam pazarlama ve satış maliyetinin, o dönemde kazanılan müşteri sayısına
        bölünmesiyle hesaplanır. Reklam bütçesi, ekip maaşları, araç lisansları, ajans ücretleri ve
        kampanya prodüksiyon giderleri gibi tüm doğrudan ve dolaylı maliyetler bu hesaba dahil edilmelidir.
      </p>
      <p>
        CAC tek başına iyi ya da kötü değildir; anlamlı hale gelmesi için <strong>LTV (Müşteri Yaşam Boyu
        Değeri)</strong> ve <strong>CAC geri kazanım süresi (payback period)</strong> ile birlikte
        yorumlanmalıdır. Genel kabul gören kurala göre <strong>LTV / CAC oranının 3x ve üzeri</strong>
        olması sağlıklı bir birim ekonomiyi işaret eder; oranın 1'in altına düşmesi ise her yeni
        müşterinin işletmeye zarar ettirdiği anlamına gelir.
      </p>
      <p>
        CAC'ı optimize etmek için kanal bazlı kırılım yapmak, dönüşüm oranlarını iyileştirmek, satış
        döngüsünü kısaltmak ve organik/referans kanallarını güçlendirmek en etkili stratejilerdir.
        Pazarlama ve satış ekipleri arasındaki uyum, CAC'ı doğrudan etkileyen en kritik operasyonel
        faktörlerden biridir.
      </p>
    </>
  );
}

const cacFaqs: Faq[] = [
  {
    q: "CAC hesaplamasına hangi giderler dahil edilmelidir?",
    a: "Reklam harcamaları, pazarlama ve satış ekibinin maaş & primleri, kullanılan araç/yazılım lisansları, ajans ve dış hizmet ücretleri ile kampanya prodüksiyon maliyetlerinin tamamı CAC'a dahil edilmelidir.",
  },
  {
    q: "İyi bir CAC değeri ne olmalıdır?",
    a: "Mutlak bir 'iyi CAC' değeri yoktur; LTV ile birlikte değerlendirilir. LTV / CAC oranının en az 3x olması ve CAC geri kazanım süresinin B2B SaaS için 12 ayın altında kalması hedeflenir.",
  },
  {
    q: "CAC nasıl düşürülür?",
    a: "Dönüşüm oranı optimizasyonu (CRO), kanal karmasını verimliliğe göre yeniden dağıtma, organik/SEO ve referans programlarını güçlendirme ve satış sürecini kısaltma en etkili yöntemlerdir.",
  },
  {
    q: "Blended CAC ile Paid CAC farkı nedir?",
    a: "Blended CAC organik dahil tüm müşterileri dikkate alır, Paid CAC ise yalnızca ücretli kanallardan gelen müşterileri hesaba katar. Kanal verimliliği için Paid CAC daha doğru bir metriktir.",
  },
];