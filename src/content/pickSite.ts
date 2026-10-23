// Lightweight pickers for layout/basic pages. Kept separate from ./index.ts so
// the site header and small pages don't pull every tool's TR+EN copy into
// their bundle (index.ts re-exports these for existing imports).
import type { Locale } from "@/i18n/routes";
import { site as siteTr } from "./tr/site";
import { site as siteEn } from "./en/site";
import { home as homeTr } from "./tr/home";
import { home as homeEn } from "./en/home";
import { about as aboutTr } from "./tr/about";
import { about as aboutEn } from "./en/about";
import { contact as contactTr } from "./tr/contact";
import { contact as contactEn } from "./en/contact";
import { projectsPage as projectsPageTr, projects as projectsTr } from "./tr/projects";
import { projectsPage as projectsPageEn, projects as projectsEn } from "./en/projects";

export function pickSite(l: Locale)      { return l === "en" ? siteEn : siteTr; }
export function pickHome(l: Locale)      { return l === "en" ? homeEn : homeTr; }
export function pickAbout(l: Locale)     { return l === "en" ? aboutEn : aboutTr; }
export function pickContact(l: Locale)   { return l === "en" ? contactEn : contactTr; }
export function pickProjectsPage(l: Locale) { return l === "en" ? projectsPageEn : projectsPageTr; }
export function pickProjects(l: Locale)  { return l === "en" ? projectsEn : projectsTr; }
