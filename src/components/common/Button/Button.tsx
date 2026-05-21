import Link from "next/link";
import { cn } from "@/utils/cn";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
};

export function Button({ children, href, className, type = "button" }: ButtonProps) {
  const classes = cn("pill-button", className);

  if (href) {
    return (
      <Link className={classes} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} type={type}>
      {children}
    </button>
  );
}
