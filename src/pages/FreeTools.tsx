import { Layout } from "@/components/layout/Layout";
import { CodeDivider } from "@/components/ui/CodeDivider";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useLocale } from "@/i18n/useLocale";
import { LocaleMeta } from "@/i18n/LocaleMeta";
import { pickFreeTools, pickToolCategories, pickToolCategoriesUi } from "@/content";
import { categoryIconMap } from "@/components/tools/toolIcons";
import { SITE_URL } from "@/i18n/routes";

// Hub page: routes visitors into the three tool categories instead of listing
// every calculator flat. Each category card previews the tools it contains.
export default function FreeTools() {
  const locale = useLocale();
  const p = pickFreeTools(locale);
  const categories = pickToolCategories(locale);
  const ui = pickToolCategoriesUi(locale);
  const cardByKey = new Map(p.cards.map((c) => [c.key, c]));

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: ui.homeLabel, item: `${SITE_URL}${locale === "en" ? "/en" : "/"}` },
      { "@type": "ListItem", position: 2, name: ui.hubName, item: `${SITE_URL}${p.path}` },
    ],
  };

  return (
    <Layout>
      <LocaleMeta path={p.path} locale={locale} title={p.seoTitle} description={p.seoDescription} />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
      </Helmet>
      <section className="py-20">
        <div className="container">
          <div className="max-w-2xl mb-12 opacity-0 animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{ui.hubHeading}</h1>
            <p className="text-muted-foreground leading-relaxed">{ui.hubIntro}</p>
          </div>
          <CodeDivider label={ui.hubDivider} />
          <div className="grid gap-6 md:grid-cols-3">
            {categories.map((cat) => {
              const Icon = categoryIconMap[cat.key as keyof typeof categoryIconMap];
              return (
                <div key={cat.key} className="flex flex-col">
                  <Link
                    to={cat.path}
                    aria-label={`${cat.name}: ${cat.short}`}
                    className="group flex-1 p-6 bg-card border border-border rounded-lg hover:border-accent/50 transition-colors block"
                  >
                    <div className="flex items-center justify-center w-10 h-10 bg-secondary rounded-lg mb-4">
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                    <h2 className="font-mono text-base text-foreground group-hover:text-accent transition-colors mb-2">
                      {cat.name}
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{cat.short}</p>
                    <p className="font-mono text-xs text-accent mb-3">{ui.toolCountLabel(cat.tools.length)}</p>
                    <ul className="space-y-1">
                      {cat.tools.map((key) => (
                        <li key={key} className="font-mono text-xs text-muted-foreground">
                          — {cardByKey.get(key)?.name}
                        </li>
                      ))}
                    </ul>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}
