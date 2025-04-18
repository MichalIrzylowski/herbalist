import { Link } from "../Link";
import { Icon } from "../Icon";
import { Heading } from "../Heading";

export interface CompactHeroProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function CompactHero({
  title = "Page Title",
  subtitle = "Short description of this section",
  ctaText,
  ctaLink,
}: CompactHeroProps) {
  return (
    <section className="relative bg-emerald-50 border-b border-emerald-100">
      {/* Simple decorative element */}
      <div className="absolute right-0 top-0 bottom-0 overflow-hidden">
        <div className="absolute -right-6 top-1/2 -translate-y-1/2">
          <Icon
            name="leafOutline"
            color="primary"
            size="md"
            className="w-16 h-16 opacity-10"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 py-4 md:py-5">
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full md:w-auto pr-0 md:pr-8 mb-2 md:mb-0">
            <Heading level={1} size="h3" color="primary" marginBottom="none">
              {title}
            </Heading>
            <p className="text-sm text-slate-600 mt-1">{subtitle}</p>
          </div>

          {ctaText && ctaLink && (
            <div className="mt-2 md:mt-0">
              <Link href={ctaLink} variant="primary" size="sm">
                {ctaText}
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
