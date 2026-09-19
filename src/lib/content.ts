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

export const legalNav = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

export const privacyPolicy = {
  title: "Privacy Policy",
  effectiveDate: "September 19, 2026",
  sections: [
    {
      heading: "What This Covers",
      body: "This policy explains what OffRatio collects when you visit offratio.com or use the Tip Line, and what we do with it. OffRatio is a podcast website. We are not a data broker, we don't sell anything, and we don't run ads that track you.",
    },
    {
      heading: "What We Collect",
      body: "Tip Line submissions: if you use the form at /contact, we collect whatever you enter — an optional name, an email address, and your message. The name field is optional on purpose — you can submit anonymously or under a fake name.\n\nBasic hosting logs: our hosting provider (Netlify) automatically logs standard web request data (IP address, browser type, pages requested) for security and reliability. We don't combine this with your identity.\n\nNo accounts, no payments, no tracking cookies. This site does not require sign-up, does not process payments, and does not currently run analytics or advertising trackers. If that changes, this policy will be updated first.",
    },
    {
      heading: "How We Use It",
      body: "Tip Line submissions are used only to receive and respond to tips, story leads, and messages related to the podcast. We do not use your email to send marketing unless you separately ask us to.",
    },
    {
      heading: "Who Sees It",
      body: "Tip Line submissions go to the people who run OffRatio. We do not sell, rent, or share your information with third parties for their marketing purposes. We may disclose information if required by law.",
    },
    {
      heading: "Anonymity",
      body: "If you submit a tip without a name, we have no way to identify you and won't try. If you do include a name or identifying details in your message, we treat that as confidential source material and will not publish or attribute it without your permission.",
    },
    {
      heading: "Data Retention",
      body: "We keep Tip Line submissions as long as they're useful to the show, and delete them on request — use the Tip Line to ask.",
    },
    {
      heading: "Children's Privacy",
      body: "This site is not directed at children under 13, and we do not knowingly collect information from them.",
    },
    {
      heading: "Changes to This Policy",
      body: "We may update this policy as the site grows (for example, if we add analytics or a mailing list). Material changes will be reflected here with an updated effective date.",
    },
    {
      heading: "Contact",
      body: "Questions about this policy: use the Tip Line at offratio.com/contact.",
    },
  ],
};

export const termsOfService = {
  title: "Terms of Service",
  effectiveDate: "September 19, 2026",
  sections: [
    {
      heading: "The Short Version",
      body: "OffRatio is a podcast and entertainment website. Everything on it — the manifesto, the host persona, the opinions, the industry commentary — is commentary and entertainment, not professional, legal, financial, safety, or insurance advice. Use your own judgment.",
    },
    {
      heading: "Acceptance",
      body: "By using offratio.com, you agree to these terms. If you don't agree, don't use the site.",
    },
    {
      heading: "Content Is Opinion and Entertainment",
      body: "OffRatio's content reflects the personal opinions and stories of its host and contributors. We do not fact-check every claim, and we say so on the site — that's the format. Nothing here should be treated as verified fact, professional advice, or an official position of any company, association, or certification body mentioned. Names, companies, and specifics referenced in commentary are general and archetypal unless explicitly stated otherwise.",
    },
    {
      heading: "The Entrance Gate",
      body: "The homepage password prompt is decorative. It is not a real login, does not restrict access to anyone, and does not require or store any credential. It exists for atmosphere, not security — do not rely on it to protect anything.",
    },
    {
      heading: "Tip Line Submissions",
      body: "If you submit a tip or story through the Tip Line, you're granting OffRatio permission to review, and — at our discretion and in a form that protects your anonymity if requested — use it for the podcast. Don't submit anything you don't have the right to share, or anything defamatory, or anything you know to be false and intend to cause harm.",
    },
    {
      heading: "No Warranty",
      body: "This site and its content are provided \"as is,\" without warranties of any kind. We don't guarantee the site will be error-free, uninterrupted, or that any information on it is accurate or complete.",
    },
    {
      heading: "Limitation of Liability",
      body: "To the maximum extent permitted by law, OffRatio and its operators are not liable for any indirect, incidental, or consequential damages arising from your use of the site or reliance on its content.",
    },
    {
      heading: "Changes",
      body: "We may update these terms as the site evolves. Continued use after a change means you accept the update.",
    },
    {
      heading: "Contact",
      body: "Questions: use the Tip Line at offratio.com/contact.",
    },
  ],
};
