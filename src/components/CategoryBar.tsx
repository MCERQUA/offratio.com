"use client";

import { motion } from "framer-motion";
import { categories } from "@/lib/content";

/**
 * The stencilled category strip that runs along the bottom of the reference
 * artwork: TRUCKS / CHICKS / ALCOHOL / FOAM INDUSTRY / BS / AND MORE.
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
  Chicks: (
    <>
      {/* a heart snagged on a barbed-wire strand — road-life, not pin-up */}
      <path d="M24 34 c-9-6-14-11-14-17 a6 6 0 0 1 12-2 a6 6 0 0 1 12 2 c0 6-5 11-10 17 z" />
      <line x1="2" y1="12" x2="46" y2="12" />
      <line x1="14" y1="8" x2="18" y2="16" />
      <line x1="34" y1="8" x2="30" y2="16" />
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
      <ul className="mx-auto grid max-w-7xl grid-cols-3 divide-x divide-acid/15 sm:grid-cols-6">
        {categories.map((cat, i) => (
          <motion.li
            key={cat.name}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="group flex flex-col items-center gap-2 px-2 py-5 text-center"
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
