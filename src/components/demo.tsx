import * as React from 'react';
import Link from 'next/link';
import {
  Alert,
  AlertDescription,
  AlertTitle,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Checkbox,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Switch,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from './ui';

export function Demo() {
  return (
    <div className="max-w-4xl mx-auto p-8 space-y-10">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-3">UI Component Showcase</h1>
        <p className="text-muted-foreground">A collection of reusable UI components built with React and Tailwind CSS</p>
        <div className="mt-6 flex flex-wrap gap-3 justify-center">
          <Link href="/motion">
            <Button variant="default" className="animate-pulse">
              View Motion Components
            </Button>
          </Link>
          <Link href="/retro">
            <Button variant="secondary">
              View Retro UI
            </Button>
          </Link>
        </div>
      </div>
      
      <section className="border rounded-lg p-6 space-y-6 shadow-sm">
        <h2 className="text-2xl font-semibold border-b pb-2">Buttons</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <Button variant="default" className="w-full">Default</Button>
          <Button variant="destructive" className="w-full">Destructive</Button>
          <Button variant="outline" className="w-full">Outline</Button>
          <Button variant="secondary" className="w-full">Secondary</Button>
          <Button variant="ghost" className="w-full">Ghost</Button>
          <Button variant="link" className="w-full">Link</Button>
        </div>
      </section>
      
      <section className="border rounded-lg overflow-hidden shadow-sm">
        <h2 className="text-2xl font-semibold p-6 border-b">Card</h2>
        <div className="p-6">
          <Card>
            <CardHeader className="bg-muted/20">
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <p>Card Content goes here. This is an example of a card component that can be used for displaying information.</p>
            </CardContent>
            <CardFooter className="bg-muted/20 flex justify-end">
              <Button>Action</Button>
            </CardFooter>
          </Card>
        </div>
      </section>
      
      <section className="border rounded-lg p-6 space-y-6 shadow-sm">
        <h2 className="text-2xl font-semibold border-b pb-2">Input</h2>
        <div className="max-w-sm mx-auto">
          <Input placeholder="Enter your name" className="w-full" />
        </div>
      </section>
      
      <section className="border rounded-lg p-6 space-y-6 shadow-sm">
        <h2 className="text-2xl font-semibold border-b pb-2">Checkbox</h2>
        <div className="flex items-center space-x-3 p-2">
          <Checkbox id="terms" />
          <label 
            htmlFor="terms" 
            className="text-sm font-medium cursor-pointer"
          >
            Accept terms and conditions
          </label>
        </div>
      </section>
      
      <section className="border rounded-lg p-6 space-y-6 shadow-sm">
        <h2 className="text-2xl font-semibold border-b pb-2">Select</h2>
        <div className="max-w-sm mx-auto">
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="orange">Orange</SelectItem>
              <SelectItem value="grape">Grape</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </section>

      {/* New components */}
      <section className="border rounded-lg p-6 space-y-6 shadow-sm">
        <h2 className="text-2xl font-semibold border-b pb-2">Alerts</h2>
        <div className="space-y-4">
          <Alert>
            <AlertTitle>Default Alert</AlertTitle>
            <AlertDescription>
              This is a default alert for displaying information.
            </AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <AlertTitle>Destructive Alert</AlertTitle>
            <AlertDescription>
              This is a destructive alert for displaying errors.
            </AlertDescription>
          </Alert>
          <Alert variant="success">
            <AlertTitle>Success Alert</AlertTitle>
            <AlertDescription>
              This is a success alert for displaying confirmation.
            </AlertDescription>
          </Alert>
          <Alert variant="warning">
            <AlertTitle>Warning Alert</AlertTitle>
            <AlertDescription>
              This is a warning alert for displaying caution.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      <section className="border rounded-lg p-6 space-y-6 shadow-sm">
        <h2 className="text-2xl font-semibold border-b pb-2">Badges</h2>
        <div className="flex flex-wrap gap-2">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="success">Success</Badge>
        </div>
      </section>

      <section className="border rounded-lg p-6 space-y-6 shadow-sm">
        <h2 className="text-2xl font-semibold border-b pb-2">Avatars</h2>
        <div className="flex flex-wrap gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="Avatar" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="https://github.com/vercel.png" alt="Avatar" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </div>
      </section>

      <section className="border rounded-lg p-6 space-y-6 shadow-sm">
        <h2 className="text-2xl font-semibold border-b pb-2">Switch</h2>
        <div className="flex items-center space-x-2">
          <Switch id="airplane-mode" />
          <label htmlFor="airplane-mode" className="text-sm font-medium cursor-pointer">
            Airplane Mode
          </label>
        </div>
      </section>

      <section className="border rounded-lg p-6 space-y-6 shadow-sm">
        <h2 className="text-2xl font-semibold border-b pb-2">Tabs</h2>
        <Tabs defaultValue="account" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="account" className="p-4 border rounded-md mt-2">
            Account settings tab content
          </TabsContent>
          <TabsContent value="password" className="p-4 border rounded-md mt-2">
            Password settings tab content
          </TabsContent>
          <TabsContent value="settings" className="p-4 border rounded-md mt-2">
            Other settings tab content
          </TabsContent>
        </Tabs>
      </section>

      <section className="border rounded-lg p-6 space-y-6 shadow-sm">
        <h2 className="text-2xl font-semibold border-b pb-2">Tooltip</h2>
        <div className="flex justify-center py-8">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Hover Me</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>This is a tooltip that appears on hover</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </section>
    </div>
  );
} 