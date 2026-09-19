"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

const base =
  "cut-btn group relative inline-flex items-center gap-3 px-8 py-4 font-display text-lg tracking-widest transition-all cursor-pointer disabled:cursor-not-allowed disabled:opacity-60";

const variants = {
  /* Primary: solid acid on ink. The signature colour does the work — no gradient. */
  solid: "bg-acid text-ink shadow-lg shadow-black/50 hover:bg-acid-light",
  /* Secondary: hairline acid keyline on the night plate. */
  outline: "border-2 border-acid/45 bg-void/50 text-bone hover:border-acid hover:text-acid",
  /* Alarm: for the loudest single CTA on a page. */
  acid: "bg-alarm text-bone shadow-lg shadow-black/50 hover:bg-alarm-light",
};

type Variant = keyof typeof variants;

/*
 * The emblem sits INSIDE the padding box. It used to be absolutely positioned
 * at -left-4 so it overhung the edge — but `base` carries `cut-btn`, a
 * clip-path, and a clip-path clips absolutely-positioned descendants too. The
 * overhanging half of the medallion was being sliced off, which read as a
 * rendering glitch rather than a design.
 */
function Inner({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

export function StampButton({
  href,
  onClick,
  type = "button",
  variant = "solid",
  disabled,
  className = "",
  ariaLabel,
  children,
}: {
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: Variant;
  disabled?: boolean;
  className?: string;
  ariaLabel?: string;
  children: ReactNode;
}) {
  const cls = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <motion.span whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-block">
        <Link href={href} className={cls} aria-label={ariaLabel}>
          <Inner>{children}</Inner>
        </Link>
      </motion.span>
    );
  }

  return (
    <motion.button
      whileHover={disabled ? undefined : { scale: 1.03 }}
      whileTap={disabled ? undefined : { scale: 0.97 }}
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={cls}
    >
      <Inner>{children}</Inner>
    </motion.button>
  );
}
