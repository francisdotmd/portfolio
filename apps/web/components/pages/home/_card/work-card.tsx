import type { Work } from "@/data/works"
import Image from "next/image"
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
          <Image
            src={project.image}
            alt=""
            width={1920}
            height={1080}
            loading="lazy"
            decoding="async"
            sizes="(min-width: 1024px) calc(50vw - 10rem), (min-width: 640px) 50vw, 100vw"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
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
