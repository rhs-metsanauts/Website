import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 sm:py-32 px-5">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center overflow-hidden">
              <Image src="/logo.png" alt="METSAnauts" width={48} height={48} className="object-contain" />
            </div>
            <div>
              <p className="text-xs text-text-muted uppercase tracking-widest">NASA HUNCH &middot; FDR 2026</p>
              <h1 className="text-2xl font-bold text-text-bright">METSAnauts</h1>
            </div>
          </div>

          <p className="text-3xl sm:text-4xl font-bold text-text-bright leading-tight mb-6">
            Building rovers and terrain simulations for NASA&apos;s HERA program.
          </p>

          <p className="text-text-muted leading-relaxed mb-8 max-w-2xl">
            We&apos;re a five-person team from Ranchview High School in Irving, Texas. Our project
            combines mechanical engineering, embedded electronics, LoRa communication, and
            terrain modeling to support astronaut research inside NASA&apos;s HERA habitat.
          </p>

          <div className="flex gap-3">
            <Link href="/mission" className="px-4 py-2 text-sm font-medium bg-blue text-white rounded-md hover:bg-blue/90 transition-colors">
              Read our mission
            </Link>
            <Link href="/rover-systems" className="px-4 py-2 text-sm font-medium text-text-muted border border-border rounded-md hover:text-text-bright hover:border-text-muted transition-colors">
              Rover systems
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-5">
        <hr className="border-border" />
      </div>

      {/* What we're building */}
      <section className="py-16 px-5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-lg font-semibold text-text-bright mb-6">What we&apos;re building</h2>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="text-sm font-mono text-text-muted w-6 shrink-0 pt-0.5">01</div>
              <div>
                <h3 className="font-medium text-text-bright mb-1">A fleet of four rovers</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Each rover has 6 independently-motored wheels with half-tread grip, rocker-bogie
                  suspension, a robotic sample-collection claw, and a Raspberry Pi control system.
                  They communicate over LoRa, WiFi, and Bluetooth.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-sm font-mono text-text-muted w-6 shrink-0 pt-0.5">02</div>
              <div>
                <h3 className="font-medium text-text-bright mb-1">An 8&apos; &times; 8&apos; terrain simulation</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Called BothScape, it models both the lunar south pole (Shackleton Crater) and
                  ancient Martian terrain using foamboard, foam gap filler, and diatomaceous earth
                  as regolith. Rovers are tested on it under realistic conditions.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-sm font-mono text-text-muted w-6 shrink-0 pt-0.5">03</div>
              <div>
                <h3 className="font-medium text-text-bright mb-1">An astronaut-friendly control interface</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  A web app that lets astronauts (teachers, geologists, specialists) send commands
                  to rovers without technical knowledge. Includes an AI-powered interface that can
                  dynamically generate control code.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-5">
        <hr className="border-border" />
      </div>

      {/* Quick links */}
      <section className="py-16 px-5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-lg font-semibold text-text-bright mb-6">Explore the project</h2>

          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { href: "/mission", title: "Mission & Goals", desc: "Problem statement and what we're solving for" },
              { href: "/rover-systems", title: "Rover Systems", desc: "Mobility, communication, claw, and power" },
              { href: "/bothscape", title: "BothScape Terrain", desc: "Lunar and Martian surface simulation" },
              { href: "/innovations", title: "Key Innovations", desc: "What makes our approach different" },
              { href: "/budget-timeline", title: "Budget & Timeline", desc: "Cost breakdown and project schedule" },
              { href: "/research", title: "Research", desc: "Technical deep-dives and documentation" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex justify-between items-center p-4 rounded-lg border border-border hover:border-text-muted transition-colors"
              >
                <div>
                  <p className="text-sm font-medium text-text-bright">{link.title}</p>
                  <p className="text-xs text-text-muted mt-0.5">{link.desc}</p>
                </div>
                <svg className="w-4 h-4 text-text-muted group-hover:text-text-bright transition-colors shrink-0 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-5">
        <hr className="border-border" />
      </div>

      {/* Team */}
      <section className="py-16 px-5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-lg font-semibold text-text-bright mb-1">Team</h2>
          <p className="text-sm text-text-muted mb-6">Ranchview High School, Irving TX</p>

          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {["Neil Rao", "Arun Rebbapragada", "Arnav Sangle", "Sanay Tyagi", "Advay Singi"].map((name) => (
              <p key={name} className="text-sm text-text-bright">{name}</p>
            ))}
          </div>

          <Link href="/team" className="inline-block mt-4 text-sm text-blue hover:underline">
            About the team &rarr;
          </Link>
        </div>
      </section>
    </>
  );
}
