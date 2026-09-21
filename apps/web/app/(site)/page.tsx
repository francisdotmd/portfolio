import { LeftAside } from "@/components/pages/home/_aside/left-aside"
import { RightAside } from "@/components/pages/home/_aside/right-aside"
import { Footer } from "@/components/pages/home/_section/footer-section"

export default function HomePage() {
  return (
    <div className="bg-background text-foreground min-h-svh font-mono lg:grid lg:grid-cols-[20rem_minmax(0,1fr)]">
      <LeftAside />
      <RightAside />
      <div className="lg:hidden">
        <Footer />
      </div>
    </div>
  )
}
