import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Wrong Door — OffRatio",
  description: "There's nothing here. Try the front door.",
};

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <section className="relative flex min-h-[75vh] items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img src="/images/vault-door.jpg" alt="" className="h-full w-full object-cover opacity-25" />
            <div className="absolute inset-0 bg-gradient-to-b from-void/85 via-void/92 to-void" />
          </div>

          <div className="relative z-10 mx-auto max-w-xl px-5 text-center sm:px-8">
            <p className="stamp mb-4 text-xs text-oxblood-light">404 — RESTRICTED</p>
            <h1 className="mb-6 font-display text-5xl tracking-wide text-bone sm:text-7xl">
              WRONG DOOR.
            </h1>
            <p className="mb-10 text-lg leading-relaxed text-bone/70">
              There's nothing on this side of the wall. Whoever you're looking for isn't behind
              this one — try the front entrance.
            </p>
            <Link
              href="/"
              className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-oxblood to-oxblood-dark px-8 py-4 font-display text-lg tracking-wider text-bone shadow-2xl shadow-oxblood/40 transition-shadow hover:shadow-oxblood/60"
            >
              <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
              BACK TO THE DOOR
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
