import { cn } from "./ui/utils";

interface PageHeaderProps {
  title: string;
  sticky?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export function PageHeader({ title, sticky, className, children }: PageHeaderProps) {
  return (
    <div
      className={cn(
        "border-b border-border px-6 py-3",
        sticky && "sticky top-0 z-10 bg-sidebar",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-4 min-h-[40px]">
        <h2 className="text-xl font-medium m-0 whitespace-nowrap">{title}</h2>
        {children}
      </div>
    </div>
  );
}
