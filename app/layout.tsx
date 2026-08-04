import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  bodyKoreanFont,
  bodyLatinFont,
  heroFont,
  postcardFont,
  quoteFont,
} from "@/app/fonts";

import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${heroFont.variable} ${quoteFont.variable} ${postcardFont.variable} ${bodyLatinFont.variable} ${bodyKoreanFont.variable} h-full antialiased`}
    >
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
