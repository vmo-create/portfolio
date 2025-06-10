import type { Metadata } from "next";

import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";

// const robotoMono = Roboto_Mono({
//   subsets: ["latin"],
//   weight: ["400", "500"],
// });

export const metadata: Metadata = {
  title: "Vanessa Moras - Senior UX Designer",
  description: "Senior UX Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
