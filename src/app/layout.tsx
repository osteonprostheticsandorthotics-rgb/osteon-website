import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Manrope } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "OSTEON | Precision Prosthetics & Orthotics",
  description:
    "Art-directed clinical engineering for human movement. Next-generation prosthetic and orthotic solutions designed around your life, comfort, confidence, and independence.",
  keywords: [
    "Osteon",
    "Prosthetics",
    "Orthotics",
    "Bionic Limbs",
    "Scoliosis Bracing",
    "Pediatric Orthotics",
    "Microprocessor Knee",
    "Dynamic AFO",
    "Custom Prosthetic Socket",
    "3D Topography"
  ],
  authors: [{ name: "OSTEON Clinical Team" }],
  openGraph: {
    title: "OSTEON | Precision Prosthetics & Orthotics",
    description: "Move Forward. Live Independently. Human-centered prosthetic and orthotic engineering.",
    siteName: "OSTEON",
    type: "website",
    locale: "en_US",
  }
};

export const viewport: Viewport = {
  themeColor: "#050607",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${manrope.variable} scroll-smooth dark`}>
      <body className="bg-[#050607] text-[#F1EFE8] font-sans antialiased min-h-screen selection:bg-[#00E5D0] selection:text-[#050607]">
        {children}
      </body>
    </html>
  );
}
