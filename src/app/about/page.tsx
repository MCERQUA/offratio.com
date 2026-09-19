import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHeader from "@/components/PageHeader";
import { NoAccountabilityBoard, NdaBadge } from "@/components/Boards";
import { hostBio, brand } from "@/lib/content";

export const metadata: Metadata = {
  title: "About — Mr. Nobody | OffRatio",
  description:
    "Meet Mr. Nobody, the masked host of OffRatio — the spray foam industry's off-the-record podcast.",
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <PageHeader kicker="THE HOST" title={hostBio.name} subtitle={hostBio.short} />

        {/* Portrait first: the mask IS the premise, so it leads the page. */}
        <section className="relative overflow-hidden bg-void py-16 sm:py-20">
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-5 sm:px-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]">
            <div className="relative aspect-[4/5] overflow-hidden border-2 border-acid/30">
              <img
                src="/images/mr-nobody.jpg"
                alt="The host of OffRatio in a black balaclava and dark glasses at a studio microphone, lit from one side. His identity is deliberately concealed."
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent" />
              <span
                aria-hidden="true"
                className="stamp absolute bottom-4 left-4 -rotate-3 border-2 border-alarm px-3 py-1 text-[10px] text-alarm"
              >
                Identity Withheld
              </span>
            </div>

            <div>
              <p className="font-display text-3xl leading-tight tracking-wide text-acid sm:text-4xl">
                {brand.strapline}
              </p>
              <p className="mt-6 leading-relaxed text-bone/75">{hostBio.paragraphs[0]}</p>
              <NdaBadge className="mt-10 justify-start" />
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-bone py-20 text-ink sm:py-28">
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.26] mix-blend-multiply"
            style={{ backgroundImage: "url('/images/grain.png')", backgroundSize: "200px 200px" }}
          />
          <div className="relative mx-auto max-w-3xl px-5 sm:px-8">
            <div className="space-y-6 text-lg leading-relaxed text-ink/85">
              {hostBio.paragraphs.slice(1).map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-20 sm:py-24">
          <div className="absolute inset-0">
            <img
              src="/images/crates-confidential.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-void/85" />
          </div>
          <div className="relative mx-auto max-w-xl px-5 sm:px-8">
            <NoAccountabilityBoard />
          </div>
        </section>

        <section className="bg-void py-16 text-center sm:py-20">
          <p className="stamp text-xs text-bone/40">
            NO REAL NAME. NO CREDENTIALS ON FILE. NO EXCEPTIONS.
          </p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
