import React, { createElement } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const headingStyles = tv({
  base: "font-bold",
  variants: {
    size: {
      h1: "text-4xl md:text-5xl lg:text-6xl",
      h2: "text-3xl md:text-4xl lg:text-5xl",
      h3: "text-2xl md:text-3xl lg:text-4xl",
      h4: "text-xl md:text-2xl lg:text-3xl",
      h5: "text-lg md:text-xl lg:text-2xl",
      h6: "text-base md:text-lg",
    },
    color: {
      default: "text-slate-900",
      primary: "text-emerald-900",
      secondary: "text-slate-700",
      light: "text-white",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
    marginBottom: {
      none: "mb-0",
      small: "mb-2",
      medium: "mb-4",
      large: "mb-6",
      xlarge: "mb-8",
    },
  },
  defaultVariants: {
    size: "h1",
    color: "default",
    weight: "bold",
    marginBottom: "medium",
  },
});

export type HeadingSize = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface HeadingProps extends VariantProps<typeof headingStyles> {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
}

export function Heading({
  level = 1,
  size,
  color,
  weight,
  marginBottom,
  className,
  children,
  ...props
}: HeadingProps) {
  const effectiveSize = size || (`h${level}` as HeadingSize);

  return createElement(
    `h${level}`,
    {
      className: headingStyles({
        size: effectiveSize,
        color,
        weight,
        marginBottom,
        className,
      }),
      ...props,
    },
    children
  );
}
