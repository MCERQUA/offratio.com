import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHeader from "@/components/PageHeader";
import { subscribe } from "@/lib/content";
import { Apple, Music2, Youtube, Rss, type LucideIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Subscribe — OffRatio",
  description: "Subscribe to OffRatio on Apple Podcasts, Spotify, YouTube, Amazon Music, and RSS. Links go live at launch.",
};

const platformIcons: Record<string, LucideIcon> = {
  "Apple Podcasts": Apple,
  Spotify: Music2,
  YouTube: Youtube,
  "Amazon Music": Music2,
  RSS: Rss,
};

export default function SubscribePage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <PageHeader kicker="SUBSCRIBE" title="DON'T TOUCH THAT DIAL" subtitle={subscribe.intro} />

        <section className="bg-char py-20 sm:py-28">
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 px-5 sm:grid-cols-2 sm:px-8">
            {subscribe.platforms.map((p) => {
              const Icon = platformIcons[p] ?? Rss;
              return (
                <div
                  key={p}
                  className="flex items-center justify-between rounded-xl border border-brass/15 bg-void/60 px-6 py-5"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="text-brass" size={20} />
                    <span className="font-display text-lg tracking-wide text-bone">{p}</span>
                  </div>
                  <span className="stamp text-[10px] text-bone/40">COMING SOON</span>
                </div>
              );
            })}
          </div>
          <p className="mx-auto mt-10 max-w-xl px-5 text-center text-sm text-bone/50 sm:px-8">
            {subscribe.outro}
          </p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
