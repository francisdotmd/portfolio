"use client"

import { useCallback } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

type QueryValue = string | null | undefined

export function useQueryParams() {
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()

  const getQueryParam = useCallback(
    (key: string, fallback?: string) => searchParams.get(key) ?? fallback,
    [searchParams],
  )

  const setQueryParams = useCallback(
    (updates: Record<string, QueryValue>) => {
      const params = new URLSearchParams(searchParams.toString())

      for (const [key, value] of Object.entries(updates)) {
        if (value == null) {
          params.delete(key)
        } else {
          params.set(key, value)
        }
      }

      const query = params.toString()
      router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false })
    },
    [pathname, router, searchParams],
  )

  return { getQueryParam, setQueryParams }
}
