import { cn } from "@/utils/cn";

type TagProps = {
  children: React.ReactNode;
  className?: string;
};

export function Tag({ children, className }: TagProps) {
  return <span className={cn("category-chip", className)}>{children}</span>;
}
