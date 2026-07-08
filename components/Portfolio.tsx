import { portfolio, WHATSAPP_LINK } from "@/data/content";
import AutoScroller from "./AutoScroller";
import ImageWithFallback from "./ImageWithFallback";
import Reveal from "./Reveal";

type Project = (typeof portfolio.projects)[number];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group block h-full w-[84vw] max-w-[330px] sm:w-[390px] sm:max-w-none lg:w-[430px] shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] shadow-lg shadow-black/20 transition-colors hover:border-gold/35 snap-start">
      <ImageWithFallback
        src={project.image}
        alt={project.title}
        width={project.width}
        height={project.height}
        className="h-40 sm:h-56 w-full bg-ink-soft"
        imgClassName="block transition-transform duration-700 group-hover:scale-105"
      />
      <div className="p-6 sm:p-7">
        <span className="text-xs uppercase tracking-[0.12em] text-gold font-display font-semibold">{project.tag}</span>
        <h3 className="mt-3 font-display font-semibold text-2xl text-cream">{project.title}</h3>
        <p className="mt-3 text-sm text-muted-light leading-relaxed">{project.description}</p>
        <ul className="mt-5 space-y-2">
          {project.points.map((point) => (
            <li key={point} className="flex items-start gap-2.5 text-sm text-cream/90">
              <i className="ti ti-point-filled text-gold text-[10px] mt-1.5" aria-hidden="true" />
              {point}
            </li>
          ))}
        </ul>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-1.5 text-sm text-gold font-display font-semibold"
        >
          Esempio sito <i className="ti ti-arrow-up-right" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <section id="progetti" className="pt-14 pb-8 md:pt-24 md:pb-10 bg-ink overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.2em] text-gold font-display font-semibold mb-4">
              {portfolio.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display font-semibold text-3xl sm:text-4xl leading-tight text-cream text-balance">
              {portfolio.title}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-muted-light leading-relaxed">{portfolio.subtitle}</p>
          </Reveal>
        </div>
      </div>

      <Reveal delay={0.1} className="mt-9 md:mt-11">
        <AutoScroller ariaLabel="Esempi di progetti" speed={30} className="px-5 sm:px-8" trackClassName="gap-5">
          {portfolio.projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </AutoScroller>
      </Reveal>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 mt-8 md:mt-9">
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-gold px-7 py-3.5 font-display font-semibold text-ink hover:bg-gold-soft transition-colors"
        >
          <i className="ti ti-brand-whatsapp text-lg" aria-hidden="true" />
          Scrivimi su WhatsApp
        </a>
      </div>
    </section>
  );
}
