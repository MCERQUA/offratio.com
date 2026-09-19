import Link from "next/link";
import { Radio } from "lucide-react";
import { footer, nav, legalNav } from "@/lib/content";

export default function SiteFooter() {
  return (
    <footer className="border-t border-brass/15 bg-char">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="flex items-center gap-2 font-display text-xl tracking-widest text-bone">
              <Radio className="text-amber" size={18} />
              OFF<span className="text-oxblood-light">RATIO</span>
            </div>
            <p className="stamp mt-2 text-[11px] text-bone/50">{footer.tagline}</p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/" className="text-sm text-bone/60 hover:text-amber">
              Home
            </Link>
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-bone/60 hover:text-amber">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-brass/10 pt-6 text-xs text-bone/40 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <p>&copy; {new Date().getFullYear()} OffRatio. All rights reserved.</p>
            {legalNav.map((item, i) => (
              <span key={item.href} className="flex items-center gap-x-4">
                {i === 0 && <span className="text-bone/20">|</span>}
                <Link href={item.href} className="hover:text-amber">
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
