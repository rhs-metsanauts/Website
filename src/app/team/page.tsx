import SectionHeading from "@/components/SectionHeading";
import ImagePlaceholder from "@/components/ImagePlaceholder";

const teamMembers = [
  {
    name: "Neil Rao",
    role: "Team Lead / Engineering Design",
    bio: "Leads overall project direction and mechanical design of the rover fleet, coordinating between subteams.",
  },
  {
    name: "Arun Rebbapragada",
    role: "Software Systems",
    bio: "Develops the control software, AI-powered command interface, and communication protocols for the rover fleet.",
  },
  {
    name: "Arnav Sangle",
    role: "Software & Documentation",
    bio: "Works on rover software systems, project documentation, and web development for team communications.",
  },
  {
    name: "Sanay Tyagi",
    role: "Crater Modeling / BothScape",
    bio: "Designs and constructs the BothScape lunar and Martian terrain simulation environment.",
  },
  {
    name: "Advay Singi",
    role: "Mission Operations",
    bio: "Manages testing protocols, mission operation procedures, and integration testing across rover systems.",
  },
];

export default function TeamPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 starfield">
        <div className="absolute inset-0 bg-gradient-to-b from-space-black/80 to-space-black" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">Our Team</h1>
          <p className="text-lg text-lunar-silver/60">
            HERA Rover & BothScape Project &middot; Ranchview High School
          </p>
        </div>
      </section>

      {/* Team Context */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lunar-silver/70 leading-relaxed text-lg">
            We are five students from Ranchview High School in Irving, Texas, working as part
            of the NASA HUNCH program. Our team operates with dedicated subteams for engineering
            design, software systems, crater modeling, documentation, and mission
            operations&mdash;functioning as an applied R&D unit.
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="p-6 rounded-xl bg-space-gray/50 border border-white/5 card-hover text-center"
              >
                <div className="w-20 h-20 rounded-full bg-space-dark border-2 border-accent-cyan/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent-cyan">
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white">{member.name}</h3>
                <p className="text-sm text-accent-cyan mb-3">{member.role}</p>
                <p className="text-sm text-lunar-silver/60 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Photo Placeholder */}
      <section className="py-16 bg-space-dark px-4">
        <div className="max-w-4xl mx-auto">
          <SectionHeading title="Team Photo" />
          <ImagePlaceholder label="Team group photo" aspectRatio="aspect-[16/9]" />
        </div>
      </section>

      {/* Program Info */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <SectionHeading title="About NASA HUNCH" />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-space-gray/50 border border-white/5">
              <h4 className="text-lg font-bold text-white mb-3">NASA HUNCH</h4>
              <p className="text-sm text-lunar-silver/60 leading-relaxed">
                High School Students United with NASA to Create Hardware. A program that
                connects student teams with real NASA engineering challenges, providing
                hands-on experience in aerospace design and fabrication.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-space-gray/50 border border-white/5">
              <h4 className="text-lg font-bold text-white mb-3">HERA Program</h4>
              <p className="text-sm text-lunar-silver/60 leading-relaxed">
                The Human Exploration Research Analog (HERA) at Johnson Space Center simulates
                deep-space missions. Our rovers and terrain are designed to operate within HERA
                mission scenarios, supporting astronaut research and training.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
