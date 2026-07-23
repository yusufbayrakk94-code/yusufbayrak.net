import { Helmet } from "react-helmet-async";
import { SITE_URL, getAlternateRoute, type Locale, STATIC_ROUTE_PAIRS } from "./routes";

// Emits <html lang>, canonical, hreflang alternates and og:locale for the
// current page. Every page in the app renders this once inside its Helmet
// scope. `path` is the current absolute pathname (must match one side of
// STATIC_ROUTE_PAIRS or a dynamic project pattern); `locale` is the page's
// language.

interface Props {
  path: string;
  locale: Locale;
  title: string;
  description: string;
  ogType?: string;
  ogImage?: string;
}

export function LocaleMeta({
  path,
  locale,
  title,
  description,
  ogType = "website",
  ogImage,
}: Props) {
  const canonical = `${SITE_URL}${path}`;
  const trPath = locale === "tr" ? path : getAlternateRoute(path, "tr") ?? "/";
  const enPath = locale === "en" ? path : getAlternateRoute(path, "en") ?? "/en";
  const trHref = `${SITE_URL}${trPath}`;
  const enHref = `${SITE_URL}${enPath}`;

  const htmlLang = locale === "en" ? "en" : "tr";
  const ogLocale = locale === "en" ? "en_US" : "tr_TR";
  const ogLocaleAlt = locale === "en" ? "tr_TR" : "en_US";

  return (
    <Helmet>
      <html lang={htmlLang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <link rel="alternate" hrefLang="tr" href={trHref} />
      <link rel="alternate" hrefLang="en" href={enHref} />
      <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}/`} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={ogType} />
      <meta property="og:locale" content={ogLocale} />
      <meta property="og:locale:alternate" content={ogLocaleAlt} />
      {ogImage && <meta property="og:image" content={ogImage} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
    </Helmet>
  );
}

// Helper: verify a path is registered so we get a warning during SSG if the
// page routing drifts from the mapping table. Non-fatal.
export function isRegisteredRoute(path: string): boolean {
  if (STATIC_ROUTE_PAIRS.some((p) => p.tr === path || p.en === path)) return true;
  if (/^\/(projeler|en\/projects)\/[^/]+$/.test(path)) return true;
  if (/^\/(blog|en\/blog)(\/[^/]+)?$/.test(path)) return true;
  if (path === "/styleguide") return true;
  return false;
}
