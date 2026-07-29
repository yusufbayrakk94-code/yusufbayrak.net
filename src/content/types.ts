// Shared shapes for locale content files. Each per-page content file exports
// the same structure for TR and EN so page components can consume either.

export interface ProjectSummary {
  slug: string;
  name: string;
  description: string;
  stack: string[];
  impact: string;
}

export interface ProjectDetail extends ProjectSummary {
  fullDescription: string;
  challenges: string[];
  features: string[];
  externalUrl?: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface ToolContent {
  slug: string;
  path: string;
  title: string;
  description: string;
  intro: string;
  seoParagraphs: Array<{ heading?: string; body: string }>;
  faqs: FaqItem[];
  /** schema.org applicationCategory override (defaults to BusinessApplication). */
  applicationCategory?: string;
  /** Internal links to sibling tools, rendered in the "Related tools" block. */
  relatedTools?: Array<{ label: string; href: string; note?: string }>;
  /** Internal link to a related blog post. */
  relatedPost?: { label: string; href: string };
  /** Outbound reference link (opens in a new tab). */
  externalSource?: { label: string; href: string };
}
