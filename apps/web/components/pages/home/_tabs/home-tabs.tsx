export function HomeTabs() {
  return (
    <button
      className="text-foreground flex h-8 w-full items-center p-2 text-left text-xs uppercase"
      type="button"
      role="tab"
      aria-selected={true}
      aria-controls="works-panel"
    >
      Work
    </button>
  )
}
