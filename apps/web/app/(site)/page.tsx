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
  { label: "Languages", items: "Go · TypeScript · JavaScript · Python" },
  { label: "Frontend", items: "Next.js · React · Astro · Tailwind CSS" },
  { label: "Backend", items: "Node.js · Hono · FastAPI · Gin · PostgreSQL" },
  { label: "Infrastructure", items: "AWS · GCP · Docker · Kubernetes · Cloudflare" },
  { label: "Tools", items: "GitHub Actions · GitLab CI/CD · Claude Code · Codex · Zed" },
]

const links = [
  { label: "GitHub", href: "https://github.com/francistriesscience" },
  { label: "GitLab", href: "https://gitlab.com/francistriesscience" },
  { label: "LinkedIn", href: "https://linkedin.com/in/francistriesscience" },
]

const labelClassName = "font-mono text-[11px] uppercase tracking-[0.08em] text-[#777772]"
const linkClassName =
  "text-[#252522] underline decoration-[#c8c8c1] underline-offset-4 transition-colors hover:decoration-[#252522] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#252522]"
const cellClassName = "border-[#deded8] p-5 sm:p-7"

export default function HomePage() {
  return (
    <div className="min-h-svh bg-[#fafaf8] font-mono text-[#252522]">
      <div className="mx-auto max-w-[1200px] border-x border-[#d8d8d2] bg-[#fafaf8]">
        <header className="grid border-b border-[#deded8] sm:grid-cols-2">
          <div className={`${cellClassName} border-b sm:border-r`}>
            <p className={labelClassName}>Francis Ignacio</p>
          </div>
          <div className={`${cellClassName} border-b`}>
            <p className={labelClassName}>AI &amp; Product Engineering</p>
          </div>
          <div className={`${cellClassName} border-b sm:border-r sm:border-b-0`}>
            <p className={labelClassName}>Philippines</p>
          </div>
          <div className={cellClassName}>
            <a
              className={`${labelClassName} hover:text-[#252522]`}
              href="mailto:hello@francidotmd.page"
            >
              hello@francidotmd.page
            </a>
          </div>
        </header>

        <section className="grid border-b border-[#deded8] md:grid-cols-[minmax(12rem,0.8fr)_2fr]">
          <div className={`${cellClassName} border-b md:border-r md:border-b-0`}>
            <p className={labelClassName}>00 / Profile</p>
          </div>
          <div className={`${cellClassName} space-y-6 sm:p-10`}>
            <p className="max-w-2xl text-xl leading-relaxed tracking-[-0.03em] sm:text-2xl">
              I build the unglamorous systems that other things depend on.
            </p>
            <div className="max-w-2xl space-y-4 font-sans text-sm leading-6 text-[#696963]">
              <p>
                I enjoy owning the whole stack, from architecture and infrastructure to the details
                that make a product feel good to use.
              </p>
              <p>
                Software engineer and technical lead focused on reliable products, backend systems,
                and AI engineering.
              </p>
            </div>
            <nav
              className="flex flex-wrap gap-x-5 gap-y-2 text-[11px] tracking-[0.08em] uppercase"
              aria-label="Links"
            >
              <a className={linkClassName} href="https://francisdotmd.page">
                Website
              </a>
              <a
                className={linkClassName}
                href="https://drive.google.com/file/d/1-gi0nNzPXp_zLeoTXQ8_hSVVpJJkrhAk/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                Résumé
              </a>
              {links.map((link) => (
                <a
                  key={link.label}
                  className={linkClassName}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </section>

        <section className="grid border-b border-[#deded8] md:grid-cols-[minmax(12rem,0.8fr)_2fr]">
          <div className={`${cellClassName} border-b md:border-r md:border-b-0`}>
            <p className={labelClassName}>01 / Work</p>
          </div>
          <div className="divide-y divide-[#deded8]">
            {work.map((item) => (
              <article key={`${item.company}-${item.role}`} className="space-y-3 p-5 sm:p-7">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                  <h2 className="font-sans text-base font-medium tracking-tight">
                    {item.role} <span className="text-[#777772]">— {item.company}</span>
                  </h2>
                  <time className="shrink-0 text-[11px] tracking-[0.06em] text-[#777772] uppercase">
                    {item.dates}
                  </time>
                </div>
                <p className="max-w-2xl font-sans text-sm leading-6 text-[#696963]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid border-b border-[#deded8] md:grid-cols-[minmax(12rem,0.8fr)_2fr]">
          <div className={`${cellClassName} border-b md:border-r md:border-b-0`}>
            <p className={labelClassName}>02 / Projects</p>
          </div>
          <div className="grid sm:grid-cols-2">
            {projects.map((project, index) => (
              <article
                key={project.name}
                className={`space-y-4 p-5 sm:p-7 ${index < 2 ? "border-b" : "border-b sm:border-b-0"} ${index % 2 === 0 ? "sm:border-r" : ""} border-[#deded8]`}
              >
                <div className="flex items-start justify-between gap-4">
                  <h2 className="font-sans text-base font-medium tracking-tight">{project.name}</h2>
                  <span className={labelClassName}>0{index + 1}</span>
                </div>
                <p className="font-sans text-sm leading-6 text-[#696963]">{project.description}</p>
                <a
                  className={`${linkClassName} text-[11px] tracking-[0.08em] uppercase`}
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

        <section className="grid border-b border-[#deded8] md:grid-cols-[minmax(12rem,0.8fr)_2fr]">
          <div className={`${cellClassName} border-b md:border-r md:border-b-0`}>
            <p className={labelClassName}>03 / Toolkit</p>
          </div>
          <div className="grid sm:grid-cols-2">
            {skillGroups.map((group, index) => (
              <div
                key={group.label}
                className={`space-y-3 border-[#deded8] p-5 sm:p-7 ${index < 4 ? "border-b" : ""} ${index % 2 === 0 ? "sm:border-r" : ""}`}
              >
                <p className={labelClassName}>{group.label}</p>
                <p className="font-sans text-sm leading-6 text-[#696963]">{group.items}</p>
              </div>
            ))}
          </div>
        </section>

        <footer className="grid md:grid-cols-[minmax(12rem,0.8fr)_2fr]">
          <div className={`${cellClassName} border-b md:border-r md:border-b-0`}>
            <p className={labelClassName}>04 / Contact</p>
          </div>
          <div className={`${cellClassName} space-y-6 sm:p-10`}>
            <h2 className="max-w-2xl font-sans text-3xl leading-tight font-medium tracking-[-0.05em] sm:text-5xl">
              Let&apos;s build something that has to stay up.
            </h2>
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-[11px] tracking-[0.08em] uppercase">
              <a className={linkClassName} href="mailto:hello@francidotmd.page">
                Email me ↗
              </a>
              <a className={linkClassName} href="https://francisdotmd.page">
                francisdotmd.page
              </a>
            </div>
            <p className="text-[11px] tracking-[0.08em] text-[#777772] uppercase">
              © 2026 Francis Ignacio
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}
