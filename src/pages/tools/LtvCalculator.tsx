import { useState, useMemo } from "react";
import { ToolPage, Field, Result, type Faq } from "@/components/tools/ToolPage";

const fmt = (n: number) =>
  new Intl.NumberFormat("tr-TR", { style: "currency", currency: "TRY", maximumFractionDigits: 2 }).format(n);

export default function LtvCalculator() {
  const [arpu, setArpu] = useState("");
  const [margin, setMargin] = useState("");
  const [churn, setChurn] = useState("");
  const [cac, setCac] = useState("");

  const { ltv, ratio } = useMemo(() => {
    const a = parseFloat(arpu) || 0;
    const m = (parseFloat(margin) || 100) / 100;
    const c = parseFloat(churn);
    if (!c || c <= 0) return { ltv: 0, ratio: 0 };
    const ltv = (a * m) / (c / 100);
    const cacNum = parseFloat(cac);
    const ratio = cacNum && cacNum > 0 ? ltv / cacNum : 0;
    return { ltv, ratio };
  }, [arpu, margin, churn, cac]);

  return (
    <ToolPage
      title="LTV Hesaplayıcı"
      description="Müşteri yaşam boyu değerini (LTV) ARPU, brüt marj ve churn oranıyla hesaplayın; CAC ile karşılaştırın."
      path="/ucretsiz-araclar/ltv-hesaplayici"
      intro="LTV (Lifetime Value), bir müşterinin ilişki süresi boyunca ürettiği toplam gelirin bugünkü değeridir. Sağlıklı bir işletme için LTV/CAC oranının 3 ve üzeri olması hedeflenir."
      seoContent={<LtvSeo />}
      faqs={ltvFaqs}
    >
      <div className="space-y-5">
        <div className="grid grid-cols-2 gap-4">
          <Field label="Aylık ARPU" value={arpu} onChange={setArpu} suffix="₺" placeholder="500" />
          <Field label="Brüt Marj (%)" value={margin} onChange={setMargin} suffix="%" placeholder="80" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Field label="Aylık Churn (%)" value={churn} onChange={setChurn} suffix="%" placeholder="5" />
          <Field label="CAC (opsiyonel)" value={cac} onChange={setCac} suffix="₺" placeholder="1500" />
        </div>
        <Result label="Müşteri Yaşam Boyu Değeri (LTV)" value={fmt(ltv)} hint="LTV = (ARPU × Brüt Marj) / Aylık Churn Oranı" />
        {ratio > 0 && (
          <Result label="LTV / CAC Oranı" value={`${ratio.toFixed(2)}x`} hint="Hedef: ≥ 3x" />
        )}
      </div>
    </ToolPage>
  );
}

function LtvSeo() {
  return (
    <>
      <h2>LTV (Müşteri Yaşam Boyu Değeri) Nedir?</h2>
      <p>
        <strong>LTV (Lifetime Value)</strong>, bir müşterinin şirketle ilişkisi süresince ürettiği
        toplam net gelirin bugünkü değeridir. En yaygın formül <em>LTV = (ARPU × Brüt Marj) / Churn</em>
        şeklindedir ve bu haliyle bir müşterinin ortalama olarak ne kadar süre kaldığını ve bu süre
        boyunca ne kadar kârlı gelir ürettiğini tek bir sayıya indirir.
      </p>
      <p>
        LTV'nin en güçlü kullanım alanı <strong>CAC ile karşılaştırılmasıdır</strong>. LTV / CAC oranının
        3 ve üzeri olması sağlıklı bir birim ekonomiyi işaret eder. Oranın 1'e yaklaşması işletmenin
        büyüdükçe zarar ettiğini, 5'in üzerine çıkması ise büyüme fırsatına yeterince yatırım
        yapılmadığını gösterir. Aynı şekilde <strong>CAC geri kazanım süresinin</strong> 12 ayın altında
        tutulması, nakit akışı sürdürülebilirliği için kritik bir eşiktir.
      </p>
      <p>
        LTV'yi artırmanın en etkili yolları churn'ü düşürmek, upsell ve cross-sell ile ARPU'yu
        büyütmek ve brüt marjı iyileştirmektir. Ürün, fiyatlama ve müşteri başarısı ekiplerinin
        ortak KPI'ı LTV olduğunda, büyüme çok daha sürdürülebilir bir hale gelir.
      </p>
    </>
  );
}

const ltvFaqs: Faq[] = [
  {
    q: "LTV nasıl hesaplanır?",
    a: "En yaygın formül: LTV = (Aylık ARPU × Brüt Marj %) / Aylık Churn Oranı. Bu formül, tekrar eden gelir modelleri için müşteri başına kârlılığı ve ilişki süresini birleşik olarak ölçer.",
  },
  {
    q: "İdeal LTV / CAC oranı nedir?",
    a: "3x ve üzeri sağlıklı kabul edilir. 1x-2x aralığı birim ekonominin zayıf olduğunu, 5x üzeri ise büyüme kanallarına daha agresif yatırım yapılabileceğini gösterir.",
  },
  {
    q: "LTV hesabında brüt marjı neden kullanıyoruz?",
    a: "Çünkü ciro değil, gerçek kâr üreten gelir önemlidir. Hosting, ödeme komisyonu, destek maliyeti gibi COGS kalemleri düşüldükten sonraki brüt marj, LTV'nin gerçek finansal değerini yansıtır.",
  },
  {
    q: "LTV'yi artırmanın en hızlı yolu nedir?",
    a: "Churn'ü düşürmek çoğu zaman en yüksek etkili kaldıraçtır: aylık churn'ün %5'ten %3'e inmesi LTV'yi yaklaşık %67 artırır. Ardından upsell ile ARPU büyütmek gelir.",
  },
];