import { Layout } from "@/components/layout/Layout";
import { CodeDivider } from "@/components/ui/CodeDivider";
import { Link } from "react-router-dom";
import { TrendingUp, Users, UserMinus, HeartHandshake, Target, Link2, ArrowRight } from "lucide-react";
import { useLocale } from "@/i18n/useLocale";
import { LocaleMeta } from "@/i18n/LocaleMeta";
import { pickFreeTools } from "@/content";

const iconMap = { arr: TrendingUp, cac: Users, churn: UserMinus, ltv: HeartHandshake, roas: Target, utm: Link2 } as const;

export default function FreeTools() {
  const locale = useLocale();
  const p = pickFreeTools(locale);

  return (
    <Layout>
      <LocaleMeta path={p.path} locale={locale} title={p.seoTitle} description={p.seoDescription} />
      <section className="py-20">
        <div className="container">
          <div className="max-w-2xl mb-12 opacity-0 animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{p.heading}</h1>
            <p className="text-muted-foreground leading-relaxed">{p.intro}</p>
          </div>
          <CodeDivider label={p.divider} />
          <div className="grid gap-6 md:grid-cols-2">
            {p.cards.map((tool) => {
              const Icon = iconMap[tool.key as keyof typeof iconMap];
              return (
                <Link
                  key={tool.key}
                  to={tool.href}
                  aria-label={`${tool.name}: ${tool.description}`}
                  className="group p-6 bg-card border border-border rounded-lg hover:border-accent/50 transition-colors block"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-secondary rounded-lg shrink-0">
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <h3 className="font-mono text-base text-foreground group-hover:text-accent transition-colors">{tool.name}</h3>
                        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{tool.description}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}
