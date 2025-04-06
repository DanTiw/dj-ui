'use client'

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SectionHeaderProps extends React.HTMLAttributes<HTMLHeadingElement> {
  icon?: React.ReactNode
  title: string
  animateIcon?: boolean
}

export function SectionHeader({ 
  className, 
  icon, 
  title, 
  animateIcon = true,
  ...props 
}: SectionHeaderProps) {
  return (
    <h2 
      className={cn(
        "text-xl md:text-2xl font-bold mb-4 flex items-center font-mono",
        className
      )}
      {...props}
    >
      {icon && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={animateIcon ? { 
            opacity: 1,
            rotate: [0, 15, -15, 10, -10, 5, -5, 0],
          } : { opacity: 1 }}
          transition={{ 
            duration: 1.5, 
            repeat: animateIcon ? Infinity : 0, 
            repeatDelay: 10 
          }}
          className="inline-block mr-2"
        >
          {icon}
        </motion.span>
      )}
      {title}
    </h2>
  )
} 