import type { Metadata } from "next";
import { Mail, MapPin, Phone, Building2 } from "lucide-react";
import { contactMetadata } from "@/lib/metadata";
import { StructuredData } from "@/components/seo/StructuredData";
import { getBreadcrumbSchema } from "@/lib/structured-data";
import { SectionHeader, Card } from "@/components/ui/Card";
import { ContactForm } from "@/components/contact/ContactForm";
import { FadeIn, AnimatedGradientBackground } from "@/components/ui/motion";
import { COMPANY, formatLegalIdentifiers } from "@/lib/constants";

export const metadata: Metadata = contactMetadata;

export default function ContactPage() {
  return (
    <>
      <StructuredData
        data={getBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact/" },
        ])}
      />

      <section className="relative overflow-hidden pt-28 lg:pt-36">
        <AnimatedGradientBackground />
        <div className="container-wide relative pb-12 lg:pb-16">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-royal-500">
              Contact
            </p>
            <h1 className="heading-display text-balance">Get in touch</h1>
            <p className="text-body mx-auto mt-6 max-w-2xl">
              For general enquiries, partnerships, or press — reach out to{" "}
              {COMPANY.name}. We read every message.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding border-t border-[hsl(var(--border))]">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <SectionHeader
                centered={false}
                eyebrow="Contact Details"
                title="How to reach us"
                className="mb-8"
              />

              <div className="space-y-4">
                <Card glass={false} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-royal-500/10 text-royal-500">
                    <Mail className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold">Email</h3>
                    <a
                      href={`mailto:${COMPANY.contactEmail}`}
                      className="mt-1 block text-sm text-royal-500 hover:underline"
                    >
                      {COMPANY.contactEmail}
                    </a>
                  </div>
                </Card>

                <Card glass={false} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-accent/10 text-purple-accent">
                    <Phone className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold">Phone</h3>
                    <a
                      href="tel:+917689070708"
                      className="mt-1 block text-sm text-royal-500 hover:underline"
                    >
                      {COMPANY.contactPhone}
                    </a>
                  </div>
                </Card>

                <Card glass={false} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-accent/10 text-cyan-accent">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold">
                      Registered Address
                    </h3>
                    <address className="mt-1 not-italic text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">
                      {COMPANY.registeredAddressLines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </address>
                  </div>
                </Card>

                <Card glass={false} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy/10 text-navy dark:text-white">
                    <Building2 className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold">Legal Entity</h3>
                    <p className="mt-1 text-sm text-[hsl(var(--muted-foreground))]">
                      {COMPANY.name}
                    </p>
                    <p className="mt-1 text-xs text-[hsl(var(--muted-foreground))]">
                      {formatLegalIdentifiers()}
                    </p>
                  </div>
                </Card>
              </div>
            </div>

            <div className="lg:col-span-3">
              <FadeIn>
                <Card>
                  <h2 className="font-display text-xl font-bold">
                    Send a message
                  </h2>
                  <p className="mt-2 text-sm text-[hsl(var(--muted-foreground))]">
                    This form opens your email client with a pre-filled message.
                    No data is stored on our servers.
                  </p>
                  <ContactForm />
                </Card>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
