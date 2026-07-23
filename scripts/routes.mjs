// Route inventory used by SSG + sitemap generators. Kept in JS (no TS
// compile step required) and manually mirrored with src/i18n/routes.ts.
// Whenever a new locale route is added there, add it here too.

import fs from "node:fs";
import path from "node:path";

export const SITE_URL = "https://yusufbayrak.net";

export const STATIC_TR = [
  "/",
  "/hakkimda",
  "/projeler",
  "/ucretsiz-araclar",
  "/ucretsiz-araclar/arr-hesaplayici",
  "/ucretsiz-araclar/cac-hesaplayici",
  "/ucretsiz-araclar/churn-rate-hesaplayici",
  "/ucretsiz-araclar/ltv-hesaplayici",
  "/ucretsiz-araclar/roas-hesaplayici",
  "/ucretsiz-araclar/utm-link-olusturucu",
  "/iletisim",
  "/blog",
  "/styleguide",
];

export const STATIC_EN = [
  "/en",
  "/en/about",
  "/en/projects",
  "/en/free-marketing-tools",
  "/en/free-marketing-tools/arr-calculator",
  "/en/free-marketing-tools/cac-calculator",
  "/en/free-marketing-tools/churn-rate-calculator",
  "/en/free-marketing-tools/ltv-calculator",
  "/en/free-marketing-tools/roas-calculator",
  "/en/free-marketing-tools/utm-builder",
  "/en/contact",
  "/en/blog",
];

// Reciprocal pairs used to emit hreflang alternates in the sitemap.
export const ROUTE_PAIRS = [
  { tr: "/",                       en: "/en" },
  { tr: "/hakkimda",               en: "/en/about" },
  { tr: "/projeler",               en: "/en/projects" },
  { tr: "/ucretsiz-araclar",       en: "/en/free-marketing-tools" },
  { tr: "/iletisim",               en: "/en/contact" },
  { tr: "/ucretsiz-araclar/arr-hesaplayici",         en: "/en/free-marketing-tools/arr-calculator" },
  { tr: "/ucretsiz-araclar/cac-hesaplayici",         en: "/en/free-marketing-tools/cac-calculator" },
  { tr: "/ucretsiz-araclar/churn-rate-hesaplayici",  en: "/en/free-marketing-tools/churn-rate-calculator" },
  { tr: "/ucretsiz-araclar/ltv-hesaplayici",         en: "/en/free-marketing-tools/ltv-calculator" },
  { tr: "/ucretsiz-araclar/roas-hesaplayici",        en: "/en/free-marketing-tools/roas-calculator" },
  { tr: "/ucretsiz-araclar/utm-link-olusturucu",     en: "/en/free-marketing-tools/utm-builder" },
  { tr: "/blog",                    en: "/en/blog" },
];

export const PROJECT_SLUGS = [
  "adgusto",
  "brandog-marka-mcp",
  "buyume-otomasyon-altyapilari",
];

// Blog TR<->EN slug pairs. Mirror of BLOG_SLUG_PAIRS in
// src/data/blogPosts.ts (kept manually in sync — no TS import from Node).
export const BLOG_SLUG_PAIRS = [
  { tr: "b2b-lead-generation-huni-tasarimi", en: "b2b-lead-generation-funnel-design" },
  { tr: "google-ads-performans-optimizasyonu", en: "google-ads-performance-optimization" },
  { tr: "n8n-ile-lead-enrichment-otomasyonu", en: "n8n-lead-enrichment-automation" },
  { tr: "saas-metrikleri-arr-cac-ltv", en: "saas-metrics-arr-cac-ltv" },
];

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
    const enSlugs = new Set(BLOG_SLUG_PAIRS.map((p) => p.en));
    const all = Array.from(source.matchAll(/^\s*slug:\s*"([^"]+)"/gm)).map((m) => m[1]);
    // Exclude category slugs AND English post slugs — EN posts belong only
    // under /en/blog/<slug>, not the root TR /blog/<slug> tree.
    return Array.from(new Set(all.filter((s) => !known.includes(s) && !enSlugs.has(s))));
  } catch { return []; }
}

// Full route list for SSG. Project detail slugs appear under both TR and EN;
// blog stays TR-only for v1.
export function allRoutes() {
  const projectTr = PROJECT_SLUGS.map((s) => `/projeler/${s}`);
  const projectEn = PROJECT_SLUGS.map((s) => `/en/projects/${s}`);
  const blog = getBlogSlugs().map((s) => `/blog/${s}`);
  const blogEn = BLOG_SLUG_PAIRS.map((p) => `/en/blog/${p.en}`);
  return [
    ...STATIC_TR,
    ...projectTr,
    ...blog,
    ...STATIC_EN,
    ...projectEn,
    ...blogEn,
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
    "/en/free-marketing-tools": { changefreq: "weekly", priority: "0.9" },
    "/iletisim": { changefreq: "yearly", priority: "0.6" },
    "/en/contact": { changefreq: "yearly", priority: "0.6" },
    "/styleguide": { changefreq: "monthly", priority: "0.5" },
  };
  const defaultMeta = { changefreq: "monthly", priority: "0.7" };

  for (const route of allRoutes()) {
    entries.push({
      loc: route,
      ...(meta[route] ?? defaultMeta),
      alternates: pairMap.get(route) ?? null,
    });
  }
  return entries;
}
