import { Radio } from "lucide-react";
import type { ReactNode } from "react";

const SEAL_CLIP =
  "polygon(50% 100%, 18% 93%, 6% 74%, 4% 50%, 6% 26%, 18% 7%, 50% 0%, 82% 7%, 94% 26%, 96% 50%, 94% 74%, 82% 93%)";

/** A stamped wax-seal medallion — the brand's recurring emblem, used on
 * buttons and as a standalone accent. Purely decorative (aria-hidden). */
export default function Seal({
  size = 36,
  className = "",
  icon,
}: {
  size?: number;
  className?: string;
  icon?: ReactNode;
}) {
  return (
    <span
      aria-hidden="true"
      className={`flex flex-shrink-0 items-center justify-center border-2 border-brass shadow-lg shadow-black/50 ${className}`}
      style={{
        width: size,
        height: size,
        clipPath: SEAL_CLIP,
        background: "radial-gradient(circle at 35% 28%, #8f1c2e, #4a0e18 75%)",
      }}
    >
      {icon ?? <Radio size={size * 0.42} className="text-brass" />}
    </span>
  );
}
