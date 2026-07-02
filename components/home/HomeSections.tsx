import {
  ArrowRight,
  Sparkles,
  Shield,
  Layers,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge, Card, SectionHeader } from "@/components/ui/Card";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  AnimatedGradientBackground,
} from "@/components/ui/motion";
import { ProductPreview } from "@/components/home/ProductPreview";
import { ValuesGrid } from "@/components/home/ValuesGrid";
import { COMPANY, INDUSTRIES, PRODUCTS } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-28 lg:pt-36">
      <AnimatedGradientBackground />
      <div className="container-wide relative pb-20 pt-12 lg:pb-32 lg:pt-20">
        <FadeIn className="mx-auto max-w-4xl text-center">
          <Badge variant="outline" className="mb-6">
            {COMPANY.name}
          </Badge>
          <h1 className="heading-display text-balance">
            <span className="gradient-text">{COMPANY.tagline}</span>
          </h1>
          <p className="text-body mx-auto mt-6 max-w-2xl text-balance">
            We are building thoughtfully designed technology products — in
            fashion intelligence and dermatologist-guided skincare — for
            everyday life.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href="/products/" icon={ArrowRight}>
              Explore Products
            </Button>
            <Button href="/about/" variant="outline">
              About Us
            </Button>
          </div>
        </FadeIn>

        <FadeIn delay={0.2} className="mt-16 lg:mt-24">
          <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-3">
            {INDUSTRIES.slice(0, 3).map((industry) => (
              <div
                key={industry}
                className="glass-card rounded-2xl px-4 py-3 text-center text-sm font-medium text-[hsl(var(--muted-foreground))]"
              >
                {industry}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export function MissionSection() {
  return (
    <section className="section-padding bg-[hsl(var(--muted))]/30">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Our Purpose"
          title="Technology with intention"
          description="SAWARUN TECH PRIVATE LIMITED exists to build products that earn trust through thoughtful design — not hype."
        />
        <StaggerContainer className="grid gap-6 md:grid-cols-2">
          <StaggerItem>
            <Card hover>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-royal-500/10 text-royal-500">
                <Sparkles className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="font-display text-xl font-bold">Mission</h3>
              <p className="text-body mt-3">{COMPANY.mission}</p>
            </Card>
          </StaggerItem>
          <StaggerItem>
            <Card hover>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-accent/10 text-purple-accent">
                <Layers className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="font-display text-xl font-bold">Vision</h3>
              <p className="text-body mt-3">{COMPANY.vision}</p>
            </Card>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}

export function ProductsSection() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Products"
          title="What we are building"
          description="Two flagship products in active development. Neither is publicly launched — both are coming soon."
        />
        <div className="grid gap-8 lg:grid-cols-2">
          <ProductPreview product={PRODUCTS.savarun} />
          <ProductPreview product={PRODUCTS.lockAndKey} />
        </div>
      </div>
    </section>
  );
}

export function TrustSection() {
  const pillars = [
    {
      icon: Shield,
      title: "Built on trust",
      description:
        "We do not overpromise. Our products are presented honestly — as works in progress, not finished launches.",
    },
    {
      icon: Heart,
      title: "Human-centered",
      description:
        "Every product starts with real human needs — in personal style and in professional skincare guidance.",
    },
    {
      icon: Sparkles,
      title: "Premium quality",
      description:
        "We hold ourselves to a high standard in design, engineering, and the experience we eventually ship.",
    },
  ];

  return (
    <section className="section-padding bg-[hsl(var(--muted))]/30">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Why Sawarun Tech"
          title="A company built for the long term"
          description="We are a parent technology company — not a single product. SAWARUN TECH PRIVATE LIMITED is the legal entity behind SAVARUN and LOCK & KEY SKIN CARE."
        />
        <StaggerContainer className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <StaggerItem key={pillar.title}>
              <Card hover className="h-full">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-accent/10 text-cyan-accent">
                  <pillar.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="font-display text-lg font-bold">
                  {pillar.title}
                </h3>
                <p className="text-body mt-2 text-sm">{pillar.description}</p>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

export function ValuesSection() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Core Values"
          title="What guides our work"
        />
        <ValuesGrid limit={4} />
        <FadeIn className="mt-10 text-center">
          <Button href="/about/" variant="outline" icon={ArrowRight}>
            Learn More About Us
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}

export function CTASection() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <FadeIn>
          <div className="relative overflow-hidden rounded-4xl bg-navy px-8 py-16 text-center sm:px-16 lg:py-20">
            <AnimatedGradientBackground className="opacity-50" />
            <div className="relative">
              <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Interested in our work?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/70">
                Whether you are a potential partner, collaborator, or simply
                curious about what we are building — we would like to hear from
                you.
              </p>
              <div className="mt-8">
                <Button
                  href="/contact/"
                  variant="secondary"
                  icon={ArrowRight}
                  className="bg-white text-navy hover:bg-white/90"
                >
                  Get in Touch
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
