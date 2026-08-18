export const site = {
  langLabel: "TR",
  // Kısa profil açıklaması — tek kaynak (single source of truth) olarak
  // llms.txt generator, JSON-LD Person açıklaması ve ana sayfa meta
  // description tarafından tüketilir. Değişirse index.html ve
  // src/content/tr/home.ts'teki metinleri de buradan güncelleyin.
  profileName: "Yusuf Bayrak",
  profileEmail: "yyusufbayrak@gmail.com",
  profileLinkedIn: "https://tr.linkedin.com/in/yyusuf-bayrak",
  profileDescription:
    "Dijital Pazarlama Uzmanı. B2B ve e-ticaret markaları için web sitesi kurulumu, performans reklam yönetimi ve lead generation kurguları geliştirir; süreçlerini yapay zeka destekli otomasyonlarla güçlendirir.",
  nav: [
    { href: "/", label: "Ana Sayfa" },
    { href: "/hakkimda", label: "Hakkımda" },
    { href: "/projeler", label: "Projeler" },
    { href: "/blog", label: "Blog" },
    { href: "/ucretsiz-araclar", label: "Ücretsiz Araçlar" },
    { href: "/iletisim", label: "İletişim" },
  ],
  navigationComment: "// Navigation",
  menuToggle: "Menüyü aç/kapat",
  themeToDark: "Karanlık moda geç",
  themeToLight: "Aydınlık moda geç",
  footerStyleguide: "Styleguide",
};
