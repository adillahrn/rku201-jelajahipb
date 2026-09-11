import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "RKU 2.01: Midnight — Indie Horror Showcase",
  description:
    "Something happened inside RKU 2.01 after midnight. Explore the building, uncover the mystery, and survive whatever is waiting in the dark. A top-down indie horror game built with Godot Engine.",
  keywords: [
    "RKU 2.01",
    "Midnight",
    "indie horror",
    "survival horror",
    "top-down",
    "Godot",
    "game demo",
    "psychological horror",
  ],
  authors: [{ name: "Midnight Studio" }],
  openGraph: {
    title: "RKU 2.01: Midnight — Indie Horror Game",
    description:
      "A psychological top-down horror game set in RKU 2.01, IPB University. At 2:01 AM inside room RKU 2.01, no one survives. Play the free demo now.",
    type: "website",
    images: ["/images/foto_4.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-midnight-950 text-slate-200 selection:bg-blue-900 selection:text-blue-100 relative">
        {/* Atmospheric CRT Vignette Overlay */}
        <div className="fixed inset-0 crt-vignette z-50 pointer-events-none" />
        <div className="fixed inset-0 grain-overlay z-50 pointer-events-none" />

        {/* Main Content */}
        {children}
      </body>
    </html>
  );
}
