import { tv } from "tailwind-variants";
import React from "react";

export interface HighlightItemProps {
  title: string;
  content: string;
  className?: string;
}

const highlightItem = tv({
  base: "flex items-start",
  variants: {},
  defaultVariants: {},
});

export const HighlightItem: React.FC<HighlightItemProps> = ({
  title,
  content,
  className,
}) => {
  return (
    <li className={highlightItem({ class: className })}>
      <span className="text-emerald-600 mr-2">•</span>
      <span>
        <strong>{title}</strong> – {content}
      </span>
    </li>
  );
};
