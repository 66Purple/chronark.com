import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "chronark.com",
    template: "%s | chronark.com",
  },
  description: "Software engineer at upstash.com and founder of planetfall.io",
  openGraph: {
    title: "chronark.com",
    description:
      "Software engineer at upstash.com and founder of planetfall.io",
    url: "https://chronark.com",
    siteName: "chronark.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Chronark",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};
