import React, { forwardRef } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { Icon, IconName } from "@/components/Icon";

export type InputType =
  | "text"
  | "email"
  | "password"
  | "number"
  | "tel"
  | "url"
  | "search"
  | "date"
  | "time"
  | "datetime-local";

const textInputStyles = tv({
  slots: {
    container: "relative w-full",
    label: "block text-sm font-medium text-slate-700 mb-1",
    inputWrapper: "relative",
    input:
      "w-full text-slate-900 bg-white border focus:outline-none focus:ring-2 rounded-md transition-colors duration-200 px-4 py-2",
    iconWrapper: "absolute inset-y-0 flex items-center",
    errorMessage: "text-red-500 text-sm mt-1",
    helperText: "text-slate-500 text-sm mt-1",
  },
  variants: {
    size: {
      sm: {
        input: "text-sm h-9 px-3",
      },
      md: {
        input: "text-base h-10",
      },
      lg: {
        input: "text-lg h-12 px-5",
      },
    },
    state: {
      default: {
        input:
          "border-slate-300 hover:border-emerald-500 focus:border-emerald-500 focus:ring-emerald-500/20",
      },
      error: {
        input:
          "border-red-500 hover:border-red-600 focus:border-red-500 focus:ring-red-500/20",
        label: "text-red-500",
      },
      disabled: {
        input:
          "bg-slate-100 border-slate-200 text-slate-400 cursor-not-allowed",
        label: "text-slate-400",
      },
    },
    fullWidth: {
      true: {
        container: "w-full",
      },
      false: {
        container: "w-auto",
      },
    },
    iconPosition: {
      left: {
        input: "pl-10",
        iconWrapper: "left-0 pl-3",
      },
      right: {
        input: "pr-10",
        iconWrapper: "right-0 pr-3",
      },
    },
  },
  defaultVariants: {
    size: "md",
    state: "default",
    fullWidth: true,
  },
});

export interface TextInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof textInputStyles> {
  type?: InputType;
  label?: string;
  helperText?: string;
  errorMessage?: string;
  iconName?: IconName;
  iconPosition?: "left" | "right";
  containerClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      label,
      helperText,
      errorMessage,
      iconName,
      iconPosition,
      size,
      state,
      fullWidth,
      containerClassName,
      labelClassName,
      inputClassName,
      disabled,
      id,
      type = "text",
      ...props
    },
    ref
  ) => {
    const inputState = disabled ? "disabled" : errorMessage ? "error" : state;

    const {
      container,
      label: labelStyles,
      inputWrapper,
      input,
      iconWrapper,
      errorMessage: errorStyles,
      helperText: helperStyles,
    } = textInputStyles({
      size,
      state: inputState,
      fullWidth,
      iconPosition,
    });

    const inputId = id || props.name;

    return (
      <div className={container({ class: containerClassName })}>
        {label && (
          <label
            htmlFor={inputId}
            className={labelStyles({ class: labelClassName })}
          >
            {label}
          </label>
        )}

        <div className={inputWrapper()}>
          {iconName && iconPosition && (
            <div className={iconWrapper()}>
              <Icon
                name={iconName}
                size="sm"
                color={inputState === "disabled" ? "muted" : "secondary"}
                aria-hidden={true}
              />
            </div>
          )}

          <input
            ref={ref}
            id={inputId}
            disabled={disabled}
            type={type}
            className={input({ class: inputClassName })}
            {...props}
          />
        </div>

        {errorMessage && <div className={errorStyles()}>{errorMessage}</div>}
        {!errorMessage && helperText && (
          <div className={helperStyles()}>{helperText}</div>
        )}
      </div>
    );
  }
);

TextInput.displayName = "TextInput";

export interface FormFieldProps extends Omit<TextInputProps, "name"> {
  name: string;
  error?: string;
}

export function FormField({
  name,
  error,
  label,
  helperText,
  type = "text",
  ...props
}: FormFieldProps) {
  return (
    <TextInput
      name={name}
      label={label}
      helperText={helperText}
      errorMessage={error}
      type={type}
      {...props}
    />
  );
}
