export const freeToolsPage = {
  path: "/ucretsiz-araclar",
  seoTitle: "Ücretsiz Pazarlama Araçları | Yusuf Bayrak",
  seoDescription:
    "ARR, CAC, Churn, LTV, ROAS hesaplayıcıları ve UTM link oluşturucu — pazarlama ve SaaS metriklerinizi hesaplayın.",
  heading: "Ücretsiz Araçlar",
  intro:
    "Pazarlama, SaaS ve büyüme metriklerinizi saniyeler içinde hesaplayan pratik araçlar. Hepsi ücretsiz, hepsi tarayıcıda çalışır — veri sunucuya gönderilmez.",
  divider: "Araçlar",
  cards: [
    { key: "arr",   name: "ARR Hesaplayıcı",           description: "Yıllık yinelenen gelir (Annual Recurring Revenue) hesaplama aracı.",                  href: "/ucretsiz-araclar/arr-hesaplayici" },
    { key: "cac",   name: "CAC Hesaplayıcı",           description: "Müşteri edinme maliyetini (Customer Acquisition Cost) analiz edin.",                  href: "/ucretsiz-araclar/cac-hesaplayici" },
    { key: "churn", name: "Churn Rate Hesaplayıcı",    description: "Müşteri kayıp oranınızı ve elde tutma performansınızı ölçün.",                        href: "/ucretsiz-araclar/churn-rate-hesaplayici" },
    { key: "ltv",   name: "LTV Hesaplayıcı",           description: "Müşteri yaşam boyu değerini hesaplayın ve CAC ile karşılaştırın.",                    href: "/ucretsiz-araclar/ltv-hesaplayici" },
    { key: "roas",  name: "ROAS Hesaplayıcı",          description: "Reklam harcaması getiri oranınızı ve kampanya kârlılığını ölçün.",                    href: "/ucretsiz-araclar/roas-hesaplayici" },
    { key: "utm",   name: "UTM Link Oluşturucu",       description: "Kampanya takibi için UTM parametreli linkler oluşturun.",                              href: "/ucretsiz-araclar/utm-link-olusturucu" },
    { key: "llms",  name: "llms.txt Oluşturucu",       description: "AI botları (ClaudeBot, GPTBot, Perplexity) için ücretsiz llms.txt dosyası oluşturun.", href: "/ucretsiz-araclar/llms-txt-olusturucu" },
    { key: "gross", name: "Brüt Kar Marjı Hesaplayıcı", description: "Gelir ve COGS girerek brüt kar marjınızı yüzde ve tutar olarak hesaplayın.", href: "/ucretsiz-araclar/brut-kar-marji-hesaplayici" },
    { key: "net",   name: "Net Kar Marjı Hesaplayıcı",  description: "Tüm giderler dahil net kar marjınızı hesaplayın, gerçek kârlılığınızı görün.", href: "/ucretsiz-araclar/net-kar-marji-hesaplayici" },
    { key: "conversion", name: "Dönüşüm Oranı Hesaplayıcı", description: "Ziyaretçi ve dönüşüm sayınızla dönüşüm oranınızı ve hedefe farkı hesaplayın.", href: "/ucretsiz-araclar/donusum-orani-hesaplayici" },
  ],
};

// Tool categories. Single source of truth for category pages, the hub page,
// breadcrumbs and the llms.txt generator. `tools` holds card keys from the
// `cards` array above — a tool belongs to exactly one primary category so
// canonical URLs stay unique (no duplicate content).
export const toolCategories = [
  {
    key: "marketing",
    path: "/ucretsiz-araclar/pazarlama-araclari",
    name: "Pazarlama Araçları",
    short: "Kampanya takibi, reklam getirisi ve AI görünürlüğü için pratik araçlar.",
    seoTitle: "Pazarlama Araçları | Yusuf Bayrak",
    seoDescription:
      "UTM oluşturucu, dönüşüm oranı ve ROAS hesaplayıcı gibi ücretsiz pazarlama araçları.",
    intro:
      "Performans pazarlaması yürüten ekipler için hazırlanmış ücretsiz araçlar. Kampanya linklerinizi doğru etiketleyin, reklam harcamanızın getirisini ölçün ve sitenizi AI arama motorlarına tanıtın. Hepsi tarayıcıda çalışır; girdiğiniz veri sunucuya gönderilmez.",
    tools: ["utm", "roas", "conversion", "llms"],
  },
  {
    key: "saas",
    path: "/ucretsiz-araclar/saas-araclari",
    name: "SaaS Araçları",
    short: "Abonelik iş modelinizin büyüme ve elde tutma metriklerini ölçün.",
    seoTitle: "SaaS Araçları | Yusuf Bayrak",
    seoDescription:
      "ARR, CAC, LTV ve churn rate hesaplayıcıları ile SaaS büyüme metriklerinizi analiz edin.",
    intro:
      "Abonelik tabanlı ürünler için büyüme metrikleri hesaplayıcıları. ARR'nizi projekte edin, müşteri edinme maliyetinizi yaşam boyu değerle karşılaştırın ve churn oranınızın büyümenizi nasıl etkilediğini görün. SaaS kurucuları, büyüme ekipleri ve yatırımcı raporlaması için uygundur.",
    tools: ["arr", "cac", "ltv", "churn"],
  },
  {
    key: "ecommerce",
    path: "/ucretsiz-araclar/e-ticaret-araclari",
    name: "E-Ticaret Araçları",
    short: "Ürün ve mağaza bazında gerçek kârlılığınızı hesaplayın.",
    seoTitle: "E-Ticaret Araçları | Yusuf Bayrak",
    seoDescription:
      "Brüt ve net kar marjı hesaplayıcıları ile e-ticaret kârlılığınızı ölçün.",
    intro:
      "E-ticaret markaları ve online mağazalar için kârlılık hesaplayıcıları. Ürün maliyetlerinizi (COGS) girerek brüt marjınızı, tüm operasyon ve reklam giderlerini ekleyerek net marjınızı görün. Fiyatlandırma ve reklam bütçesi kararları için doğru zemin sağlar.",
    tools: ["gross", "net"],
  },
] as const;

export const toolCategoriesUi = {
  hubName: "Ücretsiz Araçlar",
  hubHeading: "Ücretsiz Araçlar",
  hubIntro:
    "Pazarlama, SaaS ve e-ticaret metriklerinizi saniyeler içinde hesaplayan ücretsiz araçlar. Kategori seçerek başlayın — hepsi tarayıcıda çalışır, veri sunucuya gönderilmez.",
  hubDivider: "Kategoriler",
  toolsDivider: "Bu Kategorideki Araçlar",
  otherDivider: "Diğer Araç Kategorileri",
  toolCountLabel: (n: number) => `${n} araç`,
  homeLabel: "Ana Sayfa",
};
