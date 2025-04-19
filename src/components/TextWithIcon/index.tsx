import { Icon, type IconName } from "@/components/Icon";
import { tv, type VariantProps } from "tailwind-variants";
import { ReactNode } from "react";

const textWithIcon = tv({
  slots: {
    container: "flex items-center",
    iconWrapper: "flex-shrink-0",
    textWrapper: "text-slate-600",
  },
  variants: {
    spacing: {
      compact: { container: "gap-1" },
      default: { container: "gap-2" },
      loose: { container: "gap-3" },
    },
    textColor: {
      default: { textWrapper: "text-slate-600" },
      primary: { textWrapper: "text-emerald-700" },
      muted: { textWrapper: "text-slate-400" },
    },
    iconPosition: {
      left: { iconWrapper: "mr-2 order-first" },
      right: { iconWrapper: "ml-2 order-last" },
    },
  },
  defaultVariants: {
    spacing: "default",
    textColor: "default",
    iconPosition: "left",
  },
});

export interface TextWithIconProps extends VariantProps<typeof textWithIcon> {
  iconName: IconName;
  text: ReactNode;
  iconSize?: "xs" | "sm" | "md" | "lg" | "xl";
  iconColor?: "default" | "primary" | "secondary" | "muted" | "white";
  className?: string;
  as?: React.ElementType;
}

export function TextWithIcon({
  iconName,
  text,
  iconSize = "sm",
  iconColor = "primary",
  spacing,
  textColor,
  iconPosition,
  className = "",
  as: Component = "div",
}: TextWithIconProps) {
  const { container, iconWrapper, textWrapper } = textWithIcon({
    spacing,
    textColor,
    iconPosition,
  });

  return (
    <Component className={`${container()} ${className}`}>
      <div className={iconWrapper()}>
        <Icon name={iconName} size={iconSize} color={iconColor} />
      </div>
      <span className={textWrapper()}>{text}</span>
    </Component>
  );
}

export default TextWithIcon;
