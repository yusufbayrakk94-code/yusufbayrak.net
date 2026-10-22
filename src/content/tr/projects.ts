import type { ProjectDetail } from "../types";

export const projectsPage = {
  listPath: "/projeler",
  seoTitle: "Projeler — SaaS, MCP ve Otomasyon İşleri | Yusuf Bayrak",
  seoDescription:
    "AdGusto, Brandog & Marka-MCP ve Büyüme & Otomasyon Altyapıları başta olmak üzere geliştirdiğim ürün ve projeler.",
  heading: "Projeler",
  intro:
    "Meta Ads kütüphaneleri, marka tescil otomasyonu ve veri odaklı büyüme altyapıları üzerine geliştirdiğim projeler. Her biri gerçek bir sorunu ölçülebilir sonuçlarla çözmeyi hedefler.",
  divider: "Projeler",
  detailBaseHref: "/projeler",
  backToProjects: "Projelere Dön",
  challengesDivider: "Zorluklar",
  featuresDivider: "Özellikler",
  impactLabel: "Etki",
  sourceCode: "Kaynak Kod",
  liveDemo: "Canlı Demo",
  notFoundTitle: "Hata: Proje Bulunamadı — Yusuf Bayrak",
  notFoundText: "Aradığınız proje mevcut değil.",
};

export const projects: ProjectDetail[] = [
  {
    slug: "adgusto",
    name: "AdGusto",
    description: "Meta, Instagram, Google ve Linkedin reklam yönetimi tek panelde. Yapay zeka gerekçeli öneriler verir, siz onaylarsınız; gelen müşteri adaylarını sesli asistan arar.",
    fullDescription: "AdGusto, reklam hesaplarınızı tek panelde toplayan yapay zekâ destekli bir reklam yönetimi platformudur. Yapay zekâ kampanyalarınızı sürekli izleyip gerekçesiyle öneriler hazırlar, siz onaylarsınız; onayınız olmadan hiçbir değişiklik yapılmaz. Gelen müşteri adaylarını ise sesli asistan dakikalar içinde arar.",
    stack: ["Yapay Zekâ", "Meta Ads", "Google Ads", "LinkedIn Ads", "Sesli Asistan"],
    impact: "Reklam yönetimini tek panelde toplar",
    challenges: [
      "Meta, Instagram, Google, YouTube ve LinkedIn hesaplarını tek panelde birleştirmek",
      "Yapay zekâ önerilerini gerekçesi ve beklenen etkisiyle açıklanabilir kılmak",
      "Hiçbir değişikliği onaysız yapmayan, her adımı kayıt altına alan bir onay akışı kurmak",
      "Gelen müşteri adaylarını dakikalar içinde arayan sesli asistanı reklam akışına bağlamak",
    ],
    features: [
      "Gerekçeli yapay zekâ önerileri ve tek adımda geri alınabilen onay akışı",
      "Meta Ads, Instagram, Google Ads, YouTube ve LinkedIn Ads entegrasyonu",
      "Müşteri adaylarını arayıp görüşme özetini panele ekleyen sesli asistan",
      "Reklam metni ve görsel üreten kreatif stüdyo",
      "Ajanslar için müşteri bazlı çalışma alanları ve ortak raporlar",
    ],
    externalUrl: "https://adgusto.app",
  },
  {
    slug: "brandog-marka-mcp",
    name: "Brandog & Marka-MCP",
    description: "TÜRKPATENT veritabanını Model Context Protocol (MCP) ile yapay zekaya bağlayan; marka araştırma, tescil ve süreç yönetimini otomatikleştiren platform.",
    fullDescription: "Brandog & Marka-MCP, TÜRKPATENT veritabanını Yapay Zeka Model Context Protocol (MCP) altyapısıyla güçlendirerek marka tescil araştırma, takip ve süreç yönetimini tek bir platformda birleştiren akıllı bir otomasyon çözümüdür.",
    stack: ["MCP", "Yapay Zeka", "TÜRKPATENT", "Node.js", "PostgreSQL"],
    impact: "Marka tescil süreçlerini otomatize eder",
    challenges: [
      "TÜRKPATENT verileriyle güvenilir ve hızlı entegrasyon kurmak",
      "MCP protokolüne uygun bağlam tabanlı AI akışları tasarlamak",
      "Marka hukuku süreçlerini otomasyona uyarlamak",
      "Kullanıcılar için anlaşılır ve güven veren bir arayüz sunmak",
    ],
    features: [
      "TÜRKPATENT veritabanı entegrasyonu",
      "MCP tabanlı AI destekli araştırma",
      "Marka tescil süreç takibi",
      "Otomatik raporlama ve uyarılar",
    ],
    externalUrl: "https://brandog.lovable.app",
  },
  {
    slug: "buyume-otomasyon-altyapilari",
    name: "Büyüme & Otomasyon Altyapıları",
    description: "Modern low-code araçlar, otomasyon sistemleri ve veri odaklı stratejilerle markalar için kurguladığım sürdürülebilir büyüme motorları.",
    fullDescription: "Markalar için low-code araçlar, otomasyon sistemleri ve veri odaklı stratejilerle tasarlanmış sürdürülebilir büyüme motorları. Amaç; tekrar eden işleri minimize etmek, veriye dayalı kararları hızlandırmak ve ölçeklenebilir pazarlama & operasyon altyapıları kurmaktır.",
    stack: ["Low-code", "Otomasyon", "Veri Stratejisi", "n8n", "Make", "Airtable"],
    impact: "Sürdürülebilir büyüme motorları kurar",
    challenges: [
      "Farklı veri kaynaklarını tek bir otomasyon akışında birleştirmek",
      "Low-code araçlarla kurumsal ölçekte güvenilir sistemler inşa etmek",
      "Büyüme metriklerini gerçek zamanlı izlenebilir hale getirmek",
      "Süreçleri otomatikleştirirken insan denetimini korumak",
    ],
    features: [
      "Low-code otomasyon akışları",
      "Veri odaklı büyüme panoları",
      "Pazarlama ve operasyon entegrasyonları",
      "Ölçeklenebilir süreç altyapısı",
    ],
  },
];
