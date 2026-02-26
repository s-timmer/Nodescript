import { Button } from "./ui/button";
import { cn } from "./ui/utils";

interface PageFooterLinkProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

export function PageFooterLink({ href, onClick, children }: PageFooterLinkProps) {
  if (href) {
    return (
      <Button variant="link" className="h-auto p-0 text-foreground text-sm" asChild>
        <a href={href}>{children}</a>
      </Button>
    );
  }
  return (
    <Button variant="link" className="h-auto p-0 text-foreground text-sm" onClick={onClick}>
      {children}
    </Button>
  );
}

interface PageFooterProps {
  className?: string;
  children?: React.ReactNode;
}

export function PageFooter({ className, children }: PageFooterProps) {
  return (
    <div className={cn("border-t border-border px-6 py-[18px] flex items-center justify-start gap-6", className)}>
      <PageFooterLink href="#docs">Docs</PageFooterLink>
      <PageFooterLink href="#support">Support</PageFooterLink>
      {children}
    </div>
  );
}
