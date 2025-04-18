import React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { Icon, type IconName } from "../Icon";
import { Heading } from "../Heading";

const teamMemberStyles = tv({
  slots: {
    base: "bg-white rounded-lg shadow-md overflow-hidden text-center p-6",
    iconWrapper:
      "w-32 h-32 bg-emerald-100 rounded-full mx-auto mb-6 flex items-center justify-center",
    title: "", // Styles are handled by the Heading component
    jobTitle: "text-emerald-700 font-medium mb-4",
    description: "text-slate-600",
  },
  variants: {
    size: {
      default: {},
      large: {
        base: "p-8",
        iconWrapper: "w-40 h-40",
      },
    },
  },
  defaultVariants: {
    size: "default",
  },
});

export interface TeamMemberProps extends VariantProps<typeof teamMemberStyles> {
  name: string;
  title: string;
  description: string;
  iconName: IconName;
  className?: string;
}

export function TeamMember({
  name,
  title,
  description,
  iconName,
  size,
  className,
}: TeamMemberProps) {
  const {
    base,
    iconWrapper,
    jobTitle,
    description: descriptionStyles,
  } = teamMemberStyles({ size, className });

  return (
    <div className={base()}>
      <div className={iconWrapper()}>
        <Icon name={iconName} size="lg" color="primary" />
      </div>
      <Heading level={3} size="h4" color="default" marginBottom="small">
        {name}
      </Heading>
      <p className={jobTitle()}>{title}</p>
      <p className={descriptionStyles()}>{description}</p>
    </div>
  );
}
