import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHeader from "@/components/PageHeader";
import TipLineForm from "@/components/TipLineForm";
import { tipline } from "@/lib/content";

export const metadata: Metadata = {
  title: "Tip Line — OffRatio",
  description: "Got a story? Send OffRatio a tip. Anonymous, judgment-free, no questions asked.",
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <PageHeader kicker="TIP LINE" title={tipline.title} subtitle={tipline.body} />

        <section className="bg-char py-20 sm:py-28">
          <div className="mx-auto max-w-xl px-5 sm:px-8">
            <TipLineForm />
            <p className="stamp mt-6 text-center text-xs text-bone/40">
              {tipline.reassurance}
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
