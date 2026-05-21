import { cn } from "@/utils/cn";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
};

export function Badge({ children, className }: BadgeProps) {
  return <span className={cn("eyebrow", className)}>{children}</span>;
}
