import type { ProjectSummary } from "../types";

export const home = {
  path: "/en",
  seoTitle: "Yusuf Bayrak — B2B Lead Generation & AI Automation Expert",
  seoDescription:
    "Digital marketing specialist building end-to-end websites and B2B lead generation systems powered by AI automation.",
  heroLabel: "Digital Marketing | Lead Generation | Product Development",
  heroHeading: "Hi, I'm Yusuf Bayrak.",
  heroSubline:
    "I build websites and B2B lead generation systems end-to-end, powered by AI automation.",
  heroCta: "View Projects",
  heroCtaHref: "/en/projects",
  featuredDivider: "Featured Projects",
  viewAll: "View all projects",
  viewAllHref: "/en/projects",
  featured: [
    { slug: "adgusto", name: "AdGusto", description: "A SaaS product that accelerates competitive research and creative management through Meta Ads Library integration.", stack: ["SaaS", "Meta Ads", "Creative Ops"], impact: "Speeds up competitive research and creative workflows" },
    { slug: "brandog-marka-mcp", name: "Brandog & Marka-MCP", description: "A platform that connects the Turkish Patent Office database to AI via Model Context Protocol (MCP), unifying trademark research and case workflows in an automated, intelligent layer.", stack: ["MCP", "AI", "TÜRKPATENT"], impact: "Automates trademark registration workflows" },
    { slug: "buyume-otomasyon-altyapilari", name: "Growth & Automation Infrastructure", description: "Sustainable growth engines built for brands with modern low-code tools, automation systems and data-driven strategy.", stack: ["Low-code", "Automation", "Data Strategy"], impact: "Builds sustainable growth engines" },
  ] satisfies ProjectSummary[],
};
