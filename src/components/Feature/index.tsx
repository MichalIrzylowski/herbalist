import React from "react";
import { tv } from "tailwind-variants";
import { Heading } from "../Heading";
import { Icon, type IconName } from "../Icon";

const featureStyles = tv({
  base: "flex flex-col",
  variants: {
    layout: {
      vertical: "items-start gap-4",
      verticalCentered: "items-center text-center gap-4",
    },
    padding: {
      none: "p-0",
      small: "p-4",
      medium: "p-6",
      large: "p-8",
    },
  },
  defaultVariants: {
    layout: "vertical",
    padding: "none",
  },
});

export interface FeatureProps {
  title: string;
  description: string;
  iconName?: IconName;
  layout?: "vertical" | "verticalCentered";
  padding?: "none" | "small" | "medium" | "large";
}

export function Feature({
  title,
  description,
  iconName,
  layout = "vertical",
  padding = "none",
}: FeatureProps) {
  return (
    <div className={featureStyles({ layout, padding })}>
      {iconName && (
        <div className="mb-4">
          <Icon name={iconName} size="lg" color="primary" />
        </div>
      )}
      <Heading level={3} size="h5" color="primary" marginBottom="small">
        {title}
      </Heading>
      <p className="text-slate-700">{description}</p>
    </div>
  );
}
