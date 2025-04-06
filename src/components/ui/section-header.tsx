"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import type * as React from "react";

interface SectionHeaderProps extends React.HTMLAttributes<HTMLHeadingElement> {
	icon?: React.ReactNode;
	title: string;
	animateIcon?: boolean;
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
				"mb-4 flex items-center font-bold font-mono text-xl md:text-2xl",
				className,
			)}
			{...props}
		>
			{icon && (
				<motion.span
					initial={{ opacity: 0 }}
					animate={
						animateIcon
							? {
									opacity: 1,
									rotate: [0, 15, -15, 10, -10, 5, -5, 0],
								}
							: { opacity: 1 }
					}
					transition={{
						duration: 1.5,
						repeat: animateIcon ? Number.POSITIVE_INFINITY : 0,
						repeatDelay: 10,
					}}
					className="mr-2 inline-block"
				>
					{icon}
				</motion.span>
			)}
			{title}
		</h2>
	);
}
