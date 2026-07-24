// Bidirectional TR <-> EN route mapping. Every localized route on the site
// must be listed here so the language switcher can find its counterpart and
// the sitemap can emit reciprocal hreflang alternates. Dynamic slug routes
// (projects, tools) share the same slug across locales — only the prefix
// changes. When a TR-only page (blog) has no EN twin, the switcher falls
// back to /en (English home).

export type Locale = "tr" | "en";

export const LOCALES: Locale[] = ["tr", "en"];
export const DEFAULT_LOCALE: Locale = "tr";

export const SITE_URL = "https://yusufbayrak.net";

// Static (non-parameterized) route pairs. Path values are absolute.
export const STATIC_ROUTE_PAIRS: Array<{ tr: string; en: string }> = [
  { tr: "/",                       en: "/en" },
  { tr: "/hakkimda",               en: "/en/about" },
  { tr: "/projeler",               en: "/en/projects" },
  { tr: "/ucretsiz-araclar",       en: "/en/free-marketing-tools" },
  { tr: "/iletisim",               en: "/en/contact" },
  // Free-tool calculator pairs
  { tr: "/ucretsiz-araclar/arr-hesaplayici",         en: "/en/free-marketing-tools/arr-calculator" },
  { tr: "/ucretsiz-araclar/cac-hesaplayici",         en: "/en/free-marketing-tools/cac-calculator" },
  { tr: "/ucretsiz-araclar/churn-rate-hesaplayici",  en: "/en/free-marketing-tools/churn-rate-calculator" },
  { tr: "/ucretsiz-araclar/ltv-hesaplayici",         en: "/en/free-marketing-tools/ltv-calculator" },
  { tr: "/ucretsiz-araclar/roas-hesaplayici",        en: "/en/free-marketing-tools/roas-calculator" },
  { tr: "/ucretsiz-araclar/utm-link-olusturucu",     en: "/en/free-marketing-tools/utm-builder" },
  { tr: "/ucretsiz-araclar/llms-txt-olusturucu",     en: "/en/free-marketing-tools/llms-txt-generator" },
  { tr: "/blog",                    en: "/en/blog" },
];

// Project detail pairs (shared slugs, different URL prefix).
export const PROJECT_SLUGS = [
  "adgusto",
  "brandog-marka-mcp",
  "buyume-otomasyon-altyapilari",
] as const;

// Blog TR<->EN slug pairs. Kept in sync with BLOG_SLUG_PAIRS in
// src/data/blogPosts.ts (single source of truth is the data module; this
// mirror avoids a circular import between routing and content).
export const BLOG_SLUG_PAIRS: Array<{ tr: string; en: string }> = [
  { tr: "b2b-lead-generation-huni-tasarimi", en: "b2b-lead-generation-funnel-design" },
  { tr: "google-ads-performans-optimizasyonu", en: "google-ads-performance-optimization" },
  { tr: "n8n-ile-lead-enrichment-otomasyonu", en: "n8n-lead-enrichment-automation" },
  { tr: "saas-metrikleri-arr-cac-ltv", en: "saas-metrics-arr-cac-ltv" },
];

// Given a pathname, detect locale from URL prefix (/en or /en/*).
export function getLocaleFromPath(pathname: string): Locale {
  if (pathname === "/en" || pathname.startsWith("/en/")) return "en";
  return "tr";
}

// Return the counterpart URL in the other locale, or null if no explicit
// mapping exists (caller should fall back to the EN or TR home).
export function getAlternateRoute(pathname: string, target: Locale): string | null {
  const current = getLocaleFromPath(pathname);
  if (current === target) return pathname;

  const pair = STATIC_ROUTE_PAIRS.find(
    (p) => p.tr === pathname || p.en === pathname
  );
  if (pair) return pair[target];

  // Project detail routes: /projeler/:slug <-> /en/projects/:slug
  const trProj = pathname.match(/^\/projeler\/([^/]+)$/);
  if (trProj && target === "en") return `/en/projects/${trProj[1]}`;
  const enProj = pathname.match(/^\/en\/projects\/([^/]+)$/);
  if (enProj && target === "tr") return `/projeler/${enProj[1]}`;

  // Blog post routes: /blog/:slug <-> /en/blog/:slug (slugs differ per locale)
  const trBlog = pathname.match(/^\/blog\/([^/]+)$/);
  if (trBlog && target === "en") {
    const pair = BLOG_SLUG_PAIRS.find((p) => p.tr === trBlog[1]);
    return pair ? `/en/blog/${pair.en}` : null;
  }
  const enBlog = pathname.match(/^\/en\/blog\/([^/]+)$/);
  if (enBlog && target === "tr") {
    const pair = BLOG_SLUG_PAIRS.find((p) => p.en === enBlog[1]);
    return pair ? `/blog/${pair.tr}` : null;
  }

  return null;
}

// All static routes for the SSG script + sitemap generation. Dynamic routes
// (project details, blog posts) are expanded by the generator using slug
// data. Blog stays TR-only in v1; EN blog fallback is handled at runtime.
export const STATIC_TR_ROUTES = [
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
  "/ucretsiz-araclar/llms-txt-olusturucu",
  "/iletisim",
  "/blog",
  "/styleguide",
] as const;

export const STATIC_EN_ROUTES = [
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
  "/en/free-marketing-tools/llms-txt-generator",
  "/en/contact",
  "/en/blog",
] as const;
