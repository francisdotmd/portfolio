type Tab = "work" | "about"

type HomeTabsProps = {
  value: Tab
  onValueChangeAction: (value: Tab) => void
}

export function HomeTabs({ value, onValueChangeAction }: HomeTabsProps) {
  return (
    <>
      <button
        className={`text-xs uppercase ${value === "work" ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
        type="button"
        role="tab"
        aria-selected={value === "work"}
        aria-controls="works-panel"
        onClick={() => onValueChangeAction("work")}
      >
        Work
      </button>
      <button
        className={`text-xs uppercase ${value === "about" ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
        type="button"
        role="tab"
        aria-selected={value === "about"}
        aria-controls="about-panel"
        onClick={() => onValueChangeAction("about")}
      >
        About
      </button>
    </>
  )
}
