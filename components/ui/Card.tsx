import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
};

export function Card({
  children,
  className,
  hover = false,
  glass = true,
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl p-6 sm:p-8",
        glass ? "glass-card" : "border border-[hsl(var(--border))] bg-[hsl(var(--card))]",
        hover &&
          "transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-royal-500/5",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function Badge({
  children,
  variant = "default",
  className,
}: {
  children: React.ReactNode;
  variant?: "default" | "coming-soon" | "outline";
  className?: string;
}) {
  const variants = {
    default: "bg-royal-500/10 text-royal-700 dark:text-royal-300",
    "coming-soon":
      "bg-purple-accent/10 text-purple-accent dark:text-purple-light border border-purple-accent/20",
    outline: "border border-[hsl(var(--border))] text-[hsl(var(--muted-foreground))]",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  centered = true,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mb-12 max-w-3xl",
        centered && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-royal-500">
          {eyebrow}
        </p>
      )}
      <h2 className="heading-section text-balance text-[hsl(var(--foreground))]">
        {title}
      </h2>
      {description && (
        <p className="text-body mt-4 text-balance">{description}</p>
      )}
    </div>
  );
}
