import { cn } from "./ui/utils";

interface PageContentProps {
  centered?: boolean;
  className?: string;
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
}

export function PageContent({ centered, className, children, onClick }: PageContentProps) {
  return (
    <div
      className={cn(
        "flex-1 p-6",
        centered && "flex items-center justify-center",
        className,
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
