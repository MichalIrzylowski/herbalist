import { tv, type VariantProps } from "tailwind-variants";
import {
  FaLeaf,
  FaMapMarkerAlt,
  FaSeedling,
  FaShoppingBasket,
} from "react-icons/fa";
import { IoMdCheckmarkCircleOutline, IoMdClose } from "react-icons/io";
import { RiPlantFill, RiPlantLine, RiLeafLine } from "react-icons/ri";
import { BiSearchAlt } from "react-icons/bi";
import { MdOutlineLocalShipping, MdEmail } from "react-icons/md";
import { BsArrowRight, BsTelephone } from "react-icons/bs";
import { GiPlantRoots, GiMedicines } from "react-icons/gi";

export const icons = {
  // Nature & Plants
  leaf: FaLeaf,
  seedling: FaSeedling,
  plant: RiPlantFill,
  plantOutline: RiPlantLine,
  leafOutline: RiLeafLine,
  roots: GiPlantRoots,

  // E-commerce
  basket: FaShoppingBasket,
  shipping: MdOutlineLocalShipping,
  medicines: GiMedicines,

  // UI Elements
  search: BiSearchAlt,
  check: IoMdCheckmarkCircleOutline,
  close: IoMdClose,
  arrowRight: BsArrowRight,

  // Contact & Location
  location: FaMapMarkerAlt,
  phone: BsTelephone,
  email: MdEmail,
};

export type IconName = keyof typeof icons;

const iconStyles = tv({
  base: "inline-flex",
  variants: {
    size: {
      xs: "w-3 h-3",
      sm: "w-4 h-4",
      md: "w-6 h-6",
      lg: "w-8 h-8",
      xl: "w-10 h-10",
    },
    color: {
      default: "text-current",
      primary: "text-emerald-700",
      secondary: "text-slate-700",
      muted: "text-slate-400",
      white: "text-white",
    },
  },
  defaultVariants: {
    size: "md",
    color: "default",
  },
});

export interface IconProps extends VariantProps<typeof iconStyles> {
  name: IconName;
  className?: string;
  "aria-hidden"?: boolean;
}

export function Icon({
  name,
  size,
  color,
  className,
  "aria-hidden": ariaHidden = true,
  ...props
}: IconProps) {
  const IconComponent = icons[name];

  return (
    <IconComponent
      className={iconStyles({ size, color, className })}
      aria-hidden={ariaHidden}
      {...props}
    />
  );
}
