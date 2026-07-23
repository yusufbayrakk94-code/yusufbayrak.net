import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Sparkles } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getPostBySlug, getCategory } from "@/data/blogPosts";

const SITE = "https://digital-core-labs.lovable.app";
const AUTHOR = "Yusuf Bayrak";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) return <Navigate to="/blog" replace />;

  const category = getCategory(post.category);
  const url = `${SITE}/blog/${post.slug}`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    author: { "@type": "Person", name: AUTHOR, url: `${SITE}/hakkimda` },
    publisher: { "@type": "Person", name: AUTHOR, url: SITE },
    articleSection: category.name,
    keywords: post.tags.join(", "),
    inLanguage: "tr-TR",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faq.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: SITE },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };

  return (
    <Layout>
      <Helmet>
        <title>{`${post.title} | Yusuf Bayrak`}</title>
        <meta name="description" content={post.description} />
        <meta name="keywords" content={post.tags.join(", ")} />
        <link rel="canonical" href={url} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:url" content={url} />
        <meta property="article:published_time" content={post.publishedAt} />
        {post.updatedAt && (
          <meta property="article:modified_time" content={post.updatedAt} />
        )}
        <meta property="article:author" content={AUTHOR} />
        <meta property="article:section" content={category.name} />
        {post.tags.map((t) => (
          <meta key={t} property="article:tag" content={t} />
        ))}
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(articleJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
      </Helmet>

      <article className="py-20">
        <div className="container max-w-3xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground hover:text-accent transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Tüm yazılar
          </Link>

          <header className="mb-10">
            <div className="flex items-center gap-3 mb-4 text-xs font-mono text-muted-foreground">
              <Link to="/blog" className="text-accent hover:underline">
                {category.name}
              </Link>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Calendar className="h-3 w-3" aria-hidden="true" />
                <time dateTime={post.publishedAt}>
                  {new Date(post.publishedAt).toLocaleDateString("tr-TR", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" aria-hidden="true" />
                {post.readingMinutes} dk okuma
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">
              {post.title}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {post.description}
            </p>
          </header>

          <section
            aria-labelledby="tldr-heading"
            className="mb-12 p-6 rounded-lg border border-accent/30 bg-accent/5"
          >
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="h-4 w-4 text-accent" aria-hidden="true" />
              <h2 id="tldr-heading" className="font-mono text-sm text-accent uppercase tracking-wider">
                TL;DR — Özet
              </h2>
            </div>
            <ul className="space-y-2 list-disc pl-5 marker:text-accent">
              {post.tldr.map((point, i) => (
                <li key={i} className="text-foreground leading-relaxed">
                  {point}
                </li>
              ))}
            </ul>
          </section>

          <div className="space-y-10">
            {post.sections.map((sec) => (
              <section key={sec.heading} aria-labelledby={slugify(sec.heading)}>
                <h2
                  id={slugify(sec.heading)}
                  className="text-2xl font-semibold text-foreground mb-4"
                >
                  {sec.heading}
                </h2>
                {sec.paragraphs.map((p, i) => (
                  <p key={i} className="text-muted-foreground leading-relaxed mb-4 text-[15px]">
                    {p}
                  </p>
                ))}
                {sec.bullets && (
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground marker:text-accent">
                    {sec.bullets.map((b, i) => (
                      <li key={i} className="leading-relaxed">
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-border flex flex-wrap gap-2">
            {post.tags.map((t) => (
              <span
                key={t}
                className="text-xs font-mono px-2 py-1 rounded bg-secondary text-muted-foreground"
              >
                #{t}
              </span>
            ))}
          </div>

          <section aria-labelledby="faq-heading" className="mt-16">
            <h2 id="faq-heading" className="text-2xl font-semibold text-foreground mb-6">
              Sıkça Sorulan Sorular
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {post.faq.map((f, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left text-foreground">
                    {f.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {f.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </div>
      </article>
    </Layout>
  );
}

function slugify(str: string) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9ğüşıöç\s-]/gi, "")
    .trim()
    .replace(/\s+/g, "-");
}