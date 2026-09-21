import { Footer } from "@/components/pages/home/_section/footer"

import { Information } from "@/components/pages/home/_section/information"
import { Introduction } from "@/components/pages/home/_section/introduction"

export function LeftAside() {
  return (
    <aside className="border-border bg-background flex flex-col justify-between gap-10 border-b p-2 lg:sticky lg:top-0 lg:h-svh lg:self-start lg:overflow-hidden lg:border-r lg:border-b-0">
      <div className="space-y-10">
        <Introduction />
      </div>

      <div className="space-y-2">
        <Information />
        <Footer />
      </div>
    </aside>
  )
}
