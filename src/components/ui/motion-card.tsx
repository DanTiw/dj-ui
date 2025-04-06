'use client'

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MotionCardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: 'lift' | 'scale' | 'rotate' | 'glow' | 'none';
  tapEffect?: boolean;
}

const MotionCard = React.forwardRef<HTMLDivElement, MotionCardProps>(
  ({ className, children, hoverEffect = 'lift', tapEffect = true, ...props }, ref) => {
    // Base styles
    const baseStyles = "rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden";
    
    // Motion variants
    const getHoverVariants = () => {
      switch (hoverEffect) {
        case 'lift':
          return { y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.2)" };
        case 'scale':
          return { scale: 1.02 };
        case 'rotate':
          return { rotate: 1, y: -5 };
        case 'glow':
          return { 
            boxShadow: "0 0 15px 2px rgba(255,255,255,0.3)",
            y: -2
          };
        default:
          return {};
      }
    };
    
    const tapVariants = tapEffect 
      ? { scale: 0.98 } 
      : {};
    
    return (
      <motion.div
        ref={ref}
        className={cn(baseStyles, className)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        whileHover={getHoverVariants()}
        whileTap={tapVariants}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);
MotionCard.displayName = "MotionCard";

const MotionCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <motion.div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.2, delay: 0.1 }}
    {...props}
  />
));
MotionCardHeader.displayName = "MotionCardHeader";

const MotionCardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <motion.h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.2, delay: 0.15 }}
    {...props}
  />
));
MotionCardTitle.displayName = "MotionCardTitle";

const MotionCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <motion.p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.2, delay: 0.2 }}
    {...props}
  />
));
MotionCardDescription.displayName = "MotionCardDescription";

const MotionCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <motion.div 
    ref={ref} 
    className={cn("p-6 pt-0", className)}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.2, delay: 0.25 }}
    {...props} 
  />
));
MotionCardContent.displayName = "MotionCardContent";

const MotionCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <motion.div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.2, delay: 0.3 }}
    {...props}
  />
));
MotionCardFooter.displayName = "MotionCardFooter";

export { 
  MotionCard, 
  MotionCardHeader, 
  MotionCardFooter, 
  MotionCardTitle, 
  MotionCardDescription, 
  MotionCardContent 
}; 