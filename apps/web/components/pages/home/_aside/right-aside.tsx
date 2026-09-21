"use client"

import { Skills } from "@/components/pages/home/_section/skills"
import { WorkExperience } from "@/components/pages/home/_section/work-experience"
import { WorkCard } from "@/components/pages/home/_card/work-card"
import { HomeTabs } from "@/components/pages/home/_tabs/home-tabs"
import { works } from "@/data/works"
import { useQueryParams } from "@/hooks/use-query-params"

export function RightAside() {
  const { getQueryParam, setQueryParams } = useQueryParams()
  const tab = getQueryParam("tab")
  const activeTab = tab === "about" || tab === "experience" ? "about" : "work"

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
            onValueChangeAction={(value) => setQueryParams({ tab: value })}
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
          <section id="about-panel" className="p-2" aria-labelledby="about-heading">
            <h1 id="about-heading" className="sr-only">
              About
            </h1>
            <WorkExperience />
            <Skills />
          </section>
        )}
      </div>
    </main>
  )
}
