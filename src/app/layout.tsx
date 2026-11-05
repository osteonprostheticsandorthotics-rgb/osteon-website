import type { Metadata, Viewport } from "next";
import { Syne, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
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
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "OSTEON",
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#050607",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${plusJakartaSans.variable} scroll-smooth dark`}>
      <body className="bg-[#050607] text-[#F1EFE8] font-sans antialiased min-h-screen selection:bg-[#00E5D0] selection:text-[#050607]">
        {children}
      </body>
    </html>
  );
}
