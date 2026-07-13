import { pricing, WHATSAPP_LINK } from "@/data/content";
import Reveal from "./Reveal";

export default function Pricing() {
  return (
    <section id="preventivo" className="py-20 md:py-28 bg-ivory text-graphite">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-start">
          <div className="max-w-2xl">
            <Reveal>
              <p className="text-sm uppercase tracking-[0.2em] text-gold-deep font-display font-semibold mb-4">{pricing.eyebrow}</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display font-semibold text-3xl sm:text-4xl md:text-5xl leading-tight text-balance">{pricing.title}</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-muted-dark leading-relaxed">{pricing.text}</p>
            </Reveal>
            <Reveal delay={0.15} className="mt-8">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-graphite px-6 py-4 font-display font-semibold text-cream hover:bg-ink-soft transition-colors"
              >
                <i className="ti ti-brand-whatsapp text-xl" aria-hidden="true" />
                {pricing.cta}
              </a>
            </Reveal>
          </div>

          <Reveal delay={0.08}>
            <div className="rounded-2xl border border-graphite/10 bg-white/70 p-6 sm:p-8 shadow-sm">
              <p className="text-xs uppercase tracking-[0.14em] text-clay font-display font-semibold">Nel preventivo trovi</p>
              <ul className="mt-6 grid sm:grid-cols-2 gap-4">
                {pricing.included.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-graphite/85 leading-relaxed">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-gold/20 text-gold-deep flex items-center justify-center shrink-0">
                      <i className="ti ti-check text-xs" aria-hidden="true" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
