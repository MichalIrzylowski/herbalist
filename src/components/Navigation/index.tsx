"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Link } from "@/components/Link";
import { Icon } from "@/components/Icon";
import { tv } from "tailwind-variants";
import { MobileMenuButton } from "./MobileMenuButton";
import { MobileMenu } from "./MobileMenu";

const navItemStyles = tv({
  base: "relative py-2",
  variants: {
    active: {
      true: "before:absolute before:h-0.5 before:w-full before:bg-emerald-700 before:bottom-0 before:left-0",
    },
  },
});

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: "Strona Główna", href: "/" },
  { name: "Produkty", href: "/products" },
  { name: "O Nas", href: "/about-us" },
];

export interface NavigationProps {
  className?: string;
}

export function Navigation({ className }: NavigationProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`bg-white border-b border-emerald-100 ${className || ""}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and brand name */}
          <Link
            href="/"
            variant="nav"
            size="none"
            className="flex items-center"
          >
            <Icon name="leaf" size="md" color="primary" className="mr-2" />
            <span className="font-semibold text-xl text-emerald-900">
              Herbalist
            </span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden sm:flex sm:items-center">
            <div className="flex space-x-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <div
                    key={link.name}
                    className={navItemStyles({ active: isActive })}
                  >
                    <Link href={link.href} variant="nav" size="none">
                      {link.name}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right side actions */}
          <div className="hidden sm:flex items-center">
            <Link href="/products" variant="primary" size="sm" className="ml-4">
              Kup Teraz
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden flex items-center">
            <MobileMenuButton
              isOpen={mobileMenuOpen}
              onClick={toggleMobileMenu}
            />
          </div>
        </div>
      </div>

      {/* Mobile menu component */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={closeMobileMenu}
        navLinks={navLinks}
      />
    </nav>
  );
}
