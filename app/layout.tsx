import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Analytics } from "./components/analytics";
import ClientLayout from "./client-layout";
import type { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export const metadata: Metadata = {
  title: {
    default: "chronark.com",
    template: "%s | chronark.com",
  },
  description: "Software engineer at upstash.com and founder of planetfall.io",
  openGraph: {
    title: "chronark.com",
    description: "Software engineer at upstash.com and founder of planetfall.io",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <body className="bg-black">
        <ClientLayout>
          {children}
          <Analytics />
        </ClientLayout>
      </body>
    </html>
  );
}
