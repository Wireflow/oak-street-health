import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import React, { HTMLAttributes, ReactNode } from "react";

const titleVariants = cva("font-bold", {
  variants: {
    variant: {
      default: "text-theme-typography",
      white: "text-white",
      "light-gray": "text-theme-typography-gray",
      green: "text-theme-typography-green",
      black: "text-black",
    },
    size: {
      md: "text-3xl md:text-5xl",
      sm: "text-2xl md:text-4xl",
      lg: "text-4xl md:text-6xl",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "lg",
  },
});

interface TitleProps
  extends HTMLAttributes<HTMLHeadElement>,
    VariantProps<typeof titleVariants> {
  children?: ReactNode;
}

const Title = ({ children, className, variant, size }: TitleProps) => {
  return (
    <h2 className={cn(titleVariants({ className, variant, size }))}>
      {children}
    </h2>
  );
};

export default Title;
