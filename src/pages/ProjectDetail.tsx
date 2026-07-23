import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { CodeDivider } from "@/components/ui/CodeDivider";
import { TechTag } from "@/components/ui/TechTag";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/i18n/useLocale";
import { LocaleMeta } from "@/i18n/LocaleMeta";
import { pickProjects, pickProjectsPage } from "@/content";
import { SITE_URL } from "@/i18n/routes";

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const locale = useLocale();
  const page = pickProjectsPage(locale);
  const project = pickProjects(locale).find((p) => p.slug === slug);

  if (!project || !slug) {
    return (
      <Layout>
        <LocaleMeta
          path={`${page.detailBaseHref}/${slug ?? ""}`}
          locale={locale}
          title={page.notFoundTitle}
          description={page.notFoundText}
        />
        <section className="py-20">
          <div className="container text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4">{page.notFoundTitle}</h1>
            <p className="text-muted-foreground mb-8">{page.notFoundText}</p>
            <Button asChild>
              <Link to={page.listPath}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                {page.backToProjects}
              </Link>
            </Button>
          </div>
        </section>
      </Layout>
    );
  }

  const detailPath = `${page.detailBaseHref}/${slug}`;

  return (
    <Layout>
      <LocaleMeta
        path={detailPath}
        locale={locale}
        title={`${project.name} | Yusuf Bayrak`}
        description={project.description}
        ogType="article"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: project.name,
          description: project.fullDescription,
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          url: project.externalUrl || `${SITE_URL}${detailPath}`,
          author: { "@type": "Person", name: "Yusuf Bayrak", url: SITE_URL },
          keywords: project.stack.join(", "),
          inLanguage: locale === "en" ? "en-US" : "tr-TR",
        })}</script>
      </Helmet>
      <section className="py-20">
        <div className="container max-w-4xl">
          <Link to={page.listPath} className="inline-flex items-center font-mono text-sm text-muted-foreground hover:text-accent transition-colors mb-8 opacity-0 animate-fade-in-up">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {page.backToProjects}
          </Link>
          <div className="mb-12 opacity-0 animate-fade-in-up stagger-1">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{project.name}</h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">{project.fullDescription}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.stack.map((tech) => (<TechTag key={tech}>{tech}</TechTag>))}
            </div>
            <div className="p-4 bg-accent/5 border border-accent/20 rounded-lg">
              <span className="font-mono text-sm text-accent">
                <span className="text-muted-foreground">{"//"}</span> {page.impactLabel}: {project.impact}
              </span>
            </div>
          </div>
          <div className="opacity-0 animate-fade-in-up stagger-2"><CodeDivider label={page.challengesDivider} /></div>
          <div className="mb-12 opacity-0 animate-fade-in-up stagger-3">
            <ul className="space-y-3">
              {project.challenges.map((c, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="font-mono text-accent mt-1">→</span>
                  <span className="text-muted-foreground">{c}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="opacity-0 animate-fade-in-up stagger-3"><CodeDivider label={page.featuresDivider} /></div>
          <div className="mb-12 opacity-0 animate-fade-in-up stagger-4">
            <ul className="space-y-3">
              {project.features.map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="font-mono text-accent mt-1">✓</span>
                  <span className="text-muted-foreground">{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-wrap gap-4 pt-8 border-t border-border opacity-0 animate-fade-in-up stagger-4">
            <Button variant="outline" className="font-mono" disabled>
              <Github className="mr-2 h-4 w-4" />
              {page.sourceCode}
            </Button>
            {project.externalUrl ? (
              <Button asChild className="font-mono">
                <a href={project.externalUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  {page.liveDemo}
                </a>
              </Button>
            ) : (
              <Button variant="outline" className="font-mono" disabled>
                <ExternalLink className="mr-2 h-4 w-4" />
                {page.liveDemo}
              </Button>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
