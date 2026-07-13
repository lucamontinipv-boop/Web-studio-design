"use client";

import { useEffect, useState } from "react";
import { nav, WHATSAPP_LINK } from "@/data/content";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "bg-ivory/94 backdrop-blur-xl border-graphite/10 shadow-sm"
          : "bg-ivory/90 backdrop-blur-md border-graphite/10"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 md:h-20 flex items-center justify-between gap-4">
        <a
          href="#top"
          className="font-sans font-semibold text-xl sm:text-2xl md:text-[1.7rem] tracking-tight text-graphite"
          aria-label="Torna all'inizio"
        >
          web<span className="text-gold-deep">-</span>studiodesign
        </a>

        <nav className="hidden lg:flex items-center gap-6 ml-auto">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-muted-dark hover:text-graphite transition-colors">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-lg md:rounded-xl bg-graphite px-5 md:px-6 py-3 text-sm md:text-base font-display font-semibold text-cream hover:bg-ink-soft transition-colors"
          >
            <i className="ti ti-brand-whatsapp text-lg" aria-hidden="true" />
            WhatsApp
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Apri menu"
            className="lg:hidden w-11 h-11 md:w-12 md:h-12 flex items-center justify-center rounded-full border border-graphite/10 bg-white/70 text-graphite"
          >
            <span className="sr-only">Menu</span>
            <div className="w-5 flex flex-col gap-1.5">
              <span className="h-px bg-current block" />
              <span className="h-px bg-current block" />
              <span className="h-px bg-current block" />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden mx-5 mb-5 rounded-2xl border border-graphite/10 bg-white/95 p-5 shadow-sm">
          <div className="flex flex-col gap-4">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-base text-graphite font-display font-medium"
              >
                {item.label}
              </a>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center gap-2 rounded-xl bg-graphite px-5 py-3 text-sm font-semibold text-cream"
            >
              <i className="ti ti-brand-whatsapp text-lg" aria-hidden="true" />
              Scrivimi su WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
