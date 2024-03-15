"use client";
import Footer from "@/components/UI/Footer";
import Navbar from "@/components/UI/Navbar";
import { Manrope } from "next/font/google";
import { RecoilRoot } from "recoil";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"] });

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<RecoilRoot>
			<html lang="en">
				<body
					className={`${manrope.className} min-h-screen flex flex-col bg-zinc-100 dark:bg-zinc-800 text-black dark:text-white`}
				>
					<div className="flex-shrink-0">
						<Navbar />
					</div>
					<div className="flex-grow overflow-auto">{children}</div>
					<div className="flex-shrink-0">
						<Footer />
					</div>
				</body>
			</html>
		</RecoilRoot>
	);
}
