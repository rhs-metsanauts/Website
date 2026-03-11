import SectionHeading from "@/components/SectionHeading";
import ImagePlaceholder from "@/components/ImagePlaceholder";

const researchSections = [
  {
    title: "LoRa Communication",
    items: [
      "RP2040 coprocessor powers a LoRa-based communication module",
      "LoRa selected over Bluetooth for superior range and reliability in obstructed settings",
      "Enables low-power, long-distance communication between rovers and the habitat",
      "USB connection allows straightforward module swapping and reconfiguration",
      "Supports extended operational distances from base station",
    ],
    color: "from-purple-500/20 to-purple-600/5",
    border: "border-purple-500/20",
  },
  {
    title: "Adaptive Solar Tracking & Power Management",
    items: [
      "Dual-sided solar tracking system utilizing light-dependent resistors (LDRs)",
      "Compares light intensity across surfaces to optimize solar panel exposure",
      "Automatic body rotation maximizes energy collection during low-angle sunlight",
      "Reversible design accommodates rover flips and terrain shifts",
      "Investigated MIT's electrostatic dust-removal technology using electric fields",
      "Critical for sustained surface operations",
    ],
    color: "from-yellow-500/20 to-yellow-600/5",
    border: "border-yellow-500/20",
  },
  {
    title: "Mechanical Resilience & Stress-Testing",
    items: [
      "Design prioritizes predictable, easy-to-replace components",
      "Modular testing of treads, motors, and solar panel mounts",
      "Inspired by NASA's wheel-spring patent for improved shock absorption",
      "Spring-integrated wheel cutouts enhance traction on uneven surfaces",
      "Onboard video documentation records all rover operations",
      "Supports rapid repairs by astronauts or autonomous systems",
    ],
    color: "from-orange-500/20 to-orange-600/5",
    border: "border-orange-500/20",
  },
  {
    title: "Enhanced Situational Awareness Through Cameras",
    items: [
      "Each rover includes a pivoting camera system",
      "Secondary camera mounted on the claw for tool perspective",
      "Enables remote operation in low-light or obstructed conditions",
      "Supports tarp-over-the-crater testing scenarios in darkness",
      "Operators rely on onboard sensors and video feeds when external light is unavailable",
    ],
    color: "from-cyan-500/20 to-cyan-600/5",
    border: "border-cyan-500/20",
  },
];

export default function ResearchPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 starfield">
        <div className="absolute inset-0 bg-gradient-to-b from-space-black/80 to-space-black" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">Research</h1>
          <p className="text-lg text-lunar-silver/60">Cooperative Robotics for Lunar Exploration</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-space-gray/50 border border-white/5 rounded-xl p-8 md:p-10">
            <p className="text-lunar-silver/80 leading-relaxed text-lg">
              Our team develops small, resilient robots designed to collaborate during extended
              lunar simulations, including NASA&apos;s HERA missions. Rather than depending on
              individual rovers, our system employs multiple units linked through mesh networking,
              enabling information sharing, task coordination, and continued functionality despite
              unit failures.
            </p>
            <p className="text-lunar-silver/60 leading-relaxed mt-4">
              This collaborative strategy reflects anticipated approaches for future lunar deployment
              involving robot swarms for exploration, logistics, and environmental assessment. The
              initiative includes an accessible software library with configurable prewritten programs
              for non-robotics specialists.
            </p>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeading title="Research Areas" subtitle="Technical deep-dives into our core systems" />

          <div className="grid md:grid-cols-2 gap-6">
            {researchSections.map((section) => (
              <div
                key={section.title}
                className={`p-6 rounded-xl bg-gradient-to-br ${section.color} border ${section.border}`}
              >
                <h3 className="text-lg font-bold text-white mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-lunar-silver/70">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/30 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Documentation */}
      <section className="py-20 bg-space-dark px-4">
        <div className="max-w-4xl mx-auto">
          <SectionHeading title="Technical Documentation" subtitle="Supporting documents and references" />
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              "System Architecture Diagram",
              "Communication Protocol Specification",
              "Mechanical Design Report",
              "Software Library Documentation",
            ].map((doc) => (
              <div key={doc} className="p-5 rounded-xl bg-space-gray/50 border border-white/5 flex items-center gap-4">
                <svg className="w-8 h-8 text-accent-cyan shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
                <div>
                  <p className="text-sm font-medium text-white">{doc}</p>
                  <p className="text-xs text-lunar-silver/40">PDF &middot; Placeholder</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
