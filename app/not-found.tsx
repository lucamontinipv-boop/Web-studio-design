import type { Metadata } from "next";
import { WHATSAPP_LINK } from "@/data/content";

export const metadata: Metadata = {
  title: "Pagina non trovata",
  description:
    "La pagina che stai cercando non è disponibile. Torna alla home di Montini Creative.",
  robots: {
    index: false,
    follow: false,
  },
};

function ArrowLeftIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="m15 18-6-6 6-6" />
      <path d="M9 12h10" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M3.4 20.6l1.25-3.35A8.5 8.5 0 1 1 7 19.35L3.4 20.6Z" />
      <path d="M8.4 8.1c.2-.45.42-.46.72-.47h.42c.14 0 .36.05.55.46l.7 1.68c.08.2.07.38-.03.55l-.5.72c-.13.17-.24.32-.1.57.14.25.63 1.03 1.35 1.67.93.82 1.7 1.08 1.96 1.2.25.13.4.1.55-.07l.82-.95c.18-.2.36-.16.6-.08l1.62.77c.25.12.42.18.48.28.06.1.06.58-.14 1.13-.2.55-1.16 1.05-1.6 1.12-.42.07-.97.1-1.56-.1-.36-.12-.82-.27-1.42-.53-.25-.11-4.37-1.62-5.95-5.42-.44-1.05-.47-1.92-.13-2.54Z" />
    </svg>
  );
}

export default function NotFound() {
  return (
    <main className="relative grid min-h-svh place-items-center overflow-hidden bg-ivory px-5 py-16 text-graphite">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_12%,rgba(154,63,44,0.11),transparent_30%),radial-gradient(circle_at_18%_82%,rgba(201,162,75,0.15),transparent_32%)]"
        aria-hidden="true"
      />

      <section className="relative w-full max-w-3xl rounded-[2rem] border border-graphite/10 bg-white/65 p-8 text-center shadow-2xl shadow-graphite/10 backdrop-blur-sm sm:p-12 md:p-16">
        <a
          href="/"
          className="font-display text-xl font-semibold tracking-tight text-graphite sm:text-2xl"
          aria-label="Torna alla home di Montini Creative"
        >
          Montini Creative
        </a>

        <p className="mt-10 font-display text-sm font-semibold uppercase tracking-[0.22em] text-clay">
          Errore 404
        </p>

        <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-balance sm:text-5xl md:text-6xl">
          Questa pagina non porta da nessuna parte.
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-dark sm:text-lg">
          Il link potrebbe essere cambiato oppure la pagina non esiste più. Puoi
          tornare alla home o scrivermi direttamente.
        </p>

        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-graphite px-6 py-4 font-display font-semibold text-cream transition-colors hover:bg-ink-soft"
          >
            <ArrowLeftIcon />
            Torna alla home
          </a>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-graphite/15 bg-white px-6 py-4 font-display font-semibold text-graphite transition-colors hover:border-gold-deep/40"
          >
            <WhatsAppIcon />
            Scrivimi su WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
