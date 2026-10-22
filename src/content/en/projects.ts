import type { ProjectDetail } from "../types";

export const projectsPage = {
  listPath: "/en/projects",
  seoTitle: "Projects — SaaS, MCP & Automation Work | Yusuf Bayrak",
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
    description: "Meta, Instagram, Google and LinkedIn ad management in one panel. AI makes reasoned suggestions, you approve them; a voice assistant calls incoming leads.",
    fullDescription: "AdGusto is an AI-powered ad management platform that brings your ad accounts into one panel. The AI continuously monitors your campaigns and prepares suggestions with their reasoning; you approve them, and nothing changes without your approval. A voice assistant calls incoming leads within minutes.",
    stack: ["AI", "Meta Ads", "Google Ads", "LinkedIn Ads", "Voice Assistant"],
    impact: "Brings ad management into one panel",
    challenges: [
      "Unifying Meta, Instagram, Google, YouTube and LinkedIn accounts in one panel",
      "Making AI suggestions explainable with their reasoning and expected impact",
      "Building an approval flow that never changes anything without consent and logs every step",
      "Connecting a voice assistant that calls new leads within minutes to the ad workflow",
    ],
    features: [
      "Reasoned AI suggestions with a one-step undoable approval flow",
      "Meta Ads, Instagram, Google Ads, YouTube and LinkedIn Ads integrations",
      "Voice assistant that calls leads and adds call summaries to the panel",
      "Creative studio for ad copy and visuals",
      "Per-client workspaces and shared reports for agencies",
    ],
    externalUrl: "https://adgusto.app",
  },
  {
    slug: "brandog-marka-mcp",
    name: "Brandog & Marka-MCP",
    description: "A platform connecting the Turkish Patent Office database to AI via Model Context Protocol (MCP) to automate trademark research and case management.",
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
