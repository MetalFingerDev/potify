import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

import Sidebar from "@/components/Sidebar";
import ConvexClientProvider from "@/components/providers/ConvexClientProvider";

const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Potify",
	description: "Shitty spotify",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${font.className} antialiased`}>
				<ClerkProvider>
					<ConvexClientProvider>
						<Sidebar>{children}</Sidebar>
					</ConvexClientProvider>
				</ClerkProvider>
			</body>
		</html>
	);
}
