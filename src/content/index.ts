// Locale-aware content selector. Import the pair (TR + EN) once and pick by
// locale, so page components stay pure and don't have to know about the file
// layout.

import type { Locale } from "@/i18n/routes";
import { home as homeTr } from "./tr/home";
import { home as homeEn } from "./en/home";
import { about as aboutTr } from "./tr/about";
import { about as aboutEn } from "./en/about";
import { contact as contactTr } from "./tr/contact";
import { contact as contactEn } from "./en/contact";
import { freeToolsPage as freeToolsTr } from "./tr/freeTools";
import { freeToolsPage as freeToolsEn } from "./en/freeTools";
import { projectsPage as projectsPageTr, projects as projectsTr } from "./tr/projects";
import { projectsPage as projectsPageEn, projects as projectsEn } from "./en/projects";
import { site as siteTr } from "./tr/site";
import { site as siteEn } from "./en/site";
import * as trTools from "./tr/tools";
import * as enTools from "./en/tools";

export function pickHome(l: Locale)      { return l === "en" ? homeEn : homeTr; }
export function pickAbout(l: Locale)     { return l === "en" ? aboutEn : aboutTr; }
export function pickContact(l: Locale)   { return l === "en" ? contactEn : contactTr; }
export function pickFreeTools(l: Locale) { return l === "en" ? freeToolsEn : freeToolsTr; }
export function pickProjectsPage(l: Locale) { return l === "en" ? projectsPageEn : projectsPageTr; }
export function pickProjects(l: Locale)  { return l === "en" ? projectsEn : projectsTr; }
export function pickSite(l: Locale)      { return l === "en" ? siteEn : siteTr; }
export function pickTools(l: Locale)     { return l === "en" ? enTools : trTools; }
