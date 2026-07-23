import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import "./index.css";

// Server entry used by scripts/ssg.mjs to prerender each route into a real
// index.html. Returns the rendered #root HTML plus the collected Helmet
// state so the SSG script can splice per-route <title>, <meta>, <link>, etc.
// into the base HTML template.

// Shape of the object react-helmet-async writes onto the context after render.
// Typed loosely since the library doesn't export FilledContext in v3.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function render(url: string): { html: string; helmet: any } {
  const helmetContext: Record<string, unknown> = {};
  const html = renderToString(
    <HelmetProvider context={helmetContext as never}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </HelmetProvider>
  );
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return { html, helmet: (helmetContext as any).helmet };
}
