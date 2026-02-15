import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const siteUrl = "https://enkarneil.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Énkar Neil — Photographer & Visual Artist",
    template: "%s | Énkar Neil",
  },
  description:
    "Énkar Neil is a photographer and visual artist specialized in portrait photography, corporate photography, visual poetry and photography within the field of music.",
  keywords: [
    "Énkar Neil",
    "photographer",
    "visual artist",
    "portrait photography",
    "music photography",
    "corporate photography",
    "visual poetry",
  ],
  authors: [{ name: "Énkar Neil" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Énkar Neil",
    title: "Énkar Neil — Photographer & Visual Artist",
    description:
      "Photographer and visual artist specialized in portrait, corporate, and music photography.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Énkar Neil — Photographer & Visual Artist",
    description:
      "Photographer and visual artist specialized in portrait, corporate, and music photography.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${inter.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
