import type { ComponentType } from "react";

// Route-level code splitting that stays compatible with SSG + hydration.
//
// - Every page lives in its own chunk (import.meta.glob below).
// - Server (scripts/ssg.mjs): `preloadAllPages()` resolves every page module
//   before rendering, so renderToString renders the real page synchronously.
// - Client (main.tsx): the current route's page is preloaded before
//   hydrateRoot, so the first render matches the prerendered HTML.
// - Client-side navigation to a not-yet-loaded page suspends (the <Suspense>
//   boundary in App.tsx) until its chunk arrives.
// - `usedPageIds` records which pages a server render touched, so the SSG
//   script can emit <link rel="modulepreload"> for exactly those chunks.

type PageModule = { default: ComponentType<Record<string, unknown>> };
const loaders = import.meta.glob<PageModule>("../pages/**/*.tsx");

const loaded = new Map<string, ComponentType<Record<string, unknown>>>();
const pending = new Map<string, Promise<void>>();
export const usedPageIds = new Set<string>();

function load(id: string): Promise<void> {
  if (loaded.has(id)) return Promise.resolve();
  let p = pending.get(id);
  if (!p) {
    const loader = loaders[id];
    if (!loader) throw new Error(`[lazyPage] unknown page: ${id}`);
    p = loader().then((m) => { loaded.set(id, m.default); });
    pending.set(id, p);
  }
  return p;
}

export type LazyPage = ComponentType<Record<string, unknown>> & { preload: () => Promise<void>; pageId: string };

/** `id` is relative to src/lib, e.g. "../pages/Home.tsx". */
export function lazyPage(id: string): LazyPage {
  const Page = ((props: Record<string, unknown>) => {
    usedPageIds.add(id);
    const Comp = loaded.get(id);
    if (!Comp) throw load(id); // suspends until the chunk is loaded
    return <Comp {...props} />;
  }) as LazyPage;
  Page.preload = () => load(id);
  Page.pageId = id;
  Page.displayName = `LazyPage(${id})`;
  return Page;
}

export async function preloadAllPages() {
  await Promise.all(Object.keys(loaders).map(load));
}
