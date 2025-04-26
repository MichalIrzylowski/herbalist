import { useEffect, useRef } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { Icon, type IconName } from "@/components/Icon";

const statusMessageStyles = tv({
  base: "mb-6 p-4 rounded-md flex items-center",
  variants: {
    status: {
      success: "bg-emerald-50 border border-emerald-200 text-emerald-700",
      error: "bg-red-50 border border-red-200 text-red-700",
      info: "bg-blue-50 border border-blue-200 text-blue-700",
      warning: "bg-amber-50 border border-amber-200 text-amber-700",
    },
  },
  defaultVariants: {
    status: "info",
  },
});

export interface StatusMessageProps
  extends VariantProps<typeof statusMessageStyles> {
  message: string;
  status?: "success" | "error" | "info" | "warning";
  icon?: IconName;
  className?: string;
  /** Set to true if the message should be announced immediately to screen readers */
  autoFocus?: boolean;
  /** Set to false if the message is not important enough to be announced to screen readers */
  announceToScreenReaders?: boolean;
}

export function StatusMessage({
  message,
  status = "info",
  icon,
  className,
  autoFocus = false,
  announceToScreenReaders = true,
}: StatusMessageProps) {
  const messageRef = useRef<HTMLDivElement>(null);

  // Determine icon based on status if not explicitly provided
  const iconToShow =
    icon ||
    (status === "success"
      ? "check"
      : status === "error"
      ? "error"
      : status === "warning"
      ? "error"
      : "check");

  // Set appropriate ARIA role based on status
  const ariaRole = status === "error" ? "alert" : "status";

  // Auto-focus the message for screen readers if needed
  useEffect(() => {
    if (autoFocus && messageRef.current) {
      messageRef.current.focus();
    }
  }, [autoFocus]);

  return (
    <div
      ref={messageRef}
      className={statusMessageStyles({ status, className })}
      role={announceToScreenReaders ? ariaRole : undefined}
      tabIndex={autoFocus ? -1 : undefined}
      aria-live={
        announceToScreenReaders
          ? status === "error"
            ? "assertive"
            : "polite"
          : undefined
      }
    >
      <Icon
        name={iconToShow}
        className="mr-2 flex-shrink-0"
        aria-hidden={true}
        size="md"
      />
      <p>{message}</p>
    </div>
  );
}
