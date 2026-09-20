import Link from "next/link"
import {
  IconArrowUpRight,
  IconBrandGithub,
  IconBrandLinkedin,
  IconFileCv,
  IconMail,
} from "@tabler/icons-react"

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
]

const projects = [
  {
    name: "Safegate",
    href: "https://usesafegate.com",
    image: "https://i.imgur.com/K05LjiN.gif",
    type: "Product",
    dates: "2026 — Present",
  },
  {
    name: "Applywise",
    href: "https://applywise.today",
    image: "https://i.imgur.com/yOtHt6G.gif",
    type: "Product",
    dates: "2026 — Present",
  },
  {
    name: "ADU Portal",
    href: "https://aduportal.com/",
    image: "https://i.imgur.com/WoSfnHg.gif",
    type: "Product",
    dates: "2025 — Present",
  },
  {
    name: "Chromiq",
    href: "https://chromiq.mnemora.org",
    image: "https://i.imgur.com/j3mfovT.gif",
    type: "Product",
    dates: "2025 — Present",
  },
]

const skillGroups = [
  { label: "Languages", items: "Go · TypeScript · JavaScript · Python" },
  { label: "Product", items: "AI engineering · Product engineering · System design" },
  { label: "Backend", items: "Node.js · Hono · FastAPI · Gin · PostgreSQL" },
  { label: "Infrastructure", items: "AWS · GCP · Docker · Kubernetes · Cloudflare" },
]

const links = [
  {
    label: "Email",
    href: "mailto:hello@francisdotmd.page",
    icon: IconMail,
  },
  {
    label: "Résumé",
    href: "https://drive.google.com/file/d/1-gi0nNzPXp_zLeoTXQ8_hSVVpJJkrhAk/view?usp=sharing",
    icon: IconFileCv,
  },
  { label: "GitHub", href: "https://github.com/francistriesscience", icon: IconBrandGithub },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/francistriesscience",
    icon: IconBrandLinkedin,
  },
]

const labelClassName = "font-mono text-sm uppercase tracking-[0.08em] text-muted-foreground"
const linkClassName =
  "text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"

export default function HomePage() {
  return (
    <div className="bg-background text-foreground min-h-svh font-mono">
      <aside className="border-border bg-background flex flex-col justify-between gap-10 border-b p-2 lg:fixed lg:inset-y-0 lg:left-[max(0px,calc((100vw-72rem)/2))] lg:w-80 lg:overflow-hidden lg:border-r lg:border-b-0">
        <div className="space-y-10">
          <header className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="bg-foreground size-2" aria-hidden="true" />
              <p className={labelClassName}>Francis Ignacio</p>
            </div>
            <p className="text-muted-foreground max-w-xs font-sans text-sm leading-6">
              AI engineer, product engineer, and startup co-founder building products that have to
              stay up.
            </p>
          </header>

          <nav className="flex items-center gap-4" aria-label="Profile links">
            {links.map((link) => {
              const Icon = link.icon

              return (
                <Link
                  key={link.label}
                  className="text-muted-foreground hover:text-foreground focus-visible:outline-ring focus-visible:outline-2 focus-visible:outline-offset-4"
                  href={link.href}
                  aria-label={link.label}
                  title={link.label}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  <Icon className="size-4" aria-hidden="true" />
                </Link>
              )
            })}
          </nav>
        </div>

        <div className="space-y-4">
          <dl className="border-border border-t text-xs uppercase">
            <div className="border-border flex justify-between gap-4 border-b p-2">
              <dt className="text-muted-foreground">Timezone</dt>
              <dd>PHT</dd>
            </div>
            <div className="border-border flex justify-between gap-4 border-b p-2">
              <dt className="text-muted-foreground">Area</dt>
              <dd>Philippines</dd>
            </div>
            <div className="border-border flex justify-between gap-4 border-b p-2">
              <dt className="text-muted-foreground">Domain</dt>
              <dd>francisdotmd.page</dd>
            </div>
          </dl>
          <footer className="text-muted-foreground text-xs uppercase">
            <p>© 2026 Francis Ignacio — Selected work</p>
          </footer>
        </div>
      </aside>

      <main className="lg:ml-80">
        <div className="w-full">
          <nav
            className="border-border bg-background/95 sticky top-0 z-10 flex items-center justify-between gap-4 border-b p-2 backdrop-blur"
            aria-label="Page sections"
          >
            <div className="flex gap-4 text-xs uppercase">
              <Link className="text-foreground" href="#projects">
                All
              </Link>
              <Link className="text-muted-foreground hover:text-foreground" href="#projects">
                Product
              </Link>
              <Link className="text-muted-foreground hover:text-foreground" href="#work">
                Work
              </Link>
            </div>
            <Link
              className="text-muted-foreground hover:text-foreground flex items-center gap-1 text-xs uppercase"
              href="#contact"
            >
              Contact
              <IconArrowUpRight aria-hidden="true" className="size-3.5" />
            </Link>
          </nav>

          <section id="projects" className="p-2" aria-labelledby="projects-heading">
            <h2 id="projects-heading" className="sr-only">
              Selected work
            </h2>
            <div className="grid gap-2 sm:grid-cols-2">
              {projects.map((project) => (
                <article key={project.name} className="group">
                  <Link
                    className="focus-visible:outline-ring block focus-visible:outline-2 focus-visible:outline-offset-4"
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="bg-muted aspect-[4/3] overflow-hidden">
                      <div
                        className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.02]"
                        style={{ backgroundImage: `url("${project.image}")` }}
                        aria-hidden="true"
                      />
                    </div>
                    <div className="flex items-start justify-between gap-4 p-2">
                      <div>
                        <h3 className="font-sans text-base font-medium tracking-tight">
                          {project.name}
                        </h3>
                        <p className="text-muted-foreground text-xs uppercase">
                          {project.type}, {project.dates}
                        </p>
                      </div>
                      <IconArrowUpRight aria-hidden="true" className="size-4 shrink-0" />
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </section>

          <section
            id="work"
            className="border-border space-y-4 border-t p-2"
            aria-labelledby="work-heading"
          >
            <div className="flex items-baseline justify-between gap-4">
              <h2 id="work-heading" className="font-sans text-2xl font-medium tracking-[-0.04em]">
                Experience
              </h2>
              <p className={labelClassName}>Selected roles</p>
            </div>
            <div className="divide-border border-border divide-y border-y">
              {work.map((item) => (
                <article key={`${item.company}-${item.role}`} className="space-y-2 p-2">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                    <h3 className="font-sans text-base font-medium tracking-tight">
                      {item.role} <span className="text-muted-foreground">— {item.company}</span>
                    </h3>
                    <time className="text-muted-foreground shrink-0 text-xs uppercase">
                      {item.dates}
                    </time>
                  </div>
                  <p className="text-muted-foreground max-w-2xl font-sans text-sm leading-6">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section
            className="border-border space-y-4 border-t p-2"
            aria-labelledby="toolkit-heading"
          >
            <div className="flex items-baseline justify-between gap-4">
              <h2
                id="toolkit-heading"
                className="font-sans text-2xl font-medium tracking-[-0.04em]"
              >
                Toolkit
              </h2>
              <p className={labelClassName}>How I work</p>
            </div>
            <dl className="grid gap-2 sm:grid-cols-2">
              {skillGroups.map((group) => (
                <div key={group.label} className="border-border space-y-2 border p-2">
                  <dt className={labelClassName}>{group.label}</dt>
                  <dd className="text-muted-foreground font-sans text-sm leading-6">
                    {group.items}
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          <section
            id="contact"
            className="border-border space-y-5 border-t p-2"
            aria-labelledby="contact-heading"
          >
            <p className={labelClassName}>Contact</p>
            <h2
              id="contact-heading"
              className="max-w-2xl font-sans text-3xl leading-tight font-medium tracking-[-0.05em] sm:text-5xl"
            >
              Let&apos;s build something that has to stay up.
            </h2>
            <Link className={linkClassName} href="mailto:hello@francisdotmd.page">
              hello@francisdotmd.page
              <IconArrowUpRight
                aria-hidden="true"
                className="ml-1 inline-block size-3.5 align-[-0.15em]"
              />
            </Link>
          </section>
        </div>
      </main>
    </div>
  )
}
