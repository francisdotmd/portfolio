import type { Metadata } from "next"

import { baseKeywords } from "./keywords"
export { baseKeywords } from "./keywords"

const defaultDescription =
  "Product engineer and startup co-founder turning ambitious ideas into useful software, with a focus on applied AI and reliable systems. Currently building Pantrack and Pleo at Mnemora."
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
