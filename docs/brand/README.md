# Brand reference

`REF-josh-speakeasy.png` is the promotional collage Josh sent by SMS on 2026-09-19 as
the brief for this site. **It is the source of truth for the OffRatio brand** — every
visual decision in `src/` is derived from it, and there is no other record of what was
asked for.

Tracked here, outside `public/`, so it is preserved in the repo but never published:
Next.js static export only emits `public/` plus the app routes, so nothing under `docs/`
reaches `out/`.

## What it establishes

- **Wordmark** — OFF (bone) + RATIO (acid), over a lime mountain ridge; "THE PODCAST";
  "EST. 2026". Spray-foam-gun-as-microphone is the icon motif.
- **Accent** — the signature green measured off this file is **`#d3fa03`**, a yellow-
  leaning chartreuse. The written brief approximated it as `#9FE870`, which reads minty
  next to the artwork; the sampled value is the correct one and is what
  `tailwind.config.ts` uses.
- **Supporting colour** — alarm red `#f51d1d` (TOP SECRET stamp, NDA slash, TUNE IN NOW),
  desert sunset orange, warm near-blacks. **No cool hue appears anywhere in the artwork**,
  which is why the palette defines none.
- **Furniture** — NO ACCOUNTABILITY road sign, TOP SECRET clipboard, NDA circle-slash,
  the six-category strip (TRUCKS / CHICKS / ALCOHOL / FOAM INDUSTRY / BS / AND MORE…),
  Mr Nobody in a balaclava, campfire + offroad rigs + saguaro at night.

## Why this file is in the repo at all

An earlier build of this site was made with this image already downloaded and on disk,
and did not match it — it shipped a prohibition-noir look instead (that direction is
preserved under the tag `noir-direction-2026-09-19`). Anyone changing the visual design
should open this image first and compare, not work from a text description of it.

Byte-identical copy also at
`/config/submesh/agents/worker-c/workspace/offratio/refs/sms-02ba8b2e.png`
(md5 `dfe6530b379b37d20a172837c876c2a3`).
