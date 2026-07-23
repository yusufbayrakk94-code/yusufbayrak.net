import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";

const SITE = "https://digital-core-labs.lovable.app";

function sitemapPlugin() {
  const staticUrls: Array<{ loc: string; changefreq: string; priority: string }> = [
    { loc: "/", changefreq: "weekly", priority: "1.0" },
    { loc: "/hakkimda", changefreq: "monthly", priority: "0.8" },
    { loc: "/about", changefreq: "monthly", priority: "0.8" },
    { loc: "/projeler", changefreq: "weekly", priority: "0.9" },
    { loc: "/work", changefreq: "weekly", priority: "0.9" },
    { loc: "/projeler/adgusto", changefreq: "monthly", priority: "0.7" },
    { loc: "/projeler/brandog-marka-mcp", changefreq: "monthly", priority: "0.7" },
    { loc: "/projeler/buyume-otomasyon-altyapilari", changefreq: "monthly", priority: "0.7" },
    { loc: "/work/adgusto", changefreq: "monthly", priority: "0.7" },
    { loc: "/work/brandog-marka-mcp", changefreq: "monthly", priority: "0.7" },
    { loc: "/work/buyume-otomasyon-altyapilari", changefreq: "monthly", priority: "0.7" },
    { loc: "/blog", changefreq: "weekly", priority: "0.9" },
    { loc: "/ucretsiz-araclar", changefreq: "weekly", priority: "0.9" },
    { loc: "/ucretsiz-araclar/arr-hesaplayici", changefreq: "monthly", priority: "0.8" },
    { loc: "/ucretsiz-araclar/cac-hesaplayici", changefreq: "monthly", priority: "0.8" },
    { loc: "/ucretsiz-araclar/churn-rate-hesaplayici", changefreq: "monthly", priority: "0.8" },
    { loc: "/ucretsiz-araclar/ltv-hesaplayici", changefreq: "monthly", priority: "0.8" },
    { loc: "/ucretsiz-araclar/roas-hesaplayici", changefreq: "monthly", priority: "0.8" },
    { loc: "/ucretsiz-araclar/utm-link-olusturucu", changefreq: "monthly", priority: "0.8" },
    { loc: "/iletisim", changefreq: "yearly", priority: "0.6" },
    { loc: "/contact", changefreq: "yearly", priority: "0.6" },
    { loc: "/styleguide", changefreq: "monthly", priority: "0.5" },
  ];

  function readBlogSlugs(): string[] {
    try {
      const file = fs.readFileSync(
        path.resolve(__dirname, "src/data/blogPosts.ts"),
        "utf-8"
      );
      const slugs = Array.from(file.matchAll(/^\s*slug:\s*"([^"]+)"/gm)).map(
        (m) => m[1]
      );
      return Array.from(new Set(slugs));
    } catch {
      return [];
    }
  }

  function build(): string {
    const blogUrls = readBlogSlugs().map((slug) => ({
      loc: `/blog/${slug}`,
      changefreq: "monthly",
      priority: "0.7",
    }));
    const all = [...staticUrls, ...blogUrls];
    const body = all
      .map(
        (u) =>
          `  <url>\n    <loc>${SITE}${u.loc}</loc>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`
      )
      .join("\n");
    return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
  }

  return {
    name: "generate-sitemap",
    apply: "build" as const,
    writeBundle(options: { dir?: string }) {
      const outDir = options.dir ?? path.resolve(__dirname, "dist");
      fs.writeFileSync(path.join(outDir, "sitemap.xml"), build(), "utf-8");
    },
    configureServer() {
      // Keep public/sitemap.xml in sync during dev for local preview.
      try {
        fs.writeFileSync(
          path.resolve(__dirname, "public/sitemap.xml"),
          build(),
          "utf-8"
        );
      } catch {
        // ignore
      }
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/", // <--- Özel domain root (kök) yerleşimi için eklendi
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    sitemapPlugin(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
