import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge, Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/motion";
import { PRODUCTS } from "@/lib/constants";
import { cn } from "@/lib/utils";

type Product = typeof PRODUCTS.savarun | typeof PRODUCTS.lockAndKey;

export function ProductPreview({ product }: { product: Product }) {
  const isSavarun = product.id === "savarun";

  return (
    <FadeIn>
      <Card hover className="relative h-full overflow-hidden">
        <div
          className={cn(
            "absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-20 blur-2xl",
            isSavarun ? "bg-royal-500" : "bg-cyan-accent",
          )}
          aria-hidden="true"
        />

        <div className="relative">
          <div className="mb-6 flex items-start justify-between gap-4">
            <div
              className={cn(
                "flex h-14 w-14 items-center justify-center rounded-2xl text-lg font-bold text-white",
                isSavarun
                  ? "bg-gradient-to-br from-royal-500 to-purple-accent"
                  : "bg-gradient-to-br from-cyan-accent to-royal-500",
              )}
              aria-hidden="true"
            >
              {isSavarun ? "SV" : "LK"}
            </div>
            <Badge variant="coming-soon">{product.status}</Badge>
          </div>

          <h3 className="font-display text-2xl font-bold">{product.name}</h3>
          <p className="mt-1 text-sm font-medium text-royal-500">
            {product.tagline}
          </p>
          <p className="text-body mt-4 text-sm">{product.description}</p>

          <div className="mt-6 rounded-2xl border border-dashed border-[hsl(var(--border))] bg-[hsl(var(--muted))]/50 p-6">
            <p className="text-center text-xs font-medium uppercase tracking-wider text-[hsl(var(--muted-foreground))]">
              Product preview — launching soon
            </p>
            <div className="mt-4 space-y-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-2 rounded-full bg-[hsl(var(--border))]"
                  style={{ width: `${100 - i * 15}%` }}
                  aria-hidden="true"
                />
              ))}
            </div>
          </div>

          <Link
            href={`/products/#${product.id}`}
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-royal-500 transition-colors hover:text-royal-600"
          >
            Learn more
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </Card>
    </FadeIn>
  );
}
