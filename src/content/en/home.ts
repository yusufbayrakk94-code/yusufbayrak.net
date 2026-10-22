import type { ProjectSummary } from "../types";

export const home = {
  path: "/en",
  seoTitle: "Yusuf Bayrak — B2B Lead Generation & AI Automation",
  seoDescription:
    "Yusuf Bayrak's personal site. B2B performance marketing insights, digital growth systems and free SaaS calculators.",
  heroLabel: "Digital Marketing | Lead Generation | Product Development",
  heroHeading: "Hi, I'm Yusuf Bayrak.",
  heroSubline:
    "As a Digital Marketing Specialist, I develop website setup, ad management and lead generation systems for B2B and e-commerce brands.",
  heroCta: "View Projects",
  heroCtaHref: "/en/projects",
  featuredDivider: "Featured Projects",
  viewAll: "View all projects",
  viewAllHref: "/en/projects",
  featured: [
    { slug: "adgusto", name: "AdGusto", description: "Meta, Instagram, Google and LinkedIn ad management in one panel. AI makes reasoned suggestions, you approve them; a voice assistant calls incoming leads.", stack: ["AI", "Meta Ads", "Google Ads"], impact: "Brings ad management into one panel" },
    { slug: "brandog-marka-mcp", name: "Brandog & Marka-MCP", description: "A platform that connects the Turkish Patent Office database to AI via Model Context Protocol (MCP), unifying trademark research and case workflows in an automated, intelligent layer.", stack: ["MCP", "AI", "TÜRKPATENT"], impact: "Automates trademark registration workflows" },
    { slug: "buyume-otomasyon-altyapilari", name: "Growth & Automation Infrastructure", description: "Sustainable growth engines built for brands with modern low-code tools, automation systems and data-driven strategy.", stack: ["Low-code", "Automation", "Data Strategy"], impact: "Builds sustainable growth engines" },
  ] satisfies ProjectSummary[],
};
