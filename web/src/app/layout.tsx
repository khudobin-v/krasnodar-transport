import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/UI/Navbar";
import Footer from "@/components/UI/Footer";

const manrope = Manrope({ subsets: ["latin"] });

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={`${manrope.className} min-h-screen flex flex-col bg-zinc-100`}
			>
				<div className='flex-shrink-0'>
					<Navbar />
				</div>
				<div className='flex-grow overflow-auto'>{children}</div>
				<div className='flex-shrink-0'>
					<Footer />
				</div>
			</body>
		</html>
	);
}
