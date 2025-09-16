import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

import Sidebar from "@/components/Sidebar";
import Home from "@/app/(site)/page";

const font = Figtree({ subsets: ['latin']})

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
    <html lang="en">
      <body
        className={`${font.className} antialiased`}
      >
        <Sidebar>
          {children}
        </Sidebar>
        <Home />
      </body>
    </html>
  );
}
