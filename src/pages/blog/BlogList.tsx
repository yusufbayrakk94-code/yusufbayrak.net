import { useMemo, useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { CodeDivider } from "@/components/ui/CodeDivider";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  BLOG_CATEGORIES,
  BLOG_POSTS,
  type BlogCategorySlug,
  getCategory,
} from "@/data/blogPosts";

type FilterValue = BlogCategorySlug | "all";

const SITE = "https://digital-core-labs.lovable.app";

export default function BlogList() {
  const [filter, setFilter] = useState<FilterValue>("all");

  const posts = useMemo(() => {
    const list = filter === "all" ? BLOG_POSTS : BLOG_POSTS.filter((p) => p.category === filter);
    return [...list].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
  }, [filter]);

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: BLOG_POSTS.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE}/blog/${p.slug}`,
      name: p.title,
    })),
  };

  return (
    <Layout>
      <Helmet>
        <title>Blog — Performans Pazarlama, B2B Lead Gen ve AI | Yusuf Bayrak</title>
        <meta
          name="description"
          content="Performans pazarlama, B2B lead generation, yapay zeka otomasyonları ve SaaS büyümesi üzerine uygulamalı içerikler ve rehberler."
        />
        <link rel="canonical" href={`${SITE}/blog`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Blog | Yusuf Bayrak" />
        <meta
          property="og:description"
          content="Performans pazarlama, B2B lead generation, AI otomasyon ve SaaS büyümesi üzerine uygulamalı içerikler."
        />
        <meta property="og:url" content={`${SITE}/blog`} />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(itemListJsonLd)}</script>
      </Helmet>

      <section className="py-20">
        <div className="container">
          <div className="max-w-2xl mb-12 opacity-0 animate-fade-in-up">
            <p className="font-mono text-sm text-accent mb-3">/* Blog */</p>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Performans, B2B Lead ve Yapay Zeka Notları
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              Performans pazarlama, B2B lead generation, yapay zeka otomasyonları ve SaaS büyümesi
              üzerine sahada denenmiş, uygulamalı içerikler.
            </p>
          </div>

          <CodeDivider label="Kategoriler" />

          {/* Category tabs */}
          <div
            role="tablist"
            aria-label="Blog kategorileri"
            className="flex flex-wrap gap-2 mb-10"
          >
            <CategoryTab
              label="Tümü"
              active={filter === "all"}
              onClick={() => setFilter("all")}
              count={BLOG_POSTS.length}
            />
            {BLOG_CATEGORIES.map((cat) => {
              const count = BLOG_POSTS.filter((p) => p.category === cat.slug).length;
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
          <section aria-label="Blog yazıları" className="grid gap-6 md:grid-cols-2">
            {posts.map((post) => {
              const cat = getCategory(post.category);
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
                      {new Date(post.publishedAt).toLocaleDateString("tr-TR", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" aria-hidden="true" />
                      {post.readingMinutes} dk
                    </span>
                  </div>

                  <h2 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                    <Link to={`/blog/${post.slug}`} className="stretched-link">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                    {post.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-secondary text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
                  </div>
                </article>
              );
            })}
          </section>

          {posts.length === 0 && (
            <p className="text-muted-foreground font-mono text-sm">
              Bu kategoride henüz yazı yok.
            </p>
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