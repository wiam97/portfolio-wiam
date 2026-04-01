import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

// Inter : police sans-serif pour le corps du texte
// next/font/google télécharge et auto-héberge la police — pas de requête vers Google au runtime
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Playfair Display : police serif pour le logo et les titres
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

// ─── SEO Metadata ────────────────────────────────────────────────────────────
// `metadata` est exporté depuis un Server Component.
// Next.js injecte automatiquement les balises <meta> dans le <head> à partir de cet objet.
// Il est impossible de faire ça dans un Client Component ("use client"),
// c'est l'une des raisons pour lesquelles layout.tsx reste un Server Component.
export const metadata: Metadata = {
  // metadataBase : URL de base pour résoudre les chemins relatifs des images OG
  // En prod, il faudra mettre la vraie URL dans la variable NEXT_PUBLIC_SITE_URL
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ),
  title: {
    // template : "Navbar | Wiam Krabatou", "Contact | Wiam Krabatou", etc.
    // default : affiché quand aucune page enfant ne définit son propre title
    template: "%s | Wiam Krabatou",
    default: "Wiam Krabatou — Tech Lead & Full Stack Engineer",
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

  // Open Graph : ces balises contrôlent l'aperçu quand le lien est partagé
  // sur LinkedIn, Twitter, WhatsApp, Slack, etc.
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://wiam-krabatou.dev",
    siteName: "Wiam Krabatou",
    title: "Wiam Krabatou — Tech Lead & Full Stack Engineer",
    description:
      "Portfolio de Wiam Krabatou, Tech Lead & Ingénieure Full Stack. " +
      "React · Node.js · TypeScript · Docker · AWS",
    images: [
      {
        url: "/og-image.png", // à créer dans /public
        width: 1200,
        height: 630,
        alt: "Wiam Krabatou — Tech Lead & Full Stack Engineer",
      },
    ],
  },

  // Twitter Card : format spécifique pour Twitter/X
  twitter: {
    card: "summary_large_image",
    title: "Wiam Krabatou — Tech Lead & Full Stack Engineer",
    description: "Portfolio Full Stack : React · Node.js · TypeScript · Docker · AWS",
    images: ["/og-image.png"],
  },

  // robots : autorise l'indexation par les moteurs de recherche
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

// Viewport est séparé de Metadata depuis Next.js 14
// (themeColor, colorScheme, etc. ne sont plus dans metadata)
export const viewport: Viewport = {
  themeColor: "#0B1F3A",
  colorScheme: "light",
};

// ─── Root Layout ─────────────────────────────────────────────────────────────
// Ce composant est un Server Component par défaut (pas de "use client").
// Il s'exécute côté serveur à chaque requête (ou au build en mode statique).
// Tout le HTML initial est rendu serveur → meilleur SEO, meilleur FCP.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${playfair.variable}`}
    >
      <body className="bg-white text-gray-900 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
