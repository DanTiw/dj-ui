"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import * as React from "react";

interface NavLinkProps {
	label: string;
	href: string;
	isMobile?: boolean;
	className?: string;
}

const NavLink = React.forwardRef<HTMLAnchorElement, NavLinkProps>(
	({ label, href, isMobile = false, className, ...props }, ref) => {
		return (
			<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
				<Link
					href={href}
					className={cn(
						"rounded-none border-2 border-black bg-[#FFD700] px-4 py-2 font-bold text-black text-sm",
						"hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none",
						"shadow-[3px_3px_0px_0px_#000] transition-all duration-300",
						"sm:px-6 sm:py-3 sm:text-base",
						isMobile ? "block w-full text-center" : "inline-block",
						className,
					)}
					ref={ref}
					{...props}
				>
					{label}
				</Link>
			</motion.div>
		);
	},
);
NavLink.displayName = "NavLink";

interface NavbarProps {
	className?: string;
	logo?: React.ReactNode;
	navLinks: Array<{
		label: string;
		href: string;
	}>;
}

const Navbar = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement> & NavbarProps
>(({ className, logo, navLinks, ...props }, ref) => {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);

	return (
		<nav
			className={cn("border-black border-b-2 bg-white p-4", className)}
			ref={ref}
			{...props}
		>
			<div className="mx-auto flex max-w-6xl items-center justify-between">
				{logo && <div className="flex-shrink-0">{logo}</div>}

				<div className="hidden items-center space-x-4 md:flex">
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
					className="rounded-none border-2 border-black bg-[#FFD700] p-2 text-black shadow-[3px_3px_0px_0px_#000] transition-all duration-300 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none md:hidden"
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
						className="mt-4 space-y-2 md:hidden"
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
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
	);
});
Navbar.displayName = "Navbar";

export { Navbar, NavLink };
