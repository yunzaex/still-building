import { EB_Garamond, Hanken_Grotesk, Monomakh } from "next/font/google";
import localFont from "next/font/local";

export const heroFont = Monomakh({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-hero",
});

export const quoteFont = EB_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-quote",
});

export const bodyLatinFont = Hanken_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body-latin",
});

export const bodyKoreanFont = localFont({
  src: [
    {
      path: "../public/fonts/KoPubWorld Dotum_Pro Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/KoPubWorld Dotum_Pro Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/KoPubWorld Dotum_Pro Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-body-korean",
});
