"use client"

import * as React from "react"
import { Select as SelectPrimitive } from "@base-ui/react/select"

import { IconChevronDown, IconChevronUp } from "@tabler/icons-react"

import { cn } from "@packages/ui-w/lib/utils"

export function SelectPopup({
  className,
  children,
  side = "bottom",
  sideOffset = 4,
  align = "start",
  alignOffset = 0,
  alignItemWithTrigger = true,
  anchor,
  ...props
}: SelectPrimitive.Popup.Props & {
  side?: SelectPrimitive.Positioner.Props["side"]
  sideOffset?: SelectPrimitive.Positioner.Props["sideOffset"]
  align?: SelectPrimitive.Positioner.Props["align"]
  alignOffset?: SelectPrimitive.Positioner.Props["alignOffset"]
  alignItemWithTrigger?: SelectPrimitive.Positioner.Props["alignItemWithTrigger"]
  anchor?: SelectPrimitive.Positioner.Props["anchor"]
}): React.ReactElement {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Positioner
        align={align}
        alignItemWithTrigger={alignItemWithTrigger}
        alignOffset={alignOffset}
        anchor={anchor}
        className="z-50 select-none"
        data-slot="select-positioner"
        side={side}
        sideOffset={sideOffset}
      >
        <SelectPrimitive.Popup
          className="text-foreground origin-(--transform-origin) outline-none"
          data-slot="select-popup"
          {...props}
        >
          <SelectPrimitive.ScrollUpArrow
            className="before:from-popover top-0 z-50 flex h-6 w-full cursor-pointer items-center justify-center before:pointer-events-none before:absolute before:inset-x-px before:top-px before:h-[200%] before:rounded-none before:bg-linear-to-b before:from-50%"
            data-slot="select-scroll-up-arrow"
          >
            <IconChevronUp className="relative size-4.5 sm:size-4" />
          </SelectPrimitive.ScrollUpArrow>
          <div className="bg-popover border-border relative h-full min-w-(--anchor-width) rounded-xl border not-dark:bg-clip-padding before:pointer-events-none before:absolute before:inset-0 before:rounded-xl">
            <SelectPrimitive.List
              className={cn("max-h-(--available-height) overflow-y-auto p-1", className)}
              data-slot="select-list"
            >
              {children}
            </SelectPrimitive.List>
          </div>
          <SelectPrimitive.ScrollDownArrow
            className="before:from-popover bottom-0 z-50 flex h-6 w-full cursor-pointer items-center justify-center before:pointer-events-none before:absolute before:inset-x-px before:bottom-px before:h-[200%] before:rounded-none before:bg-linear-to-t before:from-50%"
            data-slot="select-scroll-down-arrow"
          >
            <IconChevronDown className="relative size-4.5 sm:size-4" />
          </SelectPrimitive.ScrollDownArrow>
        </SelectPrimitive.Popup>
      </SelectPrimitive.Positioner>
    </SelectPrimitive.Portal>
  )
}
