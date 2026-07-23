import { Link } from "react-router-dom";
import { TechTag } from "./TechTag";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  name: string;
  description: string;
  stack: string[];
  impact: string;
  slug: string;
  href?: string;        // external URL override
  baseHref?: string;    // e.g. "/projeler" or "/en/projects"
  className?: string;
}

export function ProjectCard({ name, description, stack, impact, slug, href, baseHref, className }: ProjectCardProps) {
  const isExternal = href?.startsWith("http") ?? false;
  const to = `${baseHref ?? "/projeler"}/${slug}`;

  const content = (
    <article
      className={cn(
        "group p-6 bg-card border border-border rounded-lg transition-all hover:border-accent/50 hover:bg-card/80 cursor-pointer",
        className
      )}
    >
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-mono text-lg font-medium text-foreground group-hover:text-accent transition-colors">{name}</h3>
        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
      </div>
      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{description}</p>
      {stack.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {stack.map((tech) => (<TechTag key={tech}>{tech}</TechTag>))}
        </div>
      )}
      {impact && (
        <div className="pt-4 border-t border-border">
          <span className="font-mono text-xs text-accent">
            <span className="text-muted-foreground">{"//"}</span> {impact}
          </span>
        </div>
      )}
    </article>
  );

  return isExternal ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className="block">{content}</a>
  ) : (
    <Link to={to} className="block">{content}</Link>
  );
}
