import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider, type FilledContext } from "react-helmet-async";
import App from "./App";
import "./index.css";

// Server entry used by scripts/ssg.mjs to prerender each route into a real
// index.html. Returns the rendered #root HTML plus the collected Helmet
// state so the SSG script can splice per-route <title>, <meta>, <link>, etc.
// into the base HTML template.

export interface RenderResult {
  html: string;
  helmet: FilledContext["helmet"];
}

export function render(url: string): RenderResult {
  const helmetContext: Partial<FilledContext> = {};
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </HelmetProvider>
  );
  return { html, helmet: (helmetContext as FilledContext).helmet };
}
