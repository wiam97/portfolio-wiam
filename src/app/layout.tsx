import type { Metadata, Viewport } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";

// DM Sans : police sans-serif pour le corps du texte
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
});

// DM Serif Display : police serif pour les titres et le logo
const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-dm-serif",
});

// ─── SEO Metadata ────────────────────────────────────────────────────────────
// Exporté depuis un Server Component uniquement.
// Next.js injecte les balises <meta> dans le <head> côté serveur.
export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ),
  title: {
    template: "%s | Wiam Krabatou",
    default: "Wiam Krabatou — Tech Lead & Ingénieure Full Stack",
  },
  description:
    "Portfolio de Wiam Krabatou, Tech Lead & Ingénieure Full Stack avec 4 ans d'expérience. " +
    "Spécialisée React, Node.js, TypeScript, Docker et AWS.",
  keywords: [
    "Wiam Krabatou",
    "Full Stack Engineer",
    "Tech Lead",
    "React",
    "Node.js",
    "TypeScript",
    "Next.js",
    "Docker",
    "AWS",
    "développeuse fullstack France",
  ],
  authors: [{ name: "Wiam Krabatou" }],
  creator: "Wiam Krabatou",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://wiam-krabatou.dev",
    siteName: "Wiam Krabatou",
    title: "Wiam Krabatou — Tech Lead & Ingénieure Full Stack",
    description:
      "Portfolio de Wiam Krabatou, Tech Lead & Ingénieure Full Stack. " +
      "React · Node.js · TypeScript · Docker · AWS",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Wiam Krabatou — Tech Lead & Ingénieure Full Stack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wiam Krabatou — Tech Lead & Ingénieure Full Stack",
    description: "Portfolio Full Stack : React · Node.js · TypeScript · Docker · AWS",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0B1F3A",
  colorScheme: "light",
};

// ─── Root Layout ─────────────────────────────────────────────────────────────
// Server Component par défaut — s'exécute côté serveur, jamais dans le browser.
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${dmSans.variable} ${dmSerif.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
