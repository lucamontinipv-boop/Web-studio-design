import { portfolio, WHATSAPP_LINK } from "@/data/content";
import AutoScroller from "./AutoScroller";
import ImageWithFallback from "./ImageWithFallback";
import Reveal from "./Reveal";

type Project = (typeof portfolio.projects)[number];
type GalleryShot = Project["gallery"][number];

function ProjectShot({ shot, projectTitle }: { shot: GalleryShot; projectTitle: string }) {
  return (
    <figure className="project-shot group w-[210px] xs:w-[230px] sm:w-[260px] lg:w-[280px] shrink-0 overflow-hidden rounded-[1.35rem] border border-white/12 bg-ink-soft shadow-2xl shadow-black/25 snap-start">
      <div className="flex h-8 items-center gap-1.5 border-b border-white/8 bg-white/[0.045] px-3" aria-hidden="true">
        <span className="h-2 w-2 rounded-full bg-clay/85" />
        <span className="h-2 w-2 rounded-full bg-gold/85" />
        <span className="h-2 w-2 rounded-full bg-cream/35" />
      </div>
      <ImageWithFallback
        src={shot.image}
        alt={`${projectTitle}: ${shot.alt}`}
        width={shot.width}
        height={shot.height}
        className="aspect-[9/16] w-full bg-ink-soft"
        imgClassName="object-top transition-transform duration-700 group-hover:scale-[1.018]"
      />
      <figcaption className="border-t border-white/8 bg-ink-soft/95 px-4 py-3 text-xs font-display font-semibold text-muted-light">
        {shot.label}
      </figcaption>
    </figure>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="h-full rounded-2xl border border-white/10 bg-white/[0.055] p-6 sm:p-8 shadow-lg shadow-black/20 transition-colors hover:border-gold/35">
      <div className="flex items-start justify-between gap-5">
        <div>
          <span className="text-xs uppercase tracking-[0.12em] text-gold font-display font-semibold">{project.tag}</span>
          <h3 className="mt-3 font-display font-semibold text-2xl sm:text-3xl text-cream">{project.title}</h3>
        </div>
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visita ${project.title}`}
          className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-gold transition-colors hover:border-gold/40 hover:bg-gold/10"
        >
          <i className="ti ti-arrow-up-right text-lg" aria-hidden="true" />
        </a>
      </div>

      <dl className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
        <div>
          <dt className="text-xs uppercase tracking-[0.12em] text-gold-soft font-display font-semibold">La sfida</dt>
          <dd className="mt-2 text-sm text-muted-light leading-relaxed">{project.challenge}</dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-[0.12em] text-gold-soft font-display font-semibold">La soluzione</dt>
          <dd className="mt-2 text-sm text-muted-light leading-relaxed">{project.intervention}</dd>
        </div>
      </dl>

      <p className="mt-6 rounded-xl border border-white/8 bg-black/10 px-4 py-3 text-sm leading-relaxed text-cream/90">
        {project.result}
      </p>

      <blockquote className="mt-6 border-l-2 border-gold pl-4">
        <p className="text-[0.95rem] italic leading-relaxed text-cream">“{project.testimonial}”</p>
        <footer className="mt-3 text-xs font-display font-semibold uppercase tracking-[0.1em] text-gold-soft">
          {project.testimonialAuthor}
        </footer>
      </blockquote>

      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-7 inline-flex items-center gap-1.5 text-sm text-gold font-display font-semibold hover:text-gold-soft transition-colors"
      >
        {project.cta} <i className="ti ti-arrow-up-right" aria-hidden="true" />
      </a>
    </article>
  );
}

export default function Portfolio() {
  return (
    <section id="progetti" className="py-20 md:py-28 bg-ink overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-3xl">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.2em] text-gold font-display font-semibold mb-4">{portfolio.eyebrow}</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display font-semibold text-3xl sm:text-4xl md:text-5xl leading-tight text-cream text-balance">{portfolio.title}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-muted-light leading-relaxed max-w-2xl">{portfolio.subtitle}</p>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.055] px-4 py-2 text-xs font-display font-semibold text-muted-light">
              <i className="ti ti-hand-move" aria-hidden="true" />
              Trascina le schermate: il movimento si ferma e riparte automaticamente.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="mt-11 md:mt-14 space-y-9 md:space-y-12">
        {portfolio.projects.map((project, index) => (
          <Reveal key={`${project.title}-gallery`} delay={0.06 + index * 0.08}>
            <div>
              <div className="max-w-6xl mx-auto px-5 sm:px-8 mb-4 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.14em] text-gold font-display font-semibold">{project.tag}</p>
                  <h3 className="mt-1 font-display font-semibold text-xl sm:text-2xl text-cream">{project.title}</h3>
                </div>
                <span className="hidden sm:inline-flex items-center gap-2 text-xs text-muted-light">
                  {index % 2 === 0 ? "Scorre verso sinistra" : "Scorre verso destra"}
                  <i className={`ti ${index % 2 === 0 ? "ti-arrow-left" : "ti-arrow-right"}`} aria-hidden="true" />
                </span>
              </div>

              <AutoScroller
                ariaLabel={`Schermate del progetto ${project.title}`}
                speed={index % 2 === 0 ? 28 : 25}
                direction={index % 2 === 0 ? "left" : "right"}
                resumeDelay={5600}
                className="px-5 sm:px-8"
                trackClassName="gap-4 sm:gap-5"
              >
                {project.gallery.map((shot) => (
                  <ProjectShot key={shot.image} shot={shot} projectTitle={project.title} />
                ))}
              </AutoScroller>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="mt-14 md:mt-20 grid lg:grid-cols-2 gap-6">
          {portfolio.projects.map((project, i) => (
            <Reveal key={project.title} delay={0.08 + i * 0.08}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-6">
          <div className="rounded-2xl border border-gold/25 bg-gold/[0.08] p-7 sm:p-9 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="max-w-2xl">
              <h3 className="font-display font-semibold text-2xl sm:text-3xl text-cream">{portfolio.nextProject.title}</h3>
              <p className="mt-3 text-muted-light leading-relaxed">{portfolio.nextProject.text}</p>
            </div>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-gold px-6 py-4 font-display font-semibold text-ink hover:bg-gold-soft transition-colors"
            >
              <i className="ti ti-brand-whatsapp text-lg" aria-hidden="true" />
              {portfolio.nextProject.cta}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
