"use client"

import { WorkCard } from "@/components/pages/home/_card/work-card"
import { HomeTabs } from "@/components/pages/home/_tabs/home-tabs"
import { experiences } from "@/data/experiences"
import { works } from "@/data/works"
import { useQueryParams } from "@/hooks/use-query-params"

export function RightAside() {
  const { getQueryParam, setQueryParams } = useQueryParams()
  const activeTab = getQueryParam("tab") === "experience" ? "experience" : "work"

  return (
    <main className="min-w-0">
      <div className="w-full">
        <nav
          className="border-border bg-background/95 sticky top-0 z-10 flex items-center gap-4 border-b p-2 backdrop-blur"
          aria-label="Portfolio views"
          role="tablist"
        >
          <HomeTabs
            value={activeTab}
            onValueChangeAction={(value) =>
              setQueryParams({ tab: value === "experience" ? "experience" : "work" })
            }
          />
        </nav>

        {activeTab === "work" ? (
          <section id="works-panel" className="p-2" aria-labelledby="works-heading">
            <h1 id="works-heading" className="sr-only">
              Work
            </h1>
            <div className="grid gap-2 sm:grid-cols-2">
              {works.map((project) => (
                <WorkCard key={project.name} project={project} />
              ))}
            </div>
          </section>
        ) : (
          <section id="experience-panel" className="p-2" aria-labelledby="experience-heading">
            <h1 id="experience-heading" className="sr-only">
              Experience
            </h1>
            <div className="divide-border border-border divide-y border-y">
              {experiences.map((item) => (
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
  )
}
