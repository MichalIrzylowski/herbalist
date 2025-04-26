import { tv, type VariantProps } from "tailwind-variants";
import { Icon } from "@/components/Icon";

const mobileMenuButton = tv({
  slots: {
    button:
      "sm:hidden bg-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-colors duration-200",
    icon: "",
  },
  variants: {
    variant: {
      default: {
        button: "p-2 text-slate-700 hover:text-emerald-700 hover:bg-emerald-50",
      },
      compact: {
        button:
          "p-1.5 text-slate-600 hover:text-emerald-600 hover:bg-emerald-50",
      },
      transparent: {
        button: "p-2 text-emerald-700 hover:text-emerald-800 hover:bg-white/30",
      },
    },
    isOpen: {
      true: {},
      false: {},
    },
  },
  compoundVariants: [
    {
      isOpen: true,
      class: {
        button: "text-emerald-700 bg-emerald-50",
      },
    },
  ],
  defaultVariants: {
    variant: "default",
    isOpen: false,
  },
});

export interface MobileMenuButtonProps
  extends VariantProps<typeof mobileMenuButton> {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

export function MobileMenuButton({
  isOpen,
  onClick,
  variant,
  className,
}: MobileMenuButtonProps) {
  const { button, icon } = mobileMenuButton({
    variant,
    isOpen,
    className,
  });

  return (
    <button
      type="button"
      className={button()}
      onClick={onClick}
      aria-label={isOpen ? "Zamknij menu mobilne" : "Przełącz menu mobilne"}
    >
      <Icon
        name={isOpen ? "close" : "menu"}
        size="md"
        className={icon()}
        aria-hidden={true}
      />
    </button>
  );
}
