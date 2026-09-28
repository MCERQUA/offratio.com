"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  hero,
  manifesto,
  categories,
  episodesTeaser,
  hostBio,
  subscribe,
  tipline,
  brand,
} from "@/lib/content";
import { StampButton } from "./StampButton";
import SignCard from "./SignCard";
import SeamDivider from "./SeamDivider";
import { Wordmark } from "./Wordmark";
import { NoAccountabilityBoard, TopSecretBoard, NdaBadge } from "./Boards";
import { CategoryBar } from "./CategoryBar";
import { TuneInCta, PlatformRow } from "./TuneIn";

/**
 * Hero is the reference collage translated into layout: the wordmark lockup
 * over a desert-night plate, the tagline under it, the masked host holding the
 * left edge, and the two checklist boards flanking. Built as real type and
 * real components — the artwork is the source, not the asset.
 */
export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/desert-night-rigs.jpg"
          alt=""
          className="h-full w-full object-cover object-center"
        />
        {/* Warm, never blue. Sunset band low, deep char at the top. */}
        <div className="absolute inset-0 bg-gradient-to-b from-void/85 via-void/55 to-void" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-void via-sunset-deep/15 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-24 sm:px-8 sm:py-28">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Wordmark size="lg" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="stamp mt-3 text-xs tracking-[0.42em] text-bone/85 sm:text-base"
          >
            {brand.kicker}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-5 font-display text-2xl leading-tight tracking-wide text-acid sm:text-4xl"
          >
            {brand.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 h-px w-40 bg-gradient-to-r from-transparent via-acid to-transparent"
          />

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-8 max-w-2xl text-base leading-relaxed text-bone/75 sm:text-lg"
          >
            {hero.subhead}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="mt-10 flex flex-col items-center gap-5 sm:flex-row"
          >
            <StampButton href="/episodes" variant="solid">
              {hero.ctaPrimary}
            </StampButton>
            <StampButton href="/about" variant="outline">
              {hero.ctaSecondary}
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </StampButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/** Category strip, directly under the hero as in the reference. */
export function CategoryStrip() {
  return <CategoryBar />;
}

/**
 * The two boards + the NDA badge. This is the section that carries most of the
 * reference's personality, so it gets the crates plate and real breathing room.
 */
export function RulesOfEngagement() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0">
        <img
          src="/images/crates-confidential.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-void/80" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <p className="stamp mb-3 text-center text-xs text-acid">THE RULES, SUCH AS THEY ARE</p>
        <h2 className="mb-14 text-center font-display text-4xl leading-tight tracking-wide text-bone sm:text-5xl">
          {brand.strapline}
        </h2>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-8">
          <NoAccountabilityBoard />
          <TopSecretBoard />
        </div>

        <NdaBadge className="mt-16" />
      </div>
    </section>
  );
}

export function Manifesto() {
  return (
    <section className="relative overflow-hidden bg-bone py-24 text-ink sm:py-32">
      {/* Tiled grain, not a scaled photograph. A single cover-sized clipboard
          at 7% opacity read as one enormous ghost object behind the text. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.28] mix-blend-multiply"
        style={{ backgroundImage: "url('/images/grain.png')", backgroundSize: "200px 200px" }}
      />
      <div className="relative mx-auto max-w-4xl px-5 sm:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="stamp mb-4 text-xs text-alarm"
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
          className="stamp mt-10 border-t-2 border-alarm/30 pt-6 text-sm text-alarm"
        >
          {manifesto.kicker}
        </motion.p>
      </div>
    </section>
  );
}

export function Categories() {
  return (
    <section className="relative overflow-hidden bg-char py-24 sm:py-32">
      <div className="absolute inset-0 opacity-25">
        <img src="/images/tire-tread-mud.jpg" alt="" className="h-full w-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-void/70" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-6 text-center">
          <p className="stamp mb-4 text-xs text-acid">WHAT'S ON THE TABLE</p>
          <h2 className="font-display text-4xl tracking-wide text-bone sm:text-5xl">
            FIVE THINGS WE WON'T SHUT UP ABOUT
          </h2>
        </div>
        <SeamDivider className="mb-16" />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <SignCard key={cat.name} index={i} name={cat.name} desc={cat.desc} />
          ))}
        </div>
      </div>
    </section>
  );
}

const moodImages = [
  { src: "/images/bottle-on-crate.jpg", alt: "" },
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
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-void/45 transition-opacity duration-500 group-hover:opacity-20" />
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
          src="/images/campfire-silhouettes.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-void/90 via-void/95 to-void" />
      </div>

      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <p className="stamp mb-4 text-xs text-acid">EPISODES</p>
        <h2 className="mb-6 font-display text-4xl tracking-wide text-bone sm:text-5xl">
          {episodesTeaser.title}
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-bone/75">
          {episodesTeaser.body}
        </p>

        <div className="relative mx-auto mb-14 aspect-[4/3] max-w-2xl overflow-hidden border-2 border-acid/30 shadow-2xl shadow-black/70">
          <img
            src="/images/mic-on-boom.jpg"
            alt="A podcast microphone in a shock mount behind a pop filter, on a boom arm clamped to a scarred wooden desk in a dark brick studio."
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-void/60 via-transparent to-transparent" />
        </div>

        <div className="relative bg-bone p-8 pt-12 text-left text-ink shadow-2xl shadow-black/70 sm:p-10 sm:pt-14">
          <span aria-hidden="true" className="tape-strip -top-3 left-8 w-36 -rotate-3" />
          <span aria-hidden="true" className="tape-strip -top-3 right-8 w-36 rotate-2" />
          <p className="stamp mb-5 text-xs text-alarm">{episodesTeaser.themesLabel}</p>
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
                <span className="mt-[9px] h-2 w-2 flex-shrink-0 rotate-45 bg-acid-dim" />
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
          className="relative aspect-square overflow-hidden border-2 border-acid/30"
        >
          <img
            src="/images/mr-nobody.jpg"
            alt="The host of OffRatio, photographed in a black balaclava and dark glasses at a studio microphone. His identity is deliberately concealed."
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-void via-void/35 to-transparent" />
          <span
            aria-hidden="true"
            className="stamp absolute bottom-4 right-4 -rotate-6 border-2 border-alarm px-3 py-1 text-[10px] text-alarm backdrop-blur-sm"
          >
            Identity Withheld
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="stamp mb-4 text-xs text-acid">THE HOST</p>
          <h2 className="mb-2 font-display text-5xl leading-[0.9] tracking-tight text-bone sm:text-6xl">
            {hostBio.name}
          </h2>
          <p className="stamp mb-6 text-xs text-acid/70">{hostBio.role}</p>
          <p className="mb-6 font-display text-2xl leading-tight tracking-wide text-acid">
            {hostBio.short}
          </p>
          <p className="mb-8 leading-relaxed text-bone/75">{hostBio.paragraphs[0]}</p>
          <Link
            href="/about"
            className="group inline-flex items-center gap-2 font-display text-lg tracking-wider text-bone underline decoration-acid decoration-2 underline-offset-8 transition-colors hover:text-acid"
          >
            Read the full story
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/** Closing CTA: the reference's TUNE IN NOW block, plus the honest platform row. */
export function SubscribeCta() {
  return (
    <section className="relative overflow-hidden bg-char py-24 sm:py-32">
      <div className="absolute inset-0 opacity-30">
        <img src="/images/hero-desert-dusk.jpg" alt="" className="h-full w-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-void via-void/85 to-void" />

      <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-8">
        <p className="stamp mb-4 text-xs text-acid">{brand.sameTrails}</p>
        <h2 className="mb-6 font-display text-4xl tracking-wide text-bone sm:text-5xl">
          SUBSCRIBE BEFORE IT'S COOL
        </h2>
        <SeamDivider className="mb-8" />
        <p className="mx-auto mb-12 max-w-xl text-lg leading-relaxed text-bone/75">
          {subscribe.intro}
        </p>

        <TuneInCta className="mb-14" />

        <PlatformRow className="mb-8 text-left" />

        <p className="mx-auto mb-12 max-w-2xl text-sm leading-relaxed text-bone/50">
          {subscribe.outro}
        </p>

        <StampButton href="/contact" variant="acid">
          {tipline.title}
          <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
        </StampButton>
      </div>
    </section>
  );
}
