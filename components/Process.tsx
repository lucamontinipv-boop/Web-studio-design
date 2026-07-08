import { process } from "@/data/content";
import Reveal from "./Reveal";

export default function Process() {
  return (
    <section id="processo" className="pt-10 pb-20 md:pt-14 md:pb-24 bg-ink">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.2em] text-gold font-display font-medium mb-4">
              {process.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display font-semibold text-3xl sm:text-4xl leading-tight text-cream">
              {process.title}
            </h2>
          </Reveal>
        </div>

        <div className="mt-10 md:mt-14 relative">
          <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-white/10" />
          <div className="grid md:grid-cols-5 gap-8 md:gap-4">
            {process.steps.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.1} className="relative">
                <div className="flex md:flex-col items-start md:items-start gap-4 md:gap-0">
                  <div className="relative shrink-0 w-12 h-12 md:mb-5 rounded-full glass flex items-center justify-center font-display font-semibold text-gold z-10">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-cream">{step.title}</h3>
                    <p className="mt-2 text-sm text-muted-light leading-relaxed">{step.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
