import type { Metadata } from "next"

import { baseKeywords } from "./keywords"
export { baseKeywords } from "./keywords"

const defaultDescription =
  "AI Engineer, Product Engineer, and startup co-founder building reliable AI-powered products, backend systems, and end-to-end software across startups and academia."
const defaultUrl = "https://francisdotmd.page"

export interface MetadataConfig extends Omit<Metadata, "description" | "keywords"> {
  name: string
  url?: string
  ogImage?: string
  description?: string
  keywords?: string[]
}

export function createMetadata(config: MetadataConfig): Metadata {
  const {
    name,
    url = defaultUrl,
    ogImage = `${url}/og.png`,
    description = defaultDescription,
    keywords = baseKeywords,
    ...rest
  } = config

  return {
    title: {
      default: name,
      template: `%s | ${name}`,
    },
    description,
    keywords,
    authors: [
      {
        name: "Francis Ignacio",
        url,
      },
    ],
    creator: "Francis Ignacio",
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      title: name,
      description,
      siteName: name,
      ...(config.openGraph || {}),
    },
    twitter: {
      card: "summary_large_image",
      title: name,
      description,
      images: [ogImage],
      creator: "@mnemora",
      ...(config.twitter || {}),
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon-16x16.png",
      apple: "/apple-touch-icon.png",
    },
    manifest: `${url}/site.webmanifest`,
    ...rest,
  }
}
