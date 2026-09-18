import { defineConfig } from "vite"
import vinext from "vinext"
import { cloudflare } from "@cloudflare/vite-plugin"
import { cdnAdapter } from "@vinext/cloudflare/cache/cdn-adapter"

export default defineConfig({
  clearScreen: false,
  server: {
    port: 33001,
    strictPort: true,
  },
  plugins: [
    vinext({
      cache: { cdn: cdnAdapter() },
    }),
    cloudflare({
      inspectorPort: 9230,
      viteEnvironment: {
        name: "rsc",
        childEnvironments: ["ssr"],
      },
    }),
  ],
})
