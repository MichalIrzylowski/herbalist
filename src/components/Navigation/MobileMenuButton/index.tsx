import { tv } from "tailwind-variants";
import { Icon } from "@/components/Icon";

const mobileMenuButtonStyles = tv({
  base: "sm:hidden bg-transparent p-2 rounded-md text-slate-700 hover:text-emerald-700 hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2",
});

export interface MobileMenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

export function MobileMenuButton({
  isOpen,
  onClick,
  className,
}: MobileMenuButtonProps) {
  return (
    <button
      type="button"
      className={mobileMenuButtonStyles({ className })}
      onClick={onClick}
      aria-label={isOpen ? "Zamknij menu mobilne" : "Przełącz menu mobilne"}
    >
      <Icon name={isOpen ? "close" : "menu"} size="md" aria-hidden={true} />
    </button>
  );
}
