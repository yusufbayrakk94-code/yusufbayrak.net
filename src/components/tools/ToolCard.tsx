import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Props {
  href: string;
  name: string;
  description: string;
  icon: LucideIcon;
  meta?: string;
}

// Shared card used by the free-tools hub (category cards) and the category
// pages (tool cards) so the visual pattern stays identical everywhere.
export function ToolCard({ href, name, description, icon: Icon, meta }: Props) {
  return (
    <Link
      to={href}
      aria-label={`${name}: ${description}`}
      className="group p-6 bg-card border border-border rounded-lg hover:border-accent/50 transition-colors block"
    >
      <div className="flex items-start gap-4">
        <div className="flex items-center justify-center w-10 h-10 bg-secondary rounded-lg shrink-0">
          <Icon className="h-5 w-5 text-accent" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between gap-2 mb-2">
            <h3 className="font-mono text-base text-foreground group-hover:text-accent transition-colors">{name}</h3>
            <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
          {meta && <p className="mt-3 font-mono text-xs text-accent">{meta}</p>}
        </div>
      </div>
    </Link>
  );
}
