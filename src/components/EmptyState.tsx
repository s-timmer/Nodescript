import { Button } from "./ui/button";
import type { LucideIcon } from "lucide-react";

interface EmptyStateProps {
  icon: LucideIcon;
  description: string;
  action?: React.ReactNode;
  tips?: string[];
  learnMoreText?: string;
}

export function EmptyState({ icon: Icon, description, action, tips, learnMoreText }: EmptyStateProps) {
  return (
    <div className="text-center max-w-md">
      <Icon className="size-10 text-muted-foreground/50 mx-auto mb-4" />
      <p className="text-muted-foreground text-sm mb-6">{description}</p>
      {tips && tips.length > 0 && (
        <div className="bg-muted/50 rounded-lg p-5 mb-6 text-left">
          <p className="text-sm font-medium mb-3">Quick Tips:</p>
          <ul className="space-y-1.5">
            {tips.map((tip, i) => (
              <li key={i} className="text-xs text-muted-foreground flex gap-2">
                <span className="text-primary mt-0.5 shrink-0">•</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      {action}
      {learnMoreText && (
        <div className="mt-4">
          <Button variant="link" className="text-primary text-xs h-auto p-0">
            {learnMoreText}
          </Button>
        </div>
      )}
    </div>
  );
}
