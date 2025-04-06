'use client'

import * as React from "react";
import { motion } from "framer-motion";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-none text-sm font-bold transition-all text-black relative",
  {
    variants: {
      variant: {
        default: "bg-[#FFD700] border-4 border-black hover:translate-x-[5px] hover:translate-y-[4px] hover:shadow-none shadow-[5px_4px_0px_0px_#000]",
        destructive: "bg-red-500 border-4 border-black hover:translate-x-[5px] hover:translate-y-[4px] hover:shadow-none shadow-[5px_4px_0px_0px_#000]",
        outline: "bg-white border-4 border-black hover:translate-x-[5px] hover:translate-y-[4px] hover:shadow-none shadow-[5px_4px_0px_0px_#000]",
        secondary: "bg-white border-4 border-black hover:translate-x-[5px] hover:translate-y-[4px] hover:shadow-none shadow-[5px_4px_0px_0px_#000]",
        ghost: "hover:bg-yellow-100 border-4 border-black hover:translate-x-[5px] hover:translate-y-[4px] hover:shadow-none shadow-[5px_4px_0px_0px_#000]",
        link: "text-blue-500 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-none px-3",
        lg: "h-11 rounded-none px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
  animation?: "none" | "pulse" | "bounce" | "shake";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, animation = "none", isLoading, children, ...props }, ref) => {
    
    // Motion props based on animation type
    const getMotionProps = () => {
      switch (animation) {
        case "pulse":
          return {
            whileHover: { scale: 1.05 },
            whileTap: { scale: 0.95 },
            animate: {
              scale: [1, 1.05, 1],
              transition: { duration: 2, repeat: Infinity }
            }
          }
        case "bounce":
          return {
            whileHover: { y: -5 },
            whileTap: { scale: 0.95 },
            animate: {
              y: [0, -5, 0],
              transition: { duration: 0.6, repeat: Infinity }
            }
          }
        case "shake":
          return {
            whileHover: { scale: 1.05 },
            whileTap: { scale: 0.95 },
            animate: {
              x: [0, -5, 5, -5, 5, 0],
              transition: { duration: 0.6, repeat: Infinity, repeatDelay: 2 }
            }
          }
        default:
          return {
            whileHover: { scale: 1.02 },
            whileTap: { scale: 0.98 }
          }
      }
    }

    const Comp = asChild ? Slot : motion.button;
    
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={isLoading}
        {...getMotionProps()}
        {...props}
      >
        {isLoading ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Loading...
          </>
        ) : (
          children
        )}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants }; 