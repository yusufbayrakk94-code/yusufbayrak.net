import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { execSync } from "child_process";
import { componentTagger } from "lovable-tagger";

// Runs scripts/generate-sitemap.mjs at dev-server start and after each
// production build so public/sitemap.xml and dist/sitemap.xml stay in sync
// with the route inventory. Full SSG prerender happens via `npm run build`.
function sitemapPlugin() {
  return {
    name: "sitemap-runner",
    configureServer() {
      try {
        execSync("node scripts/generate-sitemap.mjs public/sitemap.xml", { stdio: "inherit" });
      } catch { /* non-fatal in dev */ }
    },
    closeBundle() {
      // After `vite build` writes dist/, refresh both files.
      const dist = path.resolve(__dirname, "dist");
      if (fs.existsSync(dist)) {
        try {
          execSync(
            `node scripts/generate-sitemap.mjs public/sitemap.xml dist/sitemap.xml`,
            { stdio: "inherit" }
          );
        } catch { /* non-fatal */ }
      }
    },
  };
}

export default defineConfig(({ mode }) => ({
  base: "/",
  server: { host: "::", port: 8080 },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    sitemapPlugin(),
  ].filter(Boolean),
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
  build: {
    // The server build uses --ssr src/entry-server.tsx from the npm script.
    outDir: "dist",
    emptyOutDir: true,
  },
  ssr: {
    // Bundle these into the server build so Node can execute them without
    // ESM/CJS interop hiccups.
    noExternal: ["react-helmet-async", "react-router-dom"],
  },
}));
