import { tv, type VariantProps } from "tailwind-variants";
import React from "react";
import { Heading } from "@/components/Heading";
import { Icon, IconName } from "@/components/Icon";

const productCardStyles = tv({
  base: "bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow",
  variants: {
    size: {
      default: "",
      large: "max-w-md",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

export interface ProductCardProps
  extends VariantProps<typeof productCardStyles> {
  name: string;
  description: string;
  weight: string;
  tag: string;
  iconName: IconName;
  className?: string;
}

export function ProductCard({
  name,
  description,
  weight,
  tag,
  iconName,
  size,
  className,
  ...props
}: ProductCardProps) {
  return (
    <div className={productCardStyles({ size, className })} {...props}>
      <div className="h-64 bg-emerald-100 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon
            name={iconName}
            size="xl"
            color="primary"
            className="opacity-50"
          />
        </div>
      </div>
      <div className="p-6">
        <Heading level={3} size="h4" color="default" marginBottom="small">
          {name}
        </Heading>
        <p className="text-slate-600 mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-emerald-700 font-semibold">{weight}</span>
          <div className="bg-emerald-50 text-emerald-800 py-1 px-3 rounded-full text-sm font-medium">
            {tag}
          </div>
        </div>
      </div>
    </div>
  );
}
