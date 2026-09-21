import { experiences } from "@/data/experiences"

export function WorkExperience() {
  return (
    <section aria-labelledby="experience-heading">
      <h2 id="experience-heading" className="text-muted-foreground mb-2 text-xs uppercase">
        Experience
      </h2>
      <div className="divide-border border-border divide-y border-y">
        {experiences.map((item) => (
          <article key={`${item.company}-${item.role}`} className="space-y-2 p-2">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
              <h3 className="font-sans text-base font-medium tracking-tight">
                {item.role} <span className="text-muted-foreground">— {item.company}</span>
              </h3>
              <time className="text-muted-foreground shrink-0 text-xs uppercase">{item.dates}</time>
            </div>
            <p className="text-muted-foreground max-w-2xl font-sans text-sm leading-6">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
