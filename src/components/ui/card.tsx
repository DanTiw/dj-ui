"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import * as React from "react";

const Card = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement> & {
		hoverEffect?: "lift" | "scale" | "rotate" | "glow" | "none";
	}
>(({ className, hoverEffect = "none", ...props }, ref) => {
	// Motion variants for hover effects
	const getHoverVariants = () => {
		switch (hoverEffect) {
			case "lift":
				return { y: -8 };
			case "scale":
				return { scale: 1.02 };
			case "rotate":
				return { rotate: 1, y: -5 };
			case "glow":
				return {
					boxShadow: "0 0 15px 2px rgba(255, 215, 0, 0.5)",
					y: -2,
				};
			default:
				return {};
		}
	};

	return (
		<motion.div
			ref={ref}
			className={cn(
				"relative w-full border-4 border-black bg-[#FFD700] p-6 shadow-[8px_8px_0px_0px_#000]",
				className,
			)}
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.3 }}
			whileHover={getHoverVariants()}
			whileTap={{ scale: 0.98 }}
			{...props}
		/>
	);
});
Card.displayName = "Card";

const CardHeader = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<motion.div
		ref={ref}
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
		transition={{ duration: 0.2, delay: 0.1 }}
		className={cn("flex flex-col space-y-1.5 p-6", className)}
		{...props}
	/>
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
	<motion.h3
		ref={ref}
		initial={{ opacity: 0, y: 10 }}
		animate={{ opacity: 1, y: 0 }}
		transition={{ duration: 0.2, delay: 0.15 }}
		className={cn(
			"font-bold font-mono text-2xl text-black tracking-tight",
			className,
		)}
		{...props}
	/>
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
	<motion.p
		ref={ref}
		initial={{ opacity: 0, y: 10 }}
		animate={{ opacity: 1, y: 0 }}
		transition={{ duration: 0.2, delay: 0.2 }}
		className={cn("text-black text-sm", className)}
		{...props}
	/>
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<motion.div
		ref={ref}
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
		transition={{ duration: 0.2, delay: 0.25 }}
		className={cn("p-6 pt-0", className)}
		{...props}
	/>
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<motion.div
		ref={ref}
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
		transition={{ duration: 0.2, delay: 0.3 }}
		className={cn("flex items-center p-6 pt-0", className)}
		{...props}
	/>
));
CardFooter.displayName = "CardFooter";

export {
	Card,
	CardHeader,
	CardFooter,
	CardTitle,
	CardDescription,
	CardContent,
};
