import type { Metadata } from "next";
import { Building2, Target, Eye, Globe } from "lucide-react";
import { aboutMetadata } from "@/lib/metadata";
import { StructuredData } from "@/components/seo/StructuredData";
import { getBreadcrumbSchema } from "@/lib/structured-data";
import { SectionHeader, Card } from "@/components/ui/Card";
import { ValuesGrid } from "@/components/home/ValuesGrid";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  AnimatedGradientBackground,
} from "@/components/ui/motion";
import { COMPANY, formatLegalIdentifiers, INDUSTRIES } from "@/lib/constants";

export const metadata: Metadata = aboutMetadata;

export default function AboutPage() {
  return (
    <>
      <StructuredData
        data={getBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about/" },
        ])}
      />

      <section className="relative overflow-hidden pt-28 lg:pt-36">
        <AnimatedGradientBackground />
        <div className="container-wide relative pb-12 lg:pb-16">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-royal-500">
              About
            </p>
            <h1 className="heading-display text-balance">
              Building technology that respects everyday life
            </h1>
            <p className="text-body mx-auto mt-6 max-w-2xl">
              {COMPANY.name} is an Indian technology company developing
              products across fashion intelligence and dermatologist-guided
              skincare. We are early-stage, focused, and committed to doing
              things properly.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding border-t border-[hsl(var(--border))]">
        <div className="container-wide">
          <SectionHeader
            eyebrow="Company Overview"
            title="Who we are"
            description={`${COMPANY.name} is the legal entity behind our product brands. We distinguish clearly between the company and the products we build.`}
          />

          <StaggerContainer className="grid gap-6 md:grid-cols-2">
            <StaggerItem>
              <Card hover>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-royal-500/10 text-royal-500">
                  <Building2 className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="font-display text-xl font-bold">
                  {COMPANY.name}
                </h3>
                <p className="text-body mt-3 text-sm">
                  The corporate entity registered in India. All legal
                  obligations, registrations, and corporate communications are
                  in this name.
                </p>
                <dl className="mt-4 space-y-2 text-sm">
                  <div className="flex justify-between gap-4">
                    <dt className="text-[hsl(var(--muted-foreground))]">
                      CIN
                    </dt>
                    <dd className="text-right font-medium">{COMPANY.cin}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-[hsl(var(--muted-foreground))]">
                      PAN
                    </dt>
                    <dd className="font-medium">{COMPANY.pan}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-[hsl(var(--muted-foreground))]">
                      TAN
                    </dt>
                    <dd className="font-medium">{COMPANY.tan}</dd>
                  </div>
                  {COMPANY.gstin && (
                    <div className="flex justify-between gap-4">
                      <dt className="text-[hsl(var(--muted-foreground))]">
                        GSTIN
                      </dt>
                      <dd className="font-medium">{COMPANY.gstin}</dd>
                    </div>
                  )}
                </dl>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card hover>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-accent/10 text-purple-accent">
                  <Globe className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="font-display text-xl font-bold">Industries</h3>
                <ul className="mt-4 space-y-2">
                  {INDUSTRIES.map((industry) => (
                    <li
                      key={industry}
                      className="flex items-center gap-2 text-sm text-[hsl(var(--muted-foreground))]"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-royal-500" />
                      {industry}
                    </li>
                  ))}
                </ul>
              </Card>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      <section className="section-padding bg-[hsl(var(--muted))]/30">
        <div className="container-wide">
          <SectionHeader eyebrow="Direction" title="Mission & Vision" />
          <div className="grid gap-6 md:grid-cols-2">
            <FadeIn>
              <Card hover>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-royal-500/10 text-royal-500">
                  <Target className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="font-display text-xl font-bold">Mission</h3>
                <p className="text-body mt-3">{COMPANY.mission}</p>
              </Card>
            </FadeIn>
            <FadeIn delay={0.1}>
              <Card hover>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-accent/10 text-cyan-accent">
                  <Eye className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="font-display text-xl font-bold">Vision</h3>
                <p className="text-body mt-3">{COMPANY.vision}</p>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <SectionHeader
            eyebrow="Principles"
            title="Core values"
            description="These values guide how we design, build, and communicate — especially while our products are still in development."
          />
          <ValuesGrid />
        </div>
      </section>
    </>
  );
}
