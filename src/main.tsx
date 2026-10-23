import { createRoot, hydrateRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import App, { preloadRoute } from "./App.tsx";
import "./index.css";
import { installClickTracking } from "@/lib/analytics";

installClickTracking();

const container = document.getElementById("root")!;
const tree = (
  <HelmetProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HelmetProvider>
);

// Load the current route's page chunk first, then hydrate over the SSG HTML
// (or render fresh when there is no prerendered markup, e.g. in dev).
preloadRoute(window.location.pathname)
  .catch(() => { /* fall through: Suspense will load it */ })
  .then(() => {
    if (container.hasChildNodes()) {
      hydrateRoot(container, tree);
    } else {
      createRoot(container).render(tree);
    }
  });
