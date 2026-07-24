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
  ],
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
