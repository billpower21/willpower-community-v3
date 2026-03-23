const navItems = [
  "About",
  "Events",
  "Partners",
  "Community",
  "Willpower HQ",
  "Join",
];

const proofStats = [
  { value: "30+", label: "events hosted" },
  { value: "4,000+", label: "attendees across the community" },
  { value: "$1M+", label: "opportunities generated for brands" },
  { value: "200+", label: "high-caliber people in flagship rooms" },
];

const audience = [
  {
    title: "Founders",
    body:
      "Meet the operators, partners, and peers who can actually move your business forward.",
  },
  {
    title: "Operators",
    body:
      "Get into better conversations with the people shaping marketing, ecommerce, growth, and brand strategy right now.",
  },
  {
    title: "Strategic partners",
    body:
      "Show up in a room that feels premium, intentional, and aligned with the brands you want to build with.",
  },
  {
    title: "Talent + connectors",
    body:
      "Stay close to the brands, leaders, and opportunities shaping the consumer ecosystem.",
  },
];

const partnerBullets = [
  "Direct access to founders, operators, and brand leaders",
  "Premium association through curated rooms and flagship events",
  "Repeated touchpoints across experiences and media",
  "A stronger business-development motion than standard conference sponsorship",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.14),_transparent_32%),linear-gradient(180deg,#0b0b0a_0%,#11110f_45%,#171612_100%)] text-stone-100">
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-6 sm:px-10 lg:px-12">
        <header className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur">
          <div>
            <div className="text-xs uppercase tracking-[0.35em] text-amber-300/80">
              Willpower
            </div>
            <div className="text-sm text-stone-300">Community for modern consumer brands</div>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-stone-300 lg:flex">
            {navItems.map((item) => (
              <a key={item} href="#" className="transition hover:text-white">
                {item}
              </a>
            ))}
          </nav>
          <a
            href="#partner"
            className="rounded-full bg-amber-300 px-4 py-2 text-sm font-semibold text-stone-950 transition hover:bg-amber-200"
          >
            Partner With Willpower
          </a>
        </header>

        <div className="grid flex-1 items-center gap-16 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:py-24">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-2 text-xs uppercase tracking-[0.28em] text-amber-200">
              Events • Community • Media
            </div>
            <h1 className="max-w-4xl text-5xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
              Willpower is the community for the people building modern consumer brands.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-300 sm:text-xl">
              We bring founders, operators, strategic partners, and talent into the
              right rooms through flagship events, curated relationships, and media
              that keeps the ecosystem moving.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#partner"
                className="rounded-full bg-amber-300 px-6 py-3 text-sm font-semibold text-stone-950 transition hover:bg-amber-200"
              >
                Partner With Willpower
              </a>
              <a
                href="#events"
                className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Attend an Event
              </a>
              <a
                href="#hq"
                className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-stone-200 transition hover:border-white/30 hover:text-white"
              >
                Join Willpower HQ
              </a>
            </div>
          </div>

          <div className="grid gap-4 lg:justify-self-end">
            <div className="rounded-[2rem] border border-white/10 bg-white/6 p-8 shadow-2xl shadow-black/30 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.3em] text-amber-200">Flagship proof</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Wellness House</h2>
              <p className="mt-4 text-base leading-7 text-stone-300">
                The clearest expression of the Willpower experience: high-caliber
                people, premium energy, strong brand presence, and conversations
                that actually lead somewhere.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-3 text-sm text-stone-300">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="text-2xl font-semibold text-white">Austin</div>
                  <div>Flagship market</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="text-2xl font-semibold text-white">IRL</div>
                  <div>Premium room</div>
                </div>
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-[#d8c29f]/8 p-6 text-stone-200">
              <p className="text-xs uppercase tracking-[0.3em] text-amber-200">Willpower HQ</p>
              <p className="mt-3 text-lg leading-7">
                The newsletter layer that keeps brands, operators, and partners close to the room.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/8 bg-black/20">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-10 sm:grid-cols-2 sm:px-10 lg:grid-cols-4 lg:px-12">
          {proofStats.map((stat) => (
            <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="text-3xl font-semibold text-white">{stat.value}</div>
              <div className="mt-2 text-sm uppercase tracking-[0.22em] text-stone-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-amber-200">What Willpower is</p>
            <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
              More than an event. More than a newsletter. More than a network.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-stone-300">
            <p>
              Willpower is where consumer brands, operators, and partners come
              together in real life and stay connected between events.
            </p>
            <p>
              We build the ecosystem through flagship experiences like Wellness
              House, curated conversations, strategic introductions, and
              Willpower HQ — the media layer that keeps the best ideas, people,
              and opportunities moving.
            </p>
            <p>
              For brands, it means better rooms, better relationships, and more momentum.
              For partners, it means real access to the people shaping the space.
              For talent, it means a front-row seat to what the best consumer companies are building next.
            </p>
          </div>
        </div>
      </section>

      <section id="events" className="mx-auto max-w-7xl px-6 py-6 sm:px-10 lg:px-12">
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Events",
              body:
                "Flagship experiences that bring together founders, operators, investors, and strategic partners in rooms that actually feel worth showing up for.",
            },
            {
              title: "Community",
              body:
                "The value is not just one event. It’s the relationships, trust, and shared momentum that build when the right people keep coming back.",
            },
            {
              title: "Media",
              body:
                "Willpower HQ keeps the ecosystem moving between events with ideas, opportunities, and stories from the people building modern consumer brands.",
            },
          ].map((item) => (
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
            <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
              Wellness House is one of the clearest expressions of what Willpower creates.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-300">
              High-caliber people. A premium setting. Strong brand energy.
              Conversations that actually lead somewhere. Wellness House is the
              proof point, but it’s part of a bigger story: Willpower is building
              an ecosystem where great brands, operators, and partners want to keep showing up.
            </p>
            <a
              href="#join"
              className="mt-8 inline-flex rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Explore Events
            </a>
          </div>
          <div className="grid gap-4">
            <div className="rounded-[2rem] border border-white/10 bg-black/20 p-6">
              <p className="text-sm uppercase tracking-[0.25em] text-stone-400">Not a trade show</p>
              <p className="mt-3 text-xl leading-8 text-white">
                More curated. More intentional. Built for real relationships, not badge scans.
              </p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-black/20 p-6">
              <p className="text-sm uppercase tracking-[0.25em] text-stone-400">Why it matters</p>
              <p className="mt-3 text-xl leading-8 text-white">
                The events are the expression. The community is the real asset.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="partner" className="mx-auto max-w-7xl px-6 py-6 sm:px-10 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-amber-200">For partners</p>
            <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
              The right partners don’t just sponsor Willpower. They become part of the ecosystem.
            </h2>
            <p className="mt-6 text-lg leading-8 text-stone-300">
              For the right partner, Willpower is more than logo placement. It’s
              access to founders and operators, repeated touchpoints across
              events and media, and association with a premium room full of
              brands and people worth knowing.
            </p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <ul className="space-y-4 text-base leading-7 text-stone-200">
              {partnerBullets.map((bullet) => (
                <li key={bullet} className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-amber-300" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <a
              href="#join"
              className="mt-8 inline-flex rounded-full bg-amber-300 px-6 py-3 text-sm font-semibold text-stone-950 transition hover:bg-amber-200"
            >
              Become a Partner
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-12">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-200">Who it’s for</p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
            Built for the people shaping the next generation of consumer brands.
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {audience.map((item) => (
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
              <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
                Stay close to the room with Willpower HQ.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-200">
                Founders, operators, partners, and friends of the brand world
                get the best of what we’re seeing, building, and hosting — event
                drops, ecosystem updates, smart conversations, and the people worth paying attention to.
              </p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-black/25 p-6">
              <p className="text-sm text-stone-300">Beehiiv embed goes here</p>
              <div className="mt-4 rounded-2xl border border-dashed border-white/15 p-6 text-stone-400">
                Newsletter signup module / form placeholder
              </div>
              <a
                href="#join"
                className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-stone-950 transition hover:bg-stone-200"
              >
                Join Willpower HQ
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="join" className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-12">
        <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-10 text-center lg:p-14">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-200">Join the ecosystem</p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
            Want to be part of it?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-stone-300">
            Whether you want to partner, attend, or stay close to what we’re building,
            Willpower gives you a way into the right ecosystem.
          </p>
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
