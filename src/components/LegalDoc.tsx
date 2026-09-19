import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHeader from "@/components/PageHeader";

export default function LegalDoc({
  kicker,
  title,
  effectiveDate,
  sections,
}: {
  kicker: string;
  title: string;
  effectiveDate: string;
  sections: { heading: string; body: string }[];
}) {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <PageHeader kicker={kicker} title={title} subtitle={`Effective ${effectiveDate}`} />

        <section className="bg-char py-20 sm:py-28">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <div className="space-y-10">
              {sections.map((s) => (
                <div key={s.heading}>
                  <h2 className="mb-3 font-display text-2xl tracking-wide text-amber">
                    {s.heading}
                  </h2>
                  {s.body.split("\n\n").map((p, i) => (
                    <p key={i} className="mb-3 leading-relaxed text-bone/75 last:mb-0">
                      {p}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            <p className="stamp mt-14 border-t border-brass/15 pt-6 text-xs text-bone/40">
              This is a starting template, not legal advice. Have a qualified attorney review
              before relying on it.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
