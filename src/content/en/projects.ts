import type { ProjectDetail } from "../types";

export const projectsPage = {
  listPath: "/en/projects",
  seoTitle: "Projects | Yusuf Bayrak",
  seoDescription:
    "Products and projects I've built, including AdGusto, Brandog & Marka-MCP and Growth & Automation Infrastructure.",
  heading: "Projects",
  intro:
    "Projects built around Meta Ads Library tooling, trademark automation and data-driven growth infrastructure. Each one solves a real problem with measurable outcomes.",
  divider: "Projects",
  detailBaseHref: "/en/projects",
  backToProjects: "Back to Projects",
  challengesDivider: "Challenges",
  featuresDivider: "Features",
  impactLabel: "Impact",
  sourceCode: "Source Code",
  liveDemo: "Live Demo",
  notFoundTitle: "Error: Project Not Found — Yusuf Bayrak",
  notFoundText: "The project you're looking for does not exist.",
};

export const projects: ProjectDetail[] = [
  {
    slug: "adgusto",
    name: "AdGusto",
    description: "A SaaS product that accelerates competitive research and creative management through Meta Ads Library integration.",
    fullDescription: "AdGusto is a SaaS platform that analyses competitor creatives from the Meta Ads Library, manages your own creative workflow and speeds up how teams produce ads.",
    stack: ["SaaS", "Meta Ads", "Creative Ops", "React", "Node.js"],
    impact: "Speeds up competitive research and creative workflows",
    challenges: [
      "Reliably collecting high-volume data from the Meta Ads Library",
      "Categorising competitor creatives in meaningful ways",
      "Designing a fast, decision-supporting UI for teams",
      "Running a scalable SaaS backend cost-effectively",
    ],
    features: [
      "Competitor creative library with filtering",
      "Creative management board",
      "Meta Ads Library integration",
      "Team collaboration tools",
    ],
    externalUrl: "https://www.adgusto.app",
  },
  {
    slug: "brandog-marka-mcp",
    name: "Brandog & Marka-MCP",
    description: "A platform that connects the Turkish Patent Office database to AI via Model Context Protocol (MCP), unifying trademark research and case management in an automated, intelligent layer.",
    fullDescription: "Brandog & Marka-MCP powers trademark research, monitoring and case management on a single platform by connecting the TÜRKPATENT database to AI through Model Context Protocol (MCP).",
    stack: ["MCP", "AI", "TÜRKPATENT", "Node.js", "PostgreSQL"],
    impact: "Automates trademark registration workflows",
    challenges: [
      "Building a reliable, fast integration with TÜRKPATENT data",
      "Designing context-based AI flows aligned with MCP",
      "Adapting trademark-law processes to automation",
      "Delivering a UI that is understandable and trustworthy",
    ],
    features: [
      "TÜRKPATENT database integration",
      "MCP-based AI-assisted research",
      "Trademark case tracking",
      "Automated reporting and alerts",
    ],
    externalUrl: "https://brandog.lovable.app",
  },
  {
    slug: "buyume-otomasyon-altyapilari",
    name: "Growth & Automation Infrastructure",
    description: "Sustainable growth engines built for brands with modern low-code tools, automation systems and data-driven strategy.",
    fullDescription: "Sustainable growth engines designed for brands with low-code tools, automation systems and data-driven strategy. The goal: minimise repetitive work, speed up data-driven decisions and stand up scalable marketing & ops infrastructure.",
    stack: ["Low-code", "Automation", "Data Strategy", "n8n", "Make", "Airtable"],
    impact: "Builds sustainable growth engines",
    challenges: [
      "Merging different data sources into a single automation flow",
      "Building enterprise-grade reliability with low-code tools",
      "Making growth metrics observable in real time",
      "Preserving human oversight while automating processes",
    ],
    features: [
      "Low-code automation flows",
      "Data-driven growth dashboards",
      "Marketing and operations integrations",
      "Scalable process infrastructure",
    ],
  },
];
