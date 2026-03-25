type VariantKey = "flagship" | "ecosystem" | "partner" | "editorial";

type Variant = {
  key: VariantKey;
  label: string;
  testAngle: string;
  heroEyebrow: string;
  heroTitle: string;
  heroBody: string;
  heroCards: { title: string; body: string }[];
  proofStats: { value: string; label: string }[];
  sectionIntroLabel: string;
  sectionIntroTitle: string;
  sectionIntroBody: string[];
  pillars: { title: string; body: string }[];
  flagshipTitle: string;
  flagshipBody: string;
  partnerTitle: string;
  partnerBody: string;
  partnerBullets: string[];
  audienceLabel: string;
  audienceTitle: string;
  audience: { title: string; body: string }[];
  hqTitle: string;
  hqBody: string;
  finalTitle: string;
  finalBody: string;
};

const navItems = ["About", "Events", "Partners", "Community", "Willpower HQ", "Join"];

const variants: Record<VariantKey, Variant> = {
  flagship: {
    key: "flagship",
    label: "Variant A",
    testAngle: "Flagship-first story led by Wellness House proof",
    heroEyebrow: "Flagship proof • Community • Media",
    heroTitle: "Willpower builds the rooms modern consumer brands actually want to be in.",
    heroBody:
      "We create flagship experiences, curated relationships, and media that keep founders, operators, and strategic partners close to the people shaping consumer brand growth.",
    heroCards: [
      { title: "Wellness House", body: "Premium flagship proof that makes the broader Willpower story feel real fast." },
      { title: "Curated rooms", body: "Intentional environments built for actual relationships, not trade-show badge scans." },
    ],
    proofStats: [
      { value: "30+", label: "events hosted" },
      { value: "4,000+", label: "attendees across the community" },
      { value: "$1M+", label: "opportunities generated" },
      { value: "200+", label: "high-caliber people in flagship rooms" },
    ],
    sectionIntroLabel: "What Willpower is",
    sectionIntroTitle: "The events are the expression. The community is the real asset.",
    sectionIntroBody: [
      "Willpower is where great consumer brands, operators, and strategic partners keep finding each other in real life.",
      "Wellness House is the clearest proof point, but the larger value is the repeated momentum: better rooms, stronger relationships, and a media layer that keeps the ecosystem moving between events.",
      "That is what makes this different from a conference series. It is an ongoing platform built around trust, access, and taste.",
    ],
    pillars: [
      { title: "Flagship events", body: "Signature experiences that set the tone, attract the right brands, and create real business-development energy." },
      { title: "Community", body: "The value compounds because the same high-quality people keep showing up, connecting, and building together." },
      { title: "Media", body: "Willpower HQ extends the room between events with context, opportunities, and stories worth paying attention to." },
    ],
    flagshipTitle: "Wellness House is the proof that the broader Willpower story already works.",
    flagshipBody:
      "High-caliber people. Premium setting. Strong brand energy. Conversations that actually lead somewhere. The right homepage should make Wellness House feel like the flagship expression of a bigger ecosystem — not the whole story by itself.",
    partnerTitle: "The right partners do more than sponsor an event. They join an ecosystem with real momentum.",
    partnerBody:
      "For the right partner, Willpower means repeated access to founders and operators, stronger association with premium rooms, and a cleaner business-development motion than standard event sponsorship.",
    partnerBullets: [
      "Direct access to founders, operators, and brand leaders",
      "Premium association through curated rooms and flagship events",
      "Repeated touchpoints across events and media",
      "A business-development motion stronger than standard conference sponsorship",
    ],
    audienceLabel: "Who it’s for",
    audienceTitle: "Built for the people shaping the next generation of consumer brands.",
    audience: [
      { title: "Founders", body: "Meet operators, partners, and peers who can actually move your business forward." },
      { title: "Operators", body: "Get into smarter conversations with the people shaping ecommerce, growth, brand, and retention." },
      { title: "Strategic partners", body: "Show up in a room that feels intentional, premium, and aligned with the brands you want to build with." },
      { title: "Connectors + talent", body: "Stay close to the companies, leaders, and opportunities shaping the consumer ecosystem." },
    ],
    hqTitle: "Stay close to the room with Willpower HQ.",
    hqBody:
      "Founders, operators, partners, and friends of the ecosystem get event drops, smart conversations, brand signals, and the people worth paying attention to.",
    finalTitle: "Want to be part of it?",
    finalBody:
      "Whether you want to partner, attend, or stay close to what we’re building, Willpower gives you a way into the right ecosystem.",
  },
  ecosystem: {
    key: "ecosystem",
    label: "Variant B",
    testAngle: "Community-platform framing with events as one layer",
    heroEyebrow: "Community platform • Events • Media",
    heroTitle: "Willpower is the community layer for the people building modern consumer brands.",
    heroBody:
      "We bring founders, operators, partners, and talent into the same ecosystem through curated events, strategic introductions, and media that keeps the best relationships warm between moments.",
    heroCards: [
      { title: "Community first", body: "The relationship graph matters more than any single event on the calendar." },
      { title: "Built to compound", body: "Each touchpoint should make the next one more valuable — events, content, intros, and partner relationships." },
    ],
    proofStats: [
      { value: "3", label: "core layers: events, community, media" },
      { value: "30+", label: "rooms and experiences hosted" },
      { value: "4,000+", label: "people reached in the ecosystem" },
      { value: "$1M+", label: "brand opportunity created" },
    ],
    sectionIntroLabel: "Why this matters",
    sectionIntroTitle: "The best consumer communities win because the right people keep running into each other.",
    sectionIntroBody: [
      "Willpower is designed to create repeated, high-value collisions between brands, operators, and strategic partners.",
      "The event is often how people first discover the brand. The community is why they stay engaged. The media layer keeps the whole thing alive between physical gatherings.",
      "That makes Willpower feel less like a calendar and more like an operating system for this corner of the market.",
    ],
    pillars: [
      { title: "Events", body: "Curated gatherings that make the brand tangible and pull the right people into the room." },
      { title: "Relationships", body: "Repeated trust-building across founders, operators, and partners who actually want to know each other." },
      { title: "Media", body: "An editorial layer that keeps the room active and extends the brand between events." },
    ],
    flagshipTitle: "Wellness House is the flagship proof point — not the ceiling.",
    flagshipBody:
      "This framing makes Wellness House feel powerful because it is the cleanest expression of the Willpower system: taste, people, premium setting, and momentum. But it also leaves room for Catalyst, World of Sports, and future formats.",
    partnerTitle: "Partners come in for access, but stay because the ecosystem keeps producing value.",
    partnerBody:
      "The strongest partner story is not logo placement. It is recurring access to the right people, across multiple touchpoints, with enough trust in the room to create actual business outcomes.",
    partnerBullets: [
      "Ongoing access instead of one-off visibility",
      "Premium context around the right consumer brands",
      "Multiple ways to show up across the year",
      "A cleaner long-term relationship path than event-only sponsorship",
    ],
    audienceLabel: "Who keeps this ecosystem valuable",
    audienceTitle: "The room works because the people inside it actually matter to each other.",
    audience: [
      { title: "Brand founders", body: "People building breakout companies who want better peers, better ideas, and stronger relationships." },
      { title: "Operators", body: "Leaders in growth, ecommerce, brand, retail, and retention who make the whole ecosystem more useful." },
      { title: "Platforms + agencies", body: "Strategic partners who want meaningful access to the brands they are best positioned to help." },
      { title: "Talent + media", body: "People close to the market who amplify what is happening and help shape where it goes next." },
    ],
    hqTitle: "Willpower HQ keeps the ecosystem warm between events.",
    hqBody:
      "This is where the ongoing relationship layer lives: updates, event drops, smart conversations, and the people worth knowing before everyone else does.",
    finalTitle: "Come into the ecosystem.",
    finalBody:
      "Attend, partner, or join Willpower HQ — the point is to get closer to the people and rooms shaping the next wave of consumer brands.",
  },
  partner: {
    key: "partner",
    label: "Variant C",
    testAngle: "Partner-revenue framing led by access and business outcomes",
    heroEyebrow: "Access • Relationships • Brand momentum",
    heroTitle: "For the right partner, Willpower is a better business-development engine than standard event sponsorship.",
    heroBody:
      "We put strategic partners in premium rooms with founders, operators, and modern consumer brands — then reinforce those relationships through repeat touchpoints across events, intros, and media.",
    heroCards: [
      { title: "Premium rooms", body: "The setting and curation elevate who shows up and what conversations actually happen." },
      { title: "Real repetition", body: "Value compounds when the same brands and partners keep meeting across multiple touchpoints." },
    ],
    proofStats: [
      { value: "$1M+", label: "opportunities created" },
      { value: "30+", label: "events + touchpoints hosted" },
      { value: "4,000+", label: "community reach" },
      { value: "200+", label: "high-caliber people in flagship rooms" },
    ],
    sectionIntroLabel: "Why partners care",
    sectionIntroTitle: "This is not about booth space. It is about getting into the right rooms with the right people.",
    sectionIntroBody: [
      "The typical sponsorship model gives a partner visibility. The Willpower model gives the right partner better conversations, stronger association, and more repeated access to the brands they want to work with.",
      "That is why the environment matters. Taste matters. Who else is in the room matters. The room itself is part of the product.",
      "The homepage can test whether a more partner-forward framing converts better without making the brand feel transactional.",
    ],
    pillars: [
      { title: "Access", body: "Direct proximity to founders, operators, and decision-makers in the consumer ecosystem." },
      { title: "Association", body: "Premium context that makes partner brands feel elevated rather than bolted onto an event." },
      { title: "Compounding touchpoints", body: "Events, media, and intros that keep relationships moving instead of dying after one night." },
    ],
    flagshipTitle: "Wellness House shows what the partner experience looks like at its best.",
    flagshipBody:
      "It is proof that the right environment can make a partner relationship feel valuable, premium, and worth repeating. The question this variant tests is whether leading with that value proposition increases interest from sponsors and agencies.",
    partnerTitle: "The best partners become part of the room, not just logos around it.",
    partnerBody:
      "The strongest partner story is access with taste: founders worth meeting, operators worth knowing, a setting that reflects well on everyone involved, and enough repetition to turn warm conversations into real business.",
    partnerBullets: [
      "Founder and operator access in premium contexts",
      "Brand-safe association with high-caliber rooms",
      "Touchpoints across events, newsletters, and curated intros",
      "A more strategic path than one-off conference sponsorship",
    ],
    audienceLabel: "Who partners want to reach",
    audienceTitle: "The audience is valuable because it is curated, connected, and commercially relevant.",
    audience: [
      { title: "Founders", body: "Leaders building brands with real momentum and real buying power." },
      { title: "Operators", body: "The people shaping growth, retention, ecommerce, brand, and partnerships every day." },
      { title: "Investors + connectors", body: "People who can accelerate introductions, relationships, and strategic opportunities." },
      { title: "Modern consumer brands", body: "The ecosystem partners actually want to be close to, not just marketed at." },
    ],
    hqTitle: "Willpower HQ extends the relationship layer.",
    hqBody:
      "For partners, the newsletter and media layer is part of the value. It keeps brands, operators, and ecosystem opportunities visible between events.",
    finalTitle: "Want access to the right room?",
    finalBody:
      "If you want to partner, attend, or get closer to the people building modern consumer brands, Willpower gives you a stronger way in.",
  },
  editorial: {
    key: "editorial",
    label: "Variant D",
    testAngle: "Brand-editorial framing with stronger taste and identity",
    heroEyebrow: "Culture • Taste • Consumer brands",
    heroTitle: "Willpower sits where great consumer brands, operators, and strategic partners actually want to spend time.",
    heroBody:
      "Part flagship experience, part relationship engine, part media brand — Willpower brings the right people together in a way that feels premium, intentional, and genuinely useful.",
    heroCards: [
      { title: "Taste matters", body: "The aesthetic and energy of the room are part of why the right people say yes." },
      { title: "Signal-rich", body: "The brand works because it attracts operators, founders, and partners who raise the quality of the network." },
    ],
    proofStats: [
      { value: "30+", label: "experiences hosted" },
      { value: "4,000+", label: "people across the brand orbit" },
      { value: "200+", label: "high-signal people in flagship rooms" },
      { value: "$1M+", label: "opportunity created" },
    ],
    sectionIntroLabel: "The brand",
    sectionIntroTitle: "A consumer-brand community with better taste, better rooms, and better people in them.",
    sectionIntroBody: [
      "Willpower should feel less like a standard business community and more like a trusted brand universe for people building modern consumer companies.",
      "That means the visual system matters. The copy matters. The balance between aspiration and credibility matters. The homepage can test whether a more editorial, high-taste presentation creates stronger pull.",
      "Wellness House works because it already has that energy. This variant asks what happens when the master brand claims it more directly.",
    ],
    pillars: [
      { title: "Experiences", body: "Flagship moments that feel premium, social, and commercially relevant all at once." },
      { title: "Network", body: "A trusted circle of founders, operators, partners, and talent who make the brand increasingly valuable." },
      { title: "Media layer", body: "Stories, updates, and cultural signal that keep Willpower feeling alive between events." },
    ],
    flagshipTitle: "Wellness House is the flagship mood board brought to life.",
    flagshipBody:
      "It proves the brand can create a room that feels elevated, warm, and useful at the same time. This version tests whether leaning harder into taste and identity gives the whole platform more magnetic pull.",
    partnerTitle: "Partners want to be part of a brand people actually care about.",
    partnerBody:
      "When the room has real taste and real signal, partners are not just buying attention. They are buying association, proximity, and a stronger place in the ecosystem narrative.",
    partnerBullets: [
      "Premium brand association with high-signal rooms",
      "Access to founders and operators who drive the market",
      "Cultural credibility alongside commercial value",
      "A stronger long-term brand story than one-off event placements",
    ],
    audienceLabel: "The mix",
    audienceTitle: "A sharper mix of people is what gives the brand its gravity.",
    audience: [
      { title: "Founders", body: "People building the brands everyone else wants to know about early." },
      { title: "Operators", body: "The leaders making real commercial decisions inside modern consumer companies." },
      { title: "Partners", body: "Platforms, agencies, and strategic collaborators who add value to the room instead of draining it." },
      { title: "Talent + creatives", body: "People who add cultural taste, energy, and future relevance to the ecosystem." },
    ],
    hqTitle: "Willpower HQ is the editorial layer of the brand.",
    hqBody:
      "The newsletter should feel like a way to stay close to the signal — the people, stories, and invitations worth paying attention to.",
    finalTitle: "Want in?",
    finalBody:
      "Attend an event, partner with Willpower, or join Willpower HQ to stay close to the people and brands shaping what is next.",
  },
};

const defaultVariant: VariantKey = "flagship";

export default async function Home({
  searchParams,
}: {
  searchParams?: Promise<{ v?: string }>;
}) {
  const resolved = (await searchParams) ?? {};
  const variantKey = (resolved.v as VariantKey) in variants ? (resolved.v as VariantKey) : defaultVariant;
  const variant = variants[variantKey];

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.14),_transparent_32%),linear-gradient(180deg,#0b0b0a_0%,#11110f_45%,#171612_100%)] text-stone-100">
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-6 sm:px-10 lg:px-12">
        <header className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur">
          <div>
            <div className="text-xs uppercase tracking-[0.35em] text-amber-300/80">Willpower</div>
            <div className="text-sm text-stone-300">Community for modern consumer brands</div>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-stone-300 lg:flex">
            {navItems.map((item) => (
              <a key={item} href="#" className="transition hover:text-white">
                {item}
              </a>
            ))}
          </nav>
          <a href="#partner" className="rounded-full bg-amber-300 px-4 py-2 text-sm font-semibold text-stone-950 transition hover:bg-amber-200">
            Partner With Willpower
          </a>
        </header>

        <div className="mt-8 flex flex-wrap gap-3 text-xs uppercase tracking-[0.22em] text-stone-300">
          <span className="rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-2 text-amber-200">{variant.label}</span>
          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">{variant.testAngle}</span>
        </div>

        <div className="grid flex-1 items-center gap-16 py-14 lg:grid-cols-[1.15fr_0.85fr] lg:py-20">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-2 text-xs uppercase tracking-[0.28em] text-amber-200">
              {variant.heroEyebrow}
            </div>
            <h1 className="max-w-4xl text-5xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
              {variant.heroTitle}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-300 sm:text-xl">
              {variant.heroBody}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#partner" className="rounded-full bg-amber-300 px-6 py-3 text-sm font-semibold text-stone-950 transition hover:bg-amber-200">
                Partner With Willpower
              </a>
              <a href="#events" className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                Attend an Event
              </a>
              <a href="#hq" className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-stone-200 transition hover:border-white/30 hover:text-white">
                Join Willpower HQ
              </a>
            </div>
          </div>

          <div className="grid gap-4 lg:justify-self-end">
            {variant.heroCards.map((card) => (
              <div key={card.title} className="rounded-[2rem] border border-white/10 bg-white/6 p-8 shadow-2xl shadow-black/30 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.3em] text-amber-200">{card.title}</p>
                <p className="mt-4 text-lg leading-8 text-stone-200">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/8 bg-black/20">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-10 sm:grid-cols-2 sm:px-10 lg:grid-cols-4 lg:px-12">
          {variant.proofStats.map((stat) => (
            <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="text-3xl font-semibold text-white">{stat.value}</div>
              <div className="mt-2 text-sm uppercase tracking-[0.22em] text-stone-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-amber-200">{variant.sectionIntroLabel}</p>
            <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">{variant.sectionIntroTitle}</h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-stone-300">
            {variant.sectionIntroBody.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section id="events" className="mx-auto max-w-7xl px-6 py-6 sm:px-10 lg:px-12">
        <div className="grid gap-6 lg:grid-cols-3">
          {variant.pillars.map((item) => (
            <div key={item.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
              <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
              <p className="mt-4 text-base leading-7 text-stone-300">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-12">
        <div className="grid gap-8 rounded-[2.5rem] border border-white/10 bg-white/5 p-10 lg:grid-cols-[1fr_0.9fr] lg:p-14">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-amber-200">Flagship experience</p>
            <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">{variant.flagshipTitle}</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-300">{variant.flagshipBody}</p>
            <a href="#join" className="mt-8 inline-flex rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
              Explore Events
            </a>
          </div>
          <div className="grid gap-4">
            <div className="rounded-[2rem] border border-white/10 bg-black/20 p-6">
              <p className="text-sm uppercase tracking-[0.25em] text-stone-400">What should win</p>
              <p className="mt-3 text-xl leading-8 text-white">The strongest candidate should feel premium, clear, and commercially useful — without sounding like every other event company.</p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-black/20 p-6">
              <p className="text-sm uppercase tracking-[0.25em] text-stone-400">What we’re testing</p>
              <p className="mt-3 text-xl leading-8 text-white">Different ways to position Willpower: flagship proof, ecosystem, partner value, and stronger editorial identity.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="partner" className="mx-auto max-w-7xl px-6 py-6 sm:px-10 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-amber-200">For partners</p>
            <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">{variant.partnerTitle}</h2>
            <p className="mt-6 text-lg leading-8 text-stone-300">{variant.partnerBody}</p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <ul className="space-y-4 text-base leading-7 text-stone-200">
              {variant.partnerBullets.map((bullet) => (
                <li key={bullet} className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-amber-300" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <a href="#join" className="mt-8 inline-flex rounded-full bg-amber-300 px-6 py-3 text-sm font-semibold text-stone-950 transition hover:bg-amber-200">
              Become a Partner
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-12">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-200">{variant.audienceLabel}</p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">{variant.audienceTitle}</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {variant.audience.map((item) => (
            <div key={item.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-7">
              <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
              <p className="mt-4 text-base leading-7 text-stone-300">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="hq" className="mx-auto max-w-7xl px-6 py-6 sm:px-10 lg:px-12">
        <div className="rounded-[2.5rem] border border-amber-300/20 bg-[linear-gradient(135deg,rgba(216,194,159,0.14),rgba(255,255,255,0.04))] p-10 lg:p-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-amber-200">Willpower HQ</p>
              <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">{variant.hqTitle}</h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-200">{variant.hqBody}</p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-black/25 p-6">
              <p className="text-sm text-stone-300">Beehiiv embed goes here</p>
              <div className="mt-4 rounded-2xl border border-dashed border-white/15 p-6 text-stone-400">Newsletter signup module / form placeholder</div>
              <a href="#join" className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-stone-950 transition hover:bg-stone-200">
                Join Willpower HQ
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="join" className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-12">
        <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-10 text-center lg:p-14">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-200">Join the ecosystem</p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">{variant.finalTitle}</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-stone-300">{variant.finalBody}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="#partner" className="rounded-full bg-amber-300 px-6 py-3 text-sm font-semibold text-stone-950 transition hover:bg-amber-200">Partner With Willpower</a>
            <a href="#events" className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">Attend an Event</a>
            <a href="#hq" className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">Join Willpower HQ</a>
          </div>
        </div>
      </section>
    </main>
  );
}
