// Route inventory used by SSG + sitemap generators. Kept in JS (no TS
// compile step required) and manually mirrored with src/i18n/routes.ts.
// Whenever a new locale route is added there, add it here too.

import fs from "node:fs";
import path from "node:path";

export const SITE_URL = "https://yusufbayrak.net";

// Hosting serves every prerendered route from a directory index and 301s the
// slash-less form to the slash form. Sitemap/llms.txt must therefore emit the
// final (slash-terminated) URL so crawlers never hit a redirect.
export function withSlash(p) {
  if (!p || p === "/") return "/";
  return p.endsWith("/") ? p : `${p}/`;
}

export const STATIC_TR = [
  "/",
  "/hakkimda",
  "/projeler",
  "/ucretsiz-araclar",
  "/ucretsiz-araclar/pazarlama-araclari",
  "/ucretsiz-araclar/saas-araclari",
  "/ucretsiz-araclar/e-ticaret-araclari",
  "/ucretsiz-araclar/arr-hesaplayici",
  "/ucretsiz-araclar/cac-hesaplayici",
  "/ucretsiz-araclar/churn-rate-hesaplayici",
  "/ucretsiz-araclar/ltv-hesaplayici",
  "/ucretsiz-araclar/roas-hesaplayici",
  "/ucretsiz-araclar/utm-link-olusturucu",
  "/ucretsiz-araclar/llms-txt-olusturucu",
  "/ucretsiz-araclar/brut-kar-marji-hesaplayici",
  "/ucretsiz-araclar/net-kar-marji-hesaplayici",
  "/ucretsiz-araclar/donusum-orani-hesaplayici",
  "/ucretsiz-araclar/mrr-hesaplayici",
  "/ucretsiz-araclar/arpa-hesaplayici",
  "/ucretsiz-araclar/nrr-hesaplayici",
  "/ucretsiz-araclar/rule-of-40-hesaplayici",
  "/ucretsiz-araclar/cac-geri-odeme-suresi-hesaplayici",
  "/ucretsiz-araclar/hangi-pazarlama-kanali-uygun",
  "/ucretsiz-araclar/trendyol-hepsiburada-kar-hesaplama",
  "/ucretsiz-araclar/desi-hesaplama",
  "/ucretsiz-araclar/reklam-butcesi-hesaplama",
  "/iletisim",
  "/blog",
  "/styleguide",
];

export const STATIC_EN = [
  "/en",
  "/en/about",
  "/en/projects",
  "/en/free-tools",
  "/en/free-tools/marketing-tools",
  "/en/free-tools/saas-tools",
  "/en/free-tools/ecommerce-tools",
  "/en/free-tools/arr-calculator",
  "/en/free-tools/cac-calculator",
  "/en/free-tools/churn-rate-calculator",
  "/en/free-tools/ltv-calculator",
  "/en/free-tools/roas-calculator",
  "/en/free-tools/utm-builder",
  "/en/free-tools/llms-txt-generator",
  "/en/free-tools/gross-profit-margin-calculator",
  "/en/free-tools/net-profit-margin-calculator",
  "/en/free-tools/conversion-rate-calculator",
  "/en/free-tools/mrr-calculator",
  "/en/free-tools/arpa-calculator",
  "/en/free-tools/nrr-calculator",
  "/en/free-tools/rule-of-40-calculator",
  "/en/free-tools/cac-payback-period-calculator",
  "/en/free-tools/marketing-channel-quiz",
  "/en/free-tools/marketplace-profit-calculator",
  "/en/free-tools/dimensional-weight-calculator",
  "/en/free-tools/ad-budget-calculator",
  "/en/contact",
  "/en/blog",
];

// Reciprocal pairs used to emit hreflang alternates in the sitemap.
export const ROUTE_PAIRS = [
  { tr: "/",                       en: "/en" },
  { tr: "/hakkimda",               en: "/en/about" },
  { tr: "/projeler",               en: "/en/projects" },
  { tr: "/ucretsiz-araclar",       en: "/en/free-tools" },
  { tr: "/iletisim",               en: "/en/contact" },
  { tr: "/ucretsiz-araclar/pazarlama-araclari", en: "/en/free-tools/marketing-tools" },
  { tr: "/ucretsiz-araclar/saas-araclari", en: "/en/free-tools/saas-tools" },
  { tr: "/ucretsiz-araclar/e-ticaret-araclari", en: "/en/free-tools/ecommerce-tools" },
  { tr: "/ucretsiz-araclar/arr-hesaplayici",         en: "/en/free-tools/arr-calculator" },
  { tr: "/ucretsiz-araclar/cac-hesaplayici",         en: "/en/free-tools/cac-calculator" },
  { tr: "/ucretsiz-araclar/churn-rate-hesaplayici",  en: "/en/free-tools/churn-rate-calculator" },
  { tr: "/ucretsiz-araclar/ltv-hesaplayici",         en: "/en/free-tools/ltv-calculator" },
  { tr: "/ucretsiz-araclar/roas-hesaplayici",        en: "/en/free-tools/roas-calculator" },
  { tr: "/ucretsiz-araclar/utm-link-olusturucu",     en: "/en/free-tools/utm-builder" },
  { tr: "/ucretsiz-araclar/llms-txt-olusturucu",     en: "/en/free-tools/llms-txt-generator" },
  { tr: "/ucretsiz-araclar/brut-kar-marji-hesaplayici", en: "/en/free-tools/gross-profit-margin-calculator" },
  { tr: "/ucretsiz-araclar/net-kar-marji-hesaplayici",  en: "/en/free-tools/net-profit-margin-calculator" },
  { tr: "/ucretsiz-araclar/donusum-orani-hesaplayici",  en: "/en/free-tools/conversion-rate-calculator" },
  { tr: "/ucretsiz-araclar/mrr-hesaplayici",           en: "/en/free-tools/mrr-calculator" },
  { tr: "/ucretsiz-araclar/arpa-hesaplayici",          en: "/en/free-tools/arpa-calculator" },
  { tr: "/ucretsiz-araclar/nrr-hesaplayici",           en: "/en/free-tools/nrr-calculator" },
  { tr: "/ucretsiz-araclar/rule-of-40-hesaplayici",    en: "/en/free-tools/rule-of-40-calculator" },
  { tr: "/ucretsiz-araclar/cac-geri-odeme-suresi-hesaplayici", en: "/en/free-tools/cac-payback-period-calculator" },
  { tr: "/ucretsiz-araclar/hangi-pazarlama-kanali-uygun",      en: "/en/free-tools/marketing-channel-quiz" },
  { tr: "/ucretsiz-araclar/trendyol-hepsiburada-kar-hesaplama", en: "/en/free-tools/marketplace-profit-calculator" },
  { tr: "/ucretsiz-araclar/desi-hesaplama", en: "/en/free-tools/dimensional-weight-calculator" },
  { tr: "/ucretsiz-araclar/reklam-butcesi-hesaplama", en: "/en/free-tools/ad-budget-calculator" },
  { tr: "/blog",                    en: "/en/blog" },
];

export const PROJECT_SLUGS = [
  "adgusto",
  "brandog-marka-mcp",
  "buyume-otomasyon-altyapilari",
];

// Blog TR<->EN slug pairs. Mirror of BLOG_SLUG_PAIRS in
// src/data/blogSlugPairs.ts (kept manually in sync — no TS import from Node).
export const BLOG_SLUG_PAIRS = [
  { tr: "b2b-lead-generation-huni-tasarimi", en: "b2b-lead-generation-funnel-design" },
  { tr: "google-ads-performans-optimizasyonu", en: "google-ads-performance-optimization" },
  { tr: "n8n-ile-lead-enrichment-otomasyonu", en: "n8n-lead-enrichment-automation" },
  { tr: "saas-metrikleri-arr-cac-ltv", en: "saas-metrics-arr-cac-ltv" },
  { tr: "meta-ads-ogrenme-asamasindan-cikma-taktikleri", en: "meta-ads-exit-learning-phase-tactics" },
  { tr: "b2b-lead-generation-maliyetleri-nasil-dusurulur", en: "how-to-reduce-b2b-lead-generation-costs" },
  { tr: "linkedin-reklamlari-turkiye-2026-firsat", en: "linkedin-ads-turkey-2026-opportunity" },
  { tr: "nrr-nedir-saas-buyume-metrigi", en: "what-is-nrr-saas-growth-metric" },
  { tr: "freemium-donusum-orani-artirma", en: "6-ways-to-increase-freemium-conversion-rate" },
  { tr: "roas-nedir-nasil-hesaplanir", en: "what-is-roas-how-to-calculate" },
  { tr: "reklam-butcesi-nasil-belirlenir", en: "how-to-set-advertising-budget" },
  { tr: "ga4-unassigned-trafik-nedir-nasil-duzeltilir", en: "ga4-unassigned-traffic-how-to-fix" },
  { tr: "black-friday-2026-reklam-plani", en: "black-friday-2026-ad-plan" },
  { tr: "hedef-roas-nasil-belirlenir", en: "how-to-set-target-roas-google-ads" },
  { tr: "ltv-nedir-ltv-cac-orani", en: "what-is-ltv-ltv-cac-ratio" },
  { tr: "utm-nedir-utm-parametreleri", en: "what-are-utm-parameters" },
  { tr: "cac-nedir-musteri-edinme-maliyeti", en: "what-is-cac-customer-acquisition-cost" },
  { tr: "kar-marji-nasil-hesaplanir", en: "how-to-calculate-profit-margin" },
  { tr: "mrr-nedir-nasil-hesaplanir", en: "what-is-mrr-how-to-calculate" },
  { tr: "llms-txt-nedir-ise-yariyor-mu", en: "what-is-llms-txt-does-it-work" },
  { tr: "churn-nedir-churn-rate-nasil-hesaplanir", en: "what-is-churn-rate" },
  { tr: "meta-reklam-verme-rehberi", en: "how-to-run-meta-ads-guide" },
  { tr: "arr-nedir-yillik-yinelenen-gelir", en: "what-is-arr-annual-recurring-revenue" },
];

// Embeddable widget routes: prerendered (iframe targets) but noindex, so they
// stay out of the sitemap and llms.txt.
export const EMBED_ROUTES = [
  "/embed/roas-hesaplayici",
  "/embed/reklam-butcesi-hesaplama",
  "/embed/trendyol-hepsiburada-kar-hesaplama",
  "/embed/desi-hesaplama",
  "/en/embed/roas-calculator",
  "/en/embed/ad-budget-calculator",
  "/en/embed/marketplace-profit-calculator",
  "/en/embed/dimensional-weight-calculator",
];

// English-only posts (no TR counterpart). They live solely under /en/blog/.
export const EN_ONLY_BLOG_SLUGS = ["arr-vs-mrr-difference"];

export function getBlogSlugs() {
  try {
    const file = fs.readFileSync(
      path.resolve(process.cwd(), "src/data/blogPosts.ts"),
      "utf-8"
    );
    // Only pick post slugs — exclude the category slugs by looking after `posts:` array.
    const postsSectionStart = file.indexOf("posts:") !== -1
      ? file.indexOf("posts:")
      : file.indexOf("blogPosts");
    const source = postsSectionStart > 0 ? file.slice(postsSectionStart) : file;
    const known = ["performans-pazarlama","b2b-lead-generation","yapay-zeka-otomasyon","saas-buyume"];
    const enSlugs = new Set([
      ...BLOG_SLUG_PAIRS.map((p) => p.en),
      ...EN_ONLY_BLOG_SLUGS,
    ]);
    const all = Array.from(source.matchAll(/^\s*slug:\s*"([^"]+)"/gm)).map((m) => m[1]);
    // Exclude category slugs AND English post slugs — EN posts belong only
    // under /en/blog/<slug>, not the root TR /blog/<slug> tree.
    return Array.from(new Set(all.filter((s) => !known.includes(s) && !enSlugs.has(s))));
  } catch { return []; }
}

// slug -> last modified date (updatedAt ?? publishedAt) for blog posts, used
// as <lastmod> in the sitemap so crawlers pick up new/updated posts quickly.
export function getBlogDates() {
  const out = new Map();
  try {
    const file = fs.readFileSync(path.resolve(process.cwd(), "src/data/blogPosts.ts"), "utf-8");
    const re = /^\s*slug:\s*"([^"]+)",\s*\n([\s\S]*?)(?=^\s*slug:\s*"|$(?![\s\S]))/gm;
    for (const m of file.matchAll(re)) {
      const body = m[2];
      const pub = body.match(/publishedAt:\s*"([^"]+)"/);
      if (!pub) continue;
      const upd = body.match(/updatedAt:\s*"([^"]+)"/);
      out.set(m[1], (upd ?? pub)[1]);
    }
  } catch {}
  return out;
}

// Full route list for SSG. Project detail slugs appear under both TR and EN;
// blog stays TR-only for v1.
export function allRoutes() {
  const projectTr = PROJECT_SLUGS.map((s) => `/projeler/${s}`);
  const projectEn = PROJECT_SLUGS.map((s) => `/en/projects/${s}`);
  const blog = getBlogSlugs().map((s) => `/blog/${s}`);
  const blogEn = [
    ...BLOG_SLUG_PAIRS.map((p) => p.en),
    ...EN_ONLY_BLOG_SLUGS,
  ].map((s) => `/en/blog/${s}`);
  return [
    ...STATIC_TR,
    ...projectTr,
    ...blog,
    ...STATIC_EN,
    ...projectEn,
    ...blogEn,
    ...EMBED_ROUTES,
  ];
}

// Sitemap entries with hreflang alternate pairs where they exist.
export function sitemapEntries() {
  const entries = [];
  const pairMap = new Map();
  for (const p of ROUTE_PAIRS) {
    pairMap.set(p.tr, { self: p.tr, alt: p.en, selfLang: "tr", altLang: "en" });
    pairMap.set(p.en, { self: p.en, alt: p.tr, selfLang: "en", altLang: "tr" });
  }
  // Project detail dynamic pairs
  for (const slug of PROJECT_SLUGS) {
    const tr = `/projeler/${slug}`;
    const en = `/en/projects/${slug}`;
    pairMap.set(tr, { self: tr, alt: en, selfLang: "tr", altLang: "en" });
    pairMap.set(en, { self: en, alt: tr, selfLang: "en", altLang: "tr" });
  }
  // Blog post dynamic pairs (slugs differ per locale)
  for (const pair of BLOG_SLUG_PAIRS) {
    const tr = `/blog/${pair.tr}`;
    const en = `/en/blog/${pair.en}`;
    pairMap.set(tr, { self: tr, alt: en, selfLang: "tr", altLang: "en" });
    pairMap.set(en, { self: en, alt: tr, selfLang: "en", altLang: "tr" });
  }

  const meta = {
    "/": { changefreq: "weekly", priority: "1.0" },
    "/en": { changefreq: "weekly", priority: "1.0" },
    "/hakkimda": { changefreq: "monthly", priority: "0.8" },
    "/en/about": { changefreq: "monthly", priority: "0.8" },
    "/projeler": { changefreq: "weekly", priority: "0.9" },
    "/en/projects": { changefreq: "weekly", priority: "0.9" },
    "/blog": { changefreq: "weekly", priority: "0.9" },
    "/en/blog": { changefreq: "weekly", priority: "0.9" },
    "/ucretsiz-araclar": { changefreq: "weekly", priority: "0.9" },
    "/en/free-tools": { changefreq: "weekly", priority: "0.9" },
  "/ucretsiz-araclar/pazarlama-araclari": { changefreq: "weekly", priority: "0.8" },
  "/en/free-tools/marketing-tools": { changefreq: "weekly", priority: "0.8" },
  "/ucretsiz-araclar/saas-araclari": { changefreq: "weekly", priority: "0.8" },
  "/en/free-tools/saas-tools": { changefreq: "weekly", priority: "0.8" },
  "/ucretsiz-araclar/e-ticaret-araclari": { changefreq: "weekly", priority: "0.8" },
  "/en/free-tools/ecommerce-tools": { changefreq: "weekly", priority: "0.8" },

    "/iletisim": { changefreq: "yearly", priority: "0.6" },
    "/en/contact": { changefreq: "yearly", priority: "0.6" },
  };
  const defaultMeta = { changefreq: "monthly", priority: "0.7" };

  // Internal design-system reference: prerendered but noindex, so it stays
  // out of the sitemap.
  const excluded = new Set(["/styleguide", ...EMBED_ROUTES]);

  const blogDates = getBlogDates();
  const latestPost = [...blogDates.values()].sort().at(-1) ?? null;
  for (const route of allRoutes()) {
    if (excluded.has(route)) continue;
    const alt = pairMap.get(route) ?? null;
    const blogSlug = route.match(/^\/(?:en\/)?blog\/([^/]+)$/)?.[1];
    const lastmod = blogSlug
      ? blogDates.get(blogSlug) ?? null
      : route === "/blog" || route === "/en/blog"
        ? latestPost
        : null;
    entries.push({
      loc: withSlash(route),
      lastmod,
      ...(meta[route] ?? defaultMeta),
      alternates: alt
        ? { ...alt, self: withSlash(alt.self), alt: withSlash(alt.alt) }
        : null,
    });
  }
  return entries;
}
