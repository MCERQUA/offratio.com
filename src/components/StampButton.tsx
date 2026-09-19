"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import Seal from "./Seal";

const base =
  "notched-btn group relative inline-flex items-center gap-3 pl-9 pr-7 py-3.5 font-display text-lg tracking-widest transition-shadow cursor-pointer disabled:cursor-not-allowed disabled:opacity-60";

const variants = {
  solid:
    "bg-gradient-to-b from-oxblood-light to-oxblood-dark text-bone border border-brass/40 shadow-lg shadow-black/40 hover:shadow-oxblood/50",
  outline:
    "border-2 border-brass/40 bg-black/25 text-bone backdrop-blur-md hover:border-brass",
  amber:
    "bg-gradient-to-b from-amber to-brass text-ink border border-ink/10 shadow-lg shadow-black/30 hover:shadow-amber/40",
};

type Variant = keyof typeof variants;

function Inner({ children }: { children: ReactNode }) {
  return (
    <>
      <Seal size={34} className="absolute -left-4 top-1/2 -translate-y-1/2" />
      {children}
    </>
  );
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
