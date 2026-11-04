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
  | "discount"
  | "shipping-cost"
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
    resources: [
      { label: "Google Ads Nedir, Nasıl Çalışır? Maliyet ve Örnek Hesap", href: "/blog/google-ads-nedir-nasil-calisir/" },
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
    resources: [
      { label: "llms.txt Nedir, İşe Yarıyor mu? (2026 verileriyle)", href: "/blog/llms-txt-nedir-ise-yariyor-mu/" },
    ],
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
    resources: [
      { label: "Instagram Reklam Verme Rehberi: Bütçe ve Fiyatlar", href: "/blog/instagram-reklam-verme-rehberi/" },
      { label: "Meta Reklam Verme Rehberi: Bütçe, Kitle ve Öğrenme Aşaması", href: "/blog/meta-reklam-verme-rehberi/" },
      { label: "Reklam Bütçesi Hesaplama", href: "/ucretsiz-araclar/reklam-butcesi-hesaplama/" },
      { label: "ROAS Hesaplama", href: "/ucretsiz-araclar/roas-hesaplayici/" },
    ],
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
      { label: "CPL Nedir? Lead Başı Maliyet Nasıl Hesaplanır?", href: "/blog/cpl-nedir-lead-basi-maliyet/" },
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
      "ROAS, reklama harcanan 1 TL'nin kaç TL ciro getirdiğini gösterir. Formül, örnek hesap, başabaş ROAS, iyi ROAS kaç olmalı ve ROAS nasıl artırılır?",
    category: "performans-pazarlama",
    tldr: [
      "ROAS = Reklamdan gelen gelir / Reklam harcaması. 1.000 TL harcayıp 4.000 TL ciro elde ettiyseniz ROAS 4'tür (veya %400).",
      "'İyi ROAS' diye evrensel bir sayı yoktur; eşik brüt kâr marjınıza bağlıdır: Başabaş ROAS = 1 / Brüt kâr marjı.",
      "%40 marjlı bir işletme için başabaş ROAS 2,5'tir; 3 ROAS kârlı, 2 ROAS ise her satışta zarar demektir.",
      "ROAS üç sayıdan oluşur: (Dönüşüm oranı × Ortalama sipariş tutarı) / TBM. Birini %25 iyileştirmek ROAS'ı 2'den 2,5'e taşır.",
      "Kararları reklam paneli ROAS'ına değil, tüm kanalları kapsayan MER (toplam ciro / toplam pazarlama harcaması) ile doğrulayın.",
    ],
    publishedAt: "2026-10-22",
    updatedAt: "2026-11-03",
    readingMinutes: 10,
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
          "Panellerde ROAS'ı nerede görürsünüz? Google Ads'te 'Dönüşüm değeri / maliyet' sütunu, Meta Reklam Yöneticisi'nde 'Satın alma ROAS'ı' sütunu aynı oranı verir. Sütun boşsa ya da 0 görünüyorsa genellikle dönüşüm değeri (sipariş tutarı) reklam hesabına aktarılmıyordur.",
        ],
      },
      {
        heading: "ROAS 3 Ne Demek? Sonucu Nasıl Okursunuz?",
        paragraphs: [
          "ROAS 3, reklama harcanan her 1 TL'nin 3 TL ciro getirdiğini söyler; yüzde olarak %300 yazılır. Bu ciroyu kâr sanmayın: ürün maliyeti, kargo ve komisyon henüz düşülmemiştir. Sonucun iyi mi kötü mü olduğunu kar marjınız belirler.",
          "Aynı ROAS'ın sonucu işletmeye göre değişir. 100.000 TL reklamla ROAS 4 yapan üç mağaza da 400.000 TL ciro yazar. %20 marjlı mağaza 80.000 TL brüt kâr bırakır ve reklam sonrası 20.000 TL zarardadır. %40 marjlı mağaza 60.000 TL, %70 marjlı mağaza 180.000 TL kazanır.",
        ],
        bullets: [
          "ROAS 1 (%100): harcama kadar ciro; ürün maliyeti karşılanmaz, her zaman zarar",
          "ROAS 2 (%200): ancak %50 ve üzeri marjda zarar etmez",
          "ROAS 3 (%300): %33,3 ve üzeri marjda zarar etmez",
          "ROAS 4 (%400): %25 ve üzeri marjda zarar etmez",
          "ROAS 5 (%500): %20 ve üzeri marjda zarar etmez",
        ],
      },
      {
        heading: "Başabaş ROAS: 'İyi ROAS Kaçtır?' Sorusunun Gerçek Cevabı",
        paragraphs: [
          "Bir kampanyanın kâr ettirip ettirmediğini anlamak için önce başabaş ROAS'ınızı bilmeniz gerekir. En basit hâliyle: Başabaş ROAS = 1 / Brüt kâr marjı.",
          "Örnek: Ürünlerinizin ortalama brüt kâr marjı %40 ise başabaş ROAS = 1 / 0,40 = 2,5'tir. Bu kampanya 2,5 ROAS'ın altında kalırsa her satış reklam maliyetini karşılamıyor demektir. Marj %25 ise eşik 4'e, %60 ise yaklaşık 1,67'ye çıkar ya da iner.",
          "Daha gerçekçi bir eşik için kargo, ödeme komisyonu ve paketleme gibi sipariş başı değişken maliyetleri de marjdan düşün. Brüt marj %40, değişken maliyetler cironun %10'u ise katkı marjı %30 olur ve başabaş ROAS 1 / 0,30 ≈ 3,33'e yükselir.",
          "'4 ve üzeri iyidir' kuralı ya da sektör ortalaması tabloları çoğu zaman kaynak göstermez ve sizin marjınızı bilmez. Kendi marjınızla hesapladığınız eşik her listeden daha güvenilirdir.",
        ],
        bullets: [
          "Brüt marj %60 → başabaş ROAS ≈ 1,67",
          "Brüt marj %40 → başabaş ROAS = 2,5",
          "Brüt marj %30 → başabaş ROAS ≈ 3,33",
          "Brüt marj %20 → başabaş ROAS = 5",
        ],
      },
      {
        heading: "ROAS'ı Belirleyen 3 Sayı: TBM, Dönüşüm Oranı ve Sipariş Tutarı",
        paragraphs: [
          "ROAS tek başına bir kaldıraç değildir, üç sayının sonucudur: ROAS = (Dönüşüm oranı × Ortalama sipariş tutarı) / TBM. Hangi sayının sorun olduğunu bulmadan yapılan 'ROAS artırma' çalışması genellikle yanlış yere gider.",
          "Örnek: TBM 8 TL, dönüşüm oranı %2, ortalama sipariş 800 TL. 1.000 tıklama 8.000 TL'ye gelir, 20 sipariş 16.000 TL ciro yazar; ROAS 2'dir. Başabaş eşiğiniz 2,5 ise üç sayıdan yalnızca birini iyileştirmek kampanyayı eşiğe taşır:",
        ],
        bullets: [
          "Ortalama sipariş 800 → 1.000 TL (+%25): ROAS 2,5",
          "Dönüşüm oranı %2 → %2,5 (+%25): ROAS 2,5",
          "TBM 8 → 6,40 TL (−%20): ROAS 2,5",
          "Üçü birlikte: ROAS ≈ 3,9",
        ],
      },
      {
        heading: "ROAS Nasıl Artırılır?",
        paragraphs: [
          "Önce ölçümü doğrulayın, sonra üç sayıdan en zayıf olanına gidin. Sırası önemlidir: çift sayılan satışlar ya da panele düşmeyen iadeler varken yapılan optimizasyon yanlış kampanyayı ödüllendirir.",
          "Uyarı: ROAS'ı yükseltmek her zaman kârı yükseltmez. Bütçeyi kısarsanız ROAS genellikle artar, çünkü en verimli tıklamalar kalır; ama toplam kâr düşebilir. Karar ölçütü ROAS'ın yüksekliği değil, reklam sonrası toplam kârdır. Bu ayrımı 'Hedef ROAS Nasıl Belirlenir?' rehberinde senaryo tablosuyla anlattık.",
        ],
        bullets: [
          "Ölçüm: iadeleri düşün, dönüşümü tek satın alma olayında tutun, kanal ve kampanya adlarını UTM ile standartlaştırın",
          "Ürün seçimi: ürün bazında ROAS'ı marjla karşılaştırın; başabaşın altında kalanı reklamdan çıkarın, marjı yüksek ürüne bütçe kaydırın",
          "Sipariş tutarı: paket ürün, tamamlayıcı ürün önerisi ve ücretsiz kargo eşiği ortalama sipariş tutarını yukarı çeker",
          "Dönüşüm oranı: reklam vaadiyle açılış sayfası örtüşsün; kargo ücretini erken gösterin, ödeme adımını kısaltın",
          "TBM: negatif anahtar kelimeler ve dar eşleme ile alakasız tıklamaları kesin; yorulan kreatifleri yenileyin",
          "Kitle: mevcut müşteri ve yeniden pazarlama ROAS'ını yeni müşteri kampanyalarından ayrı okuyun",
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
        heading: "ROAS ile ACOS Arasındaki Fark",
        paragraphs: [
          "ACOS (Advertising Cost of Sale), Amazon gibi pazaryerlerinde kullanılan bir metriktir ve ROAS'ın tersidir: ACOS = Reklam harcaması / Reklam cirosu = 1 / ROAS. ROAS 4, ACOS %25 demektir; ROAS 2,5 ise ACOS %40'tır.",
          "Eşik mantığı aynıdır: ACOS kar marjınızın altındaysa reklam sonrası kârdasınız. %40 marjlı üründe ACOS'un %40'ın altında kalması, ROAS'ın 2,5'in üstünde olmasıyla aynı şeydir.",
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
          "ROAS ciroyu reklam harcamasına böler ve maliyetleri hesaba katmaz. ROI ise (Kâr − Yatırım) / Yatırım formülüyle net kârlılığı ölçer. Yüksek ROAS her zaman yüksek ROI anlamına gelmez; düşük marjlı bir üründe 4 ROAS zarar ettirebilir. Reklam harcamasına göre ROI = ROAS × Marj − 1'dir: ROAS 4 ve %40 marjda 4 × 0,40 − 1 = %60.",
      },
      {
        question: "ROAS 3 ne demek?",
        answer:
          "Reklama harcanan her 1 TL'nin 3 TL ciro getirdiği anlamına gelir; %300 olarak da yazılır. Bu ciro kâr değildir: kar marjınız %33,3'ün altındaysa ROAS 3 zarar ettirir.",
      },
      {
        question: "ROAS nasıl artırılır?",
        answer:
          "ROAS = (Dönüşüm oranı × Ortalama sipariş tutarı) / TBM olduğu için üç yol vardır: sipariş tutarını artırmak (paket, ücretsiz kargo eşiği), dönüşüm oranını artırmak (açılış sayfası, ödeme adımı) ve TBM'yi düşürmek (negatif kelime, kreatif yenileme). Önce ölçümü doğrulayın ve başabaşın altındaki ürünleri reklamdan çıkarın.",
      },
      {
        question: "ROAS ile ACOS arasındaki fark nedir?",
        answer:
          "ACOS, ROAS'ın tersidir: ACOS = Reklam harcaması / Reklam cirosu = 1 / ROAS. ROAS 4, ACOS %25'e eşittir. ACOS'un kar marjınızın altında kalması reklam sonrası kâr ettiğinizi gösterir.",
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
      { label: "Instagram Reklam Verme Rehberi: Bütçe ve Fiyatlar", href: "/blog/instagram-reklam-verme-rehberi/" },
      { label: "UTM Nedir? UTM Kodu Nasıl Oluşturulur?", href: "/blog/utm-nedir-utm-parametreleri/" },
      { label: "CAC Nedir? Müşteri Edinme Maliyeti Nasıl Hesaplanır?", href: "/blog/cac-nedir-musteri-edinme-maliyeti/" },
      { label: "Trendyol Reklam Nasıl Verilir? Maliyet ve Kâr Hesabı", href: "/blog/trendyol-reklam-nasil-verilir/" },
      { label: "Kar Marjı Nasıl Hesaplanır? Kar Oranı (Markup) Farkı", href: "/blog/kar-marji-nasil-hesaplanir/" },
      { label: "ROAS Hesaplayıcı", href: "/ucretsiz-araclar/roas-hesaplayici/" },
      { label: "Kar Marjı Hesaplama", href: "/ucretsiz-araclar/brut-kar-marji-hesaplayici/" },
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
      { label: "Instagram Reklam Verme Rehberi: Bütçe ve Fiyatlar", href: "/blog/instagram-reklam-verme-rehberi/" },
      { label: "CPL Nedir? Lead Başı Maliyet Nasıl Hesaplanır?", href: "/blog/cpl-nedir-lead-basi-maliyet/" },
      { label: "CAC Nedir? Müşteri Edinme Maliyeti Nasıl Hesaplanır?", href: "/blog/cac-nedir-musteri-edinme-maliyeti/" },
      { label: "LTV Nedir? Müşteri Yaşam Boyu Değeri Hesaplama", href: "/blog/ltv-nedir-ltv-cac-orani/" },
      { label: "UTM Nedir? UTM Kodu Nasıl Oluşturulur?", href: "/blog/utm-nedir-utm-parametreleri/" },
      { label: "Google Ads Nedir, Nasıl Çalışır? Maliyet ve Örnek Hesap", href: "/blog/google-ads-nedir-nasil-calisir/" },
      { label: "Meta Reklam Verme Rehberi: Bütçe, Kitle ve Öğrenme Aşaması", href: "/blog/meta-reklam-verme-rehberi/" },
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
      { question: "Black Friday 2026 ne zaman?", answer: "Black Friday 2026, 27 Kasım Cuma günüdür; Cyber Monday ise 30 Kasım Pazartesi. Türkiye'de markalar ve pazaryerleri indirimleri genellikle tek güne sıkıştırmaz, Kasım boyunca 'Efsane Kasım' ya da 'Kasım İndirimleri' gibi adlarla yayar. Bu yüzden reklam planını 27 Kasım'dan birkaç hafta önce başlatın." },
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
      { label: "İndirim Hesaplama: İndirimli Fiyat ve Kâr Etkisi", href: "/ucretsiz-araclar/indirim-hesaplama/" },
      { label: "UTM Nedir? UTM Kodu Nasıl Oluşturulur?", href: "/blog/utm-nedir-utm-parametreleri/" },
      { label: "Trendyol Reklam Nasıl Verilir? Maliyet ve Kâr Hesabı", href: "/blog/trendyol-reklam-nasil-verilir/" },
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
      { label: "LTV Nedir? Müşteri Yaşam Boyu Değeri Hesaplama", href: "/blog/ltv-nedir-ltv-cac-orani/" },
      { label: "Google Ads Nedir, Nasıl Çalışır? Maliyet ve Örnek Hesap", href: "/blog/google-ads-nedir-nasil-calisir/" },
      { label: "Kar Marjı Nasıl Hesaplanır? Kar Oranı (Markup) Farkı", href: "/blog/kar-marji-nasil-hesaplanir/" },
      { label: "ROAS Hesaplayıcı", href: "/ucretsiz-araclar/roas-hesaplayici/" },
      { label: "Kar Marjı Hesaplama", href: "/ucretsiz-araclar/brut-kar-marji-hesaplayici/" },
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
    seoTitle: "LTV Nedir? Müşteri Yaşam Boyu Değeri Hesaplama (Örnekli)",
    title: "LTV Nedir, Nasıl Hesaplanır? LTV:CAC Oranı Kaç Olmalı? (Kohort ve Reklam Örnekleriyle)",
    description:
      "LTV, bir müşterinin size bıraktığı toplam kârdır. 483 TL'lik örnekle LTV hesaplama, kohort yöntemi, LTV:CAC oranı kaç olmalı ve reklama ne kadar harcanır?",
    category: "saas-buyume",
    tldr: [
      "LTV (müşteri yaşam boyu değeri), bir müşterinin sizinle kaldığı süre boyunca bıraktığı toplam kârdır. Ciroyla değil marjla hesaplanır: ortalama sepeti 600 TL, katkı marjı %35 olan ve 24 ayda ortalama 2,3 sipariş veren müşterinin LTV'si 483 TL'dir (ciro LTV'si 1.380 TL).",
      "En güvenilir yöntem kohort LTV'sidir: aynı ay kazanılan müşterilerin birikimli siparişlerini izleyip katkı marjıyla çarparsınız; formüldeki 'müşteri ömrü' varsayımına gerek kalmaz.",
      "LTV:CAC oranı için yaygın başparmak kuralı en az 3'tür; ama oranı mutlaka CAC geri ödeme süresiyle birlikte okuyun. Aynı 483 TL LTV, 160 TL CAC ile ilk siparişte, 300 TL CAC ile yaklaşık 7. ayda geri döner.",
      "LTV'yi reklam hedefine çevirin: Maks. CAC = LTV / Hedef oran. Örnekte 3:1 hedefi 161 TL CAC ve ilk siparişte yaklaşık 3,73 ROAS demektir; tekrar satın alma düşükse 3:1 kuralı ilk siparişte kâr etmeyi gerektirir.",
    ],
    publishedAt: "2026-10-26",
    updatedAt: "2026-11-02",
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
        question: "LTV ne demek? Kredideki LTV ile aynı şey mi?",
        answer:
          "Pazarlama ve e-ticarette LTV, Lifetime Value yani müşteri yaşam boyu değeri demektir: bir müşterinin ilişki boyunca bıraktığı toplam kâr. Bankacılık ve kripto kredilerinde geçen LTV ise Loan-to-Value'dur, yani kredi tutarının teminat değerine oranıdır. İkisinin kısaltması aynı, anlamı tamamen farklıdır; bu yazı müşteri yaşam boyu değerini anlatır.",
      },
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
      { label: "Churn Nedir? Churn Rate Nasıl Hesaplanır?", href: "/blog/churn-nedir-churn-rate-nasil-hesaplanir/" },
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
    seoTitle: "UTM Nedir? UTM Kodu Nasıl Oluşturulur? GA4 Rehberi",
    title: "UTM Nedir? UTM Parametreleri Nasıl Kullanılır? (GA4, Google Ads ve Meta Örnekleriyle)",
    description:
      "UTM nedir, UTM kodu nasıl oluşturulur? 4 adımda link oluşturma, 9 parametre, örnek linkler, GA4'te nerede görülür, Google Ads ve Meta'da doğru kullanım.",
    category: "performans-pazarlama",
    tldr: [
      "UTM, bir linkin sonuna eklenen ve ziyaretçinin hangi kaynaktan, hangi kanaldan ve hangi kampanyadan geldiğini Google Analytics'e söyleyen etiketlerdir: ?utm_source=instagram&utm_medium=social&utm_campaign=kasim-indirimi gibi.",
      "Her linkte üç parametre olmalı: utm_source (platform), utm_medium (kanal türü), utm_campaign (kampanya). utm_content, utm_term ve utm_id isteğe bağlıdır; GA4'ün desteklediği 9 parametreden ikisi (utm_creative_format, utm_marketing_tactic) şu an raporlanmıyor.",
      "Değerler büyük/küçük harfe duyarlıdır: Instagram ile instagram GA4'te iki ayrı kaynaktır. Küçük harf, Türkçe karaktersiz ve GA4'ün tanıdığı medium değerleri (cpc, paid_social, social, email, referral, affiliate) kullanın; yoksa trafik Unassigned olur.",
      "Google Ads'te manuel UTM yerine otomatik etiketlemeyi açık tutun; Meta'da dinamik parametrelerle ({{campaign.name}}, {{ad.name}}) tek şablon kullanın. Sitenizin kendi iç linklerine asla UTM eklemeyin.",
    ],
    publishedAt: "2026-10-27",
    updatedAt: "2026-11-02",
    readingMinutes: 10,
    tags: ["UTM", "UTM Kodu", "UTM Parametreleri", "GA4", "Kampanya Takibi", "Google Analytics", "Ölçümleme"],
    sections: [
      {
        heading: "UTM nedir? (Kısa cevap)",
        paragraphs: [
          "UTM (Urchin Tracking Module), bir web adresinin sonuna eklenen ve o linke tıklayan ziyaretçinin nereden geldiğini analiz aracınıza bildiren etiketlerdir; UTM kodu, UTM etiketi ya da UTM linki olarak da geçer. Adını, Google'ın 2005'te satın alıp Google Analytics'e dönüştürdüğü Urchin yazılımından alır.",
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
        heading: "UTM kodu nasıl oluşturulur? 4 adımda",
        paragraphs: [
          "UTM kodu oluşturmak için bir program kurmanız ya da kod yazmanız gerekmez; yapmanız gereken, sayfa adresinin sonuna üç zorunlu parametreyi eklemektir. Aşağıda Instagram hikâyesinde paylaşılacak bir Kasım indirimi linki adım adım oluşturuluyor.",
        ],
        bullets: [
          "1. Hedef adresi alın: https://site.com/kasim-indirimi/",
          "2. Kaynağı ve kanal türünü yazın: utm_source=instagram (platform), utm_medium=social (kanal türü). Ücretli reklamda medium olarak paid_social ya da cpc kullanın",
          "3. Kampanyayı ve gerekiyorsa kreatifi ekleyin: utm_campaign=kasim-indirimi-2026, utm_content=hikaye-1. Küçük harf kullanın, Türkçe karakter ve boşluk kullanmayın",
          "4. Parçaları birleştirin ve test edin: adresin sonuna ? koyup parametreleri & ile bağlayın: https://site.com/kasim-indirimi/?utm_source=instagram&utm_medium=social&utm_campaign=kasim-indirimi-2026&utm_content=hikaye-1. Linki açıp GA4 Gerçek zamanlı raporunda kaynağı kontrol edin",
        ],
      },
      {
        heading: "UTM oluşturucu mu, elle yazmak mı, Excel mi?",
        paragraphs: [
          "Tek seferlik bir link için elle yazmak yeterlidir; ama en sık hata da burada çıkar: büyük harf, Türkçe karakter, boşluk ya da GA4'ün tanımadığı bir medium değeri trafiği Unassigned'a düşürebilir. UTM oluşturucu araçlar birleştirmeyi yapar, ancak çoğu değerlerin doğruluğunu denetlemez. UTM Link Oluşturucu aracımız değerleri küçük harfe ve ASCII'ye çevirir, linkin GA4'te hangi kanala düşeceğini tahmin eder ve Unassigned riskinde uyarır.",
          "Ayda onlarca link üreten ekipler için en sağlam yöntem, ortak bir tablo tutmaktır: her satırda hedef adres, kaynak, medium, kampanya ve içerik sütunları ve bunları birleştiren bir formül. Excel ya da Google E-Tablolar'da =A2&\"?utm_source=\"&B2&\"&utm_medium=\"&C2&\"&utm_campaign=\"&D2 formülü yeterlidir; böylece kampanya adları tek listeden seçilir ve aynı kanal iki farklı adla yazılmaz.",
          "Hazır bir tablo isterseniz ücretsiz UTM Takip Şablonu'nu (Excel) kaynaklar bölümünden indirebilirsiniz: son linki kendisi birleştirir, GA4 kanalını tahmin eder ve büyük harf, Türkçe karakter, boşluk ya da eksik alan olduğunda satırı uyarır.",
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
        question: "UTM kodu (UTM linki) nasıl oluşturulur?",
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
      { label: "UTM Takip Şablonu (ücretsiz Excel indir)", href: "https://yusufbayrak.net/sablonlar/utm-takip-sablonu.xlsx", external: true },
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
    seoTitle: "CAC Nedir, Ne Demek? Müşteri Edinme Maliyeti Hesaplama",
    title: "CAC Nedir? Müşteri Edinme Maliyeti Nasıl Hesaplanır? (Blended, Paid ve Kanal Bazında Örnekler)",
    description:
      "CAC ne demek? Müşteri edinme maliyeti, bir yeni müşteri için harcanan ortalama tutardır. Formül, örnek hesap, paid/blended CAC, CAC ile ROAS ve CPA farkı.",
    category: "saas-buyume",
    tldr: [
      "CAC (Customer Acquisition Cost, müşteri edinme maliyeti), bir dönemde yeni müşteri kazanmak için harcanan toplam pazarlama ve satış maliyetinin o dönemde kazanılan yeni müşteri sayısına bölünmesidir: 310.000 TL ÷ 1.000 yeni müşteri = 310 TL.",
      "Aynı veriden üç farklı CAC çıkar: tam yüklü blended CAC 310 TL, yalnızca reklam harcamasıyla 'medya CAC' 230 TL, reklamdan gelen müşterilere göre paid CAC ≈ 329 TL. Bütçe kararını paid ve kanal bazlı CAC ile verin; blended CAC organik müşterilerle ücretli kanalları olduğundan ucuz gösterir.",
      "Reklam panelindeki CPA, CAC değildir: panel mevcut müşterilerin tekrar siparişlerini de dönüşüm sayar. Örnekte Meta paneli 240 TL CPA gösterirken yeni müşteri başına maliyet 300 TL'dir.",
      "CAC tek başına iyi ya da kötü değildir; ilk sipariş katkısı, LTV ve geri ödeme süresiyle okunur. 900 TL sepet ve %30 katkı marjıyla ilk sipariş 270 TL bırakır; 329 TL'lik paid CAC her yeni müşteride ilk siparişte 59 TL açık demektir.",
    ],
    publishedAt: "2026-10-28",
    updatedAt: "2026-11-02",
    readingMinutes: 10,
    tags: ["CAC", "Müşteri Edinme Maliyeti", "Paid CAC", "Blended CAC", "Birim Ekonomisi", "LTV:CAC"],
    sections: [
      {
        heading: "CAC nedir, ne demek? (Kısa cevap)",
        paragraphs: [
          "CAC ne demek? CAC (Customer Acquisition Cost), Türkçesiyle müşteri edinme maliyeti, bir yeni müşteriyi kazanmak için ortalama ne kadar harcadığınızı gösterir. Formülü: CAC = (Pazarlama giderleri + Satış giderleri) / Aynı dönemde kazanılan yeni müşteri sayısı.",
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
        heading: "CAC ile ROAS arasındaki fark nedir?",
        paragraphs: [
          "ROAS, reklamın getirdiği ciroyu reklam harcamasına böler ve kime satıldığına bakmaz; CAC ise harcamayı yalnızca yeni müşterilere böler. İkisi aynı kampanyada farklı sonuç verebilir, çünkü panel ROAS'ı mevcut müşterilerin tekrar siparişlerini de sayar.",
          "Yukarıdaki Meta örneğinde sepetin her siparişte 900 TL olduğunu varsayalım. Panel ROAS'ı (500 × 900) / 120.000 = 3,75 görünür. Yalnızca 400 yeni müşteriye bakarsanız yeni müşteri ROAS'ı 900 / 300 = 3,0'dır; bu da 300 TL'lik CAC'ın karşılığıdır (ROAS = İlk sipariş tutarı / Medya CAC'ı).",
          "%30 katkı marjında başabaş ROAS 1 / 0,30 ≈ 3,33'tür. Panel 3,75 ile kârlı görünürken yeni müşteri ROAS'ı 3,0 ile başabaşın altındadır: her yeni müşteri ilk siparişte 270 TL bırakıp 300 TL'ye gelir, yani 30 TL açık verir. Kampanya bu nedenle ancak tekrar siparişlerle kâra geçer. Bu kararı vermek için iki rakamı birlikte izleyin; marjınıza göre başabaş noktasını ROAS aracıyla, CAC'ı CAC Hesaplayıcı ile bulabilirsiniz.",
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
        question: "CAC ne demek, açılımı nedir?",
        answer:
          "CAC, Customer Acquisition Cost'un kısaltmasıdır; Türkçede müşteri edinme maliyeti ya da müşteri kazanım maliyeti denir. Bir yeni müşteri kazanmak için harcanan ortalama pazarlama ve satış maliyetini gösterir.",
      },
      {
        question: "CAC nasıl hesaplanır?",
        answer:
          "CAC = (Pazarlama giderleri + Satış giderleri) / Aynı dönemde kazanılan yeni müşteri sayısı. 310.000 TL toplam edinme maliyeti ve 1.000 yeni müşteri için CAC 310 TL'dir. Yalnızca reklam harcamasını reklamdan gelen müşterilere bölerseniz paid CAC'ı bulursunuz.",
      },
      {
        question: "CAC ile ROAS arasındaki fark nedir?",
        answer:
          "ROAS tüm reklam cirosunu harcamaya böler, CAC harcamayı yalnızca yeni müşterilere böler. 120.000 TL reklamla 500 sipariş (100'ü tekrar) ve 900 TL sepette panel ROAS'ı 3,75 görünür; 400 yeni müşteri için CAC 300 TL, yeni müşteri ROAS'ı 3,0'dır.",
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
      { label: "CPL Nedir? Lead Başı Maliyet Nasıl Hesaplanır?", href: "/blog/cpl-nedir-lead-basi-maliyet/" },
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
      { label: "Dropshipping Nedir? İade Dahil Kâr Hesabı", href: "/blog/dropshipping-nedir-nasil-yapilir/" },
      { label: "İndirim Hesaplama: İndirimli Fiyat ve Kâr Etkisi", href: "/ucretsiz-araclar/indirim-hesaplama/" },
      { label: "Trendyol Komisyon Oranları 2026 ve Komisyon Hesaplama", href: "/blog/trendyol-komisyon-oranlari-hesaplama/" },
      { label: "Kar Marjı Hesaplama: Brüt Kar Marjı Hesaplayıcı", href: "/ucretsiz-araclar/brut-kar-marji-hesaplayici/" },
      { label: "Net Kar Marjı Hesaplayıcı", href: "/ucretsiz-araclar/net-kar-marji-hesaplayici/" },
      { label: "ROAS Hesaplama: ROAS ve Başabaş ROAS Hesaplayıcı", href: "/ucretsiz-araclar/roas-hesaplayici/" },
      { label: "Trendyol Komisyon ve Kâr Hesaplama (+ Hepsiburada)", href: "/ucretsiz-araclar/trendyol-hepsiburada-kar-hesaplama/" },
      { label: "Kargo Ücreti Hesaplama: Tarifeyle Koli Başı Fiyat", href: "/ucretsiz-araclar/kargo-ucreti-hesaplama/" },
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
      { label: "ARR Nedir? Yıllık Yinelenen Gelir ve ARR Köprüsü", href: "/blog/arr-nedir-yillik-yinelenen-gelir/" },
      { label: "ARPA Hesaplayıcı", href: "/ucretsiz-araclar/arpa-hesaplayici/" },
      { label: "NRR Hesaplayıcı", href: "/ucretsiz-araclar/nrr-hesaplayici/" },
      { label: "Churn Rate Hesaplayıcı", href: "/ucretsiz-araclar/churn-rate-hesaplayici/" },
      { label: "Churn Nedir? Churn Rate Nasıl Hesaplanır?", href: "/blog/churn-nedir-churn-rate-nasil-hesaplanir/" },
      { label: "NRR Nedir? SaaS'ta Neden ARR'dan Daha Önemli?", href: "/blog/nrr-nedir-saas-buyume-metrigi/" },
      { label: "SaaS Metrikleri: ARR, CAC ve LTV", href: "/blog/saas-metrikleri-arr-cac-ltv/" },
      { label: "CAC Nedir? Müşteri Edinme Maliyeti Nasıl Hesaplanır?", href: "/blog/cac-nedir-musteri-edinme-maliyeti/" },
      { label: "LTV Nedir? LTV:CAC Oranı Kaç Olmalı?", href: "/blog/ltv-nedir-ltv-cac-orani/" },
      { label: "Kar Marjı Hesaplama", href: "/ucretsiz-araclar/brut-kar-marji-hesaplayici/" },
      { label: "ChartMogul: SaaS Quick Ratio (İngilizce)", href: "https://chartmogul.com/blog/saas-quick-ratio/", external: true },
      { label: "Tomasz Tunguz: Quick Ratio ne gizliyor? (İngilizce)", href: "https://tomtunguz.com/what-is-quick-ratio-hiding/", external: true },
    ],
  },
  {
    slug: "llms-txt-nedir-ise-yariyor-mu",
    seoTitle: "llms.txt Nedir, İşe Yarıyor mu? 2026 Verileriyle",
    title: "llms.txt Nedir, İşe Yarıyor mu? Kim Okuyor, Nasıl Ölçülür ve AI Botları robots.txt ile Nasıl Yönetilir?",
    description:
      "llms.txt nedir, işe yarıyor mu? Ahrefs ve SE Ranking verileri, Google'ın 2026 açıklamaları, sunucu logunda ölçüm ve AI botlarını robots.txt ile yönetme.",
    category: "yapay-zeka-otomasyon",
    tldr: [
      "llms.txt, sitenin kök dizinine konan ve yapay zekâ araçlarına sitenin en önemli sayfalarını Markdown biçiminde listeleyen bir dosyadır. Jeremy Howard (Answer.AI) Eylül 2024'te önerdi; onaylanmış bir standart değil, bir öneridir.",
      "Bugünkü veriler net: Ahrefs'in Mayıs 2026'da 137 bin alan adını incelediği çalışmada llms.txt dosyalarının %97'si ay boyunca tek bir istek almadı; SE Ranking'in yaklaşık 300 bin alan adlık analizinde dosya ile AI alıntısı arasında ilişki çıkmadı.",
      "Google, AI Overviews ve AI Mode'da görünmek için llms.txt gerekmediğini söylüyor; John Mueller Haziran 2026'da 'şimdilik tamamen spekülatif' dedi. Dosyayı en çok kodlama ajanları (Claude Code gibi) ve SEO araçları istiyor.",
      "Karar: geliştirici dokümanı, API ya da SaaS ürününüz varsa 30 dakikalık iş olarak ekleyin; e-ticaret ve yerel işletmede öncelik değil. Asıl iş, AI arama botlarını robots.txt'de engellememek, sayfaların dizinde olması ve sunucu logundan gerçekten kimin geldiğini ölçmektir.",
    ],
    publishedAt: "2026-10-29",
    readingMinutes: 9,
    tags: ["llms.txt", "GEO", "AI Arama", "robots.txt", "AI Botları", "Teknik SEO"],
    sections: [
      {
        heading: "llms.txt nedir? (Kısa cevap)",
        paragraphs: [
          "llms.txt, sitenizin kök dizininde (örneğin siteadi.com/llms.txt) duran, büyük dil modellerine (LLM) ve yapay zekâ araçlarına 'bu sitede en önemli içerikler bunlar' diyen düz metin bir dosyadır. Markdown ile yazılır: bir H1 başlık (site ya da proje adı), bir cümlelik özet ve H2 bölümler altında açıklamalı bağlantı listeleri.",
          "Fikri Answer.AI'dan Jeremy Howard Eylül 2024'te llmstxt.org'da önerdi. Amaç, reklam, menü ve JavaScript'le dolu HTML sayfaları yerine yapay zekâya temiz ve kısa bir içerik haritası sunmaktı. Önemli ayrıntı: llms.txt bir W3C ya da IETF standardı değildir; hiçbir AI şirketi dosyayı okumayı resmî olarak taahhüt etmemiştir.",
          "Dosyanın formatı, örnek bir llms.txt ve hangi sayfaların girmesi gerektiği llms.txt Oluşturucu sayfasında ayrıntılı anlatılıyor; bu yazı 'işe yarıyor mu, kim okuyor, nasıl ölçülür' sorularına odaklanıyor.",
        ],
      },
      {
        heading: "llms.txt işe yarıyor mu? 2026 verileri ne diyor?",
        paragraphs: [
          "Bugüne kadarki en büyük iki çalışma aynı sonuca varıyor: llms.txt, AI aramalarında görünürlüğü ölçülebilir biçimde artırmıyor ve dosyayı AI arama botlarının çok küçük bir kısmı istiyor.",
          "Ahrefs (Haziran 2026), Mayıs 2026'da trafik alan 137.210 alan adının sunucu loglarını inceledi. Alan adlarının yaklaşık %28'i llms.txt yayınlıyordu (Ahrefs kullanıcıları teknik bir kitle olduğu için bunu üst sınır olarak niteliyor). Bu dosyaların %97'si ay boyunca hiç istek almadı; tüm dosyalara gelen yaklaşık 22 bin isteğin %96'sı botlardan geliyordu ve bu botların %77'si yapay zekâ aracı değil, SEO denetim araçları, genel tarayıcılar ve teknoloji profilleme botlarıydı.",
          "SE Ranking (Kasım 2025) yaklaşık 300 bin alan adında llms.txt varlığı ile büyük dil modellerinin yanıtlarında alıntılanma sıklığını karşılaştırdı. Alan adlarının %10,13'ünde dosya vardı ve iki değişken arasında ilişki bulunmadı; llms.txt değişkenini modelden çıkarmak tahmin doğruluğunu artırdı.",
        ],
        bullets: [
          "Ahrefs'te AI ile ilgili tüm kategoriler (ajanlar, eğitim botları, asistanlar, arama botları) toplam isteklerin %19,5'i; yazarlar bunu 'en cömert okuma' olarak tanımlıyor, çünkü dosyanın istenmesi okunduğu anlamına gelmiyor",
          "AI botları içinde en çok isteyen GPTBot (%4,51); ClaudeBot %0,8, ChatGPT aramasının botu OAI-SearchBot %0,74; PerplexityBot llms.txt'yi Slack'in bağlantı önizleme botundan daha az istedi",
          "Dikkat çeken istisna: Claude Code adlı kodlama ajanı, GPTBot dışındaki tüm AI arama, asistan ve eğitim botlarından daha fazla istek yaptı — llms.txt'nin bugünkü gerçek okuru geliştirici araçları",
          "Var olmayan llms.txt dosyalarına (404) gelen isteklerin %98'i insanlardan, sıfırı AI botlarından geliyordu: dosya yoksa AI botları onu aramıyor bile",
        ],
      },
      {
        heading: "Google llms.txt hakkında ne diyor?",
        paragraphs: [
          "Google Arama tarafının tutumu açık: Mayıs 2026'da yayımlanan AI arama optimizasyon rehberi, AI Overviews ve AI Mode'da görünmek için llms.txt, yapay zekâya özel metin dosyaları, özel şema ya da içeriği küçük parçalara bölmek gibi işlemlerin gerekmediğini söylüyor. John Mueller, Haziran 2026'da Reddit'te llms.txt için 'şimdilik tamamen spekülatif' dedi ve çoğu site için asıl sorunun ajanları engellemek olacağını ekledi. Daha önce de dosyayı anahtar kelime meta etiketine benzetmişti.",
          "Kafa karıştıran nokta Chrome tarafı: Lighthouse 13.3 (Mayıs 2026) deneysel 'Agentic Browsing' kategorisine bir llms.txt denetimi ekledi ve dosyayı 'gelişmekte olan bir gelenek' olarak tanımlıyor. Bu, tarayıcı ajanlarının geleceğine yönelik deneysel bir kontroldür; Google Arama'da sıralama ya da AI Overviews sinyali değildir. Lighthouse'ta bu uyarıyı görmeniz, sitenizin aramada geri kaldığı anlamına gelmez.",
        ],
      },
      {
        heading: "llms.txt eklemeli miyim? Karar listesi",
        paragraphs: [
          "llms.txt'nin maliyeti düşük, getirisi bugün belirsiz. Bu yüzden karar 'herkes eklesin' ya da 'tamamen gereksiz' değil, sitenin kimin için olduğuna göre verilmelidir.",
          "Riskleri de unutmayın: dosya güncellenmezse kaldırılmış sayfalara yönlendirir; Ahrefs, dosyanın yapay zekâ araçlarına talimat gibi okunabilecek metin içerebileceği için (prompt injection) kod gibi yönetilmesini, yani değişikliklerin gözden geçirilmesini öneriyor.",
        ],
        bullets: [
          "Ekleyin (öncelikli): API ya da geliştirici dokümanı, SaaS ürün dokümanı, açık kaynak proje — Claude Code ve benzeri ajanlar bu sitelerin gerçek ziyaretçisi",
          "Ekleyebilirsiniz (30 dakikalık iş, beklenti düşük): içerik ağırlıklı B2B siteleri, danışmanlık ve hizmet siteleri; araçlar ve rehberler gibi derli toplu bir sayfa listeniz varsa",
          "Öncelik değil: e-ticaret ve yerel işletme siteleri — burada ürün verisi (Merchant Center), Google İşletme Profili, dizine eklenme ve sayfa hızı çok daha etkili",
          "Yapmayın: llms.txt'yi robots.txt'nin yerine erişim kontrolü sanmak, botlar için ayrı Markdown sayfalar üretip asıl sayfaları ihmal etmek, dosyaya her URL'yi doldurmak",
        ],
      },
      {
        heading: "llms.txt, robots.txt ve sitemap.xml arasındaki fark nedir?",
        paragraphs: [
          "Üç dosya da kök dizinde durur ama farklı işler yapar ve birbirinin yerini tutmaz. AI botlarına erişim izni vermek ya da kısıtlamak llms.txt ile değil, robots.txt ile yapılır.",
        ],
        bullets: [
          "robots.txt: hangi botun hangi yolları tarayabileceğini söyler (erişim kuralı). Arama ve AI botlarının büyük çoğunluğu uyar",
          "sitemap.xml: arama motorlarına dizine eklenecek URL'lerin tam listesini ve güncelleme tarihlerini verir (keşif)",
          "llms.txt: insanların ve yapay zekânın okuyabileceği kısa, açıklamalı bir 'en önemli sayfalar' özeti sunar (bağlam). Hiçbir bot buna uymak zorunda değildir",
        ],
      },
      {
        heading: "AI botları robots.txt ile nasıl yönetilir?",
        paragraphs: [
          "AI şirketleri farklı işler için farklı botlar kullanır ve her biri robots.txt'de ayrı ayrı yönetilir. En önemli ayrım: model eğitimi için tarayan botlar, AI arama sonuçları için tarayan botlar ve bir kullanıcının sorusu üzerine o an sayfayı açan botlar. OpenAI belgelerine göre bu ayarlar birbirinden bağımsızdır; eğitimi kapatıp aramada görünmeye devam edebilirsiniz.",
          "Önce politikanızı seçin, sonra robots.txt'ye uygun blokları ekleyin. Değişikliklerin etkisi zaman alır (OpenAI arama için yaklaşık 24 saat diyor). Kullanıcı isteğiyle çalışan botlar (ChatGPT-User, Perplexity-User) robots.txt'ye uymayabilir; içeriği gerçekten kapatmak gerekiyorsa tek çözüm sayfayı herkese açık olmaktan çıkarmaktır.",
        ],
        bullets: [
          "Eğitim botları: GPTBot (OpenAI), ClaudeBot (Anthropic), Google-Extended (Gemini uygulamaları ve Vertex AI; Google, bu tokenin Google Arama'da dahil edilmeyi ve sıralamayı etkilemediğini belirtiyor)",
          "AI arama botları: OAI-SearchBot (ChatGPT arama), Claude-SearchBot (Claude arama), PerplexityBot (Perplexity arama). Bunları engellemek ilgili AI aramada görünürlüğünüzü azaltır",
          "Kullanıcı isteği botları: ChatGPT-User, Claude-User, Perplexity-User — bir kullanıcı sorduğunda sayfayı o an açar; Anthropic, Claude-User'ı engellemenin kullanıcı yönlendirmeli aramada görünürlüğü azaltabileceğini söylüyor",
          "Politika 1 — Hepsine açık (çoğu işletme sitesi için önerilen): ek kural gerekmez; 'User-agent: *' ve 'Allow: /' yeterlidir",
          "Politika 2 — AI aramada görün, eğitime kapat: 'User-agent: GPTBot', 'User-agent: ClaudeBot' ve 'User-agent: Google-Extended' satırlarının her birinin altına 'Disallow: /' yazın; OAI-SearchBot, Claude-SearchBot ve PerplexityBot'a dokunmayın",
          "Politika 3 — Tüm AI botlarına kapat: yukarıdaki eğitim ve arama botlarının hepsine 'Disallow: /' verin; AI aramalarında kaynak olarak görünme şansınızdan da vazgeçtiğinizi bilerek",
        ],
      },
      {
        heading: "llms.txt okunuyor mu? Sunucu logunda nasıl ölçülür?",
        paragraphs: [
          "Ahrefs'in tavsiyesi de bu: karar vermeden önce kendi loglarınıza bakın. Aşağıdaki adımlar bir ay içinde dosyanızı kimin istediğini gösterir. Not: GitHub Pages gibi statik barındırma hizmetleri erişim logu vermez; bu durumda sitenizin önündeki CDN'in bot raporlarını ya da logu tutulan bir barındırmayı kullanmanız gerekir.",
          "Sonucu doğru okuyun: bir botun llms.txt'yi istemesi, içeriği kullandığı ya da sizi alıntılayacağı anlamına gelmez. Anlamlı soru şudur: llms.txt'yi isteyen AI botları, ardından dosyadaki sayfaları da ziyaret ediyor mu? Aynı log üzerinde bu sayfalara gelen OAI-SearchBot, Claude-SearchBot ve PerplexityBot isteklerini dosya eklenmeden önceki ayla karşılaştırın.",
        ],
        bullets: [
          "1. Son 30 günün erişim logunu indirin (Nginx/Apache 'access.log' ya da barındırma panelindeki ham loglar)",
          "2. llms.txt isteklerini kullanıcı ajanına göre sayın: grep \"llms.txt\" access.log | awk -F'\"' '{print $6}' | sort | uniq -c | sort -rn",
          "3. Sahte botları ayıklayın: kullanıcı ajanı kolayca taklit edilir. OpenAI ve Google botlarının IP aralıklarını yayımlar; IP'leri bu listelerle ya da ters DNS sorgusuyla doğrulayın",
          "4. Durum kodlarına bakın: 200 dönen istekler dosyanın sunulduğunu, 404'ler dosyanın olmadığını gösterir; sunucu hataları (5xx) Lighthouse denetiminde de uyarı üretir",
          "5. Karşılaştırın: aynı dönemde robots.txt'yi ve asıl sayfalarınızı isteyen AI botlarını sayın; llms.txt'yi isteyen bot sayısı bunun küçük bir kesriyse dosya şu an sizin için bir 'okuma kanalı' değildir",
        ],
      },
      {
        heading: "AI aramalarında görünmek için asıl ne işe yarar?",
        paragraphs: [
          "Google'ın AI arama rehberi, üretken AI özellikleri için yapılacak işin ayrı bir disiplin değil SEO'nun parçası olduğunu söylüyor. AI Overviews ve AI Mode'da kaynak gösterilmenin ön koşulu, sayfanın dizinde ve snippet'e uygun olmasıdır. Diğer AI aramalarında da ortak payda aynıdır: botun sayfaya erişebilmesi ve sayfada alıntılanmaya değer, özgün bir bilgi bulunması.",
          "Bu sitede uyguladığımız sıra şöyle: önce sayfaların derleme sırasında üretilmiş tam HTML olarak yayınlanması ve dizine girmesi, sonra her yazının ilk bölümünde sorunun doğrudan cevabı ve kendi hesap örnekleri, en son llms.txt gibi düşük maliyetli ekler.",
        ],
        bullets: [
          "Erişim: robots.txt'de AI arama botlarını (OAI-SearchBot, Claude-SearchBot, PerplexityBot) ve Googlebot'u engellemeyin; güvenlik duvarı ya da bot koruması ayarlarının bu botları kesmediğini kontrol edin",
          "Dizin: önemli sayfalar Google'da dizinde olmalı; Search Console'da 'Keşfedildi – dizine eklenmedi' listesini düzenli temizleyin",
          "Okunabilir HTML: içeriğin JavaScript çalışmadan da HTML'de bulunması (sunucu tarafı ya da statik üretim) birçok AI botu için önemlidir",
          "Özgün içerik: Google'ın ifadesiyle 'sıradan olmayan' içerik — kendi verileriniz, hesap örnekleriniz, deneyiminiz. Herkesin yazdığı tanımı tekrarlamak alıntı getirmez",
          "Cevap önce yapı: soru biçimli başlıklar ve her bölümün ilk cümlesinde net cevap, hem okur hem de AI özetleri için en kolay alıntılanan biçimdir",
        ],
      },
      {
        heading: "llms.txt nasıl oluşturulur? (Kısa yol)",
        paragraphs: [
          "Eklemeye karar verdiyseniz iş yarım saati geçmez: H1'e site adını, altına tek cümlelik özeti yazın, en önemli 20–50 sayfanızı 'Araçlar', 'Rehberler', 'Hizmetler' gibi H2 bölümler altında açıklamalı bağlantılar olarak listeleyin ve dosyayı kök dizine yükleyin. Ardından tarayıcıda siteadi.com/llms.txt adresini açarak düz metin olarak göründüğünü kontrol edin.",
          "llms.txt Oluşturucu bu adımları formla yapar, örnek dosyayla başlamanızı sağlar ve H1, özet, bağlantı biçimi, göreli ya da http bağlantı ve tekrar eden URL hatalarını kontrol eder. Statik site üreticisi kullanıyorsanız dosyayı derleme sırasında sayfa envanterinden otomatik üretmek, eski bağlantı riskini ortadan kaldırır; bu sitede de llms.txt her derlemede yeniden üretiliyor.",
        ],
      },
    ],
    faq: [
      {
        question: "llms.txt ne işe yarar?",
        answer:
          "Yapay zekâ araçlarına sitenin en önemli sayfalarını kısa, açıklamalı bir Markdown listesi olarak sunar. Bugün en çok kodlama ajanları ve SEO araçları tarafından isteniyor; AI arama botlarının çok küçük bir kısmı dosyayı istiyor ve AI alıntılarına etkisi ölçülemedi.",
      },
      {
        question: "llms.txt SEO'ya etki eder mi?",
        answer:
          "Google Arama'da hayır: Google, AI Overviews ve AI Mode dahil arama sonuçları için llms.txt'yi kullanmadığını ve gerekmediğini söylüyor. SE Ranking'in yaklaşık 300 bin alan adlık analizinde de dosya ile AI alıntısı arasında ilişki bulunmadı.",
      },
      {
        question: "ChatGPT ve Claude llms.txt okuyor mu?",
        answer:
          "Ahrefs'in Mayıs 2026 verisinde OpenAI'ın GPTBot'u ve Anthropic'in ClaudeBot'u llms.txt'yi az sayıda istedi; ChatGPT aramasının botu OAI-SearchBot'un payı %1'in altındaydı. En dikkat çekici okur Anthropic'in kodlama ajanı Claude Code'du. Dosyanın istenmesi, içeriğin yanıtlarda kullanıldığı anlamına gelmez.",
      },
      {
        question: "llms.txt ile robots.txt aynı şey mi?",
        answer:
          "Hayır. robots.txt botların hangi sayfaları tarayabileceğini belirleyen erişim kuralıdır ve botların çoğu ona uyar. llms.txt yalnızca önemli sayfaların bir özetidir; erişimi kısıtlamaz ve hiçbir bot ona uymak zorunda değildir.",
      },
      {
        question: "AI botlarını engellemeli miyim?",
        answer:
          "AI aramalarında kaynak olarak görünmek istiyorsanız arama botlarını (OAI-SearchBot, Claude-SearchBot, PerplexityBot) engellemeyin. İçeriğinizin model eğitiminde kullanılmasını istemiyorsanız yalnızca eğitim botlarını (GPTBot, ClaudeBot, Google-Extended) robots.txt'de kapatabilirsiniz; bu ayarlar birbirinden bağımsızdır.",
      },
    ],
    howTo: {
      name: "llms.txt'nin okunup okunmadığı sunucu logunda nasıl ölçülür?",
      description: "Erişim loglarıyla llms.txt'yi hangi botların istediğini bulun, sahte botları ayıklayın ve sonucu asıl sayfalara gelen AI bot trafiğiyle karşılaştırın.",
      steps: [
        { name: "Erişim logunu indirin", text: "Son 30 günün sunucu ya da CDN erişim logunu alın; statik barındırmada CDN bot raporlarını kullanın." },
        { name: "llms.txt isteklerini sayın", text: "Logda llms.txt geçen satırları kullanıcı ajanına göre gruplayıp sayın." },
        { name: "Botları doğrulayın", text: "Kullanıcı ajanı taklit edilebildiği için IP adreslerini şirketlerin yayımladığı aralıklarla ya da ters DNS ile doğrulayın." },
        { name: "Durum kodlarını kontrol edin", text: "200, 404 ve 5xx yanıtlarını ayırın; dosyanın düzgün sunulduğundan emin olun." },
        { name: "Asıl sayfalarla karşılaştırın", text: "Aynı dönemde robots.txt'yi ve içerik sayfalarınızı isteyen AI botlarını sayın; llms.txt'nin payına göre karar verin." },
      ],
    },
    relatedToolKey: "llms-txt",
    resources: [
      { label: "SEO Nedir, Nasıl Yapılır? 2026 Rehberi", href: "/blog/seo-nedir-nasil-yapilir/" },
      { label: "llms.txt Oluşturucu: Örnek Dosya ve Format Kontrolü", href: "/ucretsiz-araclar/llms-txt-olusturucu/" },
      { label: "GEO Nedir? Yapay Zekâ Aramalarında Görünürlük Rehberi", href: "/blog/geo-nedir-yapay-zeka-arama-optimizasyonu/" },
      { label: "UTM Nedir? UTM Parametreleri Nasıl Kullanılır?", href: "/blog/utm-nedir-utm-parametreleri/" },
      { label: "GA4 Unassigned Trafik Nedir, Nasıl Düzeltilir?", href: "/blog/ga4-unassigned-trafik-nedir-nasil-duzeltilir/" },
      { label: "n8n ile Lead Enrichment Otomasyonu", href: "/blog/n8n-ile-lead-enrichment-otomasyonu/" },
      { label: "Ahrefs: 137 bin site analizi, llms.txt dosyalarının %97'si okunmuyor (İngilizce)", href: "https://ahrefs.com/blog/llmstxt-study/", external: true },
      { label: "Search Engine Journal: SE Ranking, llms.txt'nin AI alıntılarına etkisi (İngilizce)", href: "https://www.searchenginejournal.com/llms-txt-shows-no-clear-effect-on-ai-citations-based-on-300k-domains/561542/", external: true },
      { label: "Search Engine Journal: Google'ın AI arama rehberi (İngilizce)", href: "https://www.searchenginejournal.com/googles-new-ai-search-guide-calls-aeo-and-geo-still-seo/575026/", external: true },
      { label: "OpenAI: Tarayıcılara genel bakış (İngilizce)", href: "https://developers.openai.com/api/docs/bots", external: true },
      { label: "Anthropic: Claude tarayıcıları (İngilizce)", href: "https://support.claude.com/en/articles/8896518", external: true },
      { label: "Perplexity: Tarayıcılar (İngilizce)", href: "https://docs.perplexity.ai/guides/bots", external: true },
    ],
  },
  {
    slug: "churn-nedir-churn-rate-nasil-hesaplanir",
    seoTitle: "Churn Nedir? Churn Rate Nasıl Hesaplanır ve Düşürülür?",
    title: "Churn Nedir? Churn Rate Nasıl Hesaplanır, İyi Churn Oranı Kaç ve Nasıl Düşürülür?",
    description:
      "Churn nedir, churn rate nasıl hesaplanır? Doğru formül, sık yapılan payda hatası, gönüllü ve gönülsüz churn, gelir churn'ü, kohort analizi ve düşürme planı.",
    category: "saas-buyume",
    tldr: [
      "Churn (müşteri kaybı), bir dönemde müşterilerin aboneliği bırakması ya da işletmeyle çalışmayı bırakmasıdır. Churn rate = Dönemde kaybedilen müşteri / Dönem başındaki müşteri × 100. Ay başında 800 abone ve ay içinde 40 iptal → aylık churn %5.",
      "Paydaya dönem içinde kazanılan yeni müşterileri ya da dönem sonu sayısını koymak churn'ü olduğundan düşük gösterir (aynı örnekte %4,6–4,8). Aylık churn 12 ile çarpılmaz: %5 aylık churn ≈ %46 yıllık churn, ortalama müşteri ömrü ≈ 20 ay.",
      "Churn ikiye ayrılır: müşterinin karar verdiği gönüllü churn ve kart reddi/başarısız ödeme yüzünden oluşan gönülsüz churn. Örnekte 40 kaybın 12'si ödeme hatası; bunun yarısını kurtarmak churn'ü %4,25'e indirir ve müşteri başı LTV'yi 7.200 TL'den ≈8.470 TL'ye çıkarır.",
      "Müşteri churn'ünün yanında gelir churn'ünü (brüt ve net) ve kohort churn'ünü izleyin: ilk ay churn'ü yüksek, sonraki aylar düşükse sorun ürün değil onboarding'dir. Kaynaksız 'iyi churn oranı' eşikleri yerine kendi kohortlarınızın eğilimiyle kıyaslayın.",
    ],
    publishedAt: "2026-10-30",
    readingMinutes: 9,
    tags: ["Churn", "Churn Rate", "Müşteri Kaybı", "SaaS Metrikleri", "Gelir Churn'ü", "Kohort Analizi"],
    sections: [
      {
        heading: "Churn nedir? (Kısa cevap)",
        paragraphs: [
          "Churn, Türkçede müşteri kaybı ya da müşteri terki demektir: bir dönemde müşterilerin aboneliğini iptal etmesi, yenilememesi ya da işletmeden alışveriş yapmayı bırakmasıdır. Churn rate (churn oranı, müşteri kayıp oranı) bu kaybın dönem başındaki müşteri tabanına oranıdır.",
          "Formül: Churn rate = (Dönem içinde kaybedilen müşteri / Dönem başındaki müşteri) × 100. Ekim'e 800 aktif aboneyle başlayan ve ay içinde 40 abonesi ayrılan bir SaaS şirketinin aylık churn'ü 40 / 800 = %5'tir. Tersi elde tutma (retention) oranıdır: %95.",
          "Kavram SaaS ve abonelik işlerinde, telekomda (hat iptali, numara taşıma), bankacılıkta (hesap kapatma) ve tekrar satın almanın önemli olduğu e-ticarette kullanılır. Bu yazıdaki tutarlar örnek tutarlardır; kendi rakamlarınızla denemek için Churn Rate Hesaplayıcı'yı kullanabilirsiniz.",
        ],
      },
      {
        heading: "Churn rate nasıl hesaplanır? Adım adım örnek",
        paragraphs: [
          "Örnek şirket aylık aboneliği olan bir B2B SaaS. Ekim başında 800 aktif abone var, hesap başına ortalama aylık gelir (ARPA) 450 TL, yani MRR 360.000 TL. Ekim'de 70 yeni müşteri geldi, 40 müşteri ayrıldı; ay sonunda 830 abone var.",
          "Doğru hesap: 40 / 800 = %5. Yeni gelen 70 müşteri bu hesaba girmez; onların kaybını ölçmek isterseniz kohort analizi yapılır (aşağıda). Aboneliklerin ay içine dağıldığı ve tabanın hızlı değiştiği işlerde bazı ekipler paydaya ortalama müşteri sayısını koyar: 40 / ((800 + 830) / 2) = 40 / 815 ≈ %4,9. Hangi yöntemi seçerseniz seçin, her ay aynısını kullanın.",
        ],
        bullets: [
          "Adım 1 — Dönemi seçin: aylık abonelikte ay, yıllık sözleşmede yıl ya da çeyrek",
          "Adım 2 — Dönem başındaki aktif müşteriyi sayın (deneme ve ücretsiz plan kullanıcıları hariç): 800",
          "Adım 3 — Bu müşterilerden dönem içinde ayrılanları sayın (iptal + yenilememe + ödeme alınamadığı için kapanan): 40",
          "Adım 4 — Bölün ve 100 ile çarpın: 40 / 800 × 100 = %5",
          "Adım 5 — Kaybı türüne göre ayırın: 28 gönüllü iptal (%3,5) + 12 başarısız ödeme (%1,5)",
        ],
      },
      {
        heading: "Churn hesaplarken en sık yapılan hata nedir?",
        paragraphs: [
          "En sık hata paydadır. Kayıp aynı kalsa da paydaya ne koyduğunuz sonucu değiştirir ve hızlı büyüyen şirketlerde churn'ü olduğundan düşük gösterir. Aynı Ekim verisiyle üç farklı sonuç:",
        ],
        bullets: [
          "Doğru: 40 / 800 (dönem başı) = %5,0",
          "Yanlış: 40 / 830 (dönem sonu) = %4,8 — ay içinde gelen yeni müşteriler paydaya girmiş olur",
          "Yanlış: 40 / 870 (dönem başı + yeni müşteriler) = %4,6 — yeni müşteriler 'kaybedilemeyecek' kadar yeni olmasına rağmen tabanı şişirir",
          "Diğer hatalar: deneme kullanıcılarını müşteri saymak, ödeme alınamayan hesapları aylarca aktif bırakmak, aynı müşterinin plan değiştirmesini iptal + yeni kayıt olarak saymak",
        ],
      },
      {
        heading: "Aylık churn yıllık churn'e nasıl çevrilir?",
        paragraphs: [
          "Aylık churn 12 ile çarpılmaz, çünkü her ay kalan taban küçülür ve kayıp bileşik işler. Yıllık churn = 1 − (1 − aylık churn)^12. %5 aylık churn ≈ %46 yıllık churn demektir (×12 ile bulunacak %60 değil). Yeni müşteri gelmeseydi 800 aboneden 12 ay sonra yaklaşık 432'si kalırdı.",
          "Ortalama müşteri ömrü ≈ 1 / aylık churn = 1 / 0,05 = 20 aydır. Bu varsayım churn'ün zaman içinde sabit kaldığını kabul eder; gerçekte churn genellikle ilk aylarda yüksek, sonra düşüktür, bu yüzden kohort verisiyle kontrol edin.",
        ],
      },
      {
        heading: "Gönüllü ve gönülsüz churn arasındaki fark nedir?",
        paragraphs: [
          "Gönüllü (voluntary) churn, müşterinin bilerek iptal etmesidir: fiyat, eksik özellik, rakip, ihtiyacın bitmesi. Gönülsüz (involuntary) churn ise müşteri ayrılmak istemediği hâlde ödemenin alınamamasıdır: süresi dolmuş ya da limiti yetersiz kart, banka reddi, güncellenmemiş ödeme bilgisi.",
          "Gönülsüz churn çoğu zaman en ucuz kazanılan churn'dür, çünkü müşteri ürünü bırakmak istememiştir. Ödeme altyapıları başarısız tahsilatları otomatik tekrar deneyebilir; örneğin Stripe'ın belgelerinde Smart Retries için önerilen varsayılan ayar 2 hafta içinde 8 denemedir. Kartın çalındı/kayıp gibi kesin red kodlarıyla reddedildiği durumlarda ise tekrar deneme işe yaramaz, müşteriden yeni ödeme yöntemi istenir.",
          "Örnekte 12 başarısız ödemenin 6'sını tekrar deneme ve e-posta/SMS hatırlatmasıyla kurtardığınızı varsayalım: kayıp 34'e, churn 34 / 800 = %4,25'e iner. Yıllık churn ≈ %46'dan ≈ %41'e düşer; yeni müşteri olmasa 12 ay sonra 432 yerine yaklaşık 475 abone kalır.",
        ],
        bullets: [
          "Kart son kullanma tarihinden önce müşteriye hatırlatma gönderin",
          "Başarısız tahsilatı tek denemede iptal etmeyin; birkaç gün aralıklı tekrar deneme kurun",
          "Ödeme hatasında müşteriyi ödeme bilgisi güncelleme sayfasına tek tıkla götüren e-posta ve uygulama içi uyarı gösterin",
          "Ödeme alınamayan hesabı hemen silmek yerine kısa bir ek süre (grace period) verin ve bu süredeki hesapları ayrı raporlayın",
        ],
      },
      {
        heading: "Müşteri churn'ü ile gelir churn'ü farkı nedir?",
        paragraphs: [
          "Müşteri (logo) churn'ü kaç müşteri kaybettiğinizi, gelir churn'ü ne kadar aylık gelir (MRR) kaybettiğinizi ölçer. Ekim'de ayrılan 40 müşterinin toplam MRR'si 16.200 TL; ayrıca bazı müşteriler alt pakete geçerek 2.700 TL daralma yarattı, bazıları ise üst pakete geçip 7.200 TL genişleme getirdi.",
          "Brüt gelir churn'ü = (Kayıp MRR + Daralma MRR) / Dönem başı MRR = (16.200 + 2.700) / 360.000 = %5,25. Net gelir churn'ü genişlemeyi de hesaba katar: (16.200 + 2.700 − 7.200) / 360.000 = %3,25. Genişleme, kayıp ve daralmadan büyük olursa net gelir churn'ü eksiye düşer; buna negatif churn denir ve NRR'nin %100'ün üzerinde olmasıyla aynı anlama gelir.",
          "Dikkat: yeni müşteri sayısının kaybedilen müşteriden fazla olması negatif churn değildir; bu yalnızca net müşteri artışıdır. Negatif churn yalnızca mevcut müşterilerin gelirine bakılarak ölçülür.",
        ],
      },
      {
        heading: "Kohort analiziyle churn nasıl okunur?",
        paragraphs: [
          "Tek bir aylık churn rakamı, eski ve sadık müşterilerle yeni ve kararsız müşterileri karıştırır. Kohort analizinde aynı ay kaydolan müşteriler bir grup olarak izlenir ve her ay kaçının kaldığına bakılır.",
          "Örnek: Mayıs'ta kaydolan 100 müşteriden Haziran sonunda 82, Temmuz'da 74, Ağustos'ta 70, Eylül'de 67, Ekim'de 65'i aktif. Ay ay churn: %18, %9,8, %5,4, %4,3 ve %3,0. Kaybın büyük kısmı ilk ayda; bu tablo ürünün değil, ilk değeri hissettirme (onboarding) sürecinin sorunlu olduğunu söyler. Yeni kohortların ilk ay churn'ü eskilerden düşükse yaptığınız iyileştirme çalışıyor demektir.",
        ],
      },
      {
        heading: "Churn neden önemlidir? LTV ve büyümeye etkisi",
        paragraphs: [
          "Churn, müşteri yaşam boyu değerinin (LTV) paydasındadır: LTV = Aylık müşteri başı brüt kâr / Aylık churn. ARPA 450 TL ve brüt marj %80 ise müşteri başı aylık brüt kâr 360 TL'dir. %5 churn ile LTV 360 / 0,05 = 7.200 TL; %4,25 ile ≈ 8.470 TL; %4 ile 9.000 TL. Churn'deki 1 puanlık düşüş, aynı müşteri için harcayabileceğiniz edinme maliyetini (CAC) %25 artırır.",
          "Büyüme tarafında da aynı mantık işler: her ay tabanın %5'ini kaybeden şirket, yalnızca yerinde saymak için her ay tabanın %5'i kadar yeni müşteri kazanmak zorundadır. Bu yüzden churn'ü düşürmek çoğu zaman reklam bütçesini artırmaktan daha ucuz bir büyüme kaldıracıdır.",
        ],
      },
      {
        heading: "Churn'ü önceden haber veren sinyaller nelerdir?",
        paragraphs: [
          "Churn oranı geriye dönük bir sonuçtur; müşteri ayrıldıktan sonra görünür. Ayrılmadan önce davranışta iz bırakan sinyalleri izlemek, müdahale için zaman kazandırır.",
        ],
        bullets: [
          "Kullanım düşüşü: giriş sıklığında, temel özelliğin kullanımında ya da aktif kullanıcı (koltuk) sayısında haftalık düşüş",
          "Kurulumu tamamlamamak: ilk 14 günde ürünün temel değerini veren adımı (entegrasyon, ilk rapor, ilk sipariş) yapmamış hesaplar",
          "Destek sinyalleri: çözülmemiş talepler, art arda şikâyet, düşen memnuniyet puanı",
          "Ödeme sinyalleri: kartın son kullanma tarihi yaklaşması, başarısız tahsilat, alt pakete geçiş",
          "Ticari sinyaller: projeyi yöneten kişinin şirketten ayrılması, sözleşme yenilemeye 60–90 gün kalması",
        ],
      },
      {
        heading: "Churn nasıl düşürülür? Türüne göre plan",
        paragraphs: [
          "Önce iptal nedenini ölçün: iptal akışına zorunlu olmayan tek soruluk bir neden listesi (fiyat, eksik özellik, kullanmıyorum, rakibe geçtim, işletme kapandı, ödeme sorunu) ekleyin ve her ay nedenlere göre dağılımı raporlayın. Sonra her nedene uygun müdahaleyi seçin:",
        ],
        bullets: [
          "Erken churn (ilk 1–2 ay): onboarding'i kısaltın, ilk değeri ilk oturumda gösterin, kurulumu tamamlamayan hesaplara ekip içinden kişisel destek verin",
          "'Kullanmıyorum': kullanım düşüşü uyarısıyla müşteri başarısı araması, kullanım raporu e-postaları, duraklatma (pause) seçeneği",
          "Fiyat: iptal yerine alt pakete geçiş, yıllık ödemede indirim, kullanım bazlı daha küçük plan",
          "Eksik özellik / rakip: iptal nedenlerini ürün yol haritasına bağlayın; aynı nedenin aylık payını izleyin",
          "Gönülsüz churn: otomatik tekrar deneme, kart güncelleme hatırlatmaları, ek süre",
          "Yanlış müşteri: churn'ü yüksek segmentleri (kanal, paket, sektör) bulun ve reklamı bu segmentlerden çekin; düşük CAC'lı ama hızlı ayrılan müşteri pahalıdır",
        ],
      },
      {
        heading: "E-ticarette churn nasıl ölçülür?",
        paragraphs: [
          "Abonelik olmayan e-ticarette müşteri iptal etmez, yalnızca bir daha alışveriş yapmaz. Bu yüzden önce bir pencere tanımlanır: ürününüzün doğal yeniden satın alma süresine göre 90, 180 ya da 365 gün. Bu süre boyunca tekrar sipariş vermeyen müşteri kaybedilmiş sayılır.",
          "Örnek: 1. çeyrekte alışveriş yapan 2.000 müşteriden 1.300'ü sonraki 180 günde tekrar sipariş vermediyse 180 günlük churn %65, tekrar satın alma oranı %35'tir. E-ticarette bu oranı izlemek, ilk siparişte ne kadar reklam maliyetine katlanabileceğinizi belirler; hesap için kar marjı ve ROAS araçlarını birlikte kullanın.",
        ],
      },
    ],
    faq: [
      {
        question: "Churn ne demek, Türkçesi nedir?",
        answer:
          "Churn, müşteri kaybı ya da müşteri terki anlamına gelir. Churn rate (churn oranı) ise bir dönemde kaybedilen müşterilerin dönem başındaki müşterilere oranıdır. SaaS, abonelik, telekom, bankacılık ve e-ticarette kullanılır.",
      },
      {
        question: "Churn rate nasıl hesaplanır?",
        answer:
          "Churn rate = Dönemde kaybedilen müşteri / Dönem başındaki müşteri × 100. 800 aboneyle başlayıp 40 abone kaybeden bir şirketin aylık churn'ü %5'tir. Dönem içinde kazanılan yeni müşteriler paydaya eklenmez.",
      },
      {
        question: "İyi bir churn oranı kaçtır?",
        answer:
          "Herkes için geçerli tek bir oran yoktur: küçük işletmelere aylık abonelik satan ürünlerde churn doğal olarak yüksek, yıllık sözleşmeli kurumsal ürünlerde düşüktür. Kaynağı belirsiz eşikler yerine kendi kohortlarınızın eğilimine bakın; yeni kohortların churn'ü eskilerden düşükse doğru yoldasınız.",
      },
      {
        question: "Gönülsüz churn nedir?",
        answer:
          "Müşteri ayrılmak istemediği hâlde ödemenin alınamaması (kart süresi dolması, limit, banka reddi) nedeniyle oluşan kayıptır. Otomatik tekrar deneme, kart güncelleme hatırlatmaları ve kısa bir ek süre ile önemli bölümü geri kazanılabilir.",
      },
      {
        question: "Negatif churn ne demek?",
        answer:
          "Mevcut müşterilerden gelen genişleme gelirinin, iptal ve alt pakete geçişten kaybedilen geliri aşmasıdır; net gelir churn'ü eksiye düşer ve NRR %100'ün üzerine çıkar. Yeni müşteri sayısının kaybedilenden fazla olması negatif churn değildir.",
      },
    ],
    howTo: {
      name: "Churn rate nasıl hesaplanır?",
      description: "Dönem başı müşteri tabanından aylık churn'ü hesaplayın, yıllığa çevirin ve kaybı türüne göre ayırın.",
      steps: [
        { name: "Dönemi seçin", text: "Aylık abonelikte ayı, yıllık sözleşmede yılı ya da çeyreği ölçüm dönemi olarak belirleyin." },
        { name: "Dönem başı müşteriyi sayın", text: "Dönemin ilk günündeki ödeme yapan aktif müşterileri sayın; deneme ve ücretsiz plan kullanıcılarını dahil etmeyin. Örnek: 800." },
        { name: "Kaybedilen müşteriyi sayın", text: "Bu müşterilerden dönem içinde iptal eden, yenilemeyen ya da ödemesi alınamadığı için kapananları sayın. Örnek: 40." },
        { name: "Oranı hesaplayın", text: "Kaybı dönem başı müşteriye bölüp 100 ile çarpın: 40 / 800 × 100 = %5. Yıllık churn için 1 − (1 − 0,05)^12 ≈ %46 kullanın." },
        { name: "Kaybı ayırın ve gelir churn'üne bakın", text: "Gönüllü ve gönülsüz churn'ü ayrı raporlayın; kayıp ve daralma MRR'sini dönem başı MRR'ye bölerek brüt gelir churn'ünü hesaplayın." },
      ],
    },
    relatedToolKey: "churn",
    resources: [
      { label: "Churn Rate Hesaplayıcı", href: "/ucretsiz-araclar/churn-rate-hesaplayici/" },
      { label: "LTV Hesaplayıcı", href: "/ucretsiz-araclar/ltv-hesaplayici/" },
      { label: "NRR Hesaplayıcı", href: "/ucretsiz-araclar/nrr-hesaplayici/" },
      { label: "MRR Hesaplayıcı", href: "/ucretsiz-araclar/mrr-hesaplayici/" },
      { label: "Kar Marjı Hesaplama", href: "/ucretsiz-araclar/brut-kar-marji-hesaplayici/" },
      { label: "MRR Nedir, Nasıl Hesaplanır? Aylık Yinelenen Gelir", href: "/blog/mrr-nedir-nasil-hesaplanir/" },
      { label: "LTV Nedir? LTV:CAC Oranı Kaç Olmalı?", href: "/blog/ltv-nedir-ltv-cac-orani/" },
      { label: "NRR Nedir? SaaS'ta Neden ARR'dan Daha Önemli?", href: "/blog/nrr-nedir-saas-buyume-metrigi/" },
      { label: "CAC Nedir? Müşteri Edinme Maliyeti Nasıl Hesaplanır?", href: "/blog/cac-nedir-musteri-edinme-maliyeti/" },
      { label: "Freemium Dönüşüm Oranı Nasıl Artırılır?", href: "/blog/freemium-donusum-orani-artirma/" },
      { label: "Stripe: Başarısız ödemeleri otomatik tekrar deneme (İngilizce)", href: "https://docs.stripe.com/billing/revenue-recovery/smart-retries", external: true },
      { label: "Wikipedia: Churn rate (İngilizce)", href: "https://en.wikipedia.org/wiki/Churn_rate", external: true },
    ],
  },
  {
    slug: "meta-reklam-verme-rehberi",
    seoTitle: "Meta Reklam Verme Rehberi: Bütçe, Kitle, Öğrenme (2026)",
    title: "Meta Reklam Verme Rehberi (2026): Facebook ve Instagram Reklamı Adım Adım, Bütçe Hesabı ve Öğrenme Aşaması",
    description:
      "Meta reklam nasıl verilir? Reklam Yöneticisi kurulumu, piksel ve Dönüşümler API, 6 kampanya amacı, Advantage+, kitle ve hedeften geriye bütçe hesabı örneği.",
    category: "performans-pazarlama",
    tldr: [
      "Meta reklamı (Facebook, Instagram, Messenger, WhatsApp) Reklam Yöneticisi'nden verilir: işletme portföyü ve reklam hesabı → ödeme yöntemi → Meta pikseli + Dönüşümler API → kampanya amacı → reklam seti (kitle, bütçe, yerleşim) → reklam (kreatif, metin, bağlantı).",
      "Bütçeyi tahminle değil hedeften geriye kurun: ortalama sipariş 1.200 TL ve reklam öncesi katkı marjı %40 ise başabaş ROAS 2,5, başabaş CPA 480 TL'dir. Sipariş başı %10 kâr isteniyorsa hedef CPA 360 TL, hedef ROAS ≈ 3,3 olur.",
      "Meta, bir reklam setinin öğrenme aşamasından çıkması için son önemli düzenlemeden sonra 7 günde yaklaşık 50 optimizasyon olayı bekler. 360 TL CPA ile bu, reklam seti başına günde ≈ 2.571 TL demektir; 700 TL/gün bütçe haftada ≈ 14 satın alma getirir, yetmez.",
      "Bütçe yetmiyorsa reklam setlerini birleştirin ya da daha sık gerçekleşen bir olayı (ör. ödeme başlatma, ≈90 TL → haftada ≈54 olay) optimize edin. Advantage+ kampanya bütçesi + Advantage+ kitle + Advantage+ yerleşimler 2025'ten beri satış ve uygulama kampanyalarında varsayılan kurulum.",
    ],
    publishedAt: "2026-10-30",
    updatedAt: "2026-11-03",
    readingMinutes: 11,
    tags: ["Meta Reklam", "Facebook Reklamı", "Instagram Reklamı", "Reklam Yöneticisi", "Advantage+", "Reklam Bütçesi"],
    sections: [
      {
        heading: "Meta reklam nasıl verilir? (Kısa cevap)",
        paragraphs: [
          "Meta reklamı, Facebook, Instagram, Messenger ve WhatsApp'ta (ve Audience Network'te) gösterilen reklamların tek panelden, Meta Reklam Yöneticisi'nden (Ads Manager) kurulmasıdır. Sıra: işletme portföyü ve reklam hesabı açın, ödeme yöntemi ekleyin, sitenize Meta pikselini ve mümkünse Dönüşümler API'yi kurun, kampanya amacını seçin, reklam setinde kitle-bütçe-yerleşimi belirleyin, reklamda kreatif ve metni yükleyip yayına alın.",
          "Instagram veya Facebook sayfasındaki 'Öne çıkar' (boost) düğmesi hızlıdır ama amaç, ölçüm ve kitle seçenekleri sınırlıdır; satış ya da potansiyel müşteri hedefleyen işletmeler için Reklam Yöneticisi doğru yerdir. Bu yazıdaki tutarlar örnek tutarlardır; kendi rakamlarınız için Reklam Bütçesi Hesaplama aracını kullanabilirsiniz.",
        ],
      },
      {
        heading: "Meta reklam vermeden önce ne hazırlanmalı?",
        paragraphs: [
          "Reklamın kendisi 15 dakikada kurulur; asıl zaman alan altyapıdır. Bunlar eksikse algoritma yanlış olayı öğrenir ve sonuçlar ölçülemez.",
        ],
        bullets: [
          "Facebook sayfası ve Instagram profesyonel hesabı (işletme veya içerik üreticisi), ikisi birbirine bağlı",
          "Meta Business Suite'te bir işletme portföyü (eski adıyla Business Manager) ve içinde reklam hesabı; reklam hesabının para birimi ve saat dilimini ilk kurulumda doğru seçin, sonradan değiştirmek zahmetlidir",
          "Ödeme yöntemi (kart ya da hesabınızda sunulan diğer yöntemler) ve fatura bilgileri; muhasebe işlemleri için mali müşavirinize danışın",
          "Alan adı doğrulaması ve Meta pikseli: sitede satın alma, sepete ekleme, ödeme başlatma, form gönderme gibi olaylar doğru tetikleniyor mu, Olay Yöneticisi'nde test edin",
          "Dönüşümler API (CAPI): olayları tarayıcıya ek olarak sunucudan da gönderir; reklam engelleyici ve çerez kısıtlarında kaybolan olayları azaltır",
          "UTM şablonu: GA4'te Meta trafiğini doğru kanalda görmek için reklam bağlantılarına tutarlı UTM parametreleri",
        ],
      },
      {
        heading: "Meta pikseli ve Dönüşümler API neden birlikte kurulmalı?",
        paragraphs: [
          "Meta'nın geliştirici belgeleri, Dönüşümler API'nin Meta pikseliyle birlikte kullanılmasını öneriyor. Piksel tarayıcıdan, CAPI sunucudan olay gönderir; biri kaçırdığında diğeri yakalar. İkisi aynı olayı gönderdiğinde çift sayım olmaması için tekilleştirme gerekir: piksel tarafındaki eventID ile CAPI tarafındaki event_id ve olay adı eşleşirse Meta, ilk olaydan sonraki 48 saat içinde gelen kopyayı atar.",
          "Pratik kontrol: Olay Yöneticisi'nde her olay için hem tarayıcı hem sunucu kaynağı görünmeli ve tekilleştirme uyarısı olmamalı. Shopify, ikas, Ticimax, IdeaSoft gibi altyapıların çoğu piksel ve CAPI entegrasyonu sunar; kurulumdan sonra bir test siparişiyle satın alma olayının değeri ve para birimini doğrulayın.",
        ],
      },
      {
        heading: "Meta kampanya amacı nasıl seçilir? 6 amaç",
        paragraphs: [
          "Meta'da kampanya amacı, algoritmanın kimi bulmaya çalışacağını belirler: 'Trafik' seçerseniz tıklamaya yatkın kişileri, 'Satışlar' seçerseniz satın almaya yatkın kişileri arar. Amaç, ölçmek istediğiniz iş sonucuyla aynı olmalıdır.",
        ],
        bullets: [
          "Bilinirlik: erişim ve hatırlanma; yeni marka, yerel işletme, lansman",
          "Trafik: siteye, uygulamaya ya da profile ziyaret; içerik ve blog dağıtımı. Satış için kullanmayın, tıklayan ama almayan kitle bulur",
          "Etkileşim: video izlenmesi, mesaj, gönderi etkileşimi, etkinlik yanıtı; WhatsApp/Instagram DM ile satış yapan işletmeler için mesaj hedefi",
          "Potansiyel müşteriler: anında form, Messenger/WhatsApp ya da sitedeki form; B2B ve hizmet işletmeleri",
          "Uygulama tanıtımı: uygulama yüklemesi ve uygulama içi olaylar",
          "Satışlar: e-ticaret satın alma, sepete ekleme, katalog reklamları; piksel ve satın alma olayı şart",
        ],
      },
      {
        heading: "Advantage+ kampanya nedir, ne zaman kullanılır?",
        paragraphs: [
          "Advantage+, Meta'nın bütçe, kitle ve yerleşim kararlarını yapay zekâya bırakan otomasyon katmanıdır. Meta for Developers'ın 3 Haziran 2025 tarihli duyurusuna göre 29 Mayıs 2025'ten itibaren satış ve uygulama kampanyalarında Advantage+ ayrı bir kampanya türü olmaktan çıkıp normal kampanya akışına katıldı. Kampanyanın 'Advantage+ açık' sayılması için üç kaldıraç kullanılır: Advantage+ kampanya bütçesi (bütçeyi reklam setleri arasında otomatik dağıtır), Advantage+ kitle (verdiğiniz kitle bilgisini öneri olarak kullanıp daha geniş arar) ve Advantage+ yerleşimler (en verimli yerleşimleri seçer).",
          "Meta, eski Advantage+ alışveriş kampanyası (ASC) akışını API'de 2026'nın ilk çeyreğinde (v25.0) kaldıracağını duyurdu ve mevcut kampanyalar için taşıma yolları yayımladı; yeni kampanyaları doğrudan yeni yapıda kurun. Pratik karar: piksel ve satın alma olayı sağlıklıysa ve haftada onlarca dönüşüm varsa Advantage+ ile başlayın. Dönüşüm verisi çok azsa, yeni bir hesapsanız ya da kesin kitle kısıtınız varsa (yalnızca belirli şehir, B2B meslek grubu) manuel ayarlarla daha kontrollü başlayıp veri biriktirin.",
        ],
      },
      {
        heading: "Meta reklam bütçesi nasıl belirlenir? Hedeften geriye hesap",
        paragraphs: [
          "Bütçeyi 'günde 500 TL deneyelim' diye değil, kârlılık hedefinden geriye hesaplayın. Örnek: ortalama sipariş tutarı 1.200 TL, ürün maliyeti + kargo + komisyon + paketleme sonrası reklam öncesi katkı marjı %40. Sipariş başı katkı 1.200 × 0,40 = 480 TL'dir.",
          "Başabaş CPA 480 TL, başabaş ROAS 1 / 0,40 = 2,5'tir. Sipariş başına cironun %10'u kadar kâr kalsın istiyorsanız reklama ayırabileceğiniz tutar 1.200 × (0,40 − 0,10) = 360 TL'dir: hedef CPA 360 TL, hedef ROAS 1.200 / 360 ≈ 3,33. Bu hedefleri Meta'da maliyet hedefi ya da ROAS hedefi teklifi olarak da kullanabilirsiniz; ilk haftalarda sadece izleme eşiği olarak tutmak daha güvenlidir.",
          "Sonra öğrenme aşaması kısıtını ekleyin: Meta, reklam setinin teslimatı oturtması için son önemli düzenlemeden sonraki 7 günde yaklaşık 50 optimizasyon olayı bekler. 360 TL CPA ile haftada 50 satın alma 18.000 TL, yani reklam seti başına günde ≈ 2.571 TL bütçe ister.",
        ],
        bullets: [
          "Bütçeniz günde 700 TL ise: 700 × 7 / 360 ≈ 13,6 satın alma/hafta → reklam seti büyük olasılıkla 'Öğrenme sınırlı' kalır",
          "Çözüm 1 — Birleştirin: aynı amaçlı 3–4 küçük reklam seti yerine tek reklam seti ve kampanya bütçesi; olaylar tek yerde toplanır",
          "Çözüm 2 — Olayı yukarı taşıyın: ödeme başlatma olayının maliyeti ≈ 90 TL ise 700 × 7 / 90 ≈ 54 olay/hafta; satın alma hacmi büyüyünce satın almaya geçin",
          "Çözüm 3 — Bütçeyi artırın ya da testi daha az ürüne/kitleye odaklayın",
          "B2B / potansiyel müşteri: müşteri başı brüt kâr 24.000 TL, bunun yarısını edinmeye ayırıyorsanız (12.000 TL) ve lead'lerin %5'i müşteriye dönüyorsa maks. lead başı maliyet 12.000 × 0,05 = 600 TL",
        ],
      },
      {
        heading: "Meta'da hedef kitle nasıl seçilir?",
        paragraphs: [
          "Meta'nın güncel yapısında ayrıntılı ilgi alanı hedeflemesi çoğu kampanyada kesin bir sınır değil, algoritmaya verilen bir öneri gibi çalışıyor; asıl hedeflemeyi kreatif ve dönüşüm verisi yapıyor. Bu yüzden kitleyi dar ilgi alanı kombinasyonlarıyla parçalamak yerine birkaç net kitle tipiyle çalışın:",
        ],
        bullets: [
          "Geniş kitle: yalnızca ülke/şehir, yaş ve dil; satış kampanyasında piksel verisi güçlüyse çoğu zaman en verimli başlangıç",
          "Özel hedef kitleler: son 30–180 gün site ziyaretçileri, sepete ekleyip almayanlar, Instagram/Facebook etkileşimi, müşteri listesi (KVKK'ya uygun izinle toplanmış veri)",
          "Benzer hedef kitleler: en değerli müşteri listenizden; liste ne kadar temiz ve değerliyse o kadar iyi",
          "Hariç tutma: mevcut müşterilere yeni müşteri teklifi göstermemek için müşteri listesini ya da son satın alanları hariç tutun",
          "Konum: kargo/hizmet verebildiğiniz bölgeyle sınırlayın; yerel işletmede yarıçap kullanın",
        ],
      },
      {
        heading: "Meta reklam kreatifi nasıl hazırlanır?",
        paragraphs: [
          "Geniş kitle kullanıldığında doğru kişiyi bulan şey kreatiftir: ilk 2–3 saniyede kime hitap ettiğini ve hangi sorunu çözdüğünü söyleyen görsel ya da video, algoritmanın doğru kişiyi seçmesine yardım eder. Tek kreatifle başlamak yerine aynı reklam setine birbirinden belirgin biçimde farklı birkaç açı yükleyin.",
        ],
        bullets: [
          "Formatlar: dikey video (Reels/Hikâye 9:16), kare veya 4:5 görsel (akış), katalog/carousel (çok ürün)",
          "Açılar: sorun–çözüm, ürün kullanım videosu, müşteri yorumu (gerçek ve izinli), karşılaştırma, kampanya/teklif",
          "Metin: ilk satırda fayda ve teklif; fiyat ya da kargo avantajı varsa açıkça yazın; harekete geçirici mesaj amaca uygun olsun",
          "Rakip incelemesi: Meta Reklam Kütüphanesi'nde rakiplerin uzun süredir yayında tuttuğu reklamlar, işe yarayan açıları gösterir",
          "Yorgunluk: frekans artıp tıklama oranı düşüyor ve CPA yükseliyorsa yeni açı ekleyin; kazananı silmeyin",
        ],
      },
      {
        heading: "Reklam yayına girdikten sonra ilk 14 gün ne yapılmalı?",
        paragraphs: [
          "En sık hata, ilk günlerde sonuç dalgalanırken bütçe, kitle ve kreatifi sürekli değiştirmektir. Bütçe, teklif, hedefleme, optimizasyon olayı ve kreatif değişiklikleri önemli düzenleme sayılabilir ve öğrenmeyi yeniden başlatabilir; ayrıntılar için Meta öğrenme aşaması yazımıza bakın.",
        ],
        bullets: [
          "1–3. gün: reklam onayı, teslimat, piksel olaylarının gelmesi, bağlantı ve UTM kontrolü; performans kararı vermeyin",
          "4–7. gün: CPA ve ROAS'ı başabaş değerlerle karşılaştırın; açıkça kötü bir kreatifi durdurmak serbest, yapıyı değiştirmeyin",
          "8–14. gün: öğrenme bittiyse bütçeyi kademeli artırın (büyük sıçramalar yerine birkaç günde bir küçük artışlar); 'Öğrenme sınırlı' ise birleştirme veya olay değişikliği yapın",
          "Her hafta: Meta'nın raporladığı dönüşümleri GA4 ve sipariş paneliyle karşılaştırın; Meta görüntüleme sonrası dönüşümleri de sayabildiği için rakamlar farklı olur, kararı kendi kâr verinize göre verin",
        ],
      },
      {
        heading: "Facebook reklam verme nasıl yapılır?",
        paragraphs: [
          "Facebook reklamı da aynı panelden verilir: Reklam Yöneticisi'nde kampanyayı kurun, reklam setinde 'Manuel yerleşimler'i seçip yalnızca Facebook satırlarını (akış, Reels, Marketplace, video akışları) bırakın, reklam düzeyinde kimlik olarak Facebook sayfanızı seçin. Hızlı yol, sayfadaki gönderide 'Gönderiyi Öne Çıkar' düğmesidir; Instagram'daki gibi amaç ve ölçüm seçenekleri sınırlıdır.",
          "Kitle farkı önemlidir. DataReportal'ın Digital 2026 Türkiye raporuna göre Meta'nın reklam araçları 2025 sonunda Türkiye'de Facebook için 34,7 milyon, Instagram için 62,3 milyon erişim gösteriyor ve Facebook'ta yetişkin kitlenin %64,4'ü erkek. Bu rakamlar aktif kullanıcı sayısı değil, reklam kitlesi tahminidir. Bu yüzden önce Advantage+ yerleşimleriyle başlayıp raporda yerleşim kırılımına bakmak, Facebook'u tek başına seçmekten genellikle daha sağlıklıdır. Instagram'a özgü adımlar, ölçüler ve TL bütçe örneği için Instagram Reklam Verme Rehberi'ne bakın.",
        ],
      },
      {
        heading: "Meta reklamlarında en sık yapılan hatalar",
        paragraphs: [
          "Hataların çoğu algoritmaya yanlış sinyal vermekten ya da ölçümsüz harcamaktan gelir:",
        ],
        bullets: [
          "Satış istenirken 'Trafik' ya da 'Etkileşim' amacı seçmek",
          "Piksel olaylarını test etmeden yayına girmek; satın alma değerini göndermemek",
          "Küçük bütçeyi çok sayıda reklam setine bölmek ve hiçbirinin öğrenmeyi bitirememesi",
          "Başabaş ROAS'ı bilmeden 'ROAS 3 iyi mi?' diye karar vermek; ciro ROAS'ını kâr sanmak",
          "Mevcut müşterileri hariç tutmadan yeni müşteri kampanyası yürütmek",
          "UTM'siz bağlantılar yüzünden GA4'te Meta trafiğini 'Unassigned' ya da 'Referral' görmek",
        ],
      },
    ],
    faq: [
      {
        question: "Meta reklamı nasıl verilir?",
        answer:
          "Meta Reklam Yöneticisi'nde reklam hesabı açın, ödeme yöntemi ekleyin, sitenize Meta pikselini kurun, kampanya amacını (ör. Satışlar) seçin, reklam setinde kitle, bütçe ve yerleşimi belirleyin, reklamda kreatif ve metni yükleyip yayınlayın. Reklam onaylandıktan sonra yayına girer.",
      },
      {
        question: "Meta reklam bütçesi ne kadar olmalı?",
        answer:
          "Bütçe hedeften geriye hesaplanır: hedef CPA × haftada gereken yaklaşık 50 optimizasyon olayı ÷ 7 = reklam seti başına günlük bütçe. Hedef CPA 360 TL ise günde ≈ 2.571 TL gerekir; daha azıyla reklam setlerini birleştirin ya da daha sık gerçekleşen bir olayı optimize edin.",
      },
      {
        question: "Instagram'da 'Öne çıkar' ile Reklam Yöneticisi arasındaki fark nedir?",
        answer:
          "'Öne çıkar' mevcut bir gönderiyi hızlıca reklama çevirir ama amaç, ölçüm ve kitle seçenekleri sınırlıdır. Reklam Yöneticisi'nde tüm kampanya amaçları, piksel olaylarına göre optimizasyon, özel ve benzer kitleler, A/B testleri ve ayrıntılı raporlama vardır.",
      },
      {
        question: "Advantage+ kullanmalı mıyım?",
        answer:
          "Pikseliniz sağlıklıysa ve haftada onlarca dönüşüm alıyorsanız Advantage+ (kampanya bütçesi, kitle ve yerleşimler) iyi bir başlangıçtır. Dönüşüm verisi çok azsa ya da kesin bir kitle kısıtınız varsa manuel ayarlarla veri biriktirip sonra geçin.",
      },
      {
        question: "Meta reklamında öğrenme aşaması ne kadar sürer?",
        answer:
          "Meta, bir reklam setinin son önemli düzenlemeden sonraki 7 günde yaklaşık 50 optimizasyon olayı toplamasını bekler. Bu hacme ulaşamayan reklam setleri 'Öğrenme sınırlı' olarak görünür; bütçeyi artırmak, reklam setlerini birleştirmek ya da daha sık gerçekleşen bir olayı seçmek çözümdür.",
      },
    ],
    howTo: {
      name: "Meta reklamı adım adım nasıl verilir?",
      description: "Reklam hesabından yayına kadar Facebook ve Instagram reklamı kurulumu.",
      steps: [
        { name: "Hesapları hazırlayın", text: "Facebook sayfası ve Instagram profesyonel hesabını bağlayın; Meta Business Suite'te işletme portföyü ve reklam hesabı açın, ödeme yöntemi ekleyin." },
        { name: "Ölçümü kurun", text: "Alan adını doğrulayın, Meta pikseli ve Dönüşümler API'yi kurun, satın alma ve form olaylarını Olay Yöneticisi'nde test edin." },
        { name: "Hedefleri hesaplayın", text: "Katkı marjından başabaş ROAS ve hedef CPA'yı bulun; öğrenme için reklam seti başına haftada yaklaşık 50 olay gerektiren bütçeyi hesaplayın." },
        { name: "Kampanyayı kurun", text: "Amacı seçin (ör. Satışlar), Advantage+ ya da manuel ayarları belirleyin, reklam setinde konum, kitle ve bütçeyi girin." },
        { name: "Kreatifi yükleyin ve yayınlayın", text: "Farklı açılardan birkaç görsel/video, metin ve UTM'li bağlantı ekleyin; onaydan sonra ilk 7 günde yapıyı değiştirmeden izleyin." },
      ],
    },
    relatedToolKey: "ad-budget",
    resources: [
      { label: "Instagram Reklam Verme Rehberi: Bütçe ve Fiyatlar", href: "/blog/instagram-reklam-verme-rehberi/" },
      { label: "CAC Nedir? Müşteri Edinme Maliyeti Nasıl Hesaplanır?", href: "/blog/cac-nedir-musteri-edinme-maliyeti/" },
      { label: "Reklam Bütçesi Hesaplama", href: "/ucretsiz-araclar/reklam-butcesi-hesaplama/" },
      { label: "ROAS Hesaplama: ROAS ve Başabaş ROAS", href: "/ucretsiz-araclar/roas-hesaplayici/" },
      { label: "Kar Marjı Hesaplama", href: "/ucretsiz-araclar/brut-kar-marji-hesaplayici/" },
      { label: "Trendyol Komisyon ve Kâr Hesaplama", href: "/ucretsiz-araclar/trendyol-hepsiburada-kar-hesaplama/" },
      { label: "UTM Link Oluşturucu", href: "/ucretsiz-araclar/utm-link-olusturucu/" },
      { label: "Meta Ads'te Öğrenme Aşamasından Nasıl Hızlı Çıkılır?", href: "/blog/meta-ads-ogrenme-asamasindan-cikma-taktikleri/" },
      { label: "Reklam Bütçesi Nasıl Belirlenir?", href: "/blog/reklam-butcesi-nasil-belirlenir/" },
      { label: "ROAS Nedir, Nasıl Hesaplanır?", href: "/blog/roas-nedir-nasil-hesaplanir/" },
      { label: "UTM Nedir? UTM Parametreleri Nasıl Kullanılır?", href: "/blog/utm-nedir-utm-parametreleri/" },
      { label: "Black Friday 2026 Reklam Planı", href: "/blog/black-friday-2026-reklam-plani/" },
      { label: "Meta for Developers: Satış ve uygulama kampanyalarında Advantage+ (İngilizce)", href: "https://developers.facebook.com/blog/post/2025/06/03/advantage-plus-campaign-experience-for-sales-and-app/", external: true },
      { label: "Meta for Developers: Piksel ve Dönüşümler API olaylarının tekilleştirilmesi (İngilizce)", href: "https://developers.facebook.com/documentation/ads-commerce/conversions-api/deduplicate-pixel-and-server-events", external: true },
      { label: "Meta İşletme Yardım Merkezi: Öğrenme aşaması", href: "https://www.facebook.com/business/help/112167992830700/", external: true },
    ],
  },
  {
    slug: "arr-nedir-yillik-yinelenen-gelir",
    seoTitle: "ARR Nedir? Yıllık Yinelenen Gelir ve ARR Köprüsü",
    title: "ARR Nedir? Yıllık Yinelenen Gelir Nasıl Hesaplanır? ARR Köprüsü, CARR ve Booking Farkı",
    description:
      "ARR (yıllık yinelenen gelir) nedir, nasıl hesaplanır? Çok yıllı sözleşme, yeni/genişleme/kayıp ARR köprüsü, NRR-GRR, CARR, booking ve ciro farkı örnekle.",
    category: "saas-buyume",
    tldr: [
      "ARR (Annual Recurring Revenue, yıllık yinelenen gelir), belirli bir tarihte aktif olan aboneliklerin ve sözleşmelerin yıllık karşılığıdır. Bir yıl boyunca kazanılan gelirin toplamı değil, o günün fotoğrafıdır. Örnek şirkette 31 Aralık ARR'si 3.024.000 + 3.976.000 + 1.400.000 = 8.400.000 TL.",
      "Aylık planlar × 12, yıllık sözleşmeler yıllık bedelle girer; kademeli çok yıllı sözleşmede o yılın bedeli kullanılır. 3 yıllık 540.000 TL'lik kademeli sözleşmeyi 3'e bölmek (180.000) ilk yılın gerçek bedelini (140.000) aşar ve ARR'yi örnekte 400.000 TL şişirir.",
      "Yıllık ARR köprüsü: Başlangıç 6.000.000 + Yeni 2.280.000 + Genişleme 1.020.000 − Daralma 240.000 − Kayıp 660.000 = Bitiş 8.400.000 TL. ARR %40 büyüdü; aynı köprüden NRR %102, GRR %85 çıkar.",
      "Aynı şirket için beş farklı rakam vardır: ARR 8,40 milyon, CARR 8,67 milyon, run-rate gelir 9,42 milyon, yılın booking'i (TCV) 6,28 milyon ve yıl içinde tanınan abonelik geliri ≈7,2 milyon TL. Hangisini raporladığınızı yazın; karıştırmak en sık yapılan hatadır.",
    ],
    publishedAt: "2026-10-31",
    readingMinutes: 9,
    tags: ["ARR", "Yıllık Yinelenen Gelir", "SaaS Metrikleri", "Net Yeni ARR", "CARR", "NRR"],
    sections: [
      {
        heading: "ARR nedir? (Kısa cevap)",
        paragraphs: [
          "ARR (Annual Recurring Revenue), Türkçesiyle yıllık yinelenen (tekrarlayan) gelir, abonelik ya da yıllık sözleşmeyle çalışan bir işletmenin belirli bir tarihte aktif olan tüm yinelenen sözleşmelerinin yıllık karşılığıdır. B2B SaaS şirketleri, kurumsal yazılım satıcıları ve yıllık lisans modeliyle çalışan işletmeler büyüklüklerini ve büyümelerini ARR ile ifade eder.",
          "Formül: ARR = Σ (Her aktif sözleşmenin yıllık yinelenen bedeli). Tüm müşteriler aylık plandaysa ARR = MRR × 12 olur. Kritik nokta şudur: ARR bir yıl içinde kasaya giren paranın ya da muhasebe gelirinin toplamı değildir; 'bugünkü müşteri tabanı hiçbir şey değişmezse önümüzdeki 12 ayda ne kadar yinelenen gelir üretir?' sorusunun cevabıdır.",
          "Bu yazıdaki tüm tutarlar örnek tutarlardır ve tek bir örnek B2B SaaS şirketi üzerinden ilerler. Aylık hareketler (yeni, genişleme, kayıp MRR) ve Quick Ratio için MRR yazısına, kendi rakamlarınız için ARR Hesaplayıcı'ya bakabilirsiniz.",
        ],
      },
      {
        heading: "ARR nasıl hesaplanır? Sözleşme bazlı adım adım örnek",
        paragraphs: [
          "Örnek şirketin 31 Aralık 2026 itibarıyla 144 aktif müşterisi var ve üç tür sözleşmesi bulunuyor. ARR her sözleşmenin yıllık yinelenen bedeli toplanarak bulunur; tek seferlik kalemler ve kullanım aşımları dışarıda kalır.",
          "Toplam: 3.024.000 + 3.976.000 + 1.400.000 = 8.400.000 TL ARR. Müşteri başına ortalama ARR (ortalama yıllık sözleşme değeri, ACV) 8.400.000 / 144 ≈ 58.333 TL'dir. Bu ARR'nin aylık karşılığı (MRR) 8.400.000 / 12 = 700.000 TL'dir.",
        ],
        bullets: [
          "Aylık plan (ayda 3.000 TL): 84 müşteri × 3.000 × 12 = 3.024.000 TL",
          "Yıllık sözleşmeler: 50 müşteri, yıllık bedellerin toplamı 3.976.000 TL (ortalama ≈ 79.520 TL)",
          "3 yıllık kademeli sözleşmeler (yıllık 140.000 → 180.000 → 220.000 TL; şu an 1. yılda): 10 müşteri × 140.000 = 1.400.000 TL",
          "Dahil değil: aynı yıl faturalanan 450.000 TL kurulum/entegrasyon ücreti ve Aralık'taki 25.000 TL kullanım aşımı",
        ],
      },
      {
        heading: "ARR'ye neler dahil edilir, neler edilmez?",
        paragraphs: [
          "Kural MRR ile aynıdır: müşteri hiçbir şey yapmasa da sözleşme gereği tekrar edecek gelir ARR'dir. Bir kez olan ya da miktarı belirsiz gelir ARR değildir. Fark, ARR'de yıllık ve çok yıllı sözleşmelerin çok daha büyük yer tutmasıdır; hataların çoğu da burada yapılır.",
        ],
        bullets: [
          "Dahil: aylık planların yıllık karşılığı; yıllık sözleşmelerin yıllık bedeli; sürekli faturalanan ek modül ve kullanıcı paketleri",
          "Dahil (gerçek bedelden): indirimli sözleşmeler — liste fiyatı değil, müşterinin ödediği yıllık tutar",
          "Dahil (taahhüt kadar): kullanım bazlı fiyatlamada sözleşmedeki minimum yıllık taahhüt",
          "Dahil değil: kurulum, eğitim, danışmanlık, entegrasyon gibi tek seferlik hizmetler; tek seferlik lisans satışları",
          "Dahil değil: taahhüt üstü kullanım (aşım) gelirleri — ayrı bir 'kullanım run-rate'i' satırında izlenir",
          "Dahil değil: ücretsiz deneme ve freemium kullanıcıları; imzalanmış ama henüz başlamamış sözleşmeler (bunlar CARR'a girer)",
        ],
      },
      {
        heading: "Çok yıllı ve kademeli (ramp) sözleşmelerde ARR nasıl hesaplanır?",
        paragraphs: [
          "Çok yıllı sözleşmede toplam sözleşme değerini (TCV) tek yılın ARR'sine yazmak en kaba hatadır: 3 yıllık 540.000 TL'lik bir sözleşme ARR'ye 540.000 TL olarak girmez. Daha az fark edilen hata ise TCV'yi yıl sayısına bölmektir.",
          "Örnekteki kademeli sözleşmeler ilk yıl 140.000, ikinci yıl 180.000, üçüncü yıl 220.000 TL. TCV / 3 = 180.000 TL kullanılırsa 10 sözleşme ARR'ye 1.800.000 TL yazılır; oysa müşteriler bugün yıllık 140.000 TL ödüyor. Fark 400.000 TL'dir ve henüz kazanılmamış ikinci-üçüncü yıl artışını bugüne çeker. Daha muhafazakâr ve yaygın yöntem, o an geçerli olan yılın bedelini kullanmak ve kademe yükseldiğinde artışı genişleme ARR'si olarak göstermektir.",
        ],
        bullets: [
          "Eşit bedelli çok yıllı sözleşme: ARR = yıllık bedel (TCV / yıl sayısı ile aynı sonuç)",
          "Kademeli sözleşme: ARR = içinde bulunulan yılın bedeli; kademe artışı geldiği yıl genişleme olarak yazılır",
          "İlk yıl indirimli sözleşme: ARR = indirimli bedel; indirim bitince fark genişleme değil 'indirim bitişi' etiketiyle izlenir",
          "Peşin tahsil edilen çok yıllı bedel: nakitte büyük görünür, ARR'yi değiştirmez",
        ],
      },
      {
        heading: "ARR köprüsü nedir? Yeni, genişleme, daralma ve kayıp ARR",
        paragraphs: [
          "Toplam ARR büyümenin nereden geldiğini göstermez. Bu yüzden yıl (ya da çeyrek) başı ve sonu arasındaki fark dört harekete ayrılır; buna ARR köprüsü (ARR bridge, ARR waterfall) denir. Örnek şirket 2026'ya 120 müşteri ve 6.000.000 TL ARR ile başladı.",
          "Köprü: 6.000.000 + 2.280.000 + 1.020.000 − 240.000 − 660.000 = 8.400.000 TL. Net yeni ARR = Yeni + Genişleme − Daralma − Kayıp = 2.400.000 TL; yıllık ARR büyümesi 2.400.000 / 6.000.000 = %40. Müşteri sayısı 120 + 38 − 14 = 144.",
        ],
        bullets: [
          "Yeni ARR: yıl içinde ilk kez sözleşme imzalayıp başlayan 38 müşteri — 2.280.000 TL (10 kademeli sözleşme × 140.000 = 1.400.000 TL dahil)",
          "Genişleme ARR: mevcut müşterilerin üst plana geçişi, ek kullanıcı/modül ve fiyat artışı — 1.020.000 TL",
          "Daralma ARR: alt plana geçiş, kullanıcı azaltma, yenilemede indirim — 240.000 TL",
          "Kayıp (churn) ARR: yenilemeyen ya da iptal eden 14 müşterinin ARR'si — 660.000 TL",
        ],
      },
      {
        heading: "ARR büyümesi sağlıklı mı? Köprüden NRR ve GRR hesaplama",
        paragraphs: [
          "Aynı köprü, büyümenin yeni satıştan mı yoksa mevcut müşteri tabanından mı geldiğini gösteren iki oranı verir. İkisi de yalnızca yıl başında var olan müşterilerle hesaplanır; yeni müşteriler dahil edilmez.",
          "Yorum: örnek şirketin mevcut müşteri tabanı yıl içinde küçülmedi, hafifçe büyüdü (NRR %102). Ancak GRR %85 demek, yıl başındaki gelirin %15'inin daralma ve kayıpla gittiği anlamına gelir; genişleme bu sızıntıyı ancak kapatıyor. Net yeni ARR'nin %95'i (2.280.000 / 2.400.000) yeni satıştan geldiği için yeni satış yavaşladığı yıl büyüme de hızla düşer. Büyümenin kârlılıkla dengesini Rule of 40 ile, birim ekonomisini CAC ve LTV ile birlikte okuyun.",
        ],
        bullets: [
          "NRR (net gelir tutundurma) = (Başlangıç + Genişleme − Daralma − Kayıp) / Başlangıç = 6.120.000 / 6.000.000 = %102",
          "GRR (brüt gelir tutundurma) = (Başlangıç − Daralma − Kayıp) / Başlangıç = 5.100.000 / 6.000.000 = %85; genişleme dahil edilmediği için %100'ü geçemez",
          "Yıllık logo churn = Kaybedilen müşteri / Başlangıç müşteri = 14 / 120 ≈ %11,7",
          "Yeni satış payı = Yeni ARR / (Yeni + Genişleme) = 2.280.000 / 3.300.000 ≈ %69",
        ],
      },
      {
        heading: "ARR, CARR, run-rate, booking ve ciro arasındaki fark nedir?",
        paragraphs: [
          "Yönetim kurulu sunumlarında ve yatırımcı görüşmelerinde en çok karışan beş kavram aynı şirket için beş farklı rakam üretir. Örnek şirketin 31 Aralık 2026 rakamları aşağıda; hangisini raporladığınızı tanımıyla birlikte yazmak güveni korur.",
          "Run-rate gelir ARR'den yüksek çıktı çünkü Aralık'ta faturalanan 60.000 TL kurulum ücreti ve 25.000 TL kullanım aşımı da 12 ile çarpıldı: (700.000 + 60.000 + 25.000) × 12 = 9.420.000 TL. Tek seferlik bir ayı yıllıklandırmak yanıltıcıdır; bu yüzden ARR yalnızca yinelenen kısmı alır.",
        ],
        bullets: [
          "ARR: 31 Aralık'ta aktif yinelenen sözleşmelerin yıllık karşılığı — 8.400.000 TL",
          "CARR (sözleşmeli ARR): ARR + imzalanmış ama henüz başlamamış sözleşmeler (Şubat'ta başlayacak 3 müşteri, 420.000 TL) − iptal/yenilememe bildirimi gelmiş sözleşmeler (2 müşteri, 150.000 TL) = 8.670.000 TL",
          "Run-rate gelir: son ayın toplam gelirinin × 12'si (tek seferlikler dahil) — 9.420.000 TL",
          "Booking (TCV): yıl içinde imzalanan sözleşmelerin toplam değeri; 10 kademeli sözleşmenin 3 yılı (5.400.000) dahil — 6.280.000 TL",
          "Yıl içinde tanınan abonelik geliri: ARR yıl boyunca 6,0'dan 8,4 milyona doğrusal arttı varsayımıyla ≈ 7.200.000 TL; muhasebe kayıtlarındaki gerçek rakam faturalama tarihlerine göre değişir",
        ],
      },
      {
        heading: "Döviz fiyatlı SaaS'ta ARR nasıl raporlanır?",
        paragraphs: [
          "Fiyatı dolar ya da avro olan ve TL'ye çevrilerek raporlanan bir SaaS'ta kur değişimi tek bir satış yapılmadan ARR'yi oynatır. 100.000 USD ARR örnek kur 40'tan 44'e çıktığında 4.000.000 TL'den 4.400.000 TL'ye yükselir; bu %10'luk 'büyüme' tamamen kurdandır.",
          "Çözüm: ARR'yi fatura para biriminde ve dönem başı sabit kurla raporlayın, kur etkisini köprüde ayrı bir satır olarak gösterin. TL fiyatlı şirketlerde ise yüksek enflasyon döneminde yapılan fiyat artışlarını genişleme ARR'sinde 'fiyat artışı' alt kırılımıyla ayırın; aksi hâlde ürün benimsenmesi kaynaklı genişleme olduğundan büyük görünür.",
        ],
      },
      {
        heading: "ARR hesaplarken en sık yapılan hatalar",
        paragraphs: [
          "Rakiplerin ve birçok sunumun ortak hataları formülde değil tanımdadır. Tanımı bir kez yazılı hâle getirip her dönem aynısını uygulamak ARR'yi karşılaştırılabilir kılar.",
        ],
        bullets: [
          "ARR'yi yıl içinde kazanılan gelirlerin toplamı sanmak (ARR bir tarihteki fotoğraftır)",
          "Çok yıllı sözleşmenin TCV'sini tek yılın ARR'sine yazmak ya da kademeli sözleşmede TCV / yıl ortalamasını kullanmak",
          "Kurulum, danışmanlık ve kullanım aşımlarını ARR'ye eklemek; tek seferlik gelirli bir ayı × 12 ile yıllıklandırmak",
          "İmzalanmış ama başlamamış sözleşmeleri ARR'ye koymak (bunlar CARR'dır)",
          "Yalnızca toplam ARR'yi raporlayıp yeni / genişleme / daralma / kayıp köprüsünü göstermemek",
          "Kur ve enflasyon kaynaklı fiyat artışını büyüme gibi göstermek",
        ],
      },
    ],
    faq: [
      {
        question: "ARR açılımı nedir, Türkçesi ne?",
        answer:
          "ARR, Annual Recurring Revenue'nun kısaltmasıdır; Türkçede yıllık yinelenen gelir ya da yıllık tekrarlayan gelir denir. Belirli bir tarihte aktif olan abonelik ve sözleşmelerin yıllık karşılığını gösterir. Finans derslerinde aynı kısaltma 'muhasebe getiri oranı' (Accounting Rate of Return) için de kullanılır; o, yatırım değerlemesinde kullanılan farklı bir orandır.",
      },
      {
        question: "ARR nasıl hesaplanır?",
        answer:
          "Aktif her sözleşmenin yıllık yinelenen bedelini toplayın: aylık planlar × 12, yıllık sözleşmeler yıllık bedelle, kademeli çok yıllı sözleşmeler o yılın bedeliyle girer. Örnek: 84 × 3.000 × 12 + 3.976.000 + 10 × 140.000 = 8.400.000 TL. Tüm müşteriler aylık plandaysa ARR = MRR × 12'dir.",
      },
      {
        question: "Net yeni ARR nedir?",
        answer:
          "Bir dönemde ARR'deki net değişimdir: Yeni + Genişleme − Daralma − Kayıp ARR. Örnekte 2.280.000 + 1.020.000 − 240.000 − 660.000 = 2.400.000 TL'dir; başlangıç ARR'sine eklendiğinde bitiş ARR'sini verir.",
      },
      {
        question: "ARR ile ciro aynı şey mi?",
        answer:
          "Hayır. Ciro (muhasebe geliri) bir dönem içinde tanınan tüm gelirlerdir ve tek seferlik satışları da içerir. ARR ise bir tarihteki yinelenen sözleşmelerin yıllık karşılığıdır. Yıl içinde büyüyen bir şirkette yılın abonelik geliri yıl sonu ARR'sinden düşük çıkar.",
      },
      {
        question: "CARR nedir, ARR'den farkı ne?",
        answer:
          "CARR (Contracted ARR, sözleşmeli ARR), ARR'ye imzalanmış ama henüz başlamamış sözleşmeleri ekler ve iptal ya da yenilememe bildirimi gelmiş sözleşmeleri düşer. Satış döngüsü uzun, başlangıcı ileri tarihli kurumsal sözleşmelerde ARR'nin önünde giden bir göstergedir.",
      },
    ],
    howTo: {
      name: "ARR nasıl hesaplanır?",
      description: "Aktif sözleşmeleri yıllıklandırıp ARR'yi bulun, ardından yıllık ARR köprüsüyle net yeni ARR'yi, NRR ve GRR'yi hesaplayın.",
      steps: [
        { name: "Aktif sözleşmeleri listeleyin", text: "Hesaplama tarihinde aktif olan tüm abonelik ve sözleşmeleri müşteri bazında çıkarın; deneme, freemium ve başlamamış sözleşmeleri ayırın." },
        { name: "Her sözleşmeyi yıllıklandırın", text: "Aylık planı 12 ile çarpın, yıllık sözleşmede yıllık bedeli, kademeli çok yıllı sözleşmede içinde bulunulan yılın bedelini kullanın." },
        { name: "Tek seferlik ve değişken kalemleri çıkarın", text: "Kurulum, eğitim, danışmanlık ve taahhüt üstü kullanım gelirlerini ARR dışında bırakın." },
        { name: "ARR'yi toplayın", text: "Yıllıklandırılmış bedelleri toplayın: 3.024.000 + 3.976.000 + 1.400.000 = 8.400.000 TL." },
        { name: "ARR köprüsünü kurun", text: "Dönem başı ARR'ye yeni ve genişleme ARR'yi ekleyip daralma ve kayıp ARR'yi düşün; net yeni ARR, büyüme oranı, NRR ve GRR'yi hesaplayın." },
      ],
    },
    relatedToolKey: "arr",
    resources: [
      { label: "ARR Hesaplayıcı", href: "/ucretsiz-araclar/arr-hesaplayici/" },
      { label: "MRR Hesaplayıcı", href: "/ucretsiz-araclar/mrr-hesaplayici/" },
      { label: "NRR Hesaplayıcı", href: "/ucretsiz-araclar/nrr-hesaplayici/" },
      { label: "Rule of 40 Hesaplayıcı", href: "/ucretsiz-araclar/rule-of-40-hesaplayici/" },
      { label: "Churn Rate Hesaplayıcı", href: "/ucretsiz-araclar/churn-rate-hesaplayici/" },
      { label: "Kar Marjı Hesaplama", href: "/ucretsiz-araclar/brut-kar-marji-hesaplayici/" },
      { label: "MRR Nedir, Nasıl Hesaplanır?", href: "/blog/mrr-nedir-nasil-hesaplanir/" },
      { label: "NRR Nedir? SaaS'ta Neden ARR'dan Daha Önemli?", href: "/blog/nrr-nedir-saas-buyume-metrigi/" },
      { label: "Churn Nedir? Churn Rate Nasıl Hesaplanır?", href: "/blog/churn-nedir-churn-rate-nasil-hesaplanir/" },
      { label: "CAC Nedir? Müşteri Edinme Maliyeti Nasıl Hesaplanır?", href: "/blog/cac-nedir-musteri-edinme-maliyeti/" },
      { label: "LTV Nedir? LTV:CAC Oranı Kaç Olmalı?", href: "/blog/ltv-nedir-ltv-cac-orani/" },
      { label: "SaaS Metrikleri: ARR, CAC ve LTV", href: "/blog/saas-metrikleri-arr-cac-ltv/" },
      { label: "Stripe: Yıllık yinelenen gelir (ARR) rehberi (İngilizce)", href: "https://stripe.com/in/resources/more/what-is-annual-recurring-revenue-a-guide-for-saas-businesses", external: true },
    ],
  },
  {
    slug: "geo-nedir-yapay-zeka-arama-optimizasyonu",
    seoTitle: "GEO Nedir? Yapay Zekâ Aramalarında Görünürlük Rehberi",
    title: "GEO Nedir? ChatGPT, Gemini ve AI Overviews'ta Kaynak Gösterilmek: Kanıtlar, Uygulama ve Ölçüm",
    description:
      "GEO (üretken motor optimizasyonu) nedir, SEO'dan farkı ne? Kanıtlanmış yöntemler, AI görünürlüğünü ölçme formülü, GA4 kurulumu ve 30 günlük uygulama planı.",
    category: "yapay-zeka-otomasyon",
    tldr: [
      "GEO (Generative Engine Optimization, üretken motor optimizasyonu), içeriğinizin ChatGPT, Gemini, Perplexity, Copilot ve Google AI Overviews gibi yapay zekâ cevaplarında kaynak gösterilmesi ve doğru anılması için yapılan çalışmadır. Terim 2023'te Princeton ve ortaklarının araştırmasıyla yaygınlaştı.",
      "GEO, SEO'nun yerini almaz; üstüne kurulur. Google, AI Overviews ve AI Mode için ek gereksinim olmadığını, yeni bir 'AI metin dosyası' ya da özel şema gerekmediğini söylüyor: sayfa dizinde ve snippet'e uygun olmalı. AI cevapları kaynaklarını çoğunlukla arama sonuçlarından seçer.",
      "Araştırmada en çok işe yarayanlar alıntı, istatistik ve kaynak eklemekti (görünürlükte %40'a varan artış); anahtar kelime doldurma ise sonucu kötüleştirdi. Pratikte: soruya ilk cümlede cevap, kendi verileriniz ve hesap örnekleriniz, kaynaklı iddialar.",
      "Ölçüm: 20 soru × 3 motor × 2 tekrar = 120 cevaplık bir panelde sitenizin alıntılandığı cevap sayısı / 120 = alıntılanma oranı. Örnekte 9 / 120 = %7,5. GA4'te AI asistanları için ayrı kanal kurun; Google AI Overviews tıklamaları Search Console'da 'Web' içinde ayrılmadan görünür.",
    ],
    publishedAt: "2026-10-31",
    readingMinutes: 10,
    tags: ["GEO", "Yapay Zekâ SEO", "AI Overviews", "ChatGPT", "AEO", "Generative Engine Optimization"],
    sections: [
      {
        heading: "GEO nedir? (Kısa cevap)",
        paragraphs: [
          "GEO (Generative Engine Optimization), Türkçesiyle üretken motor optimizasyonu, bir markanın ya da sayfanın yapay zekâ destekli cevap motorlarında (ChatGPT arama, Google AI Overviews ve AI Mode, Gemini, Perplexity, Microsoft Copilot, Claude) kaynak olarak gösterilmesi, adının doğru bağlamda anılması ve bu cevaplardan tıklama alması için yapılan içerik ve teknik çalışmalardır.",
          "SEO'nun hedefi arama sonuçlarındaki mavi linklerde üst sıralara çıkmaktır; GEO'nun hedefi ise kullanıcıya tek bir sentezlenmiş cevap veren sistemin o cevabı oluştururken sizin sayfanızı kullanması ve göstermesidir. Ölçü birimi sıralama değil, alıntılanma (citation) ve anılmadır (mention).",
          "Terim, Princeton, Georgia Tech, Allen Institute for AI ve IIT Delhi araştırmacılarının 2023'te yayımlayıp KDD 2024'te sunduğu 'GEO: Generative Engine Optimization' makalesiyle yaygınlaştı. Not: 'GEO' pazarlamada coğrafi hedefleme (geo-targeting) anlamında da kullanılır; bu yazı yapay zekâ aramalarındaki anlamı anlatır.",
        ],
      },
      {
        heading: "GEO ile SEO ve AEO arasındaki fark nedir?",
        paragraphs: [
          "Üç kavram birbirinin rakibi değil, iç içe katmanlardır. Google'ın 2026'daki AI arama rehberi de AEO ve GEO'yu ayrı bir disiplin değil SEO'nun parçası olarak tanımlıyor. Farkı en iyi, neyi hedeflediklerine ve nasıl ölçüldüklerine bakarak görürsünüz.",
          "Pratik sonuç: GEO'ya SEO temeli olmadan başlanmaz. Dizinde olmayan, yavaş açılan ya da içeriği yalnızca JavaScript çalışınca beliren bir sayfa ne mavi linklerde ne de AI cevaplarında kaynak olur.",
        ],
        bullets: [
          "SEO: arama motorunda sıralama ve tıklama. Ölçü: gösterim, ortalama konum, tıklama (Search Console)",
          "AEO (Answer Engine Optimization): öne çıkan snippet, 'Diğer kullanıcılar şunları da sordu' ve sesli asistanlarda tek cevap olarak seçilmek. Ölçü: snippet sahipliği",
          "GEO: üretken AI cevaplarında kaynak gösterilmek ve doğru anılmak. Ölçü: alıntılanma oranı, alıntı payı, AI asistanlarından gelen trafik",
          "Ortak zemin: taranabilir ve dizinde sayfa, soruya doğrudan cevap veren yapı, özgün bilgi, güvenilir yazar ve marka sinyalleri",
        ],
      },
      {
        heading: "Yapay zekâ cevap motorları kaynaklarını nasıl seçer?",
        paragraphs: [
          "Çoğu AI arama ürünü cevabı modelin hafızasından değil, o anda yaptığı aramalardan derler: soruyu alt sorulara böler, her biri için arama yapar, bulduğu sayfalardan pasajlar çeker ve bunları sentezleyip kaynak linkleriyle sunar. Google bu yönteme 'query fan-out' diyor ve AI Overviews ile AI Mode'un klasik aramaya göre daha geniş bir destekleyici link seti gösterebildiğini belirtiyor.",
          "Bunun iki sonucu var. Birincisi, kaynak havuzu büyük ölçüde arama indeksidir; dizinde ve üst sıralarda olmak AI'da görünmenin de ön koşuludur. İkincisi, seçilen birim sayfa değil pasajdır: tek başına okunduğunda anlamlı, net cevap veren bir paragraf, uzun bir girişin içine gömülmüş bilgiden çok daha kolay alıntılanır.",
        ],
        bullets: [
          "Google AI Overviews / AI Mode: Google indeksi; ek gereksinim yok, sayfa dizinde ve snippet'e uygun olmalı",
          "ChatGPT arama: OpenAI'ın OAI-SearchBot tarayıcısı; bu botu engelleyen site ChatGPT arama cevaplarında görünmez (GPTBot ise model eğitimi içindir, ayrı yönetilir)",
          "Microsoft Copilot ve Bing AI özetleri: Bing indeksi; Bing Webmaster Tools'taki AI Performance raporu (Şubat 2026'dan beri önizleme) alıntı sayısını gösteriyor",
          "Perplexity ve Claude: kendi arama tarayıcıları (PerplexityBot, Claude-SearchBot); robots.txt ayarları için llms.txt yazısındaki bot tablosuna bakın",
        ],
      },
      {
        heading: "GEO'da ne kanıtlandı, ne kanıtlanmadı?",
        paragraphs: [
          "GEO alanında iddia çok, kanıt az. Karar verirken kaynakları üç düzeye ayırmak işe yarar: platformun kendi resmî dokümanı, kontrollü araştırma ve henüz ölçülmemiş saha iddiaları.",
          "Princeton makalesinin sınırını da bilin: deneyler büyük ölçüde araştırmacıların kurduğu bir test ortamında, o dönemin bir dil modeliyle yapıldı ve yazarlar yöntemlerin etkisinin konu alanına göre değiştiğini vurguluyor. Yani 'alıntı ekle, %40 artsın' bir garanti değil; ama 'anahtar kelime doldurma işe yaramaz, kaynaklı ve somut içerik işe yarar' yönü hem araştırmayla hem de platform rehberleriyle tutarlı.",
        ],
        bullets: [
          "Resmî (Google): AI Overviews ve AI Mode için ek teknik gereksinim, yeni makine okunur dosya, 'AI metin dosyası' ya da özel schema.org işaretlemesi gerekmiyor; görünmeyi sınırlamak için nosnippet, data-nosnippet, max-snippet ve noindex kullanılıyor",
          "Resmî (OpenAI): ChatGPT arama görünürlüğünü OAI-SearchBot belirler; GPTBot'u engellemek arama görünürlüğünü etkilemez",
          "Araştırma (Aggarwal vd., KDD 2024): alıntı ekleme, istatistik ekleme ve kaynak gösterme en etkili yöntemlerdi; görünürlükte %40'a varan artış, gerçek bir üründe (Perplexity) %37'ye varan artış ölçüldü; anahtar kelime doldurma temel düzeyin altında kaldı",
          "Kanıtlanmadı: llms.txt'nin AI alıntısını artırdığı (büyük log çalışmalarında etkisi görülmedi), FAQ/şema işaretlemesinin tek başına alıntı getirdiği, 'AI'a özel' içerik sürümlerinin işe yaradığı",
        ],
      },
      {
        heading: "GEO nasıl yapılır? Sayfa düzeyinde 8 uygulama",
        paragraphs: [
          "Aşağıdaki liste, öncelik sırasına göre dizildi: önce erişim ve dizin, sonra içerik biçimi, en son dış sinyaller. İlk üç madde yapılmadan diğerleri boşa çalışır.",
        ],
        bullets: [
          "1. Erişim: robots.txt, güvenlik duvarı ve bot korumasının Googlebot, Bingbot ve AI arama botlarını (OAI-SearchBot, PerplexityBot, Claude-SearchBot) engellemediğini kontrol edin",
          "2. Dizin: önemli sayfalar Google ve Bing'de dizinde olsun; Search Console'daki 'Keşfedildi – dizine eklenmedi' listesini temizleyin, Bing Webmaster Tools'a site haritası gönderin",
          "3. HTML'de içerik: metin JavaScript çalışmadan da kaynak kodda bulunsun (sunucu tarafı ya da statik üretim)",
          "4. Cevap önce: her soru biçimli başlığın altındaki ilk cümle, başlıktaki soruyu tek başına cevaplasın; tanım + formül + sayı aynı paragrafta olsun",
          "5. Özgün bilgi: kendi hesap örnekleriniz, verileriniz, deneyiminiz ve ekran görüntüleriniz; herkesin yazdığı tanımı tekrar etmek alıntı getirmez",
          "6. Kaynaklı iddialar: istatistik ve iddiaları birincil kaynağa (resmî doküman, araştırma) bağlayın, tarih verin; kaynaksız rakam kullanmayın",
          "7. Güncellik ve yazar: görünür yayın/güncelleme tarihi, gerçek yazar sayfası ve Person/Organization yapısal verisi",
          "8. Dış anılma: sektör yayınlarında, topluluklarda ve listelerde markanızın konuyla birlikte anılması; AI cevapları yalnızca sizin sitenize değil, sizin hakkınızda yazılanlara da bakar",
        ],
      },
      {
        heading: "Alıntılanabilir paragraf nasıl yazılır? Önce / sonra örneği",
        paragraphs: [
          "AI cevapları sayfanızdan bir pasaj seçer; o pasaj bağlamından koparıldığında da doğru ve eksiksiz olmalıdır. En sık hata, cevabın girişin üçüncü paragrafına saklanması ve 'bu', 'yukarıda bahsettiğimiz' gibi önceki metne dayanan ifadelerdir.",
          "Önce: 'Reklam dünyasında birçok metrik var ve bunların en önemlilerinden biri de ROAS'tır. Peki bu metrik ne işe yarar? Gelin birlikte bakalım.' Bu paragraf hiçbir soruyu cevaplamıyor.",
          "Sonra: 'ROAS (reklam harcamasının getirisi), reklamdan elde edilen gelirin reklam harcamasına oranıdır: ROAS = Reklam geliri / Reklam harcaması. 10.000 TL harcamayla 40.000 TL satış yapan kampanyanın ROAS'ı 4'tür.' Tanım, formül ve sayısal örnek tek pasajda; tek başına alıntılandığında da eksiksiz.",
        ],
      },
      {
        heading: "Türkçe aramalarda GEO fırsatı neden büyük?",
        paragraphs: [
          "AI cevap motorları Türkçe bir soruya Türkçe cevap verirken Türkçe kaynak bulamazsa İngilizce kaynakları çevirip kullanır. Bu sitenin 23 Ekim 2026'da yaptığı görünürlük taramasında 'NRR nedir' ve 'GA4 unassigned trafik nasıl düzeltilir' gibi pazarlama sorularında Türkçe aramanın ilk sonuçlarının tamamı İngilizce kaynaktı.",
          "Bu boşluk iki fırsat yaratır. Birincisi, niş ama değerli sorularda ilk kapsamlı Türkçe kaynak olmak, hem klasik sıralamada hem AI alıntısında az rakiple yarışmak demektir. İkincisi, Türkçe pazara özgü bilgi (TL fiyatlı örnekler, yerel pazaryeri ve kargo kuralları, Türkiye'deki reklam maliyeti verileri) çeviriyle üretilemeyeceği için AI motorlarının sizi kaynak göstermesini zorunlu kılar.",
          "Kendi konu listenizi çıkarmak için: müşterilerinizin sorduğu 20 soruyu Türkçe aratın; ilk 10 sonucun çoğu İngilizce, eski ya da formülsüzse o soru GEO için önceliklidir.",
        ],
      },
      {
        heading: "GEO başarısı nasıl ölçülür? Alıntılanma oranı formülü",
        paragraphs: [
          "AI cevapları her sorguda değişir; tek bir deneme ölçüm değildir. Bu yüzden sabit bir soru paneli kurulur, her soru birden fazla motorda ve birden fazla kez sorulur, sonuçlar aynı yöntemle her ay tekrarlanır.",
          "Örnek panel: 20 hedef soru × 3 motor (ChatGPT arama, Gemini, Perplexity) × 2 tekrar = 120 cevap. Siteniz 9 cevapta link olarak kaynak gösterildi, 6 cevapta ise linksiz anıldı. Alıntılanma oranı = 9 / 120 = %7,5; görünürlük oranı (alıntı + anılma) = 15 / 120 = %12,5. Aynı panelde iki rakip 30 ve 21 cevapta kaynak gösterildiyse alıntı payınız 9 / (9 + 30 + 21) = %15'tir.",
          "Panel sonuçlarını trafik verisiyle birlikte okuyun. Alıntı oranı artarken AI asistanlarından gelen oturumlar ve bu oturumların dönüşümü de artıyorsa çalışma işe yarıyordur.",
        ],
        bullets: [
          "Alıntılanma oranı = Sitenizin link olarak kaynak gösterildiği cevap / Toplam cevap",
          "Görünürlük oranı = (Kaynak gösterildiği + linksiz anıldığı cevap) / Toplam cevap",
          "Alıntı payı = Sizin alıntı sayınız / (Sizin + izlenen rakiplerin alıntı sayısı)",
          "Doğruluk kontrolü: markanız anıldığında bilgi doğru mu (fiyat, hizmet, kurucu)? Yanlışsa kaynağı bulup o sayfayı düzeltin",
          "Bing Webmaster Tools › AI Performance: Copilot ve Bing AI özetlerinde alıntı sayısı ve alıntılanan sayfalar",
        ],
      },
      {
        heading: "GA4'te ChatGPT ve AI asistanı trafiği nasıl ayrılır?",
        paragraphs: [
          "ChatGPT, Perplexity, Gemini, Copilot ve Claude'dan gelen ziyaretler GA4'te çoğunlukla 'Referral' kanalında, kaynağı chatgpt.com ya da perplexity.ai gibi görünür. Bunları tek grupta görmek için Yönetici › Veri görünümü › Kanal grupları altında varsayılan grubu kopyalayıp 'AI asistanları' adlı yeni bir kanal ekleyin; koşul: Kaynak, normal ifadeyle eşleşir.",
          "Örnek ifade: ^(chatgpt\\.com|chat\\.openai\\.com|(www\\.)?perplexity\\.ai|gemini\\.google\\.com|copilot\\.microsoft\\.com|claude\\.ai)$. Baştaki ^ ve sondaki $ yalnızca bu alan adlarını yakalar. Kanalı listede 'Referral'ın üstüne taşıyın; GA4 kuralları sırayla uygular ve ilk eşleşen kanal kazanır. Yeni AI ürünleri çıktıkça listeyi güncelleyin.",
          "İki sınır var. Google AI Overviews ve AI Mode tıklamaları Google organik trafiği olarak gelir ve Search Console'da 'Web' arama türünün içinde, ayrılmadan raporlanır. Bazı mobil uygulamalar yönlendiren bilgisini göndermediği için o ziyaretler 'Direct' görünebilir. Kendi paylaştığınız linklerde UTM kullanmak bu kaybı azaltır.",
        ],
      },
      {
        heading: "30 günlük GEO uygulama planı",
        paragraphs: [
          "Küçük bir ekip ya da tek kişilik bir işletme için gerçekçi bir başlangıç planı aşağıda. Her hafta bir öncekinin üzerine kurulur; 30. günün sonunda ilk ölçümü tekrarlayıp karşılaştırırsınız.",
        ],
        bullets: [
          "1. hafta — Temel: 20 soruluk paneli yazın, 3 motorda 2'şer kez sorup başlangıç alıntılanma oranını kaydedin; robots.txt ve bot korumasını kontrol edin; GA4'te AI asistanları kanalını kurun",
          "2. hafta — Dizin: panel sorularına cevap veren sayfalarınızın Google ve Bing'de dizinde olduğunu doğrulayın; eksik olanlar için dizine ekleme isteği gönderin",
          "3. hafta — İçerik: alıntılanmayan 5 sayfanın ilk paragrafını cevap önce biçimine çevirin; her birine kendi hesap örneğinizi ve birincil kaynak linkini ekleyin",
          "4. hafta — Dış sinyal ve ölçüm: bir sektör yayınına uzman görüşü ya da konuk yazı gönderin; paneli aynı yöntemle tekrarlayın ve oranları karşılaştırın",
        ],
      },
    ],
    faq: [
      {
        question: "GEO ne demek, açılımı nedir?",
        answer:
          "GEO, Generative Engine Optimization'ın kısaltmasıdır; Türkçede üretken motor optimizasyonu ya da yapay zekâ arama optimizasyonu denir. İçeriğin ChatGPT, Gemini, Perplexity ve Google AI Overviews gibi AI cevaplarında kaynak gösterilmesini hedefler. Pazarlamada 'geo' ayrıca coğrafi hedefleme anlamında da kullanılır.",
      },
      {
        question: "GEO, SEO'nun yerini alacak mı?",
        answer:
          "Hayır. AI cevap motorları kaynaklarını büyük ölçüde arama indekslerinden seçtiği için GEO, SEO temeli üzerine kurulur. Google da AI Overviews ve AI Mode için ayrı bir gereksinim olmadığını, sayfanın dizinde ve snippet'e uygun olmasının yeterli olduğunu söylüyor.",
      },
      {
        question: "ChatGPT'de sitemin kaynak gösterilmesi için ne yapmalıyım?",
        answer:
          "Önce robots.txt'de OAI-SearchBot'u engellemediğinizden emin olun; ChatGPT arama görünürlüğünü bu bot belirler. Ardından hedef sorulara ilk cümlede cevap veren, kendi örnekleri ve kaynaklı rakamları olan sayfalar yazın ve bu sayfaların arama motorlarında dizinde olmasını sağlayın.",
      },
      {
        question: "llms.txt GEO için gerekli mi?",
        answer:
          "Gerekli değil. Google AI özellikleri için yeni bir 'AI metin dosyası' gerekmediğini söylüyor; büyük log çalışmalarında da llms.txt'nin AI alıntısını artırdığı görülmedi. Düşük maliyetli bir ek olarak eklenebilir ama erişim, dizin ve içerik kalitesinin yerini tutmaz.",
      },
      {
        question: "GEO sonuçları ne zaman görülür?",
        answer:
          "Tek bir süre yoktur. Değişikliğin önce taranması ve dizine yansıması gerekir; AI cevapları da sorgudan sorguya değiştiği için etkiyi aylık panel ölçümüyle izleyin. Yeni ve dizine girmemiş sayfalarda süre, dizine girme süresine bağlıdır.",
      },
    ],
    howTo: {
      name: "GEO nasıl yapılır?",
      description: "Yapay zekâ cevaplarında kaynak gösterilmek için erişim, dizin, içerik ve ölçüm adımlarını sırayla uygulayın.",
      steps: [
        { name: "Soru panelini kurun", text: "Müşterilerinizin sorduğu 20 soruyu yazın, ChatGPT, Gemini ve Perplexity'de ikişer kez sorup alıntılanma oranını kaydedin." },
        { name: "Erişimi kontrol edin", text: "robots.txt, güvenlik duvarı ve bot korumasının Googlebot, Bingbot ve AI arama botlarını engellemediğini doğrulayın." },
        { name: "Dizini doğrulayın", text: "Panel sorularına cevap veren sayfaların Google ve Bing'de dizinde olduğunu kontrol edin, eksikler için dizine ekleme isteği gönderin." },
        { name: "İçeriği cevap önce biçime getirin", text: "Her soru başlığının ilk cümlesinde net cevap, formül ve kendi sayısal örneğinizi verin; iddiaları birincil kaynağa bağlayın." },
        { name: "Ölçümü tekrarlayın", text: "GA4'te AI asistanları kanalını izleyin ve 30 gün sonra paneli aynı yöntemle tekrarlayıp oranları karşılaştırın." },
      ],
    },
    relatedToolKey: "llms-txt",
    resources: [
      { label: "SEO Nedir, Nasıl Yapılır? 2026 Rehberi", href: "/blog/seo-nedir-nasil-yapilir/" },
      { label: "llms.txt Nedir, İşe Yarıyor mu? (2026 verileriyle)", href: "/blog/llms-txt-nedir-ise-yariyor-mu/" },
      { label: "llms.txt Oluşturucu", href: "/ucretsiz-araclar/llms-txt-olusturucu/" },
      { label: "UTM Nedir? UTM Parametreleri Nasıl Kullanılır?", href: "/blog/utm-nedir-utm-parametreleri/" },
      { label: "UTM Link Oluşturucu", href: "/ucretsiz-araclar/utm-link-olusturucu/" },
      { label: "GA4 Unassigned Trafik Nedir, Nasıl Düzeltilir?", href: "/blog/ga4-unassigned-trafik-nedir-nasil-duzeltilir/" },
      { label: "ROAS Nedir, Nasıl Hesaplanır?", href: "/blog/roas-nedir-nasil-hesaplanir/" },
      { label: "Google Search Central: AI özellikleri ve web siteniz (İngilizce)", href: "https://developers.google.com/search/docs/appearance/ai-features", external: true },
      { label: "Aggarwal vd.: GEO: Generative Engine Optimization (arXiv, İngilizce)", href: "https://arxiv.org/abs/2311.09735", external: true },
      { label: "OpenAI: Tarayıcılara genel bakış (İngilizce)", href: "https://developers.openai.com/api/docs/bots", external: true },
      { label: "Bing Webmaster Blog: AI Performance önizlemesi (İngilizce)", href: "https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview", external: true },
      { label: "Search Engine Journal: Google'ın AI arama rehberi (İngilizce)", href: "https://www.searchenginejournal.com/googles-new-ai-search-guide-calls-aeo-and-geo-still-seo/575026/", external: true },
    ],
  },
  {
    slug: "trendyol-komisyon-oranlari-hesaplama",
    seoTitle: "Trendyol Komisyon Oranları 2026 ve Komisyon Hesaplama",
    title: "Trendyol Komisyon Oranları 2026: Komisyon Nasıl Hesaplanır, Barem ve Kampanya Tuzakları (Örnek Hesaplı)",
    description:
      "Trendyol komisyon oranları 2026: kategori aralıkları, komisyon hesaplama formülü, kargo baremi ve hizmet bedeli dahil kesinti, başabaş fiyat ve kampanya örneği.",
    category: "performans-pazarlama",
    tldr: [
      "Trendyol komisyonu kategoriye, markaya, satıcıya ve kampanyaya göre değişir; kamuya açık derlemelerde çoğu kategori %5 ile %27 arasında görünür (telefon %5–7, kozmetik %15–20, giyim ve ayakkabı %18–23). Bağlayıcı oran, satıcı panelinizdeki komisyon tablosunda yazan orandır.",
      "Komisyon = Satış fiyatı × Komisyon oranı. 600 TL'lik bir üründe %20 oranla komisyon 120 TL'dir. Ancak toplam kesinti komisyondan büyüktür: Kesinti = Komisyon + Kargo + Platform hizmet bedeli.",
      "Düşük fiyatlı üründe sabit kesintiler komisyonu geçer: 300 TL'lik tişörtte kesinti fiyatın %48'i, 15.000 TL'lik telefonda %6,6'sıdır (örnek tutarlar).",
      "Kargo baremi eşikleri (200 ve 350 TL) fiyatı küçük bir oynatmayla kârı değiştirir: 205 TL'den 199,90 TL'ye inen bir üründe sipariş başı kâr 0,55 TL'den 28,19 TL'ye çıkıyor.",
    ],
    publishedAt: "2026-11-01",
    readingMinutes: 9,
    tags: ["Trendyol", "Trendyol Komisyon", "Pazaryeri", "E-Ticaret", "Kargo Baremi", "Kâr Hesaplama"],
    sections: [
      {
        heading: "Trendyol komisyon oranları 2026'da ne kadar? (Kısa cevap)",
        paragraphs: [
          "Trendyol'da tek bir komisyon oranı yoktur: oran ürünün kategorisine (ve alt kategorisine), markaya, satıcı seviyesine, satıcıya özel anlaşmalara ve katıldığınız kampanyaya göre değişir. 2026'da yayımlanan kamuya açık derlemelerde çoğu kategori %5 ile %27 arasında görünüyor: cep telefonu ve bilgisayar gibi yüksek fiyatlı elektronikte tek haneli oranlar, kozmetikte %15–20, giyim, ayakkabı, çanta ve aksesuarda %18–23, telefon yedek parçasında %25–27.",
          "Bu aralıklar fikir vermek içindir. Kendi ürününüzün bağlayıcı oranı, satıcı panelinizdeki ticari şartlar bölümünde yer alan komisyon tablosunda (komisyon ve vade tablosu) yazar; ürün yüklerken de kategoriye göre gösterilir. Hesaplarınızı her zaman bu orana göre yapın.",
          "Mağaza açmak ve ürün listelemek ücretsizdir; komisyon yalnızca gerçekleşen satıştan alınır. Ama satıcının hakedişinden düşen tek kalem komisyon değildir: kargo ve sipariş başı sabit bir platform hizmet bedeli de kesilir. Bu yazı üçünü birlikte hesaplar.",
        ],
      },
      {
        heading: "Neden her sitede farklı Trendyol komisyon oranı yazıyor?",
        paragraphs: [
          "Türkçe aramada ilk sıralardaki rehberleri yan yana koyduğumuzda aynı kategori için farklı rakamlar çıkıyor; hatta tek bir yazının içinde bile giyim için üç farklı aralık verildiğini gördük. Nedeni üç tanedir: (1) rakamlar farklı tarihlerde derlenmiş (Ocak ile Temmuz 2026 arası), (2) bazı listeler oranı farklı esasla (vergi dahil/hariç) yazıyor, (3) oran alt kategoriye ve satıcıya göre değiştiği için her liste bir 'ortalama' seçiyor.",
          "Aşağıdaki karşılaştırma resmî bir tablo değil; üç yaygın Türkçe kaynağın 2026 değerleridir ve bir oranı neden panelden doğrulamanız gerektiğini gösterir.",
        ],
        bullets: [
          "Giyim / ayakkabı / çanta: Paraşüt (Ocak 2026) %21,5–22,5 · BirFatura (Temmuz 2026) %21,36 · Fikri (Temmuz 2026) %18",
          "Kozmetik ve kişisel bakım: Paraşüt %17–20 · BirFatura %17–20 · Fikri %15",
          "Cep telefonu: Paraşüt %5–6 · BirFatura %5–7 · Fikri %7",
          "Beyaz eşya: Paraşüt %9–11 · BirFatura %9–11",
          "Mobilya: Paraşüt %20–22 · BirFatura %20–22",
          "Süpermarket / gıda: Paraşüt %10–15 · BirFatura %10–15",
          "Oyuncak: Paraşüt %20–22 · BirFatura %16,5",
          "Telefon yedek parça: Paraşüt %25–27 · BirFatura %25–27",
        ],
      },
      {
        heading: "Trendyol komisyonu nasıl hesaplanır? (Formül)",
        paragraphs: [
          "Komisyon, ürünün müşteriye satıldığı fiyat üzerinden hesaplanır: Komisyon = Satış fiyatı × Komisyon oranı. Kampanyada ürünü indirimli satıyorsanız komisyon indirimli fiyat üzerinden alınır; 1.000 TL'lik ürünü 900 TL'ye sattığınızda oran 900 TL'ye uygulanır.",
          "Örnek: 600 TL'ye satılan, komisyon oranı %20 olan bir üründe komisyon 600 × 0,20 = 120 TL'dir. Satıcının hesabına geçen tutarı bulmak için buna kargo ve platform hizmet bedelini eklemeniz gerekir.",
          "Bu yazıdaki tüm hesaplar vergiyi dışarıda bırakan örnek tutarlarla yapılmıştır; amaç kesintilerin birbirine göre büyüklüğünü göstermektir. Vergi dahil eksiksiz hesap için Trendyol Komisyon ve Kâr Hesaplama aracını kullanabilirsiniz.",
        ],
        bullets: [
          "Komisyon = Satış fiyatı × Komisyon oranı",
          "Toplam kesinti = Komisyon + Kargo ücreti + Platform hizmet bedeli",
          "Hakediş (hesabınıza geçen) = Satış fiyatı − Toplam kesinti",
          "Sipariş başı kâr = Hakediş − Ürün maliyeti − Paketleme − (iade ve reklam payı)",
        ],
      },
      {
        heading: "Komisyon dışında hangi kesintiler var?",
        paragraphs: [
          "Platform hizmet bedeli: teslim edilen her gönderi için alınan sabit bir tutardır; iade paketlerinde alınmaz. Ekim 2026 itibarıyla kamuya açık kaynaklarda gönderi başına 10,99 TL olarak geçiyor; Haziran 2026'da 'Bugün Kargoda' etiketli ve aynı gün kargoya verilen paketler için daha düşük bir tutar duyuruldu. Tutar yıl içinde birkaç kez değiştiği için Satıcı Bilgi Merkezi'nden güncelini kontrol edin.",
          "Kargo: Trendyol'un anlaşmalı kargo modelinde ücret iki şekilde belirlenir. Sepet tutarı 350 TL'nin altındaysa barem denen sabit tarife uygulanır (26 Mart 2026'dan beri eşikler 200 ve 350 TL); 350 TL ve üzerinde ise ücret paketin desisine göre hesaplanır (desi = en × boy × yükseklik / 3000, ağırlıkla karşılaştırılıp büyük olan alınır).",
          "10 Ağustos 2026 tarifesinden örnek tutarlar (Trendyol Express, 1 günde kargoya verme): 0–199,99 TL sepette 38,74 TL, 200–349,99 TL sepette 70,41 TL; 350 TL ve üzerinde 0–2 desi 81,95 TL, 5 desi 114,10 TL, 10 desi 164,18 TL. Standart termin, farklı kargo firması ve barem koşulları (desi sınırı, kargoya verme süresi) tutarı değiştirir; kendi tarifenizi panelden alın.",
        ],
      },
      {
        heading: "Kategori örnekleriyle Trendyol kesinti hesabı",
        paragraphs: [
          "Komisyon oranı yüksek görünen ürün her zaman en çok kesintiye uğrayan ürün değildir. Kargo ve hizmet bedeli sabit olduğu için düşük fiyatlı ürünlerde toplam kesintinin fiyata oranı hızla büyür. Aşağıdaki üç örnekte hizmet bedeli 10,99 TL, kargo yukarıdaki örnek tarifedir (tutarlar örnek tutarlardır).",
          "Sonuç: 300 TL'lik bir tişörtü satan satıcı, ürün maliyetini ödemeden önce fiyatın neredeyse yarısını kesintiye bırakıyor. Bu yüzden düşük fiyatlı kategorilerde komisyon pazarlığından çok sepet tutarını büyütmek (çoklu paket, set ürün) ve barem kademesini yönetmek kâra daha çok etki eder.",
        ],
        bullets: [
          "Giyim, 300 TL tişört, örnek oran %21, barem 200–349,99 TL: komisyon 63 TL + kargo 70,41 TL + hizmet 10,99 TL = 144,40 TL kesinti (fiyatın %48,1'i); hakediş 155,60 TL",
          "Kozmetik, 450 TL ürün, örnek oran %17, 1 desi: komisyon 76,50 TL + kargo 81,95 TL + hizmet 10,99 TL = 169,44 TL kesinti (%37,7); hakediş 280,56 TL",
          "Cep telefonu, 15.000 TL, örnek oran %6, 2 desi: komisyon 900 TL + kargo 81,95 TL + hizmet 10,99 TL = 992,94 TL kesinti (%6,6); hakediş 14.007,06 TL",
        ],
      },
      {
        heading: "Kargo baremi eşiği kârı nasıl değiştirir?",
        paragraphs: [
          "Barem eşiklerinin hemen üstünde fiyatlanan ürünler, birkaç liralık fiyat farkı için kargoda onlarca lira fazla öder. Rakip rehberler bu etkiden söz ediyor ama hesaplamıyor; iki örnekle bakalım (örnek oran %21 ve %17, hizmet bedeli 10,99 TL, ürün maliyeti 80 TL).",
          "Alt eşik (200 TL): 205 TL'ye satılan ürün 200–349,99 TL baremine düşer. Kesinti 43,05 + 70,41 + 10,99 = 124,45 TL, hakediş 80,55 TL; 80 TL maliyetle sipariş başı kâr 0,55 TL. Aynı ürün 199,90 TL'ye inerse kesinti 41,98 + 38,74 + 10,99 = 91,71 TL, hakediş 108,19 TL ve kâr 28,19 TL olur. Fiyatı 5,10 TL düşürmek kârı 27,64 TL artırıyor.",
          "Üst eşik (350 TL): 5 desilik bir ürün 345 TL'de barem tarifesiyle 70,41 TL kargo öder ve hakediş 204,95 TL olur. Fiyat 355 TL'ye çıkarsa sepet desi tarifesine geçer (5 desi 114,10 TL) ve hakediş 169,56 TL'ye düşer: 10 TL daha pahalı satıp 35,39 TL daha az kazanırsınız. Fiyat değiştirmeden önce ürünün hangi kargo kademesine düştüğünü mutlaka kontrol edin.",
        ],
      },
      {
        heading: "Trendyol'da başabaş satış fiyatı nasıl bulunur?",
        paragraphs: [
          "Komisyon fiyatla birlikte büyüdüğü için başabaş fiyatı 'maliyet + kesintiler' diye toplayarak bulamazsınız. Doğru formül: Başabaş fiyat = (Ürün maliyeti + Kargo + Hizmet bedeli + Paketleme) / (1 − Komisyon oranı). Hedef bir kâr marjı istiyorsanız paydaya onu da ekleyin: Hedef fiyat = (Maliyet + Kargo + Hizmet + Paketleme) / (1 − Komisyon oranı − Hedef marj).",
          "Örnek: 90 TL maliyetli, 5 TL paketlemeli bir tişört, %21 komisyon, 70,41 TL barem kargosu ve 10,99 TL hizmet bedeliyle başabaş fiyat (90 + 70,41 + 10,99 + 5) / 0,79 = 223,29 TL'dir. Satıştan %15 kâr payı istiyorsanız fiyat (176,40) / 0,64 = 275,63 TL olmalıdır. İki fiyat da 200–349,99 TL baremi içinde kaldığı için hesap tutarlıdır; sonuç başka bir kademeye düşerse kargoyu o kademeyle değiştirip yeniden hesaplayın.",
          "Bu hesaba iade ve reklam payı eklenmedi. İade oranı yüksek kategorilerde ve reklam verdiğiniz ürünlerde gerçek başabaş fiyat daha yüksektir; aşağıdaki iki bölüm bunları ekler.",
        ],
      },
      {
        heading: "Komisyon indirimli kampanya teklifi kârlı mı?",
        paragraphs: [
          "Pazaryerleri bazı kampanyalarda fiyatı düşürmeniz karşılığında daha düşük komisyon önerebilir. Teklif cazip görünse de sipariş başı kâr genellikle düşer; kampanyanın kârlı olması için satış adedinin yeterince artması gerekir.",
          "Örnek: 300 TL maliyetli, 81,95 TL kargolu bir ürün 600 TL'de %20 komisyonla satılırken sipariş başı kâr 600 − 120 − 81,95 − 10,99 − 300 = 87,06 TL'dir. Teklif 540 TL fiyat ve %16 komisyon ise kâr 540 − 86,40 − 81,95 − 10,99 − 300 = 60,66 TL'ye iner. Aynı toplam kârı yakalamak için satış adedinin 87,06 / 60,66 = 1,435 kat, yani en az %43,5 artması gerekir.",
          "Karar kuralı: Gerekli satış artışı = Mevcut sipariş başı kâr / Kampanyalı sipariş başı kâr − 1. Ürünün geçmiş kampanyalarda bu artışı gerçekten yakalayıp yakalamadığına bakın; yakalamıyorsa teklif hacim getirir ama kâr götürür.",
        ],
      },
      {
        heading: "İade edilen siparişte komisyon ve kargo ne olur?",
        paragraphs: [
          "Kamuya açık satıcı rehberlerine göre iade edilen siparişin komisyonu satıcıya iade edilir (sonraki faturada mahsup edilir). Ancak gidiş kargosu, çoğu durumda dönüş kargosu ve paketleme satıcıya kalır. Yani iade 'sıfır' değil, kargo kadar zarardır.",
          "Sipariş başına dağıtılmış iade maliyeti = İade oranı × (Gidiş kargo + Dönüş kargo + Paketleme). Örnek: %10 iade oranı, 81,95 TL gidiş, 81,95 TL dönüş (örnek) ve 5 TL paketlemeyle her siparişe 0,10 × 168,90 = 16,89 TL iade maliyeti biner. Giyim ve ayakkabı gibi iade oranı yüksek kategorilerde bu kalem komisyon farkından daha büyük olabilir.",
        ],
      },
      {
        heading: "Trendyol reklamıyla birlikte ne kadar harcayabilirim?",
        paragraphs: [
          "Kesintiler ve iade payı düşüldükten sonra kalan tutar, sipariş başı harcayabileceğiniz reklam bütçesinin üst sınırıdır. Kozmetik örneğinde 280,56 TL hakedişten 150 TL ürün maliyeti, 5 TL paketleme ve 16,89 TL iade payı düşülürse reklam öncesi kâr 108,67 TL kalır. Başabaş ROAS = Satış fiyatı / Reklam öncesi kâr = 450 / 108,67 ≈ 4,1: Trendyol reklamlarında ya da Meta ve Google'da bu ürün için 4,1'in altındaki her ROAS zarar demektir.",
          "Hedef ROAS'ı belirlerken bu eşiğin üstünde bir kâr payı bırakın. ROAS'ın marjla ilişkisini ROAS nedir yazısında, hedef ROAS'ı marjdan hesaplamayı hedef ROAS rehberinde anlattık.",
        ],
      },
      {
        heading: "Trendyol komisyonunu düşürmenin yolları",
        paragraphs: [
          "Komisyon oranını doğrudan pazarlık etmek çoğu satıcı için mümkün değildir; ama ödediğiniz toplam kesintiyi azaltmanın birkaç yolu vardır. Program koşulları ve oranlar sık değiştiği için her maddeyi satıcı panelinden doğrulayın.",
        ],
        bullets: [
          "Doğru kategori: ürünü en uygun alt kategoride listeleyin; yanlış kategori hem farklı oran hem görünürlük kaybı demektir",
          "Yeni satıcı dönemi ve programlar: kamuya açık kaynaklar yeni satıcılara belirli bir süre özel oran ve kadın girişimci programında daha düşük oranlar uygulandığını belirtiyor; koşullar panelde",
          "Satıcı seviyesi: performans puanı ve seviye yükseldikçe bazı kampanya ve oran avantajlarına erişim artar",
          "Kampanya tekliflerini hesapla seçin: yukarıdaki formülle gerekli satış artışını hesaplamadan kabul etmeyin",
          "Komisyon dışı kesintileri yönetin: barem eşiği, desi (kutu küçültme), aynı gün kargoya verme ve iade oranı çoğu üründe komisyon farkından daha fazla kâr kazandırır",
        ],
      },
    ],
    faq: [
      {
        question: "Trendyol komisyon oranları kaç?",
        answer:
          "Kategoriye, markaya, satıcıya ve kampanyaya göre değişir; 2026'daki kamuya açık derlemelerde çoğu kategori %5–27 aralığında görünür (telefon %5–7, kozmetik %15–20, giyim ve ayakkabı %18–23). Kendi ürününüzün bağlayıcı oranı satıcı panelindeki komisyon tablosunda yazar.",
      },
      {
        question: "Trendyol komisyonu nasıl hesaplanır?",
        answer:
          "Komisyon = Satış fiyatı × Komisyon oranı. 600 TL'lik bir üründe %20 oranla komisyon 120 TL'dir. Hesabınıza geçecek tutar için kargo ücretini ve sipariş başı platform hizmet bedelini de düşün; indirimli satışta komisyon indirimli fiyattan alınır.",
      },
      {
        question: "Trendyol'da kargo ücretini kim öder?",
        answer:
          "Anlaşmalı kargo modelinde kargo ücreti satıcının hakedişinden düşülür. 350 TL altındaki sepetlerde barem denen sabit tarifeler (200 ve 350 TL eşikleriyle), 350 TL ve üzerinde desiye göre ücret uygulanır. Güncel tutarları satıcı panelinden kontrol edin.",
      },
      {
        question: "Trendyol platform hizmet bedeli ne kadar?",
        answer:
          "Teslim edilen her gönderi için alınan sabit bir tutardır; Ekim 2026 itibarıyla kamuya açık kaynaklarda 10,99 TL olarak geçiyor ve iade paketlerinde alınmıyor. 'Bugün Kargoda' koşulunu sağlayan gönderilerde daha düşük tutar uygulanıyor. Tutar sık güncellendiği için Satıcı Bilgi Merkezi'nden doğrulayın.",
      },
      {
        question: "Trendyol'da mağaza açmak ücretli mi?",
        answer:
          "Hayır, mağaza açmak ve ürün listelemek ücretsizdir; aylık abonelik yoktur. Komisyon, kargo ve hizmet bedeli yalnızca gerçekleşen satışlardan kesilir.",
      },
    ],
    howTo: {
      name: "Trendyol komisyonu ve sipariş başı kâr nasıl hesaplanır?",
      description: "Komisyon, kargo ve hizmet bedelini düşerek hakedişi, ardından maliyet, iade ve reklam payıyla gerçek kârı bulun.",
      steps: [
        { name: "Komisyon oranını panelden alın", text: "Satıcı panelindeki komisyon tablosundan ürününüzün alt kategorisine ve kampanyasına ait oranı bulun." },
        { name: "Komisyonu hesaplayın", text: "Satış fiyatını komisyon oranıyla çarpın; indirimli satışta indirimli fiyatı kullanın." },
        { name: "Kargo kademesini belirleyin", text: "Sepet tutarı 350 TL'nin altındaysa ilgili barem tutarını, üstündeyse paketin desisine karşılık gelen tarifeyi kullanın." },
        { name: "Hakedişi bulun", text: "Satış fiyatından komisyon, kargo ve platform hizmet bedelini düşün." },
        { name: "Gerçek kârı hesaplayın", text: "Hakedişten ürün maliyeti, paketleme ve sipariş başına dağıtılmış iade maliyetini düşün; kalan tutar reklam için üst sınırınızdır." },
      ],
    },
    relatedToolKey: "marketplace",
    resources: [
      { label: "Dropshipping Nedir? İade Dahil Kâr Hesabı", href: "/blog/dropshipping-nedir-nasil-yapilir/" },
      { label: "İndirim Hesaplama: İndirimli Fiyat ve Kâr Etkisi", href: "/ucretsiz-araclar/indirim-hesaplama/" },
      { label: "Trendyol Reklam Nasıl Verilir? Maliyet ve Kâr Hesabı", href: "/blog/trendyol-reklam-nasil-verilir/" },
      { label: "Trendyol Komisyon ve Kâr Hesaplama (+ Hepsiburada)", href: "/ucretsiz-araclar/trendyol-hepsiburada-kar-hesaplama/" },
      { label: "Kargo Ücreti Hesaplama: Tarifeyle Koli Başı Fiyat", href: "/ucretsiz-araclar/kargo-ucreti-hesaplama/" },
      { label: "Desi Hesaplama: Kargo Desi Hesaplama Aracı", href: "/ucretsiz-araclar/desi-hesaplama/" },
      { label: "Kar Marjı Nasıl Hesaplanır? Kar Oranı (Markup) Farkı", href: "/blog/kar-marji-nasil-hesaplanir/" },
      { label: "Kar Marjı Hesaplama: Brüt Kar Marjı Hesaplayıcı", href: "/ucretsiz-araclar/brut-kar-marji-hesaplayici/" },
      { label: "ROAS Nedir, Nasıl Hesaplanır?", href: "/blog/roas-nedir-nasil-hesaplanir/" },
      { label: "ROAS Hesaplayıcı", href: "/ucretsiz-araclar/roas-hesaplayici/" },
      { label: "Hedef ROAS Nasıl Belirlenir?", href: "/blog/hedef-roas-nasil-belirlenir/" },
      { label: "Black Friday 2026 Reklam Planı", href: "/blog/black-friday-2026-reklam-plani/" },
      { label: "Trendyol Satıcı Bilgi Merkezi: Platform Hizmet Bedeli", href: "https://akademi.trendyol.com/tr/satici-bilgi-merkezi/detay/platform-hizmet-bedeli", external: true },
      { label: "Trendyol Satıcı Bilgi Merkezi: Trendyol Komisyonları", href: "https://akademi.trendyol.com/tr/satici-bilgi-merkezi/detay/trendyol-komisyonlari", external: true },
      { label: "Trendyol Satıcı Bilgi Merkezi: Kargo Baremi Uygulaması", href: "https://akademi.trendyol.com/tr/satici-bilgi-merkezi/detay/kargo-baremi-uygulamasi", external: true },
    ],
  },
  {
    slug: "google-ads-nedir-nasil-calisir",
    seoTitle: "Google Ads Nedir, Nasıl Çalışır? Maliyet ve Örnek Hesap",
    title: "Google Ads Nedir, Nasıl Çalışır? Açık Artırma, Kalite Puanı, Maliyet ve Kampanya Türleri (2026)",
    description:
      "Google Ads nedir, nasıl çalışır? Açık artırma ve gerçek TBM, kalite puanı, bütçe kuralları, 2026 kampanya türleri, teklif stratejileri ve TL ile maliyet örneği.",
    category: "performans-pazarlama",
    tldr: [
      "Google Ads, Google'ın reklam platformudur: Google Arama, YouTube, Gmail, Discover, Haritalar ve Google'ın iş ortağı sitelerinde reklam göstermenizi sağlar. Arama reklamlarında çoğunlukla tıklama başına ödersiniz (TBM).",
      "Her aramada bir açık artırma yapılır. Reklamınızın yeri teklifiniz, reklam ve açılış sayfası kalitesi ve arama bağlamından oluşan Reklam Sıralaması ile belirlenir. Ödediğiniz gerçek TBM, genellikle maksimum teklifinizden düşüktür: altınızdaki rakibi ve eşiği geçmeye yetecek kadar ödersiniz.",
      "Kalite Puanı (1–10) açık artırmaya giren bir değer değil, teşhis aracıdır; ama bileşenleri (beklenen TO, reklam alaka düzeyi, açılış sayfası deneyimi) Reklam Sıralamasını etkiler.",
      "Maliyet hesabı: EBM = TBM / Dönüşüm oranı. 8 TL TBM ve %2 dönüşüm oranıyla satış başı maliyet 400 TL'dir; %40 marjlı 1.200 TL'lik siparişte başabaş EBM 480 TL olduğu için kampanya kârlıdır. Günlük 500 TL bütçe ayda en fazla 15.200 TL harcar.",
    ],
    publishedAt: "2026-11-01",
    readingMinutes: 9,
    tags: ["Google Ads", "Google Reklam", "TBM", "Kalite Puanı", "Performans Pazarlama", "PPC"],
    sections: [
      {
        heading: "Google Ads nedir? (Kısa cevap)",
        paragraphs: [
          "Google Ads, işletmelerin Google Arama sonuçlarında, YouTube'da, Gmail'de, Discover akışında, Google Haritalar'da ve Google'ın iş ortağı web sitelerinde ve uygulamalarında reklam göstermesini sağlayan ücretli reklam platformudur. 2018'e kadarki adı Google AdWords'tü.",
          "En bilinen kullanımı arama reklamlarıdır: biri 'kargo desi hesaplama' ya da 'muhasebe programı' gibi bir sorgu aradığında, o sorgu için teklif veren reklamverenler arasından seçilen reklamlar sonuçların üstünde ve altında 'Sponsorlu' etiketiyle görünür. Reklamveren reklam gösterildiği için değil, çoğunlukla tıklandığında öder; buna tıklama başına maliyet (TBM) denir.",
          "Google Ads'in diğer reklam kanallarından farkı niyettir: arama reklamı, kullanıcı ihtiyacını kendisi yazdığı anda gösterilir. Bu yüzden talebi zaten var olan ürün ve hizmetlerde genellikle en hızlı dönüşüm getiren kanaldır; talebin henüz oluşmadığı yeni bir kategoride ise Meta ve YouTube gibi talep yaratan kanallarla birlikte düşünülmelidir.",
        ],
      },
      {
        heading: "Google Ads nasıl çalışır? Açık artırma ve Reklam Sıralaması",
        paragraphs: [
          "Her arama yapıldığında, o sorguya uygun reklamverenler arasında milisaniyeler içinde bir açık artırma yapılır. Açık artırma yalnızca en yüksek teklifi verenin kazandığı bir yarış değildir; Google her reklam için bir Reklam Sıralaması (Ad Rank) hesaplar ve reklamların gösterilip gösterilmeyeceğini ve hangi sırada çıkacağını buna göre belirler.",
          "Google'ın Yardım Merkezi'ne göre Reklam Sıralaması şu unsurlardan oluşur: maksimum TBM teklifiniz, beklenen tıklama oranı, reklamın aramayla alaka düzeyi, açılış sayfası deneyimi, açık artırmanın rekabet düzeyi, aramanın bağlamı (konum, cihaz, saat, arama terimi) ve reklam öğelerinin (site bağlantıları, telefon, görseller) beklenen etkisi. Bu yüzden daha alakalı bir reklam ve daha iyi bir açılış sayfası, daha düşük teklifle daha üst sırada çıkabilir.",
          "Reklamın görünebilmesi için Reklam Sıralamasının bir eşiği de geçmesi gerekir. Sonuçların üstündeki konumların eşiği, altındakilerden yüksektir; bu yüzden üst konumlarda ödenen TBM genellikle daha yüksektir.",
        ],
      },
      {
        heading: "Gerçek TBM nasıl belirlenir? Google'ın örneği",
        paragraphs: [
          "Ödediğiniz tutar maksimum teklifiniz değildir. Gerçek TBM, Reklam Sıralamanızı korumak için gereken minimum tutardır: hemen altınızdaki reklamverenin Reklam Sıralamasını ve ilgili eşiği geçmeye yetecek kadar ödersiniz. Altınızda uygun bir rakip yoksa yalnızca eşiği geçecek tutarı ödersiniz. Akıllı teklif stratejileri ve teklif ayarlamaları kullanmıyorsanız maksimum TBM'nizden fazlasını ödemezsiniz.",
          "Google'ın kendi örneği: beş reklamverenin Reklam Sıralaması 80, 50, 30, 10 ve 5; sonuçların üstü için eşik 40, altı için 8. 80 ve 50 üst konumlara çıkar; 80'li reklamveren 50'yi geçecek kadar, 50'li reklamveren ise altında 40'ı geçen kimse olmadığı için 40 eşiğini geçecek kadar öder. 30 ve 10 alt konumlara çıkar ve aynı mantıkla öder. 5, alt eşiği de geçemediği için hiç gösterilmez.",
          "Pratik sonuç: teklifi artırmak tek yol değildir. Reklam metnini aranan kelimeyle eşleştirmek ve açılış sayfasını aynı vaatle açmak, aynı konum için daha az ödemenizi sağlayabilir.",
        ],
      },
      {
        heading: "Kalite Puanı nedir, açık artırmayı etkiler mi?",
        paragraphs: [
          "Kalite Puanı, anahtar kelime düzeyinde 1–10 arası bir ölçektir ve üç bileşenden oluşur: beklenen tıklama oranı, reklam alaka düzeyi ve açılış sayfası deneyimi. Her bileşen, son 90 günde aynı aramada reklam gösteren diğer reklamverenlere göre 'Ortalamanın üzerinde', 'Ortalama' ya da 'Ortalamanın altında' diye derecelendirilir.",
          "Türkçe rehberlerde sık yapılan bir hata, Kalite Puanının açık artırmada doğrudan kullanıldığını söylemektir. Google açıkça 'Kalite Puanı, reklam açık artırmasına bir giriş değildir' der; o bir teşhis aracıdır. Açık artırmada gerçek zamanlı olarak değerlendirilen şey, aynı üç bileşenin o aramaya özgü tahminleridir. Yani Kalite Puanının kendisini yükseltmeye çalışmak yerine, puanın gösterdiği zayıf bileşeni düzeltin.",
        ],
        bullets: [
          "Beklenen TO düşükse: başlıkta aranan ifadeyi ve somut bir fayda kullanın, alakasız aramaları negatif kelimeyle kesin",
          "Reklam alaka düzeyi düşükse: farklı niyetteki kelimeleri ayrı reklam gruplarına ayırın",
          "Açılış sayfası deneyimi düşükse: reklamdaki vaadi ilk ekranda karşılayın, mobilde hızlı açılan bir sayfa kullanın",
        ],
      },
      {
        heading: "Google Ads maliyeti nasıl hesaplanır? TL ile örnek",
        paragraphs: [
          "Google Ads'te sabit bir fiyat yoktur; tıklama maliyeti sektöre, kelimenin niyetine, rekabete, konuma ve sezona göre değişir. Bu yüzden 'Google reklamı ne kadar?' sorusunun doğru cevabı bir rakam değil, kendi kârlılık eşiğinizi hesaplayan bir formüldür.",
          "Örnek (örnek tutarlar): ortalama sipariş 1.200 TL, brüt kâr marjı %40. Sipariş başı brüt kâr 480 TL'dir; bu, bir satış için ödeyebileceğiniz maksimum maliyettir (başabaş EBM) ve başabaş ROAS 1.200 / 480 = 2,5 demektir. Kelimelerinizde ortalama TBM 8 TL, sitenizin dönüşüm oranı %2 ise satış başı maliyet 8 / 0,02 = 400 TL olur. 400 TL, 480 TL'lik eşiğin altında olduğu için kampanya sipariş başına 80 TL brüt kâr bırakır; ROAS 1.200 / 400 = 3'tür.",
          "Aynı hesabı tersten yapınca ödeyebileceğiniz en yüksek TBM'yi bulursunuz: Maks. TBM = Başabaş EBM × Dönüşüm oranı = 480 × 0,02 = 9,60 TL. Planlayıcıda kelimelerinizin TBM tahmini bunun çok üstündeyse önce dönüşüm oranını ya da sipariş değerini artırmanız gerekir. B2B'de aynı formül lead için çalışır: 15 TL TBM ve %5 form dönüşümüyle lead başı maliyet 300 TL'dir.",
        ],
        bullets: [
          "EBM (satış/lead başı maliyet) = TBM / Dönüşüm oranı",
          "Başabaş EBM = Sipariş başı brüt kâr = Sipariş değeri × Brüt marj",
          "Maks. TBM = Başabaş EBM × Dönüşüm oranı",
          "ROAS = Reklam geliri / Reklam harcaması; başabaş ROAS = 1 / Brüt marj",
        ],
      },
      {
        heading: "Günlük bütçe nasıl çalışır? Aylık harcama sınırı",
        paragraphs: [
          "Google Ads'te kampanya başına ortalama günlük bütçe belirlersiniz. Google, aramaların yoğun olduğu günlerde günlük bütçenin 2 katına kadar harcayabilir; ancak bir ayda ödeyeceğiniz tutar, günlük bütçenin ayın ortalama gün sayısıyla (30,4) çarpımını geçmez.",
          "Örnekle devam edelim: günlük 500 TL bütçe, bazı günler 1.000 TL'ye kadar harcayabilir ama ay boyunca en fazla 500 × 30,4 = 15.200 TL harcanır. 8 TL TBM ile bu, ayda yaklaşık 1.900 tıklama; %2 dönüşüm oranıyla yaklaşık 38 satış, 45.600 TL gelir ve 3.040 TL reklam sonrası brüt kâr demektir (günde ortalama 62 tıklama, 1,25 satış).",
          "Günde 1–2 satış, akıllı teklif stratejilerinin öğrenmesi için azdır. Bütçe küçükse kampanyayı az sayıda yüksek niyetli kelimeye odaklayın ya da teklif stratejisini, daha sık gerçekleşen bir dönüşüm olayı (örneğin sepete ekleme değil, ödeme başlatma) üzerinden kurmayı değerlendirin; asıl satış ölçümünü her zaman ayrıca izleyin.",
        ],
      },
      {
        heading: "Google Ads kampanya türleri nelerdir? (2026)",
        paragraphs: [
          "Kampanya türü, reklamınızın nerede ve hangi biçimde gösterileceğini belirler. Rakip rehberlerde yeniden pazarlama (remarketing) bir kampanya türü gibi anlatılır; aslında o bir kitle hedeflemesidir ve birçok kampanya türünde kullanılır.",
        ],
        bullets: [
          "Arama: Google Arama sonuçlarında metin reklamları; talebi var olan ürün ve hizmetler için başlangıç noktası",
          "Performance Max: tek kampanyayla Arama, YouTube, Görüntülü Reklam Ağı, Discover, Gmail ve Haritalar envanteri; dönüşüm hedefine göre yapay zekâ dağıtır. Dönüşüm ölçümü sağlam olmadan başlatılmamalı",
          "Alışveriş: ürün görseli ve fiyatıyla ürün reklamları; Google Merchant Center ürün feed'i gerektirir",
          "Demand Gen (eski adıyla Discovery): YouTube, Discover ve Gmail'de görsel ve video reklamlarla talep yaratma",
          "Video: YouTube'da video reklamlar; bilinirlik ve değerlendirme aşaması",
          "Görüntülü Reklam Ağı: iş ortağı sitelerde ve uygulamalarda banner reklamlar; düşük maliyetli erişim, düşük niyet",
          "Uygulama: uygulama yükleme ve uygulama içi işlemler için",
        ],
      },
      {
        heading: "Hangi teklif stratejisi seçilmeli?",
        paragraphs: [
          "Teklif stratejisi, Google'ın açık artırmada sizin adınıza ne kadar teklif vereceğini belirler. Akıllı teklif stratejileri her açık artırmada cihaz, konum, saat ve kitle sinyallerini kullanır; ama doğru çalışmaları için doğru dönüşüm verisine ihtiyaç duyarlar.",
        ],
        bullets: [
          "Manuel TBM: teklifleri siz belirlersiniz; az veriyle kontrol isteyenler için, ama ölçeklenmesi zahmetli",
          "Tıklamaları en üst düzeye çıkarma: bütçeyle en çok tıklama; dönüşüm ölçümü yokken trafik toplamak için, satışa optimize etmez",
          "Dönüşümleri en üst düzeye çıkarma (isteğe bağlı hedef EBM): bütçeyle en çok dönüşüm; dönüşüm ölçümü kurulu yeni kampanyalar için iyi başlangıç",
          "Dönüşüm değerini en üst düzeye çıkarma (isteğe bağlı hedef ROAS): satış tutarı ölçülen e-ticarette gelire optimize eder; hedefi marjınızdan hesaplayın",
          "Hedef gösterim payı: belirli bir konumda görünme oranı; çoğunlukla marka koruma için",
        ],
      },
      {
        heading: "Anahtar kelime eşleme türleri ve negatif kelimeler",
        paragraphs: [
          "Arama kampanyasında anahtar kelimeler hangi aramalarda görünebileceğinizi belirler. Eşleme türü bu aralığı genişletir ya da daraltır; negatif anahtar kelimeler ise istemediğiniz aramaları dışarıda bırakır.",
          "Kampanyayı başlattıktan sonra Arama terimleri raporunu haftalık okuyun: 'ücretsiz', 'nedir', 'iş ilanı' gibi satın alma niyeti taşımayan aramaları negatif listeye eklemek, bütçe sızıntısını durdurmanın en ucuz yoludur.",
        ],
        bullets: [
          "Geniş eşleme: anlamca ilişkili aramalarda da gösterilir; akıllı teklif ve iyi negatif listeyle kullanılmalı",
          "Sıralı eşleme: aramanın anlamı anahtar kelimenizin anlamını içerdiğinde gösterilir",
          "Tam eşleme: arama, anahtar kelimenizle aynı anlamı taşıdığında gösterilir; en dar ve en kontrollü",
        ],
      },
      {
        heading: "Google Ads'te başarı nasıl ölçülür?",
        paragraphs: [
          "Dönüşüm ölçümü kurulmadan Google Ads'in işe yarayıp yaramadığını bilemezsiniz; akıllı teklif stratejileri de neyi optimize edeceğini öğrenemez. Önce satın alma, form gönderimi ya da arama gibi asıl hedefinizi Google etiketiyle veya GA4'ten içe aktararak dönüşüm olarak tanımlayın; e-ticarette sipariş tutarını da gönderin.",
          "Otomatik etiketlemeyi (gclid) açık tutun; Google Ads trafiğinin GA4'te doğru kanala düşmesi için bu yeterlidir. Diğer kanallardaki linklerinizde UTM kullanın. Haftalık takip edeceğiniz metrikler: TBM, tıklama oranı, dönüşüm oranı, EBM ve ROAS; kararları ise her zaman başabaş EBM ve başabaş ROAS eşiğine göre verin.",
        ],
      },
      {
        heading: "Google Ads mı, Meta reklamları mı?",
        paragraphs: [
          "İkisi aynı işi yapmaz. Google Ads (özellikle Arama) var olan talebi yakalar: kullanıcı ürünü zaten arıyordur. Meta reklamları (Facebook, Instagram) talep yaratır: kullanıcı akışta gezinirken ürününüzle karşılaşır. Aranan bir ürün ya da hizmet satıyorsanız Arama ile başlamak genellikle daha hızlı sonuç verir; görsel, dürtüsel ya da yeni bir ürün satıyorsanız Meta daha geniş kitleye daha düşük maliyetle ulaşabilir.",
          "Hangisinden başlarsanız başlayın, bütçeyi aynı kârlılık eşiğiyle yönetin. İki kanalı birlikte kullanırken her kanalın kendi raporundaki dönüşümleri toplamayın; aynı satış iki platformda da sayılabilir.",
        ],
      },
    ],
    faq: [
      {
        question: "Google Ads ücretli mi, en az ne kadar bütçe gerekir?",
        answer:
          "Hesap açmak ücretsizdir; yalnızca reklamlarınız için ödeme yaparsınız. Zorunlu bir minimum bütçe yoktur, ama bütçe öğrenme için yeterli tıklama ve dönüşüm getirecek kadar olmalıdır. Kendi eşiğinizi EBM = TBM / Dönüşüm oranı formülüyle hesaplayın.",
      },
      {
        question: "Google Ads'te tıklama başı maliyet neden değişiyor?",
        answer:
          "Çünkü her arama ayrı bir açık artırmadır. Gerçek TBM; rakiplerin teklifine ve kalitesine, reklamınızın ve açılış sayfanızın alaka düzeyine, konuma, cihaza, saate ve sezona göre değişir. Altınızdaki rakibi ve eşiği geçecek kadar ödersiniz.",
      },
      {
        question: "Google Ads ile Google AdSense arasındaki fark nedir?",
        answer:
          "Google Ads reklam vermek için, AdSense ise kendi sitenizde reklam göstererek gelir elde etmek içindir. Reklamverenler Google Ads'te para harcar; site sahipleri AdSense ile bu reklamlardan pay alır.",
      },
      {
        question: "Kalite puanı kaç olmalı?",
        answer:
          "Kalite Puanı 1–10 arasıdır ve bir teşhis aracıdır, hedef değildir. Puanı düşük kelimelerde hangi bileşenin (beklenen TO, reklam alaka düzeyi, açılış sayfası deneyimi) 'ortalamanın altında' olduğuna bakıp onu düzeltin.",
      },
      {
        question: "Günlük bütçemi aşar mı?",
        answer:
          "Google yoğun günlerde günlük bütçenin 2 katına kadar harcayabilir, ancak aylık toplam harcama günlük bütçe × 30,4'ü geçmez. Günlük 500 TL bütçe ayda en fazla 15.200 TL harcar.",
      },
    ],
    relatedToolKey: "ad-budget",
    resources: [
      { label: "SEO Nedir, Nasıl Yapılır? (reklamla karşılaştırma hesabı)", href: "/blog/seo-nedir-nasil-yapilir/" },
      { label: "CAC Nedir? Müşteri Edinme Maliyeti Nasıl Hesaplanır?", href: "/blog/cac-nedir-musteri-edinme-maliyeti/" },
      { label: "Reklam Bütçesi Hesaplama Aracı", href: "/ucretsiz-araclar/reklam-butcesi-hesaplama/" },
      { label: "ROAS Hesaplayıcı", href: "/ucretsiz-araclar/roas-hesaplayici/" },
      { label: "Kar Marjı Hesaplama: Brüt Kar Marjı Hesaplayıcı", href: "/ucretsiz-araclar/brut-kar-marji-hesaplayici/" },
      { label: "ROAS Nedir, Nasıl Hesaplanır?", href: "/blog/roas-nedir-nasil-hesaplanir/" },
      { label: "Hedef ROAS Nasıl Belirlenir? Google Ads tROAS Rehberi", href: "/blog/hedef-roas-nasil-belirlenir/" },
      { label: "Reklam Bütçesi Nasıl Belirlenir?", href: "/blog/reklam-butcesi-nasil-belirlenir/" },
      { label: "Google Ads'te Performansı Katlamanın 7 Data-Driven Yolu", href: "/blog/google-ads-performans-optimizasyonu/" },
      { label: "Meta Reklam Verme Rehberi", href: "/blog/meta-reklam-verme-rehberi/" },
      { label: "UTM Nedir? UTM Parametreleri Nasıl Kullanılır?", href: "/blog/utm-nedir-utm-parametreleri/" },
      { label: "Google Ads Yardım: Gerçek tıklama başı maliyet (TBM)", href: "https://support.google.com/google-ads/answer/6297?hl=tr", external: true },
      { label: "Google Ads Yardım: Arama Ağı kampanyaları için kalite puanı", href: "https://support.google.com/google-ads/answer/6167118?hl=tr", external: true },
      { label: "Google: Google reklamlarının maliyeti ne kadar?", href: "https://business.google.com/tr/resources/articles/google-ads-cost/", external: true },
    ],
  },
  {
    slug: "trendyol-reklam-nasil-verilir",
    seoTitle: "Trendyol Reklam Nasıl Verilir? Maliyet ve Kâr Hesabı",
    title: "Trendyol Reklam Nasıl Verilir? Reklam Türleri, Maliyet, Başabaş ROAS ve Kârlılık Hesabı (2026)",
    description:
      "Trendyol reklam nasıl verilir: reklam türleri, panel adımları, sipariş başı reklam maliyeti, iade dahil başabaş ROAS, maksimum TBM ve artımlı satış testi.",
    category: "performans-pazarlama",
    tldr: [
      "Trendyol reklamı Satıcı Paneli'ndeki Reklam Yönetimi bölümünden verilir: reklam tipini seçin, bütçe ve tarihleri girin, ürünleri ekleyin, bakiyeyi hak edişten aktarın ya da kartla yükleyin. Ürün reklamında tıklama başına ödediğiniz üst sınırı (TBM) siz belirlersiniz veya Otomatik TBM'e bırakırsınız.",
      "Sipariş başı reklam maliyeti = TBM / Dönüşüm oranı. 4 TL TBM ve %2 dönüşüm, sipariş başına 200 TL reklam demektir; 800 TL'lik üründe panelde ROAS 4,0 görünür.",
      "Kârlılık eşiği iade oranına bağlıdır. Aynı üründe iade yokmuş gibi hesaplanınca başabaş ROAS 3,5 çıkarken %8 iadeyle 4,1 olur; ROAS 4,0'da panel iyi görünür ama sipariş başına 3,18 TL zarar edersiniz (örnek tutarlar).",
      "Panel ROAS'ı, reklam olmasa da gelecek siparişleri de sayabilir. Asıl soru için artımlı ROAS'a bakın: panelde 5,3 görünen bir kampanyanın gerçek katkısı 3,0 olabilir.",
    ],
    publishedAt: "2026-11-02",
    readingMinutes: 10,
    tags: ["Trendyol", "Trendyol Reklam", "Pazaryeri", "E-Ticaret", "ROAS", "Reklam Maliyeti"],
    sections: [
      {
        heading: "Trendyol'da reklam nasıl verilir? (Kısa cevap)",
        paragraphs: [
          "Trendyol'da reklam, Satıcı Paneli'ndeki Reklam Yönetimi bölümünden verilir. Yeni reklam oluşturup reklam tipini seçer, günlük ya da toplam bütçeyi ve tarihleri belirler, ürünleri ekler ve yayına alırsınız. Reklam bakiyesini hak edişlerinizden aktarabilir veya kredi kartıyla yükleyebilirsiniz.",
          "Kurulum birkaç dakika sürer; zor olan kısım reklamın kârlı olup olmadığını bilmektir. Bu yüzden yazının büyük bölümü panelin size göstermediği hesaba ayrıldı: sipariş başı reklam maliyeti, iadeyi de sayan başabaş ROAS, ödeyebileceğiniz maksimum TBM ve reklamın gerçekten ek satış getirip getirmediğini ölçen test.",
          "Yazıdaki kârlılık hesapları örnek tutarlarla yapılmıştır; amaç mantığı göstermektir. Kendi ürününüzün rakamlarını Trendyol Komisyon ve Kâr Hesaplama aracındaki sipariş başı reklam alanına girerek görebilirsiniz.",
        ],
      },
      {
        heading: "Trendyol reklam türleri nelerdir?",
        paragraphs: [
          "Trendyol'un reklam sitesi (ads.trendyol.com) satıcılara sunulan formatları şöyle sıralıyor. Hangi formatın size açık olduğu mağazanın durumuna göre değişebilir; kesin liste panelinizdedir.",
        ],
        bullets: [
          "Ürün Reklamları: ürünleri ana sayfada, arama sonuçlarında, ürün listelerinde ve favori alanlarında öne çıkarır. Çoğu satıcının başlaması gereken format budur; zaten arayan kişiye görünür",
          "Mağaza Reklamları: banner ve video ile mağazayı tanıtır; arama sonuçlarından Marka Günü'ne kadar farklı yerleşimleri vardır. Trendyol bu formatta Buybox şartı olmadığını belirtiyor",
          "Komisyonlu Influencer Reklamları: ödeme, gerçekleşen net satış üzerinden belirlediğiniz komisyon oranıyla yapılır; yani peşin bütçe yerine satışa bağlı bir maliyettir",
          "Meta Reklamları: Trendyol'daki potansiyel alıcıları Instagram ve Facebook tarafında yeniden hedefler; stoğu 4'ün üzerinde olan aktif ürünler kataloğa otomatik eklenir",
          "Tanıtım Reklamları ve Display: sitede listeleniyor ama ayrıntı verilmiyor; koşulları panelden kontrol edin",
        ],
      },
      {
        heading: "Trendyol reklam verme adımları",
        paragraphs: [
          "Menü adları zaman zaman değişse de kamuya açık satıcı rehberlerinde akış aynıdır. Aşağıdaki sıra ürün reklamı içindir.",
          "Bakiye kurallarını da baştan bilin: kamuya açık rehberlere göre reklam bakiyesi bölümü mağaza açıldıktan yaklaşık bir ay sonra aktif olur, tek seferde aktarılabilecek tutar sınırlıdır (Ocak 2026 tarihli bir rehberde 50.000 TL) ve yüklenen bakiye nakit olarak iade edilmez. Bu nedenle deneme aşamasında büyük tutar yüklemeyin; güncel koşulları panelden doğrulayın.",
        ],
        bullets: [
          "1. Satıcı Paneli'nde Reklam Yönetimi'ne girin ve Yeni Reklam Oluştur'u seçin",
          "2. Reklam tipi olarak ürün reklamını seçin, reklama ürün grubunu anlatan bir ad verin",
          "3. Başlangıç ve bitiş tarihini, ardından günlük ya da toplam bütçeyi girin",
          "4. Ürünleri seçin. Trendyol aynı kategoriden en az 5 benzer ürün seçmeyi öneriyor; Buybox'ı kaybettiğiniz ve stoğu az olan ürünleri eklemeyin",
          "5. Teklifi belirleyin: elle TBM üst sınırı girin (aşağıdaki maksimum TBM hesabıyla) ya da Otomatik TBM'i seçin",
          "6. Bakiyeyi yükleyin ve yayına alın; ilk haftada günlük olarak harcama ve siparişi izleyin",
        ],
      },
      {
        heading: "Trendyol reklamı ne kadar? Neden tek bir fiyat yok",
        paragraphs: [
          "Ürün reklamında sabit bir tarife yoktur. Trendyol TBM'yi, her tıklama için ödemeyi kabul ettiğiniz üst sınır olarak tanımlıyor. Gerçek maliyet kategoriye, rekabete, sezona ve ürünün performansına göre değişir; Efsane Kasım gibi dönemlerde yükselmesi beklenir.",
          "Türkçe rehberlerdeki rakamlar birbirini tutmuyor: bir rehber tıklama için 0,24–1,87 TL aralığı verirken (aynı metinde kuruş ve TL karışık), bir başkası kategoriye göre 1,20–3,50 TL gibi kaynaksız aralıklar yazıyor; asgari bütçe için de ürün başına günlük 10 TL'den günlük 20–25 TL'ye uzanan farklı değerler geçiyor. Reklam modeli bile tartışmalı: aynı format için bir yazıda gösterim başı (BGBM), diğerinde tıklama başı deniyor. Resmî sitede ürün reklamı teklifi TBM olarak anlatılıyor.",
          "Bu nedenle başkasının ortalamasını planlama rakamı yapmayın. Panelin önerdiği teklif aralığı ve ilk testinizin gerçek TBM'si, herhangi bir blog tablosundan daha değerlidir. Bu yazıda TBM rakamları yalnızca hesabı göstermek için kullanılan örneklerdir.",
        ],
      },
      {
        heading: "Sipariş başı reklam maliyeti nasıl hesaplanır?",
        paragraphs: [
          "Satıcının asıl bakması gereken sayı TBM değil, bir siparişe düşen reklam maliyetidir. Üç formül aynı sonucu verir; hangisinin verisi elinizdeyse onu kullanın.",
          "Örnek: 800 TL'lik bir üründe TBM 4 TL, dönüşüm oranı %2 ise sipariş başı reklam 4 / 0,02 = 200 TL'dir. Bu durumda panelde ROAS 800 / 200 = 4,0 görünür. TBM 3 TL'ye inerse maliyet 150 TL'ye ve ROAS 5,3'e döner. Aynı etkiyi dönüşüm oranını yükselterek de alabilirsiniz; görseller, yorumlar, fiyat ve kargo süresi TBM kadar reklam maliyetini belirler.",
        ],
        bullets: [
          "Sipariş başı reklam = Toplam reklam harcaması / Reklamdan gelen sipariş",
          "Sipariş başı reklam = TBM / Dönüşüm oranı",
          "Sipariş başı reklam = Ortalama sipariş tutarı / ROAS",
        ],
      },
      {
        heading: "Trendyol'da başabaş ROAS kaç? (İade dahil hesap)",
        paragraphs: [
          "ROAS tek başına iyi ya da kötü değildir; ürünün reklam öncesi bıraktığı kâra göre okunur. Komisyon, kargo ve hizmet bedeli kesintilerini Trendyol komisyon oranları yazısında ayrıntılı anlattık. Reklam kararında çoğu hesabın atladığı nokta iadedir: iade edilen siparişte ciro ve komisyon geri döner, ama gidiş kargosu, dönüş kargosu ve paketleme satıcıda kalır. Üstelik reklam tıklaması için ödediğiniz para da geri gelmez.",
          "Bu yüzden 'kesintileri topla, fiyattan çıkar' yöntemi eşiği olduğundan düşük gösterir. Doğru hesap, siparişin iade edilme ihtimalini de içerir: Reklam öncesi beklenen kâr = (1 − İade oranı) × (Fiyat − Komisyon − Hizmet bedeli − Ürün maliyeti) − Gidiş kargo − Paketleme − İade oranı × Dönüş kargo. Başabaş ROAS = Fiyat / Reklam öncesi beklenen kâr.",
          "Örnek: 800 TL fiyat, %21 komisyon (168 TL), 10,99 TL hizmet bedeli, 300 TL ürün maliyeti, 81,95 TL gidiş ve aynı tutarda dönüş kargosu, 10 TL paketleme, %8 iade (tutarlar örnektir). Beklenen kâr 0,92 × 321,01 − 81,95 − 10 − 6,56 = 196,82 TL, başabaş ROAS 800 / 196,82 = 4,06 olur. İade yokmuş gibi hesaplarsanız kâr 229,06 TL ve eşik 3,49 çıkar. Fark küçük görünür ama panelde 3,5 ile 4,1 arasındaki her kampanya kârlı sanılırken zarar yazar.",
          "Aşağıdaki liste aynı ürünü farklı panel ROAS'larında gösterir. Satış fiyatının %8'ini (64 TL) kâr olarak bırakmak istiyorsanız hedef ROAS 800 / (196,82 − 64) = 6,02'dir. Trendyol'un tanıtım sayfasındaki 'reklam harcaması getirisinin 12 katına kadar' ifadesi bir üst sınır pazarlama cümlesidir; sizin için önemli olan bu eşiği geçip geçmediğinizdir.",
        ],
        bullets: [
          "ROAS 3,0: sipariş başı reklam 266,67 TL → sipariş başı sonuç −69,84 TL",
          "ROAS 4,0: reklam 200,00 TL → −3,18 TL",
          "ROAS 5,0: reklam 160,00 TL → +36,82 TL",
          "ROAS 6,0: reklam 133,33 TL → +63,49 TL",
          "ROAS 8,0: reklam 100,00 TL → +96,82 TL",
        ],
      },
      {
        heading: "Trendyol'da en fazla kaç TL TBM ödeyebilirim?",
        paragraphs: [
          "Başabaş ROAS'ı teklife çevirmek için sipariş başına ayırabileceğiniz tutarı dönüşüm oranıyla çarpın: Maksimum TBM = Sipariş başı izin verilen reklam × Dönüşüm oranı.",
          "Örnek üründe %2 dönüşümle başabaş TBM 196,82 × 0,02 = 3,94 TL'dir. %8 kâr payını korumak istiyorsanız izin verilen reklam 132,82 TL'ye, TBM üst sınırı 2,66 TL'ye iner. Otomatik TBM kullanıyorsanız bu sayılar teklif olarak girilmez ama sonucu denetlemek için kullanılır: raporlardaki ortalama tıklama maliyeti başabaş TBM'nin üzerindeyse kampanya sizin yerinize zarar yazıyordur.",
          "Dönüşüm oranı ürün bazında farklıdır. Yeni ve yorumsuz bir ürünle uzun süredir satan ürün için aynı teklifi kullanmak, birinde bütçeyi yakıp diğerinde satış kaçırmak demektir.",
        ],
      },
      {
        heading: "Trendyol reklamı her ürün için kârlı mı?",
        paragraphs: [
          "Hayır. Başabaş ROAS ürünün fiyatına ve marjına göre çok değişir. Aynı %8 iade varsayımıyla üç örnek, reklamın neden her ürüne açılmaması gerektiğini gösterir.",
          "Pratik sonuç: bir ürün listesini reklama koymadan önce başabaş ROAS'a göre sıralayın. Eşiği 6'nın altında kalanlar adaydır; eşiği çok yüksek ürünleri reklamla tek başına satmak yerine set veya çoklu paket yapıp sepeti büyütmek, ya da reklamı yalnızca kârlı komşu ürünlere trafik getirmesi için kullanmak daha mantıklıdır.",
        ],
        bullets: [
          "199,90 TL'lik düşük fiyatlı ürün (80 TL maliyet, 38,74 TL barem kargosu, 5 TL paketleme): beklenen kâr 14,74 TL, başabaş ROAS 13,6. Reklamla kârlı olması neredeyse imkânsız",
          "800 TL'lik orta fiyatlı ürün (yukarıdaki örnek): başabaş ROAS 4,06. Reklam için iyi aday",
          "15.000 TL'lik telefon (13.500 TL maliyet, %6 komisyon, %3 iade): beklenen kâr 476,93 TL, başabaş ROAS 31,5. Ciro büyük, reklam payı dar",
        ],
      },
      {
        heading: "Panel ROAS'ı gerçek satışı mı gösteriyor? Artımlı ROAS testi",
        paragraphs: [
          "Reklam raporu reklamla ilişkilendirilen siparişi sayar; ama o siparişlerin bir kısmı reklam olmasa da organik sonuçlardan gelecekti. Özellikle markanızı ya da ürününüzü zaten arayan kişilere gösterilen reklamlarda bu pay büyüyebilir. Bu sipariş için ödediğiniz para ek satış getirmez.",
          "Basit bir test: kampanya takvimine ve fiyata denk gelmeyen iki hafta seçin. İlk hafta seçili ürünlerde reklam kapalı, ikinci hafta açık olsun; fiyat ve stok aynı kalsın. Artımlı ROAS = (Reklamlı dönem toplam ciro − Reklamsız dönem toplam ciro) / Reklam harcaması.",
          "Örnek: 800 TL'lik üründe reklamsız haftada 120 sipariş var. Reklamlı haftada 12.000 TL harcıyorsunuz, panel 80 siparişi reklama yazıyor (ROAS 5,3) ve toplam sipariş 165 oluyor. Gerçek artış 45 sipariştir: artımlı ROAS 45 × 800 / 12.000 = 3,0. Sipariş başına gerçek reklam maliyeti 150 değil 266,67 TL olur ve başabaş eşiğinin altında kalırsınız.",
          "Bu test kusursuz değildir; talep haftadan haftaya değişir ve tek bir kıyas kesin sonuç vermez. Testi iki kez tekrarlamak ve mümkünse benzer ürünlerden bir grubu reklamsız bırakıp karşılaştırmak sonucu güçlendirir. Ama panel rakamını sorgusuz kabul etmekten çok daha iyi bir yaklaşımdır.",
          "Bir de reklamın organik sıralamayı yükselttiği sık söylenir. Satış geçmişi arttıkça görünürlüğün artması mantıklıdır, ancak Trendyol'un bu etkiyi rakamla açıkladığı resmî bir kaynak bulamadık. Bu etkiyi bütçe gerekçesi yapmak yerine reklamı kapattıktan sonraki haftaların organik satışına bakarak kendiniz ölçün.",
        ],
      },
      {
        heading: "Trendyol reklam bütçesi ne kadar olmalı?",
        paragraphs: [
          "Bütçeyi 'günlük kaç lira' diye değil, karar vermeye yetecek veri olarak düşünün. Pratik bir kural: bir ürün grubu için en az 10 sipariş görmeden karar vermeyin. %2 dönüşümde bu 500 tıklama demektir; 3 TL TBM ile test bütçesi 1.500 TL'dir ve 14 güne yayılırsa günlük yaklaşık 107 TL eder. Bu bir istatistik garantisi değil, panikle erken kapatmayı önleyen bir eşiktir.",
          "Testten sonra bütçeyi artırırken adım adım gidin ve sipariş başı reklam maliyetini izleyin. Eşik aşıldığı anda bütçeyi artırmak yerine ürünü, görseli veya teklifi düzeltin. Toplam reklam bütçesini hedef ciro ve marjdan hesaplamak için Reklam Bütçesi Hesaplama aracını kullanabilirsiniz.",
        ],
      },
      {
        heading: "Kampanya döneminde Trendyol reklamı nasıl yönetilir?",
        paragraphs: [
          "İndirim, başabaş ROAS'ı reklam maliyetinden daha sert değiştirir. Örnek ürünü %15 indirimle 680 TL'ye sattığınızda beklenen kâr 196,82 TL'den 109,61 TL'ye iner ve başabaş ROAS 4,06'dan 6,20'ye çıkar. Yani normal günde kârlı olan ROAS 5 kampanyası, indirim döneminde zarar eder.",
          "Tıklama maliyetleri de yoğun dönemlerde yükselme eğilimindedir. Efsane Kasım ve benzeri kampanyalara girmeden önce kampanya fiyatıyla eşiği yeniden hesaplayın, TBM üst sınırlarını güncelleyin ve bütçeyi yalnızca indirimden sonra da kâr bırakan ürünlere ayırın. Hafta hafta plan için Black Friday 2026 Reklam Planı yazısına bakabilirsiniz.",
        ],
      },
      {
        heading: "Influencer ve Meta reklamlarını nasıl değerlendirmeli?",
        paragraphs: [
          "Komisyonlu influencer reklamında maliyet satış gerçekleşince oluşur, dolayısıyla ROAS yerine komisyon oranı üst sınırına bakılır. Başabaş influencer komisyonu = Reklam öncesi beklenen kâr / (Fiyat × (1 − İade oranı)). Örnek üründe 196,82 / 736 = %26,7'dir; kâr payı bırakmak için teklifiniz bunun belirgin biçimde altında olmalıdır.",
          "Meta reklamlarında hesap aynı başabaş ROAS'la yapılır, ancak kişi ürünü aramıyor, daha önce gördüğü için hatırlatma alıyor olabilir. Bu nedenle artımlılık sorusu burada daha da önemlidir. Kendi sitenizde Meta reklamı açıyorsanız Meta reklam verme rehberindeki kurulum ve bütçe adımları geçerlidir; Trendyol'un Meta formatı ise panelden yönetilir.",
        ],
      },
      {
        heading: "En sık yapılan Trendyol reklam hataları",
        paragraphs: [
          "Rakip rehberlerde sıkça geçen ipuçlarının çoğu kurulumla ilgili. Bütçeyi asıl eritenler ise genellikle hesap hatalarıdır.",
        ],
        bullets: [
          "Panel ROAS'ını kâr sanmak: panel cironun nereye gittiğini bilmez; eşik ürünün marjından gelir",
          "İadeyi hesaptan çıkarmak: giyim gibi iade oranı yüksek kategorilerde başabaş eşiğini belirgin yükseltir",
          "Düşük fiyatlı ürüne reklam açmak: barem kargosu ve hizmet bedeli reklam payını baştan yer",
          "Buybox'ta olmayan ya da stoğu tükenmek üzere olan ürüne bütçe ayırmak: tıklama parası ödersiniz, satışı başkası alabilir",
          "Tek kampanyada tüm ürünleri aynı teklifle çalıştırmak: her ürünün başabaş TBM'si farklıdır",
          "Kampanya fiyatıyla eşiği yeniden hesaplamamak",
          "İki gün sonra karar vermek: yeterli sipariş verisi oluşmadan kapatmak ya da bütçe artırmak",
        ],
      },
    ],
    faq: [
      {
        question: "Trendyol'da reklam vermek için ne gerekir?",
        answer:
          "Aktif bir satıcı hesabı, reklama uygun ürünler ve reklam bakiyesi gerekir. Reklamlar Satıcı Paneli'ndeki Reklam Yönetimi'nden oluşturulur. Kamuya açık rehberlere göre bakiye bölümü mağaza açıldıktan yaklaşık bir ay sonra aktif olur; bazı formatlar için ek koşullar panelde belirtilir.",
      },
      {
        question: "Trendyol reklamı günlük ne kadar?",
        answer:
          "Sabit bir ücret yoktur; bütçeyi siz belirlersiniz ve ürün reklamında tıklama başına ödediğiniz üst sınırı (TBM) seçersiniz. Rehberlerde geçen asgari tutarlar birbirini tutmadığı için paneldeki güncel sınıra bakın. Test için tutarı, en az 10 sipariş görecek kadar tıklama alacak şekilde hesaplayın.",
      },
      {
        question: "Trendyol reklamında iyi ROAS kaç?",
        answer:
          "Herkese uyan bir ROAS yoktur. İyi ROAS, ürününüzün başabaş ROAS'ının üzerinde kalan değerdir: Başabaş ROAS = Fiyat / Reklam öncesi beklenen kâr. Örnek bir 800 TL'lik üründe eşik 4,06 iken 199,90 TL'lik bir üründe 13,6'dır.",
      },
      {
        question: "Trendyol reklamı kârlı mı?",
        answer:
          "Ürüne bağlıdır. Marjı yeterli, iadesi kontrollü ve dönüşüm oranı iyi ürünlerde kârlı olabilir; düşük fiyatlı ve dar marjlı ürünlerde sipariş başı reklam maliyeti kârı aşar. Karar için sipariş başı reklam maliyetini iade dahil beklenen kârla karşılaştırın, ardından artımlı satış testi yapın.",
      },
      {
        question: "Otomatik TBM mi elle teklif mi kullanmalıyım?",
        answer:
          "Otomatik TBM'de sistem her ürün için tıklama maliyetini kendisi belirler; yeni başlayanlar için kurulumu kolaylaştırır. Elle teklif ise başabaş TBM'nizi doğrudan uygulamanızı sağlar. Hangisini seçerseniz seçin, ortalama tıklama maliyetini ürünün başabaş TBM'siyle karşılaştırarak denetleyin.",
      },
    ],
    howTo: {
      name: "Trendyol reklamının kârlılığı nasıl hesaplanır?",
      description: "Reklam açmadan önce iade dahil başabaş ROAS'ı ve maksimum TBM'yi bulun, yayından sonra artımlı katkıyı ölçün.",
      steps: [
        { name: "Reklam öncesi kârı bulun", text: "Fiyattan komisyon, hizmet bedeli ve ürün maliyetini çıkarın; sonucu teslim kalma oranıyla (1 − iade oranı) çarpın, kargo, paketleme ve iade kargosu payını düşün." },
        { name: "Başabaş ROAS'ı hesaplayın", text: "Satış fiyatını reklam öncesi beklenen kâra bölün. Bu eşiğin altında kalan panel ROAS'ı zarar demektir." },
        { name: "Maksimum TBM'yi belirleyin", text: "Sipariş başına ayırabileceğiniz reklam tutarını ürünün dönüşüm oranıyla çarpın." },
        { name: "Test bütçesini ayırın", text: "En az 10 sipariş görecek kadar tıklamayı hesaplayın, bütçeyi iki haftaya yayın ve aynı kategoriden benzer ürünlerle başlayın." },
        { name: "Artımlı katkıyı ölçün", text: "Reklamlı ve reklamsız dönemin toplam cirosunu karşılaştırın; farkı reklam harcamasına bölerek artımlı ROAS'ı bulun." },
      ],
    },
    relatedToolKey: "marketplace",
    resources: [
      { label: "Dropshipping Nedir? İade Dahil Kâr Hesabı", href: "/blog/dropshipping-nedir-nasil-yapilir/" },
      { label: "İndirim Hesaplama: İndirimli Fiyat ve Kâr Etkisi", href: "/ucretsiz-araclar/indirim-hesaplama/" },
      { label: "Trendyol Komisyon ve Kâr Hesaplama (+ Hepsiburada)", href: "/ucretsiz-araclar/trendyol-hepsiburada-kar-hesaplama/" },
      { label: "Trendyol Komisyon Oranları 2026 ve Komisyon Hesaplama", href: "/blog/trendyol-komisyon-oranlari-hesaplama/" },
      { label: "ROAS Hesaplayıcı", href: "/ucretsiz-araclar/roas-hesaplayici/" },
      { label: "ROAS Nedir, Nasıl Hesaplanır?", href: "/blog/roas-nedir-nasil-hesaplanir/" },
      { label: "Hedef ROAS Nasıl Belirlenir?", href: "/blog/hedef-roas-nasil-belirlenir/" },
      { label: "Kargo Ücreti Hesaplama: Tarifeyle Koli Başı Fiyat", href: "/ucretsiz-araclar/kargo-ucreti-hesaplama/" },
      { label: "Desi Hesaplama: Kargo Desi Hesaplama Aracı", href: "/ucretsiz-araclar/desi-hesaplama/" },
      { label: "Kar Marjı Hesaplama: Brüt Kar Marjı Hesaplayıcı", href: "/ucretsiz-araclar/brut-kar-marji-hesaplayici/" },
      { label: "Reklam Bütçesi Hesaplama", href: "/ucretsiz-araclar/reklam-butcesi-hesaplama/" },
      { label: "Black Friday 2026 Reklam Planı", href: "/blog/black-friday-2026-reklam-plani/" },
      { label: "Meta Reklam Verme Rehberi", href: "/blog/meta-reklam-verme-rehberi/" },
      { label: "Trendyol Reklam Çözümleri (resmî site)", href: "https://ads.trendyol.com/", external: true },
    ],
  },
  {
    slug: "cpl-nedir-lead-basi-maliyet",
    seoTitle: "CPL Nedir? Lead Başı Maliyet Nasıl Hesaplanır?",
    title: "CPL Nedir? Lead Başı Maliyet Nasıl Hesaplanır, İyi CPL Kaç ve B2B'de Nasıl Düşürülür?",
    description:
      "CPL nedir: lead başı maliyet formülü, tam maliyetli CPL, MQL ve SQL maliyeti, kendi maksimum CPL'nizi bulma yöntemi ve CPL'yi kaliteyi bozmadan düşürme.",
    category: "b2b-lead-generation",
    tldr: [
      "CPL (Cost Per Lead), bir potansiyel müşteri kaydını kazanmak için harcanan ortalama tutardır: CPL = Toplam pazarlama harcaması / Geçerli lead sayısı. 40.000 TL ile 80 lead aldıysanız CPL 500 TL'dir.",
      "Herkese uyan bir 'iyi CPL' yoktur. Sınırı kendi rakamlarınız belirler: Maksimum CPL = Reklama ayrılan maksimum CAC × Lead'den müşteriye dönüşüm oranı. Örnek şirkette bu sınır 2.000 TL'dir, yani 500 TL'lik CPL pahalı değil, artırılabilir.",
      "Düşük CPL iyi kampanya demek değildir: 200 TL CPL'li kampanya müşteri başına 30.000 TL'ye, 750 TL CPL'li kampanya 10.000 TL'ye gelebilir.",
      "CPL iki kolla düşer: CPL = Tıklama başı maliyet / Lead dönüşüm oranı. Dönüşümü %6'dan %8'e çıkarmak CPL'yi %25 düşürür; ama kalite ölçülmüyorsa düşen CPL kötü lead anlamına gelebilir.",
    ],
    publishedAt: "2026-11-02",
    readingMinutes: 8,
    tags: ["CPL", "Lead Maliyeti", "B2B", "Lead Generation", "CAC", "Reklam Metrikleri"],
    sections: [
      {
        heading: "CPL nedir? (Kısa cevap)",
        paragraphs: [
          "CPL (Cost Per Lead), Türkçesiyle lead başı maliyet veya potansiyel müşteri başına maliyet, pazarlama harcamanızın kazandığınız her potansiyel müşteri kaydına ortalama kaça geldiğini gösteren metriktir. Lead; form dolduran, demo isteyen, arayan ya da içerik indirirken iletişim bilgisini bırakan kişidir.",
          "Formül: CPL = Toplam harcama / Geçerli lead sayısı. Örnek: bir ayda 40.000 TL reklam harcayıp 80 geçerli lead aldıysanız CPL 40.000 / 80 = 500 TL'dir.",
          "CPL özellikle satışın sitede değil, sonradan satış ekibiyle kapandığı işlerde kullanılır: B2B yazılım ve hizmetler, eğitim, sağlık, emlak, sigorta gibi. E-ticarette satış doğrudan ölçülebildiği için ROAS ve sipariş başı maliyet daha anlamlıdır.",
        ],
      },
      {
        heading: "CPL nasıl hesaplanır? Hangi lead sayılır, hangi maliyet girer?",
        paragraphs: [
          "Formül basit olduğu için asıl hata pay ve paydanın tanımında yapılır. Aynı kampanyanın CPL'si, kimin hesapladığına göre iki katı değişebilir. Karşılaştırma yapmadan önce iki kararı yazılı hale getirin.",
          "Payda: reklam panelinin saydığı dönüşüm ile CRM'e giren geçerli kayıt aynı şey değildir. Tekrar eden formları, spam ve sahte kayıtları, mevcut müşterileri ve iş arayanları çıkarın. Panelde 100 dönüşüm görünen kampanyada 80 geçerli lead varsa CPL 400 değil 500 TL'dir.",
          "Pay: yalnızca reklam harcamasıyla hesaplanan CPL kanal kıyası için yeterlidir. Bütçe kararı için tam maliyetli CPL gerekir: Tam maliyetli CPL = (Reklam + Ajans/danışman + Araçlar + İçerik ve kreatif üretimi) / Geçerli lead. Örnekte 40.000 TL reklama 12.000 TL ajans ve 4.000 TL araç eklenirse 56.000 / 80 = 700 TL olur. İkisini de raporlayın ve hangisi olduğunu her yerde belirtin.",
          "Dönem: harcama ile lead aynı dönemden gelmelidir. LinkedIn veya içerik gibi geç dönen kanallarda aylık kıyas yanıltabilir; birkaç ayın toplamına bakın.",
        ],
      },
      {
        heading: "CPL, CPC, CPA ve CAC arasındaki fark nedir?",
        paragraphs: [
          "Bu metrikler hunide farklı noktaları ölçer ve birbirine bağlıdır: CPL = CPC / Tıklamadan lead'e dönüşüm oranı. Tıklama başı maliyetiniz 30 TL, formu dolduranların oranı %6 ise CPL 30 / 0,06 = 500 TL'dir.",
          "Bir de karıştırılan bir kullanım var: 'CPL modeli' bazen bir satın alma modelini anlatır; yayıncıya veya lead tedarikçisine her lead için sabit ücret ödersiniz. Metrik olarak CPL ise hangi modelle aldığınızdan bağımsız, gerçekleşen ortalama maliyettir.",
        ],
        bullets: [
          "CPC: tıklama başı maliyet. Trafiğin fiyatını ölçer",
          "CPL: lead başı maliyet. Kaydın fiyatını ölçer, kalitesini ölçmez",
          "CPA: tanımladığınız bir eylemin maliyeti. Eylem lead de olabilir satış da, bu yüzden tanımı belirtilmelidir",
          "CAC: yeni müşteri başı maliyet. Satış maliyetlerini de içerir ve kararın gerçek ölçüsüdür",
        ],
      },
      {
        heading: "Lead'den müşteriye: MQL ve SQL başı maliyet",
        paragraphs: [
          "CPL hunide ilk durak olduğu için tek başına yanıltır. Her aşamanın maliyetini ayrı hesaplarsanız sorunun nerede olduğunu görürsünüz. Örnek şirkette 40.000 TL ile 80 lead alınıyor; bunların yarısı pazarlama kriterlerini geçiyor (MQL), MQL'lerin %40'ı satış ekibince kabul ediliyor (SQL), SQL'lerin dörtte biri müşteri oluyor.",
          "Bu aşamalı hesap, 'lead pahalı' tartışmasını 'hangi geçiş bozuk' sorusuna çevirir. CPL kabul edilebilir ama SQL oranı düşükse sorun hedefleme ya da teklif uyumudur; SQL oranı iyi ama kapanış düşükse satış sürecine bakılır.",
        ],
        bullets: [
          "CPL: 40.000 / 80 lead = 500 TL",
          "MQL başı maliyet: 40.000 / 40 = 1.000 TL",
          "SQL başı maliyet: 40.000 / 16 = 2.500 TL",
          "Reklam kaynaklı müşteri başı maliyet: 40.000 / 4 = 10.000 TL",
        ],
      },
      {
        heading: "İyi CPL kaç? Kendi maksimum CPL'nizi nasıl bulursunuz?",
        paragraphs: [
          "Türkçe rehberlerdeki 'iyi CPL' tabloları birbirini tutmuyor: bir yazı B2B için 200 TL'ye kadar 'makul' derken başka bir yazı 1.500–4.000 TL ve üstünü gösteriyor; ikisi de kaynak ya da yöntem vermiyor. Enflasyon altındaki TL tutarları da hızla eskir. Dolar bazında yayımlanmış bir kıyas olarak LocaliQ'nun 2026 arama reklamı verileri tüm sektörlerde ortalama 66,69 $, iş hizmetlerinde 93,69 $ lead maliyeti gösteriyor. Bu rakamlar ABD ağırlıklı müşteri kampanyalarından gelir, telefon ve sohbet gibi iletişimleri de lead sayar; Türkiye için hedef değil, yalnızca bir mertebe bilgisidir.",
          "Daha sağlam yol, sınırı kendi ekonominizden hesaplamaktır. Maksimum CPL = Reklama ayrılan maksimum CAC × Lead'den müşteriye dönüşüm oranı. Reklama ayrılan maksimum CAC = (Müşteri brüt kâr LTV'si / Hedef LTV:CAC oranı) − Müşteri başı satış maliyeti.",
          "Örnek: müşterinin ömür boyu brüt kârı 180.000 TL, hedef LTV:CAC oranı 3. Müşteri başına toplam 60.000 TL harcayabilirsiniz; bunun 20.000 TL'si satış ekibinin maliyetiyse reklama 40.000 TL kalır. Lead'lerin %5'i müşteri oluyorsa maksimum CPL 40.000 × 0,05 = 2.000 TL'dir.",
          "Sonuç şaşırtıcı olabilir: bu şirket 500 TL CPL'den şikâyet ederken sınırının dörtte birinde çalışıyordur. Bütçeyi kısmak yerine artırmak daha kârlı olabilir. Tersine, %1 lead-müşteri oranı olan aynı şirkette sınır 400 TL'ye iner ve 500 TL CPL zarar demektir. Bu nedenle CPL'yi hiçbir zaman dönüşüm oranından bağımsız yorumlamayın.",
        ],
      },
      {
        heading: "Düşük CPL neden tuzak olabilir?",
        paragraphs: [
          "Reklam algoritmaları ona verdiğiniz hedefi optimize eder. Hedef 'form' ise en ucuz formu getirir; o formu dolduranın satın alıp almayacağını bilmez. İki kampanyayı aynı bütçeyle karşılaştıralım.",
          "A kampanyası raporda kazanan görünür, ama B'nin üç katı müşteri başı maliyete sahiptir. A kampanyasını ölçeklemek, CPL'yi düşürürken CAC'ı yükseltir ve satış ekibinin zamanını yer. Lead'in kalitesini reklam paneline geri besleme yöntemlerini B2B lead maliyetleri yazımızda ayrıntılı anlattık.",
        ],
        bullets: [
          "Kampanya A (30.000 TL): 150 lead, CPL 200 TL → 6 SQL (SQL başı 5.000 TL) → 1 müşteri (müşteri başı 30.000 TL)",
          "Kampanya B (30.000 TL): 40 lead, CPL 750 TL → 12 SQL (SQL başı 2.500 TL) → 3 müşteri (müşteri başı 10.000 TL)",
        ],
      },
      {
        heading: "CPL nasıl düşürülür?",
        paragraphs: [
          "CPL iki sayının oranı olduğu için iki kol vardır. 30 TL tıklama ve %6 dönüşümde CPL 500 TL'dir. Tıklama maliyetini %20 düşürüp 24 TL'ye indirmek CPL'yi 400 TL'ye, dönüşümü %8'e çıkarmak 375 TL'ye indirir. Tıklama maliyeti rekabete bağlıdır; dönüşüm oranı ise büyük ölçüde sizin kontrolünüzdedir, bu yüzden önce oradan başlamak genellikle daha hızlı sonuç verir.",
          "Sırayla uygulayın ve her adımda lead kalitesini de izleyin. CPL düşerken SQL oranı da düşüyorsa kazanç gerçek değildir.",
        ],
        bullets: [
          "Teklifi netleştirin: 'Bize ulaşın' yerine somut bir değer verin (fiyat aralığı, ücretsiz denetim, örnek rapor)",
          "Formu sadeleştirin, ama nitelik alanlarını korumayı deneyin: şirket büyüklüğü gibi bir alan lead sayısını azaltırken SQL oranını artırabilir",
          "Niyet düşük sorguları kesin: arama terimleri raporundan iş arayan, ücretsiz arayan ve öğrenci aramalarını hariç tutun",
          "Reklam ile açılış sayfası mesajını eşleştirin",
          "Yeniden pazarlamayla siteye gelip form doldurmayanlara ikinci teklif gösterin",
          "Sahte kayıtları filtreleyin: bot koruması ve e-posta doğrulaması olmadan raporlanan CPL gerçek değildir",
          "Kanalı bütçeye göre seçin: 'Hangi Pazarlama Kanalı Size Uygun?' aracı başlangıç için yön verir",
        ],
      },
      {
        heading: "CPL doğru nasıl ölçülür?",
        paragraphs: [
          "Ölçüm üç parçadan oluşur. Birincisi kaynak: her reklam linkini UTM ile etiketleyin ve formda gizli alanlarla CRM'e yazın. Böylece lead'in kampanyasını satış sonuçlarına kadar takip edebilirsiniz.",
          "İkincisi kalite durumu: CRM'de lead, MQL, SQL ve müşteri aşamalarını ortak tanımlarla işaretleyin. Satış ve pazarlamanın aynı tanımı kullanmadığı yerde hiçbir CPL raporu güvenilir değildir.",
          "Üçüncüsü geri besleme: Google Ads çevrimdışı dönüşüm içe aktarmada, formla birlikte tıklama kimliğini (GCLID) saklarsınız ve lead sözleşmeye dönüştüğünde bunu Google'a gönderirsiniz. Google'ın lead'ler için gelişmiş dönüşümleri ise formdaki e-posta gibi verileri karmalanmış olarak eşleştirerek bu işi güçlendirir ve Google tarafından önerilen yoldur; 15 Haziran 2026'dan itibaren yüklemeler Data Manager API tarafına taşındı. Kişisel veri işlediğiniz için kurulumdan önce aydınlatma metni ve açık rıza gerekliliklerini hukuk danışmanınızla kontrol edin.",
          "Pratik bir haftalık rapor için kanal başına şu sütunlar yeter: harcama, geçerli lead, CPL, SQL, SQL başı maliyet, müşteri, CAC. Kapanış süreniz uzunsa son satırları kohort olarak (lead'in geldiği aya göre) okuyun.",
        ],
      },
    ],
    faq: [
      {
        question: "CPL nedir, ne demek?",
        answer:
          "CPL, Cost Per Lead'in kısaltmasıdır ve lead başı maliyet anlamına gelir. Toplam pazarlama harcamasının geçerli potansiyel müşteri sayısına bölünmesiyle bulunur: 40.000 TL ile 80 lead aldıysanız CPL 500 TL'dir.",
      },
      {
        question: "CPL nasıl hesaplanır?",
        answer:
          "CPL = Toplam harcama / Geçerli lead sayısı. Tıklama verisiyle de bulunabilir: CPL = CPC / Lead dönüşüm oranı. 30 TL tıklama ve %6 dönüşümde CPL 500 TL olur. Tekrar eden ve sahte kayıtları paydadan çıkarın.",
      },
      {
        question: "İyi bir CPL değeri kaçtır?",
        answer:
          "Sektörden bağımsız bir eşik yoktur. Kendi sınırınızı hesaplayın: Maksimum CPL = Reklama ayrılan maksimum CAC × Lead'den müşteriye oran. Reklama 40.000 TL ayırabilen ve lead'lerinin %5'i müşteri olan şirkette sınır 2.000 TL'dir.",
      },
      {
        question: "CPL ile CPA arasındaki fark nedir?",
        answer:
          "CPL yalnızca lead kazanmanın maliyetidir. CPA, tanımladığınız herhangi bir eylemin maliyetidir; eylem satış, deneme ya da lead olabilir. Lead hedefli kampanyada ikisi aynı sayıya denk gelebilir, bu yüzden CPA'nın neyi saydığını belirtmek gerekir.",
      },
      {
        question: "CPL düşükse kampanya iyi midir?",
        answer:
          "Tek başına söylenemez. Ucuz lead'ler satışa dönmüyorsa CAC yükselir. Karar için CPL'yi SQL başı maliyet ve müşteri başı maliyetle birlikte okuyun; aynı bütçede daha pahalı lead getiren kampanya daha çok müşteri getirebilir.",
      },
    ],
    howTo: {
      name: "Maksimum CPL nasıl hesaplanır?",
      description: "Müşteri değerinden ve dönüşüm oranından geriye giderek ödeyebileceğiniz en yüksek lead maliyetini bulun.",
      steps: [
        { name: "Müşteri değerini bulun", text: "Bir müşterinin ömür boyu brüt kârını (LTV) hesaplayın." },
        { name: "Toplam CAC sınırını koyun", text: "LTV'yi hedef LTV:CAC oranına bölün." },
        { name: "Satış maliyetini düşün", text: "Müşteri başına satış ekibi ve demo maliyetini çıkarın; kalan tutar reklama ayrılabilecek CAC'tır." },
        { name: "Lead-müşteri oranıyla çarpın", text: "Son dönem geçerli lead'lerinin yüzde kaçının müşteri olduğunu bulun ve reklam CAC'ı ile çarpın." },
        { name: "Mevcut CPL ile kıyaslayın", text: "CPL sınırın altındaysa bütçeyi test ederek artırın; üstündeyse önce dönüşüm ve lead kalitesini düzeltin." },
      ],
    },
    relatedToolKey: "ad-budget",
    resources: [
      { label: "Reklam Bütçesi Hesaplama (B2B modu)", href: "/ucretsiz-araclar/reklam-butcesi-hesaplama/" },
      { label: "CAC Hesaplayıcı", href: "/ucretsiz-araclar/cac-hesaplayici/" },
      { label: "CAC Nedir? Müşteri Edinme Maliyeti", href: "/blog/cac-nedir-musteri-edinme-maliyeti/" },
      { label: "LTV Nedir? LTV:CAC Oranı Kaç Olmalı?", href: "/blog/ltv-nedir-ltv-cac-orani/" },
      { label: "B2B Lead Generation Maliyetleri Nasıl Düşürülür?", href: "/blog/b2b-lead-generation-maliyetleri-nasil-dusurulur/" },
      { label: "Dönüşüm Oranı Hesaplayıcı", href: "/ucretsiz-araclar/donusum-orani-hesaplayici/" },
      { label: "Hangi Pazarlama Kanalı Size Uygun? (Quiz)", href: "/ucretsiz-araclar/hangi-pazarlama-kanali-uygun/" },
      { label: "UTM Nedir? UTM Kodu Nasıl Oluşturulur?", href: "/blog/utm-nedir-utm-parametreleri/" },
      { label: "Google Ads Nedir, Nasıl Çalışır?", href: "/blog/google-ads-nedir-nasil-calisir/" },
      { label: "Google Ads Yardım: Çevrimdışı dönüşüm içe aktarma", href: "https://support.google.com/google-ads/answer/2998031", external: true },
      { label: "Google Ads Yardım: Lead'ler için gelişmiş dönüşümler", href: "https://support.google.com/google-ads/answer/15713840", external: true },
      { label: "LocaliQ: Search Advertising Benchmarks", href: "https://localiq.com/blog/search-advertising-benchmarks/", external: true },
    ],
  },
  {
    slug: "instagram-reklam-verme-rehberi",
    seoTitle: "Instagram Reklam Verme: Bütçe, Fiyat ve Adım Adım (2026)",
    title: "Instagram Reklam Verme Rehberi (2026): Fiyatlar, TL Bütçe Hesabı, Öne Çıkar ve Reklam Yöneticisi Adımları",
    description:
      "Instagram'da reklam nasıl verilir, fiyatı ne kadar? Öne Çıkar ve Reklam Yöneticisi adımları, yerleşim ölçüleri, DM reklamı ölçümü ve TL bütçe hesabı örneği.",
    category: "performans-pazarlama",
    tldr: [
      "Instagram'da reklam iki yoldan verilir: uygulamadaki 'Öne Çıkar' düğmesi (profil ziyareti, web sitesi ziyareti veya mesaj için hızlı yol) ya da Meta Reklam Yöneticisi (satış ve lead için tam yol). Satış ölçecekseniz ikincisini kullanın.",
      "Instagram reklamının sabit fiyatı yoktur: bütçeyi siz belirlersiniz, birim maliyet açık artırmada oluşur. Türkçe sayfalardaki CPM ve TBM aralıkları birbirini tutmuyor ve yöntemleri açıklanmıyor; onları yalnızca başlangıç varsayımı sayın.",
      "Örnek: günde 300 TL (ayda 9.000 TL), BGBM 80 TL, tıklama oranı %1, dönüşüm oranı %1,5 → 1.125 tıklama, ≈17 sipariş, sipariş başı reklam ≈533 TL. 1.200 TL sepet ve %40 marjda başabaş 480 TL olduğu için bu kurulum ayda ≈900 TL zarar eder.",
      "Aynı hesapta tıklama oranı %1,5'e çıkarsa sipariş başı maliyet ≈356 TL'ye iner. Bu yüzden ilk iş bütçe artırmak değil, ilk 2 saniyesi güçlü 9:16 kreatif test etmektir.",
    ],
    publishedAt: "2026-11-03",
    readingMinutes: 10,
    tags: ["Instagram Reklam", "Instagram Reklam Fiyatları", "Meta Reklam", "Reels Reklamı", "Reklam Bütçesi", "Öne Çıkar"],
    sections: [
      {
        heading: "Instagram'da reklam nasıl verilir? (Kısa cevap)",
        paragraphs: [
          "Instagram'da reklam vermek için önce hesabınızı profesyonel hesaba (işletme veya içerik üreticisi) geçirin. Sonra iki yoldan birini seçin: mevcut bir gönderiyi uygulamadaki 'Öne Çıkar' düğmesiyle reklama çevirin ya da Meta Reklam Yöneticisi'nde kampanya kurup yerleşimleri Instagram ile sınırlayın. Hedefi, kitleyi, günlük bütçeyi ve süreyi seçer, ödeme yöntemi ekler ve reklamı incelemeye gönderirsiniz.",
          "Bu yazı Instagram'a özgü kararları anlatır: fiyatın nasıl oluştuğu, TL ile bütçe hesabı, hangi yerleşimde hangi ölçünün kullanılacağı, DM reklamının nasıl ölçüleceği. Piksel, Dönüşümler API, kampanya amaçları, Advantage+ ve öğrenme aşaması için Meta Reklam Verme Rehberi'ne bakın. Yazıdaki tüm tutarlar örnek tutarlardır.",
        ],
      },
      {
        heading: "Instagram'da neden reklam verilir? Türkiye'de erişim",
        paragraphs: [
          "DataReportal'ın Digital 2026 Türkiye raporuna göre Meta'nın reklam araçları 2025 sonunda Instagram'da Türkiye'de 62,3 milyon, Facebook'ta 34,7 milyon kişilik reklam erişimi gösteriyordu. Instagram erişimi 18 yaş üstü nüfusun %92,1'ine denk geliyor ve yetişkin kitlenin %53,5'i erkek, %46,5'i kadın olarak görünüyor. Facebook'ta ise yetişkin kitlenin %64,4'ü erkek.",
          "Bu rakamlar aylık aktif kullanıcı sayısı değil, Meta'nın reklam kitlesi tahminidir ve zaman zaman düzeltilir. Pratik sonuç şu: Türkiye'de tüketiciye satan bir işletme için Instagram, Facebook'tan daha geniş ve cinsiyet açısından daha dengeli bir kitle sunuyor. Bu da Instagram'ı yalnızca görsel ürünler için değil, hizmet işletmeleri için de değerlendirmeye değer kılıyor.",
        ],
      },
      {
        heading: "Instagram reklam fiyatları ne kadar?",
        paragraphs: [
          "Instagram reklamının sabit bir fiyat listesi yoktur. Meta reklam alanını açık artırmayla satar: siz bütçeyi belirlersiniz, sistem bu bütçeyi hedefinize göre harcar ve bin gösterim başı maliyet (BGBM/CPM) ile tıklama başı maliyet (TBM/CPC) her hesapta farklı oluşur. Bu yüzden 'Instagram reklamı kaç TL?' sorusunun cevabı bir tutar değil, bir hesaptır.",
          "Türkçe sayfalarda dolaşan aralıklara temkinli yaklaşın. İncelediğimiz sayfalarda BGBM 40–120 TL, TBM ise bir sayfada 1,5–6 TL, diğerinde 2–25 TL görünüyor; bu rakamların hiçbirinde örneklem, dönem ve yöntem açıklanmıyor, bir kısmı açıkça yurt dışı verilerinden 'uyarlanmış'. Yabancı kıyas tablolarının büyük bölümü de ABD ağırlıklıdır ve Türkiye'ye taşınamaz. Bu aralıkları kendi hesabınızın ilk haftasındaki gerçek rakamlar gelene kadar varsayım olarak kullanın.",
          "Maliyet üç bileşenden oluşur: Sipariş başı reklam maliyeti = BGBM / (1.000 × Tıklama oranı × Dönüşüm oranı). Bir bileşen yarıya inerse maliyet iki katına çıkar. Rekabet, sezon ve kitle BGBM'yi; kreatif tıklama oranını; site ve teklif dönüşüm oranını belirler. Kontrolünüz en çok son ikisindedir.",
        ],
        bullets: [
          "Günlük bütçe: uygulamada ve Reklam Yöneticisi'nde siz girersiniz; süreyi ya da toplam tutarı da siz sınırlarsınız",
          "Minimum bütçe: sabit bir TL rakamı yerine hesabın para birimine ve optimizasyon olayına göre değişir; kurulum ekranı geçerli alt sınırı gösterir",
          "BGBM'yi artıranlar: sezon ve indirim dönemleri, dar kitle, aynı kitleye reklam veren rakipler",
          "Tıklama oranını belirleyen: ilk 2 saniye, teklifin netliği, kreatifin yerleşime uygunluğu",
        ],
      },
      {
        heading: "Instagram reklam bütçesi nasıl hesaplanır? TL örneği",
        paragraphs: [
          "Örnek: 1.200 TL sepet, reklam öncesi %40 katkı marjı. Sipariş başı reklama ayrılabilecek en yüksek tutar 480 TL'dir (başabaş), başabaş ROAS 2,5'tir. Günde 300 TL, yani ayda 9.000 TL ayırıyorsunuz. Varsayımlar: BGBM 80 TL, tıklama oranı %1, sitede dönüşüm oranı %1,5.",
          "9.000 / 80 × 1.000 = 112.500 gösterim. %1 tıklama oranıyla 1.125 tıklama, tıklama başı 8 TL. %1,5 dönüşümle 16,9 sipariş. Sipariş başı reklam maliyeti 9.000 / 16,9 = 533 TL, ciro 20.250 TL, ROAS 2,25. Siparişlerin reklam öncesi katkısı 8.100 TL olduğu için ay 900 TL zararla kapanır.",
          "Başabaşa dönmek için tek bir kaldıraç yeterlidir: tıklama başı maliyeti 7,20 TL'ye indirmek (aynı BGBM'de tıklama oranı %1,11) ya da dönüşüm oranını %1,67'ye çıkarmak. Aşağıdaki senaryolar aynı 9.000 TL ile ne kadar farklı sonuç alınabileceğini gösterir:",
        ],
        bullets: [
          "BGBM 60 TL, tıklama oranı %1: 1.500 tıklama, 22,5 sipariş, sipariş başı 400 TL, ROAS 3,00 → kârlı",
          "BGBM 80 TL, tıklama oranı %1: 1.125 tıklama, 16,9 sipariş, sipariş başı 533 TL, ROAS 2,25 → zarar",
          "BGBM 120 TL, tıklama oranı %1: 750 tıklama, 11,3 sipariş, sipariş başı 800 TL, ROAS 1,50 → ağır zarar (yoğun sezon)",
          "BGBM 80 TL, tıklama oranı %1,5: 1.688 tıklama, 25,3 sipariş, sipariş başı 356 TL, ROAS 3,38 → kârlı (daha iyi kreatif)",
        ],
      },
      {
        heading: "Günde ne kadar bütçeyle başlanmalı?",
        paragraphs: [
          "İki sınır vardır. Alt sınır, sonucu okuyabilecek kadar veri toplamaktır. Satın alma için optimize ediyorsanız Meta, reklam setinin son önemli düzenlemeden sonraki 7 günde yaklaşık 50 olay toplamasını bekler: 360 TL hedef maliyetle bu, günde yaklaşık 2.571 TL demektir. Küçük bütçede bu sayıya ulaşılmaz.",
          "Bu yüzden günde 300 TL ile satın alma optimizasyonu kurmak yerine daha sık gerçekleşen bir olayı (ödeme başlatma, sepete ekleme) ya da DM hedefini seçin, tek reklam seti kullanın ve 7 gün dokunmayın. Üst sınır ise ay sonunda kaybetmeyi göze alabileceğiniz test tutarıdır. Hedef ciro ve marjdan geriye kesin tutarı Reklam Bütçesi Hesaplama aracıyla bulabilirsiniz.",
        ],
      },
      {
        heading: "Öne Çıkar mı, Reklam Yöneticisi mi?",
        paragraphs: [
          "İkisi aynı reklam sistemini kullanır; fark, kontrol ve ölçümdedir. Öne Çıkar, iyi performans gösteren organik bir gönderiyi birkaç dokunuşla kitleye taşımak için uygundur. Reklam Yöneticisi ise amaç, olay, kitle ve kreatif testini yönetmek içindir.",
        ],
        bullets: [
          "Öne Çıkar'ı seçin: tek gönderiyi daha çok kişiye göstermek, profil ziyareti veya mesaj almak, yerel işletme duyurusu, küçük bütçeli hızlı deneme",
          "Reklam Yöneticisi'ni seçin: e-ticaret satışı, form ile lead, piksel olayına göre optimizasyon, yeniden pazarlama, A/B testi, katalog reklamları",
          "Pratik yol: organikte en iyi çalışan gönderileri Öne Çıkar ile hızlı test edin, kazanan açıyı Reklam Yöneticisi'nde satış kampanyasına taşıyın",
        ],
      },
      {
        heading: "Instagram uygulamasından reklam nasıl verilir?",
        paragraphs: [
          "Öne Çıkar akışı telefonda birkaç dakikada tamamlanır. Menü adları uygulama sürümüne göre küçük farklılıklar gösterebilir.",
        ],
        bullets: [
          "Hesabı profesyonel hesaba geçirin: Ayarlar › Hesap türü ve araçlar; ücretsizdir",
          "Öne çıkaracağınız gönderi, Reels veya hikâyeyi açıp 'Öne Çıkar'a dokunun",
          "Hedefi seçin: profil ziyaretleri, web sitesi ziyaretleri veya mesajlar; web sitesi seçiyorsanız UTM'li bağlantı kullanın",
          "Kitleyi seçin: otomatik kitle ya da konum, yaş ve ilgi alanıyla kendi kitleniz",
          "Günlük bütçeyi ve süreyi girin; ekrandaki tahmini erişim bir tahmindir, garanti değildir",
          "Ödeme yöntemini ekleyin, önizlemeyi kontrol edip gönderin; reklam incelemeden sonra yayına girer",
        ],
      },
      {
        heading: "Reklam Yöneticisi'nden yalnızca Instagram'a reklam nasıl verilir?",
        paragraphs: [
          "Hesap, piksel ve ödeme kurulumu Meta rehberindeki gibidir. Instagram'a özgü adımlar şunlardır:",
        ],
        bullets: [
          "Kampanya amacını iş sonucuna göre seçin: satış için Satışlar, form için Potansiyel Müşteriler, DM için Etkileşim veya mesaj hedefli amaç",
          "Reklam setinde 'Manuel yerleşimler'i seçin, Facebook, Messenger, Threads ve Audience Network işaretlerini kaldırın, yalnızca Instagram satırlarını bırakın",
          "Reklam düzeyinde kimlik olarak Instagram hesabınızı seçin; yorumlar ve profil ziyaretleri bu hesapta birikir",
          "Yerleşim başına ayrı kreatif yükleyin: 9:16 video Reels ve Hikâyeler'e, 4:5 görsel akışa",
          "Bağlantıya UTM ekleyin: utm_source=instagram, utm_medium=paid_social",
        ],
      },
      {
        heading: "Yalnızca Instagram seçmek mantıklı mı?",
        paragraphs: [
          "Her zaman değil. Yerleşimi daraltmak sisteme gösterim satın alabileceği daha az alan bırakır, bu yüzden Meta genellikle Advantage+ yerleşimlerini önerir. Ama kreatifiniz yalnızca Reels için çekildiyse, kitleniz Instagram'daysa ya da marka bilinirliği için görünürlüğü kontrol etmek istiyorsanız manuel seçim anlamlıdır. Sağlıklı yöntem ikisini A/B testiyle karşılaştırmak ve kararı BGBM'ye değil sipariş başı maliyete göre vermektir.",
        ],
      },
      {
        heading: "Instagram reklam ölçüleri ve yerleşimleri",
        paragraphs: [
          "Instagram reklamları akış, profil akışı, Hikâyeler, Reels, Keşfet ve arama sonuçlarında görünebilir. Aşağıdaki değerler 2026'da yaygın kullanılan ölçülerdir; Meta belirli aralıklarda güncellediği için yayın öncesi Reklam Yöneticisi önizlemesinden ve Meta Ads Guide'dan kontrol edin.",
        ],
        bullets: [
          "Akış: 4:5 (1080 × 1350) önerilir, 1:1 (1080 × 1080) da kullanılır; birincil metnin ilk ≈125 karakteri görünür",
          "Hikâyeler: 9:16 (1080 × 1920); üstte ≈%14, altta ≈%20 alanı boş bırakın",
          "Reels: 9:16 (1080 × 1920); üstte ≈%14, altta ≈%35, sağda ≈%12 alanı arayüz kaplar, metin ve logoyu bu alanların dışına koyun",
          "Keşfet: 1:1 veya 4:5",
          "Carousel: 2–10 kart; kartlar aynı oranda olmalı",
          "Dosya: JPG/PNG görsel 30 MB'a, MP4/MOV video 4 GB'a kadar",
        ],
      },
      {
        heading: "Instagram'da hangi kreatif işe yarar?",
        paragraphs: [
          "Yukarıdaki hesapta en güçlü kaldıraç tıklama oranıydı: %1'den %1,5'e çıkmak, sipariş başı maliyeti 533 TL'den 356 TL'ye indirdi. Instagram'da kreatif, profesyonel prodüksiyon değil, akışa uyum meselesidir. Banner gibi görünen reklam kaydırılır; telefonla çekilmiş ürün kullanımı çoğu zaman daha doğal görünür.",
        ],
        bullets: [
          "İlk 2 saniyede sorun ya da sonuç gösterin; logo ile başlamayın",
          "Sessiz izlenecek gibi tasarlayın: altyazı veya ekranda kısa metin",
          "Aynı teklifi 3 açıyla test edin: sorun–çözüm, kullanım anı, müşteri deneyimi (gerçek ve izinli)",
          "Fiyatı ve kargo avantajını saklamayın; tıklayıp vazgeçen kitle bütçeyi yer",
          "Müzik: reklamda telif sorunu olmayan ses kullanın; lisanssız müzik Öne Çıkar'ı engeller",
        ],
      },
      {
        heading: "Instagram DM reklamı nasıl ölçülür?",
        paragraphs: [
          "Türkiye'de birçok küçük işletme satışı DM'den kapatır. Mesaj hedefli reklam bu akışa uygundur, ama satış sitede gerçekleşmediği için piksel görmez ve panel yalnızca başlatılan konuşmayı gösterir. Ölçümü elle kurmazsanız 'çok mesaj geliyor' hissiyle bütçe yanarsınız.",
          "Örnek: 3.000 TL harcama, 60 konuşma (konuşma başı 50 TL). Kayıtlara göre konuşmaların %15'i siparişe dönüyor: 9 sipariş, sipariş başı reklam 333 TL. Marjınız 480 TL bırakıyorsa kârlısınız; aynı işletmede dönüşüm %8'e düşerse sipariş başı 625 TL olur. Karar için konuşma başı maliyeti değil, sipariş başı maliyeti izleyin.",
        ],
        bullets: [
          "Hazır yanıt ve sabit bir ilk mesajla reklamdan geleni ayırın (ör. reklamdaki kod)",
          "Her hafta konuşma, sipariş ve iptal sayısını tabloya yazın",
          "Yanıt süresini izleyin: geç cevaplanan DM satışa dönmez, reklam bütçesi boşa gider",
          "Hazır sorularla (fiyat, kargo, beden) satın alma niyeti olanı ayırın",
        ],
      },
      {
        heading: "İş ortaklığı reklamları nedir, işe yarar mı?",
        paragraphs: [
          "İş ortaklığı reklamları (partnership ads), bir içerik üreticisinin gönderisini ya da onun adıyla birlikte oluşturulan reklamı hem üreticinin hem markanın kimliğiyle yayınlamanızı sağlar. Bu nedenle sıradan bir marka reklamından daha doğal görünür.",
          "Meta'nın Ekim 2026'da yayımladığı içerik üretici raporunda, EMEA'da 20 dönüşüm artışı (lift) çalışmasında varlıkların en az %30'unu iş ortaklığı reklamına ayıran reklamverenlerde artımlı satın alma başı medyan maliyetin %45 düştüğü belirtiliyor. Rakam dikkate değer ama temkinli okunmalı: veri platformun kendi araçlarıyla ölçülmüş, Ocak–Haziran 2025 dönemini kapsıyor ve %92 güven düzeyinde raporlanmış. En sağlıklısı kendi hesabınızda aynı teklifle marka reklamına karşı test etmektir.",
        ],
      },
      {
        heading: "Instagram reklamı neden yayınlanmaz veya öne çıkarılamaz?",
        paragraphs: [
          "Reklam reddi çoğu zaman politika, hesap ya da teknik bir sebepten kaynaklanır. Sık görülen nedenler:",
        ],
        bullets: [
          "Hesap kişisel hesap: profesyonel hesaba geçin",
          "Hesap çok yeni: Hootsuite'in derlemesine göre 30 günden yeni hesaplar öne çıkaramayabilir",
          "Telifli müzik: uygun bir sesle değiştirin ya da sesi kaldırın",
          "Bağlı Facebook sayfasında yönetici yetkiniz yok",
          "Ölçü uyumsuz: Reels için 9:16 kullanın",
          "Bazı etkileşimli çıkartmalar: gönderide engel oluşturuyorsa kaldırın",
          "Hesap kısıtı veya ödeme sorunu: Hesap Kalitesi ekranından nedeni görün, reddedilen reklam için inceleme isteyin",
          "Reklam politikası: sağlık vaatleri, önce–sonra görselleri, kişisel özelliklere doğrudan hitap eden metinler sık reddedilir",
        ],
      },
      {
        heading: "Instagram reklamında en sık yapılan hatalar",
        paragraphs: [
          "Hataların çoğu ölçmeden para harcamaktan gelir:",
        ],
        bullets: [
          "Satış isterken beğeni veya profil ziyareti hedeflemek",
          "Takipçi sayısını sonuç saymak; takipçi sipariş değildir",
          "Başabaş maliyeti bilmeden 'pahalı' ya da 'ucuz' demek",
          "Kreatifi yerleşime uyarlamamak: 1:1 görseli Reels'te kırpılmış göstermek",
          "UTM kullanmamak ve GA4'te trafiği yanlış kanalda görmek",
          "İlk 3 günde durdurmak ya da her gün bütçe ve kitle değiştirmek",
          "Mobilde yavaş açılan açılış sayfasına trafik göndermek; reklamın nerede olduğu kadar tıklamanın nereye gittiği önemlidir",
        ],
      },
    ],
    faq: [
      {
        question: "Instagram'da reklam vermek ne kadar?",
        answer:
          "Sabit fiyat yoktur; bütçeyi siz belirlersiniz. Birim maliyet açık artırmada oluşur ve sektöre, sezona ve kreatife göre değişir. Sipariş başı maliyet = BGBM / (1.000 × Tıklama oranı × Dönüşüm oranı). Örnek: BGBM 80 TL, tıklama %1, dönüşüm %1,5 ise sipariş başı reklam ≈533 TL olur.",
      },
      {
        question: "Instagram reklamı için günde kaç TL yeterli?",
        answer:
          "Tek bir doğru tutar yok; alt sınır kurulum ekranında görünür. Satın alma optimizasyonu için haftada yaklaşık 50 olay hedefi vardır: hedef maliyet × 50 / 7. Bu tutarın altındaysanız daha sık gerçekleşen bir olayı ya da mesaj hedefini seçin ve tek reklam seti kullanın.",
      },
      {
        question: "Instagram'da reklam vermek için işletme hesabı gerekir mi?",
        answer:
          "Evet, öne çıkarmak için profesyonel hesap (işletme veya içerik üreticisi) gerekir. Geçiş ücretsizdir ve uygulama ayarlarından birkaç dokunuşla yapılır.",
      },
      {
        question: "Öne çıkar mı, Reklam Yöneticisi mi daha iyi?",
        answer:
          "Tek gönderiyi hızlıca daha çok kişiye göstermek için Öne Çıkar yeterlidir. Satış, lead, yeniden pazarlama ve test için Reklam Yöneticisi gerekir; çünkü optimizasyon olayını, kitleyi ve kreatif varyasyonlarını burada yönetirsiniz.",
      },
      {
        question: "Instagram reklam ölçüleri nedir?",
        answer:
          "Yaygın ölçüler: akış 4:5 (1080 × 1350), Hikâyeler ve Reels 9:16 (1080 × 1920), Keşfet 1:1 veya 4:5. Reels'te altta yaklaşık %35 ve üstte %14'lük alanı metinsiz bırakın; yayın öncesi Reklam Yöneticisi önizlemesini kontrol edin.",
      },
      {
        question: "Instagram reklamı takipçi kazandırır mı?",
        answer:
          "Profil ziyareti hedefi takipçi getirebilir, ama amaç satışsa doğru ölçü takipçi değil sipariş başı maliyettir. Takipçiyi yalnızca yeniden pazarlama kitlesi olarak değerliyse hedefleyin.",
      },
    ],
    howTo: {
      name: "Instagram'da reklam adım adım nasıl verilir?",
      description: "Profesyonel hesaptan yayına kadar Instagram reklamı kurulumu.",
      steps: [
        { name: "Hesabı hazırlayın", text: "Instagram hesabınızı profesyonel hesaba geçirin; satış ölçecekseniz reklam hesabı, ödeme yöntemi ve Meta pikselini kurun." },
        { name: "Bütçeyi hesaplayın", text: "Sepet ve marjdan başabaş sipariş maliyetini bulun, BGBM, tıklama oranı ve dönüşüm oranı varsayımıyla ay sonu sonucunu hesaplayın." },
        { name: "Yolu seçin", text: "Hızlı duyuru ve mesaj için Öne Çıkar'ı, satış ve lead için Reklam Yöneticisi'ni kullanın." },
        { name: "Hedefi, kitleyi ve yerleşimi belirleyin", text: "İş sonucuna uygun hedefi seçin; kitleyi konum ve yaşla sınırlayın, yerleşimlere uygun ölçüde kreatif yükleyin." },
        { name: "Yayınlayın ve ölçün", text: "UTM'li bağlantıyla yayınlayın, ilk 7 günde yapıyı değiştirmeyin; kararı sipariş başı maliyet ve kendi sipariş verinize göre verin." },
      ],
    },
    relatedToolKey: "ad-budget",
    resources: [
      { label: "Reklam Bütçesi Hesaplama Aracı", href: "/ucretsiz-araclar/reklam-butcesi-hesaplama/" },
      { label: "ROAS Hesaplayıcı", href: "/ucretsiz-araclar/roas-hesaplayici/" },
      { label: "Kar Marjı Hesaplama", href: "/ucretsiz-araclar/brut-kar-marji-hesaplayici/" },
      { label: "UTM Link Oluşturucu", href: "/ucretsiz-araclar/utm-link-olusturucu/" },
      { label: "Meta Reklam Verme Rehberi", href: "/blog/meta-reklam-verme-rehberi/" },
      { label: "Meta Ads Öğrenme Aşamasından Çıkma", href: "/blog/meta-ads-ogrenme-asamasindan-cikma-taktikleri/" },
      { label: "ROAS Nedir, Nasıl Hesaplanır?", href: "/blog/roas-nedir-nasil-hesaplanir/" },
      { label: "Reklam Bütçesi Nasıl Belirlenir?", href: "/blog/reklam-butcesi-nasil-belirlenir/" },
      { label: "DataReportal: Digital 2026 Türkiye", href: "https://datareportal.com/reports/digital-2026-turkey" },
      { label: "PPC Land: Meta iş ortaklığı reklamları raporu", href: "https://ppc.land/meta-says-partnership-ads-cut-incremental-purchase-costs-45-in-emea-tests/" },
      { label: "Hootsuite: Instagram'da neden öne çıkarılamıyor?", href: "https://blog.hootsuite.com/cannot-boost-on-instagram" },
    ],
  },
  {
    slug: "seo-nedir-nasil-yapilir",
    seoTitle: "SEO Nedir, Nasıl Yapılır? 2026 Adım Adım Rehber",
    title: "SEO Nedir, Nasıl Yapılır? Google'ın İşleyişi, 7 Adımlı Uygulama, AI Aramaları ve Kendini Ödeme Hesabı (2026)",
    description:
      "SEO, sitenizi Google'ın ücretsiz sonuçlarında öne çıkarma işidir. 7 adımlı uygulama, AI Overviews etkisi, SEO efsaneleri ve kendini ödeme hesabı bu rehberde.",
    category: "performans-pazarlama",
    tldr: [
      "SEO (arama motoru optimizasyonu), sitenizin Google gibi arama motorlarının ücretsiz sonuçlarında insanların aradığı sorgular için daha görünür olmasını sağlayan teknik, içerik ve otorite çalışmasıdır. Reklamdan farkı: tıklama başına ödeme yapmazsınız, ama sonuç aylara yayılır ve hiçbir sıra garanti edilemez.",
      "Google üç aşamada çalışır: tarama, dizine ekleme, sonuç sunma. İşe sorunun hangi aşamada olduğunu bularak başlayın; dizinde olmayan sayfanın başlığını düzeltmek hiçbir şey değiştirmez.",
      "SEO 7 adımda yapılır: ölçümü kurun, talebi olan sorguları seçin, niyeti SERP'te doğrulayın, sorudan daha iyi bir sayfa yazın, sayfa içi öğeleri düzenleyin, iç link verin, sonra otorite kazanın ve ölçün.",
      "AI Overviews SEO'yu bitirmedi ama tıklamayı azalttı: Ahrefs, özet çıkan sorgularda ilk sıranın tıklama oranını tahmine göre yaklaşık %58 düşük buldu (masaüstü, korelasyon). Google ise bu özetlerde görünmek için ek bir gereksinim olmadığını söylüyor.",
      "Karar hesabı: Gerekli aylık ziyaret = Aylık SEO gideri / (Dönüşüm oranı × Sipariş başı katkı). Örnek tutarlarla 15.000 TL, %1,5 ve 480 TL için ayda 2.083 organik ziyaret gerekir. Bu rakamı hedef sorgularınızın hacmiyle karşılaştırmadan bütçe ayırmayın.",
    ],
    publishedAt: "2026-11-04",
    readingMinutes: 12,
    tags: ["SEO", "SEO Nedir", "Arama Motoru Optimizasyonu", "Teknik SEO", "Anahtar Kelime", "AI Overviews"],
    sections: [
      {
        heading: "SEO nedir? (Kısa cevap)",
        paragraphs: [
          "SEO (Search Engine Optimization, arama motoru optimizasyonu), bir web sitesinin Google ve Bing gibi arama motorlarının reklam dışı (organik) sonuçlarında, hedef kitlesinin aradığı sorgular için daha üst sıralarda ve daha sık görünmesini sağlayan çalışmaların tümüdür. Üç işten oluşur: arama motorunun sayfanızı bulup okuyabilmesi (teknik), sayfanın sorguya en iyi cevabı vermesi (içerik) ve başka sitelerin sizi kaynak göstermesi (otorite).",
          "SEO'nun iki sınırını baştan bilin. Birincisi, organik sonuçlar için Google'a para ödenmez ve reklam vermek organik sıranızı değiştirmez; Google bu ayrımı resmî dokümanında açıkça yazıyor. İkincisi, kimse birinci sıra garantisi veremez. Google, sıralama garantisi veren ya da Google ile 'özel ilişkisi' olduğunu söyleyen SEO hizmetlerine karşı uyarıyor.",
          "Bu rehber, kendi sitemizde sıfırdan yürüttüğümüz SEO çalışmasından çıkan kararlarla yazıldı. Çalışmanın arama hacmi tablosu ve günlük kayıtları herkese açık depoda duruyor; aşağıdaki örneklerin bir kısmı oradan geliyor.",
        ],
      },
      {
        heading: "Google nasıl çalışır? Tarama, dizine ekleme, sonuç sunma",
        paragraphs: [
          "Google bir sayfayı üç aşamadan geçirir ve her sayfa üçünü de tamamlamaz. Tarama: Googlebot sayfayı linkler, site haritası ve bilinen URL'ler üzerinden bulur, indirir ve JavaScript'i işler. Dizine ekleme: içeriği analiz eder, benzer sayfaları gruplar ve grubu temsil edecek standart (canonical) sayfayı seçer. Sonuç sunma: kullanıcı arama yaptığında dizindeki sayfalar arasından konum, dil ve cihaza göre en alakalı olanları gösterir.",
          "Bu ayrımın pratik değeri teşhistir. 'SEO'm çalışmıyor' cümlesi üç farklı soruna karşılık gelebilir ve çözümleri tamamen farklıdır. Search Console'un URL Denetimi aracı sayfanın hangi aşamada kaldığını söyler:",
        ],
        bullets: [
          "'URL Google'da yok': Google sayfayı henüz bilmiyor. Çözüm içerik değil keşiftir: iç link, güncel site haritası, gerekiyorsa dizine ekleme isteği",
          "'Keşfedildi, şu anda dizine eklenmedi': Google adresi biliyor ama taramayı ertelemiş. Genelde site otoritesi ve iç link azlığına işaret eder",
          "'Tarandı, şu anda dizine eklenmedi': sayfa okundu ama dizine değer görülmedi. İçeriği benzerlerinden ayırın, güçlü sayfalardan iç link verin",
          "Dizinde ama gösterim yok: sayfa sorguyla eşleşmiyor ya da otorite yetmiyor. Başlığı, niyeti ve rakipleri kontrol edin",
          "Gösterim var, tıklama yok: başlık ve açıklama cevap vaat etmiyor ya da sıra çok geride. Sırayı 8-20 bandına taşıyan sayfalara öncelik verin",
        ],
      },
      {
        heading: "SEO türleri nelerdir?",
        paragraphs: [
          "SEO dört alana ayrılır. Hepsi aynı anda değil, sırayla ele alınır: teknik sorun varsa içerik üretmek yavaş ilerler, içerik yoksa link almak için neden kalmaz.",
        ],
        bullets: [
          "Teknik SEO: taranabilirlik, dizine eklenebilirlik, hız, mobil uyum, yönlendirmeler, canonical, yapılandırılmış veri",
          "Sayfa içi SEO: başlık (title), açıklama, H1 ve alt başlıklar, URL, görsel alternatif metni, iç linkler",
          "İçerik SEO'su: hangi sorguya hangi sayfanın cevap vereceği, konu kümeleri, güncelleme",
          "Site dışı SEO: başka sitelerden alınan linkler (backlink), marka anılmaları, dijital PR",
          "Yerel SEO: fiziksel işletmeler için Google İşletme Profili, yorumlar ve yerel sorgular. Tek şubeli bir işletme için çoğu zaman ilk iştir",
        ],
      },
      {
        heading: "SEO nasıl yapılır? 7 adımda uygulama",
        paragraphs: [
          "Aşağıdaki sıra, yeni ya da küçük bir site için en az boşa giden yoldur. Her adım bir öncekinin çıktısını kullanır.",
        ],
        bullets: [
          "1. Ölçümü kurun: Search Console ve GA4'ü bağlayın, site haritasını gönderin. Başlangıç değerlerini not edin; karşılaştırma için ilk gün lazım",
          "2. Talebi olan sorguları seçin: Keyword Planner gibi bir araçla hacmi doğrulayın, hacmi olmayan konuyu listeden çıkarın",
          "3. Niyeti SERP'te doğrulayın: sorguyu arayın, ilk 5-8 sonucun türüne (rehber, araç, ürün, liste) bakın. Google'ın gösterdiği tür, kullanıcının istediği türdür",
          "4. İlk üç sonucu okuyup eksiklerini listeleyin: hesap örneği, güncellik, resmî kaynak, deneyim. Yazmaya bu listeden başlayın",
          "5. Sayfayı yazın ve sayfa içi öğeleri düzenleyin: ilk paragrafta doğrudan cevap, soru biçimli alt başlıklar, benzersiz başlık ve açıklama",
          "6. İç link verin: yeni sayfaya en az iki güçlü sayfadan link, yeni sayfadan ilgili sayfalara link. Google yeni sayfaların çoğunu linkler üzerinden buluyor",
          "7. Ölçün ve güncelleyin: birkaç hafta bekleyin, Search Console'da sorgu ve sırayı okuyun, gösterim alan ama tıklanmayan sayfaları güçlendirin. Sonra otorite (link) işine geçin",
        ],
      },
      {
        heading: "Anahtar kelime nasıl seçilir? Hacim ve niyet örnekleri",
        paragraphs: [
          "En pahalı SEO hatası, kimsenin aramadığı konuya iyi yazı yazmaktır. Sezgi burada yanıltır. Kendi çalışmamızdan bir örnek: 'cac hesaplama', 'ltv hesaplama' ve 'churn rate hesaplama' sorgularını hedef almıştık. Keyword Planner'da (Türkiye, son 12 ay ortalaması, Ekim 2026) üçü de 0-10 bandında kaldı ya da hiç veri vermedi; aynı konularda 'cac nedir' 320, 'ltv nedir' 210, 'churn nedir' 210 arama alıyordu. Hedef listesi tek bir tabloyla değişti.",
          "Hacim yetmez, niyeti de kontrol edin. 'ltv nedir' sonuçlarının bir kısmı müşteri değerini değil kredi/teminat oranını (loan-to-value) anlatıyor; 'arpa nedir' aramalarının çoğu tahıl içindir. Google'ın ilk sayfasında ne gördüğünüz, sorguyu kimin aradığını size söyler.",
          "Sıralama fırsatını da tahmin edin: Aylık tıklama ≈ Aylık hacim × Tıklama oranı. Ahrefs'in toplulaştırılmış masaüstü verisinde (Aralık 2025) birinci sıranın tıklama oranı AI Overview çıkmayan bilgi sorgularında %3,9, AI Overview çıkan sorgularda %1,6. 'seo nedir' (5.400 arama/ay) için bu, birinci sırada bile ayda yaklaşık 86-211 tıklama demektir. Yüksek hacim, yüksek trafik anlamına gelmez; hesap yapmadan beklenti kurmayın.",
        ],
        bullets: [
          "Bilgi niyeti ('roas nedir'): rehber yazı. Çoğu zaman AI Overview çıkar, tıklama düşer ama marka güveni kazandırır",
          "Araç niyeti ('desi hesaplama', 14.800 arama/ay): çalışan hesaplayıcı. Özet hesabı yapamadığı için tıklamanın daha iyi korunması beklenir",
          "İşlem niyeti ('seo danışmanı'): hizmet sayfası. Hacim düşük olsa da lead değeri yüksektir",
          "Marka ve navigasyon ('trendyol satıcı paneli'): hedeflemeyin, kullanıcı zaten belli bir siteye gidiyor",
        ],
      },
      {
        heading: "Sayfa içi SEO kontrol listesi",
        paragraphs: [
          "Yayından önce her sayfada aynı listeyi geçin. Bu maddeler sıralamayı tek başına yükseltmez ama eksik olduklarında iyi içeriği de geride tutar.",
        ],
        bullets: [
          "Title: sayfaya özgü, net, yaklaşık 60 karakter; ana sorgu başta. Google başlığı değiştirebilir ama çoğunlukla sizin yazdığınızdan üretir",
          "Meta açıklama: 120-160 karakter; sorunun cevabını ya da sayfadaki farkı söyleyin. Sıralamaya değil tıklamaya hizmet eder",
          "Tek H1 ve mantıklı alt başlıklar: hiyerarşi okur içindir; Google başlık sırasının aramayı etkilemediğini yazıyor",
          "İlk paragraf: sorunun doğrudan cevabı. Hem okur hem öne çıkan snippet hem de AI özetleri için en değerli yer",
          "URL: kısa ve okunur (/blog/seo-nedir-nasil-yapilir/). Anahtar kelimenin URL'deki etkisi çok küçüktür, yayındaki URL'yi bunun için değiştirmeyin",
          "Görseller: ne gösterdiğini anlatan alternatif metin, sıkıştırılmış dosya",
          "Yapılandırılmış veri: görünür içerikle eşleşen Article, FAQPage, BreadcrumbList, Product. İçerikte olmayanı işaretlemeyin",
        ],
      },
      {
        heading: "Teknik SEO'da önce neye bakılır?",
        paragraphs: [
          "Küçük sitelerde teknik SEO çoğunlukla birkaç temel sorundan ibarettir. Tam denetimden önce şu kontrolleri yapın.",
          "İçerik JavaScript ile sonradan yükleniyorsa dikkat edin: Google JavaScript'i işleyebilir ama bazı AI tarayıcıları çalıştırmayabilir ve Google'da da işleme ek süre alır. Tek sayfalık uygulamalarda sunucu tarafı ya da statik çıktı (SSG) en güvenli yoldur. Bu site de React ile yazıldı ama her sayfa önceden HTML olarak üretiliyor.",
        ],
        bullets: [
          "Robots.txt önemli sayfaları engellemiyor; sayfalarda yanlışlıkla noindex yok",
          "Site haritası güncel ve Search Console'da okunuyor: son okunma tarihini takip edin. Bizim sitede bu tarih geride kaldığında yeni sayfalar günlerce 'URL Google'da yok' görünmeye devam etti",
          "Tek adres kuralı: http/https, www ve sondaki '/' tek bir canonical sürüme 301 ile gidiyor",
          "Mobilde sorunsuz: Google siteyi mobil sürümünden değerlendirir",
          "Önemli Web Verileri: LCP en fazla 2,5 saniye, INP en fazla 200 ms, CLS en fazla 0,1. Bu eşikler iyi deneyim hedefidir; tek başına sıra getirmez",
          "Çok dilli sitelerde hreflang karşılıklı ve her sürüm kendi canonical'ında",
          "Kırık iç link ve yönlendirme zinciri yok",
        ],
      },
      {
        heading: "Backlink nedir, nasıl kazanılır?",
        paragraphs: [
          "Backlink, başka bir sitenin sizin sayfanıza verdiği linktir. Google linkleri hem yeni sayfaları bulmak hem de önemi anlamak için kullanır; ama PageRank birçok sinyalden yalnızca biridir. Bir ilgili ve gerçek sitenin yazı içi linki, yüzlerce dizin linkinden daha değerlidir.",
          "Sıralama amacıyla link almak ya da satmak Google'ın spam politikalarına aykırıdır. Ücretli sponsorluk linkleri rel='sponsored' veya rel='nofollow' ile işaretlenmelidir. Bu nedenle kalıcı yol, link verilmeye değer bir şey üretmektir.",
        ],
        bullets: [
          "Araç: başka sitelerin yazılarına ekleyebileceği gömülebilir hesaplayıcılar (bizim Desi ve ROAS araçlarımızda 'Bu aracı sitene ekle' kutusu bu yüzden var)",
          "Şablon: kayıtsız indirilebilen Excel dosyaları",
          "Özgün veri: kendi ölçümünüzle ürettiğiniz, başkasının alıntılayabileceği rakamlar",
          "Konuk yazı: yalnızca konusu size uyan yayınlarda, gerçekten faydalı bir yazıyla",
          "Marka anılması: linksiz bahsedilen yerlerden kibarca link istemek",
        ],
      },
      {
        heading: "AI Overviews SEO'yu bitirdi mi?",
        paragraphs: [
          "Hayır, ama tıklama hesabını değiştirdi. Ahrefs'in 300.000 anahtar kelimelik çalışmasına göre AI Overview çıkan sorgularda birinci sıranın masaüstü tıklama oranı, özet olmasaydı beklenen değerin yaklaşık %58 altında kaldı (Aralık 2025). Bu bir korelasyondur ve aynı dönemde öne çıkan snippet gibi başka özellikler de tıklamayı etkiliyor; yine de bilgi sorgularında 'birinci sıra = bol trafik' varsayımı artık geçerli değil.",
          "Google'ın resmî tutumu nettir: AI Overviews ve AI Mode'da görünmek için ek gereksinim yok; sayfanın dizinde ve snippet'e uygun olması yeterli, yeni bir AI metin dosyası ya da özel şema gerekmiyor. Yani önce SEO temeli. Bu özetlerden gelen trafik de ayrı değil, Search Console'da 'Web' arama türünün içinde raporlanıyor. Bu yüzden llms.txt gibi dosyaları Google sıralaması için değil, diğer AI araçları için düşük maliyetli bir ek olarak görün.",
          "Pratikte üç değişiklik yapın: hesap, araç ve özgün veri içeren sayfalara ağırlık verin (özet bunları tam karşılayamaz); her bölümü tek başına anlaşılır, kaynaklı bir cevapla açın; başarıyı yalnızca tıklamayla değil marka aramalarının artışıyla da ölçün. Ayrıntılar GEO rehberimizde.",
        ],
      },
      {
        heading: "SEO'da hangi bilgiler yanlış ya da eski?",
        paragraphs: [
          "Türkçe rehberlerin önemli bir kısmı kaynak göstermeden aynı iddiaları tekrarlıyor. İncelediğimiz güncel bir sayfada aynı anda '%1-2 kelime yoğunluğu' ile bu orana uymayan tekrar sayısı öneriliyordu. Google'ın kendi dokümanına göre durum şöyle:",
        ],
        bullets: [
          "'Meta keywords etiketi gerekli': Google Arama bu etiketi kullanmıyor",
          "'Doğru anahtar kelime yoğunluğu %1-2': Google'da böyle bir oran yok; aşırı tekrar ise spam politikasına aykırı",
          "'Yazı en az 2.000 kelime olmalı': Google, sihirli bir kelime sayısı, alt ya da üst sınır olmadığını yazıyor",
          "'Alan adında anahtar kelime olmalı': Google'a göre etkisi, sonuçtaki URL yolunda görünmenin ötesinde neredeyse yok",
          "'E-E-A-T bir sıralama faktörüdür': Google doğrudan 'hayır' diyor; güven sinyalleri içerik kalitesini anlatan bir çerçeve",
          "'Kopya içerik cezası': Kopya içerik cezalandırılmaz, ama tarama kaynağını boşa harcar",
          "'AI ile yazılan içerik yasak': yöntem değil sonuç önemli. Yasak olan, kullanıcıya değer katmadan yapay zekâyla toplu sayfa üretmektir",
          "'SEO bir kere yapılır': algoritma, rakipler ve sorgular değişir. Google 2026'da yalnızca Kasım başına kadar iki çekirdek güncelleme (Mart, Mayıs) ve dört spam güncellemesi yayınladı",
        ],
      },
      {
        heading: "SEO ne kadar sürede sonuç verir?",
        paragraphs: [
          "Tek bir süre yoktur. Google, değişikliklerin bazısının birkaç saatte, bazısının birkaç ayda etkisini gösterebileceğini ve değerlendirme için birkaç hafta beklemek gerektiğini yazıyor. Süreyi belirleyen şey sitenin geçmişi, rekabet ve Google'ın sayfayı ne kadar çabuk bulduğudur.",
          "Yeni bir sitede ilk işaret tıklama değil, gösterimdir. Bizim çalışmamızda sıra şöyle ilerledi: önce sayfalar dizine girdi, sonra gösterimler 60-90. sıralardan başladı, ardından düşük rekabetli 'nedir' sorguları ilk 20'ye yaklaştı. Bu aşamada ortalama sıra düşebilir; yeni sayfalar derinden girdiği için bu kötü işaret değildir. Yüksek rekabetli sorgularda (desi, Trendyol hesaplama) gösterim daha geç gelir.",
        ],
      },
      {
        heading: "SEO kendini ne zaman öder? Hesap örneği",
        paragraphs: [
          "SEO bedava değildir: ajans, danışman ya da kendi zamanınız bir maliyettir. Bütçe ayırmadan önce başabaş trafiği hesaplayın. Formül: Gerekli aylık ziyaret = Aylık SEO gideri / (Dönüşüm oranı × Sipariş başı katkı).",
          "Örnek tutarlar: aylık SEO gideri 15.000 TL, organik dönüşüm oranı %1,5, sipariş başı reklam öncesi katkı 480 TL. Bir ziyaretin değeri 0,015 × 480 = 7,20 TL'dir. Gerekli ziyaret 15.000 / 7,20 = 2.083. Ortalama %2 tıklama oranıyla bu, sıralandığınız sorgularda toplam yaklaşık 104.000 aylık arama demektir.",
          "Aynı trafiği reklamla almanın karşılığına da bakın: tıklama başı 8 TL ile 2.083 tıklama 16.667 TL eder. Yani bu örnekte SEO, başabaşa ulaştıktan sonra reklama göre avantajlı olur; ama oraya gelene kadar geçen aylarda sonuç vermez. Kısa vadede nakit gerekiyorsa önce reklam, paralelde SEO daha mantıklıdır. B2B'de tek müşterinin değeri yüksek olduğundan çok daha düşük hacim yeterli olabilir.",
        ],
        bullets: [
          "Pazarınızın toplam hacmi hedefin altındaysa SEO tek başına yetmez; başka kanal gerekir",
          "Sipariş başı katkıyı Kar Marjı aracıyla, dönüşüm oranınızı Dönüşüm Oranı aracıyla bulun",
          "Google Ads ile aynı sorguda verdiğiniz TBM, o sorgunun SEO değerini gösteren en iyi göstergedir",
        ],
      },
      {
        heading: "SEO nasıl ölçülür?",
        paragraphs: [
          "Sıralama takibi tek başına yeterli değildir. Search Console'da sorguları marka ve marka dışı diye ayırın; çoğu sitede erken trafiğin büyük kısmı zaten sizi tanıyanlardan gelir ve büyüme yanılsaması yaratır. Asıl metrik, marka dışı sorgulardan gelen tıklama ve bunun GA4'teki dönüşüme katkısıdır.",
        ],
        bullets: [
          "Search Console › Performans: gösterim, tıklama, tıklama oranı, ortalama konum (sorgu ve sayfa bazında)",
          "Search Console › Sayfa sayısı: dizindeki sayfalar ve dışarıda kalma nedenleri",
          "GA4: Organic Search oturumları, dönüşüm, lead ve gelir",
          "Search Console › Bağlantılar: yönlendiren alan adları",
          "Ölçüm ritmi: dizin haftalık, sorgu ve sıra 2-4 haftalık, trafik ve dönüşüm aylık",
        ],
      },
      {
        heading: "SEO danışmanı seçerken nelere bakılmalı?",
        paragraphs: [
          "Google'ın SEO danışmanı rehberindeki sorular iyi bir başlangıçtır. Önceki işlerden örnek isteyin, Google yönergelerine uyup uymadığını sorun, ne kadar sürede nasıl sonuç beklediğini ve başarıyı nasıl ölçtüğünü yazılı alın. Denetim için Search Console'a yalnızca okuma erişimi verin.",
          "Üç işaret sizi uzaklaştırmalı: 'ilk sıra garantisi', sayısı belirtilen paket backlink satışı ve yapılacak işi açıklamayan aylık rapor. Google'a 'öncelikli gönderim' diye bir hizmet yoktur.",
        ],
      },
    ],
    faq: [
      { question: "SEO kısaca nedir?", answer: "SEO, bir web sitesinin Google gibi arama motorlarının ücretsiz sonuçlarında ilgili sorgularda daha üstte görünmesi için yapılan teknik, içerik ve otorite çalışmasıdır. Tıklama için ödeme yapılmaz, ama sonuç aylar içinde gelir." },
      { question: "SEO'yu kendim yapabilir miyim?", answer: "Evet. Search Console, Keyword Planner ve PageSpeed Insights ücretsizdir; küçük bir site için temel adımlar teknik uzmanlık gerektirmez. Rekabetin yüksek olduğu pazarlarda ve büyük site taşımalarında uzman desteği değer kazanır." },
      { question: "SEO mu Google Ads mi daha iyi?", answer: "Rakip değil tamamlayıcıdırlar. Reklam hemen tıklama getirir ama bütçe bitince durur; SEO geç başlar ama birikir. Kısa vadeli satış gerekiyorsa reklamla başlayın, reklamda kârlı çalışan sorgular için organik sayfa hazırlayın." },
      { question: "SEO için yapay zekâ ile içerik yazılabilir mi?", answer: "Evet, Google yönteme değil değere bakar. Sorun, kullanıcıya değer katmadan çok sayıda sayfa üretmektir; bu ölçekli içerik kötüye kullanımı sayılır. Yapay zekâyı taslak için kullanın, gerçek deneyim, doğrulanmış kaynak ve özgün hesap ekleyin." },
      { question: "AI Overviews'ta görünmek için ne yapmalıyım?", answer: "Google'a göre özel bir şey gerekmiyor: sayfa dizinde ve snippet'e uygun olmalı. Pratikte soruya ilk cümlede cevap veren, kaynaklı ve özgün bilgi içeren sayfalar daha kolay alıntılanır." },
    ],
    howTo: {
      name: "SEO adım adım nasıl yapılır?",
      description: "Yeni ya da küçük bir sitede sıfırdan SEO çalışması başlatma.",
      steps: [
        { name: "Ölçümü kurun", text: "Search Console ve GA4'ü bağlayın, site haritasını gönderin, başlangıç değerlerini not edin." },
        { name: "Talebi olan sorguları seçin", text: "Keyword Planner ile aylık hacmi doğrulayın, hacmi olmayan konuları listeden çıkarın." },
        { name: "Niyeti doğrulayın", text: "Sorguyu arayın, ilk 5-8 sonucun türüne bakın ve ilk üç sonucun eksiklerini listeleyin." },
        { name: "Sayfayı yazın", text: "İlk paragrafta doğrudan cevap verin, soru biçimli alt başlıklar, örnek ve kaynak kullanın." },
        { name: "Sayfa içi öğeleri düzenleyin", text: "Benzersiz başlık, açıklama, tek H1, okunur URL ve uygun yapılandırılmış veri ekleyin." },
        { name: "İç link verin", text: "Yeni sayfaya güçlü sayfalardan, yeni sayfadan ilgili sayfalara link verin." },
        { name: "Ölçün ve otorite kazanın", text: "Birkaç hafta sonra sorgu ve sırayı okuyun, sayfaları güçlendirin, link verilmeye değer varlıklar üretin." },
      ],
    },
    relatedToolKey: "llms-txt",
    resources: [
      { label: "Dönüşüm Oranı Hesaplayıcı", href: "/ucretsiz-araclar/donusum-orani-hesaplayici/" },
      { label: "Kar Marjı Hesaplama", href: "/ucretsiz-araclar/brut-kar-marji-hesaplayici/" },
      { label: "llms.txt Oluşturucu", href: "/ucretsiz-araclar/llms-txt-olusturucu/" },
      { label: "UTM Link Oluşturucu", href: "/ucretsiz-araclar/utm-link-olusturucu/" },
      { label: "GEO Nedir? Yapay Zekâ Aramalarında Görünürlük", href: "/blog/geo-nedir-yapay-zeka-arama-optimizasyonu/" },
      { label: "llms.txt Nedir, İşe Yarıyor mu?", href: "/blog/llms-txt-nedir-ise-yariyor-mu/" },
      { label: "Google Ads Nedir, Nasıl Çalışır?", href: "/blog/google-ads-nedir-nasil-calisir/" },
      { label: "UTM Nedir?", href: "/blog/utm-nedir-utm-parametreleri/" },
      { label: "Google: SEO Başlangıç Kılavuzu", href: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide", external: true },
      { label: "Google: Arama nasıl çalışır?", href: "https://developers.google.com/search/docs/fundamentals/how-search-works", external: true },
      { label: "Google: SEO'ya ihtiyacınız var mı?", href: "https://developers.google.com/search/docs/fundamentals/do-i-need-seo?hl=tr", external: true },
      { label: "Google: Yapay zekâ özellikleri ve siteniz", href: "https://developers.google.com/search/docs/appearance/ai-features", external: true },
      { label: "Google: Spam politikaları", href: "https://developers.google.com/search/docs/essentials/spam-policies", external: true },
      { label: "Google Search Status Dashboard: sıralama güncellemeleri", href: "https://status.search.google.com/products/rGHU1u87FJnkP6W2GwMi/history", external: true },
      { label: "Ahrefs: AI Overviews tıklamayı %58 azaltıyor (güncelleme)", href: "https://ahrefs.com/blog/ai-overviews-reduce-clicks-update", external: true },
    ],
  },
  {
    slug: "dropshipping-nedir-nasil-yapilir",
    seoTitle: "Dropshipping Nedir, Türkiye'de Nasıl Yapılır? Kâr Hesabı",
    title: "Dropshipping Nedir, Türkiye'de Nasıl Yapılır? İade Dahil Kâr Hesabı, Tedarikçi Seçimi ve Yasal Sorumluluklar (2026)",
    description:
      "Dropshipping, stok tutmadan satıp ürünü tedarikçiye gönderttiğiniz modeldir. Türkiye'de nasıl yapılır, iade dahil kâr hesabı ve tedarikçi seçimi bu yazıda.",
    category: "performans-pazarlama",
    tldr: [
      "Dropshipping (stoksuz satış), ürünü önceden almadan satışa koyduğunuz, sipariş gelince tedarikçinin müşteriye gönderdiği e-ticaret modelidir. Stok riski düşer; ama müşterinin karşısındaki satıcı sizsiniz, geç teslimat ve iade de sizin sorumluluğunuzdur.",
      "Türkiye'de 2026'da en uygun yol yerli tedarikçidir. 6 Şubat 2026'dan itibaren yurt dışı siparişlerdeki 30 Euro'luk basitleştirilmiş usul kalktı, her gönderi gümrük sürecine giriyor; AliExpress'ten doğrudan Türkiye'ye gönderim eski pratikliğini kaybetti.",
      "Asıl hesap iade dahildir. Örnek: 900 TL satış, 450 TL ürün, %18 komisyon, 85 TL kargo, 12 TL işlem, 90 TL reklam → sipariş başı 101 TL. %10 iadeyle beklenen kâr 63,7 TL'ye iner; tedarikçi iadeyi almazsa 18,7 TL kalır.",
      "Aynı örnekte sipariş başı reklam 153,7 TL'yi geçerse zarar başlar; yani reklam panelinde başabaş ROAS 5,86'dır. Ayda 5.000 TL sabit giderle başabaş için 79 sipariş gerekir.",
      "Dropshipping pasif gelir değildir: müşteri hizmeti, stok takibi ve iade işi günlüktür. Başlamadan önce tedarikçiden test siparişi verin ve ürünü iade dahil hesaplayın. Yazının sonunda ücretsiz Excel şablonu var.",
    ],
    publishedAt: "2026-11-04",
    readingMinutes: 11,
    tags: ["Dropshipping", "Stoksuz Satış", "E-Ticaret", "Kâr Hesabı", "Pazaryeri", "Tedarikçi"],
    sections: [
      {
        heading: "Dropshipping nedir? (Kısa cevap)",
        paragraphs: [
          "Dropshipping, Türkçesiyle stoksuz satış, ürünleri elinizde bulundurmadan internette satışa koyduğunuz bir e-ticaret modelidir. Müşteri sizden sipariş verir ve ödemeyi size yapar, siz siparişi tedarikçiye iletirsiniz, tedarikçi ürünü doğrudan müşteriye gönderir. Kazancınız, müşteriden aldığınız fiyat ile tedarikçiye ve diğer kalemlere ödediğiniz tutar arasındaki farktır.",
          "Modelin cazibesi stoka para bağlamamaktır. Bedeli de düşük marj ve az kontroldür: ürün kalitesini, paketlemeyi ve kargoya verilme hızını siz yönetmezsiniz, ama müşteri için muhatap sizsiniz. Bu yazı modelin Türkiye'de nasıl işlediğini, kârın nasıl hesaplanacağını ve hangi durumda başlamamak gerektiğini anlatır. Vergi konularına girmez; o konuda mali müşavirinizden görüş alın.",
        ],
      },
      {
        heading: "Dropshipping nasıl çalışır? Sipariş akışı",
        paragraphs: [
          "Tipik bir sipariş beş adımda ilerler. Hataların çoğu ikinci ve üçüncü adım arasındaki gecikmede ortaya çıkar: sizde 'stokta' görünen ürün tedarikçide bitmişse iptal etmek zorunda kalırsınız.",
        ],
        bullets: [
          "1. Tedarikçinin ürünlerini mağazanıza ya da pazaryerine kendi fiyatınızla listelersiniz (elle ya da XML entegrasyonuyla)",
          "2. Müşteri sipariş verir ve sizin mağazanıza öder",
          "3. Siz siparişi tedarikçiye iletir, ürün bedelini ona ödersiniz",
          "4. Tedarikçi ürünü müşterinin adresine gönderir; kargo takibi müşteriye iletilir",
          "5. Şikâyet, cayma ve iadeyle siz ilgilenir, tedarikçiyle aranızda çözersiniz",
        ],
      },
      {
        heading: "Dropshipping ile stoklu satış arasındaki fark nedir?",
        paragraphs: [
          "Dropshipping sık sık başka modellerle karıştırılır. Aralarındaki fark, ürünün ve riskin kimde olduğudur.",
        ],
        bullets: [
          "Stoklu satış: ürünü toptan alırsınız. Birim maliyet düşer, kalite kontrol sizdedir; ama satılmayan stok size kalır",
          "Dropshipping: ürün tedarikçidedir. Sermaye az, marj düşük, kontrol sınırlıdır",
          "Fulfillment: stok size aittir ama depolama ve kargoyu bir hizmet sağlayıcı yapar",
          "Baskı üzerine üretim (print on demand): ürün sipariş gelince sizin tasarımınızla üretilir",
          "Satış ortaklığı (affiliate): siz satıcı değilsiniz; yönlendirdiğiniz satıştan komisyon alırsınız ve iade sorumluluğunuz olmaz",
        ],
      },
      {
        heading: "Türkiye'de dropshipping yasal mı? Satıcı olarak sorumluluklarınız",
        paragraphs: [
          "Modeli özel olarak yasaklayan bir düzenleme görmedik; ancak 'tedarikçi gönderiyor' demek sorumluluğu devretmez. Ticaret Bakanlığı'nın mesafeli satış bilgilendirmesi satıcıyı muhatap alır. E-ticaret faaliyetinde bulunanların faaliyete başlamadan önce e-Devlet üzerinden ETBİS'e kaydolması gerekir.",
          "Düzenli satış ticari faaliyettir. Hangi şirket türünün size uyduğu ve vergi yükümlülükleri bu yazının kapsamı dışında; mali müşavirinize sorun. Aşağıdaki maddeler genel bilgidir, hukuki danışmanlık değildir.",
        ],
        bullets: [
          "Teslimat: taahhüt edilmiş bir süre yoksa satıcı malı en geç 30 gün içinde göndermek zorundadır",
          "Cayma hakkı: tüketici, malın tesliminden itibaren 14 gün içinde gerekçe göstermeden cayabilir",
          "Geri gönderme: tüketici cayma bildiriminden sonra 14 gün içinde malı geri gönderir",
          "İade kargosu: tüketici ön bilgilendirmede belirtilen kargo şirketiyle gönderirse iade masrafından sorumlu tutulamaz",
          "Bedel iadesi: satıcı, teslimat masrafları dahil ödemeleri 14 gün içinde iade eder",
          "Ön bilgilendirme: ödemeden önce satıcı kimliği, toplam fiyat, ek masraflar ve cayma hakkı müşteriye bildirilir",
          "Hasar ve kayıp: mal teslim edilene kadarki kayıp ve hasardan satıcı sorumludur",
        ],
      },
      {
        heading: "Yurt dışından dropshipping 2026'da hâlâ mantıklı mı?",
        paragraphs: [
          "Türkiye'deki müşteriye yurt dışından gönderim için cevap çoğunlukla hayır. 7 Ocak 2026 tarihli Resmî Gazete'de yayımlanan düzenleme, 6 Şubat 2026'dan itibaren yurt dışı siparişlerdeki 30 Euro'luk basitleştirilmiş usulü kaldırdı. Basına yansıyan açıklamalara göre tutarı ne olursa olsun tüm siparişler gümrük işlemine tabi; ayrıntılı beyanname ve hizmet bedeli de eklendi.",
          "Bu değişiklik teslim süresini ve teslimat maliyetini belirsizleştirdi; üstüne 14 günlük cayma hakkında ürünün yurt dışına iadesi çoğu zaman üründen pahalıya gelir. Tutar hesabı için gümrük müşaviri ya da resmî kaynaklara başvurun; biz burada vergi hesabı yapmıyoruz. Pratik sonuç: Türkiye'deki müşteriye satıyorsanız yerli tedarikçi, yurt dışına satıyorsanız Etsy, Amazon ya da kendi sitenizle e-ihracat ayrı bir plan gerektirir.",
        ],
      },
      {
        heading: "Dropshipping nerede yapılır? Pazaryeri mi, kendi site mi?",
        paragraphs: [
          "Kanal seçimi kâr yapınızı belirler. Pazaryeri trafiği hazırdır ama komisyon keser; kendi sitede komisyon yoktur ama trafiği reklamla siz satın alırsınız. Bu farkı aşağıdaki hesapta göreceksiniz.",
          "Platform kurallarını panelden doğrulayın. Trendyol için kamuya açık, resmî bir dropshipping yasağı bulamadık; ancak Satıcı Bilgi Merkezi'ni okuyamadık ve Türkçe rehberler kaynak göstermiyor. Amazon'un politikası ise açık: stoksuz satışa ancak alıcı için satıcının siz olduğu belliyse izin verir, paket ve belgelerde başka bir satıcı adı bulunamaz, iadeleri de siz yönetirsiniz.",
        ],
        bullets: [
          "Pazaryeri (Trendyol, Hepsiburada): hazır talep, yüksek rekabet, komisyon ve geç kargo ya da iptal puanı. Geciken tedarikçi doğrudan mağaza puanınızı etkiler",
          "Kendi siteniz (ikas, Shopify, WordPress): marka ve müşteri verisi sizde; reklam bütçesi ve güven oluşturma gerekir",
          "Instagram ve TikTok: ürün keşfine uygun; satışın ölçümü ve iade süreci için yine mağaza altyapısı gerekir",
          "Etsy, Amazon: yurt dışı talep; platform kuralları ve kargo süreleri ayrıca okunmalı",
        ],
      },
      {
        heading: "Dropshipping tedarikçisi nasıl bulunur ve seçilir?",
        paragraphs: [
          "İşin kalitesini tedarikçi belirler. Türkiye'de yerli stoksuz satış çoğunlukla XML ürün listesi veren toptancılar, üreticiler ve bayilik platformları üzerinden yürür. XML, ürün, stok ve fiyat bilgisini mağazanıza otomatik aktaran dosyadır. Kendi hizmetini tanıtan sayfaların 'en iyi tedarikçi' listeleri yerine aşağıdaki testi uygulayın.",
          "Satışa açmadan önce kendi adresinize test siparişi verin. Süreyi kronometreyle ölçün, paketi açın, iadeyi de bir kez deneyin. Yarım günlük bu kontrol, ilk ay yaşanacak şikâyetlerin çoğunu önler.",
        ],
        bullets: [
          "Stok güncelleme sıklığı: XML en az günde birkaç kez yenileniyor mu? Geç güncellenen stok iptal demektir",
          "Kargoya verme süresi: sipariş saatine göre ne zaman çıkıyor, yazılı mı?",
          "İade: müşteri iadesini geri alıyor mu, hangi koşulla, para ne zaman dönüyor? Hesabın en kritik satırı budur",
          "Paket: pakette tedarikçinin fiyatlı belgesi ya da reklamı çıkıyor mu?",
          "Ürün belgeleri: marka yetkisi, garanti ve güvenlik belgeleri var mı? Taklit ürün hesabınızı kapatabilir",
          "Münhasırlık: aynı ürünü kaç satıcı aynı görselle satıyor? Pazaryerinde tek fark fiyat kalırsa marj erir",
          "Yedek: tek tedarikçiye bağlı kalmayın; en çok satan ürünler için ikinci kaynak bulun",
        ],
      },
      {
        heading: "Dropshipping kâr hesabı nasıl yapılır? İade dahil örnek",
        paragraphs: [
          "İncelediğimiz Türkçe rehberlerin çoğunda sayısal örnek yok. Olanlarda ise iade hesaba katılmıyor; bir sayfanın örneği satışın %4,9'u kadar kâr gösterirken 'iade dahil değil' diye not düşüyor, başka bir sayfa kaynak göstermeden %8-15 net kâr söylüyor. Oysa stoksuz satışta iade, en kritik kalemdir. Doğru hesap iki formülden oluşur:",
          "Tamamlanan sipariş kârı = Satış fiyatı − Ürün maliyeti − Komisyon − Kargo − İşlem bedeli − Reklam. Beklenen kâr = (1 − İade oranı) × Tamamlanan sipariş kârı − İade oranı × İade kaybı. İade kaybı ise gidiş ve dönüş kargosu, işlem bedeli, harcanmış reklam ve (tedarikçi almıyorsa) ürün maliyetidir.",
          "Pazaryeri örneği (örnek tutarlar): 900 TL satış, 450 TL ürün, %18 komisyon (162 TL), 85 TL kargo, 12 TL işlem bedeli, 90 TL reklam. Tamamlanan sipariş kârı 101 TL, yani satışın %11,2'si. %10 iade oranında iade kaybı 85 + 85 + 12 + 90 = 272 TL'dir. Beklenen kâr: 0,9 × 101 − 0,1 × 272 = 63,7 TL (%7,1). Tedarikçi iadeyi almazsa kayıp 722 TL olur ve beklenen kâr 18,7 TL'ye (%2,1) düşer.",
          "Komisyonun iadede geri alındığını varsaydık; kendi sözleşmenizde kontrol edin. Tutarlar örnektir ve vergi kalemleri bu hesaba dahil değildir. Kendi rakamlarınızla denemek için Trendyol Kâr aracını kullanın ya da ücretsiz Ürün Kârlılık Şablonu'nu indirin.",
        ],
        bullets: [
          "İade %0: 101 TL",
          "İade %10, tedarikçi geri alıyor: 63,7 TL",
          "İade %20, tedarikçi geri alıyor: 26,4 TL",
          "İade %10, ürün size kalıyor: 18,7 TL",
          "İade %10, reklam 150 TL: 3,7 TL (başabaşın kıyısında)",
          "Aynı ürün stoklu, 360 TL'ye alınıyor (%10 iade): 144,7 TL; ama 100 adet için 36.000 TL bağlanır",
        ],
      },
      {
        heading: "Reklama sipariş başı en fazla ne harcanır?",
        paragraphs: [
          "Reklam harcaması iki formülde de düştüğü için başabaş sınırı nettir: Maksimum reklam = (1 − İade oranı) × Reklam öncesi kâr − İade oranı × Reklam dışı iade kaybı. Pazaryeri örneğinde 0,9 × 191 − 0,1 × 182 = 153,7 TL. Başabaş ROAS 900 / 153,7 = 5,86'dır. Panelde ROAS 5,86'nın altındaysanız sipariş aldıkça para kaybedersiniz. Tedarikçi iadeyi almıyorsa sınır 108,7 TL'ye iner, ROAS eşiği 8,28'e çıkar.",
          "Kendi site örneği (örnek tutarlar): aynı 900 TL'lik ürün, komisyon yerine %3 ödeme kesintisi (27 TL), kargo ve işlem bedeli aynı. Reklam öncesi kâr 326 TL, maksimum reklam 0,9 × 326 − 0,1 × 182 = 275,2 TL, başabaş ROAS 3,27. Kendi sitede eşik çok daha rahat görünür; ama trafik pazaryerindeki gibi hazır gelmez, dönüşüm oranı da genelde daha düşüktür. Kararı başabaş ROAS ile kendi test sonucunuzu yan yana koyarak verin.",
        ],
      },
      {
        heading: "Dropshipping ne kadar kazandırır? Aylık başabaş",
        paragraphs: [
          "'Ayda şu kadar kazanılır' diyen rakamlara güvenmeyin; kazanç ürün, kanal ve iade oranına bağlıdır. Kendi hesabınızı şu formülle yapın: Başabaş sipariş = Aylık sabit gider / Beklenen kâr. Mağaza aboneliği, entegrasyon ve muhasebe için ayda 5.000 TL (örnek tutar) ayırıyorsanız, 63,7 TL beklenen kârla 79 sipariş sadece gideri karşılar. Aylık 200 siparişte kalan yaklaşık 7.740 TL'dir. Bu tutarı, harcadığınız saatlerle kıyaslayın.",
          "Sermaye sorusunun cevabı da burada: stok almadığınız için sermaye sıfır değildir. Test reklam bütçesi, mağaza kurulumu ve iade için nakit gerekir. Müşteri parası size geçmeden tedarikçiye ödeme yaparsanız pazaryerinin ödeme takvimi kadar nakit de bağlanır; 200 siparişte tedarik maliyeti 90.000 TL'yi bulur.",
        ],
      },
      {
        heading: "Dropshipping'de en sık yapılan hatalar",
        paragraphs: [
          "Başarısız denemelerin çoğu aynı birkaç hatayla başlar.",
        ],
        bullets: [
          "Fiyatı maliyete sabit yüzde ekleyerek belirlemek: iade ve reklamı hesaba katmadan yüzde koymak sizi zarara sokar. Kar marjı ile kar oranı farkına dikkat edin",
          "Test siparişi vermeden ürün listelemek",
          "Tedarikçinin iade şartlarını yazılı almamak",
          "Yüzlerce ürünü tek seferde yüklemek: 10-20 ürünü kontrol etmek daha kârlıdır",
          "Kırılgan ya da yüksek desili ürün seçmek: desi kargoyu, kırılganlık iadeyi yükseltir. Ürün seçmeden önce desiyi hesaplayın",
          "Yüksek iadeli kategorilere bakmadan girmek: giyimde beden iadesi tek başına kârı silebilir",
          "Taklit ve marka tescilli ürün satmak",
          "Reklamı ROAS'a değil tıklamaya göre yönetmek",
        ],
      },
      {
        heading: "Dropshipping'e nasıl başlanır? Kısa plan",
        paragraphs: [
          "Küçük başlamak en ucuz öğrenme yoludur. Önce kanal ve ürünü seçin, kaydınızı ve mali danışmanlığınızı tamamlayın, sonra reklama geçin.",
        ],
        bullets: [
          "1. Niş ve kanalı seçin: pazaryerinde talep olan, küçük, hafif ve kırılmayan ürünler",
          "2. 2-3 yerli tedarikçiyle görüşün, iade şartını yazılı alın",
          "3. Ürünü iade dahil hesaplayın; beklenen marj hedefinizin altındaysa geçin",
          "4. Şirket, ETBİS ve mali müşavir işlerini tamamlayın",
          "5. Test siparişi verin: süre, paket ve iadeyi ölçün",
          "6. 10-20 ürünle yayına çıkın, stok güncellemesini kontrol edin",
          "7. Küçük bütçeyle reklam deneyin; başabaş ROAS altındaysa fiyatı, ürünü ya da kanalı değiştirin",
          "8. Satan ürünü stoklu modele geçirmeyi değerlendirin: marj artar, kontrol sizde olur",
        ],
      },
    ],
    faq: [
      { question: "Dropshipping için ne kadar sermaye gerekir?", answer: "Stok almazsınız, ama sermaye sıfır değildir: mağaza kurulumu, test reklamı ve iade nakdi gerekir. Tedarikçiye ödemeyi pazaryerinin size ödemesinden önce yapıyorsanız bu süre boyunca nakit de bağlanır. Rakamı kendi aylık sabit gideriniz ve test bütçenizden çıkarın." },
      { question: "Dropshipping şirketsiz yapılır mı?", answer: "Trendyol gibi pazaryerleri satıcıdan şirket belgeleri ister. Düzenli satış ticari faaliyet sayıldığından şirket türü ve yükümlülükler için başlamadan önce mali müşavire danışın. Bu yazı vergi konusuna girmez." },
      { question: "Dropshipping'de iade kim karşılar?", answer: "Müşteriye karşı satıcı olarak siz sorumlusunuz. Tüketici 14 gün içinde cayabilir ve ön bilgilendirmede belirtilen kargoyla gönderirse iade masrafından sorumlu tutulamaz. Maliyetin tedarikçiyle paylaşımı aranızdaki anlaşmaya bağlıdır; bu yüzden şartı yazılı alın." },
      { question: "Trendyol'da dropshipping yapılır mı?", answer: "Kamuya açık kaynaklarda resmî bir yasak görmedik, ama geç kargo ve tedarik edememe iptalleri mağaza puanını etkiler. Bu yüzden hızlı kargolayan yerli tedarikçi ve güncel stok gerekir. Kuralları Satıcı Bilgi Merkezi'nden doğrulayın." },
      { question: "Dropshipping kârlı mı?", answer: "Duruma göre değişir. Marj stoklu satışa göre düşüktür ve reklam ile iade kârı hızla eritir. Örnek hesabımızda 900 TL'lik üründe sipariş başı beklenen kâr 63,7 TL'dir. Başlamadan kendi ürününüzü iade dahil hesaplayın; pasif gelir olarak görmeyin." },
    ],
    howTo: {
      name: "Dropshipping'e adım adım nasıl başlanır?",
      description: "Türkiye'de yerli tedarikçiyle stoksuz satışa başlama.",
      steps: [
        { name: "Kanal ve ürünü seçin", text: "Talep olan, küçük, hafif ve kırılmayan ürünleri seçin; pazaryeri mi kendi site mi karar verin." },
        { name: "Tedarikçilerle görüşün", text: "2-3 yerli tedarikçiyle stok güncelleme, kargo süresi ve iade şartlarını yazılı netleştirin." },
        { name: "Kârı iade dahil hesaplayın", text: "Komisyon, kargo, reklam ve iade kaybıyla beklenen kârı ve başabaş ROAS'ı bulun." },
        { name: "Kayıt işlemlerini tamamlayın", text: "Şirket, ETBİS ve mali danışmanlık süreçlerini başlamadan bitirin." },
        { name: "Test siparişi verin", text: "Kendi adresinize sipariş verip süreyi, paketi ve iade sürecini ölçün." },
        { name: "Küçük başlayın ve ölçün", text: "10-20 ürünle yayına çıkın, küçük bütçeyle reklam deneyin, başabaş ROAS altındaysa değiştirin." },
      ],
    },
    relatedToolKey: "marketplace",
    resources: [
      { label: "Ürün Kârlılık Şablonu (ücretsiz Excel indir)", href: "https://yusufbayrak.net/sablonlar/urun-karlilik-sablonu.xlsx", external: true },
      { label: "Trendyol Komisyon ve Kâr Hesaplama", href: "/ucretsiz-araclar/trendyol-hepsiburada-kar-hesaplama/" },
      { label: "Kar Marjı Hesaplama", href: "/ucretsiz-araclar/brut-kar-marji-hesaplayici/" },
      { label: "Desi Hesaplama", href: "/ucretsiz-araclar/desi-hesaplama/" },
      { label: "Kargo Ücreti Hesaplama", href: "/ucretsiz-araclar/kargo-ucreti-hesaplama/" },
      { label: "ROAS Hesaplayıcı", href: "/ucretsiz-araclar/roas-hesaplayici/" },
      { label: "Trendyol Komisyon Oranları 2026", href: "/blog/trendyol-komisyon-oranlari-hesaplama/" },
      { label: "Trendyol Reklam Nasıl Verilir?", href: "/blog/trendyol-reklam-nasil-verilir/" },
      { label: "Kar Marjı Nasıl Hesaplanır?", href: "/blog/kar-marji-nasil-hesaplanir/" },
      { label: "Instagram Reklam Verme Rehberi", href: "/blog/instagram-reklam-verme-rehberi/" },
      { label: "Ticaret Bakanlığı: Mesafeli sözleşmeler hakkında bilgilendirme", href: "https://tuketici.ticaret.gov.tr/yayinlar/tuketici-bilgi-rehberi/mesafeli-sozlesmeler-hakkinda-bilgilendirme", external: true },
      { label: "Ticaret Bakanlığı: Elektronik Ticaret Bilgi Sistemi (ETBİS)", href: "https://ticaret.gov.tr/ic-ticaret/elektronik-ticaret/elektronik-ticaret-bilgi-sistemi-etbis", external: true },
      { label: "DonanımHaber: 30 Euro limiti kaldırıldı", href: "https://www.donanimhaber.com/yurt-disindan-gumruksuz-alisveris-donemi-bitti-30-euro-limiti-ka--200561", external: true },
      { label: "Amazon Seller Central: Drop shipping politikası hatırlatması", href: "https://sellercentral.amazon.com/forums/t/drop-shipping-policy-reminder/839620", external: true },
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
    resources: [
      { label: "What Is Google Ads and How Does It Work?", href: "/en/blog/what-is-google-ads-how-it-works/" },
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
    resources: [
      { label: "What Is llms.txt and Does It Work? (2026 data)", href: "/en/blog/what-is-llms-txt-does-it-work/" },
    ],
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
    resources: [
      { label: "How to Run Instagram Ads: Cost and Budget", href: "/en/blog/how-to-run-instagram-ads/" },
      { label: "How to Run Meta Ads: Budget, Audience & Learning Phase", href: "/en/blog/how-to-run-meta-ads-guide/" },
      { label: "Ad Budget Calculator", href: "/en/free-tools/ad-budget-calculator/" },
      { label: "ROAS Calculator", href: "/en/free-tools/roas-calculator/" },
    ],
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
      { label: "What Is CPL? Cost Per Lead Formula", href: "/en/blog/what-is-cpl-cost-per-lead/" },
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
      { label: "What Is ARR? Annual Recurring Revenue & the ARR Bridge", href: "/en/blog/what-is-arr-annual-recurring-revenue/" },
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
      "ROAS is revenue per $1 of ad spend. The ROAS formula, worked calculations, gross vs net ROAS, break-even ROAS, what's a good ROAS and how to improve it.",
    category: "performans-pazarlama",
    tldr: [
      "ROAS = Revenue from ads / Ad spend. Spend $1,000 and generate $4,000 in revenue and your ROAS is 4 (or 400%).",
      "There is no universal 'good ROAS' — the threshold depends on your gross margin: Break-even ROAS = 1 / Gross margin.",
      "At a 40% margin, break-even ROAS is 2.5; a 3 ROAS is profitable, a 2 ROAS loses money on every sale.",
      "ROAS comes down to three numbers: (Conversion rate × Average order value) / CPC. Improving any one by 25% takes a 2.0 ROAS to 2.5.",
      "Validate decisions with MER (total revenue / total marketing spend), not just the ROAS shown in ad platforms.",
    ],
    publishedAt: "2026-10-22",
    updatedAt: "2026-11-03",
    readingMinutes: 10,
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
        heading: "How to Calculate ROAS: Formula and Example",
        paragraphs: [
          "Formula: ROAS = Revenue attributed to ads / Ad spend. The result is expressed either as a ratio (4.0) or a percentage (400%); both say the same thing.",
          "Example: An e-commerce brand spends $12,000 a month on Meta Ads and generates $50,400 in revenue attributed to those ads. ROAS = 50,400 / 12,000 = 4.2.",
          "Use net revenue: exclude sales tax or VAT and subtract refunds and returns. Ad platforms typically count gross cart value and returned orders, which can inflate ROAS by 20-30% versus reality.",
          "Where to find it: Google Ads shows the same ratio in the 'Conv. value / cost' column, and Meta Ads Manager in 'Purchase ROAS'. A blank or zero column usually means order values are not being passed to the ad account.",
        ],
      },
      {
        heading: "What Does a ROAS of 3 Mean?",
        paragraphs: [
          "A ROAS of 3 means every $1 of ad spend returned $3 in revenue, also written as 300%. That revenue is not profit: product cost, shipping and fees have not been subtracted yet. Your margin decides whether it is good or bad.",
          "The same ROAS means different things by business. Three stores spend $10,000 at a 4 ROAS and each books $40,000 in revenue. The 20%-margin store keeps $8,000 in gross profit and is $2,000 down after ads. The 40%-margin store makes $6,000, and the 70%-margin store makes $18,000.",
        ],
        bullets: [
          "ROAS 1 (100%): revenue equals spend; product cost is not covered, always a loss",
          "ROAS 2 (200%): breaks even only at a 50% margin or higher",
          "ROAS 3 (300%): breaks even at a 33.3% margin or higher",
          "ROAS 4 (400%): breaks even at a 25% margin or higher",
          "ROAS 5 (500%): breaks even at a 20% margin or higher",
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
        heading: "The Three Numbers Behind ROAS: CPC, Conversion Rate and Order Value",
        paragraphs: [
          "ROAS is not a lever in itself; it is the result of three numbers: ROAS = (Conversion rate × Average order value) / CPC. Work out which one is weak before you try to improve it.",
          "Example: CPC is $0.80, conversion rate 2%, average order $80. A thousand clicks cost $800 and bring 20 orders worth $1,600, so ROAS is 2.0. If your break-even is 2.5, improving just one number gets you there:",
        ],
        bullets: [
          "Average order $80 → $100 (+25%): ROAS 2.5",
          "Conversion rate 2% → 2.5% (+25%): ROAS 2.5",
          "CPC $0.80 → $0.64 (−20%): ROAS 2.5",
          "All three together: ROAS ≈ 3.9",
        ],
      },
      {
        heading: "How to Improve ROAS",
        paragraphs: [
          "Verify tracking first, then go after the weakest of the three numbers. Optimizing on double-counted sales or unrecorded refunds rewards the wrong campaign.",
          "One warning: a higher ROAS does not always mean more profit. Cutting budget usually lifts ROAS because only the most efficient clicks remain, yet total profit can fall. Judge decisions on total profit after ads, not on the ratio.",
        ],
        bullets: [
          "Tracking: remove refunds, count one purchase event, standardize campaign names with UTMs",
          "Product mix: compare ROAS with margin per product; pull ads from anything below break-even and move budget to higher-margin items",
          "Order value: bundles, add-on offers and a free-shipping threshold raise the average order",
          "Conversion rate: match the landing page to the ad's promise, show shipping cost early, shorten checkout",
          "CPC: cut irrelevant clicks with negative keywords and tighter match types; refresh tired creative",
          "Audience: read returning-customer and remarketing ROAS separately from new-customer campaigns",
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
        heading: "ROAS vs ACOS",
        paragraphs: [
          "ACOS (Advertising Cost of Sale), common on Amazon, is the inverse of ROAS: ACOS = Ad spend / Ad revenue = 1 / ROAS. A 4 ROAS equals a 25% ACOS; a 2.5 ROAS equals 40%. You are profitable after ads when ACOS stays below your margin.",
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
        question: "What does a ROAS of 3 mean?",
        answer:
          "Every $1 of ad spend returned $3 in revenue, also written as 300%. That revenue is not profit: below a 33.3% margin, a 3 ROAS loses money.",
      },
      {
        question: "How can I improve ROAS?",
        answer:
          "Since ROAS = (Conversion rate × Average order value) / CPC, there are three routes: raise order value (bundles, free-shipping threshold), raise conversion rate (landing page, checkout) or lower CPC (negative keywords, fresh creative). Verify tracking first and remove products below break-even from ads.",
      },
      {
        question: "What is the difference between ROAS and ACOS?",
        answer:
          "ACOS is the inverse of ROAS: ACOS = Ad spend / Ad revenue = 1 / ROAS. A 4 ROAS equals a 25% ACOS. ACOS below your margin means you are profitable after ads.",
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
      { label: "How to Run Instagram Ads: Cost and Budget", href: "/en/blog/how-to-run-instagram-ads/" },
      { label: "How to Advertise on Trendyol: Ad Types, Costs & Profit", href: "/en/blog/how-to-advertise-on-trendyol/" },
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
      { label: "How to Run Instagram Ads: Cost and Budget", href: "/en/blog/how-to-run-instagram-ads/" },
      { label: "What Is CPL? Cost Per Lead Formula", href: "/en/blog/what-is-cpl-cost-per-lead/" },
      { label: "What Is Google Ads and How Does It Work?", href: "/en/blog/what-is-google-ads-how-it-works/" },
      { label: "How to Run Meta Ads: Budget, Audience & Learning Phase", href: "/en/blog/how-to-run-meta-ads-guide/" },
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
      { label: "Discount Calculator: Sale Price and Profit Impact", href: "/en/free-tools/discount-calculator/" },
      { label: "How to Advertise on Trendyol: Ad Types, Costs & Profit", href: "/en/blog/how-to-advertise-on-trendyol/" },
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
      { label: "What Is Google Ads and How Does It Work?", href: "/en/blog/what-is-google-ads-how-it-works/" },
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
      { label: "What Is Churn Rate? How to Calculate and Reduce It", href: "/en/blog/what-is-churn-rate/" },
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
      { label: "What Is CPL? Cost Per Lead Formula", href: "/en/blog/what-is-cpl-cost-per-lead/" },
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
      { label: "What Is Dropshipping? Profit Math Including Returns", href: "/en/blog/what-is-dropshipping-how-it-works/" },
      { label: "Discount Calculator: Sale Price and Profit Impact", href: "/en/free-tools/discount-calculator/" },
      { label: "Trendyol Commission Rates 2026 & How to Calculate Fees", href: "/en/blog/trendyol-commission-rates/" },
      { label: "Gross Profit Margin Calculator", href: "/en/free-tools/gross-profit-margin-calculator/" },
      { label: "Net Profit Margin Calculator", href: "/en/free-tools/net-profit-margin-calculator/" },
      { label: "ROAS Calculator (break-even ROAS)", href: "/en/free-tools/roas-calculator/" },
      { label: "Marketplace Profit Calculator", href: "/en/free-tools/marketplace-profit-calculator/" },
      { label: "Shipping Cost Calculator", href: "/en/free-tools/shipping-cost-calculator/" },
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
      { label: "What Is Churn Rate? How to Calculate and Reduce It", href: "/en/blog/what-is-churn-rate/" },
      { label: "ARR vs MRR: What's the Difference?", href: "/en/blog/arr-vs-mrr-difference/" },
      { label: "What Is NRR? The SaaS Growth Metric", href: "/en/blog/what-is-nrr-saas-growth-metric/" },
      { label: "SaaS Metrics: ARR, CAC and LTV", href: "/en/blog/saas-metrics-arr-cac-ltv/" },
      { label: "What Is CAC? Customer Acquisition Cost Explained", href: "/en/blog/what-is-cac-customer-acquisition-cost/" },
      { label: "What Is LTV? LTV:CAC Ratio Explained", href: "/en/blog/what-is-ltv-ltv-cac-ratio/" },
      { label: "ChartMogul: SaaS Quick Ratio", href: "https://chartmogul.com/blog/saas-quick-ratio/", external: true },
      { label: "Tomasz Tunguz: What is the Quick Ratio hiding?", href: "https://tomtunguz.com/what-is-quick-ratio-hiding/", external: true },
    ],
  },
  {
    slug: "what-is-llms-txt-does-it-work",
    seoTitle: "What Is llms.txt and Does It Work? 2026 Data",
    title: "What Is llms.txt and Does It Work? Who Reads It, How to Measure It and How to Manage AI Bots with robots.txt",
    description:
      "What is llms.txt and does it work? Ahrefs and SE Ranking data, Google's 2026 statements, measuring it in server logs and managing AI bots with robots.txt.",
    category: "yapay-zeka-otomasyon",
    tldr: [
      "llms.txt is a Markdown file placed at your site's root that lists your most important pages for AI tools. Jeremy Howard (Answer.AI) proposed it in September 2024; it is a proposal, not a ratified standard.",
      "Today's data is clear: in Ahrefs' study of 137K domains in May 2026, 97% of llms.txt files received zero requests all month; SE Ranking's analysis of about 300K domains found no relationship between the file and AI citations.",
      "Google says llms.txt is not needed to appear in AI Overviews or AI Mode; John Mueller called it 'purely speculative for now' in June 2026. The file is requested mostly by coding agents (such as Claude Code) and SEO tools.",
      "Verdict: add it as a 30-minute job if you run developer docs, an API or a SaaS product; for e-commerce and local businesses it is not a priority. The real work is not blocking AI search bots in robots.txt, getting pages indexed and measuring who actually visits in your server logs.",
    ],
    publishedAt: "2026-10-29",
    readingMinutes: 9,
    tags: ["llms.txt", "GEO", "AI Search", "robots.txt", "AI Bots", "Technical SEO"],
    sections: [
      {
        heading: "What is llms.txt? (Short answer)",
        paragraphs: [
          "llms.txt is a plain-text file at your site's root (for example yoursite.com/llms.txt) that tells large language models (LLMs) and AI tools 'these are the most important pages on this site'. It is written in Markdown: an H1 title (site or project name), a one-sentence summary and annotated link lists under H2 sections.",
          "Jeremy Howard of Answer.AI proposed the idea on llmstxt.org in September 2024. The goal was to give AI a clean, short content map instead of HTML pages full of ads, menus and JavaScript. One important detail: llms.txt is not a W3C or IETF standard, and no AI company has formally committed to reading it.",
          "The format, an example file and which pages to include are covered in detail on the llms.txt Generator page; this article focuses on whether it works, who reads it and how to measure it.",
        ],
      },
      {
        heading: "Does llms.txt work? What does the 2026 data say?",
        paragraphs: [
          "The two largest studies so far reach the same conclusion: llms.txt does not measurably increase visibility in AI search, and only a tiny share of AI search bots even request it.",
          "Ahrefs (June 2026) analysed server logs for 137,210 domains that received traffic in May 2026. About 28% published an llms.txt file (Ahrefs calls this an upper bound because its users skew technical). 97% of those files received no requests during the month; of roughly 22K requests to all files, 96% came from bots — and 77% of those bots were not AI tools but SEO audit tools, general crawlers and tech-profiling bots.",
          "SE Ranking (November 2025) compared llms.txt presence with how often about 300K domains are cited in LLM answers. 10.13% of domains had the file and there was no relationship between the two; removing the llms.txt variable actually improved the model's accuracy.",
        ],
        bullets: [
          "In the Ahrefs data, all AI-related categories combined (agents, training crawlers, assistants, retrieval bots) made up 19.5% of requests — which the authors call 'the most generous possible reading', because fetching a file is not the same as reading it",
          "Among AI bots, GPTBot requested the file most (4.51%); ClaudeBot 0.8% and OAI-SearchBot, ChatGPT search's crawler, 0.74%. PerplexityBot requested llms.txt less often than Slack's link-preview bot",
          "The notable exception: Claude Code, a coding agent, made more requests than every AI retrieval, assistant and training bot except GPTBot — today's real readers of llms.txt are developer tools",
          "98% of requests for missing llms.txt files (404s) came from humans and none from AI bots: if the file isn't there, AI bots don't even look for it",
        ],
      },
      {
        heading: "What does Google say about llms.txt?",
        paragraphs: [
          "Google Search's position is clear: its AI search optimisation guide, published in May 2026, says you don't need llms.txt, AI-specific text files, special schema or content chunking to appear in AI Overviews and AI Mode. In June 2026 John Mueller called llms.txt 'purely speculative for now' on Reddit and added that, for most sites, the bigger issue will be blocking agents. He had earlier compared the file to the keywords meta tag.",
          "The confusing part is on the Chrome side: Lighthouse 13.3 (May 2026) added an llms.txt audit to its experimental 'Agentic Browsing' category and describes the file as an 'emerging convention'. It is an experimental check aimed at future browser agents, not a ranking or AI Overviews signal in Google Search. Seeing that warning in Lighthouse does not mean your site is falling behind in search.",
        ],
      },
      {
        heading: "Should you add llms.txt? A decision checklist",
        paragraphs: [
          "llms.txt costs little and its return is uncertain today. So the decision should not be 'everyone add it' or 'completely useless' — it depends on who your site is for.",
          "Don't ignore the risks either: an unmaintained file points to removed pages, and Ahrefs recommends treating the file like code — reviewing changes — because it can contain text that AI tools might read as instructions (prompt injection).",
        ],
        bullets: [
          "Add it (priority): API or developer documentation, SaaS product docs, open-source projects — Claude Code and similar agents are real visitors of these sites",
          "Optional (a 30-minute job, low expectations): content-led B2B sites, consulting and service sites, especially if you have a tidy list of tools and guides",
          "Not a priority: e-commerce and local business sites — product feeds (Merchant Center), Google Business Profile, indexing and page speed matter far more",
          "Don't: treat llms.txt as access control instead of robots.txt, build separate Markdown pages for bots while neglecting your real pages, or stuff every URL into the file",
        ],
      },
      {
        heading: "What's the difference between llms.txt, robots.txt and sitemap.xml?",
        paragraphs: [
          "All three live at the root but do different jobs and don't replace each other. Granting or restricting AI bot access is done with robots.txt, not llms.txt.",
        ],
        bullets: [
          "robots.txt: tells each bot which paths it may crawl (access rules). Most search and AI bots follow it",
          "sitemap.xml: gives search engines the full list of URLs to index and their update dates (discovery)",
          "llms.txt: offers a short, annotated 'most important pages' summary for people and AI (context). No bot is obliged to follow it",
        ],
      },
      {
        heading: "How do you manage AI bots with robots.txt?",
        paragraphs: [
          "AI companies use different bots for different jobs, and each is managed separately in robots.txt. The key split: bots that crawl for model training, bots that crawl for AI search results, and bots that open a page on demand when a user asks a question. According to OpenAI's documentation these settings are independent — you can block training and still appear in search.",
          "Pick your policy first, then add the matching blocks to robots.txt. Changes take time to apply (OpenAI says about 24 hours for search). User-initiated fetchers (ChatGPT-User, Perplexity-User) may not follow robots.txt; if content truly must stay private, the only fix is to take it off the public web.",
        ],
        bullets: [
          "Training bots: GPTBot (OpenAI), ClaudeBot (Anthropic), Google-Extended (Gemini Apps and Vertex AI; Google states this token does not affect inclusion or ranking in Google Search)",
          "AI search bots: OAI-SearchBot (ChatGPT search), Claude-SearchBot (Claude search), PerplexityBot (Perplexity search). Blocking them reduces your visibility in that AI search",
          "User-initiated bots: ChatGPT-User, Claude-User, Perplexity-User — they open the page when a user asks; Anthropic notes that blocking Claude-User may reduce visibility for user-directed web search",
          "Policy 1 — Open to all (recommended for most business sites): no extra rules; 'User-agent: *' with 'Allow: /' is enough",
          "Policy 2 — Visible in AI search, closed to training: add 'Disallow: /' under each of 'User-agent: GPTBot', 'User-agent: ClaudeBot' and 'User-agent: Google-Extended'; leave OAI-SearchBot, Claude-SearchBot and PerplexityBot alone",
          "Policy 3 — Closed to all AI bots: give 'Disallow: /' to all training and search bots above, knowing you also give up appearing as a source in AI search",
        ],
      },
      {
        heading: "Is your llms.txt being read? How to measure it in server logs",
        paragraphs: [
          "This is Ahrefs' own advice: check your logs before deciding. The steps below show who requested your file over a month. Note: static hosts such as GitHub Pages don't provide access logs; you'll need your CDN's bot reports or hosting that keeps logs.",
          "Read the result carefully: a bot requesting llms.txt does not mean it uses the content or will cite you. The meaningful question is whether AI bots that fetch llms.txt then visit the pages listed in it. In the same logs, compare OAI-SearchBot, Claude-SearchBot and PerplexityBot requests to those pages with the month before you added the file.",
        ],
        bullets: [
          "1. Download the last 30 days of access logs (Nginx/Apache access.log or raw logs from your hosting panel)",
          "2. Count llms.txt requests by user agent: grep \"llms.txt\" access.log | awk -F'\"' '{print $6}' | sort | uniq -c | sort -rn",
          "3. Filter out fake bots: user agents are easy to spoof. OpenAI and Google publish their bots' IP ranges; verify IPs against those lists or with a reverse DNS lookup",
          "4. Check status codes: 200 means the file was served, 404 means it doesn't exist; server errors (5xx) also trigger a warning in the Lighthouse audit",
          "5. Compare: count AI bots requesting robots.txt and your actual pages in the same period; if llms.txt requests are a small fraction of that, the file is not a reading channel for you right now",
        ],
      },
      {
        heading: "What actually helps you appear in AI search?",
        paragraphs: [
          "Google's AI search guide says optimising for generative AI features is part of SEO, not a separate discipline. Being indexed and eligible for snippets is a prerequisite for being cited in AI Overviews and AI Mode. Across other AI search products the common denominator is the same: the bot must be able to reach the page, and the page must contain original information worth citing.",
          "The order we follow on this site: first, publish pages as full HTML generated at build time and get them indexed; then put a direct answer and our own worked examples in the first section of every article; low-cost extras like llms.txt come last.",
        ],
        bullets: [
          "Access: don't block AI search bots (OAI-SearchBot, Claude-SearchBot, PerplexityBot) or Googlebot in robots.txt; check that firewall or bot-protection settings don't cut them off",
          "Indexing: important pages must be indexed in Google; regularly clear the 'Discovered – currently not indexed' list in Search Console",
          "Readable HTML: content that exists in the HTML without running JavaScript (server-side or static generation) matters for many AI bots",
          "Original content: what Google calls 'non-commodity' content — your own data, worked examples and experience. Repeating the definition everyone writes doesn't earn citations",
          "Answer-first structure: question-style headings with a clear answer in the first sentence of each section is the easiest format to cite, for readers and AI summaries alike",
        ],
      },
      {
        heading: "How do you create llms.txt? (The short version)",
        paragraphs: [
          "If you decide to add it, the job takes under half an hour: put your site name in the H1 and a one-sentence summary below it, list your 20–50 most important pages as annotated links under H2 sections such as 'Tools', 'Guides' and 'Services', and upload the file to the root. Then open yoursite.com/llms.txt in a browser and check it displays as plain text.",
          "The llms.txt Generator does these steps with a form, lets you start from an example file and checks the H1, summary, link format, relative or http links and duplicate URLs. If you use a static site generator, generating the file from your page inventory at build time removes the stale-link risk; on this site llms.txt is regenerated on every build.",
        ],
      },
    ],
    faq: [
      {
        question: "What is llms.txt used for?",
        answer:
          "It gives AI tools a short, annotated Markdown list of a site's most important pages. Today it is requested mostly by coding agents and SEO tools; only a tiny share of AI search bots request it, and no effect on AI citations has been measured.",
      },
      {
        question: "Does llms.txt affect SEO?",
        answer:
          "Not in Google Search: Google says it does not use llms.txt and that it is not needed for search results, including AI Overviews and AI Mode. SE Ranking's analysis of about 300K domains also found no relationship between the file and AI citations.",
      },
      {
        question: "Do ChatGPT and Claude read llms.txt?",
        answer:
          "In Ahrefs' May 2026 data, OpenAI's GPTBot and Anthropic's ClaudeBot requested llms.txt only occasionally, and ChatGPT search's OAI-SearchBot accounted for less than 1% of requests. The most notable reader was Anthropic's coding agent, Claude Code. Fetching the file doesn't mean its content is used in answers.",
      },
      {
        question: "Is llms.txt the same as robots.txt?",
        answer:
          "No. robots.txt is an access rule that tells bots which pages they may crawl, and most bots follow it. llms.txt is only a summary of important pages; it doesn't restrict access and no bot is obliged to follow it.",
      },
      {
        question: "Should I block AI bots?",
        answer:
          "If you want to appear as a source in AI search, don't block search bots (OAI-SearchBot, Claude-SearchBot, PerplexityBot). If you don't want your content used for model training, you can block only training bots (GPTBot, ClaudeBot, Google-Extended) in robots.txt; these settings are independent.",
      },
    ],
    howTo: {
      name: "How to check whether llms.txt is read, using server logs",
      description: "Use access logs to find which bots request llms.txt, filter out fake bots and compare the result with AI bot traffic to your real pages.",
      steps: [
        { name: "Download your access logs", text: "Get the last 30 days of server or CDN access logs; on static hosting, use your CDN's bot reports." },
        { name: "Count llms.txt requests", text: "Group the log lines that contain llms.txt by user agent and count them." },
        { name: "Verify the bots", text: "User agents can be spoofed, so verify IP addresses against the ranges companies publish or with reverse DNS." },
        { name: "Check status codes", text: "Separate 200, 404 and 5xx responses; make sure the file is served correctly." },
        { name: "Compare with your real pages", text: "Count AI bots requesting robots.txt and your content pages in the same period; decide based on llms.txt's share." },
      ],
    },
    relatedToolKey: "llms-txt",
    resources: [
      { label: "What Is SEO and How Do You Do It?", href: "/en/blog/what-is-seo-how-to-do-it/" },
      { label: "llms.txt Generator: Example File and Format Check", href: "/en/free-tools/llms-txt-generator/" },
      { label: "What Is GEO? Generative Engine Optimization Guide", href: "/en/blog/what-is-geo-generative-engine-optimization/" },
      { label: "What Are UTM Parameters?", href: "/en/blog/what-are-utm-parameters/" },
      { label: "GA4 Unassigned Traffic: How to Fix It", href: "/en/blog/ga4-unassigned-traffic-how-to-fix/" },
      { label: "n8n Lead Enrichment Automation", href: "/en/blog/n8n-lead-enrichment-automation/" },
      { label: "Ahrefs: We analyzed 137K sites — 97% of llms.txt files never get read", href: "https://ahrefs.com/blog/llmstxt-study/", external: true },
      { label: "Search Engine Journal: SE Ranking on llms.txt and AI citations", href: "https://www.searchenginejournal.com/llms-txt-shows-no-clear-effect-on-ai-citations-based-on-300k-domains/561542/", external: true },
      { label: "Search Engine Journal: Google's new AI search guide", href: "https://www.searchenginejournal.com/googles-new-ai-search-guide-calls-aeo-and-geo-still-seo/575026/", external: true },
      { label: "OpenAI: Overview of OpenAI crawlers", href: "https://developers.openai.com/api/docs/bots", external: true },
      { label: "Anthropic: Claude's crawlers", href: "https://support.claude.com/en/articles/8896518", external: true },
      { label: "Perplexity: Perplexity crawlers", href: "https://docs.perplexity.ai/guides/bots", external: true },
    ],
  },
  {
    slug: "what-is-churn-rate",
    seoTitle: "What Is Churn Rate? How to Calculate and Reduce It",
    title: "What Is Churn Rate? How to Calculate It, What a Good Rate Is and How to Reduce It",
    description:
      "What is churn rate and how do you calculate it? The right formula, the common denominator mistake, voluntary vs involuntary churn, revenue churn and cohorts.",
    category: "saas-buyume",
    tldr: [
      "Churn is the loss of customers in a period: subscriptions cancelled, not renewed, or customers who stop buying. Churn rate = Customers lost in the period / Customers at the start of the period × 100. 800 subscribers at the start of the month and 40 cancellations → 5% monthly churn.",
      "Putting new customers or the end-of-period count in the denominator understates churn (4.6–4.8% on the same data). Monthly churn is not multiplied by 12: 5% monthly ≈ 46% annual churn, and average customer lifetime ≈ 20 months.",
      "Split churn into voluntary (the customer decides) and involuntary (declined cards, failed payments). In the example 12 of 40 losses are failed payments; recovering half of them cuts churn to 4.25% and lifts LTV per customer from $720 to about $847.",
      "Track revenue churn (gross and net) and cohort churn next to customer churn: high first-month churn with low churn afterwards points to onboarding, not the product. Compare against your own cohorts rather than unsourced 'good churn' benchmarks.",
    ],
    publishedAt: "2026-10-30",
    readingMinutes: 9,
    tags: ["Churn", "Churn Rate", "Customer Retention", "SaaS Metrics", "Revenue Churn", "Cohort Analysis"],
    sections: [
      {
        heading: "What is churn? (Short answer)",
        paragraphs: [
          "Churn is customer loss: customers cancelling or not renewing a subscription, or simply no longer buying from a business. Churn rate (customer churn rate, attrition rate) is that loss as a share of the customer base at the start of the period.",
          "Formula: Churn rate = (Customers lost during the period / Customers at the start of the period) × 100. A SaaS company that starts October with 800 active subscribers and loses 40 during the month has a 40 / 800 = 5% monthly churn rate. The flip side is retention: 95%.",
          "The term is used in SaaS and subscriptions, telecom (cancelled lines, number porting), banking (closed accounts) and in e-commerce where repeat purchases matter. All amounts in this article are example figures; to try your own numbers, use the Churn Rate Calculator.",
        ],
      },
      {
        heading: "How do you calculate churn rate? Step-by-step example",
        paragraphs: [
          "The example company is a B2B SaaS with monthly plans. It starts October with 800 active subscribers and an average revenue per account (ARPA) of $45, so MRR is $36,000. In October it adds 70 new customers and loses 40, ending the month with 830.",
          "Correct calculation: 40 / 800 = 5%. The 70 new customers are not part of this calculation; to measure their losses, use cohort analysis (below). Where subscriptions start throughout the month and the base changes quickly, some teams use the average customer count instead: 40 / ((800 + 830) / 2) = 40 / 815 ≈ 4.9%. Whichever method you choose, use the same one every month.",
        ],
        bullets: [
          "Step 1 — Pick the period: a month for monthly plans; a year or quarter for annual contracts",
          "Step 2 — Count active paying customers at the start (excluding trials and free plans): 800",
          "Step 3 — Count how many of them left during the period (cancelled + not renewed + closed for non-payment): 40",
          "Step 4 — Divide and multiply by 100: 40 / 800 × 100 = 5%",
          "Step 5 — Split losses by type: 28 voluntary cancellations (3.5%) + 12 failed payments (1.5%)",
        ],
      },
      {
        heading: "What is the most common churn calculation mistake?",
        paragraphs: [
          "The denominator. Even with the same number of lost customers, what you divide by changes the result and makes churn look lower at fast-growing companies. Three results from the same October data:",
        ],
        bullets: [
          "Correct: 40 / 800 (start of period) = 5.0%",
          "Wrong: 40 / 830 (end of period) = 4.8% — customers acquired during the month sneak into the denominator",
          "Wrong: 40 / 870 (start + new customers) = 4.6% — brand-new customers inflate the base before they could realistically churn",
          "Other mistakes: counting trial users as customers, keeping accounts with failed payments 'active' for months, counting a plan change as a cancellation plus a new signup",
        ],
      },
      {
        heading: "How do you convert monthly churn to annual churn?",
        paragraphs: [
          "Don't multiply monthly churn by 12: the remaining base shrinks every month, so losses compound. Annual churn = 1 − (1 − monthly churn)^12. 5% monthly churn ≈ 46% annual churn (not the 60% you get from ×12). Without new customers, about 432 of the 800 subscribers would remain after 12 months.",
          "Average customer lifetime ≈ 1 / monthly churn = 1 / 0.05 = 20 months. This assumes churn stays constant; in practice churn is usually high in the first months and lower later, so check it against cohort data.",
        ],
      },
      {
        heading: "What is the difference between voluntary and involuntary churn?",
        paragraphs: [
          "Voluntary churn is a deliberate cancellation: price, a missing feature, a competitor, the need going away. Involuntary churn happens when the customer did not intend to leave but the payment could not be collected: an expired or maxed-out card, a bank decline, outdated billing details.",
          "Involuntary churn is often the cheapest churn to win back, because the customer never decided to leave. Billing platforms can retry failed charges automatically; Stripe's documentation, for example, lists 8 tries within 2 weeks as the recommended default for Smart Retries. When a card is declined with a hard decline code such as lost or stolen card, retries will not help and the customer needs to add a new payment method.",
          "Suppose retries plus email/SMS reminders recover 6 of the 12 failed payments: losses fall to 34 and churn to 34 / 800 = 4.25%. Annual churn drops from about 46% to about 41%; with no new customers, about 475 subscribers would remain after 12 months instead of 432.",
        ],
        bullets: [
          "Remind customers before their card expires",
          "Don't cancel after one failed charge; schedule several retries a few days apart",
          "On a payment failure, send an email and in-app notice with a one-click link to update billing details",
          "Give accounts with failed payments a short grace period instead of deleting them immediately, and report them separately",
        ],
      },
      {
        heading: "What is the difference between customer churn and revenue churn?",
        paragraphs: [
          "Customer (logo) churn counts how many customers you lost; revenue churn measures how much monthly recurring revenue (MRR) you lost. The 40 customers who left in October had $1,620 of MRR; some customers downgraded for $270 of contraction, while others upgraded for $720 of expansion.",
          "Gross revenue churn = (Churned MRR + Contraction MRR) / Starting MRR = ($1,620 + $270) / $36,000 = 5.25%. Net revenue churn also counts expansion: ($1,620 + $270 − $720) / $36,000 = 3.25%. When expansion exceeds churn and contraction, net revenue churn goes below zero; this is negative churn, the same thing as NRR above 100%.",
          "Note: acquiring more new customers than you lose is not negative churn; it is just net customer growth. Negative churn is measured only on revenue from existing customers.",
        ],
      },
      {
        heading: "How do you read churn with cohort analysis?",
        paragraphs: [
          "A single monthly churn number mixes loyal long-time customers with new, undecided ones. Cohort analysis tracks customers who signed up in the same month as one group and checks how many remain each month.",
          "Example: of 100 customers who signed up in May, 82 are still active at the end of June, 74 in July, 70 in August, 67 in September and 65 in October. Month-by-month churn: 18%, 9.8%, 5.4%, 4.3% and 3.0%. Most of the loss happens in the first month, which points to onboarding rather than the product. If newer cohorts show lower first-month churn than older ones, your fixes are working.",
        ],
      },
      {
        heading: "Why does churn matter? Its effect on LTV and growth",
        paragraphs: [
          "Churn sits in the denominator of customer lifetime value (LTV): LTV = Monthly gross profit per customer / Monthly churn. With an ARPA of $45 and an 80% gross margin, monthly gross profit per customer is $36. At 5% churn LTV is $36 / 0.05 = $720; at 4.25% about $847; at 4% $900. A one-point drop in churn raises the acquisition cost (CAC) you can afford for the same customer by 25%.",
          "The same logic applies to growth: a company that loses 5% of its base every month has to win 5% of its base in new customers every month just to stand still. That is why reducing churn is often a cheaper growth lever than increasing ad spend.",
        ],
      },
      {
        heading: "What signals warn you about churn early?",
        paragraphs: [
          "Churn rate is a lagging metric; it shows up after the customer has left. Tracking behaviour that changes before a customer leaves buys you time to act.",
        ],
        bullets: [
          "Usage decline: weekly drops in logins, core feature usage or active seats",
          "Incomplete setup: accounts that have not completed the step that delivers core value (integration, first report, first order) within 14 days",
          "Support signals: unresolved tickets, repeated complaints, falling satisfaction scores",
          "Payment signals: card expiring soon, failed charges, downgrades",
          "Commercial signals: your champion leaving the company, renewal coming up in 60–90 days",
        ],
      },
      {
        heading: "How do you reduce churn? A plan by churn type",
        paragraphs: [
          "First measure why customers cancel: add an optional one-question reason list to the cancellation flow (price, missing feature, not using it, switched to a competitor, business closed, payment issue) and report the mix every month. Then match each reason with an intervention:",
        ],
        bullets: [
          "Early churn (first 1–2 months): shorten onboarding, show first value in the first session, give personal help to accounts that haven't finished setup",
          "'Not using it': usage-drop alerts that trigger a customer success call, usage report emails, a pause option",
          "Price: offer a downgrade instead of cancellation, an annual-plan discount, a smaller usage-based plan",
          "Missing feature / competitor: tie cancellation reasons to the product roadmap and track each reason's monthly share",
          "Involuntary churn: automatic retries, card-update reminders, a grace period",
          "Wrong customers: find high-churn segments (channel, plan, industry) and pull ad spend from them; a low-CAC customer who leaves fast is expensive",
        ],
      },
      {
        heading: "How do you measure churn in e-commerce?",
        paragraphs: [
          "Outside subscriptions, e-commerce customers don't cancel; they just stop buying. So you first define a window based on your product's natural repurchase cycle: 90, 180 or 365 days. A customer who hasn't ordered again within that window counts as churned.",
          "Example: if 1,300 of the 2,000 customers who bought in Q1 did not order again in the next 180 days, 180-day churn is 65% and the repeat purchase rate is 35%. This number determines how much ad cost you can accept on the first order; combine it with the profit margin and ROAS calculators.",
        ],
      },
    ],
    faq: [
      {
        question: "What does churn mean?",
        answer:
          "Churn means customer loss or attrition. Churn rate is the share of customers at the start of a period who are lost during that period. It is used in SaaS, subscriptions, telecom, banking and e-commerce.",
      },
      {
        question: "How do you calculate churn rate?",
        answer:
          "Churn rate = Customers lost in the period / Customers at the start of the period × 100. A company that starts with 800 subscribers and loses 40 has a 5% monthly churn rate. New customers acquired during the period are not added to the denominator.",
      },
      {
        question: "What is a good churn rate?",
        answer:
          "There is no single number for everyone: churn is naturally higher for monthly plans sold to small businesses and lower for enterprise products on annual contracts. Instead of benchmarks with unclear sources, look at your own cohorts; if newer cohorts churn less than older ones, you're on the right track.",
      },
      {
        question: "What is involuntary churn?",
        answer:
          "Customer loss caused by failed payments (expired cards, limits, bank declines) even though the customer did not intend to leave. Automatic retries, card-update reminders and a short grace period can win back a large part of it.",
      },
      {
        question: "What is negative churn?",
        answer:
          "When expansion revenue from existing customers exceeds the revenue lost to cancellations and downgrades, net revenue churn goes below zero and NRR rises above 100%. Acquiring more new customers than you lose is not negative churn.",
      },
    ],
    howTo: {
      name: "How to calculate churn rate",
      description: "Calculate monthly churn from the starting customer base, convert it to annual churn and split losses by type.",
      steps: [
        { name: "Pick the period", text: "Use a month for monthly plans, or a year or quarter for annual contracts." },
        { name: "Count starting customers", text: "Count active paying customers on the first day of the period, excluding trial and free-plan users. Example: 800." },
        { name: "Count lost customers", text: "Count how many of those customers cancelled, didn't renew or were closed for non-payment during the period. Example: 40." },
        { name: "Calculate the rate", text: "Divide losses by starting customers and multiply by 100: 40 / 800 × 100 = 5%. For annual churn use 1 − (1 − 0.05)^12 ≈ 46%." },
        { name: "Split losses and check revenue churn", text: "Report voluntary and involuntary churn separately, and divide churned plus contraction MRR by starting MRR for gross revenue churn." },
      ],
    },
    relatedToolKey: "churn",
    resources: [
      { label: "Churn Rate Calculator", href: "/en/free-tools/churn-rate-calculator/" },
      { label: "LTV Calculator", href: "/en/free-tools/ltv-calculator/" },
      { label: "NRR Calculator", href: "/en/free-tools/nrr-calculator/" },
      { label: "MRR Calculator", href: "/en/free-tools/mrr-calculator/" },
      { label: "Profit Margin Calculator", href: "/en/free-tools/gross-profit-margin-calculator/" },
      { label: "What Is MRR and How Do You Calculate It?", href: "/en/blog/what-is-mrr-how-to-calculate/" },
      { label: "What Is LTV? What Should the LTV:CAC Ratio Be?", href: "/en/blog/what-is-ltv-ltv-cac-ratio/" },
      { label: "What Is NRR? Why It Matters More Than ARR", href: "/en/blog/what-is-nrr-saas-growth-metric/" },
      { label: "What Is CAC? How to Calculate Customer Acquisition Cost", href: "/en/blog/what-is-cac-customer-acquisition-cost/" },
      { label: "Stripe: Automate payment retries", href: "https://docs.stripe.com/billing/revenue-recovery/smart-retries", external: true },
      { label: "Wikipedia: Churn rate", href: "https://en.wikipedia.org/wiki/Churn_rate", external: true },
    ],
  },
  {
    slug: "how-to-run-meta-ads-guide",
    seoTitle: "How to Run Meta Ads: Budget, Audience & Learning Phase",
    title: "How to Run Meta Ads (2026): Facebook and Instagram Ads Step by Step, Budget Math and the Learning Phase",
    description:
      "How to run Meta ads: Ads Manager setup, Pixel and Conversions API, the 6 campaign objectives, Advantage+, audiences and a worked budget-from-target example.",
    category: "performans-pazarlama",
    tldr: [
      "Meta ads (Facebook, Instagram, Messenger, WhatsApp) are built in Ads Manager: business portfolio and ad account → payment method → Meta Pixel + Conversions API → campaign objective → ad set (audience, budget, placements) → ad (creative, copy, link).",
      "Build the budget backwards from your targets: with a $120 average order and a 40% pre-ad contribution margin, break-even ROAS is 2.5 and break-even CPA is $48. If you want 10% profit per order, target CPA is $36 and target ROAS ≈ 3.3.",
      "Meta expects an ad set to get roughly 50 optimization events in the 7 days after the last significant edit to leave the learning phase. At a $36 CPA that is ≈ $257 per day per ad set; $70/day brings ≈ 14 purchases a week, which is not enough.",
      "If the budget falls short, consolidate ad sets or optimize for a more frequent event (e.g. initiate checkout at ≈ $9 → ≈ 54 events/week). Advantage+ campaign budget + Advantage+ audience + Advantage+ placements have been the default setup for sales and app campaigns since 2025.",
    ],
    publishedAt: "2026-10-30",
    readingMinutes: 10,
    tags: ["Meta Ads", "Facebook Ads", "Instagram Ads", "Ads Manager", "Advantage+", "Ad Budget"],
    sections: [
      {
        heading: "How do you run Meta ads? (Short answer)",
        paragraphs: [
          "Meta ads are ads shown on Facebook, Instagram, Messenger and WhatsApp (and the Audience Network), all set up from one place: Meta Ads Manager. The order: create a business portfolio and ad account, add a payment method, install the Meta Pixel and ideally the Conversions API on your site, choose a campaign objective, set audience, budget and placements in the ad set, then upload creative and copy in the ad and publish.",
          "The 'Boost' button on an Instagram or Facebook post is quick, but objectives, measurement and audience options are limited; businesses that want sales or leads should use Ads Manager. All amounts in this article are example figures; for your own numbers use the Ad Budget Calculator.",
        ],
      },
      {
        heading: "What do you need before running Meta ads?",
        paragraphs: [
          "The ad itself takes 15 minutes; the setup underneath it takes longer. If it is missing, the algorithm learns from the wrong events and results can't be measured.",
        ],
        bullets: [
          "A Facebook Page and an Instagram professional account (business or creator), connected to each other",
          "A business portfolio in Meta Business Suite (formerly Business Manager) with an ad account; pick the ad account's currency and time zone carefully at setup, as changing them later is a hassle",
          "A payment method (card or the other options available for your account) and billing details",
          "Domain verification and the Meta Pixel: test in Events Manager that purchase, add to cart, initiate checkout and form submit events fire correctly",
          "Conversions API (CAPI): sends events from your server as well as the browser, reducing events lost to ad blockers and cookie restrictions",
          "A UTM template: consistent UTM parameters on ad links so Meta traffic lands in the right channel in GA4",
        ],
      },
      {
        heading: "Why should the Meta Pixel and Conversions API run together?",
        paragraphs: [
          "Meta's developer documentation recommends implementing the Conversions API alongside the Meta Pixel. The Pixel sends events from the browser and CAPI from the server; when one misses an event, the other catches it. When both send the same event, deduplication prevents double counting: if the Pixel's eventID matches CAPI's event_id and the event names match, Meta discards copies received within 48 hours of the first event.",
          "Practical check: in Events Manager each event should show both browser and server sources with no deduplication warning. Most platforms such as Shopify and WooCommerce offer Pixel and CAPI integrations; after setup, place a test order and confirm the purchase value and currency.",
        ],
      },
      {
        heading: "How do you choose a Meta campaign objective? The 6 objectives",
        paragraphs: [
          "The campaign objective tells the algorithm whom to look for: choose Traffic and it finds people likely to click; choose Sales and it finds people likely to buy. Your objective should match the business result you want to measure.",
        ],
        bullets: [
          "Awareness: reach and recall; new brands, local businesses, launches",
          "Traffic: visits to a website, app or profile; content and blog distribution. Don't use it for sales: it finds people who click but don't buy",
          "Engagement: video views, messages, post engagement, event responses; the messaging goal suits businesses that sell via WhatsApp or Instagram DMs",
          "Leads: instant forms, Messenger/WhatsApp or website forms; B2B and service businesses",
          "App promotion: app installs and in-app events",
          "Sales: e-commerce purchases, add to cart, catalog ads; requires a Pixel and a purchase event",
        ],
      },
      {
        heading: "What are Advantage+ campaigns and when should you use them?",
        paragraphs: [
          "Advantage+ is Meta's automation layer that hands budget, audience and placement decisions to AI. According to Meta for Developers' announcement of June 3, 2025, from May 29, 2025 Advantage+ stopped being a separate campaign type for sales and app campaigns and became part of the standard campaign flow. A campaign counts as 'Advantage+ on' when it uses three levers: Advantage+ campaign budget (distributes budget across ad sets automatically), Advantage+ audience (treats your audience inputs as suggestions and searches more broadly) and Advantage+ placements (picks the most efficient placements).",
          "Meta announced that the legacy Advantage+ shopping campaign (ASC) flow would be removed from the API in Q1 2026 (v25.0) and published migration paths for existing campaigns; build new campaigns directly in the new structure. Practical rule: if your Pixel and purchase event are healthy and you get dozens of conversions a week, start with Advantage+. If conversion data is thin, the account is new, or you have hard audience constraints (a single city, a B2B job function), start with manual settings for more control while you build data.",
        ],
      },
      {
        heading: "How do you set a Meta ads budget? Work backwards from targets",
        paragraphs: [
          "Don't set the budget as 'let's try $50 a day'; calculate it backwards from your profit target. Example: average order value $120 and a pre-ad contribution margin of 40% after product cost, shipping, fees and packaging. Contribution per order is $120 × 0.40 = $48.",
          "Break-even CPA is $48 and break-even ROAS is 1 / 0.40 = 2.5. If you want 10% of revenue left as profit per order, you can spend $120 × (0.40 − 0.10) = $36 on ads: target CPA $36, target ROAS $120 / $36 ≈ 3.33. You can use these as a cost-per-result goal or ROAS goal bid in Meta; in the first weeks it is safer to treat them as monitoring thresholds.",
          "Then add the learning-phase constraint: Meta expects an ad set to collect roughly 50 optimization events in the 7 days after the last significant edit to stabilize delivery. At a $36 CPA, 50 purchases a week cost $1,800, i.e. ≈ $257 per day per ad set.",
        ],
        bullets: [
          "With $70 a day: 70 × 7 / 36 ≈ 13.6 purchases/week → the ad set will likely stay 'Learning limited'",
          "Fix 1 — Consolidate: one ad set with campaign budget instead of 3–4 small ad sets with the same goal, so events pool in one place",
          "Fix 2 — Move the event up the funnel: if initiate checkout costs ≈ $9, 70 × 7 / 9 ≈ 54 events/week; switch to purchase once volume grows",
          "Fix 3 — Increase the budget or focus the test on fewer products/audiences",
          "B2B / leads: with $2,400 gross profit per customer, half of it allowed for acquisition ($1,200) and 5% of leads becoming customers, maximum cost per lead is $1,200 × 0.05 = $60",
        ],
      },
      {
        heading: "How do you choose a target audience on Meta?",
        paragraphs: [
          "In Meta's current setup, detailed interest targeting works more like a suggestion to the algorithm than a hard limit in most campaigns; creative and conversion data do most of the targeting. So instead of slicing audiences into narrow interest combinations, work with a few clear audience types:",
        ],
        bullets: [
          "Broad: only country/city, age and language; often the most efficient start for sales campaigns with strong Pixel data",
          "Custom audiences: site visitors in the last 30–180 days, add-to-cart non-buyers, Instagram/Facebook engagers, customer lists (collected with proper consent under applicable privacy law)",
          "Lookalike audiences: built from your most valuable customer list; the cleaner and more valuable the list, the better",
          "Exclusions: exclude your customer list or recent purchasers so existing customers don't see new-customer offers",
          "Location: limit to where you can ship or serve; use a radius for local businesses",
        ],
      },
      {
        heading: "How do you prepare Meta ad creative?",
        paragraphs: [
          "With broad audiences, creative is what finds the right people: an image or video that says in the first 2–3 seconds who it is for and what problem it solves helps the algorithm pick the right viewers. Instead of starting with one creative, load several clearly different angles into the same ad set.",
        ],
        bullets: [
          "Formats: vertical video (Reels/Stories 9:16), square or 4:5 images (feed), catalog/carousel (multiple products)",
          "Angles: problem–solution, product-in-use video, customer review (real and with permission), comparison, offer",
          "Copy: lead with the benefit and offer; state price or shipping advantages clearly; match the call to action to the objective",
          "Competitor research: ads competitors have kept running for a long time in the Meta Ad Library show angles that work",
          "Fatigue: if frequency rises, click-through rate falls and CPA climbs, add new angles; don't delete the winner",
        ],
      },
      {
        heading: "What should you do in the first 14 days after launch?",
        paragraphs: [
          "The most common mistake is changing budget, audience and creative constantly while early results fluctuate. Changes to budget, bid, targeting, optimization event and creative can count as significant edits and restart learning; see our Meta learning phase article for details.",
        ],
        bullets: [
          "Days 1–3: check ad approval, delivery, incoming Pixel events, links and UTMs; don't make performance calls",
          "Days 4–7: compare CPA and ROAS to break-even; pausing a clearly bad creative is fine, but don't change the structure",
          "Days 8–14: if learning has ended, raise the budget gradually (small increases every few days rather than big jumps); if 'Learning limited', consolidate or change the event",
          "Weekly: compare conversions reported by Meta with GA4 and your order system; Meta can also count view-through conversions, so the numbers will differ; decide based on your own profit data",
        ],
      },
      {
        heading: "The most common Meta ads mistakes",
        paragraphs: [
          "Most mistakes come from sending the algorithm the wrong signal or spending without measurement:",
        ],
        bullets: [
          "Choosing Traffic or Engagement when you want sales",
          "Launching without testing Pixel events, or without sending the purchase value",
          "Splitting a small budget across many ad sets so none of them finishes learning",
          "Judging 'is a ROAS of 3 good?' without knowing break-even ROAS; mistaking revenue ROAS for profit",
          "Running new-customer campaigns without excluding existing customers",
          "Missing UTMs, so Meta traffic shows up as 'Unassigned' or 'Referral' in GA4",
        ],
      },
    ],
    faq: [
      {
        question: "How do you run a Meta ad?",
        answer:
          "In Meta Ads Manager, create an ad account, add a payment method, install the Meta Pixel on your site, choose a campaign objective (e.g. Sales), set audience, budget and placements in the ad set, upload creative and copy in the ad and publish. The ad goes live once approved.",
      },
      {
        question: "How much should I spend on Meta ads?",
        answer:
          "Work backwards: target CPA × roughly 50 optimization events a week ÷ 7 = daily budget per ad set. With a $36 target CPA you need ≈ $257 a day; with less, consolidate ad sets or optimize for a more frequent event.",
      },
      {
        question: "What is the difference between Boost and Ads Manager?",
        answer:
          "Boost turns an existing post into an ad quickly, but objectives, measurement and audience options are limited. Ads Manager offers all campaign objectives, optimization for Pixel events, custom and lookalike audiences, A/B tests and detailed reporting.",
      },
      {
        question: "Should I use Advantage+?",
        answer:
          "If your Pixel is healthy and you get dozens of conversions a week, Advantage+ (campaign budget, audience and placements) is a good start. If conversion data is thin or you have a hard audience constraint, build data with manual settings first.",
      },
      {
        question: "How long does the Meta learning phase last?",
        answer:
          "Meta expects an ad set to collect roughly 50 optimization events in the 7 days after the last significant edit. Ad sets that don't reach that volume show as 'Learning limited'; the fixes are a bigger budget, fewer ad sets or a more frequent optimization event.",
      },
    ],
    howTo: {
      name: "How to run Meta ads step by step",
      description: "Setting up Facebook and Instagram ads from ad account to launch.",
      steps: [
        { name: "Prepare the accounts", text: "Connect your Facebook Page and Instagram professional account; create a business portfolio and ad account in Meta Business Suite and add a payment method." },
        { name: "Set up measurement", text: "Verify your domain, install the Meta Pixel and Conversions API, and test purchase and form events in Events Manager." },
        { name: "Calculate targets", text: "Derive break-even ROAS and target CPA from contribution margin; calculate the budget needed for roughly 50 events per ad set per week." },
        { name: "Build the campaign", text: "Choose the objective (e.g. Sales), decide on Advantage+ or manual settings, and enter location, audience and budget in the ad set." },
        { name: "Upload creative and launch", text: "Add several images/videos with different angles, copy and UTM-tagged links; after approval, monitor for 7 days without changing the structure." },
      ],
    },
    relatedToolKey: "ad-budget",
    resources: [
      { label: "How to Run Instagram Ads: Cost and Budget", href: "/en/blog/how-to-run-instagram-ads/" },
      { label: "Ad Budget Calculator", href: "/en/free-tools/ad-budget-calculator/" },
      { label: "ROAS Calculator", href: "/en/free-tools/roas-calculator/" },
      { label: "Profit Margin Calculator", href: "/en/free-tools/gross-profit-margin-calculator/" },
      { label: "Marketplace Profit Calculator", href: "/en/free-tools/marketplace-profit-calculator/" },
      { label: "UTM Builder", href: "/en/free-tools/utm-builder/" },
      { label: "How to Exit the Meta Ads Learning Phase Faster", href: "/en/blog/meta-ads-exit-learning-phase-tactics/" },
      { label: "How to Set an Advertising Budget", href: "/en/blog/how-to-set-advertising-budget/" },
      { label: "What Is ROAS and How Do You Calculate It?", href: "/en/blog/what-is-roas-how-to-calculate/" },
      { label: "What Are UTM Parameters?", href: "/en/blog/what-are-utm-parameters/" },
      { label: "Meta for Developers: Advantage+ campaign experience for sales and app", href: "https://developers.facebook.com/blog/post/2025/06/03/advantage-plus-campaign-experience-for-sales-and-app/", external: true },
      { label: "Meta for Developers: Deduplicating Pixel and Conversions API events", href: "https://developers.facebook.com/documentation/ads-commerce/conversions-api/deduplicate-pixel-and-server-events", external: true },
      { label: "Meta Business Help Center: About the learning phase", href: "https://www.facebook.com/business/help/112167992830700/", external: true },
    ],
  },
  {
    slug: "what-is-arr-annual-recurring-revenue",
    seoTitle: "What Is ARR? Annual Recurring Revenue & the ARR Bridge",
    title: "What Is ARR? How to Calculate Annual Recurring Revenue — ARR Bridge, CARR and Bookings Explained",
    description:
      "What is ARR and how do you calculate it? Multi-year and ramp contracts, the new/expansion/churn ARR bridge, NRR and GRR, CARR, bookings vs revenue, examples.",
    category: "saas-buyume",
    tldr: [
      "ARR (Annual Recurring Revenue) is the annualised value of every recurring subscription and contract that is active on a given date. It is a snapshot, not the revenue earned over a year. In the example company, ARR on 31 December is $302,400 + $397,600 + $140,000 = $840,000.",
      "Monthly plans count × 12, annual contracts at their annual value, and ramped multi-year deals at the current year's value. Dividing a $54,000 three-year ramp deal by 3 ($18,000) overstates the real first-year price ($14,000) and inflates ARR by $40,000 in the example.",
      "Annual ARR bridge: Opening $600,000 + New $228,000 + Expansion $102,000 − Contraction $24,000 − Churn $66,000 = Closing $840,000. ARR grew 40%; the same bridge gives NRR of 102% and GRR of 85%.",
      "One company, five different numbers: ARR $840k, CARR $867k, run-rate revenue $942k, bookings (TCV) $628k and recognised subscription revenue ≈ $720k. State which one you report — mixing them is the most common mistake.",
    ],
    publishedAt: "2026-10-31",
    readingMinutes: 8,
    tags: ["ARR", "Annual Recurring Revenue", "SaaS Metrics", "Net New ARR", "CARR", "NRR"],
    sections: [
      {
        heading: "What is ARR? (Short answer)",
        paragraphs: [
          "ARR (Annual Recurring Revenue) is the annualised value of all recurring subscriptions and contracts that are active on a specific date. B2B SaaS companies, enterprise software vendors and any business selling annual licences describe their size and growth in ARR.",
          "Formula: ARR = Σ (annual recurring value of every active contract). If every customer is on a monthly plan, ARR = MRR × 12. The key point: ARR is not the cash collected or the revenue booked over a year. It answers 'if nothing changed in today's customer base, how much recurring revenue would it produce over the next 12 months?'.",
          "All amounts in this article are example figures for one fictional B2B SaaS company. For monthly movements and the Quick Ratio, see the MRR guide; for the short comparison, see ARR vs MRR; to run your own numbers, use the ARR Calculator.",
        ],
      },
      {
        heading: "How to calculate ARR: a contract-by-contract example",
        paragraphs: [
          "On 31 December 2026 the example company has 144 active customers on three contract types. ARR is the sum of each contract's annual recurring value; one-off items and usage overages stay out.",
          "Total: $302,400 + $397,600 + $140,000 = $840,000 ARR. Average ARR per customer (average contract value, ACV) is $840,000 / 144 ≈ $5,833. The monthly equivalent (MRR) is $840,000 / 12 = $70,000.",
        ],
        bullets: [
          "Monthly plan ($300/month): 84 customers × $300 × 12 = $302,400",
          "Annual contracts: 50 customers, annual values totalling $397,600 (average ≈ $7,952)",
          "Three-year ramp contracts ($14,000 → $18,000 → $22,000 per year; currently in year 1): 10 × $14,000 = $140,000",
          "Excluded: $45,000 of setup/integration fees invoiced this year and $2,500 of December usage overage",
        ],
      },
      {
        heading: "What counts toward ARR — and what doesn't?",
        paragraphs: [
          "The rule mirrors MRR: revenue that will repeat under contract even if the customer does nothing is ARR; anything one-off or uncertain is not. The difference is that annual and multi-year contracts carry far more weight in ARR, and that is where most mistakes happen.",
        ],
        bullets: [
          "Include: monthly plans annualised; annual contracts at their annual value; continuously billed add-ons and seat packs",
          "Include at the price actually paid: discounted contracts (not list price)",
          "Include up to the commitment: the committed annual minimum in usage-based contracts",
          "Exclude: setup, training, consulting and integration fees; one-off licence sales",
          "Exclude: usage above the commitment — track it separately as usage run-rate",
          "Exclude: free trials and freemium users; signed contracts that have not started yet (those belong in CARR)",
        ],
      },
      {
        heading: "How do multi-year and ramp contracts affect ARR?",
        paragraphs: [
          "Booking a multi-year deal's total contract value (TCV) into one year's ARR is the crudest error: a $54,000 three-year contract does not add $54,000 of ARR. A subtler error is dividing TCV by the number of years.",
          "The example ramp contracts are $14,000 in year one, $18,000 in year two and $22,000 in year three. Using TCV / 3 = $18,000 puts 10 contracts into ARR at $180,000, while customers actually pay $14,000 a year today. The $40,000 gap pulls future price steps into the present. The more conservative and common approach is to use the current year's value and record each step-up as expansion ARR when it takes effect.",
        ],
        bullets: [
          "Flat multi-year contract: ARR = annual value (same as TCV / years)",
          "Ramp contract: ARR = the current year's value; step-ups are expansion in the year they start",
          "First-year discount: ARR = discounted value; when the discount ends, tag the uplift as 'discount roll-off', not upsell",
          "Multi-year amount paid upfront: large in cash, no change to ARR",
        ],
      },
      {
        heading: "What is an ARR bridge? New, expansion, contraction and churned ARR",
        paragraphs: [
          "Total ARR doesn't show where growth came from. So the difference between the opening and closing balance of a year (or quarter) is split into four movements — the ARR bridge or ARR waterfall. The example company started 2026 with 120 customers and $600,000 ARR.",
          "Bridge: $600,000 + $228,000 + $102,000 − $24,000 − $66,000 = $840,000. Net new ARR = New + Expansion − Contraction − Churn = $240,000; annual ARR growth = $240,000 / $600,000 = 40%. Customers: 120 + 38 − 14 = 144.",
        ],
        bullets: [
          "New ARR: 38 customers who signed and started during the year — $228,000 (including 10 ramp deals × $14,000 = $140,000)",
          "Expansion ARR: upgrades, extra seats/modules and price increases from existing customers — $102,000",
          "Contraction ARR: downgrades, fewer seats, discounts at renewal — $24,000",
          "Churned ARR: ARR of the 14 customers who cancelled or did not renew — $66,000",
        ],
      },
      {
        heading: "Is ARR growth healthy? NRR and GRR from the bridge",
        paragraphs: [
          "The same bridge produces two ratios that show whether growth comes from new sales or from the existing base. Both use only customers present at the start of the period; new customers are excluded.",
          "Reading: the existing base didn't shrink — it grew slightly (NRR 102%). But GRR of 85% means 15% of opening revenue leaked through contraction and churn, and expansion only just covers it. With 95% of net new ARR ($228,000 / $240,000) coming from new logos, growth will drop quickly in any year new sales slow. Read growth against profitability with the Rule of 40, and unit economics with CAC and LTV.",
        ],
        bullets: [
          "NRR = (Opening + Expansion − Contraction − Churn) / Opening = $612,000 / $600,000 = 102%",
          "GRR = (Opening − Contraction − Churn) / Opening = $510,000 / $600,000 = 85%; it can never exceed 100% because expansion is excluded",
          "Annual logo churn = Churned customers / Opening customers = 14 / 120 ≈ 11.7%",
          "New-logo share of gross adds = New / (New + Expansion) = $228,000 / $330,000 ≈ 69%",
        ],
      },
      {
        heading: "ARR vs CARR vs run-rate vs bookings vs revenue",
        paragraphs: [
          "These five terms are the most frequently mixed up in board decks and investor calls, and they produce five different numbers for the same company. Here are the example company's figures on 31 December 2026; always state which one you report and how it is defined.",
          "Run-rate revenue is higher than ARR because December's $6,000 setup fees and $2,500 usage overage were also multiplied by 12: ($70,000 + $6,000 + $2,500) × 12 = $942,000. Annualising a month that contains one-off items is misleading, which is why ARR only takes the recurring part.",
        ],
        bullets: [
          "ARR: annualised value of recurring contracts active on 31 December — $840,000",
          "CARR (contracted ARR): ARR + signed contracts not yet live (3 customers starting in February, $42,000) − contracts with a cancellation/non-renewal notice (2 customers, $15,000) = $867,000",
          "Run-rate revenue: the last month's total revenue × 12, one-offs included — $942,000",
          "Bookings (TCV): total value of contracts signed during the year, including all three years of the 10 ramp deals ($540,000) — $628,000",
          "Recognised subscription revenue for the year: assuming ARR rose linearly from $600k to $840k, ≈ $720,000; the actual accounting figure depends on billing and start dates",
        ],
      },
      {
        heading: "How should ARR be reported across currencies?",
        paragraphs: [
          "If you price in one currency and report in another, exchange-rate moves change ARR without a single sale. €400,000 of ARR is $440,000 at an example rate of 1.10 and $480,000 at 1.20 — a 9% 'increase' that is purely FX.",
          "Fix: report ARR in the billing currency and at a constant (period-opening) rate, and show the FX effect as its own line in the bridge. In high-inflation markets, also tag price increases separately inside expansion ARR, otherwise expansion looks like product adoption.",
        ],
      },
      {
        heading: "The most common ARR mistakes",
        paragraphs: [
          "Most broken ARR reporting fails on definitions, not arithmetic. Write the definition down once and apply it every period so the numbers stay comparable.",
        ],
        bullets: [
          "Treating ARR as the sum of revenue earned during the year (ARR is a point-in-time snapshot)",
          "Booking a multi-year TCV into one year, or averaging a ramp deal as TCV / years",
          "Adding setup, consulting or usage overage, or annualising a month that contains one-off revenue",
          "Counting signed-but-not-started contracts as ARR (that's CARR)",
          "Reporting only the total and never showing the new / expansion / contraction / churn bridge",
          "Presenting FX or inflation-driven price changes as growth",
        ],
      },
    ],
    faq: [
      {
        question: "What does ARR stand for?",
        answer:
          "ARR stands for Annual Recurring Revenue: the annualised value of active subscriptions and contracts on a given date. In corporate finance the same abbreviation is also used for Accounting Rate of Return, an unrelated ratio used to evaluate investments.",
      },
      {
        question: "How do you calculate ARR?",
        answer:
          "Add up the annual recurring value of every active contract: monthly plans × 12, annual contracts at their annual value, and ramped multi-year contracts at the current year's value. Example: 84 × $300 × 12 + $397,600 + 10 × $14,000 = $840,000. If every customer is monthly, ARR = MRR × 12.",
      },
      {
        question: "What is net new ARR?",
        answer:
          "The net change in ARR over a period: New + Expansion − Contraction − Churned ARR. In the example it is $228,000 + $102,000 − $24,000 − $66,000 = $240,000; add it to opening ARR to get closing ARR.",
      },
      {
        question: "Is ARR the same as revenue?",
        answer:
          "No. Revenue is everything recognised during a period, including one-off sales. ARR is the annualised value of recurring contracts on a specific date. In a growing company, the year's subscription revenue is lower than year-end ARR.",
      },
      {
        question: "What is CARR and how is it different from ARR?",
        answer:
          "CARR (Contracted ARR) adds signed contracts that have not started yet and subtracts contracts with a cancellation or non-renewal notice. For enterprise deals with long sales cycles and future start dates, it is a leading indicator of ARR.",
      },
    ],
    howTo: {
      name: "How to calculate ARR",
      description: "Annualise active contracts to get ARR, then build an annual ARR bridge to find net new ARR, NRR and GRR.",
      steps: [
        { name: "List active contracts", text: "Export every subscription and contract active on the calculation date by customer; separate trials, freemium and not-yet-started contracts." },
        { name: "Annualise each contract", text: "Multiply monthly plans by 12, use the annual value for annual contracts and the current year's value for ramped multi-year contracts." },
        { name: "Remove one-off and variable items", text: "Leave setup, training, consulting and usage above the commitment out of ARR." },
        { name: "Sum ARR", text: "Add the annualised values: $302,400 + $397,600 + $140,000 = $840,000." },
        { name: "Build the ARR bridge", text: "Add new and expansion ARR to opening ARR, subtract contraction and churn, then calculate net new ARR, growth rate, NRR and GRR." },
      ],
    },
    relatedToolKey: "arr",
    resources: [
      { label: "ARR Calculator", href: "/en/free-tools/arr-calculator/" },
      { label: "MRR Calculator", href: "/en/free-tools/mrr-calculator/" },
      { label: "NRR Calculator", href: "/en/free-tools/nrr-calculator/" },
      { label: "Rule of 40 Calculator", href: "/en/free-tools/rule-of-40-calculator/" },
      { label: "Churn Rate Calculator", href: "/en/free-tools/churn-rate-calculator/" },
      { label: "ARR vs MRR: What's the Difference?", href: "/en/blog/arr-vs-mrr-difference/" },
      { label: "What Is MRR and How to Calculate It", href: "/en/blog/what-is-mrr-how-to-calculate/" },
      { label: "What Is NRR and Why It Beats ARR in SaaS", href: "/en/blog/what-is-nrr-saas-growth-metric/" },
      { label: "What Is Churn Rate?", href: "/en/blog/what-is-churn-rate/" },
      { label: "What Is CAC?", href: "/en/blog/what-is-cac-customer-acquisition-cost/" },
      { label: "What Is LTV? LTV:CAC Ratio", href: "/en/blog/what-is-ltv-ltv-cac-ratio/" },
      { label: "Stripe: What is annual recurring revenue (ARR)?", href: "https://stripe.com/in/resources/more/what-is-annual-recurring-revenue-a-guide-for-saas-businesses", external: true },
    ],
  },
  {
    slug: "what-is-geo-generative-engine-optimization",
    seoTitle: "What Is GEO? Generative Engine Optimization Guide (2026)",
    title: "What Is GEO? Getting Cited in ChatGPT, Gemini and AI Overviews — Evidence, Tactics and Measurement",
    description:
      "What is GEO (generative engine optimization) and how is it different from SEO? What's proven, a citation-rate formula, GA4 setup and a 30-day action plan.",
    category: "yapay-zeka-otomasyon",
    tldr: [
      "GEO (Generative Engine Optimization) is the work of getting your content cited and correctly mentioned in AI answers from ChatGPT search, Gemini, Perplexity, Copilot and Google AI Overviews. The term spread through a 2023 paper by Princeton and partner researchers.",
      "GEO builds on SEO rather than replacing it. Google says there are no additional requirements for AI Overviews or AI Mode — no new 'AI text file' and no special schema: the page must be indexed and eligible for a snippet. AI answers mostly pick sources from search results.",
      "In the research, adding quotations, statistics and source citations worked best (up to 40% higher visibility), while keyword stuffing made results worse. In practice: answer in the first sentence, use your own data and worked examples, and source your claims.",
      "Measurement: in a 120-answer panel (20 questions × 3 engines × 2 runs), citation rate = answers citing your site / 120. In the example, 9 / 120 = 7.5%. Create a separate GA4 channel for AI assistants; Google AI Overviews clicks sit inside 'Web' in Search Console and can't be split out.",
    ],
    publishedAt: "2026-10-31",
    readingMinutes: 9,
    tags: ["GEO", "AI SEO", "AI Overviews", "ChatGPT", "AEO", "Generative Engine Optimization"],
    sections: [
      {
        heading: "What is GEO? (Short answer)",
        paragraphs: [
          "GEO (Generative Engine Optimization) is the set of content and technical work that gets a brand or page cited as a source, mentioned in the right context, and clicked from AI-powered answer engines: ChatGPT search, Google AI Overviews and AI Mode, Gemini, Perplexity, Microsoft Copilot and Claude.",
          "SEO aims for higher positions among the blue links; GEO aims for the system that writes one synthesised answer to use — and show — your page while writing it. The unit of success is not ranking but citation and mention.",
          "The term spread through 'GEO: Generative Engine Optimization', published in 2023 by researchers from Princeton, Georgia Tech, the Allen Institute for AI and IIT Delhi and presented at KDD 2024. Note: in marketing, 'geo' also means geographic targeting; this article covers the AI-search meaning.",
        ],
      },
      {
        heading: "How is GEO different from SEO and AEO?",
        paragraphs: [
          "The three are nested layers, not rivals. Google's 2026 AI search guidance also frames AEO and GEO as part of SEO rather than a separate discipline. The difference is clearest when you look at what each targets and how it is measured.",
          "The practical consequence: GEO never starts without an SEO foundation. A page that isn't indexed, loads slowly or only renders its text after JavaScript runs will be cited neither in the blue links nor in AI answers.",
        ],
        bullets: [
          "SEO: rankings and clicks in search. Measured by impressions, average position and clicks (Search Console)",
          "AEO (Answer Engine Optimization): being chosen as the single answer in featured snippets, People Also Ask and voice assistants. Measured by snippet ownership",
          "GEO: being cited and correctly mentioned in generative AI answers. Measured by citation rate, citation share and AI-assistant traffic",
          "Shared base: crawlable, indexed pages; answer-first structure; original information; credible author and brand signals",
        ],
      },
      {
        heading: "How do AI answer engines choose their sources?",
        paragraphs: [
          "Most AI search products don't answer from model memory; they assemble the answer from searches run at that moment. They split the question into sub-questions, search for each, pull passages from the pages they find and synthesise them with source links. Google calls this 'query fan-out' and says it lets AI Overviews and AI Mode show a wider set of supporting links than classic search.",
          "Two consequences follow. First, the source pool is largely the search index, so being indexed and ranking well is a precondition for AI visibility. Second, the unit that gets selected is the passage, not the page: a paragraph that makes sense on its own and answers clearly is far easier to cite than information buried in a long introduction.",
        ],
        bullets: [
          "Google AI Overviews / AI Mode: Google's index; no extra requirements beyond being indexed and snippet-eligible",
          "ChatGPT search: OpenAI's OAI-SearchBot crawler; sites that block it don't appear in ChatGPT search answers (GPTBot is for model training and is controlled separately)",
          "Microsoft Copilot and Bing AI summaries: Bing's index; the AI Performance report in Bing Webmaster Tools (public preview since February 2026) shows citation counts",
          "Perplexity and Claude: their own search crawlers (PerplexityBot, Claude-SearchBot); see the bot table in the llms.txt article for robots.txt settings",
        ],
      },
      {
        heading: "What's proven in GEO — and what isn't?",
        paragraphs: [
          "GEO has plenty of claims and little evidence. When deciding, it helps to sort sources into three tiers: the platform's own official documentation, controlled research, and untested field claims.",
          "Know the limits of the Princeton paper too: most experiments ran in a test environment the researchers built, using a language model of that time, and the authors stress that effectiveness varies by domain. 'Add quotes and gain 40%' is not a guarantee, but the direction — keyword stuffing doesn't work, sourced and specific content does — is consistent across the research and the platform guidance.",
        ],
        bullets: [
          "Official (Google): no additional technical requirements, new machine-readable files, 'AI text files' or special schema.org markup for AI Overviews and AI Mode; nosnippet, data-nosnippet, max-snippet and noindex limit what is shown",
          "Official (OpenAI): ChatGPT search visibility is governed by OAI-SearchBot; blocking GPTBot does not affect it",
          "Research (Aggarwal et al., KDD 2024): adding quotations, statistics and source citations were the most effective methods — up to 40% higher visibility, and up to 37% on a real product (Perplexity); keyword stuffing scored below the baseline",
          "Not proven: that llms.txt increases AI citations (large log studies saw no effect), that FAQ/schema markup alone earns citations, or that 'AI-only' versions of content help",
        ],
      },
      {
        heading: "How to do GEO: 8 page-level actions",
        paragraphs: [
          "The list is ordered by priority: access and indexing first, then content format, then off-site signals. Without the first three, the rest is wasted effort.",
        ],
        bullets: [
          "1. Access: check that robots.txt, your firewall and bot protection don't block Googlebot, Bingbot or AI search bots (OAI-SearchBot, PerplexityBot, Claude-SearchBot)",
          "2. Indexing: make sure key pages are indexed in Google and Bing; clear the 'Discovered – currently not indexed' list in Search Console and submit your sitemap to Bing Webmaster Tools",
          "3. Content in HTML: text should be in the page source without JavaScript (server-side or static rendering)",
          "4. Answer first: the first sentence under each question-style heading answers the heading on its own; put definition + formula + number in the same paragraph",
          "5. Original information: your own worked examples, data, experience and screenshots; repeating the definition everyone else wrote earns no citations",
          "6. Sourced claims: tie statistics and claims to a primary source (official documentation, research) with a date; never use unsourced numbers",
          "7. Freshness and authorship: visible published/updated dates, a real author page and Person/Organization structured data",
          "8. Off-site mentions: your brand discussed alongside the topic in industry publications, communities and lists; AI answers look not only at your site but at what others write about you",
        ],
      },
      {
        heading: "How to write a citable paragraph: before / after",
        paragraphs: [
          "AI answers lift one passage from your page, and that passage must stay correct and complete out of context. The most common failures are hiding the answer in the third paragraph of an intro and relying on phrases like 'this' or 'as mentioned above'.",
          "Before: 'There are many metrics in advertising and ROAS is one of the most important. So what is it for? Let's take a look together.' This paragraph answers nothing.",
          "After: 'ROAS (return on ad spend) is revenue from advertising divided by ad spend: ROAS = Ad revenue / Ad spend. A campaign that spends $1,000 and drives $4,000 in sales has a ROAS of 4.' Definition, formula and a number in one passage — complete even when quoted alone.",
        ],
      },
      {
        heading: "Why non-English markets are a GEO opportunity",
        paragraphs: [
          "When an AI engine answers in a local language and finds no strong local-language source, it translates and uses English ones. In this site's visibility check on 23 October 2026, Turkish searches for marketing questions such as 'what is NRR' and 'how to fix GA4 unassigned traffic' returned only English sources at the top.",
          "That gap creates two openings. First, becoming the first thorough local-language source on niche but valuable questions means competing with few rivals both in classic rankings and in AI citations. Second, market-specific information — local-currency examples, local marketplace and shipping rules, local ad-cost data — can't be produced by translation, so AI engines have to cite you for it.",
          "To build your own list: search the 20 questions your customers ask in their language; if most of the top 10 results are English, outdated or formula-free, that question is a GEO priority.",
        ],
      },
      {
        heading: "How do you measure GEO? The citation-rate formula",
        paragraphs: [
          "AI answers change from query to query, so a single try is not a measurement. Build a fixed question panel, ask each question in several engines and several times, and repeat the same method every month.",
          "Example panel: 20 target questions × 3 engines (ChatGPT search, Gemini, Perplexity) × 2 runs = 120 answers. Your site was cited with a link in 9 answers and mentioned without a link in 6. Citation rate = 9 / 120 = 7.5%; visibility rate (cited + mentioned) = 15 / 120 = 12.5%. If two competitors were cited in 30 and 21 answers on the same panel, your citation share is 9 / (9 + 30 + 21) = 15%.",
          "Read panel results alongside traffic. If the citation rate rises while sessions from AI assistants — and their conversions — rise too, the work is paying off.",
        ],
        bullets: [
          "Citation rate = Answers citing your site with a link / Total answers",
          "Visibility rate = (Cited + mentioned without link) / Total answers",
          "Citation share = Your citations / (Your + tracked competitors' citations)",
          "Accuracy check: when your brand is mentioned, is the information right (pricing, services, founder)? If not, find the source and fix that page",
          "Bing Webmaster Tools › AI Performance: citation counts and cited pages in Copilot and Bing AI summaries",
        ],
      },
      {
        heading: "How do you separate ChatGPT and AI-assistant traffic in GA4?",
        paragraphs: [
          "Visits from ChatGPT, Perplexity, Gemini, Copilot and Claude usually land in GA4's 'Referral' channel with sources such as chatgpt.com or perplexity.ai. To see them as one group, go to Admin › Data display › Channel groups, copy the default group and add a new channel called 'AI assistants' with the condition Source matches regex.",
          "Example expression: ^(chatgpt\\.com|chat\\.openai\\.com|(www\\.)?perplexity\\.ai|gemini\\.google\\.com|copilot\\.microsoft\\.com|claude\\.ai)$. The ^ and $ anchors match only these domains. Move the channel above 'Referral' — GA4 applies rules in order and the first match wins. Update the list as new AI products launch.",
          "Two limits remain. Google AI Overviews and AI Mode clicks arrive as Google organic traffic and are reported inside the 'Web' search type in Search Console, without a separate breakdown. Some mobile apps don't pass a referrer, so those visits may appear as 'Direct'. Using UTM parameters on links you share yourself reduces that loss.",
        ],
      },
      {
        heading: "A 30-day GEO action plan",
        paragraphs: [
          "A realistic starting plan for a small team or a solo business is below. Each week builds on the previous one; at day 30 you repeat the first measurement and compare.",
        ],
        bullets: [
          "Week 1 — Baseline: write the 20-question panel, ask each question twice in 3 engines and record the starting citation rate; check robots.txt and bot protection; set up the AI-assistants channel in GA4",
          "Week 2 — Indexing: confirm that pages answering the panel questions are indexed in Google and Bing; request indexing for any that are missing",
          "Week 3 — Content: rewrite the opening paragraph of 5 uncited pages in answer-first form; add your own worked example and a primary-source link to each",
          "Week 4 — Off-site and measurement: pitch an expert comment or guest post to one industry publication; rerun the panel with the same method and compare the ratios",
        ],
      },
    ],
    faq: [
      {
        question: "What does GEO stand for?",
        answer:
          "GEO stands for Generative Engine Optimization: optimising content so it is cited as a source in AI answers from ChatGPT, Gemini, Perplexity and Google AI Overviews. In marketing, 'geo' is also used for geographic targeting, which is unrelated.",
      },
      {
        question: "Will GEO replace SEO?",
        answer:
          "No. AI answer engines largely pick their sources from search indexes, so GEO builds on an SEO foundation. Google also says AI Overviews and AI Mode have no separate requirements beyond the page being indexed and eligible for a snippet.",
      },
      {
        question: "How do I get my site cited in ChatGPT?",
        answer:
          "First make sure robots.txt doesn't block OAI-SearchBot, the crawler that governs ChatGPT search visibility. Then publish pages that answer target questions in the first sentence, with your own examples and sourced numbers, and make sure those pages are indexed by search engines.",
      },
      {
        question: "Is llms.txt required for GEO?",
        answer:
          "No. Google says no new 'AI text file' is needed for its AI features, and large log studies haven't shown llms.txt increasing AI citations. It's a low-cost extra, but it doesn't replace access, indexing and content quality.",
      },
      {
        question: "How long does GEO take to show results?",
        answer:
          "There's no fixed timeline. Changes must be crawled and reflected in the index first, and AI answers vary from query to query, so track the effect with a monthly panel. For new pages that aren't indexed yet, the timeline depends on indexing.",
      },
    ],
    howTo: {
      name: "How to do GEO",
      description: "Work through access, indexing, content and measurement in order to get cited in AI answers.",
      steps: [
        { name: "Build a question panel", text: "Write the 20 questions your customers ask, ask each twice in ChatGPT, Gemini and Perplexity and record your citation rate." },
        { name: "Check access", text: "Confirm that robots.txt, firewall and bot protection don't block Googlebot, Bingbot or AI search bots." },
        { name: "Verify indexing", text: "Check that pages answering the panel questions are indexed in Google and Bing, and request indexing for missing ones." },
        { name: "Rewrite content answer-first", text: "Give a clear answer, formula and your own numeric example in the first sentence under each question heading; tie claims to primary sources." },
        { name: "Repeat the measurement", text: "Track the AI-assistants channel in GA4 and rerun the panel after 30 days with the same method to compare." },
      ],
    },
    relatedToolKey: "llms-txt",
    resources: [
      { label: "What Is SEO and How Do You Do It?", href: "/en/blog/what-is-seo-how-to-do-it/" },
      { label: "What Is llms.txt and Does It Work? (2026 data)", href: "/en/blog/what-is-llms-txt-does-it-work/" },
      { label: "llms.txt Generator", href: "/en/free-tools/llms-txt-generator/" },
      { label: "What Are UTM Parameters?", href: "/en/blog/what-are-utm-parameters/" },
      { label: "UTM Builder", href: "/en/free-tools/utm-builder/" },
      { label: "GA4 Unassigned Traffic: How to Fix It", href: "/en/blog/ga4-unassigned-traffic-how-to-fix/" },
      { label: "What Is ROAS & How to Calculate It?", href: "/en/blog/what-is-roas-how-to-calculate/" },
      { label: "Google Search Central: AI features and your website", href: "https://developers.google.com/search/docs/appearance/ai-features", external: true },
      { label: "Aggarwal et al.: GEO: Generative Engine Optimization (arXiv)", href: "https://arxiv.org/abs/2311.09735", external: true },
      { label: "OpenAI: Overview of OpenAI crawlers", href: "https://developers.openai.com/api/docs/bots", external: true },
      { label: "Bing Webmaster Blog: Introducing AI Performance (public preview)", href: "https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview", external: true },
      { label: "Search Engine Journal: Google's AI search guide calls AEO and GEO still SEO", href: "https://www.searchenginejournal.com/googles-new-ai-search-guide-calls-aeo-and-geo-still-seo/575026/", external: true },
    ],
  },
  {
    slug: "trendyol-commission-rates",
    seoTitle: "Trendyol Commission Rates 2026 & How to Calculate Fees",
    title: "Trendyol Commission Rates 2026: How Fees Are Calculated, Shipping Thresholds and Campaign Traps (With Examples)",
    description:
      "Trendyol commission rates in 2026: category ranges, the commission formula, shipping thresholds and service fee, break-even price and a campaign offer example.",
    category: "performans-pazarlama",
    tldr: [
      "Trendyol's commission depends on category, brand, seller and campaign; public 2026 compilations put most categories between 5% and 27% (phones 5–7%, cosmetics 15–20%, apparel and footwear 18–23%). The binding rate is the one in your seller panel's commission table.",
      "Commission = Sale price × Commission rate. On a TRY 600 product at 20%, the commission is TRY 120. Total deductions are larger: Deductions = Commission + Shipping + Platform service fee.",
      "On cheap products fixed fees outweigh commission: deductions are 48% of a TRY 300 T-shirt but 6.6% of a TRY 15,000 phone (illustrative amounts).",
      "Shipping thresholds (TRY 200 and 350) make small price changes swing profit: moving a product from TRY 205 to TRY 199.90 lifts profit per order from TRY 0.55 to TRY 28.19.",
    ],
    publishedAt: "2026-11-01",
    readingMinutes: 8,
    tags: ["Trendyol", "Marketplace Fees", "Ecommerce", "Turkey", "Profit Calculation"],
    sections: [
      {
        heading: "What are Trendyol's commission rates in 2026? (Short answer)",
        paragraphs: [
          "Trendyol, Turkey's largest online marketplace, has no single commission rate. The rate depends on the product's category and subcategory, the brand, the seller's level, seller-specific agreements and any campaign you join. Public Turkish compilations from 2026 put most categories between 5% and 27%: single digits for phones and computers, 15–20% for cosmetics, 18–23% for apparel, footwear, bags and accessories, and 25–27% for phone spare parts.",
          "Treat these ranges as orientation only. The binding rate for your product is shown in the commission table under the commercial terms section of your seller panel, and per category when you list a product. Amounts in this guide are in Turkish lira (TRY), because that is how Trendyol charges sellers.",
          "Opening a store and listing products is free; commission is charged only on completed sales. But commission is not the only deduction from your payout: shipping and a fixed platform service fee per order are deducted too. This guide calculates all three together.",
        ],
      },
      {
        heading: "Why does every site list different Trendyol commission rates?",
        paragraphs: [
          "When we compared the top Turkish guides side by side, the same category had different numbers, and one guide even gave three different apparel ranges in different sections. There are three reasons: the figures were compiled at different times (January to July 2026), some lists state rates on a different basis (with or without taxes), and because rates vary by subcategory and seller, each list picks its own 'average'.",
        ],
        bullets: [
          "Apparel / footwear / bags: Paraşüt (Jan 2026) 21.5–22.5% · BirFatura (Jul 2026) 21.36% · Fikri (Jul 2026) 18%",
          "Cosmetics and personal care: 17–20% · 17–20% · 15%",
          "Mobile phones: 5–6% · 5–7% · 7%",
          "White goods: 9–11% (Paraşüt and BirFatura)",
          "Toys: Paraşüt 20–22% · BirFatura 16.5%",
          "Phone spare parts: 25–27% (Paraşüt and BirFatura)",
        ],
      },
      {
        heading: "How is the Trendyol commission calculated?",
        paragraphs: [
          "Commission is charged on the price the customer pays: Commission = Sale price × Commission rate. If you sell at a discount during a campaign, the commission applies to the discounted price, so a TRY 1,000 item sold for TRY 900 pays commission on TRY 900.",
          "Example: a TRY 600 product with a 20% rate pays 600 × 0.20 = TRY 120 in commission. To find what reaches your account, add shipping and the platform service fee. All calculations here use illustrative amounts and leave taxes out; the Trendyol Profit Calculator handles the full calculation.",
        ],
        bullets: [
          "Commission = Sale price × Commission rate",
          "Total deductions = Commission + Shipping + Platform service fee",
          "Payout = Sale price − Total deductions",
          "Profit per order = Payout − Product cost − Packaging − (share of returns and ads)",
        ],
      },
      {
        heading: "What other fees does Trendyol charge?",
        paragraphs: [
          "Platform service fee: a fixed amount per delivered shipment, not charged on return parcels. As of October 2026 public sources list it at TRY 10.99, and in June 2026 a lower fee was announced for parcels tagged 'Bugün Kargoda' (shipped today) and handed to the carrier the same day. It has changed several times this year, so check the Seller Information Center.",
          "Shipping: under Trendyol's contracted shipping model, baskets below TRY 350 pay a fixed 'barem' rate (thresholds at TRY 200 and 350 since 26 March 2026); from TRY 350 the fee depends on the parcel's volumetric weight (desi = length × width × height / 3000, compared with actual weight).",
          "Illustrative amounts from the 10 August 2026 tariff (Trendyol Express, shipped within 1 day): TRY 38.74 for baskets up to 199.99, TRY 70.41 for 200–349.99; from TRY 350, 0–2 desi TRY 81.95, 5 desi TRY 114.10, 10 desi TRY 164.18. Standard handling time, other carriers and barem conditions change these amounts.",
        ],
      },
      {
        heading: "Deductions by category: three examples",
        paragraphs: [
          "Because shipping and the service fee are fixed, total deductions as a share of price rise quickly on cheap products. Service fee TRY 10.99 and the sample tariff above (illustrative amounts):",
          "A seller of TRY 300 T-shirts leaves almost half the price in deductions before paying for the product. In low-price categories, growing basket size (bundles, multipacks) and managing the shipping tier move profit more than negotiating commission.",
        ],
        bullets: [
          "Apparel, TRY 300 T-shirt, sample rate 21%, 200–349.99 tier: 63 + 70.41 + 10.99 = TRY 144.40 deductions (48.1% of price); payout TRY 155.60",
          "Cosmetics, TRY 450 product, sample rate 17%, 1 desi: 76.50 + 81.95 + 10.99 = TRY 169.44 (37.7%); payout TRY 280.56",
          "Mobile phone, TRY 15,000, sample rate 6%, 2 desi: 900 + 81.95 + 10.99 = TRY 992.94 (6.6%); payout TRY 14,007.06",
        ],
      },
      {
        heading: "How do shipping thresholds change your profit?",
        paragraphs: [
          "Lower threshold (TRY 200): at TRY 205 with a 21% rate and TRY 80 product cost, deductions are 43.05 + 70.41 + 10.99 = TRY 124.45, payout TRY 80.55, profit TRY 0.55. At TRY 199.90 deductions fall to 41.98 + 38.74 + 10.99 = TRY 91.71, payout TRY 108.19, profit TRY 28.19. Cutting the price by TRY 5.10 adds TRY 27.64 of profit.",
          "Upper threshold (TRY 350): a 5-desi product at TRY 345 pays TRY 70.41 barem shipping and nets TRY 204.95 at a 17% rate. At TRY 355 it moves to the desi tariff (TRY 114.10) and nets TRY 169.56: you charge TRY 10 more and keep TRY 35.39 less. Check the shipping tier before any price change.",
        ],
      },
      {
        heading: "How do you find the break-even price on Trendyol?",
        paragraphs: [
          "Since commission grows with price, break-even is not just 'cost + fees'. Break-even price = (Product cost + Shipping + Service fee + Packaging) / (1 − Commission rate). For a target margin: Target price = (Cost + Shipping + Service fee + Packaging) / (1 − Commission rate − Target margin).",
          "Example: a T-shirt costing TRY 90 with TRY 5 packaging, 21% commission, TRY 70.41 shipping and TRY 10.99 fee breaks even at (90 + 70.41 + 10.99 + 5) / 0.79 = TRY 223.29. For a 15% margin on sales the price is 176.40 / 0.64 = TRY 275.63. Both stay in the 200–349.99 tier; if a result lands in another tier, swap in that tier's shipping and recalculate.",
        ],
      },
      {
        heading: "Is a reduced-commission campaign offer profitable?",
        paragraphs: [
          "Marketplaces sometimes offer a lower commission in exchange for a lower price. Profit per order usually falls, so the campaign pays only if volume rises enough.",
          "Example: a product costing TRY 300 with TRY 81.95 shipping earns 600 − 120 − 81.95 − 10.99 − 300 = TRY 87.06 per order at TRY 600 and 20%. At TRY 540 and 16% it earns 540 − 86.40 − 81.95 − 10.99 − 300 = TRY 60.66. To match total profit, unit sales must rise 87.06 / 60.66 = 1.435×, at least 43.5%. Rule: Required sales lift = Current profit per order / Campaign profit per order − 1.",
        ],
      },
      {
        heading: "What happens to commission and shipping on returns?",
        paragraphs: [
          "According to public seller guides, the commission on a returned order is refunded (offset on a later invoice), but outbound shipping, usually return shipping and packaging stay with the seller. Return cost per order = Return rate × (Outbound + Return shipping + Packaging). With a 10% return rate, TRY 81.95 each way and TRY 5 packaging, every order carries 0.10 × 168.90 = TRY 16.89 of return cost.",
          "That leaves the ad budget: in the cosmetics example, 280.56 − 150 cost − 5 packaging − 16.89 returns = TRY 108.67 before ads, so break-even ROAS = 450 / 108.67 ≈ 4.1. Any Trendyol, Meta or Google campaign below 4.1 ROAS loses money on this product.",
        ],
      },
      {
        heading: "How can you lower your Trendyol fees?",
        paragraphs: [
          "Most sellers cannot negotiate the commission rate directly, but they can reduce total deductions. Programs and rates change often, so verify each item in the seller panel.",
        ],
        bullets: [
          "List in the right subcategory: the wrong category means a different rate and lost visibility",
          "New-seller period and programs: public sources mention a special rate for new sellers for a limited time and lower rates in the women entrepreneur program",
          "Seller level: higher performance levels unlock more campaign and rate options",
          "Accept campaign offers only after calculating the required sales lift",
          "Manage non-commission costs: the shipping tier, desi (smaller boxes), same-day dispatch and return rate often add more profit than a commission cut",
        ],
      },
    ],
    faq: [
      {
        question: "What are Trendyol's commission rates?",
        answer:
          "They vary by category, brand, seller and campaign; public 2026 compilations show most categories at 5–27% (phones 5–7%, cosmetics 15–20%, apparel and footwear 18–23%). Your binding rate is in the seller panel's commission table.",
      },
      {
        question: "How is the Trendyol commission calculated?",
        answer:
          "Commission = Sale price × Commission rate. A TRY 600 product at 20% pays TRY 120. Deduct shipping and the per-order platform service fee to get your payout; discounted sales pay commission on the discounted price.",
      },
      {
        question: "Who pays shipping on Trendyol?",
        answer:
          "Under the contracted shipping model, shipping is deducted from the seller's payout: fixed 'barem' rates below TRY 350 (thresholds at 200 and 350), and desi-based rates from TRY 350. Check current amounts in the seller panel.",
      },
      {
        question: "How much is the Trendyol platform service fee?",
        answer:
          "A fixed amount per delivered shipment; public sources list TRY 10.99 as of October 2026, not charged on returns, with a lower amount for parcels meeting the 'Bugün Kargoda' same-day condition. Verify the current amount in the Seller Information Center.",
      },
      {
        question: "Does it cost money to open a Trendyol store?",
        answer:
          "No. Opening a store and listing products is free, with no monthly subscription; commission, shipping and the service fee are deducted only from completed sales.",
      },
    ],
    howTo: {
      name: "How to calculate Trendyol commission and profit per order",
      description: "Deduct commission, shipping and the service fee to get the payout, then subtract cost, returns and ads for true profit.",
      steps: [
        { name: "Get the rate from your panel", text: "Find your subcategory and campaign rate in the seller panel's commission table." },
        { name: "Calculate the commission", text: "Multiply the sale price by the commission rate; use the discounted price for discounted sales." },
        { name: "Pick the shipping tier", text: "Below TRY 350 use the matching barem rate; from TRY 350 use the tariff for the parcel's desi." },
        { name: "Find the payout", text: "Subtract commission, shipping and the platform service fee from the sale price." },
        { name: "Calculate true profit", text: "Subtract product cost, packaging and per-order return cost; what remains is your ad budget ceiling." },
      ],
    },
    relatedToolKey: "marketplace",
    resources: [
      { label: "What Is Dropshipping? Profit Math Including Returns", href: "/en/blog/what-is-dropshipping-how-it-works/" },
      { label: "How to Advertise on Trendyol: Ad Types, Costs & Profit", href: "/en/blog/how-to-advertise-on-trendyol/" },
      { label: "Trendyol & Hepsiburada Profit Calculator", href: "/en/free-tools/marketplace-profit-calculator/" },
      { label: "Shipping Cost Calculator", href: "/en/free-tools/shipping-cost-calculator/" },
      { label: "Dimensional Weight (Desi) Calculator", href: "/en/free-tools/dimensional-weight-calculator/" },
      { label: "How to Calculate Profit Margin", href: "/en/blog/how-to-calculate-profit-margin/" },
      { label: "What Is ROAS & How to Calculate It?", href: "/en/blog/what-is-roas-how-to-calculate/" },
      { label: "ROAS Calculator", href: "/en/free-tools/roas-calculator/" },
      { label: "How to Set Target ROAS in Google Ads", href: "/en/blog/how-to-set-target-roas-google-ads/" },
      { label: "Trendyol Seller Information Center: Platform Service Fee (Turkish)", href: "https://akademi.trendyol.com/tr/satici-bilgi-merkezi/detay/platform-hizmet-bedeli", external: true },
      { label: "Trendyol Seller Information Center: Commissions (Turkish)", href: "https://akademi.trendyol.com/tr/satici-bilgi-merkezi/detay/trendyol-komisyonlari", external: true },
    ],
  },
  {
    slug: "what-is-google-ads-how-it-works",
    seoTitle: "What Is Google Ads and How Does It Work? Costs Explained",
    title: "What Is Google Ads and How Does It Work? Auction, Quality Score, Costs and Campaign Types (2026)",
    description:
      "What is Google Ads and how does it work? The auction and actual CPC, Quality Score, budget rules, 2026 campaign types, bid strategies and a worked cost example.",
    category: "performans-pazarlama",
    tldr: [
      "Google Ads is Google's advertising platform: it shows your ads on Google Search, YouTube, Gmail, Discover, Maps and Google's partner sites. On Search you mostly pay per click (CPC).",
      "Every search runs an auction. Your position depends on Ad Rank, built from your bid, ad and landing page quality and the search context. Your actual CPC is usually below your max bid: you pay just enough to beat the advertiser below you and the threshold.",
      "Quality Score (1–10) is not an input to the auction; it is a diagnostic tool. Its components (expected CTR, ad relevance, landing page experience) do affect Ad Rank.",
      "Cost math: CPA = CPC / Conversion rate. With a $1.20 CPC and a 2% conversion rate, each sale costs $60; on a $180 order at 40% margin, break-even CPA is $72, so the campaign is profitable. A $75 daily budget spends at most $2,280 a month.",
    ],
    publishedAt: "2026-11-01",
    readingMinutes: 8,
    tags: ["Google Ads", "PPC", "CPC", "Quality Score", "Performance Marketing"],
    sections: [
      {
        heading: "What is Google Ads? (Short answer)",
        paragraphs: [
          "Google Ads is the paid advertising platform that lets businesses show ads in Google Search results, on YouTube, Gmail, Discover, Google Maps and Google's partner websites and apps. Until 2018 it was called Google AdWords.",
          "Its best-known format is the search ad: when someone searches for 'accounting software' or 'shipping cost calculator', ads from advertisers bidding on that query appear above and below the results with a 'Sponsored' label. Advertisers mostly pay when the ad is clicked, not when it is shown: cost per click (CPC).",
          "What sets Google Ads apart is intent: a search ad appears the moment the user types their need. That makes it usually the fastest-converting channel for products and services people already search for, while new categories with no search demand usually need demand-creating channels such as Meta and YouTube as well.",
        ],
      },
      {
        heading: "How does Google Ads work? The auction and Ad Rank",
        paragraphs: [
          "Every search triggers an auction among eligible advertisers, decided in milliseconds. It is not a pure highest-bid-wins contest: Google calculates an Ad Rank for each ad and uses it to decide whether the ad shows and in which position.",
          "According to Google's Help Center, Ad Rank combines your max CPC bid, expected clickthrough rate, ad relevance, landing page experience, auction competitiveness, search context (location, device, time, search terms) and the expected impact of assets such as sitelinks and images. A more relevant ad with a better landing page can rank higher on a lower bid.",
          "Ad Rank must also clear a threshold to show at all. Thresholds above the results are higher than below them, which is why top positions usually cost more per click.",
        ],
      },
      {
        heading: "How is actual CPC set? Google's example",
        paragraphs: [
          "You don't pay your max bid. Actual CPC is the minimum needed to hold your position: just enough to beat the Ad Rank of the advertiser directly below you and the relevant threshold. With nobody eligible below you, you pay what clears the threshold. Without Smart Bidding or bid adjustments you never pay more than your max CPC.",
          "Google's example: five advertisers with Ad Ranks of 80, 50, 30, 10 and 5; the threshold is 40 above the results and 8 below. 80 and 50 show on top: 80 pays just enough to beat 50, and 50 pays just enough to clear 40 because nobody above 40 sits below it. 30 and 10 show below the results on the same logic. 5 clears no threshold and doesn't show.",
        ],
      },
      {
        heading: "What is Quality Score, and does it affect the auction?",
        paragraphs: [
          "Quality Score is a keyword-level rating from 1 to 10, built from expected CTR, ad relevance and landing page experience, each rated 'Above average', 'Average' or 'Below average' against other advertisers on the same searches over the last 90 days.",
          "A common mistake is to say Quality Score is used in the auction. Google states that Quality Score is not an input to the ad auction; it is a diagnostic tool. The auction uses real-time estimates of the same three components for each search. So instead of chasing the score, fix the component it flags.",
        ],
        bullets: [
          "Low expected CTR: put the searched phrase and a concrete benefit in the headline; block irrelevant searches with negatives",
          "Low ad relevance: split keywords with different intent into separate ad groups",
          "Low landing page experience: deliver the ad's promise above the fold on a fast mobile page",
        ],
      },
      {
        heading: "How much does Google Ads cost? A worked example",
        paragraphs: [
          "There is no fixed price; CPC depends on industry, keyword intent, competition, location and season. The useful answer to 'how much does Google Ads cost?' is not a number but a formula for your own profitability threshold.",
          "Example: average order $180, gross margin 40%. Gross profit per order is $72, the most you can pay per sale (break-even CPA); break-even ROAS is 180 / 72 = 2.5. With a $1.20 average CPC and a 2% conversion rate, cost per sale is 1.20 / 0.02 = $60. That is below $72, so each sale leaves $12 of gross profit and ROAS is 180 / 60 = 3.",
          "Reverse it to find your max affordable CPC: Max CPC = Break-even CPA × Conversion rate = 72 × 0.02 = $1.44. If Keyword Planner estimates are well above that, improve conversion rate or order value first. In B2B the same formula works for leads: a $2.50 CPC with a 5% form conversion rate means $50 per lead.",
        ],
        bullets: [
          "CPA (cost per sale/lead) = CPC / Conversion rate",
          "Break-even CPA = Gross profit per order = Order value × Gross margin",
          "Max CPC = Break-even CPA × Conversion rate",
          "ROAS = Ad revenue / Ad spend; break-even ROAS = 1 / Gross margin",
        ],
      },
      {
        heading: "How do daily budgets work? The monthly cap",
        paragraphs: [
          "You set an average daily budget per campaign. On high-traffic days Google may spend up to 2× that amount, but your monthly charge won't exceed the daily budget times the average number of days in a month (30.4).",
          "Continuing the example: a $75 daily budget can spend up to $150 on a busy day, but at most 75 × 30.4 = $2,280 a month. At a $1.20 CPC that is about 1,900 clicks; at 2% about 38 sales, $6,840 revenue and $456 gross profit after ads (about 62 clicks and 1.25 sales a day). One or two sales a day is thin data for Smart Bidding, so keep small budgets focused on few high-intent keywords.",
        ],
      },
      {
        heading: "What are the Google Ads campaign types? (2026)",
        paragraphs: [
          "Campaign type decides where and in what format your ads appear. Remarketing is often listed as a campaign type; it is actually an audience targeting option used across several campaign types.",
        ],
        bullets: [
          "Search: text ads in Google Search; the starting point for products with existing demand",
          "Performance Max: one campaign across Search, YouTube, Display, Discover, Gmail and Maps inventory, allocated by AI toward your conversion goal; don't launch without solid conversion tracking",
          "Shopping: product ads with image and price; requires a Google Merchant Center feed",
          "Demand Gen (formerly Discovery): image and video ads on YouTube, Discover and Gmail to create demand",
          "Video: YouTube video ads for awareness and consideration",
          "Display: banner ads on partner sites and apps; cheap reach, low intent",
          "App: app installs and in-app actions",
        ],
      },
      {
        heading: "Which bid strategy should you choose?",
        paragraphs: [
          "Your bid strategy decides how Google bids for you in each auction. Smart Bidding strategies use device, location, time and audience signals per auction, but only work well with accurate conversion data.",
        ],
        bullets: [
          "Manual CPC: you set bids; control with little data, but hard to scale",
          "Maximize clicks: most clicks for the budget; for gathering traffic before conversion tracking exists, not for sales",
          "Maximize conversions (optional target CPA): most conversions for the budget; a good start for new campaigns with tracking in place",
          "Maximize conversion value (optional target ROAS): optimizes for revenue when order value is tracked; set the target from your margin",
          "Target impression share: visibility in a chosen position, mostly for brand defense",
        ],
      },
      {
        heading: "Keyword match types, negatives and measurement",
        paragraphs: [
          "Broad match shows ads on searches related in meaning and should be paired with Smart Bidding and a good negative list; phrase match shows when the search includes your keyword's meaning; exact match shows when the search has the same meaning as your keyword. Review the Search terms report weekly and add non-buying searches ('free', 'what is', 'jobs') as negatives.",
          "Set up conversion tracking before you judge results: define purchases, form submissions or calls as conversions via the Google tag or GA4 import, and send order value in ecommerce. Keep auto-tagging (gclid) on and use UTM parameters on other channels. Track CPC, CTR, conversion rate, CPA and ROAS weekly, and make decisions against your break-even CPA and ROAS.",
        ],
      },
      {
        heading: "Google Ads or Meta ads?",
        paragraphs: [
          "They do different jobs. Google Ads, especially Search, captures existing demand; Meta ads (Facebook, Instagram) create demand by reaching people as they scroll. If people already search for what you sell, Search usually delivers results faster; for visual, impulse or brand-new products, Meta can reach a wider audience at lower cost. Whichever you start with, manage budget against the same profit threshold, and don't add up conversions across platform reports: the same sale can be counted twice.",
        ],
      },
    ],
    faq: [
      {
        question: "Is Google Ads paid, and what is the minimum budget?",
        answer:
          "Opening an account is free; you pay only for your ads. There is no required minimum, but the budget should buy enough clicks and conversions to learn from. Work out your threshold with CPA = CPC / Conversion rate.",
      },
      {
        question: "Why does cost per click change?",
        answer:
          "Each search is a separate auction. Actual CPC depends on competitors' bids and quality, your ad and landing page relevance, location, device, time and season. You pay just enough to beat the advertiser below you and the threshold.",
      },
      {
        question: "What is the difference between Google Ads and AdSense?",
        answer:
          "Google Ads is for buying ads; AdSense is for earning money by showing ads on your own site. Advertisers spend in Google Ads; publishers earn a share through AdSense.",
      },
      {
        question: "What is a good Quality Score?",
        answer:
          "Quality Score runs 1–10 and is a diagnostic, not a target. On low-scoring keywords, check which component (expected CTR, ad relevance, landing page experience) is 'Below average' and fix that.",
      },
      {
        question: "Can Google Ads overspend my daily budget?",
        answer:
          "Google can spend up to 2× your daily budget on busy days, but monthly spend won't exceed daily budget × 30.4. A $75 daily budget spends at most $2,280 a month.",
      },
    ],
    relatedToolKey: "ad-budget",
    resources: [
      { label: "What Is SEO and How Do You Do It? (ads comparison math)", href: "/en/blog/what-is-seo-how-to-do-it/" },
      { label: "Advertising Budget Calculator", href: "/en/free-tools/ad-budget-calculator/" },
      { label: "ROAS Calculator", href: "/en/free-tools/roas-calculator/" },
      { label: "What Is ROAS & How to Calculate It?", href: "/en/blog/what-is-roas-how-to-calculate/" },
      { label: "How to Set Target ROAS in Google Ads", href: "/en/blog/how-to-set-target-roas-google-ads/" },
      { label: "How to Set Your Advertising Budget", href: "/en/blog/how-to-set-advertising-budget/" },
      { label: "7 Data-Driven Ways to Multiply Your Google Ads Performance", href: "/en/blog/google-ads-performance-optimization/" },
      { label: "How to Run Meta Ads: A Practical Guide", href: "/en/blog/how-to-run-meta-ads-guide/" },
      { label: "Google Ads Help: Actual cost-per-click (CPC)", href: "https://support.google.com/google-ads/answer/6297?hl=en", external: true },
      { label: "Google Ads Help: About Quality Score for Search campaigns", href: "https://support.google.com/google-ads/answer/6167118?hl=en", external: true },
    ],
  },
  {
    slug: "how-to-advertise-on-trendyol",
    seoTitle: "How to Advertise on Trendyol: Ad Types, Costs & Profit",
    title: "How to Advertise on Trendyol: Ad Types, Cost per Order, Break-Even ROAS and Profit (2026)",
    description:
      "How to advertise on Trendyol: ad types, seller panel steps, ad cost per order, break-even ROAS including returns, maximum CPC and an incrementality test.",
    category: "performans-pazarlama",
    tldr: [
      "Trendyol ads are created under Ad Management in the seller panel: pick the ad type, set budget and dates, add products, and fund the balance from your earnings or by card. For product ads you set a maximum cost per click (CPC) or use Automatic CPC.",
      "Ad cost per order = CPC / Conversion rate. A TRY 4 CPC at 2% conversion means TRY 200 of ads per order; on a TRY 800 product the panel shows a ROAS of 4.0.",
      "The profit threshold depends on returns. Ignoring returns gives a break-even ROAS of 3.5 for this product; with 8% returns it is 4.1, so a ROAS of 4.0 looks fine in the panel but loses TRY 3.18 per order (illustrative amounts).",
      "Panel ROAS can include orders you would have received anyway. Check incremental ROAS: a campaign showing 5.3 in the panel may really contribute 3.0.",
    ],
    publishedAt: "2026-11-02",
    readingMinutes: 9,
    tags: ["Trendyol", "Trendyol Ads", "Marketplace", "Ecommerce", "ROAS", "Turkey"],
    sections: [
      {
        heading: "How do you advertise on Trendyol? (Short answer)",
        paragraphs: [
          "Advertising on Trendyol, Turkey's largest marketplace, happens in the Ad Management section of the seller panel. You create a new ad, choose the type, set a daily or total budget and dates, add products and publish. You can fund the ad balance from your earnings or by credit card.",
          "Setup takes minutes; knowing whether the ad makes money is the hard part. Most of this guide covers what the panel does not show you: ad cost per order, a break-even ROAS that includes returns, the highest CPC you can afford, and a test for whether ads create extra sales. Amounts are illustrative and in Turkish lira, since that is what Trendyol sellers work with.",
        ],
      },
      {
        heading: "What ad types does Trendyol offer?",
        paragraphs: [
          "Trendyol's ad site (ads.trendyol.com) lists the following formats for sellers. Availability varies by store, so treat your panel as the final word.",
        ],
        bullets: [
          "Product Ads: promote products on the home page, in search results, product lists and favorites. This is where most sellers should start, because it reaches people already shopping",
          "Store Ads: banner and video placements for your store. Trendyol says there is no Buybox requirement for this format",
          "Commission-based Influencer Ads: you pay a commission on realized net sales instead of an upfront budget",
          "Meta Ads: retarget Trendyol shoppers on Instagram and Facebook; active products with stock above 4 enter the catalog automatically",
          "Promotional Ads and Display: listed on the site without details, so check conditions in the panel",
        ],
      },
      {
        heading: "How to set up a Trendyol product ad",
        paragraphs: [
          "Menu names change now and then, but public seller guides describe the same flow. Also note the balance rules reported in those guides: the balance section activates about a month after the store opens, a single transfer is capped (TRY 50,000 in a January 2026 guide), and loaded balance is not refunded as cash. Confirm current terms in the panel and avoid loading large amounts while testing.",
        ],
        bullets: [
          "1. Open Ad Management in the seller panel and choose to create a new ad",
          "2. Select product ads and name the ad after the product group",
          "3. Set the start and end dates, then a daily or total budget",
          "4. Choose products. Trendyol suggests at least 5 similar products from one category; skip items where you lost the Buybox or stock is low",
          "5. Set the bid: enter a maximum CPC (see the calculation below) or choose Automatic CPC",
          "6. Fund the balance, publish, and check spend and orders daily in the first week",
        ],
      },
      {
        heading: "How much do Trendyol ads cost?",
        paragraphs: [
          "Product ads have no fixed price list. Trendyol defines CPC as the maximum you agree to pay per click; the actual cost moves with category, competition, season and product performance. Turkish guides disagree widely: one quotes TRY 0.24–1.87 per click while mixing kuruş and lira, another gives unsourced category ranges such as TRY 1.20–3.50, and minimum budgets range from TRY 10 per product per day to TRY 20–25 per day. Some even describe the same format as pay-per-impression while the official site describes bids as CPC.",
          "So do not plan on someone else's average. The bid range in your panel and the real CPC from your first test are worth more than any blog table. CPC figures below only demonstrate the math.",
        ],
      },
      {
        heading: "How do you calculate ad cost per order?",
        paragraphs: [
          "CPC is not the number that matters most; ad cost per order is. Three formulas give the same answer, so use whichever data you have.",
          "Example: on a TRY 800 product with a TRY 4 CPC and 2% conversion, ad cost per order is 4 / 0.02 = TRY 200, and the panel shows a ROAS of 800 / 200 = 4.0. If CPC falls to TRY 3, cost drops to TRY 150 and ROAS rises to 5.3. Improving conversion through images, reviews, price or delivery speed has the same effect.",
        ],
        bullets: [
          "Ad cost per order = Total ad spend / Orders from ads",
          "Ad cost per order = CPC / Conversion rate",
          "Ad cost per order = Average order value / ROAS",
        ],
      },
      {
        heading: "What is the break-even ROAS on Trendyol, including returns?",
        paragraphs: [
          "ROAS is only good or bad relative to the profit a product leaves before ads. Commission, shipping and the service fee are covered in our Trendyol commission rates guide. What most calculations skip is returns: on a returned order, revenue and commission come back, but outbound shipping, return shipping and packaging stay with the seller, and so does the money paid for the click.",
          "Subtracting fees from price therefore understates the threshold. The correct version weights each order by its chance of being kept: Expected pre-ad profit = (1 − Return rate) × (Price − Commission − Service fee − Product cost) − Outbound shipping − Packaging − Return rate × Return shipping. Break-even ROAS = Price / Expected pre-ad profit.",
          "Example: TRY 800 price, 21% commission (TRY 168), TRY 10.99 service fee, TRY 300 product cost, TRY 81.95 shipping each way, TRY 10 packaging, 8% returns (illustrative). Expected profit is 0.92 × 321.01 − 81.95 − 10 − 6.56 = TRY 196.82, so break-even ROAS is 800 / 196.82 = 4.06. Ignoring returns gives TRY 229.06 and a threshold of 3.49, and every campaign between 3.5 and 4.1 looks profitable while losing money.",
          "To keep 8% of the sale price (TRY 64) as profit, target ROAS is 800 / (196.82 − 64) = 6.02. Trendyol's marketing line about returns of 'up to 12 times ad spend' is a ceiling, not a benchmark; what matters is whether you clear your own threshold.",
        ],
        bullets: [
          "ROAS 3.0: ad cost per order TRY 266.67 → result per order −TRY 69.84",
          "ROAS 4.0: TRY 200.00 → −TRY 3.18",
          "ROAS 5.0: TRY 160.00 → +TRY 36.82",
          "ROAS 6.0: TRY 133.33 → +TRY 63.49",
          "ROAS 8.0: TRY 100.00 → +TRY 96.82",
        ],
      },
      {
        heading: "What is the highest CPC you can afford?",
        paragraphs: [
          "Maximum CPC = Allowed ad cost per order × Conversion rate. In the example, at 2% conversion the break-even CPC is 196.82 × 0.02 = TRY 3.94. To protect an 8% margin, the allowed ad cost falls to TRY 132.82 and the CPC cap to TRY 2.66. With Automatic CPC you cannot enter this number, but you can audit against it: if average CPC stays above break-even, the campaign is losing money on your behalf.",
          "Conversion varies by product, so a new listing without reviews should not share a bid with a proven seller.",
        ],
      },
      {
        heading: "Are Trendyol ads profitable for every product?",
        paragraphs: [
          "No. With the same 8% return assumption, break-even ROAS swings widely. Rank your catalog by break-even ROAS before advertising. Products with very high thresholds are better sold through bundles that raise basket size.",
        ],
        bullets: [
          "TRY 199.90 product (TRY 80 cost, TRY 38.74 flat shipping, TRY 5 packaging): expected profit TRY 14.74, break-even ROAS 13.6",
          "TRY 800 product (example above): break-even ROAS 4.06, a good candidate",
          "TRY 15,000 phone (TRY 13,500 cost, 6% commission, 3% returns): expected profit TRY 476.93, break-even ROAS 31.5",
        ],
      },
      {
        heading: "Does panel ROAS show real sales? The incrementality test",
        paragraphs: [
          "Ad reports count orders attributed to ads, but some of those orders would have come through organic results anyway, especially from shoppers already searching for your brand or product. Paying for them adds no sales.",
          "A simple test: pick two weeks away from campaigns and price changes. Keep ads off the first week and on the second, with price and stock unchanged. Incremental ROAS = (Revenue with ads − Revenue without ads) / Ad spend.",
          "Example: a TRY 800 product sells 120 units in the week without ads. In the ad week you spend TRY 12,000, the panel credits 80 orders (ROAS 5.3) and total orders reach 165. Real growth is 45 orders: incremental ROAS is 45 × 800 / 12,000 = 3.0, which sits below this product's break-even.",
          "This test is imperfect because demand shifts week to week, so repeat it and, if you can, hold back a similar product group. It still beats accepting the panel number. As for the common claim that ads lift organic rank, we found no official Trendyol source that quantifies it, so measure organic sales in the weeks after you pause ads instead of budgeting on it.",
        ],
      },
      {
        heading: "How much budget should you start with?",
        paragraphs: [
          "Think in data rather than daily lira. A practical rule is to see at least 10 orders for a product group before deciding. At 2% conversion that is 500 clicks; at a TRY 3 CPC the test costs TRY 1,500, or about TRY 107 per day over 14 days. This is not a statistical guarantee, just a floor that prevents panicked early decisions.",
          "Scale in steps while watching ad cost per order. Our Ad Budget Calculator works out a total budget from revenue targets and margin.",
        ],
      },
      {
        heading: "How do discounts change the math?",
        paragraphs: [
          "Discounts move break-even ROAS more than ad costs do. Selling the example product at 15% off (TRY 680) cuts expected profit from TRY 196.82 to TRY 109.61 and lifts break-even ROAS from 4.06 to 6.20. A ROAS of 5 that made money last week now loses it. Recalculate at campaign prices, update CPC caps, and fund only products that still earn after the discount. Our Black Friday 2026 ad plan has a week-by-week schedule.",
        ],
      },
      {
        heading: "How should you judge influencer and Meta ads?",
        paragraphs: [
          "Commission-based influencer ads cost money only when a sale happens, so watch the commission cap rather than ROAS. Break-even influencer commission = Expected pre-ad profit / (Price × (1 − Return rate)). In the example that is 196.82 / 736 = 26.7%; bid clearly below it to keep a margin.",
          "Meta ads use the same break-even ROAS, but the shopper is being reminded rather than searching, so the incrementality question matters even more.",
        ],
      },
      {
        heading: "Common Trendyol advertising mistakes",
        paragraphs: [
          "Most guides focus on setup tips, but calculation errors usually burn more budget.",
        ],
        bullets: [
          "Treating panel ROAS as profit",
          "Leaving returns out of the threshold, especially in apparel",
          "Advertising low-priced products where flat shipping and fees consume the margin",
          "Spending on products without the Buybox or with low stock",
          "Using one bid for every product even though each has its own break-even CPC",
          "Not recalculating thresholds at campaign prices",
          "Deciding after two days, before enough orders exist",
        ],
      },
    ],
    faq: [
      {
        question: "What do you need to advertise on Trendyol?",
        answer:
          "An active seller account, eligible products and an ad balance. Ads are created under Ad Management in the seller panel. Public guides say the balance section activates about a month after the store opens; some formats have extra conditions listed in the panel.",
      },
      {
        question: "How much do Trendyol ads cost per day?",
        answer:
          "There is no fixed fee. You set the budget and, for product ads, a maximum cost per click. Published minimums disagree, so check the current limit in your panel and size your test to reach at least 10 orders.",
      },
      {
        question: "What is a good ROAS on Trendyol?",
        answer:
          "A good ROAS is any value above your product's break-even ROAS, which is price divided by expected pre-ad profit. In our examples the threshold is 4.06 for a TRY 800 product and 13.6 for a TRY 199.90 product.",
      },
      {
        question: "Are Trendyol ads worth it?",
        answer:
          "It depends on the product. They can pay off with healthy margins, controlled returns and strong conversion, while low-priced, thin-margin items usually spend more on ads than they earn. Compare ad cost per order with expected profit, then run an incrementality test.",
      },
      {
        question: "Should I use Automatic CPC or manual bids?",
        answer:
          "Automatic CPC lets the system set click costs per product and is easier to start with. Manual bids let you apply your break-even CPC directly. Either way, audit average CPC against each product's break-even CPC.",
      },
    ],
    howTo: {
      name: "How to work out whether a Trendyol ad is profitable",
      description: "Find break-even ROAS and maximum CPC including returns before launch, then measure incremental impact.",
      steps: [
        { name: "Find pre-ad profit", text: "Subtract commission, service fee and product cost from price, multiply by one minus the return rate, then deduct shipping, packaging and the expected return shipping." },
        { name: "Calculate break-even ROAS", text: "Divide the sale price by expected pre-ad profit. Panel ROAS below this level means a loss." },
        { name: "Set a maximum CPC", text: "Multiply the ad cost you can allow per order by the product's conversion rate." },
        { name: "Fund a test", text: "Budget enough clicks to see at least 10 orders, spread over two weeks, starting with similar products from one category." },
        { name: "Measure incremental impact", text: "Compare total revenue with and without ads and divide the difference by ad spend." },
      ],
    },
    relatedToolKey: "marketplace",
    resources: [
      { label: "What Is Dropshipping? Profit Math Including Returns", href: "/en/blog/what-is-dropshipping-how-it-works/" },
      { label: "Discount Calculator: Sale Price and Profit Impact", href: "/en/free-tools/discount-calculator/" },
      { label: "Trendyol & Hepsiburada Profit Calculator", href: "/en/free-tools/marketplace-profit-calculator/" },
      { label: "Trendyol Commission Rates 2026", href: "/en/blog/trendyol-commission-rates/" },
      { label: "ROAS Calculator", href: "/en/free-tools/roas-calculator/" },
      { label: "What Is ROAS & How to Calculate It?", href: "/en/blog/what-is-roas-how-to-calculate/" },
      { label: "How to Set Target ROAS in Google Ads", href: "/en/blog/how-to-set-target-roas-google-ads/" },
      { label: "Shipping Cost Calculator", href: "/en/free-tools/shipping-cost-calculator/" },
      { label: "Dimensional Weight (Desi) Calculator", href: "/en/free-tools/dimensional-weight-calculator/" },
      { label: "Ad Budget Calculator", href: "/en/free-tools/ad-budget-calculator/" },
      { label: "Black Friday 2026 Ad Plan", href: "/en/blog/black-friday-2026-ad-plan/" },
      { label: "Trendyol ad solutions (official site)", href: "https://ads.trendyol.com/", external: true },
    ],
  },
  {
    slug: "what-is-cpl-cost-per-lead",
    seoTitle: "What Is CPL? Cost Per Lead Formula and Benchmarks",
    title: "What Is CPL? How to Calculate Cost Per Lead, What a Good CPL Is and How to Lower It in B2B",
    description:
      "What is CPL: the cost per lead formula, fully loaded CPL, cost per MQL and SQL, how to find your own maximum CPL and how to lower it without hurting quality.",
    category: "b2b-lead-generation",
    tldr: [
      "CPL (cost per lead) is the average spend needed to win one lead: CPL = Total marketing spend / Valid leads. $4,000 and 80 leads gives a CPL of $50.",
      "There is no universal good CPL. Your own numbers set the limit: Maximum CPL = Maximum ad CAC × Lead-to-customer rate. In our example that limit is $200, so a $50 CPL is not expensive at all.",
      "A low CPL is not a good campaign: a $20 CPL can end at $3,000 per customer while a $75 CPL ends at $1,000.",
      "CPL has two levers: CPL = CPC / Lead conversion rate. Raising conversion from 6% to 8% cuts CPL by 25%, but without quality tracking a falling CPL may just mean worse leads.",
    ],
    publishedAt: "2026-11-02",
    readingMinutes: 7,
    tags: ["CPL", "Cost Per Lead", "B2B", "Lead Generation", "CAC", "Ad Metrics"],
    sections: [
      {
        heading: "What is CPL? (Short answer)",
        paragraphs: [
          "CPL (cost per lead) shows what your marketing spend pays, on average, for each potential customer record. A lead is someone who fills in a form, requests a demo, calls, or leaves contact details to download content.",
          "Formula: CPL = Total spend / Valid leads. If you spend $4,000 in a month and get 80 valid leads, CPL is 4,000 / 80 = $50.",
          "CPL matters most when the sale closes later with a sales team: B2B software and services, education, healthcare, real estate, insurance. In ecommerce, where the sale is measured directly, ROAS and cost per order are more useful.",
        ],
      },
      {
        heading: "How do you calculate CPL? Which leads and costs count?",
        paragraphs: [
          "The formula is simple, so the mistakes live in the definitions. Agree on two things in writing before comparing numbers.",
          "Denominator: a conversion in the ad panel is not the same as a valid CRM record. Remove duplicates, spam, existing customers and job seekers. If the panel shows 100 conversions but 80 are valid, CPL is $50, not $40.",
          "Numerator: ad-only CPL is fine for comparing channels, but budget decisions need fully loaded CPL = (Ads + Agency + Tools + Content and creative) / Valid leads. Adding $1,200 of agency fees and $400 of tools to the example gives 5,600 / 80 = $70. Report both and label them clearly.",
          "Period: match spend and leads. For slow channels such as LinkedIn or content, look at several months together.",
        ],
      },
      {
        heading: "How do CPL, CPC, CPA and CAC differ?",
        paragraphs: [
          "These metrics measure different points in the funnel and connect to each other: CPL = CPC / Click-to-lead conversion rate. A $3 CPC at 6% conversion gives a $50 CPL.",
          "Note that 'CPL model' sometimes describes a buying model, where you pay a publisher a fixed fee per lead. As a metric, CPL is the actual average cost however you bought the lead.",
        ],
        bullets: [
          "CPC: cost per click, the price of traffic",
          "CPL: cost per lead, the price of a record, not its quality",
          "CPA: cost of a defined action, which may be a lead or a sale, so always define it",
          "CAC: cost per new customer, including sales costs, the real decision metric",
        ],
      },
      {
        heading: "From lead to customer: cost per MQL and SQL",
        paragraphs: [
          "CPL is the first stop in the funnel, so on its own it misleads. Take $4,000 and 80 leads: half pass marketing criteria (MQL), 40% of MQLs are accepted by sales (SQL), and a quarter of SQLs become customers. This turns 'leads are expensive' into 'which stage is broken'.",
        ],
        bullets: [
          "CPL: 4,000 / 80 = $50",
          "Cost per MQL: 4,000 / 40 = $100",
          "Cost per SQL: 4,000 / 16 = $250",
          "Ad cost per customer: 4,000 / 4 = $1,000",
        ],
      },
      {
        heading: "What is a good CPL? How to find your maximum",
        paragraphs: [
          "As a published reference, LocaliQ's 2026 search advertising data shows an average cost per lead of $66.69 across industries and $93.69 for business services. These come from its client campaigns and count calls and chats as leads, so treat them as an order of magnitude, not a target.",
          "A sturdier approach is to derive the limit. Maximum CPL = Maximum ad CAC × Lead-to-customer rate, where Maximum ad CAC = (Gross profit LTV / Target LTV:CAC ratio) − Sales cost per customer.",
          "Example: lifetime gross profit of $18,000 with a target ratio of 3 allows $6,000 per customer. If sales costs take $2,000, ads get $4,000. With 5% of leads becoming customers, maximum CPL is 4,000 × 0.05 = $200.",
          "A team complaining about a $50 CPL may be at a quarter of its limit, and spending more could be the profitable move. At a 1% lead-to-customer rate, the same limit falls to $40 and a $50 CPL loses money. Never read CPL apart from conversion.",
        ],
      },
      {
        heading: "Why can a low CPL be a trap?",
        paragraphs: [
          "Ad algorithms optimize for the goal you give them. If the goal is a form fill, they find the cheapest form fill. Campaign A wins the report but costs three times as much per customer. Scaling it lowers CPL while raising CAC and draining the sales team. We cover feeding lead quality back to ad platforms in our guide to reducing B2B lead costs.",
        ],
        bullets: [
          "Campaign A ($3,000): 150 leads, CPL $20 → 6 SQLs ($500 each) → 1 customer ($3,000)",
          "Campaign B ($3,000): 40 leads, CPL $75 → 12 SQLs ($250 each) → 3 customers ($1,000 each)",
        ],
      },
      {
        heading: "How do you lower CPL?",
        paragraphs: [
          "At a $3 CPC and 6% conversion, CPL is $50. Cutting CPC by 20% to $2.40 gives $40; raising conversion to 8% gives $37.50. CPC depends on competition while conversion is largely in your hands, so it is usually the faster lever. Track lead quality at every step: if SQL rate falls with CPL, the win is not real.",
        ],
        bullets: [
          "Make the offer concrete: a price range, a free audit or a sample report rather than 'contact us'",
          "Simplify forms but test keeping a qualifying field, which can lower lead volume and raise SQL rate",
          "Exclude low-intent searches such as job and free-tool queries",
          "Match ad and landing page messages",
          "Retarget visitors who did not convert with a second offer",
          "Filter fake records with bot protection and email validation",
        ],
      },
      {
        heading: "How do you measure CPL correctly?",
        paragraphs: [
          "Tag every ad link with UTMs and pass them through hidden form fields into your CRM, then mark lead, MQL, SQL and customer stages with shared definitions.",
          "Finally, feed outcomes back. With Google Ads offline conversion imports, you store the click ID (GCLID) with the lead and send it back when the deal closes. Enhanced conversions for leads strengthens this by matching hashed form data and is Google's recommended path; since 15 June 2026 these uploads have moved to the Data Manager API. Check consent requirements with your legal adviser first.",
          "A weekly report needs only spend, valid leads, CPL, SQLs, cost per SQL, customers and CAC per channel. With long sales cycles, read the last rows as cohorts by lead month.",
        ],
      },
    ],
    faq: [
      {
        question: "What does CPL mean?",
        answer: "CPL stands for cost per lead: total marketing spend divided by valid leads. $4,000 and 80 leads gives a $50 CPL.",
      },
      {
        question: "How do you calculate cost per lead?",
        answer: "CPL = Total spend / Valid leads, or CPL = CPC / Lead conversion rate. A $3 CPC at 6% conversion gives $50. Remove duplicates and fake records from the denominator.",
      },
      {
        question: "What is a good cost per lead?",
        answer: "There is no universal threshold. Calculate your own: Maximum CPL = Maximum ad CAC × Lead-to-customer rate. With $4,000 for ads per customer and a 5% rate, the limit is $200.",
      },
      {
        question: "What is the difference between CPL and CPA?",
        answer: "CPL is the cost of winning a lead. CPA is the cost of whatever action you define, such as a sale or a trial. In a lead campaign they can match, so always state what CPA counts.",
      },
      {
        question: "Is a low CPL always good?",
        answer: "No. Cheap leads that never buy raise CAC. Read CPL together with cost per SQL and cost per customer; a pricier lead source can produce more customers on the same budget.",
      },
    ],
    howTo: {
      name: "How to calculate your maximum CPL",
      description: "Work back from customer value and conversion to the highest lead cost you can afford.",
      steps: [
        { name: "Find customer value", text: "Calculate lifetime gross profit per customer (LTV)." },
        { name: "Set a total CAC cap", text: "Divide LTV by your target LTV:CAC ratio." },
        { name: "Subtract sales cost", text: "Remove sales team and demo cost per customer to get the CAC available for ads." },
        { name: "Multiply by the lead-to-customer rate", text: "Find the share of recent valid leads that became customers and multiply by ad CAC." },
        { name: "Compare with current CPL", text: "Below the cap, test more budget. Above it, fix conversion and lead quality first." },
      ],
    },
    relatedToolKey: "ad-budget",
    resources: [
      { label: "Ad Budget Calculator (B2B mode)", href: "/en/free-tools/ad-budget-calculator/" },
      { label: "CAC Calculator", href: "/en/free-tools/cac-calculator/" },
      { label: "What Is CAC?", href: "/en/blog/what-is-cac-customer-acquisition-cost/" },
      { label: "What Is LTV? LTV:CAC Ratio", href: "/en/blog/what-is-ltv-ltv-cac-ratio/" },
      { label: "How to Reduce B2B Lead Generation Costs", href: "/en/blog/how-to-reduce-b2b-lead-generation-costs/" },
      { label: "Conversion Rate Calculator", href: "/en/free-tools/conversion-rate-calculator/" },
      { label: "What Are UTM Parameters?", href: "/en/blog/what-are-utm-parameters/" },
      { label: "Google Ads Help: Offline conversion imports", href: "https://support.google.com/google-ads/answer/2998031", external: true },
      { label: "Google Ads Help: Enhanced conversions for leads", href: "https://support.google.com/google-ads/answer/15713840", external: true },
      { label: "LocaliQ: Search Advertising Benchmarks", href: "https://localiq.com/blog/search-advertising-benchmarks/", external: true },
    ],
  },
  {
    slug: "how-to-run-instagram-ads",
    seoTitle: "How to Run Instagram Ads: Cost, Budget and Steps (2026)",
    title: "How to Run Instagram Ads (2026): Costs, Budget Math, Boost vs Ads Manager and Ad Specs",
    description:
      "How to run Instagram ads and what they cost: Boost and Ads Manager steps, placement sizes, DM ad measurement and a worked budget example with real math.",
    category: "performans-pazarlama",
    tldr: [
      "There are two ways to run Instagram ads: the in-app Boost button (quick, for profile visits, website visits or messages) and Meta Ads Manager (full control, for sales and leads). If you measure sales, use Ads Manager.",
      "Instagram has no fixed price. You set the budget and unit costs form in the auction, so treat any published CPM or CPC range as a starting assumption until your own first week of data arrives.",
      "Example: $10 a day ($300 a month), CPM $8, CTR 1%, conversion rate 1.5% gives 375 clicks, about 5.6 orders and an ad cost of about $53 per order. With a $120 basket and 40% margin, break-even is $48, so this setup loses about $30 a month.",
      "Raise CTR to 1.5% in the same math and cost per order falls to about $36. That is why the first move is testing strong 9:16 creative, not raising the budget.",
    ],
    publishedAt: "2026-11-03",
    readingMinutes: 9,
    tags: ["Instagram Ads", "Instagram Ad Cost", "Meta Ads", "Reels Ads", "Ad Budget", "Boost"],
    sections: [
      {
        heading: "How do you run Instagram ads? (Short answer)",
        paragraphs: [
          "Switch your account to a professional account (business or creator). Then either tap 'Boost' on an existing post in the app, or build a campaign in Meta Ads Manager and limit placements to Instagram. Pick the goal, audience, daily budget and duration, add a payment method and submit the ad for review.",
          "This guide covers the Instagram-specific decisions: how cost forms, the budget math, which size fits each placement and how to measure DM ads. For the pixel, Conversions API, objectives, Advantage+ and the learning phase, see the Meta ads guide. All amounts here are illustrative.",
        ],
      },
      {
        heading: "How much do Instagram ads cost?",
        paragraphs: [
          "There is no price list. Meta sells ad space by auction: you set the budget, the system spends it against your goal, and CPM and CPC differ for every account. So the honest answer to 'how much?' is a calculation, not a number.",
          "Benchmarks vary widely and are mostly US-weighted. One 2026 roundup puts published average CPC at $1.01–$1.73 and CPM at $8.16–$10.81, and its figures can't be traced to a single source. Use such ranges as placeholders until your own first week of data arrives.",
          "Three parts make up the cost: Ad cost per order = CPM / (1,000 × CTR × Conversion rate). Halve any one and the cost doubles. Competition, season and audience drive CPM; creative drives CTR; your site and offer drive conversion rate. You control the last two most.",
        ],
        bullets: [
          "Daily budget: you set it in the app or Ads Manager",
          "Minimum budget: varies with account currency and optimisation event; the setup screen shows the current floor",
          "What raises CPM: peak seasons, narrow audiences, rivals targeting the same people",
          "What sets CTR: the first 2 seconds, a clear offer, creative made for the placement",
        ],
      },
      {
        heading: "How do you calculate an Instagram ad budget?",
        paragraphs: [
          "Example: $120 basket, 40% contribution margin before ads. The most you can spend per order is $48 (break-even), a break-even ROAS of 2.5. You allocate $10 a day, $300 a month. Assumptions: CPM $8, CTR 1%, site conversion rate 1.5%.",
          "$300 / $8 × 1,000 = 37,500 impressions. At 1% CTR that is 375 clicks at $0.80. At 1.5% conversion, 5.6 orders. Ad cost per order is $53, revenue $675, ROAS 2.25. Orders contribute $270 before ads, so the month ends $30 down.",
          "One lever is enough to break even: bring CPC to $0.72 (CTR 1.11% at the same CPM) or lift conversion rate to 1.67%. The same $300 can produce very different results:",
        ],
        bullets: [
          "CPM $6, CTR 1%: 500 clicks, 7.5 orders, $40 per order, ROAS 3.00 → profitable",
          "CPM $8, CTR 1%: 375 clicks, 5.6 orders, $53 per order, ROAS 2.25 → loss",
          "CPM $12, CTR 1%: 250 clicks, 3.8 orders, $80 per order, ROAS 1.50 → heavy loss (peak season)",
          "CPM $8, CTR 1.5%: 563 clicks, 8.4 orders, $36 per order, ROAS 3.38 → profitable (better creative)",
        ],
      },
      {
        heading: "How much should you start with per day?",
        paragraphs: [
          "If you optimise for purchases, Meta expects about 50 events per ad set in the 7 days after the last significant edit. At a $36 target cost that is about $257 a day, which a small budget won't reach.",
          "So on $10 a day, pick a more frequent event (initiate checkout, add to cart) or a messaging goal, use one ad set and leave it alone for 7 days. Your ceiling is what you can afford to lose on a test. The Ad Budget Calculator works out the exact figure from your revenue target and margin.",
        ],
      },
      {
        heading: "Boost or Ads Manager?",
        paragraphs: [
          "Both use the same ad system; the difference is control and measurement.",
        ],
        bullets: [
          "Choose Boost for: showing one post to more people, profile visits or messages, local announcements, a quick small test",
          "Choose Ads Manager for: ecommerce sales, lead forms, optimising to a pixel event, retargeting, A/B tests, catalogue ads",
          "A practical route: test your best organic posts with Boost, then move the winning angle into a sales campaign in Ads Manager",
        ],
      },
      {
        heading: "How do you run ads from the Instagram app?",
        paragraphs: [
          "Boosting takes a few minutes on your phone. Menu names can vary a little by app version.",
        ],
        bullets: [
          "Switch to a professional account in settings; it's free",
          "Open a post, Reel or story and tap 'Boost'",
          "Pick a goal: profile visits, website visits or messages; use a UTM-tagged link for website visits",
          "Pick an audience: automatic, or your own by location, age and interests",
          "Set daily budget and duration; the estimated reach on screen is an estimate, not a promise",
          "Add payment, check the preview and submit; the ad goes live after review",
        ],
      },
      {
        heading: "How do you run Instagram-only ads in Ads Manager?",
        paragraphs: [
          "Account, pixel and payment setup follow the Meta guide. The Instagram-specific steps:",
        ],
        bullets: [
          "Choose the objective by business result: Sales, Leads, or a messaging goal for DMs",
          "At ad set level choose Manual placements, untick Facebook, Messenger, Threads and Audience Network, and keep only Instagram",
          "At ad level pick your Instagram account as the identity",
          "Upload creative per placement: 9:16 video for Reels and Stories, 4:5 image for feed",
          "Add UTMs: utm_source=instagram, utm_medium=paid_social",
        ],
      },
      {
        heading: "Should you limit ads to Instagram only?",
        paragraphs: [
          "Not always. Narrow placements leave the system less inventory to buy, which is why Meta generally recommends Advantage+ placements. Manual selection makes sense if the creative was shot only for Reels or your audience lives on Instagram. The sound method is an A/B test, judged on cost per order rather than CPM.",
        ],
      },
      {
        heading: "Instagram ad sizes and placements",
        paragraphs: [
          "Ads can appear in feed, profile feed, Stories, Reels, Explore and search results. These are common 2026 sizes; Meta updates them, so check the Ads Manager preview and Meta's Ads Guide before launch.",
        ],
        bullets: [
          "Feed: 4:5 (1080 × 1350) recommended, 1:1 (1080 × 1080) also used; about the first 125 characters of primary text show",
          "Stories: 9:16 (1080 × 1920); leave about 14% clear at the top and 20% at the bottom",
          "Reels: 9:16 (1080 × 1920); interface covers about 14% top, 35% bottom and 12% right",
          "Explore: 1:1 or 4:5",
          "Carousel: 2–10 cards at the same ratio",
          "Files: JPG/PNG up to 30 MB, MP4/MOV up to 4 GB",
        ],
      },
      {
        heading: "How do you measure Instagram DM ads?",
        paragraphs: [
          "Message-goal ads suit businesses that close sales in DMs, but the pixel can't see those sales and the dashboard shows only conversations started. Without manual tracking, 'lots of messages' feels like success while the budget burns.",
          "Example: $300 spent, 60 conversations ($5 each). Your records show 15% become orders: 9 orders at about $33 each. With a $48 ceiling you're profitable; at 8% conversion the cost is $62.50 per order and you aren't. Track cost per order, not cost per conversation.",
        ],
        bullets: [
          "Use a preset first message or code to separate ad traffic",
          "Log conversations, orders and cancellations weekly",
          "Watch reply time; a DM answered late rarely converts",
        ],
      },
      {
        heading: "Do partnership ads work?",
        paragraphs: [
          "Partnership ads run a creator's post, or a co-branded ad, under both the creator's and the brand's identity, so they look more natural than a standard brand ad.",
          "Meta's October 2026 creator paper says that across 20 EMEA conversion lift studies, advertisers with at least 30% of assets in partnership ads saw a 45% lower median cost per incremental purchase. Read it with care: the platform measured itself, the data covers January–June 2025 and it's reported at 92% confidence. Test it on your own account against brand ads with the same offer.",
        ],
      },
      {
        heading: "Why won't an Instagram ad run or boost?",
        paragraphs: [
          "Common reasons:",
        ],
        bullets: [
          "Personal account: switch to professional",
          "Very new account: per Hootsuite's roundup, accounts under 30 days old may not be able to boost",
          "Copyrighted music: swap or remove it",
          "No admin rights on the linked Facebook Page",
          "Wrong size: use 9:16 for Reels",
          "Account restriction or payment issue: check Account Quality and request a review",
          "Ad policy: health claims, before-and-after images and copy that calls out personal attributes are often rejected",
        ],
      },
    ],
    faq: [
      {
        question: "How much does it cost to advertise on Instagram?",
        answer:
          "There is no fixed price; you set the budget and unit costs form in the auction. Ad cost per order = CPM / (1,000 × CTR × Conversion rate). With a $8 CPM, 1% CTR and 1.5% conversion rate, that's about $53 per order.",
      },
      {
        question: "How much should I spend per day on Instagram ads?",
        answer:
          "There is no universal figure. For purchase optimisation, Meta expects about 50 events a week: target cost × 50 / 7. Below that, choose a more frequent event or a messaging goal and use one ad set.",
      },
      {
        question: "Do I need a business account to advertise on Instagram?",
        answer:
          "To boost, you need a professional account (business or creator). Switching is free and takes a few taps in settings.",
      },
      {
        question: "Is Boost or Ads Manager better?",
        answer:
          "Boost is enough to show one post to more people. Sales, leads, retargeting and testing need Ads Manager, where you control the optimisation event, audience and creative variations.",
      },
      {
        question: "What size are Instagram ads?",
        answer:
          "Common sizes: feed 4:5 (1080 × 1350), Stories and Reels 9:16 (1080 × 1920), Explore 1:1 or 4:5. On Reels, keep about the bottom 35% and top 14% free of text.",
      },
    ],
    howTo: {
      name: "How to run Instagram ads step by step",
      description: "From professional account to live Instagram ad.",
      steps: [
        { name: "Prepare the account", text: "Switch to a professional account; for sales, set up an ad account, payment and the Meta pixel." },
        { name: "Do the budget math", text: "Find break-even cost per order from basket and margin, then estimate the month using CPM, CTR and conversion rate." },
        { name: "Choose the route", text: "Use Boost for quick reach and messages; use Ads Manager for sales and leads." },
        { name: "Set goal, audience and placement", text: "Pick the goal that matches the business result and upload creative sized for each placement." },
        { name: "Launch and measure", text: "Launch with a UTM-tagged link, leave the structure alone for 7 days and decide on cost per order." },
      ],
    },
    relatedToolKey: "ad-budget",
    resources: [
      { label: "Ad Budget Calculator", href: "/en/free-tools/ad-budget-calculator/" },
      { label: "ROAS Calculator", href: "/en/free-tools/roas-calculator/" },
      { label: "Gross Profit Margin Calculator", href: "/en/free-tools/gross-profit-margin-calculator/" },
      { label: "UTM Builder", href: "/en/free-tools/utm-builder/" },
      { label: "How to Run Meta Ads", href: "/en/blog/how-to-run-meta-ads-guide/" },
      { label: "What Is ROAS and How to Calculate It", href: "/en/blog/what-is-roas-how-to-calculate/" },
      { label: "How to Set an Advertising Budget", href: "/en/blog/how-to-set-advertising-budget/" },
      { label: "PPC Land: Meta partnership ads paper", href: "https://ppc.land/meta-says-partnership-ads-cut-incremental-purchase-costs-45-in-emea-tests/" },
      { label: "Hootsuite: Why you can't boost on Instagram", href: "https://blog.hootsuite.com/cannot-boost-on-instagram" },
      { label: "Cropink: Instagram advertising cost", href: "https://www.cropink.com/instagram-advertising-cost" },
    ],
  },
  {
    slug: "what-is-seo-how-to-do-it",
    seoTitle: "What Is SEO and How Do You Do It? A 2026 Guide",
    title: "What Is SEO and How Do You Do It? How Google Works, a 7-Step Process, AI Search and the Payback Math (2026)",
    description:
      "SEO earns your site visibility in Google's unpaid results. Learn the 7-step process, the real effect of AI Overviews, common myths and when SEO pays for itself.",
    category: "performans-pazarlama",
    tldr: [
      "SEO (search engine optimization) is the technical, content and authority work that makes a site more visible in the unpaid results of search engines like Google for what people actually search. Unlike ads you pay nothing per click, but results take months and no ranking can be guaranteed.",
      "Google works in three stages: crawling, indexing and serving. Start by finding which stage is failing; rewriting the title of a page that is not indexed changes nothing.",
      "SEO has seven steps: set up measurement, pick queries with real demand, confirm intent on the results page, write something better than the top results, tune on-page elements, add internal links, then earn authority and measure.",
      "AI Overviews did not kill SEO, but they cut clicks: Ahrefs found the top result's CTR about 58% below forecast on queries showing an overview (desktop, correlation). Google says there are no extra requirements to appear in them.",
      "The decision math: Required monthly visits = Monthly SEO cost / (Conversion rate × Contribution per order). With $1,500, 1.5% and $48 you need 2,083 organic visits a month. Compare that with the search volume of your target queries before you commit a budget.",
    ],
    publishedAt: "2026-11-04",
    readingMinutes: 11,
    tags: ["SEO", "What Is SEO", "Search Engine Optimization", "Technical SEO", "Keyword Research", "AI Overviews"],
    sections: [
      {
        heading: "What is SEO? (Short answer)",
        paragraphs: [
          "SEO (search engine optimization) is all the work that helps a website appear higher and more often in the unpaid (organic) results of search engines like Google and Bing for the queries its audience uses. It comes down to three jobs: letting the search engine find and read your pages (technical), giving the best answer to the query (content), and getting other sites to reference you (authority).",
          "Two limits are worth knowing up front. First, nobody pays Google for organic results, and advertising does not change your organic position; Google states this in its documentation. Second, no one can promise the number one spot. Google warns against SEO providers who guarantee rankings or claim a special relationship with Google.",
          "This guide comes from an SEO program we run from scratch on this site. The search volume table and daily log are in a public repository, and several examples below come from there.",
        ],
      },
      {
        heading: "How does Google work? Crawling, indexing, serving",
        paragraphs: [
          "Google takes a page through three stages, and not every page finishes all three. Crawling: Googlebot finds the page through links, sitemaps and known URLs, downloads it and renders JavaScript. Indexing: it analyzes the content, clusters similar pages and picks a canonical page for each cluster. Serving: when someone searches, it returns the indexed pages that are most relevant for their location, language and device.",
          "The value of this split is diagnosis. 'My SEO isn't working' can mean three different problems with entirely different fixes. The URL Inspection tool in Search Console tells you which stage a page is stuck at:",
        ],
        bullets: [
          "'URL is not on Google': Google doesn't know the page yet. The fix is discovery, not content: internal links, a fresh sitemap, an indexing request if needed",
          "'Discovered, currently not indexed': Google knows the address but postponed crawling. This usually points to low site authority and few internal links",
          "'Crawled, currently not indexed': the page was read but not judged worth indexing. Differentiate it and link to it from strong pages",
          "Indexed but no impressions: the page doesn't match the query or lacks authority. Check the title, intent and competitors",
          "Impressions but no clicks: the snippet promises no answer, or the position is too low. Prioritize pages that can move into positions 8 to 20",
        ],
      },
      {
        heading: "What are the types of SEO?",
        paragraphs: [
          "SEO divides into a few areas. Tackle them in order rather than all at once: technical problems slow content down, and without content there is nothing worth linking to.",
        ],
        bullets: [
          "Technical SEO: crawlability, indexability, speed, mobile, redirects, canonicals, structured data",
          "On-page SEO: title, description, H1 and subheadings, URL, image alt text, internal links",
          "Content SEO: which page answers which query, topic clusters, updates",
          "Off-page SEO: backlinks from other sites, brand mentions, digital PR",
          "Local SEO: Google Business Profile, reviews and local queries. Often the first job for a single-location business",
        ],
      },
      {
        heading: "How do you do SEO? 7 steps",
        paragraphs: [
          "This order wastes the least effort on a new or small site. Each step uses the output of the one before it.",
        ],
        bullets: [
          "1. Set up measurement: connect Search Console and GA4, submit your sitemap, record your starting numbers",
          "2. Pick queries with demand: confirm volume in a tool like Keyword Planner and drop topics with none",
          "3. Confirm intent on the results page: search the query and note the type of the top 5 to 8 results (guide, tool, product, list). What Google shows is what users want",
          "4. Read the top three and list what's missing: worked examples, freshness, official sources, experience. Start writing from that list",
          "5. Write the page and tune on-page elements: a direct answer in the first paragraph, question-style subheadings, a unique title and description",
          "6. Add internal links: link to the new page from at least two strong pages, and out to related pages. Google finds most new pages through links",
          "7. Measure and update: wait a few weeks, read queries and positions in Search Console, strengthen pages with impressions but no clicks. Then move to authority work",
        ],
      },
      {
        heading: "How do you choose keywords? Volume and intent examples",
        paragraphs: [
          "The most expensive SEO mistake is writing a great page nobody searches for, and intuition fails here. An example from our own program in Turkey: we targeted the Turkish equivalents of 'CAC calculator', 'LTV calculator' and 'churn rate calculator'. Keyword Planner showed all three at 0-10 monthly searches or no data, while 'what is CAC' drew 320 and 'what is LTV' 210. One table changed the target list.",
          "Volume isn't enough; check intent too. 'LTV' results partly explain loan-to-value rather than customer lifetime value. What you see on page one tells you who is really searching.",
          "Estimate the opportunity as well: Monthly clicks ≈ Monthly volume × CTR. In Ahrefs' aggregated desktop data (December 2025), position one earned a 3.9% CTR on informational queries without an AI Overview and 1.6% on queries with one. A 5,400-search query would bring roughly 86 to 211 clicks a month even at number one. High volume doesn't automatically mean high traffic.",
        ],
        bullets: [
          "Informational ('what is roas'): a guide. Often shows an AI Overview, so clicks are lower, but it builds trust",
          "Tool ('dimensional weight calculator'): a working calculator. An overview can't run the math, so clicks should hold up better",
          "Transactional ('seo consultant'): a service page. Low volume, high lead value",
          "Brand and navigational: don't target them; the searcher already has a destination",
        ],
      },
      {
        heading: "On-page SEO checklist",
        paragraphs: [
          "Run the same list before every publish. None of these lifts rankings alone, but missing them holds good content back.",
        ],
        bullets: [
          "Title: unique, clear, around 60 characters, main query first",
          "Meta description: 120 to 160 characters stating the answer or your difference. It serves clicks, not rankings",
          "One H1 and logical subheadings: hierarchy is for readers; Google says heading order doesn't affect Search",
          "First paragraph: the direct answer. It's the most valuable spot for readers, snippets and AI summaries",
          "URL: short and readable. Keywords in URLs have very little effect, so don't change live URLs for that reason",
          "Images: alt text that says what the image shows, compressed files",
          "Structured data: Article, FAQPage, BreadcrumbList or Product matching visible content",
        ],
      },
      {
        heading: "What should you check first in technical SEO?",
        paragraphs: [
          "On small sites, technical SEO usually comes down to a handful of basics. Check these before commissioning a full audit.",
          "If content loads through JavaScript, be careful: Google can render it, but some AI crawlers may not run it, and rendering adds delay even on Google. Server-side or static output (SSG) is the safest route. This site is built with React, yet every page is pre-rendered to HTML.",
        ],
        bullets: [
          "robots.txt doesn't block important pages and no page carries an accidental noindex",
          "The sitemap is current and being read in Search Console. On our site, when the last-read date fell behind, new pages stayed 'not on Google' for days",
          "One address rule: http/https, www and trailing slash all 301 to one canonical version",
          "Works on mobile: Google evaluates the mobile version of your site",
          "Core Web Vitals: LCP up to 2.5 s, INP up to 200 ms, CLS up to 0.1. These are experience targets, not a ranking guarantee",
          "Multilingual sites: reciprocal hreflang, each version self-canonical",
          "No broken internal links or redirect chains",
        ],
      },
      {
        heading: "What is a backlink, and how do you earn one?",
        paragraphs: [
          "A backlink is a link from another site to yours. Google uses links to discover pages and gauge importance, though PageRank is only one of many signals. One editorial link from a relevant real site beats hundreds of directory links.",
          "Buying or selling links for ranking purposes violates Google's spam policies. Paid sponsorship links need rel='sponsored' or rel='nofollow'. The durable path is to create something worth linking to.",
        ],
        bullets: [
          "Tools: embeddable calculators other sites can add to their articles (that's why our tools carry an 'Add to your site' box)",
          "Templates: spreadsheets people can download without signing up",
          "Original data: numbers from your own measurement that others can cite",
          "Guest posts: only on relevant publications, with a genuinely useful piece",
          "Brand mentions: politely ask for a link where you're mentioned without one",
        ],
      },
      {
        heading: "Did AI Overviews kill SEO?",
        paragraphs: [
          "No, but they changed the click math. Ahrefs' study of 300,000 keywords found that position one's desktop CTR on AI Overview queries sat about 58% below its forecast without an overview (December 2025). That's a correlation, and features like featured snippets also affect clicks, but 'number one equals lots of traffic' no longer holds for informational queries.",
          "Google's position is clear: there are no additional requirements to appear in AI Overviews or AI Mode. A page must be indexed and eligible for a snippet, and no new AI text file or special schema is needed. So SEO comes first. This traffic is also reported inside the 'Web' search type in Search Console. Treat files like llms.txt as a low-cost extra for other AI tools, not a Google ranking lever.",
          "Make three practical changes: favor pages with calculations, tools and original data, which summaries can't fully replace; open each section with a self-contained, sourced answer; and measure branded search growth as well as clicks. Our GEO guide has the details.",
        ],
      },
      {
        heading: "Which SEO advice is wrong or outdated?",
        paragraphs: [
          "Plenty of guides repeat the same claims without sources. Here's how they compare with Google's own documentation:",
        ],
        bullets: [
          "'You need the meta keywords tag': Google Search doesn't use it",
          "'Keep keyword density at 1-2%': no such number exists at Google, and excessive repetition violates spam policies",
          "'Posts need at least 2,000 words': Google says there is no magical word count, minimum or maximum",
          "'Your domain should contain the keyword': according to Google it has hardly any effect beyond appearing in the URL",
          "'E-E-A-T is a ranking factor': Google's answer is 'No, it's not'",
          "'Duplicate content gets penalized': it isn't a penalty, though it wastes crawl resources",
          "'AI-written content is banned': the outcome matters, not the method. Mass-producing pages with generative AI without adding value is what's banned",
          "'SEO is a one-off job': algorithms, rivals and queries change. By early November 2026 Google had already logged two core updates (March, May) and four spam updates that year",
        ],
      },
      {
        heading: "How long does SEO take?",
        paragraphs: [
          "There's no single timeline. Google says some changes take effect in a few hours and others take several months, and suggests waiting a few weeks before judging. Site history, competition and how quickly Google finds your page all play a part.",
          "On a new site the first signal is impressions, not clicks. Our order was: pages got indexed, impressions began deep in the results, then low-competition 'what is' queries moved toward the top 20. Average position can drop in this phase because new pages enter low; that isn't a bad sign.",
        ],
      },
      {
        heading: "When does SEO pay for itself? A worked example",
        paragraphs: [
          "SEO isn't free: an agency, a consultant or your own time all cost money. Calculate breakeven traffic first. Required monthly visits = Monthly SEO cost / (Conversion rate × Contribution per order).",
          "Example figures: $1,500 a month, 1.5% organic conversion rate, $48 contribution per order. One visit is worth 0.015 × $48 = $0.72, so you need $1,500 / $0.72 = 2,083 visits. At an average 2% CTR, that means ranking across roughly 104,000 monthly searches.",
          "Compare the ad equivalent: at $0.80 per click, 2,083 clicks cost $1,667. So in this example SEO beats ads only after reaching breakeven, and pays nothing in the months before it. If you need cash soon, start with ads and build SEO alongside. In B2B, where one customer is worth far more, much less volume can be enough.",
        ],
        bullets: [
          "If your market's total volume is below the target, SEO alone won't do it",
          "Get contribution per order from the margin calculator and your rate from the conversion calculator",
          "The CPC you pay on a query in Google Ads is the best proxy for its SEO value",
        ],
      },
      {
        heading: "How do you measure SEO?",
        paragraphs: [
          "Rank tracking alone isn't enough. Split Search Console queries into branded and non-branded; on most sites early traffic comes from people who already know you, which creates an illusion of growth. The metric that matters is non-branded clicks and what they contribute to conversions in GA4.",
        ],
        bullets: [
          "Search Console › Performance: impressions, clicks, CTR, average position by query and page",
          "Search Console › Pages: indexed pages and reasons for exclusion",
          "GA4: Organic Search sessions, conversions, leads and revenue",
          "Search Console › Links: referring domains",
          "Rhythm: indexing weekly, queries and positions every 2 to 4 weeks, traffic and conversions monthly",
        ],
      },
      {
        heading: "How do you choose an SEO consultant?",
        paragraphs: [
          "Google's own questions are a good start. Ask for past examples, whether they follow Google's guidelines, what results to expect by when, and how they measure success. For an audit, give read-only Search Console access.",
          "Three red flags: a number one guarantee, bundles of backlinks sold by count, and monthly reports that don't explain the work done. There's no such thing as 'priority submit' to Google.",
        ],
      },
    ],
    faq: [
      { question: "What is SEO in simple terms?", answer: "SEO is the technical, content and authority work that helps a website rank higher in the unpaid results of search engines for relevant queries. You don't pay per click, but results take months." },
      { question: "Can I do SEO myself?", answer: "Yes. Search Console, Keyword Planner and PageSpeed Insights are free, and the basics on a small site don't require deep technical skills. Expert help pays off in competitive markets and large site migrations." },
      { question: "Is SEO better than Google Ads?", answer: "They complement each other. Ads bring clicks immediately but stop when the budget does; SEO starts slowly but compounds. If you need sales now, start with ads and build organic pages for the queries that prove profitable." },
      { question: "Can I use AI to write SEO content?", answer: "Yes. Google looks at value, not method. The problem is producing many pages that add no value, which counts as scaled content abuse. Use AI for drafts and add real experience, verified sources and original calculations." },
      { question: "How do I appear in AI Overviews?", answer: "According to Google, nothing special is required: the page must be indexed and eligible for a snippet. In practice, pages that answer directly in the first sentence with sourced, original information are easier to cite." },
    ],
    howTo: {
      name: "How to do SEO step by step",
      description: "Start an SEO program on a new or small site.",
      steps: [
        { name: "Set up measurement", text: "Connect Search Console and GA4, submit your sitemap and record starting numbers." },
        { name: "Pick queries with demand", text: "Confirm monthly volume in Keyword Planner and drop topics with no demand." },
        { name: "Confirm intent", text: "Search the query, note the result types and list what the top three pages are missing." },
        { name: "Write the page", text: "Answer directly in the first paragraph, use question-style subheadings, examples and sources." },
        { name: "Tune on-page elements", text: "Add a unique title and description, one H1, a readable URL and matching structured data." },
        { name: "Add internal links", text: "Link to the new page from strong pages and from it to related pages." },
        { name: "Measure and earn authority", text: "After a few weeks read queries and positions, strengthen pages and create assets worth linking to." },
      ],
    },
    relatedToolKey: "llms-txt",
    resources: [
      { label: "Conversion Rate Calculator", href: "/en/free-tools/conversion-rate-calculator/" },
      { label: "Gross Profit Margin Calculator", href: "/en/free-tools/gross-profit-margin-calculator/" },
      { label: "llms.txt Generator", href: "/en/free-tools/llms-txt-generator/" },
      { label: "UTM Builder", href: "/en/free-tools/utm-builder/" },
      { label: "What Is GEO?", href: "/en/blog/what-is-geo-generative-engine-optimization/" },
      { label: "What Is llms.txt and Does It Work?", href: "/en/blog/what-is-llms-txt-does-it-work/" },
      { label: "What Is Google Ads and How Does It Work?", href: "/en/blog/what-is-google-ads-how-it-works/" },
      { label: "What Are UTM Parameters?", href: "/en/blog/what-are-utm-parameters/" },
      { label: "Google: SEO Starter Guide", href: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide", external: true },
      { label: "Google: How Search works", href: "https://developers.google.com/search/docs/fundamentals/how-search-works", external: true },
      { label: "Google: Do you need an SEO?", href: "https://developers.google.com/search/docs/fundamentals/do-i-need-seo", external: true },
      { label: "Google: AI features and your website", href: "https://developers.google.com/search/docs/appearance/ai-features", external: true },
      { label: "Google: Spam policies", href: "https://developers.google.com/search/docs/essentials/spam-policies", external: true },
      { label: "Google Search Status Dashboard: ranking updates", href: "https://status.search.google.com/products/rGHU1u87FJnkP6W2GwMi/history", external: true },
      { label: "Ahrefs: AI Overviews reduce clicks by 58% (update)", href: "https://ahrefs.com/blog/ai-overviews-reduce-clicks-update", external: true },
    ],
  },
  {
    slug: "what-is-dropshipping-how-it-works",
    seoTitle: "What Is Dropshipping? How It Works and Real Profit Math",
    title: "What Is Dropshipping? How It Works, Profit Math Including Returns, Supplier Checks and Seller Responsibilities (2026)",
    description:
      "Dropshipping means selling without stock while a supplier ships to the customer. See how it works, the profit math including returns, and supplier checks.",
    category: "performans-pazarlama",
    tldr: [
      "Dropshipping is an e-commerce model where you list products without holding stock and a supplier ships each order directly to the customer. Inventory risk falls, but you remain the seller, so late deliveries and returns are your responsibility.",
      "Cross-border dropshipping got harder. The US ended the $800 duty-free de minimis exemption for all countries in August 2025, and Turkey ended its €30 simplified route in February 2026. A domestic supplier is now usually the safer choice.",
      "The real calculation includes returns. Example: $90 price, $45 product, 18% commission, $8.50 shipping, $1.20 processing, $9 ads → $10.10 per order. With 10% returns the expected profit drops to $6.37; if the supplier refuses returns, it's $1.87.",
      "In the same example ads above $15.37 per order lose money, so breakeven ROAS is 5.86. With $500 in monthly fixed costs you need 79 orders just to break even.",
      "Dropshipping isn't passive income: customer service, stock checks and returns are daily work. Place a test order and calculate each product with returns before you start.",
    ],
    publishedAt: "2026-11-04",
    readingMinutes: 10,
    tags: ["Dropshipping", "E-commerce", "Profit Margin", "Marketplaces", "Suppliers"],
    sections: [
      {
        heading: "What is dropshipping? (Short answer)",
        paragraphs: [
          "Dropshipping is an e-commerce model where you sell products online without keeping them in stock. The customer orders and pays you, you pass the order to a supplier, and the supplier ships directly to the customer. You earn the difference between the customer's price and what you pay the supplier and everyone else along the way.",
          "The appeal is not tying cash up in inventory. The cost is thin margins and little control: you don't manage quality, packaging or dispatch speed, but the customer still holds you responsible. This guide covers how the model works, how to calculate profit and when not to start. It doesn't cover taxes; ask an accountant.",
        ],
      },
      {
        heading: "How does dropshipping work? The order flow",
        paragraphs: [
          "A typical order has five steps. Most failures appear in the delay between steps two and three: if an item shows as in stock with you but has sold out at the supplier, you have to cancel.",
        ],
        bullets: [
          "1. You list the supplier's products at your own price, manually or through a product feed",
          "2. The customer orders and pays your store",
          "3. You forward the order and pay the supplier",
          "4. The supplier ships to the customer and tracking is passed on",
          "5. You handle complaints and returns, then settle with the supplier",
        ],
      },
      {
        heading: "How is dropshipping different from other models?",
        paragraphs: [
          "The difference is who holds the product and the risk.",
        ],
        bullets: [
          "Stocked retail: you buy wholesale. Lower unit cost and more control, but unsold stock is yours",
          "Dropshipping: the supplier holds the product. Low capital, thin margin, limited control",
          "Fulfillment: you own the stock, a provider stores and ships it",
          "Print on demand: the item is produced with your design once ordered",
          "Affiliate marketing: you aren't the seller; you earn commission on referred sales and carry no return duty",
        ],
      },
      {
        heading: "Is dropshipping legal? What are your responsibilities?",
        paragraphs: [
          "Dropshipping is generally a legal business model, but 'the supplier ships it' doesn't transfer responsibility. Consumer law treats you as the seller. Rules vary by country, so check yours. In the EU, consumers generally have a 14-day right of withdrawal on distance purchases. In Turkey, sellers must ship within 30 days unless another date was promised, the customer can withdraw within 14 days, and e-commerce businesses must register with the ETBİS system before starting.",
          "Platforms add their own rules. Amazon's policy is explicit: dropshipping is allowed only if it's clear to the buyer that you are the seller of record, no other seller's name can appear on packing slips or packaging, and you handle returns. This is general information, not legal advice.",
        ],
      },
      {
        heading: "Does cross-border dropshipping still make sense in 2026?",
        paragraphs: [
          "Less than it used to. The model relied on low-value parcels clearing customs cheaply, and that door is closing. The US suspended the $800 de minimis exemption for all countries on August 29, 2025. In Turkey, a rule published on January 7, 2026 ended the €30 simplified route on February 6, so every overseas order now goes through customs regardless of value.",
          "Delivery times and landed costs became harder to predict, and returning a low-value item overseas often costs more than the item. Check current rules with a customs broker before you plan around cross-border shipping. We don't calculate duties here. In practice, a supplier in the customer's own country is usually the safer starting point.",
        ],
      },
      {
        heading: "Where should you dropship: a marketplace or your own store?",
        paragraphs: [
          "Your channel sets your profit structure. Marketplaces bring ready demand and take a commission; your own store has no commission, but you buy the traffic. The math below shows the difference.",
        ],
        bullets: [
          "Marketplaces: ready demand, heavy competition, commission, and late shipments can hurt your seller rating",
          "Your own store (Shopify, ikas, WordPress): you own the brand and customer data, but need ad budget and trust",
          "Instagram and TikTok: good for product discovery, but you still need a store for measurement and returns",
        ],
      },
      {
        heading: "How do you find and vet a dropshipping supplier?",
        paragraphs: [
          "Your supplier sets the quality of the business. Skip 'best supplier' lists published by companies selling their own service, and run this check instead.",
          "Place a test order to your own address before going live. Time it, open the package and try a return once. Half a day of checking prevents most first-month complaints.",
        ],
        bullets: [
          "Stock sync: does the product feed refresh several times a day? Stale stock means cancellations",
          "Dispatch time: is the cutoff written down?",
          "Returns: do they take customer returns back, on what terms, and when does money return? This is the most important line in your math",
          "Packaging: does their priced invoice or advertising end up in the box?",
          "Product documents: brand authorization, warranty, safety documents. Counterfeits can get your account closed",
          "Exclusivity: how many sellers use the same photos? If price is the only difference, margin disappears",
          "Backup: find a second source for your best sellers",
        ],
      },
      {
        heading: "How do you calculate dropshipping profit? An example with returns",
        paragraphs: [
          "Many guides show profit without returns, yet returns are the critical line in dropshipping. You need two formulas. Completed order profit = Price − Product cost − Commission − Shipping − Processing − Ads. Expected profit = (1 − Return rate) × Completed order profit − Return rate × Return loss. Return loss is outbound and return shipping, processing, spent ad cost and, if the supplier refuses the item, the product cost.",
          "Marketplace example: $90 price, $45 product, 18% commission ($16.20), $8.50 shipping, $1.20 processing, $9 ads. Completed order profit is $10.10, or 11.2%. At a 10% return rate, return loss is $8.50 + $8.50 + $1.20 + $9 = $27.20. Expected profit: 0.9 × $10.10 − 0.1 × $27.20 = $6.37 (7.1%). If the supplier refuses returns, the loss becomes $72.20 and expected profit falls to $1.87 (2.1%).",
          "We assume the commission is refunded on returns; check your contract. Taxes aren't included in these example figures. Run your own numbers in the marketplace profit calculator.",
        ],
        bullets: [
          "0% returns: $10.10",
          "10% returns, supplier takes them back: $6.37",
          "20% returns, supplier takes them back: $2.64",
          "10% returns, item is lost: $1.87",
          "10% returns, $15 ads: $0.37 (right at breakeven)",
          "Same item stocked at $36 (10% returns): $14.47, but 100 units tie up $3,600",
        ],
      },
      {
        heading: "How much can you spend on ads per order?",
        paragraphs: [
          "Maximum ad spend = (1 − Return rate) × Profit before ads − Return rate × Non-ad return loss. In the marketplace example: 0.9 × $19.10 − 0.1 × $18.20 = $15.37. Breakeven ROAS is $90 / $15.37 = 5.86. Below that in your ad dashboard, every order loses money. If the supplier refuses returns, the limit falls to $10.87 and the threshold rises to 8.28.",
          "Own-store example: the same $90 item with a 3% payment fee ($2.70) instead of commission. Profit before ads is $32.60, maximum ad spend $27.52, breakeven ROAS 3.27. The threshold looks far easier, but traffic doesn't arrive by itself and conversion rates tend to be lower. Compare breakeven ROAS with your own test results before you decide.",
        ],
      },
      {
        heading: "How much does dropshipping make? Monthly breakeven",
        paragraphs: [
          "Ignore income claims; earnings depend on product, channel and return rate. Use Breakeven orders = Monthly fixed costs / Expected profit. With $500 a month for the store, integrations and bookkeeping, 79 orders at $6.37 only cover costs. At 200 orders you keep about $774. Compare that with your hours.",
          "That also answers the capital question. No inventory doesn't mean no capital: you need money for test ads, setup and returns. If you pay suppliers before a marketplace pays you, cash is tied up too; 200 orders means $9,000 in product cost.",
        ],
      },
      {
        heading: "What are the most common dropshipping mistakes?",
        paragraphs: [
          "Most failed attempts share the same few errors.",
        ],
        bullets: [
          "Pricing with a flat markup that ignores returns and ads. Know the difference between margin and markup",
          "Listing products without a test order",
          "Not getting return terms in writing",
          "Uploading hundreds of products at once instead of controlling 10 to 20",
          "Choosing fragile or bulky items: dimensional weight raises shipping and fragility raises returns",
          "Entering high-return categories without modeling them",
          "Selling counterfeit or trademarked goods",
          "Managing ads by clicks instead of ROAS",
        ],
      },
    ],
    faq: [
      { question: "How much money do you need to start dropshipping?", answer: "You don't buy stock, but you do need cash for setup, test ads and returns. If you pay suppliers before a marketplace pays you, money is tied up during that gap too. Work out your number from your fixed costs and test budget." },
      { question: "Who pays for returns in dropshipping?", answer: "You are responsible to the customer as the seller. How the cost is split with the supplier depends on your agreement, so get the terms in writing." },
      { question: "Is dropshipping profitable?", answer: "It depends. Margins are lower than stocked retail, and ads plus returns erode them fast. In our example a $90 item earns $6.37 per order in expected profit. Calculate your product with returns first, and don't treat it as passive income." },
      { question: "Can I dropship on Amazon?", answer: "Yes, with conditions. Amazon requires that you be the seller of record, that no other seller's name appear on packaging or slips, and that you handle returns. Buying from another retailer and having them ship to your customer isn't acceptable." },
      { question: "Is dropshipping passive income?", answer: "No. Automation helps, but stock checks, customer service, returns and ad management are ongoing work." },
    ],
    howTo: {
      name: "How to start dropshipping step by step",
      description: "Start selling without stock using a domestic supplier.",
      steps: [
        { name: "Choose a channel and product", text: "Pick small, light, sturdy products with proven demand; decide between a marketplace and your own store." },
        { name: "Talk to suppliers", text: "Confirm stock sync, dispatch times and return terms in writing with two or three suppliers." },
        { name: "Calculate profit with returns", text: "Include commission, shipping, ads and return loss to find expected profit and breakeven ROAS." },
        { name: "Complete registrations", text: "Finish business registration and get accounting advice before you start." },
        { name: "Place a test order", text: "Order to your own address and measure timing, packaging and the return process." },
        { name: "Start small and measure", text: "Launch with 10 to 20 products, test ads on a small budget and change course below breakeven ROAS." },
      ],
    },
    relatedToolKey: "marketplace",
    resources: [
      { label: "Marketplace Profit Calculator", href: "/en/free-tools/marketplace-profit-calculator/" },
      { label: "Gross Profit Margin Calculator", href: "/en/free-tools/gross-profit-margin-calculator/" },
      { label: "Dimensional Weight Calculator", href: "/en/free-tools/dimensional-weight-calculator/" },
      { label: "Shipping Cost Calculator", href: "/en/free-tools/shipping-cost-calculator/" },
      { label: "ROAS Calculator", href: "/en/free-tools/roas-calculator/" },
      { label: "Trendyol Commission Rates", href: "/en/blog/trendyol-commission-rates/" },
      { label: "How to Calculate Profit Margin", href: "/en/blog/how-to-calculate-profit-margin/" },
      { label: "How to Run Instagram Ads", href: "/en/blog/how-to-run-instagram-ads/" },
      { label: "Amazon Seller Central: Drop shipping policy reminder", href: "https://sellercentral.amazon.com/forums/t/drop-shipping-policy-reminder/839620", external: true },
      { label: "Thompson Coburn: De minimis exemption suspended globally", href: "https://www.thompsoncoburn.com/insights/trump-administration-indefinitely-suspends-de-minimis-exemption-for-commercial-shipments-globally/", external: true },
      { label: "Turkey Ministry of Trade: Distance contracts", href: "https://tuketici.ticaret.gov.tr/yayinlar/tuketici-bilgi-rehberi/mesafeli-sozlesmeler-hakkinda-bilgilendirme", external: true },
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
  "shipping-cost": {
    tr: {
      href: "/ucretsiz-araclar/kargo-ucreti-hesaplama",
      label: "Kargo Ücreti Hesaplama",
      description: "Tarifenizle koli başı kargo ücretini ve ücretsiz kargo eşiğini hesaplayın.",
    },
    en: {
      href: "/en/free-tools/shipping-cost-calculator",
      label: "Shipping Cost Calculator",
      description: "Cost per parcel from your rate card, plus the free shipping threshold.",
    },
  },
  discount: {
    tr: {
      href: "/ucretsiz-araclar/indirim-hesaplama",
      label: "İndirim Hesaplama",
      description: "İndirimli fiyatı, indirim oranını ve indirimin kârınıza etkisini hesaplayın.",
    },
    en: {
      href: "/en/free-tools/discount-calculator",
      label: "Discount Calculator",
      description: "Sale price, percent off and the profit impact of a discount.",
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
