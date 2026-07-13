import { problem } from "@/data/content";
import AutoScroller from "./AutoScroller";
import Reveal from "./Reveal";

type ProblemCardData = (typeof problem.cards)[number];

type ProblemVisualProps = {
  card: ProblemCardData;
};

function ProblemVisual({ card }: ProblemVisualProps) {
  if (card.visual === "perception") {
    return (
      <div className="problem-visual problem-visual-perception" aria-hidden="true">
        <span className="problem-visual-kicker">Prima impressione</span>
        <div className="visual-window visual-window-back" />
        <div className="visual-window visual-window-front">
          <span />
          <span />
          <strong>3 sec</strong>
        </div>
      </div>
    );
  }

  if (card.visual === "clarity") {
    return (
      <div className="problem-visual problem-visual-clarity" aria-hidden="true">
        <span className="problem-visual-kicker">Messaggio chiaro</span>
        <div className="visual-copy-lines">
          <span className="is-long" />
          <span className="is-highlight" />
          <span className="is-medium" />
          <span className="is-short" />
        </div>
        <div className="visual-route"><i className="ti ti-arrow-right" /></div>
      </div>
    );
  }

  if (card.visual === "contact") {
    return (
      <div className="problem-visual problem-visual-contact" aria-hidden="true">
        <span className="problem-visual-kicker">Azione immediata</span>
        <div className="visual-message">
          <i className="ti ti-brand-whatsapp" />
          <span>Scrivimi ora</span>
        </div>
        <span className="visual-cursor"><i className="ti ti-pointer" /></span>
      </div>
    );
  }

  if (card.visual === "mobile") {
    return (
      <div className="problem-visual problem-visual-mobile" aria-hidden="true">
        <span className="problem-visual-kicker">Mobile-first</span>
        <div className="visual-phone">
          <span className="visual-phone-notch" />
          <span className="visual-phone-hero" />
          <span className="visual-phone-line" />
          <span className="visual-phone-line is-short" />
          <span className="visual-phone-button" />
        </div>
        <span className="visual-swipe"><i className="ti ti-arrows-horizontal" /></span>
      </div>
    );
  }

  return (
    <div className="problem-visual problem-visual-choice" aria-hidden="true">
      <span className="problem-visual-kicker">Scelta più semplice</span>
      <div className="visual-choice-card is-muted"><span>A</span></div>
      <div className="visual-choice-card is-selected">
        <span>B</span>
        <i className="ti ti-check" />
      </div>
    </div>
  );
}

function ProblemCard({ card }: { card: ProblemCardData }) {
  return (
    <article className="problem-card w-[82vw] max-w-[320px] sm:w-[340px] lg:w-[360px] shrink-0 overflow-hidden rounded-2xl border border-graphite/10 bg-white/78 shadow-sm snap-start">
      <ProblemVisual card={card} />
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
    </article>
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
          <Reveal delay={0.14}>
            <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-graphite/10 bg-white/55 px-4 py-2 text-xs font-display font-semibold text-muted-dark">
              <i className="ti ti-hand-move" aria-hidden="true" />
              Passa sopra o trascina: le card si fermano e poi ripartono.
            </p>
          </Reveal>
        </div>
      </div>

      <Reveal delay={0.1} className="mt-9 md:mt-11">
        <AutoScroller
          ariaLabel="Schede situazione di partenza"
          speed={34}
          resumeDelay={5200}
          className="px-5 sm:px-8"
          trackClassName="gap-5"
        >
          {problem.cards.map((card) => (
            <ProblemCard key={card.label} card={card} />
          ))}
        </AutoScroller>
      </Reveal>
    </section>
  );
}
