import ImagePlaceholder from "@/components/ImagePlaceholder";
import FadeIn from "@/components/FadeIn";

const members = [
  { name: "Neil Rao", role: "Engineering Design Lead", desc: "Leads mechanical design of the rover fleet and coordinates across subteams." },
  { name: "Arun Rebbapragada", role: "Software Systems", desc: "Develops control software, the AI command interface, and communication protocols." },
  { name: "Arnav Sangle", role: "Software & Documentation", desc: "Builds rover software, handles project documentation and web presence." },
  { name: "Sanay Tyagi", role: "BothScape / Crater Modeling", desc: "Designs and constructs the lunar and Martian terrain simulation." },
  { name: "Advay Singi", role: "Mission Operations", desc: "Manages testing protocols and integration testing across rover systems." },
];

export default function TeamPage() {
  return (
    <div className="py-20 sm:py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-amber/40" />
            <span className="tech-label">Team</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-text-bright mb-4 tracking-tight">Team</h1>
          <p className="text-text-muted mb-12">
            Ranchview High School, Irving TX &mdash; NASA HUNCH Program, 2026
          </p>
        </FadeIn>

        <FadeIn delay={100}>
          <p className="text-text leading-relaxed mb-12">
            Five students working as an applied R&D unit with subteams for engineering design,
            software systems, crater modeling, documentation, and mission operations.
          </p>
        </FadeIn>

        <div className="space-y-4 mb-14">
          {members.map((member, i) => (
            <FadeIn key={member.name} delay={i * 80}>
              <div className="flex gap-4 p-5 bg-surface rounded-xl border border-border card-hover">
                <div className="w-11 h-11 rounded-full bg-amber-soft border border-border flex items-center justify-center shrink-0">
                  <span className="text-sm font-semibold text-amber" style={{ fontFamily: "var(--font-syne), sans-serif" }}>
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-text-bright">{member.name}</p>
                  <p className="text-xs text-amber mb-1" style={{ fontFamily: "var(--font-jetbrains), monospace", letterSpacing: "0.08em" }}>{member.role}</p>
                  <p className="text-sm text-text-muted">{member.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <ImagePlaceholder label="Team group photo" className="mb-14" />
        </FadeIn>

        <FadeIn>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-surface rounded-xl p-6 border border-border">
              <span className="tech-label !text-[9px] text-amber/70 mb-2 block">Program</span>
              <h3 className="font-semibold text-text-bright mb-2">NASA HUNCH</h3>
              <p className="text-sm text-text-muted leading-relaxed">
                High School Students United with NASA to Create Hardware. Connects student
                teams with real NASA engineering challenges.
              </p>
            </div>
            <div className="bg-surface rounded-xl p-6 border border-border">
              <span className="tech-label !text-[9px] text-amber/70 mb-2 block">Facility</span>
              <h3 className="font-semibold text-text-bright mb-2">HERA Program</h3>
              <p className="text-sm text-text-muted leading-relaxed">
                The Human Exploration Research Analog at Johnson Space Center simulates
                deep-space missions for astronaut research and training.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
