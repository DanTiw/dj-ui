'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { cn } from "@/lib/utils"

interface NavLinkProps {
  label: string
  href: string
  isMobile?: boolean
  className?: string
}

const NavLink = React.forwardRef<
  HTMLAnchorElement,
  NavLinkProps
>(({ label, href, isMobile = false, className, ...props }, ref) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Link
        href={href}
        className={cn(
          "px-4 py-2 text-sm font-bold bg-[#FFD700] text-black border-2 border-black rounded-none",
          "hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none",
          "transition-all duration-300 shadow-[3px_3px_0px_0px_#000]",
          "sm:px-6 sm:py-3 sm:text-base",
          isMobile ? "block w-full text-center" : "inline-block",
          className
        )}
        ref={ref}
        {...props}
      >
        {label}
      </Link>
    </motion.div>
  )
})
NavLink.displayName = "NavLink"

interface NavbarProps {
  className?: string
  logo?: React.ReactNode
  navLinks: Array<{
    label: string
    href: string
  }>
}

const Navbar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & NavbarProps
>(({ className, logo, navLinks, ...props }, ref) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <nav 
      className={cn("bg-white p-4 border-b-2 border-black", className)}
      ref={ref}
      {...props}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {logo && <div className="flex-shrink-0">{logo}</div>}
        
        <div className="hidden md:flex space-x-4 items-center">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <NavLink label={link.label} href={link.href} />
            </motion.div>
          ))}
        </div>
        
        <motion.button
          className="md:hidden p-2 bg-[#FFD700] text-black border-2 border-black rounded-none shadow-[3px_3px_0px_0px_#000] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileTap={{ scale: 0.95 }}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>
      
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden mt-4 space-y-2"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <NavLink label={link.label} href={link.href} isMobile />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
})
Navbar.displayName = "Navbar"

export { Navbar, NavLink }; 