import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Inter } from "next/font/google";
import { DM_Serif_Display } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Monkay - Software House",
  description:
    "Software house brasileira especializada em sistemas personalizados, automações e IA para PMEs. Next.js, .NET, TypeScript.",
  openGraph: {
    title: "Monkay — Software que resolve.",
    description:
      "Sistemas personalizados, automações e IA para PMEs que querem crescer sem travar.",
    url: "https://monkay.io",
    siteName: "Monkay",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Monkay — Software que resolve.",
    description: "Sistemas personalizados, automações e IA para PMEs.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geist.variable} ${inter.variable} ${dmSerif.variable} dark`}
    >
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
