import "@packages/ui-w/styles/globals.css"
import "@packages/ui-w/styles/variants/background.css"

import type { Metadata } from "next"

import { createMetadata } from "@packages/metadata"
import { spaceGrotesk } from "@packages/ui-w/lib/fonts"

export const metadata: Metadata = createMetadata({
  name: "Francis Ignacio",
})

import { ThemeProvider } from "@packages/ui-w/providers/theme-provider"
import { ToastProvider } from "@packages/ui-w/providers/toast-provider"
import { TooltipProvider } from "@packages/ui-w/providers/tooltip-provider"
import { QueryProvider } from "@/providers/query-provider"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className={spaceGrotesk.variable} lang="en" suppressHydrationWarning>
      <body className="overflow-x-hidden font-sans tracking-tight antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <ToastProvider>
            <TooltipProvider delay={0}>
              <QueryProvider>
                <main className="relative min-h-svh w-full overflow-x-hidden">{children}</main>
              </QueryProvider>
            </TooltipProvider>
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
