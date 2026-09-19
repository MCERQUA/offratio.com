"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Radio, ArrowUpRight } from "lucide-react";
import { nav } from "@/lib/content";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  // Body scroll-lock while the full-screen mobile takeover is open.
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-brass/15 bg-void/80 backdrop-blur-lg">
        <a href="#main" className="sr-skip">
          Skip to main content
        </a>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <Link href="/" className="flex items-center gap-2 font-display text-2xl tracking-widest text-bone">
            <Radio className="text-amber" size={22} />
            OFF<span className="text-oxblood-light">RATIO</span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="stamp text-xs text-bone/70 transition-colors hover:text-amber"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="rounded-md border border-brass/20 p-2 text-bone md:hidden cursor-pointer"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/*
        Rendered as a SIBLING of <header>, not a descendant. The header has
        backdrop-blur-lg (backdrop-filter), which — like transform/filter —
        establishes a containing block for `position: fixed` descendants in
        current browsers. A fixed panel nested inside it would resolve
        against the header's own ~65px box instead of the viewport, clipping
        the takeover to a sliver. Keeping it outside sidesteps that.
      */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 bottom-0 top-[65px] z-30 overflow-hidden bg-void md:hidden"
          >
            <div className="absolute inset-0">
              <img
                src="/images/dossier-texture.jpg"
                alt=""
                className="h-full w-full object-cover opacity-[0.08]"
              />
            </div>
            <nav className="relative flex h-full flex-col justify-center gap-2 px-8">
              {nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-center justify-between border-b border-brass/15 py-5 font-display text-4xl tracking-wide text-bone transition-colors hover:text-amber"
                  >
                    {item.label}
                    <ArrowUpRight
                      size={26}
                      className="text-brass/40 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-amber"
                    />
                  </Link>
                </motion.div>
              ))}
              <p className="stamp mt-10 text-xs text-bone/40">
                REAL TALK. NO RULES. JUST SEND IT.
              </p>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
