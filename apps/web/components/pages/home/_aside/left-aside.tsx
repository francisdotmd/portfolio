import { Footer } from "@/components/pages/home/_section/footer-section"
import { Information } from "@/components/pages/home/_section/information-section"
import { Introduction } from "@/components/pages/home/_section/introduction-section"

export function LeftAside() {
  return (
    <aside className="border-border bg-background flex flex-col justify-between gap-10 p-0 lg:sticky lg:top-0 lg:h-svh lg:self-start lg:overflow-hidden lg:border-r">
      <div className="space-y-10 p-2">
        <Introduction />
      </div>

      <div>
        <Information />
        <div className="hidden lg:block">
          <Footer />
        </div>
      </div>
    </aside>
  )
}
