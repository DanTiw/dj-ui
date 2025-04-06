import "@/styles/globals.css";

import type { Metadata } from "next";
import { Geist } from "next/font/google";

export const metadata: Metadata = {
	title: "UI Component Library",
	description: "Modern UI Component Library with React and Tailwind CSS",
	icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
	subsets: ["latin"],
	variable: "--font-geist-sans",
});

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" className={`${geist.variable}`}>
			<body className="min-h-screen bg-background antialiased">
				<main className="min-h-screen py-10">
					{children}
				</main>
			</body>
		</html>
	);
}
