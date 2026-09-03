import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, ArrowUpRight, ExternalLink, ChevronDown } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { CodeDivider } from "@/components/ui/CodeDivider";
import { useLocale } from "@/i18n/useLocale";
import { LocaleMeta } from "@/i18n/LocaleMeta";
import { pickTools, pickFreeTools, pickToolCategories, pickToolCategoriesUi } from "@/content";
import { SITE_URL } from "@/i18n/routes";
import type { ToolContent } from "@/content/types";

// Generic tool page shell. Each calculator page passes its `toolKey`; content
// (title, intro, SEO copy, FAQs, back-link, dividers, currency) is pulled from
// the locale bundle. This keeps the calculator pages tiny and pure — they only
// hold the numeric logic.

interface Props {
  toolKey: keyof ReturnType<typeof pickTools>;
  children: React.ReactNode;
}

export function ToolPage({ toolKey, children }: Props) {
  const locale = useLocale();
  const bundle = pickTools(locale);
  const tool = bundle[toolKey] as ToolContent;

  const canonical = `${SITE_URL}${tool.path}`;

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
      { "@type": "ListItem", position: 1, name: ui.homeLabel, item: `${SITE_URL}${locale === "en" ? "/en" : "/"}` },
      { "@type": "ListItem", position: 2, name: ui.hubName, item: `${SITE_URL}${hub.path}` },
      ...(category ? [{ "@type": "ListItem", position: 3, name: category.name, item: `${SITE_URL}${category.path}` }] : []),
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

  return (
    <Layout>
      <LocaleMeta
        path={tool.path}
        locale={locale}
        title={`${tool.title} | Yusuf Bayrak`}
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
          <div className="p-6 bg-card border border-border rounded-lg opacity-0 animate-fade-in-up stagger-3">
            {children}
          </div>
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
          {(tool.relatedTools?.length || tool.relatedPost || tool.externalSource) && (
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
                {(tool.relatedPost || tool.externalSource) && (
                  <div className="p-5 bg-card border border-border rounded-lg">
                    {tool.relatedPost && (
                      <>
                        <h2 className="font-mono text-sm text-foreground mb-3">
                          {locale === "en" ? "Related post" : "İlgili Yazı"}
                        </h2>
                        <Link
                          to={tool.relatedPost.href}
                          className="inline-flex items-start gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                        >
                          <ArrowUpRight className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
                          {tool.relatedPost.label}
                        </Link>
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
