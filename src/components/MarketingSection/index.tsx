import React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { Heading } from "../Heading";
import { Link } from "../Link";
import { Feature, type FeatureProps } from "../Feature";

const marketingSectionStyles = tv({
  base: "py-16 md:py-24",
  variants: {
    background: {
      white: "bg-white",
      light: "bg-emerald-50",
      gradient: "bg-gradient-to-b from-white to-emerald-50",
    },
    spacing: {
      normal: "py-16 md:py-24",
      compact: "py-8 md:py-12",
      spacious: "py-20 md:py-32",
    },
    alignment: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
  },
  defaultVariants: {
    background: "white",
    spacing: "normal",
    alignment: "left",
  },
});

export interface MarketingSectionProps
  extends VariantProps<typeof marketingSectionStyles> {
  title: string;
  subtitle?: string;
  features?: FeatureProps[];
  ctaText?: string;
  ctaLink?: string;
  className?: string;
  featureColumns?: 1 | 2 | 3 | 4;
}

export default function MarketingSection({
  title,
  subtitle,
  features = [],
  ctaText,
  ctaLink,
  background,
  spacing,
  alignment,
  className,
  featureColumns = 3,
}: MarketingSectionProps) {
  const gridColsClass = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  }[featureColumns];

  return (
    <section
      className={marketingSectionStyles({
        background,
        spacing,
        alignment,
        className,
      })}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-12">
          <Heading
            level={2}
            color="primary"
            marginBottom="medium"
            className={alignment === "center" ? "mx-auto" : ""}
          >
            {title}
          </Heading>

          {subtitle && (
            <Heading
              level={3}
              size="h5"
              weight="normal"
              color="secondary"
              marginBottom="large"
              className={alignment === "center" ? "mx-auto" : ""}
            >
              {subtitle}
            </Heading>
          )}
        </div>

        {features.length > 0 && (
          <div
            className={`grid ${gridColsClass} gap-8 md:gap-10 lg:gap-12 mb-12`}
          >
            {features.map((feature, index) => (
              <Feature
                key={index}
                title={feature.title}
                description={feature.description}
                iconName={feature.iconName}
                layout={feature.layout}
                padding={feature.padding}
              />
            ))}
          </div>
        )}

        {ctaText && ctaLink && (
          <div
            className={`mt-10 ${alignment === "center" ? "text-center" : ""}`}
          >
            <Link href={ctaLink} variant="primary" size="lg">
              {ctaText}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
