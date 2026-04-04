import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";

const buildingItems = [
  {
    tag: "ROVER",
    title: "A fleet of four rovers",
    icon: (
      <svg className="w-5 h-5 text-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
    desc: (
      <>
        <strong className="text-blue font-semibold">Six-wheel drive</strong> with half-tread grip, rocker-bogie suspension, robotic{" "}
        <strong className="text-blue font-semibold">sample-collection claw</strong>, and Raspberry Pi control. They communicate over{" "}
        <strong className="text-blue font-semibold">LoRa</strong>, WiFi, and Bluetooth.
      </>
    ),
  },
  {
    tag: "TERRAIN",
    title: "8′ × 8′ terrain simulation",
    icon: (
      <svg className="w-5 h-5 text-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
    desc: (
      <>
        Called <strong className="text-blue font-semibold">BothScape</strong> — models the{" "}
        <strong className="text-blue font-semibold">lunar south pole</strong> and ancient{" "}
        <strong className="text-blue font-semibold">Martian terrain</strong> using foamboard, foam gap filler, and diatomaceous earth as regolith.
      </>
    ),
  },
  {
    tag: "CONTROL",
    title: "Astronaut control interface",
    icon: (
      <svg className="w-5 h-5 text-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
      </svg>
    ),
    desc: (
      <>
        A <strong className="text-blue font-semibold">web app</strong> that lets non-technical crew send commands to rovers. Includes an{" "}
        <strong className="text-blue font-semibold">AI-powered interface</strong> that generates control code from plain language.
      </>
    ),
  },
];

const stats = [
  { label: "Rovers", value: "4 units", icon: "●" },
  { label: "Terrain", value: "8′ × 8′", icon: "●" },
  { label: "Comms", value: "LoRa + WiFi", icon: "●" },
  { label: "Status", value: "Active", icon: "●" },
];

const exploreLinks = [
  {
    href: "/mission",
    title: "Mission & Goals",
    desc: "Problem statement and what we're solving for",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    href: "/rover-systems",
    title: "Rover Systems",
    desc: "Mobility, communication, claw, and power",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  },
  {
    href: "/innovations",
    title: "Key Innovations",
    desc: "What makes our approach different",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
  {
    href: "/research",
    title: "Research",
    desc: "Technical overview and documentation",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    href: "/gallery",
    title: "Gallery",
    desc: "Photos from builds, terrain, and events",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
  },
  {
    href: "/team",
    title: "Team",
    desc: "The five students behind the project",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-16 pb-20 sm:pt-20 sm:pb-28 px-3 overflow-hidden">
        {/* Atmospheric glow — stronger, dual layer */}
        <div className="hero-glow" />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(91,156,246,0.10) 0%, transparent 70%)" }}
        />

        <div className="max-w-[1400px] mx-auto relative">
          <FadeIn>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-14 bg-blue/40" />
              <span className="tech-label !text-xs tracking-[0.2em]">Mission ID: HERA-2026 &middot; FDR</span>
            </div>
          </FadeIn>

          <FadeIn delay={60}>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 flex items-center justify-center">
                <Image src="/logo.png" alt="METSAnauts" width={56} height={56} className="object-contain" />
              </div>
              <div>
                <p className="tech-label !text-[11px] tracking-[0.18em] text-blue">NASA HUNCH Program</p>
                <p className="text-lg font-semibold text-text-bright">METSAnauts</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={120}>
            <h1 className="text-6xl sm:text-7xl font-bold text-text-bright leading-[1.08] mb-8 tracking-tight">
              Building rovers and terrain simulations for{" "}
              <span className="gradient-text amber-glow">NASA&apos;s HERA</span>{" "}
              program.
            </h1>
          </FadeIn>

          <FadeIn delay={180}>
            <p className="text-xl text-text-muted leading-relaxed mb-12 max-w-2xl">
              We&apos;re a <strong className="text-blue font-semibold">five-person team</strong> from{" "}
              <strong className="text-blue font-semibold">Ranchview High School</strong> in Irving, Texas. Our project combines{" "}
              <strong className="text-blue font-semibold">mechanical engineering</strong>,{" "}
              <strong className="text-blue font-semibold">embedded electronics</strong>,{" "}
              <strong className="text-blue font-semibold">LoRa communication</strong>, and{" "}
              <strong className="text-blue font-semibold">terrain modeling</strong> to support astronaut research inside NASA&apos;s HERA habitat.
            </p>
          </FadeIn>

          <FadeIn delay={240}>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/mission"
                className="btn-primary px-8 py-4 text-base font-bold bg-blue text-white rounded-xl cursor-pointer shadow-[0_0_32px_rgba(91,156,246,0.5)] hover:shadow-[0_0_48px_rgba(91,156,246,0.7)]"
              >
                Read our mission
              </Link>
              <Link
                href="/rover-systems"
                className="btn-outline px-8 py-4 text-base font-semibold text-white border-2 border-white/25 rounded-xl hover:border-blue/60 hover:bg-blue/10 hover:text-blue cursor-pointer"
              >
                Rover systems
              </Link>
            </div>
          </FadeIn>

          {/* Stats row — bordered cards */}
          <FadeIn delay={320}>
            <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass-card rounded-xl px-5 py-4 glow-border"
                >
                  <p className="tech-label !text-[10px] text-text-dim mb-2">{stat.label}</p>
                  <p className="stat-value">{stat.value}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Rover photo */}
      <section className="px-3 pb-4">
        <div className="max-w-[1400px] mx-auto">
          <FadeIn>
            <div className="relative w-full aspect-[16/7] rounded-2xl overflow-hidden border border-border shadow-[0_8px_48px_rgba(0,0,0,0.5)]">
              <Image
                src="/images/IMG_1583.jpg"
                alt="METSAnauts rover on terrain"
                fill
                className="object-cover object-center"
                loading="lazy"
              />
              {/* subtle overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg/30 via-transparent to-transparent pointer-events-none" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* What we're building */}
      <section className="py-16 px-3 border-t border-border">
        <div className="max-w-[1400px] mx-auto">
          <FadeIn>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-8 bg-blue/30" />
              <h2 className="text-3xl font-bold text-text-bright">What we&apos;re building</h2>
            </div>
            <p className="text-text-muted mb-12 ml-11">Three interconnected systems for the HERA habitat mission.</p>
          </FadeIn>

          <div className="grid sm:grid-cols-3 gap-5">
            {buildingItems.map((item, i) => (
              <FadeIn key={item.tag} delay={i * 80}>
                <div className="group relative glass-card rounded-xl p-7 card-hover h-full overflow-hidden">
                  {/* Corner accent on hover */}
                  <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-blue/40 rounded-tl-xl" />
                    <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-blue/40 rounded-tr-xl" />
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-blue/40 rounded-bl-xl" />
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-blue/40 rounded-br-xl" />
                  </div>

                  {/* Icon */}
                  <div className="w-10 h-10 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center mb-5">
                    {item.icon}
                  </div>

                  <span className="tech-label !text-[10px] text-blue mb-3 block">{item.tag}</span>
                  <h3 className="text-lg font-bold text-text-bright mb-3">{item.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Explore the project */}
      <section className="py-16 px-3 border-t border-border">
        <div className="max-w-[1400px] mx-auto">
          <FadeIn>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-8 bg-blue/30" />
              <h2 className="text-3xl font-bold text-text-bright">Explore the project</h2>
            </div>
            <p className="text-text-muted mb-12 ml-11">Dive into any part of our work.</p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 gap-3">
            {exploreLinks.map((link, i) => (
              <FadeIn key={link.href} delay={i * 50}>
                <Link
                  href={link.href}
                  className="explore-link group flex justify-between items-center p-5 rounded-xl glass-card cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-text-dim group-hover:text-blue group-hover:border-blue/30 transition-colors shrink-0">
                      {link.icon}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-text-bright group-hover:text-blue transition-colors">{link.title}</p>
                      <p className="text-xs text-text-muted mt-0.5">{link.desc}</p>
                    </div>
                  </div>
                  <svg className="w-4 h-4 text-text-dim group-hover:text-blue group-hover:translate-x-1 transition-all duration-200 shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-3 border-t border-border">
        <div className="max-w-[1400px] mx-auto">
          <FadeIn>
            <div className="flex items-center gap-3 mb-2">
              <div className="h-px w-8 bg-blue/30" />
              <h2 className="text-3xl font-bold text-text-bright">Our team</h2>
            </div>
            <p className="text-text-muted mb-10 ml-11 text-base">Five students from Ranchview High School, Irving TX.</p>
          </FadeIn>

          <FadeIn delay={80}>
            <div className="ml-11 flex flex-wrap gap-3 mb-8">
              {["Neil Rao", "Arun Rebbapragada", "Arnav Sangle", "Sanay Tyagi", "Advay Singi"].map((name) => (
                <span
                  key={name}
                  className="px-4 py-2 rounded-lg glass-card text-sm font-medium text-text-bright"
                >
                  {name}
                </span>
              ))}
            </div>

            <div className="ml-11">
              <Link
                href="/team"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue hover:underline underline-offset-4 cursor-pointer"
              >
                About the team
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
