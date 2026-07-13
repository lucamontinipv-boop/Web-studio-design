import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Siti Web e Landing Page su Misura | web-studiodesign",
  description:
    "Progetto siti web e landing page chiari, veloci e mobile-first per attività e professionisti. Struttura, copy, design e contatti diretti in un unico progetto.",
  robots: "index, follow",
  openGraph: {
    type: "website",
    title: "Siti Web e Landing Page su Misura | web-studiodesign",
    description:
      "Pagine su misura che aiutano chi ti trova online a capire cosa offri, fidarsi e contattarti senza perdere tempo.",
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
