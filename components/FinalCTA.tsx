import { finalCta, WHATSAPP_LINK } from "@/data/content";
import Reveal from "./Reveal";

export default function FinalCTA() {
  return (
    <section id="contatti" className="relative py-24 md:py-32 bg-ink overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-gold/10 blur-[100px] pointer-events-none" />
      <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center relative">
        <Reveal>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl md:text-5xl leading-tight text-cream">
            {finalCta.title}
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-6 text-muted-light max-w-xl mx-auto leading-relaxed">{finalCta.text}</p>
        </Reveal>
        <Reveal delay={0.16} className="mt-9">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 font-display font-semibold text-ink hover:bg-gold-soft transition-colors shadow-glow"
          >
            <i className="ti ti-brand-whatsapp text-xl" aria-hidden="true" />
            {finalCta.cta}
          </a>
        </Reveal>
        <Reveal delay={0.22}>
          <p className="mt-5 text-xs text-muted-light">{finalCta.note}</p>
        </Reveal>
      </div>
    </section>
  );
}
