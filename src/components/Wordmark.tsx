import { brand } from "@/lib/content";

/**
 * The OFFRATIO lockup, rebuilt as live type + inline SVG rather than shipping
 * the reference collage as a flat image: it stays crisp at any size, reads to
 * screen readers as text, and the mountain ridge can sit *behind* the letters
 * the way it does in the artwork.
 *
 * "OFF" bone, "RATIO" acid — the split is the brand's whole signature, so it is
 * expressed as two spans, not a gradient.
 */
export function Wordmark({
  size = "lg",
  withRidge = true,
  className = "",
}: {
  size?: "sm" | "md" | "lg" | "xl";
  withRidge?: boolean;
  className?: string;
}) {
  const scale = {
    sm: "text-2xl sm:text-3xl",
    md: "text-4xl sm:text-5xl",
    lg: "text-6xl sm:text-7xl lg:text-8xl",
    xl: "text-7xl sm:text-8xl lg:text-9xl",
  }[size];

  /*
   * Ridge and wordmark are stacked in NORMAL FLOW, with the text pulled up by a
   * fixed rem overlap.
   *
   * The first cut positioned the ridge absolutely at `-top-[0.55em]`. That em
   * resolves against the SVG's OWN inherited font-size (16px), not against the
   * 96px display text it was supposed to sit above — so the ridge landed inside
   * the letterforms and only a few peaks poked out, reading as a render glitch
   * rather than a mountain range. Flow layout removes the dependency entirely.
   */
  const overlap = {
    sm: "-mt-[0.35rem]",
    md: "-mt-2",
    lg: "-mt-4 sm:-mt-5",
    xl: "-mt-5 sm:-mt-6",
  }[size];

  return (
    <div className={`inline-flex flex-col items-center ${className}`}>
      {withRidge && <RidgeMark size={size} />}
      <span
        className={`relative block font-display leading-[0.85] tracking-tight ${scale} ${
          withRidge ? overlap : ""
        }`}
      >
        <span className="stroke-hard text-bone">{brand.wordmarkA}</span>
        <span className="stroke-hard text-acid">{brand.wordmarkB}</span>
      </span>
    </div>
  );
}

/** Lime mountain ridge, as in the reference. Peaks clear the wordmark; the
 *  base is overlapped by the letters via the `overlap` margin above. */
function RidgeMark({ size }: { size: "sm" | "md" | "lg" | "xl" }) {
  const h = { sm: "h-3", md: "h-5", lg: "h-9 sm:h-11", xl: "h-11 sm:h-14" }[size];
  const w = { sm: "w-[78%]", md: "w-[80%]", lg: "w-[82%]", xl: "w-[82%]" }[size];
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 320 60"
      preserveAspectRatio="none"
      className={`${h} ${w} shrink-0`}
    >
      <path
        d="M0 60 L38 26 L58 42 L92 6 L124 44 L148 28 L178 54 L208 12 L236 44 L262 26 L292 52 L320 32 L320 60 Z"
        fill="#d3fa03"
      />
      {/* snow/shadow facets, as on the reference's ridge */}
      <path d="M92 6 L106 22 L78 22 Z M208 12 L221 27 L195 27 Z" fill="#0a0a08" opacity="0.4" />
    </svg>
  );
}

/** Spray-foam gun drawn as a microphone — the show's icon motif. */
export function GunMic({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 64 96"
      className={className}
      fill="none"
    >
      {/* mic head / gun nozzle guard */}
      <rect x="20" y="6" width="24" height="38" rx="12" fill="#d3fa03" />
      <g stroke="#0a0a08" strokeWidth="2.5" opacity="0.55">
        <line x1="21" y1="16" x2="43" y2="16" />
        <line x1="21" y1="25" x2="43" y2="25" />
        <line x1="21" y1="34" x2="43" y2="34" />
      </g>
      {/* body */}
      <path d="M14 46 h36 a4 4 0 0 1 4 4 v6 a4 4 0 0 1 -4 4 h-36 a4 4 0 0 1 -4 -4 v-6 a4 4 0 0 1 4 -4 z" fill="#f2ece0" />
      {/* trigger grip */}
      <path d="M26 60 h14 l-3 22 a6 6 0 0 1 -12 0 z" fill="#f2ece0" />
      <path d="M40 66 q12 4 10 16" stroke="#d3fa03" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}
