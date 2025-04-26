import NextLink from "next/link";
import { tv, type VariantProps } from "tailwind-variants";

const linkStyles = tv({
  base: "inline-flex items-center justify-center transition-colors duration-300 focus:outline-none",
  variants: {
    variant: {
      primary:
        "text-white bg-emerald-700 hover:bg-emerald-800 rounded-md px-8 py-4 font-medium focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2",
      secondary:
        "text-emerald-700 bg-transparent border-2 border-emerald-700 hover:bg-emerald-50 rounded-md px-8 py-4 font-medium focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2",
      footer:
        "text-slate-600 hover:text-emerald-700 transition-colors focus:text-emerald-700 focus:underline focus:decoration-2 focus:underline-offset-2",
      nav: "text-slate-700 hover:text-emerald-700 font-medium transition-colors focus-visible:text-emerald-700 focus-visible:relative focus-visible:before:absolute focus-visible:before:h-0.5 focus-visible:before:w-full focus-visible:before:bg-emerald-700 focus-visible:before:bottom-0 focus-visible:before:left-0 focus:outline-none",
    },
    size: {
      sm: "text-sm px-4 py-2",
      md: "text-lg px-8 py-4",
      lg: "text-xl px-10 py-5",
      none: "",
    },
    active: {
      true: "",
      false: "",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
    active: false,
  },
  compoundVariants: [
    {
      variant: "footer",
      size: "md",
      class: "text-base",
    },
    {
      variant: "footer",
      class: "px-0 py-0 justify-start",
    },
    {
      variant: "nav",
      class: "px-3 py-2 text-base relative",
    },
    {
      variant: "nav",
      active: true,
      class:
        "text-emerald-700 relative before:absolute before:h-0.5 before:w-full before:bg-emerald-700 before:bottom-0 before:left-0",
    },
  ],
});

export interface LinkProps extends VariantProps<typeof linkStyles> {
  href: string;
  children: React.ReactNode;
  className?: string;
  active?: boolean;
  onClick?: () => void;
}

export function Link({
  href,
  children,
  variant,
  size,
  active,
  className,
  ...props
}: LinkProps) {
  return (
    <NextLink
      href={href}
      className={linkStyles({ variant, size, active, className })}
      {...props}
    >
      {children}
    </NextLink>
  );
}
