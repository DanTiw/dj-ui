'use client'

import * as React from "react";
import { motion } from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Button } from "./button";

const motionButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        destructive: "bg-destructive text-destructive-foreground",
        outline: "border border-input bg-background",
        secondary: "bg-secondary text-secondary-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        retro: "bg-primary text-primary-foreground border-2 border-black shadow-[4px_4px_0px_0px_#000] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
      animation: {
        none: "",
        pulse: "",
        bounce: "",
        shake: "",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      animation: "none",
    },
  }
);

export interface MotionButtonProps extends React.ComponentProps<typeof Button> {
  animation?: "none" | "pulse" | "bounce" | "shake";
}

export function MotionButton({
  className,
  variant,
  size,
  animation = "none",
  children,
  ...props
}: MotionButtonProps) {
  // Motion component wrapper
  const MotionWrapper = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<typeof motion.div>>(
    ({ className, children, ...props }, ref) => (
      <motion.div
        ref={ref}
        className={cn("inline-block", className)}
        {...props}
      >
        {children}
      </motion.div>
    )
  );
  MotionWrapper.displayName = "MotionWrapper";

  // Get animation props based on the animation type
  const getAnimationProps = () => {
    switch (animation) {
      case "pulse":
        return {
          animate: {
            scale: [1, 1.05, 1]
          },
          transition: {
            duration: 2,
            repeat: Infinity,
          },
          whileHover: { scale: 1.05 },
          whileTap: { scale: 0.95 },
        };
      case "bounce":
        return {
          animate: {
            y: [0, -5, 0]
          },
          transition: {
            duration: 0.6,
            repeat: Infinity,
          },
          whileHover: { y: -5 },
          whileTap: { scale: 0.95 },
        };
      case "shake":
        return {
          animate: {
            x: [0, -5, 5, -5, 5, 0]
          },
          transition: {
            duration: 0.6,
            repeat: Infinity,
            repeatDelay: 2,
          },
          whileHover: { scale: 1.05 },
          whileTap: { scale: 0.95 },
        };
      default:
        return {
          whileHover: { scale: 1.05 },
          whileTap: { scale: 0.95 },
        };
    }
  };

  return (
    <MotionWrapper {...getAnimationProps()}>
      <Button
        className={cn(motionButtonVariants({ variant, size, animation, className }))}
        variant={variant}
        size={size}
        {...props}
      >
        {children}
      </Button>
    </MotionWrapper>
  );
}

export { motionButtonVariants }; 