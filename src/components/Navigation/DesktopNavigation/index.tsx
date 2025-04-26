import { tv } from "tailwind-variants";
import { usePathname } from "next/navigation";
import { Link } from "@/components/Link";

interface NavLink {
  name: string;
  href: string;
}

export interface DesktopNavigationProps {
  navLinks: NavLink[];
  className?: string;
  variant?: "default" | "compact";
  spacing?: "default" | "tight" | "loose";
  ctaText?: string;
  ctaLink?: string;
}

const desktopNavigation = tv({
  slots: {
    base: "hidden sm:flex items-center",
    linkContainer: "flex",
    cta: "",
  },
  variants: {
    variant: {
      default: {
        base: "justify-between w-full",
      },
      compact: {
        base: "justify-end",
        linkContainer: "mr-4",
      },
    },
    spacing: {
      default: {
        linkContainer: "space-x-4 mx-auto",
        cta: "ml-4",
      },
      tight: {
        linkContainer: "space-x-2",
        cta: "ml-2",
      },
      loose: {
        linkContainer: "space-x-6",
        cta: "ml-6",
      },
    },
  },
  defaultVariants: {
    variant: "default",
    spacing: "default",
  },
});

export function DesktopNavigation({
  navLinks,
  className,
  variant = "default",
  spacing = "default",
  ctaText = "Kup Teraz",
  ctaLink = "/products",
}: DesktopNavigationProps) {
  const pathname = usePathname();

  const { base, linkContainer, cta } = desktopNavigation({
    variant,
    spacing,
    className,
  });

  return (
    <div className={base()}>
      <div className={linkContainer()}>
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.name}
              href={link.href}
              variant="nav"
              size="none"
              active={isActive}
            >
              {link.name}
            </Link>
          );
        })}
      </div>

      <Link href={ctaLink} variant="primary" size="sm" className={cta()}>
        {ctaText}
      </Link>
    </div>
  );
}
