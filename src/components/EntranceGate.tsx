"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Lock, Volume2, VolumeX, ArrowRight } from "lucide-react";
import { gate } from "@/lib/content";

const STORAGE_KEY = "offratio-unlocked";

function playUnlockTone() {
  try {
    const Ctx = window.AudioContext || (window as any).webkitAudioContext;
    if (!Ctx) return;
    const ctx = new Ctx();
    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();
    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(90, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(40, ctx.currentTime + 0.4);
    gainNode.gain.setValueAtTime(0.18, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);
    osc.connect(gainNode);
    gainNode.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.5);
    osc.onended = () => ctx.close();
  } catch {
    // Web Audio unavailable — silently skip, unlock still works.
  }
}

export default function EntranceGate({ children }: { children: React.ReactNode }) {
  // `unlocked` starts false identically on server and client so hydration
  // never mismatches. Real content below is ALWAYS rendered and ALWAYS
  // reachable — the overlay is a decorative visual layer only, never an
  // aria-hidden/inert trap, so keyboard and screen-reader users are never
  // blocked even if they ignore the gate entirely.
  const [unlocked, setUnlocked] = useState(false);
  const [password, setPassword] = useState("");
  const [soundOn, setSoundOn] = useState(false);
  const [announce, setAnnounce] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY) === "1") {
        setUnlocked(true);
        return;
      }
    } catch {
      // localStorage unavailable — gate still fully functional, just re-shows each visit.
    }
    inputRef.current?.focus();
  }, []);

  function unlock() {
    if (soundOn) playUnlockTone();
    setAnnounce("Access granted. Welcome to OffRatio.");
    setUnlocked(true);
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // ignore
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    unlock();
  }

  return (
    <>
      {/* No-JS visitors never see the gate at all — content below is
          always in the DOM and this is the only thing that would ever
          hide it, so disabling JS is itself a full bypass. */}
      <noscript>
        <style>{`#offratio-gate{display:none !important}`}</style>
      </noscript>

      <div aria-live="polite" className="sr-only">
        {announce}
      </div>

      <AnimatePresence>
        {!unlocked && (
          <motion.div
            key="gate"
            id="offratio-gate"
            role="dialog"
            aria-label={gate.ariaLabel}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: reduceMotion ? 1 : 1.04 }}
            transition={{ duration: reduceMotion ? 0.01 : 0.7, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-void"
          >
            <div className="absolute inset-0">
              <img
                src="/images/vault-door.jpg"
                alt=""
                className="h-full w-full object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-void/80 via-void/90 to-void" />
            </div>

            <motion.div
              animate={
                reduceMotion
                  ? {}
                  : { opacity: [0.15, 0.3, 0.15], scale: [1, 1.15, 1] }
              }
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-24 left-1/3 h-96 w-96 rounded-full bg-oxblood/30 blur-[120px]"
            />

            <button
              type="button"
              onClick={() => setSoundOn((s) => !s)}
              className="absolute right-5 top-5 z-10 flex items-center gap-2 rounded-full border border-brass/30 bg-black/40 px-3 py-2 text-xs text-brass/80 backdrop-blur-md transition-colors hover:border-brass hover:text-brass cursor-pointer"
              aria-pressed={soundOn}
            >
              {soundOn ? <Volume2 size={14} /> : <VolumeX size={14} />}
              <span className="stamp text-[10px]">SOUND {soundOn ? "ON" : "OFF"}</span>
            </button>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative z-10 mx-4 w-full max-w-md rounded-2xl border border-brass/25 bg-char/70 p-8 text-center shadow-2xl shadow-black/60 backdrop-blur-xl sm:p-10"
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-brass/40 bg-oxblood/20">
                <Lock className="text-brass" size={22} />
              </div>

              <p className="stamp mb-2 text-xs text-oxblood-light">{gate.eyebrow}</p>
              <h1 className="mb-6 font-display text-3xl tracking-wide text-bone sm:text-4xl">
                {gate.title}
              </h1>

              <form onSubmit={handleSubmit} className="space-y-4">
                <label htmlFor="offratio-password" className="sr-only">
                  Password (anything works)
                </label>
                <input
                  ref={inputRef}
                  id="offratio-password"
                  type="password"
                  autoComplete="off"
                  aria-label={gate.passwordAriaLabel}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={gate.passwordPlaceholder}
                  className="w-full rounded-lg border border-brass/30 bg-void/70 px-4 py-3 text-center tracking-[0.15em] text-bone placeholder:text-bone/30 focus:border-amber focus:outline-none"
                />
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  aria-label={gate.buttonAriaLabel}
                  className="group flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-oxblood to-oxblood-dark px-6 py-3 font-display text-lg tracking-widest text-bone shadow-lg shadow-oxblood/30 transition-all hover:shadow-oxblood/50 cursor-pointer"
                >
                  {gate.buttonLabel}
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </motion.button>
              </form>

              <button
                type="button"
                onClick={unlock}
                className="mt-5 text-sm text-bone/50 underline decoration-brass/40 underline-offset-4 transition-colors hover:text-amber cursor-pointer"
              >
                {gate.skipLabel}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {children}
    </>
  );
}
