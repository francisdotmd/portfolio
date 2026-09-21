export function HomeTabs() {
  return (
    <button
      className="text-foreground block w-full p-2 text-left text-xs uppercase"
      type="button"
      role="tab"
      aria-selected={true}
      aria-controls="works-panel"
    >
      Work
    </button>
  )
}
