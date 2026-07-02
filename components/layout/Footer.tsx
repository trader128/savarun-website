import Link from "next/link";
import {
  COMPANY,
  FOOTER_PRODUCTS,
  formatLegalIdentifiers,
  LEGAL_LINKS,
  NAV_LINKS,
} from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[hsl(var(--border))] bg-[hsl(var(--muted))]/30">
      <div className="container-wide section-padding pb-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-royal-500 to-purple-accent text-sm font-bold text-white">
                S
              </div>
              <span className="font-display text-sm font-bold">
                SAWARUN TECH
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">
              {COMPANY.tagline}
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[hsl(var(--foreground))]">
              Navigation
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[hsl(var(--muted-foreground))] transition-colors hover:text-royal-500"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[hsl(var(--foreground))]">
              Products
            </h3>
            <ul className="space-y-3">
              {FOOTER_PRODUCTS.map((product) => (
                <li key={product.href}>
                  <Link
                    href={product.href}
                    className="text-sm text-[hsl(var(--muted-foreground))] transition-colors hover:text-royal-500"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[hsl(var(--foreground))]">
              Legal
            </h3>
            <ul className="space-y-3">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[hsl(var(--muted-foreground))] transition-colors hover:text-royal-500"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-[hsl(var(--border))] pt-8">
          <div className="flex flex-col gap-4 text-sm text-[hsl(var(--muted-foreground))]">
            <p>
              © {currentYear} {COMPANY.name}. All Rights Reserved.
            </p>
            <p>
              SAVARUN is a product of {COMPANY.name}. LOCK & KEY SKIN CARE is
              a product of {COMPANY.name}.
            </p>
            <p>Registered in India.</p>
            <p>{formatLegalIdentifiers()}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
