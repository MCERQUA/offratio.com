import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const display = localFont({
  src: [{ path: "./fonts/BebasNeue-400.woff2", weight: "400", style: "normal" }],
  variable: "--font-display",
  display: "swap",
});

const body = localFont({
  src: [{ path: "./fonts/Inter-variable.woff2", weight: "100 900", style: "normal" }],
  variable: "--font-body",
  display: "swap",
});

const stamp = localFont({
  src: [{ path: "./fonts/JetBrainsMono-variable.woff2", weight: "100 800", style: "normal" }],
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
