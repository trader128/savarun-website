import Link from "next/link";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

type ButtonProps = {
  href?: string;
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  className?: string;
  children: React.ReactNode;
  external?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  ariaLabel?: string;
};

const variants = {
  primary:
    "bg-royal-500 text-white hover:bg-royal-600 shadow-md shadow-royal-500/20 dark:shadow-royal-500/10",
  secondary:
    "bg-navy text-white hover:bg-navy-600 dark:bg-white dark:text-navy dark:hover:bg-white/90",
  ghost:
    "text-[hsl(var(--foreground))] hover:bg-[hsl(var(--muted))]",
  outline:
    "border border-[hsl(var(--border))] bg-transparent hover:bg-[hsl(var(--muted))] text-[hsl(var(--foreground))]",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  icon: Icon,
  iconPosition = "right",
  className,
  children,
  external,
  onClick,
  type = "button",
  disabled,
  ariaLabel,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-2xl font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    sizes[size],
    className,
  );

  const content = (
    <>
      {Icon && iconPosition === "left" && (
        <Icon className="h-4 w-4" aria-hidden="true" />
      )}
      {children}
      {Icon && iconPosition === "right" && (
        <Icon className="h-4 w-4" aria-hidden="true" />
      )}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={ariaLabel}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
}
