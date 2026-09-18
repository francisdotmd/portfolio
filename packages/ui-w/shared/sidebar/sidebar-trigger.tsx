"use client"

import * as React from "react"
import { IconLayoutSidebarRightCollapse, IconLayoutSidebarRightExpand } from "@tabler/icons-react"

import { cn } from "@packages/ui-w/lib/utils"
import { useSidebar } from "@packages/ui-w/hooks/use-sidebar"

import { Button } from "@packages/ui-w/shared/button/button"

export function SidebarTrigger({
  className,
  onClick,
  ...props
}: React.ComponentProps<typeof Button>): React.ReactElement {
  const { state, toggleSidebar } = useSidebar()
  const Icon = state === "collapsed" ? IconLayoutSidebarRightCollapse : IconLayoutSidebarRightExpand

  return (
    <Button
      id="app-sidebar-trigger"
      data-sidebar="trigger"
      data-slot="sidebar-trigger"
      variant="ghost"
      size="icon"
      className={cn("size-7", className)}
      onClick={(event) => {
        onClick?.(event)
        toggleSidebar()
      }}
      {...props}
    >
      <Icon />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  )
}
