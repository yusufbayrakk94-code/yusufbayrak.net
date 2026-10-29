import n8nWorkflowDiagram from "@/assets/n8n-lead-enrichment-workflow.jpg";

export type BlogCategorySlug =
  | "performans-pazarlama"
  | "b2b-lead-generation"
  | "yapay-zeka-otomasyon"
  | "saas-buyume";

export interface BlogCategory {
  slug: BlogCategorySlug;
  name: string;
  description: string;
}

export interface BlogFAQ {
  question: string;
  answer: string;
}

export interface BlogSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  image?: {
    src: string;
    alt: string;
    caption?: string;
    width?: number;
    height?: number;
  };
}

export interface BlogHowToStep {
  name: string;
  text: string;
}

// Curated internal/external references rendered at the end of a post.
// `external: true` opens in a new tab with rel="noopener noreferrer".
export interface BlogResource {
  label: string;
  href: string;
  external?: boolean;
}

// Keys map to tool pages via getRelatedToolForPost() below. Kept as a
// discriminated string so both TR and EN URLs can be resolved from one
// value on the post.
export type RelatedToolKey =
  | "arr"
  | "mrr"
  | "arpa"
  | "nrr"
  | "rule-of-40"
  | "cac"
  | "churn"
  | "ltv"
  | "roas"
  | "utm"
  | "conversion"
  | "cac-payback"
  | "llms-txt"
  | "marketplace"
  | "ad-budget"
  | "desi"
  | "gross-margin";

export interface BlogPost {
  slug: string;
  title: string;
  // Optional <title> override (≤60 chars). Falls back to title + suffix.
  seoTitle?: string;
  description: string;
  category: BlogCategorySlug;
  tldr: string[];
  publishedAt: string; // ISO
  updatedAt?: string;
  readingMinutes: number;
  tags: string[];
  sections: BlogSection[];
  faq: BlogFAQ[];
  // Optional HowTo schema payload — when present, BlogPost renders a
  // schema.org/HowTo JSON-LD block so Google can surface step-list rich
  // results for "step-by-step" content.
  howTo?: {
    name: string;
    description?: string;
    steps: BlogHowToStep[];
  };
  // Optional internal-link CTA to a related free tool. Falls back to a
  // category default when omitted (see RELATED_TOOL_BY_CATEGORY).
  relatedToolKey?: RelatedToolKey;
  // Optional curated reference list (internal cross-links + external sources).
  resources?: BlogResource[];
}

export const BLOG_CATEGORIES: BlogCategory[] = [
  {
    slug: "performans-pazarlama",
    name: "Performans Pazarlama",
    description:
      "Google, Meta ve LinkedIn Ads üzerinde veri odaklı kampanya, ROAS ve dönüşüm optimizasyonu.",
  },
  {
    slug: "b2b-lead-generation",
    name: "B2B Lead Generation",
    description:
      "Outbound, ABM ve inbound huniler; nitelikli B2B lead üretimi için sistem tasarımı.",
  },
  {
    slug: "yapay-zeka-otomasyon",
    name: "Yapay Zeka & Otomasyon",
    description:
      "LLM tabanlı iş akışları, n8n/Make otomasyonları ve MCP entegrasyonlarıyla ölçeklenen süreçler.",
  },
  {
    slug: "saas-buyume",
    name: "SaaS & Büyüme",
    description:
      "SaaS metrikleri, PLG, aktivasyon ve retention odaklı sürdürülebilir büyüme stratejileri.",
  },
];

export const BLOG_CATEGORIES_EN: BlogCategory[] = [
  {
    slug: "performans-pazarlama",
    name: "Performance Marketing",
    description:
      "Data-driven Google, Meta and LinkedIn Ads campaigns with a focus on ROAS and conversion.",
  },
  {
    slug: "b2b-lead-generation",
    name: "B2B Lead Generation",
    description:
      "Outbound, ABM and inbound funnels; system design for qualified B2B lead generation.",
  },
  {
    slug: "yapay-zeka-otomasyon",
    name: "AI & Automation",
    description:
      "LLM-powered workflows, n8n/Make automations and MCP integrations that scale ops.",
  },
  {
    slug: "saas-buyume",
    name: "SaaS & Growth",
    description:
      "SaaS metrics, PLG, activation and retention-focused sustainable growth strategies.",
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "b2b-lead-generation-huni-tasarimi",
    seoTitle: "B2B Lead Generation Hunisi Nasıl Tasarlanır? | Rehber",
    title: "B2B Lead Generation Hunisi Nasıl Tasarlanır? Uçtan Uca Rehber",
    description:
      "Nitelikli B2B lead üretmek için ICP tanımı, kanal seçimi, mesajlaşma ve CRM entegrasyonunu kapsayan pratik bir framework.",
    category: "b2b-lead-generation",
    tldr: [
      "B2B lead generation, tek kanaldan değil; ICP + kanal + mesaj + CRM'in birlikte kurgulanmasından doğar.",
      "Outbound (LinkedIn + e-posta) ve inbound (SEO + içerik) hunileri birbirini besleyecek şekilde tasarlanmalı.",
      "MQL/SQL tanımları netleştirilmeden yapılan lead üretimi, satış ekibinin zamanını yakar; dönüşüm düşer.",
      "Otomasyon (n8n, Clay, HubSpot) manuel işleri ortadan kaldırır ve lead-to-meeting süresini %40-60 kısaltır.",
    ],
    publishedAt: "2026-07-01",
    readingMinutes: 2,
    tags: ["B2B", "Lead Generation", "Outbound", "ABM"],
    sections: [
      {
        heading: "ICP ve Buyer Persona ile Başlayın",
        paragraphs: [
          "Nitelikli lead üretiminin ilk şartı, kime satış yaptığınızı net tanımlamaktır. ICP (Ideal Customer Profile); şirket büyüklüğü, sektör, coğrafya, teknoloji stack'i ve tetikleyici olaylar (funding, işe alım, ürün lansmanı) ile tanımlanmalıdır.",
          "Buyer persona ise ICP içindeki karar vericilerin rolü, sorumlulukları, KPI'ları ve satın alma sürecindeki itirazlarını kapsar. Bu iki tanım netleşmeden yapılan kampanya harcamaları, düşük dönüşüm oranıyla sonuçlanır.",
        ],
      },
      {
        heading: "Kanal Mixi: Outbound + Inbound",
        paragraphs: [
          "Modern B2B'de tek kanala bağımlı huniler kırılgandır. Sağlıklı bir yapı; outbound (LinkedIn Sales Navigator, soğuk e-posta), inbound (SEO, blog, LinkedIn organik içerik) ve paid (LinkedIn Ads, Google Ads) katmanlarını birlikte çalıştırır.",
        ],
        bullets: [
          "Outbound: kısa vadede pipeline; ICP listesi + kişiselleştirilmiş mesaj + çok kanallı takip.",
          "Inbound: uzun vadede marka + niyet trafiği; SEO odaklı içerik ve thought leadership.",
          "Paid: retargeting ve niyet katmanı; account-based reklamlarla ICP hedefleme.",
        ],
      },
      {
        heading: "MQL / SQL Tanımları ve CRM Entegrasyonu",
        paragraphs: [
          "Pazarlama ve satış ekibi aynı tanımı konuşmuyorsa, huninin dibinden büyük kayıp yaşanır. MQL (Marketing Qualified Lead) ve SQL (Sales Qualified Lead) kriterlerini önceden netleştirin ve HubSpot/Pipedrive gibi bir CRM'de skorlama sistemine dönüştürün.",
        ],
      },
      {
        heading: "Otomasyon Katmanı",
        paragraphs: [
          "Lead enrichment, veri temizleme ve mesajlaşma tetikleyicileri gibi tekrar eden işleri manuel yapmak zaman ve para israfıdır. n8n, Clay ve HubSpot Workflows ile bu adımları otomatikleştirmek, lead-to-meeting süresini önemli ölçüde kısaltır.",
        ],
      },
    ],
    faq: [
      {
        question: "B2B lead generation için hangi kanal daha etkili?",
        answer:
          "Kanal etkinliği ürün fiyat noktasına ve satış döngüsüne göre değişir. Yüksek ACV'li B2B SaaS için LinkedIn outbound + ABM en yüksek ROI'yi verir; düşük ACV'de ise SEO + PLG hunisi daha sürdürülebilirdir.",
      },
      {
        question: "MQL ve SQL arasındaki fark nedir?",
        answer:
          "MQL, pazarlama aktivitesiyle ilgi göstermiş (içerik indirmiş, demo talep etmiş) leadi ifade eder. SQL ise satış ekibinin görüşme yapmaya hazır olduğunu doğruladığı, bütçe ve zamanlaması netleşmiş leaddir.",
      },
      {
        question: "B2B outbound e-postalarda dönüşüm oranı ne olmalı?",
        answer:
          "Ortalama sektör benchmark'ı: %30-50 açılma, %1-3 yanıt oranıdır. ICP'ye özel kişiselleştirme ve doğru zamanlama ile yanıt oranı %8-12'ye çıkabilir.",
      },
    ],
    relatedToolKey: "utm",
  },
  {
    slug: "google-ads-performans-optimizasyonu",
    title: "Google Ads'te Performansı Katlamanın 7 Data-Driven Yolu",
    description:
      "Search, PMax ve Demand Gen kampanyalarında ROAS'ı yükseltmek için kullanılan gelişmiş optimizasyon taktikleri.",
    category: "performans-pazarlama",
    tldr: [
      "Google Ads'te performans; teklif stratejisi + audience signal + creative test döngüsünün bileşkesidir.",
      "PMax kampanyalarında asset group ayrıştırması, ROAS'ta ortalama %25-40 artış sağlar.",
      "Server-side conversion (Enhanced Conversions + GA4) doğru sinyal göndermeden Smart Bidding çalışmaz.",
      "Negative keyword ve arama terimi raporu haftalık disipline dönüşmeden bütçe sızıntısı devam eder.",
    ],
    publishedAt: "2026-07-05",
    readingMinutes: 5,
    tags: ["Google Ads", "PMax", "ROAS", "Performans"],
    sections: [
      {
        heading: "1. Conversion Tracking'i Doğru Kurgulayın",
        paragraphs: [
          "Smart Bidding algoritmaları yalnızca aldıkları sinyal kadar iyidir. Enhanced Conversions, GA4 server-side tracking ve offline conversion import (CRM'den kapanan satışların geri beslenmesi) olmadan tROAS/tCPA teklif stratejileri hedefini tutturamaz.",
          "Pratikte en sık gördüğüm hata, tüm form gönderimlerinin tek bir 'Lead' dönüşümü olarak sayılmasıdır. Newsletter kaydı ile demo talebi aynı ağırlıkta raporlandığında algoritma ucuz ama değersiz dönüşümlere doğru optimize eder. Dönüşüm aksiyonlarını ayırın, yalnızca ticari değeri olanları 'Primary' işaretleyin ve her birine gerçekçi bir dönüşüm değeri atayın.",
          "B2B'de değer ataması için basit bir yöntem var: ortalama sözleşme değerinizi, o dönüşüm tipinin tarihsel kapanma oranıyla çarpın. Demo talebinin %20'si kapanıyor ve ortalama sözleşme 100.000 TL ise, demo dönüşümünün değeri 20.000 TL'dir. Bu değerle beslenen tROAS, form sayısını değil gelir potansiyelini optimize etmeye başlar.",
        ],
      },
      {
        heading: "2. Teklif Stratejisini Hesabın Olgunluğuna Göre Seçin",
        paragraphs: [
          "Teklif stratejisi seçimi, hesabın veri hacmiyle doğrudan ilişkilidir. Aylık 15-30 dönüşümün altındaki kampanyalarda tROAS veya tCPA erken devreye alınırsa algoritma yeterli örneklem bulamaz ve harcama dalgalanır. Bu aşamada Maximize Conversions ile başlayıp veri biriktirmek, ardından hedefli stratejiye geçmek daha sağlıklıdır.",
          "Hedef değerini gerçekçi belirleyin. Mevcut ortalamanızın %20'sinden fazla agresif bir tROAS hedefi girmek, sistemin trafiği kısmasına ve impression share kaybına yol açar. Hedefi kademeli olarak (haftada %10-15) sıkın ve her değişiklikten sonra en az iki haftalık öğrenme dönemine izin verin.",
          "Kampanya amacına göre stratejiyi ayrıştırın: marka aramalarında Maximize Clicks veya düşük tCPA, jenerik kategori aramalarında tCPA, e-ticaret ve PMax kampanyalarında tROAS mantıklıdır. Aynı hesapta farklı stratejiler kullanmak sorun değil; sorun, aynı kampanyada stratejiyi haftada birden fazla değiştirmektir.",
        ],
      },
      {
        heading: "3. Audience Signal Kurgusunu Ciddiye Alın",
        paragraphs: [
          "Performance Max ve Demand Gen kampanyalarında audience signal, hedefleme değil bir başlangıç ipucudur; algoritmanın ilk 1-2 haftada kimi test edeceğini belirler. Zayıf sinyalle başlayan bir PMax, bütçesinin önemli bir kısmını alakasız envanterde harcayarak öğrenir.",
          "En güçlü sinyal sırası şudur: kapanan müşteri listeleri (Customer Match), yüksek niyetli site ziyaretçileri (fiyat/demo sayfası), CRM'den gelen high-value segmentler, ardından custom segment olarak rakip marka ve kategori aramaları. Yalnızca in-market ve affinity kitleleri kullanmak, sinyali jenerikleştirir.",
        ],
        bullets: [
          "Customer Match: kapanan müşteriler ve yüksek LTV'li hesaplar (en az 1.000 kayıt hedefleyin)",
          "Site ziyaretçileri: fiyatlandırma, demo ve sepet sayfası segmentleri ayrı ayrı",
          "Custom segment: rakip marka sorguları + kategori sorguları + rakip domainleri",
          "Dışlamalar: mevcut müşteriler, iş başvurusu yapanlar ve bayi/tedarikçi listeleri",
        ],
      },
      {
        heading: "4. Performance Max Asset Group Segmentasyonu",
        paragraphs: [
          "Tek asset grup yerine kategori, marj veya sezon bazında ayrıştırılmış asset group'lar algoritmaya daha net sinyal verir. Böylece high-margin ürünlere daha fazla bütçe akar ve ROAS ortalama %25-40 artar.",
          "Segmentasyonu yaparken her asset group'a kendi audience signal'ını, kendi başlık setini ve kendi ürün feed filtresini verin. Aynı görsel ve metinleri tüm gruplara kopyalamak, ayrıştırmanın faydasını sıfırlar. E-ticarette feed'i marj bandına göre üç kümeye ayırmak (yüksek, orta, düşük marj) çoğu hesapta tek başına anlamlı bir kazanç üretir.",
        ],
      },
      {
        heading: "5. Kreatif Test Döngüsünü Takvime Bağlayın",
        paragraphs: [
          "Google Ads'te performansın tavanını çoğu zaman teklif değil kreatif belirler. Responsive Search Ads'te 15 başlığın hepsini doldurmak yeterli değildir; başlıkları fayda, sosyal kanıt, fiyat/teklif ve itiraz karşılama olmak üzere dört temaya bölün ve tema bazında hangisinin 'Best' performans etiketi aldığını izleyin.",
          "İşleyen bir döngü şöyledir: iki haftada bir asset denetimi, 'Low' etiketli varlıkların değiştirilmesi, her turda en fazla %30 varlık yenileme. Hepsini aynı anda değiştirmek öğrenmeyi sıfırlar. PMax tarafında her asset group için en az 5 görsel, 2 video ve 3 logo varyantı bulundurun; video yoksa Google otomatik üretir ve kalite genelde marka standardının altında kalır.",
          "Kreatif kazananları kanallar arası taşıyın. Meta tarafında yüksek thumb-stop oranı yakalayan bir video, Demand Gen kampanyalarında da genellikle iyi çalışır; tersine Search'te dönüşen başlık kalıpları landing page H1'i olarak test edilmelidir.",
        ],
      },
      {
        heading: "6. Bütçeyi Kampanya Değil Portföy Mantığıyla Dağıtın",
        paragraphs: [
          "Bütçe dağıtımını 'her kampanyaya eşit pay' mantığıyla yapmak, hesabın toplam getirisini düşürür. Bütçeyi marjinal getiriye göre dağıtın: hangi kampanya, ek 1.000 TL'ye en yüksek artımlı dönüşümü üretiyorsa payı oraya kaydırın.",
          "Pratik bir çerçeve, 70/20/10 dağılımıdır: bütçenin %70'i kanıtlanmış kampanyalara (marka + yüksek ROAS kategori), %20'si ölçeklenmeye aday olanlara, %10'u yeni kanal ve kreatif testlerine. Impression share lost (budget) metriği %10'un üstündeyse o kampanya bütçe kısıtlıdır ve öncelikli artırım adayıdır.",
          "Değişiklikleri kademeli yapın: günlük bütçeyi bir seferde %20-30'dan fazla artırmak öğrenme aşamasını yeniden tetikler. Sezonluk yoğunluklarda ise portföy bütçesi (shared budget) yerine kampanya bazlı manuel artış, kontrolü elinizde tutmanızı sağlar.",
        ],
      },
      {
        heading: "7. Search Terms Report ve Negative Keyword Disiplini",
        paragraphs: [
          "Search Terms raporunu haftalık incelemek, alakasız aramalara giden bütçeyi kesmek için kritiktir. Özellikle broad match ve PMax kampanyalarında negative keyword listesi sürekli beslenmelidir.",
          "Bu işi kalıcı hâle getirmek için hesap seviyesinde paylaşılan negative listeler oluşturun ve her hafta yeni terimleri buraya ekleyin. PMax'te arama terimi görünürlüğü sınırlı olsa da hesap seviyesindeki negative listeler artık uygulanabiliyor; marka trafiğini PMax'ten dışlamak, artımlı olmayan dönüşümlerin raporu şişirmesini engeller.",
        ],
        bullets: [
          "Marka koruma listesi",
          "Sektör dışı arama listesi",
          "Bilgi amaçlı sorgular (how to, nedir, örnek) — B2B'de dönüştürmüyorsa filtrelenmeli",
          "İş arama sorguları (kariyer, iş ilanı, maaş) ve ücretsiz/crack arayan sorgular",
        ],
      },
    ],
    faq: [
      {
        question: "PMax mı Search kampanyası mı daha iyi?",
        answer:
          "İkisi rakip değil, tamamlayıcıdır. Search; yüksek niyetli marka ve kategori sorgularında dönüşür. PMax; envanterin tamamını (YouTube, Display, Gmail, Discover) kullanır. Doğru kurgu, ikisini birlikte çalıştırmaktır.",
      },
      {
        question: "Enhanced Conversions gerçekten fark yaratıyor mu?",
        answer:
          "Evet. iOS 14+ sonrası cookie kaybını telafi eden Enhanced Conversions, tipik olarak ölçülen dönüşüm sayısında %5-15 artış sağlar; bu doğrudan Smart Bidding'in doğruluğuna yansır.",
      },
      {
        question: "Hangi teklif stratejisiyle başlamalıyım?",
        answer:
          "Aylık 15-30 dönüşümün altındaysanız Maximize Conversions ile başlayıp veri biriktirin. Bu eşiği geçtikten sonra tCPA'ya, dönüşüm değeri raporlayabiliyorsanız tROAS'a geçin. Hedefleri bir seferde değil, haftada %10-15 sıkarak ilerletin.",
      },
      {
        question: "Audience signal hedefleme mi yapıyor?",
        answer:
          "Hayır. PMax ve Demand Gen'de audience signal bir hedefleme kısıtı değil, algoritmaya verilen başlangıç ipucudur. Sistem zamanla sinyalin dışına da çıkar; bu yüzden sinyali Customer Match ve yüksek niyetli site ziyaretçileriyle beslemek ilk haftaların verimini belirler.",
      },
      {
        question: "Bütçeyi ne sıklıkla ve ne kadar artırmalıyım?",
        answer:
          "Bir seferde %20-30'dan fazla artış öğrenme aşamasını yeniden tetikler. Impression share lost (budget) %10'un üstündeki kampanyalara öncelik verin ve artıştan sonra en az 7-14 gün ölçüm yapmadan yeni değişiklik yapmayın.",
      },
    ],
    relatedToolKey: "roas",
  },
  {
    slug: "n8n-ile-lead-enrichment-otomasyonu",
    title: "n8n ile Lead Enrichment Otomasyonu: Adım Adım Kurulum",
    description:
      "Clay, Apollo ve OpenAI'ı n8n üzerinden birleştirerek her yeni lead için otomatik zenginleştirme akışı nasıl kurulur?",
    category: "yapay-zeka-otomasyon",
    tldr: [
      "n8n; Zapier'e göre daha esnek, self-hosted ve maliyet açısından ölçeklenebilir bir otomasyon platformudur.",
      "Lead enrichment akışı; webhook → Apollo/Clay enrichment → LLM ile ICP skorlama → CRM'e yazma adımlarından oluşur.",
      "OpenAI/Gemini üzerinden LLM prompting ile lead notları özetlenip HubSpot'a yazıldığında SDR verimliliği %30+ artar.",
      "Kritik nokta: veri kalitesi. Hatalı enrichment, tüm SDR ekibinin zamanını yakar.",
    ],
    publishedAt: "2026-07-10",
    readingMinutes: 5,
    tags: ["n8n", "Otomasyon", "LLM", "Lead Enrichment"],
    sections: [
      {
        heading: "n8n Neden Zapier'den Daha Güçlü?",
        paragraphs: [
          "n8n; self-hosted çalışabildiği için veri egemenliği ve maliyet avantajı sağlar. 400+ native entegrasyon dışında custom HTTP node ile herhangi bir API'ye bağlanabilir. Karmaşık dallanma (if/switch) ve JavaScript node'ları, Zapier'de mümkün olmayan senaryoları çözer.",
          "Maliyet farkı hacimle birlikte açılır. Zapier adım (task) başına ücretlendirdiği için 5 adımlı bir akış, her lead'de 5 task tüketir; n8n'de fiyatlama execution (çalıştırma) başınadır ve self-hosted kurulumda yalnızca sunucu maliyeti vardır. Aylık binlerce lead işleyen bir B2B ekibinde bu fark genellikle 10 kata kadar çıkar.",
          "KVKK/GDPR kapsamındaki verilerle çalışıyorsanız self-hosted n8n, lead verisinin üçüncü taraf bir SaaS'ın sunucusundan geçmemesini sağlar. Docker ile 15 dakikada kurulabilir; kalıcılık için Postgres, güvenlik için de basic auth veya reverse proxy önerilir.",
        ],
      },
      {
        heading: "Enrichment Akışının Mimarisi",
        paragraphs: [
          "Tipik bir lead enrichment akışı şu adımlardan oluşur:",
        ],
        bullets: [
          "Webhook: Form dolduran leadin verisi n8n'e düşer.",
          "Apollo/Clay: E-posta üzerinden firma bilgisi, employee count, teknoloji stack'i çekilir.",
          "OpenAI: LLM promptu ile lead notları özetlenir ve ICP fit skorlanır (0-100).",
          "HubSpot/Pipedrive: Zenginleştirilmiş veri CRM'e yazılır ve owner atanır.",
          "Slack: Yüksek skorlu leadler SDR ekibine anlık bildirim olarak gider.",
        ],
        image: {
          src: n8nWorkflowDiagram,
          alt: "n8n lead enrichment workflow diyagramı: Webhook, Apollo/Clay zenginleştirme, OpenAI ICP skorlama, HubSpot CRM ve Slack bildirimi adımları",
          caption:
            "Uçtan uca n8n lead enrichment akışı: webhook → enrichment → LLM skorlama → CRM → Slack.",
          width: 1280,
          height: 528,
        },
      },
      {
        heading: "Adım Adım Kurulum: Webhook ve Veri Normalizasyonu",
        paragraphs: [
          "n8n'de yeni bir workflow açın ve ilk node olarak Webhook trigger ekleyin. Metodu POST seçin, üretilen production URL'ini kopyalayın ve form aracınızın (Typeform, HubSpot Forms, custom form) webhook alanına yapıştırın. Test URL'i yalnızca editör açıkken çalışır; canlıya alırken production URL'ini kullanmayı unutmayın.",
          "Gelen payload her araçta farklı isimlendirilir. Hemen ardına bir Set (Edit Fields) node'u ekleyip alanları tek bir şemaya normalize edin: email, full_name, company_domain, source, utm_campaign. Bu adımı atlarsanız kaynak eklendikçe akışın tamamını yeniden yazmanız gerekir.",
          "Son olarak bir IF node ile temel doğrulama yapın: e-posta boşsa veya gmail/hotmail gibi ücretsiz bir domainse akışı ayırın. Ücretsiz domainli leadleri enrichment API'sine göndermemek, hem kredi tasarrufu sağlar hem de hatalı eşleşmeleri baştan eler.",
        ],
      },
      {
        heading: "Adım Adım Kurulum: Enrichment ve Skorlama Node'ları",
        paragraphs: [
          "Enrichment için HTTP Request node'u ile Apollo'nun people/match endpoint'ini çağırın; kimlik doğrulamayı n8n Credentials üzerinden yapın, API anahtarını asla node içine gömmeyin. Yanıttan şirket adı, employee count, sektör, ülke ve teknoloji stack'i alanlarını alın. Apollo boş dönerse ikinci bir kaynağı (Clay veya Hunter) yedek olarak çağıran bir fallback dalı kurun.",
          "Enrichment API'leri rate limit uygular. HTTP node'un 'Retry on Fail' seçeneğini açın, 2-3 deneme ve artan bekleme süresi tanımlayın; toplu içe aktarımlarda ise Split In Batches node'u ile 10'arlı gruplar hâlinde ilerleyin. Böylece 429 hataları akışı komple düşürmez.",
          "Skorlama adımında OpenAI node'una normalize edilmiş veriyi gönderin ve JSON schema ile 0-100 arası bir skor, üç maddelik gerekçe ve önerilen sonraki adım isteyin. Model çıktısını doğrudan CRM'e yazmadan önce bir Code node ile şema doğrulaması yapın; beklenmeyen çıktı gelirse lead'i 'manuel inceleme' koluna yönlendirin.",
        ],
      },
      {
        heading: "Adım Adım Kurulum: CRM, Bildirim ve Hata Yönetimi",
        paragraphs: [
          "HubSpot node'unda 'Create or Update Contact' operasyonunu kullanın ve e-postayı benzersiz anahtar olarak seçin; aksi hâlde her form gönderiminde mükerrer kayıt oluşur. Skoru, gerekçeyi ve enrichment alanlarını özel property'lere yazın ki satış ekibi bunları liste filtrelerinde kullanabilsin.",
          "Skor eşiğine göre dallanma için Switch node'u ekleyin: 70+ ise Slack'te SDR kanalına zengin formatlı bir mesaj gönderin ve owner atayın, 40-69 arası nurture listesine, 40 altı ise yalnızca CRM'e kaydedin. Slack mesajına lead'in CRM linkini eklemek, SDR'ın kayda ulaşma süresini belirgin şekilde kısaltır.",
          "Son olarak ayrı bir Error Workflow tanımlayın ve ana akışın ayarlarından buna bağlayın. Hata durumunda operasyon kanalına bildirim düşsün, başarısız payload bir Postgres tablosuna veya Google Sheets'e yazılsın; böylece hiçbir lead sessizce kaybolmaz ve sorun çözüldüğünde kayıtları yeniden işleyebilirsiniz.",
        ],
      },
      {
        heading: "LLM Prompting İpuçları",
        paragraphs: [
          "ICP fit skorlaması için LLM'e temiz bir kriter listesi verin. 'Bu şirket bizim ICP'mize ne kadar uyuyor?' gibi soyut sorular yerine, sektör/employee count/teknoloji üzerinden puanlama isteyin. Structured output (JSON schema) kullanmak, downstream node'ların veriyi kırmadan işlemesini sağlar.",
          "Prompt'a 2-3 örnek (few-shot) ekleyin: biri ideal müşteri, biri sınırda, biri açıkça uygunsuz. Örnekler skorların zaman içinde tutarlı kalmasını sağlar. Sıcaklığı (temperature) 0-0,2 bandında tutun; yaratıcılık değil tekrarlanabilirlik istiyorsunuz.",
        ],
      },
    ],
    faq: [
      {
        question: "n8n cloud mı self-hosted mı kullanmalıyım?",
        answer:
          "Küçük hacimli akışlar için n8n Cloud pratiktir. Aylık 10.000+ execution veya hassas veri işleniyorsa self-hosted (Docker/Railway) hem maliyet hem uyum açısından daha doğrudur.",
      },
      {
        question: "Lead enrichment için hangi kaynak en doğru?",
        answer:
          "Firma bilgisi için Apollo, teknoloji stack'i için BuiltWith/Wappalyzer, iletişim bilgisi için Clay veya Hunter en yaygın kombinasyonlardır. Genelde 2-3 kaynağın çapraz doğrulanması gerekir.",
      },
      {
        question: "MCP (Model Context Protocol) burada nasıl devreye girer?",
        answer:
          "MCP; LLM'in dış veri kaynaklarına (CRM, veritabanı, iç API) standart bir arayüzle bağlanmasını sağlar. Enrichment akışında n8n yerine doğrudan LLM'in CRM'i sorgulaması gereken senaryolarda MCP mimarisi tercih edilir.",
      },
    ],
    howTo: {
      name: "n8n ile Lead Enrichment Akışı Kurulumu",
      description:
        "Yeni bir form leadini otomatik olarak zenginleştirip skorlayarak CRM'e ve Slack'e yazan uçtan uca n8n akışı.",
      steps: [
        {
          name: "Webhook node'u kurun",
          text: "n8n'de bir Webhook trigger oluşturun, metodu POST yapın ve üretilen production URL'ini form aracınıza (Typeform, HubSpot, custom form) tanımlayın. Ardından bir Set node ile alanları email, full_name, company_domain ve utm_campaign şemasına normalize edin. Bir IF node ile boş e-posta ve ücretsiz domainleri baştan ayırın.",
        },
        {
          name: "Apollo veya Clay ile enrichment yapın",
          text: "HTTP Request node'u ile Apollo'nun match endpoint'ini çağırıp şirket adı, employee count, sektör ve teknoloji stack'i bilgilerini çekin; API anahtarını n8n Credentials'ta saklayın. Apollo eşleşme bulamazsa Clay veya Hunter'a düşen bir fallback dalı ekleyin. Rate limit için 'Retry on Fail' ve toplu işlerde Split In Batches kullanın.",
        },
        {
          name: "OpenAI ile ICP fit skorlayın",
          text: "Zenginleştirilmiş veriyi OpenAI node'una gönderin ve JSON schema ile 0-100 arası skor, üç maddelik gerekçe ve önerilen sonraki adımı isteyin. Prompt'a ideal, sınırda ve uygunsuz müşteriden birer örnek ekleyerek skorları tutarlı hâle getirin. Çıktıyı bir Code node ile doğrulayın, şema bozuksa lead'i manuel inceleme koluna yönlendirin.",
        },
        {
          name: "CRM'e yazın ve owner atayın",
          text: "HubSpot veya Pipedrive node'unda 'Create or Update' operasyonunu seçip e-postayı benzersiz anahtar yaparak mükerrer kaydı önleyin. Skor, gerekçe ve enrichment alanlarını özel property'lere yazın ki satış ekibi liste filtrelerinde kullanabilsin. Skor bandına göre owner atamasını Switch node ile otomatikleştirin.",
        },
        {
          name: "Slack bildirimi ve hata yönetimi ekleyin",
          text: "Skor eşiğin (örn. 70+) üstündeyse SDR kanalına CRM linkini içeren bir Slack mesajı gönderin; 40-69 bandını nurture listesine ekleyin. Ana akışa ayrı bir Error Workflow bağlayarak başarısız çalıştırmaları operasyon kanalına bildirin. Hatalı payload'ları bir tabloya yazın ki sorun çözüldüğünde yeniden işleyebilesiniz.",
        },
      ],
    },
    relatedToolKey: "llms-txt",
  },
  {
    slug: "saas-metrikleri-arr-cac-ltv",
    seoTitle: "SaaS Metrikleri 101: ARR, CAC, LTV ve Churn Rehberi",
    title: "SaaS Metrikleri 101: ARR, CAC, LTV ve Churn Nasıl Yorumlanır?",
    description:
      "SaaS büyümesini yöneten dört temel metrik; sağlıklı bir işletme için hangi bantlarda olmalı ve nasıl iyileştirilir?",
    category: "saas-buyume",
    tldr: [
      "ARR, MRR × 12 formülü ile hesaplanır ve SaaS'ın gerçek büyüklüğünü gösterir.",
      "Sağlıklı bir SaaS'ta LTV/CAC oranı en az 3:1, CAC geri kazanım süresi 12 ayın altında olmalıdır.",
      "Aylık churn %5'in üstünde ise büyüme, yeni müşteri ediniminden değil kaybı telafi etmekten yoruluyor demektir.",
      "Net Revenue Retention (NRR) %110+ olan SaaS'lar, yeni müşteri olmadan bile büyüyebilir.",
    ],
    publishedAt: "2026-07-15",
    readingMinutes: 5,
    tags: ["SaaS", "ARR", "LTV", "CAC", "Churn"],
    sections: [
      {
        heading: "MRR: Tüm Metriklerin Başlangıç Noktası",
        paragraphs: [
          "Monthly Recurring Revenue (MRR), yinelenen abonelik gelirinizin aylık toplamıdır. Tek seferlik kurulum ücretleri, danışmanlık gelirleri ve kullanım aşımı faturaları MRR'a dahil edilmez; bunlar tekrar etmediği için büyüme trendini yanıltır. MRR'ı net (yeni + expansion − daralma − churn) olarak takip etmek, büyümenin gerçekte nereden geldiğini gösterir.",
          "Örnek hesaplama: 120 müşteriniz var, 80'i aylık 1.500 TL, 40'ı aylık 4.000 TL ödüyor. MRR = (80 × 1.500) + (40 × 4.000) = 120.000 + 160.000 = 280.000 TL. Bu ay 8.000 TL yeni abonelik ve 5.000 TL expansion eklendi, 6.000 TL churn oldu; net yeni MRR = 8.000 + 5.000 − 6.000 = 7.000 TL, yani aylık %2,5 büyüme.",
          "Yıllık faturalanan sözleşmeleri MRR'a dahil ederken 12'ye bölün: 60.000 TL'lik yıllık sözleşme, 5.000 TL MRR demektir. Kendi rakamlarınızı hızlıca görmek için MRR Hesaplayıcı'yı kullanabilirsiniz.",
        ],
      },
      {
        heading: "ARR: Büyüklüğün Ölçüsü",
        paragraphs: [
          "Annual Recurring Revenue (ARR), abonelik gelirlerinin yıllıklandırılmış hâlidir. Aylık faturalanan bir SaaS için MRR × 12 formülü kullanılır. Yatırımcılar için ARR; şirketin gerçek büyüklüğünü ve büyüme hızını en net gösteren metriktir.",
          "Örnek hesaplama: MRR'ınız 280.000 TL ise ARR = 280.000 × 12 = 3.360.000 TL. Aylık %2,5 net büyümeyi 12 ay sürdürürseniz yıl sonu MRR'ı 280.000 × 1,025¹² ≈ 376.000 TL, yani ARR ≈ 4.512.000 TL olur. ARR'ı tek başına değil, büyüme hızıyla birlikte raporlayın; aynı ARR seviyesindeki iki şirketten %60 büyüyeni, %10 büyüyeninin birkaç katı değerlenir.",
          "ARR'ı yıllık ciroyla karıştırmayın: ciro tek seferlik gelirleri de içerir, ARR yalnızca sözleşmeye bağlı yinelenen kısmı ölçer. Rakamı doğrulamak için ARR Hesaplayıcı'yı kullanın.",
        ],
      },
      {
        heading: "ARPA: Fiyatlama Sağlığının Göstergesi",
        paragraphs: [
          "Average Revenue Per Account (ARPA), müşteri başına ortalama aylık gelirdir ve fiyatlama stratejinizin en hızlı geri bildirim mekanizmasıdır. Formül basit: ARPA = MRR ÷ aktif müşteri sayısı. Yükselen ARPA genelde daha iyi segmentasyon, başarılı upsell veya doğru paketlemenin işaretidir.",
          "Örnek hesaplama: 280.000 TL MRR ve 120 müşteri ile ARPA = 280.000 ÷ 120 ≈ 2.333 TL. Enterprise segmentinde ARPA 4.000 TL, SMB segmentinde 1.500 TL çıkıyorsa satış ve pazarlama bütçenizin ağırlığını hangi segmente vermeniz gerektiği netleşir. ARPA'yı segment kırılımında izlemeyen ekipler, düşük ARPA'lı müşterilere yüksek CAC harcamaya devam eder.",
          "ARPA aynı zamanda LTV hesabının girdisidir; küçük bir ARPA artışı, LTV'yi ve dolayısıyla sürdürülebilir CAC tavanınızı doğrudan yükseltir. Segment bazlı rakamlarınızı ARPA Hesaplayıcı ile karşılaştırabilirsiniz.",
        ],
      },
      {
        heading: "CAC ve LTV: Birim Ekonomisi",
        paragraphs: [
          "Customer Acquisition Cost (CAC), bir müşteriyi kazanmanın toplam pazarlama + satış maliyetidir. Lifetime Value (LTV), müşterinin ömrü boyunca getirdiği net kârdır. Sağlıklı SaaS'ta LTV/CAC oranı en az 3:1 olmalı; CAC geri kazanımı 12 ayı geçmemelidir.",
          "CAC örneği: Bir çeyrekte pazarlamaya 450.000 TL, satış ekibine 300.000 TL harcadınız ve 60 yeni müşteri kazandınız. CAC = (450.000 + 300.000) ÷ 60 = 12.500 TL. Bu hesaba satış ekibinin maaş ve primlerini dahil etmezseniz CAC'ı sistematik olarak olduğundan düşük görürsünüz.",
          "LTV örneği: ARPA 2.333 TL, brüt marj %80 ve aylık churn %3 ise, ortalama müşteri ömrü 1 ÷ 0,03 ≈ 33 ay. LTV = 2.333 × 0,80 × 33 ≈ 61.600 TL. LTV/CAC = 61.600 ÷ 12.500 ≈ 4,9:1 — sağlıklı bandın üstünde, yani büyümeye daha agresif yatırım yapılabilir. CAC geri kazanımı ise 12.500 ÷ (2.333 × 0,80) ≈ 6,7 ay, hedeflenen 12 ayın altında. Kendi rakamlarınız için CAC Hesaplayıcı ve LTV Hesaplayıcı sayfalarını kullanın.",
        ],
      },
      {
        heading: "Churn ve NRR: Retention Hikayesi",
        paragraphs: [
          "Aylık gross churn %5'in üstündeyse büyüme, kayıp müşterilerin yerini doldurmakla geçer. Net Revenue Retention (NRR) ise upsell/expansion'ı da hesaba katar; %110+ NRR olan SaaS'lar, hiç yeni müşteri kazanmasa bile büyür.",
          "Churn örneği: Ay başında 120 müşteriniz vardı, ay içinde 4 müşteri ayrıldı. Müşteri churn'ü = 4 ÷ 120 ≈ %3,3. Gelir tarafında ay başı MRR 280.000 TL, kaybedilen MRR 6.000 TL ise gross revenue churn = %2,1. Müşteri churn'ü gelir churn'ünden yüksekse küçük hesapları, tersi durumda büyük hesapları kaybediyorsunuz demektir — aksiyon planı tamamen farklıdır.",
          "NRR örneği: Ay başı MRR 280.000 TL, expansion 5.000 TL, daralma 1.000 TL, churn 6.000 TL. NRR = (280.000 + 5.000 − 1.000 − 6.000) ÷ 280.000 ≈ %99,3. %100'ün altındaki NRR, mevcut müşteri tabanının küçüldüğünü ve büyümenin tamamen yeni satışa bağımlı olduğunu söyler. Churn senaryolarını Churn Rate Hesaplayıcı ile modelleyebilirsiniz.",
        ],
      },
      {
        heading: "Bu Metrikleri Birlikte Nasıl Okumalı?",
        paragraphs: [
          "Metrikleri tek tek değil, bir zincir olarak okuyun: ARPA fiyatlamayı, MRR momentumu, churn retention'ı, CAC verimliliği, LTV/CAC ise sürdürülebilirliği ölçer. Zincirin bir halkasındaki değişim diğerlerini domino gibi etkiler; örneğin ARPA'daki %10 artış, LTV'yi ve dolayısıyla katlanabileceğiniz CAC tavanını da yaklaşık %10 yükseltir.",
        ],
        bullets: [
          "Haftalık: net yeni MRR, pipeline ve deneme-dönüşüm oranı",
          "Aylık: ARPA, gross churn, revenue churn ve NRR",
          "Çeyreklik: CAC, CAC geri kazanım süresi ve LTV/CAC oranı",
          "Yıllık: ARR, büyüme hızı ve segment bazlı birim ekonomisi",
        ],
      },
    ],
    faq: [
      {
        question: "MRR ve ARR aynı şey mi?",
        answer:
          "Hayır. MRR (Monthly Recurring Revenue) aylık, ARR (Annual Recurring Revenue) yıllık yinelenen gelirdir. Genelde ARR = MRR × 12 formülüyle hesaplanır.",
      },
      {
        question: "İyi bir LTV/CAC oranı nedir?",
        answer:
          "SaaS'ta genel kabul gören sağlıklı oran 3:1'dir. 1:1 zarar; 5:1+ ise büyümeye daha fazla yatırım yapılabilir demektir.",
      },
      {
        question: "Churn'ü nasıl düşürebilirim?",
        answer:
          "Aktivasyon (ilk değerin hızla yaşanması), müşteri başarısı ekibi ve ürün içi engagement döngüleri en etkili üç kaldıraçtır. Ödeme sorunlarından kaynaklanan involuntary churn için dunning management (Stripe/Chargebee) devreye alınmalıdır.",
      },
      {
        question: "ARPA nasıl hesaplanır ve neden önemlidir?",
        answer:
          "ARPA = MRR ÷ aktif müşteri sayısı. 280.000 TL MRR ve 120 müşteri için ARPA ≈ 2.333 TL'dir. ARPA, LTV hesabının girdisi olduğu için küçük bir artış bile sürdürülebilir CAC tavanınızı yükseltir; segment bazında izlenmesi gerekir.",
      },
      {
        question: "CAC geri kazanım süresi nasıl bulunur?",
        answer:
          "CAC ÷ (ARPA × brüt marj) formülü kullanılır. CAC 12.500 TL, ARPA 2.333 TL ve brüt marj %80 ise geri kazanım ≈ 6,7 aydır. SMB SaaS'ta 12 ayın, enterprise'da 18 ayın altı sağlıklı kabul edilir.",
      },
    ],
    relatedToolKey: "arr",
    resources: [
      { label: "MRR Nedir, Nasıl Hesaplanır? Aylık Yinelenen Gelir", href: "/blog/mrr-nedir-nasil-hesaplanir/" },
      { label: "MRR Hesaplayıcı", href: "/ucretsiz-araclar/mrr-hesaplayici" },
      { label: "ARPA Hesaplayıcı", href: "/ucretsiz-araclar/arpa-hesaplayici" },
      { label: "ARR Hesaplayıcı", href: "/ucretsiz-araclar/arr-hesaplayici" },
      { label: "CAC Hesaplayıcı", href: "/ucretsiz-araclar/cac-hesaplayici" },
      { label: "LTV Hesaplayıcı", href: "/ucretsiz-araclar/ltv-hesaplayici" },
      { label: "LTV Nedir? LTV:CAC Oranı Kaç Olmalı?", href: "/blog/ltv-nedir-ltv-cac-orani/" },
      { label: "CAC Nedir? Müşteri Edinme Maliyeti Nasıl Hesaplanır?", href: "/blog/cac-nedir-musteri-edinme-maliyeti/" },
      { label: "Churn Rate Hesaplayıcı", href: "/ucretsiz-araclar/churn-rate-hesaplayici" },
    ],
  },
  {
    slug: "meta-ads-ogrenme-asamasindan-cikma-taktikleri",
    seoTitle: "Meta Ads Öğrenme Aşamasından Hızlı Çıkmanın 5 Yolu",
    title: "Meta Ads'te Öğrenme Aşamasından Nasıl Hızlı Çıkılır? 5 Taktik",
    description:
      "Meta Ads Learning Phase'i 7 gün içinde tamamlamak için bütçe, event, audience ve kreatif odaklı 5 pratik taktik.",
    category: "performans-pazarlama",
    tldr: [
      "Meta Ads Learning Phase, ad set başına 7 gün içinde 50 optimizasyon eventi ile tamamlanır; aksi hâlde CPA sabit kalmaz.",
      "Bütçeyi çok küçük tutmak, event pencerenizle uyumsuz teklif seçmek ve sık edit yapmak learning'i sıfırlar.",
      "Broad audience + doğru event + günlük bütçe = beklenen event hacmi formülünü kurmak, çıkış süresini kısaltır.",
      "5 taktik: doğru event seçimi, CBO ile bütçe konsolidasyonu, kreatif çeşitliliği, edit disiplini ve Advantage+ testleri.",
    ],
    publishedAt: "2026-07-20",
    readingMinutes: 3,
    tags: ["Meta Ads", "Facebook Ads", "Learning Phase", "Performans"],
    sections: [
      {
        heading: "Learning Phase Nedir ve Neden Önemli?",
        paragraphs: [
          "Meta Ads (Facebook Ads) tarafında makine öğrenmesi algoritması yeni (ya da anlamlı biçimde değiştirilmiş) her ad set için 7 günlük bir pencere içinde 50 optimizasyon eventi toplamayı hedefler. Bu eşik aşılmadan CPA dalgalı seyreder ve teslim verimliliği düşük kalır.",
          "Facebook Ads yöneticisinde çalışan birçok reklamveren uygulamada bu 50 eventi asla toplayamaz; çünkü bütçe düşük, event çok üstte (satın alma yerine görüntüleme), audience çok dar ya da ad set sürekli düzenleniyordur. Aşağıdaki 5 taktik, çıkış süresini belirgin biçimde kısaltır.",
        ],
      },
      {
        heading: "5 Taktik: Learning Phase'den Hızlı Çıkış",
        paragraphs: [
          "Aşağıdaki adımlar sırayla uygulandığında, ad set başına ortalama 3-5 gün içinde learning tamamlanır ve tCPA hedefine oturur:",
        ],
        bullets: [
          "1) Doğru optimizasyon eventini seçin — huninin en aşağısındaki event yerine haftalık 50+ tetiklenebilecek olanı hedefleyin.",
          "2) Bütçeyi Campaign Budget Optimization (Advantage Campaign Budget) ile konsolide edin; 3-5 ad set arasında ezberi bozmayın.",
          "3) Ad set başına en az 4-6 kreatif varyantı yükleyin; algoritmanın gerçek anlamda test yapabileceği bir kütüphane bırakın.",
          "4) Ad set edit disiplini uygulayın — bütçe, audience ve teklif değişikliklerini 4 günden önce yapmayın; her önemli edit learning'i sıfırlar.",
          "5) Advantage+ Audience ve Advantage+ Shopping Campaigns ile geniş hedefleme testleri açın; broad audience learning'i hızlandırır.",
        ],
      },
      {
        heading: "Bütçe ile Event Hacmini Eşleştirme",
        paragraphs: [
          "Ad set günlük bütçesi × 7 gün, tahmini CPA'ya bölündüğünde beklenen event sayısını verir. Beklenen sayı 50'nin altındaysa learning tamamlanamaz — ya bütçeyi büyütmek ya eventi yukarı taşımak (örn. purchase yerine add-to-cart) gerekir.",
          "Yeni ürün lansmanı veya düşük hacimli e-ticaret için 'proxy event' yaklaşımı kritik: ilk 30-45 gün add-to-cart üzerinden optimize edin, purchase hacmi büyüdüğünde eventi yükseltin.",
        ],
      },
      {
        heading: "Kreatif Yorulması ve Sürekli Test Döngüsü",
        paragraphs: [
          "Learning tamamlansa bile 2-3 hafta içinde frekans artar, CTR düşer ve CPA yeniden yükselir (creative fatigue). Haftalık kreatif refresh takvimi ve rakip analizi (Meta Ads Library üzerinden benchmark) sürdürülebilir performans için gereklidir.",
        ],
      },
    ],
    howTo: {
      name: "Meta Ads Learning Phase'den Hızlı Çıkış",
      description:
        "Ad set başına 7 gün içinde 50 event toplayarak Learning Phase'i tamamlamak için uygulanacak 5 adım.",
      steps: [
        {
          name: "Doğru optimizasyon eventini seçin",
          text: "Haftalık 50+ tetiklenebilecek en alt huni eventini seçin. Purchase hacmi düşükse Add to Cart veya Initiate Checkout üzerinden optimize edin.",
        },
        {
          name: "Bütçeyi CBO ile konsolide edin",
          text: "Campaign Budget Optimization (Advantage Campaign Budget) açın ve bütçeyi 3-5 ad set arasında dağıtın; çok fazla küçük ad set açmaktan kaçının.",
        },
        {
          name: "Kreatif kütüphanesini genişletin",
          text: "Ad set başına en az 4-6 farklı kreatif varyantı (video, statik, UGC, testimonial) yükleyerek algoritmaya test yapabileceği alan bırakın.",
        },
        {
          name: "Edit disiplini uygulayın",
          text: "İlk 4-7 gün boyunca bütçe, audience veya teklif değişikliği yapmayın. Her önemli edit learning'i sıfırlar ve sayacı yeniden başlatır.",
        },
        {
          name: "Advantage+ ile broad audience testi açın",
          text: "Advantage+ Audience ve Advantage+ Shopping Campaigns kullanarak geniş hedefleme testleri kurun; broad audience learning'i belirgin biçimde hızlandırır.",
        },
      ],
    },
    faq: [
      {
        question: "Meta Ads Learning Phase kaç günde biter?",
        answer:
          "Standart eşik 7 gün içinde ad set başına 50 optimizasyon eventidir. Bu hacme ulaşan ad set'ler learning'den 'Active' statüsüne geçer; ulaşamayanlar 'Learning Limited' olarak kalır ve CPA dalgalı seyreder.",
      },
      {
        question: "Learning Limited uyarısını nasıl kaldırırım?",
        answer:
          "Üç kaldıraç var: (1) ad set bütçesini artırarak beklenen event sayısını 50'nin üstüne çıkarın, (2) eventi huninin daha üstüne taşıyın (purchase yerine add-to-cart), (3) benzer ad set'leri birleştirerek event sinyalini konsolide edin.",
      },
      {
        question: "Ad set'i edit etmek learning'i sıfırlar mı?",
        answer:
          "Anlamlı editler (bütçe %20+ değişim, audience, optimization event, teklif stratejisi, kreatif değişikliği) learning'i sıfırlar. Kreatif ekleme genelde sıfırlamaz; kreatif değiştirme ise sıfırlar.",
      },
      {
        question: "CBO mu manuel bütçe mi Learning Phase için daha iyi?",
        answer:
          "CBO (Advantage Campaign Budget), bütçeyi en iyi performans gösteren ad set'e otomatik akıttığı için toplam event hacmini artırır ve learning'i hızlandırır. Manuel bütçe, sadece ad set'ler net biçimde ayrı hedef veya coğrafya için ayrılmışsa mantıklıdır.",
      },
    ],
    relatedToolKey: "roas",
  },
  {
    slug: "b2b-lead-generation-maliyetleri-nasil-dusurulur",
    seoTitle: "B2B Lead Generation Maliyetleri Nasıl Düşürülür? (2026)",
    title: "B2B Lead Generation Maliyetleri Nasıl Düşürülür? (2026 Rehberi)",
    description:
      "Offline conversion tracking, katmanlı hedefleme, GEO ve davranışsal e-posta otomasyonu ile B2B lead başına maliyeti ek bütçe harcamadan %30-50 düşürme rehberi.",
    category: "b2b-lead-generation",
    tldr: [
      "Reklam optimizasyonunu form doldurmadan CRM'deki SQL verisine bağlayın (offline conversion tracking) — ek bütçe gerektirmeyen en yüksek etkili adım.",
      "Hedeflemeyi tek kademeden çok kademeli yapıya çevirin: bütçenin %60-70'i Manager/Specialist, kalanı üst yönetim.",
      "Davranışsal e-posta otomasyonlarıyla terk edilen leadleri geri kazanın; yeni soğuk lead almaktan çok daha ucuz.",
      "Bu üç adım, ek reklam bütçesi olmadan CPA'yi %30-50 aralığında düşürebilir.",
    ],
    publishedAt: "2026-07-28",
    readingMinutes: 6,
    tags: ["B2B", "Lead Generation", "CAC", "GEO", "Offline Conversion"],
    sections: [
      {
        heading: "B2B Lead Maliyetleri Neden Yükselir? (Temel Nedenler)",
        paragraphs: [
          "Google Ads veya LinkedIn Campaign Manager'da bir kampanyayı \"lead\" veya \"form doldurma\" hedefine göre optimize ettiğinizde, algoritma size formu dolduran herkesi getirir. Bütçesi olan, satın alma yetkisi olan biri mi, yoksa üniversite ödevi için anket dolduran bir öğrenci mi — algoritma bunu ayırt edemez. Çünkü sinyal olarak elinde sadece \"form gönderildi\" verisi var.",
          "Bunun pratikteki sonucu şu: CPA'niz düşük görünür (örneğin form başına 40-50 TL gibi cazip bir rakam), ama satış ekibi bu leadlerin yüzde 70-80'ini \"uygun değil\" diye elerse, gerçek müşteri edinme maliyetiniz aslında raporlanandan 4-5 kat yüksektir. Panel size yalan söylemiyor, yanlış soruyu cevaplıyor.",
          "Çözüm, offline conversion tracking kurmaktır. CRM'inizde bir lead \"SQL\" (Sales Qualified Lead) statüsüne geçtiğinde veya bir fırsat kapandığında, bu bilgiyi API veya native entegrasyon üzerinden reklam paneline geri besleyin. HubSpot-Google Ads entegrasyonu, Salesforce-LinkedIn entegrasyonu gibi hazır bağlantılar bunun için var; sıfırdan bir şey kurmanıza gerek yok. Bu yapıldığında algoritma 2-3 hafta içinde \"hangi profil özelliklerinin gerçek satışa dönüştüğünü\" öğrenmeye başlar ve teklif verme davranışını buna göre ayarlar.",
          "Bunu kurmayan şirketlerin çoğu, aslında hiç düşük olmayan bir maliyeti düşük sanarak bütçe artırmaya devam ediyor.",
        ],
      },
      {
        heading: "B2B Reklam Hedeflemesi Nasıl Katmanlandırılır?",
        paragraphs: [
          "\"C-Level'ı hedefleyelim, karar onlarda\" mantığı kulağa doğru geliyor ama pratikte pahalıya patlıyor. LinkedIn'de CFO veya CTO unvanına sahip birine ulaşmanın maliyeti, Manager veya Team Lead seviyesindeki birine göre kolayca 3-4 kat daha yüksek olabilir — çünkü rekabet o segmentte çok daha yoğun.",
          "Gerçekte B2B satın alma süreçlerinin çoğunda (özellikle 50+ kişilik şirketlerde) karar tek kişiye ait değil, bir komite işliyor. Süreci başlatan ve araştıran genelde orta kademe biri oluyor; bu kişi ihtiyacı tanımlıyor, kısa liste çıkarıyor, sonra üst yönetime \"bunlardan birini seçelim\" diye götürüyor. Yani reklamı sadece nihai imza atan kişiye göstermek, satın alma yolculuğunun en pahalı ve en rekabetçi noktasında savaşmak demek.",
        ],
        bullets: [
          "Bütçenin yüzde 60-70'ini Manager/Specialist seviyesine, kalanını üst yönetime ayırın.",
          "LinkedIn \"Matched Audiences\" ile siteyi ziyaret edip form doldurmayanları retarget edin.",
          "Retargeting genelde soğuk hedeflemeden belirgin şekilde daha düşük maliyetli çalışır — kişi zaten sizi tanıyor.",
        ],
      },
      {
        heading: "GEO (Generative Engine Optimization) ile Organik Lead Maliyeti Nasıl Düşürülür?",
        paragraphs: [
          "GEO, içeriğin ChatGPT, Perplexity gibi yapay zeka arama araçları tarafından kaynak olarak referans gösterilmesini hedefleyen optimizasyon yaklaşımıdır. B2B alıcıların artan bir kısmı araştırma sürecini bu araçlar üzerinden başlatıyor; bu da GEO'yu reklam bağımlılığını azaltan, marjinal maliyeti sıfıra yakın bir kanal haline getiriyor.",
          "Pratikte bu, mevcut blog içeriğinin schema.org işaretlemesini düzeltmek ve sayfa yükleme hızını optimize etmekle büyük ölçüde çözülüyor; ayrı bir \"GEO bütçesi\" veya yeni bir ajans hizmeti genellikle gerekmiyor.",
        ],
        bullets: [
          "Yapılandırılmış soru-cevap formatı: FAQ schema'sı doğru işaretlenmeli; modeller doğrudan soruya cevap veren bloğu daha kolay çekiyor.",
          "Ölçülebilir veri kullanımı: \"Çoğu şirket\" gibi belirsiz ifadeler yerine somut rakam ve kaynak; modeller doğrulanabilir iddiaları referans göstermeye daha yatkın.",
          "Net konu hiyerarşisi: tek H1, konuyla birebir örtüşen H2/H3'ler ve her bölümün tek bir alt-niyete cevap vermesi.",
        ],
      },
      {
        heading: "Davranışsal E-posta Otomasyonu ile Kayıp Leadler Nasıl Geri Kazanılır?",
        paragraphs: [
          "B2B'de bir potansiyel müşteri genelde ilk temasta satın almaz — ortalama karar süreci 3-6 ay arasında değişebiliyor, sektöre göre daha da uzayabiliyor. Bu yüzden \"form doldurmadıysa kayıp\" mantığı büyük bir kaynak israfı.",
          "Somut bir örnek: bir kişi fiyatlandırma sayfanıza girip formu doldurmadan çıktıysa, bu kişi hâlâ değerli bir sinyal veriyor demektir. Bu davranışa göre tetiklenen bir e-posta dizisi (örneğin \"fiyatlandırma sayfasını inceleyenlere özel karşılaştırma dokümanı\") kurmak, sıfırdan yeni bir soğuk lead almaktan çok daha ucuza satışa dönüşüyor — çünkü kişi zaten niyetini bir kere göstermiş oluyor.",
          "Bunu kurmak için karmaşık bir altyapıya gerek yok; ActiveCampaign, HubSpot gibi araçların davranışsal tetikleyici (behavioral trigger) özellikleri bu iş için yeterli. Önemli olan, hangi sayfa ziyaretinin hangi otomasyonu tetikleyeceğini önceden net tanımlamak.",
        ],
      },
      {
        heading: "B2B Lead Generation İçin Gerekli Araç ve Yazılım Altyapısı",
        paragraphs: [
          "Küçük ve orta ölçekli B2B şirketlerin sık yaptığı hata, büyük şirketlerin kullandığı araç yığınını kopyalamaya çalışmak. Gerçekte ihtiyaç, ekip büyüklüğüne ve lead hacmine göre değişiyor.",
          "Buradaki kritik nokta: CRM'i atlayıp direkt pazarlama otomasyonu veya gelişmiş attribution araçlarına para vermek yaygın bir hata. CRM olmadan diğer araçların ürettiği veri bağlamsız kalıyor — hangi kampanyanın gerçekten satışa dönüştüğünü göremezsiniz, sadece \"kaç kişi tıkladı\" gibi yüzeysel metrikler kalır elinizde.",
        ],
        bullets: [
          "CRM — ilk günden itibaren, tek kullanıcı için bile: HubSpot (ücretsiz katman var), Pipedrive. 0-90 $/kullanıcı/ay.",
          "Pazarlama otomasyonu — ayda 50+ lead almaya başladığınızda anlamlı: ActiveCampaign, Mailchimp. 30-300 $/ay.",
          "LinkedIn Sales Navigator — manuel outbound veya hesap tabanlı satış (ABM) yapıyorsanız: ~80 $/ay/kullanıcı.",
          "Attribution / analitik — birden fazla kanaldan eşzamanlı reklam veriyorsanız: GA4 (ücretsiz), Dreamdata, Triple Whale. 0-500+ $/ay.",
        ],
      },
      {
        heading: "B2B Lead Kalitesini Ölçmek İçin Hangi Metrikler Takip Edilmeli?",
        paragraphs: [
          "Pazarlama raporlarında en sık görülen hata, \"bu ay 340 lead aldık\" gibi tek bir sayıya odaklanmak. Bu sayı tek başına hiçbir şey söylemiyor. Aşağıdaki üç oranı takip etmek daha anlamlı bir tablo veriyor.",
        ],
        bullets: [
          "MQL → SQL dönüşüm oranı: pazarlamanın ürettiği leadlerin yüzde kaçı satışa değer bulunuyor. %15'in altındaysa hedefleme veya lead magnet'te sorun var.",
          "Kanal bazlı SQL maliyeti — sadece lead maliyeti değil. Ucuz lead getiren ama SQL'e dönmeyen kanal, göründüğünden çok daha pahalıdır.",
          "CAC:LTV oranı: genel kabul gören eşik 1:3. Oran 1:1'e yaklaşıyorsa büyüme sürdürülebilir değildir, sadece nakit yakıyorsunuzdur.",
        ],
      },
    ],
    howTo: {
      name: "B2B lead maliyetini düşürmek için uygulama sırası",
      description:
        "Sınırlı bütçe ve kaynakla çalışan B2B ekipleri için lead başına maliyeti düşürmenin öncelik sırası.",
      steps: [
        {
          name: "Offline conversion tracking kurun",
          text: "Reklam panellerindeki optimizasyon hedefini form doldurmadan CRM'deki SQL verisine bağlayın. Ek bütçe gerektirmeyen, tek başına en yüksek etkiyi yaratan adım budur.",
        },
        {
          name: "Hedeflemeyi katmanlandırın",
          text: "Sadece nihai karar vericiyi değil, süreci başlatan orta kademeyi de kapsayın; bütçenin çoğunluğunu Manager/Specialist seviyesine ayırın.",
        },
        {
          name: "Davranışsal e-posta akışı kurun",
          text: "Terk edilen form ve sayfa ziyaretlerini davranışsal tetikleyicili otomatik e-posta dizisiyle yeniden devreye alın.",
        },
        {
          name: "İçeriği GEO standartlarına göre düzenleyin",
          text: "FAQ ve HowTo schema işaretlemesini, başlık hiyerarşisini ve soru-cevap yapısını netleştirin.",
        },
        {
          name: "Yeni araç veya kanal eklemeyi en son yapın",
          text: "Mevcut trafiğin verimini artırmak, yeni trafik satın almaktan her zaman daha ucuzdur.",
        },
      ],
    },
    faq: [
      {
        question: "B2B lead maliyetlerini düşürmek için ilk olarak ne yapılmalı?",
        answer:
          "Reklam panellerindeki optimizasyon hedefi form doldurmaktan çıkarılıp, CRM'deki nitelikli müşteri (SQL) verisine bağlanmalıdır (offline conversion tracking). Bu adım genellikle ek bütçe gerektirmez ve en hızlı etkiyi yaratır.",
      },
      {
        question: "Küçük bütçeli işletmeler hangi kanallara odaklanmalı?",
        answer:
          "Yüksek reklam harcamasına girmeden önce niş içerik pazarlaması, GEO odaklı statik blog altyapısı ve LinkedIn Sales Navigator üzerinden manuel ağ kurma stratejilerine öncelik verilmelidir.",
      },
      {
        question: "B2B'de ortalama lead başına maliyet (CPL) ne kadardır?",
        answer:
          "Sektöre, hedeflenen unvana ve kanala göre büyük farklılık gösterir; LinkedIn'de C-Level hedeflemede CPL, orta kademe hedeflemeye göre 3-4 kat daha yüksek olabilir. Tek bir \"ortalama\" rakam yerine kanal bazlı SQL maliyetini takip etmek daha doğru sonuç verir.",
      },
      {
        question: "MQL ile SQL arasındaki fark nedir?",
        answer:
          "MQL (Marketing Qualified Lead), pazarlamanın ilgi gösterdiğini tespit ettiği kişidir. SQL (Sales Qualified Lead), satış ekibinin görüşmeye değer bulduğu, satın alma potansiyeli doğrulanmış kişidir. MQL→SQL oranının yüzde 15'in altında olması, hedefleme veya içerik teklifinde sorun olduğuna işaret eder.",
      },
      {
        question: "CAC:LTV oranı ne olmalı?",
        answer:
          "Genel kabul gören sağlıklı eşik 1:3'tür — müşteri edinme maliyeti, o müşterinin yaşam boyu getireceği gelirin en fazla üçte biri olmalıdır. Oran 1:1'e yaklaştıkça büyüme sürdürülemez hale gelir.",
      },
    ],
    relatedToolKey: "cac",
    resources: [
      {
        label: "B2B Lead Generation Hunisi Nasıl Tasarlanır? Uçtan Uca Rehber",
        href: "/blog/b2b-lead-generation-huni-tasarimi",
      },
      {
        label: "n8n ile Lead Enrichment Otomasyonu",
        href: "/blog/n8n-ile-lead-enrichment-otomasyonu",
      },
      {
        label: "SaaS Metrikleri: ARR, CAC ve LTV",
        href: "/blog/saas-metrikleri-arr-cac-ltv",
      },
      { label: "LTV Hesaplayıcı", href: "/ucretsiz-araclar/ltv-hesaplayici" },
      {
        label: "Google Ads — Offline dönüşüm içe aktarma dokümantasyonu",
        href: "https://support.google.com/google-ads/answer/2998031",
        external: true,
      },
      {
        label: "LinkedIn Ads — Matched Audiences dokümantasyonu",
        href: "https://www.linkedin.com/help/lms/answer/a423304",
        external: true,
      },
      {
        label: "HubSpot — Google Ads entegrasyonu",
        href: "https://knowledge.hubspot.com/ads/use-the-google-ads-integration",
        external: true,
      },
    ],
  },
  {
    slug: "linkedin-reklamlari-turkiye-2026-firsat",
    seoTitle: "LinkedIn Reklamları Türkiye 2026: Neden Şimdi Ucuz?",
    title: "Türkiye'de LinkedIn Reklamları Neden Şimdi Ucuz? 2026 Verileriyle Fırsat Penceresi",
    description:
      "DataReportal 2026 verilerine göre LinkedIn'in Türkiye'deki reklam erişimi hızla büyüyor. Rekabet doymadan bu fırsatı B2B'de nasıl kullanacağınızı anlatıyoruz.",
    category: "performans-pazarlama",
    tldr: [
      "DataReportal'ın Kepios ile hazırladığı Türkiye raporuna göre LinkedIn'in reklamla ulaşılabilir kitlesi, olgunlaşmış sosyal platformlardan belirgin biçimde hızlı büyüyor.",
      "Kullanıcı tarafı büyürken reklamveren tarafı aynı hızda büyümediğinde, açık artırma baskısı geçici olarak düşük kalır — fırsat penceresi tam olarak budur.",
      "Türkiye'de B2B alıcıların LinkedIn'de bulunabilirliği arttı; ancak çoğu bütçe hâlâ Meta ve Google'da duruyor.",
      "Pencere kapanmadan yapılacak doğru hamle: kitle listelerini şimdi kurmak, marka bilinirliğini ucuzken biriktirmek ve dönüşümü lead formundan CRM'e bağlamak.",
    ],
    publishedAt: "2026-08-16",
    readingMinutes: 6,
    tags: ["LinkedIn Ads", "B2B", "Türkiye", "Medya Planlama"],
    sections: [
      {
        heading: "Türkiye'de LinkedIn'in Reklam Erişimi Ne Kadar Büyüdü?",
        paragraphs: [
          "DataReportal'ın Kepios ile hazırladığı Türkiye dijital raporuna göre LinkedIn, ülkede reklamla ulaşılabilir kitlesini yıllık bazda en hızlı büyüten platformlardan biri konumunda. Rapordaki tablo şunu gösteriyor: Meta ve YouTube gibi olgunlaşmış platformlar zaten nüfusun büyük bölümüne eriştiği için tek haneli büyüme üretirken, LinkedIn hâlâ çift haneli oranlarda yeni erişim kazanıyor.",
          "Bu farkın nedeni doygunluk seviyesi. Bir platform hedef kitlesinin neredeyse tamamına ulaştığında büyüme ancak nüfus artışı kadar olur. LinkedIn ise Türkiye'de profesyonel nüfusun tamamına henüz ulaşmış değil; her yıl yeni mezunlar, kariyer değiştirenler ve şirket hesapları platforma katılmaya devam ediyor. Yani büyüme, doygun bir pazarda pay çalmaktan değil, pazarın kendisinin genişlemesinden geliyor.",
          "Rakamları tek tek ezberlemenin bir anlamı yok; önemli olan yön. Reklamla ulaşılabilir kitlenin büyüme hızı, o platformdaki envanter arzının büyüme hızıdır. Envanter hızla artıyorsa ve talep aynı hızda artmıyorsa, birim maliyet baskı altında kalır.",
        ],
      },
      {
        heading: "Envanter Büyürken Reklamveren Sayısı Neden Geride Kalıyor?",
        paragraphs: [
          "Türkiye'de dijital reklam bütçelerinin ezici çoğunluğu hâlâ Meta ve Google'a akıyor. Bunun sebebi genellikle stratejik bir tercih değil, alışkanlık: ekipler bu panellerde deneyimli, ajanslar bu kanallarda ölçekli, raporlama şablonları buna göre kurulu. LinkedIn ise \"pahalı kanal\" etiketiyle çoğu medya planında en sona bırakılıyor.",
          "Sonuç ilginç bir asimetri yaratıyor: kullanıcı ve gösterim arzı büyüyor, ama o envantere talip olan reklamveren sayısı aynı oranda artmıyor. Açık artırma tabanlı bir sistemde bu, birim maliyetin baskılanması demek. \"LinkedIn pahalıdır\" cümlesi mutlak CPM üzerinden bakınca doğru olmaya devam ediyor, ama doğru soru bu değil.",
          "Doğru soru şu: nitelikli bir B2B karar vericisine ulaşmanın toplam maliyeti nedir? Meta'da CPM daha düşüktür ama hedeflediğiniz profil, ilgi alanı tahminleriyle bulunur ve büyük bir kısmı israf olur. LinkedIn'de CPM yüksektir ama unvan, şirket büyüklüğü ve sektör beyan edilmiş veridir. İsraf düştüğünde, yüksek CPM'e rağmen nitelikli temas başına maliyet düşebilir.",
        ],
        bullets: [
          "Mutlak CPM yerine \"nitelikli lead başına maliyet\" ile karşılaştırın; iki kanalı aynı metrikle konuşturmadan karar vermeyin.",
          "Meta'daki lead formunu dolduranların ne kadarının SQL'e döndüğünü ölçün — çoğu ekipte bu oran beklenenden çok düşük çıkar.",
          "LinkedIn'i \"ek kanal\" değil, huninin üst ve orta katmanını besleyen ayrı bir sistem olarak kurgulayın.",
        ],
      },
      {
        heading: "Fırsat Penceresi Ne Kadar Açık Kalır?",
        paragraphs: [
          "Bu tür asimetriler kalıcı değildir. Bir kanalın verimi fark edildikçe bütçe oraya kayar, açık artırmadaki rekabet artar ve maliyet avantajı erir. Türkiye'de LinkedIn tarafında bu sürecin başladığını görüyoruz; teknoloji, danışmanlık ve endüstriyel B2B segmentlerinde reklamveren yoğunluğu belirgin şekilde artıyor.",
          "Pencere kapandığında kaybedilen şey sadece ucuz CPM değil, birikmiş kitle varlığıdır. Bugün oluşturduğunuz site ziyaretçisi, video izleyicisi ve etkileşim tabanlı retargeting listeleri, maliyetler yükseldiğinde en verimli varlığınız olur. Soğuk hedefleme pahalılaşırken, önceden biriktirilmiş sıcak kitleye ulaşmak görece ucuz kalmaya devam eder.",
          "Yani buradaki fırsat \"şimdi çok satış yap\" fırsatı değil; \"pahalanmadan önce varlık biriktir\" fırsatı. B2B'de karar süreçleri zaten aylar sürüyor, bu yüzden bugün kurulan kitle yarının satışını finanse ediyor.",
        ],
      },
      {
        heading: "Bu Pencereyi Değerlendirmek İçin Pratik Kurulum",
        paragraphs: [
          "Aşağıdaki sıralama, sıfırdan LinkedIn Ads kuran bir B2B ekibinin ilk 60 günde izlemesi gereken yolu özetliyor. Amaç ilk günden dönüşüm kovalamak değil; ölçüm altyapısını kurup kitleyi biriktirmek.",
        ],
        bullets: [
          "Insight Tag'i kurun ve site ziyaretçisi, fiyatlandırma sayfası görüntüleyen, blog okuyan gibi ayrı kitleler tanımlayın.",
          "Hedeflemeyi unvan yerine iş fonksiyonu + kıdem + şirket büyüklüğü üçlüsüyle kurun; unvan alanı Türkiye'de çok dağınık doldurulur.",
          "Bütçenin çoğunluğunu karar vericinin bir kademe altındaki araştırmacı profile ayırın; süreci genellikle onlar başlatır.",
          "İlk 30 günü düşük maliyetli video ve döküman (carousel) reklamlarıyla kitle biriktirmeye ayırın, dönüşümü ikinci aşamada zorlayın.",
          "Lead Gen Form kullanıyorsanız CRM entegrasyonunu ilk günden kurun; SQL verisi geri beslenmeden optimizasyon kör çalışır.",
          "Frekansı haftalık takip edin; dar B2B kitlelerinde frekans hızla yükselir ve tıklama maliyetini yukarı çeker.",
        ],
      },
      {
        heading: "Ölçümü Doğru Kurmadan Bu Fırsat İşe Yaramaz",
        paragraphs: [
          "Kanal ucuz olsa bile, form doldurmayı nihai başarı sayan bir ölçüm kurgusu sizi yanlış yöne götürür. LinkedIn'de gelen leadlerin niteliği genellikle yüksektir, ancak bunu kanıtlayamazsanız bütçe tartışmasını kaybedersiniz. Bu yüzden dönüşüm tanımını CRM'deki fırsat aşamasına bağlamak şart.",
          "Pratik yaklaşım: reklam panelinde \"form gönderimi\" birincil hedef olmaktan çıkarılır, yerine CRM'den geri beslenen \"nitelikli görüşme\" veya \"fırsat oluştu\" olayı konur. Bu bağlantı kurulduktan sonra maliyet karşılaştırmaları anlamlı hale gelir ve LinkedIn'in gerçek maliyeti, panelde görünen CPM'den çok farklı bir yerde durur.",
          "Huninin tamamını uçtan uca nasıl kuracağınızı adım adım anlattığımız B2B lead generation hunisi rehberi, bu ölçüm zincirinin nasıl kurulacağını da kapsıyor.",
        ],
      },
    ],
    faq: [
      {
        question: "Türkiye'de LinkedIn reklamları gerçekten ucuz mu?",
        answer:
          "Mutlak CPM olarak hayır — LinkedIn Meta'dan pahalıdır. Ancak nitelikli B2B teması başına maliyete bakıldığında tablo değişir. DataReportal'ın Kepios ile hazırladığı rapora göre platformun Türkiye'deki reklam erişimi hızla büyürken reklamveren yoğunluğu aynı hızda artmadığı için, açık artırma baskısı geçici olarak düşük kalıyor. Fırsat bu asimetride.",
      },
      {
        question: "LinkedIn Ads için Türkiye'de minimum bütçe ne olmalı?",
        answer:
          "Anlamlı bir test için aylık bütçenin, hedef kitlenizin büyüklüğüne ve kampanya sayısına göre planlanması gerekir. Pratik kural: tek bir kampanyada günlük bütçe, o kitledeki ortalama tıklama maliyetinin en az 15-20 katı olmalı ki algoritma günlük yeterli veri toplayabilsin. Bütçeyi çok sayıda kampanyaya bölmek, hiçbirinin öğrenememesine yol açar.",
      },
      {
        question: "LinkedIn Ads mi Meta Ads mi B2B için daha uygun?",
        answer:
          "İkisi farklı işler yapar. LinkedIn beyan edilmiş firmografik veriyle (unvan, şirket büyüklüğü, sektör) doğrudan karar verici çevresine ulaşmak için uygundur. Meta ise geniş erişim ve düşük CPM ile marka bilinirliği ve retargeting için verimlidir. Çoğu B2B için doğru kurgu, LinkedIn ile hedefleyip Meta ile hatırlatma yapmaktır.",
      },
      {
        question: "Bu fırsat penceresi ne zaman kapanır?",
        answer:
          "Kesin bir tarih vermek mümkün değil; kapanma, reklamveren yoğunluğunun erişim büyümesini yakalamasıyla gerçekleşir. Teknoloji ve danışmanlık gibi segmentlerde rekabet şimdiden artıyor. Pratik gösterge kendi hesabınızdaki CPM trendidir: aynı kitlede CPM birkaç ay üst üste yükseliyorsa pencere daralıyor demektir.",
      },
      {
        question: "LinkedIn Lead Gen Form mu landing page mi kullanmalı?",
        answer:
          "Lead Gen Form form doldurma oranını belirgin şekilde yükseltir çünkü kullanıcı platformdan ayrılmaz ve alanlar otomatik dolar. Ancak niteliği düşürebilir. Önerilen yaklaşım: üst huni içerik indirmelerinde Lead Gen Form, demo ve fiyat talebi gibi yüksek niyetli aksiyonlarda landing page kullanmak.",
      },
    ],
    relatedToolKey: "cac",
    resources: [
      {
        label: "B2B Lead Generation Hunisi Nasıl Tasarlanır?",
        href: "/blog/b2b-lead-generation-huni-tasarimi",
      },
      {
        label: "B2B Lead Generation Maliyetleri Nasıl Düşürülür?",
        href: "/blog/b2b-lead-generation-maliyetleri-nasil-dusurulur",
      },
      {
        label: "Kaynak: DataReportal — Digital 2026: Turkey (Kepios ile hazırlanmıştır)",
        href: "https://datareportal.com/reports/digital-2026-turkey",
        external: true,
      },
    ],
  },
  {
    slug: "nrr-nedir-saas-buyume-metrigi",
    seoTitle: "NRR Nedir? Net Gelir Tutundurma Hesaplama + Örnek",
    title: "NRR (Net Revenue Retention) Nedir? SaaS'ta Neden ARR'dan Daha Önemli?",
    description:
      "NRR, mevcut müşterilerden bir yıl sonra elde tutulan gelirin oranıdır. Formül, örnek hesap, iyi NRR kaç olmalı ve ARR/MRR'dan farkı.",
    category: "saas-buyume",
    tldr: [
      "NRR = (Başlangıç MRR + Genişleme − Daralma − Churn) / Başlangıç MRR × 100. Yeni müşteriler hesaba girmez.",
      "ARR gelirin büyüklüğünü, NRR ise o gelirin kalitesini gösterir; yeni satış durduğunda ne olacağını yalnızca NRR söyler.",
      "%100 nötr eşiktir. Altı taban erimesi, üstü negatif churn anlamına gelir.",
      "Yatırımcı değerleme çarpanlarını en çok etkileyen metriklerden biridir; %120+ NRR premium çarpan getirir.",
    ],
    publishedAt: "2026-08-16",
    readingMinutes: 6,
    tags: ["SaaS", "NRR", "Retention", "Metrikler"],
    sections: [
      {
        heading: "NRR Nedir ve Nasıl Hesaplanır?",
        paragraphs: [
          "NRR (Net Revenue Retention), dönem başındaki müşteri tabanının dönem sonunda ürettiği gelirin başlangıç gelirine oranıdır. Formülü basittir: NRR = (Başlangıç MRR + Genişleme MRR − Daralma MRR − Kaybedilen MRR) / Başlangıç MRR × 100.",
          "Hesabın en kritik detayı, dışarıda bıraktığı şeydir: yeni kazanılan müşterilerin geliri bu formüle girmez. Bu yüzden NRR, pazarlama ve satış motorunu tamamen kapatsanız bile işletmenizin büyüyüp büyümeyeceğini gösteren tek metriktir. Diğer tüm büyüme metrikleri yeni satışla maskelenebilir; NRR maskelenemez.",
          "Örnek: Dönem başı MRR'si 400.000 ₺ olan bir SaaS'ta ay içinde 60.000 ₺ genişleme (upsell, koltuk artışı), 15.000 ₺ daralma (plan küçültme) ve 25.000 ₺ churn gerçekleşti. NRR = (400.000 + 60.000 − 15.000 − 25.000) / 400.000 × 100 = %105. Yani hiç yeni müşteri gelmese bile gelir %5 büyümüş oldu.",
        ],
      },
      {
        heading: "NRR ile ARR ve MRR Arasındaki Fark",
        paragraphs: [
          "ARR ve MRR birer hacim metriğidir: gelirin ne kadar büyük olduğunu söyler. NRR ise bir kalite metriğidir: o gelirin ne kadar dayanıklı ve genişleyebilir olduğunu söyler. İki şirket aynı 10 milyon ARR'a sahip olabilir, ama biri %85 diğeri %125 NRR ile çalışıyorsa bunlar tamamen farklı iki iştir.",
          "%85 NRR ile çalışan şirket, sadece yerinde saymak için her yıl gelirinin %15'i kadar yeni satış yapmak zorundadır. Büyümek istiyorsa bunun üzerine çıkması gerekir. Bu, satış ekibine ve reklam bütçesine kalıcı bir bağımlılık yaratır; CAC arttığı anda büyüme durur.",
          "%125 NRR ile çalışan şirket ise hiç yeni müşteri kazanmasa bile yılda %25 büyür. Yeni satış bunun üzerine eklendiğinde bileşik bir etki oluşur. Bu yüzden aynı ARR'a sahip iki şirket arasında değerleme farkı katlarla ölçülebilir.",
        ],
        bullets: [
          "ARR: gelir ne kadar büyük?",
          "Büyüme oranı: gelir ne kadar hızlı artıyor?",
          "NRR: bu artışın ne kadarı mevcut müşteriden geliyor, yani ne kadarı sürdürülebilir?",
        ],
      },
      {
        heading: "NRR ile GRR Arasındaki Fark Neden Önemli?",
        paragraphs: [
          "GRR (Gross Revenue Retention) yalnızca kayıpları sayar: (Başlangıç − Daralma − Churn) / Başlangıç. Genişlemeyi içermediği için asla %100'ü geçemez. Yukarıdaki örnekte GRR = (400.000 − 15.000 − 25.000) / 400.000 = %90'dır.",
          "NRR %105 ile iyi görünürken GRR %90 olması şunu anlatır: taban aslında eriyor, ancak birkaç büyük hesabın genişlemesi bu erimeyi örtüyor. Bu, kırılgan bir yapıdır — genişleyen o birkaç hesap ayrıldığında tablo hızla bozulur.",
          "Bu yüzden ciddi bir yatırımcı görüşmesinde ikisi birlikte sorulur. Sağlıklı profil, GRR'nin de yüksek olduğu (enterprise'da %90+, SMB'de %80+) ve NRR'nin genişlemeyle bunun üzerine çıktığı yapıdır.",
        ],
      },
      {
        heading: "Sağlıklı NRR Aralıkları ve Yatırımcı Bakışı",
        paragraphs: [
          "Segmente göre yaygın referanslar: SMB odaklı SaaS'larda %90-100, mid-market'te %100-110, enterprise ve kullanım bazlı fiyatlayan ürünlerde %120 ve üzeri. Kullanım bazlı fiyatlama modelleri doğaları gereği yüksek NRR üretir, çünkü müşteri büyüdükçe fatura otomatik büyür.",
          "Yatırımcılar NRR'yi iki nedenle önemser. Birincisi, gelecekteki gelirin öngörülebilirliğini gösterir. İkincisi, ürünün gerçekten değer üretip üretmediğinin en dürüst kanıtıdır — müşteri parasını artırıyorsa memnundur, anketler bunu söyleyemez ama fatura söyler.",
        ],
      },
      {
        heading: "NRR Nasıl Artırılır?",
        paragraphs: [
          "NRR'yi iyileştirmek çoğunlukla satışın değil, ürün ve müşteri başarısının işidir. Genişleme geliri, müşterinin üründen aldığı değerin doğal sonucudur; zorla satılmaz.",
        ],
        bullets: [
          "Fiyatlamayı büyümeye bağlayın: koltuk, kullanım hacmi veya işlem sayısı gibi müşteriyle birlikte büyüyen bir eksen seçin.",
          "Onboarding'i hızlandırın: ilk değerin görüldüğü süre (time-to-value) kısaldıkça hem churn düşer hem genişleme hızlanır.",
          "Genişlemeyi sürtünmesiz yapın: ek koltuk veya modül almak için satış görüşmesi gerekmemeli.",
          "Risk skoru kurun: kullanım düşüşü, ana kullanıcının ayrılması, destek talebi artışı gibi sinyalleri churn gerçekleşmeden yakalayın.",
          "NRR'yi kohort ve segment kırılımında izleyin: hangi müşteri profilinin genişlediğini bilmek, satın alma hedeflemenizi de düzeltir.",
        ],
      },
    ],
    faq: [
      {
        question: "NRR nedir?",
        answer:
          "NRR (Net Revenue Retention), mevcut müşteri tabanınızdan gelen gelirin bir dönem içindeki net değişimidir. Formül: (Başlangıç MRR + Genişleme − Daralma − Churn) / Başlangıç MRR × 100. Yeni müşterilerden gelen gelir bu hesaba dahil edilmez.",
      },
      {
        question: "İyi bir NRR oranı nedir?",
        answer:
          "%100 nötr eşiktir. SMB odaklı ürünlerde %90-100 kabul edilebilir, mid-market'te %100-110 iyi, enterprise ve kullanım bazlı fiyatlayan SaaS'larda %120 ve üzeri mükemmel sayılır. %100'ün altı, mevcut tabanın eridiğini ve büyümenin tamamen yeni satışa bağımlı olduğunu gösterir.",
      },
      {
        question: "NRR neden ARR'dan daha önemli?",
        answer:
          "ARR gelirin büyüklüğünü, NRR ise kalitesini ölçer. Yüksek ARR düşük NRR ile birleştiğinde, yeni satışın sürekli bir kaybı kapattığı anlamına gelir; satış yavaşladığı anda büyüme durur. Yatırımcı değerlemesinde çarpanı en çok etkileyen metriklerden biri bu yüzden NRR'dir.",
      },
      {
        question: "NRR ile GRR arasındaki fark nedir?",
        answer:
          "GRR yalnızca daralma ve churn'ü sayar, genişlemeyi içermez ve %100'ü geçemez. NRR genişlemeyi de eklediği için %100'ün üzerine çıkabilir. GRR ürünün yapışkanlığını, NRR ise büyüme potansiyelini ölçer; ikisi birlikte okunmalıdır.",
      },
      {
        question: "NRR nasıl hesaplanır, örnek verir misiniz?",
        answer:
          "400.000 ₺ başlangıç MRR, 60.000 ₺ genişleme, 15.000 ₺ daralma ve 25.000 ₺ churn olan bir ayda NRR = (400.000 + 60.000 − 15.000 − 25.000) / 400.000 × 100 = %105'tir. Kendi rakamlarınızla denemek için ücretsiz NRR Hesaplayıcı'yı kullanabilirsiniz.",
      },
      {
        question: "Negatif churn ne demek?",
        answer:
          "Mevcut müşterilerden gelen genişleme gelirinin, kaybedilen geliri aşması durumudur — yani NRR'nin %100'ün üzerinde olması. Bu profildeki şirketler yeni müşteri kazanmasa bile büyür.",
      },
    ],
    relatedToolKey: "nrr",
    resources: [
      { label: "MRR Nedir, Nasıl Hesaplanır? Aylık Yinelenen Gelir", href: "/blog/mrr-nedir-nasil-hesaplanir/" },
      {
        label: "NRR Hesaplayıcı",
        href: "/ucretsiz-araclar/nrr-hesaplayici",
      },
      {
        label: "SaaS Metrikleri: ARR, CAC ve LTV",
        href: "/blog/saas-metrikleri-arr-cac-ltv",
      },
      {
        label: "Rule of 40 Hesaplayıcı",
        href: "/ucretsiz-araclar/rule-of-40-hesaplayici",
      },
    ],
  },
  {
    slug: "linkedin-soguk-mesaj-yanit-orani",
    seoTitle: "LinkedIn Soğuk Mesaj Yanıt Oranını Artırma (Şablonlar)",
    title: "LinkedIn'de Soğuk Mesajla Yanıt Alma Oranını Artırma: Şablonlar ve Taktikler",
    description:
      "LinkedIn soğuk mesajlarında yanıt oranını yükselten açılış cümleleri, kullanıma hazır şablonlar ve takip mesajı zamanlaması — B2B outbound için pratik rehber.",
    category: "b2b-lead-generation",
    tldr: [
      "Soğuk mesajın işi satış yapmak değil, yanıt almaktır; ilk mesajda satış yapmaya çalışmak yanıt oranını düşürür.",
      "Açılış cümlesi kişiye özel bir gözlemle başlamalı — şirket adını yazmak kişiselleştirme değildir.",
      "Mesaj 400-600 karakteri geçmemeli ve tek bir düşük eşikli soru içermeli.",
      "Takip zinciri 3 mesajı geçmemeli: gün 0, gün 4, gün 11. Her takip yeni bir değer taşımalı.",
    ],
    publishedAt: "2026-08-16",
    readingMinutes: 6,
    tags: ["LinkedIn", "Outbound", "B2B", "Soğuk Mesaj"],
    sections: [
      {
        heading: "Soğuk Mesajların Çoğu Neden Yanıtsız Kalıyor?",
        paragraphs: [
          "Yanıt alamayan mesajların büyük bölümü aynı üç hatayı yapıyor: kendinden başlıyor, çok şey istiyor ve herkese gönderilebilecek kadar genel yazılmış. \"Merhaba, ben X şirketinden Y, size çözümümüzü tanıtmak istiyorum\" cümlesi alıcının zihninde tek bir soru uyandırır: \"beni neden ilgilendirsin?\"",
          "İkinci yaygın hata, ilk mesajda toplantı istemek. Toplantı talebi alıcı için yüksek eşikli bir aksiyondur: takvim açmak, 30 dakika ayırmak, sonrasında satış baskısına maruz kalmak demektir. Henüz size güvenmeyen birinden bu kadar büyük bir taahhüt istemek, yanıt oranını sistematik olarak düşürür.",
          "Üçüncüsü uzunluk. LinkedIn mesajları çoğunlukla mobilde okunuyor; ekranı dolduran bir metin bloğu görüldüğü anda \"sonra bakarım\"a düşüyor ve bir daha açılmıyor. Pratik sınır 400-600 karakter, yani 3-4 kısa paragraf.",
        ],
      },
      {
        heading: "Açılış Cümlesi: İlk 10 Kelime Her Şeyi Belirler",
        paragraphs: [
          "LinkedIn bildiriminde mesajın yalnızca ilk satırı görünür. Yani açılış cümleniz, mesajın tamamının okunup okunmayacağını belirleyen tek değişken. İyi bir açılış üç şeyden birini yapar: kişiye özel bir gözlem paylaşır, ortak bir bağlam kurar veya alıcının gündemindeki somut bir soruna değinir.",
          "Kişiselleştirme derken şirket adını mesaja yerleştirmeyi kastetmiyoruz — bu artık herkesin yaptığı ve otomasyon kokan bir hamle. Gerçek kişiselleştirme, kişinin paylaştığı bir gönderiye, şirketin açtığı bir pozisyona, yeni girdiği bir pazara veya yayınladığı bir vaka çalışmasına dayanır.",
        ],
        bullets: [
          "Zayıf: \"Merhaba Ahmet Bey, X şirketi için harika işler yapıyorsunuz.\"",
          "Güçlü: \"Ahmet Bey, geçen hafta paylaştığınız enterprise onboarding süreci notu ilgimi çekti — özellikle ilk 14 gün vurgusu.\"",
          "Güçlü: \"3 kişilik bir growth ekibi ararken aynı anda 2 yeni pazara açılıyorsunuz; bu ikisini aynı çeyrekte yürütmek nasıl gidiyor?\"",
          "Güçlü: \"Fiyatlandırma sayfanızda kullanım bazlı modele geçmişsiniz — bu geçişte en çok hangi metrik zorladı?\"",
        ],
      },
      {
        heading: "Kullanıma Hazır Şablonlar",
        paragraphs: [
          "Aşağıdaki üç şablon farklı senaryolar için. Hiçbirini olduğu gibi kopyalamayın; köşeli parantezli alanları gerçek araştırmayla doldurun. Şablonun değeri metinde değil, yapısındadır: gözlem → bağlantı → düşük eşikli soru.",
        ],
        bullets: [
          "Şablon 1 — Gözlem odaklı: \"[İsim], [somut gözlem: paylaşım/pozisyon/lansman] dikkatimi çekti. Bizde benzer aşamadaki [segment] ekiplerinde en sık [spesifik sorun] çıkıyor. Sizde de bu bir gündem maddesi mi, yoksa çözülmüş bir konu mu?\"",
          "Şablon 2 — Veri odaklı: \"[İsim], [sektör] tarafında çalıştığımız ekiplerde [metrik] genelde [aralık] bandında seyrediyor. Sizin tarafta bu sayı nerede duruyor — merak ettim, kıyaslama notlarımı paylaşabilirim.\"",
          "Şablon 3 — Referans odaklı: \"[İsim], [ortak bağlantı/etkinlik/topluluk] üzerinden denk geldik. [Şirket] tarafında [spesifik konu] üzerinde çalışıyorsunuz sanırım; benzer bir kurulumu [benzer şirket] için yapmıştık. İki cümlelik özetini göndereyim mi?\"",
          "Ortak nokta: hiçbiri toplantı istemiyor. Hepsi \"evet/hayır\" veya tek cümlelik yanıtla geçilebilecek düşük eşikli bir soruyla bitiyor.",
        ],
      },
      {
        heading: "Takip Mesajı Zamanlaması",
        paragraphs: [
          "Yanıtların önemli bir kısmı ilk mesaja değil, takiplere gelir. Ancak takip, aynı ricayı tekrarlamak değildir; her takip yeni bir değer taşımalıdır. Aksi hâlde \"acaba mesajımı gördünüz mü?\" tarzı mesajlar hem yanıt getirmez hem de marka algısını zedeler.",
          "Önerilen ritim üç temaslıdır ve toplamda iki haftayı geçmez. Bunun ötesine giden zincirlerde yanıt oranı marjinal olarak artarken, engellenme ve olumsuz algı riski belirgin şekilde yükselir.",
        ],
        bullets: [
          "Gün 0 — İlk mesaj: gözlem + düşük eşikli soru.",
          "Gün 4 — İkinci temas: soruyu tekrarlamayın; ilgili bir kaynak paylaşın (vaka çalışması, kısa bir veri, ilgili blog yazısı).",
          "Gün 11 — Üçüncü ve son temas: kapanış mesajı. \"Bu dönem gündeminizde değilse tamamen anlıyorum, konuyu kapatıyorum — ilerde faydalı olursa buradayım.\" Bu mesaj beklenenden yüksek yanıt getirir.",
          "Salı-Perşembe arası, sabah 09:00-11:00 bandı Türkiye'de en yüksek görülme oranını veren pencere; Pazartesi sabahı ve Cuma öğleden sonrası kaçınılması gereken zamanlar.",
        ],
      },
      {
        heading: "Ölçüm: Hangi Metriği Takip Etmeli?",
        paragraphs: [
          "Gönderim sayısı bir metrik değildir. Takip edilmesi gereken üç sayı var: bağlantı kabul oranı, yanıt oranı ve yanıtların kaç tanesinin nitelikli görüşmeye dönüştüğü. Yalnızca yanıt oranını optimize etmek yanıltıcı olabilir — merak uyandıran ama alakasız mesajlar yanıt alır, görüşmeye dönmez.",
          "Şablonları A/B test ederken tek değişken değiştirin: bir hafta yalnızca açılış cümlesini, sonraki hafta yalnızca kapanış sorusunu. Aynı anda her şeyi değiştirmek, hangi unsurun işe yaradığını gizler. 100 gönderimden azına bakarak karar vermeyin; örneklem küçükken sonuçlar rastgeledir.",
        ],
      },
    ],
    howTo: {
      name: "LinkedIn soğuk mesaj dizisi nasıl kurulur?",
      description:
        "Yanıt oranını yükselten üç temaslı LinkedIn outbound dizisinin adım adım kurulumu.",
      steps: [
        {
          name: "ICP ve tetikleyici tanımlayın",
          text: "Kime yazacağınızı unvan yerine iş fonksiyonu, kıdem ve şirket büyüklüğüyle tanımlayın. Ardından bir tetikleyici seçin: yeni işe alım, yeni pazar, ürün lansmanı veya yatırım haberi.",
        },
        {
          name: "Kişiye özel açılış cümlesini yazın",
          text: "Kişinin son paylaşımı, şirketin açtığı pozisyon veya yayınladığı içerikten somut bir gözlem çıkarın. Şirket adını yazmak kişiselleştirme sayılmaz.",
        },
        {
          name: "Mesajı 400-600 karakterde tutun",
          text: "Gözlem, kısa bağlantı cümlesi ve tek bir düşük eşikli soru. İlk mesajda toplantı, demo veya fiyat teklifi istemeyin.",
        },
        {
          name: "Takip ritmini kurun",
          text: "Gün 4'te yeni bir değer taşıyan kaynak paylaşın, gün 11'de nazik bir kapanış mesajı gönderin. Üç temasın ötesine geçmeyin.",
        },
        {
          name: "Ölçün ve tek değişken test edin",
          text: "Bağlantı kabul oranı, yanıt oranı ve nitelikli görüşme sayısını ayrı ayrı takip edin. Haftada yalnızca bir unsuru değiştirerek en az 100 gönderimlik örneklemle karşılaştırın.",
        },
      ],
    },
    faq: [
      {
        question: "LinkedIn soğuk mesajında iyi bir yanıt oranı nedir?",
        answer:
          "İyi hedeflenmiş ve gerçekten kişiselleştirilmiş bir dizide çift haneli yanıt oranları ulaşılabilirdir; jenerik toplu gönderimlerde oran tek haneye, çoğu zaman %2-3 bandına düşer. Asıl kıyas mutlak bir eşik değil, kendi şablonlarınız arasındaki farktır.",
      },
      {
        question: "İlk mesajda toplantı istemek doğru mu?",
        answer:
          "Genellikle hayır. Toplantı yüksek eşikli bir taahhüttür ve henüz güven kurulmamıştır. İlk mesajın hedefi yanıt almaktır; toplantı talebi, karşı taraf konuya ilgi gösterdikten sonra ikinci veya üçüncü temasa bırakılmalıdır.",
      },
      {
        question: "Bağlantı isteğine not eklemeli miyim?",
        answer:
          "Kısa ve bağlam veren bir not kabul oranını artırır; satış içeren bir not ise düşürür. En verimli yaklaşım, notu tek cümlelik bir gözlemle sınırlamak ve satış konusuna bağlantı kabul edildikten sonra girmektir.",
      },
      {
        question: "Kaç takip mesajı göndermeli?",
        answer:
          "Üç temas (gün 0, gün 4, gün 11) çoğu B2B senaryosu için yeterlidir. Daha uzun zincirler yanıt oranını marjinal artırırken engellenme ve olumsuz marka algısı riskini belirgin şekilde yükseltir.",
      },
      {
        question: "Otomasyon araçları kullanmak yanıt oranını düşürür mü?",
        answer:
          "Araç değil, kişiselleştirme eksikliği düşürür. Araştırmayı ve açılış cümlesini otomatikleştirmeye çalışan kurulumlar jenerik metin üretir. Doğru kullanım, sıralama ve hatırlatmayı otomatikleştirip mesaj içeriğini elde tutmaktır.",
      },
    ],
    relatedToolKey: "cac",
    resources: [
      {
        label: "B2B Lead Generation Hunisi Nasıl Tasarlanır?",
        href: "/blog/b2b-lead-generation-huni-tasarimi",
      },
      {
        label: "ICP Nasıl Tanımlanır? Şablon + 3 Örnek",
        href: "/blog/icp-ideal-musteri-profili-sablon",
      },
      {
        label: "Türkiye'de LinkedIn Reklamları Neden Şimdi Ucuz?",
        href: "/blog/linkedin-reklamlari-turkiye-2026-firsat",
      },
    ],
  },
  {
    slug: "icp-ideal-musteri-profili-sablon",
    seoTitle: "ICP (İdeal Müşteri Profili) Nasıl Tanımlanır? + Şablon",
    title: "ICP (Ideal Customer Profile) Nasıl Tanımlanır? Şablon + 3 Örnek",
    description:
      "Doldurulabilir ICP şablonu ve SaaS, e-ticaret, endüstriyel B2B'den üç örnek — hedefleme, mesaj ve lead skorlamayı tek tanımdan besleyin.",
    category: "b2b-lead-generation",
    tldr: [
      "ICP bir persona değildir: persona kişiyi, ICP ise satın alan şirketi tanımlar.",
      "İyi bir ICP firmografik, teknografik, davranışsal ve tetikleyici olmak üzere dört katmandan oluşur.",
      "ICP'yi hayalden değil, en iyi mevcut müşterilerinizin ortak özelliklerinden çıkarın.",
      "Negatif ICP (kime satmayacağınız) en az pozitif tanım kadar değerlidir.",
    ],
    publishedAt: "2026-08-16",
    readingMinutes: 7,
    tags: ["ICP", "B2B", "Lead Generation", "Segmentasyon"],
    sections: [
      {
        heading: "ICP Nedir, Buyer Persona'dan Farkı Ne?",
        paragraphs: [
          "ICP (Ideal Customer Profile), sizin için en yüksek değeri üreten şirket tipini tanımlar: hangi büyüklükte, hangi sektörde, hangi olgunluk seviyesinde ve hangi koşullar altında. Buyer persona ise o şirketin içindeki bireyi tanımlar: rolü, sorumluluğu, KPI'ları ve itirazları.",
          "İkisi karıştırıldığında hedefleme bozulur. \"35-45 yaş arası, teknolojiye meraklı pazarlama müdürü\" bir personadır ve tek başına bir reklam kitlesi kuramaz; \"50-250 çalışanlı, Türkiye'de faaliyet gösteren, HubSpot kullanan B2B SaaS şirketleri\" ise bir ICP'dir ve doğrudan hedeflenebilir.",
          "Doğru sıra şudur: önce ICP ile hangi şirketlere gideceğinizi belirlersiniz, sonra persona ile o şirketlerde kime ve nasıl konuşacağınıza karar verirsiniz.",
        ],
      },
      {
        heading: "ICP'yi Nereden Çıkarırsınız? Veriden, Hayalden Değil",
        paragraphs: [
          "En yaygın hata, ICP'yi bir toplantı odasında tahminlerle yazmaktır. Doğru yöntem mevcut müşteri tabanınıza bakmaktır. Sıralama şöyle: en yüksek LTV üreten, en hızlı kapanan, en az destek maliyeti çıkaran ve en düşük churn'e sahip müşterilerinizi listeleyin.",
          "Bu listedeki 10-20 hesabın ortak özelliklerini çıkarın: kaç çalışanı var, hangi sektörde, hangi araçları kullanıyor, satın alma sürecini kim başlattı, hangi olay bu ihtiyacı tetikledi. Ortaya çıkan kalıp sizin gerçek ICP'nizdir — çoğu zaman şirketin \"hedef kitlemiz\" dediği tanımdan belirgin şekilde farklı çıkar.",
          "Aynı egzersizi tersten de yapın: en hızlı churn eden, en çok destek tüketen ve en çok indirim isteyen müşterilerin ortak özellikleri negatif ICP'nizi verir. Bu liste, satış ekibinin zamanını korumak için pozitif tanım kadar değerlidir.",
        ],
      },
      {
        heading: "Doldurulabilir ICP Şablonu",
        paragraphs: [
          "Aşağıdaki dört katmanı doldurduğunuzda, reklam hedeflemesinden lead skorlamaya kadar her yerde kullanabileceğiniz tek bir kaynak elde edersiniz. Her satırı somut yazın; \"orta ölçekli şirketler\" gibi ifadeler hedeflenebilir değildir.",
        ],
        bullets: [
          "Firmografik: sektör / çalışan sayısı / yıllık ciro / coğrafya / şirket yaşı.",
          "Teknografik: kullandığı CRM, pazarlama otomasyonu, e-ticaret altyapısı veya rakip ürün.",
          "Davranışsal: satın alma sürecini kim başlatır, karar komitesinde kaç kişi var, ortalama karar süresi ne kadar.",
          "Tetikleyici olaylar: yeni yatırım, ilgili pozisyona işe alım, yeni pazara açılma, mevzuat değişikliği, rakip değiştirme sinyali.",
          "Değer eşiği: bu profilde beklenen ortalama sözleşme büyüklüğü ve hedef LTV:CAC oranı.",
          "Negatif ICP: hangi büyüklük, sektör veya kurulum kesinlikle hedeflenmez ve nedeni.",
        ],
      },
      {
        heading: "Örnek 1 — B2B SaaS (Proje Yönetimi Yazılımı)",
        paragraphs: [
          "Firmografik: 50-250 çalışanlı, Türkiye ve Körfez bölgesinde faaliyet gösteren teknoloji ve ajans şirketleri; yıllık cirosu orta segmentte. Teknografik: Jira veya Trello kullanıyor, Slack üzerinden çalışıyor, HubSpot veya Pipedrive CRM'e sahip.",
          "Davranışsal: süreci genellikle bir operasyon veya delivery yöneticisi başlatır, karar komitesinde 3-4 kişi bulunur, ortalama karar süresi 6-10 hafta. Tetikleyici: eş zamanlı proje sayısının artması, yeni bir delivery ekibinin kurulması veya bir kurumsal müşteri sözleşmesinin raporlama şartı getirmesi.",
          "Negatif ICP: 10 kişinin altındaki ekipler (ücretsiz araçlarla yetiniyor, churn yüksek) ve 1.000+ çalışanlı kurumlar (özelleştirme talebi ürün yol haritasını bozuyor).",
        ],
      },
      {
        heading: "Örnek 2 — E-Ticaret Hizmet Sağlayıcı (Performans Ajansı)",
        paragraphs: [
          "Firmografik: aylık cirosu belirli bir eşiğin üzerinde olan, kendi markasını satan (private label) e-ticaret şirketleri; moda, kozmetik ve ev yaşam kategorileri. Teknografik: Shopify veya İkas altyapısı, Meta ve Google Ads hesapları aktif, GA4 kurulu ama dönüşüm ölçümü eksik.",
          "Davranışsal: karar kurucu veya pazarlama direktöründe, süreç 2-4 hafta gibi kısa; en büyük itiraz \"ajans değiştirme maliyeti\". Tetikleyici: ROAS'ın üst üste iki ay düşmesi, mevcut ajans sözleşmesinin bitişi, yeni ürün kategorisine giriş veya yurt dışı pazara açılma kararı.",
          "Negatif ICP: dropshipping modeliyle çalışan, brüt marjı çok düşük mağazalar — reklam bütçesi anlamlı bir kâr üretmiyor ve ilişki birkaç ayda sonlanıyor.",
        ],
      },
      {
        heading: "Örnek 3 — Endüstriyel B2B (Otomasyon Ekipmanı Üreticisi)",
        paragraphs: [
          "Firmografik: 100-1.000 çalışanlı üretim tesisleri; otomotiv yan sanayi, gıda işleme ve ambalaj sektörleri; Marmara ve Ege bölgesinde yoğunlaşmış. Teknografik: ERP olarak SAP veya Logo kullanıyor, üretim hattında kısmi otomasyon mevcut.",
          "Davranışsal: süreci üretim veya bakım müdürü başlatır, teknik değerlendirme mühendislik ekibinde, imza genel müdür veya yönetim kurulunda; karar süresi 4-9 ay ve mutlaka saha ziyareti içerir. Tetikleyici: kapasite artırım yatırımı, hat duruş maliyetlerinin yükselmesi, iş güvenliği denetimi veya ihracat müşterisinin kalite şartı.",
          "Negatif ICP: 50 çalışanın altındaki atölyeler — yatırım bütçesi projenin geri dönüş süresini karşılamıyor ve satış döngüsü maliyeti fırsat büyüklüğünü aşıyor.",
        ],
      },
      {
        heading: "ICP'yi Operasyona Nasıl Bağlarsınız?",
        paragraphs: [
          "Bir ICP dokümanı, kullanılmadığı sürece değersizdir. Tanımı üç yere birden bağlayın: reklam hedeflemesi (LinkedIn firmografik filtreleri, Google'da özel segmentler), lead skorlama (ICP kriterlerine uyan her alan puan getirir) ve satış nitelendirme (SDR'ın ilk görüşmede soracağı sorular doğrudan ICP satırlarından çıkar).",
          "ICP'yi altı ayda bir gözden geçirin. Ürün geliştikçe, fiyat değiştikçe ve pazar olgunlaştıkça ideal müşteri de kayar. En sağlıklı kontrol yöntemi, son iki çeyrekte kapanan anlaşmaların yüzde kaçının mevcut ICP tanımına uyduğuna bakmaktır; oran düşükse tanım eskimiş demektir.",
        ],
      },
    ],
    howTo: {
      name: "ICP (Ideal Customer Profile) nasıl tanımlanır?",
      description:
        "Mevcut müşteri verisinden yola çıkarak operasyona bağlanabilir bir ICP tanımı oluşturmanın adımları.",
      steps: [
        {
          name: "En iyi müşterilerinizi listeleyin",
          text: "LTV'si en yüksek, satış döngüsü en kısa, churn'ü en düşük ve destek maliyeti en az olan 10-20 hesabı çıkarın.",
        },
        {
          name: "Ortak kalıpları çıkarın",
          text: "Bu hesapların çalışan sayısı, sektörü, kullandığı araçlar ve satın almayı tetikleyen olayları arasındaki ortaklıkları not edin.",
        },
        {
          name: "Dört katmanı doldurun",
          text: "Firmografik, teknografik, davranışsal ve tetikleyici katmanlarını somut değerlerle yazın; belirsiz ifadeler yerine sayı ve isim kullanın.",
        },
        {
          name: "Negatif ICP'yi tanımlayın",
          text: "En hızlı churn eden ve en çok kaynak tüketen müşterilerin ortak özelliklerini yazarak kime satmayacağınızı netleştirin.",
        },
        {
          name: "Operasyona bağlayın",
          text: "Tanımı reklam hedeflemesine, lead skorlama kurallarına ve SDR nitelendirme sorularına aktarın; altı ayda bir kapanan anlaşmalarla karşılaştırıp güncelleyin.",
        },
      ],
    },
    faq: [
      {
        question: "ICP ile buyer persona arasındaki fark nedir?",
        answer:
          "ICP satın alan şirketi tanımlar (sektör, büyüklük, coğrafya, teknoloji, tetikleyici olaylar); buyer persona ise o şirketteki bireyi tanımlar (rol, sorumluluk, KPI, itirazlar). Önce ICP ile hangi şirketlere gideceğinizi, sonra persona ile kime nasıl konuşacağınızı belirlersiniz.",
      },
      {
        question: "ICP nasıl tanımlanır?",
        answer:
          "En iyi mevcut müşterilerinizden başlayın: en yüksek LTV, en kısa satış döngüsü ve en düşük churn'e sahip 10-20 hesabın ortak özelliklerini çıkarın. Bu ortaklıkları firmografik, teknografik, davranışsal ve tetikleyici olmak üzere dört katmanda somut değerlerle yazın.",
      },
      {
        question: "Kaç tane ICP tanımlamalıyım?",
        answer:
          "Başlangıçta bir tane. Birden fazla ICP, mesajlaşmayı ve kaynak dağıtımını böler; erken aşamada odak kaybı en pahalı hatadır. İkinci bir ICP, ilki üzerinde tekrarlanabilir satış kurulduktan sonra eklenmelidir.",
      },
      {
        question: "Negatif ICP neden gerekli?",
        answer:
          "Kime satmayacağınızı bilmek, satış ekibinin zamanını ve pazarlama bütçesini korur. Yanlış profildeki müşteriler yalnızca hızlı churn etmez; aynı zamanda destek maliyetini, özelleştirme taleplerini ve ürün yol haritası baskısını da artırır.",
      },
      {
        question: "ICP ne sıklıkla güncellenmeli?",
        answer:
          "Altı ayda bir gözden geçirmek yeterlidir. Kontrol yöntemi basittir: son iki çeyrekte kapanan anlaşmaların yüzde kaçı mevcut ICP tanımına uyuyor? Oran düşükse ürün, fiyat veya pazar değişmiş ve tanım eskimiş demektir.",
      },
    ],
    relatedToolKey: "cac",
    resources: [
      {
        label: "B2B Lead Generation Hunisi Nasıl Tasarlanır?",
        href: "/blog/b2b-lead-generation-huni-tasarimi",
      },
      {
        label: "LinkedIn'de Soğuk Mesajla Yanıt Alma Oranını Artırma",
        href: "/blog/linkedin-soguk-mesaj-yanit-orani",
      },
      {
        label: "B2B Lead Generation Maliyetleri Nasıl Düşürülür?",
        href: "/blog/b2b-lead-generation-maliyetleri-nasil-dusurulur",
      },
    ],
  },
  {
    slug: "freemium-donusum-orani-artirma",
    title: "Freemium'dan Ücretliye Geçiş Oranını Artırmanın 6 Yolu",
    description:
      "Freemium dönüşüm oranı nedir, sağlıklı aralığı nedir ve ücretsiz kullanıcıyı ödeyen müşteriye çeviren 6 uygulanabilir taktik — örnek hesaplamalarla.",
    category: "saas-buyume",
    tldr: [
      "Freemium dönüşüm oranı = Ücretliye geçen kullanıcı / Toplam ücretsiz kullanıcı × 100. Self-servis SaaS'ta tipik aralık %2-5.",
      "Dönüşümü artıran şey daha çok özellik kısıtı değil, doğru 'aktivasyon anı'nı erken yaşatmaktır.",
      "Limitleri özelliğe değil kullanım hacmine (kayıt, koltuk, gönderim) bağlamak dönüşümü genellikle daha çok artırır.",
      "Ücretsiz kullanıcı maliyeti CAC'a dahildir; dönüşüm oranı düşükse geri ödeme süresi uzar.",
    ],
    publishedAt: "2026-08-17",
    readingMinutes: 6,
    tags: ["SaaS", "Freemium", "Dönüşüm Oranı", "Büyüme"],
    sections: [
      {
        heading: "Freemium Dönüşüm Oranı Nedir?",
        paragraphs: [
          "Freemium dönüşüm oranı, ücretsiz planı kullanan kişilerin ne kadarının ücretli plana geçtiğini gösterir. Formül basittir: Freemium Dönüşüm Oranı = Ücretliye Geçen Kullanıcı Sayısı / Toplam Ücretsiz Kullanıcı Sayısı × 100.",
          "Örnek: Ayda 8.000 ücretsiz kayıt alan bir üründe 240 kişi ücretli plana geçiyorsa dönüşüm oranı 240 / 8.000 × 100 = %3'tür. Self-servis SaaS ürünlerinde %2-5 tipik, %6 ve üzeri güçlü kabul edilir; ücretsiz deneme (free trial) modellerinde bu oran doğal olarak çok daha yüksektir (%15-25).",
          "Kritik nokta: oranı tek başına okumak yanıltıcıdır. Ücretsiz kullanıcı başına altyapı ve destek maliyeti, ARPA ile birlikte değerlendirilmelidir. %2 dönüşüm oranı yüksek ARPA ile kârlıyken, %5 dönüşüm düşük ARPA ve ağır altyapı maliyetiyle zarar yazabilir.",
        ],
      },
      {
        heading: "6 Yol: Ücretsiz Kullanıcıyı Ödeyen Müşteriye Çevirmek",
        paragraphs: [
          "Aşağıdaki altı taktik, etkisi en yüksek olandan başlayarak sıralanmıştır. Hepsini aynı anda uygulamak yerine, her birini ayrı bir A/B testi olarak çalıştırıp dönüşüm oranındaki farkı ölçmek daha sağlıklı sonuç verir.",
        ],
        bullets: [
          "1. Aktivasyon anını öne çekin: Kullanıcının ürünün değerini ilk kez hissettiği eylemi (ilk rapor, ilk entegrasyon, ilk davet) tanımlayın ve onboarding'i tek hedefe indirin. Aktivasyona ulaşan kullanıcıların dönüşüm oranı, ulaşamayanların çoğunlukla 5-10 katıdır.",
          "2. Limiti özelliğe değil hacme bağlayın: Ana değeri kapatmak yerine kullanım hacmini (proje sayısı, koltuk, aylık gönderim, saklama) sınırlayın. Kullanıcı ürünü sevdikçe limite doğal olarak çarpar; bu, en yüksek niyetli yükseltme anıdır.",
          "3. Limit uyarılarını zamanında ve bağlamlı gösterin: %80 doluluk uyarısı, limit dolduktan sonra gösterilen bir paywall'dan çok daha iyi çalışır. Uyarı içinde yükseltmenin somut faydasını yazın: 'Bu ay 3 rapor daha üretmek için Pro'ya geçin.'",
          "4. Ücretli özellikleri gizlemeyin, görünür ama kilitli tutun: Kilitli özelliğin ne işe yaradığını gösteren bir önizleme, o özelliğin varlığından habersiz kullanıcıya kıyasla belirgin şekilde daha fazla yükseltme üretir.",
          "5. Zaman sınırlı Pro denemesi verin: Kayıttan sonra 14 gün boyunca tüm ücretli özellikleri açın. Deneme bittiğinde kullanıcı kaybettiği şeyi bilir; kayıptan kaçınma etkisi, hiç denemeyen kullanıcıya göre çok daha güçlü bir yükseltme motivasyonu yaratır.",
          "6. Davranış tetikli e-posta akışları kurun: Kayıt sonrası genel 'hoş geldiniz' serisi yerine, aktivasyona ulaşmayan kullanıcıya farklı, limite yaklaşan kullanıcıya farklı mesaj gönderin. Segment başına ayrı akış, tek tip diziye kıyasla en hızlı kazanımlardan biridir.",
        ],
      },
      {
        heading: "Dönüşüm Oranını Doğru Ölçmek",
        paragraphs: [
          "Ölçümde en sık yapılan hata, aynı ay içinde kayıt olan ve ücretliye geçen kullanıcıları birbirine bölmektir. Freemium'da dönüşüm çoğu zaman haftalar sonra gerçekleşir; bu yüzden kohort bazlı ölçüm şarttır. Ocak ayında kayıt olan kullanıcıların 30, 60 ve 90 gün sonundaki dönüşüm oranını ayrı ayrı takip edin.",
          "İkinci hata, dönüşümü tek bir ortalamayla yönetmektir. Kanala (organik, reklam, referans), şirket büyüklüğüne ve aktivasyon durumuna göre kırılım aldığınızda oranlar arasında sıklıkla 3-5 kat fark çıkar. Bütçeyi bu kırılıma göre yeniden dağıtmak, dönüşüm oranını hiçbir ürün değişikliği yapmadan yükseltebilir.",
          "Üçüncüsü, freemium'un CAC üzerindeki etkisini yok saymaktır. Ücretsiz kullanıcıların altyapı ve destek maliyeti fiilen edinme maliyetinin parçasıdır. Dönüşüm oranı düştüğünde efektif CAC yükselir ve geri ödeme süresi uzar; bu yüzden dönüşüm oranını CAC geri ödeme süresiyle birlikte izleyin.",
        ],
      },
    ],
    faq: [
      {
        question: "İyi bir freemium dönüşüm oranı nedir?",
        answer:
          "Self-servis SaaS ürünlerinde %2-5 tipik, %6 ve üzeri güçlü kabul edilir. Ücretsiz deneme (free trial) modellerinde oran çok daha yüksektir; kredi kartı istemeyen denemelerde %8-15, kredi kartı isteyenlerde %15-25 aralığı yaygındır.",
      },
      {
        question: "Freemium dönüşüm oranı nasıl hesaplanır?",
        answer:
          "Ücretliye geçen kullanıcı sayısını toplam ücretsiz kullanıcı sayısına bölüp 100 ile çarpın. 8.000 ücretsiz kullanıcıdan 240'ı ücretliye geçtiyse oran %3'tür. Doğru sonuç için kohort bazlı, yani aynı dönemde kayıt olan kullanıcıların 30/60/90 günlük dönüşümü olarak ölçün.",
      },
      {
        question: "Freemium mi, ücretsiz deneme mi daha iyi dönüşür?",
        answer:
          "Ücretsiz deneme oransal olarak daha yüksek dönüşür ama huniye giren kullanıcı sayısı düşüktür. Freemium daha düşük oranla çok daha büyük bir tabandan besleneceği için mutlak kullanıcı sayısı sıklıkla daha yüksek çıkar. Ürünün değeri hızlı hissediliyorsa deneme, ağ etkisi veya uzun değerlendirme süresi varsa freemium daha uygundur.",
      },
      {
        question: "Ücretsiz plan hangi noktada sınırlandırılmalı?",
        answer:
          "Ana değeri kapatmayın; kullanım hacmini sınırlayın. Kullanıcı ürünü değerli buldukça limite çarpar ve yükseltme kararı doğal biçimde oluşur. Değeri baştan kapatan bir ücretsiz plan, kullanıcıyı ürünü hiç denemeden kaybettirir.",
      },
      {
        question: "Freemium dönüşüm oranı CAC'ı nasıl etkiler?",
        answer:
          "Ücretsiz kullanıcıların altyapı ve destek maliyeti edinme maliyetinin bir parçasıdır. Dönüşüm oranı düştüğünde ödeyen müşteri başına düşen maliyet artar, efektif CAC yükselir ve CAC geri ödeme süresi uzar.",
      },
    ],
    relatedToolKey: "conversion",
    resources: [
      {
        label: "Dönüşüm Oranı Hesaplayıcı",
        href: "/ucretsiz-araclar/donusum-orani-hesaplayici",
      },
      {
        label: "CAC Geri Ödeme Süresi Hesaplayıcı",
        href: "/ucretsiz-araclar/cac-geri-odeme-suresi-hesaplayici",
      },
      {
        label: "NRR (Net Revenue Retention) Nedir?",
        href: "/blog/nrr-nedir-saas-buyume-metrigi",
      },
    ],
  },
  {
    slug: "roas-nedir-nasil-hesaplanir",
    seoTitle: "ROAS Nedir, Nasıl Hesaplanır? İyi ROAS Kaçtır?",
    title: "ROAS Nedir, Nasıl Hesaplanır? İyi ROAS Kaçtır? (Başabaş Formülüyle)",
    description:
      "ROAS formülü, başabaş ROAS hesaplama, hedef ROAS belirleme ve platform ROAS'ının neden yanıltıcı olabildiği — örnek hesaplamalarla adım adım rehber.",
    category: "performans-pazarlama",
    tldr: [
      "ROAS = Reklamdan gelen gelir / Reklam harcaması. 1.000 TL harcayıp 4.000 TL ciro elde ettiyseniz ROAS 4'tür (veya %400).",
      "'İyi ROAS' diye evrensel bir sayı yoktur; eşik brüt kâr marjınıza bağlıdır: Başabaş ROAS = 1 / Brüt kâr marjı.",
      "%40 marjlı bir işletme için başabaş ROAS 2,5'tir; 3 ROAS kârlı, 2 ROAS ise her satışta zarar demektir.",
      "Kararları reklam paneli ROAS'ına değil, tüm kanalları kapsayan MER (toplam ciro / toplam pazarlama harcaması) ile doğrulayın.",
    ],
    publishedAt: "2026-10-22",
    readingMinutes: 7,
    tags: ["ROAS", "Performans Pazarlama", "Google Ads", "Meta Ads", "E-ticaret"],
    sections: [
      {
        heading: "ROAS Nedir?",
        paragraphs: [
          "ROAS (Return on Ad Spend — reklam harcamasının getirisi), reklama harcadığınız her 1 TL'nin karşılığında ne kadar ciro elde ettiğinizi gösteren metriktir. Performans pazarlamasında kampanya, reklam seti ve kreatif düzeyinde verim karşılaştırmanın en yaygın yoludur.",
          "ROAS bir ciro metriğidir, kârlılık metriği değildir. Bu ayrım, metriği doğru okumanın anahtarıdır: aynı 4 ROAS, %70 marjlı bir dijital üründe çok kârlıyken %20 marjlı bir elektronik mağazasında zarar anlamına gelebilir.",
        ],
      },
      {
        heading: "ROAS Nasıl Hesaplanır?",
        paragraphs: [
          "Formül: ROAS = Reklamdan elde edilen gelir / Reklam harcaması. Sonuç ya oran (4,0) ya da yüzde (%400) olarak ifade edilir; ikisi aynı şeyi söyler.",
          "Örnek: Bir e-ticaret markası Meta Ads'e ayda 50.000 TL harcıyor ve bu reklamlara atfedilen satışlardan 210.000 TL ciro elde ediyor. ROAS = 210.000 / 50.000 = 4,2.",
          "Türkiye'deki işletmeler için kritik bir not: Gelir rakamını KDV hariç ve iadeler düşülmüş olarak kullanın. Reklam panelleri genellikle KDV dahil sepet tutarını ve iade edilen siparişleri de sayar; bu da ROAS'ı olduğundan %20-30 yüksek gösterebilir.",
        ],
      },
      {
        heading: "Başabaş ROAS: 'İyi ROAS Kaçtır?' Sorusunun Gerçek Cevabı",
        paragraphs: [
          "Bir kampanyanın kâr ettirip ettirmediğini anlamak için önce başabaş ROAS'ınızı bilmeniz gerekir. En basit hâliyle: Başabaş ROAS = 1 / Brüt kâr marjı.",
          "Örnek: Ürünlerinizin ortalama brüt kâr marjı %40 ise başabaş ROAS = 1 / 0,40 = 2,5'tir. Bu kampanya 2,5 ROAS'ın altında kalırsa her satış reklam maliyetini karşılamıyor demektir. Marj %25 ise eşik 4'e, %60 ise yaklaşık 1,67'ye çıkar ya da iner.",
          "Daha gerçekçi bir eşik için kargo, ödeme komisyonu ve paketleme gibi sipariş başı değişken maliyetleri de marjdan düşün. Brüt marj %40, değişken maliyetler cironun %10'u ise katkı marjı %30 olur ve başabaş ROAS 1 / 0,30 ≈ 3,33'e yükselir.",
        ],
        bullets: [
          "Brüt marj %60 → başabaş ROAS ≈ 1,67",
          "Brüt marj %40 → başabaş ROAS = 2,5",
          "Brüt marj %30 → başabaş ROAS ≈ 3,33",
          "Brüt marj %20 → başabaş ROAS = 5",
        ],
      },
      {
        heading: "Hedef ROAS Nasıl Belirlenir?",
        paragraphs: [
          "Başabaş noktası, zarar etmemek için gereken minimumdur; hedef ROAS ise istediğiniz kârı da içerir. Formül: Hedef ROAS = 1 / (Katkı marjı − Hedef net kâr oranı).",
          "Örnek: Katkı marjınız %30 ve reklam sonrası cironun %10'unu kâr olarak bırakmak istiyorsanız hedef ROAS = 1 / (0,30 − 0,10) = 5'tir. Google Ads'te Hedef ROAS (tROAS) teklif stratejisine gireceğiniz değer de bu hesaptan gelmelidir; rastgele seçilmiş bir '%400' değil.",
          "Hedefi Google Ads'e nasıl gireceğinizi, iade düzeltmesini, başlangıç değerini ve kârı en yükseğe çıkaran hedefi bulmayı 'Hedef ROAS Nasıl Belirlenir?' rehberinde adım adım anlattık (bağlantı yazının sonundaki kaynaklarda).",
          "Yeni müşteri kazanımına odaklanan büyüme aşamasındaki markalar, ilk siparişte başabaşın altında bir ROAS'ı bilinçli olarak kabul edebilir — yeter ki müşteri yaşam boyu değeri (LTV) bu açığı kapatsın. Bu durumda karar metriği ilk sipariş ROAS'ı değil, LTV / CAC oranıdır.",
        ],
      },
      {
        heading: "Platform ROAS'ı Neden Yanıltıcı Olabilir?",
        paragraphs: [
          "Google Ads ve Meta Ads, kendi atıf modelleriyle raporlar. Aynı satışı iki platform da kendine yazabilir; Meta'nın görüntüleme bazlı atfı, Google'ın marka aramalarından gelen dönüşümler gibi etkiler toplam ROAS'ı şişirir. Panellerdeki ROAS'ları toplayıp gerçek sonuç sanmak, en sık yapılan bütçe hatasıdır.",
          "Bunun panzehiri MER'dir (Marketing Efficiency Ratio): Toplam ciro / Toplam pazarlama harcaması. MER atıf tartışmasını devre dışı bırakır; panel ROAS'ı yükselirken MER düşüyorsa reklamlar yeni talep yaratmıyor, var olan talebi kendine yazıyor olabilir.",
          "Pratik yaklaşım: Kreatif ve kampanya optimizasyonunu panel ROAS'ıyla, bütçe kararlarını MER ve başabaş eşiğiyle yönetin. Marka araması kampanyalarını da genel ROAS ortalamasından ayrı raporlayın; aksi hâlde zaten sizi arayan kullanıcıdan gelen yüksek ROAS, zayıf kampanyaları gizler.",
        ],
      },
      {
        heading: "B2B'de ROAS Kullanılır mı?",
        paragraphs: [
          "Satış döngüsü haftalar ya da aylar süren B2B işlerinde reklam günü ile gelir günü arasında büyük fark olduğundan klasik ROAS çoğu zaman sıfıra yakın görünür. Burada daha anlamlı olan, CRM'deki fırsat değerine göre hesaplanan pipeline ROAS'ı (Oluşan pipeline değeri / Reklam harcaması) ve CAC geri ödeme süresidir.",
          "Kural olarak: Tek seferlik e-ticaret satışlarında ROAS, tekrarlayan gelirli SaaS ve B2B modellerinde CAC, LTV ve geri ödeme süresi ana karar metrikleridir.",
        ],
      },
    ],
    faq: [
      {
        question: "ROAS nedir?",
        answer:
          "ROAS (Return on Ad Spend), reklam harcamasının getirisidir: reklamlardan elde edilen cironun reklam harcamasına oranıdır. 10.000 TL harcamayla 40.000 TL ciro elde edildiyse ROAS 4 (veya %400) olur.",
      },
      {
        question: "İyi bir ROAS kaçtır?",
        answer:
          "Evrensel bir 'iyi ROAS' yoktur; eşik brüt kâr marjınıza bağlıdır. Başabaş ROAS = 1 / Brüt kâr marjı formülüyle hesaplanır. %40 marjda başabaş 2,5'tir, bunun üzeri kârlı sayılır. Düşük marjlı sektörlerde 5 ve üzeri gerekebilirken yüksek marjlı dijital ürünlerde 2 bile kârlı olabilir.",
      },
      {
        question: "ROAS ile ROI arasındaki fark nedir?",
        answer:
          "ROAS ciroyu reklam harcamasına böler ve maliyetleri hesaba katmaz. ROI ise (Kâr − Yatırım) / Yatırım formülüyle net kârlılığı ölçer. Yüksek ROAS her zaman yüksek ROI anlamına gelmez; düşük marjlı bir üründe 4 ROAS zarar ettirebilir.",
      },
      {
        question: "Başabaş ROAS nasıl hesaplanır?",
        answer:
          "Başabaş ROAS = 1 / Brüt kâr marjı. Daha doğru sonuç için kargo, ödeme komisyonu gibi sipariş başı değişken maliyetleri de düşerek katkı marjını kullanın. Örneğin katkı marjı %30 ise başabaş ROAS 1 / 0,30 ≈ 3,33'tür.",
      },
      {
        question: "ROAS hesaplarken KDV dahil edilmeli mi?",
        answer:
          "Hayır. Doğru ROAS için KDV hariç ve iadeler düşülmüş net ciro kullanılmalıdır. Reklam panelleri çoğu zaman KDV dahil sepet tutarını raporladığından panel ROAS'ı gerçek değerden yüksek görünür.",
      },
    ],
    howTo: {
      name: "Başabaş ve hedef ROAS nasıl hesaplanır?",
      description:
        "Brüt kâr marjından yola çıkarak kampanyalarınız için başabaş ve hedef ROAS eşiğini belirleyin.",
      steps: [
        { name: "Brüt kâr marjını bulun", text: "Ortalama sipariş için (Satış fiyatı − Ürün maliyeti) / Satış fiyatı hesabıyla brüt kâr marjını çıkarın." },
        { name: "Değişken maliyetleri düşün", text: "Kargo, ödeme komisyonu ve paketleme gibi sipariş başı maliyetleri cironun yüzdesi olarak marjdan çıkarıp katkı marjını bulun." },
        { name: "Başabaş ROAS'ı hesaplayın", text: "1'i katkı marjına bölün. %30 katkı marjında başabaş ROAS ≈ 3,33'tür." },
        { name: "Hedef kârı ekleyin", text: "Hedef ROAS = 1 / (Katkı marjı − Hedef net kâr oranı) formülüyle teklif stratejinize gireceğiniz hedef değeri belirleyin." },
        { name: "MER ile doğrulayın", text: "Aylık toplam ciroyu toplam pazarlama harcamasına bölün ve panel ROAS'ının gerçek iş sonucuyla uyumlu olup olmadığını kontrol edin." },
      ],
    },
    relatedToolKey: "roas",
    resources: [
      { label: "Kar Marjı Nasıl Hesaplanır? Kar Oranı (Markup) Farkı", href: "/blog/kar-marji-nasil-hesaplanir/" },
      { label: "ROAS Hesaplayıcı", href: "/ucretsiz-araclar/roas-hesaplayici/" },
      { label: "Brüt Kâr Marjı Hesaplayıcı", href: "/ucretsiz-araclar/brut-kar-marji-hesaplayici/" },
      { label: "Hedef ROAS Nasıl Belirlenir? Google Ads tROAS Rehberi", href: "/blog/hedef-roas-nasil-belirlenir/" },
      { label: "Google Ads'te Performansı Katlamanın 7 Data-Driven Yolu", href: "/blog/google-ads-performans-optimizasyonu/" },
      { label: "Meta Ads'te Öğrenme Aşamasından Nasıl Hızlı Çıkılır?", href: "/blog/meta-ads-ogrenme-asamasindan-cikma-taktikleri/" },
      { label: "Google Ads Yardım: Hedef ROAS teklif stratejisi", href: "https://support.google.com/google-ads/answer/6268637", external: true },
    ],
  },
  {
    slug: "reklam-butcesi-nasil-belirlenir",
    seoTitle: "Reklam Bütçesi Nasıl Belirlenir? Hedeften Geriye Hesap",
    title: "Reklam Bütçesi Nasıl Belirlenir? Hedeften Geriye 5 Adımlı Hesap (Kasım Dönemi Notlarıyla)",
    description:
      "Reklam bütçesini cironun yüzdesiyle değil, hedef ciro, katkı marjı ve maks. CPA'dan geriye hesaplayın. Örnek hesap, test bütçesi, B2B modu ve Kasım planı.",
    category: "performans-pazarlama",
    tldr: [
      "Reklam bütçesi hedeften geriye hesaplanır: Bütçe = Hedef ciro / Hedef ROAS ya da Hedef sipariş (veya müşteri) sayısı × Maksimum CPA.",
      "Hedef ROAS ve maks. CPA katkı marjınızdan gelir: %35 katkı marjı ve %10 hedef kârda hedef ROAS 4, 1.200 TL'lik siparişte maks. CPA 300 TL'dir.",
      "Planı uygulamadan önce fizibiliteyi kontrol edin: Gerçek CPA ≈ TBM / Dönüşüm oranı. 6 TL TBM ve %1,5 dönüşümde CPA 400 TL olur ve plan tutmaz.",
      "İndirim dönemlerinde (11.11, Black Friday 27 Kasım 2026) indirim marjı düşürür; %20 indirim başabaş ROAS'ı 2,86'dan yaklaşık 4,7'ye çıkarabilir.",
    ],
    publishedAt: "2026-10-23",
    readingMinutes: 9,
    tags: ["Reklam Bütçesi", "Performans Pazarlama", "ROAS", "CPA", "Google Ads", "Meta Ads", "E-ticaret"],
    sections: [
      {
        heading: "Kısa Cevap: Reklam Bütçesi Hedeften Geriye Hesaplanır",
        paragraphs: [
          "Reklam bütçesini belirlemenin en sağlam yolu, ulaşmak istediğiniz sonuçtan geriye doğru hesap yapmaktır: önce kaç sipariş, ne kadar ciro veya kaç yeni müşteri istediğinizi, sonra bir satış için en fazla ne kadar ödeyebileceğinizi (maksimum CPA) belirlersiniz. Bütçe bu ikisinin çarpımıdır: Bütçe = Hedef sipariş sayısı × Maksimum CPA ya da Bütçe = Hedef ciro / Hedef ROAS.",
          "Bu yaklaşım, bütçeyi 'cironun yüzde kaçı' sorusundan kurtarır ve her lirayı kârlılık eşiğine bağlar. Aşağıdaki adımları kendi rakamlarınızla uygulamak için ücretsiz Reklam Bütçesi Hesaplama aracını kullanabilirsiniz; araç aynı formülleri ve fizibilite kontrolünü otomatik yapar.",
        ],
      },
      {
        heading: "Bütçe Belirlemenin 3 Yöntemi: Hangisi Ne Zaman İşe Yarar?",
        paragraphs: [
          "Türkçe kaynakların çoğu bütçeyi cironun belli bir yüzdesi olarak önerir ve sık geçen aralık %5-15'tir. Bu kural pratik bir başlangıç noktasıdır ama dayanağı yoktur: %60 marjlı bir kozmetik markası ile %15 marjlı bir elektronik satıcısı için aynı yüzde, tamamen farklı sonuçlar doğurur.",
          "İkinci yöntem rakip paritesidir: rakiplerin görünürlüğüne bakarak harcamayı ayarlamak. Pazar payı savaşında bilgi verir ama rakibin marjını, LTV'sini ve zarar etmeye ne kadar dayanabileceğini bilmediğiniz için tek başına karar aracı olamaz.",
          "Üçüncüsü ve en güvenilir olanı hedef-görev (birim ekonomisi) yöntemidir: hedef sonuç × izin verilen birim maliyet. Diğer iki yöntemi yalnızca bu hesabı doğrulamak için kullanın.",
        ],
        bullets: [
          "Ciro yüzdesi → hızlı tahmin; marjı ve hedefi hesaba katmaz.",
          "Rakip paritesi → rekabet sinyali; rakibin ekonomisini bilmezsiniz.",
          "Hedeften geriye (birim ekonomisi) → kârlılığa bağlı, ölçülebilir ve savunulabilir bütçe.",
        ],
      },
      {
        heading: "Adım 1: Katkı Marjını, Başabaş ROAS'ı ve Maksimum CPA'yı Bulun",
        paragraphs: [
          "Önce bir siparişin reklamdan önce size ne bıraktığını bilmeniz gerekir. Katkı marjı = Brüt kâr marjı − sipariş başı değişken maliyetler (kargo, ödeme komisyonu, paketleme, pazaryeri komisyonu) / ciro. Brüt marjı %45, değişken maliyetleri cironun %10'u olan bir mağazanın katkı marjı %35'tir.",
          "Başabaş ROAS = 1 / Katkı marjı = 1 / 0,35 ≈ 2,86. Başabaş CPA = Ortalama sipariş tutarı × Katkı marjı; 1.200 TL'lik ortalama siparişte 420 TL. Bu iki sayı, reklamın zarar ettirmeye başladığı sınırdır. Konunun ayrıntısı için ROAS Nedir, Nasıl Hesaplanır? yazısına bakabilirsiniz.",
          "Kâr da istiyorsanız hedef net kâr oranını marjdan düşün: Hedef ROAS = 1 / (Katkı marjı − Hedef kâr oranı). %10 kâr hedefiyle 1 / 0,25 = 4. Maksimum CPA = 1.200 × 0,25 = 300 TL. Tüm hesaplarda KDV hariç ve iadeler düşülmüş ciro kullanın.",
        ],
      },
      {
        heading: "Adım 2: Hedeften Bütçeye — Uçtan Uca Örnek",
        paragraphs: [
          "Örnek mağaza Kasım ayında reklamdan 600.000 TL net ciro hedefliyor. Ortalama sipariş 1.200 TL olduğuna göre hedef 500 sipariştir. Hedef ROAS 4 olduğundan bütçe = 600.000 / 4 = 150.000 TL; sağlaması: 500 sipariş × 300 TL maks. CPA = 150.000 TL.",
          "Bu planın reklam sonrası katkısı 600.000 × 0,35 − 150.000 = 60.000 TL'dir. Bütçeyi günlük tutara çevirirken Google Ads'in işleyişini hesaba katın: Google, ortalama günlük bütçenin bir günde 2 katına kadar harcanabileceğini, ancak aylık faturanın ortalama günlük bütçenin yaklaşık 30,4 katını geçmeyeceğini belirtir. 150.000 TL'lik aylık plan için ortalama günlük bütçe yaklaşık 4.930 TL'dir.",
        ],
        bullets: [
          "Hedef ciro: 600.000 TL (KDV hariç, iade sonrası)",
          "Ortalama sipariş: 1.200 TL → hedef 500 sipariş",
          "Katkı marjı %35 → başabaş ROAS 2,86 · başabaş CPA 420 TL",
          "Hedef kâr %10 → hedef ROAS 4 · maks. CPA 300 TL",
          "Bütçe: 150.000 TL/ay ≈ 4.930 TL ortalama günlük bütçe",
        ],
      },
      {
        heading: "Adım 3: Fizibilite Kontrolü — Plan Gerçekçi mi?",
        paragraphs: [
          "Kâğıt üzerindeki bütçe, ancak gerçek tıklama maliyeti ve dönüşüm oranınız izin veriyorsa çalışır. Gerçek CPA ≈ TBM (tıklama başı maliyet) / Dönüşüm oranı. Örnek mağazanın geçmiş verisinde TBM 6 TL, dönüşüm oranı %1,5 ise gerçek CPA 6 / 0,015 = 400 TL'dir; hedeflenen 300 TL'nin üzerindedir.",
          "Bu durumda 500 sipariş için 200.000 TL gerekir ve reklam sonrası katkı 600.000 × 0,35 − 200.000 = 10.000 TL'ye düşer. Planı kurtarmanın üç yolu vardır: dönüşüm oranını %2'ye çıkarmak (6 / 0,02 = 300 TL), TBM'yi 4,5 TL'ye indirmek ya da sepet tutarını büyütmek. Hiçbiri mümkün değilse ciro hedefini değil, kâr beklentisini veya ürün karmasını yeniden ele alın.",
          "Fizibilite kontrolü, rakip içeriklerin neredeyse hiç değinmediği ama bütçe kararını asıl belirleyen adımdır: bütçe, hedefin değil, ölçülmüş birim maliyetlerin çarpımıdır.",
        ],
      },
      {
        heading: "Adım 4: Minimum Test Bütçesi ve Öğrenme Aşaması",
        paragraphs: [
          "Algoritmalar öğrenmek için veri ister. Meta reklamlarında sık kullanılan pratik kural, bir reklam setinin öğrenme aşamasından çıkması için haftada yaklaşık 50 optimizasyon olayı gerektiğidir. Haftalık minimum bütçe ≈ 50 × Hedef CPA; 300 TL CPA ile reklam seti başına haftada 15.000 TL, günde yaklaşık 2.150 TL.",
          "Bu tutar bütçenizi aşıyorsa reklam seti sayısını azaltın, kampanya bütçesini tek sette toplayın ya da geçici olarak daha sık gerçekleşen bir olaya (sepete ekleme, ödeme başlatma) optimize edin. Bütçeyi çok sayıda küçük sete bölmek, hiçbirinin öğrenememesine yol açar. Ayrıntılar için Meta Ads öğrenme aşaması yazısına bakın.",
          "Yeni bir kanalı test ederken bütçenin yaklaşık %10'unu deneylere, %20'sini ölçeklenmekte olan kampanyalara, %70'ini kanıtlanmış kampanyalara ayırmak yaygın ve kullanışlı bir başlangıç kuralıdır; oranları kendi sonuçlarınıza göre güncelleyin.",
        ],
      },
      {
        heading: "Adım 5: B2B ve SaaS İçin Huni Üzerinden Bütçe",
        paragraphs: [
          "Satış döngüsü uzun işlerde hedef sipariş değil yeni müşteridir ve hesap huniden geriye yapılır. Örnek: Ayda 6 yeni müşteri hedefi, SQL'den müşteriye %25 dönüşüm → 24 SQL; lead'den SQL'e %30 dönüşüm → 80 lead. Lead başı maliyet (CPL) 750 TL ise aylık reklam bütçesi 80 × 750 = 60.000 TL'dir.",
          "Kontrol metriği CAC'tır: 60.000 / 6 = 10.000 TL reklam CAC'ı. Müşteri başı brüt kâr bazlı LTV 45.000 TL ise LTV:CAC oranı 4,5'tir ve 3'ün üzerinde olduğu için plan sağlıklıdır. Satış ekibi maliyetlerini de eklediğiniz tam CAC ile ayrıca kontrol edin.",
        ],
      },
      {
        heading: "Kasım Dönemi (11.11 ve Black Friday) İçin Bütçe Planı",
        paragraphs: [
          "2026'da Black Friday 27 Kasım'a denk geliyor ve Kasım, Türkiye'de de 11.11 ile başlayan büyük indirim kampanyalarının yoğunlaştığı ay. Bu dönemde en sık yapılan hata, normal ayın hedef ROAS'ını indirimli fiyatlara uygulamaktır. İndirim katkı marjını düşürür: örnek mağazada 1.200 TL'lik ürünü %20 indirimle 960 TL'ye satarsanız ürün maliyeti (660 TL) aynı kalır, değişken maliyet 96 TL olur ve katkı 204 TL'ye, katkı marjı %21,25'e iner. Başabaş ROAS 2,86'dan yaklaşık 4,7'ye çıkar.",
          "Yani kampanya döneminde daha yüksek dönüşüm oranı, daha düşük marjı telafi etmek zorundadır. Bütçeyi bu yeni eşiğe göre hesaplayın ve indirimli ürünlerle tam fiyatlı ürünleri ayrı kampanyalarda raporlayın.",
          "Zamanlama: Kampanyaları yoğun günlerden 1-2 hafta önce başlatıp öğrenme aşamasını kampanya dönemine taşımayın. Google Ads'te akıllı teklif kullanıyorsanız, dönüşüm oranında büyük sıçrama beklediğiniz kısa etkinlikler için dönemlik ayarlamaları (seasonality adjustments) kullanabilirsiniz; Google bunları 1-7 günlük etkinlikler için önerir ve 14 günü aşan dönemlerde iyi çalışmayabileceğini belirtir. Aralık ve Ocak'taki iadeleri hesaba katmak için Kasım ROAS'ını iade süresi dolduktan sonra yeniden hesaplayın.",
        ],
      },
      {
        heading: "Bütçe Ne Zaman Artırılır, Ne Zaman Kısılır?",
        paragraphs: [
          "Bütçe kararını ortalama ROAS'a göre değil marjinal ROAS'a göre verin: son eklenen 10.000 TL'nin getirdiği ek ciro / 10.000. Ortalama ROAS 4 iken son eklenen bütçe 2 ROAS getiriyorsa, %35 katkı marjında bu ek harcama zarar ettiriyordur.",
          "Artırımı kademeli yapın ve her adımdan sonra birkaç gün sonuçları izleyin; büyük ve ani bütçe değişiklikleri algoritmanın yeniden öğrenmesine yol açabilir. Kısma kararında da günlük oynaklığa değil, dönüşüm gecikmesini kapsayan 7-14 günlük pencereye bakın.",
        ],
      },
      {
        heading: "Reklam Bütçesi Belirlerken Yapılan 6 Yaygın Hata",
        paragraphs: [
          "Aşağıdaki hatalar, bütçe ne kadar büyük olursa olsun kârsız büyümeye yol açar:",
        ],
        bullets: [
          "KDV dahil ve iadeler düşülmemiş ciroyla ROAS hesaplamak.",
          "Brüt marj yerine katkı marjını (kargo, komisyon, ödeme maliyetleri dahil) kullanmamak.",
          "Hedefi fizibilite kontrolü yapmadan, yani gerçek TBM ve dönüşüm oranına bakmadan bütçelemek.",
          "Bütçeyi öğrenme için yetersiz kalan çok sayıda küçük reklam setine bölmek.",
          "İndirim dönemlerinde normal ayın hedef ROAS'ını kullanmak.",
          "Platform panellerindeki ROAS'ları toplayıp MER (toplam ciro / toplam pazarlama harcaması) ile doğrulamamak.",
        ],
      },
    ],
    faq: [
      {
        question: "Reklam bütçesi nasıl belirlenir?",
        answer:
          "Hedeften geriye: önce hedef sipariş veya müşteri sayısını, sonra katkı marjınızdan maksimum CPA'yı bulun. Bütçe = Hedef sipariş × Maks. CPA veya Hedef ciro / Hedef ROAS. Ardından gerçek TBM ve dönüşüm oranınızla planın uygulanabilir olup olmadığını kontrol edin.",
      },
      {
        question: "Reklam bütçesi cironun yüzde kaçı olmalı?",
        answer:
          "Sık önerilen %5-15 aralığı yalnızca kaba bir başlangıçtır; marjınızı ve hedefinizi hesaba katmaz. Doğru oran, hedef ROAS'ınızın tersidir: hedef ROAS 4 ise reklamdan gelen cironun %25'ini reklama harcayabilirsiniz.",
      },
      {
        question: "Maksimum CPA nasıl hesaplanır?",
        answer:
          "Maks. CPA = Ortalama sipariş tutarı × (Katkı marjı − Hedef kâr oranı). 1.200 TL sipariş, %35 katkı marjı ve %10 kâr hedefiyle maks. CPA 300 TL'dir. Kâr hedefi olmadan hesaplanan değer (420 TL) başabaş CPA'dır.",
      },
      {
        question: "Yeni başlayan bir işletme için minimum reklam bütçesi ne kadar olmalı?",
        answer:
          "Algoritmanın öğrenebileceği kadar. Meta için yaygın pratik kural, reklam seti başına haftada yaklaşık 50 dönüşümdür; haftalık minimum bütçe ≈ 50 × hedef CPA. Bu tutar yüksekse tek reklam setiyle başlayın veya sepete ekleme gibi daha sık bir olaya optimize edin.",
      },
      {
        question: "Black Friday döneminde reklam bütçesi nasıl planlanır?",
        answer:
          "İndirimli fiyatla katkı marjını yeniden hesaplayın; %20 indirim başabaş ROAS'ı belirgin şekilde yükseltir. Bütçeyi bu yeni eşiğe göre kurun, kampanyaları 1-2 hafta önce başlatın ve Google Ads'te kısa yoğun günler için dönemlik ayarlamaları değerlendirin.",
      },
    ],
    howTo: {
      name: "Reklam bütçesi hedeften geriye nasıl hesaplanır?",
      description:
        "Hedef ciro ve katkı marjından yola çıkarak aylık reklam bütçesini, hedef ROAS'ı ve maksimum CPA'yı belirleyin.",
      steps: [
        { name: "Hedefi belirleyin", text: "Dönem için hedef net ciroyu (KDV hariç, iade sonrası) ve ortalama sipariş tutarına bölerek hedef sipariş sayısını bulun." },
        { name: "Katkı marjını hesaplayın", text: "Brüt kâr marjından kargo, komisyon, ödeme ve paketleme gibi sipariş başı değişken maliyetleri düşün." },
        { name: "Hedef ROAS ve maks. CPA'yı bulun", text: "Hedef ROAS = 1 / (Katkı marjı − Hedef kâr oranı); Maks. CPA = Ortalama sipariş × (Katkı marjı − Hedef kâr oranı)." },
        { name: "Bütçeyi hesaplayın", text: "Bütçe = Hedef ciro / Hedef ROAS = Hedef sipariş × Maks. CPA. Aylık tutarı günlük bütçeye çevirin." },
        { name: "Fizibiliteyi kontrol edin", text: "Gerçek CPA ≈ TBM / Dönüşüm oranı. Gerçek CPA maks. CPA'nın üzerindeyse dönüşüm oranını, TBM'yi veya hedefi yeniden ele alın." },
      ],
    },
    relatedToolKey: "ad-budget",
    resources: [
      { label: "Reklam Bütçesi Hesaplama Aracı", href: "/ucretsiz-araclar/reklam-butcesi-hesaplama/" },
      { label: "ROAS Nedir, Nasıl Hesaplanır?", href: "/blog/roas-nedir-nasil-hesaplanir/" },
      { label: "Meta Ads'te Öğrenme Aşamasından Nasıl Hızlı Çıkılır?", href: "/blog/meta-ads-ogrenme-asamasindan-cikma-taktikleri/" },
      { label: "Trendyol & Hepsiburada Kâr Hesaplama", href: "/ucretsiz-araclar/trendyol-hepsiburada-kar-hesaplama/" },
      { label: "Google Ads Yardım: Bütçelere genel bakış", href: "https://support.google.com/google-ads/answer/10486536", external: true },
      { label: "Google Ads Yardım: Dönemlik ayarlamalar", href: "https://support.google.com/google-ads/answer/10369906", external: true },
    ],
  },
  {
    slug: "ga4-unassigned-trafik-nedir-nasil-duzeltilir",
    seoTitle: "GA4 Unassigned Trafik Nedir, Nasıl Düzeltilir?",
    title: "GA4 Unassigned Trafik Nedir, Nasıl Düzeltilir? (Yanlış ve Doğru UTM Tablosuyla)",
    description:
      "GA4'te Unassigned trafik, kaynak/aracı hiçbir kanal kuralına uymadığında oluşur. 5 dakikalık teşhis, yanlış-doğru UTM tablosu ve kalıcı çözüm adımları.",
    category: "performans-pazarlama",
    tldr: [
      "Unassigned, GA4'ün bir oturumun kaynak/aracı (source/medium) ikilisini varsayılan kanal kurallarının hiçbirine eşleyemediği trafiktir; trafik kaybolmaz, yanlış kutuya düşer.",
      "En sık sebep standart dışı utm_medium değerleridir: story, bio, offline, whatsapp gibi değerler tanınmaz; paid_social, cpc, social, email, referral, affiliate tanınır.",
      "Teşhis: Trafik edinme raporunda birincil boyutu 'Oturum kaynağı/aracı' yapın ve kanal = Unassigned satırlarını inceleyin.",
      "Çözüm: UTM'leri standarda çekin; offline/QR gibi kendi kanallarınız için GA4'te özel kanal grubu tanımlayın; (not set) sorunlarında etiket kurulumunu kontrol edin.",
    ],
    publishedAt: "2026-10-23",
    readingMinutes: 7,
    tags: ["GA4", "Google Analytics", "UTM", "Unassigned", "Ölçümleme", "Performans Pazarlama"],
    sections: [
      {
        heading: "GA4'te Unassigned Trafik Nedir?",
        paragraphs: [
          "Unassigned (atanmamış) trafik, GA4'ün bir oturumun kaynak ve aracı (source/medium) bilgisini varsayılan kanal grubundaki kuralların hiçbirine eşleyemediği oturumlardır. Ziyaret ölçülür ama Paid Social, Email, Organic Search gibi bir kanala yazılamaz; bu yüzden kanal bazlı bütçe kararlarında görünmez olur.",
          "GA4, kanalı belirlerken Google'ın yayımladığı kuralları sırayla dener. Örneğin aracı 'paid' ile başlayan ya da 'cp' içeren bir oturum ücretli kanallara, aracı 'email' olan oturum Email kanalına, aracı 'referral' olan oturum Referral kanalına gider. Hiçbir kurala uymayan kombinasyon Unassigned olur.",
        ],
      },
      {
        heading: "Unassigned, (not set) ve Direct Arasındaki Fark",
        paragraphs: [
          "Üçü sık karıştırılır ama sebepleri farklıdır. Doğru teşhis için önce hangisiyle uğraştığınızı ayırın.",
        ],
        bullets: [
          "Unassigned: Kaynak/aracı bilgisi VAR ama hiçbir kanal kuralına uymuyor. Çoğunlukla UTM isimlendirme sorunudur.",
          "(not set): Kaynak/aracı bilgisi HİÇ YOK. Genellikle etiket kurulumu sorunudur: oturum başlangıcı (session_start) olmadan gelen olaylar, çift gtag kurulumu, Google etiketinden önce tetiklenen olaylar veya yanlış client_id/session_id ile gönderilen Measurement Protocol olayları.",
          "Direct: Kaynak gerçekten '(direct)', aracı '(none)'. Adres çubuğuna yazma, yer imi ya da yönlendiren bilgisinin kaybolduğu geçişler.",
        ],
      },
      {
        heading: "5 Dakikalık Teşhis: Unassigned Trafiğin Kaynağını Bulun",
        paragraphs: [
          "Raporlar › Edinme › Trafik edinme raporunu açın. Tablonun birincil boyutunu 'Oturumla ilişkilendirilen birincil kanal grubu' yerine 'Oturum kaynağı/aracı' yapın ve 'Oturumla ilişkilendirilen birincil kanal grubu = Unassigned' filtresi ekleyin.",
          "Karşınıza çıkan satırlar sorunun kendisidir: 'instagram / story', 'bulten / newsletter', 'qr / offline' gibi ikililer hangi kampanya linklerinin düzeltilmesi gerektiğini doğrudan gösterir. En çok oturum getiren satırdan başlayın; çoğu sitede Unassigned'ın büyük kısmı birkaç kampanya linkinden gelir.",
          "Satırlarda '(not set)' görüyorsanız sorun UTM değil, etiket kurulumudur; bir sonraki bölümdeki (not set) kontrol listesine geçin.",
        ],
      },
      {
        heading: "Yanlış ve Doğru UTM Tablosu",
        paragraphs: [
          "Kural basit: platform adı utm_source'a, kanal türü utm_medium'a yazılır ve aracı olarak GA4'ün tanıdığı değerler kullanılır. Aşağıdaki eşleştirmeler Google'ın varsayılan kanal kurallarına dayanır.",
        ],
        bullets: [
          "Instagram hikâye reklamı: medium=story ✗ → source=instagram, medium=paid_social ✓ (Paid Social)",
          "Instagram profil linki: medium=bio ✗ → source=instagram, medium=social ✓ (Organic Social)",
          "E-posta bülteni: medium=newsletter ✗ → source=newsletter, medium=email ✓ (Email)",
          "WhatsApp paylaşımı: source=kampanya, medium=whatsapp ✗ → source=whatsapp, medium=social ✓ (Organic Social)",
          "SMS kampanyası: medium=mesaj ✗ → source=sms, medium=sms ✓ (SMS)",
          "Influencer: medium=influencer ✗ → source=influencer-adi, medium=affiliate ✓ (Affiliates)",
          "QR kodlu broşür: medium=offline ✗ → source=qr, medium=referral ✓ (Referral) — ya da özel kanal grubu",
          "Banner/display: medium=reklam ✗ → medium=display veya cpm ✓ (Display)",
        ],
      },
      {
        heading: "Unassigned Trafik Kalıcı Olarak Nasıl Düzeltilir?",
        paragraphs: [
          "1) UTM'leri standarda çekin: Ekipte tek bir kaynak/aracı listesi kullanın, tüm değerleri küçük harf ve Türkçe karakter olmadan yazın. Ücretsiz UTM Link Oluşturucu aracımız, linki oluştururken GA4'te hangi kanala düşeceğini gösterir ve Unassigned riskinde uyarır.",
          "2) Kendi kanallarınız için özel kanal grubu tanımlayın: Offline, QR, etkinlik gibi Google'ın varsayılan listesinde olmayan kanallarınız varsa GA4'te Yönetici › Veri görüntüleme › Kanal grupları bölümünden yeni bir kanal grubu oluşturup bu aracı değerlerini kendi kanalınıza eşleyin. Özel kanal grupları geçmiş verilere de uygulanır.",
          "3) Google Ads'te otomatik etiketlemeyi kullanın: Google'a göre gclid ve manuel UTM birlikte bulunduğunda kaynak/aracı için otomatik değerler kullanılır; Google Ads linklerine ayrıca UTM eklemek gereksizdir.",
          "4) Yönlendirmelerin UTM'leri koruduğunu doğrulayın: Link kısaltıcılar ve http→https, www→kök alan adı gibi yönlendirmeler parametreleri düşürmemeli. Linki tarayıcıda açıp son adreste utm_ parametrelerinin durduğunu kontrol edin.",
        ],
      },
      {
        heading: "(not set) Görüyorsanız: Etiket Kurulumu Kontrol Listesi",
        paragraphs: [
          "(not set), kaynak bilgisinin hiç taşınmadığı oturumlardır ve UTM düzeltmesiyle geçmez. En yaygın sebepler:",
        ],
        bullets: [
          "Sayfada iki kez gtag/Google etiketi kurulu (ör. hem doğrudan kod hem Google Tag Manager, ya da eklenti + tema kodu).",
          "Olay etiketleri Google etiketinden önce tetikleniyor; GTM'de Google etiketinin 'Initialization' tetikleyicisinde olduğundan emin olun.",
          "Measurement Protocol ile gönderilen olaylarda (iade, offline satış) orijinal client_id ve session_id kullanılmıyor.",
          "Sunucu taraflı etiketlemeye geçişte olayların bir kısmı sunucudan, bir kısmı doğrudan GA4'e gidiyor.",
          "Rıza (consent) kurulumu hatalı ve reddedilen oturum oranı yüksek.",
        ],
      },
      {
        heading: "Ne Kadar Unassigned Trafik Normaldir?",
        paragraphs: [
          "Sıfıra indirmek her zaman mümkün değildir: reklam engelleyiciler, kısa oturumlar ve uygulama içi tarayıcılar küçük bir pay bırakabilir. Önemli olan payın küçük ve açıklanabilir olmasıdır. Unassigned payı ayda ayda artıyorsa ya da tek bir kaynak/aracı satırı öne çıkıyorsa bu bir isimlendirme hatasıdır ve düzeltilmelidir. Teşhisi aylık rutininize ekleyin; yeni kampanya linklerini yayına almadan önce kanal tahminini kontrol edin.",
        ],
      },
    ],
    faq: [
      {
        question: "GA4'te Unassigned ne demek?",
        answer:
          "Oturumun kaynak/aracı bilgisi var ama GA4'ün varsayılan kanal kurallarının hiçbirine uymuyor demektir. Trafik ölçülür ancak Paid Social, Email gibi bir kanala yazılamadığı için 'Unassigned' satırında toplanır.",
      },
      {
        question: "Unassigned trafik nasıl düzeltilir?",
        answer:
          "Trafik edinme raporunda boyutu 'Oturum kaynağı/aracı' yapıp Unassigned satırlarını bulun; bu linklerde utm_medium'u paid_social, cpc, social, email, referral, affiliate gibi tanınan değerlere çevirin. Kendi offline kanallarınız için özel kanal grubu tanımlayın.",
      },
      {
        question: "Unassigned ile (not set) arasındaki fark nedir?",
        answer:
          "Unassigned'da kaynak/aracı bilgisi vardır ama bir kanala eşlenemez; çoğunlukla UTM sorunudur. (not set)'te kaynak bilgisi hiç yoktur; çift gtag kurulumu, oturum başlangıcı olmadan gelen olaylar veya Measurement Protocol hataları gibi etiket sorunlarından kaynaklanır.",
      },
      {
        question: "WhatsApp ve QR kod trafiği neden Unassigned görünüyor?",
        answer:
          "Genellikle utm_medium'a 'whatsapp' veya 'offline' gibi tanınmayan değerler yazıldığı için. WhatsApp için source=whatsapp, medium=social; QR için source=qr, medium=referral kullanın ya da bu kanallar için GA4'te özel kanal grubu oluşturun.",
      },
      {
        question: "Özel kanal grubu geçmiş verileri de düzeltir mi?",
        answer:
          "Evet. GA4'te oluşturduğunuz özel kanal grupları raporlarda geçmiş verilere de uygulanır. Ancak varsayılan kanal grubu değişmez; raporlarda boyutu özel kanal grubunuzla değiştirmeniz gerekir.",
      },
    ],
    howTo: {
      name: "GA4'te Unassigned trafik nasıl düzeltilir?",
      description: "Unassigned trafiğin kaynağını bulup UTM'leri ve kanal gruplarını düzeltin.",
      steps: [
        { name: "Raporu açın", text: "Raporlar › Edinme › Trafik edinme raporunu açın." },
        { name: "Boyutu değiştirin", text: "Birincil boyutu 'Oturum kaynağı/aracı' yapın ve kanal grubu = Unassigned filtresi ekleyin." },
        { name: "Satırları sınıflandırın", text: "Gerçek kaynak/aracı değerleri varsa UTM sorunudur; (not set) görüyorsanız etiket kurulumunu kontrol edin." },
        { name: "UTM'leri düzeltin", text: "Kampanya linklerinde utm_medium'u GA4'ün tanıdığı değerlere çevirin; yeni linkleri bir UTM aracıyla oluşturun." },
        { name: "Özel kanal grubu ekleyin", text: "Offline/QR gibi kendi kanallarınız için Yönetici › Veri görüntüleme › Kanal grupları'ndan özel grup tanımlayın." },
      ],
    },
    relatedToolKey: "utm",
    resources: [
      { label: "UTM Link Oluşturucu (GA4 kanal tahminli)", href: "/ucretsiz-araclar/utm-link-olusturucu/" },
      { label: "UTM Nedir? UTM Parametreleri Rehberi", href: "/blog/utm-nedir-utm-parametreleri/" },
      { label: "Reklam Bütçesi Nasıl Belirlenir?", href: "/blog/reklam-butcesi-nasil-belirlenir/" },
      { label: "ROAS Nedir, Nasıl Hesaplanır?", href: "/blog/roas-nedir-nasil-hesaplanir/" },
      { label: "Google Analytics Yardım: Varsayılan kanal grubu kuralları", href: "https://support.google.com/analytics/answer/9756891", external: true },
      { label: "Google Analytics Yardım: Google Ads otomatik etiketleme", href: "https://support.google.com/analytics/answer/10723328", external: true },
    ],
  },
  {
    slug: "black-friday-2026-reklam-plani",
    seoTitle: "Black Friday 2026 Reklam Planı: Takvim, Bütçe ve Marj",
    title: "Black Friday 2026 Reklam Planı: 5 Haftalık Takvim, İndirim Marjı Hesabı ve Bütçe",
    description:
      "Black Friday 27 Kasım 2026'da. Hafta hafta reklam takvimi, indirimin başabaş ROAS'a etkisi, bütçe hesabı ve 30 gün en düşük fiyat kuralı tek rehberde.",
    category: "performans-pazarlama",
    tldr: [
      "Black Friday 2026, 27 Kasım Cuma; Cyber Monday 30 Kasım. Reklam hazırlığına en geç 5 hafta önce, Ekim sonunda başlayın.",
      "İndirim marjı eritir: %35 katkı marjlı bir üründe %20 indirim başabaş ROAS'ı 2,86'dan 4,71'e, %30 indirim 8,75'e çıkarır; %40 indirimde reklamsız bile zarar edilir.",
      "Bütçeyi indirimli fiyattaki katkı marjından hesaplayın ve kampanyaları yoğun günlerden 1-2 hafta önce açıp öğrenme aşamasını erken bitirin.",
      "Türkiye'de indirim reklamlarında 'indirimden önceki fiyat' olarak son 30 gündeki en düşük fiyat gösterilmelidir.",
    ],
    publishedAt: "2026-10-24",
    readingMinutes: 9,
    tags: ["Black Friday", "Kasım İndirimleri", "Reklam Bütçesi", "ROAS", "E-ticaret", "Google Ads", "Meta Ads"],
    sections: [
      {
        heading: "Black Friday 2026 Ne Zaman, Hazırlığa Ne Zaman Başlanmalı?",
        paragraphs: [
          "Black Friday 2026, 27 Kasım Cuma gününe denk geliyor; Cyber Monday ise 30 Kasım Pazartesi. Türkiye'de Kasım boyunca 11.11 ile başlayan uzun bir indirim dönemi yaşandığı için reklam hazırlığına en geç Ekim sonunda, yani yoğun günlerden yaklaşık 5 hafta önce başlamak gerekir.",
          "Erken başlamanın üç sebebi var: indirimli fiyatla kârlılığı önceden hesaplamak, reklam algoritmalarının öğrenme aşamasını kampanya günlerinden önce bitirmek ve yeniden pazarlama için yeterli kitleyi toplamak. Aşağıdaki takvim bu üçünü hafta hafta sıraya koyar.",
        ],
      },
      {
        heading: "Hafta Hafta Black Friday Reklam Takvimi",
        paragraphs: [
          "Takvim, 27 Kasım'dan geriye sayılarak hazırlandı. Her haftanın tek bir ana işi var; bir hafta gecikirse bir sonraki haftanın işi sıkışır.",
        ],
        bullets: [
          "26 Ekim – 1 Kasım: Hedef ve marj. Kampanyaya girecek ürünleri seçin, indirimli fiyatla katkı marjını ve başabaş ROAS'ı hesaplayın, stokları kontrol edin, kampanya linkleri için UTM standardını belirleyin.",
          "2 – 8 Kasım: Kitle ve kreatif. E-posta/SMS izinli listeye 'erken haber al' kaydı açın, kreatifleri (video, statik, ürün kataloğu) ve kampanya sayfasını hazırlayın.",
          "9 – 15 Kasım: Test ve öğrenme. Black Friday kampanyalarını düşük bütçeyle açın; 11.11'i küçük ölçekli bir test olarak kullanın. Amaç, algoritmanın öğrenme aşamasını yoğun günlerden önce bitirmek.",
          "16 – 22 Kasım: Ön lansman. Kayıtlı listeye erken erişim verin, site ziyaretçilerinden ve sepeti terk edenlerden yeniden pazarlama kitleleri oluşturun.",
          "23 – 26 Kasım: Kademeli artış. Bütçeyi birkaç adımda yükseltin; Google Ads akıllı teklifte kısa yoğun günler için dönemlik ayarlamaları değerlendirin.",
          "27 – 30 Kasım: Black Friday ve Cyber Monday. Saatlik değil günlük karar verin; marjinal ROAS, stok ve iade riskini birlikte izleyin.",
          "1 – 14 Aralık: Gerçek sonuç. İade süresi dolunca kampanya ROAS'ını yeniden hesaplayın ve yeni müşterileri tekrar satın almaya yönlendirin.",
        ],
      },
      {
        heading: "İndirim Marjınızı Ne Kadar Eritir? (Başabaş ROAS Tablosu)",
        paragraphs: [
          "Black Friday'deki en pahalı hata, normal ayın hedef ROAS'ını indirimli fiyatlara uygulamaktır. İndirim satış fiyatını düşürür ama ürün maliyeti aynı kalır; bu yüzden katkı marjı indirim oranından çok daha hızlı erir.",
          "Örnek: 1.200 TL'ye satılan, maliyeti 660 TL olan ve sipariş başı değişken maliyetleri (kargo, ödeme, paketleme) satış fiyatının %10'u olan bir ürün düşünün. Normal fiyatta katkı marjı %35, başabaş ROAS 2,86'dır.",
        ],
        bullets: [
          "İndirim yok — 1.200 TL: katkı 420 TL (%35) → başabaş ROAS 2,86",
          "%20 indirim — 960 TL: katkı 204 TL (%21,25) → başabaş ROAS 4,71",
          "%30 indirim — 840 TL: katkı 96 TL (%11,43) → başabaş ROAS 8,75",
          "%40 indirim — 720 TL: katkı −12 TL → reklam olmadan bile her satış zarar",
        ],
      },
      {
        heading: "Black Friday Reklam Bütçesi Nasıl Hesaplanır?",
        paragraphs: [
          "Bütçeyi indirimli fiyattaki katkı marjından geriye hesaplayın: Maksimum CPA = İndirimli fiyat × (Katkı marjı − Hedef kâr oranı). Örnekteki %20 indirimli üründe kâr hedefi olmadan maksimum CPA 204 TL'dir; normal dönemde bu sınır 420 TL'ydi.",
          "Ardından planın gerçekçi olup olmadığına bakın: Gerekli dönüşüm oranı = Tıklama başı maliyet / Maksimum CPA. Tıklama başı maliyet 6 TL ise normal dönemde %1,43 dönüşüm oranı yeterken, %20 indirimde en az %2,94 gerekir. Kampanya döneminde dönüşüm oranınız bu kadar artmıyorsa indirimi küçültün, sepet tutarını büyütün (paket, ücretsiz kargo eşiği) ya da bütçeyi yüksek marjlı ürünlere kaydırın.",
          "Hedeften geriye bütçe hesabının tamamı ve fizibilite kontrolü için Reklam Bütçesi Nasıl Belirlenir? yazısına ve Reklam Bütçesi Hesaplama aracına bakabilirsiniz.",
        ],
      },
      {
        heading: "İndirim Reklamlarında 30 Gün Kuralı",
        paragraphs: [
          "Türkiye'de Ticari Reklam ve Haksız Ticari Uygulamalar Yönetmeliği'nde 2022'de yapılan değişiklikle, indirim duyurularında 'indirimden önceki fiyat' olarak indirimin uygulandığı tarihten önceki 30 gün içindeki en düşük fiyatın esas alınması gerekiyor. Meyve-sebze gibi çabuk bozulan ürünler için farklı bir hesaplama öngörülüyor.",
          "Pratikte bu, Kasım başında fiyatı yükseltip Black Friday'de 'büyük indirim' göstermenin işe yaramayacağı ve yaptırım riski taşıdığı anlamına gelir. Reklam kreatiflerindeki indirim oranlarını ve üstü çizili fiyatları bu kurala göre hesaplayın; emin olmadığınız durumlarda hukuk danışmanınıza başvurun.",
        ],
      },
      {
        heading: "Kampanya Ölçümünü Black Friday'den Önce Kurun",
        paragraphs: [
          "Yoğun dönemde hangi kanalın gerçekten kâr getirdiğini görmek için ölçüm kampanyadan önce hazır olmalı. Tüm e-posta, SMS, influencer ve sosyal medya linklerini standart UTM'lerle oluşturun; aksi hâlde trafiğin önemli bir kısmı GA4'te 'Unassigned' olarak görünür.",
          "Black Friday kampanyalarını normal kampanyalardan ayrı adlandırın (ör. utm_campaign=black-friday-2026) ve indirimli ürünlerle tam fiyatlı ürünleri ayrı raporlayın. Kampanya bitiminde panel ROAS'ının yanında toplam ciro / toplam pazarlama harcaması (MER) oranına da bakın.",
        ],
      },
      {
        heading: "En Sık Yapılan 5 Black Friday Reklam Hatası",
        paragraphs: ["Bu hatalar kampanyanın ciro getirip kâr getirmemesinin en yaygın sebepleridir:"],
        bullets: [
          "Normal ayın hedef ROAS'ını indirimli fiyatlara uygulamak.",
          "Kampanyaları Black Friday sabahı açıp öğrenme aşamasını en pahalı günlere denk getirmek.",
          "Tüm ürünlerde aynı indirim oranını uygulamak; düşük marjlı ürünlerde zarar etmek.",
          "Son 30 gündeki en düşük fiyatı hesaba katmadan indirim oranı göstermek.",
          "Kampanya ROAS'ını iade süresi dolmadan nihai sonuç saymak.",
        ],
      },
    ],
    faq: [
      { question: "Black Friday 2026 hangi gün?", answer: "Black Friday 2026, 27 Kasım Cuma gününe denk geliyor. Cyber Monday ise 30 Kasım Pazartesi. Türkiye'de birçok marka indirimleri Kasım boyunca ve 11.11 ile başlatıyor." },
      { question: "Black Friday reklamlarına ne zaman başlamalı?", answer: "Hazırlığa en geç 5 hafta önce başlayın; kampanyaları yoğun günlerden 1-2 hafta önce düşük bütçeyle açarak algoritmanın öğrenme aşamasını erken tamamlayın, bütçeyi son haftada kademeli artırın." },
      { question: "Black Friday'de indirim oranı nasıl belirlenir?", answer: "İndirimli fiyattaki katkı marjını hesaplayın. %35 katkı marjlı bir üründe %20 indirim başabaş ROAS'ı 4,71'e çıkarır, %40 indirim ise reklamsız bile zarar ettirir. Düşük marjlı ürünlerde indirimi küçük tutun ya da paket ve kargo eşiğiyle sepeti büyütün." },
      { question: "İndirimden önceki fiyat nasıl gösterilmeli?", answer: "Türkiye'deki düzenlemeye göre indirim duyurularında indirimden önceki son 30 gün içindeki en düşük fiyat referans alınmalıdır. Kasım başında fiyat artırıp indirim göstermek bu kurala aykırıdır." },
      { question: "Black Friday bütçesi ne kadar olmalı?", answer: "Bütçeyi hedeften geriye hesaplayın: hedef sipariş sayısı × indirimli fiyattaki maksimum CPA. Ardından tıklama maliyeti ve beklenen dönüşüm oranıyla gerçek CPA'nın bu sınırın altında kalıp kalmadığını kontrol edin." },
    ],
    howTo: {
      name: "Black Friday reklam planı nasıl hazırlanır?",
      description: "5 haftalık takvimle Black Friday reklamlarını kârlı şekilde planlayın.",
      steps: [
        { name: "Marjı hesaplayın", text: "Kampanyaya girecek ürünlerde indirimli fiyatla katkı marjını ve başabaş ROAS'ı hesaplayın." },
        { name: "Bütçeyi belirleyin", text: "Hedef sipariş × indirimli maksimum CPA formülüyle bütçeyi bulun; gerekli dönüşüm oranını kontrol edin." },
        { name: "Ölçümü kurun", text: "Tüm kampanya linklerini standart UTM'lerle oluşturun ve Black Friday kampanyalarını ayrı adlandırın." },
        { name: "Erken açın", text: "Kampanyaları yoğun günlerden 1-2 hafta önce düşük bütçeyle açıp öğrenme aşamasını tamamlayın." },
        { name: "Kademeli ölçekleyin", text: "Son haftada bütçeyi adım adım artırın, kampanya günlerinde marjinal ROAS ve stoku günlük izleyin." },
        { name: "İade sonrası değerlendirin", text: "İade süresi dolunca gerçek ROAS ve MER'i hesaplayın, yeni müşterileri tekrar satın almaya yönlendirin." },
      ],
    },
    relatedToolKey: "ad-budget",
    resources: [
      { label: "Reklam Bütçesi Hesaplama Aracı", href: "/ucretsiz-araclar/reklam-butcesi-hesaplama/" },
      { label: "Reklam Bütçesi Nasıl Belirlenir?", href: "/blog/reklam-butcesi-nasil-belirlenir/" },
      { label: "ROAS Nedir, Nasıl Hesaplanır?", href: "/blog/roas-nedir-nasil-hesaplanir/" },
      { label: "GA4 Unassigned Trafik Nedir, Nasıl Düzeltilir?", href: "/blog/ga4-unassigned-trafik-nedir-nasil-duzeltilir/" },
      { label: "UTM Link Oluşturucu", href: "/ucretsiz-araclar/utm-link-olusturucu/" },
      { label: "Ekonomist: İndirimli satışlarda 30 gün şartı", href: "https://www.ekonomist.com.tr/haberler/indirimli-satislarda-yeni-donem-30-gun-sarti-getirildi-28813", external: true },
      { label: "Google Ads Yardım: Dönemlik ayarlamalar", href: "https://support.google.com/google-ads/answer/10369906", external: true },
    ],
  },
  {
    slug: "hedef-roas-nasil-belirlenir",
    seoTitle: "Hedef ROAS Nasıl Belirlenir? Google Ads tROAS Rehberi",
    title: "Hedef ROAS Nasıl Belirlenir? Google Ads'te tROAS'ı Marjdan Hesaplama Rehberi",
    description:
      "Google Ads hedef ROAS değerini marjınızdan hesaplayın: formül, iade düzeltmesi, başlangıç değeri, kademeli değişiklik ve kârı en yüksek hedefi bulma örnekleri.",
    category: "performans-pazarlama",
    tldr: [
      "Hedef ROAS (%) = 100 / (Katkı marjı − Hedef kâr oranı). %35 katkı marjı ve %10 kâr hedefiyle Google Ads'e girilecek değer %400'dür.",
      "Panel değeri iadeleri de saydığı için hedefi (1 − iade oranı) ile bölün: %15 iadede %400 → yaklaşık %470.",
      "Başlangıçta geçmiş ROAS'ınızın (son 4 hafta veya 3 dönüşüm döngüsü) yakınından başlayın, hedefi kademeli değiştirin ve her adımdan sonra 1-2 dönüşüm döngüsü bekleyin.",
      "En yüksek ROAS en çok kâr demek değildir: hedefi yükseltmek harcamayı ve satışı da düşürür. Doğru hedef, son eklenen harcamanın başabaşın üzerinde kaldığı noktadır.",
    ],
    publishedAt: "2026-10-25",
    readingMinutes: 9,
    tags: ["Hedef ROAS", "tROAS", "Google Ads", "Akıllı Teklif", "ROAS", "E-ticaret"],
    sections: [
      {
        heading: "Hedef ROAS nasıl belirlenir? (Kısa cevap)",
        paragraphs: [
          "Hedef ROAS'ı reklam panelindeki ortalamadan ya da 'sektörde %400 iyidir' gibi genel bir sayıdan değil, kendi katkı marjınızdan hesaplayın. Formül: Hedef ROAS (%) = 100 / (Katkı marjı − Hedef kâr oranı).",
          "Örnek: Siparişlerinizde ürün maliyeti, kargo, ödeme komisyonu ve paketleme düşüldükten sonra cironun %35'i kalıyor (katkı marjı) ve reklamdan sonra cironun %10'unu kâr olarak bırakmak istiyorsunuz. Hedef ROAS = 100 / (0,35 − 0,10) = %400. Google Ads'te hedef ROAS alanına 400 yazarsınız; bu, reklama harcanan her 1 TL için ortalama 4 TL dönüşüm değeri hedeflendiği anlamına gelir.",
          "Ardından bu sayıyı üç düzeltmeden geçirin: iade oranı, geçmiş ROAS'ınızla arasındaki fark (başlangıç değeri) ve kârı en yükseğe çıkaran hedef. Aşağıdaki bölümler bu üç adımı örneklerle anlatıyor.",
        ],
      },
      {
        heading: "Hedef ROAS (tROAS) teklif stratejisi nedir, nasıl çalışır?",
        paragraphs: [
          "Hedef ROAS, Google Ads'in değer odaklı akıllı teklif stratejisidir. Her açık artırmada olası dönüşümün değerini tahmin eder ve ortalama dönüşüm değeri / maliyet oranını sizin belirlediğiniz hedefe yakın tutarken toplam dönüşüm değerini artıracak şekilde teklif verir. Cihaz, konum, günün saati ve yeniden pazarlama listeleri gibi sinyalleri kullanır; değerli görünen aramalarda daha yüksek, düşük değerlilerde daha düşük teklif verir.",
          "İki noktayı bilmek önemli. Birincisi, hedef bir ortalamadır: tek tek günlerde ya da kampanyalarda gerçekleşen ROAS hedefin üstünde veya altında kalabilir. İkincisi, Google Haziran 2026'da strateji adlarını sadeleştirdi: 'Hedef ROAS ile dönüşüm değerini en üst düzeye çıkarma' artık doğrudan 'Hedef ROAS' olarak görünüyor; Google'a göre teklif davranışı değişmedi.",
          "Strateji yalnızca dönüşüm değeri gönderen hesaplarda anlamlıdır. Değeri 0 olan dönüşümler hesaba katılmaz; bu yüzden önce satın alma etiketinin sipariş tutarını doğru gönderdiğinden emin olun.",
        ],
      },
      {
        heading: "Hedef ROAS kullanmak için kaç dönüşüm gerekir?",
        paragraphs: [
          "Google Ads Yardım'daki güncel eşikler kampanya türüne göre değişir. Bu eşiklerin altında strateji açılabilir ama algoritmanın öğreneceği veri azdır ve sonuçlar dalgalı olur.",
        ],
        bullets: [
          "Arama ve Alışveriş: son 30 günde en az 15 dönüşüm (dönüşüm izleme düzeyinde)",
          "Görüntülü Reklam Ağı: kampanyalar genelinde son 30 günde değer içeren en az 15 dönüşüm",
          "Demand Gen: son 35 günde 50 dönüşüm (10'u son 7 günde) veya hesaptaki tüm Demand Gen kampanyalarında 100",
          "Video işlem kampanyaları: son 30 günde en az 30 dönüşüm",
          "Hedef belirlemeden önce: en az 4 hafta veya 3 dönüşüm döngüsü (hangisi uzunsa) boyunca değer raporlanmış olmalı",
        ],
      },
      {
        heading: "Adım 1: Katkı marjından hedef ROAS'ı hesaplayın",
        paragraphs: [
          "Katkı marjı = (Satış fiyatı − Ürün maliyeti − Sipariş başı değişken maliyetler) / Satış fiyatı. Değişken maliyetlere kargo, ödeme komisyonu, paketleme ve varsa pazaryeri komisyonu girer. Brüt marjı kullanırsanız hedefi olması gerekenden düşük koyar, kâr ettiğinizi sanırken zarar edebilirsiniz.",
          "Başabaş ROAS (%) = 100 / Katkı marjı. %35 katkı marjında başabaş %286'dır; hedefiniz bunun altına inerse reklam her satışta para kaybettirir.",
          "Hedef ROAS (%) = 100 / (Katkı marjı − Hedef kâr oranı). Hedef kâr oranı, reklam maliyeti düşüldükten sonra cironun ne kadarını kâr olarak bırakmak istediğinizdir. Sabit giderleri (kira, maaş, yazılım) bu orana dahil etmek isteyip istemediğinize işletme olarak siz karar verirsiniz.",
        ],
        bullets: [
          "Katkı marjı %50, kâr hedefi %10 → hedef ROAS %250",
          "Katkı marjı %35, kâr hedefi %10 → hedef ROAS %400",
          "Katkı marjı %30, kâr hedefi %10 → hedef ROAS %500",
          "Katkı marjı %25, kâr hedefi %5 → hedef ROAS %500",
          "Katkı marjı %20, kâr hedefi %5 → hedef ROAS ≈ %667",
        ],
      },
      {
        heading: "Adım 2: İade oranına göre hedefi düzeltin",
        paragraphs: [
          "Google Ads'teki dönüşüm değeri sipariş anında gönderilir; sonradan iade edilen siparişler panelde değer olarak kalır. İade oranı yüksek kategorilerde (giyim, ayakkabı gibi) panel ROAS'ı gerçek ROAS'tan belirgin şekilde yüksek görünür.",
          "Yaklaşık düzeltme: Panelde kullanılacak hedef ROAS = Hesapladığınız hedef ROAS / (1 − İade oranı). %15 iade oranında %400 / 0,85 ≈ %470; %30 iade oranında %400 / 0,70 ≈ %571. Daha temiz bir yol, iadeleri çevrimdışı dönüşüm düzeltmeleriyle Google Ads'e geri bildirmek ya da kategori bazında farklı değer göndermektir; o durumda bu düzeltmeye gerek kalmaz.",
        ],
      },
      {
        heading: "Adım 3: Başlangıç değerini geçmiş ROAS'ınıza göre seçin",
        paragraphs: [
          "Hesapladığınız hedef doğru olsa bile kampanyanın bugün ürettiği ROAS'tan çok uzaksa doğrudan girmeyin. Google'ın önerisi, hedefi iş hedeflerinize ve geçmiş performansa göre belirlemek; gerçekçi olmayan bir başlangıç hedefi düşük performansa ya da ölçeğin sınırlanmasına yol açabilir.",
          "Geçmiş ROAS'ı bulmak için Google Ads'te Dönüşümler altındaki 'Dönş. değeri/maliyet' sütununu ekleyin ve 100 ile çarpın. Son birkaç günü (dönüşüm gecikmesi süresini) analize katmayın; o günlerin dönüşümleri henüz tamamlanmamıştır.",
          "Kural olarak hedefi kademeli değiştirin ve her değişiklikten sonra 1-2 dönüşüm döngüsü bekleyin (dönüşüm döngüsü: tıklamadan satın almaya kadar geçen tipik süre). Google belirli bir yüzde vermiyor; biz pratikte her adımda %10-15'lik değişiklikle çalışıyoruz.",
        ],
        bullets: [
          "Geçmiş ROAS %380, hedef %470 → %380 → %420 → %470 (her adım 1-2 döngü sonra). Hedefi bir anda %470'e çekmek harcamayı sert düşürebilir.",
          "Geçmiş ROAS %560, hedef %470 → %520 → %470. Hedefi düşürmek daha fazla açık artırmaya girmeyi ve hacmi artırır; ROAS'ın hedefin altına sarkıp sarkmadığını izleyin.",
          "Yeni kampanya, geçmiş yok → önce dönüşüm değerini en üst düzeye çıkarma (hedefsiz) ya da hedef EBM ile 2-4 hafta veri toplayın, sonra hedef ROAS'a geçin.",
        ],
      },
      {
        heading: "En yüksek ROAS neden en çok kârı getirmez?",
        paragraphs: [
          "Hedef ROAS'ı yükselttikçe Google yalnızca en değerli açık artırmalara girer: ROAS artar ama harcama ve satış düşer. Bir noktadan sonra kaybedilen satışların katkısı, tasarruf edilen reklam harcamasından büyük olur. Aşağıdaki tablo %35 katkı marjlı bir mağaza için varsayımsal bir örnektir (rakamlar örnek tutarlardır, gerçek hesap verisi değildir).",
          "Kâr = Ciro × Katkı marjı − Reklam harcaması formülüyle hesaplanmıştır (reklam sonrası katkı kârı, sabit giderler hariç).",
        ],
        bullets: [
          "Hedef %300 → harcama 100.000 TL, ciro 300.000 TL, kâr 5.000 TL",
          "Hedef %400 → harcama 60.000 TL, ciro 240.000 TL, kâr 24.000 TL",
          "Hedef %500 → harcama 35.000 TL, ciro 175.000 TL, kâr 26.250 TL",
          "Hedef %600 → harcama 20.000 TL, ciro 120.000 TL, kâr 22.000 TL",
        ],
      },
      {
        heading: "Marjinal ROAS ile doğru hedefi nasıl bulursunuz?",
        paragraphs: [
          "Karar için ortalama ROAS'a değil, iki hedef arasında eklenen ya da çıkarılan harcamanın getirisine (marjinal ROAS) bakın. Marjinal ROAS = Ciro farkı / Harcama farkı. Bu değer başabaş ROAS'ın (örnekte 100 / 35 ≈ 2,86) üzerindeyse eklenen harcama kâr ettirir.",
          "Örnekte %400'den %300'e inmek 40.000 TL ek harcamayla 60.000 TL ek ciro getiriyor: marjinal ROAS 1,5, başabaşın çok altında → zarar. %500'den %400'e inmek 25.000 TL'ye 65.000 TL getiriyor: 2,6, başabaşın hemen altında → kârı bir miktar düşürüyor. %600'den %500'e inmek 15.000 TL'ye 55.000 TL getiriyor: yaklaşık 3,67 → kârlı. Bu örnekte kârı en yükseğe çıkaran hedef %500'dür.",
          "Formülün verdiği %400, '%10 kârla mümkün olduğunca büyü' kararıdır; %500 ise 'bugünkü kârı en yükseğe çıkar' kararıdır. Yeni müşteri kazanımı ve tekrar satın alma (LTV) sizin için önemliyse daha düşük hedef bilinçli bir tercih olabilir. Önemli olan, bu farkı bilerek seçmektir.",
        ],
      },
      {
        heading: "Dönüşüm değeri olarak ciro mu, kâr mı göndermeli?",
        paragraphs: [
          "Varsayılan kurulum sipariş tutarını (ciro) gönderir. Bu durumda ürünler arasındaki marj farkı algoritmaya görünmez: %60 marjlı bir ürünle %15 marjlı bir ürünün 1.000 TL'lik satışı aynı değerdedir.",
          "Alternatif, dönüşüm değeri olarak sipariş başına katkı kârını göndermektir (POAS — reklam harcamasının kâr getirisi yaklaşımı). Bu kurulumda başabaş hedef %100 olur: %130 hedef, her 1 TL reklamda ortalama 0,30 TL katkı kârı demektir. Kurulum için ürün maliyetinin sunucu tarafında ya da veri katmanında hesaplanması gerekir; ürün maliyetlerinin tarayıcıda görünür olmaması için sunucu tarafı etiketleme tercih edilir.",
          "Tam kurulum yapamıyorsanız ara çözüm: düşük marjlı kategorileri ayrı kampanyalara ayırıp her birine kendi hedefini verin ya da Google Ads dönüşüm değeri kurallarıyla belirli konum, cihaz veya kitle segmentlerinin değerini çarpanla ayarlayın.",
        ],
      },
      {
        heading: "Hedef ROAS'ta sık sorunlar ve çözümleri",
        paragraphs: [
          "Sorunların çoğu hedefin gerçekçi olmamasından, yetersiz veriden ya da değişikliğin ardından yeterince beklenmemesinden kaynaklanır.",
        ],
        bullets: [
          "Harcama birden düştü → hedef geçmiş ROAS'ın çok üzerinde. Hedefi %10-15 düşürün, 1-2 döngü bekleyin.",
          "ROAS hedefin altında kalıyor → önce dönüşüm gecikmesini kontrol edin (son günler eksik görünür). Sorun sürerse veri azdır ya da hedef düşüktür; ürün grubu veya kampanyaları birleştirip veriyi artırın.",
          "Kampanya 'bütçe ile sınırlı' ve ROAS hedefin üzerinde → kârlı açık artırmalar kaçıyor. Bütçeyi artırın; artıramıyorsanız hedefi düşürmeyin, çünkü düşük hedef aynı bütçeyi daha düşük getirili tıklamalara harcatır.",
          "Her gün hedef değiştiriliyor → algoritma her değişiklikte yeniden uyum sağlar. Haftada bir değerlendirin.",
          "Reklam grubu düzeyinde ayrı hedefler → Google bunu önermiyor; akıllı teklifin esnekliğini kısıtlar. Hedefi kampanya ya da portföy düzeyinde verin.",
          "Kısa kampanya dönemi (Black Friday gibi) → dönüşüm oranında beklenen sıçrama için 1-7 günlük dönemlik ayarlama kullanın; 14 günü aşan dönemler için önerilmez.",
        ],
      },
      {
        heading: "Performance Max ve Alışveriş kampanyalarında hedef ROAS",
        paragraphs: [
          "Performance Max ve Alışveriş kampanyalarında aynı formül geçerlidir; fark, marjı farklı ürünlerin tek kampanyada toplanmasıdır. Ortalama marjla tek bir hedef vermek düşük marjlı ürünleri sübvanse eder. Ürünleri marj aralığına göre özel etiketle (custom label) gruplayıp her gruba ayrı kampanya ve hedef vermek, marj verisini algoritmaya taşımanın en basit yoludur.",
          "Google'ın 17 Ağustos 2026'da devreye aldığı teklif sistemi güncellemesi, özellikle bütçesi sınırlı hedef EBM ve hedef ROAS kampanyalarında geçici dalgalanmalara yol açabilir. Bu dönemde gördüğünüz kısa süreli sapmalara hemen hedef değişikliğiyle tepki vermeyin.",
        ],
      },
    ],
    faq: [
      {
        question: "Hedef ROAS ne olmalı?",
        answer:
          "Herkes için doğru bir sayı yoktur. Hedef ROAS (%) = 100 / (Katkı marjı − Hedef kâr oranı) formülüyle kendi marjınızdan hesaplayın. %35 katkı marjı ve %10 kâr hedefinde %400, %25 marj ve %5 kâr hedefinde %500 çıkar. Tekrar satın almaya (LTV) dayalı bilinçli bir büyüme kararı yoksa hedef, başabaş ROAS'ın (100 / katkı marjı) altına inmemelidir.",
      },
      {
        question: "Hedef ROAS %400 ne demek?",
        answer:
          "Reklama harcanan her 1 TL için ortalama 4 TL dönüşüm değeri hedeflendiği anlamına gelir. Google Ads hedefi yüzde olarak ister: 4 kat getiri = %400. Bu bir ortalamadır; günlük ve kampanya bazında gerçekleşen ROAS hedefin üstünde ya da altında olabilir.",
      },
      {
        question: "Hedef ROAS'ı ne sıklıkla değiştirmeliyim?",
        answer:
          "Değişikliklerin arasında en az 1-2 dönüşüm döngüsü bekleyin; Google da hedefe ulaşmak için bu süreyi öneriyor. Pratikte haftada bir değerlendirip %10-15'lik adımlarla değiştirmek, hem öğrenmeyi bozmamak hem de sonucu okuyabilmek için yeterlidir.",
      },
      {
        question: "Hedef ROAS'ı yükseltince neden satışlar düşüyor?",
        answer:
          "Yüksek hedef, Google'ın yalnızca en değerli görünen açık artırmalara girmesine yol açar; daha az trafik ve daha az dönüşüm gelir. ROAS yükselir ama toplam ciro ve çoğu zaman toplam kâr düşer. Hacim istiyorsanız hedefi kademeli olarak düşürün.",
      },
      {
        question: "Hedef ROAS için kaç dönüşüm gerekir?",
        answer:
          "Google Ads Yardım'a göre Arama ve Alışveriş kampanyalarında son 30 günde en az 15 dönüşüm, Demand Gen'de son 35 günde 50 dönüşüm, video işlem kampanyalarında son 30 günde 30 dönüşüm gerekir. Hedef belirlemeden önce en az 4 hafta veya 3 dönüşüm döngüsü boyunca değer raporlanmış olmalıdır.",
      },
    ],
    howTo: {
      name: "Google Ads'te hedef ROAS nasıl belirlenir?",
      description: "Katkı marjından Google Ads'e girilecek hedef ROAS değerini hesaplayın ve kampanyaya kademeli uygulayın.",
      steps: [
        { name: "Katkı marjını hesaplayın", text: "Satış fiyatından ürün maliyeti, kargo, ödeme komisyonu ve paketlemeyi düşüp satış fiyatına bölün." },
        { name: "Hedef ROAS'ı bulun", text: "Hedef ROAS (%) = 100 / (Katkı marjı − Hedef kâr oranı). %35 marj ve %10 kâr hedefinde %400." },
        { name: "İade düzeltmesi yapın", text: "Hedefi (1 − iade oranı) ile bölün. %15 iadede %400 yaklaşık %470 olur." },
        { name: "Geçmiş ROAS'ı kontrol edin", text: "Dönş. değeri/maliyet sütununu 100 ile çarpın; son günlerin dönüşüm gecikmesini analizden çıkarın." },
        { name: "Kademeli uygulayın", text: "Geçmiş ROAS'tan hedefe %10-15'lik adımlarla gidin ve her adımdan sonra 1-2 dönüşüm döngüsü bekleyin." },
        { name: "Marjinal ROAS ile ince ayar yapın", text: "Hedef değişikliklerinin ciro farkını harcama farkına bölün; sonuç başabaş ROAS'ın altındaysa hedefi geri alın." },
      ],
    },
    relatedToolKey: "roas",
    resources: [
      { label: "Kar Marjı Nasıl Hesaplanır? Kar Oranı (Markup) Farkı", href: "/blog/kar-marji-nasil-hesaplanir/" },
      { label: "ROAS Hesaplayıcı", href: "/ucretsiz-araclar/roas-hesaplayici/" },
      { label: "Brüt Kâr Marjı Hesaplayıcı", href: "/ucretsiz-araclar/brut-kar-marji-hesaplayici/" },
      { label: "Reklam Bütçesi Hesaplama Aracı", href: "/ucretsiz-araclar/reklam-butcesi-hesaplama/" },
      { label: "ROAS Nedir, Nasıl Hesaplanır?", href: "/blog/roas-nedir-nasil-hesaplanir/" },
      { label: "Black Friday 2026 Reklam Planı", href: "/blog/black-friday-2026-reklam-plani/" },
      { label: "Google Ads'te Performansı Katlamanın 7 Data-Driven Yolu", href: "/blog/google-ads-performans-optimizasyonu/" },
      { label: "Google Ads Yardım: Hedef ROAS teklifi hakkında", href: "https://support.google.com/google-ads/answer/6268637?hl=tr", external: true },
      { label: "Google Ads Yardım: Dönemlik ayarlamalar", href: "https://support.google.com/google-ads/answer/10369906?hl=tr", external: true },
    ],
  },
  {
    slug: "ltv-nedir-ltv-cac-orani",
    seoTitle: "LTV Nedir? LTV:CAC Oranı Kaç Olmalı? Örnekli Rehber",
    title: "LTV Nedir, Nasıl Hesaplanır? LTV:CAC Oranı Kaç Olmalı? (Kohort ve Reklam Örnekleriyle)",
    description:
      "LTV (müşteri yaşam boyu değeri) nedir, marjla nasıl hesaplanır? Kohort LTV örneği, LTV:CAC oranı yorumu, geri ödeme süresi ve LTV'den reklam CPA hedefi.",
    category: "saas-buyume",
    tldr: [
      "LTV (müşteri yaşam boyu değeri), bir müşterinin sizinle kaldığı süre boyunca bıraktığı toplam kârdır. Ciroyla değil marjla hesaplanır: ortalama sepeti 600 TL, katkı marjı %35 olan ve 24 ayda ortalama 2,3 sipariş veren müşterinin LTV'si 483 TL'dir (ciro LTV'si 1.380 TL).",
      "En güvenilir yöntem kohort LTV'sidir: aynı ay kazanılan müşterilerin birikimli siparişlerini izleyip katkı marjıyla çarparsınız; formüldeki 'müşteri ömrü' varsayımına gerek kalmaz.",
      "LTV:CAC oranı için yaygın başparmak kuralı en az 3'tür; ama oranı mutlaka CAC geri ödeme süresiyle birlikte okuyun. Aynı 483 TL LTV, 160 TL CAC ile ilk siparişte, 300 TL CAC ile yaklaşık 7. ayda geri döner.",
      "LTV'yi reklam hedefine çevirin: Maks. CAC = LTV / Hedef oran. Örnekte 3:1 hedefi 161 TL CAC ve ilk siparişte yaklaşık 3,73 ROAS demektir; tekrar satın alma düşükse 3:1 kuralı ilk siparişte kâr etmeyi gerektirir.",
    ],
    publishedAt: "2026-10-26",
    readingMinutes: 9,
    tags: ["LTV", "LTV:CAC", "Müşteri Yaşam Boyu Değeri", "Kohort Analizi", "CAC", "Birim Ekonomisi"],
    sections: [
      {
        heading: "LTV nedir? (Kısa cevap)",
        paragraphs: [
          "LTV (Lifetime Value, müşteri yaşam boyu değeri; CLV ya da CLTV olarak da geçer), bir müşterinin işletmenizle ilişkisi boyunca bıraktığı toplam kârdır. Bir müşteriyi kazanmak için en fazla ne kadar harcayabileceğinizi belirlediği için CAC (müşteri edinme maliyeti) ile birlikte kullanılır.",
          "En basit e-ticaret formülü: LTV = Ortalama sipariş tutarı × Müşteri başı sipariş sayısı × Katkı marjı. Örnek: ortalama sepeti 600 TL olan bir mağazada müşteri 24 ayda ortalama 2,3 sipariş veriyor ve her siparişte ürün, kargo, ödeme komisyonu ve iade düşüldükten sonra cironun %35'i kalıyor. LTV = 600 × 2,3 × 0,35 = 483 TL.",
          "Aynı müşterinin ciro LTV'si 600 × 2,3 = 1.380 TL'dir. Rakip rehberlerin çoğu bu ciro rakamını kullanır; oysa reklam bütçesini 1.380 TL'ye göre planlamak, müşteri başına kazanabileceğinizin neredeyse üç katını harcamaya izin vermek demektir. (Yazıdaki tüm tutarlar örnek tutarlardır.)",
        ],
      },
      {
        heading: "LTV nasıl hesaplanır? Üç formül",
        paragraphs: [
          "Hangi formülü kullanacağınız iş modelinize ve ne kadar veriniz olduğuna bağlıdır. Üçünde de son çarpan marjdır; e-ticarette katkı marjı (ürün maliyeti + kargo + komisyon + iade düşülmüş), SaaS'ta brüt marj yaygın kullanılır.",
        ],
        bullets: [
          "E-ticaret (tekrar satın alma): LTV = Ortalama sipariş tutarı × Yıllık sipariş sayısı × Aktif kalma süresi (yıl) × Katkı marjı",
          "Abonelik / SaaS: LTV = Aylık müşteri başı gelir (ARPA) × Brüt marj / Aylık churn oranı (1 / churn = ortalama müşteri ömrü, ay)",
          "Kohort (gerçekleşen) LTV: LTV(n. ay) = Kohortun n. aya kadar birikimli geliri / Kohorttaki müşteri sayısı × Marj",
          "LTV:CAC oranı = LTV / CAC; CAC geri ödeme süresi (ay) = CAC / Aylık müşteri başı marj katkısı",
        ],
      },
      {
        heading: "LTV neden ciroyla değil marjla hesaplanır?",
        paragraphs: [
          "LTV'nin işi 'bu müşteri için ne kadar harcayabilirim?' sorusunu cevaplamaktır. Müşterinin ödediği tutarın ürün maliyeti, kargo ve komisyon kısmı zaten size ait değildir; reklama ayrılabilecek para yalnızca geriye kalan katkıdır.",
          "Örnekteki mağaza ciro LTV'siyle (1.380 TL) LTV:CAC = 3 hedeflerse CAC'ı 460 TL'ye kadar çıkarabileceğini düşünür. Marjlı LTV 483 TL olduğu için bu, her yeni müşteriyle 24 ay sonunda bile yaklaşık başabaşta kalmak demektir. Marjlı hesapta aynı hedef 161 TL'lik CAC'a izin verir.",
          "E-ticarette brüt marj yerine katkı marjı kullanmak bir adım daha iyidir: iade oranı yüksek kategorilerde (giyim, ayakkabı) brüt marjla hesaplanan LTV gerçekte olduğundan belirgin biçimde yüksek çıkar.",
        ],
      },
      {
        heading: "Kohort LTV nasıl hesaplanır? Adım adım örnek",
        paragraphs: [
          "Formüldeki 'müşteri ömrü' ve 'yıllık sipariş sayısı' çoğu zaman tahmindir. Kohort yöntemi tahmini gerçekleşen veriyle değiştirir: aynı ay ilk siparişini veren müşterileri bir grup (kohort) olarak alır, sonraki aylarda verdikleri tüm siparişleri birikimli olarak toplarsınız.",
          "Örnek: Ocak'ta ilk siparişini veren 1.000 müşterinin sonraki siparişleri izleniyor. Müşteri başı birikimli sipariş sayısı aşağıdaki gibi; her sipariş 600 TL ve %35 katkı marjıyla 210 TL katkı bırakıyor.",
          "Eğrinin yavaşladığı yer (örnekte 12. aydan sonra) LTV için makul zaman ufkunu gösterir. Birkaç kohortu (farklı aylar, farklı kanallar) yan yana koyduğunuzda hangi kanalın daha sadık müşteri getirdiğini de görürsünüz; bir kanalın CAC'ı yüksek ama kohort eğrisi dik olabilir.",
        ],
        bullets: [
          "İlk sipariş (0. ay): 1,00 sipariş → 600 TL ciro → 210 TL katkı",
          "3. ay: 1,15 sipariş → 690 TL ciro → 241,5 TL katkı",
          "6. ay: 1,35 sipariş → 810 TL ciro → 283,5 TL katkı",
          "12. ay: 1,80 sipariş → 1.080 TL ciro → 378 TL katkı",
          "24. ay: 2,30 sipariş → 1.380 TL ciro → 483 TL katkı (24 aylık LTV)",
        ],
      },
      {
        heading: "LTV:CAC oranı nedir, kaç olmalı?",
        paragraphs: [
          "LTV:CAC oranı, bir müşteriden beklenen marj katkısının onu kazanma maliyetine oranıdır. SaaS ve girişim dünyasında yaygın kullanılan başparmak kuralı oranın en az 3 olmasıdır. Bu bilimsel bir eşik değil, CAC'ın ötesindeki genel giderleri ve tahmin hatasını karşılayacak bir güvenlik payıdır.",
          "Oranı yorumlarken LTV'nin nasıl hesaplandığını mutlaka kontrol edin: ciro LTV'siyle bulunan 3:1, marjlı hesapta 1:1'e kadar inebilir.",
        ],
        bullets: [
          "1'in altı: her yeni müşteri, hesaplanan süre sonunda bile zarar ettiriyor. Edinmeyi büyütmeden önce fiyat, marj ya da tutundurma düzeltilmeli",
          "1–3 arası: edinme maliyetini geri kazanıyorsunuz ama sabit giderlere ve büyümeye az pay kalıyor; geri ödeme süresi kısa ise kabul edilebilir",
          "3–5 arası: çoğu iş için sağlıklı bölge",
          "5'in çok üzeri: edinmeye yeterince yatırım yapmıyor olabilirsiniz; daha pahalı kanallarda ölçek denenebilir",
        ],
      },
      {
        heading: "LTV:CAC neden tek başına yetmez? Geri ödeme süresi",
        paragraphs: [
          "LTV:CAC paranın ne kadar döndüğünü söyler, ne zaman döndüğünü söylemez. Nakit akışı için asıl soru, CAC'ın kaçıncı ayda geri kazanıldığıdır. Kohort tablosuyla bu doğrudan okunur: birikimli katkının CAC'ı geçtiği ay geri ödeme ayıdır.",
          "Aynı kohortta iki senaryo: CAC 160 TL ise ilk sipariş katkısı (210 TL) CAC'ı hemen karşılar ve 24 aylık LTV:CAC yaklaşık 3,0 olur. CAC 300 TL ise 6. ayda birikimli katkı 283,5 TL ile hâlâ CAC'ın altındadır, CAC yaklaşık 7. ayda geri döner ve oran 1,61'e düşer. İkinci senaryoda büyüdükçe kasada daha uzun süre nakit bağlanır.",
          "Pratik bir çerçeve: e-ticarette CAC'ın ilk siparişte ya da birkaç ay içinde geri dönmesi, B2B SaaS'ta 12 ayın altında kalması hedeflenir. Geri ödeme süresini aylık müşteri başı katkıyla hesaplamak için CAC Geri Ödeme Süresi aracını kullanabilirsiniz.",
        ],
      },
      {
        heading: "LTV'ye göre reklamda ne kadar harcanabilir?",
        paragraphs: [
          "LTV'den reklam hedefine iki adımda gidilir. Önce politika seçin: Maks. CAC = LTV / Hedef LTV:CAC oranı ya da 'CAC'ı X ay içinde geri kazan' kuralı. Sonra bunu kampanyanın ilk sipariş metriğine çevirin: İlk sipariş ROAS hedefi = Ortalama sipariş tutarı / Maks. CAC.",
          "Örnek kohortta (600 TL sepet, 210 TL ilk sipariş katkısı, 24 aylık LTV 483 TL) farklı politikalar şu sınırları verir:",
          "Dikkat: CAC yalnızca reklam harcaması değildir; ajans, ekip ve araç maliyetlerini de içerir. Reklam paneline girdiğiniz CPA sınırı bu yüzden maks. CAC'ın biraz altında olmalıdır. Ayrıca bu örnekte tekrar satın alma düşük olduğu için (24 ayda 2,3 sipariş) 3:1 hedefi, ilk siparişte başabaştan bile sıkı bir ROAS istiyor; sık tekrar alınan ürünlerde (kozmetik, takviye, pet mama) tablo tersine döner ve LTV ilk siparişte zarar etmeyi haklı kılabilir.",
        ],
        bullets: [
          "İlk siparişte başabaş: maks. CAC 210 TL → ilk sipariş ROAS hedefi ≈ 2,86",
          "12 ayda geri ödeme: maks. CAC 378 TL → ROAS ≈ 1,59",
          "24 aylık LTV:CAC = 3: maks. CAC 161 TL → ROAS ≈ 3,73",
          "24 aylık LTV'nin tamamı (başabaş, önerilmez): maks. CAC 483 TL → ROAS ≈ 1,24",
        ],
      },
      {
        heading: "SaaS'ta LTV: formül LTV'si ve zaman sınırı",
        paragraphs: [
          "Abonelik formülü LTV = ARPA × Brüt marj / Aylık churn, churn sabit kaldığında müşterinin sonsuza kadar kalabileceğini varsayar. Düşük churn'de bu, LTV'yi çok uzun ve belirsiz bir geleceğe dayandırır. Bu yüzden birçok ekip LTV'yi 24–36 ayla sınırlar.",
          "Örnek: ARPA aylık 1.500 TL, brüt marj %80, aylık churn %3. Aylık müşteri başı brüt kâr 1.200 TL; formül LTV'si 1.200 / 0,03 = 40.000 TL. 36 ayla sınırlandığında: 1.200 × (1 − 0,97^36) / 0,03 ≈ 26.640 TL. 12.000 TL CAC ile oran formülde 3,33, sınırlı hesapta yaklaşık 2,22 çıkar; geri ödeme süresi 12.000 / 1.200 = 10 aydır.",
          "Fark büyükse kararınızı sınırlı LTV'ye ve geri ödeme süresine göre verin. Yüksek enflasyon döneminde bugün harcanan CAC'ın gelecekte parça parça dönen kârdan daha değerli olduğunu da hesaba katın; uzun ufuklu LTV'yi reel (enflasyondan arındırılmış) değerlerle düşünmek daha güvenlidir.",
        ],
      },
      {
        heading: "LTV hesaplamada sık yapılan hatalar",
        paragraphs: [
          "LTV hataları genellikle tek yöne gider: LTV'yi olduğundan yüksek gösterir ve edinme harcamasını şişirir.",
        ],
        bullets: [
          "Ciro LTV'siyle LTV:CAC hesaplamak → oran olduğundan 2-3 kat iyi görünür",
          "Tüm müşterilerin ortalamasını almak → kanal ve kohort bazında hesaplayın; indirim kampanyasıyla gelen müşteriler genellikle daha az tekrar alır",
          "Müşteri ömrünü varsaymak → kohort verisiyle kontrol edin; formüldeki 1 / churn, ilk aylardaki yüksek kaybı gizleyebilir",
          "İade, indirim ve ücretsiz kargoyu düşmemek → LTV'yi katkı marjıyla hesaplayın",
          "Sınırsız zaman ufku → 24–36 ay ile sınırlayın ve geri ödeme süresine de bakın",
          "Organik tekrar siparişleri reklama yazmak → LTV:CAC'ı kanal bazında hesaplarken o kanalın CAC'ını ve o kanaldan gelen kohortu eşleştirin",
        ],
      },
      {
        heading: "LTV nasıl artırılır?",
        paragraphs: [
          "LTV'nin üç kaldıracı vardır: sipariş başı katkı, sipariş sıklığı ve aktif kalma süresi. Kohort eğrisi hangisinde zayıf olduğunuzu gösterir: 3. ayda eğri düzleşiyorsa ikinci siparişi tetikleyen akışlar (e-posta, yeniden pazarlama, abonelik seçeneği), sepet küçükse paket ve çapraz satış, marj düşükse fiyat ve kargo politikası öncelikli iştir.",
          "SaaS'ta en büyük etki churn'den gelir; churn formülün paydasında olduğu için aylık churn'ü %3'ten %2,5'e indirmek, diğer her şey sabitken formül LTV'sini %20 artırır. Genişleme gelirini (üst paket, koltuk artışı) izlemek için NRR'a da bakın.",
        ],
      },
    ],
    faq: [
      {
        question: "LTV ile CLV aynı şey mi?",
        answer:
          "Evet. LTV (Lifetime Value), CLV ve CLTV (Customer Lifetime Value) aynı metriği anlatır: bir müşterinin ilişki boyunca bıraktığı toplam değer. Türkçede 'müşteri yaşam boyu değeri' ya da 'müşteri ömür boyu değeri' denir. Finans dilindeki LTV (loan-to-value, kredi/teminat oranı) ise farklı bir kavramdır.",
      },
      {
        question: "LTV:CAC oranı 3 ne demek?",
        answer:
          "Bir müşteriden beklenen marj katkısının, onu kazanma maliyetinin 3 katı olduğu anlamına gelir. Örneğin 483 TL marjlı LTV'ye karşılık 161 TL CAC. Yaygın bir başparmak kuralıdır; oranın marjla hesaplandığından emin olun ve CAC geri ödeme süresiyle birlikte değerlendirin.",
      },
      {
        question: "İyi bir LTV kaç olmalı?",
        answer:
          "LTV'nin tek başına iyi ya da kötü bir değeri yoktur; 500 TL LTV, 100 TL CAC'la çok iyi, 400 TL CAC'la zayıftır. LTV'yi her zaman CAC'a (LTV:CAC) ve geri ödeme süresine göre değerlendirin.",
      },
      {
        question: "LTV kaç aylık hesaplanmalı?",
        answer:
          "E-ticarette 12 ve 24 aylık LTV'yi birlikte izlemek pratiktir; kohort eğrisinin düzleştiği nokta makul ufku gösterir. SaaS'ta formül LTV'si yerine 24–36 ayla sınırlanmış LTV daha temkinli bir karar verir.",
      },
      {
        question: "Yeni bir işletmede veri yoksa LTV nasıl tahmin edilir?",
        answer:
          "İlk siparişin katkısıyla başlayın ve reklamı ilk siparişte başabaşa göre yönetin. 3–6 ay sonra ilk kohortların tekrar sipariş oranıyla LTV'yi güncelleyin. Rakip ya da sektör ortalamalarını LTV yerine koymayın; marj ve müşteri davranışı işten işe çok farklıdır.",
      },
    ],
    howTo: {
      name: "Kohort LTV ve LTV:CAC nasıl hesaplanır?",
      description: "Aynı ay kazanılan müşterilerin verisiyle marjlı LTV'yi, LTV:CAC oranını ve geri ödeme ayını bulun.",
      steps: [
        { name: "Kohortu seçin", text: "Belirli bir ayda (tercihen tek kanaldan) ilk siparişini veren müşterileri bir grup olarak alın." },
        { name: "Birikimli siparişleri toplayın", text: "Bu müşterilerin 3., 6., 12. ve 24. aya kadar verdikleri tüm siparişleri ve ciroyu müşteri başına hesaplayın." },
        { name: "Marjla çarpın", text: "Birikimli ciroyu katkı marjıyla (SaaS'ta brüt marjla) çarparak her ay için marjlı LTV'yi bulun." },
        { name: "CAC ile karşılaştırın", text: "Aynı kohortun CAC'ına bölün. 24 aylık LTV 483 TL ve CAC 161 TL ise LTV:CAC = 3." },
        { name: "Geri ödeme ayını okuyun", text: "Birikimli katkının CAC'ı geçtiği ay CAC geri ödeme süresidir; reklam hedefini bu süreye ve hedef orana göre belirleyin." },
      ],
    },
    relatedToolKey: "ltv",
    resources: [
      { label: "LTV Hesaplayıcı", href: "/ucretsiz-araclar/ltv-hesaplayici/" },
      { label: "CAC Hesaplayıcı", href: "/ucretsiz-araclar/cac-hesaplayici/" },
      { label: "CAC Nedir? Müşteri Edinme Maliyeti Nasıl Hesaplanır?", href: "/blog/cac-nedir-musteri-edinme-maliyeti/" },
      { label: "CAC Geri Ödeme Süresi Hesaplayıcı", href: "/ucretsiz-araclar/cac-geri-odeme-suresi-hesaplayici/" },
      { label: "Churn Rate Hesaplayıcı", href: "/ucretsiz-araclar/churn-rate-hesaplayici/" },
      { label: "Kar Marjı Hesaplama", href: "/ucretsiz-araclar/brut-kar-marji-hesaplayici/" },
      { label: "ROAS Hesaplayıcı", href: "/ucretsiz-araclar/roas-hesaplayici/" },
      { label: "Hedef ROAS Nasıl Belirlenir?", href: "/blog/hedef-roas-nasil-belirlenir/" },
      { label: "Reklam Bütçesi Nasıl Belirlenir?", href: "/blog/reklam-butcesi-nasil-belirlenir/" },
      { label: "NRR Nedir? SaaS Büyüme Metriği", href: "/blog/nrr-nedir-saas-buyume-metrigi/" },
      { label: "SaaS Metrikleri 101: ARR, CAC, LTV ve Churn", href: "/blog/saas-metrikleri-arr-cac-ltv/" },
      { label: "Stripe: Customer lifetime value (İngilizce)", href: "https://stripe.com/gb/resources/more/customer-lifetime-value", external: true },
    ],
  },
  {
    slug: "utm-nedir-utm-parametreleri",
    seoTitle: "UTM Nedir? UTM Parametreleri ve GA4 Kullanım Rehberi",
    title: "UTM Nedir? UTM Parametreleri Nasıl Kullanılır? (GA4, Google Ads ve Meta Örnekleriyle)",
    description:
      "UTM nedir, UTM parametreleri ne işe yarar? 9 parametre, örnek linkler, GA4'te nerede görülür, Google Ads ve Meta'da doğru kullanım ve isimlendirme kuralları.",
    category: "performans-pazarlama",
    tldr: [
      "UTM, bir linkin sonuna eklenen ve ziyaretçinin hangi kaynaktan, hangi kanaldan ve hangi kampanyadan geldiğini Google Analytics'e söyleyen etiketlerdir: ?utm_source=instagram&utm_medium=social&utm_campaign=kasim-indirimi gibi.",
      "Her linkte üç parametre olmalı: utm_source (platform), utm_medium (kanal türü), utm_campaign (kampanya). utm_content, utm_term ve utm_id isteğe bağlıdır; GA4'ün desteklediği 9 parametreden ikisi (utm_creative_format, utm_marketing_tactic) şu an raporlanmıyor.",
      "Değerler büyük/küçük harfe duyarlıdır: Instagram ile instagram GA4'te iki ayrı kaynaktır. Küçük harf, Türkçe karaktersiz ve GA4'ün tanıdığı medium değerleri (cpc, paid_social, social, email, referral, affiliate) kullanın; yoksa trafik Unassigned olur.",
      "Google Ads'te manuel UTM yerine otomatik etiketlemeyi açık tutun; Meta'da dinamik parametrelerle ({{campaign.name}}, {{ad.name}}) tek şablon kullanın. Sitenizin kendi iç linklerine asla UTM eklemeyin.",
    ],
    publishedAt: "2026-10-27",
    readingMinutes: 9,
    tags: ["UTM", "UTM Parametreleri", "GA4", "Kampanya Takibi", "Google Analytics", "Ölçümleme"],
    sections: [
      {
        heading: "UTM nedir? (Kısa cevap)",
        paragraphs: [
          "UTM (Urchin Tracking Module), bir web adresinin sonuna eklenen ve o linke tıklayan ziyaretçinin nereden geldiğini analiz aracınıza bildiren etiketlerdir. Adını, Google'ın 2005'te satın alıp Google Analytics'e dönüştürdüğü Urchin yazılımından alır.",
          "UTM'siz bir Instagram hikâyesi linki GA4'te çoğu zaman yalnızca 'instagram.com / referral' ya da hiç kaynak bilgisi olmadan görünür; hangi kampanyadan, hangi görselden geldiği kaybolur. Aynı link UTM'le paylaşıldığında GA4 kaynağı, kanalı ve kampanyayı ayrı ayrı kaydeder, satışları da bu kampanyaya bağlayabilirsiniz.",
          "Örnek: https://site.com/kasim-indirimi/?utm_source=instagram&utm_medium=social&utm_campaign=kasim-indirimi-2026&utm_content=hikaye-1",
        ],
      },
      {
        heading: "UTM'li bir link nasıl okunur?",
        paragraphs: [
          "Bir UTM linki üç parçadan oluşur: asıl sayfa adresi, soru işareti (?) ve & ile birbirine bağlanan parametre=değer çiftleri. Sayfa adresinde zaten bir soru işareti varsa (ör. ?renk=siyah) UTM'ler & ile devam eder; ikinci bir soru işareti kullanılmaz.",
          "Parametrelerin sırası önemli değildir; GA4 hepsini aynı şekilde okur. Değerlerde boşluk kullanırsanız tarayıcı bunları %20 ya da + olarak kodlar ve raporlarda tutarsızlık çıkar; boşluk yerine tire (-) ya da alt çizgi (_) kullanın.",
        ],
        bullets: [
          "https://site.com/urun/ → asıl adres (UTM'ler sayfanın içeriğini değiştirmez)",
          "?utm_source=newsletter → kaynak: trafiği gönderen yer",
          "&utm_medium=email → aracı: kanal türü (GA4 kanal grubunu bu belirler)",
          "&utm_campaign=kasim-bulteni-2026 → kampanya adı",
          "&utm_content=ust-buton → aynı kampanyadaki farklı link ya da kreatif",
        ],
      },
      {
        heading: "UTM parametreleri nelerdir? 9 parametre ve GA4 karşılıkları",
        paragraphs: [
          "Çoğu kaynak beş parametreden bahseder, ancak Google Analytics 4'ün URL oluşturucusu dokuz parametreyi destekler. Google'ın önerisi: source, medium ve campaign her linkte bulunsun; birini kullandığınızda ilgili diğerlerini de doldurun, eksik kalanlar raporlarda '(not set)' olarak görünür.",
        ],
        bullets: [
          "utm_source (zorunlu): Trafiği gönderen platform ya da yer → google, instagram, newsletter, influencer-adi. GA4: Oturum kaynağı (Session source)",
          "utm_medium (zorunlu): Kanal türü → cpc, paid_social, social, email, affiliate, referral. GA4: Oturum aracısı; varsayılan kanal grubunu belirleyen asıl parametre",
          "utm_campaign (zorunlu): Kampanya adı → kasim-indirimi-2026. GA4: Oturum kampanyası (Session campaign)",
          "utm_content (isteğe bağlı): Aynı kampanyada farklı kreatif ya da link → video-a, ust-buton. GA4: Manuel reklam içeriği (Manual ad content)",
          "utm_term (isteğe bağlı): Ücretli anahtar kelime ya da hedef kitle → kosu-ayakkabisi. GA4: Manuel terim (Manual term)",
          "utm_id (isteğe bağlı): Kampanya kimliği → bf26-001. GA4'e maliyet/kampanya verisi yüklüyorsanız eşleştirme anahtarıdır",
          "utm_source_platform (isteğe bağlı): Trafiği yönlendiren satın alma platformu → Search Ads 360, Display & Video 360 gibi",
          "utm_creative_format (isteğe bağlı): Kreatif türü → video, native, display. Google'a göre şu an GA4'te raporlanmıyor",
          "utm_marketing_tactic (isteğe bağlı): Hedefleme taktiği → remarketing, prospecting. Google'a göre şu an GA4'te raporlanmıyor",
        ],
      },
      {
        heading: "Hangi kanalda hangi değerler yazılmalı?",
        paragraphs: [
          "GA4, oturumu bir kanala (Paid Social, Organic Social, Email, Affiliates vb.) atarken Google'ın yayımladığı kuralları kullanır ve bu kurallar büyük ölçüde utm_medium değerine bakar. 'story', 'bio', 'whatsapp' ya da 'influencer' gibi kural listesinde olmayan medium değerleri trafiği Unassigned kanalına düşürür. Aşağıdaki kombinasyonlar varsayılan kanal kurallarıyla uyumludur:",
          "Unassigned trafiğiniz zaten varsa sebebini ve düzeltme adımlarını GA4 Unassigned yazımızda ayrıntılı anlattık; UTM Link Oluşturucu aracımız ise linki oluştururken GA4'te hangi kanala düşeceğini gösterir.",
        ],
        bullets: [
          "Instagram / Facebook reklamı: source=instagram veya facebook, medium=paid_social → Paid Social",
          "Instagram profil linki, organik paylaşım: source=instagram, medium=social → Organic Social",
          "E-posta bülteni: source=newsletter, medium=email → Email",
          "Influencer ya da ortaklık: source=influencer-adi, medium=affiliate → Affiliates",
          "WhatsApp paylaşımı: source=whatsapp, medium=social → Organic Social",
          "SMS: source=sms, medium=sms → SMS",
          "QR kodlu broşür, ambalaj, etkinlik: source=qr, medium=referral → Referral (ya da GA4'te kendi 'Offline' kanal grubunuz)",
          "Başka bir sitedeki banner: source=site-adi, medium=display veya cpm → Display",
        ],
      },
      {
        heading: "Google Ads'te UTM kullanılır mı?",
        paragraphs: [
          "Google Ads ile GA4 bağlıysa kısa cevap: kaynak ve kampanya ölçümü için manuel UTM'ye gerek yok, otomatik etiketlemeyi (auto-tagging) açık tutun. Otomatik etiketleme her tıklamaya bir gclid parametresi ekler ve GA4 kampanya, reklam grubu, anahtar kelime ve maliyet verisini bu kimlikten alır.",
          "Google'ın açıklamasına göre otomatik etiketleme ve manuel UTM aynı linkte bulunduğunda GA4 kaynak, aracı ve diğer trafik sınıflandırma boyutlarında otomatik değerleri kullanır. Manuel olarak eklediğiniz utm_content ve utm_term ise 'Manuel reklam içeriği' ve 'Manuel terim' boyutlarına yine yazılır; reklam metni testlerini ayırmak için yalnızca bu ikisini kullanmak işe yarar.",
          "Manuel UTM'yi Google Ads'te yalnızca GA4 dışındaki bir araç (CRM, başka bir analiz aracı) gclid'i okuyamıyorsa düşünün; bu durumda da UTM'leri tek tek reklamlara değil, hesap düzeyindeki son ek (final URL suffix) alanına ekleyin ki tutarlı kalsın.",
        ],
      },
      {
        heading: "Meta (Facebook, Instagram) reklamlarında UTM nasıl eklenir?",
        paragraphs: [
          "Meta'da her reklama elle UTM yazmak yerine Reklam Yöneticisi'ndeki 'URL parametreleri' alanına dinamik parametreli tek bir şablon girin. Meta, reklam gösterildiğinde süslü parantez içindeki değişkenleri kampanya, reklam seti ve reklamın gerçek adıyla doldurur.",
          "Önerilen şablon: utm_source=facebook&utm_medium=paid_social&utm_campaign={{campaign.name}}&utm_content={{ad.name}}&utm_term={{adset.name}}&utm_id={{campaign.id}}",
          "Dikkat edilecek iki nokta: Birincisi, GA4'e giden değer kampanya adınızın kendisi olduğu için Reklam Yöneticisi'ndeki adları da küçük harf, Türkçe karaktersiz ve boşluksuz bir standarda göre verin. İkincisi, kampanyayı yayından sonra yeniden adlandırırsanız parametreye eski ad gitmeye devam edebilir; adı yayından önce kesinleştirin, eşleştirme için değişmeyen {{campaign.id}} değerini utm_id'de taşıyın. Reklamın Facebook mu Instagram mı Messenger mı olduğunu ayırmak isterseniz {{site_source_name}} ya da {{placement}} değişkenini utm_content'e ekleyebilirsiniz.",
        ],
      },
      {
        heading: "UTM isimlendirme kuralları: ekip standardı nasıl kurulur?",
        paragraphs: [
          "UTM verisinin değeri tutarlılığındadır. Üç kişinin aynı kampanyaya 'Kasim', 'kasım-indirim' ve 'KASIM_2026' yazdığı bir hesapta rapor üç ayrı kampanya gösterir. Bunu önlemek için kampanyalar başlamadan önce kısa bir kural seti belirleyin ve tek bir tabloda tutun:",
        ],
        bullets: [
          "Hep küçük harf: utm değerleri büyük/küçük harfe duyarlıdır, Google da küçük harfi önerir",
          "Türkçe karakter yok: ş, ı, ğ, ü, ö, ç yerine s, i, g, u, o, c (kodlanmış %C5%9F gibi değerler raporu okunmaz hale getirir)",
          "Boşluk yok; kelimeleri tek bir ayırıcıyla bağlayın: ekipçe ya tire (kasim-indirimi) ya alt çizgi (kasim_indirimi) seçin ve karıştırmayın",
          "Kampanya adı şablonu: yıl-ay_amaç_ürün-veya-teklif_ülke → 2026-11_satis_black-friday_tr. Rapor alfabetik sıralandığında kampanyalar tarih sırasıyla dizilir",
          "Kaynak ve aracı için kapalı liste: ekip yalnızca tablodaki değerleri kullanır (instagram, facebook, newsletter, whatsapp / cpc, paid_social, social, email, affiliate, referral)",
          "Her yeni linki tabloya kaydedin: tarih, kampanya, tam link, sorumlu. Böylece aylar sonra hangi linkin nerede kullanıldığını bulursunuz",
        ],
      },
      {
        heading: "UTM verileri GA4'te nerede görülür?",
        paragraphs: [
          "Raporlar › Edinme › Trafik edinme raporunu açın ve tablonun birincil boyutunu 'Oturum kaynağı/aracı' ya da 'Oturum kampanyası' yapın. utm_content ve utm_term değerleri için tabloya ikincil boyut olarak 'Oturum manuel reklam içeriği' ve 'Oturum manuel terimi'ni ekleyin ya da Keşifler bölümünde serbest biçimli bir rapor oluşturun.",
          "UTM parametreleri 'Sayfa yolu + sorgu dizesi' ve 'Açılış sayfası + sorgu dizesi' boyutlarında görünmez; Google bunları bu boyutlardan çıkarır. Linkin tam adresini görmek isterseniz 'Sayfa konumu' boyutunu kullanın.",
          "Kampanyayı yayına almadan önce linki kendi tarayıcınızda açıp GA4'te Raporlar › Gerçek zamanlı ekranında kaynak ve kampanyanın doğru göründüğünü kontrol edin. Standart raporlara verinin düşmesi 24-48 saat sürebilir.",
        ],
      },
      {
        heading: "UTM kullanırken en sık yapılan hatalar",
        paragraphs: [
          "UTM hataları çoğu zaman rapor açıldığında değil, haftalar sonra bütçe kararı verilirken fark edilir. Şu hatalardan kaçının:",
        ],
        bullets: [
          "Sitenin kendi iç linklerine UTM eklemek: ana sayfadaki bir banner'a utm_campaign eklemek, dönüşüm ilişkilendirmesinde gerçek kaynağın (ör. Google Ads) yerine sizin iç kampanyanızı gösterir. İç tanıtımları GA4 olaylarıyla ölçün",
          "Organik aramaya ya da kendiliğinden gelen referanslara UTM eklemeye çalışmak: Google arama sonuçlarındaki linki siz kontrol etmezsiniz; organik trafik GA4'te kendiliğinden 'google / organic' olarak görünür",
          "Google Ads'te otomatik etiketlemeyi kapatıp manuel UTM'ye geçmek: maliyet, anahtar kelime ve reklam grubu verisi GA4'e gelmez",
          "Yönlendirmede parametre kaybı: link kısaltıcı, http→https ya da www yönlendirmesi UTM'leri düşürebilir. Linki açtıktan sonra adres çubuğunda utm_ parametrelerinin durduğunu kontrol edin",
          "Kanal kurallarına uymayan medium: 'story', 'bio', 'qr', 'whatsapp' gibi değerler trafiği Unassigned yapar",
          "UTM'li linki herkese açık bir yerde kalıcı olarak kullanmak: başkaları linki kopyalayıp paylaştıkça farklı kaynaklardan gelen trafik aynı kampanyaya yazılır. Uzun ömürlü paylaşımlarda (ör. bir forum imzası) kaynağı buna göre adlandırın",
        ],
      },
      {
        heading: "UTM'ler SEO'ya zarar verir mi?",
        paragraphs: [
          "Doğru kurulmuş bir sitede hayır. UTM'li adres teknik olarak ayrı bir URL'dir ama sayfa aynı içeriği gösterir; sayfanızda parametresiz adresi gösteren bir canonical etiketi varsa Google sinyalleri asıl adrese toplar. Sorun, UTM'li linkleri sitenin kendi menüsünde ya da site haritasında kullanmaktan doğar: bu durumda Google parametreli kopyaları taramaya başlayabilir. Kural basit: UTM yalnızca site dışındaki paylaşımlarda kullanılır, canonical etiketi her sayfada parametresiz adresi gösterir.",
        ],
      },
    ],
    faq: [
      {
        question: "UTM'nin açılımı nedir?",
        answer:
          "UTM, Urchin Tracking Module'ün kısaltmasıdır. Adını Google'ın 2005'te satın aldığı ve Google Analytics'in temelini oluşturan Urchin analiz yazılımından alır. Bugün GA4 başta olmak üzere çoğu analiz ve CRM aracı UTM parametrelerini okur.",
      },
      {
        question: "Hangi UTM parametreleri zorunlu?",
        answer:
          "Teknik olarak tek bir parametre bile GA4'e veri gönderir, ancak Google her linkte utm_source, utm_medium ve utm_campaign kullanılmasını önerir. Eksik bırakılan parametreler raporlarda '(not set)' olarak görünür ve kanal ataması bozulabilir.",
      },
      {
        question: "UTM ile gclid birlikte kullanılırsa ne olur?",
        answer:
          "GA4 kaynak, aracı ve kampanya gibi trafik sınıflandırma boyutlarında otomatik etiketleme (gclid) değerlerini kullanır; manuel utm_source ve utm_medium yok sayılır. Manuel utm_content ve utm_term ise Manuel reklam içeriği ve Manuel terim boyutlarına yazılmaya devam eder.",
      },
      {
        question: "UTM linki nasıl oluşturulur?",
        answer:
          "Sayfa adresinin sonuna ? ekleyip parametreleri & ile birleştirerek elle yazabilirsiniz; ama hata riskini azaltmak için bir UTM oluşturucu kullanmak daha güvenlidir. Ücretsiz UTM Link Oluşturucu aracımız değerleri otomatik küçük harfe ve Türkçe karaktersiz hale çevirir ve linkin GA4'te hangi kanala düşeceğini gösterir.",
      },
      {
        question: "WhatsApp ve QR kod linklerinde UTM nasıl yazılır?",
        answer:
          "WhatsApp için utm_source=whatsapp ve utm_medium=social (Organic Social kanalına düşer); QR kodlu basılı materyal için utm_source=qr ve utm_medium=referral kullanabilirsiniz. Offline kanalları ayrı görmek istiyorsanız GA4'te özel bir kanal grubu tanımlayıp medium değerinizi o kanala eşleyin.",
      },
    ],
    howTo: {
      name: "UTM'li kampanya linki nasıl oluşturulur ve test edilir?",
      description: "Kampanya linkine doğru UTM parametrelerini ekleyip GA4'te kontrol edin.",
      steps: [
        { name: "Hedef sayfayı seçin", text: "Ziyaretçinin ineceği sayfanın parametresiz tam adresini alın (ör. https://site.com/kasim-indirimi/)." },
        { name: "Kaynak ve aracıyı belirleyin", text: "Ekip tablonuzdaki listeden platformu utm_source'a, kanal türünü utm_medium'a yazın; medium için GA4'ün tanıdığı değerleri (cpc, paid_social, social, email, affiliate, referral) kullanın." },
        { name: "Kampanya adını şablona göre yazın", text: "Küçük harf, Türkçe karaktersiz ve boşluksuz bir ad verin (ör. 2026-11_satis_black-friday_tr); kreatifleri ayırmak için utm_content ekleyin." },
        { name: "Linki oluşturun", text: "Parametreleri ? ve & ile birleştirin ya da bir UTM oluşturucu kullanın; Google Ads için manuel UTM yerine otomatik etiketlemeyi açık bırakın." },
        { name: "Yayından önce test edin", text: "Linki tarayıcıda açın, adres çubuğunda utm_ parametrelerinin kaldığını ve GA4 Gerçek zamanlı raporunda kaynak/kampanyanın doğru göründüğünü kontrol edin; linki ekip tablosuna kaydedin." },
      ],
    },
    relatedToolKey: "utm",
    resources: [
      { label: "UTM Link Oluşturucu (GA4 kanal tahminli)", href: "/ucretsiz-araclar/utm-link-olusturucu/" },
      { label: "GA4 Unassigned Trafik Nedir, Nasıl Düzeltilir?", href: "/blog/ga4-unassigned-trafik-nedir-nasil-duzeltilir/" },
      { label: "ROAS Nedir, Nasıl Hesaplanır?", href: "/blog/roas-nedir-nasil-hesaplanir/" },
      { label: "Black Friday 2026 Reklam Planı", href: "/blog/black-friday-2026-reklam-plani/" },
      { label: "Meta Ads Öğrenme Aşamasından Çıkma Taktikleri", href: "/blog/meta-ads-ogrenme-asamasindan-cikma-taktikleri/" },
      { label: "Hangi Pazarlama Kanalı Size Uygun? (Test)", href: "/ucretsiz-araclar/hangi-pazarlama-kanali-uygun/" },
      { label: "Google Analytics: URL oluşturucularla kampanya verisi toplama", href: "https://support.google.com/analytics/answer/10917952?hl=tr", external: true },
      { label: "Google Analytics: Varsayılan kanal grubu kuralları", href: "https://support.google.com/analytics/answer/9756891?hl=tr", external: true },
      { label: "Google Analytics: Google Ads otomatik etiketlemenin avantajları", href: "https://support.google.com/analytics/answer/10723328?hl=tr", external: true },
    ],
  },
  {
    slug: "cac-nedir-musteri-edinme-maliyeti",
    seoTitle: "CAC Nedir? Müşteri Edinme Maliyeti ve Hesap Örneği",
    title: "CAC Nedir? Müşteri Edinme Maliyeti Nasıl Hesaplanır? (Blended, Paid ve Kanal Bazında Örnekler)",
    description:
      "CAC (müşteri edinme maliyeti) nedir, nasıl hesaplanır? Blended, paid ve tam yüklü CAC farkı, kanal bazında örnek, CAC ile CPA farkı ve CAC'tan reklam hedefi.",
    category: "saas-buyume",
    tldr: [
      "CAC (Customer Acquisition Cost, müşteri edinme maliyeti), bir dönemde yeni müşteri kazanmak için harcanan toplam pazarlama ve satış maliyetinin o dönemde kazanılan yeni müşteri sayısına bölünmesidir: 310.000 TL ÷ 1.000 yeni müşteri = 310 TL.",
      "Aynı veriden üç farklı CAC çıkar: tam yüklü blended CAC 310 TL, yalnızca reklam harcamasıyla 'medya CAC' 230 TL, reklamdan gelen müşterilere göre paid CAC ≈ 329 TL. Bütçe kararını paid ve kanal bazlı CAC ile verin; blended CAC organik müşterilerle ücretli kanalları olduğundan ucuz gösterir.",
      "Reklam panelindeki CPA, CAC değildir: panel mevcut müşterilerin tekrar siparişlerini de dönüşüm sayar. Örnekte Meta paneli 240 TL CPA gösterirken yeni müşteri başına maliyet 300 TL'dir.",
      "CAC tek başına iyi ya da kötü değildir; ilk sipariş katkısı, LTV ve geri ödeme süresiyle okunur. 900 TL sepet ve %30 katkı marjıyla ilk sipariş 270 TL bırakır; 329 TL'lik paid CAC her yeni müşteride ilk siparişte 59 TL açık demektir.",
    ],
    publishedAt: "2026-10-28",
    readingMinutes: 9,
    tags: ["CAC", "Müşteri Edinme Maliyeti", "Paid CAC", "Blended CAC", "Birim Ekonomisi", "LTV:CAC"],
    sections: [
      {
        heading: "CAC nedir? (Kısa cevap)",
        paragraphs: [
          "CAC (Customer Acquisition Cost), Türkçesiyle müşteri edinme maliyeti, bir yeni müşteriyi kazanmak için ortalama ne kadar harcadığınızı gösterir. Formülü: CAC = (Pazarlama giderleri + Satış giderleri) / Aynı dönemde kazanılan yeni müşteri sayısı.",
          "Örnek: Ekim ayında reklam, ajans, ekip ve araçlar dahil 310.000 TL harcayan ve bu ay ilk siparişini veren 1.000 yeni müşteri kazanan bir e-ticaret markasının CAC'ı 310.000 / 1.000 = 310 TL'dir. (Yazıdaki tüm tutarlar örnek tutarlardır.)",
          "CAC'ın değeri, bir müşterinin size bıraktığı kârla karşılaştırıldığında ortaya çıkar. Bu yüzden CAC'ı her zaman ilk sipariş katkısı, LTV (müşteri yaşam boyu değeri) ve CAC geri ödeme süresiyle birlikte okuyun.",
        ],
      },
      {
        heading: "CAC nasıl hesaplanır? Adım adım",
        paragraphs: [
          "Hesabın kendisi bir bölme işlemidir; hatalar neredeyse her zaman pay ve paydanın tanımında yapılır. Aşağıdaki dört adımı her ay aynı şekilde uygulamak, CAC'ı dönemler arasında karşılaştırılabilir kılar.",
        ],
        bullets: [
          "1. Dönemi seçin: genellikle takvim ayı. B2B'de satış döngüsü uzunsa 3 aylık dönem ya da hareketli ortalama kullanın",
          "2. 'Yeni müşteri'yi tanımlayın: e-ticarette ilk siparişini veren (ve iade etmeyen) müşteri, SaaS'ta ilk ödemeyi yapan hesap. Deneme kullanıcıları ve lead'ler müşteri değildir",
          "3. Maliyetleri toplayın: reklam harcaması, ajans/freelancer, içerik ve kreatif prodüksiyon, influencer, pazarlama ve satış ekibinin edinmeye ayrılan maaş payı, prim, pazarlama/satış yazılımları",
          "4. Bölün ve sürümü yazın: CAC = Toplam maliyet / Yeni müşteri. Raporda hangi sürümü (blended, paid, tam yüklü) kullandığınızı belirtin",
        ],
      },
      {
        heading: "CAC'a hangi maliyetler dahil edilir, hangileri edilmez?",
        paragraphs: [
          "CAC yalnızca yeni müşteri kazanmaya giden parayı ölçer. Ürün maliyeti ya da mevcut müşteriyi elde tutma harcaması CAC'a eklendiğinde metrik şişer ve hangi kanalın pahalı olduğunu artık göstermez.",
          "Ortak giderlerde (örneğin hem yeni hem mevcut müşteriye giden e-posta pazarlaması ya da hem satış hem destek yapan ekip) basit bir dağıtım anahtarı belirleyin ve her ay aynısını kullanın; kusursuz dağıtımdan daha önemlisi tutarlılıktır.",
        ],
        bullets: [
          "Dahil: reklam harcaması (Meta, Google, TikTok, pazaryeri reklamları), ajans ve freelancer ücretleri, kreatif ve içerik prodüksiyonu, influencer ücretleri ve kod indirimleri",
          "Dahil (tam yüklü CAC'ta): pazarlama ve satış ekibinin edinmeye ayrılan maaş, prim ve yan hak maliyeti; CRM, e-posta, analitik gibi araçların payı; fuar ve etkinlikler",
          "Dahil değil: ürün maliyeti, kargo ve paketleme (bunlar katkı marjında), iade maliyeti, müşteri hizmetleri, mevcut müşterilere yönelik sadakat ve yeniden satın alma kampanyaları",
          "Dikkat: ilk siparişe özel indirim kuponları CAC'a eklenebilir ya da marjdan düşülebilir; ikisini birden yapmayın, hangisini seçtiğinizi not edin",
        ],
      },
      {
        heading: "Blended CAC, paid CAC ve tam yüklü CAC farkı nedir?",
        paragraphs: [
          "Aynı ayın verisiyle üç farklı CAC hesaplanabilir ve üçü de doğrudur; yanlış olan, birini diğerinin yerine kullanmaktır. Örnek markanın Ekim verisi: reklam harcaması 230.000 TL (Meta 120.000, Google 80.000, influencer 30.000), ajans 25.000 TL, pazarlama ekibinin edinme payı 45.000 TL, araçlar 10.000 TL; toplam 310.000 TL. 1.000 yeni müşterinin 700'ü reklamdan (Meta 400, Google 250, influencer kodu 50), 300'ü organik arama, doğrudan trafik ve tavsiyeden geldi.",
          "Blended CAC, şirketin genel edinme verimliliğini gösterir ve yatırımcı ya da yönetim raporu için uygundur. Ama 300 organik müşteri paydayı büyüttüğü için ücretli kanalları olduğundan ucuz gösterir. Reklam bütçesini artırıp artırmama kararı paid CAC ile verilir: bir sonraki 10.000 TL'lik reklam harcaması organik müşteri getirmez.",
        ],
        bullets: [
          "Tam yüklü blended CAC = 310.000 / 1.000 = 310 TL (tüm maliyetler, tüm yeni müşteriler)",
          "Medya CAC = 230.000 / 1.000 = 230 TL (yalnızca reklam, tüm yeni müşteriler; en iyimser ve en yanıltıcı sürüm)",
          "Paid CAC = 230.000 / 700 ≈ 329 TL (yalnızca reklam, yalnızca reklamdan gelen müşteriler)",
          "Kural: blended CAC düşerken paid CAC yükseliyorsa iyileşme organik kanaldan geliyordur; reklam verimliliği aslında kötüleşiyordur",
        ],
      },
      {
        heading: "Kanal bazında CAC nasıl hesaplanır?",
        paragraphs: [
          "Paid CAC'ı kanallara bölmek, bütçenin nereye kayması gerektiğini gösterir. Her kanal için o kanalın harcamasını o kanaldan gelen yeni müşteri sayısına bölün. Müşterinin hangi kanaldan geldiğini doğru eşleştirmek için kampanya linklerinde tutarlı UTM parametreleri ve influencer'lara özel indirim kodları kullanın.",
          "Örnekte Meta ve Google birbirine yakın, influencer kanalı ise iki katı pahalı görünüyor. Bu tablo tek başına 'influencer'ı kapat' demez: kod kullanmadan gelen müşteriler bu kanala yazılmadığı için kanal CAC'ı olduğundan yüksek görünebilir. Karar vermeden önce kanalın getirdiği müşterilerin ikinci sipariş oranına (kohort LTV'si) bakın; pahalı ama sadık müşteri getiren bir kanal uzun vadede daha kârlı olabilir.",
        ],
        bullets: [
          "Meta: 120.000 / 400 = 300 TL",
          "Google Ads: 80.000 / 250 = 320 TL",
          "Influencer (kod ile): 30.000 / 50 = 600 TL",
          "Organik arama / doğrudan / tavsiye: medya maliyeti yok; SEO ve içerik harcamanız varsa ayrı bir 'organik CAC' olarak izleyin",
        ],
      },
      {
        heading: "CAC ile CPA ve CPL arasındaki fark nedir?",
        paragraphs: [
          "CPA (Cost per Acquisition / dönüşüm başı maliyet), reklam panelinin gösterdiği, bir kampanyanın tanımlı dönüşüm başına maliyetidir. Dönüşüm bir satın alma, kayıt ya da form olabilir ve mevcut müşterinin tekrar siparişini de kapsar. CPL (Cost per Lead), lead başı maliyettir. CAC ise tüm edinme maliyetini yalnızca gerçek yeni müşterilere böler.",
          "Örnekte Meta paneli Ekim'de 500 satın alma raporluyor; bunların 100'ü mevcut müşterilerin tekrar siparişi. Panel CPA'sı 120.000 / 500 = 240 TL görünürken yeni müşteri başına maliyet 120.000 / 400 = 300 TL'dir. Yeni müşteri edinmeyi hedefleyen bir kampanyayı panel CPA'sıyla yönetmek, maliyeti %25 düşük görmek demektir. Meta ve Google'da yeni müşteri hedefleme/raporlama seçeneklerini açmak ya da sipariş verisini kendi tarafınızda yeni/mevcut olarak ayırmak bu farkı görünür kılar.",
          "B2B'de zincir uzar: 180.000 TL reklamla 500 lead (CPL 360 TL) ve %5 lead-müşteri dönüşümüyle 25 müşteri kazanılırsa medya CAC'ı 180.000 / 25 = 7.200 TL'dir; yani CAC = CPL / Lead→müşteri dönüşüm oranı. CPL'yi yarıya indiren ama dönüşümü üçte birine düşüren bir kampanya CAC'ı artırır.",
        ],
      },
      {
        heading: "İyi bir CAC kaç olmalı? İlk sipariş, LTV ve geri ödeme",
        paragraphs: [
          "Evrensel bir 'iyi CAC' tutarı yoktur; 300 TL, 150 TL'lik tek seferlik bir ürün için çok yüksek, yıllık sözleşmeli bir B2B hizmeti için çok düşüktür. CAC'ı üç ölçüyle değerlendirin.",
          "Örnek markada ortalama sepet 900 TL, katkı marjı (ürün, kargo, ödeme komisyonu ve iade düşüldükten sonra kalan) %30; ilk sipariş 270 TL katkı bırakıyor. 329 TL'lik paid CAC ile her yeni müşteri ilk siparişte 59 TL açık veriyor; açık ikinci siparişle kapanıyorsa sorun yok, kapanmıyorsa reklam büyüdükçe zarar büyür. Kanal bazında Meta (300 TL) sınıra yakın, influencer (600 TL) ancak yüksek tekrar satın almayla savunulabilir.",
        ],
        bullets: [
          "İlk sipariş katkısı: CAC ≤ İlk sipariş katkısı ise müşteri ilk siparişte kendini öder (tekrar satın almanın az olduğu kategorilerde şart)",
          "LTV:CAC oranı: marjla hesaplanmış LTV / CAC; yaygın başparmak kuralı en az 3'tür. LTV'nin nasıl hesaplanacağını LTV yazısında ayrıntılı anlattım",
          "CAC geri ödeme süresi: CAC / Aylık müşteri başı marj katkısı; B2B SaaS'ta 12 ayın altı yaygın hedeftir",
        ],
      },
      {
        heading: "B2B ve SaaS'ta CAC nasıl hesaplanır? Zaman kayması örneği",
        paragraphs: [
          "Satış döngüsü 1–3 ay süren işlerde bu ayın harcaması gelecek ayların müşterisini getirir. Aynı ayın harcamasını aynı ayın müşterisine bölmek CAC'ı dalgalı gösterir. Örnek: bir B2B SaaS şirketi her ay 250.000 TL (reklam, pazarlama ve satış ekibi, araçlar dahil) harcıyor; Temmuz, Ağustos ve Eylül'de sırasıyla 5, 12 ve 8 yeni müşteri kazanıyor.",
          "Aylık CAC 50.000 TL, yaklaşık 20.833 TL ve 31.250 TL çıkıyor; hiçbir şey değişmediği halde CAC iki buçuk kat oynuyor gibi görünüyor. Çeyreklik hesap daha sağlıklıdır: 750.000 / 25 = 30.000 TL. Aylık müşteri başı gelir (ARPA) 3.000 TL ve brüt marj %80 ise müşteri ayda 2.400 TL bırakır; CAC 30.000 / 2.400 = 12,5 ayda geri döner.",
          "B2B'de satış ekibinin maliyeti çoğu zaman reklamdan büyüktür; bu yüzden tam yüklü CAC'ı izlemek ve huniyi lead başı, SQL başı ve müşteri başı maliyet olarak ayrı ayrı görmek, darboğazın reklamda mı satışta mı olduğunu gösterir.",
        ],
      },
      {
        heading: "CAC'tan reklam hedefi nasıl belirlenir?",
        paragraphs: [
          "Önce maksimum CAC'ı bir politikayla belirleyin, sonra reklam paneline girilecek hedefe çevirin. Paneldeki hedef, CAC'ın reklam dışı kısmını (ajans, ekip, araçlar) karşılayacak kadar düşük olmalıdır.",
          "Örnek markada tam yüklü maliyetin %74'ü (230.000 / 310.000) reklamdır. İlk siparişte başabaş politikasıyla maks. tam yüklü CAC 270 TL ise reklam payı 270 × 0,74 ≈ 200 TL olur. Her yeni müşteri ilk siparişte 900 TL ciro getirdiği için bu, yeni müşteri kampanyalarında yaklaşık 900 / 200 = 4,5 ROAS hedefi demektir. Hedefi gerçekçi bulmuyorsanız tekrar satın alma verisiyle (12 aylık geri ödeme gibi) politikayı gevşetin; kanıtsız gevşetmek bütçeyi zarara çevirir.",
        ],
        bullets: [
          "İlk siparişte başabaş: Maks. CAC = İlk sipariş katkısı",
          "Geri ödeme süresi politikası: Maks. CAC = Aylık müşteri başı katkı × Hedef ay",
          "Oran politikası: Maks. CAC = LTV / Hedef LTV:CAC oranı",
          "Panel hedefi: Maks. CPA ≈ Maks. CAC × (Reklam harcaması / Toplam edinme maliyeti); hedef ROAS ≈ İlk sipariş tutarı / Maks. CPA",
        ],
      },
      {
        heading: "CAC nasıl düşürülür?",
        paragraphs: [
          "CAC'ın iki tarafı vardır: maliyeti düşürmek ya da aynı maliyetle daha çok müşteri kazanmak. Pratikte ikincisi daha hızlı sonuç verir.",
        ],
        bullets: [
          "Dönüşüm oranı: açılış sayfası hızı, teklif netliği, kargo ücretinin erken gösterilmesi ve kısa ödeme adımları aynı harcamayla daha fazla müşteri getirir",
          "Kanal karması: kanal bazında paid CAC'ı izleyip bütçeyi verimli kanallara kaydırın; blended CAC'a bakarak karar vermeyin",
          "Yeni müşteri hedefleme: panelde mevcut müşterileri hariç tutun ya da yeni müşteri hedefi kullanın; aksi halde bütçenin bir kısmı zaten gelecek siparişleri satın alır",
          "Birikimli kanallar: SEO, içerik, e-posta listesi ve tavsiye programı zamanla blended CAC'ı aşağı çeker",
          "B2B'de ICP: satış ekibinin zamanını kapanma olasılığı yüksek hesaplara ayırmak tam yüklü CAC'ı en çok düşüren adımdır",
        ],
      },
    ],
    faq: [
      {
        question: "CAC açılımı nedir, Türkçesi ne?",
        answer:
          "CAC, Customer Acquisition Cost'un kısaltmasıdır; Türkçede müşteri edinme maliyeti ya da müşteri kazanım maliyeti denir. Bir yeni müşteri kazanmak için harcanan ortalama pazarlama ve satış maliyetini gösterir.",
      },
      {
        question: "CAC nasıl hesaplanır?",
        answer:
          "CAC = (Pazarlama giderleri + Satış giderleri) / Aynı dönemde kazanılan yeni müşteri sayısı. 310.000 TL toplam edinme maliyeti ve 1.000 yeni müşteri için CAC 310 TL'dir. Yalnızca reklam harcamasını reklamdan gelen müşterilere bölerseniz paid CAC'ı bulursunuz.",
      },
      {
        question: "CAC ile CPA aynı şey mi?",
        answer:
          "Hayır. CPA reklam panelinin gösterdiği dönüşüm başı maliyettir ve mevcut müşterilerin tekrar siparişlerini de sayar. CAC tüm edinme maliyetini yalnızca yeni müşterilere böler; bu yüzden genellikle panel CPA'sından yüksektir.",
      },
      {
        question: "CAC hesabına maaşlar dahil edilir mi?",
        answer:
          "Tam yüklü CAC'ta evet: pazarlama ve satış ekibinin yeni müşteri kazanmaya ayrılan maaş ve prim payı eklenir. Kanal verimliliğini ölçen paid CAC'ta ise yalnızca reklam harcaması kullanılır. Hangi sürümü kullandığınızı raporda belirtin.",
      },
      {
        question: "CAC yüksek mi, nasıl anlarım?",
        answer:
          "CAC'ı ilk sipariş katkısıyla, LTV ile ve geri ödeme süresiyle karşılaştırın. CAC ilk sipariş katkısını aşıyor ve tekrar satın alma bu farkı kapatmıyorsa ya da LTV:CAC 1'in altındaysa CAC sizin işiniz için yüksektir; sektör ortalamaları bu kıyasın yerini tutmaz.",
      },
    ],
    howTo: {
      name: "CAC nasıl hesaplanır?",
      description: "Bir dönemin pazarlama ve satış maliyetiyle blended, paid ve kanal bazında müşteri edinme maliyetini bulun.",
      steps: [
        { name: "Dönemi ve yeni müşteri tanımını belirleyin", text: "Takvim ayını (B2B'de çeyreği) seçin; yeni müşteriyi ilk siparişini veren ya da ilk ödemeyi yapan müşteri olarak tanımlayın." },
        { name: "Edinme maliyetlerini toplayın", text: "Reklam, ajans, kreatif, influencer, ekip payı ve araç maliyetlerini toplayın; ürün maliyeti ve elde tutma harcamalarını dışarıda bırakın." },
        { name: "Blended CAC'ı hesaplayın", text: "Toplam edinme maliyetini tüm yeni müşterilere bölün. 310.000 TL / 1.000 = 310 TL." },
        { name: "Paid ve kanal CAC'ını hesaplayın", text: "Reklam harcamasını reklamdan gelen müşterilere, her kanalın harcamasını o kanalın müşterilerine bölün. 230.000 TL / 700 ≈ 329 TL." },
        { name: "Marj ve LTV ile karşılaştırın", text: "CAC'ı ilk sipariş katkısı, LTV:CAC oranı ve geri ödeme süresiyle değerlendirip maksimum CAC ve reklam hedefini belirleyin." },
      ],
    },
    relatedToolKey: "cac",
    resources: [
      { label: "CAC Hesaplayıcı", href: "/ucretsiz-araclar/cac-hesaplayici/" },
      { label: "CAC Geri Ödeme Süresi Hesaplayıcı", href: "/ucretsiz-araclar/cac-geri-odeme-suresi-hesaplayici/" },
      { label: "LTV Nedir? LTV:CAC Oranı Kaç Olmalı?", href: "/blog/ltv-nedir-ltv-cac-orani/" },
      { label: "ROAS Hesaplama: ROAS ve Başabaş ROAS Hesaplayıcı", href: "/ucretsiz-araclar/roas-hesaplayici/" },
      { label: "Trendyol Komisyon ve Kâr Hesaplama", href: "/ucretsiz-araclar/trendyol-hepsiburada-kar-hesaplama/" },
      { label: "Kar Marjı Hesaplama", href: "/ucretsiz-araclar/brut-kar-marji-hesaplayici/" },
      { label: "Reklam Bütçesi Nasıl Belirlenir?", href: "/blog/reklam-butcesi-nasil-belirlenir/" },
      { label: "UTM Nedir? UTM Parametreleri Nasıl Kullanılır?", href: "/blog/utm-nedir-utm-parametreleri/" },
      { label: "B2B Lead Generation Maliyetleri Nasıl Düşürülür?", href: "/blog/b2b-lead-generation-maliyetleri-nasil-dusurulur/" },
      { label: "SaaS Metrikleri 101: ARR, CAC, LTV ve Churn", href: "/blog/saas-metrikleri-arr-cac-ltv/" },
      { label: "Google Ads Yardım: Müşteri yaşam döngüsü hedefleri (yeni müşteri edinme)", href: "https://support.google.com/google-ads/answer/12080169?hl=tr", external: true },
    ],
  },
  {
    slug: "kar-marji-nasil-hesaplanir",
    seoTitle: "Kar Marjı Nasıl Hesaplanır? Formül ve Kar Oranı Farkı",
    title: "Kar Marjı Nasıl Hesaplanır? Kar Marjı ile Kar Oranı (Markup) Farkı, Dönüşüm Tablosu ve E-Ticaret Örneği",
    description:
      "Kar marjı nasıl hesaplanır? Formül, örnek, kar oranı (markup) farkı ve dönüşüm tablosu, hedef marjdan satış fiyatı, indirimin marja etkisi ve başabaş ROAS.",
    category: "performans-pazarlama",
    tldr: [
      "Kar marjı, kârın satış fiyatına oranıdır: Kar marjı = (Satış fiyatı − Maliyet) / Satış fiyatı × 100. 1.000 TL'ye satılan, 550 TL'ye mal olan üründe kar marjı %45'tir.",
      "Kar oranı (markup) ise kârın maliyete oranıdır: 450 / 550 = %81,8. İkisi sık karıştırılır; %50 markup yalnızca %33,3 marj demektir. Dönüşüm: Marj = Markup / (1 + Markup), Markup = Marj / (1 − Marj).",
      "Hedef marjdan fiyat bulmak için maliyeti (1 − hedef marj) ile bölün: 600 TL maliyet ve %40 hedef marj için fiyat 600 / 0,60 = 1.000 TL'dir. 'Maliyete %40 ekle' (840 TL) yalnızca %28,6 marj bırakır.",
      "E-ticarette asıl karar marjı katkı marjıdır: aynı ürün kargo, ödeme komisyonu, paketleme ve iade sonrası %31 bırakır; başabaş ROAS = 1 / 0,31 ≈ 3,23. %20 indirim brüt marjı %45'ten %31,25'e düşürür ve aynı brüt kârı korumak için %80 daha fazla satış gerekir.",
    ],
    publishedAt: "2026-10-28",
    readingMinutes: 8,
    tags: ["Kar Marjı", "Kar Marjı Hesaplama", "Kar Oranı", "Markup", "Brüt Kar Marjı", "Katkı Marjı", "Fiyatlandırma"],
    sections: [
      {
        heading: "Kar marjı nasıl hesaplanır? (Kısa cevap)",
        paragraphs: [
          "Kar marjı, sattığınız her 100 TL'nin kaç TL'sinin kâr olarak kaldığını gösterir. Formül: Kar marjı (%) = (Satış fiyatı − Maliyet) / Satış fiyatı × 100.",
          "Örnek: 1.000 TL'ye sattığınız bir ürünü tedarikçiden 550 TL'ye alıyorsanız ürün başı kâr 450 TL, kar marjı 450 / 1.000 = %45'tir. Aynı formül toplam rakamlarla da çalışır: ay boyunca 500.000 TL satış yapıp satılan malın maliyeti 275.000 TL ise brüt kar marjı yine %45'tir. (Yazıdaki tüm tutarlar örnek tutarlardır ve vergi hesabı içermez.)",
          "Hangi maliyeti düştüğünüz, hangi marjı bulduğunuzu belirler: yalnızca ürün maliyetini düşerseniz brüt marj, satış başına değişken giderleri de düşerseniz katkı marjı, işletme giderlerini de düşerseniz faaliyet marjı elde edersiniz. Aşağıda dördünü aynı ürün üzerinde gösteriyorum.",
        ],
      },
      {
        heading: "Kar marjı ile kar oranı (markup) arasındaki fark nedir?",
        paragraphs: [
          "Kar marjı kârı satış fiyatına, kar oranı (markup, maliyet üzerine kâr oranı) kârı maliyete böler. Aynı 450 TL kâr, 1.000 TL'lik satış fiyatına göre %45, 550 TL'lik maliyete göre %81,8'dir. İkisi de doğrudur ama farklı soruları cevaplar: markup 'maliyete ne kadar ekledim?', marj 'satıştan ne kadar kaldı?' sorusunu.",
          "Karışıklık pahalıdır: tedarikçiniz '%50 kârla satıyorum' derken markup'ı, siz bütçe planında %50 marjı düşünüyorsanız gerçekte elinizde satışın yalnızca üçte biri kalır. Reklam ve fiyatlandırma hesaplarında (başabaş ROAS, maks. CPA, indirim kararı) her zaman satış fiyatına göre olan kar marjı kullanılır.",
        ],
        bullets: [
          "Kar marjı = Kâr / Satış fiyatı",
          "Kar oranı (markup) = Kâr / Maliyet",
          "Markup'tan marja: Marj = Markup / (1 + Markup) → %50 markup = 0,5 / 1,5 = %33,3 marj",
          "Marjdan markup'a: Markup = Marj / (1 − Marj) → %40 marj = 0,4 / 0,6 = %66,7 markup",
          "Marj hiçbir zaman %100'e ulaşamaz; markup %100'ü rahatça geçebilir",
        ],
      },
      {
        heading: "Kar oranı ve kar marjı dönüşüm tablosu",
        paragraphs: [
          "Sık kullanılan markup değerlerinin marj karşılıkları aşağıda. Tedarikçi fiyat listeleri ve toptan satış görüşmelerinde markup, finansal raporlarda ve reklam hesaplarında marj konuşulur; tabloyu iki dil arasında çeviri için kullanın.",
        ],
        bullets: [
          "%25 markup = %20 marj",
          "%33,3 markup = %25 marj",
          "%50 markup = %33,3 marj",
          "%66,7 markup = %40 marj",
          "%100 markup (maliyetin iki katına satış) = %50 marj",
          "%150 markup = %60 marj",
          "%200 markup (maliyetin üç katına satış) = %66,7 marj",
        ],
      },
      {
        heading: "Hedef kar marjına göre satış fiyatı nasıl belirlenir?",
        paragraphs: [
          "Hedef marjdan fiyata giden formül: Satış fiyatı = Maliyet / (1 − Hedef marj). 600 TL'ye mal olan bir üründe %40 marj istiyorsanız fiyat 600 / 0,60 = 1.000 TL olmalıdır; kâr 400 TL, marj 400 / 1.000 = %40.",
          "En yaygın hata maliyetin üzerine hedef yüzdeyi eklemektir: 600 × 1,40 = 840 TL. Bu fiyatta kâr 240 TL, marj ise 240 / 840 = %28,6'dır; hedefin yaklaşık 11 puan altında kalırsınız. Kampanya fiyatı, toptan fiyat ya da pazaryeri fiyatı belirlerken bu formülü maliyete her değişken gideri ekledikten sonra uygulayın.",
        ],
      },
      {
        heading: "Brüt, katkı, faaliyet ve net kar marjı: aynı üründe dört marj",
        paragraphs: [
          "'Kar marjı' tek bir sayı değildir; hangi maliyetleri düştüğünüze göre merdivenin farklı basamaklarında durursunuz. Örnek e-ticaret ürünü: satış fiyatı 1.000 TL, ürün maliyeti 550 TL; sipariş başına kargo 70 TL, ödeme komisyonu 30 TL, paketleme 15 TL, iade payı 25 TL; sipariş başı reklam 120 TL; mağaza ayda 1.000 sipariş alıyor ve kira, maaş, yazılım gibi işletme giderleri aylık 150.000 TL (sipariş başı 150 TL).",
          "Brüt marj (%45) fiyatlandırma ve tedarik gücünü, katkı marjı (%31) bir siparişin reklama ve sabit giderlere bıraktığı parayı gösterir. Reklam sonrası %19 kalıyor ve işletme giderlerinden sonra faaliyet marjı %4'e iniyor. Brüt marja bakıp 'kârlıyız' diyen birçok mağaza bu merdivenin alt basamaklarında zarar eder. Net kar marjı ise faaliyet kârından finansman giderleri gibi kalemler de düşüldükten sonra kalan oranı ifade eder; bu yazıda o hesaba girmiyorum.",
        ],
        bullets: [
          "Brüt kar marjı = (1.000 − 550) / 1.000 = %45",
          "Katkı marjı = (1.000 − 550 − 70 − 30 − 15 − 25) / 1.000 = 310 / 1.000 = %31",
          "Reklam sonrası katkı = (310 − 120) / 1.000 = %19",
          "Faaliyet kar marjı = (190 − 150) / 1.000 = %4",
        ],
      },
      {
        heading: "Pazaryerinde kar marjı nasıl hesaplanır?",
        paragraphs: [
          "Pazaryerinde satış fiyatından komisyon ve kargo kesildiği için brüt marjla katkı marjı arasındaki fark büyür. Aynı ürünü pazaryerinde 1.000 TL'ye, örnek olarak %20 komisyon ve 90 TL kargo bedeliyle sattığınızı düşünün: 1.000 − 550 − 200 − 90 = 160 TL katkı, yani %16 katkı marjı. Kendi sitenizdeki %31'in yarısıdır.",
          "Kargo bedeli ürünün desisine göre değişir; kutuyu birkaç santim küçültmek desiyi ve dolayısıyla marjı değiştirebilir. Komisyon oranı kategoriye göre farklıdır; güncel oranı pazaryerinin satıcı panelinden kontrol edin. Komisyon, kargo, iade ve reklam dahil sipariş başı net kârı Trendyol & Hepsiburada kâr hesaplama aracıyla, kargo desisini desi hesaplama aracıyla bulabilirsiniz.",
        ],
      },
      {
        heading: "İndirim kar marjını nasıl etkiler?",
        paragraphs: [
          "İndirim yüzdesi doğrudan marjdan düşer, ama kârı çok daha sert keser. 1.000 TL'lik, 550 TL maliyetli üründe %20 indirimle fiyat 800 TL olur: brüt kâr 450 TL'den 250 TL'ye (%44 düşüş), brüt marj %45'ten %31,25'e iner.",
          "Aynı toplam brüt kârı korumak için gereken satış artışı: Gerekli satış çarpanı = Marj / (Marj − İndirim). Örnekte 0,45 / (0,45 − 0,20) = 1,8; yani indirimle %80 daha fazla adet satmanız gerekir. İndirim oranı marja yaklaştıkça çarpan hızla büyür; %40 indirimde 9 kat satış gerekir. Kampanya döneminde katkı marjı daha düşük olduğu için hesabı katkı marjıyla yapmak daha güvenlidir.",
        ],
      },
      {
        heading: "Kar marjı ile ROAS arasındaki bağlantı: başabaş ROAS",
        paragraphs: [
          "Reklamda zarar etmeden harcayabileceğiniz tutar katkı marjıyla sınırlıdır. Başabaş ROAS = 1 / Katkı marjı. Örnek üründe katkı marjı %31 olduğu için başabaş ROAS 1 / 0,31 ≈ 3,23'tür: 1.000 TL'lik satış için en fazla 310 TL reklam harcanabilir.",
          "Örnekteki 120 TL'lik sipariş başı reklam 1.000 / 120 ≈ 8,3 ROAS demektir ve başabaşın rahatça üzerindedir. Marjı %31'den %20'ye düşüren bir indirim kampanyasında başabaş ROAS 5'e çıkar; reklam panelindeki hedefi buna göre güncellemezseniz kampanya ciro getirirken zarar ettirir. Başabaş ve hedef ROAS'ı ROAS hesaplama aracıyla birlikte görebilirsiniz.",
        ],
      },
      {
        heading: "Kar marjı Excel'de nasıl hesaplanır?",
        paragraphs: [
          "Satış fiyatı B sütununda, maliyet C sütununda ise D2 hücresine =(B2-C2)/B2 yazıp hücreyi yüzde biçimine getirin. Markup için =(B2-C2)/C2, hedef marjdan fiyat için (hedef marj E2'deyse) =C2/(1-E2) kullanın.",
          "Ürün listesinde maliyete kargo, komisyon ve iade payını da ayrı sütunlar olarak ekleyip katkı marjını hesaplamak, hangi ürünlerin reklama dayanabileceğini tek bakışta gösterir. Toplam marj kârlı ve zararlı ürünlerin ortalamasını gizler; kararları ürün ya da kategori bazında verin.",
        ],
      },
      {
        heading: "Kar marjı yüzde kaç olmalı?",
        paragraphs: [
          "Herkese uyan bir oran yoktur; doğru soru 'marjım giderlerimi taşıyor mu?' sorusudur. Asgari katkı marjı, sipariş başı reklam maliyetiyle sipariş başı işletme giderinin toplamını karşılamalıdır. Örnekte bu toplam 120 + 150 = 270 TL, yani satışın %27'si; %31 katkı marjı bunu ancak 4 puanla aşıyor.",
          "Marjı yükseltmenin dört yolu vardır: fiyatı artırmak, ürün maliyetini düşürmek (tedarikçi, sipariş adedi), sipariş başı değişken giderleri düşürmek (kargo desisi, iade oranı, ödeme komisyonu) ve sepet tutarını büyütmek (kargo gibi sabit kalemler büyük sepette daha küçük bir paya düşer). Hangisinin en hızlı etki edeceğini katkı marjı merdiveni gösterir.",
        ],
      },
    ],
    faq: [
      {
        question: "Kar marjı hesaplama formülü nedir?",
        answer:
          "Kar marjı (%) = (Satış fiyatı − Maliyet) / Satış fiyatı × 100. 1.000 TL'ye satılan ve 550 TL'ye mal olan üründe (1.000 − 550) / 1.000 = %45'tir.",
      },
      {
        question: "Kar marjı ile kar oranı aynı şey mi?",
        answer:
          "Hayır. Kar marjı kârı satış fiyatına, kar oranı (markup) kârı maliyete böler. 550 TL'ye alınıp 1.000 TL'ye satılan üründe marj %45, kar oranı %81,8'dir. Dönüşüm: Marj = Markup / (1 + Markup).",
      },
      {
        question: "%30 kar marjı için satış fiyatı nasıl hesaplanır?",
        answer:
          "Satış fiyatı = Maliyet / (1 − 0,30). 700 TL maliyetli bir ürün için 700 / 0,70 = 1.000 TL. Maliyete %30 eklemek (910 TL) yalnızca yaklaşık %23 marj bırakır.",
      },
      {
        question: "Brüt kar marjı ile net kar marjı arasındaki fark nedir?",
        answer:
          "Brüt kar marjı yalnızca satılan malın maliyetini düşer ve ürün düzeyindeki kârlılığı gösterir. Net kar marjı tüm işletme giderleri ve diğer kalemler düşüldükten sonra kalan oranı gösterir. E-ticarette ikisinin arasında, kargo, komisyon ve iade sonrası katkı marjına bakmak reklam kararları için en kullanışlısıdır.",
      },
      {
        question: "Kar marjı negatif çıkarsa ne anlama gelir?",
        answer:
          "Satış fiyatının, düştüğünüz maliyetlerin altında kaldığını gösterir. Brüt marj negatifse ürün maliyetinin altında satılıyordur; katkı marjı negatifse kargo, komisyon ve iade sonrası her sipariş zarar ettiriyordur. Fiyat, maliyet ya da kargo/komisyon yapısı gözden geçirilmelidir.",
      },
    ],
    howTo: {
      name: "Kar marjı nasıl hesaplanır?",
      description: "Satış fiyatı ve maliyetle kar marjını, kar oranını ve hedef marja göre satış fiyatını bulun.",
      steps: [
        { name: "Satış fiyatını ve maliyeti belirleyin", text: "Ürünün satış fiyatını ve hangi marjı hesaplayacaksanız ona uygun maliyeti alın (brüt marj için ürün maliyeti, katkı marjı için kargo, komisyon ve iade dahil)." },
        { name: "Kârı bulun", text: "Satış fiyatından maliyeti çıkarın: 1.000 − 550 = 450 TL." },
        { name: "Satış fiyatına bölün", text: "Kârı satış fiyatına bölüp 100 ile çarpın: 450 / 1.000 × 100 = %45 kar marjı." },
        { name: "Gerekirse kar oranına çevirin", text: "Kârı maliyete bölerek markup'ı bulun: 450 / 550 = %81,8; ya da Markup = Marj / (1 − Marj) formülünü kullanın." },
        { name: "Hedef marjdan fiyat belirleyin", text: "Satış fiyatı = Maliyet / (1 − Hedef marj). 600 TL maliyet ve %40 hedef marj için 1.000 TL." },
      ],
    },
    relatedToolKey: "gross-margin",
    resources: [
      { label: "Kar Marjı Hesaplama: Brüt Kar Marjı Hesaplayıcı", href: "/ucretsiz-araclar/brut-kar-marji-hesaplayici/" },
      { label: "Net Kar Marjı Hesaplayıcı", href: "/ucretsiz-araclar/net-kar-marji-hesaplayici/" },
      { label: "ROAS Hesaplama: ROAS ve Başabaş ROAS Hesaplayıcı", href: "/ucretsiz-araclar/roas-hesaplayici/" },
      { label: "Trendyol Komisyon ve Kâr Hesaplama (+ Hepsiburada)", href: "/ucretsiz-araclar/trendyol-hepsiburada-kar-hesaplama/" },
      { label: "Desi Hesaplama: Kargo Desi Hesaplama Aracı", href: "/ucretsiz-araclar/desi-hesaplama/" },
      { label: "ROAS Nedir, Nasıl Hesaplanır?", href: "/blog/roas-nedir-nasil-hesaplanir/" },
      { label: "Hedef ROAS Nasıl Belirlenir?", href: "/blog/hedef-roas-nasil-belirlenir/" },
      { label: "Black Friday 2026 Reklam Planı", href: "/blog/black-friday-2026-reklam-plani/" },
      { label: "CAC Nedir? Müşteri Edinme Maliyeti Nasıl Hesaplanır?", href: "/blog/cac-nedir-musteri-edinme-maliyeti/" },
      { label: "Penn State Extension: Markup ile kâr arasındaki fark (İngilizce)", href: "https://extension.psu.edu/whats-the-difference-between-markup-and-profit", external: true },
    ],
  },
  {
    slug: "mrr-nedir-nasil-hesaplanir",
    seoTitle: "MRR Nedir? Aylık Yinelenen Gelir Nasıl Hesaplanır?",
    title: "MRR Nedir, Nasıl Hesaplanır? Aylık Yinelenen Gelir, MRR Hareketleri ve Örnek Hesap",
    description:
      "MRR (aylık yinelenen gelir) nedir, nasıl hesaplanır? Yıllık plan, indirim ve kur etkisi, yeni/genişleme/kayıp MRR köprüsü, Quick Ratio ve adım adım örnek.",
    category: "saas-buyume",
    tldr: [
      "MRR (Monthly Recurring Revenue, aylık yinelenen gelir), abonelik müşterilerinden her ay düzenli olarak tekrar etmesi beklenen gelirin aylık karşılığıdır. Formül: MRR = Σ (her planın aylık fiyatı × o plandaki aktif hesap). Örnek şirkette 90.000 + 48.000 + 22.500 = 160.500 TL.",
      "Yıllık planlar 12'ye, 3 aylık planlar 3'e bölünür; haftalık plan × 52 / 12 ile aylığa çevrilir. Kurulum, eğitim ve danışmanlık gibi tek seferlik gelirler ile tahsil edilen yıllık peşin ödemenin tamamı MRR'ye yazılmaz.",
      "Toplam MRR'yi değil, hareketlerini izleyin: Net yeni MRR = Yeni + Genişleme + Yeniden aktivasyon − Daralma − Kayıp. Örnekte 12.400 + 4.500 + 1.200 − 2.700 − 6.200 = 9.200 TL; MRR %5,7 büyüdü.",
      "Aynı ay SaaS Quick Ratio yalnızca 2,0 (kaynaklar 4'ü güçlü kabul ediyor) ve brüt MRR churn %5,5: büyüme var ama kova sızdırıyor. Fiyatı dolar olan SaaS'ta MRR'yi sabit kurla da raporlayın; yoksa kur artışı büyüme gibi görünür.",
    ],
    publishedAt: "2026-10-29",
    readingMinutes: 9,
    tags: ["MRR", "Aylık Yinelenen Gelir", "SaaS Metrikleri", "Net Yeni MRR", "Quick Ratio", "ARR"],
    sections: [
      {
        heading: "MRR nedir? (Kısa cevap)",
        paragraphs: [
          "MRR (Monthly Recurring Revenue), Türkçesiyle aylık yinelenen (tekrarlayan) gelir, abonelik modelinde çalışan bir işletmenin aktif aboneliklerinden her ay düzenli olarak elde etmeyi beklediği gelirin aylık karşılığıdır. SaaS şirketleri, mobil uygulamalar, üyelik siteleri ve abonelik kutusu satan e-ticaret markaları için temel büyüme metriğidir.",
          "Formül: MRR = Σ (Planın aylık fiyatı × O plandaki aktif hesap sayısı). Tek plan varsa MRR = Aktif hesap × ARPA (hesap başına ortalama aylık gelir). MRR bir ayın faturası ya da kasaya giren para değildir; o anki abonelik tabanının aylık gelir gücünü gösteren bir fotoğraftır.",
          "MRR'nin yıllık karşılığı ARR'dir: ARR = MRR × 12. Bu yazıdaki tüm tutarlar örnek tutarlardır ve hesaplar tek bir örnek şirket üzerinden ilerler; kendi rakamlarınızla denemek için MRR Hesaplayıcı'yı kullanabilirsiniz.",
        ],
      },
      {
        heading: "MRR nasıl hesaplanır? Adım adım örnek",
        paragraphs: [
          "Örnek şirket Türkiye'de satış yapan bir B2B SaaS. Ekim başında 215 aktif hesabı var ve üç planı bulunuyor. Hesap her planın aylık karşılığını o plandaki hesap sayısıyla çarpıp toplamaktır.",
          "Toplam: 90.000 + 48.000 + 22.500 = 160.500 TL MRR. Hesap başına ortalama gelir (ARPA) 160.500 / 215 ≈ 747 TL, ARR ise 160.500 × 12 = 1.926.000 TL'dir. Aynı ay 15.000 TL kurulum ve eğitim ücreti faturalandı; bu tutar tekrar etmediği için MRR'ye eklenmez.",
        ],
        bullets: [
          "Başlangıç planı (aylık 600 TL): 150 hesap × 600 = 90.000 TL",
          "Pro plan (aylık 900 TL ya da yıllık peşin 9.600 TL; Ekim başında 60 hesabın tamamı yıllık → aylık karşılığı 9.600 / 12 = 800 TL): 60 hesap × 800 = 48.000 TL",
          "Kurumsal plan (aylık 4.500 TL sözleşme): 5 hesap × 4.500 = 22.500 TL",
          "Tek seferlik kurulum/eğitim (15.000 TL): MRR'ye dahil değil",
        ],
      },
      {
        heading: "MRR'ye neler dahil edilir, neler edilmez?",
        paragraphs: [
          "Kural basittir: müşteri hiçbir şey yapmasa da gelecek ay tekrar edecek, sözleşmeye bağlı gelir MRR'dir. Bir kez olan ya da miktarı her ay belirsiz olan gelir MRR değildir.",
        ],
        bullets: [
          "Dahil: aylık abonelik ücretleri; yıllık, 6 aylık ve 3 aylık planların aylık karşılığı; sürekli faturalanan ek modüller ve ek kullanıcı paketleri",
          "Dahil (ödenen fiyattan): indirimli abonelikler — liste fiyatı değil, müşterinin gerçekten ödediği aylık tutar yazılır",
          "Dahil değil: kurulum, eğitim, danışmanlık, entegrasyon gibi tek seferlik hizmetler; tek seferlik ürün satışları",
          "Dahil değil: ücretsiz deneme kullanıcıları (ilk ödemeyle yeni MRR olurlar) ve ücretsiz (freemium) plan",
          "Ayrı izleyin: kullanım bazlı (aşım) ücretler — sözleşmedeki sabit taban ücret MRR'ye, değişken kullanım ayrı satıra",
          "Dikkat: iptal talebi gelmiş ama dönem sonuna kadar ödenmiş abonelik, iptalin geçerli olduğu aya kadar MRR'de kalır; o ay kayıp (churn) MRR olarak düşülür",
        ],
      },
      {
        heading: "Yıllık, 3 aylık ve haftalık planlar MRR'ye nasıl çevrilir?",
        paragraphs: [
          "MRR'nin anlamlı olması için her faturalama dönemi aylığa normalize edilmelidir. Yıllık peşin ödenen bir planın tamamını ödeme ayının MRR'sine yazmak, o ay MRR'yi sıçratır ve sonraki 11 ay düşüyormuş gibi gösterir.",
          "Örnek şirkette Ekim'de 8 Pro hesap yıllık yenilemesini yaptı ve kasaya 8 × 9.600 = 76.800 TL girdi. Bu hesaplar zaten MRR'deydi; MRR'ye katkıları değişmedi (8 × 800 = 6.400 TL). Tahsilat raporu Ekim'i parlak gösterir, MRR ise doğru olarak 'değişiklik yok' der.",
        ],
        bullets: [
          "Yıllık plan: Aylık karşılık = Yıllık bedel / 12 (9.600 TL → 800 TL)",
          "6 aylık plan: Bedel / 6; 3 aylık plan: Bedel / 3",
          "Haftalık plan: Haftalık fiyat × 52 / 12 (49 TL/hafta ≈ 212 TL/ay). Haftayı 4 ile çarpmak MRR'yi yaklaşık %8 düşük gösterir",
          "Çok yıllı sözleşme: yıllık değeri 12'ye bölün; peşin alınan 2–3 yıllık tutarı tek ayda göstermeyin",
        ],
      },
      {
        heading: "MRR hareketleri nelerdir? Yeni, genişleme, daralma ve kayıp MRR",
        paragraphs: [
          "Toplam MRR tek başına büyümenin nereden geldiğini ve nereden sızdığını göstermez. Bu yüzden her ay MRR'deki değişim beş harekete ayrılır ve bir 'MRR köprüsü' kurulur.",
          "Örnek şirketin Ekim hareketleri: 18 yeni Başlangıç hesabı (18 × 600 = 10.800 TL) ve 2 yeni Pro hesabı (2 × 800 = 1.600 TL) ile yeni MRR 12.400 TL. 10 hesap Başlangıç'tan aylık 900 TL'lik Pro'ya geçti (10 × 300 = 3.000 TL) ve bir kurumsal müşteri ek kullanıcı paketi aldı (1.500 TL): genişleme 4.500 TL. Daha önce ayrılmış 2 Başlangıç hesabı geri döndü: yeniden aktivasyon 1.200 TL. Bir kurumsal müşteri sözleşmesini 4.500 TL'den 3.000 TL'ye indirdi (1.500 TL) ve 6 hesap kullanıcı sayısını azalttı (6 × 200 = 1.200 TL): daralma 2.700 TL. 9 Başlangıç hesabı iptal etti (5.400 TL) ve 1 Pro hesap yenilemedi (800 TL): kayıp 6.200 TL.",
        ],
        bullets: [
          "Yeni MRR (New): ilk kez ödeme yapan hesaplardan gelen MRR — 12.400 TL",
          "Genişleme MRR (Expansion): mevcut hesapların üst plana geçişi, ek kullanıcı/modül alımı — 4.500 TL",
          "Yeniden aktivasyon MRR (Reactivation): daha önce ayrılıp geri dönen hesaplar — 1.200 TL",
          "Daralma MRR (Contraction): mevcut hesapların alt plana geçişi, kullanıcı azaltması — 2.700 TL",
          "Kayıp MRR (Churned): iptal eden ya da yenilemeyen hesapların MRR'si — 6.200 TL",
        ],
      },
      {
        heading: "Net yeni MRR ve MRR büyüme oranı nasıl hesaplanır?",
        paragraphs: [
          "Net yeni MRR = Yeni + Genişleme + Yeniden aktivasyon − Daralma − Kayıp. Örnekte 12.400 + 4.500 + 1.200 − 2.700 − 6.200 = 9.200 TL. Köprü şöyle kapanır: Başlangıç MRR 160.500 TL + 9.200 TL = Bitiş MRR 169.700 TL. Ay sonunda 227 aktif hesap var (215 + 20 yeni + 2 geri dönen − 10 ayrılan); ARPA ≈ 748 TL, ARR 169.700 × 12 = 2.036.400 TL.",
          "Aylık MRR büyüme oranı = Net yeni MRR / Başlangıç MRR = 9.200 / 160.500 ≈ %5,7. Birkaç aylık dönemde tek tek ayların ortalaması yerine bileşik aylık büyüme oranı (CMGR) daha doğrudur: CMGR = (Son MRR / İlk MRR)^(1 / ay sayısı) − 1. Nisan sonunda 120.000 TL olan MRR Ekim sonunda 169.700 TL'ye çıktıysa 6 aylık CMGR (169.700 / 120.000)^(1/6) − 1 ≈ %5,9'dur.",
        ],
      },
      {
        heading: "MRR büyümesi sağlıklı mı? Quick Ratio, MRR churn ve NRR",
        paragraphs: [
          "Aylık %5,7 büyüme iyi görünür; ama büyümenin kalitesini anlamak için aynı köprüden üç oran daha çıkarılır. Bu oranlar, yeni satışın churn'ü maskelediği durumları ortaya çıkarır.",
          "Örnek şirkette büyüme yeni satıştan geliyor; mevcut müşteri tabanı ise her ay küçülüyor (aylık NRR %100'ün altında). Yeni satış yavaşladığı ay MRR de düşmeye başlar. Öncelik kayıp ve daralmanın nedenlerini (ilk 90 gün aktivasyonu, Başlangıç planındaki ayrılma) bulmaktır. Churn oranını ve gelir kaybını ayrıca Churn Rate Hesaplayıcı ile, NRR'yi NRR Hesaplayıcı ile izleyebilirsiniz.",
        ],
        bullets: [
          "SaaS Quick Ratio = (Yeni + Genişleme + Yeniden aktivasyon) / (Daralma + Kayıp) = 18.100 / 8.900 ≈ 2,0. Yatırımcı Mamoon Hamid'in yaygınlaştırdığı bu oranda 4 ve üzeri verimli büyüme kabul edilir; 1'in altı küçülme demektir",
          "Brüt MRR churn = (Daralma + Kayıp) / Başlangıç MRR = 8.900 / 160.500 ≈ %5,5 (aylık)",
          "Net MRR churn = (Daralma + Kayıp − Genişleme) / Başlangıç MRR = 4.400 / 160.500 ≈ %2,7; genişleme kaybı aşarsa negatif churn olur",
          "Aylık NRR = (Başlangıç + Genişleme − Daralma − Kayıp) / Başlangıç = 156.100 / 160.500 ≈ %97,3",
          "Logo (müşteri) churn = Ayrılan hesap / Başlangıç hesap = 10 / 215 ≈ %4,7; gelir churn'ünden farklıdır, ikisini birlikte izleyin",
        ],
      },
      {
        heading: "İndirim, deneme sürümü ve kur farkı MRR'yi nasıl etkiler?",
        paragraphs: [
          "İndirim: 3 ay boyunca %25 indirimle 450 TL ödeyen 20 Başlangıç hesabı MRR'ye 20 × 450 = 9.000 TL yazılır, 12.000 TL değil. İndirim bittiğinde 3.000 TL'lik artış hareket raporunda genişleme gibi görünür; gerçek upsell ile karıştırmamak için 'indirim bitişi' olarak ayrı etiketleyin.",
          "Deneme: ücretsiz deneme sürecindeki hesaplar MRR'ye girmez; ilk ödemeyle yeni MRR olur. Deneme sayısını MRR yerine deneme→ücretli dönüşüm oranıyla izleyin. İade: iade edilen bir abonelik, iadenin yapıldığı ay kayıp MRR olarak düşülür; geçmiş ayları geriye dönük değiştiren araçlar da vardır, hangi yöntemi kullandığınızı not edin.",
          "Kur: fiyatı dolar olan ve TL'ye çevrilerek raporlanan bir SaaS'ta kur değişimi MRR'yi yeni müşteri olmadan oynatır. 2.000 USD MRR, örnek kur 40'tan 42'ye çıktığında TL karşılığı 80.000 TL'den 84.000 TL'ye yükselir; bu %5'lik 'büyüme' tek bir satış yapılmadan gelir. Çözüm: MRR'yi hem fatura para biriminde hem de dönem başı (sabit) kurla raporlayın ve kur etkisini ayrı satır olarak gösterin.",
        ],
      },
      {
        heading: "E-ticaret abonelik modelinde MRR nasıl hesaplanır?",
        paragraphs: [
          "MRR yalnızca SaaS'a özgü değildir. Kahve, mama ya da kozmetik aboneliği satan bir e-ticaret markasında da formül aynıdır: MRR = Σ (aktif abonelik sayısı × aylık karşılık). Aylık 450 TL'lik kutuya 800 abone ve 3 ayda bir gönderilen 1.200 TL'lik pakete 300 abone varsa MRR = 800 × 450 + 300 × (1.200 / 3) = 360.000 + 120.000 = 480.000 TL olur.",
          "E-ticarette iki fark vardır. Birincisi, aboneliğini 'duraklatan' müşteriler duraklama süresince MRR'den çıkarılır ve döndüklerinde yeniden aktivasyon olarak eklenir. İkincisi, MRR gelir metriğidir, kâr değil: ürün, kargo ve paketleme maliyeti yüksek abonelik modellerinde kararları katkı marjıyla verin.",
        ],
      },
      {
        heading: "MRR ile ARR, ciro ve nakit arasındaki fark nedir?",
        paragraphs: [
          "Dört kavram sık karıştırılır ve aynı ay için dört farklı rakam üretir. Örnek şirkette Ekim'de bitiş MRR 169.700 TL iken kasaya yıllık yenilemeler ve kurulum ücretleriyle çok daha fazla para girmiştir.",
        ],
        bullets: [
          "MRR: abonelik tabanının aylık gelir gücü (normalize edilmiş, tek seferlikler hariç) — 169.700 TL",
          "ARR: MRR × 12 — 2.036.400 TL. Planlama ve yatırımcı raporu için; ayrıntı için ARR ile MRR farkı yazısına bakın",
          "Ciro (muhasebe geliri): yinelenen ve tek seferlik tüm gelirler; yıllık peşin ödemeler muhasebede dönemlere yayılır",
          "Nakit tahsilat: kasaya o ay giren para; yıllık peşin ödemeler ve kurulum ücretleri yüzünden MRR'den çok farklı olabilir",
        ],
      },
      {
        heading: "MRR hesaplarken en sık yapılan hatalar",
        paragraphs: [
          "MRR'yi bozan hatalar genellikle formülde değil tanımlardadır. Ekip içinde bir kez yazılı tanım yapıp her ay aynısını uygulamak, rakamın güvenilirliğini sağlar.",
        ],
        bullets: [
          "Yıllık peşin ödemenin tamamını ödeme ayının MRR'sine yazmak",
          "Kurulum, eğitim, danışmanlık ya da tek seferlik ürün satışını MRR'ye eklemek",
          "İndirimli hesapları liste fiyatından saymak",
          "Deneme kullanıcılarını ya da ödeme alınamayan (başarısız tahsilat) hesapları süresiz aktif saymak",
          "Kur etkisini büyüme sanmak; sabit kurla karşılaştırma yapmamak",
          "Yalnızca toplam MRR'ye bakıp yeni / genişleme / daralma / kayıp kırılımını izlememek",
        ],
      },
    ],
    faq: [
      {
        question: "MRR açılımı nedir, Türkçesi ne?",
        answer:
          "MRR, Monthly Recurring Revenue'nun kısaltmasıdır; Türkçede aylık yinelenen gelir ya da aylık tekrarlayan gelir denir. Abonelik müşterilerinden her ay düzenli olarak tekrar etmesi beklenen gelirin aylık karşılığını gösterir.",
      },
      {
        question: "MRR nasıl hesaplanır?",
        answer:
          "Her planın aylık fiyatını o plandaki aktif hesap sayısıyla çarpıp toplayın; yıllık planları 12'ye, 3 aylık planları 3'e bölerek ekleyin. Örnek: 150 × 600 + 60 × (9.600 / 12) + 5 × 4.500 = 160.500 TL. Tek seferlik gelirler hesaba katılmaz.",
      },
      {
        question: "Net yeni MRR nedir?",
        answer:
          "Bir ayda MRR'nin net değişimidir: Yeni + Genişleme + Yeniden aktivasyon − Daralma − Kayıp MRR. Örnekte 12.400 + 4.500 + 1.200 − 2.700 − 6.200 = 9.200 TL'dir; başlangıç MRR'ye eklendiğinde bitiş MRR'yi verir.",
      },
      {
        question: "MRR ile ARR arasındaki fark nedir?",
        answer:
          "ARR, MRR'nin yıllık karşılığıdır: ARR = MRR × 12. MRR aylık operasyon kararları (fiyat, kampanya, churn) için, ARR planlama, bütçe ve yatırımcı raporlaması için kullanılır. İkisi de tek seferlik gelirleri içermez.",
      },
      {
        question: "İyi bir MRR büyüme oranı kaç olmalı?",
        answer:
          "Herkes için geçerli tek bir oran yoktur; şirketin büyüklüğüne ve aşamasına göre değişir. Oranın yanında büyümenin kalitesine bakın: SaaS Quick Ratio 4 ve üzeri, brüt MRR churn düşük ve NRR %100'ün üzerindeyse büyüme sağlıklıdır.",
      },
    ],
    howTo: {
      name: "MRR nasıl hesaplanır?",
      description: "Planları aylığa normalize edip MRR'yi bulun, ardından aylık MRR hareketleriyle net yeni MRR'yi ve büyüme oranını hesaplayın.",
      steps: [
        { name: "Aktif hesapları plana göre listeleyin", text: "Ay başında ödeme yapan aktif hesapları planlara ayırın; deneme ve ücretsiz plan kullanıcılarını dışarıda bırakın." },
        { name: "Her planı aylığa çevirin", text: "Yıllık bedeli 12'ye, 3 aylık bedeli 3'e bölün, haftalık fiyatı 52/12 ile çarpın; indirimli hesaplarda ödenen tutarı kullanın." },
        { name: "MRR'yi toplayın", text: "Her planın aylık karşılığını hesap sayısıyla çarpıp toplayın. 90.000 + 48.000 + 22.500 = 160.500 TL." },
        { name: "Ay içindeki hareketleri ayırın", text: "Yeni, genişleme, yeniden aktivasyon, daralma ve kayıp MRR'yi ayrı ayrı toplayın." },
        { name: "Net yeni MRR ve oranları hesaplayın", text: "Net yeni MRR'yi başlangıç MRR'ye ekleyip bitiş MRR'yi bulun; büyüme oranı, Quick Ratio ve MRR churn'ü hesaplayın." },
      ],
    },
    relatedToolKey: "mrr",
    resources: [
      { label: "MRR Hesaplayıcı", href: "/ucretsiz-araclar/mrr-hesaplayici/" },
      { label: "ARR Hesaplayıcı", href: "/ucretsiz-araclar/arr-hesaplayici/" },
      { label: "ARPA Hesaplayıcı", href: "/ucretsiz-araclar/arpa-hesaplayici/" },
      { label: "NRR Hesaplayıcı", href: "/ucretsiz-araclar/nrr-hesaplayici/" },
      { label: "Churn Rate Hesaplayıcı", href: "/ucretsiz-araclar/churn-rate-hesaplayici/" },
      { label: "NRR Nedir? SaaS'ta Neden ARR'dan Daha Önemli?", href: "/blog/nrr-nedir-saas-buyume-metrigi/" },
      { label: "SaaS Metrikleri: ARR, CAC ve LTV", href: "/blog/saas-metrikleri-arr-cac-ltv/" },
      { label: "CAC Nedir? Müşteri Edinme Maliyeti Nasıl Hesaplanır?", href: "/blog/cac-nedir-musteri-edinme-maliyeti/" },
      { label: "LTV Nedir? LTV:CAC Oranı Kaç Olmalı?", href: "/blog/ltv-nedir-ltv-cac-orani/" },
      { label: "Kar Marjı Hesaplama", href: "/ucretsiz-araclar/brut-kar-marji-hesaplayici/" },
      { label: "ChartMogul: SaaS Quick Ratio (İngilizce)", href: "https://chartmogul.com/blog/saas-quick-ratio/", external: true },
      { label: "Tomasz Tunguz: Quick Ratio ne gizliyor? (İngilizce)", href: "https://tomtunguz.com/what-is-quick-ratio-hiding/", external: true },
    ],
  },
];

export function getPostsByCategory(slug: BlogCategorySlug | "all") {
  if (slug === "all") return BLOG_POSTS;
  return BLOG_POSTS.filter((p) => p.category === slug);
}

export function getPostBySlug(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getCategory(slug: BlogCategorySlug) {
  return BLOG_CATEGORIES.find((c) => c.slug === slug)!;
}

// ─────────────────────────────────────────────────────────────────────────────
// English blog content. Each post mirrors a TR counterpart 1:1 via the
// BLOG_SLUG_PAIRS map below, so language switcher + hreflang can point at
// the exact translated URL instead of falling back to /en.
// ─────────────────────────────────────────────────────────────────────────────

// Moved to ./blogSlugPairs.ts (tiny module) so the site header / language
// switcher does not pull the full blog content into every page bundle.
export { BLOG_SLUG_PAIRS } from "./blogSlugPairs";
import { BLOG_SLUG_PAIRS } from "./blogSlugPairs";


export const BLOG_POSTS_EN: BlogPost[] = [
  {
    slug: "b2b-lead-generation-funnel-design",
    title: "How to Design a B2B Lead Generation Funnel: End-to-End Guide",
    description:
      "A practical framework covering ICP definition, channel mix, messaging and CRM integration for qualified B2B lead generation.",
    category: "b2b-lead-generation",
    tldr: [
      "B2B lead gen doesn't come from a single channel — it emerges from ICP + channel + message + CRM working together.",
      "Outbound (LinkedIn + email) and inbound (SEO + content) funnels should feed each other.",
      "Without clear MQL/SQL definitions, lead volume burns your sales team's time and conversion drops.",
      "Automation (n8n, Clay, HubSpot) removes manual work and cuts lead-to-meeting time by 40–60%.",
    ],
    publishedAt: "2026-07-01",
    readingMinutes: 2,
    tags: ["B2B", "Lead Generation", "Outbound", "ABM"],
    sections: [
      {
        heading: "Start with ICP and Buyer Persona",
        paragraphs: [
          "The first requirement of qualified lead generation is being crystal clear about who you sell to. Your ICP (Ideal Customer Profile) should be defined by company size, industry, geography, tech stack and trigger events (funding, hiring, product launches).",
          "Your buyer persona covers the role, responsibilities, KPIs and objections of the decision-makers inside that ICP. Any spend before these two are locked in usually ends in low conversion rates.",
        ],
      },
      {
        heading: "Channel Mix: Outbound + Inbound",
        paragraphs: [
          "In modern B2B, single-channel funnels are fragile. A healthy setup runs outbound (LinkedIn Sales Navigator, cold email), inbound (SEO, blog, LinkedIn organic) and paid (LinkedIn Ads, Google Ads) in parallel.",
        ],
        bullets: [
          "Outbound: short-term pipeline; ICP list + personalized message + multi-touch follow-up.",
          "Inbound: long-term brand + intent traffic; SEO content and thought leadership.",
          "Paid: retargeting and an intent layer; account-based ads to hit the ICP.",
        ],
      },
      {
        heading: "MQL / SQL Definitions and CRM Integration",
        paragraphs: [
          "If marketing and sales aren't speaking the same language, you leak leads at the bottom of the funnel. Lock in MQL (Marketing Qualified Lead) and SQL (Sales Qualified Lead) criteria up front and turn them into a scoring system inside a CRM like HubSpot or Pipedrive.",
        ],
      },
      {
        heading: "The Automation Layer",
        paragraphs: [
          "Doing lead enrichment, data cleanup and messaging triggers manually is a waste of time and money. Automating those steps with n8n, Clay and HubSpot Workflows meaningfully shortens the lead-to-meeting cycle.",
        ],
      },
    ],
    faq: [
      {
        question: "Which channel is most effective for B2B lead gen?",
        answer:
          "It depends on price point and sales cycle. For high-ACV B2B SaaS, LinkedIn outbound + ABM tends to deliver the best ROI; for low ACV, an SEO + PLG funnel is more sustainable.",
      },
      {
        question: "What's the difference between MQL and SQL?",
        answer:
          "An MQL has shown interest through marketing activity (content download, demo request). An SQL is a lead sales has qualified as ready to buy, with budget and timing confirmed.",
      },
      {
        question: "What's a healthy reply rate for B2B outbound email?",
        answer:
          "Industry benchmarks sit around 30–50% open rate and 1–3% reply rate. With ICP-specific personalization and good timing, replies can climb to 8–12%.",
      },
    ],
    relatedToolKey: "utm",
  },
  {
    slug: "google-ads-performance-optimization",
    title: "7 Data-Driven Ways to Multiply Your Google Ads Performance",
    description:
      "Advanced optimization tactics used to lift ROAS across Search, Performance Max and Demand Gen campaigns.",
    category: "performans-pazarlama",
    tldr: [
      "Google Ads performance is the compound of bid strategy + audience signal + creative test cadence.",
      "Asset group segmentation inside PMax typically lifts ROAS by 25–40%.",
      "Smart Bidding cannot work without clean server-side conversion signals (Enhanced Conversions + GA4).",
      "Without a weekly negative keyword and search terms review, budget keeps leaking.",
    ],
    publishedAt: "2026-07-05",
    readingMinutes: 5,
    tags: ["Google Ads", "PMax", "ROAS", "Performance"],
    sections: [
      {
        heading: "1. Get Conversion Tracking Right",
        paragraphs: [
          "Smart Bidding is only as good as the signal you feed it. Without Enhanced Conversions, GA4 server-side tracking and offline conversion import (closed-won deals fed back from the CRM), tROAS/tCPA bidding won't hit target.",
          "The most common mistake I see is counting every form submission as a single 'Lead' conversion. When a newsletter signup and a demo request carry the same weight, the algorithm optimizes toward cheap but worthless conversions. Split your conversion actions, mark only commercially meaningful ones as Primary, and assign each a realistic conversion value.",
          "A simple way to assign B2B values: multiply your average contract value by the historical close rate of that conversion type. If 20% of demo requests close and the average contract is $30,000, the demo conversion is worth $6,000. Fed with that value, tROAS starts optimizing revenue potential instead of raw form counts.",
        ],
      },
      {
        heading: "2. Match the Bid Strategy to Account Maturity",
        paragraphs: [
          "Bid strategy selection is a function of data volume. Below roughly 15–30 conversions per month, switching to tROAS or tCPA too early starves the algorithm of samples and spend becomes volatile. Start with Maximize Conversions, accumulate data, then graduate to a targeted strategy.",
          "Set realistic targets. Entering a tROAS more than 20% above your current average makes the system throttle traffic and lose impression share. Tighten the target gradually (10–15% per week) and allow at least a two-week learning window after every change.",
          "Differentiate by campaign intent: Maximize Clicks or a low tCPA on brand queries, tCPA on generic category searches, tROAS for e-commerce and PMax. Running different strategies across one account is fine; changing the strategy on the same campaign more than once a week is not.",
        ],
      },
      {
        heading: "3. Treat Audience Signals as a Real Asset",
        paragraphs: [
          "In Performance Max and Demand Gen, the audience signal is not targeting — it's a starting hint that decides who the algorithm tests in the first one to two weeks. A PMax campaign launched with a weak signal burns a large share of its budget learning on irrelevant inventory.",
          "Rank your signals: closed-won customer lists (Customer Match), high-intent site visitors (pricing/demo pages), high-value CRM segments, then custom segments built from competitor and category queries. Relying only on in-market and affinity audiences keeps the signal generic.",
        ],
        bullets: [
          "Customer Match: closed-won customers and high-LTV accounts (aim for 1,000+ records)",
          "Site visitors: separate pricing, demo and cart-page segments",
          "Custom segments: competitor brand queries + category queries + competitor domains",
          "Exclusions: existing customers, job applicants, resellers and suppliers",
        ],
      },
      {
        heading: "4. Performance Max Asset Group Segmentation",
        paragraphs: [
          "Instead of one giant asset group, splitting by category, margin or season gives the algorithm cleaner signal. Budget flows to high-margin products and ROAS typically lifts 25–40%.",
          "When you segment, give each asset group its own audience signal, its own headline set and its own feed filter. Copying the same creatives and copy into every group cancels out the benefit. In e-commerce, splitting the feed into three margin tiers (high, mid, low) alone produces a measurable gain in most accounts.",
        ],
      },
      {
        heading: "5. Put the Creative Test Loop on a Calendar",
        paragraphs: [
          "In Google Ads the performance ceiling is usually set by creative, not bidding. Filling all 15 responsive search ad headlines is not enough; split headlines into four themes — benefit, social proof, price/offer and objection handling — and track which theme earns the 'Best' performance label.",
          "A loop that works: audit assets every two weeks, replace anything labeled 'Low', and refresh at most 30% of assets per cycle. Swapping everything at once resets learning. On PMax, keep at least 5 images, 2 videos and 3 logo variants per asset group; if you supply no video, Google auto-generates one and quality usually falls below brand standard.",
          "Move winners across channels. A video with a strong thumb-stop rate on Meta usually performs in Demand Gen too, and headline patterns that convert in Search deserve a test as the landing page H1.",
        ],
      },
      {
        heading: "6. Allocate Budget as a Portfolio, Not per Campaign",
        paragraphs: [
          "Splitting budget evenly across campaigns lowers total account return. Allocate on marginal return instead: whichever campaign produces the highest incremental conversion volume for the next $1,000 should get the shift.",
          "A practical frame is 70/20/10 — 70% to proven campaigns (brand plus high-ROAS categories), 20% to scaling candidates, 10% to new channel and creative tests. Any campaign with impression share lost (budget) above 10% is budget constrained and is your first candidate for an increase.",
          "Move in steps: raising a daily budget more than 20–30% at once re-triggers the learning phase. During seasonal peaks, manual per-campaign increases keep more control than shared budgets.",
        ],
      },
      {
        heading: "7. Search Terms Report and Negative Keyword Discipline",
        paragraphs: [
          "Reviewing the search terms report weekly is critical to cut spend on irrelevant queries. Broad match and PMax especially need a constantly growing negative keyword list.",
          "Make it durable with account-level shared negative lists and add new terms every week. Even though search term visibility is limited in PMax, account-level negatives now apply — excluding brand traffic from PMax prevents non-incremental conversions from inflating your reporting.",
        ],
        bullets: [
          "Brand protection list",
          "Out-of-industry query list",
          "Informational queries (how to, what is, examples) — filter them out in B2B if they don't convert",
          "Job-seeker queries (careers, salary, hiring) and free/crack-seeking queries",
        ],
      },
    ],
    faq: [
      {
        question: "Is Performance Max better than Search?",
        answer:
          "They're not competitors, they're complementary. Search converts high-intent brand and category queries. PMax uses the full inventory (YouTube, Display, Gmail, Discover). The right setup runs both together.",
      },
      {
        question: "Does Enhanced Conversions actually make a difference?",
        answer:
          "Yes. Enhanced Conversions offsets post-iOS 14 cookie loss and typically recovers 5–15% of measured conversions, which flows straight into Smart Bidding accuracy.",
      },
      {
        question: "Which bid strategy should I start with?",
        answer:
          "Below 15–30 conversions per month, start with Maximize Conversions and build data. Once you pass that threshold move to tCPA, and to tROAS if you can report conversion values. Tighten targets 10–15% per week rather than in one jump.",
      },
      {
        question: "Is an audience signal the same as targeting?",
        answer:
          "No. In PMax and Demand Gen the audience signal is a starting hint, not a hard targeting constraint — the system eventually explores beyond it. That's why feeding it Customer Match lists and high-intent site visitors determines how efficient the first weeks are.",
      },
      {
        question: "How often and how much should I raise budgets?",
        answer:
          "Increases beyond 20–30% at once re-trigger the learning phase. Prioritize campaigns with impression share lost (budget) above 10%, and wait 7–14 days after each increase before making another change.",
      },
    ],
    relatedToolKey: "roas",
  },
  {
    slug: "n8n-lead-enrichment-automation",
    title: "n8n Lead Enrichment Automation: Step-by-Step Setup",
    description:
      "How to combine Clay, Apollo and OpenAI inside n8n to build an automatic enrichment workflow for every new lead.",
    category: "yapay-zeka-otomasyon",
    tldr: [
      "n8n is more flexible than Zapier, self-hostable and cost-scalable.",
      "The enrichment flow is: webhook → Apollo/Clay enrichment → LLM-based ICP scoring → write to CRM.",
      "Summarizing lead notes with OpenAI/Gemini and pushing them into HubSpot boosts SDR efficiency by 30%+.",
      "The critical factor is data quality — bad enrichment burns the entire SDR team's time.",
    ],
    publishedAt: "2026-07-10",
    readingMinutes: 6,
    tags: ["n8n", "Automation", "LLM", "Lead Enrichment"],
    sections: [
      {
        heading: "Why n8n Beats Zapier",
        paragraphs: [
          "Because n8n can be self-hosted, it wins on data sovereignty and cost. Beyond 400+ native integrations, a custom HTTP node connects to any API. Rich branching (if/switch) and JavaScript nodes make scenarios possible that Zapier cannot handle.",
          "The cost gap widens with volume. Zapier bills per task, so a five-step flow burns five tasks per lead; n8n prices per execution, and a self-hosted install costs nothing beyond the server. For a B2B team processing thousands of leads a month, the difference is often close to 10x.",
          "If you handle GDPR-scoped data, self-hosted n8n keeps lead records off a third-party SaaS server entirely. It installs in about 15 minutes with Docker; use Postgres for persistence and basic auth or a reverse proxy for security.",
        ],
      },
      {
        heading: "Architecture of the Enrichment Flow",
        paragraphs: [
          "A typical lead enrichment flow has these steps:",
        ],
        bullets: [
          "Webhook: a lead's form submission lands in n8n.",
          "Apollo/Clay: company info, employee count and tech stack are pulled by email.",
          "OpenAI: an LLM prompt summarizes lead notes and scores ICP fit (0–100).",
          "HubSpot/Pipedrive: enriched data is written to the CRM and an owner is assigned.",
          "Slack: high-scoring leads notify the SDR team in real time.",
        ],
        image: {
          src: n8nWorkflowDiagram,
          alt: "n8n lead enrichment workflow diagram: webhook, Apollo/Clay enrichment, OpenAI ICP scoring, HubSpot CRM and Slack alert steps",
          caption:
            "End-to-end n8n lead enrichment flow: webhook → enrichment → LLM scoring → CRM → Slack.",
          width: 1280,
          height: 528,
        },
      },
      {
        heading: "Step-by-Step Setup: Webhook and Data Normalization",
        paragraphs: [
          "Create a new workflow in n8n and add a Webhook trigger as the first node. Set the method to POST, copy the generated production URL and paste it into your form tool (Typeform, HubSpot Forms, a custom form). The test URL only works while the editor is open, so switch to the production URL before going live.",
          "Every tool names its payload fields differently. Add a Set (Edit Fields) node right after the trigger and normalize everything into one schema: email, full_name, company_domain, source, utm_campaign. Skip this and you'll rewrite the whole flow each time a new source is added.",
          "Finish with an IF node for basic validation: branch off leads with an empty email or a free domain such as gmail or hotmail. Not sending free-domain leads to the enrichment API saves credits and removes bad matches before they enter the pipeline.",
        ],
      },
      {
        heading: "Step-by-Step Setup: Enrichment and Scoring Nodes",
        paragraphs: [
          "For enrichment, call Apollo's people/match endpoint with an HTTP Request node and authenticate through n8n Credentials — never hard-code the API key inside the node. Pull company name, employee count, industry, country and tech stack from the response. If Apollo returns nothing, add a fallback branch that queries a second source such as Clay or Hunter.",
          "Enrichment APIs enforce rate limits. Turn on 'Retry on Fail' with 2–3 attempts and increasing wait time, and use a Split In Batches node with groups of 10 for bulk imports. That way a 429 response doesn't take the whole workflow down.",
          "For scoring, send the normalized record to an OpenAI node and request a 0–100 score, a three-bullet rationale and a recommended next step via JSON schema. Validate the model output with a Code node before writing to the CRM; if the shape is unexpected, route the lead into a manual-review branch.",
        ],
      },
      {
        heading: "Step-by-Step Setup: CRM, Alerts and Error Handling",
        paragraphs: [
          "In the HubSpot node use the 'Create or Update Contact' operation with email as the unique key, otherwise every form submission creates a duplicate record. Write the score, the rationale and the enrichment fields into custom properties so sales can filter lists on them.",
          "Add a Switch node to branch on the score: 70+ posts a rich message to the SDR Slack channel and assigns an owner, 40–69 goes to the nurture list, below 40 is stored in the CRM only. Including the CRM record link in the Slack message noticeably shortens SDR response time.",
          "Finally, define a separate Error Workflow and attach it in the main workflow's settings. On failure it should alert your ops channel and write the failed payload to a Postgres table or Google Sheet, so no lead disappears silently and you can reprocess records once the issue is fixed.",
        ],
      },
      {
        heading: "LLM Prompting Tips",
        paragraphs: [
          "Give the model a clean criteria list for ICP fit scoring. Instead of vague questions like 'how well does this company match our ICP?', ask for a score based on industry, employee count and tech. Use structured output (JSON schema) so downstream nodes can process the data without breaking.",
          "Add two or three few-shot examples to the prompt: one ideal customer, one borderline, one clearly out of scope. Examples keep scores consistent over time. Keep temperature between 0 and 0.2 — you want repeatability, not creativity.",
        ],
      },
    ],
    faq: [
      {
        question: "Should I use n8n Cloud or self-hosted?",
        answer:
          "For low-volume flows, n8n Cloud is convenient. Above 10,000 executions/month or with sensitive data, self-hosted (Docker/Railway) is better for cost and compliance.",
      },
      {
        question: "Which enrichment sources are most accurate?",
        answer:
          "Apollo for company info, BuiltWith/Wappalyzer for tech stack, Clay or Hunter for contact info are the most common combinations. Cross-validating 2–3 sources is usually required.",
      },
      {
        question: "How does MCP (Model Context Protocol) fit in here?",
        answer:
          "MCP lets an LLM connect to external sources (CRM, database, internal API) through a standard interface. When the LLM should query the CRM directly instead of going through n8n, an MCP architecture is preferred.",
      },
    ],
    howTo: {
      name: "n8n Lead Enrichment Flow Setup",
      description:
        "An end-to-end n8n workflow that enriches, scores and routes every new form lead to CRM and Slack automatically.",
      steps: [
        {
          name: "Set up a Webhook node",
          text: "Create a Webhook trigger in n8n, set the method to POST and point your form tool (Typeform, HubSpot, custom form) at the production URL. Then normalize the payload with a Set node into email, full_name, company_domain and utm_campaign. Use an IF node to filter out empty emails and free domains up front.",
        },
        {
          name: "Enrich with Apollo or Clay",
          text: "Use an HTTP Request node to call Apollo's match endpoint for company name, employee count, industry and tech stack, storing the API key in n8n Credentials. Add a fallback branch to Clay or Hunter when Apollo returns no match. Enable 'Retry on Fail' and use Split In Batches for bulk runs to survive rate limits.",
        },
        {
          name: "Score ICP fit with OpenAI",
          text: "Send the enriched record to an OpenAI node and request a 0–100 score, a three-bullet rationale and a next step through JSON schema. Include one ideal, one borderline and one out-of-scope example in the prompt to keep scoring consistent. Validate the output with a Code node and route malformed responses to manual review.",
        },
        {
          name: "Write to CRM and assign owner",
          text: "In HubSpot or Pipedrive use the 'Create or Update' operation with email as the unique key to avoid duplicates. Write score, rationale and enrichment fields into custom properties so sales can filter on them. Automate owner assignment by score band with a Switch node.",
        },
        {
          name: "Add Slack alerts and error handling",
          text: "If the score clears your threshold (e.g. 70+), post a Slack message containing the CRM link to the SDR channel and send the 40–69 band to nurture. Attach a dedicated Error Workflow so failed executions alert your ops channel. Log failing payloads to a table so they can be reprocessed after a fix.",
        },
      ],
    },
    relatedToolKey: "llms-txt",
  },
  {
    slug: "saas-metrics-arr-cac-ltv",
    title: "SaaS Metrics 101: How to Read ARR, CAC, LTV and Churn",
    description:
      "The four core metrics that steer SaaS growth — where healthy bands sit and how to improve each one.",
    category: "saas-buyume",
    tldr: [
      "ARR is calculated as MRR × 12 and shows the true size of a SaaS.",
      "In a healthy SaaS, LTV/CAC ratio is at least 3:1 and CAC payback stays under 12 months.",
      "Monthly churn above 5% means growth is spent replacing losses rather than acquiring net-new.",
      "SaaS companies with Net Revenue Retention (NRR) above 110% can grow without any new customers.",
    ],
    publishedAt: "2026-07-15",
    readingMinutes: 5,
    tags: ["SaaS", "ARR", "LTV", "CAC", "Churn"],
    sections: [
      {
        heading: "MRR: Where Every Other Metric Starts",
        paragraphs: [
          "Monthly Recurring Revenue (MRR) is the monthly total of your recurring subscription revenue. One-off setup fees, services revenue and overage invoices don't belong in MRR — they don't repeat, so they distort the growth trend. Tracking MRR on a net basis (new + expansion − contraction − churn) shows where growth actually comes from.",
          "Worked example: you have 120 customers — 80 paying $150/month and 40 paying $400/month. MRR = (80 × 150) + (40 × 400) = 12,000 + 16,000 = $28,000. This month you added $800 in new subscriptions and $500 in expansion, and lost $600 to churn; net new MRR = 800 + 500 − 600 = $700, i.e. 2.5% monthly growth.",
          "When folding annual contracts into MRR, divide by 12: a $60,000 annual contract equals $5,000 of MRR. Run your own numbers with the MRR Calculator.",
        ],
      },
      {
        heading: "ARR: Measuring Size",
        paragraphs: [
          "Annual Recurring Revenue (ARR) is the annualized form of subscription revenue. For monthly-billed SaaS, ARR = MRR × 12. For investors, ARR is the clearest single measure of company size and growth rate.",
          "Worked example: with $28,000 MRR, ARR = 28,000 × 12 = $336,000. Sustain 2.5% net monthly growth for a year and MRR reaches 28,000 × 1.025¹² ≈ $37,600, so ARR ≈ $451,000. Never report ARR without growth rate — of two companies at the same ARR, the one growing 60% is valued at a multiple of the one growing 10%.",
          "Don't confuse ARR with annual revenue: revenue includes one-off income, ARR measures only the contracted recurring portion. Validate the number with the ARR Calculator.",
        ],
      },
      {
        heading: "ARPA: The Health Check on Pricing",
        paragraphs: [
          "Average Revenue Per Account (ARPA) is average monthly revenue per customer and the fastest feedback loop on your pricing strategy. The formula is simple: ARPA = MRR ÷ active customers. Rising ARPA usually signals better segmentation, successful upsell or smarter packaging.",
          "Worked example: $28,000 MRR across 120 customers gives ARPA ≈ $233. If enterprise ARPA is $400 and SMB ARPA is $150, it becomes obvious which segment deserves more sales and marketing budget. Teams that never break ARPA down by segment keep spending high CAC on low-ARPA customers.",
          "ARPA is also an input to LTV, so a small increase directly raises both LTV and the CAC ceiling you can sustain. Compare your segment numbers with the ARPA Calculator.",
        ],
      },
      {
        heading: "CAC and LTV: Unit Economics",
        paragraphs: [
          "Customer Acquisition Cost (CAC) is the total marketing + sales cost to acquire one customer. Lifetime Value (LTV) is the net profit that customer brings across their tenure. Healthy SaaS runs at an LTV/CAC of at least 3:1 with CAC payback under 12 months.",
          "CAC example: in one quarter you spent $45,000 on marketing and $30,000 on the sales team, and acquired 60 new customers. CAC = (45,000 + 30,000) ÷ 60 = $1,250. Leave sales salaries and commissions out of that calculation and you'll systematically understate CAC.",
          "LTV example: with ARPA of $233, 80% gross margin and 3% monthly churn, average customer lifetime is 1 ÷ 0.03 ≈ 33 months. LTV = 233 × 0.80 × 33 ≈ $6,150. LTV/CAC = 6,150 ÷ 1,250 ≈ 4.9:1 — above the healthy band, meaning you can invest more aggressively in growth. CAC payback is 1,250 ÷ (233 × 0.80) ≈ 6.7 months, comfortably under the 12-month target. Use the CAC Calculator and LTV Calculator for your own inputs.",
        ],
      },
      {
        heading: "Churn and NRR: The Retention Story",
        paragraphs: [
          "If monthly gross churn tops 5%, growth is spent filling the leaky bucket. Net Revenue Retention (NRR) also counts upsell/expansion — SaaS companies above 110% NRR grow even without net-new customers.",
          "Churn example: you started the month with 120 customers and lost 4. Customer churn = 4 ÷ 120 ≈ 3.3%. On the revenue side, starting MRR of $28,000 with $600 of lost MRR gives gross revenue churn of 2.1%. When customer churn exceeds revenue churn you're losing small accounts; the reverse means you're losing large ones — and the action plan is completely different.",
          "NRR example: starting MRR $28,000, expansion $500, contraction $100, churn $600. NRR = (28,000 + 500 − 100 − 600) ÷ 28,000 ≈ 99.3%. Anything under 100% says your installed base is shrinking and growth depends entirely on new sales. Model scenarios with the Churn Rate Calculator.",
        ],
      },
      {
        heading: "How to Read These Metrics Together",
        paragraphs: [
          "Read the metrics as a chain, not in isolation: ARPA measures pricing, MRR measures momentum, churn measures retention, CAC measures efficiency and LTV/CAC measures sustainability. A change in one link cascades — a 10% lift in ARPA raises LTV, and therefore your affordable CAC ceiling, by roughly 10%.",
        ],
        bullets: [
          "Weekly: net new MRR, pipeline and trial-to-paid conversion",
          "Monthly: ARPA, gross churn, revenue churn and NRR",
          "Quarterly: CAC, CAC payback period and LTV/CAC ratio",
          "Annually: ARR, growth rate and unit economics by segment",
        ],
      },
    ],
    faq: [
      {
        question: "Are MRR and ARR the same thing?",
        answer:
          "No. MRR (Monthly Recurring Revenue) is monthly, ARR (Annual Recurring Revenue) is annual. Generally, ARR = MRR × 12.",
      },
      {
        question: "What's a good LTV/CAC ratio?",
        answer:
          "The accepted healthy ratio in SaaS is 3:1. 1:1 is a loss; 5:1+ suggests you can invest more aggressively in growth.",
      },
      {
        question: "How do I reduce churn?",
        answer:
          "The three most effective levers are activation (fast time-to-value), a customer success team and in-product engagement loops. For involuntary churn from failed payments, deploy dunning management (Stripe/Chargebee).",
      },
      {
        question: "How is ARPA calculated and why does it matter?",
        answer:
          "ARPA = MRR ÷ active customers. With $28,000 MRR across 120 customers, ARPA ≈ $233. Because ARPA feeds the LTV calculation, even a small increase raises the CAC you can sustainably pay — track it by segment, not just in aggregate.",
      },
      {
        question: "How do I calculate CAC payback period?",
        answer:
          "Use CAC ÷ (ARPA × gross margin). With CAC of $1,250, ARPA of $233 and 80% gross margin, payback is ≈ 6.7 months. Under 12 months is healthy for SMB SaaS; under 18 months is acceptable for enterprise.",
      },
    ],
    relatedToolKey: "arr",
    resources: [
      { label: "What Is MRR and How to Calculate It", href: "/en/blog/what-is-mrr-how-to-calculate/" },
      { label: "MRR Calculator", href: "/en/free-tools/mrr-calculator" },
      { label: "ARPA Calculator", href: "/en/free-tools/arpa-calculator" },
      { label: "ARR Calculator", href: "/en/free-tools/arr-calculator" },
      { label: "CAC Calculator", href: "/en/free-tools/cac-calculator" },
      { label: "LTV Calculator", href: "/en/free-tools/ltv-calculator" },
      { label: "What Is LTV? LTV:CAC Ratio", href: "/en/blog/what-is-ltv-ltv-cac-ratio/" },
      { label: "What Is CAC? Customer Acquisition Cost Explained", href: "/en/blog/what-is-cac-customer-acquisition-cost/" },
      { label: "Churn Rate Calculator", href: "/en/free-tools/churn-rate-calculator" },
    ],
  },
  {
    slug: "meta-ads-exit-learning-phase-tactics",
    title: "How to Exit Meta Ads Learning Phase Fast: 5 Tactics",
    seoTitle: "Meta Ads Learning Phase: Exit Fast & Fix Learning Limited",
    description:
      "How to exit the Meta Ads learning phase faster and fix Learning Limited: 5 tactics for event choice, budget, CBO, creatives and edit discipline.",
    category: "performans-pazarlama",
    tldr: [
      "Meta Ads Learning Phase completes when an ad set collects 50 optimization events within 7 days — otherwise CPA stays volatile.",
      "Budgets that are too small, events set too deep in the funnel and frequent edits reset learning.",
      "Broad audience + right event + daily budget = expected event volume is the formula that shortens exit time.",
      "5 tactics: pick the right event, consolidate budget with CBO, expand creative library, apply edit discipline, and test Advantage+.",
    ],
    publishedAt: "2026-07-20",
    readingMinutes: 3,
    tags: ["Meta Ads", "Facebook Ads", "Learning Phase", "Performance"],
    sections: [
      {
        heading: "What Is the Learning Phase and Why It Matters",
        paragraphs: [
          "Meta Ads (Facebook Ads) machine learning targets 50 optimization events per ad set within a 7-day window for every new (or meaningfully edited) ad set. Until that threshold is met, CPA fluctuates and delivery efficiency stays low.",
          "In practice, many advertisers working in Facebook Ads Manager never hit those 50 events because the budget is too low, the event is too deep in the funnel (purchase vs. view), the audience is too narrow, or the ad set is constantly edited. The 5 tactics below shorten the exit time significantly.",
        ],
      },
      {
        heading: "5 Tactics: Exit Learning Phase Fast",
        paragraphs: [
          "Applied in order, these steps typically complete learning in 3–5 days per ad set and lock CPA close to target:",
        ],
        bullets: [
          "1) Pick the right optimization event — target one that can realistically fire 50+ times/week rather than the deepest funnel event.",
          "2) Consolidate budget with Campaign Budget Optimization (Advantage Campaign Budget); keep it across 3–5 ad sets, not many small ones.",
          "3) Upload 4–6+ creative variants per ad set so the algorithm actually has a library to test against.",
          "4) Apply edit discipline — avoid budget, audience or bid changes in the first 4 days; every meaningful edit resets learning.",
          "5) Open broad-audience tests with Advantage+ Audience and Advantage+ Shopping Campaigns; broad targeting accelerates learning.",
        ],
      },
      {
        heading: "Matching Budget to Event Volume",
        paragraphs: [
          "Ad set daily budget × 7 days, divided by expected CPA, gives your expected event count. If that number is below 50, learning cannot complete — you must either increase budget or move the event higher in the funnel (e.g. add-to-cart instead of purchase).",
          "For new product launches or low-volume ecommerce, a 'proxy event' approach is critical: optimize on add-to-cart for the first 30–45 days, then move up to purchase once volume grows.",
        ],
      },
      {
        heading: "Creative Fatigue and the Test Cadence",
        paragraphs: [
          "Even after learning completes, frequency climbs and CTR drops within 2–3 weeks, so CPA rises again (creative fatigue). A weekly creative refresh cadence and competitor benchmarking through the Meta Ads Library are required to keep performance sustainable.",
        ],
      },
    ],
    howTo: {
      name: "Exit Meta Ads Learning Phase Fast",
      description:
        "Five steps to collect 50 optimization events per ad set within 7 days and complete Meta Ads Learning Phase.",
      steps: [
        {
          name: "Pick the right optimization event",
          text: "Choose the deepest funnel event that can still fire 50+ times per week. If purchase volume is low, optimize on Add to Cart or Initiate Checkout instead.",
        },
        {
          name: "Consolidate budget with CBO",
          text: "Turn on Campaign Budget Optimization (Advantage Campaign Budget) and spread budget across 3–5 ad sets; avoid opening many tiny ad sets.",
        },
        {
          name: "Expand the creative library",
          text: "Upload at least 4–6 distinct creative variants per ad set (video, static, UGC, testimonial) so the algorithm has real room to test.",
        },
        {
          name: "Apply edit discipline",
          text: "Do not change budget, audience or bidding during the first 4–7 days. Every meaningful edit resets learning and restarts the counter.",
        },
        {
          name: "Open broad-audience tests with Advantage+",
          text: "Use Advantage+ Audience and Advantage+ Shopping Campaigns to run broad targeting tests — broad audiences accelerate learning noticeably.",
        },
      ],
    },
    faq: [
      {
        question: "How long does the Meta Ads Learning Phase take?",
        answer:
          "The standard threshold is 50 optimization events per ad set within 7 days. Ad sets that hit that volume graduate to 'Active'; those that don't stay in 'Learning Limited' and CPA stays volatile.",
      },
      {
        question: "How do I remove the Learning Limited warning?",
        answer:
          "Three levers: (1) raise the ad set budget so expected events cross 50, (2) move the event higher in the funnel (add-to-cart instead of purchase), (3) merge similar ad sets to consolidate the event signal.",
      },
      {
        question: "Does editing an ad set reset learning?",
        answer:
          "Meaningful edits (budget ±20%+, audience, optimization event, bid strategy, creative changes) reset learning. Adding a new creative usually doesn't; replacing an existing one does.",
      },
      {
        question: "CBO or manual budget for Learning Phase?",
        answer:
          "CBO (Advantage Campaign Budget) routes spend to the best-performing ad set automatically, growing total event volume and accelerating learning. Manual budgets only make sense when ad sets are clearly split by distinct goal or geography.",
      },
    ],
    relatedToolKey: "roas",
  },
  {
    slug: "how-to-reduce-b2b-lead-generation-costs",
    title: "How to Reduce B2B Lead Generation Costs (2026 Guide)",
    description:
      "Cut B2B cost per lead by 30–50% without extra ad budget: offline conversion tracking, layered targeting, GEO and behavioral email automation.",
    category: "b2b-lead-generation",
    tldr: [
      "Tie ad optimization to CRM SQL data instead of form fills (offline conversion tracking) — the highest-impact step that needs no extra budget.",
      "Move targeting from a single tier to a layered structure: 60–70% of budget on Manager/Specialist roles, the rest on executives.",
      "Recover abandoned leads with behavioral email automation; far cheaper than buying a brand-new cold lead.",
      "Together these three steps can cut CPA by 30–50% without increasing ad spend.",
    ],
    publishedAt: "2026-07-28",
    readingMinutes: 6,
    tags: ["B2B", "Lead Generation", "CAC", "GEO", "Offline Conversion"],
    sections: [
      {
        heading: "Why B2B Lead Costs Rise (Root Causes)",
        paragraphs: [
          "When you optimize a Google Ads or LinkedIn Campaign Manager campaign toward \"leads\" or \"form fills\", the algorithm brings you everyone who fills the form. Whether that person has budget and buying authority, or is a student filling out a survey for a class assignment, the algorithm cannot tell — the only signal it holds is \"form submitted\".",
          "The practical result: your CPA looks low (say an attractive $2–3 per form), but if sales disqualifies 70–80% of those leads, your real customer acquisition cost is 4–5x higher than reported. The dashboard isn't lying to you; it's answering the wrong question.",
          "The fix is offline conversion tracking. When a lead reaches \"SQL\" (Sales Qualified Lead) status in your CRM or an opportunity closes, push that back into the ad platform via API or a native integration. HubSpot–Google Ads and Salesforce–LinkedIn connectors already exist; you don't need to build anything from scratch. Once this is live, within 2–3 weeks the algorithm starts learning which profile traits actually turn into revenue and adjusts bidding accordingly.",
          "Most companies that skip this keep raising budget on a cost they wrongly believe is low.",
        ],
      },
      {
        heading: "How to Layer B2B Ad Targeting",
        paragraphs: [
          "\"Let's target C-level, they make the decision\" sounds right but gets expensive fast. On LinkedIn, reaching someone with a CFO or CTO title can easily cost 3–4x more than reaching a Manager or Team Lead — competition in that segment is far denser.",
          "In reality, most B2B purchases (especially in companies with 50+ employees) are made by a committee, not one person. The process is usually started and researched by someone mid-level: they define the need, build a shortlist, then take it upstairs. Showing ads only to the final signer means fighting at the most expensive, most competitive point of the buying journey.",
        ],
        bullets: [
          "Allocate 60–70% of budget to Manager/Specialist seniority and the remainder to executives.",
          "Use LinkedIn Matched Audiences to retarget visitors who browsed but never submitted a form.",
          "Retargeting typically runs meaningfully cheaper than cold targeting — the person already knows you.",
        ],
      },
      {
        heading: "How GEO (Generative Engine Optimization) Lowers Organic Lead Cost",
        paragraphs: [
          "GEO is the practice of optimizing content so AI search tools such as ChatGPT and Perplexity cite it as a source. A growing share of B2B buyers now start research in these tools, which turns GEO into a channel with near-zero marginal cost that reduces dependence on paid media.",
          "In practice, most of this is solved by fixing schema.org markup on your existing blog content and improving page speed; a separate \"GEO budget\" or a new agency retainer is usually unnecessary.",
        ],
        bullets: [
          "Structured Q&A format: mark up FAQ schema correctly — models pull the block that answers the question directly.",
          "Measurable data: replace vague claims like \"most companies\" with concrete numbers and sources; models prefer verifiable statements.",
          "Clear topic hierarchy: one H1, H2/H3s that match the topic exactly, and one sub-intent answered per section.",
        ],
      },
      {
        heading: "Recovering Lost Leads with Behavioral Email Automation",
        paragraphs: [
          "In B2B, a prospect rarely buys on first contact — the average decision cycle runs 3–6 months and can stretch further by industry. Treating \"didn't fill the form\" as \"lost\" wastes a lot of demand you already paid for.",
          "A concrete example: someone visits your pricing page and leaves without converting. That behavior is still a strong signal. A sequence triggered on it (for instance, \"a comparison doc for people who reviewed pricing\") converts far more cheaply than sourcing a brand-new cold lead, because intent has already been shown once.",
          "You don't need complex infrastructure for this; behavioral triggers in ActiveCampaign or HubSpot are enough. What matters is defining upfront which page visit fires which automation.",
        ],
      },
      {
        heading: "The Tool Stack B2B Lead Generation Actually Requires",
        paragraphs: [
          "A common mistake among small and mid-sized B2B companies is copying the tool stack of enterprises. Real needs scale with team size and lead volume.",
          "The critical point: paying for marketing automation or advanced attribution while skipping the CRM is a frequent error. Without a CRM the data those tools produce lacks context — you can't see which campaign produced revenue, only surface metrics like clicks.",
        ],
        bullets: [
          "CRM — from day one, even for a single user: HubSpot (free tier available), Pipedrive. $0–90/user/month.",
          "Marketing automation — worthwhile once you pass ~50 leads/month: ActiveCampaign, Mailchimp. $30–300/month.",
          "LinkedIn Sales Navigator — if you run manual outbound or account-based selling (ABM): ~$80/user/month.",
          "Attribution / analytics — if you run several paid channels at once: GA4 (free), Dreamdata, Triple Whale. $0–500+/month.",
        ],
      },
      {
        heading: "Which Metrics Actually Measure B2B Lead Quality?",
        paragraphs: [
          "The most common reporting mistake is fixating on a single number like \"we got 340 leads this month\". On its own that number says nothing. These three ratios give a far more honest picture.",
        ],
        bullets: [
          "MQL → SQL conversion rate: what share of marketing-sourced leads sales considers worth a conversation. Below 15% points to a targeting or lead-magnet problem.",
          "SQL cost per channel — not just cost per lead. A channel with cheap leads but poor SQL conversion is far more expensive than it looks.",
          "CAC:LTV ratio: the accepted healthy threshold is 1:3. As it approaches 1:1, growth isn't sustainable — you're just burning cash.",
        ],
      },
    ],
    howTo: {
      name: "Implementation order for reducing B2B lead cost",
      description:
        "The recommended priority sequence for B2B teams working with limited budget and resources.",
      steps: [
        {
          name: "Set up offline conversion tracking",
          text: "Move the optimization goal in your ad platforms from form fills to CRM SQL data. It needs no extra budget and delivers the single highest impact.",
        },
        {
          name: "Layer your targeting",
          text: "Cover not only the final decision maker but the mid-level role that starts the process; put most of the budget on Manager/Specialist seniority.",
        },
        {
          name: "Build behavioral email flows",
          text: "Re-engage abandoned forms and page visits with automated sequences fired by behavioral triggers.",
        },
        {
          name: "Bring content up to GEO standards",
          text: "Clean up FAQ and HowTo schema markup, heading hierarchy and question-answer structure.",
        },
        {
          name: "Add new tools or channels last",
          text: "Improving the efficiency of existing traffic is always cheaper than buying new traffic.",
        },
      ],
    },
    faq: [
      {
        question: "What should be the first step to reduce B2B lead costs?",
        answer:
          "Move the optimization goal in your ad platforms away from form fills and tie it to qualified (SQL) data in your CRM via offline conversion tracking. It usually requires no extra budget and produces the fastest impact.",
      },
      {
        question: "Which channels should small-budget businesses focus on?",
        answer:
          "Before committing to heavy ad spend, prioritize niche content marketing, a GEO-ready static blog foundation, and manual networking through LinkedIn Sales Navigator.",
      },
      {
        question: "What is the average cost per lead (CPL) in B2B?",
        answer:
          "It varies widely by industry, seniority targeted and channel; on LinkedIn, C-level targeting can carry a CPL 3–4x higher than mid-level targeting. Instead of one \"average\" figure, track SQL cost per channel.",
      },
      {
        question: "What is the difference between MQL and SQL?",
        answer:
          "An MQL (Marketing Qualified Lead) is someone marketing has identified as showing interest. An SQL (Sales Qualified Lead) is someone sales considers worth a conversation with validated buying potential. An MQL→SQL rate under 15% signals a targeting or offer problem.",
      },
      {
        question: "What should the CAC:LTV ratio be?",
        answer:
          "The widely accepted healthy threshold is 1:3 — acquisition cost should be at most one third of the revenue that customer generates over their lifetime. The closer the ratio gets to 1:1, the less sustainable growth becomes.",
      },
    ],
    relatedToolKey: "cac",
    resources: [
      {
        label: "How to Design a B2B Lead Generation Funnel: End-to-End Guide",
        href: "/en/blog/b2b-lead-generation-funnel-design",
      },
      {
        label: "n8n Lead Enrichment Automation",
        href: "/en/blog/n8n-lead-enrichment-automation",
      },
      {
        label: "SaaS Metrics: ARR, CAC and LTV",
        href: "/en/blog/saas-metrics-arr-cac-ltv",
      },
      { label: "LTV Calculator", href: "/en/free-tools/ltv-calculator" },
      {
        label: "Google Ads — Import offline conversions documentation",
        href: "https://support.google.com/google-ads/answer/2998031",
        external: true,
      },
      {
        label: "LinkedIn Ads — Matched Audiences documentation",
        href: "https://www.linkedin.com/help/lms/answer/a423304",
        external: true,
      },
      {
        label: "HubSpot — Google Ads integration",
        href: "https://knowledge.hubspot.com/ads/use-the-google-ads-integration",
        external: true,
      },
    ],
  },
  {
    slug: "linkedin-ads-turkey-2026-opportunity",
    seoTitle: "LinkedIn Ads in Turkey 2026: Why They're Cheap Now",
    title: "Why Are LinkedIn Ads Cheaper in Turkey Right Now? The 2026 Opportunity Window",
    description:
      "DataReportal's 2026 Turkey data shows LinkedIn ad reach outpacing mature platforms. Why that means an unsaturated auction — and how B2B teams can use it.",
    category: "performans-pazarlama",
    tldr: [
      "According to the DataReportal report produced with Kepios, LinkedIn's advertising reach in Turkey is growing noticeably faster than mature social platforms.",
      "When the audience side grows faster than the advertiser side, auction pressure stays temporarily low — that gap is the opportunity window.",
      "Turkish B2B decision-makers are increasingly reachable on LinkedIn, yet most budgets still sit on Meta and Google.",
      "The right move before the window closes: build audience lists now, accumulate brand awareness while it is cheap, and wire conversions from lead form to CRM.",
    ],
    publishedAt: "2026-08-16",
    readingMinutes: 6,
    tags: ["LinkedIn Ads", "B2B", "Turkey", "Media Planning"],
    sections: [
      {
        heading: "How much has LinkedIn's ad reach in Turkey grown?",
        paragraphs: [
          "According to the Turkey digital report DataReportal produces with Kepios, LinkedIn is one of the fastest-growing platforms in the country by advertising reach. The pattern in the data is clear: mature platforms such as Meta and YouTube already touch most of the online population and therefore post single-digit growth, while LinkedIn is still adding reach at double-digit rates.",
          "The reason is saturation. Once a platform reaches nearly all of its addressable audience, growth is capped at population growth. LinkedIn has not reached the whole professional population in Turkey yet; new graduates, career changers and company pages keep joining every year. The growth comes from the market expanding, not from stealing share in a saturated one.",
          "There is no value in memorising exact percentages — the direction is what matters. The growth rate of addressable reach is effectively the growth rate of ad inventory. When inventory expands quickly and demand does not follow at the same pace, unit cost stays under pressure.",
        ],
      },
      {
        heading: "Why advertiser demand lags behind inventory growth",
        paragraphs: [
          "The overwhelming majority of digital ad budget in Turkey still flows to Meta and Google. That is usually habit rather than strategy: teams are experienced in those dashboards, agencies operate at scale there, and reporting templates are built around them. LinkedIn carries an 'expensive channel' label and lands at the bottom of most media plans.",
          "The result is a useful asymmetry: impression supply grows while the number of advertisers bidding on it does not grow proportionally. In an auction-based system, that suppresses unit cost. The sentence 'LinkedIn is expensive' remains true on absolute CPM — but absolute CPM is the wrong question.",
          "The right question is: what does it cost to reach a qualified B2B decision-maker? Meta has a lower CPM, but the profile you want is inferred from interest signals and much of the spend is wasted. LinkedIn has a higher CPM, but job function, company size and industry are declared data. When waste drops, cost per qualified touch can be lower despite the higher CPM.",
        ],
        bullets: [
          "Compare channels on cost per qualified lead, not on CPM — never decide before both are measured the same way.",
          "Measure what share of Meta lead-form submissions actually becomes an SQL; for most teams it is far lower than assumed.",
          "Treat LinkedIn as a separate system feeding the top and middle of the funnel, not as an 'extra channel'.",
        ],
      },
      {
        heading: "How long will the window stay open?",
        paragraphs: [
          "Asymmetries like this are never permanent. As a channel's efficiency becomes visible, budget shifts in, auction competition rises and the cost advantage erodes. That process has already started in Turkey: advertiser density is visibly increasing in technology, consulting and industrial B2B.",
          "What you lose when the window closes is not just cheap CPM — it is the accumulated audience asset. The site visitors, video viewers and engagement-based retargeting lists you build today become your most efficient asset once costs rise. Cold targeting gets expensive; reaching a warm audience you banked earlier stays comparatively cheap.",
          "So the opportunity is not 'sell a lot right now'. It is 'accumulate assets before the price goes up'. B2B decision cycles already run for months, which means the audience you build today funds tomorrow's pipeline.",
        ],
      },
      {
        heading: "A practical setup to use the window",
        paragraphs: [
          "The sequence below summarises what a B2B team starting LinkedIn Ads from scratch should do in the first 60 days. The goal is not to chase conversions on day one; it is to build measurement and bank audiences.",
        ],
        bullets: [
          "Install the Insight Tag and define separate audiences: all visitors, pricing-page viewers, blog readers.",
          "Target on job function + seniority + company size rather than job title; title fields are filled inconsistently in Turkey.",
          "Allocate most of the budget to the researcher profile one level below the decision-maker — they usually start the process.",
          "Spend the first 30 days on low-cost video and document (carousel) ads to bank audiences; push conversion in phase two.",
          "If you use Lead Gen Forms, wire the CRM integration on day one; without SQL feedback, optimisation runs blind.",
          "Watch frequency weekly — narrow B2B audiences saturate fast and frequency pushes click cost up.",
        ],
      },
      {
        heading: "Without correct measurement, the cheap channel does not help",
        paragraphs: [
          "Even a cheap channel misleads you if form submissions count as final success. Lead quality from LinkedIn is usually high, but if you cannot prove it you will lose the budget argument. That is why the conversion definition has to be tied to the CRM opportunity stage.",
          "The practical approach: remove 'form submission' as the primary objective in the ad platform and replace it with a 'qualified meeting' or 'opportunity created' event fed back from the CRM. Once that link exists, cost comparisons become meaningful — and LinkedIn's real cost sits somewhere very different from the CPM on screen.",
          "Our end-to-end B2B lead generation funnel guide covers how to build that measurement chain step by step.",
        ],
      },
    ],
    faq: [
      {
        question: "Are LinkedIn Ads really cheap in Turkey?",
        answer:
          "Not on absolute CPM — LinkedIn is more expensive than Meta. But cost per qualified B2B touch tells a different story. According to the report DataReportal produces with Kepios, the platform's advertising reach in Turkey is growing quickly while advertiser density is not keeping pace, so auction pressure stays temporarily low. The opportunity lives in that asymmetry.",
      },
      {
        question: "What is the minimum LinkedIn Ads budget for Turkey?",
        answer:
          "Plan it against audience size and campaign count. A practical rule: a single campaign's daily budget should be at least 15-20x the average cost per click in that audience so the algorithm collects enough daily data. Splitting the budget across many campaigns prevents any of them from learning.",
      },
      {
        question: "LinkedIn Ads or Meta Ads for B2B?",
        answer:
          "They do different jobs. LinkedIn reaches decision-makers through declared firmographic data (title, company size, industry). Meta delivers wide reach and low CPM, which is efficient for awareness and retargeting. For most B2B setups the right answer is to target on LinkedIn and reinforce with Meta.",
      },
      {
        question: "When will this opportunity window close?",
        answer:
          "There is no fixed date; it closes when advertiser density catches up with reach growth. Competition is already rising in segments like technology and consulting. The practical indicator is your own CPM trend: if the same audience gets more expensive several months in a row, the window is narrowing.",
      },
      {
        question: "Lead Gen Form or landing page?",
        answer:
          "Lead Gen Forms lift submission rates clearly because the user never leaves the platform and fields autofill, but they can reduce quality. The recommended split: Lead Gen Forms for top-funnel content downloads, landing pages for high-intent actions such as demo or pricing requests.",
      },
    ],
    relatedToolKey: "cac",
    resources: [
      {
        label: "How to Design a B2B Lead Generation Funnel",
        href: "/en/blog/b2b-lead-generation-funnel-design",
      },
      {
        label: "How to Reduce B2B Lead Generation Costs",
        href: "/en/blog/how-to-reduce-b2b-lead-generation-costs",
      },
      {
        label: "Source: DataReportal — Digital 2026: Turkey (produced with Kepios)",
        href: "https://datareportal.com/reports/digital-2026-turkey",
        external: true,
      },
    ],
  },
  {
    slug: "what-is-nrr-saas-growth-metric",
    seoTitle: "What Is NRR? Net Revenue Retention Explained",
    title: "What Is NRR (Net Revenue Retention) and Why It Beats ARR in SaaS",
    description:
      "How NRR differs from ARR and MRR, how to calculate it, healthy benchmarks by segment, and why investors build valuation around it — with worked examples.",
    category: "saas-buyume",
    tldr: [
      "NRR = (Starting MRR + Expansion − Contraction − Churn) / Starting MRR × 100. New customers are excluded.",
      "ARR shows the size of revenue; NRR shows its quality — only NRR tells you what happens if new sales stop.",
      "100% is the neutral line. Below it the base erodes; above it you have negative churn.",
      "NRR is one of the strongest drivers of valuation multiples; 120%+ earns a premium.",
    ],
    publishedAt: "2026-08-16",
    readingMinutes: 6,
    tags: ["SaaS", "NRR", "Retention", "Metrics"],
    sections: [
      {
        heading: "What is NRR and how is it calculated?",
        paragraphs: [
          "NRR (Net Revenue Retention) is the revenue produced at the end of a period by the customers you had at the start, divided by their starting revenue. The formula is simple: NRR = (Starting MRR + Expansion MRR − Contraction MRR − Churned MRR) / Starting MRR × 100.",
          "The critical detail is what it leaves out: revenue from newly acquired customers never enters the calculation. That makes NRR the only metric that tells you whether the business would still grow with the marketing and sales engine switched off. Every other growth metric can be masked by new sales; NRR cannot.",
          "Example: a SaaS starts the month at $40,000 MRR and books $6,000 of expansion (upsell, extra seats), $1,500 of contraction (downgrades) and $2,500 of churn. NRR = (40,000 + 6,000 − 1,500 − 2,500) / 40,000 × 100 = 105%. Revenue grew 5% without a single new customer.",
        ],
      },
      {
        heading: "NRR vs. ARR and MRR",
        paragraphs: [
          "ARR and MRR are volume metrics: they tell you how large the revenue is. NRR is a quality metric: it tells you how durable and expandable that revenue is. Two companies can both sit at $10M ARR, but if one runs 85% NRR and the other 125%, they are fundamentally different businesses.",
          "The company at 85% NRR must sell 15% of its revenue in new business every year just to stand still. To grow, it has to beat that. That creates a permanent dependence on the sales team and the ad budget — the moment CAC rises, growth stalls.",
          "The company at 125% NRR grows 25% a year with zero new customers. Add new sales on top and the effect compounds. That is why two companies with the same ARR can be valued multiples apart.",
        ],
        bullets: [
          "ARR: how big is the revenue?",
          "Growth rate: how fast is it increasing?",
          "NRR: how much of that increase comes from existing customers — i.e. how much of it is sustainable?",
        ],
      },
      {
        heading: "Why the NRR vs. GRR gap matters",
        paragraphs: [
          "GRR (Gross Revenue Retention) counts losses only: (Starting − Contraction − Churn) / Starting. Because it excludes expansion it can never exceed 100%. In the example above, GRR = (40,000 − 1,500 − 2,500) / 40,000 = 90%.",
          "NRR at 105% while GRR sits at 90% means the base is actually eroding and a handful of expanding accounts is covering it. That structure is fragile — when those few accounts leave, the picture deteriorates fast.",
          "This is why a serious investor conversation asks for both. A healthy profile has strong GRR (90%+ in enterprise, 80%+ in SMB) with NRR pushed above it by expansion.",
        ],
      },
      {
        heading: "Healthy NRR benchmarks and the investor view",
        paragraphs: [
          "Common references by segment: 90-100% for SMB-focused SaaS, 100-110% for mid-market, and 120%+ for enterprise and usage-based pricing. Usage-based models naturally produce higher NRR because the invoice grows as the customer grows.",
          "Investors care about NRR for two reasons. First, it makes future revenue predictable. Second, it is the most honest proof that the product delivers value — if a customer spends more, they are satisfied. Surveys cannot prove that; invoices can.",
        ],
      },
      {
        heading: "How to improve NRR",
        paragraphs: [
          "Improving NRR is mostly product and customer success work, not sales work. Expansion revenue is a natural consequence of delivered value; it cannot be forced.",
        ],
        bullets: [
          "Tie pricing to growth: pick an axis that scales with the customer — seats, usage volume or transactions.",
          "Shorten time-to-value: faster onboarding lowers churn and accelerates expansion at the same time.",
          "Make expansion frictionless: adding a seat or module should not require a sales call.",
          "Build a health score: catch usage decline, champion departure and support-ticket spikes before churn happens.",
          "Track NRR by cohort and segment: knowing which profile expands also fixes your acquisition targeting.",
        ],
      },
    ],
    faq: [
      {
        question: "What is NRR?",
        answer:
          "NRR (Net Revenue Retention) is the net change in revenue from your existing customer base over a period: (Starting MRR + Expansion − Contraction − Churn) / Starting MRR × 100. Revenue from new customers is excluded.",
      },
      {
        question: "What is a good NRR?",
        answer:
          "100% is the neutral line. 90-100% is acceptable for SMB products, 100-110% is good in mid-market, and 120%+ is excellent for enterprise and usage-based SaaS. Below 100% the existing base is shrinking and growth depends entirely on new sales.",
      },
      {
        question: "Why is NRR more important than ARR?",
        answer:
          "ARR measures the size of revenue, NRR measures its quality. High ARR combined with low NRR means new sales are constantly covering a loss; growth stops the moment acquisition slows. That is why NRR is one of the strongest drivers of valuation multiples.",
      },
      {
        question: "What is the difference between NRR and GRR?",
        answer:
          "GRR counts only contraction and churn, excludes expansion and can never exceed 100%. NRR includes expansion and can go above 100%. GRR measures product stickiness, NRR measures growth potential — read them together.",
      },
      {
        question: "Can you show an NRR calculation example?",
        answer:
          "With $40,000 starting MRR, $6,000 expansion, $1,500 contraction and $2,500 churn: NRR = (40,000 + 6,000 − 1,500 − 2,500) / 40,000 × 100 = 105%. Run your own numbers with the free NRR Calculator.",
      },
      {
        question: "What does negative churn mean?",
        answer:
          "It means expansion revenue from existing customers exceeds lost revenue — NRR above 100%. Companies in that position grow even without winning a single new customer.",
      },
    ],
    relatedToolKey: "nrr",
    resources: [
      { label: "What Is MRR and How to Calculate It", href: "/en/blog/what-is-mrr-how-to-calculate/" },
      {
        label: "NRR Calculator",
        href: "/en/free-tools/nrr-calculator",
      },
      {
        label: "SaaS Metrics: ARR, CAC and LTV",
        href: "/en/blog/saas-metrics-arr-cac-ltv",
      },
      {
        label: "Rule of 40 Calculator",
        href: "/en/free-tools/rule-of-40-calculator",
      },
    ],
  },
  {
    slug: "arr-vs-mrr-difference",
    title: "ARR vs MRR: What's the Difference?",
    description:
      "A short, clear comparison of Annual and Monthly Recurring Revenue — the formula, when to use each, and the mistakes that distort both.",
    category: "saas-buyume",
    tldr: [
      "ARR = MRR × 12. They are the same revenue expressed on two time scales.",
      "MRR drives operating decisions; ARR drives planning, budgeting and investor reporting.",
      "Both exclude one-off revenue: setup fees, training and consulting never belong in recurring revenue.",
      "Annual contracts must be normalised (annual value / 12) before they enter MRR.",
    ],
    publishedAt: "2026-08-16",
    readingMinutes: 4,
    tags: ["SaaS", "ARR", "MRR", "Metrics"],
    sections: [
      {
        heading: "The short answer",
        paragraphs: [
          "MRR (Monthly Recurring Revenue) is the contracted subscription revenue you expect to repeat each month. ARR (Annual Recurring Revenue) is the same figure on an annual scale: ARR = MRR × 12. Neither is more 'correct' — they answer different questions.",
          "MRR answers 'how are we doing right now?'. It is sensitive enough to reveal the impact of a pricing change, a churn spike or a new campaign within weeks. ARR answers 'how big is this business?'. It smooths monthly noise and gives boards, investors and planning cycles a stable number to anchor on.",
        ],
      },
      {
        heading: "When to use which",
        paragraphs: [
          "The practical split is by audience and cadence. Operating teams — growth, product, customer success — should live in MRR because their decisions are monthly. Finance, the board and investor updates run on ARR because their cycles are annual.",
          "Products sold mostly on monthly plans naturally think in MRR. Companies selling annual enterprise contracts often report ARR first, since a single contract signed in one month would otherwise distort MRR badly.",
        ],
        bullets: [
          "MRR: campaign, pricing, capacity and churn decisions.",
          "ARR: valuation, annual planning, hiring plans and board reporting.",
          "Use both — never mix periods, e.g. comparing monthly CAC to annual revenue.",
        ],
      },
      {
        heading: "The mistakes that distort both",
        paragraphs: [
          "Three errors account for most broken recurring-revenue reporting. First, booking the full value of an annual contract in the month it was paid — this spikes MRR and makes the trend meaningless. Normalise instead: annual value / 12.",
          "Second, including one-off revenue. Setup fees, training days, consulting and one-off licence sales are real revenue, but they are not recurring, so they belong outside both MRR and ARR.",
          "Third, tracking only the total. Break MRR into New, Expansion, Contraction and Churned. Net New MRR = New + Expansion − Contraction − Churned is where growth quality actually shows up — and pairing it with NRR tells you how much of the growth comes from existing customers.",
        ],
      },
      {
        heading: "Worked example",
        paragraphs: [
          "A SaaS has 400 customers on an $80/month plan and 100 customers on a $1,200/year plan. Monthly plans: 400 × 80 = $32,000. Annual plans normalised: 100 × (1,200 / 12) = $10,000. MRR = $42,000, so ARR = 42,000 × 12 = $504,000.",
          "If the same month also produced $6,000 of onboarding fees, that stays out of both figures. Run your own numbers with the MRR Calculator and the ARR Calculator.",
        ],
      },
    ],
    faq: [
      {
        question: "What is the difference between ARR and MRR?",
        answer:
          "MRR is monthly recurring revenue and ARR is annual recurring revenue; ARR = MRR × 12. They describe the same revenue stream on different time scales — MRR for operational decisions, ARR for planning and investor reporting.",
      },
      {
        question: "Is ARR always just MRR times 12?",
        answer:
          "Mathematically yes, provided MRR is normalised so every billing cycle is expressed monthly. The relationship breaks when annual contracts are booked in full in a single month or when one-off revenue is mixed in.",
      },
      {
        question: "Should a startup report ARR or MRR?",
        answer:
          "Report MRR internally for month-to-month decisions and ARR externally for investors and the board. Early-stage companies selling monthly plans usually lead with MRR; those selling annual enterprise contracts lead with ARR.",
      },
      {
        question: "Do one-off fees count towards ARR or MRR?",
        answer:
          "No. Setup, onboarding, training and consulting fees are non-recurring and must be excluded from both. Including them inflates the metric and breaks any comparison over time.",
      },
    ],
    relatedToolKey: "mrr",
    resources: [
      { label: "What Is MRR and How to Calculate It", href: "/en/blog/what-is-mrr-how-to-calculate/" },
      {
        label: "MRR Calculator",
        href: "/en/free-tools/mrr-calculator",
      },
      {
        label: "ARR Calculator",
        href: "/en/free-tools/arr-calculator",
      },
      {
        label: "What Is NRR and Why It Beats ARR in SaaS",
        href: "/en/blog/what-is-nrr-saas-growth-metric",
      },
    ],
  },
  {
    slug: "6-ways-to-increase-freemium-conversion-rate",
    title: "6 Ways to Increase Your Freemium-to-Paid Conversion Rate",
    description:
      "What a freemium conversion rate is, what counts as healthy and six practical tactics that turn free users into paying customers — with worked examples.",
    category: "saas-buyume",
    tldr: [
      "Freemium conversion rate = paid upgrades / total free users × 100. Typical self-serve SaaS range is 2-5%.",
      "Conversion is driven less by hiding features and more by getting users to the activation moment fast.",
      "Capping usage volume (records, seats, sends) usually converts better than locking core features.",
      "Free-user cost belongs in CAC: a lower conversion rate directly lengthens CAC payback.",
    ],
    publishedAt: "2026-08-17",
    readingMinutes: 6,
    tags: ["SaaS", "Freemium", "Conversion Rate", "Growth"],
    sections: [
      {
        heading: "What Is a Freemium Conversion Rate?",
        paragraphs: [
          "The freemium conversion rate measures how many of your free users upgrade to a paid plan. The formula is simple: Freemium Conversion Rate = Paid Upgrades / Total Free Users × 100.",
          "Example: a product that signs up 8,000 free users a month and converts 240 of them runs at 240 / 8,000 × 100 = 3%. In self-serve SaaS, 2-5% is typical and anything above 6% is strong. Free-trial models sit far higher, usually 15-25% when a card is required upfront.",
          "Reading the rate alone is misleading. Infrastructure and support cost per free user must be weighed against ARPA: a 2% rate can be highly profitable with strong ARPA, while 5% can lose money with low ARPA and heavy infrastructure.",
        ],
      },
      {
        heading: "Six Ways to Turn Free Users Into Customers",
        paragraphs: [
          "The six tactics below are ordered by expected impact. Rather than shipping them all at once, run each as a separate A/B test and measure the delta in conversion rate per cohort.",
        ],
        bullets: [
          "1. Pull the activation moment forward: define the single action where a user first feels the product's value (first report, first integration, first invite) and reduce onboarding to that one goal. Activated users typically convert 5-10x better than non-activated ones.",
          "2. Cap volume, not features: limit projects, seats, monthly sends or storage instead of locking the core value. The more a user likes the product, the sooner they hit the ceiling — the highest-intent upgrade moment there is.",
          "3. Warn before the wall: an 80%-of-limit notice converts far better than a paywall shown after the limit is hit. Spell out the concrete benefit inside the warning: \"Upgrade to Pro to run three more reports this month.\"",
          "4. Keep paid features visible but locked: a preview that shows what a locked feature does drives materially more upgrades than hiding it entirely, because users cannot want what they never see.",
          "5. Offer a time-boxed Pro trial: unlock every paid feature for 14 days after signup. When the trial ends, the user knows exactly what they lost — loss aversion is a much stronger upgrade motivator than an abstract feature list.",
          "6. Build behaviour-triggered email flows: replace the generic welcome series with segment-specific sequences — one for users who never activated, another for users approaching their limit. Segmented flows are among the fastest wins available.",
        ],
      },
      {
        heading: "Measuring the Rate Correctly",
        paragraphs: [
          "The most common measurement mistake is dividing this month's upgrades by this month's signups. In freemium, conversion often happens weeks later, so cohort-based measurement is essential: track the 30-, 60- and 90-day conversion of each signup cohort separately.",
          "The second mistake is managing a single blended average. Break the rate down by channel (organic, paid, referral), company size and activation status and you will routinely find 3-5x differences. Reallocating budget along that breakdown lifts overall conversion without shipping a single product change.",
          "The third is ignoring what freemium does to CAC. The infrastructure and support cost of free users is effectively part of acquisition cost. When conversion falls, effective CAC rises and payback stretches — so always read conversion rate next to CAC payback period.",
        ],
      },
    ],
    faq: [
      {
        question: "What is a good freemium conversion rate?",
        answer:
          "2-5% is typical for self-serve SaaS and above 6% is strong. Free-trial models convert much higher: roughly 8-15% without a credit card upfront and 15-25% with one.",
      },
      {
        question: "How do you calculate freemium conversion rate?",
        answer:
          "Divide paid upgrades by total free users and multiply by 100. With 240 upgrades out of 8,000 free users the rate is 3%. Measure it by cohort — the 30/60/90-day conversion of users who signed up in the same period — for an accurate figure.",
      },
      {
        question: "Does freemium or free trial convert better?",
        answer:
          "Free trials convert at a higher percentage but attract fewer users into the funnel. Freemium converts a lower share of a much larger base, so absolute paid customers are often higher. Choose trials when value is felt quickly, freemium when there are network effects or long evaluation cycles.",
      },
      {
        question: "Where should the free plan be limited?",
        answer:
          "Do not lock the core value; limit usage volume instead. Users hit the ceiling precisely because they find the product useful, which makes the upgrade decision feel natural rather than forced.",
      },
      {
        question: "How does freemium conversion affect CAC?",
        answer:
          "Free users carry real infrastructure and support cost, which belongs in acquisition cost. A lower conversion rate spreads that cost over fewer paying customers, raising effective CAC and lengthening CAC payback period.",
      },
    ],
    relatedToolKey: "conversion",
    resources: [
      {
        label: "Conversion Rate Calculator",
        href: "/en/free-tools/conversion-rate-calculator",
      },
      {
        label: "CAC Payback Period Calculator",
        href: "/en/free-tools/cac-payback-period-calculator",
      },
      {
        label: "What Is NRR and Why It Beats ARR in SaaS",
        href: "/en/blog/what-is-nrr-saas-growth-metric",
      },
    ],
  },
  {
    slug: "what-is-roas-how-to-calculate",
    seoTitle: "What Is ROAS & How to Calculate It? What's a Good ROAS?",
    title: "What Is ROAS, How Do You Calculate It, and What's a Good ROAS? (With Break-Even Formula)",
    description:
      "The ROAS formula, how to calculate break-even and target ROAS, and why in-platform ROAS can mislead you — a step-by-step guide with worked examples.",
    category: "performans-pazarlama",
    tldr: [
      "ROAS = Revenue from ads / Ad spend. Spend $1,000 and generate $4,000 in revenue and your ROAS is 4 (or 400%).",
      "There is no universal 'good ROAS' — the threshold depends on your gross margin: Break-even ROAS = 1 / Gross margin.",
      "At a 40% margin, break-even ROAS is 2.5; a 3 ROAS is profitable, a 2 ROAS loses money on every sale.",
      "Validate decisions with MER (total revenue / total marketing spend), not just the ROAS shown in ad platforms.",
    ],
    publishedAt: "2026-10-22",
    updatedAt: "2026-10-27",
    readingMinutes: 7,
    tags: ["ROAS", "Performance Marketing", "Google Ads", "Meta Ads", "E-commerce"],
    sections: [
      {
        heading: "What Is ROAS?",
        paragraphs: [
          "ROAS (Return on Ad Spend) tells you how much revenue you generate for every dollar spent on advertising. It is the most common way to compare efficiency across campaigns, ad sets and creatives in performance marketing.",
          "ROAS is a revenue metric, not a profitability metric. That distinction is the key to reading it correctly: the same 4 ROAS can be highly profitable for a 70%-margin digital product and a loss for a 20%-margin electronics store.",
        ],
      },
      {
        heading: "How to Calculate ROAS",
        paragraphs: [
          "Formula: ROAS = Revenue attributed to ads / Ad spend. The result is expressed either as a ratio (4.0) or a percentage (400%); both say the same thing.",
          "Example: An e-commerce brand spends $12,000 a month on Meta Ads and generates $50,400 in revenue attributed to those ads. ROAS = 50,400 / 12,000 = 4.2.",
          "Use net revenue: exclude sales tax or VAT and subtract refunds and returns. Ad platforms typically count gross cart value and returned orders, which can inflate ROAS by 20-30% versus reality.",
        ],
      },
      {
        heading: "Gross ROAS vs Net ROAS vs Profit ROAS (POAS)",
        paragraphs: [
          "Three different numbers are all called ROAS, and mixing them up is the most common reason a 'profitable' campaign loses money.",
          "Gross ROAS is what ad platforms report: all attributed revenue — often including VAT or sales tax and orders that are later refunded — divided by ad spend. Net ROAS uses revenue after tax and refunds. Profit ROAS, usually called POAS (profit on ad spend), divides the gross profit the ads generated by spend: POAS = Revenue × Margin / Ad spend.",
          "Example: a campaign reports 4.0 gross ROAS. Remove 20% VAT (4.0 / 1.2 ≈ 3.33) and the true net ROAS is about 3.3 before refunds. At a 30% contribution margin, POAS = 3.33 × 0.30 ≈ 1.0 — the campaign only breaks even. POAS has a fixed break-even point of 1.0, which makes it easier to compare products with different margins.",
        ],
      },
      {
        heading: "Break-Even ROAS: The Real Answer to 'What's a Good ROAS?'",
        paragraphs: [
          "To know whether a campaign actually makes money, you first need your break-even ROAS. In its simplest form: Break-even ROAS = 1 / Gross margin.",
          "Example: If your average gross margin is 40%, break-even ROAS = 1 / 0.40 = 2.5. Any campaign below 2.5 ROAS isn't covering its ad cost. At a 25% margin the threshold rises to 4; at 60% it drops to roughly 1.67.",
          "For a more realistic threshold, also subtract per-order variable costs such as shipping, payment fees and packaging. With a 40% gross margin and variable costs equal to 10% of revenue, contribution margin is 30% and break-even ROAS rises to 1 / 0.30 ≈ 3.33.",
        ],
        bullets: [
          "60% gross margin → break-even ROAS ≈ 1.67",
          "40% gross margin → break-even ROAS = 2.5",
          "30% gross margin → break-even ROAS ≈ 3.33",
          "20% gross margin → break-even ROAS = 5",
        ],
      },
      {
        heading: "How to Set a Target ROAS",
        paragraphs: [
          "Break-even is the minimum to avoid losing money; target ROAS also builds in the profit you want. Formula: Target ROAS = 1 / (Contribution margin − Target net profit rate).",
          "Example: With a 30% contribution margin and a goal of keeping 10% of revenue as profit after ads, target ROAS = 1 / (0.30 − 0.10) = 5. The value you enter into Google Ads' Target ROAS (tROAS) bid strategy should come from this math — not an arbitrary '400%'.",
          "Growth-stage brands focused on acquiring new customers may deliberately accept a first-order ROAS below break-even, as long as customer lifetime value (LTV) closes the gap. In that case the decision metric is LTV / CAC, not first-order ROAS.",
        ],
      },
      {
        heading: "Why In-Platform ROAS Can Mislead You",
        paragraphs: [
          "Google Ads and Meta Ads each report using their own attribution models. Both platforms can claim the same sale, and effects such as Meta's view-through attribution or Google's branded-search conversions inflate combined ROAS. Adding up platform ROAS figures and treating the total as real performance is one of the most common budgeting mistakes.",
          "The antidote is MER (Marketing Efficiency Ratio): Total revenue / Total marketing spend. MER sidesteps the attribution debate; if platform ROAS rises while MER falls, your ads may be claiming existing demand rather than creating new demand.",
          "A practical split: optimize creatives and campaigns on platform ROAS, but make budget decisions on MER and your break-even threshold. Report branded-search campaigns separately too — otherwise the high ROAS from people already searching for you hides weak campaigns.",
        ],
      },
      {
        heading: "Does ROAS Work for B2B?",
        paragraphs: [
          "In B2B, where sales cycles run weeks or months, the gap between ad day and revenue day makes classic ROAS look close to zero. More meaningful here are pipeline ROAS (Pipeline value created / Ad spend) based on CRM opportunity values, and CAC payback period.",
          "Rule of thumb: ROAS is the core decision metric for one-off e-commerce sales; for recurring-revenue SaaS and B2B models, CAC, LTV and payback period take its place.",
        ],
      },
    ],
    faq: [
      {
        question: "What is ROAS?",
        answer:
          "ROAS (Return on Ad Spend) is the ratio of revenue generated by ads to the amount spent on those ads. If $10,000 in spend produced $40,000 in revenue, ROAS is 4 (or 400%).",
      },
      {
        question: "What is a good ROAS?",
        answer:
          "There is no universal 'good ROAS'; the threshold depends on your gross margin. Break-even ROAS = 1 / Gross margin. At a 40% margin break-even is 2.5, and anything above it is profitable. Low-margin categories may need 5 or more, while high-margin digital products can be profitable at 2.",
      },
      {
        question: "What's the difference between ROAS and ROI?",
        answer:
          "ROAS divides revenue by ad spend and ignores costs. ROI measures net profitability with (Profit − Investment) / Investment. A high ROAS doesn't guarantee a high ROI; a 4 ROAS can lose money on a low-margin product.",
      },
      {
        question: "How do you calculate break-even ROAS?",
        answer:
          "Break-even ROAS = 1 / Gross margin. For a more accurate number, use contribution margin by also subtracting per-order variable costs like shipping and payment fees. With a 30% contribution margin, break-even ROAS is 1 / 0.30 ≈ 3.33.",
      },
      {
        question: "Should sales tax or VAT be included when calculating ROAS?",
        answer:
          "No. Use net revenue that excludes sales tax or VAT and subtracts refunds. Ad platforms often report gross cart value, so in-platform ROAS usually looks higher than the true figure.",
      },
    ],
    howTo: {
      name: "How to calculate break-even and target ROAS",
      description:
        "Start from your gross margin to set break-even and target ROAS thresholds for your campaigns.",
      steps: [
        { name: "Find your gross margin", text: "For the average order, calculate (Price − Cost of goods) / Price." },
        { name: "Subtract variable costs", text: "Deduct per-order costs such as shipping, payment fees and packaging, as a percentage of revenue, to get contribution margin." },
        { name: "Calculate break-even ROAS", text: "Divide 1 by contribution margin. At a 30% contribution margin, break-even ROAS ≈ 3.33." },
        { name: "Add your profit target", text: "Use Target ROAS = 1 / (Contribution margin − Target net profit rate) to set the value for your bid strategy." },
        { name: "Validate with MER", text: "Divide monthly total revenue by total marketing spend and check that platform ROAS matches real business results." },
      ],
    },
    relatedToolKey: "roas",
    resources: [
      { label: "How to Calculate Profit Margin (Margin vs Markup)", href: "/en/blog/how-to-calculate-profit-margin/" },
      { label: "ROAS Calculator", href: "/en/free-tools/roas-calculator/" },
      { label: "Gross Profit Margin Calculator", href: "/en/free-tools/gross-profit-margin-calculator/" },
      { label: "How to Set Target ROAS in Google Ads", href: "/en/blog/how-to-set-target-roas-google-ads/" },
      { label: "7 Data-Driven Ways to Multiply Your Google Ads Performance", href: "/en/blog/google-ads-performance-optimization/" },
      { label: "How to Exit Meta Ads Learning Phase Fast", href: "/en/blog/meta-ads-exit-learning-phase-tactics/" },
      { label: "Google Ads Help: About Target ROAS bidding", href: "https://support.google.com/google-ads/answer/6268637", external: true },
    ],
  },
  {
    slug: "how-to-set-advertising-budget",
    seoTitle: "How to Set an Advertising Budget: Work Back From Goals",
    title: "How to Set an Advertising Budget: A 5-Step Work-Backward Method (With Black Friday Notes)",
    description:
      "Set your ad budget from target revenue, contribution margin and max CPA instead of a % of sales. Worked example, test budget, B2B funnel and Q4 planning.",
    category: "performans-pazarlama",
    tldr: [
      "Work backward from the goal: Budget = Target revenue / Target ROAS, or Target orders (or customers) × Maximum CPA.",
      "Target ROAS and max CPA come from contribution margin: with a 35% margin and a 10% profit target, target ROAS is 4 and max CPA on a $120 order is $30.",
      "Check feasibility before you commit: Real CPA ≈ CPC / Conversion rate. A $0.60 CPC at 1.5% conversion means a $40 CPA, and the plan fails.",
      "Discounts cut margin: a 20% Black Friday discount (November 27, 2026) can lift break-even ROAS from 2.86 to about 4.7.",
    ],
    publishedAt: "2026-10-23",
    readingMinutes: 9,
    tags: ["Ad Budget", "Performance Marketing", "ROAS", "CPA", "Google Ads", "Meta Ads", "E-commerce"],
    sections: [
      {
        heading: "Short Answer: Calculate Your Ad Budget Backward From the Goal",
        paragraphs: [
          "The most reliable way to set an advertising budget is to start from the result you want and work backward: decide how many orders, how much revenue or how many new customers you need, then how much you can afford to pay for each one (maximum CPA). The budget is the product of the two: Budget = Target orders × Max CPA, or Budget = Target revenue / Target ROAS.",
          "This replaces the vague 'what percentage of revenue' question and ties every dollar to a profitability threshold. You can run the steps below with your own numbers in the free Ad Budget Calculator, which applies the same formulas and the feasibility check automatically.",
        ],
      },
      {
        heading: "Three Ways to Set a Budget — and When Each Works",
        paragraphs: [
          "Many guides suggest spending a fixed share of revenue, often 5-15%. It is a quick starting point but has no real basis: the same percentage means something completely different for a 60%-margin cosmetics brand and a 15%-margin electronics reseller.",
          "The second method is competitive parity — matching what rivals appear to spend. It is a useful market signal, but you don't know their margins, LTV or how long they can tolerate losses.",
          "The third, and most reliable, is the objective-and-task (unit economics) method: target outcome × allowable unit cost. Use the other two only to sanity-check it.",
        ],
        bullets: [
          "Percent of revenue → fast estimate; ignores margin and goals.",
          "Competitive parity → market signal; you can't see rivals' economics.",
          "Work backward (unit economics) → tied to profit, measurable and defensible.",
        ],
      },
      {
        heading: "Step 1: Find Contribution Margin, Break-Even ROAS and Max CPA",
        paragraphs: [
          "First, know what an order leaves you before advertising. Contribution margin = Gross margin − per-order variable costs (shipping, payment fees, packaging, marketplace commission) as a share of revenue. A store with a 45% gross margin and variable costs equal to 10% of revenue has a 35% contribution margin.",
          "Break-even ROAS = 1 / Contribution margin = 1 / 0.35 ≈ 2.86. Break-even CPA = Average order value × Contribution margin; on a $120 order that is $42. These are the points where ads start losing money. See What Is ROAS and How Do You Calculate It? for more detail.",
          "If you also want profit, subtract your target net margin: Target ROAS = 1 / (Contribution margin − Target profit rate). With a 10% target, 1 / 0.25 = 4, and max CPA = $120 × 0.25 = $30. Use revenue net of sales tax and returns throughout.",
        ],
      },
      {
        heading: "Step 2: From Goal to Budget — A Worked Example",
        paragraphs: [
          "The example store wants $60,000 in net ad-driven revenue in November. With a $120 average order, that is 500 orders. At a target ROAS of 4, budget = $60,000 / 4 = $15,000; check: 500 orders × $30 max CPA = $15,000.",
          "The plan's contribution after ad spend is $60,000 × 0.35 − $15,000 = $6,000. When converting to a daily budget, remember how Google Ads paces spend: Google says it can spend up to 2× your average daily budget on a given day, but you won't be billed more than about 30.4× the average daily budget in a month. For a $15,000 monthly plan, that is an average daily budget of roughly $493.",
        ],
        bullets: [
          "Target revenue: $60,000 (net of tax and returns)",
          "Average order: $120 → 500 orders",
          "Contribution margin 35% → break-even ROAS 2.86 · break-even CPA $42",
          "Profit target 10% → target ROAS 4 · max CPA $30",
          "Budget: $15,000/month ≈ $493 average daily budget",
        ],
      },
      {
        heading: "Step 3: Feasibility Check — Is the Plan Realistic?",
        paragraphs: [
          "A budget on paper only works if your actual click costs and conversion rate allow it. Real CPA ≈ CPC / Conversion rate. If the store's history shows a $0.60 CPC and 1.5% conversion, real CPA is $0.60 / 0.015 = $40 — above the $30 target.",
          "In that case 500 orders cost $20,000 and contribution after ads falls to $60,000 × 0.35 − $20,000 = $1,000. Three levers can rescue the plan: lift conversion to 2% ($0.60 / 0.02 = $30), cut CPC to $0.45, or grow basket size. If none is possible, revisit the profit expectation or product mix rather than the revenue goal.",
          "This step is rarely covered in budgeting guides, yet it is the one that actually decides the budget: a budget is the product of measured unit costs, not of the goal alone.",
        ],
      },
      {
        heading: "Step 4: Minimum Test Budget and the Learning Phase",
        paragraphs: [
          "Algorithms need data to learn. A widely used rule of thumb for Meta ads is that an ad set needs about 50 optimization events per week to exit the learning phase. Minimum weekly budget ≈ 50 × target CPA; with a $30 CPA that is $1,500 per ad set per week, or about $215 per day.",
          "If that exceeds your budget, run fewer ad sets, consolidate into one, or temporarily optimize for a more frequent event (add to cart, initiate checkout). Splitting spend across many small ad sets means none of them learns. See our guide to exiting the Meta Ads learning phase for more.",
          "When testing new channels, a common and practical starting split is roughly 70% to proven campaigns, 20% to scaling ones and 10% to experiments; adjust the ratios to your own results.",
        ],
      },
      {
        heading: "Step 5: Budgeting Through the Funnel for B2B and SaaS",
        paragraphs: [
          "With long sales cycles, the goal is new customers, not orders, and you work backward through the funnel. Example: 6 new customers a month, 25% SQL-to-customer → 24 SQLs; 30% lead-to-SQL → 80 leads. At a $75 cost per lead, the monthly ad budget is 80 × $75 = $6,000.",
          "The control metric is CAC: $6,000 / 6 = $1,000 paid CAC. If gross-profit LTV per customer is $4,500, LTV:CAC is 4.5 — above 3, so the plan is healthy. Check fully loaded CAC including sales costs separately.",
        ],
      },
      {
        heading: "Budgeting for Black Friday and November Sales",
        paragraphs: [
          "Black Friday falls on November 27 in 2026. The most common mistake is applying a normal month's target ROAS to discounted prices. Discounts shrink contribution margin: sell the $120 product at 20% off for $96 and the product cost ($66) stays the same, variable costs become $9.60, contribution drops to $20.40 and the contribution margin to 21.25%. Break-even ROAS rises from 2.86 to about 4.7.",
          "So during the sale, a higher conversion rate has to make up for the thinner margin. Budget against that new threshold and report discounted and full-price products in separate campaigns.",
          "Timing: launch campaigns 1-2 weeks before peak days so the learning phase doesn't overlap the sale. If you use Smart Bidding in Google Ads, consider seasonality adjustments for short events where you expect a big jump in conversion rate; Google recommends them for 1-7 day events and notes they may not work as well beyond 14 days. Recalculate November ROAS after the return window closes.",
        ],
      },
      {
        heading: "When to Increase or Cut the Budget",
        paragraphs: [
          "Decide on marginal ROAS, not average ROAS: extra revenue from the last $1,000 added / $1,000. If average ROAS is 4 but the last increment returns 2, that extra spend loses money at a 35% contribution margin.",
          "Scale gradually and watch results for a few days after each step; large, sudden budget changes can push the algorithm back into learning. When cutting, look at a 7-14 day window that covers conversion lag rather than daily noise.",
        ],
      },
      {
        heading: "6 Common Ad Budgeting Mistakes",
        paragraphs: ["These mistakes lead to unprofitable growth no matter how large the budget is:"],
        bullets: [
          "Calculating ROAS on revenue that includes tax and returns.",
          "Using gross margin instead of contribution margin (shipping, fees, payment costs).",
          "Budgeting a goal without a feasibility check against real CPC and conversion rate.",
          "Splitting spend across too many small ad sets to learn.",
          "Using a normal month's target ROAS during discount periods.",
          "Adding up platform-reported ROAS without validating against MER (total revenue / total marketing spend).",
        ],
      },
    ],
    faq: [
      {
        question: "How do you set an advertising budget?",
        answer:
          "Work backward: set target orders or customers, derive max CPA from your contribution margin, then Budget = Target orders × Max CPA or Target revenue / Target ROAS. Finally, check the plan against your real CPC and conversion rate.",
      },
      {
        question: "What percentage of revenue should go to advertising?",
        answer:
          "The often-quoted 5-15% is only a rough start and ignores margin and goals. The right share is the inverse of your target ROAS: at a target ROAS of 4 you can spend 25% of ad-driven revenue on ads.",
      },
      {
        question: "How do you calculate maximum CPA?",
        answer:
          "Max CPA = Average order value × (Contribution margin − Target profit rate). A $120 order with a 35% contribution margin and a 10% profit target gives a $30 max CPA. Without a profit target ($42) it is your break-even CPA.",
      },
      {
        question: "What is a minimum ad budget for a new business?",
        answer:
          "Enough for the algorithm to learn. A common rule of thumb for Meta is about 50 conversions per ad set per week, so minimum weekly budget ≈ 50 × target CPA. If that is too high, start with one ad set or optimize for a more frequent event such as add to cart.",
      },
      {
        question: "How should you plan an ad budget for Black Friday?",
        answer:
          "Recalculate contribution margin at the discounted price — a 20% discount raises break-even ROAS sharply. Build the budget on that new threshold, launch 1-2 weeks early and consider Google Ads seasonality adjustments for short peak days.",
      },
    ],
    howTo: {
      name: "How to calculate an ad budget backward from your goal",
      description: "Use target revenue and contribution margin to set your monthly ad budget, target ROAS and maximum CPA.",
      steps: [
        { name: "Set the goal", text: "Define target net revenue (excluding tax and returns) and divide by average order value to get target orders." },
        { name: "Calculate contribution margin", text: "Subtract per-order variable costs such as shipping, fees, payment and packaging from gross margin." },
        { name: "Find target ROAS and max CPA", text: "Target ROAS = 1 / (Contribution margin − Target profit rate); Max CPA = Average order × (Contribution margin − Target profit rate)." },
        { name: "Calculate the budget", text: "Budget = Target revenue / Target ROAS = Target orders × Max CPA. Convert the monthly figure to a daily budget." },
        { name: "Check feasibility", text: "Real CPA ≈ CPC / Conversion rate. If real CPA exceeds max CPA, revisit conversion rate, CPC or the goal." },
      ],
    },
    relatedToolKey: "ad-budget",
    resources: [
      { label: "Ad Budget Calculator", href: "/en/free-tools/ad-budget-calculator/" },
      { label: "What Is ROAS and How Do You Calculate It?", href: "/en/blog/what-is-roas-how-to-calculate/" },
      { label: "How to Exit the Meta Ads Learning Phase Faster", href: "/en/blog/meta-ads-exit-learning-phase-tactics/" },
      { label: "Google Ads Help: About budgets", href: "https://support.google.com/google-ads/answer/10486536", external: true },
      { label: "Google Ads Help: About seasonality adjustments", href: "https://support.google.com/google-ads/answer/10369906", external: true },
    ],
  },
  {
    slug: "ga4-unassigned-traffic-how-to-fix",
    seoTitle: "GA4 Unassigned Traffic: What It Is and How to Fix It",
    title: "GA4 Unassigned Traffic: What It Is and How to Fix It (With a Wrong vs Right UTM Table)",
    description:
      "GA4 Unassigned traffic happens when source/medium matches no channel rule. A 5-minute diagnosis, a wrong-vs-right UTM table and permanent fixes.",
    category: "performans-pazarlama",
    tldr: [
      "Unassigned is traffic whose source/medium pair matches none of GA4's default channel rules; the visit is measured but lands in the wrong bucket.",
      "The usual cause is a non-standard utm_medium: values like story, bio, offline or whatsapp aren't recognised; paid_social, cpc, social, email, referral and affiliate are.",
      "Diagnose it: in Traffic acquisition, switch the primary dimension to 'Session source / medium' and filter for channel = Unassigned.",
      "Fix it: standardise UTMs, create a custom channel group for your own offline/QR channels, and check your tag setup if you see (not set).",
    ],
    publishedAt: "2026-10-23",
    readingMinutes: 7,
    tags: ["GA4", "Google Analytics", "UTM", "Unassigned", "Measurement", "Performance Marketing"],
    sections: [
      {
        heading: "What Is Unassigned Traffic in GA4?",
        paragraphs: [
          "Unassigned traffic is made up of sessions whose source and medium GA4 can't map to any rule in the default channel group. The visit is recorded, but it can't be credited to Paid Social, Email, Organic Search or any other channel, so it disappears from channel-level budget decisions.",
          "GA4 tries the rules Google publishes in order. A session whose medium starts with 'paid' or contains 'cp' goes to a paid channel, medium 'email' goes to Email, medium 'referral' goes to Referral. A combination that matches nothing becomes Unassigned.",
        ],
      },
      {
        heading: "Unassigned vs (not set) vs Direct",
        paragraphs: ["These three are often confused, but their causes differ. Identify which one you have first."],
        bullets: [
          "Unassigned: source/medium EXISTS but matches no channel rule. Usually a UTM naming problem.",
          "(not set): there is NO source information. Usually a tagging problem: events without a session_start, a duplicate gtag install, events firing before the Google tag, or Measurement Protocol events sent with the wrong client_id/session_id.",
          "Direct: source is genuinely '(direct)' and medium '(none)' — typed URLs, bookmarks or hops that lose the referrer.",
        ],
      },
      {
        heading: "A 5-Minute Diagnosis",
        paragraphs: [
          "Open Reports › Acquisition › Traffic acquisition. Change the table's primary dimension from 'Session primary channel group' to 'Session source / medium' and add a filter for 'Session primary channel group = Unassigned'.",
          "The rows you see are the problem: pairs like 'instagram / story', 'digest / newsletter' or 'qr / offline' tell you exactly which campaign links to fix. Start with the row that brings the most sessions; on most sites a handful of links account for most Unassigned traffic.",
          "If the rows show '(not set)', the issue isn't UTMs but your tag setup — jump to the (not set) checklist below.",
        ],
      },
      {
        heading: "Wrong vs Right UTM Table",
        paragraphs: ["The rule: platform goes in utm_source, channel type in utm_medium, using mediums GA4 recognises. These mappings follow Google's default channel rules."],
        bullets: [
          "Instagram story ad: medium=story ✗ → source=instagram, medium=paid_social ✓ (Paid Social)",
          "Instagram bio link: medium=bio ✗ → source=instagram, medium=social ✓ (Organic Social)",
          "Email newsletter: medium=newsletter ✗ → source=newsletter, medium=email ✓ (Email)",
          "WhatsApp share: source=campaign, medium=whatsapp ✗ → source=whatsapp, medium=social ✓ (Organic Social)",
          "SMS campaign: medium=text ✗ → source=sms, medium=sms ✓ (SMS)",
          "Influencer: medium=influencer ✗ → source=creator-name, medium=affiliate ✓ (Affiliates)",
          "QR code on a flyer: medium=offline ✗ → source=qr, medium=referral ✓ (Referral) — or a custom channel group",
          "Banner/display: medium=ads ✗ → medium=display or cpm ✓ (Display)",
        ],
      },
      {
        heading: "How to Fix Unassigned Traffic for Good",
        paragraphs: [
          "1) Standardise UTMs: use one source/medium list across the team, lowercase only, no accented characters. Our free UTM Builder shows which GA4 channel a link will land in and warns about Unassigned before you share it.",
          "2) Create a custom channel group for your own channels: if you run offline, QR or event campaigns that Google's default list doesn't cover, go to Admin › Data display › Channel groups, create a new group and map those mediums to your own channel. Custom channel groups also apply to historical data.",
          "3) Use auto-tagging for Google Ads: according to Google, when gclid and manual UTMs are both present, source/medium use the auto-tagged values, so adding UTMs to Google Ads links is unnecessary.",
          "4) Make sure redirects keep your UTMs: link shorteners and http→https or www→apex redirects must not strip parameters. Open the link and check the utm_ parameters survive to the final URL.",
        ],
      },
      {
        heading: "Seeing (not set)? Tag Setup Checklist",
        paragraphs: ["(not set) sessions carry no source information at all, and UTM fixes won't help. Common causes:"],
        bullets: [
          "The gtag/Google tag is installed twice (e.g. hard-coded and via Google Tag Manager, or a plugin plus theme code).",
          "Event tags fire before the Google tag; in GTM make sure the Google tag uses the Initialization trigger.",
          "Measurement Protocol events (refunds, offline sales) don't reuse the original client_id and session_id.",
          "During a server-side migration some events go through the server container and others directly to GA4.",
          "Consent setup is broken and the share of denied sessions is high.",
        ],
      },
      {
        heading: "How Much Unassigned Traffic Is Normal?",
        paragraphs: [
          "You can't always reach zero: ad blockers, very short sessions and in-app browsers can leave a small share. What matters is that the share is small and explainable. If Unassigned grows month over month, or one source/medium row dominates, it's a naming error to fix. Add the diagnosis to your monthly routine and check the channel prediction before launching new campaign links.",
        ],
      },
    ],
    faq: [
      { question: "What does Unassigned mean in GA4?", answer: "The session has a source/medium, but it matches none of GA4's default channel rules. The traffic is measured but grouped under 'Unassigned' instead of a channel like Paid Social or Email." },
      { question: "How do I fix Unassigned traffic?", answer: "Switch Traffic acquisition to 'Session source / medium', find the Unassigned rows and change utm_medium on those links to a recognised value such as paid_social, cpc, social, email, referral or affiliate. Create a custom channel group for your own offline channels." },
      { question: "What's the difference between Unassigned and (not set)?", answer: "Unassigned has a source/medium that can't be mapped to a channel — usually a UTM issue. (not set) has no source information at all and comes from tagging issues like duplicate gtag installs, events without a session start or Measurement Protocol errors." },
      { question: "Why do WhatsApp and QR code visits show as Unassigned?", answer: "Usually because utm_medium is set to an unrecognised value such as 'whatsapp' or 'offline'. Use source=whatsapp, medium=social for WhatsApp and source=qr, medium=referral for QR codes, or create a custom channel group for them." },
      { question: "Do custom channel groups fix historical data?", answer: "Yes. Custom channel groups in GA4 apply to historical data in reports. The default channel group doesn't change, so switch the report dimension to your custom group." },
    ],
    howTo: {
      name: "How to fix Unassigned traffic in GA4",
      description: "Find the source of Unassigned traffic and fix your UTMs and channel groups.",
      steps: [
        { name: "Open the report", text: "Go to Reports › Acquisition › Traffic acquisition." },
        { name: "Change the dimension", text: "Set the primary dimension to 'Session source / medium' and filter for channel group = Unassigned." },
        { name: "Classify the rows", text: "Real source/medium values point to UTM issues; (not set) points to your tag setup." },
        { name: "Fix the UTMs", text: "Change utm_medium on those campaign links to values GA4 recognises; build new links with a UTM tool." },
        { name: "Add a custom channel group", text: "For your own offline/QR channels, create a custom group under Admin › Data display › Channel groups." },
      ],
    },
    relatedToolKey: "utm",
    resources: [
      { label: "UTM Builder (with GA4 channel check)", href: "/en/free-tools/utm-builder/" },
      { label: "What Are UTM Parameters? Guide", href: "/en/blog/what-are-utm-parameters/" },
      { label: "How to Set an Advertising Budget", href: "/en/blog/how-to-set-advertising-budget/" },
      { label: "Google Analytics Help: Default channel group rules", href: "https://support.google.com/analytics/answer/9756891", external: true },
      { label: "Google Analytics Help: Google Ads auto-tagging", href: "https://support.google.com/analytics/answer/10723328", external: true },
    ],
  },
  {
    slug: "black-friday-2026-ad-plan",
    seoTitle: "Black Friday 2026 Ad Plan: Timeline, Budget and Margin",
    title: "Black Friday 2026 Ad Plan: A 5-Week Timeline, Discount Margin Math and Budget",
    description:
      "Black Friday is November 27, 2026. A week-by-week ad timeline, how discounts change break-even ROAS, budget math and the 30-day lowest price rule in Turkey.",
    category: "performans-pazarlama",
    tldr: [
      "Black Friday 2026 is Friday, November 27; Cyber Monday is November 30. Start ad preparation at least five weeks out, in late October.",
      "Discounts eat margin: on a 35% contribution-margin product, a 20% discount lifts break-even ROAS from 2.86 to 4.71 and 30% to 8.75; at 40% you lose money even without ads.",
      "Budget from the contribution margin at the discounted price, and launch campaigns 1-2 weeks before peak days so the learning phase ends early.",
      "In Turkey, discount ads must use the lowest price of the previous 30 days as the 'price before discount'.",
    ],
    publishedAt: "2026-10-24",
    readingMinutes: 9,
    tags: ["Black Friday", "Holiday Sales", "Ad Budget", "ROAS", "E-commerce", "Google Ads", "Meta Ads"],
    sections: [
      {
        heading: "When Is Black Friday 2026, and When Should You Start?",
        paragraphs: [
          "Black Friday 2026 falls on Friday, November 27, and Cyber Monday on Monday, November 30. With a long discount season running through November, ad preparation should start by late October — about five weeks before peak days.",
          "Starting early does three things: it lets you work out profitability at discounted prices, finish the ad algorithms' learning phase before the expensive days, and build enough audience for retargeting. The timeline below sequences all three.",
        ],
      },
      {
        heading: "Week-by-Week Black Friday Ad Timeline",
        paragraphs: ["The timeline counts back from November 27. Each week has one main job; if a week slips, the next one gets squeezed."],
        bullets: [
          "Oct 26 – Nov 1: Goals and margin. Choose the products, calculate contribution margin and break-even ROAS at the discounted price, check stock and set a UTM standard.",
          "Nov 2 – 8: Audience and creative. Open an opt-in 'early access' list for email/SMS, produce creatives (video, static, catalog) and the campaign landing page.",
          "Nov 9 – 15: Test and learn. Launch Black Friday campaigns on a low budget so the learning phase finishes before peak days; use Singles' Day (11.11) as a small test.",
          "Nov 16 – 22: Pre-launch. Give the list early access; build retargeting audiences from visitors and cart abandoners.",
          "Nov 23 – 26: Gradual scaling. Raise budgets in steps; consider Google Ads seasonality adjustments for short peak days.",
          "Nov 27 – 30: Black Friday and Cyber Monday. Decide daily, not hourly; watch marginal ROAS, stock and return risk together.",
          "Dec 1 – 14: True results. Recalculate campaign ROAS after the return window and move new customers toward a second purchase.",
        ],
      },
      {
        heading: "How Much Does a Discount Eat Your Margin? (Break-Even ROAS Table)",
        paragraphs: [
          "The most expensive Black Friday mistake is applying a normal month's target ROAS to discounted prices. A discount lowers the price but not the product cost, so contribution margin shrinks much faster than the discount rate.",
          "Example: a product sold at $120 with a $66 product cost and per-order variable costs (shipping, payment, packaging) of 10% of price. At full price, contribution margin is 35% and break-even ROAS is 2.86.",
        ],
        bullets: [
          "No discount — $120: contribution $42 (35%) → break-even ROAS 2.86",
          "20% off — $96: contribution $20.40 (21.25%) → break-even ROAS 4.71",
          "30% off — $84: contribution $9.60 (11.43%) → break-even ROAS 8.75",
          "40% off — $72: contribution −$1.20 → every sale loses money even without ads",
        ],
      },
      {
        heading: "How to Calculate a Black Friday Ad Budget",
        paragraphs: [
          "Work backward from the contribution margin at the discounted price: Max CPA = Discounted price × (Contribution margin − Target profit rate). For the 20%-off product with no profit target, max CPA is $20.40, versus $42 at full price.",
          "Then check feasibility: Required conversion rate = Cost per click / Max CPA. At a $0.60 CPC, 1.43% conversion is enough at full price, but at 20% off you need at least 2.94%. If your conversion rate won't rise that much during the sale, shrink the discount, grow basket size (bundles, free-shipping threshold) or shift budget to higher-margin products.",
          "For the full work-backward method and feasibility check, see How to Set an Advertising Budget and the Ad Budget Calculator.",
        ],
      },
      {
        heading: "The 30-Day Rule for Discount Ads in Turkey",
        paragraphs: [
          "Under a 2022 amendment to Turkey's Regulation on Commercial Advertising and Unfair Commercial Practices, discount announcements must use the lowest price applied in the 30 days before the discount as the 'price before discount'. Perishable goods such as fruit and vegetables are treated differently.",
          "In practice, raising prices in early November to show a 'big discount' on Black Friday doesn't work and carries enforcement risk. Calculate the discount rates and strike-through prices in your creatives accordingly, and check with legal counsel when in doubt.",
        ],
      },
      {
        heading: "Set Up Measurement Before Black Friday",
        paragraphs: [
          "To see which channel actually makes money during the peak, measurement must be ready before the campaign. Build every email, SMS, influencer and social link with standard UTMs; otherwise much of the traffic shows up as 'Unassigned' in GA4.",
          "Name Black Friday campaigns separately (e.g. utm_campaign=black-friday-2026) and report discounted and full-price products apart. When the sale ends, look at total revenue / total marketing spend (MER) alongside platform ROAS.",
        ],
      },
      {
        heading: "5 Common Black Friday Ad Mistakes",
        paragraphs: ["These are the most common reasons a campaign brings revenue but no profit:"],
        bullets: [
          "Applying a normal month's target ROAS to discounted prices.",
          "Launching on Black Friday morning, so the learning phase lands on the most expensive days.",
          "Using the same discount on every product and losing money on low-margin items.",
          "Showing discount rates without accounting for the lowest price of the previous 30 days.",
          "Treating campaign ROAS as final before the return window closes.",
        ],
      },
    ],
    faq: [
      { question: "When is Black Friday 2026?", answer: "Black Friday 2026 is Friday, November 27. Cyber Monday is Monday, November 30." },
      { question: "When should Black Friday ads start?", answer: "Start preparing at least five weeks out; launch campaigns on a low budget 1-2 weeks before peak days so the learning phase finishes early, then scale budgets gradually in the final week." },
      { question: "How should I choose the discount rate?", answer: "Calculate contribution margin at the discounted price. On a 35% contribution-margin product, 20% off lifts break-even ROAS to 4.71 and 40% off loses money even without ads. Keep discounts small on low-margin products or grow basket size with bundles and shipping thresholds." },
      { question: "How should the pre-discount price be shown in Turkey?", answer: "Under Turkish regulation, discount announcements must use the lowest price of the 30 days before the discount as the reference price. Raising prices in early November to show a discount breaks this rule." },
      { question: "How big should a Black Friday budget be?", answer: "Work backward: target orders × max CPA at the discounted price. Then check that real CPA (CPC / conversion rate) stays under that limit." },
    ],
    howTo: {
      name: "How to build a Black Friday ad plan",
      description: "Plan profitable Black Friday ads with a five-week timeline.",
      steps: [
        { name: "Calculate margin", text: "Calculate contribution margin and break-even ROAS at the discounted price for each campaign product." },
        { name: "Set the budget", text: "Budget = target orders × max CPA at the discounted price; check the required conversion rate." },
        { name: "Set up measurement", text: "Build every campaign link with standard UTMs and name Black Friday campaigns separately." },
        { name: "Launch early", text: "Open campaigns on a low budget 1-2 weeks before peak days to finish the learning phase." },
        { name: "Scale gradually", text: "Raise budgets step by step in the final week; monitor marginal ROAS and stock daily during the sale." },
        { name: "Review after returns", text: "After the return window, recalculate true ROAS and MER and move new customers toward a second purchase." },
      ],
    },
    relatedToolKey: "ad-budget",
    resources: [
      { label: "Ad Budget Calculator", href: "/en/free-tools/ad-budget-calculator/" },
      { label: "How to Set an Advertising Budget", href: "/en/blog/how-to-set-advertising-budget/" },
      { label: "GA4 Unassigned Traffic: What It Is and How to Fix It", href: "/en/blog/ga4-unassigned-traffic-how-to-fix/" },
      { label: "UTM Builder", href: "/en/free-tools/utm-builder/" },
      { label: "Google Ads Help: Seasonality adjustments", href: "https://support.google.com/google-ads/answer/10369906", external: true },
    ],
  },
  {
    slug: "how-to-set-target-roas-google-ads",
    seoTitle: "How to Set Target ROAS in Google Ads (From Your Margin)",
    title: "How to Set Target ROAS in Google Ads: Calculate tROAS From Your Margin",
    description:
      "Calculate Google Ads target ROAS from your contribution margin: formula, returns adjustment, starting value, step changes and the most profitable target.",
    category: "performans-pazarlama",
    tldr: [
      "Target ROAS (%) = 100 / (Contribution margin − Target profit rate). With a 35% contribution margin and a 10% profit goal, you enter 400% in Google Ads.",
      "Platform conversion value includes orders that are later returned, so divide the target by (1 − return rate): at 15% returns, 400% becomes about 470%.",
      "Start close to your historical ROAS (last 4 weeks or 3 conversion cycles), change the target in steps and wait 1–2 conversion cycles after each change.",
      "The highest ROAS is not the highest profit: raising the target also cuts spend and sales. The right target is where the last dollar of spend still clears break-even.",
    ],
    publishedAt: "2026-10-25",
    readingMinutes: 9,
    tags: ["Target ROAS", "tROAS", "Google Ads", "Smart Bidding", "ROAS", "Ecommerce"],
    sections: [
      {
        heading: "How do you set a target ROAS? (Short answer)",
        paragraphs: [
          "Derive target ROAS from your own contribution margin, not from the account average or a rule of thumb like '400% is good'. Formula: Target ROAS (%) = 100 / (Contribution margin − Target profit rate).",
          "Example: after product cost, shipping, payment fees and packaging, 35% of revenue is left on each order (contribution margin), and you want to keep 10% of revenue as profit after ads. Target ROAS = 100 / (0.35 − 0.10) = 400%. You enter 400 in Google Ads, meaning an average of $4 of conversion value for every $1 of ad spend.",
          "Then run that number through three adjustments: returns, the gap to your historical ROAS (the starting value) and the target that maximizes profit. The sections below walk through each with examples.",
        ],
      },
      {
        heading: "What is the Target ROAS (tROAS) bid strategy and how does it work?",
        paragraphs: [
          "Target ROAS is Google Ads' value-based Smart Bidding strategy. At each auction it predicts the value of a potential conversion and bids to grow total conversion value while keeping the average conversion value / cost close to your target. It uses signals such as device, location, time of day and remarketing lists, bidding higher on searches that look valuable and lower on those that don't.",
          "Two things to know. First, the target is an average: individual days or campaigns can land above or below it. Second, Google simplified strategy names in June 2026: 'Maximize conversion value with a Target ROAS' now shows simply as 'Target ROAS'; Google says bidding behavior did not change.",
          "The strategy only makes sense if your account sends conversion values. Conversions with a value of 0 don't count, so first make sure the purchase tag passes the correct order value.",
        ],
      },
      {
        heading: "How many conversions does Target ROAS need?",
        paragraphs: [
          "Google Ads Help lists minimums by campaign type. Below these, you can still turn the strategy on, but the algorithm has little to learn from and results swing.",
        ],
        bullets: [
          "Search and Shopping: at least 15 conversions in the past 30 days (at the conversion tracking level)",
          "Display: at least 15 conversions with values across campaigns in the past 30 days",
          "Demand Gen: 50 conversions in the past 35 days (10 in the last 7) or 100 across all Demand Gen campaigns in the account",
          "Video action campaigns: at least 30 conversions in the past 30 days",
          "Before setting a target: values reported for at least 4 weeks or 3 conversion cycles, whichever is longer",
        ],
      },
      {
        heading: "Step 1: Calculate target ROAS from contribution margin",
        paragraphs: [
          "Contribution margin = (Price − Product cost − Variable cost per order) / Price. Variable costs include shipping, payment fees, packaging and any marketplace commission. Using gross margin instead sets the target too low, so you can lose money while thinking you are profitable.",
          "Break-even ROAS (%) = 100 / Contribution margin. At a 35% contribution margin, break-even is 286%; below that, ads lose money on every sale.",
          "Target ROAS (%) = 100 / (Contribution margin − Target profit rate). The target profit rate is the share of revenue you want to keep after ad costs. Whether fixed costs (rent, salaries, software) belong in that rate is a business decision.",
        ],
        bullets: [
          "50% margin, 10% profit goal → 250% target ROAS",
          "35% margin, 10% profit goal → 400% target ROAS",
          "30% margin, 10% profit goal → 500% target ROAS",
          "25% margin, 5% profit goal → 500% target ROAS",
          "20% margin, 5% profit goal → ≈ 667% target ROAS",
        ],
      },
      {
        heading: "Step 2: Adjust the target for returns",
        paragraphs: [
          "Google Ads records conversion value when the order is placed; orders returned later stay in the reported value. In high-return categories such as apparel and footwear, platform ROAS looks noticeably better than real ROAS.",
          "Approximate fix: Target ROAS to enter = Calculated target / (1 − Return rate). At 15% returns, 400% / 0.85 ≈ 470%; at 30% returns, 400% / 0.70 ≈ 571%. A cleaner route is to send returns back to Google Ads as conversion adjustments or to send different values by category, in which case this correction isn't needed.",
        ],
      },
      {
        heading: "Step 3: Pick a starting value based on historical ROAS",
        paragraphs: [
          "Even if your calculated target is right, don't enter it directly if it is far from what the campaign delivers today. Google recommends setting the target from business goals and past performance, and warns that an unrealistic starting target can lead to poor performance or limited scale.",
          "To find historical ROAS, add the 'Conv. value / cost' column under Conversions and multiply by 100. Leave out the most recent days (your conversion lag); their conversions aren't complete yet.",
          "Change the target in steps and wait 1–2 conversion cycles after each change (a conversion cycle is the typical time from click to purchase). Google doesn't specify a percentage; in practice we work with 10–15% steps.",
        ],
        bullets: [
          "Historical ROAS 380%, target 470% → 380% → 420% → 470% (each step after 1–2 cycles). Jumping straight to 470% can cut spend sharply.",
          "Historical ROAS 560%, target 470% → 520% → 470%. Lowering the target enters more auctions and adds volume; watch whether ROAS slips below target.",
          "New campaign, no history → collect 2–4 weeks of data with Maximize conversion value (no target) or Target CPA, then move to Target ROAS.",
        ],
      },
      {
        heading: "Why doesn't the highest ROAS bring the most profit?",
        paragraphs: [
          "As you raise target ROAS, Google enters only the most valuable auctions: ROAS rises, but spend and sales fall. Past a certain point, the contribution lost from missed sales is larger than the ad spend saved. The table below is a hypothetical example for a store with a 35% contribution margin (illustrative amounts, not real account data).",
          "Profit = Revenue × Contribution margin − Ad spend (contribution profit after ads, before fixed costs).",
        ],
        bullets: [
          "Target 300% → spend $100,000, revenue $300,000, profit $5,000",
          "Target 400% → spend $60,000, revenue $240,000, profit $24,000",
          "Target 500% → spend $35,000, revenue $175,000, profit $26,250",
          "Target 600% → spend $20,000, revenue $120,000, profit $22,000",
        ],
      },
      {
        heading: "How do you find the right target with marginal ROAS?",
        paragraphs: [
          "Decide on marginal ROAS, not average ROAS: the return on the spend added or removed between two targets. Marginal ROAS = Revenue difference / Spend difference. If it is above break-even ROAS (here 100 / 35 ≈ 2.86), the extra spend is profitable.",
          "In the example, going from 400% to 300% adds $40,000 of spend for $60,000 of revenue: marginal ROAS 1.5, far below break-even → loss. Going from 500% to 400% adds $25,000 for $65,000: 2.6, just below break-even → profit dips slightly. Going from 600% to 500% adds $15,000 for $55,000: about 3.67 → profitable. In this example the profit-maximizing target is 500%.",
          "The formula's 400% is a 'grow as much as possible at 10% profit' decision; 500% is a 'maximize today's profit' decision. If new-customer acquisition and repeat purchases (LTV) matter to you, a lower target can be a deliberate choice. What matters is choosing it knowingly.",
        ],
      },
      {
        heading: "Should you send revenue or profit as conversion value?",
        paragraphs: [
          "The default setup sends order value (revenue). The algorithm then can't see margin differences: a $1,000 sale of a 60%-margin product and of a 15%-margin product look identical.",
          "The alternative is to send contribution profit per order as conversion value (the POAS, profit on ad spend, approach). Break-even then becomes 100%: a 130% target means $0.30 of contribution profit per $1 of ad spend on average. It requires calculating product cost server-side or in the data layer; server-side tagging is preferred so product costs aren't exposed in the browser.",
          "If a full setup isn't possible, split low-margin categories into separate campaigns with their own targets, or use conversion value rules to adjust value by location, device or audience segment.",
        ],
      },
      {
        heading: "Common Target ROAS problems and fixes",
        paragraphs: [
          "Most problems come from an unrealistic target, too little data or not waiting long enough after a change.",
        ],
        bullets: [
          "Spend suddenly dropped → the target is far above historical ROAS. Lower it 10–15% and wait 1–2 cycles.",
          "ROAS stays below target → check conversion lag first (recent days look incomplete). If it persists, data is thin or the target too low; consolidate product groups or campaigns.",
          "Campaign is 'Limited by budget' with ROAS above target → profitable auctions are being missed. Raise the budget; if you can't, don't lower the target, because a lower target spends the same budget on lower-return clicks.",
          "The target changes daily → the algorithm readjusts every time. Review weekly.",
          "Separate ad group targets → Google doesn't recommend them; they limit Smart Bidding. Set targets at campaign or portfolio level.",
          "Short promotions (like Black Friday) → use a 1–7 day seasonality adjustment for the expected conversion-rate jump; it isn't recommended for periods over 14 days.",
        ],
      },
      {
        heading: "Target ROAS in Performance Max and Shopping",
        paragraphs: [
          "The same formula applies to Performance Max and Shopping; the difference is that products with different margins sit in one campaign. One target based on average margin subsidizes low-margin products. Grouping products by margin band with custom labels, then giving each group its own campaign and target, is the simplest way to pass margin information to the algorithm.",
          "Google's bidding update from August 17, 2026 may cause temporary fluctuations, especially in budget-limited Target CPA and Target ROAS campaigns. Don't react to short-term swings in that period with immediate target changes.",
        ],
      },
    ],
    faq: [
      {
        question: "What should my target ROAS be?",
        answer:
          "There's no universal number. Calculate it from your margin: Target ROAS (%) = 100 / (Contribution margin − Target profit rate). A 35% margin with a 10% profit goal gives 400%; a 25% margin with a 5% goal gives 500%. Unless you are deliberately investing in repeat purchases (LTV), keep the target above break-even ROAS (100 / contribution margin).",
      },
      {
        question: "What does a 400% target ROAS mean?",
        answer:
          "It means an average of $4 of conversion value for every $1 of ad spend. Google Ads takes the target as a percentage: a 4x return = 400%. It's an average, so daily and campaign-level ROAS can be above or below it.",
      },
      {
        question: "How often should I change target ROAS?",
        answer:
          "Wait at least 1–2 conversion cycles between changes; Google suggests that time for the bidder to reach a new target. In practice, reviewing weekly and changing in 10–15% steps keeps learning stable and makes results readable.",
      },
      {
        question: "Why do sales drop when I raise target ROAS?",
        answer:
          "A higher target makes Google bid only in the auctions that look most valuable, so you get less traffic and fewer conversions. ROAS rises, but total revenue and often total profit fall. If you want volume, lower the target gradually.",
      },
      {
        question: "How many conversions do I need for Target ROAS?",
        answer:
          "According to Google Ads Help: at least 15 conversions in the past 30 days for Search and Shopping, 50 in the past 35 days for Demand Gen and 30 in the past 30 days for video action campaigns. Values should be reported for at least 4 weeks or 3 conversion cycles before you set a target.",
      },
    ],
    howTo: {
      name: "How to set target ROAS in Google Ads",
      description: "Calculate the target ROAS to enter in Google Ads from your contribution margin and apply it in steps.",
      steps: [
        { name: "Calculate contribution margin", text: "Subtract product cost, shipping, payment fees and packaging from the price and divide by the price." },
        { name: "Find target ROAS", text: "Target ROAS (%) = 100 / (Contribution margin − Target profit rate). 35% margin and a 10% profit goal give 400%." },
        { name: "Adjust for returns", text: "Divide the target by (1 − return rate). At 15% returns, 400% becomes about 470%." },
        { name: "Check historical ROAS", text: "Multiply the Conv. value / cost column by 100 and leave out the days still inside your conversion lag." },
        { name: "Apply in steps", text: "Move from historical ROAS toward the target in 10–15% steps and wait 1–2 conversion cycles after each one." },
        { name: "Fine-tune with marginal ROAS", text: "Divide the revenue difference by the spend difference between targets; if it falls below break-even ROAS, roll the change back." },
      ],
    },
    relatedToolKey: "roas",
    resources: [
      { label: "ROAS Calculator", href: "/en/free-tools/roas-calculator/" },
      { label: "Gross Profit Margin Calculator", href: "/en/free-tools/gross-profit-margin-calculator/" },
      { label: "Ad Budget Calculator", href: "/en/free-tools/ad-budget-calculator/" },
      { label: "What Is ROAS and How to Calculate It", href: "/en/blog/what-is-roas-how-to-calculate/" },
      { label: "Black Friday 2026 Ad Plan", href: "/en/blog/black-friday-2026-ad-plan/" },
      { label: "Google Ads Performance Optimization", href: "/en/blog/google-ads-performance-optimization/" },
      { label: "Google Ads Help: About Target ROAS bidding", href: "https://support.google.com/google-ads/answer/6268637", external: true },
      { label: "Google Ads Help: Seasonality adjustments", href: "https://support.google.com/google-ads/answer/10369906", external: true },
    ],
  },
  {
    slug: "what-is-ltv-ltv-cac-ratio",
    seoTitle: "What Is LTV? LTV:CAC Ratio, Formula and Examples",
    title: "What Is LTV and How to Calculate It? What Should Your LTV:CAC Ratio Be? (Cohort and Ad Examples)",
    description:
      "What customer lifetime value (LTV) is and how to calculate it on margin: a cohort LTV example, reading LTV:CAC, CAC payback and turning LTV into a CPA target.",
    category: "saas-buyume",
    tldr: [
      "LTV (customer lifetime value) is the total profit a customer leaves over the relationship. Calculate it on margin, not revenue: a customer with a $60 average order, 35% contribution margin and 2.3 orders in 24 months has an LTV of $48.30 (revenue LTV: $138).",
      "The most reliable method is cohort LTV: track cumulative orders of customers acquired in the same month and multiply by contribution margin — no 'customer lifetime' assumption needed.",
      "A common rule of thumb is an LTV:CAC of at least 3, but always read it together with CAC payback. The same $48.30 LTV pays back on the first order at a $16 CAC and around month 7 at a $30 CAC.",
      "Turn LTV into an ad target: Max CAC = LTV / Target ratio. In the example, a 3:1 target means a $16.10 CAC and about 3.73 first-order ROAS; when repeat purchase is low, 3:1 requires profit on the first order.",
    ],
    publishedAt: "2026-10-26",
    readingMinutes: 9,
    tags: ["LTV", "LTV:CAC", "Customer Lifetime Value", "Cohort Analysis", "CAC", "Unit Economics"],
    sections: [
      {
        heading: "What is LTV? (Short answer)",
        paragraphs: [
          "LTV (lifetime value, also CLV or CLTV) is the total profit a customer leaves over their relationship with your business. It sets the most you can spend to acquire a customer, which is why it is used alongside CAC (customer acquisition cost).",
          "The simplest ecommerce formula: LTV = Average order value × Orders per customer × Contribution margin. Example: a store with a $60 average order where customers place 2.3 orders in 24 months and 35% of revenue is left after product cost, shipping, payment fees and returns. LTV = $60 × 2.3 × 0.35 = $48.30.",
          "The same customer's revenue LTV is $60 × 2.3 = $138. Many guides use that revenue figure; planning ad spend around $138 lets you spend almost three times what a customer can actually earn you. (All amounts are illustrative.)",
        ],
      },
      {
        heading: "How do you calculate LTV? Three formulas",
        paragraphs: [
          "Which formula you use depends on your business model and how much data you have. All three end with a margin multiplier: contribution margin (product, shipping, fees and returns deducted) is common in ecommerce, gross margin in SaaS.",
        ],
        bullets: [
          "Ecommerce (repeat purchase): LTV = Average order value × Orders per year × Active years × Contribution margin",
          "Subscription / SaaS: LTV = Monthly revenue per account (ARPA) × Gross margin / Monthly churn rate (1 / churn = average lifetime in months)",
          "Cohort (realised) LTV: LTV(month n) = Cohort's cumulative revenue to month n / Customers in cohort × Margin",
          "LTV:CAC = LTV / CAC; CAC payback (months) = CAC / Monthly margin contribution per customer",
        ],
      },
      {
        heading: "Why is LTV calculated on margin, not revenue?",
        paragraphs: [
          "LTV exists to answer 'how much can I spend on this customer?'. The product cost, shipping and fees inside what the customer pays were never yours; only the remaining contribution can fund acquisition.",
          "If the example store targets LTV:CAC = 3 on revenue LTV ($138), it thinks it can spend up to $46 per customer. With a margin-based LTV of $48.30, that means roughly breaking even even after 24 months. On margin, the same target allows a $16.10 CAC.",
          "In ecommerce, contribution margin is a step better than gross margin: in high-return categories (apparel, footwear), a gross-margin LTV comes out noticeably higher than reality.",
        ],
      },
      {
        heading: "How do you calculate cohort LTV? A step-by-step example",
        paragraphs: [
          "'Customer lifetime' and 'orders per year' in the formulas are usually estimates. The cohort method replaces them with realised data: take customers who placed their first order in the same month as one group (cohort) and add up all their later orders cumulatively.",
          "Example: 1,000 customers who first ordered in January are tracked. Cumulative orders per customer are shown below; each order is $60 and leaves $21 of contribution at a 35% margin.",
          "Where the curve flattens (after month 12 here) indicates a sensible LTV horizon. Put several cohorts side by side (different months, different channels) and you also see which channel brings more loyal customers; a channel can have a high CAC but a steep cohort curve.",
        ],
        bullets: [
          "First order (month 0): 1.00 orders → $60 revenue → $21 contribution",
          "Month 3: 1.15 orders → $69 revenue → $24.15 contribution",
          "Month 6: 1.35 orders → $81 revenue → $28.35 contribution",
          "Month 12: 1.80 orders → $108 revenue → $37.80 contribution",
          "Month 24: 2.30 orders → $138 revenue → $48.30 contribution (24-month LTV)",
        ],
      },
      {
        heading: "What is the LTV:CAC ratio and what should it be?",
        paragraphs: [
          "LTV:CAC is the expected margin contribution from a customer divided by the cost of acquiring them. The rule of thumb widely used in SaaS and startups is at least 3. It is not a scientific threshold but a safety buffer for overheads beyond CAC and for estimation error.",
          "Always check how LTV was calculated: a 3:1 on revenue LTV can fall to 1:1 on margin.",
        ],
        bullets: [
          "Below 1: each new customer loses money even over the full horizon. Fix price, margin or retention before scaling acquisition",
          "1–3: you recover acquisition cost but leave little for overheads and growth; acceptable if payback is short",
          "3–5: healthy for most businesses",
          "Well above 5: you may be under-investing in acquisition; try scaling into more expensive channels",
        ],
      },
      {
        heading: "Why is LTV:CAC not enough on its own? CAC payback",
        paragraphs: [
          "LTV:CAC tells you how much comes back, not when. For cash flow, the real question is in which month CAC is recovered. A cohort table shows it directly: payback is the month cumulative contribution passes CAC.",
          "Two scenarios on the same cohort: at a $16 CAC, first-order contribution ($21) covers CAC immediately and 24-month LTV:CAC is about 3.0. At a $30 CAC, cumulative contribution is still below CAC at month 6 ($28.35), CAC pays back around month 7 and the ratio drops to 1.61. In the second scenario, growth ties up cash for longer.",
          "A practical frame: in ecommerce, aim to recover CAC on the first order or within a few months; in B2B SaaS, under 12 months. Use the CAC Payback Period calculator to work it out from monthly contribution per customer.",
        ],
      },
      {
        heading: "How much can you spend on ads based on LTV?",
        paragraphs: [
          "Getting from LTV to an ad target takes two steps. First choose a policy: Max CAC = LTV / Target LTV:CAC, or 'recover CAC within X months'. Then translate it into the campaign's first-order metric: First-order ROAS target = Average order value / Max CAC.",
          "For the example cohort ($60 order, $21 first-order contribution, $48.30 24-month LTV), different policies give these limits:",
          "Note: CAC is not only ad spend; it includes agency, team and tool costs. The CPA limit you put in the ad platform should therefore sit a little below max CAC. And because repeat purchase is low here (2.3 orders in 24 months), the 3:1 target demands a stricter ROAS than first-order break-even; for frequently repurchased products (cosmetics, supplements, pet food) the picture flips and LTV can justify losing money on the first order.",
        ],
        bullets: [
          "Break even on the first order: max CAC $21 → first-order ROAS target ≈ 2.86",
          "Pay back within 12 months: max CAC $37.80 → ROAS ≈ 1.59",
          "24-month LTV:CAC = 3: max CAC $16.10 → ROAS ≈ 3.73",
          "Spend the full 24-month LTV (break-even, not recommended): max CAC $48.30 → ROAS ≈ 1.24",
        ],
      },
      {
        heading: "LTV in SaaS: formula LTV and a time cap",
        paragraphs: [
          "The subscription formula LTV = ARPA × Gross margin / Monthly churn assumes that, with constant churn, a customer could stay forever. At low churn that pins LTV on a long, uncertain future, so many teams cap LTV at 24–36 months.",
          "Example: ARPA $150 per month, 80% gross margin, 3% monthly churn. Monthly gross profit per customer is $120; formula LTV is $120 / 0.03 = $4,000. Capped at 36 months: $120 × (1 − 0.97^36) / 0.03 ≈ $2,664. With a $1,200 CAC the ratio is 3.33 on the formula and about 2.22 capped; payback is $1,200 / $120 = 10 months.",
          "If the gap is large, decide on capped LTV and payback. Also remember that CAC spent today is worth more than profit that trickles back over years, especially with high inflation; thinking about long-horizon LTV in real terms is safer.",
        ],
      },
      {
        heading: "Common LTV calculation mistakes",
        paragraphs: [
          "LTV mistakes usually point the same way: they inflate LTV and over-fund acquisition.",
        ],
        bullets: [
          "Calculating LTV:CAC on revenue LTV → the ratio looks 2–3 times better than it is",
          "Averaging all customers → calculate by channel and cohort; customers acquired through discounts usually repurchase less",
          "Assuming customer lifetime → check against cohort data; 1 / churn can hide heavy early losses",
          "Ignoring returns, discounts and free shipping → calculate LTV on contribution margin",
          "Unlimited time horizon → cap at 24–36 months and check payback too",
          "Crediting organic repeat orders to ads → when calculating LTV:CAC per channel, match that channel's CAC with that channel's cohort",
        ],
      },
      {
        heading: "How do you increase LTV?",
        paragraphs: [
          "LTV has three levers: contribution per order, order frequency and active lifetime. The cohort curve shows where you are weak: if it flattens by month 3, flows that trigger the second order (email, remarketing, a subscription option) come first; if baskets are small, bundles and cross-sells; if margin is low, pricing and shipping policy.",
          "In SaaS the biggest effect comes from churn; because churn is the denominator, cutting monthly churn from 3% to 2.5% raises formula LTV by 20% with everything else equal. Track NRR to see expansion revenue (upgrades, seat growth) too.",
        ],
      },
    ],
    faq: [
      {
        question: "Is LTV the same as CLV?",
        answer:
          "Yes. LTV (lifetime value), CLV and CLTV (customer lifetime value) describe the same metric: the total value a customer leaves over the relationship. LTV in finance (loan-to-value) is a different concept.",
      },
      {
        question: "What does an LTV:CAC ratio of 3 mean?",
        answer:
          "Expected margin contribution from a customer is three times the cost of acquiring them — for example, a $48.30 margin-based LTV against a $16.10 CAC. It is a common rule of thumb; make sure the ratio uses margin and read it alongside CAC payback.",
      },
      {
        question: "What is a good LTV?",
        answer:
          "LTV has no good or bad value on its own; a $50 LTV is excellent with a $10 CAC and weak with a $40 CAC. Always judge LTV against CAC (LTV:CAC) and payback period.",
      },
      {
        question: "Over how many months should LTV be calculated?",
        answer:
          "In ecommerce, tracking 12- and 24-month LTV together is practical; where the cohort curve flattens shows a sensible horizon. In SaaS, LTV capped at 24–36 months supports more cautious decisions than formula LTV.",
      },
      {
        question: "How do you estimate LTV for a new business with no data?",
        answer:
          "Start with first-order contribution and manage ads to first-order break-even. After 3–6 months, update LTV with your first cohorts' repeat rates. Do not plug competitor or industry averages in as your LTV; margins and customer behaviour vary widely.",
      },
    ],
    howTo: {
      name: "How to calculate cohort LTV and LTV:CAC",
      description: "Use data from customers acquired in the same month to find margin-based LTV, LTV:CAC and the payback month.",
      steps: [
        { name: "Pick a cohort", text: "Take customers who placed their first order in a given month (ideally from one channel) as a group." },
        { name: "Add up cumulative orders", text: "Calculate each customer's average orders and revenue up to months 3, 6, 12 and 24." },
        { name: "Multiply by margin", text: "Multiply cumulative revenue by contribution margin (gross margin in SaaS) to get margin-based LTV for each month." },
        { name: "Compare with CAC", text: "Divide by the same cohort's CAC. With a $48.30 24-month LTV and $16.10 CAC, LTV:CAC = 3." },
        { name: "Read the payback month", text: "The month cumulative contribution passes CAC is your CAC payback; set the ad target from that period and your target ratio." },
      ],
    },
    relatedToolKey: "ltv",
    resources: [
      { label: "LTV Calculator", href: "/en/free-tools/ltv-calculator/" },
      { label: "What Is CAC? Customer Acquisition Cost Explained", href: "/en/blog/what-is-cac-customer-acquisition-cost/" },
      { label: "CAC Calculator", href: "/en/free-tools/cac-calculator/" },
      { label: "CAC Payback Period Calculator", href: "/en/free-tools/cac-payback-period-calculator/" },
      { label: "Churn Rate Calculator", href: "/en/free-tools/churn-rate-calculator/" },
      { label: "Gross Profit Margin Calculator", href: "/en/free-tools/gross-profit-margin-calculator/" },
      { label: "ROAS Calculator", href: "/en/free-tools/roas-calculator/" },
      { label: "How to Set Target ROAS in Google Ads", href: "/en/blog/how-to-set-target-roas-google-ads/" },
      { label: "How to Set an Advertising Budget", href: "/en/blog/how-to-set-advertising-budget/" },
      { label: "What Is NRR? SaaS Growth Metric", href: "/en/blog/what-is-nrr-saas-growth-metric/" },
      { label: "SaaS Metrics: ARR, CAC, LTV", href: "/en/blog/saas-metrics-arr-cac-ltv/" },
      { label: "Stripe: Customer lifetime value", href: "https://stripe.com/gb/resources/more/customer-lifetime-value", external: true },
    ],
  },
  {
    slug: "what-are-utm-parameters",
    seoTitle: "What Are UTM Parameters? GA4 Guide With Examples",
    title: "What Are UTM Parameters and How Do You Use Them? (GA4, Google Ads and Meta Examples)",
    description:
      "What are UTM parameters? All 9 GA4 parameters, example links, where to find them in GA4, how to use them with Google Ads and Meta, and naming rules.",
    category: "performans-pazarlama",
    tldr: [
      "UTM parameters are tags added to the end of a link that tell Google Analytics which source, channel and campaign a visitor came from, e.g. ?utm_source=instagram&utm_medium=social&utm_campaign=november-sale.",
      "Every link needs three: utm_source (platform), utm_medium (channel type), utm_campaign (campaign). utm_content, utm_term and utm_id are optional; two of GA4's nine parameters (utm_creative_format, utm_marketing_tactic) are not currently reported.",
      "Values are case-sensitive: Instagram and instagram are two sources in GA4. Use lowercase and medium values GA4 recognizes (cpc, paid_social, social, email, referral, affiliate), or traffic lands in Unassigned.",
      "In Google Ads, keep auto-tagging on instead of manual UTMs; in Meta, use one template with dynamic parameters ({{campaign.name}}, {{ad.name}}). Never add UTMs to your own internal links.",
    ],
    publishedAt: "2026-10-27",
    readingMinutes: 9,
    tags: ["UTM", "UTM Parameters", "GA4", "Campaign Tracking", "Google Analytics", "Measurement"],
    sections: [
      {
        heading: "What are UTM parameters? (Short answer)",
        paragraphs: [
          "UTM (Urchin Tracking Module) parameters are tags appended to a URL that tell your analytics tool where the person who clicked came from. The name comes from Urchin, the analytics software Google acquired in 2005 and turned into Google Analytics.",
          "An untagged Instagram Story link often shows up in GA4 as just 'instagram.com / referral' or with no source at all; which campaign or creative drove the visit is lost. Share the same link with UTMs and GA4 records the source, channel and campaign separately, so you can tie sales back to that campaign.",
          "Example: https://site.com/november-sale/?utm_source=instagram&utm_medium=social&utm_campaign=november-sale-2026&utm_content=story-1",
        ],
      },
      {
        heading: "How do you read a UTM link?",
        paragraphs: [
          "A UTM link has three parts: the page URL, a question mark (?) and parameter=value pairs joined with &. If the URL already contains a question mark (e.g. ?color=black), the UTMs continue with &; never add a second question mark.",
          "Parameter order doesn't matter; GA4 reads them the same way. Spaces in values get encoded as %20 or +, which creates inconsistent reports, so use a hyphen (-) or underscore (_) instead.",
        ],
        bullets: [
          "https://site.com/product/ → the page URL (UTMs don't change the page content)",
          "?utm_source=newsletter → source: where the traffic comes from",
          "&utm_medium=email → medium: the channel type (this drives the GA4 channel group)",
          "&utm_campaign=november-newsletter-2026 → campaign name",
          "&utm_content=top-button → a specific link or creative within the campaign",
        ],
      },
      {
        heading: "What are the UTM parameters? All 9 and their GA4 dimensions",
        paragraphs: [
          "Most guides cover five parameters, but the Google Analytics 4 URL builder supports nine. Google's advice: always include source, medium and campaign, and when you use one parameter, fill in the related ones too; missing ones show as '(not set)' in reports.",
        ],
        bullets: [
          "utm_source (required): the platform or place sending traffic → google, instagram, newsletter, creator-name. GA4: Session source",
          "utm_medium (required): channel type → cpc, paid_social, social, email, affiliate, referral. GA4: Session medium; the main input for the default channel group",
          "utm_campaign (required): campaign name → black-friday-2026. GA4: Session campaign",
          "utm_content (optional): different creatives or links in one campaign → video-a, top-button. GA4: Manual ad content",
          "utm_term (optional): paid keyword or audience → running-shoes. GA4: Manual term",
          "utm_id (optional): campaign ID → bf26-001. The join key when you import cost or campaign data into GA4",
          "utm_source_platform (optional): the buying platform directing traffic → e.g. Search Ads 360, Display & Video 360",
          "utm_creative_format (optional): creative type → video, native, display. Per Google, not currently reported in GA4",
          "utm_marketing_tactic (optional): targeting tactic → remarketing, prospecting. Per Google, not currently reported in GA4",
        ],
      },
      {
        heading: "Which values should you use for each channel?",
        paragraphs: [
          "When GA4 assigns a session to a channel (Paid Social, Organic Social, Email, Affiliates and so on), it applies Google's published rules, which mostly look at utm_medium. Medium values that aren't on the list, such as 'story', 'bio', 'whatsapp' or 'influencer', push traffic into Unassigned. These combinations match the default channel rules:",
          "If you already have Unassigned traffic, our GA4 Unassigned guide covers the causes and fixes; our UTM Builder shows which GA4 channel a link will land in as you build it.",
        ],
        bullets: [
          "Instagram / Facebook ads: source=instagram or facebook, medium=paid_social → Paid Social",
          "Instagram bio link or organic post: source=instagram, medium=social → Organic Social",
          "Email newsletter: source=newsletter, medium=email → Email",
          "Creator or partnership: source=creator-name, medium=affiliate → Affiliates",
          "WhatsApp share: source=whatsapp, medium=social → Organic Social",
          "SMS: source=sms, medium=sms → SMS",
          "QR code on print, packaging or events: source=qr, medium=referral → Referral (or your own 'Offline' custom channel group)",
          "Banner on another site: source=site-name, medium=display or cpm → Display",
        ],
      },
      {
        heading: "Should you use UTMs in Google Ads?",
        paragraphs: [
          "If Google Ads is linked to GA4, the short answer is no for source and campaign tracking: keep auto-tagging on. Auto-tagging adds a gclid parameter to each click, and GA4 pulls campaign, ad group, keyword and cost data from it.",
          "According to Google, when auto-tagging and manual UTMs are both present, GA4 uses the auto-tagged values for source, medium and other traffic-classification dimensions. Manual utm_content and utm_term still populate the 'Manual ad content' and 'Manual term' dimensions, so those two are the only useful ones for separating ad-copy tests.",
          "Consider manual UTMs in Google Ads only when a tool outside GA4 (a CRM or another analytics tool) can't read gclid; even then, add them once at account level in the final URL suffix rather than ad by ad, so they stay consistent.",
        ],
      },
      {
        heading: "How do you add UTMs to Meta (Facebook, Instagram) ads?",
        paragraphs: [
          "Instead of hand-writing UTMs for every Meta ad, enter one template with dynamic parameters in the 'URL parameters' field in Ads Manager. When the ad is served, Meta fills the variables in curly braces with the real campaign, ad set and ad names.",
          "Suggested template: utm_source=facebook&utm_medium=paid_social&utm_campaign={{campaign.name}}&utm_content={{ad.name}}&utm_term={{adset.name}}&utm_id={{campaign.id}}",
          "Two things to watch: first, because the value sent to GA4 is your campaign name itself, name campaigns in Ads Manager by the same lowercase, no-spaces standard. Second, if you rename a campaign after launch, the old name may keep being passed; finalize names before launch and carry the stable {{campaign.id}} in utm_id for matching. To separate Facebook, Instagram and Messenger delivery, add {{site_source_name}} or {{placement}} to utm_content.",
        ],
      },
      {
        heading: "UTM naming conventions: how to set a team standard",
        paragraphs: [
          "UTM data is only as valuable as it is consistent. If three people tag the same campaign 'November', 'nov-sale' and 'NOV_2026', the report shows three campaigns. Agree on a short rule set before campaigns start and keep it in one sheet:",
        ],
        bullets: [
          "Always lowercase: UTM values are case-sensitive, and Google recommends lowercase",
          "Plain ASCII only: avoid accented characters, which get encoded (e.g. %C3%A9) and make reports hard to read",
          "No spaces; join words with one separator: pick either hyphens (november-sale) or underscores (november_sale) as a team and don't mix them",
          "Campaign name template: year-month_goal_product-or-offer_country → 2026-11_sales_black-friday_us. Sorted alphabetically, campaigns line up by date",
          "A closed list for source and medium: the team only uses values from the sheet (instagram, facebook, newsletter, whatsapp / cpc, paid_social, social, email, affiliate, referral)",
          "Log every new link: date, campaign, full URL, owner. Months later you'll still know where each link was used",
        ],
      },
      {
        heading: "Where do you see UTM data in GA4?",
        paragraphs: [
          "Open Reports › Acquisition › Traffic acquisition and set the table's primary dimension to 'Session source / medium' or 'Session campaign'. For utm_content and utm_term, add 'Session manual ad content' and 'Session manual term' as a secondary dimension, or build a free-form report in Explore.",
          "UTM parameters don't appear in the 'Page path + query string' and 'Landing page + query string' dimensions; Google strips them there. Use the 'Page location' dimension to see the full tagged URL.",
          "Before launching, open the link in your own browser and check in Reports › Realtime that the source and campaign appear correctly. Data can take 24-48 hours to reach standard reports.",
        ],
      },
      {
        heading: "The most common UTM mistakes",
        paragraphs: [
          "UTM mistakes are usually noticed weeks later, when budget decisions are being made. Avoid these:",
        ],
        bullets: [
          "Adding UTMs to your own internal links: a utm_campaign on a homepage banner makes conversion attribution credit your internal campaign instead of the real source (e.g. Google Ads). Measure internal promotions with GA4 events",
          "Trying to tag organic search or natural referrals: you don't control the link in Google's results; organic traffic shows up as 'google / organic' on its own",
          "Turning off Google Ads auto-tagging for manual UTMs: cost, keyword and ad group data stop flowing into GA4",
          "Parameters lost in redirects: link shorteners, http→https or www redirects can drop UTMs. Open the link and confirm utm_ parameters remain in the address bar",
          "Medium values outside the channel rules: 'story', 'bio', 'qr', 'whatsapp' send traffic to Unassigned",
          "Leaving a tagged link permanently in a public place: as others copy and share it, traffic from many sources gets attributed to one campaign. Name the source accordingly for long-lived placements (e.g. a forum signature)",
        ],
      },
      {
        heading: "Do UTM parameters hurt SEO?",
        paragraphs: [
          "Not on a properly set up site. A tagged URL is technically a separate URL, but it shows the same content; if your page has a canonical tag pointing to the clean URL, Google consolidates signals there. Problems start when tagged links are used in your own navigation or sitemap, because Google may then crawl the parameterized copies. The rule is simple: use UTMs only for off-site placements, and keep a canonical tag pointing to the parameter-free URL on every page.",
        ],
      },
    ],
    faq: [
      {
        question: "What does UTM stand for?",
        answer:
          "UTM stands for Urchin Tracking Module. It's named after Urchin, the analytics software Google acquired in 2005 that became the basis of Google Analytics. Today GA4 and most analytics and CRM tools read UTM parameters.",
      },
      {
        question: "Which UTM parameters are required?",
        answer:
          "Technically a single parameter sends data to GA4, but Google recommends using utm_source, utm_medium and utm_campaign on every link. Missing parameters show as '(not set)' in reports and can break channel assignment.",
      },
      {
        question: "What happens if UTMs and gclid are used together?",
        answer:
          "GA4 uses the auto-tagging (gclid) values for traffic-classification dimensions such as source, medium and campaign; manual utm_source and utm_medium are ignored. Manual utm_content and utm_term still populate the Manual ad content and Manual term dimensions.",
      },
      {
        question: "How do I create a UTM link?",
        answer:
          "You can write it by hand by adding ? after the URL and joining parameters with &, but a UTM builder reduces errors. Our free UTM Builder lowercases values automatically and shows which GA4 channel the link will land in.",
      },
      {
        question: "How should I tag WhatsApp and QR code links?",
        answer:
          "For WhatsApp, use utm_source=whatsapp and utm_medium=social (lands in Organic Social); for printed QR codes, use utm_source=qr and utm_medium=referral. To see offline channels separately, create a custom channel group in GA4 and map your medium value to it.",
      },
    ],
    howTo: {
      name: "How to build and test a UTM-tagged campaign link",
      description: "Add the right UTM parameters to a campaign link and verify them in GA4.",
      steps: [
        { name: "Pick the landing page", text: "Copy the full, parameter-free URL visitors should land on (e.g. https://site.com/november-sale/)." },
        { name: "Choose source and medium", text: "From your team sheet, put the platform in utm_source and the channel type in utm_medium; use medium values GA4 recognizes (cpc, paid_social, social, email, affiliate, referral)." },
        { name: "Name the campaign by template", text: "Use a lowercase, no-spaces name (e.g. 2026-11_sales_black-friday_us); add utm_content to separate creatives." },
        { name: "Build the link", text: "Join parameters with ? and &, or use a UTM builder; for Google Ads, leave auto-tagging on instead of manual UTMs." },
        { name: "Test before launch", text: "Open the link, confirm the utm_ parameters stay in the address bar and that source and campaign show correctly in GA4 Realtime; log the link in your team sheet." },
      ],
    },
    relatedToolKey: "utm",
    resources: [
      { label: "UTM Builder (with GA4 channel check)", href: "/en/free-tools/utm-builder/" },
      { label: "GA4 Unassigned Traffic: What It Is and How to Fix It", href: "/en/blog/ga4-unassigned-traffic-how-to-fix/" },
      { label: "What Is ROAS and How to Calculate It", href: "/en/blog/what-is-roas-how-to-calculate/" },
      { label: "Black Friday 2026 Ad Plan", href: "/en/blog/black-friday-2026-ad-plan/" },
      { label: "Meta Ads: Tactics to Exit the Learning Phase", href: "/en/blog/meta-ads-exit-learning-phase-tactics/" },
      { label: "Which Marketing Channel Fits You? (Quiz)", href: "/en/free-tools/marketing-channel-quiz/" },
      { label: "Google Analytics: Collect campaign data with custom URLs", href: "https://support.google.com/analytics/answer/10917952?hl=en", external: true },
      { label: "Google Analytics: Default channel group rules", href: "https://support.google.com/analytics/answer/9756891?hl=en", external: true },
      { label: "Google Analytics: Benefits of Google Ads auto-tagging", href: "https://support.google.com/analytics/answer/10723328?hl=en", external: true },
    ],
  },
  {
    slug: "what-is-cac-customer-acquisition-cost",
    seoTitle: "What Is CAC? Customer Acquisition Cost With Examples",
    title: "What Is CAC? How to Calculate Customer Acquisition Cost (Blended, Paid and Per-Channel Examples)",
    description:
      "What is CAC and how do you calculate it? Blended vs paid vs fully loaded CAC, a per-channel example, CAC vs CPA, and how to turn CAC into an ad target.",
    category: "saas-buyume",
    tldr: [
      "CAC (customer acquisition cost) is total sales and marketing spend in a period divided by the number of new customers won in that period: $31,000 ÷ 1,000 new customers = $31.",
      "The same data gives three different CACs: fully loaded blended CAC $31, ad-spend-only 'media CAC' $23, and paid CAC (ad spend ÷ customers from ads) ≈ $32.90. Make budget decisions with paid and per-channel CAC; blended CAC makes paid channels look cheaper because organic customers dilute it.",
      "The CPA in your ad platform is not CAC: platforms also count repeat orders from existing customers. In the example, Meta reports a $24 CPA while the cost per new customer is $30.",
      "CAC is never good or bad on its own. Read it against first-order contribution, LTV and payback. With a $90 basket and 30% contribution margin, the first order leaves $27, so a ~$32.90 paid CAC means a $5.90 gap on every new customer's first order.",
    ],
    publishedAt: "2026-10-28",
    readingMinutes: 9,
    tags: ["CAC", "Customer Acquisition Cost", "Paid CAC", "Blended CAC", "Unit Economics", "LTV:CAC"],
    sections: [
      {
        heading: "What is CAC? (Short answer)",
        paragraphs: [
          "CAC (customer acquisition cost) tells you how much you spend, on average, to win one new customer. Formula: CAC = (Marketing costs + Sales costs) / New customers acquired in the same period.",
          "Example: an online store spends $31,000 in October on ads, agency, team and tools and wins 1,000 customers placing their first order that month. CAC = $31,000 / 1,000 = $31. (All figures in this article are illustrative.)",
          "CAC only means something next to the profit a customer brings in. Always read it together with first-order contribution, LTV (customer lifetime value) and CAC payback period.",
        ],
      },
      {
        heading: "How do you calculate CAC? Step by step",
        paragraphs: [
          "The math is a single division; the mistakes are almost always in how the numerator and denominator are defined. Apply these four steps the same way every month so CAC stays comparable over time.",
        ],
        bullets: [
          "1. Pick the period: usually a calendar month. In B2B with long sales cycles, use a quarter or a rolling average",
          "2. Define 'new customer': in e-commerce, a customer placing (and not returning) a first order; in SaaS, an account making its first payment. Trial users and leads are not customers",
          "3. Add up the costs: ad spend, agency/freelancers, content and creative production, influencers, the acquisition share of marketing and sales salaries, commissions, marketing/sales software",
          "4. Divide and label it: CAC = Total cost / New customers. State which version (blended, paid, fully loaded) the report uses",
        ],
      },
      {
        heading: "What costs belong in CAC, and what doesn't?",
        paragraphs: [
          "CAC measures only the money spent winning new customers. Adding product cost or retention spend inflates it and hides which channel is actually expensive.",
          "For shared costs (email marketing that reaches both new and existing customers, or a team that both sells and supports), pick a simple allocation key and keep it every month; consistency matters more than a perfect split.",
        ],
        bullets: [
          "Include: ad spend (Meta, Google, TikTok, marketplace ads), agency and freelancer fees, creative and content production, influencer fees and code discounts",
          "Include (fully loaded CAC): the acquisition share of marketing and sales salaries, commissions and benefits; CRM, email and analytics tools; trade shows and events",
          "Exclude: product cost, shipping and packaging (they belong in contribution margin), returns, customer support, loyalty and repeat-purchase campaigns aimed at existing customers",
          "Watch out: first-order discount codes can go into CAC or be deducted from margin; never both. Note which one you chose",
        ],
      },
      {
        heading: "Blended vs paid vs fully loaded CAC: what's the difference?",
        paragraphs: [
          "One month of data can produce three CACs, and all three are correct; the error is using one in place of another. The example store's October: ad spend $23,000 (Meta $12,000, Google $8,000, influencers $3,000), agency $2,500, acquisition share of the marketing team $4,500, tools $1,000; total $31,000. Of the 1,000 new customers, 700 came from ads (Meta 400, Google 250, influencer codes 50) and 300 from organic search, direct and referrals.",
          "Blended CAC shows company-wide acquisition efficiency and suits investor or board reporting. But the 300 organic customers inflate the denominator, so paid channels look cheaper than they are. Decide whether to scale ad budget with paid CAC: the next $1,000 of ad spend will not bring organic customers with it.",
        ],
        bullets: [
          "Fully loaded blended CAC = $31,000 / 1,000 = $31 (all costs, all new customers)",
          "Media CAC = $23,000 / 1,000 = $23 (ads only, all new customers; the most optimistic and most misleading version)",
          "Paid CAC = $23,000 / 700 ≈ $32.90 (ads only, customers from ads only)",
          "Rule: if blended CAC falls while paid CAC rises, the improvement is coming from organic; ad efficiency is actually getting worse",
        ],
      },
      {
        heading: "How do you calculate CAC by channel?",
        paragraphs: [
          "Splitting paid CAC by channel shows where budget should move. For each channel, divide its spend by the new customers it brought in. To match customers to channels reliably, use consistent UTM parameters on campaign links and unique discount codes for influencers.",
          "In the example, Meta and Google are close while influencers look twice as expensive. That alone doesn't mean 'cut influencers': customers who bought without the code aren't credited to the channel, so its CAC can look inflated. Before deciding, check the second-order rate of each channel's customers (cohort LTV); a pricey channel that brings loyal customers can be the more profitable one over time.",
        ],
        bullets: [
          "Meta: $12,000 / 400 = $30",
          "Google Ads: $8,000 / 250 = $32",
          "Influencers (with code): $3,000 / 50 = $60",
          "Organic search / direct / referral: no media cost; if you invest in SEO and content, track a separate 'organic CAC'",
        ],
      },
      {
        heading: "CAC vs CPA vs CPL: what's the difference?",
        paragraphs: [
          "CPA (cost per acquisition) is the cost per defined conversion your ad platform shows for a campaign. The conversion can be a purchase, sign-up or form, and it includes repeat orders from existing customers. CPL is cost per lead. CAC divides all acquisition cost by genuinely new customers only.",
          "In the example, Meta reports 500 purchases in October, 100 of them repeat orders from existing customers. The platform CPA is $12,000 / 500 = $24, while the cost per new customer is $12,000 / 400 = $30. Managing a new-customer campaign on platform CPA means seeing costs 25% lower than they are. Turning on new-customer goals/reporting in Meta and Google, or splitting your own order data into new vs returning, makes the gap visible.",
          "In B2B the chain gets longer: $18,000 of ads producing 500 leads (CPL $36) at a 5% lead-to-customer rate gives 25 customers and a media CAC of $18,000 / 25 = $720. In other words, CAC = CPL / Lead-to-customer rate. A campaign that halves CPL but cuts conversion to a third raises CAC.",
        ],
      },
      {
        heading: "What is a good CAC? First order, LTV and payback",
        paragraphs: [
          "There is no universal 'good CAC'; $30 is far too high for a $15 one-off product and very low for an annual B2B contract. Judge CAC with three measures.",
          "The example store has a $90 average basket and a 30% contribution margin (after product, shipping, payment fees and returns), so the first order leaves $27. With a ~$32.90 paid CAC, every new customer is $5.90 short on the first order. If the second order closes the gap, fine; if not, losses grow as ads scale. By channel, Meta ($30) is near the line, and influencers ($60) only make sense with strong repeat purchase.",
        ],
        bullets: [
          "First-order contribution: if CAC ≤ first-order contribution, the customer pays for themselves on the first order (essential where repeat purchase is low)",
          "LTV:CAC ratio: margin-based LTV / CAC; the common rule of thumb is at least 3. I cover how to calculate LTV in the LTV article",
          "CAC payback period: CAC / Monthly contribution per customer; under 12 months is a common B2B SaaS target",
        ],
      },
      {
        heading: "How do you calculate CAC in B2B and SaaS? The time-lag example",
        paragraphs: [
          "When sales cycles run one to three months, this month's spend brings next months' customers. Dividing a month's spend by that month's customers makes CAC swing. Example: a B2B SaaS company spends $25,000 every month (ads, marketing and sales team, tools) and wins 5, 12 and 8 new customers in July, August and September.",
          "Monthly CAC comes out at $5,000, about $2,083 and $3,125; nothing changed, yet CAC seems to move 2.5×. A quarterly view is healthier: $75,000 / 25 = $3,000. With $300 monthly revenue per account (ARPA) and an 80% gross margin, each customer contributes $240 a month, so CAC pays back in $3,000 / $240 = 12.5 months.",
          "In B2B the sales team often costs more than ads, so track fully loaded CAC and look at cost per lead, per SQL and per customer separately to see whether the bottleneck is marketing or sales.",
        ],
      },
      {
        heading: "How do you turn CAC into an ad target?",
        paragraphs: [
          "First set a maximum CAC with a policy, then translate it into the target you enter in the ad platform. The platform target must be low enough to cover the non-ad part of CAC (agency, team, tools).",
          "In the example, ads are 74% of fully loaded cost ($23,000 / $31,000). With a break-even-on-first-order policy, the maximum fully loaded CAC is $27, so the ad share is $27 × 0.74 ≈ $20. Each new customer brings $90 on the first order, which means a target ROAS of about $90 / $20 = 4.5 for new-customer campaigns. If that's unrealistic, loosen the policy with real repeat-purchase data (a 12-month payback, say); loosening without evidence turns budget into losses.",
        ],
        bullets: [
          "Break even on the first order: Max CAC = First-order contribution",
          "Payback policy: Max CAC = Monthly contribution per customer × Target months",
          "Ratio policy: Max CAC = LTV / Target LTV:CAC",
          "Platform target: Max CPA ≈ Max CAC × (Ad spend / Total acquisition cost); target ROAS ≈ First-order value / Max CPA",
        ],
      },
      {
        heading: "How do you lower CAC?",
        paragraphs: [
          "CAC has two sides: spend less, or win more customers for the same spend. In practice the second works faster.",
        ],
        bullets: [
          "Conversion rate: landing page speed, a clear offer, showing shipping costs early and a short checkout bring more customers for the same spend",
          "Channel mix: track paid CAC by channel and shift budget to efficient channels; don't decide on blended CAC",
          "New-customer targeting: exclude existing customers or use new-customer goals; otherwise part of the budget buys orders that were coming anyway",
          "Compounding channels: SEO, content, an email list and referral programs pull blended CAC down over time",
          "ICP in B2B: focusing sales time on accounts likely to close is the single biggest lever on fully loaded CAC",
        ],
      },
    ],
    faq: [
      {
        question: "What does CAC stand for?",
        answer:
          "CAC stands for customer acquisition cost: the average marketing and sales cost of winning one new customer.",
      },
      {
        question: "How do you calculate CAC?",
        answer:
          "CAC = (Marketing costs + Sales costs) / New customers acquired in the same period. $31,000 of acquisition cost and 1,000 new customers give a $31 CAC. Divide ad spend only by customers from ads and you get paid CAC.",
      },
      {
        question: "Is CAC the same as CPA?",
        answer:
          "No. CPA is the cost per conversion your ad platform reports, and it counts repeat orders from existing customers. CAC divides all acquisition cost by new customers only, so it's usually higher than platform CPA.",
      },
      {
        question: "Should salaries be included in CAC?",
        answer:
          "In fully loaded CAC, yes: add the acquisition share of marketing and sales salaries and commissions. Paid CAC, which measures channel efficiency, uses ad spend only. State which version you report.",
      },
      {
        question: "How do I know if my CAC is too high?",
        answer:
          "Compare CAC with first-order contribution, LTV and payback. If CAC exceeds first-order contribution and repeat purchases don't close the gap, or LTV:CAC is below 1, CAC is too high for your business; industry averages can't replace that check.",
      },
    ],
    howTo: {
      name: "How to calculate CAC",
      description: "Find blended, paid and per-channel customer acquisition cost from a period's marketing and sales costs.",
      steps: [
        { name: "Set the period and the new-customer definition", text: "Use a calendar month (a quarter in B2B); define a new customer as one placing a first order or making a first payment." },
        { name: "Add up acquisition costs", text: "Sum ads, agency, creative, influencers, team share and tools; leave out product cost and retention spend." },
        { name: "Calculate blended CAC", text: "Divide total acquisition cost by all new customers. $31,000 / 1,000 = $31." },
        { name: "Calculate paid and per-channel CAC", text: "Divide ad spend by customers from ads, and each channel's spend by its customers. $23,000 / 700 ≈ $32.90." },
        { name: "Compare with margin and LTV", text: "Judge CAC against first-order contribution, LTV:CAC and payback, then set a max CAC and ad target." },
      ],
    },
    relatedToolKey: "cac",
    resources: [
      { label: "CAC Calculator", href: "/en/free-tools/cac-calculator/" },
      { label: "CAC Payback Period Calculator", href: "/en/free-tools/cac-payback-period-calculator/" },
      { label: "What Is LTV? What Should Your LTV:CAC Ratio Be?", href: "/en/blog/what-is-ltv-ltv-cac-ratio/" },
      { label: "ROAS Calculator (break-even ROAS)", href: "/en/free-tools/roas-calculator/" },
      { label: "Marketplace Profit Calculator", href: "/en/free-tools/marketplace-profit-calculator/" },
      { label: "Gross Profit Margin Calculator", href: "/en/free-tools/gross-profit-margin-calculator/" },
      { label: "How to Set an Advertising Budget", href: "/en/blog/how-to-set-advertising-budget/" },
      { label: "What Are UTM Parameters?", href: "/en/blog/what-are-utm-parameters/" },
      { label: "How to Reduce B2B Lead Generation Costs", href: "/en/blog/how-to-reduce-b2b-lead-generation-costs/" },
      { label: "SaaS Metrics 101: ARR, CAC, LTV and Churn", href: "/en/blog/saas-metrics-arr-cac-ltv/" },
      { label: "Google Ads Help: About customer lifecycle goals", href: "https://support.google.com/google-ads/answer/12080169?hl=en", external: true },
    ],
  },
  {
    slug: "how-to-calculate-profit-margin",
    seoTitle: "How to Calculate Profit Margin: Formula vs Markup",
    title: "How to Calculate Profit Margin: Margin vs Markup, a Conversion Table and an E-commerce Example",
    description:
      "How to calculate profit margin: formula, worked example, margin vs markup with a conversion table, pricing from a target margin, discounts and break-even ROAS.",
    category: "performans-pazarlama",
    tldr: [
      "Profit margin is profit divided by selling price: Margin = (Price − Cost) / Price × 100. A product sold for $100 that costs $55 has a 45% margin.",
      "Markup is profit divided by cost: $45 / $55 = 81.8%. The two are often confused; a 50% markup is only a 33.3% margin. Convert with Margin = Markup / (1 + Markup) and Markup = Margin / (1 − Margin).",
      "To price from a target margin, divide cost by (1 − target margin): a $60 cost and 40% target margin give $60 / 0.60 = $100. 'Add 40% to cost' ($84) leaves only a 28.6% margin.",
      "In e-commerce the margin that drives decisions is contribution margin: the same product keeps 31% after shipping, payment fees, packaging and returns, so break-even ROAS = 1 / 0.31 ≈ 3.23. A 20% discount cuts gross margin from 45% to 31.25%, and you need 80% more unit sales to keep the same gross profit.",
    ],
    publishedAt: "2026-10-28",
    readingMinutes: 8,
    tags: ["Profit Margin", "Margin vs Markup", "Gross Margin", "Contribution Margin", "Pricing", "Break-even ROAS"],
    sections: [
      {
        heading: "How do you calculate profit margin? (Short answer)",
        paragraphs: [
          "Profit margin shows how many dollars of every $100 in sales you keep as profit. Formula: Profit margin (%) = (Selling price − Cost) / Selling price × 100.",
          "Example: if you sell a product for $100 and buy it for $55, profit per unit is $45 and the margin is $45 / $100 = 45%. The same formula works on totals: $50,000 of monthly sales with $27,500 cost of goods sold is also a 45% gross margin. (All figures are illustrative.)",
          "Which costs you subtract decides which margin you get: product cost only gives gross margin, adding per-order variable costs gives contribution margin, and adding operating expenses gives operating margin. Below I show all of them on one product.",
        ],
      },
      {
        heading: "What's the difference between margin and markup?",
        paragraphs: [
          "Margin divides profit by selling price; markup divides profit by cost. The same $45 profit is 45% of the $100 price and 81.8% of the $55 cost. Both are correct but answer different questions: markup asks 'how much did I add to cost?', margin asks 'how much of the sale did I keep?'",
          "Mixing them up is expensive: if a supplier means markup when they say '50% profit' and your budget assumes a 50% margin, you actually keep only a third of each sale. Advertising and pricing math (break-even ROAS, max CPA, discount decisions) always uses margin on selling price.",
        ],
        bullets: [
          "Profit margin = Profit / Selling price",
          "Markup = Profit / Cost",
          "Markup to margin: Margin = Markup / (1 + Markup) → 50% markup = 0.5 / 1.5 = 33.3% margin",
          "Margin to markup: Markup = Margin / (1 − Margin) → 40% margin = 0.4 / 0.6 = 66.7% markup",
          "Margin can never reach 100%; markup easily exceeds 100%",
        ],
      },
      {
        heading: "Markup to margin conversion table",
        paragraphs: [
          "Common markups and their margin equivalents are below. Supplier price lists and wholesale talks use markup; financial reports and ad math use margin. Use the table to translate between the two.",
        ],
        bullets: [
          "25% markup = 20% margin",
          "33.3% markup = 25% margin",
          "50% markup = 33.3% margin",
          "66.7% markup = 40% margin",
          "100% markup (selling at 2× cost) = 50% margin",
          "150% markup = 60% margin",
          "200% markup (selling at 3× cost) = 66.7% margin",
        ],
      },
      {
        heading: "How do you set a price from a target profit margin?",
        paragraphs: [
          "From target margin to price: Selling price = Cost / (1 − Target margin). For a product costing $60 with a 40% target margin, the price is $60 / 0.60 = $100; profit $40, margin $40 / $100 = 40%.",
          "The most common mistake is adding the target percentage to cost: $60 × 1.40 = $84. At that price profit is $24 and margin is $24 / $84 = 28.6%, about 11 points below target. When setting campaign, wholesale or marketplace prices, apply the formula after adding every variable cost to the product cost.",
        ],
      },
      {
        heading: "Gross, contribution, operating and net margin: four margins on one product",
        paragraphs: [
          "'Profit margin' isn't a single number; you stop at different steps of a ladder depending on which costs you subtract. Example product: price $100, product cost $55; per order shipping $7, payment fee $3, packaging $1.50, returns allowance $2.50; ad cost per order $12; the store gets 1,000 orders a month and has $15,000 of monthly operating expenses such as rent, salaries and software ($15 per order).",
          "Gross margin (45%) shows pricing and sourcing power; contribution margin (31%) shows what each order leaves for ads and fixed costs. After ads 19% remains, and after operating expenses operating margin falls to 4%. Many stores look at gross margin, call themselves profitable and lose money further down the ladder. Net margin is what remains after items such as financing costs are also deducted; I don't go into that calculation here.",
        ],
        bullets: [
          "Gross margin = ($100 − $55) / $100 = 45%",
          "Contribution margin = ($100 − $55 − $7 − $3 − $1.50 − $2.50) / $100 = $31 / $100 = 31%",
          "Contribution after ads = ($31 − $12) / $100 = 19%",
          "Operating margin = ($19 − $15) / $100 = 4%",
        ],
      },
      {
        heading: "How do you calculate profit margin on a marketplace?",
        paragraphs: [
          "On a marketplace, commission and shipping come out of the selling price, so the gap between gross and contribution margin widens. Say you sell the same product on a marketplace for $100 with an example 20% commission and $9 shipping: $100 − $55 − $20 − $9 = $16 contribution, a 16% contribution margin, about half of the 31% on your own store.",
          "Shipping cost depends on dimensional weight; shaving a few centimetres off the box can change the chargeable weight and therefore your margin. Commission rates vary by category, so check the current rate in the marketplace's seller panel. You can work out net profit per order after commission, shipping, returns and ads with the marketplace profit calculator, and chargeable weight with the dimensional weight calculator.",
        ],
      },
      {
        heading: "How does a discount affect profit margin?",
        paragraphs: [
          "A discount comes straight off margin but cuts profit much harder. On the $100 product costing $55, a 20% discount makes the price $80: gross profit falls from $45 to $25 (−44%), and gross margin drops from 45% to 31.25%.",
          "Sales lift needed to keep the same total gross profit: Required sales multiple = Margin / (Margin − Discount). Here 0.45 / (0.45 − 0.20) = 1.8, so you need to sell 80% more units. As the discount approaches the margin the multiple explodes; a 40% discount needs 9× the sales. Since contribution margin is lower than gross margin, running this check on contribution margin is safer during promotions.",
        ],
      },
      {
        heading: "How profit margin links to ROAS: break-even ROAS",
        paragraphs: [
          "What you can spend on ads without losing money is capped by contribution margin. Break-even ROAS = 1 / Contribution margin. With a 31% contribution margin, break-even ROAS is 1 / 0.31 ≈ 3.23: at most $31 of ad spend per $100 of sales.",
          "The example's $12 ad cost per order equals a ROAS of $100 / $12 ≈ 8.3, comfortably above break-even. A discount that drops contribution margin from 31% to 20% pushes break-even ROAS to 5; if you don't update the target in your ad platform, the campaign brings revenue while losing money. You can see break-even and target ROAS together with the ROAS calculator.",
        ],
      },
      {
        heading: "How do you calculate profit margin in Excel?",
        paragraphs: [
          "With selling price in column B and cost in column C, type =(B2-C2)/B2 into D2 and format it as a percentage. For markup use =(B2-C2)/C2; for price from a target margin (target in E2) use =C2/(1-E2).",
          "Adding shipping, commission and returns as separate cost columns and calculating contribution margin shows at a glance which products can carry advertising. A total margin hides the average of profitable and unprofitable products; make decisions per product or category.",
        ],
      },
      {
        heading: "What profit margin should you aim for?",
        paragraphs: [
          "There's no one-size-fits-all number; the right question is 'does my margin carry my costs?' Minimum contribution margin must cover ad cost per order plus operating cost per order. In the example that's $12 + $15 = $27, or 27% of sales; a 31% contribution margin clears it by only 4 points.",
          "There are four ways to raise margin: raise the price, lower product cost (supplier, order quantity), lower per-order variable costs (box size, return rate, payment fees) and grow basket size (fixed per-order items such as shipping become a smaller share of a bigger basket). The contribution margin ladder shows which one will move fastest.",
        ],
      },
    ],
    faq: [
      {
        question: "What is the profit margin formula?",
        answer:
          "Profit margin (%) = (Selling price − Cost) / Selling price × 100. A product sold for $100 that costs $55 has a margin of ($100 − $55) / $100 = 45%.",
      },
      {
        question: "Is margin the same as markup?",
        answer:
          "No. Margin divides profit by selling price; markup divides profit by cost. A product bought for $55 and sold for $100 has a 45% margin and an 81.8% markup. Convert with Margin = Markup / (1 + Markup).",
      },
      {
        question: "How do I price a product for a 30% margin?",
        answer:
          "Selling price = Cost / (1 − 0.30). For a $70 cost, $70 / 0.70 = $100. Adding 30% to cost ($91) leaves only about a 23% margin.",
      },
      {
        question: "What's the difference between gross and net profit margin?",
        answer:
          "Gross margin subtracts only cost of goods sold and shows product-level profitability. Net margin shows what remains after all operating expenses and other items. In e-commerce, contribution margin (after shipping, fees and returns) sits between them and is the most useful for ad decisions.",
      },
      {
        question: "What does a negative profit margin mean?",
        answer:
          "Your selling price is below the costs you subtracted. A negative gross margin means selling below product cost; a negative contribution margin means every order loses money after shipping, fees and returns. Revisit price, product cost or your shipping and commission structure.",
      },
    ],
    howTo: {
      name: "How to calculate profit margin",
      description: "Find profit margin, markup and the price for a target margin from selling price and cost.",
      steps: [
        { name: "Get price and cost", text: "Take the selling price and the cost matching the margin you want (product cost for gross margin; add shipping, fees and returns for contribution margin)." },
        { name: "Find the profit", text: "Subtract cost from price: $100 − $55 = $45." },
        { name: "Divide by price", text: "Divide profit by selling price and multiply by 100: $45 / $100 × 100 = 45% margin." },
        { name: "Convert to markup if needed", text: "Divide profit by cost for markup: $45 / $55 = 81.8%, or use Markup = Margin / (1 − Margin)." },
        { name: "Price from a target margin", text: "Selling price = Cost / (1 − Target margin). A $60 cost and 40% target margin give $100." },
      ],
    },
    relatedToolKey: "gross-margin",
    resources: [
      { label: "Gross Profit Margin Calculator", href: "/en/free-tools/gross-profit-margin-calculator/" },
      { label: "Net Profit Margin Calculator", href: "/en/free-tools/net-profit-margin-calculator/" },
      { label: "ROAS Calculator (break-even ROAS)", href: "/en/free-tools/roas-calculator/" },
      { label: "Marketplace Profit Calculator", href: "/en/free-tools/marketplace-profit-calculator/" },
      { label: "Dimensional Weight Calculator", href: "/en/free-tools/dimensional-weight-calculator/" },
      { label: "What Is ROAS and How to Calculate It", href: "/en/blog/what-is-roas-how-to-calculate/" },
      { label: "How to Set Target ROAS in Google Ads", href: "/en/blog/how-to-set-target-roas-google-ads/" },
      { label: "Black Friday 2026 Ad Plan", href: "/en/blog/black-friday-2026-ad-plan/" },
      { label: "What Is CAC? Customer Acquisition Cost Explained", href: "/en/blog/what-is-cac-customer-acquisition-cost/" },
      { label: "Penn State Extension: What's the difference between markup and profit?", href: "https://extension.psu.edu/whats-the-difference-between-markup-and-profit", external: true },
    ],
  },
  {
    slug: "what-is-mrr-how-to-calculate",
    seoTitle: "What Is MRR? How to Calculate Monthly Recurring Revenue",
    title: "What Is MRR and How Do You Calculate It? Monthly Recurring Revenue, MRR Movements and a Worked Example",
    description:
      "What is MRR and how do you calculate it? Annual plans, discounts and FX, the new/expansion/churn MRR bridge, SaaS Quick Ratio and a full worked example.",
    category: "saas-buyume",
    tldr: [
      "MRR (Monthly Recurring Revenue) is the monthly value of the subscription revenue you expect to repeat every month. Formula: MRR = Σ (each plan's monthly price × active accounts on it). In the example: $7,350 + $3,600 + $2,000 = $12,950.",
      "Divide annual plans by 12 and quarterly plans by 3; convert weekly plans with × 52 / 12. One-off setup, training and consulting fees — and the full amount of an annual prepayment — never go into MRR.",
      "Track the movements, not just the total: Net new MRR = New + Expansion + Reactivation − Contraction − Churn. In the example $1,002 + $350 + $98 − $240 − $501 = $709, so MRR grew 5.5%.",
      "The same month's SaaS Quick Ratio is only 2.0 (4+ is usually considered strong) and gross MRR churn is 5.7%: the business is growing, but the bucket leaks. If you bill in several currencies, report MRR at a constant exchange rate too.",
    ],
    publishedAt: "2026-10-29",
    readingMinutes: 9,
    tags: ["MRR", "Monthly Recurring Revenue", "SaaS Metrics", "Net New MRR", "Quick Ratio", "ARR"],
    sections: [
      {
        heading: "What is MRR? (Short answer)",
        paragraphs: [
          "MRR (Monthly Recurring Revenue) is the monthly value of the revenue a subscription business expects to collect again every month from its active subscriptions. It is the core growth metric for SaaS companies, mobile apps, membership sites and e-commerce brands that sell subscription boxes.",
          "Formula: MRR = Σ (Plan's monthly price × Active accounts on that plan). With a single plan, MRR = Active accounts × ARPA (average revenue per account). MRR is not an invoice total or the cash you collected this month; it is a snapshot of the monthly revenue power of your current subscriber base.",
          "The annual equivalent of MRR is ARR: ARR = MRR × 12. All figures in this article are illustrative and follow one example company; to try your own numbers, use the MRR Calculator.",
        ],
      },
      {
        heading: "How to calculate MRR: a step-by-step example",
        paragraphs: [
          "The example company is a B2B SaaS with 215 active accounts at the start of October and three plans. The calculation is simply each plan's monthly value multiplied by its account count, then summed.",
          "Total: $7,350 + $3,600 + $2,000 = $12,950 MRR. ARPA is $12,950 / 215 ≈ $60 and ARR is $12,950 × 12 = $155,400. The same month the company invoiced $500 in setup and training fees; because they do not repeat, they stay out of MRR.",
        ],
        bullets: [
          "Starter plan ($49/month): 150 accounts × $49 = $7,350",
          "Pro plan ($69/month or $720/year prepaid; all 60 Pro accounts are on annual billing → monthly value $720 / 12 = $60): 60 × $60 = $3,600",
          "Enterprise plan ($400/month contract): 5 accounts × $400 = $2,000",
          "One-off setup/training ($500): not included in MRR",
        ],
      },
      {
        heading: "What counts toward MRR, and what doesn't?",
        paragraphs: [
          "The rule is simple: contracted revenue that will repeat next month even if the customer does nothing is MRR. Revenue that happens once, or whose amount is uncertain every month, is not.",
        ],
        bullets: [
          "Included: monthly subscription fees; the monthly value of annual, semi-annual and quarterly plans; recurring add-ons and extra seat packs",
          "Included (at the price paid): discounted subscriptions — record what the customer actually pays, not the list price",
          "Excluded: setup, onboarding, training, consulting and other one-off services; one-off product sales",
          "Excluded: free-trial users (they become new MRR on their first payment) and free plans",
          "Track separately: usage-based overage — the contracted base fee goes into MRR, variable usage on its own line",
          "Note: a cancellation that is paid through the end of the term stays in MRR until it takes effect, then leaves as churned MRR",
        ],
      },
      {
        heading: "How do annual, quarterly and weekly plans convert to MRR?",
        paragraphs: [
          "MRR only makes sense when every billing period is normalised to a month. Booking the full value of an annual prepayment in the month it was paid makes MRR spike, then appear to fall for the next 11 months.",
          "In October, 8 Pro accounts renewed annually and $5,760 (8 × $720) hit the bank. Those accounts were already in MRR, so their contribution did not change (8 × $60 = $480). The cash report makes October look great; MRR correctly says 'no change'.",
        ],
        bullets: [
          "Annual plan: Monthly value = Annual price / 12 ($720 → $60)",
          "Semi-annual plan: price / 6; quarterly plan: price / 3",
          "Weekly plan: Weekly price × 52 / 12 ($12/week ≈ $52/month). Multiplying a week by 4 understates MRR by about 8%",
          "Multi-year contract: divide the annual value by 12; never show a 2–3 year prepayment in one month",
        ],
      },
      {
        heading: "What are MRR movements? New, expansion, contraction and churned MRR",
        paragraphs: [
          "Total MRR alone does not show where growth comes from or where revenue leaks. That is why each month's change is split into five movements to build an 'MRR bridge'.",
          "The example company's October movements: 18 new Starter accounts (18 × $49 = $882) and 2 new Pro accounts (2 × $60 = $120) give new MRR of $1,002. Ten accounts upgraded from Starter to monthly Pro (10 × $20 = $200) and one enterprise customer bought an extra seat pack ($150): expansion $350. Two previously churned Starter accounts came back: reactivation $98. One enterprise customer renegotiated from $400 to $250 ($150) and 6 accounts removed seats (6 × $15 = $90): contraction $240. Nine Starter accounts cancelled ($441) and one Pro account did not renew ($60): churn $501.",
        ],
        bullets: [
          "New MRR: MRR from accounts paying for the first time — $1,002",
          "Expansion MRR: upgrades, extra seats or modules from existing accounts — $350",
          "Reactivation MRR: previously churned accounts that return — $98",
          "Contraction MRR: downgrades and seat reductions from existing accounts — $240",
          "Churned MRR: MRR from accounts that cancelled or did not renew — $501",
        ],
      },
      {
        heading: "How do you calculate net new MRR and MRR growth rate?",
        paragraphs: [
          "Net new MRR = New + Expansion + Reactivation − Contraction − Churn. In the example: $1,002 + $350 + $98 − $240 − $501 = $709. The bridge closes like this: starting MRR $12,950 + $709 = ending MRR $13,659. The month ends with 227 active accounts (215 + 20 new + 2 returning − 10 churned); ARPA ≈ $60 and ARR is $13,659 × 12 = $163,908.",
          "Monthly MRR growth rate = Net new MRR / Starting MRR = $709 / $12,950 ≈ 5.5%. Over several months, use compound monthly growth rate (CMGR) instead of averaging individual months: CMGR = (Ending MRR / Starting MRR)^(1 / months) − 1. If MRR was $9,700 at the end of April and $13,659 at the end of October, the 6-month CMGR is ($13,659 / $9,700)^(1/6) − 1 ≈ 5.9%.",
        ],
      },
      {
        heading: "Is your MRR growth healthy? Quick Ratio, MRR churn and NRR",
        paragraphs: [
          "5.5% monthly growth looks good, but three more ratios from the same bridge reveal its quality — and expose months where new sales are masking churn.",
          "In the example, growth comes from new sales while the existing base shrinks every month (monthly NRR below 100%). The month new sales slow down, MRR starts to fall. The priority is to find the causes of churn and contraction — first-90-day activation and Starter-plan churn. You can track churn with the Churn Rate Calculator and NRR with the NRR Calculator.",
        ],
        bullets: [
          "SaaS Quick Ratio = (New + Expansion + Reactivation) / (Contraction + Churn) = $1,450 / $741 ≈ 2.0. In this ratio, popularised by investor Mamoon Hamid, 4 or above is usually considered efficient growth; below 1 means shrinking",
          "Gross MRR churn = (Contraction + Churn) / Starting MRR = $741 / $12,950 ≈ 5.7% (monthly)",
          "Net MRR churn = (Contraction + Churn − Expansion) / Starting MRR = $391 / $12,950 ≈ 3.0%; when expansion exceeds losses you have negative churn",
          "Monthly NRR = (Starting + Expansion − Contraction − Churn) / Starting = $12,559 / $12,950 ≈ 97.0%",
          "Logo (customer) churn = Churned accounts / Starting accounts = 10 / 215 ≈ 4.7%; it differs from revenue churn, so track both",
        ],
      },
      {
        heading: "How do discounts, free trials and exchange rates affect MRR?",
        paragraphs: [
          "Discounts: 20 Starter accounts paying 25% less for 3 months add 20 × $36.75 = $735 to MRR, not $980. When the discount ends, the $245 increase shows up as expansion in movement reports; label it 'discount ended' so it is not confused with a real upsell.",
          "Trials: accounts on a free trial are not in MRR; they become new MRR on their first payment. Track trials with trial-to-paid conversion rate instead. Refunds: a refunded subscription leaves as churned MRR in the month of the refund; some tools rewrite past months instead, so document which method you use.",
          "Exchange rates: if you bill in several currencies and report in one, FX moves MRR without a single new customer. €5,000 of MRR is $5,400 at an illustrative rate of 1.08 and $5,600 at 1.12 — a 3.7% 'growth' with no new sales. Report MRR in billing currency and at a constant (start-of-period) rate, and show the FX effect on its own line.",
        ],
      },
      {
        heading: "How do you calculate MRR for an e-commerce subscription?",
        paragraphs: [
          "MRR is not SaaS-only. A brand selling coffee, pet food or beauty subscriptions uses the same formula: MRR = Σ (active subscriptions × monthly value). With 800 subscribers on a $15 monthly box and 300 on a $40 box shipped every 3 months, MRR = 800 × $15 + 300 × ($40 / 3) = $12,000 + $4,000 = $16,000.",
          "Two differences apply in e-commerce. First, customers who 'pause' their subscription leave MRR during the pause and return as reactivation. Second, MRR is a revenue metric, not profit: in subscription models with high product, shipping and packaging costs, make decisions on contribution margin.",
        ],
      },
      {
        heading: "What's the difference between MRR, ARR, revenue and cash?",
        paragraphs: [
          "These four are often confused and produce four different numbers for the same month. In the example, ending MRR is $13,659 while far more cash came in through annual renewals and setup fees.",
        ],
        bullets: [
          "MRR: the monthly revenue power of the subscriber base (normalised, one-offs excluded) — $13,659",
          "ARR: MRR × 12 — $163,908. Used for planning and investor reporting; see ARR vs MRR for the details",
          "Revenue (accounting): all recurring and one-off revenue; annual prepayments are recognised over the service period",
          "Cash collected: money that hit the bank this month; annual prepayments and setup fees can make it very different from MRR",
        ],
      },
      {
        heading: "The most common MRR mistakes",
        paragraphs: [
          "MRR errors usually come from definitions, not the formula. Writing the definitions down once and applying them the same way every month is what makes the number trustworthy.",
        ],
        bullets: [
          "Booking the full annual prepayment in the month it was paid",
          "Adding setup, training, consulting or one-off product sales to MRR",
          "Counting discounted accounts at list price",
          "Counting trial users or accounts with failed payments as active indefinitely",
          "Mistaking FX movements for growth; not comparing at a constant rate",
          "Watching only total MRR instead of the new / expansion / contraction / churn breakdown",
        ],
      },
    ],
    faq: [
      {
        question: "What does MRR stand for?",
        answer:
          "MRR stands for Monthly Recurring Revenue: the monthly value of the subscription revenue you expect to repeat every month from your active customers.",
      },
      {
        question: "How do you calculate MRR?",
        answer:
          "Multiply each plan's monthly price by its number of active accounts and add them up; divide annual plans by 12 and quarterly plans by 3 first. Example: 150 × $49 + 60 × ($720 / 12) + 5 × $400 = $12,950. One-off revenue is excluded.",
      },
      {
        question: "What is net new MRR?",
        answer:
          "It is the net change in MRR over a month: New + Expansion + Reactivation − Contraction − Churned MRR. In the example $1,002 + $350 + $98 − $240 − $501 = $709; added to starting MRR it gives ending MRR.",
      },
      {
        question: "What is the difference between MRR and ARR?",
        answer:
          "ARR is the annual equivalent of MRR: ARR = MRR × 12. MRR drives monthly operating decisions (pricing, campaigns, churn); ARR is used for planning, budgeting and investor reporting. Neither includes one-off revenue.",
      },
      {
        question: "What is a good MRR growth rate?",
        answer:
          "There is no single number for everyone; it depends on company size and stage. Look at growth quality alongside the rate: a SaaS Quick Ratio of 4 or more, low gross MRR churn and NRR above 100% indicate healthy growth.",
      },
    ],
    howTo: {
      name: "How to calculate MRR",
      description: "Normalise every plan to a monthly value to get MRR, then use the month's MRR movements to calculate net new MRR and growth rate.",
      steps: [
        { name: "List active accounts by plan", text: "Split paying accounts at the start of the month by plan; leave out trial and free-plan users." },
        { name: "Convert every plan to a monthly value", text: "Divide annual prices by 12 and quarterly prices by 3, multiply weekly prices by 52/12; use the price actually paid for discounted accounts." },
        { name: "Add up MRR", text: "Multiply each plan's monthly value by its account count and sum. $7,350 + $3,600 + $2,000 = $12,950." },
        { name: "Split the month's movements", text: "Total new, expansion, reactivation, contraction and churned MRR separately." },
        { name: "Calculate net new MRR and ratios", text: "Add net new MRR to starting MRR to get ending MRR; calculate growth rate, Quick Ratio and MRR churn." },
      ],
    },
    relatedToolKey: "mrr",
    resources: [
      { label: "MRR Calculator", href: "/en/free-tools/mrr-calculator/" },
      { label: "ARR Calculator", href: "/en/free-tools/arr-calculator/" },
      { label: "ARPA Calculator", href: "/en/free-tools/arpa-calculator/" },
      { label: "NRR Calculator", href: "/en/free-tools/nrr-calculator/" },
      { label: "Churn Rate Calculator", href: "/en/free-tools/churn-rate-calculator/" },
      { label: "ARR vs MRR: What's the Difference?", href: "/en/blog/arr-vs-mrr-difference/" },
      { label: "What Is NRR? The SaaS Growth Metric", href: "/en/blog/what-is-nrr-saas-growth-metric/" },
      { label: "SaaS Metrics: ARR, CAC and LTV", href: "/en/blog/saas-metrics-arr-cac-ltv/" },
      { label: "What Is CAC? Customer Acquisition Cost Explained", href: "/en/blog/what-is-cac-customer-acquisition-cost/" },
      { label: "What Is LTV? LTV:CAC Ratio Explained", href: "/en/blog/what-is-ltv-ltv-cac-ratio/" },
      { label: "ChartMogul: SaaS Quick Ratio", href: "https://chartmogul.com/blog/saas-quick-ratio/", external: true },
      { label: "Tomasz Tunguz: What is the Quick Ratio hiding?", href: "https://tomtunguz.com/what-is-quick-ratio-hiding/", external: true },
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Locale-aware selectors used by BlogList / BlogPost / router.
// ─────────────────────────────────────────────────────────────────────────────

export type BlogLocale = "tr" | "en";

export function getPostsForLocale(locale: BlogLocale): BlogPost[] {
  return locale === "en" ? BLOG_POSTS_EN : BLOG_POSTS;
}

export function getCategoriesForLocale(locale: BlogLocale): BlogCategory[] {
  return locale === "en" ? BLOG_CATEGORIES_EN : BLOG_CATEGORIES;
}

export function getPostBySlugLocalized(slug: string, locale: BlogLocale): BlogPost | undefined {
  return getPostsForLocale(locale).find((p) => p.slug === slug);
}

export function getCategoryForLocale(slug: BlogCategorySlug, locale: BlogLocale): BlogCategory {
  return getCategoriesForLocale(locale).find((c) => c.slug === slug)!;
}

export function getAlternateBlogSlug(slug: string, target: BlogLocale): string | null {
  const pair = BLOG_SLUG_PAIRS.find((p) => p.tr === slug || p.en === slug);
  if (!pair) return null;
  return pair[target];
}

// ─────────────────────────────────────────────────────────────────────────────
// Related-tool internal linking. Every blog post can either explicitly point
// at a tool via `relatedToolKey`, or fall back to the category default. The
// href is locale-aware so /blog/* CTAs stay on the TR tool and /en/blog/*
// CTAs stay on the EN tool.
// ─────────────────────────────────────────────────────────────────────────────

export interface RelatedToolLink {
  href: string;
  label: string;
  description: string;
}

type LocalizedToolMeta = Record<BlogLocale, RelatedToolLink>;

const RELATED_TOOLS: Record<RelatedToolKey, LocalizedToolMeta> = {
  conversion: {
    tr: {
      href: "/ucretsiz-araclar/donusum-orani-hesaplayici",
      label: "Dönüşüm Oranı Hesaplayıcı",
      description: "Ziyaretçi ve dönüşüm sayınızla dönüşüm oranınızı anında hesaplayın.",
    },
    en: {
      href: "/en/free-tools/conversion-rate-calculator",
      label: "Conversion Rate Calculator",
      description: "Turn visitors and conversions into a conversion rate in seconds.",
    },
  },
  "cac-payback": {
    tr: {
      href: "/ucretsiz-araclar/cac-geri-odeme-suresi-hesaplayici",
      label: "CAC Geri Ödeme Süresi Hesaplayıcı",
      description: "CAC'ınızın kaç ayda geri döndüğünü brüt marj dahil hesaplayın.",
    },
    en: {
      href: "/en/free-tools/cac-payback-period-calculator",
      label: "CAC Payback Period Calculator",
      description: "See how many months it takes to recover your acquisition cost.",
    },
  },
  arr: {
    tr: {
      href: "/ucretsiz-araclar/arr-hesaplayici",
      label: "ARR Hesaplayıcı",
      description: "MRR'den yıllık yinelenen gelirinizi anında hesaplayın.",
    },
    en: {
      href: "/en/free-tools/arr-calculator",
      label: "ARR Calculator",
      description: "Compute annual recurring revenue from your MRR instantly.",
    },
  },
  mrr: {
    tr: {
      href: "/ucretsiz-araclar/mrr-hesaplayici",
      label: "MRR Hesaplayıcı",
      description: "Aylık yinelenen gelirinizi ve ARR karşılığını hesaplayın.",
    },
    en: {
      href: "/en/free-tools/mrr-calculator",
      label: "MRR Calculator",
      description: "Calculate monthly recurring revenue and its ARR equivalent.",
    },
  },
  arpa: {
    tr: {
      href: "/ucretsiz-araclar/arpa-hesaplayici",
      label: "ARPA Hesaplayıcı",
      description: "Hesap başına ortalama gelirinizi (ARPA) hesaplayın.",
    },
    en: {
      href: "/en/free-tools/arpa-calculator",
      label: "ARPA Calculator",
      description: "Calculate average revenue per account (ARPA).",
    },
  },
  nrr: {
    tr: {
      href: "/ucretsiz-araclar/nrr-hesaplayici",
      label: "NRR Hesaplayıcı",
      description: "Net gelir tutundurma oranınızı (NRR) hesaplayın.",
    },
    en: {
      href: "/en/free-tools/nrr-calculator",
      label: "NRR Calculator",
      description: "Calculate your net revenue retention (NRR).",
    },
  },
  "rule-of-40": {
    tr: {
      href: "/ucretsiz-araclar/rule-of-40-hesaplayici",
      label: "Rule of 40 Hesaplayıcı",
      description: "Büyüme ve kârlılık dengenizi tek skorda görün.",
    },
    en: {
      href: "/en/free-tools/rule-of-40-calculator",
      label: "Rule of 40 Calculator",
      description: "Score your growth vs. profitability balance.",
    },
  },
  cac: {
    tr: {
      href: "/ucretsiz-araclar/cac-hesaplayici",
      label: "CAC Hesaplayıcı",
      description: "Müşteri edinme maliyetinizi hızlıca hesaplayın.",
    },
    en: {
      href: "/en/free-tools/cac-calculator",
      label: "CAC Calculator",
      description: "Calculate your customer acquisition cost in seconds.",
    },
  },
  churn: {
    tr: {
      href: "/ucretsiz-araclar/churn-rate-hesaplayici",
      label: "Churn Rate Hesaplayıcı",
      description: "Aylık churn oranınızı ve retention etkisini görün.",
    },
    en: {
      href: "/en/free-tools/churn-rate-calculator",
      label: "Churn Rate Calculator",
      description: "See your monthly churn rate and its impact on retention.",
    },
  },
  ltv: {
    tr: {
      href: "/ucretsiz-araclar/ltv-hesaplayici",
      label: "LTV Hesaplayıcı",
      description: "Müşteri yaşam boyu değerinizi (LTV) hesaplayın.",
    },
    en: {
      href: "/en/free-tools/ltv-calculator",
      label: "LTV Calculator",
      description: "Estimate customer lifetime value (LTV).",
    },
  },
  roas: {
    tr: {
      href: "/ucretsiz-araclar/roas-hesaplayici",
      label: "ROAS Hesaplayıcı",
      description: "Reklam harcamanızın getirisini (ROAS) hesaplayın.",
    },
    en: {
      href: "/en/free-tools/roas-calculator",
      label: "ROAS Calculator",
      description: "Calculate return on ad spend (ROAS) for your campaigns.",
    },
  },
  utm: {
    tr: {
      href: "/ucretsiz-araclar/utm-link-olusturucu",
      label: "UTM Link Oluşturucu",
      description: "Kampanya URL'leriniz için standart UTM etiketleri üretin.",
    },
    en: {
      href: "/en/free-tools/utm-builder",
      label: "UTM Link Builder",
      description: "Generate standard UTM tags for your campaign URLs.",
    },
  },
  "llms-txt": {
    tr: {
      href: "/ucretsiz-araclar/llms-txt-olusturucu",
      label: "llms.txt Oluşturucu",
      description: "Sitenizin AI botları için llms.txt dosyasını üretin.",
    },
    en: {
      href: "/en/free-tools/llms-txt-generator",
      label: "llms.txt Generator",
      description: "Generate your site's llms.txt file for AI crawlers.",
    },
  },
  marketplace: {
    tr: {
      href: "/ucretsiz-araclar/trendyol-hepsiburada-kar-hesaplama",
      label: "Trendyol & Hepsiburada Kâr Hesaplama",
      description: "Komisyon, kargo, stopaj, iade ve reklam dahil sipariş başı net kârınızı görün.",
    },
    en: {
      href: "/en/free-tools/marketplace-profit-calculator",
      label: "Trendyol & Hepsiburada Profit Calculator",
      description: "Net profit per order after commission, shipping, returns and ads.",
    },
  },
  "ad-budget": {
    tr: {
      href: "/ucretsiz-araclar/reklam-butcesi-hesaplama",
      label: "Reklam Bütçesi Hesaplama",
      description: "Hedef cirodan bütçe, başabaş/hedef ROAS ve maks. CPA hesaplayın.",
    },
    en: {
      href: "/en/free-tools/ad-budget-calculator",
      label: "Ad Budget Calculator",
      description: "Budget, break-even/target ROAS and max CPA from your revenue target.",
    },
  },
  desi: {
    tr: {
      href: "/ucretsiz-araclar/desi-hesaplama",
      label: "Desi Hesaplama",
      description: "Kargo desisini ve ücrete esas desi/kg değerini çoklu koli ile hesaplayın.",
    },
    en: {
      href: "/en/free-tools/dimensional-weight-calculator",
      label: "Dimensional Weight (Desi) Calculator",
      description: "Dimensional vs actual weight and chargeable weight for one or many boxes.",
    },
  },
  "gross-margin": {
    tr: {
      href: "/ucretsiz-araclar/brut-kar-marji-hesaplayici",
      label: "Kar Marjı Hesaplama",
      description: "Satış fiyatı ve maliyetle brüt kar marjınızı yüzde ve tutar olarak hesaplayın.",
    },
    en: {
      href: "/en/free-tools/gross-profit-margin-calculator",
      label: "Gross Profit Margin Calculator",
      description: "Turn revenue and cost of goods into gross margin in seconds.",
    },
  },
};

const CATEGORY_DEFAULT_TOOL: Record<BlogCategorySlug, RelatedToolKey> = {
  "performans-pazarlama": "roas",
  "b2b-lead-generation": "utm",
  "yapay-zeka-otomasyon": "llms-txt",
  "saas-buyume": "arr",
};

export function getRelatedToolForPost(
  post: BlogPost,
  locale: BlogLocale
): RelatedToolLink {
  const key = post.relatedToolKey ?? CATEGORY_DEFAULT_TOOL[post.category];
  return RELATED_TOOLS[key][locale];
}
// Reverse lookup used by tool pages: every post that explicitly names this
// tool via relatedToolKey is linked from the tool page automatically, so new
// posts strengthen their tool without manual edits. Newest first.
export function getPostsForToolPath(
  toolPath: string,
  locale: BlogLocale
): Array<{ label: string; href: string }> {
  const norm = (p: string) => p.replace(/\/+$/, "");
  const base = locale === "en" ? "/en/blog" : "/blog";
  return getPostsForLocale(locale)
    .filter(
      (p) =>
        p.relatedToolKey &&
        norm(RELATED_TOOLS[p.relatedToolKey][locale].href) === norm(toolPath)
    )
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
    .map((p) => ({ label: p.title, href: `${base}/${p.slug}/` }));
}
