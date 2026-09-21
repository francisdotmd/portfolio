import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-border text-muted-foreground flex items-center border-b p-2 text-xs uppercase">
      <p className="m-0">
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
  )
}
