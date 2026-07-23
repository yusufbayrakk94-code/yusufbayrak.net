import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { getAlternateRoute, getLocaleFromPath } from "@/i18n/routes";

// Minimalist TR / EN pill switcher. Reads the current pathname, looks up the
// counterpart in the route map, and renders a Link that navigates directly
// there. When no counterpart exists (e.g. a TR-only blog post accessed from
// EN), it falls back to the /en or / home so the user never sees a 404.

export function LanguageSwitcher({ className }: { className?: string }) {
  const { pathname } = useLocation();
  const current = getLocaleFromPath(pathname);
  const trTarget = current === "tr" ? pathname : getAlternateRoute(pathname, "tr") ?? "/";
  const enTarget = current === "en" ? pathname : getAlternateRoute(pathname, "en") ?? "/en";

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-md border border-border bg-card p-0.5 font-mono text-[11px]",
        className
      )}
      role="group"
      aria-label="Dil seçici / Language selector"
    >
      <Link
        to={trTarget}
        aria-current={current === "tr" ? "true" : undefined}
        className={cn(
          "px-2 py-1 rounded transition-colors",
          current === "tr"
            ? "bg-accent text-accent-foreground"
            : "text-muted-foreground hover:text-accent"
        )}
      >
        TR
      </Link>
      <Link
        to={enTarget}
        aria-current={current === "en" ? "true" : undefined}
        className={cn(
          "px-2 py-1 rounded transition-colors",
          current === "en"
            ? "bg-accent text-accent-foreground"
            : "text-muted-foreground hover:text-accent"
        )}
      >
        EN
      </Link>
    </div>
  );
}
