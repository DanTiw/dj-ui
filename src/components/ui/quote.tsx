'use client'

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface QuoteProps extends React.HTMLAttributes<HTMLDivElement> {
  content: string
  author?: string
  animate?: boolean
}

export function Quote({ 
  className, 
  content, 
  author,
  animate = true,
  ...props 
}: QuoteProps) {
  return (
    <motion.div
      className={cn(
        "pl-4 py-3 border-l-4 border-[#FFD700] bg-black/5 font-medium italic",
        className
      )}
      initial={animate ? { opacity: "0", x: -10 } : undefined}
      animate={animate ? { opacity: "1", x: 0 } : undefined}
      transition={animate ? { delay: 0.5, duration: 0.5 } : undefined}
      {...props}
    >
      <p>{content}</p>
      {author && (
        <p className="text-sm mt-2 text-right">― {author}</p>
      )}
    </motion.div>
  )
} 