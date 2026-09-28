import type { Metadata } from "next";
import { Bebas_Neue, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const stamp = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-stamp",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://offratio.com"),
  title: "OFFRATIO — The Podcast | Real Talk. No Rules. Just Send It.",
  description:
    "OffRatio is the unfiltered spray foam industry podcast. No NDAs, no fact-checks, no accountability — just the stories the industry doesn't say out loud. Members only. Knock first.",
  openGraph: {
    title: "OFFRATIO — The Podcast",
    description:
      "The spray foam industry's off-the-record podcast. No NDAs. No filter. No rules.",
    url: "https://offratio.com",
    siteName: "OffRatio",
    images: [
      {
        url: "/images/og-mic-on-boom.jpg",
        width: 1200,
        height: 630,
        alt: "OFFRATIO — The Podcast: a studio microphone on a boom arm",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OFFRATIO — The Podcast",
    description:
      "The spray foam industry's off-the-record podcast. No NDAs. No filter. No rules.",
    images: [
      {
        url: "/images/og-mic-on-boom.jpg",
        width: 1200,
        height: 630,
        alt: "OFFRATIO — The Podcast: a studio microphone on a boom arm",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${display.variable} ${body.variable} ${stamp.variable} font-body bg-void text-bone antialiased`}
      >
        <div className="grain-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
