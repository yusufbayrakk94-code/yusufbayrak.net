// Static Site Generator. Runs after `vite build` (client) and
// `vite build --ssr src/entry-server.tsx` (server). For every route in
// scripts/routes.mjs it renders the server bundle, splices Helmet-managed
// meta tags into the client template, and writes a physical
// dist/<route>/index.html. JS-less crawlers (GPTBot, ClaudeBot, Perplexity)
// receive real per-page titles, descriptions, canonicals and hreflang.

import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { allRoutes } from "./routes.mjs";

const DIST = path.resolve(process.cwd(), "dist");
const SERVER_ENTRY = path.join(DIST, "server", "entry-server.js");
const TEMPLATE_PATH = path.join(DIST, "index.html");

async function main() {
  if (!fs.existsSync(SERVER_ENTRY)) {
    console.error(`[ssg] missing server bundle: ${SERVER_ENTRY}`);
    process.exit(1);
  }
  const template = fs.readFileSync(TEMPLATE_PATH, "utf-8");
  const { render, preloadAllPages } = await import(pathToFileURL(SERVER_ENTRY).href);
  // Resolve every code-split page module so renderToString is synchronous.
  await preloadAllPages();

  // Client build manifest → modulepreload links for each route's page chunks.
  const MANIFEST_PATH = path.join(DIST, ".vite", "manifest.json");
  const manifest = fs.existsSync(MANIFEST_PATH)
    ? JSON.parse(fs.readFileSync(MANIFEST_PATH, "utf-8"))
    : {};
  const entryKey = Object.keys(manifest).find((k) => manifest[k].isEntry);
  const entryFiles = new Set();
  (function walk(k) {
    if (!k || !manifest[k] || entryFiles.has(manifest[k].file)) return;
    entryFiles.add(manifest[k].file);
    (manifest[k].imports || []).forEach(walk);
  })(entryKey);
  const preloadLinks = (pageIds) => {
    const files = new Set();
    const walk = (k) => {
      const m = manifest[k];
      if (!m || files.has(m.file) || entryFiles.has(m.file)) return;
      files.add(m.file);
      (m.imports || []).forEach(walk);
    };
    // "../pages/Home.tsx" (relative to src/lib) -> "src/pages/Home.tsx"
    pageIds.forEach((id) => walk(id.replace(/^\.\.\//, "src/")));
    return [...files]
      .map((f) => `<link rel="modulepreload" crossorigin href="/${f}">`)
      .join("\n    ");
  };

  const routes = allRoutes();
  console.log(`[ssg] prerendering ${routes.length} routes`);

  // The extra not-found route is written to dist/404.html, which GitHub Pages
  // serves (with a real 404 status) for any unknown URL.
  const NOT_FOUND = "/__not-found__";
  for (const route of [...routes, NOT_FOUND]) {
    try {
      const { html, helmet, pages } = render(route);

      // Splice Helmet output into the base template.
      const htmlAttrs = helmet.htmlAttributes.toString(); // e.g. lang="en"
      const titleTag  = helmet.title.toString();
      const metaTags  = helmet.meta.toString();
      const linkTags  = helmet.link.toString();
      const scriptTags = helmet.script.toString();

      let out = template;

      // <html lang="tr"> -> merge helmet htmlAttributes
      if (htmlAttrs) {
        out = out.replace(/<html\s+lang="[^"]*"/i, `<html ${htmlAttrs}`);
      }

      // Remove the base <title> line so the Helmet one wins.
      out = out.replace(/<title>[^<]*<\/title>\s*/i, "");
      // Remove base description/canonical/og:url — Helmet will replace them
      // with per-route versions.
      out = out.replace(/<meta\s+name="description"[^>]*>\s*/gi, "");
      out = out.replace(/<link\s+rel="canonical"[^>]*>\s*/gi, "");
      out = out.replace(/<meta\s+property="og:url"[^>]*>\s*/gi, "");
      out = out.replace(/<meta\s+property="og:title"[^>]*>\s*/gi, "");
      out = out.replace(/<meta\s+property="og:description"[^>]*>\s*/gi, "");
      out = out.replace(/<meta\s+name="twitter:title"[^>]*>\s*/gi, "");
      out = out.replace(/<meta\s+name="twitter:description"[^>]*>\s*/gi, "");
      // Drop template defaults that the page's Helmet already sets, so each
      // property appears exactly once (duplicate og:type confuses parsers).
      for (const [attr, key] of [
        ["property", "og:type"],
        ["property", "og:image"],
        ["name", "twitter:image"],
        ["name", "twitter:card"],
      ]) {
        if (metaTags.includes(`${attr}="${key}"`)) {
          const esc = key.replace(/[.:]/g, (c) => `\\${c}`);
          out = out.replace(new RegExp(`<meta\\s+${attr}="${esc}(:[a-z]+)?"[^>]*>\\s*`, "gi"), "");
        }
      }

      // Inject helmet head just before </head>.
      const headInject = [titleTag, metaTags, linkTags, scriptTags, preloadLinks(pages)]
        .filter(Boolean)
        .join("\n    ");
      out = out.replace("</head>", `    ${headInject}\n  </head>`);
      if (route === NOT_FOUND) {
        out = out.replace("</head>", `    <meta name="robots" content="noindex" />\n  </head>`);
        out = out.replace(/<title[^>]*><\/title>/, "<title>Sayfa bulunamadı | Yusuf Bayrak</title>");
      }

      // Hosting 301s slash-less directory URLs to the slash form, so point
      // internal links straight at the final URL (no redirect hop for
      // crawlers). Router links still navigate client-side via their `to`.
      const body = html.replace(
        /href="(\/[^"?#]*?)(?<!\/)([?#][^"]*)?"/g,
        (m, p1, rest = "") =>
          /\.[a-z0-9]{2,5}$/i.test(p1) ? m : `href="${p1}/${rest}"`
      );

      // Inject rendered app into #root for hydration.
      out = out.replace(
        '<div id="root"></div>',
        `<div id="root">${body}</div>`
      );

      // Resolve target file. `/` -> dist/index.html; `/foo` -> dist/foo/index.html.
      const target =
        route === NOT_FOUND
          ? path.join(DIST, "404.html")
          : route === "/"
          ? path.join(DIST, "index.html")
          : path.join(DIST, route.replace(/^\//, ""), "index.html");
      fs.mkdirSync(path.dirname(target), { recursive: true });
      fs.writeFileSync(target, out, "utf-8");
    } catch (err) {
      console.error(`[ssg] failed ${route}:`, err.message);
    }
  }

  console.log(`[ssg] done`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
