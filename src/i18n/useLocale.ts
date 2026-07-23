import { useLocation } from "react-router-dom";
import { getLocaleFromPath, type Locale } from "./routes";

export function useLocale(): Locale {
  const { pathname } = useLocation();
  return getLocaleFromPath(pathname);
}

export function t<T>(locale: Locale, dict: Record<Locale, T>): T {
  return dict[locale];
}
