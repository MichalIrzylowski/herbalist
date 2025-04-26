import React, { forwardRef } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const textAreaStyles = tv({
  slots: {
    container: "relative w-full",
    label: "block text-sm font-medium text-slate-700 mb-1",
    textareaWrapper: "relative",
    textarea:
      "w-full text-slate-900 bg-white border focus:outline-none focus:ring-2 rounded-md transition-colors duration-200 px-4 py-2 min-h-[100px]",
    errorMessage: "text-red-500 text-sm mt-1",
    helperText: "text-slate-500 text-sm mt-1",
  },
  variants: {
    size: {
      sm: {
        textarea: "text-sm px-3 py-2",
      },
      md: {
        textarea: "text-base",
      },
      lg: {
        textarea: "text-lg px-5 py-3",
      },
    },
    state: {
      default: {
        textarea:
          "border-slate-300 hover:border-emerald-500 focus:border-emerald-500 focus:ring-emerald-500/20",
      },
      error: {
        textarea:
          "border-red-500 hover:border-red-600 focus:border-red-500 focus:ring-red-500/20",
        label: "text-red-500",
      },
      disabled: {
        textarea:
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
    rows: {
      small: { textarea: "min-h-[80px]" },
      medium: { textarea: "min-h-[120px]" },
      large: { textarea: "min-h-[160px]" },
      xlarge: { textarea: "min-h-[240px]" },
    },
  },
  defaultVariants: {
    size: "md",
    state: "default",
    fullWidth: true,
    rows: "medium",
  },
});

export interface TextAreaProps
  extends Omit<
      React.TextareaHTMLAttributes<HTMLTextAreaElement>,
      "size" | "rows"
    >,
    VariantProps<typeof textAreaStyles> {
  label?: string;
  helperText?: string;
  errorMessage?: string;
  containerClassName?: string;
  labelClassName?: string;
  textareaClassName?: string;
  rowsCount?: number; // Using rowsCount for the HTML rows attribute
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      label,
      helperText,
      errorMessage,
      size,
      state,
      fullWidth,
      rows, // This is the variant from tailwind-variants
      rowsCount, // This is the HTML rows attribute
      containerClassName,
      labelClassName,
      textareaClassName,
      disabled,
      id,
      ...props
    },
    ref
  ) => {
    const inputState = disabled ? "disabled" : errorMessage ? "error" : state;

    const {
      container,
      label: labelStyles,
      textareaWrapper,
      textarea,
      errorMessage: errorStyles,
      helperText: helperStyles,
    } = textAreaStyles({
      size,
      state: inputState,
      fullWidth,
      rows,
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

        <div className={textareaWrapper()}>
          <textarea
            ref={ref}
            id={inputId}
            disabled={disabled}
            rows={rowsCount}
            className={textarea({ class: textareaClassName })}
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

TextArea.displayName = "TextArea";

export interface TextAreaFormFieldProps extends Omit<TextAreaProps, "name"> {
  name: string;
  error?: string;
}

export function TextAreaFormField({
  name,
  error,
  label,
  helperText,
  ...props
}: TextAreaFormFieldProps) {
  return (
    <TextArea
      name={name}
      label={label}
      helperText={helperText}
      errorMessage={error}
      {...props}
    />
  );
}
