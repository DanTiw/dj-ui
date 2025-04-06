'use client'

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  MotionButton,
  MotionCard,
  MotionCardContent,
  MotionCardDescription,
  MotionCardFooter,
  MotionCardHeader,
  MotionCardTitle,
  Navbar,
  NavLink,
 
  Button
} from './ui';

export function MotionDemo() {
  return (
    <div className="max-w-5xl mx-auto p-8 space-y-16">
      <div className="text-center mb-12">
        <motion.h1 
          className="text-4xl font-bold mb-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Motion Components Showcase
        </motion.h1>
        <motion.p 
          className="text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Framer Motion powered UI components for dynamic interfaces
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6"
        >
          <Link href="/">
            <Button variant="outline">
              Back to Main Demo
            </Button>
          </Link>
        </motion.div>
      </div>
      
      <section className="border rounded-lg p-6 space-y-6 shadow-sm">
        <motion.h2 
          className="text-2xl font-semibold border-b pb-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          Navbar Component
        </motion.h2>
        
        <Navbar 
          navLinks={[
            { label: 'Home', href: '/' },
            { label: 'About', href: '/about' },
            { label: 'Services', href: '/services' },
            { label: 'Contact', href: '/contact' },
          ]} 
          logo={
            <motion.div 
              whileHover={{ rotate: 10 }}
              className="font-bold text-xl bg-primary text-primary-foreground px-3 py-1 rounded-md"
            >
              Logo
            </motion.div>
          }
        />
      </section>
      
      <section className="border rounded-lg p-6 space-y-6 shadow-sm">
        <motion.h2 
          className="text-2xl font-semibold border-b pb-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          Motion Buttons
        </motion.h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="space-y-2 text-center">
            <p className="text-sm text-muted-foreground">Pulse</p>
            <MotionButton animation="pulse">Pulse</MotionButton>
          </div>
          
          <div className="space-y-2 text-center">
            <p className="text-sm text-muted-foreground">Bounce</p>
            <MotionButton animation="bounce" variant="secondary">Bounce</MotionButton>
          </div>
          
          <div className="space-y-2 text-center">
            <p className="text-sm text-muted-foreground">Shake</p>
            <MotionButton animation="shake" variant="destructive">Shake</MotionButton>
          </div>
          
          <div className="space-y-2 text-center">
            <p className="text-sm text-muted-foreground">No Animation</p>
            <MotionButton variant="outline">Outline</MotionButton>
          </div>
        </div>
      </section>
      
      <section className="border rounded-lg p-6 space-y-6 shadow-sm">
        <motion.h2 
          className="text-2xl font-semibold border-b pb-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          Motion Cards
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground text-center">Lift Effect</p>
            <MotionCard hoverEffect="lift">
              <MotionCardHeader>
                <MotionCardTitle>Lift on Hover</MotionCardTitle>
                <MotionCardDescription>This card lifts up on hover</MotionCardDescription>
              </MotionCardHeader>
              <MotionCardContent>
                <p>Hover over me to see the lift effect</p>
              </MotionCardContent>
            </MotionCard>
          </div>
          
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground text-center">Scale Effect</p>
            <MotionCard hoverEffect="scale">
              <MotionCardHeader>
                <MotionCardTitle>Scale on Hover</MotionCardTitle>
                <MotionCardDescription>This card scales up on hover</MotionCardDescription>
              </MotionCardHeader>
              <MotionCardContent>
                <p>Hover over me to see the scale effect</p>
              </MotionCardContent>
            </MotionCard>
          </div>
          
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground text-center">Rotate Effect</p>
            <MotionCard hoverEffect="rotate">
              <MotionCardHeader>
                <MotionCardTitle>Rotate on Hover</MotionCardTitle>
                <MotionCardDescription>This card rotates slightly on hover</MotionCardDescription>
              </MotionCardHeader>
              <MotionCardContent>
                <p>Hover over me to see the rotate effect</p>
              </MotionCardContent>
            </MotionCard>
          </div>
          
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground text-center">Glow Effect</p>
            <MotionCard hoverEffect="glow">
              <MotionCardHeader>
                <MotionCardTitle>Glow on Hover</MotionCardTitle>
                <MotionCardDescription>This card glows on hover</MotionCardDescription>
              </MotionCardHeader>
              <MotionCardContent>
                <p>Hover over me to see the glow effect</p>
              </MotionCardContent>
            </MotionCard>
          </div>
        </div>
      </section>
      
      <section className="border rounded-lg p-6 space-y-6 shadow-sm">
        <motion.h2 
          className="text-2xl font-semibold border-b pb-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          Page Transitions
        </motion.h2>
        
        
      </section>
    </div>
  );
} 