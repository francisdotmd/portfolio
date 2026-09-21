import { skills } from "@/data/skills"

export function Skills() {
  return (
    <section className="mt-8" aria-labelledby="skills-heading">
      <h2 id="skills-heading" className="text-muted-foreground mb-2 text-xs uppercase">
        Skills
      </h2>
      <dl className="divide-border border-border divide-y border-y">
        {skills.map((group) => (
          <div
            key={group.category}
            className="flex flex-col gap-2 p-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
          >
            <dt className="text-muted-foreground shrink-0 text-xs uppercase">{group.category}</dt>
            <dd className="m-0 flex flex-wrap gap-x-3 gap-y-1 font-sans text-sm sm:justify-end">
              {group.items.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
