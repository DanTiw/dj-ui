"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import * as React from "react";

interface TypingEffectProps extends React.HTMLAttributes<HTMLDivElement> {
	text: string;
	typingSpeed?: number;
	showCursor?: boolean;
	showUnderline?: boolean;
	textClassName?: string;
	underlineClassName?: string;
	cursorClassName?: string;
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
	const [displayedText, setDisplayedText] = React.useState("");
	const [isTypingComplete, setIsTypingComplete] = React.useState(false);

	React.useEffect(() => {
		let index = 0;
		setDisplayedText("");
		setIsTypingComplete(false);

		const timer = setInterval(() => {
			if (index < text.length) {
				setDisplayedText((prev) => prev + text.charAt(index));
				index++;
			} else {
				setIsTypingComplete(true);
				clearInterval(timer);
			}
		}, typingSpeed);

		return () => clearInterval(timer);
	}, [text, typingSpeed]);

	return (
		<div
			className={cn(
				"relative mx-auto w-fit overflow-hidden whitespace-nowrap",
				className,
			)}
			{...props}
		>
			<div className={cn("font-mono", textClassName)}>
				{displayedText}
				{showCursor && (
					<motion.span
						animate={{ opacity: [1, 0, 1] }}
						transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
						className={cn("ml-1 inline-block", cursorClassName)}
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
					className={cn("mt-1 h-1 bg-black", underlineClassName)}
				/>
			)}
		</div>
	);
}
