import Link from "next/link";
import { footer, nav, legalNav, brand } from "@/lib/content";
import { Wordmark } from "./Wordmark";

export default function SiteFooter() {
  return (
    <footer className="border-t border-acid/15 bg-char">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <Wordmark size="sm" withRidge={false} />
            <p className="stamp mt-3 text-[11px] text-bone/50">{footer.tagline}</p>
            <p className="stamp mt-1 text-[10px] text-acid/60">{brand.est}</p>
            {/* The YouTube handle 404s, so the footer states the status
                instead of linking to a dead page. */}
            <p className="stamp mt-4 text-[11px] text-bone/45">
              Channels go live at launch
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/" className="text-sm text-bone/60 hover:text-acid">
              Home
            </Link>
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-bone/60 hover:text-acid">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-acid/10 pt-6 text-xs text-bone/40 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <p>&copy; {new Date().getFullYear()} OffRatio. All rights reserved.</p>
            {legalNav.map((item, i) => (
              <span key={item.href} className="flex items-center gap-x-4">
                {i === 0 && <span className="text-bone/20">|</span>}
                <Link href={item.href} className="hover:text-acid">
                  {item.label}
                </Link>
              </span>
            ))}
          </div>
          <p className="stamp">EVERYTHING ON THIS SITE IS FOR ENTERTAINMENT. NO NDAS WERE HARMED.</p>
        </div>
      </div>
    </footer>
  );
}
