import { process } from "@/data/content";
import Reveal from "./Reveal";

export default function Process() {
  return (
    <section id="processo" className="py-20 md:py-28 bg-ink">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-3xl">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.2em] text-gold font-display font-medium mb-4">{process.eyebrow}</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display font-semibold text-3xl sm:text-4xl md:text-5xl leading-tight text-cream text-balance">{process.title}</h2>
          </Reveal>
        </div>

        <div className="mt-10 md:mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {process.steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.06}>
              <article className="h-full rounded-2xl border border-white/10 bg-white/[0.05] p-6">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center font-display font-semibold text-gold">
                  {step.number}
                </div>
                <h3 className="mt-5 font-display font-semibold text-xl text-cream">{step.title}</h3>
                <p className="mt-3 text-sm text-muted-light leading-relaxed">{step.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
