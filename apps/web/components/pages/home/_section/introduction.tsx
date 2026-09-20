import { ProfileAvatar } from "@/components/pages/home/_avatar/profile-avatar"

const labelClassName = "font-mono text-sm uppercase tracking-[0.08em] text-muted-foreground"

export function Introduction() {
  return (
    <header className="space-y-4">
      <div className="flex items-center gap-2">
        <ProfileAvatar />
        <p className={labelClassName}>Francis Ignacio</p>
      </div>
      <p className="text-muted-foreground max-w-xs font-sans text-sm leading-6">
        Product engineer and startup co-founder turning ambitious ideas into useful software, with a
        focus on applied AI and reliable systems.
      </p>
    </header>
  )
}
