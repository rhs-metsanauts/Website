import ImagePlaceholder from "@/components/ImagePlaceholder";
import FadeIn from "@/components/FadeIn";

const members = [
  {
    name: "Neil Rao",
    initials: "NR",
    role: "Engineering Design Lead",
    desc: "Leads the mechanical design of the rover fleet — rocker-bogie suspension, half-tread wheels, and modular component architecture.",
  },
  {
    name: "Arun Rebbapragada",
    initials: "AR",
    role: "Software & Communications",
    desc: "Develops the rover control software, LoRa communication stack, and the AI-powered command interface for astronaut crew.",
  },
  {
    name: "Arnav Sangle",
    initials: "AS",
    role: "Software & Web",
    desc: "Builds rover firmware, manages project documentation, and maintains the team website and technical write-ups.",
  },
  {
    name: "Sanay Tyagi",
    initials: "ST",
    role: "Terrain & Crater Modeling",
    desc: "Designs and constructs BothScape — the 8′ × 8′ dual lunar/Martian terrain simulation using foamboard and diatomaceous earth regolith.",
  },
  {
    name: "Advay Singi",
    initials: "AS",
    role: "Mission Operations & Testing",
    desc: "Manages integration testing, documents operational procedures, and coordinates rover deployment protocols.",
  },
];

export default function TeamPage() {
  return (
    <div className="py-20 sm:py-28 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <FadeIn>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-accent/30" />
            <span className="tech-label">Team</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-text-bright mb-3 tracking-tight">
            METSAnauts
          </h1>
          <p className="text-text-muted mb-2">Ranchview High School &mdash; Irving, TX</p>
          <div className="flex flex-wrap gap-3 mb-12">
            <span className="tech-label !text-[10px] px-2.5 py-1 rounded border border-accent/20 bg-accent-soft text-accent">NASA HUNCH Program</span>
            <span className="tech-label !text-[10px] px-2.5 py-1 rounded border border-blue/20 bg-blue-muted text-blue">FDR 2026</span>
          </div>
        </FadeIn>

        {/* Group photo */}
        <FadeIn delay={60}>
          <ImagePlaceholder label="Team group photo" aspectRatio="aspect-[16/7]" className="mb-14 rounded-2xl" />
        </FadeIn>

        {/* Members */}
        <FadeIn>
          <h2 className="text-xl font-bold text-text-bright mb-6">Members</h2>
        </FadeIn>
        <div className="grid sm:grid-cols-2 gap-4 mb-14">
          {members.map((member, i) => (
            <FadeIn key={member.name} delay={i * 70}>
              <div className="card-hover flex gap-4 p-5 bg-surface rounded-xl border border-border h-full">
                <div className="w-12 h-12 rounded-xl bg-blue/10 border border-blue/15 flex items-center justify-center shrink-0">
                  <span className="text-sm font-bold text-blue" style={{ fontFamily: "var(--font-jetbrains), monospace" }}>
                    {member.initials}
                  </span>
                </div>
                <div>
                  <p className="font-bold text-text-bright leading-tight">{member.name}</p>
                  <p className="tech-label !text-[10px] text-accent mt-0.5 mb-2">{member.role}</p>
                  <p className="text-sm text-text-muted leading-relaxed">{member.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Context cards */}
        <FadeIn>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="bg-surface rounded-xl p-6 border border-border">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 rounded bg-blue/10 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <span className="tech-label !text-[10px] text-accent">Program</span>
              </div>
              <h3 className="font-bold text-text-bright mb-2">NASA HUNCH</h3>
              <p className="text-sm text-text-muted leading-relaxed">
                High School Students United with NASA to Create Hardware. Connects high school teams
                with real NASA engineering challenges and facilities.
              </p>
            </div>
            <div className="bg-surface rounded-xl p-6 border border-border">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 rounded bg-blue/10 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                  </svg>
                </div>
                <span className="tech-label !text-[10px] text-accent">Facility</span>
              </div>
              <h3 className="font-bold text-text-bright mb-2">HERA at JSC</h3>
              <p className="text-sm text-text-muted leading-relaxed">
                The Human Exploration Research Analog at Johnson Space Center simulates
                long-duration deep-space missions for astronaut research and training.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
