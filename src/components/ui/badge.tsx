"use client";

import { type VariantProps, cva } from "class-variance-authority";
import { motion } from "framer-motion";
import type * as React from "react";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
	"inline-flex items-center rounded-none border-2 border-black px-2.5 py-0.5 font-semibold text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
	{
		variants: {
			variant: {
				default: "bg-[#FFD700] text-black",
				secondary: "bg-white text-black",
				destructive: "bg-red-500 text-black",
				outline: "bg-white text-black",
				success: "bg-green-500 text-black",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	},
);

export interface BadgeProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof badgeVariants> {
	animate?: boolean;
}

function Badge({ className, variant, animate = false, ...props }: BadgeProps) {
	// Create the props object with a type assertion to bypass TypeScript errors
	const motionProps = {
		className: cn(badgeVariants({ variant }), className),
		whileHover: { scale: 1.05 },
		whileTap: { scale: 0.95 },
		animate: animate ? {
			y: [0, -3, 0],
			scale: [1, 1.05, 1],
		} : undefined,
		transition: animate ? {
			duration: 1,
			repeat: Number.POSITIVE_INFINITY,
			repeatType: "reverse",
		} : undefined,
		...props
	} as any; // Type assertion to bypass TypeScript errors with Framer Motion

	return (
		<motion.div {...motionProps} />
	);
}

export { Badge, badgeVariants };
