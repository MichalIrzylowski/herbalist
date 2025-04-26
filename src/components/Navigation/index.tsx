"use client";

import { useState } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { Link } from "@/components/Link";
import { Icon } from "@/components/Icon";
import { MobileMenuButton } from "./MobileMenuButton";
import { MobileMenu } from "./MobileMenu";
import { DesktopNavigation } from "./DesktopNavigation";

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: "Strona Główna", href: "/" },
  { name: "Produkty", href: "/products" },
  { name: "O Nas", href: "/about-us" },
];

const navigation = tv({
  slots: {
    nav: "bg-white border-b transition-all",
    container: "mx-auto container px-4",
    topBar: "flex justify-between items-center",
    logoContainer: "flex items-center pl-0",
    brandText: "font-semibold text-emerald-900",
    mobileMenuTrigger: "sm:hidden flex items-center",
  },
  variants: {
    variant: {
      default: {
        nav: "border-emerald-100",
        container: "max-w-7xl",
        topBar: "h-16",
        brandText: "text-xl",
      },
      compact: {
        nav: "border-slate-200",
        container: "max-w-6xl",
        topBar: "h-14",
        brandText: "text-lg",
      },
      transparent: {
        nav: "bg-transparent border-transparent",
        topBar: "h-16",
        brandText: "text-xl",
      },
    },
    sticky: {
      true: {
        nav: "sticky top-0 z-40 shadow-sm",
      },
    },
    spacing: {
      default: {},
      tight: {
        container: "px-2 sm:px-4 lg:px-6",
        topBar: "h-12",
      },
      loose: {
        container: "px-6 sm:px-8 lg:px-10",
        topBar: "h-20",
      },
    },
  },
  defaultVariants: {
    variant: "default",
    sticky: false,
    spacing: "default",
  },
  compoundVariants: [
    {
      variant: "transparent",
      sticky: true,
      class: {
        nav: "bg-white/80 backdrop-blur-md border-slate-200",
      },
    },
  ],
});

export interface NavigationProps extends VariantProps<typeof navigation> {
  className?: string;
}

export function Navigation({
  variant,
  sticky = true,
  spacing,
  className,
}: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const {
    nav,
    container,
    topBar,
    logoContainer,
    brandText,
    mobileMenuTrigger,
  } = navigation({ variant, sticky, spacing });

  const desktopVariant = variant === "compact" ? "compact" : "default";
  const desktopSpacing =
    spacing === "tight" ? "tight" : spacing === "loose" ? "loose" : "default";

  return (
    <nav className={nav({ className })}>
      <div className={container()}>
        <div className={topBar()}>
          <Link href="/" variant="nav" size="none" className={logoContainer()}>
            <Icon name="leaf" size="md" color="primary" className="mr-2" />
            <span className={brandText()}>Herbalist</span>
          </Link>

          <DesktopNavigation
            navLinks={navLinks}
            variant={desktopVariant}
            spacing={desktopSpacing}
          />

          <div className={mobileMenuTrigger()}>
            <MobileMenuButton
              isOpen={mobileMenuOpen}
              onClick={toggleMobileMenu}
              variant={variant}
            />
          </div>
        </div>
      </div>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={closeMobileMenu}
        navLinks={navLinks}
      />
    </nav>
  );
}
