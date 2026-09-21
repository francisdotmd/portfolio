import { LeftAside } from "@/components/pages/home/_aside/left-aside"
import { RightAside } from "@/components/pages/home/_aside/right-aside"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="bg-background text-foreground min-h-svh font-mono lg:grid lg:grid-cols-[20rem_minmax(0,1fr)]">
      <LeftAside />
      <RightAside />
      <footer className="text-muted-foreground p-2 text-center text-xs uppercase lg:hidden">
        <p>
          © 2026 Francis Ignacio +{" "}
          <Link
            className="hover:text-foreground"
            href="https://mnemora.org/"
            target="_blank"
            rel="noreferrer"
          >
            Mnemora
          </Link>
        </p>
      </footer>
    </div>
  )
}
