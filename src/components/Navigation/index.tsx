"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Link } from "@/components/Link";
import { Icon } from "@/components/Icon";
import { tv } from "tailwind-variants";

// Define nav item styles using tailwind-variants
const navItemStyles = tv({
  base: "relative py-2",
  variants: {
    active: {
      true: "before:absolute before:h-0.5 before:w-full before:bg-emerald-700 before:bottom-0 before:left-0",
    },
  },
});

// Define mobile menu button styles
const mobileMenuButtonStyles = tv({
  base: "sm:hidden bg-transparent p-2 rounded-md text-slate-700 hover:text-emerald-700 hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2",
});

// Define mobile nav styles for the container
const mobileNavStyles = tv({
  base: "sm:hidden fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out",
  variants: {
    open: {
      true: "translate-x-0",
      false: "translate-x-full",
    },
  },
  defaultVariants: {
    open: false,
  },
});

interface NavLink {
  name: string;
  href: string;
}

// Define main navigation links
const navLinks: NavLink[] = [
  { name: "Strona Główna", href: "/" },
  { name: "Produkty", href: "/products" },
  { name: "O Nas", href: "/about-us" },
  // Add more links as needed
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

  // Handle link click for mobile menu
  const handleLinkClick = () => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`bg-white border-b border-emerald-100 ${className || ""}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and brand name */}
          <div className="flex items-center">
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
          </div>

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
            <button
              type="button"
              className={mobileMenuButtonStyles()}
              onClick={toggleMobileMenu}
              aria-label="Przełącz menu mobilne"
            >
              {mobileMenuOpen ? (
                <Icon name="close" size="md" aria-hidden={true} />
              ) : (
                <Icon name="menu" size="md" aria-hidden={true} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={mobileNavStyles({ open: mobileMenuOpen })}>
        <div
          className="fixed inset-0 bg-slate-800 bg-opacity-50"
          onClick={toggleMobileMenu}
        />
        <div className="fixed top-0 right-0 bottom-0 w-64 bg-white p-5 shadow-lg">
          <div className="flex justify-between items-center mb-6">
            <span className="font-semibold text-xl text-emerald-900">
              Herbalist
            </span>
            <button
              type="button"
              className="text-slate-700 hover:text-emerald-700"
              onClick={toggleMobileMenu}
              aria-label="Zamknij menu mobilne"
            >
              <Icon name="close" size="md" aria-hidden={true} />
            </button>
          </div>
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  variant="nav"
                  size="none"
                  className={isActive ? "text-emerald-700" : ""}
                  onClick={handleLinkClick}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="border-t border-emerald-100 pt-4 mt-2">
              <Link
                href="/products"
                variant="primary"
                size="sm"
                className="w-full"
                onClick={handleLinkClick}
              >
                Kup Teraz
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
