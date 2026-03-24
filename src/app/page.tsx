import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-32 sm:pt-40 sm:pb-44 px-6 overflow-hidden">
        {/* Atmospheric glow */}
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[1000px] h-[700px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(181,113,10,0.06) 0%, rgba(37,99,235,0.02) 40%, transparent 70%)" }}
        />

        <div className="max-w-5xl mx-auto relative">
          <FadeIn>
            <div className="flex items-center gap-3 mb-10">
              <div className="h-px w-14 bg-amber/40" />
              <span className="tech-label">Mission ID: HERA-2026 &middot; FDR</span>
            </div>
          </FadeIn>

          <FadeIn delay={60}>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-16 h-16 flex items-center justify-center">
                <Image src="/logo.png" alt="METSAnauts" width={64} height={64} className="object-contain" />
              </div>
              <div>
                <p className="tech-label !text-[10px] text-text-muted">NASA HUNCH Program</p>
                <p className="text-xl font-semibold text-text-bright">METSAnauts</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={120}>
            <h1 className="text-5xl sm:text-6xl lg:text-[5.5rem] font-extrabold text-text-bright leading-[1.05] mb-10 tracking-tight max-w-4xl">
              Building rovers and terrain simulations for{" "}
              <span className="text-amber amber-glow">NASA&apos;s HERA</span> program.
            </h1>
          </FadeIn>

          <FadeIn delay={180}>
            <p className="text-xl sm:text-2xl text-text leading-relaxed mb-14 max-w-2xl">
              We&apos;re a five-person team from Ranchview High School in Irving, Texas. Our project
              combines mechanical engineering, embedded electronics, LoRa communication, and
              terrain modeling to support astronaut research inside NASA&apos;s HERA habitat.
            </p>
          </FadeIn>

          <FadeIn delay={240}>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/mission"
                className="btn-primary px-8 py-3.5 text-base font-semibold bg-amber text-white rounded-lg"
              >
                Read our mission
              </Link>
              <Link
                href="/rover-systems"
                className="btn-outline px-8 py-3.5 text-base font-semibold text-text-bright border border-border rounded-lg hover:border-amber/40 hover:text-amber"
              >
                Rover systems
              </Link>
            </div>
          </FadeIn>

          {/* Status strip */}
          <FadeIn delay={300}>
            <div className="mt-20 flex flex-wrap gap-8">
              {[
                { label: "Rovers", value: "4 units" },
                { label: "Terrain", value: "8\u2032 \u00d7 8\u2032" },
                { label: "Comms", value: "LoRa + WiFi" },
                { label: "Status", value: "Active" },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-2.5">
                  <span className="tech-label !text-[10px] text-text-muted">{stat.label}</span>
                  <span className="text-sm text-text-bright font-medium">{stat.value}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* What we're building */}
      <section className="py-24 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="flex items-center gap-3 mb-12">
              <div className="h-px w-10 bg-amber/30" />
              <h2 className="text-3xl font-bold text-text-bright">What we&apos;re building</h2>
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
                <div className="bg-surface rounded-xl p-7 border border-border card-hover h-full">
                  <span className="tech-label !text-[9px] text-amber/80 mb-3 block">{item.tag}</span>
                  <h3 className="text-lg font-semibold text-text-bright mb-3">{item.title}</h3>
                  <p className="text-base text-text-muted leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Explore the project */}
      <section className="py-24 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="flex items-center gap-3 mb-12">
              <div className="h-px w-10 bg-amber/30" />
              <h2 className="text-3xl font-bold text-text-bright">Explore the project</h2>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { href: "/mission", title: "Mission & Goals", desc: "Problem statement and what we're solving for", tag: "01" },
              { href: "/rover-systems", title: "Rover Systems", desc: "Mobility, communication, claw, and power", tag: "02" },
              { href: "/bothscape", title: "BothScape Terrain", desc: "Lunar and Martian surface simulation", tag: "03" },
              { href: "/innovations", title: "Key Innovations", desc: "What makes our approach different", tag: "04" },
              { href: "/budget-timeline", title: "Budget & Timeline", desc: "Cost breakdown and project schedule", tag: "05" },
              { href: "/research", title: "Research", desc: "Technical deep-dives and documentation", tag: "06" },
            ].map((link, i) => (
              <FadeIn key={link.href} delay={i * 60}>
                <Link
                  href={link.href}
                  className="explore-link group flex justify-between items-center p-6 rounded-xl border border-border hover:border-amber/25"
                >
                  <div className="flex items-start gap-4">
                    <span className="tech-label !text-[10px] text-text-muted mt-1">{link.tag}</span>
                    <div>
                      <p className="text-lg font-semibold text-text-bright group-hover:text-amber transition-colors">{link.title}</p>
                      <p className="text-base text-text-muted mt-1">{link.desc}</p>
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
      <section className="py-24 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-10 bg-amber/30" />
              <h2 className="text-3xl font-bold text-text-bright">Our team</h2>
            </div>
            <p className="text-lg text-text-muted mb-10 ml-[52px]">Ranchview High School, Irving TX</p>
          </FadeIn>

          <FadeIn delay={80}>
            <div className="flex flex-wrap gap-x-10 gap-y-4 mb-8 ml-[52px]">
              {["Neil Rao", "Arun Rebbapragada", "Arnav Sangle", "Sanay Tyagi", "Advay Singi"].map((name) => (
                <p key={name} className="text-lg text-text-bright font-medium">{name}</p>
              ))}
            </div>

            <div className="ml-[52px]">
              <Link href="/team" className="inline-flex items-center gap-2 text-base font-semibold text-amber hover:underline underline-offset-4">
                About the team
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
