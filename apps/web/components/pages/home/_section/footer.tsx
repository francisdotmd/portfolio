import Link from "next/link"

export function Footer() {
  return (
    <footer className="text-muted-foreground px-2 text-xs uppercase">
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
  )
}
