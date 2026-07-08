import { problem } from "@/data/content";
import AutoScroller from "./AutoScroller";
import ImageWithFallback from "./ImageWithFallback";
import Reveal from "./Reveal";

type ProblemCardData = (typeof problem.cards)[number];

function ProblemCard({ card }: { card: ProblemCardData }) {
  return (
    <div className="w-[82vw] max-w-[320px] sm:w-[340px] lg:w-[360px] shrink-0 overflow-hidden rounded-2xl border border-graphite/10 bg-white/78 shadow-sm transition-colors hover:border-gold-deep/35 snap-start">
      <ImageWithFallback
        src={card.image}
        alt={card.title}
        width={card.width}
        height={card.height}
        className="h-36 sm:h-40 w-full bg-ivory-dim !block"
        imgClassName="block"
      />
      <div className="p-6">
        <span className="font-display font-semibold text-3xl text-gold-deep">{card.label}</span>
        <h3 className="mt-3 font-display font-semibold text-graphite leading-snug">{card.title}</h3>
        <p className="mt-3 text-sm text-muted-dark leading-relaxed">{card.text}</p>
        <ul className="mt-5 space-y-1.5">
          {card.bullets.map((bullet) => (
            <li key={bullet} className="flex items-center gap-2 text-sm text-graphite/80">
              <i className="ti ti-point-filled text-gold-deep text-[8px]" aria-hidden="true" />
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Problem() {
  return (
    <section className="py-14 md:py-24 bg-ivory text-graphite overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.2em] text-gold-deep font-display font-semibold mb-4">
              {problem.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display font-semibold text-3xl sm:text-4xl leading-tight text-graphite text-balance">
              {problem.title}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-muted-dark leading-relaxed">{problem.text}</p>
          </Reveal>
        </div>
      </div>

      <Reveal delay={0.1} className="mt-9 md:mt-11">
        <AutoScroller ariaLabel="Schede situazione di partenza" speed={34} className="px-5 sm:px-8" trackClassName="gap-5">
          {problem.cards.map((card) => (
            <ProblemCard key={card.label} card={card} />
          ))}
        </AutoScroller>
      </Reveal>
    </section>
  );
}
