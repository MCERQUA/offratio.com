"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Radio } from "lucide-react";
import { nav } from "@/lib/content";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
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
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-brass/15 bg-void md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="stamp py-3 text-sm text-bone/80 hover:text-amber"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
