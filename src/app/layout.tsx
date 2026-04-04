import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-barlow",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "METSAnauts — HERA Rover & BothScape",
  description: "NASA HUNCH engineering team building rovers and terrain simulations for the HERA program.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className={`${spaceGrotesk.className} antialiased`}>
        <div className="star-layer-3" aria-hidden="true" style={{ position: "fixed", pointerEvents: "none", zIndex: 0 }} />
        <Navbar />
        <main className="pt-[64px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
