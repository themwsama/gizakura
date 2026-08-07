import type { Metadata } from "next";
import { Figtree, Instrument_Serif } from "next/font/google";
import { SkipLink } from "@/components/v3/SkipLink";
import { GlassRoot } from "@/components/v3/GlassRoot";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-body-family",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-display-family",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Gizakura",
    template: "%s · Gizakura",
  },
  description: "Gizakura — the studio behind Resumurai.",
  metadataBase: new URL("https://gizakura.com"),
  openGraph: {
    title: "Gizakura",
    description:
      "Four founders building tools people can actually share — starting with Resumurai.",
    url: "https://gizakura.com",
    siteName: "Gizakura",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${figtree.variable} ${instrumentSerif.variable}`}>
      <body className={figtree.className}>
        {/*
          Parallel surfaces: / (Late-Spring Editorial v1) and /v2 (studio dossier cascade).
          Product truth shared via src/data/site.ts. v2 direction contract lives on /v2.
        */}
        <SkipLink />
        <GlassRoot />
        {children}
      </body>
    </html>
  );
}
