import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const sectionVariants = cva("", {
  variants: {
    background: {
      default: "bg-white",
      green: "bg-theme-green",
      purple: "bg-theme-purple",
      orange: "bg-theme-orange",
      "light-green": "bg-theme-light-green",
      "ligher-green": "bg-theme-lighter-green",
      "bright-white": "bg-theme-bright-white",
    },
    size: {
      lg: "p-8 md:p-16 lg:p-28",
      sm: "p-6 md:p-8 lg:p-10",
      md: "p-8 md:p-10 lg:p-14",
    },
  },
  defaultVariants: {
    size: "sm",
    background: "default",
  },
});

interface SectionProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sectionVariants> {
  children?: React.ReactNode;
}

const Section = ({ children, background, size }: SectionProps) => {
  return (
    <div className={cn(sectionVariants({ size, background }))}>{children}</div>
  );
};

export default Section;
