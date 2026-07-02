import { COMPANY } from "@/lib/constants";
import { FadeIn } from "@/components/ui/motion";

type LegalSection = {
  title: string;
  content: string | string[];
};

type LegalPageLayoutProps = {
  title: string;
  description: string;
  lastUpdated: string;
  sections: LegalSection[];
};

export function LegalPageLayout({
  title,
  description,
  lastUpdated,
  sections,
}: LegalPageLayoutProps) {
  return (
    <>
      <section className="pt-28 lg:pt-36">
        <div className="container-wide pb-8">
          <FadeIn className="mx-auto max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-royal-500">
              Legal
            </p>
            <h1 className="heading-display">{title}</h1>
            <p className="text-body mt-4">{description}</p>
            <p className="mt-4 text-sm text-[hsl(var(--muted-foreground))]">
              Last updated: {lastUpdated} · {COMPANY.name}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding border-t border-[hsl(var(--border))]">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl space-y-10">
            {sections.map((section) => (
              <FadeIn key={section.title}>
                <article>
                  <h2 className="font-display text-xl font-bold">
                    {section.title}
                  </h2>
                  {Array.isArray(section.content) ? (
                    <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">
                      {section.content.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-4 text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">
                      {section.content}
                    </p>
                  )}
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
