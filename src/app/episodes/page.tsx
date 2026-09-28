import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHeader from "@/components/PageHeader";
import EpisodeCard, { type Episode } from "@/components/EpisodeCard";
import { TuneInCta } from "@/components/TuneIn";
import { episodesTeaser } from "@/lib/content";
import episodeData from "@/data/episodes.json";

export const metadata: Metadata = {
  title: "Episodes — OffRatio",
  description:
    "OffRatio episodes are coming. Here's what to expect when the mic goes live.",
};

const episodes = episodeData.episodes as Episode[];
const published = episodes.filter((e) => !e.placeholder);

/**
 * PodcastSeries schema only. No PodcastEpisode nodes are emitted for
 * placeholder rows — publishing schema for an episode that does not exist
 * would put fabricated entries into search results, which is exactly the
 * failure the brief warns about.
 */
const seriesSchema = {
  "@context": "https://schema.org",
  "@type": "PodcastSeries",
  name: "OffRatio",
  description:
    "The unfiltered spray foam industry podcast. Hosted by Mr. Nobody. No NDAs, no fact checks, no consequences.",
  url: "https://offratio.com/episodes",
  ...(published.length > 0 && {
    hasPart: published.map((e) => ({
      "@type": "PodcastEpisode",
      episodeNumber: e.number,
      name: e.title,
      description: e.summary,
      datePublished: e.publishedAt,
      url: e.youtubeUrl,
    })),
  }),
};

export default function EpisodesPage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <PageHeader
          kicker="EPISODES"
          title={published.length > 0 ? "THE TAPES" : "NOTHING'S DROPPED. YET."}
        />

        <section className="bg-char py-20 sm:py-28">
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <div className="relative mx-auto mb-10 aspect-[4/3] max-w-2xl overflow-hidden border-2 border-acid/30 shadow-2xl shadow-black/70">
              <img
                src="/images/mic-on-boom.jpg"
                alt="A podcast microphone in a shock mount behind a pop filter, on a boom arm clamped to a scarred wooden desk in a dark brick studio."
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-void/60 via-transparent to-transparent" />
            </div>

            {published.length === 0 && (
              <div className="sign-panel mb-14 border-2 border-acid/25 bg-void/70 p-8 sm:p-10">
                <p className="stamp mb-4 text-xs text-alarm">STATUS: NOT PUBLISHED YET</p>
                <h2 className="mb-5 font-display text-3xl tracking-wide text-bone sm:text-4xl">
                  {episodesTeaser.title}
                </h2>
                <p className="mb-8 leading-relaxed text-bone/75">{episodesTeaser.body}</p>
                <p className="stamp mb-4 text-xs text-acid">{episodesTeaser.themesLabel}</p>
                <ul className="space-y-3">
                  {episodesTeaser.themes.map((theme, i) => (
                    <li key={i} className="flex items-start gap-3 text-bone/75">
                      <span className="mt-[9px] h-2 w-2 flex-shrink-0 rotate-45 bg-acid" />
                      <span>{theme}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <p className="stamp mb-5 text-xs text-bone/45">
              {published.length > 0
                ? `${published.length} episode${published.length === 1 ? "" : "s"}`
                : "How an episode will look here"}
            </p>
            <ul className="grid grid-cols-1 gap-6">
              {episodes.map((ep, i) => (
                <EpisodeCard key={ep.slug} ep={ep} index={i} />
              ))}
            </ul>

            <TuneInCta className="mt-16" />
          </div>
        </section>
      </main>
      <SiteFooter />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(seriesSchema) }}
      />
    </>
  );
}
