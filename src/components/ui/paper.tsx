'use client'

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface PaperProps extends React.HTMLAttributes<HTMLDivElement> {
  withLines?: boolean
  withCornerFold?: boolean
  shadow?: 'sm' | 'md' | 'lg' | 'none'
}

const Paper = React.forwardRef<HTMLDivElement, PaperProps>(
  ({ className, withLines = true, withCornerFold = false, shadow = 'md', children, ...props }, ref) => {
    const shadowStyles = {
      none: '',
      sm: 'shadow-[4px_4px_0px_0px_#000]',
      md: 'shadow-[8px_8px_0px_0px_#000]',
      lg: 'shadow-[12px_12px_0px_0px_#000]',
    }
    
    const bgStyles = withLines 
      ? { backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(0,0,0,0.05) 20px, rgba(0,0,0,0.05) 21px)" }
      : {}
    
    return (
      <motion.div
        ref={ref}
        className={cn(
          "w-full border-4 border-black p-6 bg-white relative",
          shadowStyles[shadow],
          className
        )}
        style={bgStyles}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        {...props}
      >
        {withCornerFold && (
          <>
            <div className="absolute -left-2 -top-2 w-5 h-5 border-t-2 border-l-2 border-black" />
            <div className="absolute -right-2 -top-2 w-5 h-5 border-t-2 border-r-2 border-black" />
            <div className="absolute -left-2 -bottom-2 w-5 h-5 border-b-2 border-l-2 border-black" />
            <div className="absolute -right-2 -bottom-2 w-5 h-5 border-b-2 border-r-2 border-black" />
          </>
        )}
        {children}
      </motion.div>
    )
  }
)
Paper.displayName = "Paper"

export { Paper } 