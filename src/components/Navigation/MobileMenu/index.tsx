import { tv } from "tailwind-variants";
import { usePathname } from "next/navigation";
import { Link } from "@/components/Link";
import { Icon } from "@/components/Icon";

interface NavLink {
  name: string;
  href: string;
}

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: NavLink[];
  className?: string;
}

const mobileMenu = tv({
  slots: {
    base: "sm:hidden fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out",
    backdrop: "absolute inset-0 bg-slate-800/50",
    container: "absolute top-0 right-0 bottom-0 w-64 bg-white p-5 shadow-lg",
    header: "flex justify-between items-center mb-6",
    title: "font-semibold text-xl text-emerald-900",
    closeButton: "text-slate-700 hover:text-emerald-700",
    content: "flex flex-col space-y-4",
    navItem: "",
    activeNavItem: "text-emerald-700",
  },
  variants: {
    open: {
      true: {
        base: "translate-x-0",
      },
      false: {
        base: "translate-x-full",
      },
    },
  },
  defaultVariants: {
    open: false,
  },
});

export function MobileMenu({
  isOpen,
  onClose,
  navLinks,
  className,
}: MobileMenuProps) {
  const pathname = usePathname();

  const {
    base,
    backdrop,
    container,
    header,
    title,
    closeButton,
    content,
    navItem,
    activeNavItem,
  } = mobileMenu({ open: isOpen, className });

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <div className={base()}>
      <div className={backdrop()} onClick={onClose} />
      <div className={container()}>
        <div className={header()}>
          <span className={title()}>Herbalist</span>
          <button
            type="button"
            className={closeButton()}
            onClick={onClose}
            aria-label="Zamknij menu mobilne"
          >
            <Icon name="close" size="md" aria-hidden={true} />
          </button>
        </div>

        <div className={content()}>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                variant="nav"
                size="none"
                className={isActive ? activeNavItem() : navItem()}
                onClick={handleLinkClick}
              >
                {link.name}
              </Link>
            );
          })}

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
  );
}
