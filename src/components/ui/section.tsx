import React, { cloneElement, CSSProperties } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import Shape from "../shape";
import { ShapeColor } from "../shape";
import Shape2 from "../shape2";

const sectionVariants = cva("mx-auto relative overflow-hidden", {
  variants: {
    background: {
      default: "bg-white",
      green: "bg-theme-green",
      purple: "bg-theme-purple",
      orange: "bg-theme-orange",
      "light-green": "bg-theme-light-green",
      "ligher-green": "bg-theme-lighter-green",
      "bright-white": "bg-theme-bright-white",
      blue: "bg-theme-blue",
    },
    size: {
      lg: "p-6 md:p-16 lg:p-18",
      sm: "p-6 md:p-6 lg:p-8",
      md: "p-6 md:p-10 lg:p-12",
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
  shape?: {
    color: ShapeColor;
    rotate?: number;
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
    scale?: number;
  };
  isShapeSmall?: boolean;
}

const Section = ({
  children,
  background,
  size,
  className,
  shape,
  isShapeSmall = true,
}: SectionProps) => {
  const shapeStyle: CSSProperties = {
    transform: `rotate(${shape?.rotate}deg)`,
    right: shape?.right,
    left: shape?.left,
    bottom: shape?.bottom,
    top: shape?.top,
    scale: shape?.scale,
  };

  return (
    <div
      className={cn(
        sectionVariants({
          size,
          background,
        })
      )}
    >
      <div className={cn("mx-auto max-w-[1400px]", className)}>
        {children}
        {isShapeSmall ? (
          <>
            {" "}
            {shape && (
              <Shape
                color={shape.color}
                className="absolute z-0"
                style={shapeStyle}
              />
            )}
          </>
        ) : (
          <>
            {" "}
            {shape && (
              <Shape2
                color={shape.color}
                className="absolute 2xl:w-[1100px] xl:h-[748px] xl:w-[760px] lg:w-[550px] lg:h-[550px] md:h-[500px]  md:w-[500px] w-[450px] h-[500px]  z-0"
                style={shapeStyle}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Section;
