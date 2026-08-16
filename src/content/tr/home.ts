import type { ProjectSummary } from "../types";

export const home = {
  path: "/",
  seoTitle: "Yusuf Bayrak | Dijital Pazarlama Uzmanı",
  seoDescription:
    "Yusuf Bayrak kişisel web sitesi. B2B performans pazarlama analizleri, dijital büyüme kurguları ve ücretsiz SaaS hesaplama araçları.",
  heroLabel: "Dijital Pazarlama | Lead Generation | Ürün Geliştirme",
  heroHeading: "Merhaba, ben Yusuf Bayrak.",
  heroSubline:
    "Dijital Pazarlama Uzmanı olarak B2B ve e-ticaret markaları için web sitesi kurulumu, reklam yönetimi ve lead generation kurguları geliştiriyorum.",
  heroCta: "Projeleri Gör",
  heroCtaHref: "/projeler",
  featuredDivider: "Öne Çıkan Projeler",
  viewAll: "Tüm projeleri gör",
  viewAllHref: "/projeler",
  featured: [
    { slug: "adgusto", name: "AdGusto", description: "Meta Ads kütüphane entegrasyonuyla rakip analizini ve kreatif yönetimini hızlandıran SaaS projesi.", stack: ["SaaS", "Meta Ads", "Kreatif Yönetimi"], impact: "Rakip analizi ve kreatif yönetimini hızlandırır" },
    { slug: "brandog-marka-mcp", name: "Brandog & Marka-MCP", description: "TÜRKPATENT Veritabanına Yapay zeka Model Context Protocol (MCP) altyapısıyla bağlanan, güçlendirilmiş; marka tescil ve süreç yönetimini akıllı, otomatize bir yapıda buluşturan platform çözümü.", stack: ["MCP", "Yapay Zeka", "TÜRKPATENT"], impact: "Marka tescil süreçlerini otomatize eder" },
    { slug: "buyume-otomasyon-altyapilari", name: "Büyüme & Otomasyon Altyapıları", description: "Modern low-code araçlar, otomasyon sistemleri ve veri odaklı stratejilerle markalar için kurguladığım sürdürülebilir büyüme motorları.", stack: ["Low-code", "Otomasyon", "Veri Stratejisi"], impact: "Sürdürülebilir büyüme motorları kurar" },
  ] satisfies ProjectSummary[],
};
