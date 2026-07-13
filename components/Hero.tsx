import { hero, WHATSAPP_LINK } from "@/data/content";
import ImageWithFallback from "./ImageWithFallback";

function ArrowUpRightIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-[1em] w-[1em] shrink-0" aria-hidden="true">
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

function ArrowDownIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-[1em] w-[1em] shrink-0" aria-hidden="true">
      <path d="M12 5v14" />
      <path d="m6 13 6 6 6-6" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 shrink-0" aria-hidden="true">
      <path d="M3.4 20.6l1.25-3.35A8.5 8.5 0 1 1 7 19.35L3.4 20.6Z" />
      <path d="M8.4 8.1c.2-.45.42-.46.72-.47h.42c.14 0 .36.05.55.46l.7 1.68c.08.2.07.38-.03.55l-.5.72c-.13.17-.24.32-.1.57.14.25.63 1.03 1.35 1.67.93.82 1.7 1.08 1.96 1.2.25.13.4.1.55-.07l.82-.95c.18-.2.36-.16.6-.08l1.62.77c.25.12.42.18.48.28.06.1.06.58-.14 1.13-.2.55-1.16 1.05-1.6 1.12-.42.07-.97.1-1.56-.1-.36-.12-.82-.27-1.42-.53-.25-.11-4.37-1.62-5.95-5.42-.44-1.05-.47-1.92-.13-2.54Z" />
    </svg>
  );
}

type Preview = (typeof hero.previews)[number];

function ProjectPreview({ preview, index = 0 }: { preview: Preview; index?: number }) {
  return (
    <a
      href={preview.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`hero-preview-card hero-preview-card-${index + 1} group block overflow-hidden rounded-2xl border border-graphite/10 bg-white shadow-lg shadow-graphite/10 transition-[border-color,box-shadow] duration-300 hover:border-gold-deep/35 hover:shadow-xl hover:shadow-graphite/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-deep`}
    >
      <ImageWithFallback
        src={preview.image}
        alt={`Anteprima del progetto ${preview.title}`}
        width={preview.width}
        height={preview.height}
        className="aspect-[3/2] w-full bg-ivory-dim"
        imgClassName="object-top transition-transform duration-700 group-hover:scale-[1.035]"
      />
      <div className="p-4 sm:p-5">
        <p className="text-[10px] uppercase tracking-[0.14em] text-clay font-display font-semibold">
          {preview.category}
        </p>
        <div className="mt-2 flex items-end justify-between gap-3">
          <p className="font-display font-semibold text-lg text-graphite">{preview.title}</p>
          <span className="inline-flex items-center gap-1 text-xs text-gold-deep font-display font-semibold">
            {preview.cta}
            <ArrowUpRightIcon />
          </span>
        </div>
      </div>
    </a>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ivory pt-24 pb-14 md:pt-40 md:pb-24 text-graphite">
      <div className="hero-background absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_85%_18%,rgba(154,63,44,0.10),transparent_32%),radial-gradient(circle_at_35%_14%,rgba(201,162,75,0.12),transparent_34%)]" />
      <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
      <div className="hero-orbit hero-orbit-two" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-[1.02fr_0.98fr] gap-12 lg:gap-14 items-center">
        <div className="max-w-full min-w-0">
          <p className="flex items-center gap-3 text-[11px] sm:text-sm uppercase tracking-[0.16em] sm:tracking-[0.2em] text-clay font-display font-semibold mb-5 md:mb-7">
            <span className="h-px w-10 sm:w-12 bg-clay" aria-hidden="true" />
            {hero.eyebrow}
          </p>

          <h1 className="max-w-full font-display font-semibold text-[2.65rem] sm:text-[4.4rem] lg:text-[5rem] leading-[1.02] sm:leading-[0.97] tracking-[-0.055em] text-graphite text-balance">
            <span className="block">{hero.title}</span>
            <span className="block italic font-medium text-clay tracking-[-0.06em]">{hero.accent}</span>
          </h1>

          <p className="mt-6 md:mt-8 text-[1.05rem] sm:text-xl leading-relaxed text-muted-dark max-w-2xl">
            {hero.subtitle}
          </p>

          <div className="mt-7 md:mt-9 grid grid-cols-1 sm:flex sm:flex-wrap items-center gap-3 sm:gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-graphite px-6 py-4 font-display font-semibold text-cream hover:bg-ink-soft transition-colors"
            >
              <WhatsAppIcon />
              {hero.ctaPrimary}
            </a>
            <a
              href="#progetti"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-graphite/15 bg-white/55 px-6 py-4 font-display font-semibold text-graphite hover:bg-white transition-colors"
            >
              {hero.ctaSecondary}
              <ArrowDownIcon />
            </a>
          </div>

          <div className="mt-7 md:mt-9 flex flex-wrap gap-x-5 gap-y-2">
            {hero.proof.map((p) => (
              <span key={p} className="text-sm text-muted-dark flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-deep" />
                {p}
              </span>
            ))}
          </div>
        </div>

        <div className="hero-previews relative">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            {hero.previews.map((preview, i) => (
              <ProjectPreview key={preview.title} preview={preview} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
