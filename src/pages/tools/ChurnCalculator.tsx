import { useState, useMemo } from "react";
import { ToolPage, Field, Result, type Faq } from "@/components/tools/ToolPage";

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
      seoContent={<ChurnSeo />}
      faqs={churnFaqs}
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

function ChurnSeo() {
  return (
    <>
      <h2>Churn Rate Nedir ve Neden Kritiktir?</h2>
      <p>
        <strong>Churn Rate (Müşteri Kayıp Oranı)</strong>, belirli bir dönemin başındaki müşterilerin
        yüzde kaçının o dönem içinde ürünü veya hizmeti bıraktığını gösterir. SaaS ve abonelik iş
        modellerinde churn, büyümenin görünmez düşmanıdır: her ay kaybedilen müşteri, yeni satışların
        önemli bir kısmını nötralize eder ve gerçek net büyümeyi düşürür.
      </p>
      <p>
        Churn iki temel şekilde ölçülür: <strong>Customer Churn</strong> kaybedilen müşteri sayısı
        üzerinden, <strong>Revenue Churn</strong> ise kaybedilen gelir üzerinden hesaplanır. Enterprise
        segmentte gelir kaybını daha iyi yansıttığı için Revenue Churn tercih edilir. Sağlıklı bir SaaS
        işletmesi için aylık churn oranının SMB segmentinde %3-5, enterprise segmentte ise %1'in altında
        tutulması hedeflenir.
      </p>
      <p>
        Churn'ü azaltmak için <strong>onboarding sürecini güçlendirmek</strong>, ürün içi aktivasyon
        metriklerini takip etmek, proaktif müşteri başarı (customer success) yapısı kurmak ve
        <em> churn risk skoru</em> gibi öngörücü modeller ile risk altındaki hesapları erken tespit etmek
        en etkili yöntemlerdir.
      </p>
    </>
  );
}

const churnFaqs: Faq[] = [
  {
    q: "İyi bir aylık churn oranı ne olmalıdır?",
    a: "SMB odaklı SaaS'lar için aylık %3-5 kabul edilebilir sayılır. Mid-market için %1-2, enterprise için ise %1'in altı hedeflenir. Yıllık bazda %5-7'nin altındaki churn 'iyi' kabul edilir.",
  },
  {
    q: "Customer Churn ile Revenue Churn arasındaki fark nedir?",
    a: "Customer Churn kaybedilen müşteri sayısını ölçer; Revenue Churn ise kaybedilen MRR/ARR tutarını ölçer. Büyük müşterilerin gelir üzerindeki etkisi büyük olduğu için Revenue Churn genellikle daha kritiktir.",
  },
  {
    q: "Negatif churn ne demektir?",
    a: "Mevcut müşterilerden gelen upsell ve genişleme gelirinin, kaybedilen gelirden daha fazla olması durumudur. Bu durumda net revenue retention (NRR) %100'ün üzerine çıkar ve şirket yeni müşteri kazanmasa bile büyür.",
  },
  {
    q: "Churn'ü azaltmak için ilk adım ne olmalıdır?",
    a: "İlk adım, churn'ün ne zaman gerçekleştiğini kohort analiziyle anlamaktır. Erken churn genellikle onboarding sorununu, geç churn ise değer teslimindeki eksikliği işaret eder.",
  },
];