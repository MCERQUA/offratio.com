"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

export type Episode = {
  slug: string;
  number: number;
  title: string;
  summary: string;
  publishedAt: string | null;
  durationMinutes: number | null;
  youtubeUrl: string | null;
  topics: string[];
  placeholder: boolean;
};

/**
 * One episode, as a bolted sign panel.
 *
 * A placeholder entry is rendered DELIBERATELY UNAPPEALING to click: stamped
 * PLACEHOLDER in alarm red, dimmed, play control disabled and aria-disabled,
 * no link. The brief's rule is that nothing on this page may read as a real
 * published episode, and the safest way to honour that is to make the
 * difference obvious in the pixels rather than only in the copy.
 */
export default function EpisodeCard({ ep, index }: { ep: Episode; index: number }) {
  const isPlaceholder = ep.placeholder;

  const body = (
    <>
      <div className="mb-3 flex items-center gap-3">
        <span className="font-display text-5xl leading-none text-acid/35">
          {String(ep.number).padStart(2, "0")}
        </span>
        {isPlaceholder ? (
          <span className="stamp -rotate-2 border-2 border-alarm px-2 py-0.5 text-[10px] text-alarm">
            Placeholder — not published
          </span>
        ) : (
          <span className="stamp text-[11px] text-bone/50">
            {ep.publishedAt}
            {ep.durationMinutes ? ` · ${ep.durationMinutes} min` : ""}
          </span>
        )}
      </div>

      <h3
        className={`mb-2 font-display text-2xl leading-tight tracking-wide sm:text-3xl ${
          isPlaceholder ? "text-bone/45" : "text-bone group-hover:text-acid"
        }`}
      >
        {ep.title}
      </h3>

      <p className={`text-sm leading-relaxed ${isPlaceholder ? "text-bone/35" : "text-bone/65"}`}>
        {ep.summary}
      </p>

      {ep.topics.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-2">
          {ep.topics.map((t) => (
            <li
              key={t}
              className={`stamp border px-2 py-0.5 text-[10px] ${
                isPlaceholder
                  ? "border-bone/15 text-bone/30"
                  : "border-acid/40 text-acid/80"
              }`}
            >
              {t}
            </li>
          ))}
        </ul>
      )}

      <span
        className={`mt-5 inline-flex items-center gap-2 font-display text-lg tracking-wide ${
          isPlaceholder ? "text-bone/25" : "text-acid"
        }`}
        aria-disabled={isPlaceholder || undefined}
      >
        <Play size={16} aria-hidden="true" />
        {isPlaceholder ? "Nothing to play yet" : "Watch on YouTube"}
      </span>
    </>
  );

  const shell =
    "sign-panel bolted relative block border-2 px-7 pb-7 pt-10 shadow-2xl shadow-black/60 transition-colors";

  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.07, duration: 0.45 }}
    >
      {isPlaceholder || !ep.youtubeUrl ? (
        <div className={`${shell} border-bone/10 bg-char/60`}>{body}</div>
      ) : (
        <a
          href={ep.youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`${shell} group border-acid/25 bg-char hover:border-acid`}
        >
          {body}
        </a>
      )}
    </motion.li>
  );
}
