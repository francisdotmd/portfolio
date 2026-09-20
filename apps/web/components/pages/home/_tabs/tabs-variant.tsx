"use client"

import { Tabs } from "@packages/ui-w/shared/tabs/tabs"
import { TabsList } from "@packages/ui-w/shared/tabs/tabs-list"
import { TabsTab } from "@packages/ui-w/shared/tabs/tabs-tab"

type Tab = "work" | "experience"

type TabsVariantProps = {
  value: Tab
  onValueChange: (value: string) => void
}

export function TabsVariant({ value, onValueChange }: TabsVariantProps) {
  return (
    <Tabs value={value} onValueChange={onValueChange} className="gap-0">
      <TabsList aria-label="Portfolio views" className="gap-4" variant="underline">
        <TabsTab
          className="text-muted-foreground data-active:text-foreground h-auto rounded-none px-0 py-0 text-xs font-normal uppercase hover:bg-transparent"
          value="work"
        >
          Work
        </TabsTab>
        <TabsTab
          className="text-muted-foreground data-active:text-foreground h-auto rounded-none px-0 py-0 text-xs font-normal uppercase hover:bg-transparent"
          value="experience"
        >
          Experience
        </TabsTab>
      </TabsList>
    </Tabs>
  )
}
