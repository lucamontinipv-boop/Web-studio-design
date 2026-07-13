import { portfolio, WHATSAPP_LINK } from "@/data/content";
import ImageWithFallback from "./ImageWithFallback";
import Reveal from "./Reveal";

type Project = (typeof portfolio.projects)[number];

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.055] shadow-lg shadow-black/20 transition-colors hover:border-gold/35">
      <a href={project.href} target="_blank" rel="noopener noreferrer" aria-label={`Visita ${project.title}`}>
        <ImageWithFallback
          src={project.image}
          alt={`Anteprima del progetto ${project.title}`}
          width={project.width}
          height={project.height}
          className="aspect-[3/2] w-full bg-ink-soft"
          imgClassName="transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </a>
      <div className="p-6 sm:p-7">
        <span className="text-xs uppercase tracking-[0.12em] text-gold font-display font-semibold">{project.tag}</span>
        <h3 className="mt-3 font-display font-semibold text-2xl text-cream">{project.title}</h3>

        <dl className="mt-6 space-y-5">
          <div>
            <dt className="text-xs uppercase tracking-[0.12em] text-gold-soft font-display font-semibold">La sfida</dt>
            <dd className="mt-2 text-sm text-muted-light leading-relaxed">{project.challenge}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.12em] text-gold-soft font-display font-semibold">Il lavoro</dt>
            <dd className="mt-2 text-sm text-muted-light leading-relaxed">{project.intervention}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.12em] text-gold-soft font-display font-semibold">Il risultato comunicativo</dt>
            <dd className="mt-2 text-sm text-cream/90 leading-relaxed">{project.result}</dd>
          </div>
        </dl>

        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-flex items-center gap-1.5 text-sm text-gold font-display font-semibold hover:text-gold-soft transition-colors"
        >
          {project.cta} <i className="ti ti-arrow-up-right" aria-hidden="true" />
        </a>
      </div>
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
        </div>

        <div className="mt-10 md:mt-14 grid lg:grid-cols-2 gap-6">
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
