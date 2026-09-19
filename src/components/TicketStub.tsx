import type { LucideIcon } from "lucide-react";

/** A raffle-ticket-stub tile with a diagonal ink-stamp — replaces the
 * generic rounded-pill "coming soon" badge. `stubBg` must match the section
 * background so the punch-out notches read as cut through the card. */
export default function TicketStub({
  icon: Icon,
  label,
  stubBg,
}: {
  icon: LucideIcon;
  label: string;
  stubBg: string;
}) {
  return (
    <div
      className="ticket-stub relative flex items-center justify-between overflow-hidden border border-brass/25 bg-char px-6 py-5"
      style={{ "--stub-bg": stubBg } as React.CSSProperties}
    >
      <div className="flex items-center gap-3">
        <Icon className="text-brass" size={20} />
        <span className="font-display text-lg tracking-wide text-bone">{label}</span>
      </div>

      <span
        className="stamp -rotate-12 border-2 border-oxblood-light/70 px-2 py-0.5 text-[10px] text-oxblood-light"
        style={{ letterSpacing: "0.12em" }}
      >
        Coming Soon
      </span>
    </div>
  );
}
