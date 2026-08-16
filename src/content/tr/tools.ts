import type { ToolContent } from "../types";

// Per-calculator TR content (SEO paragraphs + FAQs + intro). Numeric logic
// and formulas live in the page components, not here.

export const toolBackLabel = "Ücretsiz Araçlara Dön";
export const toolBackHref = "/ucretsiz-araclar";
export const toolCalculatorDivider = "Hesaplayıcı";
export const toolGuideDivider = "Rehber";
export const toolFaqDivider = "Sıkça Sorulan Sorular";
export const currency = "TRY" as const;
export const numberLocale = "tr-TR" as const;

export const arr: ToolContent = {
  slug: "arr",
  path: "/ucretsiz-araclar/arr-hesaplayici",
  title: "ARR Hesaplayıcı",
  description: "Yıllık Yinelenen Geliri (ARR) MRR veya müşteri sayısı ve ARPU üzerinden saniyeler içinde hesaplayın.",
  intro: "ARR (Annual Recurring Revenue), SaaS işletmenizin yıllık yinelenen gelirini gösterir. MRR'nizi girin ya da müşteri sayısı ile ortalama gelir üzerinden hesaplayın.",
  seoParagraphs: [
    { heading: "ARR Nedir ve Neden Önemlidir?", body: "ARR (Annual Recurring Revenue), abonelik tabanlı iş modellerinde bir yıl boyunca yinelemesi beklenen sözleşmesel gelirin toplamıdır. Tek seferlik satışlar, kurulum ücretleri veya değişken kullanım gelirleri ARR'ye dahil edilmez; sadece tahmin edilebilir ve yinelenen gelir kalemleri hesaba katılır. Bu nedenle ARR, SaaS ve subscription işletmelerinin gerçek büyüme hızını, sağlığını ve öngörülebilirliğini ölçen en temel finansal metrik olarak kabul edilir." },
    { body: "Yatırımcılar, ARR'yi hem şirket değerlemesinin çıpası hem de operasyonel performansın göstergesi olarak kullanır. Aylık MRR'ye kıyasla ARR, sezonsallıktan arındırılmış bir görünüm sunar ve yıllık planlama, bütçeleme ve hedef belirleme süreçlerinde daha kararlı bir referans oluşturur. Net New ARR, Expansion ARR ve Churned ARR gibi alt kırılımlar ise büyümenin nereden geldiğini anlamak için kritik önemdedir." },
    { body: "ARR'nin doğru yorumlanması için tek başına değil; büyüme oranı, net revenue retention (NRR) ve CAC geri kazanım süresi gibi metriklerle birlikte değerlendirilmesi gerekir. Yüksek ARR büyümesi ancak sağlıklı bir birim ekonomi ile birleştiğinde sürdürülebilir bir SaaS işine dönüşür." },
  ],
  faqs: [
    { q: "ARR ile MRR arasındaki fark nedir?", a: "MRR aylık yinelenen geliri, ARR ise yıllık yinelenen geliri ifade eder. En basit ilişkisiyle ARR = MRR × 12'dir; ancak yıllık planlama, kohort analizi ve yatırımcı iletişiminde ARR kullanılır." },
    { q: "Tek seferlik gelirler ARR'ye dahil edilir mi?", a: "Hayır. Kurulum ücretleri, danışmanlık, tek seferlik lisans satışları veya değişken kullanım gelirleri ARR'nin dışında tutulur. ARR yalnızca sözleşmesel ve yinelenen abonelik gelirini içerir." },
    { q: "Sağlıklı bir ARR büyüme oranı nedir?", a: "Erken aşama SaaS şirketleri için %100+ yıllık ARR büyümesi hedef alınır; ölçekleşen şirketlerde %40-60 aralığı 'iyi' kabul edilir. Sektör, pazar büyüklüğü ve müşteri segmentine göre değişkenlik gösterir." },
    { q: "Net New ARR nedir?", a: "Bir dönemde eklenen yeni ARR ile mevcut müşterilerden gelen genişleme (expansion) ARR'nin toplamından, churn ve daralma (contraction) ARR'nin çıkarılmasıyla bulunur. Gerçek büyüme kalitesini gösterir." },
  ],
};

export const cac: ToolContent = {
  slug: "cac",
  path: "/ucretsiz-araclar/cac-hesaplayici",
  title: "CAC Hesaplayıcı",
  description: "Müşteri edinme maliyetinizi (CAC) pazarlama ve satış giderleriyle kazanılan müşteri sayısına göre hesaplayın.",
  intro: "CAC (Customer Acquisition Cost), bir müşteri kazanmak için harcadığınız ortalama maliyettir. Kanal verimliliğini ve büyüme sürdürülebilirliğini ölçmek için kritik bir metriktir.",
  seoParagraphs: [
    { heading: "CAC (Müşteri Edinme Maliyeti) Nedir?", body: "CAC (Customer Acquisition Cost), belirli bir dönemde yeni bir müşteri kazanmak için harcanan toplam pazarlama ve satış maliyetinin, o dönemde kazanılan müşteri sayısına bölünmesiyle hesaplanır. Reklam bütçesi, ekip maaşları, araç lisansları, ajans ücretleri ve kampanya prodüksiyon giderleri gibi tüm doğrudan ve dolaylı maliyetler bu hesaba dahil edilmelidir." },
    { body: "CAC tek başına iyi ya da kötü değildir; anlamlı hale gelmesi için LTV (Müşteri Yaşam Boyu Değeri) ve CAC geri kazanım süresi (payback period) ile birlikte yorumlanmalıdır. Genel kabul gören kurala göre LTV / CAC oranının 3x ve üzeri olması sağlıklı bir birim ekonomiyi işaret eder; oranın 1'in altına düşmesi ise her yeni müşterinin işletmeye zarar ettirdiği anlamına gelir." },
    { body: "CAC'ı optimize etmek için kanal bazlı kırılım yapmak, dönüşüm oranlarını iyileştirmek, satış döngüsünü kısaltmak ve organik/referans kanallarını güçlendirmek en etkili stratejilerdir. Pazarlama ve satış ekipleri arasındaki uyum, CAC'ı doğrudan etkileyen en kritik operasyonel faktörlerden biridir." },
  ],
  faqs: [
    { q: "CAC hesaplamasına hangi giderler dahil edilmelidir?", a: "Reklam harcamaları, pazarlama ve satış ekibinin maaş & primleri, kullanılan araç/yazılım lisansları, ajans ve dış hizmet ücretleri ile kampanya prodüksiyon maliyetlerinin tamamı CAC'a dahil edilmelidir." },
    { q: "İyi bir CAC değeri ne olmalıdır?", a: "Mutlak bir 'iyi CAC' değeri yoktur; LTV ile birlikte değerlendirilir. LTV / CAC oranının en az 3x olması ve CAC geri kazanım süresinin B2B SaaS için 12 ayın altında kalması hedeflenir." },
    { q: "CAC nasıl düşürülür?", a: "Dönüşüm oranı optimizasyonu (CRO), kanal karmasını verimliliğe göre yeniden dağıtma, organik/SEO ve referans programlarını güçlendirme ve satış sürecini kısaltma en etkili yöntemlerdir." },
    { q: "Blended CAC ile Paid CAC farkı nedir?", a: "Blended CAC organik dahil tüm müşterileri dikkate alır, Paid CAC ise yalnızca ücretli kanallardan gelen müşterileri hesaba katar. Kanal verimliliği için Paid CAC daha doğru bir metriktir." },
  ],
};

export const churn: ToolContent = {
  slug: "churn",
  path: "/ucretsiz-araclar/churn-rate-hesaplayici",
  title: "Churn Rate Hesaplayıcı",
  description: "Müşteri kayıp oranınızı (churn rate) dönem başındaki müşteri sayısı ve kaybedilen müşteri sayısıyla hesaplayın.",
  intro: "Churn Rate, belirli bir dönemde kaybettiğiniz müşteri oranıdır. Düşük churn, sağlıklı bir SaaS büyümesinin en önemli göstergelerinden biridir.",
  seoParagraphs: [
    { heading: "Churn Rate Nedir ve Neden Kritiktir?", body: "Churn Rate (Müşteri Kayıp Oranı), belirli bir dönemin başındaki müşterilerin yüzde kaçının o dönem içinde ürünü veya hizmeti bıraktığını gösterir. SaaS ve abonelik iş modellerinde churn, büyümenin görünmez düşmanıdır: her ay kaybedilen müşteri, yeni satışların önemli bir kısmını nötralize eder ve gerçek net büyümeyi düşürür." },
    { body: "Churn iki temel şekilde ölçülür: Customer Churn kaybedilen müşteri sayısı üzerinden, Revenue Churn ise kaybedilen gelir üzerinden hesaplanır. Enterprise segmentte gelir kaybını daha iyi yansıttığı için Revenue Churn tercih edilir. Sağlıklı bir SaaS işletmesi için aylık churn oranının SMB segmentinde %3-5, enterprise segmentte ise %1'in altında tutulması hedeflenir." },
    { body: "Churn'ü azaltmak için onboarding sürecini güçlendirmek, ürün içi aktivasyon metriklerini takip etmek, proaktif müşteri başarı (customer success) yapısı kurmak ve churn risk skoru gibi öngörücü modeller ile risk altındaki hesapları erken tespit etmek en etkili yöntemlerdir." },
  ],
  faqs: [
    { q: "İyi bir aylık churn oranı ne olmalıdır?", a: "SMB odaklı SaaS'lar için aylık %3-5 kabul edilebilir sayılır. Mid-market için %1-2, enterprise için ise %1'in altı hedeflenir. Yıllık bazda %5-7'nin altındaki churn 'iyi' kabul edilir." },
    { q: "Customer Churn ile Revenue Churn arasındaki fark nedir?", a: "Customer Churn kaybedilen müşteri sayısını ölçer; Revenue Churn ise kaybedilen MRR/ARR tutarını ölçer. Büyük müşterilerin gelir üzerindeki etkisi büyük olduğu için Revenue Churn genellikle daha kritiktir." },
    { q: "Negatif churn ne demektir?", a: "Mevcut müşterilerden gelen upsell ve genişleme gelirinin, kaybedilen gelirden daha fazla olması durumudur. Bu durumda net revenue retention (NRR) %100'ün üzerine çıkar ve şirket yeni müşteri kazanmasa bile büyür." },
    { q: "Churn'ü azaltmak için ilk adım ne olmalıdır?", a: "İlk adım, churn'ün ne zaman gerçekleştiğini kohort analiziyle anlamaktır. Erken churn genellikle onboarding sorununu, geç churn ise değer teslimindeki eksikliği işaret eder." },
  ],
};

export const ltv: ToolContent = {
  slug: "ltv",
  path: "/ucretsiz-araclar/ltv-hesaplayici",
  title: "LTV Hesaplayıcı",
  description: "Müşteri yaşam boyu değerini (LTV) ARPU, brüt marj ve churn oranıyla hesaplayın; CAC ile karşılaştırın.",
  intro: "LTV (Lifetime Value), bir müşterinin ilişki süresi boyunca ürettiği toplam gelirin bugünkü değeridir. Sağlıklı bir işletme için LTV/CAC oranının 3 ve üzeri olması hedeflenir.",
  seoParagraphs: [
    { heading: "LTV (Müşteri Yaşam Boyu Değeri) Nedir?", body: "LTV (Lifetime Value), bir müşterinin şirketle ilişkisi süresince ürettiği toplam net gelirin bugünkü değeridir. En yaygın formül LTV = (ARPU × Brüt Marj) / Churn şeklindedir ve bu haliyle bir müşterinin ortalama olarak ne kadar süre kaldığını ve bu süre boyunca ne kadar kârlı gelir ürettiğini tek bir sayıya indirir." },
    { body: "LTV'nin en güçlü kullanım alanı CAC ile karşılaştırılmasıdır. LTV / CAC oranının 3 ve üzeri olması sağlıklı bir birim ekonomiyi işaret eder. Oranın 1'e yaklaşması işletmenin büyüdükçe zarar ettiğini, 5'in üzerine çıkması ise büyüme fırsatına yeterince yatırım yapılmadığını gösterir. Aynı şekilde CAC geri kazanım süresinin 12 ayın altında tutulması, nakit akışı sürdürülebilirliği için kritik bir eşiktir." },
    { body: "LTV'yi artırmanın en etkili yolları churn'ü düşürmek, upsell ve cross-sell ile ARPU'yu büyütmek ve brüt marjı iyileştirmektir. Ürün, fiyatlama ve müşteri başarısı ekiplerinin ortak KPI'ı LTV olduğunda, büyüme çok daha sürdürülebilir bir hale gelir." },
  ],
  faqs: [
    { q: "LTV nasıl hesaplanır?", a: "En yaygın formül: LTV = (Aylık ARPU × Brüt Marj %) / Aylık Churn Oranı. Bu formül, tekrar eden gelir modelleri için müşteri başına kârlılığı ve ilişki süresini birleşik olarak ölçer." },
    { q: "İdeal LTV / CAC oranı nedir?", a: "3x ve üzeri sağlıklı kabul edilir. 1x-2x aralığı birim ekonominin zayıf olduğunu, 5x üzeri ise büyüme kanallarına daha agresif yatırım yapılabileceğini gösterir." },
    { q: "LTV hesabında brüt marjı neden kullanıyoruz?", a: "Çünkü ciro değil, gerçek kâr üreten gelir önemlidir. Hosting, ödeme komisyonu, destek maliyeti gibi COGS kalemleri düşüldükten sonraki brüt marj, LTV'nin gerçek finansal değerini yansıtır." },
    { q: "LTV'yi artırmanın en hızlı yolu nedir?", a: "Churn'ü düşürmek çoğu zaman en yüksek etkili kaldıraçtır: aylık churn'ün %5'ten %3'e inmesi LTV'yi yaklaşık %67 artırır. Ardından upsell ile ARPU büyütmek gelir." },
  ],
};

export const roas: ToolContent = {
  slug: "roas",
  path: "/ucretsiz-araclar/roas-hesaplayici",
  title: "ROAS Hesaplayıcı",
  description: "Reklam harcaması getiri oranınızı (ROAS) reklam gelirini reklam harcamasına oranlayarak hesaplayın.",
  intro: "ROAS (Return on Ad Spend), reklam harcamalarınızın kaç katı gelir ürettiğini gösterir. Kampanya karlılığını ölçmek için en yaygın kullanılan performans metriğidir.",
  seoParagraphs: [
    { heading: "ROAS Nedir ve Nasıl Yorumlanır?", body: "ROAS (Return on Ad Spend), reklam yatırımının doğrudan getirisini ölçen bir performans pazarlaması metriğidir. Formül basittir: ROAS = Reklam Geliri / Reklam Harcaması. 4x ROAS, harcanan her 1₺'nin 4₺ gelir ürettiği anlamına gelir. Meta Ads, Google Ads ve LinkedIn Ads gibi platformlarda kampanya optimizasyonunun temel hedef değişkenidir." },
    { body: "ROAS ciro üzerinden ölçüldüğü için tek başına kârlılığı garanti etmez. Ürün maliyeti, kargo, iade oranı ve operasyonel giderler dikkate alındığında break-even ROAS her işletme için farklıdır. Örneğin brüt marjı %30 olan bir e-ticaret markası için başabaş ROAS yaklaşık 3.33x'tir; bu eşiğin altındaki her kampanya para kaybettiriyor demektir. Bu nedenle ROAS'ın POAS (Profit on Ad Spend) ile birlikte takip edilmesi önerilir." },
    { body: "ROAS'ı iyileştirmek için hedef kitleyi daraltmak, yaratıcı (creative) rotasyonunu hızlandırmak, landing page dönüşüm oranını artırmak ve teklif stratejilerini değer bazlı (value-based bidding) modellere geçirmek en etkili yöntemlerdir." },
  ],
  faqs: [
    { q: "İyi bir ROAS değeri nedir?", a: "Sektöre ve marja göre değişir. E-ticaret için genel kabul 4x civarıdır; ancak brüt marj düşükse 5-6x, yüksek marjlı dijital ürünlerde ise 2-3x bile kârlı olabilir. Doğru referans, işletmenizin başabaş ROAS'ıdır." },
    { q: "ROAS ile ROI arasındaki fark nedir?", a: "ROAS yalnızca reklam gelirini reklam harcamasına oranlar. ROI ise net kârı (gelir - toplam maliyet) yatırıma böler ve gerçek kârlılığı gösterir. ROAS pazarlama, ROI ise finans metriğidir." },
    { q: "Break-even ROAS nasıl hesaplanır?", a: "Başabaş ROAS = 1 / Brüt Marj. Örneğin %25 brüt marjda başabaş ROAS 4x'tir; bunun altındaki her kampanya zarardır." },
    { q: "ROAS neden POAS ile birlikte takip edilmelidir?", a: "ROAS ciroya bakar; POAS ise kâra bakar. Ürün maliyeti, iade oranı ve kargo dahil edildiğinde iki metrik ciddi şekilde ayrışabilir. Kârlı büyüme için karar POAS ile verilmelidir." },
    { q: "ROAS nasıl artırılır?", a: "Üç kaldıraç vardır: dönüşüm oranını yükseltmek (landing page, teklif, sayfa hızı), sepet/ortalama sipariş değerini büyütmek (paket, çapraz satış, kargo eşiği) ve tıklama maliyetini düşürmek (arama terimi temizliği, kreatif tazeleme, kitle daraltma). Kampanya bazında hangisinin zayıf olduğunu görmek için önce dönüşüm oranı ve ortalama sipariş değerini ayrı ayrı ölçün." },
    { q: "ROAS hangi sıklıkla değerlendirilmeli?", a: "Günlük ROAS oynaktır ve yanlış karar aldırır. Anlamlı değerlendirme, dönüşüm gecikmesini (attribution window) kapsayacak şekilde en az 7 günlük hareketli pencerede yapılır; bütçe kaydırma kararları için 14-28 günlük veri daha güvenlidir." },
  ],
  relatedTools: [
    { label: "Dönüşüm Oranı Hesaplayıcı", href: "/ucretsiz-araclar/donusum-orani-hesaplayici", note: "ROAS'ın en güçlü kaldıracı" },
    { label: "Brüt Kar Marjı Hesaplayıcı", href: "/ucretsiz-araclar/brut-kar-marji-hesaplayici", note: "Başabaş ROAS = 1 / brüt marj" },
    { label: "UTM Link Oluşturucu", href: "/ucretsiz-araclar/utm-link-olusturucu", note: "Kanal bazlı doğru ölçüm" },
  ],
  relatedPost: { label: "Google Ads'te Performansı Katlamanın 7 Yolu", href: "/blog/google-ads-performans-optimizasyonu" },
};

export const utm: ToolContent = {
  slug: "utm",
  path: "/ucretsiz-araclar/utm-link-olusturucu",
  title: "UTM Link Oluşturucu",
  description: "Kampanya takibi için UTM parametreli linkleri hızlıca oluşturun ve pazarlama kanallarınızı doğru ölçün.",
  intro: "UTM parametreleri, Google Analytics ve diğer analitik araçlarda trafik kaynaklarını doğru izlemenizi sağlar. Aşağıdaki alanları doldurarak kampanya linkinizi oluşturun.",
  seoParagraphs: [
    { heading: "UTM Parametreleri Nedir?", body: "UTM parametreleri, bir URL'nin sonuna eklenen ve trafiğin hangi kaynaktan, kanaldan ve kampanyadan geldiğini analitik araçlara söyleyen etiketlerdir. Google Analytics 4, Mixpanel, Amplitude ve HubSpot gibi araçların büyük çoğunluğu bu parametreleri otomatik olarak yakalar ve raporlarda kanal atıfını (attribution) UTM'lere göre yapar." },
    { body: "Beş temel parametre vardır: utm_source (trafik kaynağı — örn. google, newsletter), utm_medium (kanal türü — örn. cpc, email, social), utm_campaign (kampanya adı), utm_term (ücretli aramada anahtar kelime) ve utm_content (aynı kampanyadaki farklı yaratıcıları/reklamları ayırt etmek için). Source, medium ve campaign her zaman doldurulmalı; term ve content ise A/B test ve varyant ayrımı için opsiyoneldir." },
    { body: "UTM disiplini olmadan pazarlama raporları güvenilirliğini kaybeder. Şirket içinde tutarlı bir isimlendirme standardı (küçük harf, tire ayırıcı, sabit kısaltmalar) oluşturmak; büyük/küçük harf karışıklığı ve yazım farklılıklarından kaynaklanan parçalı raporlamayı önler." },
  ],
  faqs: [
    { q: "Hangi UTM parametreleri zorunludur?", a: "Google Analytics'in doğru atıf yapabilmesi için en az utm_source, utm_medium ve utm_campaign doldurulmalıdır. utm_term ve utm_content opsiyoneldir ve genellikle A/B test veya yaratıcı bazlı analiz için kullanılır." },
    { q: "UTM etiketlerinde büyük/küçük harf önemli mi?", a: "Evet, Google Analytics UTM değerlerine büyük/küçük harf duyarlı davranır. 'Facebook' ve 'facebook' iki farklı kaynak olarak raporlanır. Bu nedenle tüm ekipte küçük harf standardı uygulanmalıdır." },
    { q: "İç link tıklamalarına UTM eklemeli miyim?", a: "Hayır. Aynı domain içindeki linklere UTM eklemek oturumu sıfırlar ve atıfı bozar. UTM yalnızca dış kanallardan (reklam, e-posta, sosyal medya) gelen trafik için kullanılmalıdır." },
    { q: "UTM linkleri SEO'yu olumsuz etkiler mi?", a: "Doğrudan bir cezası yoktur; ancak organik arama linklerinde UTM kullanmak yinelenen içerik ve rel=canonical sorunlarına yol açabilir. Organik trafik için UTM önerilmez." },
  ],
};

export const llmsTxt: ToolContent = {
  slug: "llms-txt",
  path: "/ucretsiz-araclar/llms-txt-olusturucu",
  title: "llms.txt Oluşturucu",
  description:
    "Sitenizin AI botları (ClaudeBot, GPTBot, Perplexity) tarafından daha iyi anlaşılması için ücretsiz llms.txt dosyası oluşturun ve indirin.",
  intro:
    "Site adınızı, kısa açıklamanızı ve önemli dokümantasyon/örnek/opsiyonel bağlantılarınızı girin. Araç, girdilerinizi llmstxt.org standardına uygun bir Markdown dosyasına dönüştürür; canlı önizleme ile birlikte tek tıkla .txt olarak indirebilirsiniz.",
  seoParagraphs: [
    { heading: "llms.txt Nedir ve Neden Önemlidir?", body: "llms.txt, bir web sitesinin köküne konulan ve büyük dil modellerine (LLM) sitenin ne hakkında olduğunu, hangi sayfaların önemli olduğunu ve içeriklerin nasıl gruplandığını kısa, yapılandırılmış bir Markdown formatında anlatan bir dosyadır. ClaudeBot, GPTBot, PerplexityBot ve benzeri AI tarayıcıları; bir siteyi 'anlamaya' çalışırken önce bu dosyaya bakarak sayfaların, dokümantasyonun ve öne çıkan kaynakların haritasını tek noktadan alabilir." },
    { body: "robots.txt tarayıcılara nereye girebileceklerini söyler; sitemap.xml ise indekslenmesi gereken URL'lerin makine dostu bir listesini verir. llms.txt bunların yerine geçmez — tamamlayıcıdır. Farkı, insan tarafından yazılmış kısa bir 'site rehberi' sunmasıdır: proje adı, tek cümlelik açıklama, önemli dokümantasyon bağlantıları, örnekler ve opsiyonel kaynaklar. Bu sayede LLM'ler sitenizi tararken bağlamı çok daha hızlı kurar ve yanıtlarında daha isabetli referans verir." },
    { body: "Özellikle SaaS ürünleri, dokümantasyon siteleri, kişisel portföyler ve içerik-yoğun projeler için llms.txt eklemek, üretken arama motorlarında (Generative Engine Optimization / GEO) doğru şekilde temsil edilmenin en hızlı yoludur. Dosyayı hazırlamak dakikalar sürer; ancak AI botlarının sitenizi keşfetme ve alıntılama şeklini doğrudan etkiler." },
  ],
  faqs: [
    { q: "llms.txt dosyasını nereye yüklemeliyim?", a: "Dosya sitenizin kök dizinine yerleştirilmeli ve https://alanadiniz.com/llms.txt adresinden erişilebilir olmalıdır. Alt dizin veya alt alan adına konulursa AI tarayıcılar bulmayabilir." },
    { q: "robots.txt ile llms.txt arasındaki fark nedir?", a: "robots.txt tarayıcılara hangi yolları taramaya izin verildiğini söyleyen bir erişim kuralları dosyasıdır. llms.txt ise sitenizin ne hakkında olduğunu ve hangi kaynakların önemli olduğunu LLM'lere kısa, insan tarafından yazılmış bir rehber olarak sunar. Biri erişimi düzenler, diğeri bağlamı anlatır — birbirinin yerine geçmez." },
    { q: "Bu dosya SEO sıralamamı etkiler mi?", a: "Hayır. llms.txt, Google veya Bing gibi klasik arama motorlarının sıralama sinyallerinden biri değildir. Amacı; ChatGPT, Claude, Perplexity gibi LLM tabanlı sistemlerin sitenizi daha doğru anlaması ve alıntılamasıdır. SEO'yu değil, üretken arama görünürlüğünü (GEO) hedefler." },
    { q: "llms.txt'ye hangi bilgiler eklenmelidir?", a: "En az proje/site adı, tek cümlelik bir açıklama ve önemli dokümantasyon sayfalarının bağlantıları bulunmalıdır. İsteğe bağlı olarak örnekler, blog yazıları, API referansları ve opsiyonel kaynak bağlantıları da eklenebilir. Dosya kısa ve öz olmalı; ayrıntılı içerik zaten linklenen sayfalarda yer alır." },
  ],
};

export const trTools = { arr, cac, churn, ltv, roas, utm, llmsTxt };

export const grossMargin: ToolContent = {
  slug: "brut-kar-marji",
  path: "/ucretsiz-araclar/brut-kar-marji-hesaplayici",
  title: "Brüt Kar Marjı Hesaplayıcı",
  description:
    "Brüt kar marjınızı saniyeler içinde hesaplayın. Gelir ve maliyet bilgilerinizi girin, kârlılığınızı anında görün.",
  intro:
    "Brüt kar marjı, satılan malın maliyeti (COGS) düşüldükten sonra gelirinizin yüzde kaçının elinizde kaldığını gösterir. Toplam gelirinizi ve COGS'unuzu girin; sonucu hem yüzde hem tutar olarak görün.",
  applicationCategory: "FinanceApplication",
  seoParagraphs: [
    { heading: "Brüt Kar Marjı Nasıl Hesaplanır?", body: "Formül basittir: Brüt Kar Marjı = ((Gelir − COGS) / Gelir) × 100. COGS (Cost of Goods Sold), ürünü üretmek veya satın almak için doğrudan katlanılan maliyetlerdir — hammadde, üretim işçiliği, tedarikçi faturaları, ürüne doğrudan atfedilebilen kargo ve paketleme. Pazarlama, kira, yönetim maaşları gibi operasyonel giderler bu hesaba girmez; onlar net kar marjında devreye girer." },
    { body: "Brüt kar marjı, fiyatlandırma gücünüzün ve tedarik verimliliğinizin en doğrudan göstergesidir. Marj düşüyorsa ya satış fiyatı baskı altında ya da birim maliyetler artıyordur. Bu iki nedeni ayırt etmek için marjı ürün/kategori kırılımında takip etmek gerekir; toplam marj, kârlı ve zararlı ürünlerin ortalamasını gizler." },
    { heading: "E-Ticaret Sitenizde Dönüşüm Oranını Ölçmek", body: "E-ticaret sitenizde ziyaretçi başına satış oranını ölçmek için dönüşümü \"tamamlanmış sipariş\" olarak tanımlayın ve oranı oturum değil, tekil ziyaretçi bazında da kontrol edin. Retail senaryosunda tek bir toplam oran yanıltıcıdır: kategori sayfası, ürün detay sayfası ve sepet-ödeme adımları ayrı ayrı ölçülmelidir. Tipik huni şöyle işler — ziyaretçilerin bir kısmı ürün sayfasına iner, bunların bir kısmı sepete ekler, sepete ekleyenlerin ortalama %60-80'i ödeme adımında kaybedilir. Kargo ücretinin geç gösterilmesi, zorunlu üyelik, sınırlı ödeme seçeneği ve yavaş mobil deneyim bu kaybın en yaygın dört nedenidir. Mobil ve masaüstü oranlarını ayrı izlemek, sezon ve kampanya dönemlerini ayrı kohort saymak e-ticarette şarttır." },
    { heading: "Sektöre Göre Referans Aralıkları", body: "Kesin bir hedef yoktur; iş modeline göre büyük farklılık gösterir. Yönlendirici olarak: e-ticaret ve perakendede brüt marj çoğunlukla %20-50 bandında, hizmet/ajans işlerinde %40-60, SaaS ve dijital ürünlerde ise %70-90 aralığında görülür. Bunlar kesin iddia değil, karşılaştırma için kaba referanslardır — kendi geçmiş dönem trendiniz her zaman sektör ortalamasından daha anlamlı bir kıyas noktasıdır." },
  ],
  faqs: [
    { q: "Brüt kar marjı nedir?", a: "Brüt kar marjı, toplam gelirden satılan malın maliyeti (COGS) düşüldükten sonra kalan tutarın gelire oranıdır: ((Gelir − COGS) / Gelir) × 100. Ürün veya hizmetinizin temel kârlılığını, operasyonel giderlerden bağımsız olarak gösterir." },
    { q: "İyi bir brüt kar marjı nedir?", a: "İş modeline bağlıdır. Yönlendirici aralıklar: e-ticaret %20-50, hizmet işleri %40-60, SaaS %70-90. Sabit bir eşik yerine kendi trendinizi izleyin — marjın dönemler arası düşmesi, fiyat baskısı veya artan birim maliyet sinyalidir." },
    { q: "COGS'a neler dahildir?", a: "Ürünü üretmek veya satılabilir hale getirmek için katlanılan doğrudan maliyetler: hammadde, üretim işçiliği, tedarikçi ve fason faturaları, ürüne doğrudan atfedilebilen kargo, paketleme ve ödeme komisyonu. Kira, pazarlama bütçesi, yönetim maaşları ve vergi COGS'a girmez." },
    { q: "Brüt kar marjı ile net kar marjı arasındaki fark nedir?", a: "Brüt kar marjı yalnızca COGS'u düşer ve ürün seviyesindeki kârlılığı ölçer. Net kar marjı ise operasyonel giderler, pazarlama, faiz ve vergi dahil tüm giderleri düşer; işletmenin gerçek kârlılığını gösterir. İkisini birlikte okumak gerekir — Net Kar Marjı Hesaplayıcı ile karşılaştırabilirsiniz." },
  ],
  relatedTools: [
    { label: "Net Kar Marjı Hesaplayıcı", href: "/ucretsiz-araclar/net-kar-marji-hesaplayici", note: "Tüm giderler dahil gerçek kârlılık" },
    { label: "ROAS Hesaplayıcı", href: "/ucretsiz-araclar/roas-hesaplayici", note: "Reklam harcaması getirisi" },
    { label: "CAC Hesaplayıcı", href: "/ucretsiz-araclar/cac-hesaplayici", note: "Müşteri edinme maliyeti" },
  ],
  relatedPost: { label: "SaaS Metrikleri: ARR, CAC ve LTV", href: "/blog/saas-metrikleri-arr-cac-ltv" },
  externalSource: { label: "Kaynak: Investopedia — Gross Profit Margin", href: "https://www.investopedia.com/terms/g/gross_profit_margin.asp" },
};

export const netMargin: ToolContent = {
  slug: "net-kar-marji",
  path: "/ucretsiz-araclar/net-kar-marji-hesaplayici",
  title: "Net Kar Marjı Hesaplayıcı",
  description:
    "Net kar marjınızı saniyeler içinde hesaplayın. Gelir ve tüm giderlerinizi girin, işletmenizin gerçek kârlılığını görün.",
  intro:
    "Net kar marjı, tüm giderler (COGS, operasyonel giderler, faiz ve vergi dahil) düşüldükten sonra gelirinizin yüzde kaçının kâr olarak kaldığını gösterir. Toplam gelir ve toplam gideri girin; sonucu yüzde ve tutar olarak görün.",
  applicationCategory: "FinanceApplication",
  seoParagraphs: [
    { heading: "Net Kar Marjı Nasıl Hesaplanır?", body: "Formül: Net Kar Marjı = ((Gelir − Toplam Giderler) / Gelir) × 100. Toplam giderler kalemi, brüt marjdan farklı olarak yalnızca ürün maliyetini değil işletmenin tüm maliyet yapısını kapsar: COGS, personel, kira, yazılım abonelikleri, pazarlama ve reklam bütçesi, muhasebe/danışmanlık, amortisman, kredi faizi ve vergiler." },
    { body: "Net kar marjı, işletmenin nihai verimlilik göstergesidir. Yüksek brüt marja rağmen düşük net marj, sorunun üretim veya tedarikte değil gider yapısında olduğunu söyler — genellikle şişmiş pazarlama harcaması, düşük verimli ekip yapısı veya finansman maliyeti. Bu nedenle iki marjı yan yana okumak, tek başına herhangi birini okumaktan çok daha bilgilendiricidir." },
    { heading: "Marjı Yorumlarken Dikkat Edilecekler", body: "Net marj dönemsel dalgalanmaya açıktır: tek seferlik yatırımlar, vergi zamanlaması veya kur farkı tek bir çeyreği yanıltıcı gösterebilir. Aylık tek ölçüm yerine 3-12 aylık hareketli ortalamayı takip edin ve mümkünse tek seferlik kalemleri ayrıştırarak normalize edilmiş bir marj da hesaplayın." },
  ],
  faqs: [
    { q: "Net kar marjı nedir?", a: "Net kar marjı, tüm giderler düşüldükten sonra kalan net kârın gelire oranıdır: ((Gelir − Toplam Giderler) / Gelir) × 100. İşletmenin her 100 TL gelirden kaç TL'yi gerçekten kâr olarak elde tuttuğunu gösterir." },
    { q: "İyi bir net kar marjı nedir?", a: "Sektöre göre değişir; yönlendirici olarak perakende ve e-ticarette %2-10, hizmet işlerinde %10-20, olgun SaaS şirketlerinde %15-25 aralığı sağlıklı kabul edilir. Büyüme aşamasındaki şirketlerde negatif net marj bilinçli bir tercih olabilir; kritik olan trendin yönü ve nakit yakma süresidir." },
    { q: "Net kar marjı neden brüt kar marjından düşük olur?", a: "Çünkü brüt marj yalnızca COGS'u düşer; net marj ise bunun üzerine pazarlama, personel, kira, yazılım, faiz ve vergi gibi tüm dolaylı giderleri de ekler. İki marj arasındaki fark, işletmenizin operasyonel gider yükünü gösterir." },
    { q: "Toplam giderlere neler dahil edilmeli?", a: "COGS'un yanı sıra tüm operasyonel giderler: personel maaş ve yan hakları, kira ve faturalar, yazılım abonelikleri, pazarlama ve reklam harcaması, danışmanlık ve muhasebe, amortisman, kredi faizi ve vergiler. Yalnızca doğrudan ürün maliyetini ayrı görmek isterseniz Brüt Kar Marjı Hesaplayıcı'yı kullanın." },
  ],
  relatedTools: [
    { label: "Brüt Kar Marjı Hesaplayıcı", href: "/ucretsiz-araclar/brut-kar-marji-hesaplayici", note: "Yalnızca COGS düşülmüş kârlılık" },
    { label: "CAC Hesaplayıcı", href: "/ucretsiz-araclar/cac-hesaplayici", note: "Müşteri edinme maliyeti" },
    { label: "ROAS Hesaplayıcı", href: "/ucretsiz-araclar/roas-hesaplayici", note: "Reklam harcaması getirisi" },
  ],
  relatedPost: { label: "SaaS Metrikleri: ARR, CAC ve LTV", href: "/blog/saas-metrikleri-arr-cac-ltv" },
  externalSource: { label: "Kaynak: Investopedia — Net Profit Margin", href: "https://www.investopedia.com/terms/n/net_margin.asp" },
};

export const conversionRate: ToolContent = {
  slug: "donusum-orani",
  path: "/ucretsiz-araclar/donusum-orani-hesaplayici",
  title: "Dönüşüm Oranı Hesaplayıcı",
  description:
    "Web sitenizin, kampanyanızın veya e-ticaretinizin dönüşüm oranını ücretsiz olarak saniyeler içinde hesaplayın.",
  intro:
    "Toplam ziyaretçi ve dönüşüm sayınızı girin; dönüşüm oranınızı anında görün. Hedef bir oran belirlerseniz aradaki farkı ve hedefe ulaşmak için gereken ek dönüşüm sayısını da hesaplar.",
  seoParagraphs: [
    { heading: "Dönüşüm Oranı Nasıl Hesaplanır?", body: "Formül basittir: Dönüşüm Oranı = (Dönüşüm Sayısı / Toplam Ziyaretçi) × 100. Burada 'dönüşüm', sayfada tanımladığınız değerli aksiyondur: satın alma, form doldurma, demo talebi, teklif isteği, uygulama indirme veya newsletter kaydı. Aynı sayfada birden fazla dönüşüm türü varsa her biri için ayrı oran takip edilmelidir; hepsini tek bir sayıda toplamak asıl darboğazı gizler." },
    { body: "Dönüşüm oranı, trafik ile gelir arasındaki köprüdür. Trafiği artırmadan oranı yükseltmek, aynı reklam bütçesiyle daha fazla müşteri kazanmak demektir; bu nedenle CAC'ı düşürmenin en hızlı yolu genellikle dönüşüm oranı optimizasyonudur (CRO). Kaynak, cihaz ve kampanya kırılımında ölçmek şarttır — mobil ile masaüstü arasında iki kata varan farklar olağandır." },
    { heading: "Sektöre Göre Referans Aralıkları", body: "Kesin bir hedef yoktur; yönlendirici olarak: e-ticaret sitelerinde %1-4, B2B lead formlarında %2-5, landing page kampanyalarında %5-15, e-posta tıklamasından gelen trafikte ise daha yüksek oranlar görülebilir. Bunlar kaba referanslardır — asıl anlamlı kıyas, kendi geçmiş dönem trendiniz ve aynı kanal içindeki varyant testlerinizdir." },
  ],
  faqs: [
    { q: "İyi bir dönüşüm oranı nedir?", a: "Sektöre ve trafiğin niteliğine göre değişir. Yönlendirici aralıklar: e-ticaret %1-4, B2B form doldurma %2-5, tekil landing page kampanyaları %5-15. Sabit bir eşik kovalamak yerine kendi trendinizi ve kanal bazlı farkları izleyin." },
    { q: "E-ticaret için iyi bir dönüşüm oranı nedir?", a: "E-ticarette genel referans aralığı %1-4'tür; %2-3 bandı çoğu perakende mağaza için sağlıklı kabul edilir. Ancak oran kategoriye ve trafik kalitesine göre çok değişir: yüksek fiyatlı veya değerlendirme süresi uzun ürünlerde %1'in altı normalken, tekrar satın alma oranı yüksek hızlı tüketim kategorilerinde %5 ve üzeri görülebilir. Marka aramasından gelen trafik, jenerik reklam trafiğinin birkaç katı dönüşür; bu yüzden tek bir toplam oranı değil, kanal ve cihaz kırılımını izleyin." },
    { q: "Dönüşüm oranı nasıl artırılır?", a: "En etkili adımlar: sayfa hızını iyileştirmek, tek ve net bir çağrı-aksiyon (CTA) kullanmak, form alan sayısını azaltmak, mesaj-reklam uyumunu (message match) sağlamak, sosyal kanıt ve güven unsurları eklemek ve düzenli A/B testleri yürütmektir. Değişiklikleri tek tek test edin; aynı anda çok şeyi değiştirmek nedeni gizler." },
    { q: "Dönüşüm oranı ile CTR arasındaki fark nedir?", a: "CTR (tıklama oranı) reklamı veya bağlantıyı görenlerin yüzde kaçının tıkladığını ölçer; dönüşüm oranı ise siteye gelenlerin yüzde kaçının hedeflenen aksiyonu tamamladığını ölçer. CTR reklam yaratıcısının, dönüşüm oranı ise landing page ve teklifin performansını gösterir." },
    { q: "Dönüşüm oranı hangi araçlarla ölçülür?", a: "Google Analytics 4 (anahtar etkinlikler), Google Tag Manager, Meta Ads ve Google Ads reklam panelleri, HubSpot gibi CRM'ler ve Hotjar/Microsoft Clarity gibi davranış analizi araçları en yaygın kullanılanlardır. Kaynak bazlı doğru ölçüm için kampanya linklerinizi UTM ile etiketlemeyi unutmayın." },
  ],
  relatedTools: [
    { label: "ROAS Hesaplayıcı", href: "/ucretsiz-araclar/roas-hesaplayici", note: "Reklam harcaması getirisi" },
    { label: "CAC Hesaplayıcı", href: "/ucretsiz-araclar/cac-hesaplayici", note: "Müşteri edinme maliyeti" },
    { label: "UTM Link Oluşturucu", href: "/ucretsiz-araclar/utm-link-olusturucu", note: "Kampanya takibi için doğru etiketleme" },
  ],
  relatedPost: { label: "Google Ads'te Performansı Katlamanın 7 Yolu", href: "/blog/google-ads-performans-optimizasyonu" },
  externalSource: { label: "Kaynak: Google Analytics Yardım Merkezi — Dönüşüm oranı", href: "https://support.google.com/analytics/answer/12966437" },
};

export const mrr: ToolContent = {
  slug: "mrr",
  path: "/ucretsiz-araclar/mrr-hesaplayici",
  title: "MRR Hesaplayıcı",
  description:
    "Aylık Yinelenen Gelirinizi (MRR) müşteri sayısı ve ortalama abonelik bedeliyle saniyeler içinde hesaplayın.",
  intro:
    "MRR (Monthly Recurring Revenue), abonelik iş modelinizin her ay tekrar eden gelirini gösterir. Müşteri sayınız ile ortalama aylık abonelik bedelini girin ya da doğrudan toplam aylık geliri yazın; MRR ve karşılık gelen ARR anında hesaplanır.",
  seoParagraphs: [
    { heading: "MRR Nedir ve Nasıl Hesaplanır?", body: "MRR (Monthly Recurring Revenue), abonelik tabanlı bir işletmenin bir ay boyunca tekrar etmesi beklenen sözleşmesel gelirinin toplamıdır. En yalın formülü MRR = Aktif Müşteri Sayısı × Ortalama Aylık Abonelik Bedeli (ARPA) şeklindedir. Yıllık ödenen planlar aylığa bölünerek (yıllık bedel / 12) MRR'ye eklenir; kurulum ücreti, danışmanlık ve tek seferlik satışlar ise MRR'ye dahil edilmez." },
    { heading: "MRR × 12 = ARR İlişkisi", body: "MRR ile ARR aynı gelirin iki farklı zaman ölçeğidir: ARR = MRR × 12. Aylık ölçek operasyonel karar almak (kampanya, fiyatlama, ekip kapasitesi) için, yıllık ölçek ise planlama, bütçeleme ve yatırımcı iletişimi için kullanılır. Bu ilişkinin doğru kurulabilmesi için MRR'nin normalize edilmiş olması, yani tüm faturalama dönemlerinin aylığa çevrilmiş olması gerekir. ARR tarafını görmek için ARR Hesaplayıcı'yı kullanabilirsiniz." },
    { body: "MRR'yi tek bir toplam sayı olarak izlemek yeterli değildir. New MRR (yeni müşteriler), Expansion MRR (upsell/cross-sell), Contraction MRR (plan küçültme) ve Churned MRR (iptaller) kırılımı, büyümenin nereden geldiğini ve nerede sızdırdığını gösterir. Net New MRR = New + Expansion − Contraction − Churned formülü, gerçek büyüme kalitesinin en dürüst göstergesidir." },
    { heading: "Örnek Hesaplama: 500 Müşterili Bir SaaS'ta MRR", body: "Diyelim ki ürününüzün 500 aktif müşterisi var. Bunların 400'ü aylık 800 ₺'lik Pro plandan, 100'ü ise yıllık 12.000 ₺ ödenen Business planından. Aylık planların katkısı 400 × 800 = 320.000 ₺. Yıllık planlar normalize edilir: 12.000 / 12 = 1.000 ₺ ve 100 × 1.000 = 100.000 ₺. Toplam MRR = 320.000 + 100.000 = 420.000 ₺, ARR ise 420.000 × 12 = 5.040.000 ₺ olur. Aynı ay 60.000 ₺'lik kurulum ve eğitim geliri faturalandıysa bu tutar MRR'ye eklenmez." },
    { body: "Aynı örnekte ay içinde 25.000 ₺ yeni MRR, 18.000 ₺ genişleme, 6.000 ₺ daralma ve 14.000 ₺ churn gerçekleştiyse Net New MRR = 25.000 + 18.000 − 6.000 − 14.000 = 23.000 ₺'dir. Yani toplam MRR 420.000 ₺'den 443.000 ₺'ye çıkar; aylık büyüme yaklaşık %5,5 olur. Bu kırılım olmadan yalnızca toplam MRR'ye bakmak, churn'ün yeni satışla maskelendiği durumları görünmez kılar." },
  ],
  faqs: [
    { q: "MRR ile ARR arasındaki fark nedir?", a: "MRR aylık yinelenen geliri, ARR ise yıllık yinelenen geliri ifade eder. İlişkileri basittir: ARR = MRR × 12. Aylık takip operasyonel kararlar, yıllık takip ise planlama ve yatırımcı raporlaması içindir." },
    { q: "MRR nedir ve nasıl hesaplanır?", a: "MRR (Monthly Recurring Revenue), abonelik modelinde her ay tekrar etmesi beklenen sözleşmesel gelirdir. Formülü MRR = Aktif Müşteri Sayısı × Ortalama Aylık Abonelik Bedeli (ARPA); farklı planlar varsa her planın müşteri sayısı × fiyatı toplanır ve yıllık planlar 12'ye bölünerek eklenir." },
    { q: "500 müşterili bir SaaS'ta MRR nasıl hesaplanır?", a: "Planları ayrı ayrı toplayın. Örnek: 400 müşteri × 800 ₺ aylık = 320.000 ₺; 100 müşteri × (12.000 ₺ yıllık / 12) = 100.000 ₺. Toplam MRR 420.000 ₺, ARR 5.040.000 ₺'dir. Kurulum ve danışmanlık gibi tek seferlik gelirler bu hesabın dışında kalır." },
    { q: "Yıllık ödenen abonelikler MRR'ye nasıl eklenir?", a: "Yıllık sözleşme bedeli 12'ye bölünerek aylık karşılığı bulunur ve MRR'ye o şekilde eklenir. Tüm yıllık tutarı ödeme yapıldığı ayın MRR'sine yazmak metriği yanıltıcı biçimde şişirir." },
    { q: "Tek seferlik gelirler MRR'ye dahil edilir mi?", a: "Hayır. Kurulum ücretleri, eğitim, danışmanlık ve tek seferlik lisans satışları yinelenen gelir değildir; MRR dışında tutulur. MRR yalnızca sözleşmesel ve tekrar eden abonelik gelirini içerir." },
    { q: "Net New MRR nedir?", a: "Net New MRR = Yeni MRR + Genişleme MRR − Daralma MRR − Kayıp (churn) MRR. Bir dönemde gelirin net olarak ne kadar arttığını gösterir; pozitif ve istikrarlı olması sağlıklı büyümenin işaretidir." },
    { q: "MRR büyümesi ile NRR arasındaki ilişki nedir?", a: "MRR büyümesi yeni müşteri satışını da içerir; NRR (Net Revenue Retention) ise yalnızca mevcut müşteri tabanından gelen genişleme, daralma ve churn'ü ölçer. Yeni satış durduğunda işinizin ne olacağını NRR söyler; NRR Hesaplayıcı ile ölçebilirsiniz." },
  ],
  relatedTools: [
    { label: "ARR Hesaplayıcı", href: "/ucretsiz-araclar/arr-hesaplayici", note: "MRR × 12 ile yıllık yinelenen gelir" },
    { label: "ARPA Hesaplayıcı", href: "/ucretsiz-araclar/arpa-hesaplayici", note: "Hesap başına ortalama gelir" },
    { label: "NRR Hesaplayıcı", href: "/ucretsiz-araclar/nrr-hesaplayici", note: "Net gelir tutundurma oranı" },
    { label: "CAC Hesaplayıcı", href: "/ucretsiz-araclar/cac-hesaplayici", note: "Müşteri edinme maliyeti" },
    { label: "SaaS Araçları", href: "/ucretsiz-araclar/saas-araclari", note: "Tüm SaaS metrik hesaplayıcıları" },
  ],
  relatedPost: { label: "SaaS Metrikleri: ARR, CAC ve LTV", href: "/blog/saas-metrikleri-arr-cac-ltv" },
};

export const arpa: ToolContent = {
  slug: "arpa",
  path: "/ucretsiz-araclar/arpa-hesaplayici",
  title: "ARPA Hesaplayıcı",
  description:
    "Hesap başına ortalama gelirinizi (ARPA) toplam MRR ve aktif hesap sayısıyla saniyeler içinde hesaplayın.",
  intro:
    "ARPA (Average Revenue Per Account), aktif hesap başına aylık ortalama gelirinizi gösterir. Toplam MRR'nizi ve aktif hesap sayınızı girin; ARPA ve yıllık karşılığı anında hesaplanır.",
  seoParagraphs: [
    { heading: "ARPA Nedir ve Nasıl Hesaplanır?", body: "ARPA (Average Revenue Per Account), toplam aylık yinelenen gelirin aktif hesap sayısına bölünmesiyle bulunur: ARPA = Toplam MRR / Aktif Hesap Sayısı. Bazı ekipler aynı metriği ARPU (Average Revenue Per User) olarak adlandırır; fark, birimin kullanıcı mı yoksa hesap (şirket/organizasyon) mı olduğudur. B2B SaaS'ta doğru birim genellikle hesaptır." },
    { body: "ARPA, fiyatlandırma stratejinizin ve müşteri segmentinizin aynadaki yansımasıdır. Yükselen ARPA; başarılı upsell, daha üst paketlere geçiş veya daha büyük müşterilere kayma anlamına gelir. Düşen ARPA ise indirim baskısı, küçük müşterilere kayma ya da plan küçültmelere (contraction) işaret eder. Bu nedenle ARPA'yı segment ve kohort bazında izlemek, toplam ortalamadan çok daha bilgilendiricidir." },
    { body: "ARPA tek başına değil, CAC ve LTV ile birlikte anlam kazanır. LTV = ARPA × brüt marj / churn oranı yaklaşımıyla ARPA doğrudan yaşam boyu değeri belirler; ARPA'yı %20 artırmak, aynı CAC ile birim ekonomiyi belirgin biçimde iyileştirir. Bu yüzden birçok SaaS için büyümenin en ucuz kaldıracı yeni müşteri değil, mevcut müşteride ARPA artışıdır." },
    { heading: "Örnek Hesaplama: 500 Hesaplı Bir SaaS'ta ARPA", body: "Toplam MRR'si 420.000 ₺ olan ve 500 aktif hesabı bulunan bir SaaS'ta ARPA = 420.000 / 500 = 840 ₺'dir; yıllık karşılığı 840 × 12 = 10.080 ₺ olur. Aynı şirket bir sonraki çeyrekte 40 hesabı üst pakete taşıyıp MRR'yi 470.000 ₺'ye çıkarır ve hesap sayısı 505'te kalırsa ARPA 930 ₺'ye yükselir — yani gelir artışının kaynağı yeni müşteri değil, mevcut müşteride derinleşmedir." },
    { body: "Bu ayrımı görmek önemlidir: ARPA sabitken MRR'nin büyümesi hacim büyümesidir, ARPA'nın da büyümesi ise değer büyümesidir. CAC'ı 6.000 ₺ olan bu örnekte ARPA'nın 840'tan 930 ₺'ye çıkması, CAC geri kazanım süresini yaklaşık 7,1 aydan 6,5 aya indirir." },
  ],
  faqs: [
    { q: "ARPA ile ARPU arasındaki fark nedir?", a: "İkisi de ortalama geliri ölçer; ARPA hesap (şirket) başına, ARPU ise kullanıcı başına hesaplanır. Bir hesapta birden fazla kullanıcı bulunan B2B SaaS ürünlerinde doğru metrik genellikle ARPA'dır." },
    { q: "ARPA nedir ve nasıl hesaplanır?", a: "ARPA (Average Revenue Per Account), aktif hesap başına düşen ortalama aylık yinelenen gelirdir. Formülü ARPA = Toplam MRR / Aktif Hesap Sayısı'dır. Örneğin 420.000 ₺ MRR ve 500 hesapta ARPA 840 ₺ olur." },
    { q: "ARPA ile MRR arasındaki ilişki nedir?", a: "MRR = ARPA × Aktif Hesap Sayısı. Yani MRR'yi büyütmenin iki yolu vardır: daha fazla hesap kazanmak (hacim) veya hesap başına geliri artırmak (değer). ARPA takibi, büyümenin bu iki kaynağını birbirinden ayırmanızı sağlar." },
    { q: "ARPA hesaplamasına hangi gelirler dahil edilir?", a: "Yalnızca yinelenen abonelik geliri (MRR) dahil edilir. Kurulum ücreti, danışmanlık ve tek seferlik satışlar hariç tutulur; aksi hâlde ortalama yapay olarak yükselir." },
    { q: "İyi bir ARPA değeri nedir?", a: "Mutlak bir eşik yoktur; segmentinize bağlıdır. SMB odaklı ürünlerde aylık birkaç yüz birim normalken enterprise'da binlerce birim görülür. Anlamlı kıyas, kendi ARPA trendiniz ve CAC ile oranıdır." },
    { q: "ARPA nasıl artırılır?", a: "Paket ve fiyat mimarisini gözden geçirmek, kullanım bazlı ek modüller sunmak, yıllık plana geçişi teşvik etmek, upsell/cross-sell akışları kurmak ve düşük değerli segmente odağı azaltmak en etkili yöntemlerdir." },
  ],
  relatedTools: [
    { label: "MRR Hesaplayıcı", href: "/ucretsiz-araclar/mrr-hesaplayici", note: "Aylık yinelenen gelir" },
    { label: "ARR Hesaplayıcı", href: "/ucretsiz-araclar/arr-hesaplayici", note: "Yıllık yinelenen gelir" },
    { label: "NRR Hesaplayıcı", href: "/ucretsiz-araclar/nrr-hesaplayici", note: "Mevcut müşteriden gelen büyüme" },
    { label: "CAC Hesaplayıcı", href: "/ucretsiz-araclar/cac-hesaplayici", note: "Müşteri edinme maliyeti" },
    { label: "SaaS Araçları", href: "/ucretsiz-araclar/saas-araclari", note: "Tüm SaaS metrik hesaplayıcıları" },
  ],
  relatedPost: { label: "SaaS Metrikleri: ARR, CAC ve LTV", href: "/blog/saas-metrikleri-arr-cac-ltv" },
};

export const nrr: ToolContent = {
  slug: "nrr",
  path: "/ucretsiz-araclar/nrr-hesaplayici",
  title: "NRR Hesaplayıcı",
  description:
    "Net Revenue Retention (NRR) oranınızı başlangıç, genişleme, daralma ve kayıp MRR değerleriyle ücretsiz hesaplayın.",
  intro:
    "NRR (Net Revenue Retention), mevcut müşteri tabanınızın tek başına ne kadar büyüdüğünü gösterir. Dönem başı MRR ile genişleme, daralma ve kayıp MRR değerlerinizi girin; NRR ve brüt tutundurma oranı anında hesaplansın.",
  applicationCategory: "FinanceApplication",
  seoParagraphs: [
    { heading: "NRR (Net Revenue Retention) Nedir?", body: "NRR, bir dönem başındaki müşteri tabanının aynı dönem sonunda ürettiği gelirin, başlangıç gelirine oranıdır. Formülü NRR = (Başlangıç MRR + Genişleme MRR − Daralma MRR − Kaybedilen MRR) / Başlangıç MRR × 100 şeklindedir. Kritik nokta şudur: hesaba yeni kazanılan müşteriler dahil edilmez. Bu yüzden NRR, satış motorunu kapatsanız bile işletmenizin büyüyüp büyümeyeceğini gösteren tek metriktir." },
    { heading: "Örnek Hesaplama", body: "Dönem başı MRR'si 400.000 ₺ olan bir SaaS'ta ay içinde 60.000 ₺ genişleme (upsell, koltuk artışı), 15.000 ₺ daralma (plan küçültme) ve 25.000 ₺ churn gerçekleşti. NRR = (400.000 + 60.000 − 15.000 − 25.000) / 400.000 × 100 = %105. Yani hiç yeni müşteri kazanılmasa bile gelir %5 büyümüş olur. Aynı örnekte brüt tutundurma (GRR) = (400.000 − 15.000 − 25.000) / 400.000 × 100 = %90'dır; aradaki 15 puanlık fark tamamen genişlemeden gelir." },
    { heading: "Sağlıklı NRR Aralıkları", body: "Genel kabul gören referanslar: SMB odaklı SaaS'larda %90-100, mid-market'te %100-110, enterprise ve kullanım bazlı fiyatlayan ürünlerde %120 ve üzeri. %100'ün altı, mevcut tabanın eridiğini ve büyümenin tamamen yeni satışa bağımlı olduğunu gösterir; bu da CAC baskısını sürekli artırır. %120 üzeri NRR ise yatırımcıların en yüksek çarpanı verdiği profildir." },
    { body: "NRR'yi iyileştirmenin yolu genellikle satıştan değil üründen ve müşteri başarısından geçer: onboarding'i hızlandırmak, kullanım bazlı fiyat basamakları kurmak, koltuk/modül genişlemesini kolaylaştırmak ve risk skoru ile churn'ü erken yakalamak. NRR'yi kohort ve segment kırılımında izlemek, hangi müşteri profilinin gerçekten genişlediğini gösterir." },
  ],
  faqs: [
    { q: "NRR nedir ve nasıl hesaplanır?", a: "NRR (Net Revenue Retention), mevcut müşterilerden gelen gelirin dönem içindeki net değişimidir. Formül: NRR = (Başlangıç MRR + Genişleme MRR − Daralma MRR − Kaybedilen MRR) / Başlangıç MRR × 100. Yeni müşteri geliri bu hesaba girmez." },
    { q: "İyi bir NRR oranı nedir?", a: "%100 nötr eşiktir: taban ne büyüyor ne küçülüyor demektir. SMB'de %90-100 kabul edilebilir, mid-market'te %100-110 iyi, enterprise ve kullanım bazlı modellerde %120 ve üzeri mükemmel sayılır. %100 altı, büyümenin tamamen yeni satışa bağımlı olduğu anlamına gelir." },
    { q: "NRR ile GRR arasındaki fark nedir?", a: "GRR (Gross Revenue Retention) yalnızca kayıpları sayar ve asla %100'ü geçemez: (Başlangıç − Daralma − Churn) / Başlangıç. NRR ise genişlemeyi de eklediği için %100'ün üzerine çıkabilir. GRR ürün yapışkanlığını, NRR ise büyüme potansiyelini ölçer." },
    { q: "NRR neden ARR'dan daha önemli kabul edilir?", a: "ARR gelirin büyüklüğünü söyler, NRR ise o gelirin kalitesini. Yüksek ARR'a rağmen düşük NRR, kovanın deliğini yeni satışla kapattığınız anlamına gelir; yeni satış yavaşladığı anda büyüme durur. Yatırımcıların değerleme çarpanını en çok etkileyen metriklerden biri bu yüzden NRR'dir." },
    { q: "Negatif churn ne demektir?", a: "Genişleme gelirinin kaybedilen geliri aşması, yani NRR'nin %100'ün üzerinde olması durumudur. Bu profildeki şirketler hiç yeni müşteri kazanmasa bile büyür ve pazarlama bütçesini daha agresif kullanabilir." },
    { q: "NRR hangi sıklıkla ölçülmelidir?", a: "Aylık MRR üzerinden hesaplanıp 12 aylık kayan pencereyle raporlanması en yaygın pratiktir. Küçük müşteri tabanlarında tek bir büyük hesabın hareketi aylık NRR'yi çok oynatacağı için çeyreklik ölçüm daha güvenilirdir." },
  ],
  relatedTools: [
    { label: "ARR Hesaplayıcı", href: "/ucretsiz-araclar/arr-hesaplayici", note: "Yıllık yinelenen gelir" },
    { label: "Churn Rate Hesaplayıcı", href: "/ucretsiz-araclar/churn-rate-hesaplayici", note: "Kayıp oranı ve retention" },
    { label: "MRR Hesaplayıcı", href: "/ucretsiz-araclar/mrr-hesaplayici", note: "Aylık yinelenen gelir" },
    { label: "Rule of 40 Hesaplayıcı", href: "/ucretsiz-araclar/rule-of-40-hesaplayici", note: "Büyüme + kârlılık dengesi" },
  ],
  relatedPost: { label: "NRR Nedir? SaaS'ta Neden ARR'dan Daha Önemli?", href: "/blog/nrr-nedir-saas-buyume-metrigi" },
};

export const ruleOf40: ToolContent = {
  slug: "rule-of-40",
  path: "/ucretsiz-araclar/rule-of-40-hesaplayici",
  title: "Rule of 40 Hesaplayıcı",
  description:
    "Gelir büyüme oranı ve kâr marjınızı toplayarak SaaS'ınızın Rule of 40 skorunu ve sağlıklı olup olmadığını ücretsiz ölçün.",
  intro:
    "Rule of 40, bir SaaS şirketinin büyüme hızı ile kârlılığının toplamının 40'ın üzerinde olması gerektiğini söyleyen basit bir sağlık testidir. Yıllık gelir büyüme oranınızı ve kâr marjınızı girin; skorunuz ve geçti/kaldı durumu anında hesaplansın.",
  applicationCategory: "FinanceApplication",
  seoParagraphs: [
    { heading: "Rule of 40 Nedir?", body: "Rule of 40, SaaS ve abonelik şirketlerinin sağlığını tek bir sayıya indiren bir başparmak kuralıdır: Yıllık Gelir Büyüme Oranı (%) + Kâr Marjı (%) ≥ 40. Mantığı şudur: hızlı büyüyen bir şirketin kısa vadede zarar etmesi kabul edilebilir, yavaş büyüyen bir şirketin ise kârlı olması beklenir. Toplam 40'ın altına düştüğünde şirket ne yeterince hızlı büyüyor ne de yeterince kârlı çalışıyor demektir." },
    { heading: "Örnek Hesaplama", body: "Yıllık %55 ARR büyümesi olan ama %20 FCF zararı yazan bir şirketin skoru 55 + (−20) = 35'tir; kuralın altındadır. Buna karşılık %18 büyüyen ve %25 kâr marjıyla çalışan bir şirketin skoru 43 olur ve testi geçer. Aynı skoru üreten iki farklı profil (agresif büyüme veya disiplinli kârlılık) yatırımcı gözünde genellikle eşdeğer kabul edilir." },
    { heading: "Kâr Marjı Olarak Ne Kullanılmalı?", body: "Pratikte üç ölçü kullanılır: EBITDA marjı, serbest nakit akışı (FCF) marjı veya faaliyet kâr marjı. Hangisini seçerseniz seçin, dönemler arasında tutarlı kalın; ölçüyü değiştirerek skoru güzelleştirmek en sık yapılan hatadır. Büyüme tarafında ise ARR veya yıllıklandırılmış gelir büyümesi kullanılır — aylık büyümeyi doğrudan yazmak skoru yapay biçimde şişirir." },
    { body: "Rule of 40, tek başına bir strateji değil bir denge testidir. 40'ın üzerinde olmak sürdürülebilir bir birim ekonomiyi garanti etmez; bu yüzden NRR, LTV:CAC oranı ve CAC geri kazanım süresiyle birlikte okunmalıdır. Özellikle erken aşama (ARR < 1M) şirketlerde küçük baz etkisi nedeniyle skor aşırı yüksek çıkabilir ve yanıltıcı olur." },
  ],
  faqs: [
    { q: "Rule of 40 nedir ve nasıl hesaplanır?", a: "Rule of 40 = Yıllık Gelir Büyüme Oranı (%) + Kâr Marjı (%). Toplam 40 veya üzerindeyse şirket sağlıklı bir büyüme-kârlılık dengesinde kabul edilir. Örnek: %30 büyüme + %12 kâr marjı = 42, kuralı geçer." },
    { q: "Rule of 40'ta hangi kâr marjı kullanılmalı?", a: "En yaygın kullanım EBITDA marjı ve serbest nakit akışı (FCF) marjıdır; faaliyet kâr marjı da kabul edilir. Önemli olan aynı ölçüyü dönemler boyunca tutarlı kullanmaktır, aksi hâlde trend karşılaştırılamaz hâle gelir." },
    { q: "Rule of 40 hangi aşamadaki şirketler için anlamlıdır?", a: "Genellikle 1 milyon ARR'ı geçmiş ve büyüme oranı stabilize olmaya başlamış şirketler için anlamlıdır. Çok erken aşamada düşük baz nedeniyle büyüme yüzdesi üç haneli çıkar ve skor gerçek sağlığı yansıtmaz." },
    { q: "Skorum 40'ın altındaysa ne yapmalıyım?", a: "Önce hangi bileşenin zayıf olduğunu belirleyin. Büyüme düşükse fiyatlama, genişleme geliri (NRR) ve satın alma kanalları; kârlılık düşükse brüt marj, altyapı maliyetleri ve satış-pazarlama verimliliği (CAC geri kazanım süresi) üzerinde çalışın. İki bileşeni aynı anda zorlamak genellikle ikisini de bozar." },
    { q: "Rule of 40 ile NRR arasındaki ilişki nedir?", a: "Yüksek NRR, büyümenin ucuz kaynağıdır: mevcut müşteriden gelen genişleme geliri satış maliyeti yaratmadığı için hem büyüme hem kâr marjı bileşenini aynı anda yukarı çeker. Bu yüzden Rule of 40 skorunu iyileştirmenin en verimli yolu genellikle NRR'yi artırmaktır." },
  ],
  relatedTools: [
    { label: "NRR Hesaplayıcı", href: "/ucretsiz-araclar/nrr-hesaplayici", note: "Net gelir tutundurma" },
    { label: "ARR Hesaplayıcı", href: "/ucretsiz-araclar/arr-hesaplayici", note: "Yıllık yinelenen gelir" },
    { label: "Net Kar Marjı Hesaplayıcı", href: "/ucretsiz-araclar/net-kar-marji-hesaplayici", note: "Kâr marjı bileşeni" },
    { label: "SaaS Araçları", href: "/ucretsiz-araclar/saas-araclari", note: "Tüm SaaS metrik hesaplayıcıları" },
  ],
  relatedPost: { label: "SaaS Metrikleri: ARR, CAC ve LTV", href: "/blog/saas-metrikleri-arr-cac-ltv" },
};
