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
import { StampButton } from "./StampButton";
import CaseFileCard from "./CaseFileCard";
import SeamDivider from "./SeamDivider";

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
          className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row"
        >
          <StampButton href="/episodes" variant="solid">
            <Play size={18} />
            {hero.ctaPrimary}
          </StampButton>
          <StampButton href="/about" variant="outline">
            {hero.ctaSecondary}
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </StampButton>
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
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0">
        <img src="/images/case-wall.jpg" alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-void/78" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-6 text-center">
          <p className="stamp mb-4 text-xs text-brass">WHAT'S ON THE TABLE</p>
          <h2 className="font-display text-4xl tracking-wide text-bone sm:text-5xl">
            SIX THINGS WE WON'T SHUT UP ABOUT
          </h2>
        </div>
        <SeamDivider className="mb-16" />

        <div className="grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => {
            const Icon = categoryIcons[i % categoryIcons.length];
            return <CaseFileCard key={cat.name} index={i} icon={Icon} name={cat.name} desc={cat.desc} />;
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

        <div className="torn-edge-top relative bg-parchment p-8 pt-10 text-left text-ink shadow-2xl shadow-black/60 sm:p-10 sm:pt-12">
          <span
            aria-hidden="true"
            className="absolute left-1/2 top-3 h-4 w-4 -translate-x-1/2 rounded-full border border-brass-dark shadow-md shadow-black/50"
            style={{ background: "radial-gradient(circle at 35% 30%, #e8ce9c, #8a6a3d 80%)" }}
          />
          <p className="stamp mb-5 text-xs text-oxblood">{episodesTeaser.themesLabel}</p>
          <ul className="space-y-4">
            {episodesTeaser.themes.map((theme, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex items-start gap-3 text-ink/80"
              >
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-oxblood" />
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
          className="relative aspect-square overflow-hidden border-2 border-brass/25"
        >
          <img
            src="/images/campfire-silhouettes.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-void via-void/55 to-transparent" />
          <span
            aria-hidden="true"
            className="stamp absolute bottom-4 right-4 -rotate-6 border-2 border-oxblood-light/70 bg-void/40 px-3 py-1 text-[10px] text-oxblood-light backdrop-blur-sm"
          >
            Identity Withheld
          </span>
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
      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <p className="stamp mb-4 text-xs text-amber">DON'T MISS THE DROP</p>
        <h2 className="mb-6 font-display text-4xl tracking-wide text-bone sm:text-5xl">
          SUBSCRIBE BEFORE IT'S COOL
        </h2>
        <SeamDivider className="mb-8" />
        <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-bone/75">
          {subscribe.intro}
        </p>
        <div className="mx-auto mb-12 flex max-w-2xl flex-wrap justify-center gap-x-8 gap-y-4">
          {subscribe.platforms.map((p) => (
            <span key={p} className="stamp text-xs text-bone/45">
              {p}
            </span>
          ))}
        </div>
        <StampButton href="/contact" variant="amber">
          {tipline.title}
          <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
        </StampButton>
      </div>
    </section>
  );
}
