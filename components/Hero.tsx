import type { CSSProperties } from "react";
import { hero, WHATSAPP_LINK } from "@/data/content";
import ImageWithFallback from "./ImageWithFallback";
import Reveal from "./Reveal";

const desktopLayout = [
  { className: "md:w-[76%] md:left-0 md:top-4", tilt: -2.5 },
  { className: "md:w-[70%] md:right-0 md:top-[34%]", tilt: 2 },
  { className: "md:w-[62%] md:left-10 md:bottom-0", tilt: -1 },
];

type Preview = (typeof hero.previews)[number];
type Layout = (typeof desktopLayout)[number];

function PreviewCard({ preview, layout, priority = false }: { preview: Preview; layout: Layout; priority?: boolean }) {
  return (
    <div
      className={`group relative md:absolute ${layout.className} block shrink-0 w-[82vw] max-w-[320px] sm:max-w-[380px] md:max-w-none md:aspect-[16/11] aspect-[16/10] overflow-hidden rounded-2xl border border-graphite/10 bg-white shadow-lg shadow-graphite/10 snap-start`}
      style={{ "--tilt": `${layout.tilt}deg` } as CSSProperties}
    >
      <div className="md:animate-floatSlow h-full w-full">
        <ImageWithFallback
          src={preview.image}
          alt={preview.title}
          width={preview.width}
          height={preview.height}
          priority={priority}
          className="h-full w-full bg-ivory-dim"
          imgClassName="transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-graphite/78 via-graphite/8 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-4">
          <p className="text-[10px] uppercase tracking-[0.12em] text-gold-soft font-display font-semibold">
            {preview.category}
          </p>
          <p className="mt-1 font-display font-semibold text-base text-cream">{preview.title}</p>
          <p className="mt-1 text-xs text-cream/75 flex items-center gap-1">
            Esempio sito <i className="ti ti-arrow-up-right" aria-hidden="true" />
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ivory pt-24 pb-14 md:pt-40 md:pb-24 text-graphite">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_85%_18%,rgba(154,63,44,0.10),transparent_32%),radial-gradient(circle_at_35%_14%,rgba(201,162,75,0.12),transparent_34%)]" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 grid md:grid-cols-[1.08fr_0.92fr] gap-10 md:gap-10 items-center">
        <div className="max-w-full min-w-0">
          <Reveal>
            <p className="flex items-center gap-3 text-[11px] sm:text-sm uppercase tracking-[0.18em] sm:tracking-[0.24em] text-clay font-display font-semibold mb-5 md:mb-7">
              <span className="h-px w-10 sm:w-12 bg-clay" aria-hidden="true" />
              {hero.eyebrow}
            </p>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="max-w-full font-display font-semibold text-[2.42rem] xs:text-[2.65rem] sm:text-[4.5rem] lg:text-[5.45rem] leading-[1.02] sm:leading-[0.96] tracking-[-0.055em] text-graphite text-balance">
              <span className="block">Un sito che fa trovare</span>
              <span className="block">la tua attività e porta</span>
              <span className="block italic font-medium text-clay tracking-[-0.06em]">contatti veri.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-6 md:mt-8 text-[1.05rem] sm:text-xl leading-relaxed text-muted-dark max-w-3xl">
              {hero.subtitle}
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-7 md:mt-9 grid grid-cols-1 sm:flex sm:flex-wrap items-center gap-3 sm:gap-4">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-graphite px-6 py-4 font-display font-semibold text-cream hover:bg-ink-soft transition-colors"
              >
                <i className="ti ti-brand-whatsapp text-xl" aria-hidden="true" />
                {hero.ctaPrimary}
              </a>
              <a
                href="#progetti"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-graphite/15 bg-white/55 px-6 py-4 font-display font-semibold text-graphite hover:bg-white transition-colors"
              >
                {hero.ctaSecondary}
                <i className="ti ti-arrow-down" aria-hidden="true" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-7 md:mt-9 flex flex-wrap gap-x-5 gap-y-2">
              {hero.proof.map((p) => (
                <span key={p} className="text-sm text-muted-dark flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-deep" />
                  {p}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="relative w-full md:max-w-md md:aspect-[4/5] mx-auto min-w-0">
          <div className="md:hidden flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-px-5 pb-2 -mx-5 px-5 touch-pan-x">
            {hero.previews.map((preview, i) => (
              <PreviewCard key={preview.title} preview={preview} layout={desktopLayout[i]} priority={i === 0} />
            ))}
          </div>
          <div className="hidden md:block relative w-full aspect-[4/5]">
            {hero.previews.map((preview, i) => (
              <PreviewCard key={preview.title} preview={preview} layout={desktopLayout[i]} priority={i === 0} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
