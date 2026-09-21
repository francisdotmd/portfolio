import type { Work } from "@/data/works"
import { IconArrowUpRight } from "@tabler/icons-react"
import Link from "next/link"

export function WorkCard({ project }: { project: Work }) {
  return (
    <article className="group">
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
            <h2 className="font-sans text-base font-medium tracking-tight">{project.name}</h2>
            {project.dates ? (
              <p className="text-muted-foreground text-xs uppercase">{project.dates}</p>
            ) : null}
          </div>
          <IconArrowUpRight aria-hidden="true" className="size-4 shrink-0" />
        </div>
      </Link>
    </article>
  )
}
