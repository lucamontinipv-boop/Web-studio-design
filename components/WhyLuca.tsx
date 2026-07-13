import { whyLuca } from "@/data/content";
import Reveal from "./Reveal";

export default function WhyLuca() {
  return (
    <section className="py-20 md:py-28 bg-ivory text-graphite">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-3xl">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.2em] text-gold-deep font-display font-semibold mb-4">{whyLuca.eyebrow}</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display font-semibold text-3xl sm:text-4xl md:text-5xl leading-tight text-balance">{whyLuca.title}</h2>
          </Reveal>
        </div>

        <div className="mt-10 md:mt-14 grid sm:grid-cols-2 gap-5">
          {whyLuca.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <article className="h-full rounded-2xl border border-graphite/10 bg-white/65 p-6 sm:p-7">
                <div className="w-11 h-11 rounded-xl bg-gold/15 text-gold-deep flex items-center justify-center">
                  <i className={`${item.icon} text-xl`} aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-display font-semibold text-xl">{item.title}</h3>
                <p className="mt-3 text-sm text-muted-dark leading-relaxed">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.18}>
          <p className="mt-8 max-w-4xl rounded-2xl border border-clay/15 bg-clay/[0.055] p-6 text-muted-dark leading-relaxed">{whyLuca.note}</p>
        </Reveal>
      </div>
    </section>
  );
}
