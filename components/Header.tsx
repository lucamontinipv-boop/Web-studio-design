import { nav, WHATSAPP_LINK } from "@/data/content";

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
            <i className="ti ti-brand-whatsapp text-lg" aria-hidden="true" />
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
                  <i className="ti ti-brand-whatsapp text-lg" aria-hidden="true" />
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
