import ImagePlaceholder from "@/components/ImagePlaceholder";

export default function TeamPage() {
  return (
    <div className="py-16 sm:py-24 px-5">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs text-text-muted uppercase tracking-widest mb-2">People</p>
        <h1 className="text-3xl font-bold text-text-bright mb-3">Team</h1>
        <p className="text-text-muted mb-10">
          Ranchview High School, Irving TX &mdash; NASA HUNCH Program, 2026
        </p>

        <p className="text-text leading-relaxed mb-10">
          Five students working as an applied R&D unit with subteams for engineering design,
          software systems, crater modeling, documentation, and mission operations.
        </p>

        <div className="space-y-6 mb-12">
          {[
            { name: "Neil Rao", role: "Engineering Design Lead", desc: "Leads mechanical design of the rover fleet and coordinates across subteams." },
            { name: "Arun Rebbapragada", role: "Software Systems", desc: "Develops control software, the AI command interface, and communication protocols." },
            { name: "Arnav Sangle", role: "Software & Documentation", desc: "Builds rover software, handles project documentation and web presence." },
            { name: "Sanay Tyagi", role: "BothScape / Crater Modeling", desc: "Designs and constructs the lunar and Martian terrain simulation." },
            { name: "Advay Singi", role: "Mission Operations", desc: "Manages testing protocols and integration testing across rover systems." },
          ].map((member) => (
            <div key={member.name} className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-surface-2 border border-border flex items-center justify-center shrink-0">
                <span className="text-xs font-medium text-text-muted">
                  {member.name.split(" ").map((n) => n[0]).join("")}
                </span>
              </div>
              <div>
                <p className="text-sm font-medium text-text-bright">{member.name}</p>
                <p className="text-xs text-text-muted mb-1">{member.role}</p>
                <p className="text-sm text-text-muted">{member.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <ImagePlaceholder label="Team group photo" className="mb-12" />

        <hr className="border-border mb-12" />

        <div className="grid sm:grid-cols-2 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-text-bright mb-2">NASA HUNCH</h3>
            <p className="text-sm text-text-muted leading-relaxed">
              High School Students United with NASA to Create Hardware. Connects student
              teams with real NASA engineering challenges.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-text-bright mb-2">HERA Program</h3>
            <p className="text-sm text-text-muted leading-relaxed">
              The Human Exploration Research Analog at Johnson Space Center simulates
              deep-space missions for astronaut research and training.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
