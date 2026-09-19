const work = [
  {
    role: "Product Engineer",
    company: "Mnemora",
    dates: "2026 — Present",
    description: "Building thoughtful software products from the first line of code to production.",
  },
  {
    role: "Senior Software Engineer",
    company: "Avorino",
    dates: "Mar 2025 — Apr 2026",
    description:
      "Designed the backend architecture for an AI-driven ADU feasibility portal with financial modeling for ROI and loan analytics.",
  },
  {
    role: "Professor",
    company: "Holy Angel University",
    dates: "Aug 2023 — Oct 2025",
    description:
      "Taught backend engineering, data analytics, and machine learning while mentoring students toward production-grade work.",
  },
  {
    role: "Backend Engineer",
    company: "Presscart",
    dates: "Jan 2024 — Jul 2024",
    description:
      "Migrated legacy services to Node.js and improved API response times and storefront performance.",
  },
  {
    role: "Full Stack Engineer",
    company: "Holy Angel University, KITTO",
    dates: "Feb 2022 — Dec 2022",
    description:
      "Built prototypes for emerging web technologies and IoT integrations for a university-industry partnership.",
  },
]

const projects = [
  { name: "Safegate", href: "https://usesafegate.com", description: "In development." },
  { name: "Applywise", href: "https://applywise.today", description: "In development." },
  {
    name: "ADU Portal",
    href: "https://aduportal.com/",
    description: "An AI-driven feasibility portal for accessory dwelling unit projects.",
  },
  {
    name: "Chromiq",
    href: "https://chromiq.mnemora.org",
    description: "A product project from my engineering work.",
  },
]

const skillGroups = [
  { label: "languages", items: "Go · TypeScript · JavaScript · Python" },
  { label: "frontend", items: "Next.js · React · Astro · Tailwind CSS" },
  { label: "backend", items: "Node.js · Hono · FastAPI · Gin · PostgreSQL" },
  { label: "infrastructure", items: "AWS · GCP · Docker · Kubernetes · Cloudflare" },
  { label: "tools", items: "GitHub Actions · GitLab CI/CD · Claude Code · Codex · Zed" },
]

const links = [
  { label: "GitHub", href: "https://github.com/francistriesscience" },
  { label: "GitLab", href: "https://gitlab.com/francistriesscience" },
  { label: "LinkedIn", href: "https://linkedin.com/in/francistriesscience" },
]

const linkClassName =
  "text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"

const markerClassName = "font-mono text-muted-foreground"

export default function HomePage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-8 sm:px-8 sm:py-12">
      <div className="border-border text-muted-foreground flex items-center justify-between border-b pb-3 font-mono text-xs">
        <a className="hover:text-foreground" href="https://francisdotmd.page">
          francisdotmd.page
        </a>
        <span>README.md</span>
      </div>

      <article className="space-y-14 py-14 sm:py-20">
        <header className="space-y-7">
          <div className="space-y-3">
            <p className={`${markerClassName} text-sm`}># hello, world</p>
            <h1 className="text-foreground text-4xl font-medium tracking-[-0.05em] sm:text-6xl">
              Francis Ignacio
            </h1>
            <p className="text-muted-foreground text-lg">Software Engineer and Technical Lead.</p>
          </div>

          <div className="text-muted-foreground max-w-2xl space-y-4 text-[1.05rem] leading-8">
            <p>
              I build the unglamorous systems that other things depend on. I enjoy owning the whole
              stack, from architecture and infrastructure to the details that make a product feel
              good to use.
            </p>
          </div>

          <nav
            className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-sm"
            aria-label="Primary links"
          >
            <a
              className={linkClassName}
              href="https://drive.google.com/file/d/1-gi0nNzPXp_zLeoTXQ8_hSVVpJJkrhAk/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              [résumé]
            </a>
            <a className={linkClassName} href="mailto:hello@francistries.science">
              [email]
            </a>
            {links.map((link) => (
              <a
                key={link.label}
                className={linkClassName}
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                [{link.label}]
              </a>
            ))}
          </nav>
        </header>

        <section className="space-y-7" aria-labelledby="work-heading">
          <h2 id="work-heading" className="text-foreground text-xl font-medium">
            <span className={markerClassName}>##</span> Work
          </h2>
          <div className="border-border space-y-8 border-l pl-5 sm:pl-6">
            {work.map((item) => (
              <article key={`${item.company}-${item.role}`} className="space-y-2">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                  <h3 className="text-foreground font-medium">
                    {item.role} <span className="text-muted-foreground">— {item.company}</span>
                  </h3>
                  <time className="text-muted-foreground shrink-0 font-mono text-xs">
                    {item.dates}
                  </time>
                </div>
                <p className="text-muted-foreground max-w-2xl text-sm leading-6">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-7" aria-labelledby="projects-heading">
          <h2 id="projects-heading" className="text-foreground text-xl font-medium">
            <span className={markerClassName}>##</span> Projects
          </h2>
          <ul className="text-muted-foreground space-y-4 text-sm leading-6">
            {projects.map((project) => (
              <li key={project.name} className="pl-5">
                <span className={`${markerClassName} mr-2 -ml-5`} aria-hidden="true">
                  -
                </span>
                <a className={linkClassName} href={project.href} target="_blank" rel="noreferrer">
                  {project.name}
                </a>{" "}
                — {project.description}
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-7" aria-labelledby="skills-heading">
          <h2 id="skills-heading" className="text-foreground text-xl font-medium">
            <span className={markerClassName}>##</span> Skills
          </h2>
          <dl className="space-y-3 font-mono text-sm">
            {skillGroups.map((group) => (
              <div key={group.label} className="grid gap-1 sm:grid-cols-[9rem_1fr] sm:gap-4">
                <dt className="text-muted-foreground">{group.label}:</dt>
                <dd className="text-foreground">{group.items}</dd>
              </div>
            ))}
          </dl>
        </section>

        <footer className="border-border space-y-5 border-t pt-7">
          <p className="text-muted-foreground font-mono text-sm">---</p>
          <h2 className="text-foreground max-w-xl text-3xl leading-tight font-medium tracking-[-0.05em] sm:text-4xl">
            Let&apos;s build something that has to stay up.
          </h2>
          <p className="text-muted-foreground text-sm">
            <a className={linkClassName} href="https://francisdotmd.page">
              francisdotmd.page
            </a>{" "}
            · Manila, PH
          </p>
        </footer>
      </article>
    </main>
  )
}
