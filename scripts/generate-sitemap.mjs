// Build-time sitemap generator. Writes to public/sitemap.xml (served by the
// dev server and copied into the build) and dist/sitemap.xml (post-build).
// Emits xhtml:link rel="alternate" hreflang for every TR<->EN pair.

import fs from "node:fs";
import path from "node:path";
import { SITE_URL, sitemapEntries } from "./routes.mjs";

function build() {
  const entries = sitemapEntries();
  const urls = entries
    .map((e) => {
      const alternates = e.alternates
        ? [
            `    <xhtml:link rel="alternate" hreflang="${e.alternates.selfLang}" href="${SITE_URL}${e.alternates.self}" />`,
            `    <xhtml:link rel="alternate" hreflang="${e.alternates.altLang}" href="${SITE_URL}${e.alternates.alt}" />`,
            `    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}/" />`,
          ].join("\n")
        : null;
      return [
        `  <url>`,
        `    <loc>${SITE_URL}${e.loc}</loc>`,
        alternates,
        `    <changefreq>${e.changefreq}</changefreq>`,
        `    <priority>${e.priority}</priority>`,
        `  </url>`,
      ]
        .filter(Boolean)
        .join("\n");
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;
}

const xml = build();
const targets = process.argv.slice(2);
if (targets.length === 0) targets.push("public/sitemap.xml");
for (const t of targets) {
  const abs = path.resolve(process.cwd(), t);
  fs.mkdirSync(path.dirname(abs), { recursive: true });
  fs.writeFileSync(abs, xml, "utf-8");
  console.log(`sitemap.xml -> ${t} (${sitemapEntries().length} urls)`);
}
