import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { productsMetadata } from "@/lib/metadata";
import { StructuredData } from "@/components/seo/StructuredData";
import {
  getBreadcrumbSchema,
  getProductSchema,
} from "@/lib/structured-data";
import { Badge, Card } from "@/components/ui/Card";
import {
  FadeIn,
  AnimatedGradientBackground,
} from "@/components/ui/motion";
import { PRODUCTS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export const metadata: Metadata = productsMetadata;

function ProductDetail({
  product,
}: {
  product: typeof PRODUCTS.savarun | typeof PRODUCTS.lockAndKey;
}) {
  const isSavarun = product.id === "savarun";
  const features =
    "plannedFeatures" in product ? product.plannedFeatures : [];
  const roadmap = "roadmap" in product ? product.roadmap : [];

  return (
    <article id={product.id} className="scroll-mt-28">
      <FadeIn>
        <Card className="overflow-hidden">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <div className="mb-6 flex items-start justify-between gap-4">
                <div
                  className={cn(
                    "flex h-16 w-16 items-center justify-center rounded-2xl text-xl font-bold text-white",
                    isSavarun
                      ? "bg-gradient-to-br from-royal-500 to-purple-accent"
                      : "bg-gradient-to-br from-cyan-accent to-royal-500",
                  )}
                >
                  {isSavarun ? "SV" : "LK"}
                </div>
                <Badge variant="coming-soon">{product.status}</Badge>
              </div>

              <h2 className="font-display text-3xl font-bold">{product.name}</h2>
              <p className="mt-2 text-lg font-medium text-royal-500">
                {product.tagline}
              </p>
              <p className="text-body mt-4">{product.description}</p>

              {"importantNote" in product && product.importantNote && (
                <div className="mt-6 rounded-2xl border border-cyan-accent/20 bg-cyan-accent/5 p-4">
                  <p className="text-sm leading-relaxed text-[hsl(var(--foreground))]">
                    {product.importantNote}
                  </p>
                </div>
              )}

              {"privacyNote" in product && product.privacyNote && (
                <div className="mt-4 rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--muted))]/50 p-4">
                  <p className="text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">
                    {product.privacyNote}
                  </p>
                </div>
              )}
            </div>

            <div className="rounded-2xl border border-dashed border-[hsl(var(--border))] bg-[hsl(var(--muted))]/30 p-8">
              <p className="text-center text-xs font-semibold uppercase tracking-wider text-[hsl(var(--muted-foreground))]">
                Branded placeholder — real screenshots at launch
              </p>
              <div
                className={cn(
                  "mx-auto mt-8 flex h-48 w-full max-w-sm items-center justify-center rounded-2xl",
                  isSavarun
                    ? "bg-gradient-to-br from-royal-500/10 to-purple-accent/10"
                    : "bg-gradient-to-br from-cyan-accent/10 to-royal-500/10",
                )}
              >
                <span
                  className={cn(
                    "font-display text-4xl font-bold opacity-30",
                    isSavarun ? "text-royal-500" : "text-cyan-accent",
                  )}
                >
                  {isSavarun ? "SAVARUN" : "LOCK & KEY"}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-8 border-t border-[hsl(var(--border))] pt-10 md:grid-cols-2">
            <div>
              <h3 className="font-display text-lg font-bold">
                {isSavarun ? "Planned Features" : "Potential Features"}
              </h3>
              <ul className="mt-4 space-y-3">
                {features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-[hsl(var(--muted-foreground))]"
                  >
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-royal-500"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {roadmap.length > 0 && (
              <div>
                <h3 className="font-display text-lg font-bold">
                  Future Roadmap
                </h3>
                <ul className="mt-4 space-y-3">
                  {roadmap.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-[hsl(var(--muted-foreground))]"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </Card>
      </FadeIn>
    </article>
  );
}

export default function ProductsPage() {
  return (
    <>
      <StructuredData
        data={[
          getBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Products", path: "/products/" },
          ]),
          getProductSchema(PRODUCTS.savarun),
          getProductSchema(PRODUCTS.lockAndKey),
        ]}
      />

      <section className="relative overflow-hidden pt-28 lg:pt-36">
        <AnimatedGradientBackground />
        <div className="container-wide relative pb-12 lg:pb-16">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-royal-500">
              Products
            </p>
            <h1 className="heading-display text-balance">
              Two products. One standard of care.
            </h1>
            <p className="text-body mx-auto mt-6 max-w-2xl">
              SAVARUN and LOCK & KEY SKIN CARE are products of SAWARUN TECH
              PRIVATE LIMITED. Both are in active development and are not yet
              publicly available.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding border-t border-[hsl(var(--border))]">
        <div className="container-wide space-y-16">
          <ProductDetail product={PRODUCTS.savarun} />
          <ProductDetail product={PRODUCTS.lockAndKey} />
        </div>
      </section>
    </>
  );
}
