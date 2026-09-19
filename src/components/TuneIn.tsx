"use client";

import { motion } from "framer-motion";
import { tuneIn, subscribe } from "@/lib/content";

/**
 * The reference's loudest element, and the thing the previous build of this
 * site was missing entirely: an actual outbound link to the channel Josh gave
 * us (youtube.com/@OffRatioPodcast).
 *
 * Honesty rule applied throughout: only YouTube is a verified destination.
 * Every other platform links to that platform's SEARCH for "Off Ratio" and
 * says so on the tile. No invented Apple/Spotify show IDs.
 */

export function TuneInCta({ className = "" }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`flex flex-col items-center gap-4 ${className}`}
    >
      <span className="font-display text-5xl leading-none tracking-tight text-alarm sm:text-6xl">
        {tuneIn.label}
      </span>
      <a
        href={tuneIn.href}
        target="_blank"
        rel="noopener noreferrer"
        className="cut-btn group inline-flex items-center gap-3 bg-bone px-7 py-4 text-ink transition-colors hover:bg-acid focus-visible:bg-acid"
      >
        <YouTubeGlyph className="h-7 w-10 flex-shrink-0" />
        <span className="font-display text-xl tracking-wide sm:text-2xl">
          {tuneIn.display}
        </span>
      </a>
      <span className="stamp text-[10px] text-bone/45">{tuneIn.caveat}</span>
    </motion.div>
  );
}

export function PlatformRow({ className = "" }: { className?: string }) {
  return (
    <ul
      className={`grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 ${className}`}
    >
      {subscribe.platforms.map((p, i) => (
        <motion.li
          key={p.name}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.07 }}
        >
          <a
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className="sign-panel group flex h-full flex-col gap-2 border-2 border-acid/30 bg-char/90 p-5 transition-colors hover:border-acid focus-visible:border-acid"
          >
            <span className="flex items-center justify-between gap-3">
              <span className="font-display text-2xl tracking-wide text-bone group-hover:text-acid">
                {p.name}
              </span>
              {p.status === "live" ? (
                <span className="stamp flex-shrink-0 bg-acid px-2 py-1 text-[10px] text-ink">
                  Live
                </span>
              ) : (
                <span className="stamp flex-shrink-0 border border-bone/30 px-2 py-1 text-[10px] text-bone/55">
                  Pending
                </span>
              )}
            </span>
            <span className="text-sm leading-relaxed text-bone/65">{p.note}</span>
          </a>
        </motion.li>
      ))}
    </ul>
  );
}

function YouTubeGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 34" aria-hidden="true" className={className}>
      <path
        d="M47 5.3a6 6 0 0 0-4.2-4.2C39 0 24 0 24 0S9 0 5.2 1.1A6 6 0 0 0 1 5.3C0 9.1 0 17 0 17s0 7.9 1 11.7a6 6 0 0 0 4.2 4.2C9 34 24 34 24 34s15 0 18.8-1.1a6 6 0 0 0 4.2-4.2C48 24.9 48 17 48 17s0-7.9-1-11.7z"
        fill="#f51d1d"
      />
      <path d="M19 24.3 31.5 17 19 9.7z" fill="#f2ece0" />
    </svg>
  );
}
