import { useMemo, useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { CodeDivider } from "@/components/ui/CodeDivider";
import { Helmet } from "react-helmet-async";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocale } from "@/i18n/useLocale";
import {
  type BlogCategorySlug,
  getPostsForLocale,
  getCategoriesForLocale,
  getCategoryForLocale,
} from "@/data/blogPosts";

type FilterValue = BlogCategorySlug | "all";

import { SITE_URL as SITE } from "@/i18n/routes";

const UI = {
  tr: {
    title: "Blog — Performans Pazarlama, B2B Lead Gen ve AI | Yusuf Bayrak",
    description:
      "Performans pazarlama, B2B lead generation, yapay zeka otomasyonları ve SaaS büyümesi üzerine uygulamalı içerikler ve rehberler.",
    ogTitle: "Blog | Yusuf Bayrak",
    ogDescription:
      "Performans pazarlama, B2B lead generation, AI otomasyon ve SaaS büyümesi üzerine uygulamalı içerikler.",
    label: "/* Blog */",
    heading: "Performans, B2B Lead ve Yapay Zeka Notları",
    intro:
      "Performans pazarlama, B2B lead generation, yapay zeka otomasyonları ve SaaS büyümesi üzerine sahada denenmiş, uygulamalı içerikler.",
    categoriesDivider: "Kategoriler",
    categoriesAria: "Blog kategorileri",
    all: "Tümü",
    postsAria: "Blog yazıları",
    empty: "Bu kategoride henüz yazı yok.",
    tagLabel: "Etiket:",
    clearTag: "Etiket filtresini temizle",
    readSuffix: "dk",
    fallbackNote: null as string | null,
    dateLocale: "tr-TR",
    linkBase: "/blog",
  },
  en: {
    title: "Blog — Performance Marketing, B2B Lead Gen & AI | Yusuf Bayrak",
    description:
      "Practical guides on performance marketing, B2B lead generation, AI automation and SaaS growth.",
    ogTitle: "Blog | Yusuf Bayrak",
    ogDescription:
      "Practical guides on performance marketing, B2B lead generation, AI automation and SaaS growth.",
    label: "/* Blog */",
    heading: "Notes on Performance, B2B Lead Gen and AI",
    intro:
      "Field-tested articles on performance marketing, B2B lead generation, AI automation and SaaS growth.",
    categoriesDivider: "Categories",
    categoriesAria: "Blog categories",
    all: "All",
    postsAria: "Blog posts",
    empty: "No posts in this category yet.",
    tagLabel: "Tag:",
    clearTag: "Clear tag filter",
    readSuffix: "min",
    fallbackNote: null as string | null,
    dateLocale: "en-US",
    linkBase: "/en/blog",
  },
} as const;

export default function BlogList() {
  const locale = useLocale();
  const ui = UI[locale];
  const [filter, setFilter] = useState<FilterValue>("all");
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTag = searchParams.get("tag");

  const allPosts = useMemo(() => getPostsForLocale(locale), [locale]);
  const categories = useMemo(() => getCategoriesForLocale(locale), [locale]);

  const posts = useMemo(() => {
    let list = filter === "all" ? allPosts : allPosts.filter((p) => p.category === filter);
    if (activeTag) {
      const t = activeTag.toLowerCase();
      list = list.filter((p) => p.tags.some((tag) => tag.toLowerCase() === t));
    }
    return [...list].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
  }, [filter, allPosts, activeTag]);

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: allPosts.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE}${ui.linkBase}/${p.slug}`,
      name: p.title,
    })),
  };

  const path = locale === "en" ? "/en/blog" : "/blog";

  return (
    <Layout>
      <Helmet>
        <title>{ui.title}</title>
        <meta name="description" content={ui.description} />
        <link rel="canonical" href={`${SITE}${path}`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={ui.ogTitle} />
        <meta property="og:description" content={ui.ogDescription} />
        <meta property="og:url" content={`${SITE}${path}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(itemListJsonLd)}</script>
      </Helmet>

      <section className="py-20">
        <div className="container">
          <div className="max-w-2xl mb-12 opacity-0 animate-fade-in-up">
            <p className="font-mono text-sm text-accent mb-3">{ui.label}</p>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {ui.heading}
            </h1>
            <p className="text-muted-foreground leading-relaxed">{ui.intro}</p>
            {ui.fallbackNote && (
              <p className="mt-4 text-xs font-mono text-muted-foreground border-l-2 border-accent/50 pl-3">
                {ui.fallbackNote}
              </p>
            )}
          </div>

          <CodeDivider label={ui.categoriesDivider} />

          {/* Category tabs */}
          <div
            role="tablist"
            aria-label={ui.categoriesAria}
            className="flex flex-wrap gap-2 mb-10"
          >
            <CategoryTab
              label={ui.all}
              active={filter === "all"}
              onClick={() => setFilter("all")}
              count={allPosts.length}
            />
            {categories.map((cat) => {
              const count = allPosts.filter((p) => p.category === cat.slug).length;
              return (
                <CategoryTab
                  key={cat.slug}
                  label={cat.name}
                  active={filter === cat.slug}
                  onClick={() => setFilter(cat.slug)}
                  count={count}
                />
              );
            })}
          </div>

          {/* Posts */}
          {activeTag && (
            <div className="mb-6 flex items-center gap-3 font-mono text-xs text-muted-foreground">
              <span>
                {ui.tagLabel} <span className="text-accent">#{activeTag}</span>
              </span>
              <button
                type="button"
                onClick={() => setSearchParams({})}
                className="underline underline-offset-4 hover:text-foreground"
              >
                {ui.clearTag}
              </button>
            </div>
          )}
          <section aria-label={ui.postsAria} className="grid gap-6 md:grid-cols-2">
            {posts.map((post) => {
              const cat = getCategoryForLocale(post.category, locale);
              return (
                <article
                  key={post.slug}
                  className="group p-6 bg-card border border-border rounded-lg hover:border-accent/50 transition-colors flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-3 text-xs font-mono text-muted-foreground">
                    <span className="text-accent">{cat.name}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" aria-hidden="true" />
                      {new Date(post.publishedAt).toLocaleDateString(ui.dateLocale, {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" aria-hidden="true" />
                      {post.readingMinutes} {ui.readSuffix}
                    </span>
                  </div>

                  <h2 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                    <Link to={`${ui.linkBase}/${post.slug}`} className="stretched-link">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                    {post.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 3).map((t) => (
                        <Link
                          key={t}
                          to={`${ui.linkBase}?tag=${encodeURIComponent(t)}`}
                          className="relative z-10 text-[10px] font-mono px-2 py-0.5 rounded bg-secondary text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                        >
                          {t}
                        </Link>
                      ))}
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
                  </div>
                </article>
              );
            })}
          </section>

          {posts.length === 0 && (
            <p className="text-muted-foreground font-mono text-sm">{ui.empty}</p>
          )}
        </div>
      </section>
    </Layout>
  );
}

function CategoryTab({
  label,
  active,
  onClick,
  count,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
  count: number;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={cn(
        "font-mono text-xs md:text-sm px-3 py-2 rounded-md border transition-colors",
        active
          ? "bg-accent text-accent-foreground border-accent"
          : "bg-card text-muted-foreground border-border hover:border-accent/50 hover:text-foreground"
      )}
    >
      {label}
      <span className="ml-2 opacity-70">({count})</span>
    </button>
  );
}