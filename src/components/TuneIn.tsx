"use client";

import { motion } from "framer-motion";
import { tuneIn, subscribe } from "@/lib/content";

/**
 * The reference's loudest element, held as a PRE-LAUNCH state.
 *
 * It briefly shipped as a live button to youtube.com/@OffRatioPodcast. That
 * handle 404s — the channel was never created — so the href is gone rather
 * than left pointing at a dead page or dressed up as "pending". Nothing here
 * links anywhere that does not work: the audio tiles open each platform's own
 * SEARCH for "Off Ratio", and the YouTube tile has no link at all.
 *
 * To restore it: put the href back on the YouTube entry in content.ts once the
 * channel is real. Do not invent a handle.
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
      <span className="stamp text-sm tracking-[0.4em] text-acid">{tuneIn.sub}</span>
      <p className="mt-1 max-w-md text-sm leading-relaxed text-bone/60">
        {tuneIn.caveat}
      </p>
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
          <PlatformShell href={p.href}>
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
          </PlatformShell>
        </motion.li>
      ))}
    </ul>
  );
}

/** A tile is only a link when it has a destination that actually resolves. */
function PlatformShell({
  href,
  children,
}: {
  href: string | null;
  children: React.ReactNode;
}) {
  const base =
    "sign-panel group flex h-full flex-col gap-2 border-2 p-5 transition-colors";
  if (!href) {
    return <div className={`${base} border-bone/10 bg-char/50`}>{children}</div>;
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} border-acid/30 bg-char/90 hover:border-acid focus-visible:border-acid`}
    >
      {children}
    </a>
  );
}
