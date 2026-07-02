import { CORE_VALUES } from "@/lib/constants";
import { Card } from "@/components/ui/Card";
import { StaggerContainer, StaggerItem } from "@/components/ui/motion";

export function ValuesGrid({ limit }: { limit?: number }) {
  const values = limit ? CORE_VALUES.slice(0, limit) : CORE_VALUES;

  return (
    <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {values.map((value) => (
        <StaggerItem key={value.title}>
          <Card className="h-full">
            <h3 className="font-display font-bold text-[hsl(var(--foreground))]">
              {value.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">
              {value.description}
            </p>
          </Card>
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}
