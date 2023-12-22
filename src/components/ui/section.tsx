import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const sectionVariants = cva("max-w-[2160px]", {
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
      lg: "p-4 md:p-16 lg:p-18",
      sm: "p-4 md:p-6 lg:p-8",
      md: "p-4 md:p-10 lg:p-12",
    },
    position: {
      left: "",
      center: "mx-auto",
      right: "ml-[100%]",
    },
  },
  defaultVariants: {
    position: "center",
    size: "sm",
    background: "default",
  },
});

interface SectionProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sectionVariants> {
  children?: React.ReactNode;
}

const Section = ({
  children,
  background,
  size,
  position,
  className,
}: SectionProps) => {
  return (
    <div className={cn(sectionVariants({ size, background, className }))}>
      <div className={cn(sectionVariants({ position }), "bg-transparent")}>
        {children}
      </div>
    </div>
  );
};

export default Section;
