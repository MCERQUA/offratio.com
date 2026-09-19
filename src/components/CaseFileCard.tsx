"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

const ROTATIONS = [-3, 2, -2.5, 3, -1.5, 2];

export default function CaseFileCard({
  index,
  icon: Icon,
  name,
  desc,
}: {
  index: number;
  icon: LucideIcon;
  name: string;
  desc: string;
}) {
  const rotate = ROTATIONS[index % ROTATIONS.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 28, rotate: 0 }}
      whileInView={{ opacity: 1, y: 0, rotate }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      whileHover={{ rotate: 0, y: -8, scale: 1.03 }}
      style={{ transformOrigin: "top center" }}
      className="torn-edge-top group relative bg-parchment px-7 pb-8 pt-10 text-ink shadow-2xl shadow-black/60"
    >
      {/* brass thumbtack pinning the card to the board */}
      <span
        aria-hidden="true"
        className="absolute left-1/2 top-2.5 h-4 w-4 -translate-x-1/2 rounded-full border border-brass-dark shadow-md shadow-black/50"
        style={{ background: "radial-gradient(circle at 35% 30%, #e8ce9c, #8a6a3d 80%)" }}
      />

      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-oxblood/25 bg-oxblood/10 transition-transform duration-300 group-hover:scale-110">
        <Icon className="text-oxblood" size={22} />
      </div>
      <h3 className="stamp mb-2 text-xl text-ink">{name}</h3>
      <p className="text-sm leading-relaxed text-ink/70">{desc}</p>
    </motion.div>
  );
}
