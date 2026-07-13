import { nav, WHATSAPP_LINK } from "@/data/content";

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M3.4 20.6l1.25-3.35A8.5 8.5 0 1 1 7 19.35L3.4 20.6Z" />
      <path d="M8.4 8.1c.2-.45.42-.46.72-.47h.42c.14 0 .36.05.55.46l.7 1.68c.08.2.07.38-.03.55l-.5.72c-.13.17-.24.32-.1.57.14.25.63 1.03 1.35 1.67.93.82 1.7 1.08 1.96 1.2.25.13.4.1.55-.07l.82-.95c.18-.2.36-.16.6-.08l1.62.77c.25.12.42.18.48.28.06.1.06.58-.14 1.13-.2.55-1.16 1.05-1.6 1.12-.42.07-.97.1-1.56-.1-.36-.12-.82-.27-1.42-.53-.25-.11-4.37-1.62-5.95-5.42-.44-1.05-.47-1.92-.13-2.54Z" />
    </svg>
  );
}

export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b bg-ivory border-graphite/10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 md:h-20 flex items-center justify-between gap-4">
        <a
          href="#top"
          className="font-semibold text-xl sm:text-2xl md:text-[1.7rem] tracking-tight text-graphite"
          aria-label="Torna all'inizio"
          style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
        >
          web<span className="text-gold-deep">-</span>studiodesign
        </a>

        <nav className="hidden lg:flex items-center gap-6 ml-auto" aria-label="Navigazione principale">
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
            <WhatsAppIcon className="h-[1.125rem] w-[1.125rem] shrink-0" />
            WhatsApp
          </a>

          <details id="mobile-navigation" className="relative lg:hidden group">
            <summary
              aria-label="Apri menu"
              className="flex w-11 h-11 md:w-12 md:h-12 cursor-pointer list-none items-center justify-center rounded-full border border-graphite/10 bg-white/70 text-graphite [&::-webkit-details-marker]:hidden"
            >
              <span className="sr-only">Menu</span>
              <span className="w-5 flex flex-col gap-1.5" aria-hidden="true">
                <span className="h-px bg-current block" />
                <span className="h-px bg-current block" />
                <span className="h-px bg-current block" />
              </span>
            </summary>

            <div className="absolute right-0 top-[calc(100%+0.75rem)] w-[min(19rem,calc(100vw-2.5rem))] rounded-2xl border border-graphite/10 bg-white p-5 shadow-xl shadow-graphite/10">
              <nav className="flex flex-col gap-4" aria-label="Navigazione mobile">
                {nav.map((item) => (
                  <a key={item.href} href={item.href} className="mobile-menu-link text-base text-graphite font-display font-medium">
                    {item.label}
                  </a>
                ))}
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mobile-menu-link inline-flex justify-center items-center gap-2 rounded-xl bg-graphite px-5 py-3 text-sm font-semibold text-cream"
                >
                  <WhatsAppIcon className="h-[1.125rem] w-[1.125rem] shrink-0" />
                  Scrivimi su WhatsApp
                </a>
              </nav>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
