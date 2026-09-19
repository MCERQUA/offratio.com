import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { StampButton } from "@/components/StampButton";
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
            <img src="/images/gate-door.jpg" alt="" className="h-full w-full object-cover opacity-25" />
            <div className="absolute inset-0 bg-gradient-to-b from-void/85 via-void/92 to-void" />
          </div>

          <div className="relative z-10 mx-auto max-w-xl px-5 text-center sm:px-8">
            <div className="relative inline-block">
              <p className="stamp mb-4 text-xs text-alarm-light">404 — RESTRICTED</p>
              <span
                aria-hidden="true"
                className="stamp pointer-events-none absolute -right-16 -top-6 rotate-[14deg] border-2 border-alarm-light/70 px-3 py-1 text-[10px] text-alarm-light/90 sm:-right-24"
              >
                Case Closed
              </span>
            </div>
            <h1 className="mb-6 font-display text-5xl tracking-wide text-bone sm:text-7xl">
              WRONG DOOR.
            </h1>
            <p className="mb-10 text-lg leading-relaxed text-bone/70">
              There's nothing on this side of the wall. Whoever you're looking for isn't behind
              this one — try the front entrance.
            </p>
            <StampButton href="/" variant="solid">
              <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
              BACK TO THE DOOR
            </StampButton>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
