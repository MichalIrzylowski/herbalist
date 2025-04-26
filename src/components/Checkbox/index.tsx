import React, { forwardRef } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const checkboxStyles = tv({
  slots: {
    container: "relative w-full",
    wrapper: "flex items-center",
    checkbox:
      "h-4 w-4 rounded border focus:outline-none focus:ring-2 transition-colors duration-200",
    label: "ml-2 text-sm text-slate-700",
    errorMessage: "text-red-500 text-sm mt-1",
  },
  variants: {
    state: {
      default: {
        checkbox:
          "border-slate-300 text-emerald-600 focus:border-emerald-500 focus:ring-emerald-500/20",
      },
      error: {
        checkbox:
          "border-red-500 text-red-600 focus:border-red-500 focus:ring-red-500/20",
        label: "text-red-500",
      },
      disabled: {
        checkbox:
          "bg-slate-100 border-slate-200 text-slate-400 cursor-not-allowed",
        label: "text-slate-400",
      },
    },
  },
  defaultVariants: {
    state: "default",
  },
});

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type">,
    VariantProps<typeof checkboxStyles> {
  label: React.ReactNode;
  errorMessage?: string;
  containerClassName?: string;
  labelClassName?: string;
  checkboxClassName?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      label,
      errorMessage,
      state,
      containerClassName,
      labelClassName,
      checkboxClassName,
      disabled,
      id,
      ...props
    },
    ref
  ) => {
    const inputState = disabled ? "disabled" : errorMessage ? "error" : state;

    const {
      container,
      wrapper,
      checkbox,
      label: labelStyles,
      errorMessage: errorStyles,
    } = checkboxStyles({
      state: inputState,
    });

    const inputId = id || props.name;

    return (
      <div className={container({ class: containerClassName })}>
        <div className={wrapper()}>
          <input
            ref={ref}
            type="checkbox"
            id={inputId}
            disabled={disabled}
            className={checkbox({ class: checkboxClassName })}
            {...props}
          />
          <label
            htmlFor={inputId}
            className={labelStyles({ class: labelClassName })}
          >
            {label}
          </label>
        </div>
        {errorMessage && <div className={errorStyles()}>{errorMessage}</div>}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";

export interface FormCheckboxProps extends Omit<CheckboxProps, "name"> {
  name: string;
  error?: string;
}

export function FormCheckbox({
  name,
  error,
  label,
  ...props
}: FormCheckboxProps) {
  return <Checkbox name={name} label={label} errorMessage={error} {...props} />;
}
