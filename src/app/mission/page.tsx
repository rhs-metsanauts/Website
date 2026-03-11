import SectionHeading from "@/components/SectionHeading";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export default function MissionPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 starfield">
        <div className="absolute inset-0 bg-gradient-to-b from-space-black/80 to-space-black" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">Our Mission</h1>
          <p className="text-lg text-lunar-silver/60">HERA Rover & BothScape Simulation Project</p>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <SectionHeading title="Problem Statement" />
          <div className="bg-space-gray/50 border border-white/5 rounded-xl p-8 md:p-10">
            <p className="text-lunar-silver/80 leading-relaxed text-lg">
              The HERA program at NASA is part of the Artemis II series of missions that plan to launch
              within the next 1&ndash;2 years. Our challenge is to aid the astronauts&mdash;teachers,
              geologists, and specialists&mdash;on these missions by designing a set of 4 rovers to
              traverse the harsh environments of the Moon and Mars, alongside a model landscape that
              accurately simulates those extraterrestrial conditions.
            </p>
            <p className="text-lunar-silver/60 leading-relaxed mt-4">
              In practice, these rovers would be used to scout and map the terrain, as well as for
              the mining of precious metals.
            </p>
          </div>
        </div>
      </section>

      {/* Goals */}
      <section className="py-20 bg-space-dark px-4">
        <div className="max-w-5xl mx-auto">
          <SectionHeading title="Our Goals" subtitle="What we aim to achieve with this project" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🌑",
                title: "Lunar Environment",
                desc: "Build an accurate 8 ft × 8 ft lunar environment where rovers can navigate and carry out tasks.",
              },
              {
                icon: "🤖",
                title: "Multi-Mission Rover",
                desc: "Create a physical rover capable of carrying out mining, support, and reconnaissance missions.",
              },
              {
                icon: "🧪",
                title: "Performance Testing",
                desc: "Test the performance of rovers on mock Lunar and Martian conditions to validate design choices.",
              },
              {
                icon: "🚀",
                title: "Mission Immersion",
                desc: "Immerse astronauts into the experience of a mission with realistic simulation environments.",
              },
              {
                icon: "🎮",
                title: "User-Friendly Control",
                desc: "Make a user-friendly way to control and adjust the rover, accessible to non-technical users.",
              },
            ].map((goal) => (
              <div
                key={goal.title}
                className="p-6 rounded-xl bg-space-gray/50 border border-white/5 card-hover"
              >
                <div className="text-3xl mb-4">{goal.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{goal.title}</h3>
                <p className="text-sm text-lunar-silver/60 leading-relaxed">{goal.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Context */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">NASA HUNCH &amp; HERA</h3>
            <p className="text-lunar-silver/70 leading-relaxed mb-4">
              NASA HUNCH (High School Students United with NASA to Create Hardware) connects student
              teams with real NASA challenges. The HERA (Human Exploration Research Analog) is a
              three-story habitat at Johnson Space Center used to simulate deep-space missions.
            </p>
            <p className="text-lunar-silver/70 leading-relaxed">
              Our team operates with dedicated subteams for engineering design, software systems,
              crater modeling, documentation, and mission operations&mdash;functioning as an applied
              R&D unit building real hardware for NASA&apos;s exploration programs.
            </p>
          </div>
          <ImagePlaceholder label="HERA Habitat / NASA HUNCH Logo" />
        </div>
      </section>
    </>
  );
}
