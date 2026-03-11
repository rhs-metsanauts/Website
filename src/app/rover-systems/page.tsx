import SectionHeading from "@/components/SectionHeading";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export default function RoverSystemsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 starfield">
        <div className="absolute inset-0 bg-gradient-to-b from-space-black/80 to-space-black" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">Rover Systems</h1>
          <p className="text-lg text-lunar-silver/60">Engineering overview of our lunar/Martian exploration rovers</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeading title="Systems Overview" subtitle="Key design features powering our rover fleet" />

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              {
                title: "Rocker-Bogie Suspension",
                desc: "Features a base with active solar tracking. The flexible suspension handles harsh terrain changes while keeping the rover and its components upright and unharmed.",
              },
              {
                title: "Half-Tread Wheel System",
                desc: "Increased surface grip for navigating coarse regolith and rocky terrain. Provides greater stability over traditional wheel systems.",
              },
              {
                title: "Solar Panel Charging",
                desc: "Highly flexible chassis allows simple and efficient recharging via underside solar panels with 60-degree rotation to maximize solar ray capture.",
              },
            ].map((feature) => (
              <div key={feature.title} className="p-6 rounded-xl bg-space-gray/50 border border-white/5 card-hover">
                <h3 className="text-lg font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-sm text-lunar-silver/60 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Key specs */}
          <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto mb-16">
            {[
              { value: "6", label: "Independent Motors" },
              { value: "RPi", label: "Control System" },
              { value: "Claw", label: "Sample Collection" },
            ].map((spec) => (
              <div key={spec.label} className="text-center p-4 rounded-lg bg-nasa-blue/10 border border-nasa-blue/20">
                <div className="text-2xl font-black text-accent-cyan">{spec.value}</div>
                <div className="text-xs text-lunar-silver/50 mt-1">{spec.label}</div>
              </div>
            ))}
          </div>

          <ImagePlaceholder label="Rover CAD Render / Exploded View" className="max-w-3xl mx-auto" />
        </div>
      </section>

      {/* Communication Systems */}
      <section className="py-20 bg-space-dark px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeading title="Communication Systems" subtitle="Multi-protocol wireless control architecture" />

          {/* Control Flow Diagram */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
            {[
              { label: "Laptop App", sub: "Sends Command" },
              { label: "LoRa Transmitter", sub: "Packages Signal" },
              { label: "LoRa Receiver", sub: "Decodes Signal" },
              { label: "Rover", sub: "Executes Command" },
            ].map((step, i) => (
              <div key={step.label} className="flex items-center gap-4">
                <div className="text-center p-4 rounded-xl bg-space-gray border border-white/10 min-w-[140px]">
                  <div className="text-sm font-bold text-white">{step.label}</div>
                  <div className="text-xs text-lunar-silver/50 mt-1">{step.sub}</div>
                </div>
                {i < 3 && (
                  <svg className="w-6 h-6 text-accent-cyan hidden md:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </div>
            ))}
          </div>

          {/* Communication Stack */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              {
                protocol: "Bluetooth",
                color: "from-blue-500/20 to-blue-600/5",
                borderColor: "border-blue-500/20",
                desc: "Close-up video transfer from the claw-mounted camera for precise operation guidance.",
              },
              {
                protocol: "LoRa",
                color: "from-purple-500/20 to-purple-600/5",
                borderColor: "border-purple-500/20",
                desc: "Long-range communication when other links are unavailable. Reliable up to ~1 km distance.",
              },
              {
                protocol: "LAN (WiFi)",
                color: "from-teal-500/20 to-teal-600/5",
                borderColor: "border-teal-500/20",
                desc: "A local wireless network that keeps the rover reliably connected with no internet needed.",
              },
            ].map((comm) => (
              <div
                key={comm.protocol}
                className={`p-6 rounded-xl bg-gradient-to-br ${comm.color} border ${comm.borderColor} card-hover`}
              >
                <h3 className="text-lg font-bold text-white mb-3">{comm.protocol}</h3>
                <p className="text-sm text-lunar-silver/60 leading-relaxed">{comm.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-space-gray/30 border border-white/5 rounded-xl p-6 max-w-3xl mx-auto text-center">
            <p className="text-lunar-silver/70 text-sm leading-relaxed">
              Astronaut-friendly app with intuitive interface for sending predefined and
              automatically generated commands without technical knowledge. An AI-powered
              interface dynamically generates code for easier operation.
            </p>
          </div>
        </div>
      </section>

      {/* Mobility & Claw */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeading title="Mobility & Claw System" />

          <div className="grid md:grid-cols-2 gap-10 mb-16">
            {/* 6-Wheel Drive */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">6-Wheel Drive with Half-Tread System</h3>
              <ul className="space-y-3">
                {[
                  "6 independently-motored wheels give the rover full control across loose, uneven terrain",
                  "Half-tread design keeps it stable and grounded on granular surfaces",
                  "Each wheel is managed by its own dedicated controller for precise movement",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-lunar-silver/70">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-cyan shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Suspension */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Suspension System</h3>
              <ul className="space-y-3">
                {[
                  "Low center of gravity keeps the rover balanced on slopes and uneven surfaces",
                  "Front wheels climb obstacles while rear wheels hold steady",
                  "Weight distributed evenly — no single point takes too much strain",
                  "High ground clearance increases maneuverability",
                  "Suspension adjusts dynamically for the terrain",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-lunar-silver/70">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-cyan shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Robotic Claw & LDR */}
          <div className="grid md:grid-cols-2 gap-10">
            <div className="p-6 rounded-xl bg-space-gray/50 border border-white/5">
              <h3 className="text-xl font-bold text-white mb-4">Robotic Claw</h3>
              <ul className="space-y-3">
                {[
                  "Collects loose soil and rocks to simulate mining and sample collection tasks",
                  "Camera mounted on the claw for precise positioning and control",
                  "Controlled remotely via LoRa or WiFi interface depending on range",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-lunar-silver/70">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-lunar-gold shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <ImagePlaceholder label="Robotic Claw Close-up" className="mt-6" />
            </div>

            <div className="p-6 rounded-xl bg-space-gray/50 border border-white/5">
              <h3 className="text-xl font-bold text-white mb-4">LDR Solar Tracking System</h3>
              <ul className="space-y-3">
                {[
                  "Light Dependent Resistor on the underside continuously reads surrounding light levels",
                  "Raspberry Pi processes readings to find the strongest light direction",
                  "Rover repositions itself to maximize solar panel exposure automatically",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-lunar-silver/70">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-lunar-gold shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <ImagePlaceholder label="LDR System Diagram" className="mt-6" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
