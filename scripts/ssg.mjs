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
  const { render } = await import(pathToFileURL(SERVER_ENTRY).href);

  const routes = allRoutes();
  console.log(`[ssg] prerendering ${routes.length} routes`);

  for (const route of routes) {
    try {
      const { html, helmet } = render(route);

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

      // Inject helmet head just before </head>.
      const headInject = [titleTag, metaTags, linkTags, scriptTags]
        .filter(Boolean)
        .join("\n    ");
      out = out.replace("</head>", `    ${headInject}\n  </head>`);

      // Inject rendered app into #root for hydration.
      out = out.replace(
        '<div id="root"></div>',
        `<div id="root">${html}</div>`
      );

      // Resolve target file. `/` -> dist/index.html; `/foo` -> dist/foo/index.html.
      const target =
        route === "/"
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
