import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { CodeDivider } from "@/components/ui/CodeDivider";
import { CodeLabel } from "@/components/ui/CodeLabel";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { TypingCursor } from "@/components/ui/TypingCursor";
import { ArrowRight } from "lucide-react";
import { useLocale } from "@/i18n/useLocale";
import { LocaleMeta } from "@/i18n/LocaleMeta";
import { pickHome, pickProjectsPage } from "@/content";

export default function Home() {
  const locale = useLocale();
  const h = pickHome(locale);
  const projectsPage = pickProjectsPage(locale);

  return (
    <Layout>
      <LocaleMeta
        path={h.path}
        locale={locale}
        title={h.seoTitle}
        description={h.seoDescription}
      />
      <section className="relative min-h-[80vh] flex items-center bg-grid">
        <div className="container">
          <div className="max-w-3xl opacity-0 animate-fade-in-up">
            <CodeLabel className="mb-6">{h.heroLabel}</CodeLabel>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              {h.heroHeading}
              <TypingCursor />
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed opacity-0 animate-fade-in-up stagger-1">
              {h.heroSubline}
            </p>
            <div className="opacity-0 animate-fade-in-up stagger-2">
              <Button asChild size="lg" className="font-mono transition-transform hover:scale-105">
                <Link to={h.heroCtaHref}>
                  {h.heroCta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="opacity-0 animate-fade-in-up">
            <CodeDivider label={h.featuredDivider} />
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {h.featured.map((project, index) => (
              <div key={project.name} className={`opacity-0 animate-fade-in-up stagger-${index + 1}`}>
                <ProjectCard {...project} baseHref={projectsPage.detailBaseHref} className="hover-lift" />
              </div>
            ))}
          </div>
          <div className="mt-12 text-center opacity-0 animate-fade-in-up stagger-4">
            <Link
              to={h.viewAllHref}
              className="inline-flex items-center font-mono text-sm text-muted-foreground hover:text-accent transition-colors link-underline"
            >
              <span className="text-accent mr-2">{"//"}</span>
              {h.viewAll}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
