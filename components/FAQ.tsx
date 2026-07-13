import { faq } from "@/data/content";
import Reveal from "./Reveal";

export default function FAQ() {
  return (
    <section id="faq" className="py-24 md:py-32 bg-ivory text-graphite">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.2em] text-gold-deep font-display font-medium mb-4">
            {faq.eyebrow}
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl leading-tight">{faq.title}</h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <div>
            {faq.items.map((item, index) => (
              <details key={item.q} className="faq-item group border-b border-graphite/10" open={index === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left [&::-webkit-details-marker]:hidden">
                  <span className="font-display font-medium text-graphite">{item.q}</span>
                  <span
                    className="text-gold-deep text-xl leading-none shrink-0 transition-transform duration-300 group-open:rotate-180"
                    aria-hidden="true"
                  >
                   ⌄
                  </span>
                </summary>
                <p className="pb-5 text-sm text-muted-dark leading-relaxed max-w-2xl">{item.a}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
