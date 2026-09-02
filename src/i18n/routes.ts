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

// Hosting serves prerendered routes from directory indexes and 301s the
// slash-less form to the slash form. Canonical/hreflang/og:url must use the
// final (slash-terminated) URL so they match sitemap.xml character for
// character and never point at a redirect.
export function withSlash(pathname: string): string {
  if (!pathname || pathname === "/") return "/";
  const [p, rest = ""] = pathname.split(/(?=[?#])/, 2);
  return `${p.endsWith("/") ? p : `${p}/`}${rest}`;
}

// Static (non-parameterized) route pairs. Path values are absolute.
export const STATIC_ROUTE_PAIRS: Array<{ tr: string; en: string }> = [
  { tr: "/",                       en: "/en" },
  { tr: "/hakkimda",               en: "/en/about" },
  { tr: "/projeler",               en: "/en/projects" },
  { tr: "/ucretsiz-araclar",       en: "/en/free-tools" },
  { tr: "/iletisim",               en: "/en/contact" },
  // Tool category pairs
  { tr: "/ucretsiz-araclar/pazarlama-araclari", en: "/en/free-tools/marketing-tools" },
  { tr: "/ucretsiz-araclar/saas-araclari", en: "/en/free-tools/saas-tools" },
  { tr: "/ucretsiz-araclar/e-ticaret-araclari", en: "/en/free-tools/ecommerce-tools" },
  // Free-tool calculator pairs
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
  { tr: "/ucretsiz-araclar/hangi-pazarlama-kanali-uygun",       en: "/en/free-tools/marketing-channel-quiz" },
  { tr: "/blog",                    en: "/en/blog" },
];

// Project detail pairs (shared slugs, different URL prefix).
export const PROJECT_SLUGS = [
  "adgusto",
  "brandog-marka-mcp",
  "buyume-otomasyon-altyapilari",
] as const;

// Blog TR<->EN slug pairs. Re-exported from the single source of truth in
// src/data/blogPosts.ts so new posts automatically show up in the language
// switcher and hreflang without a second manual edit. blogPosts.ts does not
// import from this module, so no circular dependency is introduced.
export { BLOG_SLUG_PAIRS } from "@/data/blogPosts";
import { BLOG_SLUG_PAIRS } from "@/data/blogPosts";

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
  "/iletisim",
  "/blog",
  "/styleguide",
] as const;

export const STATIC_EN_ROUTES = [
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
  "/en/contact",
  "/en/blog",
] as const;
