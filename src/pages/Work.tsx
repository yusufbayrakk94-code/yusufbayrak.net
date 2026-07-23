import { Layout } from "@/components/layout/Layout";
import { CodeDivider } from "@/components/ui/CodeDivider";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { useLocale } from "@/i18n/useLocale";
import { LocaleMeta } from "@/i18n/LocaleMeta";
import { pickProjects, pickProjectsPage } from "@/content";

export default function Work() {
  const locale = useLocale();
  const page = pickProjectsPage(locale);
  const list = pickProjects(locale);

  return (
    <Layout>
      <LocaleMeta path={page.listPath} locale={locale} title={page.seoTitle} description={page.seoDescription} />
      <section className="py-20">
        <div className="container">
          <div className="max-w-2xl mb-12 opacity-0 animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{page.heading}</h1>
            <p className="text-muted-foreground leading-relaxed">{page.intro}</p>
          </div>
          <div className="opacity-0 animate-fade-in-up stagger-1">
            <CodeDivider label={page.divider} />
          </div>
          <div className="grid gap-8">
            {list.map((project, index) => (
              <div key={project.slug} className={`opacity-0 animate-fade-in-up stagger-${Math.min(index + 2, 4)}`}>
                <ProjectCard {...project} baseHref={page.detailBaseHref} className="hover-lift" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
