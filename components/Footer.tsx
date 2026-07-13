import { WHATSAPP_LINK } from "@/data/content";

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-white/10 py-10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-light">
          <span className="font-display font-semibold text-cream">Montini Creative</span> — Siti web & landing page
        </p>
        <p className="text-xs text-muted-light">© {new Date().getFullYear()} Tutti i diritti riservati</p>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gold hover:text-gold-soft transition-colors flex items-center gap-1.5"
        >
          Scrivimi su WhatsApp <i className="ti ti-arrow-right" aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
