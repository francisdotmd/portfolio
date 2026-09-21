import { socials } from "@/data/socials"
import { IconDownload, IconSend } from "@tabler/icons-react"
import Link from "next/link"

const resumeHref =
  "https://drive.google.com/file/d/1-gi0nNzPXp_zLeoTXQ8_hSVVpJJkrhAk/view?usp=sharing"

export function Information() {
  return (
    <dl className="border-border m-0 border-t text-xs uppercase">
      <div className="border-border flex justify-between gap-4 border-b p-2">
        <dt className="text-muted-foreground">Area, TZ</dt>
        <dd>Philippines, PHT</dd>
      </div>
      <div className="border-border flex justify-between gap-4 border-b p-2">
        <dt className="text-muted-foreground">Email</dt>
        <dd>
          <Link
            className="hover:text-foreground flex items-center gap-1"
            href="mailto:hello@francisdotmd.page"
          >
            hello@francisdotmd.page
            <IconSend aria-hidden="true" className="size-4" />
          </Link>
        </dd>
      </div>
      <div className="border-border flex justify-between gap-4 border-b p-2">
        <dt className="text-muted-foreground">Resume</dt>
        <dd>
          <Link
            className="hover:text-foreground flex items-center gap-1"
            href={resumeHref}
            target="_blank"
            rel="noreferrer"
          >
            FRANCISIGNACIO_CV.PDF
            <IconDownload aria-hidden="true" className="size-4" />
          </Link>
        </dd>
      </div>
      <div className="border-border flex items-center justify-between gap-4 border-b p-2">
        <dt className="text-muted-foreground">Contacts</dt>
        <dd className="m-0">
          <nav className="flex items-center gap-4" aria-label="Profile links">
            {socials.map((link) => {
              const Icon = link.icon

              return (
                <Link
                  key={link.label}
                  className="text-foreground focus-visible:outline-ring transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4"
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
        </dd>
      </div>
    </dl>
  )
}
