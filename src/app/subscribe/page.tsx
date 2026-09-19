import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHeader from "@/components/PageHeader";
import { TuneInCta, PlatformRow } from "@/components/TuneIn";
import { subscribe } from "@/lib/content";

export const metadata: Metadata = {
  title: "Subscribe — OffRatio",
  description:
    "Watch OffRatio on YouTube at youtube.com/@OffRatioPodcast. Apple Podcasts, Spotify and Amazon Music feeds go live as the show rolls out.",
};

export default function SubscribePage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <PageHeader
          kicker="SUBSCRIBE"
          title="DON'T TOUCH THAT DIAL"
          subtitle={subscribe.intro}
        />

        <section className="bg-char py-20 sm:py-28">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <TuneInCta className="mb-16" />
            <PlatformRow />
            <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-bone/50">
              {subscribe.outro}
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
