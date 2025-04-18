import React, { ElementType } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const sectionStyles = tv({
  base: "py-12 w-full",
  variants: {
    background: {
      white: "bg-white",
      light: "bg-emerald-50",
      primary: "bg-emerald-600 text-white",
      secondary: "bg-emerald-800 text-white",
      gradient: "bg-gradient-to-b from-emerald-50 to-emerald-100",
      natural: "bg-stone-50",
    },
    spacing: {
      none: "py-0",
      small: "py-6 md:py-8",
      medium: "py-12 md:py-16",
      large: "py-16 md:py-24",
    },
    width: {
      full: "w-full",
      container: "container mx-auto px-4",
    },
    border: {
      none: "",
      top: "border-t border-emerald-100",
      bottom: "border-b border-emerald-100",
      both: "border-t border-b border-emerald-100",
    },
  },
  defaultVariants: {
    background: "white",
    spacing: "medium",
    width: "container",
    border: "none",
  },
});

export interface SectionProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionStyles> {
  as?: ElementType;
  children: React.ReactNode;
  innerClassName?: string;
  containerSize?: "sm" | "md" | "lg" | "xl" | "full";
}

export function Section({
  as: Component = "section",
  children,
  className,
  innerClassName,
  background,
  spacing,
  width,
  border,
  containerSize = "xl",
  ...props
}: SectionProps) {
  const containerSizes = {
    sm: "max-w-screen-sm",
    md: "max-w-screen-md",
    lg: "max-w-screen-lg",
    xl: "max-w-screen-xl",
    full: "w-full",
  };

  return (
    <Component
      className={sectionStyles({
        background,
        spacing,
        width,
        border,
        className,
      })}
      {...props}
    >
      {width === "container" ? (
        <div className={innerClassName}>{children}</div>
      ) : (
        <div
          className={`container mx-auto px-4 ${containerSizes[containerSize]} ${
            innerClassName || ""
          }`}
        >
          {children}
        </div>
      )}
    </Component>
  );
}
