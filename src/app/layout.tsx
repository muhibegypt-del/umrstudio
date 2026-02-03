import type { Metadata } from "next";
import { Playfair_Display, Geist_Mono, EB_Garamond, Noto_Serif_JP } from "next/font/google"; // Using Playfair Display as Editorial New substitute
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import StructuralRail from "@/components/StructuralRail";
import LensWatermark from "@/components/LensWatermark";

const playfair = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  display: "swap",
});

const ebGaramond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const notoSerifJP = Noto_Serif_JP({
  variable: "--font-noto-serif-jp",
  weight: ["900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MR Studios | The Ink of the Scholar",
  description: "Preservation & Legacy. Japanese Zen x French Cinema.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${geistMono.variable} ${ebGaramond.variable} ${notoSerifJP.variable} antialiased`}
      >
        <SmoothScroll />
        <StructuralRail />
        <LensWatermark />
        {children}
      </body>
    </html>
  );
}
