import type { ProjectDetail } from "../types";

export const projectsPage = {
  listPath: "/projeler",
  seoTitle: "Projeler | Yusuf Bayrak",
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
    description: "Meta Ads kütüphane entegrasyonuyla rakip analizini ve kreatif yönetimini hızlandıran SaaS projesi.",
    fullDescription: "AdGusto, Meta Ads kütüphane entegrasyonu üzerinden rakiplerin kreatiflerini analiz etmeyi, kendi kreatif süreçlerini yönetmeyi ve ekiplerin reklam üretim hızını artırmayı sağlayan bir SaaS platformudur.",
    stack: ["SaaS", "Meta Ads", "Kreatif Yönetimi", "React", "Node.js"],
    impact: "Rakip analizi ve kreatif yönetimini hızlandırır",
    challenges: [
      "Meta Ads kütüphanesinden yüksek hacimli veriyi düzenli toplamak",
      "Rakip kreatiflerini anlamlı kategorilere ayırmak",
      "Ekipler için hızlı ve karar destekleyici bir arayüz tasarlamak",
      "Ölçeklenebilir SaaS altyapısını maliyet-etkin yönetmek",
    ],
    features: [
      "Rakip kreatif kütüphanesi ve filtreleme",
      "Kreatif yönetim panosu",
      "Meta Ads kütüphane entegrasyonu",
      "Ekip iş birliği araçları",
    ],
    externalUrl: "https://www.adgusto.app",
  },
  {
    slug: "brandog-marka-mcp",
    name: "Brandog & Marka-MCP",
    description: "TÜRKPATENT Veritabanına Yapay zeka Model Context Protocol (MCP) altyapısıyla bağlanan, güçlendirilmiş; marka tescil ve süreç yönetimini akıllı, otomatize bir yapıda buluşturan platform çözümü.",
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
