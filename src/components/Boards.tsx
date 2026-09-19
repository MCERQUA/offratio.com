"use client";

import { motion } from "framer-motion";
import { noAccountability, topSecret, brand } from "@/lib/content";

/**
 * The two checklist boards from the reference collage, rebuilt as real markup.
 *
 * Both are generated in CSS over a BLANK photographic texture — the sign and
 * clipboard images are deliberately generated with no writing on them, because
 * image generators hallucinate garbled lettering. All words here are live text:
 * selectable, translatable, and legible at any zoom.
 */

function CheckRow({ label, i, tone }: { label: string; i: number; tone: "acid" | "alarm" }) {
  return (
    <motion.li
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.07 }}
      className="flex items-start gap-3"
    >
      <span
        aria-hidden="true"
        className={`mt-[3px] grid h-5 w-5 flex-shrink-0 place-items-center border-2 ${
          tone === "acid" ? "border-ink/70" : "border-ink/70"
        }`}
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4 -rotate-6">
          <path
            d="M3 13 L9 20 L21 3"
            fill="none"
            stroke={tone === "acid" ? "#f51d1d" : "#f51d1d"}
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span className="font-display text-xl leading-tight tracking-wide sm:text-2xl">
        {label}
      </span>
    </motion.li>
  );
}

/** Weathered bolted road sign — "NO ACCOUNTABILITY". */
export function NoAccountabilityBoard({ className = "" }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, rotate: -3 }}
      whileInView={{ opacity: 1, y: 0, rotate: -2.2 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`relative ${className}`}
    >
      {/*
        Surface is drawn in CSS, not photographed.
        The first cut used weathered-sign-blank.jpg as the panel texture — but
        that photo contains its own sign, post and horizon, so the result was a
        sign inside a sign, complete with a stray sunset glow floating in the
        middle of the checklist. A generated photo of an object is scenery; it
        is not a surface. Same reasoning applies to the clipboard below.
      */}
      <div className="sign-panel bolted weathered relative overflow-hidden border-4 border-ink/60 bg-gradient-to-b from-sand via-[#c8b99c] to-[#a9987b] p-6 text-ink shadow-2xl shadow-black/70 sm:p-8">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.22] mix-blend-multiply"
          style={{ backgroundImage: "url('/images/grain.png')", backgroundSize: "180px 180px" }}
        />
        <div className="relative">
          <h3 className="mb-5 border-b-4 border-ink/70 pb-3 font-display text-4xl leading-[0.9] tracking-tight sm:text-5xl">
            {noAccountability.title}
          </h3>
          <ul className="space-y-3">
            {noAccountability.items.map((item, i) => (
              <CheckRow key={item} label={item} i={i} tone="acid" />
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

/** Clipboard with red TOP SECRET stamp. */
export function TopSecretBoard({ className = "" }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, rotate: 3 }}
      whileInView={{ opacity: 1, y: 0, rotate: 2.2 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`relative ${className}`}
    >
      {/* clipboard clip */}
      <div
        aria-hidden="true"
        className="absolute -top-4 left-1/2 z-20 h-8 w-24 -translate-x-1/2 rounded-sm border-2 border-ink/70 bg-gradient-to-b from-grit to-smoke shadow-lg shadow-black/60"
      />
      <div className="weathered relative overflow-hidden border-4 border-ink/60 bg-gradient-to-b from-bone to-[#ded3bd] p-6 pt-9 text-ink shadow-2xl shadow-black/70 sm:p-8 sm:pt-11">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.18] mix-blend-multiply"
          style={{ backgroundImage: "url('/images/grain.png')", backgroundSize: "180px 180px" }}
        />
        <div className="relative">
          <span className="mb-5 inline-block -rotate-3 border-[3px] border-alarm px-4 py-1 font-display text-3xl tracking-widest text-alarm sm:text-4xl">
            {topSecret.title}
          </span>
          <ul className="space-y-3">
            {topSecret.items.map((item, i) => (
              <CheckRow key={item} label={item} i={i} tone="alarm" />
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

/** Red circle-slash NDA badge. */
export function NdaBadge({ className = "" }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`flex items-center justify-center gap-5 ${className}`}
    >
      <span
        aria-hidden="true"
        className="circle-slash relative grid h-16 w-16 flex-shrink-0 place-items-center sm:h-20 sm:w-20"
      >
        <span className="slash" />
      </span>
      <span className="text-left">
        <span className="block font-display text-5xl leading-[0.85] tracking-tight text-alarm sm:text-6xl">
          {brand.nda.title}
        </span>
        <span className="stamp block text-xs text-bone/80 sm:text-sm">
          {brand.nda.sub}
        </span>
      </span>
    </motion.div>
  );
}
