// Source of truth: /config/submesh/agents/worker-c/workspace/offratio/content/copy.md

export const meta = {
  title: "OffRatio — Real Talk. No Rules. Just Send It.",
  description:
    "OffRatio is the unfiltered podcast for the spray foam industry — rig stories, industry gossip, whiskey, trucks, and zero filter. No NDAs.",
  ogTitle: "OffRatio — Real Talk. No Rules. Just Send It.",
  ogDescription:
    "The spray foam industry's best-kept secret is a podcast. Hosted by Mr. Nobody. No fact checks. No apologies. No consequences. Just good stories.",
};

export const gate = {
  eyebrow: "MEMBERS ONLY",
  title: "YOU FOUND THE DOOR.",
  passwordPlaceholder: "Any password works. Really.",
  buttonLabel: "LET ME IN",
  skipLabel: "I don't know the password, let me in anyway",
  ariaLabel:
    "Speakeasy entrance. This is a decorative password field — any entry unlocks the site. It is not a real login.",
  passwordAriaLabel:
    "Decorative password field — any entry unlocks the site, this is not a real login",
  buttonAriaLabel: "Enter OffRatio — no password required",
};

export const hero = {
  eyebrow: "A PODCAST FOR THE SPRAY FOAM INDUSTRY",
  title: "THE INDUSTRY TALKS.\nWE JUST HIT RECORD.",
  subhead:
    "OffRatio is the podcast for the people who actually run the rig — not the marketing department. Trucks, whiskey, war stories from the crawlspace, and the stuff about this industry nobody says with the camera on. Hosted by a guy who'd rather stay masked than stay quiet.",
  ctaPrimary: "Listen Now",
  ctaSecondary: "Meet Mr. Nobody",
};

export const manifesto = {
  title: "NO NDAS. NO FILTER. NO EXCEPTIONS.",
  paragraphs: [
    "Every industry has a version of the truth it tells at the trade show, and a different one it tells at 11pm in the motel parking lot after a twelve-hour pour. OffRatio is the second version. We're not here to sell you a franchise, defend a certification body, or make nice with the equipment reps. We're here to talk.",
    "No NDAs — we don't sign those. Nobody on this show is protecting a territory, a dealership, or a board seat. That means the stories get told the way they actually happened, ratio problems and all.",
    "No accountability, on purpose. Say what we want. No fact checks. No apologies. No consequences. If that makes you uncomfortable, this probably isn't your podcast — and that's fine, there are plenty of those already.",
    "This show exists because the spray foam trade is full of characters, and almost none of them get a microphone. The guys running two-man crews out of a converted trailer. The ones who bought a rig from a guy who bought it from a guy. The ones who've seen every version of \"the mix was fine, I swear\" go wrong in a hundred different ways. That's the show.",
  ],
  kicker: "Same trails. Different stories. Come for the industry gossip, stay because you've lived some version of it yourself.",
};

export const categories = [
  { name: "Trucks", desc: "Rigs, hitches, tow rants, and the eternal argument over what actually belongs in a job-site fleet." },
  { name: "Alcohol", desc: "What gets poured after the last set is cleaned out and the invoice still hasn't cleared." },
  { name: "Foam Industry", desc: "Franchise politics, certification-body drama, supplier relationships, and everything else the trade associations would rather keep off the record." },
  { name: "BS", desc: "Unfiltered opinions, industry rumors, and hot takes nobody's cleared with legal." },
  { name: "And More", desc: "Whatever else lands on the tailgate. If it's off the beaten path, it's fair game." },
];

export const episodesTeaser = {
  title: "THE MIC IS HOT. THE EPISODES ARE COMING.",
  body: "OffRatio is gearing up to launch. We're recording, not stalling — episodes are on the way, and when they drop, they'll show up right here first. No fake countdown, no vague “soon™” — just a show that's actually being built before it's being pitched.",
  themesLabel: "What to expect (themes, not episode titles):",
  themes: [
    "The real economics of running a rig — what it costs, what it's worth used, and what nobody tells you before you sign for one",
    "Franchise life vs. going independent, and why that argument never actually ends",
    "Certification politics: who sets the rules, who enforces them, and who just ignores them",
    "Weather, seasons, and the grind of a trade that stops the second the temperature does",
    "Crew culture — the characters, the road stories, and the stuff that happens between jobs",
    "Chemical suppliers, price hikes, and the relationships that keep a crew in business",
  ],
};

export const hostBio = {
  name: "MR. NOBODY",
  role: "Host",
  short: "Same stories. Different perspective. Nobody gets in trouble.",
  paragraphs: [
    "Nobody knows who's under the mask, and that's the point. Mr. Nobody has spent enough years around rigs, tanks, and job sites to have opinions about all of it — and enough sense to know that saying them out loud with his name attached would end a few relationships and probably a career.",
    "So he doesn't use his name. He uses a mask, a mic, and the kind of straight talk you only get after the client's gone home and the crew's cracking open something cold. No corporate filter, no franchise talking points, no association press release voice — just somebody who's actually been in the industry, saying what the industry actually thinks.",
    "The anonymity isn't a gimmick, it's the whole deal. Take away the name, the title, and the company logo, and what's left is just the truth as one guy in this trade sees it — unscripted, unapproved, and unbothered by who it might annoy.",
    "Mr. Nobody doesn't promise credentials, doesn't promise it's all correct, and doesn't promise you'll agree. He promises it's honest, it's off the beaten path, and it's coming from someone who's actually stood behind the gun.",
  ],
};

export type PlatformStatus = "live" | "pending" | "search";

export type Platform = {
  name: string;
  /** null when there is no destination that actually works yet. */
  href: string | null;
  /** "live" is intentionally unused today — every destination is still pending.
   *  Kept in the union so flipping one at launch is a one-word edit, not a
   *  type change. */
  status: PlatformStatus;
  note: string;
};

export const subscribe: { intro: string; outro: string; platforms: Platform[] } = {
  intro:
    "Nothing has launched yet. When it does, this is where it lands — same as the episodes.",
  outro:
    "We only link what's actually real, and right now none of it is. The audio platforms point at their own search for \"Off Ratio\" so you can find the show the moment it appears. No placeholder channel, no button that goes nowhere.",
  platforms: [
    {
      name: "YouTube",
      // No href, deliberately. The handle we were given
      // (youtube.com/@OffRatioPodcast) returns HTTP 404 while
      // youtube.com/@Google returns 200 from the same host, so the channel does
      // not exist. On a site whose whole pitch is that it is the honest one, a
      // CTA that 404s is worse than no CTA, and "pending" on a handle nobody
      // has created is a promise we cannot keep. Add the href back the day the
      // channel is real — do not invent a replacement handle.
      href: null,
      status: "pending",
      note: "The channel isn't up yet. No link until there is one that works.",
    },
    {
      name: "Apple Podcasts",
      href: "https://podcasts.apple.com/us/search?term=Off%20Ratio",
      status: "search",
      note: "Audio feed pending — this opens an Apple search for the show.",
    },
    {
      name: "Spotify",
      href: "https://open.spotify.com/search/Off%20Ratio/podcasts",
      status: "search",
      note: "Audio feed pending — this opens a Spotify search for the show.",
    },
    {
      name: "Amazon Music",
      href: "https://music.amazon.com/search/Off%20Ratio",
      status: "search",
      note: "Audio feed pending — this opens an Amazon Music search for the show.",
    },
  ],
};

/**
 * The reference artwork's TUNE IN NOW block, held as a pre-launch state.
 * There is deliberately no href: see the YouTube platform entry above.
 */
export const tuneIn = {
  label: "TUNE IN NOW",
  sub: "— SOON —",
  caveat:
    "No channel to send you to yet. The show is being recorded, not teased — when there is something to watch, the link lands here first.",
};

/** Weathered road-sign checklist, straight off the reference. */
export const noAccountability = {
  title: "NO ACCOUNTABILITY",
  items: [
    "Say What We Want",
    "No Fact Checks",
    "No Apologies",
    "No Consequences",
    "Just Good Stories",
  ],
};

/** Red-stamped clipboard, straight off the reference. */
export const topSecret = {
  title: "TOP SECRET",
  items: [
    "Rig Buybacks",
    "Industry Rumors",
    "Backdoor Deals",
    "Unedited Convos",
    "Stuff They Don't Want You To Know",
  ],
};

export const brand = {
  wordmarkA: "OFF",
  wordmarkB: "RATIO",
  kicker: "THE PODCAST",
  est: "EST. 2026",
  tagline: "REAL TALK. NO RULES. JUST SEND IT.",
  strapline: "UNSCRIPTED CONVERSATIONS FROM OFF THE BEATEN PATH.",
  nda: { title: "NDA'S", sub: "WE DON'T SIGN THOSE." },
  sameTrails: "SAME TRAILS. DIFFERENT STORIES.",
};

export const tipline = {
  title: "GOT A STORY? WE DON'T ASK QUESTIONS.",
  body: "Every good episode starts with someone who was willing to talk. If you've got a rig story, an industry rumor, a rant about the state of this trade, or just something you've been dying to say out loud — this is the drop box. Stay anonymous, use a fake name, whatever gets you talking.",
  reassurance: "Name optional, details flexible, judgment-free. We protect sources the same way we protect the host — nobody has to know it was you.",
};

export const footer = {
  tagline: "Real Talk. No Rules. Just Send It.",
  nav: ["Home", "Episodes", "About", "Subscribe", "Tip Line"],
};

export const nav = [
  { label: "Episodes", href: "/episodes" },
  { label: "About", href: "/about" },
  { label: "Subscribe", href: "/subscribe" },
  { label: "Tip Line", href: "/contact" },
];

