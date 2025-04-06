'use client'

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface TypingEffectProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string
  typingSpeed?: number
  showCursor?: boolean
  showUnderline?: boolean
  textClassName?: string
  underlineClassName?: string
  cursorClassName?: string
}

export function TypingEffect({
  className,
  text,
  typingSpeed = 100,
  showCursor = true,
  showUnderline = true,
  textClassName,
  underlineClassName,
  cursorClassName,
  ...props
}: TypingEffectProps) {
  const [displayedText, setDisplayedText] = React.useState("")
  const [isTypingComplete, setIsTypingComplete] = React.useState(false)
  
  React.useEffect(() => {
    let index = 0
    setDisplayedText("")
    setIsTypingComplete(false)
    
    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text.charAt(index))
        index++
      } else {
        setIsTypingComplete(true)
        clearInterval(timer)
      }
    }, typingSpeed)
    
    return () => clearInterval(timer)
  }, [text, typingSpeed])
  
  return (
    <div
      className={cn(
        "overflow-hidden whitespace-nowrap mx-auto w-fit relative",
        className
      )}
      {...props}
    >
      <div className={cn("font-mono", textClassName)}>
        {displayedText}
        {showCursor && (
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className={cn("inline-block ml-1", cursorClassName)}
          >
            _
          </motion.span>
        )}
      </div>
      
      {showUnderline && isTypingComplete && (
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.6 }}
          className={cn("h-1 bg-black mt-1", underlineClassName)}
        />
      )}
    </div>
  )
} 