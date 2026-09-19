import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHeader from "@/components/PageHeader";
import { hostBio } from "@/lib/content";

export const metadata: Metadata = {
  title: "About — Mr. Nobody | OffRatio",
  description: "Meet Mr. Nobody, the masked host of OffRatio — the spray foam industry's off-the-record podcast.",
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <PageHeader kicker="THE HOST" title={hostBio.name} subtitle={hostBio.short} />

        <section className="relative overflow-hidden bg-bone py-20 text-ink sm:py-28">
          <div className="absolute inset-0 opacity-[0.05]">
            <img src="/images/dossier-texture.jpg" alt="" className="h-full w-full object-cover" />
          </div>
          <div className="relative mx-auto max-w-3xl px-5 sm:px-8">
            <div className="space-y-6 text-lg leading-relaxed text-ink/85">
              {hostBio.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
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
