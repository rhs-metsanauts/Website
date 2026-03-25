import ImagePlaceholder from "@/components/ImagePlaceholder";
import FadeIn from "@/components/FadeIn";

const members = [
  {
    name: "Neil Rao",
    initials: "NR",
    role: "Design Lead & BothScape Builder",
    desc: "Drives the overall design vision for the project and leads construction of BothScape — the 8′ × 8′ dual-surface terrain simulation replicating the lunar south pole and ancient Martian terrain. Responsible for material selection, structural layout, and ensuring the simulation meets the fidelity requirements of the HERA mission.",
  },
  {
    name: "Skanda",
    initials: "SK",
    role: "Hardware Lead",
    desc: "Owns the full hardware stack across all four rovers — electronics integration, motor systems, wiring harnesses, and physical assembly. Ensures every unit is built to spec and field-ready, leading hands-on fabrication and hardware-level troubleshooting throughout the build cycle.",
  },
  {
    name: "Arnav Sangle",
    initials: "AS",
    role: "Software Lead",
    desc: "Architects and develops the rover software suite, including the web-based astronaut control interface and the AI-powered natural language command mode. Maintains the codebase, oversees system integration between software and hardware, and leads the team's web presence.",
  },
  {
    name: "Sanay Tyagi",
    initials: "ST",
    role: "Financial Lead & Documentation Manager",
    desc: "Manages the team's budget, tracks expenditures across all hardware and materials, and coordinates procurement. Also owns all project documentation — maintaining accurate technical records, write-ups, and submission materials to ensure the project is presentation-ready for FDR.",
  },
  {
    name: "Advay Singi",
    initials: "AS",
    role: "Operations Lead",
    desc: "Oversees day-to-day project operations — coordinating schedules, managing team workflows, and keeping milestones on track. Leads integration testing and deployment protocols to make sure all subsystems work together reliably before any mission scenario.",
  },
  {
    name: "Arun Rebbapragada",
    initials: "AR",
    role: "Software & Communications",
    desc: "Develops the rover communication stack and contributes to the control software pipeline. Focuses on LoRa protocol implementation and ensuring reliable data transfer between rovers and the HERA habitat under real-world signal constraints.",
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
