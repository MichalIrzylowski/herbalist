import { Icon, IconName } from "@/components/Icon";
import { tv, type VariantProps } from "tailwind-variants";

const externalLinkStyles = tv({
  base: "inline-flex items-center justify-center transition-colors duration-300 focus:outline-none",
  variants: {
    variant: {
      primary:
        "text-white bg-emerald-700 hover:bg-emerald-800 rounded-md px-8 py-4 font-medium focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2",
      secondary:
        "text-emerald-700 bg-transparent border-2 border-emerald-700 hover:bg-emerald-50 rounded-md px-8 py-4 font-medium focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2",
      icon: "text-emerald-700 hover:text-emerald-800", // Specifically for icon-only links
      footer: "text-slate-600 hover:text-emerald-700 transition-colors",
      social: "text-emerald-700 hover:text-emerald-800", // For social media links
    },
    size: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      none: "", // No specific text size
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export interface ExternalLinkProps
  extends VariantProps<typeof externalLinkStyles> {
  href: string;
  children?: React.ReactNode;
  className?: string;
  ariaLabel?: string;
  iconName?: IconName;
  iconSize?: "xs" | "sm" | "md" | "lg" | "xl";
  openInNewTab?: boolean;
}

export function ExternalLink({
  href,
  children,
  variant,
  size,
  className,
  ariaLabel,
  iconName,
  iconSize = "md",
  openInNewTab = true,
  ...props
}: ExternalLinkProps) {
  return (
    <a
      href={href}
      className={externalLinkStyles({ variant, size, className })}
      rel="noopener noreferrer"
      target={openInNewTab ? "_blank" : undefined}
      aria-label={
        ariaLabel || (typeof children === "string" ? children : undefined)
      }
      {...props}
    >
      {iconName && <Icon name={iconName} size={iconSize} />}
      {children && iconName && <span className="ml-2">{children}</span>}
      {children && !iconName && children}
    </a>
  );
}

export default ExternalLink;
