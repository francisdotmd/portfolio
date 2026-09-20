type Tab = "work" | "experience"

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
        className={`text-xs uppercase ${value === "experience" ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
        type="button"
        role="tab"
        aria-selected={value === "experience"}
        aria-controls="experience-panel"
        onClick={() => onValueChangeAction("experience")}
      >
        Experience
      </button>
    </>
  )
}
