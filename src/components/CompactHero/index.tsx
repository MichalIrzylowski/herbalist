import { Link } from "../Link";
import { Heading } from "../Heading";
import { tv } from "tailwind-variants";

export interface CompactHeroProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  className?: string;
  size?: "default" | "compact";
}

const compactHero = tv({
  slots: {
    base: "bg-emerald-50 border-b border-emerald-100",
    container: "container mx-auto px-4 py-4 md:py-5",
    wrapper: "flex flex-wrap items-center justify-between",
    content: "w-full md:w-auto pr-0 md:pr-8 mb-2 md:mb-0",
    subtitleText: "text-sm text-slate-600 mt-1",
  },
  variants: {
    size: {
      default: {
        container: "py-4 md:py-5",
      },
      compact: {
        container: "py-2 md:py-3",
      },
    },
  },
  defaultVariants: {
    size: "default",
  },
});

export default function CompactHero({
  title = "Page Title",
  subtitle = "Short description of this section",
  ctaText,
  ctaLink,
  className,
  size,
}: CompactHeroProps) {
  const { base, container, wrapper, content, subtitleText } = compactHero({
    size,
    className,
  });

  return (
    <section className={base()}>
      <div className={container()}>
        <div className={wrapper()}>
          <div className={content()}>
            <Heading level={1} size="h3" color="primary" marginBottom="none">
              {title}
            </Heading>
            <p className={subtitleText()}>{subtitle}</p>
          </div>

          {ctaText && ctaLink && (
            <Link href={ctaLink} variant="primary" size="sm">
              {ctaText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
