"use client";

import { useState } from "react";
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

export interface NavigationProps {
  className?: string;
}

export function Navigation({ className }: NavigationProps) {
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
          <DesktopNavigation navLinks={navLinks} />

          <div className="sm:hidden flex items-center">
            <MobileMenuButton
              isOpen={mobileMenuOpen}
              onClick={toggleMobileMenu}
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
