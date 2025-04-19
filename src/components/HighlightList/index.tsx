import { tv } from "tailwind-variants";
import React from "react";
import { HighlightItem, HighlightItemProps } from "../HighlightItem";

export interface HighlightListProps {
  items: Array<Omit<HighlightItemProps, "className">>;
  className?: string;
}

const highlightList = tv({
  base: "space-y-2",
  variants: {},
  defaultVariants: {},
});

export const HighlightList: React.FC<HighlightListProps> = ({
  items,
  className,
}) => {
  return (
    <ul className={highlightList({ class: className })}>
      {items.map((item, index) => (
        <HighlightItem
          key={`highlight-item-${index}`}
          title={item.title}
          content={item.content}
        />
      ))}
    </ul>
  );
};
