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
  | "cac"
  | "churn"
  | "ltv"
  | "roas"
  | "utm"
  | "llms-txt";

export interface BlogPost {
  slug: string;
  title: string;
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
    readingMinutes: 9,
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
    readingMinutes: 8,
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
    readingMinutes: 10,
    tags: ["n8n", "Otomasyon", "LLM", "Lead Enrichment"],
    sections: [
      {
        heading: "n8n Neden Zapier'den Daha Güçlü?",
        paragraphs: [
          "n8n; self-hosted çalışabildiği için veri egemenliği ve maliyet avantajı sağlar. 400+ native entegrasyon dışında custom HTTP node ile herhangi bir API'ye bağlanabilir. Karmaşık dallanma (if/switch) ve JavaScript node'ları, Zapier'de mümkün olmayan senaryoları çözer.",
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
      },
      {
        heading: "LLM Prompting İpuçları",
        paragraphs: [
          "ICP fit skorlaması için LLM'e temiz bir kriter listesi verin. 'Bu şirket bizim ICP'mize ne kadar uyuyor?' gibi soyut sorular yerine, sektör/employee count/teknoloji üzerinden puanlama isteyin. Structured output (JSON schema) kullanmak, downstream node'ların veriyi kırmadan işlemesini sağlar.",
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
          text: "n8n'de bir Webhook trigger oluşturun ve form aracınızdan (Typeform, HubSpot, custom form) gelen lead payload'unu buraya yönlendirin.",
        },
        {
          name: "Apollo veya Clay ile enrichment yapın",
          text: "Gelen e-posta üzerinden Apollo/Clay API'sini çağırarak şirket adı, employee count, sektör ve teknoloji stack'i bilgilerini çekin.",
        },
        {
          name: "OpenAI ile ICP fit skorlayın",
          text: "Zenginleştirilmiş veriyi OpenAI node'una gönderin ve structured output (JSON schema) ile 0-100 arasında ICP fit skoru üretin.",
        },
        {
          name: "CRM'e yazın ve owner atayın",
          text: "HubSpot veya Pipedrive node'u ile zenginleştirilmiş kaydı oluşturun, skora göre uygun sales owner'ı otomatik atayın.",
        },
        {
          name: "Slack bildirimi gönderin",
          text: "Skor eşiğin (örn. 70+) üstündeyse SDR kanalına Slack mesajı gönderin; düşük skorluları nurture listesine ekleyin.",
        },
      ],
    },
    relatedToolKey: "llms-txt",
  },
  {
    slug: "saas-metrikleri-arr-cac-ltv",
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
    readingMinutes: 7,
    tags: ["SaaS", "ARR", "LTV", "CAC", "Churn"],
    sections: [
      {
        heading: "ARR ve MRR: Büyüklüğün Ölçüsü",
        paragraphs: [
          "Annual Recurring Revenue (ARR), abonelik gelirlerinin yıllıklandırılmış hâlidir. Aylık faturalanan bir SaaS için MRR × 12 formülü kullanılır. Yatırımcılar için ARR; şirketin gerçek büyüklüğünü ve büyüme hızını en net gösteren metriktir.",
        ],
      },
      {
        heading: "CAC ve LTV: Birim Ekonomisi",
        paragraphs: [
          "Customer Acquisition Cost (CAC), bir müşteriyi kazanmanın toplam pazarlama+satış maliyetidir. Lifetime Value (LTV), müşterinin ömrü boyunca getirdiği net kârdır. Sağlıklı SaaS'ta LTV/CAC oranı en az 3:1 olmalı; CAC geri kazanımı 12 ayı geçmemelidir.",
        ],
      },
      {
        heading: "Churn ve NRR: Retention Hikayesi",
        paragraphs: [
          "Aylık gross churn %5'in üstündeyse büyüme, kayıp müşterilerin yerini doldurmakla geçer. Net Revenue Retention (NRR) ise upsell/expansion'ı da hesaba katar; %110+ NRR olan SaaS'lar, hiç yeni müşteri kazanmasa bile büyür.",
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
    ],
    relatedToolKey: "arr",
  },
  {
    slug: "meta-ads-ogrenme-asamasindan-cikma-taktikleri",
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
    readingMinutes: 8,
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
    readingMinutes: 10,
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

export const BLOG_SLUG_PAIRS: Array<{ tr: string; en: string }> = [
  { tr: "b2b-lead-generation-huni-tasarimi", en: "b2b-lead-generation-funnel-design" },
  { tr: "google-ads-performans-optimizasyonu", en: "google-ads-performance-optimization" },
  { tr: "n8n-ile-lead-enrichment-otomasyonu", en: "n8n-lead-enrichment-automation" },
  { tr: "saas-metrikleri-arr-cac-ltv", en: "saas-metrics-arr-cac-ltv" },
  { tr: "meta-ads-ogrenme-asamasindan-cikma-taktikleri", en: "meta-ads-exit-learning-phase-tactics" },
  { tr: "b2b-lead-generation-maliyetleri-nasil-dusurulur", en: "how-to-reduce-b2b-lead-generation-costs" },
];


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
    readingMinutes: 9,
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
    readingMinutes: 8,
    tags: ["Google Ads", "PMax", "ROAS", "Performance"],
    sections: [
      {
        heading: "Get Conversion Tracking Right",
        paragraphs: [
          "Smart Bidding is only as good as the signal you feed it. Without Enhanced Conversions, GA4 server-side tracking and offline conversion import (closed-won deals fed back from the CRM), tROAS/tCPA bidding won't hit target.",
        ],
      },
      {
        heading: "Performance Max Asset Group Segmentation",
        paragraphs: [
          "Instead of one giant asset group, splitting by category, margin or season gives the algorithm cleaner signal. Budget flows to high-margin products and ROAS typically lifts 25–40%.",
        ],
      },
      {
        heading: "Search Terms Report and Negative Keyword Discipline",
        paragraphs: [
          "Reviewing the search terms report weekly is critical to cut spend on irrelevant queries. Broad match and PMax especially need a constantly growing negative keyword list.",
        ],
        bullets: [
          "Brand protection list",
          "Out-of-industry query list",
          "Informational queries (how to, what is, examples) — filter them out in B2B if they don't convert",
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
    readingMinutes: 10,
    tags: ["n8n", "Automation", "LLM", "Lead Enrichment"],
    sections: [
      {
        heading: "Why n8n Beats Zapier",
        paragraphs: [
          "Because n8n can be self-hosted, it wins on data sovereignty and cost. Beyond 400+ native integrations, a custom HTTP node connects to any API. Rich branching (if/switch) and JavaScript nodes make scenarios possible that Zapier cannot handle.",
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
      },
      {
        heading: "LLM Prompting Tips",
        paragraphs: [
          "Give the model a clean criteria list for ICP fit scoring. Instead of vague questions like 'how well does this company match our ICP?', ask for a score based on industry, employee count and tech. Use structured output (JSON schema) so downstream nodes can process the data without breaking.",
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
          text: "Create a Webhook trigger in n8n and point your form tool (Typeform, HubSpot, custom form) at it so lead payloads land here.",
        },
        {
          name: "Enrich with Apollo or Clay",
          text: "Call the Apollo/Clay API by email to pull company name, employee count, industry and tech stack for the lead.",
        },
        {
          name: "Score ICP fit with OpenAI",
          text: "Pass the enriched data into an OpenAI node and use structured output (JSON schema) to produce an ICP fit score between 0 and 100.",
        },
        {
          name: "Write to CRM and assign owner",
          text: "Use a HubSpot or Pipedrive node to create the enriched contact and auto-assign the right sales owner based on the score.",
        },
        {
          name: "Send a Slack notification",
          text: "If the score is above a threshold (e.g. 70+), post to the SDR Slack channel; drop lower scores into a nurture list.",
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
    readingMinutes: 7,
    tags: ["SaaS", "ARR", "LTV", "CAC", "Churn"],
    sections: [
      {
        heading: "ARR and MRR: Measuring Size",
        paragraphs: [
          "Annual Recurring Revenue (ARR) is the annualized form of subscription revenue. For monthly-billed SaaS, ARR = MRR × 12. For investors, ARR is the clearest single measure of company size and growth rate.",
        ],
      },
      {
        heading: "CAC and LTV: Unit Economics",
        paragraphs: [
          "Customer Acquisition Cost (CAC) is the total marketing + sales cost to acquire one customer. Lifetime Value (LTV) is the net profit that customer brings across their tenure. Healthy SaaS runs at an LTV/CAC of at least 3:1 with CAC payback under 12 months.",
        ],
      },
      {
        heading: "Churn and NRR: The Retention Story",
        paragraphs: [
          "If monthly gross churn tops 5%, growth is spent filling the leaky bucket. Net Revenue Retention (NRR) also counts upsell/expansion — SaaS companies above 110% NRR grow even without net-new customers.",
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
    ],
    relatedToolKey: "arr",
  },
  {
    slug: "meta-ads-exit-learning-phase-tactics",
    title: "How to Exit Meta Ads Learning Phase Fast: 5 Tactics",
    description:
      "Five practical budget, event, audience and creative tactics to finish the Meta Ads Learning Phase within 7 days.",
    category: "performans-pazarlama",
    tldr: [
      "Meta Ads Learning Phase completes when an ad set collects 50 optimization events within 7 days — otherwise CPA stays volatile.",
      "Budgets that are too small, events set too deep in the funnel and frequent edits reset learning.",
      "Broad audience + right event + daily budget = expected event volume is the formula that shortens exit time.",
      "5 tactics: pick the right event, consolidate budget with CBO, expand creative library, apply edit discipline, and test Advantage+.",
    ],
    publishedAt: "2026-07-20",
    readingMinutes: 8,
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
    readingMinutes: 10,
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
      { label: "LTV Calculator", href: "/en/free-marketing-tools/ltv-calculator" },
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
  arr: {
    tr: {
      href: "/ucretsiz-araclar/arr-hesaplayici",
      label: "ARR Hesaplayıcı",
      description: "MRR'den yıllık yinelenen gelirinizi anında hesaplayın.",
    },
    en: {
      href: "/en/free-marketing-tools/arr-calculator",
      label: "ARR Calculator",
      description: "Compute annual recurring revenue from your MRR instantly.",
    },
  },
  cac: {
    tr: {
      href: "/ucretsiz-araclar/cac-hesaplayici",
      label: "CAC Hesaplayıcı",
      description: "Müşteri edinme maliyetinizi hızlıca hesaplayın.",
    },
    en: {
      href: "/en/free-marketing-tools/cac-calculator",
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
      href: "/en/free-marketing-tools/churn-rate-calculator",
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
      href: "/en/free-marketing-tools/ltv-calculator",
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
      href: "/en/free-marketing-tools/roas-calculator",
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
      href: "/en/free-marketing-tools/utm-builder",
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
      href: "/en/free-marketing-tools/llms-txt-generator",
      label: "llms.txt Generator",
      description: "Generate your site's llms.txt file for AI crawlers.",
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