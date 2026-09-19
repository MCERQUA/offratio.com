"use client";

import { motion } from "framer-motion";
import { categories } from "@/lib/content";

/**
 * The stencilled category strip that runs along the bottom of the reference
 * artwork: TRUCKS / ALCOHOL / FOAM INDUSTRY / BS / AND MORE.
 *
 * The artwork also carried a CHICKS chip; Josh asked for it to be dropped
 * (2026-09-19), so it is removed from the data, not hidden in CSS. The strip is
 * five items and the grid is sized for five — a six-column grid would have left
 * a visible hole where the sixth used to be.
 *
 * Icons are hand-drawn inline SVG rather than a Lucide import. A generic icon
 * set is exactly the "fleet grammar" tell this build is meant to avoid, and
 * none of these six subjects has an honest match in a stock library anyway.
 */

const ICONS: Record<string, React.ReactNode> = {
  Trucks: (
    <>
      <path d="M2 30 v-10 h20 v-8 h10 l8 8 v10 z" />
      <circle cx="12" cy="32" r="5" />
      <circle cx="34" cy="32" r="5" />
    </>
  ),
  Alcohol: (
    <>
      <path d="M18 4 h12 v8 l6 10 v16 a2 2 0 0 1 -2 2 h-20 a2 2 0 0 1 -2 -2 v-16 l6 -10 z" />
      <line x1="12" y1="26" x2="36" y2="26" />
    </>
  ),
  "Foam Industry": (
    <>
      <rect x="10" y="4" width="14" height="20" rx="6" />
      <path d="M13 26 h8 l-2 14 a2 2 0 0 1 -4 0 z" />
      <path d="M26 16 q12 4 10 18" />
    </>
  ),
  BS: (
    <>
      {/* longhorn skull — the reference's own BS marker */}
      <path d="M24 14 a10 10 0 0 1 10 10 v6 l-10 8 l-10 -8 v-6 a10 10 0 0 1 10 -10 z" />
      <path d="M14 18 q-12 -10 -12 2 q6 2 12 0 z" />
      <path d="M34 18 q12 -10 12 2 q-6 2 -12 0 z" />
    </>
  ),
  "And More": (
    <>
      <circle cx="10" cy="24" r="3" />
      <circle cx="24" cy="24" r="3" />
      <circle cx="38" cy="24" r="3" />
    </>
  ),
};

/** Shared so SignCard renders the same glyph as the strip. */
export function categoryGlyph(name: string): React.ReactNode {
  return ICONS[name] ?? ICONS["And More"];
}

export function CategoryBar({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative border-y-2 border-acid/25 bg-void/85 ${className}`}
    >
      {/* 2-up on phones with the odd last item spanning the row, 5-up from sm.
          Five items in a 3- or 6-column grid leaves a dead cell. */}
      <ul className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-acid/15 sm:grid-cols-5 sm:divide-y-0">
        {categories.map((cat, i) => (
          <motion.li
            key={cat.name}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="group flex flex-col items-center gap-2 px-2 py-5 text-center last:col-span-2 sm:last:col-span-1"
          >
            <svg
              viewBox="0 0 48 44"
              aria-hidden="true"
              className="h-8 w-8 stroke-acid stroke-[2.5] text-acid transition-transform duration-300 group-hover:-translate-y-0.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {ICONS[cat.name]}
            </svg>
            <span className="stamp text-[10px] leading-tight text-bone/85 sm:text-xs">
              {cat.name === "And More" ? "And More…" : cat.name}
            </span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
