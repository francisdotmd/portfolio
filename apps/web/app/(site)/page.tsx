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
  {
    name: "Safegate",
    description: "A product currently in development.",
    href: "https://usesafegate.com",
  },
  {
    name: "Applywise",
    description: "A product currently in development.",
    href: "https://applywise.today",
  },
  {
    name: "ADU Portal",
    description: "An AI-driven feasibility portal for accessory dwelling unit projects.",
    href: "https://aduportal.com/",
  },
  {
    name: "Chromiq",
    description: "A product project from my engineering work.",
    href: "https://chromiq.mnemora.org",
  },
]

const skillGroups = [
  { label: "Languages", items: ["Go", "TypeScript", "JavaScript", "Python"] },
  { label: "Frontend", items: ["Next.js", "React", "Astro", "Tailwind CSS"] },
  { label: "Backend", items: ["Node.js", "Hono", "FastAPI", "Gin", "PostgreSQL"] },
  { label: "Infrastructure", items: ["AWS", "GCP", "Docker", "Kubernetes", "Cloudflare"] },
  { label: "Tools", items: ["GitHub Actions", "GitLab CI/CD", "Claude Code", "Codex", "Zed"] },
]

const links = [
  { label: "GitHub", href: "https://github.com/francistriesscience" },
  { label: "GitLab", href: "https://gitlab.com/francistriesscience" },
  { label: "LinkedIn", href: "https://linkedin.com/in/francistriesscience" },
]

const linkClassName =
  "underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"

export default function HomePage() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-16 px-6 py-24 sm:px-8 sm:py-32">
      <header className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-foreground text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
            Francis Ignacio
          </h1>
          <p className="text-muted-foreground text-base">Software Engineer and Technical Lead.</p>
        </div>

        <div className="text-muted-foreground max-w-2xl space-y-5 text-base leading-7">
          <p>
            I build the unglamorous systems that other things depend on. I enjoy owning the whole
            stack, from architecture and infrastructure to the details that make a product feel good
            to use.
          </p>
          <p>
            My work is mostly in <span className="text-foreground">Go</span>,{" "}
            <span className="text-foreground">TypeScript</span>, and{" "}
            <span className="text-foreground">Python</span>, with a growing focus on AI engineering
            and reliable product systems.
          </p>
          <p>
            Easy to reach at{" "}
            <a className={linkClassName} href="mailto:hello@francistries.science">
              hello@francistries.science
            </a>
            .
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <a
            className="bg-foreground text-background focus-visible:outline-ring inline-flex items-center rounded-md px-3 py-2 text-sm font-medium transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4"
            href="https://drive.google.com/file/d/1-gi0nNzPXp_zLeoTXQ8_hSVVpJJkrhAk/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            ↓ Download résumé
          </a>
          <a
            className="border-border text-foreground hover:bg-muted focus-visible:outline-ring inline-flex items-center rounded-md border px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-4"
            href="mailto:hello@francistries.science"
          >
            Message me ↗
          </a>
        </div>
      </header>

      <section className="border-border space-y-7 border-t pt-7" aria-labelledby="work-heading">
        <h2 id="work-heading" className="text-foreground text-sm font-medium">
          Work
        </h2>
        <div className="divide-border divide-y">
          {work.map((item) => (
            <article
              key={`${item.company}-${item.role}`}
              className="space-y-2 py-5 first:pt-0 last:pb-0"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-3">
                <h3 className="text-foreground font-medium">
                  {item.role}, {item.company}
                </h3>
                <span className="bg-border hidden h-px flex-1 sm:block" aria-hidden="true" />
                <time className="text-muted-foreground shrink-0 text-sm">{item.dates}</time>
              </div>
              <p className="text-muted-foreground max-w-2xl text-sm leading-6">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-border space-y-7 border-t pt-7" aria-labelledby="projects-heading">
        <h2 id="projects-heading" className="text-foreground text-sm font-medium">
          Projects
        </h2>
        <div className="divide-border divide-y">
          {projects.map((project) => (
            <article key={project.name} className="space-y-2 py-5 first:pt-0 last:pb-0">
              <h3 className="text-foreground font-medium">{project.name}</h3>
              <p className="text-muted-foreground max-w-2xl text-sm leading-6">
                {project.description}
              </p>
              <a
                className={linkClassName + " inline-block text-sm"}
                href={project.href}
                target="_blank"
                rel="noreferrer"
              >
                Visit project ↗
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="border-border space-y-7 border-t pt-7" aria-labelledby="skills-heading">
        <h2 id="skills-heading" className="text-foreground text-sm font-medium">
          Skills
        </h2>
        <div className="space-y-4 text-sm">
          {skillGroups.map((group) => (
            <div key={group.label} className="grid gap-2 sm:grid-cols-[9rem_1fr] sm:gap-4">
              <h3 className="text-muted-foreground">{group.label}</h3>
              <ul className="text-foreground flex flex-wrap gap-x-4 gap-y-1">
                {group.items.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-border space-y-5 border-t pt-7">
        <h2 className="text-foreground max-w-md text-3xl leading-tight font-medium tracking-[-0.04em] sm:text-4xl">
          Let&apos;s build something that has to stay up.
        </h2>
        <nav
          className="text-muted-foreground flex flex-wrap gap-x-4 gap-y-2 text-sm"
          aria-label="Social links"
        >
          {links.map((link) => (
            <a
              key={link.label}
              className={linkClassName}
              href={link.href}
              target="_blank"
              rel="noreferrer"
            >
              {link.label} ↗
            </a>
          ))}
          <a className={linkClassName} href="mailto:hello@francistries.science">
            Email
          </a>
        </nav>
        <p className="text-muted-foreground text-sm">© 2026 — francistriesscience</p>
      </footer>
    </div>
  )
}
