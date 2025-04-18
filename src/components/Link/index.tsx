import NextLink from "next/link";
import { tv, type VariantProps } from "tailwind-variants";

const linkStyles = tv({
  base: "inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2",
  variants: {
    variant: {
      primary: "text-white bg-emerald-700 hover:bg-emerald-800",
      secondary:
        "text-emerald-700 bg-transparent border-2 border-emerald-700 hover:bg-emerald-50",
    },
    size: {
      sm: "text-sm px-4 py-2",
      md: "text-lg px-8 py-4",
      lg: "text-xl px-10 py-5",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export interface LinkProps extends VariantProps<typeof linkStyles> {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function Link({
  href,
  children,
  variant,
  size,
  className,
  ...props
}: LinkProps) {
  return (
    <NextLink
      href={href}
      className={linkStyles({ variant, size, className })}
      {...props}
    >
      {children}
    </NextLink>
  );
}
