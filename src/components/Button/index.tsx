import React, { forwardRef } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { Icon, IconName } from "../Icon";

const buttonStyles = tv({
  base: "inline-flex items-center justify-center transition-colors duration-300 focus:outline-none relative",
  variants: {
    variant: {
      primary:
        "text-white bg-emerald-700 hover:bg-emerald-800 rounded-md px-8 py-4 font-medium focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2",
      secondary:
        "text-emerald-700 bg-transparent border-2 border-emerald-700 hover:bg-emerald-50 rounded-md px-8 py-4 font-medium focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2",
      tertiary:
        "text-slate-700 hover:text-emerald-700 font-medium transition-colors focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2",
      icon: "p-2 text-slate-700 hover:text-emerald-700 hover:bg-emerald-50 rounded-md focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2",
    },
    size: {
      sm: "text-sm px-4 py-2",
      md: "text-base px-6 py-3",
      lg: "text-lg px-8 py-4",
    },
    fullWidth: {
      true: "w-full",
    },
    isLoading: {
      true: "relative text-transparent cursor-wait transition-none hover:text-transparent",
    },
    isDisabled: {
      true: "opacity-50 cursor-not-allowed pointer-events-none",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
    fullWidth: false,
    isLoading: false,
    isDisabled: false,
  },
  compoundVariants: [
    {
      variant: "icon",
      size: "sm",
      class: "p-1.5",
    },
    {
      variant: "icon",
      size: "lg",
      class: "p-2.5",
    },
  ],
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {
  children?: React.ReactNode;
  className?: string;
  iconLeft?: IconName;
  iconRight?: IconName;
  iconSize?: "xs" | "sm" | "md" | "lg" | "xl";
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant,
      size,
      fullWidth,
      iconLeft,
      iconRight,
      iconSize = "sm",
      isLoading = false,
      isDisabled = false,
      disabled,
      type = "button",
      ...props
    },
    ref
  ) => {
    // Combine isDisabled prop with disabled attribute
    const isButtonDisabled = isDisabled || disabled || isLoading;

    return (
      <button
        ref={ref}
        className={buttonStyles({
          variant,
          size,
          fullWidth,
          isLoading,
          isDisabled: isButtonDisabled,
          className,
        })}
        disabled={isButtonDisabled}
        type={type}
        {...props}
      >
        {/* Loading spinner */}
        {isLoading && (
          <span className="absolute inset-0 flex items-center justify-center">
            <Icon
              name="spinner"
              size={iconSize || "md"}
              color={variant === "primary" ? "white" : "primary"}
              aria-hidden={true}
            />
          </span>
        )}

        {/* Left icon */}
        {iconLeft && !isLoading && (
          <Icon
            name={iconLeft}
            size={iconSize}
            className={children ? "mr-2" : ""}
            aria-hidden={true}
          />
        )}

        {/* Button text content */}
        {children && <span>{children}</span>}

        {/* Right icon */}
        {iconRight && !isLoading && (
          <Icon
            name={iconRight}
            size={iconSize}
            className={children ? "ml-2" : ""}
            aria-hidden={true}
          />
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
