import { tv, type VariantProps } from "tailwind-variants";
import {
  FaLeaf,
  FaMapMarkerAlt,
  FaSeedling,
  FaShoppingBasket,
  FaMortarPestle,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPinterestP,
  FaLinkedinIn,
  FaBars,
} from "react-icons/fa";
import { IoMdCheckmarkCircleOutline, IoMdClose } from "react-icons/io";
import { RiPlantFill, RiPlantLine, RiLeafLine } from "react-icons/ri";
import { BiSearchAlt } from "react-icons/bi";
import { MdOutlineLocalShipping, MdEmail } from "react-icons/md";
import { BsArrowRight, BsTelephone, BsMoonStars } from "react-icons/bs";
import {
  GiPlantRoots,
  GiMedicines,
  GiStomach,
  GiHerbsBundle,
  GiTeapot,
  GiMedicinePills,
} from "react-icons/gi";
import { ImLab } from "react-icons/im";
import { TbVirus } from "react-icons/tb";

export const icons = {
  // Nature & Plants
  leaf: FaLeaf,
  seedling: FaSeedling,
  plant: RiPlantFill,
  plantOutline: RiPlantLine,
  leafOutline: RiLeafLine,
  roots: GiPlantRoots,
  herbsBundle: GiHerbsBundle,
  mortar: FaMortarPestle,
  teapot: GiTeapot,

  // E-commerce
  basket: FaShoppingBasket,
  shipping: MdOutlineLocalShipping,
  medicines: GiMedicines,
  pills: GiMedicinePills,

  // Health & Wellness
  stomach: GiStomach,
  sleep: BsMoonStars,
  immunity: TbVirus,
  labMix: ImLab,

  // UI Elements
  search: BiSearchAlt,
  check: IoMdCheckmarkCircleOutline,
  close: IoMdClose,
  arrowRight: BsArrowRight,
  menu: FaBars,

  // Contact & Location
  location: FaMapMarkerAlt,
  phone: BsTelephone,
  email: MdEmail,

  // Social Media
  facebook: FaFacebookF,
  instagram: FaInstagram,
  twitter: FaTwitter,
  youtube: FaYoutube,
  pinterest: FaPinterestP,
  linkedin: FaLinkedinIn,
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
