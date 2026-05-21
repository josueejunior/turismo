import { cn } from "@/utils/cn";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return <article className={cn("content-block", className)}>{children}</article>;
}
