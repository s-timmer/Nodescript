import { cn } from "./ui/utils";

interface SectionHeadingProps {
  className?: string;
  children: React.ReactNode;
}

export function SectionHeading({ className, children }: SectionHeadingProps) {
  return (
    <h3 className={cn("text-base font-medium", className)}>
      {children}
    </h3>
  );
}
