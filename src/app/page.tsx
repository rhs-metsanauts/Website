import Link from "next/link";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center starfield overflow-hidden">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-space-black/60 via-space-black/30 to-space-black" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-nasa-blue/20 border border-nasa-blue/30 mb-8">
            <span className="w-2 h-2 rounded-full bg-accent-teal animate-pulse" />
            <span className="text-sm text-accent-cyan font-medium">NASA HUNCH Program &middot; FDR 2026</span>
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight mb-4">
            <span className="text-white">METSA</span>
            <span className="text-gradient-cyan">nauts</span>
          </h1>

          <p className="text-xl sm:text-2xl text-lunar-silver/80 font-light mb-2">
            HERA Rover & BothScape Simulation Project
          </p>

          <p className="text-lg text-lunar-silver/50 mb-10">
            Ranchview High School &middot; Irving, Texas
          </p>

          <p className="max-w-2xl mx-auto text-lunar-silver/70 leading-relaxed mb-10">
            We are a NASA HUNCH engineering team specializing in rover development,
            autonomous systems, and lunar environment simulation. Our work integrates
            mechanical engineering, embedded electronics, LoRa communication networks,
            and Shackleton Crater terrain modeling aligned with NASA&apos;s HERA mission.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/mission"
              className="px-8 py-3 bg-nasa-blue hover:bg-nasa-blue/80 text-white font-semibold rounded-lg transition-colors glow-blue"
            >
              Our Mission
            </Link>
            <Link
              href="/rover-systems"
              className="px-8 py-3 border border-accent-cyan/30 text-accent-cyan hover:bg-accent-cyan/10 font-semibold rounded-lg transition-colors"
            >
              Explore Rover Systems
            </Link>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-space-black to-transparent" />
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-space-dark">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "4", label: "Rovers Designed" },
              { value: "8×8 ft", label: "Terrain Simulation" },
              { value: "3", label: "Communication Protocols" },
              { value: "5", label: "Team Members" },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-6 rounded-xl bg-space-gray/50 border border-white/5">
                <div className="text-3xl font-black text-gradient-cyan mb-2">{stat.value}</div>
                <div className="text-sm text-lunar-silver/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Overview Cards */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Project Overview</h2>
            <div className="mt-4 h-1 w-16 bg-gradient-to-r from-nasa-blue to-accent-cyan rounded-full mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Rover Fleet",
                desc: "Four fully functional rovers with rocker-bogie suspension, half-tread wheels, robotic claws, and multi-protocol communication for lunar deployment scenarios.",
                href: "/rover-systems",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                  </svg>
                ),
              },
              {
                title: "BothScape Terrain",
                desc: "An 8 ft × 8 ft lunar and Martian landscape simulation using foamboard, foam gap filler, and diatomaceous earth regolith with accurate Shackleton Crater modeling.",
                href: "/bothscape",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                ),
              },
              {
                title: "Key Innovations",
                desc: "Bottom-mounted solar panels with active tracking, LoRa communication fallback, astronaut-friendly UI, and AI-powered command generation.",
                href: "/innovations",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                ),
              },
            ].map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="group p-6 rounded-xl bg-space-gray/50 border border-white/5 card-hover"
              >
                <div className="text-accent-cyan mb-4 group-hover:text-white transition-colors">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                <p className="text-sm text-lunar-silver/60 leading-relaxed">{card.desc}</p>
                <div className="mt-4 text-sm text-accent-cyan font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Learn more
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-20 bg-space-dark px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our Team</h2>
          <div className="h-1 w-16 bg-gradient-to-r from-nasa-blue to-accent-cyan rounded-full mx-auto mb-8" />
          <p className="text-lunar-silver/70 mb-10 max-w-2xl mx-auto">
            Five students from Ranchview High School working as an applied R&D unit with dedicated
            subteams for engineering design, software systems, crater modeling, documentation, and mission operations.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {["Neil Rao", "Arun Rebbapragada", "Arnav Sangle", "Sanay Tyagi", "Advay Singi"].map((name) => (
              <div key={name} className="text-center">
                <div className="w-16 h-16 rounded-full bg-space-gray border border-white/10 flex items-center justify-center mx-auto mb-2">
                  <span className="text-lg font-bold text-accent-cyan">
                    {name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <p className="text-sm text-lunar-silver/80">{name}</p>
              </div>
            ))}
          </div>
          <Link
            href="/team"
            className="inline-block mt-8 px-6 py-2 border border-white/10 text-lunar-silver hover:text-white hover:border-white/20 rounded-lg transition-colors text-sm"
          >
            Meet the Team
          </Link>
        </div>
      </section>
    </>
  );
}
