"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Truck,
  Wine,
  Wrench,
  FlaskConical,
  Flame,
  Compass,
  Play,
  ArrowRight,
  Mail,
} from "lucide-react";
import {
  hero,
  manifesto,
  categories,
  episodesTeaser,
  hostBio,
  subscribe,
  tipline,
} from "@/lib/content";

const categoryIcons = [Truck, Wine, Wrench, FlaskConical, Flame, Compass];

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/hero-desert-dusk.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-void/60 via-void/85 to-void" />
        <div className="absolute inset-0 bg-gradient-to-r from-void/75 via-void/55 to-void/75" />
      </div>

      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/4 top-1/3 h-96 w-96 rounded-full bg-oxblood/30 blur-[130px]"
      />

      <div className="relative z-10 mx-auto max-w-5xl px-5 py-32 text-center sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="stamp mb-6 text-xs text-brass sm:text-sm"
        >
          {hero.eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-glow-amber font-display text-5xl leading-[1.05] tracking-wide text-bone sm:text-7xl lg:text-8xl"
        >
          {hero.title.split("\n").map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-bone/75 sm:text-xl"
        >
          {hero.subhead}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
            <Link
              href="/episodes"
              className="group flex items-center gap-2 rounded-lg bg-gradient-to-r from-oxblood to-oxblood-dark px-8 py-4 font-display text-lg tracking-wider text-bone shadow-2xl shadow-oxblood/40 transition-shadow hover:shadow-oxblood/60"
            >
              <Play size={18} />
              {hero.ctaPrimary}
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
            <Link
              href="/about"
              className="group flex items-center gap-2 rounded-lg border-2 border-brass/40 bg-black/20 px-8 py-4 font-display text-lg tracking-wider text-bone backdrop-blur-md transition-colors hover:border-brass"
            >
              {hero.ctaSecondary}
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export function Manifesto() {
  return (
    <section className="relative overflow-hidden bg-bone py-24 text-ink sm:py-32">
      <div className="absolute inset-0 opacity-[0.06]">
        <img src="/images/dossier-texture.jpg" alt="" className="h-full w-full object-cover" />
      </div>
      <div className="relative mx-auto max-w-4xl px-5 sm:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="stamp mb-4 text-xs text-oxblood"
        >
          CLASSIFIED — MANIFESTO
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 font-display text-4xl tracking-wide sm:text-5xl"
        >
          {manifesto.title}
        </motion.h2>
        <div className="space-y-6 text-lg leading-relaxed text-ink/80">
          {manifesto.paragraphs.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              {p}
            </motion.p>
          ))}
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="stamp mt-10 border-t border-ink/15 pt-6 text-sm text-oxblood"
        >
          {manifesto.kicker}
        </motion.p>
      </div>
    </section>
  );
}

export function Categories() {
  return (
    <section className="relative bg-char py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-16 text-center">
          <p className="stamp mb-4 text-xs text-brass">WHAT'S ON THE TABLE</p>
          <h2 className="font-display text-4xl tracking-wide text-bone sm:text-5xl">
            SIX THINGS WE WON'T SHUT UP ABOUT
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => {
            const Icon = categoryIcons[i % categoryIcons.length];
            return (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-brass/15 bg-gradient-to-br from-smoke to-void p-8 shadow-lg shadow-black/30"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl border border-brass/25 bg-oxblood/15 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <Icon className="text-amber" size={24} />
                </div>
                <h3 className="mb-2 font-display text-2xl tracking-wide text-bone">{cat.name}</h3>
                <p className="text-sm leading-relaxed text-bone/65">{cat.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const moodImages = [
  { src: "/images/whiskey-glass.jpg", alt: "" },
  { src: "/images/tire-tread-mud.jpg", alt: "" },
  { src: "/images/campfire-embers.jpg", alt: "" },
];

export function MoodStrip() {
  return (
    <section className="relative grid grid-cols-1 gap-1 sm:grid-cols-3">
      {moodImages.map((img, i) => (
        <motion.div
          key={img.src}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="group relative h-56 overflow-hidden sm:h-72"
        >
          <img
            src={img.src}
            alt={img.alt}
            className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-oxblood-dark/40 mix-blend-multiply" />
        </motion.div>
      ))}
    </section>
  );
}

export function EpisodesTeaser() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0">
        <img
          src="/images/leather-smoke-texture.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-oxblood-dark/90 via-void/95 to-void" />
      </div>

      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <p className="stamp mb-4 text-xs text-amber">EPISODES</p>
        <h2 className="mb-6 font-display text-4xl tracking-wide text-bone sm:text-5xl">
          {episodesTeaser.title}
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-bone/75">
          {episodesTeaser.body}
        </p>

        <div className="rounded-2xl border border-brass/20 bg-black/30 p-8 text-left backdrop-blur-md sm:p-10">
          <p className="stamp mb-5 text-xs text-brass">{episodesTeaser.themesLabel}</p>
          <ul className="space-y-4">
            {episodesTeaser.themes.map((theme, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex items-start gap-3 text-bone/80"
              >
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber" />
                <span>{theme}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function HostTeaser() {
  return (
    <section className="relative overflow-hidden bg-void py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative aspect-square overflow-hidden rounded-2xl border border-brass/20"
        >
          <img
            src="/images/campfire-silhouettes.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-void via-void/55 to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="stamp mb-4 text-xs text-brass">THE HOST</p>
          <h2 className="mb-6 font-display text-4xl tracking-wide text-bone sm:text-5xl">
            {hostBio.name}
          </h2>
          <p className="mb-6 text-lg text-amber">{hostBio.short}</p>
          <p className="mb-8 leading-relaxed text-bone/75">{hostBio.paragraphs[0]}</p>
          <Link
            href="/about"
            className="group inline-flex items-center gap-2 font-display text-lg tracking-wider text-bone underline decoration-oxblood-light decoration-2 underline-offset-8 transition-colors hover:text-amber"
          >
            Read the full story
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export function SubscribeCta() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-oxblood-dark via-char to-void py-24 sm:py-32">
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-amber/20 blur-[140px]"
      />
      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <p className="stamp mb-4 text-xs text-amber">DON'T MISS THE DROP</p>
        <h2 className="mb-6 font-display text-4xl tracking-wide text-bone sm:text-5xl">
          SUBSCRIBE BEFORE IT'S COOL
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-bone/75">
          {subscribe.intro}
        </p>
        <div className="mx-auto mb-10 flex max-w-2xl flex-wrap justify-center gap-3">
          {subscribe.platforms.map((p) => (
            <span
              key={p}
              className="rounded-full border border-brass/25 bg-black/30 px-5 py-2 text-sm text-bone/60"
            >
              {p} — Coming soon
            </span>
          ))}
        </div>
        <motion.div
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="inline-block"
        >
          <Link
            href="/contact"
            className="group flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber to-brass px-8 py-4 font-display text-lg tracking-wider text-ink shadow-2xl shadow-amber/30 transition-shadow hover:shadow-amber/50"
          >
            <Mail size={18} />
            {tipline.title}
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
