"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import type * as React from "react";

interface QuoteProps extends React.HTMLAttributes<HTMLDivElement> {
	content: string;
	author?: string;
	animate?: boolean;
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
				"border-[#FFD700] border-l-4 bg-black/5 py-3 pl-4 font-medium italic",
				className,
			)}
			initial={animate ? { opacity: "0", x: -10 } : undefined}
			animate={animate ? { opacity: "1", x: 0 } : undefined}
			transition={animate ? { delay: 0.5, duration: 0.5 } : undefined}
			{...props}
		>
			<p>{content}</p>
			{author && <p className="mt-2 text-right text-sm">― {author}</p>}
		</motion.div>
	);
}
