"use client"

import { useState } from "react"
import Link from "next/link"
import { products } from "@/data/products"
import { Avatar } from "@packages/ui-w/shared/avatar/avatar"
import { AvatarFallback } from "@packages/ui-w/shared/avatar/avatar-fallback"
import { AvatarImage } from "@packages/ui-w/shared/avatar/avatar-image"
import {
  IconArrowUpRight,
  IconBrandGithub,
  IconBrandLinkedin,
  IconDownload,
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

const links = [
  {
    label: "Email",
    href: "mailto:hello@francisdotmd.page",
    icon: IconMail,
  },
  {
    label: "GitHub",
    href: "https://github.com/francistriesscience",
    icon: IconBrandGithub,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/francistriesscience",
    icon: IconBrandLinkedin,
  },
]

const resumeHref =
  "https://drive.google.com/file/d/1-gi0nNzPXp_zLeoTXQ8_hSVVpJJkrhAk/view?usp=sharing"

const labelClassName = "font-mono text-sm uppercase tracking-[0.08em] text-muted-foreground"
const linkClassName =
  "text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<"product" | "work">("product")

  return (
    <div className="bg-background text-foreground min-h-svh font-mono">
      <aside className="border-border bg-background flex flex-col justify-between gap-10 border-b p-2 lg:fixed lg:inset-y-0 lg:left-[max(0px,calc((100vw-72rem)/2))] lg:w-80 lg:overflow-hidden lg:border-r lg:border-b-0">
        <div className="space-y-10">
          <header className="space-y-4">
            <div className="flex items-center gap-2">
              <Avatar className="size-5 rounded-none">
                <AvatarImage
                  src="https://avatars.githubusercontent.com/u/239557641?v=4"
                  alt="Francis Ignacio"
                />
                <AvatarFallback className="rounded-none text-[8px]">FI</AvatarFallback>
              </Avatar>
              <p className={labelClassName}>Francis Ignacio</p>
            </div>
            <p className="text-muted-foreground max-w-xs font-sans text-sm leading-6">
              AI engineer, product engineer, and startup co-founder building products that have to
              stay up.
            </p>
          </header>
        </div>

        <div className="space-y-4">
          <dl className="border-border border-t text-xs uppercase">
            <div className="border-border flex justify-between gap-4 border-b p-2">
              <dt className="text-muted-foreground">Area, TZ</dt>
              <dd>Philippines, PHT</dd>
            </div>
            <div className="border-border flex justify-between gap-4 border-b p-2">
              <dt className="text-muted-foreground">Email</dt>
              <dd>
                <Link className="hover:text-foreground" href="mailto:hello@francisdotmd.page">
                  hello@francisdotmd.page
                </Link>
              </dd>
            </div>
            <div className="border-border flex justify-between gap-4 border-b p-2">
              <dt className="text-muted-foreground">Paper</dt>
              <dd>
                <Link
                  className="hover:text-foreground flex items-center gap-1"
                  href={resumeHref}
                  target="_blank"
                  rel="noreferrer"
                >
                  Resume
                  <IconDownload aria-hidden="true" className="size-3.5" />
                </Link>
              </dd>
            </div>
          </dl>
          <div className="border-border flex items-center justify-between gap-4 border-b p-2">
            <p className="text-muted-foreground text-xs uppercase">Contacts</p>
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
          <footer className="text-muted-foreground px-2 text-xs uppercase">
            <p>© 2026 Francis Ignacio — Selected work</p>
          </footer>
        </div>
      </aside>

      <main className="lg:ml-80">
        <div className="w-full">
          <nav
            className="border-border bg-background/95 sticky top-0 z-10 flex items-center gap-4 border-b p-2 backdrop-blur"
            aria-label="Portfolio views"
            role="tablist"
          >
            <button
              className={`text-xs uppercase ${activeTab === "product" ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
              type="button"
              role="tab"
              aria-selected={activeTab === "product"}
              aria-controls="product-panel"
              onClick={() => setActiveTab("product")}
            >
              Product
            </button>
            <button
              className={`text-xs uppercase ${activeTab === "work" ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
              type="button"
              role="tab"
              aria-selected={activeTab === "work"}
              aria-controls="work-panel"
              onClick={() => setActiveTab("work")}
            >
              Work
            </button>
          </nav>

          {activeTab === "product" ? (
            <section id="product-panel" className="p-2" aria-labelledby="product-heading">
              <h1 id="product-heading" className="sr-only">
                Products
              </h1>
              <div className="grid gap-2 sm:grid-cols-2">
                {products.map((project) => (
                  <article key={project.name} className="group">
                    <Link
                      className="focus-visible:outline-ring block focus-visible:outline-2 focus-visible:outline-offset-4"
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="bg-muted aspect-video overflow-hidden">
                        <div
                          className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.02]"
                          style={{ backgroundImage: `url("${project.image}")` }}
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex items-start justify-between gap-4 p-2">
                        <div>
                          <h2 className="font-sans text-base font-medium tracking-tight">
                            {project.name}
                          </h2>
                          {project.dates ? (
                            <p className="text-muted-foreground text-xs uppercase">
                              {project.dates}
                            </p>
                          ) : null}
                        </div>
                        <IconArrowUpRight aria-hidden="true" className="size-4 shrink-0" />
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </section>
          ) : (
            <section id="work-panel" className="p-2" aria-labelledby="work-heading">
              <h1 id="work-heading" className="sr-only">
                Work
              </h1>
              <div className="divide-border border-border divide-y border-y">
                {work.map((item) => (
                  <article key={`${item.company}-${item.role}`} className="space-y-2 p-2">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                      <h2 className="font-sans text-base font-medium tracking-tight">
                        {item.role} <span className="text-muted-foreground">— {item.company}</span>
                      </h2>
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
          )}
        </div>
      </main>
    </div>
  )
}
