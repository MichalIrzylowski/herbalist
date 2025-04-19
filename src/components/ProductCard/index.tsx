import { tv, type VariantProps } from "tailwind-variants";
import React from "react";
import { Heading } from "@/components/Heading";
import { Icon, IconName } from "@/components/Icon";
import Image from "next/image";

const productCardStyles = tv({
  slots: {
    base: "bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow",
    mediaContainer: "h-64 bg-emerald-100 relative",
    iconContainer: "absolute inset-0 flex items-center justify-center",
    imageContainer: "relative w-full h-full",
    contentContainer: "p-6",
    description: "text-slate-600 mb-4",
    footer: "flex items-center justify-between",
    weight: "text-emerald-700 font-semibold",
    tag: "bg-emerald-50 text-emerald-800 py-1 px-3 rounded-full text-sm font-medium",
  },
  variants: {
    size: {
      default: {},
      large: {
        base: "max-w-md",
      },
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
  iconName?: IconName;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
}

export function ProductCard({
  name,
  description,
  weight,
  tag,
  iconName,
  imageSrc,
  imageAlt = "",
  size,
  className,
  ...props
}: ProductCardProps) {
  const {
    base,
    mediaContainer,
    iconContainer,
    imageContainer,
    contentContainer,
    description: descriptionStyle,
    footer,
    weight: weightStyle,
    tag: tagStyle,
  } = productCardStyles({ size });

  return (
    <div className={base({ className })} {...props}>
      <div className={mediaContainer()}>
        {imageSrc ? (
          <div className={imageContainer()}>
            <Image
              src={imageSrc}
              alt={imageAlt || name}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover object-center"
            />
          </div>
        ) : iconName ? (
          <div className={iconContainer()}>
            <Icon
              name={iconName}
              size="xl"
              color="primary"
              className="opacity-50"
            />
          </div>
        ) : null}
      </div>
      <div className={contentContainer()}>
        <Heading level={3} size="h4" color="default" marginBottom="small">
          {name}
        </Heading>
        <p className={descriptionStyle()}>{description}</p>
        <div className={footer()}>
          <span className={weightStyle()}>{weight}</span>
          <div className={tagStyle()}>{tag}</div>
        </div>
      </div>
    </div>
  );
}
