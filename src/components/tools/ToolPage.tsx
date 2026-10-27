import { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { track } from "@/lib/analytics";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, ArrowUpRight, ExternalLink, ChevronDown } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { CodeDivider } from "@/components/ui/CodeDivider";
import { useLocale } from "@/i18n/useLocale";
import { LocaleMeta } from "@/i18n/LocaleMeta";
import { pickTools, pickFreeTools, pickToolCategories, pickToolCategoriesUi } from "@/content";
import { SITE_URL, withSlash } from "@/i18n/routes";
import type { ToolContent } from "@/content/types";
import { getPostsForToolPath } from "@/data/blogPosts";

// Generic tool page shell. Each calculator page passes its `toolKey`; content
// (title, intro, SEO copy, FAQs, back-link, dividers, currency) is pulled from
// the locale bundle. This keeps the calculator pages tiny and pure — they only
// hold the numeric logic.

interface Props {
  toolKey: keyof ReturnType<typeof pickTools>;
  children: React.ReactNode;
}

// Tools that other sites may embed via iframe (backlink asset, seo/widget-plan.md).
// Embed URL = tool path with /ucretsiz-araclar/ → /embed/ and /en/free-tools/ → /en/embed/.
export const EMBEDDABLE_TOOLS = ["roas", "adBudget", "marketplace", "desi"] as const;
export const embedPathFor = (toolPath: string) =>
  toolPath.replace(/^\/ucretsiz-araclar\//, "/embed/").replace(/^\/en\/free-tools\//, "/en/embed/");

const EMBED_UI = {
  tr: {
    heading: "Bu aracı sitene ekle",
    text: "Aracı kendi sitenizde ücretsiz kullanabilirsiniz. Aşağıdaki kodu sayfanıza yapıştırın; araç güncellendikçe sizin sayfanızda da güncellenir.",
    copy: "Kodu kopyala",
    copied: "Kopyalandı",
    poweredBy: "yusufbayrak.net ile hesaplandı",
    credit: "Araç",
  },
  en: {
    heading: "Add this tool to your site",
    text: "You can use this calculator on your own site for free. Paste the code below into your page; it stays up to date automatically.",
    copy: "Copy code",
    copied: "Copied",
    poweredBy: "Calculated with yusufbayrak.net",
    credit: "Tool",
  },
};

export function ToolPage({ toolKey, children }: Props) {
  const locale = useLocale();
  const bundle = pickTools(locale);
  const tool = bundle[toolKey] as ToolContent;
  // GA4: one tool_use event per page view, on the first real interaction.
  const { pathname } = useLocation();
  const isEmbed = /^\/(en\/)?embed\//.test(pathname);
  const usedRef = useRef(false);
  const markUsed = () => {
    if (usedRef.current) return;
    usedRef.current = true;
    track("tool_use", { tool_name: String(toolKey), ...(isEmbed ? { embed: true, embed_referrer: typeof document !== "undefined" ? document.referrer.slice(0, 100) : "" } : {}) });
  };
  const [embedCopied, setEmbedCopied] = useState(false);

  const canonical = `${SITE_URL}${withSlash(tool.path)}`;

  // Related posts: posts that name this tool (newest first), then the manual
  // relatedPost (deduped, max 4).
  const norm = (h: string) => h.replace(/\/+$/, "");
  const relatedPosts = [
    ...getPostsForToolPath(tool.path, locale),
    ...(tool.relatedPost ? [tool.relatedPost] : []),
  ]
    .filter((p, i, arr) => arr.findIndex((q) => norm(q.href) === norm(p.href)) === i)
    .slice(0, 4);

  // Breadcrumb: Home > Free Tools > [Category] > [Tool]. The category is
  // resolved from the tool's card key so it never drifts from the category
  // pages.
  const hub = pickFreeTools(locale);
  const ui = pickToolCategoriesUi(locale);
  const cardKey = ({ llmsTxt: "llms", grossMargin: "gross", netMargin: "net", conversionRate: "conversion", ruleOf40: "rule40", cacPayback: "payback", channelQuiz: "quiz" } as Record<string, string>)[toolKey as string] ?? (toolKey as string);
  const category = pickToolCategories(locale).find((c) => c.tools.includes(cardKey));
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: ui.homeLabel, item: `${SITE_URL}${locale === "en" ? "/en/" : "/"}` },
      { "@type": "ListItem", position: 2, name: ui.hubName, item: `${SITE_URL}${withSlash(hub.path)}` },
      ...(category ? [{ "@type": "ListItem", position: 3, name: category.name, item: `${SITE_URL}${withSlash(category.path)}` }] : []),
      { "@type": "ListItem", position: category ? 4 : 3, name: tool.title, item: canonical },
    ],
  };
  const faqJsonLd = tool.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: tool.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  } : null;

  const eui = EMBED_UI[locale === "en" ? "en" : "tr"];
  const canEmbed = (EMBEDDABLE_TOOLS as readonly string[]).includes(String(toolKey));
  const embedUrl = `${SITE_URL}${withSlash(embedPathFor(tool.path))}`;
  const embedCode = `<iframe src="${embedUrl}" width="100%" height="720" style="border:0;max-width:760px" loading="lazy" title="${tool.title}"></iframe>\n<p style="font-size:12px">${eui.credit}: <a href="${canonical}">${tool.title} – Yusuf Bayrak</a></p>`;
  const copyEmbed = async () => {
    try {
      await navigator.clipboard.writeText(embedCode);
      setEmbedCopied(true);
      setTimeout(() => setEmbedCopied(false), 2000);
    } catch {
      /* ignore */
    }
  };

  if (isEmbed) {
    return (
      <div className="min-h-screen bg-background p-4">
        <Helmet>
          <html lang={locale === "en" ? "en" : "tr"} />
          <title>{tool.title}</title>
          <meta name="robots" content="noindex,follow" />
          <link rel="canonical" href={canonical} />
        </Helmet>
        <h1 className="font-mono text-base font-semibold text-foreground mb-3">{tool.title}</h1>
        <div
          className="p-4 bg-card border border-border rounded-lg"
          onInputCapture={markUsed}
          onClickCapture={(e) => { if ((e.target as Element).closest("button")) markUsed(); }}
        >
          {children}
        </div>
        <p className="mt-3 font-mono text-[11px] text-muted-foreground">
          <a
            href={`${canonical}?utm_source=embed&utm_medium=referral&utm_campaign=tool_widget`}
            target="_blank"
            rel="noopener"
            className="hover:text-accent underline"
          >
            {eui.poweredBy}
          </a>
        </p>
      </div>
    );
  }

  return (
    <Layout>
      <LocaleMeta
        path={tool.path}
        locale={locale}
        title={`${tool.title} | Yusuf Bayrak`.length <= 60 ? `${tool.title} | Yusuf Bayrak` : tool.title}
        description={tool.description}
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: tool.title,
          description: tool.description,
          url: canonical,
          applicationCategory: "BusinessApplication",
          ...(tool.applicationCategory ? { applicationCategory: tool.applicationCategory } : {}),
          operatingSystem: tool.applicationCategory === "FinanceApplication" ? "Any" : "Web",
          offers: { "@type": "Offer", price: "0", priceCurrency: bundle.currency },
          inLanguage: locale === "en" ? "en-US" : "tr-TR",
          publisher: { "@id": `${SITE_URL}/#person` },
          author: { "@id": `${SITE_URL}/#person` },
        })}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
        {faqJsonLd && (
          <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
        )}
      </Helmet>
      <section className="py-20">
        <div className="container max-w-3xl">
          <Link
            to={bundle.toolBackHref}
            className="inline-flex items-center font-mono text-sm text-muted-foreground hover:text-accent transition-colors mb-8 opacity-0 animate-fade-in-up"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {bundle.toolBackLabel}
          </Link>
          <div className="mb-8 opacity-0 animate-fade-in-up stagger-1">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{tool.title}</h1>
            <p className="text-muted-foreground leading-relaxed">{tool.intro}</p>
          </div>
          <div className="opacity-0 animate-fade-in-up stagger-2">
            <CodeDivider label={bundle.toolCalculatorDivider} />
          </div>
          <div
            className="p-6 bg-card border border-border rounded-lg opacity-0 animate-fade-in-up stagger-3"
            onInputCapture={markUsed}
            onClickCapture={(e) => { if ((e.target as Element).closest("button")) markUsed(); }}
          >
            {children}
          </div>
          {canEmbed && (
            <details className="mt-6 p-4 bg-card border border-border rounded-lg">
              <summary className="cursor-pointer font-mono text-sm text-foreground hover:text-accent">{eui.heading}</summary>
              <p className="mt-3 text-sm text-muted-foreground">{eui.text}</p>
              <textarea
                readOnly
                value={embedCode}
                rows={4}
                onFocus={(e) => e.currentTarget.select()}
                className="mt-3 w-full p-3 bg-background border border-border rounded-md font-mono text-xs text-foreground"
                aria-label={eui.heading}
              />
              <button
                type="button"
                onClick={copyEmbed}
                className="mt-2 h-9 px-4 rounded-md border border-accent text-accent font-mono text-xs hover:bg-accent/10 transition-colors"
              >
                {embedCopied ? eui.copied : eui.copy}
              </button>
            </details>
          )}
          {tool.seoParagraphs.length > 0 && (
            <div className="mt-16 opacity-0 animate-fade-in-up stagger-3">
              <CodeDivider label={bundle.toolGuideDivider} />
              <article className="max-w-none text-muted-foreground leading-relaxed space-y-5 [&_h2]:text-foreground [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:mt-8 [&_h2]:mb-3">
                {tool.seoParagraphs.map((para, i) => (
                  <div key={i}>
                    {para.heading && <h2>{para.heading}</h2>}
                    <p>{para.body}</p>
                  </div>
                ))}
              </article>
            </div>
          )}
          {tool.faqs.length > 0 && (
            <div className="mt-16 opacity-0 animate-fade-in-up stagger-3">
              <CodeDivider label={bundle.toolFaqDivider} />
              {/* Native <details> so every answer ships in the prerendered
                  HTML and matches the FAQPage JSON-LD one-to-one. */}
              <div className="bg-card border border-border rounded-lg px-4 divide-y divide-border">
                {tool.faqs.map((f, i) => (
                  <details key={i} className="group py-1" open={i === 0}>
                    <summary className="flex w-full cursor-pointer list-none items-center justify-between gap-4 py-4 text-left font-mono text-sm text-foreground hover:text-accent transition-colors [&::-webkit-details-marker]:hidden">
                      <h3 className="font-mono text-sm">{f.q}</h3>
                      <ChevronDown
                        className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180"
                        aria-hidden="true"
                      />
                    </summary>
                    <p className="pb-4 text-muted-foreground leading-relaxed">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          )}
          {(tool.relatedTools?.length || relatedPosts.length > 0 || tool.externalSource) && (
            <div className="mt-16 opacity-0 animate-fade-in-up stagger-3">
              <CodeDivider label={locale === "en" ? "Related" : "İlgili"} />
              <div className="grid gap-6 md:grid-cols-2">
                {tool.relatedTools && tool.relatedTools.length > 0 && (
                  <div className="p-5 bg-card border border-border rounded-lg">
                    <h2 className="font-mono text-sm text-foreground mb-3">
                      {locale === "en" ? "Related tools" : "İlgili Araçlar"}
                    </h2>
                    <ul className="space-y-2">
                      {tool.relatedTools.map((r) => (
                        <li key={r.href}>
                          <Link
                            to={r.href}
                            className="group inline-flex items-start gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                          >
                            <ArrowUpRight className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
                            <span>
                              <span className="text-foreground group-hover:text-accent transition-colors">{r.label}</span>
                              {r.note && <span className="block text-xs">{r.note}</span>}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {(relatedPosts.length > 0 || tool.externalSource) && (
                  <div className="p-5 bg-card border border-border rounded-lg">
                    {relatedPosts.length > 0 && (
                      <>
                        <h2 className="font-mono text-sm text-foreground mb-3">
                          {locale === "en" ? "Related reading" : "İlgili Yazılar"}
                        </h2>
                        <ul className="space-y-2">
                          {relatedPosts.map((p) => (
                            <li key={p.href}>
                              <Link
                                to={p.href}
                                className="inline-flex items-start gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                              >
                                <ArrowUpRight className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
                                {p.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                    {tool.externalSource && (
                      <p className="mt-4 pt-4 border-t border-border">
                        <a
                          href={tool.externalSource.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-start gap-2 font-mono text-xs text-muted-foreground hover:text-accent transition-colors"
                        >
                          <ExternalLink className="h-3.5 w-3.5 mt-0.5 shrink-0" />
                          {tool.externalSource.label}
                        </a>
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}

interface FieldProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
  suffix?: string;
  placeholder?: string;
  type?: string;
}

export function Field({ label, value, onChange, suffix, placeholder, type = "number" }: FieldProps) {
  return (
    <label className="block">
      <span className="font-mono text-sm text-muted-foreground block mb-2">{label}</span>
      <div className="relative">
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full h-11 px-3 pr-14 bg-background border border-border rounded-md text-foreground font-mono text-sm focus:outline-none focus:border-accent transition-colors"
        />
        {suffix && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 font-mono text-xs text-muted-foreground">
            {suffix}
          </span>
        )}
      </div>
    </label>
  );
}

interface ResultProps { label: string; value: string; hint?: string; }
export function Result({ label, value, hint }: ResultProps) {
  return (
    <div className="p-4 bg-accent/5 border border-accent/20 rounded-lg">
      <div className="font-mono text-xs text-muted-foreground mb-1">{"//"} {label}</div>
      <div className="font-mono text-2xl text-accent break-all">{value}</div>
      {hint && <div className="font-mono text-xs text-muted-foreground mt-2">{hint}</div>}
    </div>
  );
}

// Currency formatter that reads locale + currency from the active tool bundle.
export function useCurrencyFormatter() {
  const locale = useLocale();
  const bundle = pickTools(locale);
  return (n: number, maxDigits = 2) =>
    new Intl.NumberFormat(bundle.numberLocale, {
      style: "currency",
      currency: bundle.currency,
      maximumFractionDigits: maxDigits,
    }).format(n);
}
