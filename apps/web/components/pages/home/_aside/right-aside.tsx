import { WorkCard } from "@/components/pages/home/_card/work-card"
import { HomeTabs } from "@/components/pages/home/_tabs/home-tabs"
import { works } from "@/data/works"

export function RightAside() {
  return (
    <main className="min-w-0">
      <div className="w-full">
        <nav
          className="border-border bg-background/80 sticky top-0 z-10 flex items-center border-b p-0 backdrop-blur-md"
          aria-label="Portfolio views"
          role="tablist"
        >
          <HomeTabs />
        </nav>

        <section id="works-panel" className="p-2" aria-labelledby="works-heading">
          <h1 id="works-heading" className="sr-only">
            Works
          </h1>
          <div className="grid gap-2 sm:grid-cols-2">
            {works.map((project) => (
              <WorkCard key={project.name} project={project} />
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
