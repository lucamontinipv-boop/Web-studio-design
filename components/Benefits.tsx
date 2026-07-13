import { benefits } from "@/data/content";
import Reveal from "./Reveal";

function Column({ title, items, positive = false }: { title: string; items: string[]; positive?: boolean }) {
  return (
    <div className={`rounded-2xl border p-6 sm:p-8 ${positive ? "border-gold/30 bg-gold/[0.08]" : "border-white/10 bg-white/[0.05]"}`}>
      <h3 className="font-display font-semibold text-xl text-cream">{title}</h3>
      <ul className="mt-6 space-y-4">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm sm:text-base leading-relaxed text-cream/82">
            <i className={`ti ${positive ? "ti-check text-gold" : "ti-minus text-muted-light"} mt-1 shrink-0`} aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Benefits() {
  return (
    <section className="py-20 md:py-28 bg-ink text-cream">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-3xl">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.2em] text-gold font-display font-semibold mb-4">{benefits.eyebrow}</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display font-semibold text-3xl sm:text-4xl md:text-5xl leading-tight text-balance">{benefits.title}</h2>
          </Reveal>
        </div>

        <div className="mt-10 md:mt-14 grid md:grid-cols-2 gap-5">
          <Reveal delay={0.08}>
            <Column title={benefits.before.title} items={benefits.before.items} />
          </Reveal>
          <Reveal delay={0.14}>
            <Column title={benefits.after.title} items={benefits.after.items} positive />
          </Reveal>
        </div>

        <Reveal delay={0.18}>
          <p className="mt-8 max-w-3xl text-lg text-muted-light leading-relaxed border-l-2 border-gold pl-5">{benefits.note}</p>
        </Reveal>
      </div>
    </section>
  );
}
