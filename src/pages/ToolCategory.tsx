import { Layout } from "@/components/layout/Layout";
import { CodeDivider } from "@/components/ui/CodeDivider";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { useLocale } from "@/i18n/useLocale";
import { LocaleMeta } from "@/i18n/LocaleMeta";
import { pickFreeTools, pickToolCategories, pickToolCategoriesUi, pickTools } from "@/content";
import { toolIconMap } from "@/components/tools/toolIcons";
import { ToolCard } from "@/components/tools/ToolCard";
import { SITE_URL } from "@/i18n/routes";

// One component drives all three category pages (TR + EN). The category key is
// passed by the route; all copy, SEO meta and tool membership come from the
// locale content bundle.
export default function ToolCategory({ categoryKey }: { categoryKey: string }) {
  const locale = useLocale();
  const p = pickFreeTools(locale);
  const ui = pickToolCategoriesUi(locale);
  const bundle = pickTools(locale);
  const categories = pickToolCategories(locale);
  const cat = categories.find((c) => c.key === categoryKey)!;
  const others = categories.filter((c) => c.key !== categoryKey);
  const cardByKey = new Map(p.cards.map((c) => [c.key, c]));

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: ui.homeLabel, item: `${SITE_URL}${locale === "en" ? "/en" : "/"}` },
      { "@type": "ListItem", position: 2, name: ui.hubName, item: `${SITE_URL}${p.path}` },
      { "@type": "ListItem", position: 3, name: cat.name, item: `${SITE_URL}${cat.path}` },
    ],
  };

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: cat.name,
    itemListElement: cat.tools.map((key, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: cardByKey.get(key)?.name,
      url: `${SITE_URL}${cardByKey.get(key)?.href}`,
    })),
  };

  const faqJsonLd = cat.faqs?.length ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: cat.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  } : null;

  return (
    <Layout>
      <LocaleMeta path={cat.path} locale={locale} title={cat.seoTitle} description={cat.seoDescription} />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
        <script type="application/ld+json">{JSON.stringify(itemList)}</script>
        {faqJsonLd && <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>}
      </Helmet>
      <section className="py-20">
        <div className="container">
          <Link
            to={bundle.toolBackHref}
            className="inline-flex items-center font-mono text-sm text-muted-foreground hover:text-accent transition-colors mb-8 opacity-0 animate-fade-in-up"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {bundle.toolBackLabel}
          </Link>
          <div className="max-w-2xl mb-12 opacity-0 animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{cat.name}</h1>
            <p className="text-muted-foreground leading-relaxed">{cat.intro}</p>
          </div>
          <CodeDivider label={ui.toolsDivider} />
          <div className="grid gap-6 md:grid-cols-2">
            {cat.tools.map((key) => {
              const card = cardByKey.get(key);
              if (!card) return null;
              return (
                <ToolCard
                  key={key}
                  href={card.href}
                  name={card.name}
                  description={card.description}
                  icon={toolIconMap[key as keyof typeof toolIconMap]}
                />
              );
            })}
          </div>

          {cat.sections?.length > 0 && (
            <div className="mt-16 max-w-3xl">
              <CodeDivider label={ui.guideDivider} />
              <article className="text-muted-foreground leading-relaxed space-y-5">
                {cat.sections.map((s, i) => (
                  <div key={i}>
                    <h2 className="text-foreground text-xl font-semibold mt-8 mb-3">{s.heading}</h2>
                    <p>{s.body}</p>
                  </div>
                ))}
              </article>
            </div>
          )}

          {cat.faqs?.length > 0 && (
            <div className="mt-16 max-w-3xl">
              <CodeDivider label={ui.faqDivider} />
              <div className="bg-card border border-border rounded-lg px-4 divide-y divide-border">
                {cat.faqs.map((f, i) => (
                  <details key={i} className="group py-4">
                    <summary className="cursor-pointer list-none font-mono text-sm text-foreground hover:text-accent transition-colors">
                      <h3 className="inline">{f.q}</h3>
                    </summary>
                    <p className="mt-3 text-muted-foreground leading-relaxed">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          )}

          <div className="mt-16">
            <CodeDivider label={ui.otherDivider} />
            <div className="grid gap-4 md:grid-cols-2">
              {others.map((o) => (
                <Link
                  key={o.key}
                  to={o.path}
                  className="group p-5 bg-card border border-border rounded-lg hover:border-accent/50 transition-colors"
                >
                  <span className="inline-flex items-start gap-2">
                    <ArrowUpRight className="h-4 w-4 mt-1 shrink-0 text-accent" />
                    <span>
                      <span className="font-mono text-sm text-foreground group-hover:text-accent transition-colors">{o.name}</span>
                      <span className="block text-sm text-muted-foreground leading-relaxed">{o.short}</span>
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
