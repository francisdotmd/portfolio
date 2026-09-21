import { ProfileAvatar } from "@/components/pages/home/_avatar/profile-avatar"
import Link from "next/link"

const labelClassName = "font-mono text-sm uppercase tracking-[0.08em] text-muted-foreground"

export function Introduction() {
  return (
    <header className="space-y-4">
      <div className="flex items-center gap-2">
        <ProfileAvatar />
        <Link className={`${labelClassName} hover:text-foreground transition-colors`} href="/">
          Francis Ignacio
        </Link>
      </div>
      <p className="text-muted-foreground font-sans text-sm leading-5">
        Product engineer and startup co-founder turning ambitious ideas into useful software, with a
        focus on applied AI and reliable systems.
      </p>
    </header>
  )
}
