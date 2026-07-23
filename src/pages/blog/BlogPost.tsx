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
import {
  getPostBySlugLocalized,
  getCategoryForLocale,
  getAlternateBlogSlug,
} from "@/data/blogPosts";
import { useLocale } from "@/i18n/useLocale";

const SITE = "https://digital-core-labs.lovable.app";
const AUTHOR = "Yusuf Bayrak";

const UI = {
  tr: {
    titleSuffix: " | Yusuf Bayrak",
    backLink: "Tüm yazılar",
    tldrLabel: "TL;DR — Özet",
    faqHeading: "Sıkça Sorulan Sorular",
    readSuffix: "dk okuma",
    dateLocale: "tr-TR",
    inLanguage: "tr-TR",
    linkBase: "/blog",
    breadcrumbHome: "Ana Sayfa",
    breadcrumbBlog: "Blog",
    navigateFallback: "/blog",
    authorPath: "/hakkimda",
  },
  en: {
    titleSuffix: " | Yusuf Bayrak",
    backLink: "All posts",
    tldrLabel: "TL;DR — Summary",
    faqHeading: "Frequently Asked Questions",
    readSuffix: "min read",
    dateLocale: "en-US",
    inLanguage: "en-US",
    linkBase: "/en/blog",
    breadcrumbHome: "Home",
    breadcrumbBlog: "Blog",
    navigateFallback: "/en/blog",
    authorPath: "/en/about",
  },
} as const;

export default function BlogPost() {
  const locale = useLocale();
  const ui = UI[locale];
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlugLocalized(slug, locale) : undefined;

  if (!post) return <Navigate to={ui.navigateFallback} replace />;

  const category = getCategoryForLocale(post.category, locale);
  const url = `${SITE}${ui.linkBase}/${post.slug}`;
  const altSlug = getAlternateBlogSlug(post.slug, locale === "en" ? "tr" : "en");
  const altHref = altSlug
    ? `${SITE}${locale === "en" ? "/blog" : "/en/blog"}/${altSlug}`
    : null;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    author: { "@type": "Person", name: AUTHOR, url: `${SITE}${ui.authorPath}` },
    publisher: { "@type": "Person", name: AUTHOR, url: SITE },
    articleSection: category.name,
    keywords: post.tags.join(", "),
    inLanguage: ui.inLanguage,
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
      { "@type": "ListItem", position: 1, name: ui.breadcrumbHome, item: `${SITE}${locale === "en" ? "/en" : "/"}` },
      { "@type": "ListItem", position: 2, name: ui.breadcrumbBlog, item: `${SITE}${ui.linkBase}` },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };

  return (
    <Layout>
      <Helmet>
        <html lang={locale === "en" ? "en" : "tr"} />
        <title>{`${post.title}${ui.titleSuffix}`}</title>
        <meta name="description" content={post.description} />
        <meta name="keywords" content={post.tags.join(", ")} />
        <link rel="canonical" href={url} />
        {altHref && (
          <link
            rel="alternate"
            hrefLang={locale === "en" ? "tr" : "en"}
            href={altHref}
          />
        )}
        <link rel="alternate" hrefLang={locale} href={url} />
        <link rel="alternate" hrefLang="x-default" href={`${SITE}/`} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:url" content={url} />
        <meta property="og:locale" content={locale === "en" ? "en_US" : "tr_TR"} />
        <meta property="og:locale:alternate" content={locale === "en" ? "tr_TR" : "en_US"} />
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
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.description} />
        <script type="application/ld+json">{JSON.stringify(articleJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
      </Helmet>

      <article className="py-20">
        <div className="container max-w-3xl">
          <Link
            to={ui.linkBase}
            className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground hover:text-accent transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            {ui.backLink}
          </Link>

          <header className="mb-10">
            <div className="flex items-center gap-3 mb-4 text-xs font-mono text-muted-foreground">
              <Link to={ui.linkBase} className="text-accent hover:underline">
                {category.name}
              </Link>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Calendar className="h-3 w-3" aria-hidden="true" />
                <time dateTime={post.publishedAt}>
                  {new Date(post.publishedAt).toLocaleDateString(ui.dateLocale, {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" aria-hidden="true" />
                {post.readingMinutes} {ui.readSuffix}
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
                {ui.tldrLabel}
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
              {ui.faqHeading}
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