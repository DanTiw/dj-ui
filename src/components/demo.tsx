import Link from "next/link";
import * as React from "react";
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
	TooltipTrigger,
} from "./ui";

export function Demo() {
	return (
		<div className="mx-auto max-w-4xl space-y-10 p-8">
			<div className="mb-12 text-center">
				<h1 className="mb-3 font-bold text-4xl">UI Component Showcase</h1>
				<p className="text-muted-foreground">
					A collection of reusable UI components built with React and Tailwind
					CSS
				</p>
				<div className="mt-6 flex flex-wrap justify-center gap-3">
					<Link href="/motion">
						<Button variant="default" className="animate-pulse">
							View Motion Components
						</Button>
					</Link>
					<Link href="/retro">
						<Button variant="secondary">View Retro UI</Button>
					</Link>
				</div>
			</div>

			<section className="space-y-6 rounded-lg border p-6 shadow-sm">
				<h2 className="border-b pb-2 font-semibold text-2xl">Buttons</h2>
				<div className="grid grid-cols-2 gap-4 md:grid-cols-3">
					<Button variant="default" className="w-full">
						Default
					</Button>
					<Button variant="destructive" className="w-full">
						Destructive
					</Button>
					<Button variant="outline" className="w-full">
						Outline
					</Button>
					<Button variant="secondary" className="w-full">
						Secondary
					</Button>
					<Button variant="ghost" className="w-full">
						Ghost
					</Button>
					<Button variant="link" className="w-full">
						Link
					</Button>
				</div>
			</section>

			<section className="overflow-hidden rounded-lg border shadow-sm">
				<h2 className="border-b p-6 font-semibold text-2xl">Card</h2>
				<div className="p-6">
					<Card>
						<CardHeader className="bg-muted/20">
							<CardTitle>Card Title</CardTitle>
							<CardDescription>Card Description</CardDescription>
						</CardHeader>
						<CardContent className="p-6">
							<p>
								Card Content goes here. This is an example of a card component
								that can be used for displaying information.
							</p>
						</CardContent>
						<CardFooter className="flex justify-end bg-muted/20">
							<Button>Action</Button>
						</CardFooter>
					</Card>
				</div>
			</section>

			<section className="space-y-6 rounded-lg border p-6 shadow-sm">
				<h2 className="border-b pb-2 font-semibold text-2xl">Input</h2>
				<div className="mx-auto max-w-sm">
					<Input placeholder="Enter your name" className="w-full" />
				</div>
			</section>

			<section className="space-y-6 rounded-lg border p-6 shadow-sm">
				<h2 className="border-b pb-2 font-semibold text-2xl">Checkbox</h2>
				<div className="flex items-center space-x-3 p-2">
					<Checkbox id="terms" />
					<label htmlFor="terms" className="cursor-pointer font-medium text-sm">
						Accept terms and conditions
					</label>
				</div>
			</section>

			<section className="space-y-6 rounded-lg border p-6 shadow-sm">
				<h2 className="border-b pb-2 font-semibold text-2xl">Select</h2>
				<div className="mx-auto max-w-sm">
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
			<section className="space-y-6 rounded-lg border p-6 shadow-sm">
				<h2 className="border-b pb-2 font-semibold text-2xl">Alerts</h2>
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

			<section className="space-y-6 rounded-lg border p-6 shadow-sm">
				<h2 className="border-b pb-2 font-semibold text-2xl">Badges</h2>
				<div className="flex flex-wrap gap-2">
					<Badge>Default</Badge>
					<Badge variant="secondary">Secondary</Badge>
					<Badge variant="destructive">Destructive</Badge>
					<Badge variant="outline">Outline</Badge>
					<Badge variant="success">Success</Badge>
				</div>
			</section>

			<section className="space-y-6 rounded-lg border p-6 shadow-sm">
				<h2 className="border-b pb-2 font-semibold text-2xl">Avatars</h2>
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

			<section className="space-y-6 rounded-lg border p-6 shadow-sm">
				<h2 className="border-b pb-2 font-semibold text-2xl">Switch</h2>
				<div className="flex items-center space-x-2">
					<Switch id="airplane-mode" />
					<label
						htmlFor="airplane-mode"
						className="cursor-pointer font-medium text-sm"
					>
						Airplane Mode
					</label>
				</div>
			</section>

			<section className="space-y-6 rounded-lg border p-6 shadow-sm">
				<h2 className="border-b pb-2 font-semibold text-2xl">Tabs</h2>
				<Tabs defaultValue="account" className="w-full">
					<TabsList className="grid w-full grid-cols-3">
						<TabsTrigger value="account">Account</TabsTrigger>
						<TabsTrigger value="password">Password</TabsTrigger>
						<TabsTrigger value="settings">Settings</TabsTrigger>
					</TabsList>
					<TabsContent value="account" className="mt-2 rounded-md border p-4">
						Account settings tab content
					</TabsContent>
					<TabsContent value="password" className="mt-2 rounded-md border p-4">
						Password settings tab content
					</TabsContent>
					<TabsContent value="settings" className="mt-2 rounded-md border p-4">
						Other settings tab content
					</TabsContent>
				</Tabs>
			</section>

			<section className="space-y-6 rounded-lg border p-6 shadow-sm">
				<h2 className="border-b pb-2 font-semibold text-2xl">Tooltip</h2>
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
