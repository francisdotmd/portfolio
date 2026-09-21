import Link from "next/link"

export function HomeTabs() {
  return (
    <Link
      className="text-foreground flex h-8 w-full items-center p-2 text-left text-xs uppercase"
      href="/?tab=works"
      role="tab"
      aria-selected={true}
      aria-controls="works-panel"
    >
      Works
    </Link>
  )
}
