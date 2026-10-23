// Thin GA4 event helpers. gtag is loaded in index.html (G-KZKJSJYX30); every
// call is a no-op during SSG or when the tag is blocked.
type Params = Record<string, string | number | boolean | undefined>;

export function track(event: string, params: Params = {}) {
  if (typeof window === "undefined") return;
  const w = window as unknown as { gtag?: (...args: unknown[]) => void };
  if (typeof w.gtag !== "function") return;
  w.gtag("event", event, { page_path: window.location.pathname, ...params });
}

// Delegated click tracking for contact intents (email / LinkedIn / social)
// anywhere on the site — header, footer, contact page, about page.
export function installClickTracking() {
  if (typeof document === "undefined") return;
  document.addEventListener(
    "click",
    (e) => {
      const a = (e.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!a) return;
      const href = a.getAttribute("href") || "";
      let method: string | null = null;
      if (href.startsWith("mailto:")) method = "email";
      else if (/linkedin\.com\//i.test(href)) method = "linkedin";
      else if (/(^|\/\/)(www\.)?(x|twitter)\.com\//i.test(href)) method = "x";
      else if (/instagram\.com\//i.test(href)) method = "instagram";
      if (method) track("contact_click", { method, link_url: href });
    },
    { capture: true }
  );
}
