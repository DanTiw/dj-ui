'use client'

import * as React from 'react';
import Link from 'next/link';
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Navbar,
  NavLink,
  Paper,
  Quote,
  SectionHeader,

  TypingEffect
} from './ui';

export function RetroDemo() {
  return (
    <div className="max-w-5xl mx-auto p-8 space-y-12 bg-[#FFF3E4] min-h-screen">
      <div className="text-center mb-12">
        <TypingEffect 
          text="Yellow & Black UI" 
          typingSpeed={80}
          textClassName="text-4xl font-bold mb-3"
        />
        <p className="text-muted-foreground mt-6">
          A retro UI library with bold black borders and yellow accents
        </p>
        <div className="mt-6">
          <Link href="/">
            <Button>
              Back to Main Demo
            </Button>
          </Link>
        </div>
      </div>
      
      <Navbar 
        navLinks={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
          { label: 'Services', href: '/services' },
          { label: 'Contact', href: '/contact' },
        ]} 
        logo={
          <div className="font-bold text-xl bg-[#FFD700] text-black px-3 py-1 border-2 border-black">
            RETRO
          </div>
        }
      />
      
      <section className="space-y-6">
        <SectionHeader 
          icon="⚡️" 
          title="Bold Buttons"
        />
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <Button variant="default" className="w-full" animation="pulse">Default</Button>
          <Button variant="destructive" className="w-full">Destructive</Button>
          <Button variant="outline" className="w-full">Outline</Button>
          <Button variant="secondary" className="w-full" animation="bounce">Secondary</Button>
          <Button variant="ghost" className="w-full">Ghost</Button>
          <Button variant="link" className="w-full">Link</Button>
        </div>
      </section>
      
      <section className="space-y-6">
        <SectionHeader 
          icon="📝" 
          title="Paper Cards"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card hoverEffect="lift">
            <CardHeader>
              <CardTitle>Hover Lift Effect</CardTitle>
              <CardDescription>This card lifts on hover</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Cards with bold black borders and shadow effects.</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm">Learn More</Button>
            </CardFooter>
          </Card>
          
          <Card hoverEffect="scale">
            <CardHeader>
              <CardTitle>Hover Scale Effect</CardTitle>
              <CardDescription>This card scales on hover</CardDescription>
            </CardHeader>
            <CardContent>
              <p>A retro card component with various hover animations.</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm">Learn More</Button>
            </CardFooter>
          </Card>
        </div>
      </section>
      
      <section className="space-y-6">
        <SectionHeader 
          icon="📋" 
          title="Paper Component"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Paper>
            <h3 className="text-xl font-bold mb-2">Standard Paper</h3>
            <p>A paper component with lined background and black borders.</p>
          </Paper>
          
          <Paper withCornerFold shadow="lg">
            <h3 className="text-xl font-bold mb-2">Paper with Corner Fold</h3>
            <p>This paper component has decorative corner folds and larger shadow.</p>
          </Paper>
        </div>
      </section>
      
      <section className="space-y-6">
        <SectionHeader 
          icon="💬" 
          title="Quote Component"
        />
        
        <Quote 
          content="Design is not just what it looks like and feels like. Design is how it works."
          author="Steve Jobs"
        />
      </section>
      
      <section className="space-y-6">
        <SectionHeader 
          icon="🏅" 
          title="Badges"
        />
        
        <div className="flex flex-wrap gap-2">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="success">Success</Badge>
          <Badge animate>Animated</Badge>
        </div>
      </section>
      
      <section className="space-y-6">
        <SectionHeader 
          icon="💻" 
          title="Tech Stack"
          animateIcon
        />
        
      </section>
    </div>
  );
} 