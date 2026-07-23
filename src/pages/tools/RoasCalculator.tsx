import { useState, useMemo } from "react";
import { ToolPage, Field, Result, type Faq } from "@/components/tools/ToolPage";

const fmt = (n: number) =>
  new Intl.NumberFormat("tr-TR", { style: "currency", currency: "TRY", maximumFractionDigits: 2 }).format(n);

export default function RoasCalculator() {
  const [revenue, setRevenue] = useState("");
  const [spend, setSpend] = useState("");

  const { roas, roi } = useMemo(() => {
    const r = parseFloat(revenue) || 0;
    const s = parseFloat(spend);
    if (!s || s <= 0) return { roas: 0, roi: 0 };
    return { roas: r / s, roi: ((r - s) / s) * 100 };
  }, [revenue, spend]);

  return (
    <ToolPage
      title="ROAS Hesaplayıcı"
      description="Reklam harcaması getiri oranınızı (ROAS) reklam gelirini reklam harcamasına oranlayarak hesaplayın."
      path="/ucretsiz-araclar/roas-hesaplayici"
      intro="ROAS (Return on Ad Spend), reklam harcamalarınızın kaç katı gelir ürettiğini gösterir. Kampanya karlılığını ölçmek için en yaygın kullanılan performans metriğidir."
      seoContent={<RoasSeo />}
      faqs={roasFaqs}
    >
      <div className="space-y-5">
        <div className="grid grid-cols-2 gap-4">
          <Field label="Reklamdan Gelen Gelir" value={revenue} onChange={setRevenue} suffix="₺" placeholder="100000" />
          <Field label="Reklam Harcaması" value={spend} onChange={setSpend} suffix="₺" placeholder="25000" />
        </div>
        <Result label="ROAS" value={`${roas.toFixed(2)}x`} hint="ROAS = Reklam Geliri / Reklam Harcaması" />
        <Result label="Net Kâr" value={fmt((parseFloat(revenue) || 0) - (parseFloat(spend) || 0))} />
        <Result label="ROI" value={`%${roi.toFixed(2)}`} />
      </div>
    </ToolPage>
  );
}

function RoasSeo() {
  return (
    <>
      <h2>ROAS Nedir ve Nasıl Yorumlanır?</h2>
      <p>
        <strong>ROAS (Return on Ad Spend)</strong>, reklam yatırımının doğrudan getirisini ölçen bir
        performans pazarlaması metriğidir. Formül basittir: <em>ROAS = Reklam Geliri / Reklam Harcaması</em>.
        4x ROAS, harcanan her 1₺'nin 4₺ gelir ürettiği anlamına gelir. Meta Ads, Google Ads ve
        LinkedIn Ads gibi platformlarda kampanya optimizasyonunun temel hedef değişkenidir.
      </p>
      <p>
        ROAS ciro üzerinden ölçüldüğü için tek başına kârlılığı garanti etmez. Ürün maliyeti, kargo,
        iade oranı ve operasyonel giderler dikkate alındığında break-even ROAS her işletme için
        farklıdır. Örneğin brüt marjı %30 olan bir e-ticaret markası için başabaş ROAS yaklaşık
        3.33x'tir; bu eşiğin altındaki her kampanya para kaybettiriyor demektir. Bu nedenle ROAS'ın
        <strong> POAS (Profit on Ad Spend)</strong> ile birlikte takip edilmesi önerilir.
      </p>
      <p>
        ROAS'ı iyileştirmek için hedef kitleyi daraltmak, yaratıcı (creative) rotasyonunu hızlandırmak,
        landing page dönüşüm oranını artırmak ve teklif stratejilerini değer bazlı (value-based bidding)
        modellere geçirmek en etkili yöntemlerdir.
      </p>
    </>
  );
}

const roasFaqs: Faq[] = [
  {
    q: "İyi bir ROAS değeri nedir?",
    a: "Sektöre ve marja göre değişir. E-ticaret için genel kabul 4x civarıdır; ancak brüt marj düşükse 5-6x, yüksek marjlı dijital ürünlerde ise 2-3x bile kârlı olabilir. Doğru referans, işletmenizin başabaş ROAS'ıdır.",
  },
  {
    q: "ROAS ile ROI arasındaki fark nedir?",
    a: "ROAS yalnızca reklam gelirini reklam harcamasına oranlar. ROI ise net kârı (gelir - toplam maliyet) yatırıma böler ve gerçek kârlılığı gösterir. ROAS pazarlama, ROI ise finans metriğidir.",
  },
  {
    q: "Break-even ROAS nasıl hesaplanır?",
    a: "Başabaş ROAS = 1 / Brüt Marj. Örneğin %25 brüt marjda başabaş ROAS 4x'tir; bunun altındaki her kampanya zarardır.",
  },
  {
    q: "ROAS neden POAS ile birlikte takip edilmelidir?",
    a: "ROAS ciroya bakar; POAS ise kâra bakar. Ürün maliyeti, iade oranı ve kargo dahil edildiğinde iki metrik ciddi şekilde ayrışabilir. Kârlı büyüme için karar POAS ile verilmelidir.",
  },
];