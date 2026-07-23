import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { CodeDivider } from "@/components/ui/CodeDivider";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { useLocale } from "@/i18n/useLocale";
import { LocaleMeta } from "@/i18n/LocaleMeta";
import { pickTools } from "@/content";
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
          "@type": "WebApplication",
          name: tool.title,
          description: tool.description,
          url: canonical,
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          offers: { "@type": "Offer", price: "0", priceCurrency: bundle.currency },
          inLanguage: locale === "en" ? "en-US" : "tr-TR",
        })}</script>
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
              <Accordion type="single" collapsible className="bg-card border border-border rounded-lg px-4">
                {tool.faqs.map((f, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border-border last:border-0">
                    <AccordionTrigger className="text-left font-mono text-sm text-foreground hover:text-accent hover:no-underline">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
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
