// Legacy URL redirects for statically hosted (GitHub Pages) builds.
// The host cannot emit real 301s, so every legacy path gets a physical
// index.html that (a) declares the new URL as canonical, (b) instructs
// crawlers not to index the stub, and (c) meta-refreshes real visitors.
// Google treats a canonical + instant refresh stub as a permanent redirect.

import fs from "node:fs";
import path from "node:path";
import { SITE_URL, STATIC_EN, withSlash } from "./routes.mjs";

const DIST = path.resolve(process.cwd(), "dist");

// old prefix -> new prefix
const PREFIX_REDIRECTS = [
  { from: "/en/free-marketing-tools", to: "/en/free-tools" },
];

export function legacyRedirects() {
  const out = [];
  for (const { from, to } of PREFIX_REDIRECTS) {
    for (const route of STATIC_EN) {
      if (route === to) out.push({ from, to });
      else if (route.startsWith(`${to}/`))
        out.push({ from: `${from}/${route.slice(to.length + 1)}`, to: route });
    }
  }
  return out;
}

function stub(target) {
  const url = `${SITE_URL}${withSlash(target)}`;
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Redirecting…</title>
    <link rel="canonical" href="${url}" />
    <meta name="robots" content="noindex, follow" />
    <meta http-equiv="refresh" content="0; url=${url}" />
    <script>window.location.replace(${JSON.stringify(withSlash(target))});</script>
  </head>
  <body><p>This page has moved to <a href="${url}">${url}</a>.</p></body>
</html>
`;
}

function main() {
  const list = legacyRedirects();
  for (const { from, to } of list) {
    const file = path.join(DIST, from.replace(/^\//, ""), "index.html");
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, stub(to), "utf-8");
  }
  console.log(`[redirects] wrote ${list.length} legacy redirect stubs`);
}

main();
