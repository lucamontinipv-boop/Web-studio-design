import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Siti Web e Landing Page per Attività Locali e Professionisti | web-studiodesign",
  description:
    "Creo siti web e landing page chiari, veloci e su misura per attività locali, professionisti e piccoli brand che vogliono farsi trovare online e ricevere più richieste.",
  robots: "index, follow",
  openGraph: {
    type: "website",
    title: "Siti Web e Landing Page per Attività Locali e Professionisti | web-studiodesign",
    description:
      "Un sito chiaro, veloce e fatto per portare valore percepito e contatti reali. Attività locali, professionisti, strutture ricettive, piccoli brand.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@2.47.0/tabler-icons.min.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
