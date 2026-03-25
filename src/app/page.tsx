import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-20 pb-24 sm:pt-28 sm:pb-32 px-6 overflow-hidden">
        {/* Atmospheric glow */}
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(181,113,10,0.06) 0%, rgba(37,99,235,0.02) 40%, transparent 70%)" }}
        />

        <div className="max-w-4xl mx-auto relative">
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-14 bg-amber/40" />
              <span className="tech-label !text-xs tracking-[0.2em]">Mission ID: HERA-2026 &middot; FDR</span>
            </div>
          </FadeIn>

          <FadeIn delay={60}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 flex items-center justify-center">
                <Image src="/logo.png" alt="METSAnauts" width={56} height={56} className="object-contain" />
              </div>
              <div>
                <p className="tech-label !text-[11px] tracking-[0.18em] text-amber">NASA HUNCH Program</p>
                <p className="text-lg font-semibold text-text-bright">METSAnauts</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={120}>
            <h1 className="text-4xl sm:text-5xl font-bold text-text-bright leading-[1.15] mb-6 tracking-tight">
              Building rovers and terrain simulations for{" "}
              <span className="text-amber amber-glow">NASA&apos;s HERA</span> program.
            </h1>
          </FadeIn>

          <FadeIn delay={180}>
            <p className="text-lg text-text-muted leading-relaxed mb-10 max-w-2xl">
              We&apos;re a five-person team from Ranchview High School in Irving, Texas. Our project
              combines mechanical engineering, embedded electronics, LoRa communication, and
              terrain modeling to support astronaut research inside NASA&apos;s HERA habitat.
            </p>
          </FadeIn>

          <FadeIn delay={240}>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/mission"
                className="btn-primary px-6 py-3 text-sm font-medium bg-amber text-white rounded-lg"
              >
                Read our mission
              </Link>
              <Link
                href="/rover-systems"
                className="btn-outline px-6 py-3 text-sm font-medium text-text-bright border border-border rounded-lg hover:border-amber/40 hover:text-amber"
              >
                Rover systems
              </Link>
            </div>
          </FadeIn>

        </div>
      </section>

      {/* What we're building */}
      <section className="py-20 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="flex items-center gap-3 mb-10">
              <div className="h-px w-8 bg-amber/30" />
              <h2 className="text-2xl font-bold text-text-bright">What we&apos;re building</h2>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-3 gap-5">
            {[
              {
                tag: "ROVER",
                title: "A fleet of four rovers",
                desc: "Six-wheel drive with half-tread grip, rocker-bogie suspension, robotic sample-collection claw, and Raspberry Pi control. They communicate over LoRa, WiFi, and Bluetooth.",
              },
              {
                tag: "TERRAIN",
                title: "8\u2032 \u00d7 8\u2032 terrain simulation",
                desc: "Called BothScape \u2014 models the lunar south pole and ancient Martian terrain using foamboard, foam gap filler, and diatomaceous earth as regolith.",
              },
              {
                tag: "CONTROL",
                title: "Astronaut control interface",
                desc: "A web app that lets non-technical crew send commands to rovers. Includes an AI-powered interface that generates control code from plain language.",
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 80}>
                <div className="bg-surface rounded-xl p-6 border border-border card-hover h-full">
                  <span className="tech-label !text-[11px] text-amber mb-3 block">{item.tag}</span>
                  <h3 className="font-semibold text-text-bright mb-3">{item.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Explore the project */}
      <section className="py-20 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="flex items-center gap-3 mb-10">
              <div className="h-px w-8 bg-amber/30" />
              <h2 className="text-2xl font-bold text-text-bright">Explore the project</h2>
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
                  className="explore-link group flex justify-between items-center p-5 rounded-xl border border-border hover:border-amber/25"
                >
                  <div className="flex items-start gap-4">
                    <span className="tech-label !text-[11px] text-amber mt-0.5">{link.tag}</span>
                    <div>
                      <p className="font-medium text-text-bright group-hover:text-amber transition-colors">{link.title}</p>
                      <p className="text-sm text-text-muted mt-1">{link.desc}</p>
                    </div>
                  </div>
                  <svg className="w-5 h-5 text-text-muted group-hover:text-amber group-hover:translate-x-1.5 transition-all duration-200 shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="flex items-center gap-3 mb-2">
              <div className="h-px w-8 bg-amber/30" />
              <h2 className="text-2xl font-bold text-text-bright">Our team</h2>
            </div>
            <p className="text-text-muted mb-8 ml-11">Ranchview High School, Irving TX</p>
          </FadeIn>

          <FadeIn delay={80}>
            <div className="flex flex-wrap gap-x-8 gap-y-3 mb-6 ml-11">
              {["Neil Rao", "Skanda", "Arnav Sangle", "Sanay Tyagi", "Advay Singi", "Arun Rebbapragada"].map((name) => (
                <p key={name} className="text-text-bright font-medium">{name}</p>
              ))}
            </div>

            <div className="ml-11">
              <Link href="/team" className="inline-flex items-center gap-1.5 text-sm font-medium text-amber hover:underline underline-offset-4">
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
