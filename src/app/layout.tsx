import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "iStream Solution — Tech Talent Recruitment & Staffing Platform",
  description:
    "iStream Solution connects high-growth companies with pre-vetted senior engineers and custom on-demand developer teams. Fast-scaling recruitment and remote operations handled end-to-end.",
  keywords:
    "tech recruitment, developer staffing, IT recruitment, on-demand engineering teams, staff augmentation, hire developers, remote team management, vetted engineers",
  openGraph: {
    title: "iStream Solution — Tech Talent Recruitment & Staffing Platform",
    description:
      "Connect with pre-vetted senior engineers and custom on-demand developer teams. Fast-scaling recruitment and remote operations handled end-to-end.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "iStream Solution — Tech Talent Recruitment & Staffing Platform",
    description:
      "Connect with pre-vetted senior engineers and custom on-demand developer teams. Fast-scaling recruitment and remote operations handled end-to-end.",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-[family-name:var(--font-inter)] bg-[var(--background)] text-[var(--foreground)]">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
