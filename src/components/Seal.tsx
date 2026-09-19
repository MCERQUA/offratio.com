import { GunMic } from "./Wordmark";

/**
 * The show's emblem: the spray-gun-as-microphone in an acid roundel. Replaces
 * the old wax-seal medallion, which read as Victorian correspondence rather
 * than a podcast about foam rigs. Decorative only.
 */
export default function Seal({
  size = 36,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={`flex flex-shrink-0 items-center justify-center rounded-full border-2 border-acid bg-void shadow-lg shadow-black/60 ${className}`}
      style={{ width: size, height: size }}
    >
      <GunMic className="h-[62%] w-[62%]" />
    </span>
  );
}
