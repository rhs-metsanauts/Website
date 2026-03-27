import ImagePlaceholder from "@/components/ImagePlaceholder";
import FadeIn from "@/components/FadeIn";

const members = [
  {
    name: "Neil Rao",
    initials: "NR",
    role: "Design Lead & BothScape Builder",
    desc: (
      <>
        Drives the overall <strong className="text-blue font-bold">design vision</strong> for the project and leads construction of{" "}
        <strong className="text-blue font-bold">BothScape</strong> — the 8′ × 8′ dual-surface terrain simulation replicating the{" "}
        <strong className="text-blue font-bold">lunar south pole</strong> and ancient Martian terrain. Responsible for material selection, structural layout, and mission fidelity.
      </>
    ),
  },
  {
    name: "Arnav Sangle",
    initials: "AS",
    role: "Software Lead",
    desc: (
      <>
        Architects and develops the <strong className="text-blue font-bold">rover software suite</strong>, including the web-based{" "}
        <strong className="text-blue font-bold">astronaut control interface</strong> and the{" "}
        <strong className="text-blue font-bold">AI-powered natural language command mode</strong>. Maintains the codebase and leads the team&apos;s web presence.
      </>
    ),
  },
  {
    name: "Sanay Tyagi",
    initials: "ST",
    role: "Financial Lead & Documentation Manager",
    desc: (
      <>
        Manages the team&apos;s <strong className="text-blue font-bold">budget</strong> and tracks expenditures across all hardware and materials. Owns all{" "}
        <strong className="text-blue font-bold">project documentation</strong> — technical records, write-ups, and submission materials for FDR.
      </>
    ),
  },
  {
    name: "Advay Singi",
    initials: "AS",
    role: "Operations Lead",
    desc: (
      <>
        Oversees day-to-day <strong className="text-blue font-bold">project operations</strong> — coordinating schedules, managing team workflows, and keeping milestones on track. Leads{" "}
        <strong className="text-blue font-bold">integration testing</strong> and deployment protocols across all subsystems.
      </>
    ),
  },
  {
    name: "Arun Rebbapragada",
    initials: "AR",
    role: "Hardware Lead",
    desc: (
      <>
        Owns the full <strong className="text-blue font-bold">hardware stack</strong> across all four rovers —{" "}
        <strong className="text-blue font-bold">electronics integration</strong>, motor systems, wiring harnesses, and physical assembly. Leads hands-on fabrication and hardware-level troubleshooting.
      </>
    ),
  },
];

export default function TeamPage() {
  return (
    <div className="py-20 sm:py-28 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <FadeIn>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-blue/30" />
            <span className="tech-label">Team</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-text-bright mb-3 tracking-tight">
            METSAnauts
          </h1>
          <p className="text-text-muted mb-4 text-base">Ranchview High School &mdash; Irving, TX</p>
          <div className="flex flex-wrap gap-3 mb-14">
            <span className="tech-label !text-[10px] px-2.5 py-1 rounded border border-blue/20 bg-blue-muted text-blue">NASA HUNCH Program</span>
            <span className="tech-label !text-[10px] px-2.5 py-1 rounded border border-blue/20 bg-blue-muted text-blue">FDR 2026</span>
          </div>
        </FadeIn>

        {/* Group photo */}
        <FadeIn delay={60}>
          <ImagePlaceholder label="Team group photo" aspectRatio="aspect-[16/7]" className="mb-16 rounded-2xl" />
        </FadeIn>

        {/* Members */}
        <FadeIn>
          <h2 className="text-2xl font-bold text-text-bright mb-8">Members</h2>
        </FadeIn>
        <div className="grid sm:grid-cols-2 gap-5 mb-16">
          {members.map((member, i) => (
            <FadeIn key={member.name} delay={i * 70}>
              <div className="card-hover flex gap-5 p-6 bg-surface rounded-xl border border-border h-full">
                <div className="w-12 h-12 rounded-xl bg-blue/10 border border-blue/15 flex items-center justify-center shrink-0">
                  <span className="text-sm font-bold text-blue" style={{ fontFamily: "var(--font-jetbrains), monospace" }}>
                    {member.initials}
                  </span>
                </div>
                <div>
                  <p className="text-lg font-bold text-text-bright leading-tight">{member.name}</p>
                  <p className="tech-label !text-[10px] text-blue mt-1 mb-3">{member.role}</p>
                  <p className="text-base text-text-muted leading-relaxed">{member.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Context cards */}
        <FadeIn>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="bg-surface rounded-xl p-7 border border-border">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 rounded bg-blue/10 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <span className="tech-label !text-[10px] text-blue">Program</span>
              </div>
              <h3 className="text-lg font-bold text-text-bright mb-2">NASA HUNCH</h3>
              <p className="text-base text-text-muted leading-relaxed">
                <strong className="text-blue font-bold">High School Students United with NASA to Create Hardware.</strong>{" "}
                Connects high school teams with real NASA engineering challenges and facilities.
              </p>
            </div>
            <div className="bg-surface rounded-xl p-7 border border-border">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 rounded bg-blue/10 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                  </svg>
                </div>
                <span className="tech-label !text-[10px] text-blue">Facility</span>
              </div>
              <h3 className="text-lg font-bold text-text-bright mb-2">HERA at JSC</h3>
              <p className="text-base text-text-muted leading-relaxed">
                The <strong className="text-blue font-bold">Human Exploration Research Analog</strong> at Johnson Space Center simulates
                long-duration <strong className="text-blue font-bold">deep-space missions</strong> for astronaut research and training.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
