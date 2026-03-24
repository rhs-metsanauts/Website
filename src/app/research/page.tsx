import FadeIn from "@/components/FadeIn";

export default function ResearchPage() {
  return (
    <div className="py-20 sm:py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-amber/40" />
            <span className="tech-label !text-xs">Section 06</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-text-bright mb-4 tracking-tight">Research</h1>
          <p className="text-text-muted mb-12">Cooperative robotics for lunar exploration.</p>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="space-y-4 mb-14">
            <p className="text-text leading-relaxed">
              We develop small, resilient robots designed to collaborate during extended lunar
              simulations, including NASA&apos;s HERA missions. Rather than depending on individual
              rovers, our system employs multiple units linked through mesh networking &mdash; enabling
              information sharing, task coordination, and continued functionality despite unit failures.
            </p>
            <p className="text-text-muted leading-relaxed">
              This collaborative strategy reflects anticipated approaches for future lunar deployment
              involving robot swarms for exploration, logistics, and environmental assessment. The
              initiative includes an accessible software library with configurable prewritten programs
              for non-robotics specialists.
            </p>
          </div>
        </FadeIn>

        {[
          {
            tag: "COMMS",
            title: "LoRa communication",
            items: [
              "RP2040 coprocessor powers the LoRa-based communication module",
              "Chosen over Bluetooth for superior range and reliability in obstructed settings",
              "Enables low-power, long-distance communication between rovers and habitat",
              "USB connection allows straightforward module swapping and reconfiguration",
            ],
          },
          {
            tag: "POWER",
            title: "Adaptive solar tracking & power",
            items: [
              "Dual-sided tracking using light-dependent resistors (LDRs)",
              "Compares light intensity across surfaces to optimize panel exposure",
              "Automatic body rotation for maximum energy collection at low sun angles",
              "Reversible design accommodates rover flips and terrain shifts",
              "Investigated MIT\u2019s electrostatic dust-removal tech using electric fields instead of brushes",
            ],
          },
          {
            tag: "MECHANICAL",
            title: "Mechanical resilience & stress-testing",
            items: [
              "Design prioritizes predictable, easy-to-replace components",
              "Modular testing of treads, motors, and solar panel mounts",
              "Inspired by NASA\u2019s wheel-spring patent for improved shock absorption",
              "Spring-integrated wheel cutouts for better traction on uneven surfaces",
              "Onboard video documentation of all rover operations",
            ],
          },
          {
            tag: "SENSORS",
            title: "Situational awareness",
            items: [
              "Each rover has a pivoting camera system",
              "Secondary camera on the claw for tool-perspective operation",
              "Enables remote operation in low-light or obstructed conditions",
              "Supports tarp-over-the-crater testing scenarios in total darkness",
            ],
          },
        ].map((section, si) => (
          <FadeIn key={section.title} delay={si * 80}>
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="tech-label !text-[11px] text-amber/70">{section.tag}</span>
                <div className="h-px flex-1 bg-border" />
              </div>
              <h2 className="text-xl font-bold text-text-bright mb-4">{section.title}</h2>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-text-muted leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-amber shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}

        <FadeIn>
          <h2 className="text-xl font-bold text-text-bright mb-5">Documentation</h2>
          <div className="space-y-2">
            {[
              "System Architecture Diagram",
              "Communication Protocol Specification",
              "Mechanical Design Report",
              "Software Library Documentation",
            ].map((doc) => (
              <div key={doc} className="flex items-center gap-3 py-3 px-5 rounded-xl border border-border hover:border-amber/25 hover:bg-surface transition-all cursor-default">
                <svg className="w-4 h-4 text-amber/60 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
                <span className="text-sm text-text-bright">{doc}</span>
                <span className="text-xs text-text-muted ml-auto tech-label !text-[11px]">Placeholder</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
