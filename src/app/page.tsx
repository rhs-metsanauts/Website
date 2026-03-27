import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";

const buildingItems = [
  {
    tag: "ROVER",
    title: "A fleet of four rovers",
    desc: (
      <>
        <strong className="text-text-bright font-bold">Six-wheel drive</strong> with half-tread grip, rocker-bogie suspension, robotic{" "}
        <strong className="text-text-bright font-bold">sample-collection claw</strong>, and Raspberry Pi control. They communicate over{" "}
        <strong className="text-text-bright font-bold">LoRa</strong>, WiFi, and Bluetooth.
      </>
    ),
  },
  {
    tag: "TERRAIN",
    title: "8′ × 8′ terrain simulation",
    desc: (
      <>
        Called <strong className="text-text-bright font-bold">BothScape</strong> — models the{" "}
        <strong className="text-text-bright font-bold">lunar south pole</strong> and ancient{" "}
        <strong className="text-text-bright font-bold">Martian terrain</strong> using foamboard, foam gap filler, and diatomaceous earth as regolith.
      </>
    ),
  },
  {
    tag: "CONTROL",
    title: "Astronaut control interface",
    desc: (
      <>
        A <strong className="text-text-bright font-bold">web app</strong> that lets non-technical crew send commands to rovers. Includes an{" "}
        <strong className="text-text-bright font-bold">AI-powered interface</strong> that generates control code from plain language.
      </>
    ),
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-20 pb-28 sm:pt-28 sm:pb-36 px-4 overflow-hidden">
        {/* Atmospheric glow */}
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(91,156,246,0.08) 0%, rgba(91,156,246,0.02) 40%, transparent 70%)" }}
        />

        <div className="max-w-5xl mx-auto relative">
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
            <h1 className="text-5xl sm:text-6xl font-bold text-text-bright leading-[1.1] mb-8 tracking-tight">
              Building rovers and terrain simulations for{" "}
              <span className="text-blue amber-glow">NASA&apos;s HERA</span> program.
            </h1>
          </FadeIn>

          <FadeIn delay={180}>
            <p className="text-xl text-text-muted leading-relaxed mb-12 max-w-2xl">
              We&apos;re a <strong className="text-text-bright font-bold">five-person team</strong> from{" "}
              <strong className="text-text-bright font-bold">Ranchview High School</strong> in Irving, Texas. Our project combines{" "}
              <strong className="text-text-bright font-bold">mechanical engineering</strong>,{" "}
              <strong className="text-text-bright font-bold">embedded electronics</strong>,{" "}
              <strong className="text-text-bright font-bold">LoRa communication</strong>, and{" "}
              <strong className="text-text-bright font-bold">terrain modeling</strong> to support astronaut research inside NASA&apos;s HERA habitat.
            </p>
          </FadeIn>

          <FadeIn delay={240}>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/mission"
                className="btn-primary px-7 py-3.5 text-base font-semibold bg-blue text-white rounded-lg"
              >
                Read our mission
              </Link>
              <Link
                href="/rover-systems"
                className="btn-outline px-7 py-3.5 text-base font-medium text-text-bright border border-border rounded-lg hover:border-blue/40 hover:text-blue"
              >
                Rover systems
              </Link>
            </div>
          </FadeIn>

        </div>
      </section>

      {/* What we're building */}
      <section className="py-24 px-4 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="flex items-center gap-3 mb-12">
              <div className="h-px w-8 bg-blue/30" />
              <h2 className="text-3xl font-bold text-text-bright">What we&apos;re building</h2>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-3 gap-6">
            {buildingItems.map((item, i) => (
              <FadeIn key={item.tag} delay={i * 80}>
                <div className="bg-surface rounded-xl p-7 border border-border card-hover h-full">
                  <span className="tech-label !text-[11px] text-blue mb-4 block">{item.tag}</span>
                  <h3 className="text-lg font-bold text-text-bright mb-4">{item.title}</h3>
                  <p className="text-base text-text-muted leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Explore the project */}
      <section className="py-24 px-4 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="flex items-center gap-3 mb-12">
              <div className="h-px w-8 bg-blue/30" />
              <h2 className="text-3xl font-bold text-text-bright">Explore the project</h2>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { href: "/mission", title: "Mission & Goals", desc: "Problem statement and what we're solving for", tag: "01" },
              { href: "/rover-systems", title: "Rover Systems", desc: "Mobility, communication, claw, and power", tag: "02" },
              { href: "/innovations", title: "Key Innovations", desc: "What makes our approach different", tag: "03" },
              { href: "/research", title: "Research", desc: "Technical overview and documentation", tag: "04" },
              { href: "/gallery", title: "Gallery", desc: "Photos from builds, terrain, and events", tag: "05" },
              { href: "/team", title: "Team", desc: "The five students behind the project", tag: "06" },
            ].map((link, i) => (
              <FadeIn key={link.href} delay={i * 60}>
                <Link
                  href={link.href}
                  className="explore-link group flex justify-between items-center p-6 rounded-xl border border-border hover:border-blue/25"
                >
                  <div className="flex items-start gap-5">
                    <span className="tech-label !text-[11px] text-blue mt-0.5">{link.tag}</span>
                    <div>
                      <p className="text-base font-semibold text-text-bright group-hover:text-blue transition-colors">{link.title}</p>
                      <p className="text-sm text-text-muted mt-1.5">{link.desc}</p>
                    </div>
                  </div>
                  <svg className="w-5 h-5 text-text-muted group-hover:text-blue group-hover:translate-x-1.5 transition-all duration-200 shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-4 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="flex items-center gap-3 mb-2">
              <div className="h-px w-8 bg-blue/30" />
              <h2 className="text-3xl font-bold text-text-bright">Our team</h2>
            </div>
            <p className="text-text-muted mb-10 ml-11 text-base">Ranchview High School, Irving TX</p>
          </FadeIn>

          <FadeIn delay={80}>
            <div className="flex flex-wrap gap-x-10 gap-y-4 mb-8 ml-11">
              {["Neil Rao", "Arun Rebbapragada", "Arnav Sangle", "Sanay Tyagi", "Advay Singi"].map((name) => (
                <p key={name} className="text-text-bright font-semibold text-base">{name}</p>
              ))}
            </div>

            <div className="ml-11">
              <Link href="/team" className="inline-flex items-center gap-1.5 text-base font-semibold text-blue hover:underline underline-offset-4">
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
