"use client";

import { motion } from "framer-motion";
import { categoryGlyph } from "./CategoryBar";

const ROTATIONS = [-1.6, 1.2, -1.1, 1.5, -0.8, 1.1];

/**
 * A bolted metal sign panel. Replaces the previous torn-parchment "case file"
 * card, which belonged to a detective-noir language this brand does not use.
 * Sign panels are the reference's own vocabulary — the NO ACCOUNTABILITY board
 * is the same object at a larger size, so the page reads as one world.
 */
export default function SignCard({
  index,
  name,
  desc,
}: {
  index: number;
  name: string;
  desc: string;
}) {
  const rotate = ROTATIONS[index % ROTATIONS.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, rotate: 0 }}
      whileInView={{ opacity: 1, y: 0, rotate }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.07, duration: 0.5 }}
      whileHover={{ rotate: 0, y: -6 }}
      className="sign-panel bolted weathered group relative overflow-hidden border-2 border-acid/25 bg-char px-7 pb-7 pt-10 shadow-2xl shadow-black/60 transition-colors hover:border-acid/60"
    >
      <div className="mb-4">
        <svg
          viewBox="0 0 48 44"
          aria-hidden="true"
          className="h-10 w-10 stroke-acid stroke-[2.5] transition-transform duration-300 group-hover:-translate-y-1"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {categoryGlyph(name)}
        </svg>
      </div>
      <h3 className="mb-2 font-display text-3xl leading-none tracking-wide text-bone group-hover:text-acid">
        {name}
      </h3>
      <p className="text-sm leading-relaxed text-bone/65">{desc}</p>
    </motion.div>
  );
}
