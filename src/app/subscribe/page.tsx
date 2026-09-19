import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHeader from "@/components/PageHeader";
import TicketStub from "@/components/TicketStub";
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

// Matches the section background (bg-char) so the ticket-stub punch-outs read as cut through it.
const SECTION_BG = "#161210";

export default function SubscribePage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <PageHeader kicker="SUBSCRIBE" title="DON'T TOUCH THAT DIAL" subtitle={subscribe.intro} />

        <section className="bg-char py-20 sm:py-28">
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 px-5 sm:grid-cols-2 sm:px-8">
            {subscribe.platforms.map((p) => (
              <TicketStub key={p} icon={platformIcons[p] ?? Rss} label={p} stubBg={SECTION_BG} />
            ))}
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
