import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHeader from "@/components/PageHeader";
import { episodesTeaser } from "@/lib/content";

export const metadata: Metadata = {
  title: "Episodes — OffRatio",
  description: "OffRatio episodes are coming. Here's what to expect when the mic goes live.",
};

export default function EpisodesPage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <PageHeader kicker="EPISODES" title="NOTHING'S DROPPED. YET." />

        <section className="bg-char py-20 sm:py-28">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <div className="rounded-2xl border border-brass/20 bg-void/60 p-8 sm:p-12">
              <p className="stamp mb-4 text-xs text-oxblood-light">STATUS: COMING SOON</p>
              <h2 className="mb-6 font-display text-3xl tracking-wide text-bone sm:text-4xl">
                {episodesTeaser.title}
              </h2>
              <p className="mb-10 leading-relaxed text-bone/75">{episodesTeaser.body}</p>

              <p className="stamp mb-5 text-xs text-brass">{episodesTeaser.themesLabel}</p>
              <ul className="space-y-4">
                {episodesTeaser.themes.map((theme, i) => (
                  <li key={i} className="flex items-start gap-3 text-bone/80">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber" />
                    <span>{theme}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
