import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { RESUME_DATA } from "@/data/resume-data";

type Award = (typeof RESUME_DATA)["awards"][number];

interface AwardItemProps {
  award: Award;
}

/**
 * Individual award card component
 */
function AwardItem({ award }: AwardItemProps) {
  const { title, issuer, year, description } = award;

  return (
    <Card>
      <CardHeader className="print:space-y-1">
        <div className="flex items-center justify-between gap-x-2 text-base">
          <h3 className="font-semibold leading-none print:text-sm">{title}</h3>
          <div
            className="text-sm tabular-nums text-gray-500"
            aria-label={`Year: ${year}`}
          >
            {year}
          </div>
        </div>
        <h4 className="font-mono text-sm font-semibold leading-none print:text-[12px]">
          {issuer}
        </h4>
      </CardHeader>
      <CardContent className="mt-2 text-xs text-foreground/80 print:mt-1 print:text-[10px] text-pretty">
        {description}
      </CardContent>
    </Card>
  );
}

interface AwardsProps {
  awards: readonly Award[];
}

/**
 * Main awards section component
 * Renders a list of awards and recognitions
 */
export function Awards({ awards }: AwardsProps) {
  return (
    <Section>
      <h2 className="text-xl font-bold" id="awards-section">
        Awards
      </h2>
      <div
        className="space-y-4 print:space-y-0"
        role="feed"
        aria-labelledby="awards-section"
      >
        {awards.map((item) => (
          <article key={`${item.title}-${item.issuer}`} role="article">
            <AwardItem award={item} />
          </article>
        ))}
      </div>
    </Section>
  );
}
