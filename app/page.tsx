import Image from 'next/image';
import { PageSpotlight } from '../components/PageSpotlight';
import { Reveal } from '../components/Reveal';
import { Spotlight } from '../components/Spotlight';

const projects = [
  {
    id: '01',
    label: 'AI / Platform',
    title: 'AI Content Automation Platform',
    meta: 'Python · OpenAI APIs · React · Next.js · Supabase',
    summary: 'Architected an AI-driven content generation platform with retrieval workflows, vector stores, prompt orchestration, and evaluation loops.'
  },
  {
    id: '02',
    label: 'Architecture',
    title: 'Global Multi-Brand Platform Architecture',
    meta: 'WordPress · Gutenberg · PHP · Platform Design',
    summary: 'Designed scalable domain and platform architecture for multi-market launches while reducing operational and SEO configuration complexity.'
  },
  {
    id: '03',
    label: 'Analytics',
    title: 'Snowplow Analytics Standardization',
    meta: 'Snowplow · Event Instrumentation · Observability',
    summary: 'Led platform-wide tracking standardization, replacing fragmented instrumentation with a unified, scalable analytics foundation.'
  },
  {
    id: '04',
    label: 'Engineering',
    title: 'Affiliate Platform & Developer Tooling',
    meta: 'Go · Vue.js · CI/CD · Automation',
    summary: 'Built affiliate growth mechanics, commission logic, visual regression tooling, and automation that improved release safety.'
  }
];

const stack = [
  ['Languages', 'Python', 'Java / Spring Boot', 'Go', 'PHP', 'TypeScript', 'SQL'],
  ['Backend & Platform', 'Distributed Systems', 'Microservices', 'REST APIs', 'Docker', 'Kubernetes', 'AWS'],
  ['AI / Automation', 'LLM Apps', 'OpenAI APIs', 'RAG', 'Vector Search', 'Prompt Orchestration', 'Evaluation'],
  ['Frontend & CMS', 'React', 'Next.js', 'Vue.js', 'WordPress / Gutenberg', 'Drupal', 'Playwright']
];

const timeline = [
  ['2023 — Present', 'Team Lead / Senior Developer', 'Silverspin'],
  ['2019 — 2023', 'Architect', 'Silverspin'],
  ['2017 — 2019', 'Full-Stack Software Engineer', 'Silverspin'],
  ['2015 — 2017', 'Software Developer', 'RareJob Philippines']
];

export default function Page() {
  return (
    <PageSpotlight>
    <main className="min-h-screen bg-bg text-text">
      <div className="grid-bg">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 text-sm text-muted">
          <div />
          <nav className="flex gap-5">
            <a href="#work">Work</a>
            <a href="#stack">Stack</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
        <section className="mx-auto max-w-6xl px-6 pb-20 pt-12 lg:pb-28 lg:pt-20">
          <div className="grid gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-center">
            <Reveal className="max-w-4xl">
              <p className="text-sm uppercase tracking-[0.3em] text-muted">Intro</p>
              <div className="mt-6 md:hidden">
                <Spotlight className="w-full max-w-[460px] rounded-[2rem]">
                <div className="hero-image-enter group relative mx-auto aspect-[4/5] w-full max-w-[460px] overflow-hidden rounded-[2rem] border border-line bg-panel shadow-glow animate-float">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_25%,rgba(124,150,255,0.14),transparent_35%),linear-gradient(to_bottom,rgba(255,255,255,0.05),transparent_40%)]" />
                  <Image
                    src="/images/ian.png"
                    alt="Ian Magtaas portrait"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 460px"
                    className="object-cover object-center transition duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                </Spotlight>
              </div>
              <h1 className="mt-6 text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl">Ian Magtaas</h1>
              <p className="mt-4 text-xl text-muted md:text-2xl">Senior Software Engineer · Technical Lead · Platform & AI Systems Engineer</p>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">I build scalable backend systems, developer platforms, AI-powered applications, and high-traffic web products. 12+ years across architecture, distributed systems, API design, cloud-native delivery, and hands-on engineering.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a className="cta-primary rounded-full bg-accent px-5 py-3 text-sm font-semibold text-black transition hover:scale-[1.02]" href="#work">See selected work</a>
                <a className="rounded-full border border-line px-5 py-3 text-sm text-text transition hover:border-accent/50 hover:text-accent" href="mailto:ianzro@live.com">Send an email</a>
              </div>
            </Reveal>

            <div className="hidden w-full md:flex md:justify-end">
              <Spotlight className="w-full max-w-[460px] rounded-[2rem]">
              <div className="hero-image-enter group relative mx-auto aspect-[4/5] w-full max-w-[460px] overflow-hidden rounded-[2rem] border border-line bg-panel shadow-glow animate-float">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_25%,rgba(124,150,255,0.14),transparent_35%),linear-gradient(to_bottom,rgba(255,255,255,0.05),transparent_40%)]" />
                <Image
                  src="/images/ian.png"
                  alt="Ian Magtaas portrait"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 460px"
                  className="object-cover object-center transition duration-700 group-hover:scale-[1.03]"
                />
              </div>
              </Spotlight>
            </div>
          </div>

          <Reveal delay={140} className="mt-12 grid gap-3 md:grid-cols-4">
            {['12+ yrs experience', 'Platform architecture', 'AI / LLM systems', 'Hands-on technical lead'].map((item) => (
              <div key={item} className="rounded-2xl border border-line bg-panel/70 p-4 text-sm text-muted backdrop-blur">{item}</div>
            ))}
          </Reveal>
        </section>
      </div>

      <section id="work">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Reveal className="flex items-end justify-between gap-6 border-b border-line pb-6">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-muted">Work</p>
              <h2 className="mt-3 text-3xl font-semibold md:text-5xl">Selected engineering work.</h2>
            </div>
            <p className="hidden max-w-md text-sm text-muted md:block">Production systems spanning AI automation, acquisition platforms, analytics instrumentation, and developer tooling.</p>
          </Reveal>
          <div className="mt-8 grid gap-4">
            {projects.map((project, index) => (
              <Reveal key={project.id} delay={index * 80}>
              <Spotlight className="rounded-3xl">
              <article className="group rounded-3xl border border-line bg-panel/90 p-6 shadow-glow backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-accent/30">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-muted">{project.id} · {project.label}</p>
                    <h3 className="mt-2 text-2xl font-medium transition group-hover:text-accent">{project.title}</h3>
                    <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">{project.summary}</p>
                  </div>
                  <p className="text-sm text-muted">{project.meta}</p>
                </div>
              </article>
              </Spotlight>
              </Reveal>
            ))}
            <Reveal delay={projects.length * 80}>
              <Spotlight className="rounded-3xl">
                <article className="rounded-3xl border border-dashed border-line bg-panel/60 p-6 backdrop-blur transition duration-300">
                  <p className="text-xs uppercase tracking-[0.25em] text-muted">More work</p>
                  <h3 className="mt-2 text-2xl font-medium">More case studies coming soon.</h3>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">Screenshots, architecture notes, and project links are being prepared for the next update.</p>
                </article>
              </Spotlight>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="stack" className="section-grid">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <Reveal className="">
            <p className="text-sm uppercase tracking-[0.3em] text-muted">Stack</p>
            <div className="mt-3 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <h2 className="text-3xl font-semibold md:text-5xl">Tools I’ve built with.</h2>
              <p className="max-w-md text-sm leading-6 text-muted">Not a wishlist — the stack behind shipped systems, platforms, and automation.</p>
            </div>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
              {stack.map(([category, ...items], index) => (
                <Reveal key={category} delay={index * 80}>
                  <Spotlight className="rounded-3xl h-full">
                  <div className="h-full rounded-3xl border border-line bg-panel/90 p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-accent/30">
                    <p className="text-xs uppercase tracking-[0.25em] text-muted">{category}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {items.map((item) => <span key={item} className="rounded-full border border-line px-3 py-1 text-sm text-muted">{item}</span>)}
                    </div>
                  </div>
                  </Spotlight>
                </Reveal>
              ))}
          </div>
        </div>
      </section>

      <section id="about">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <Spotlight className="rounded-3xl h-full">
              <div className="h-full rounded-3xl border border-line bg-panel/90 p-6 backdrop-blur md:p-10">
                <p className="text-sm uppercase tracking-[0.3em] text-muted">About</p>
                <h2 className="mt-3 text-3xl font-semibold">Engineer first, architecture-minded always.</h2>
                <p className="mt-4 max-w-3xl text-lg leading-8 text-muted">Senior engineer and technical lead with a strong background in distributed systems, platform design, API architecture, performance optimization, developer tooling, and LLM-powered products. I operate as both a hands-on IC and technical direction-setter.</p>
              </div>
              </Spotlight>
            </Reveal>
            <Reveal delay={120}>
              <Spotlight className="rounded-3xl h-full">
              <div className="h-full rounded-3xl border border-line bg-panel/90 p-6 backdrop-blur md:p-8">
                <p className="text-sm uppercase tracking-[0.3em] text-muted">Timeline</p>
                <div className="mt-5 space-y-5">
                  {timeline.map(([period, role, company]) => (
                    <div key={`${period}-${role}`} className="border-l border-line pl-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-muted">{period}</p>
                      <p className="mt-1 font-medium">{role}</p>
                      <p className="text-sm text-muted">{company}</p>
                    </div>
                  ))}
                </div>
              </div>
              </Spotlight>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="contact" className="section-grid">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <Reveal>
          <Spotlight className="rounded-3xl">
          <div className="flex flex-col gap-6 rounded-3xl border border-line bg-panel/90 p-6 backdrop-blur md:flex-row md:items-end md:justify-between md:p-10">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-muted">Contact</p>
              <h2 className="mt-3 text-3xl font-semibold md:text-5xl">Let’s build systems that hold up.</h2>
              <p className="mt-4 text-muted">Manila, Philippines · Open to remote collaboration</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a className="cta-primary w-fit rounded-full bg-accent px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.02]" href="mailto:ianzro@live.com">ianzro@live.com</a>
              <a
                className="inline-flex w-fit items-center gap-2 rounded-full border border-line px-5 py-3 text-sm text-text transition hover:border-accent/50 hover:text-accent"
                href="https://www.linkedin.com/in/ianzro/"
                target="_blank"
                rel="noreferrer"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                  <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A1.97 1.97 0 0 0 3.28 4.97c0 1.08.88 1.94 1.95 1.94h.02a1.95 1.95 0 1 0 0-3.9ZM20 12.88c0-3.45-1.84-5.05-4.3-5.05-1.98 0-2.87 1.09-3.37 1.85V8.5H8.95c.04.78 0 11.5 0 11.5h3.38v-6.42c0-.34.02-.67.12-.91.27-.67.88-1.36 1.9-1.36 1.34 0 1.88 1.02 1.88 2.52V20H20v-7.12Z" />
                </svg>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
          </Spotlight>
          </Reveal>
        </div>
      </section>
    </main>
    </PageSpotlight>
  );
}
