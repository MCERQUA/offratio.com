/** A riveted-seam divider — replaces generic blurred gradient orbs as the
 * site's ambient decorative motif. */
export default function SeamDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`relative mx-auto h-px w-full max-w-xs ${className}`} aria-hidden="true">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-brass/50 to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center gap-8">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="h-1.5 w-1.5 rounded-full border border-brass-dark/60 bg-brass/70 shadow-sm shadow-black/60"
          />
        ))}
      </div>
    </div>
  );
}
