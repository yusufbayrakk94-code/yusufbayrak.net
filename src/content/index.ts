// Locale-aware content selector. Import the pair (TR + EN) once and pick by
// locale, so page components stay pure and don't have to know about the file
// layout.

import type { Locale } from "@/i18n/routes";
import { freeToolsPage as freeToolsTr, toolCategories as toolCategoriesTr, toolCategoriesUi as toolCategoriesUiTr } from "./tr/freeTools";
import { freeToolsPage as freeToolsEn, toolCategories as toolCategoriesEn, toolCategoriesUi as toolCategoriesUiEn } from "./en/freeTools";
export { pickSite, pickHome, pickAbout, pickContact, pickProjectsPage, pickProjects } from "./pickSite";
import * as trTools from "./tr/tools";
import * as enTools from "./en/tools";

export function pickFreeTools(l: Locale) { return l === "en" ? freeToolsEn : freeToolsTr; }
export function pickToolCategories(l: Locale) { return (l === "en" ? toolCategoriesEn : toolCategoriesTr) as unknown as ReadonlyArray<{ key: string; path: string; name: string; short: string; seoTitle: string; seoDescription: string; intro: string; tools: readonly string[]; sections: ReadonlyArray<{ heading: string; body: string }>; faqs: ReadonlyArray<{ q: string; a: string }> }>; }
export function pickToolCategoriesUi(l: Locale) { return l === "en" ? toolCategoriesUiEn : toolCategoriesUiTr; }
export function pickTools(l: Locale)     { return l === "en" ? enTools : trTools; }
