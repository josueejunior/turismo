import { cn } from "@/utils/cn";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  action?: React.ReactNode;
  className?: string;
};

export function SectionHeader({ eyebrow, title, action, className }: SectionHeaderProps) {
  return (
    <div className={cn("section-header", className)}>
      <div>
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h2>{title}</h2>
      </div>
      {action}
    </div>
  );
}
