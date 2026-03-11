export default function ResearchPage() {
  return (
    <div className="py-16 sm:py-24 px-5">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs text-text-muted uppercase tracking-widest mb-2">Technical</p>
        <h1 className="text-3xl font-bold text-text-bright mb-3">Research</h1>
        <p className="text-text-muted mb-10">Cooperative robotics for lunar exploration.</p>

        <div className="space-y-4 mb-12">
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

        <hr className="border-border mb-12" />

        {/* LoRa */}
        <h2 className="text-lg font-semibold text-text-bright mb-2">LoRa communication</h2>
        <ul className="space-y-2 mb-10">
          {[
            "RP2040 coprocessor powers the LoRa-based communication module",
            "Chosen over Bluetooth for superior range and reliability in obstructed settings",
            "Enables low-power, long-distance communication between rovers and habitat",
            "USB connection allows straightforward module swapping and reconfiguration",
          ].map((item) => (
            <li key={item} className="flex gap-2 text-sm text-text-muted leading-relaxed">
              <span className="mt-2 w-1 h-1 rounded-full bg-border shrink-0" />
              {item}
            </li>
          ))}
        </ul>

        {/* Solar */}
        <h2 className="text-lg font-semibold text-text-bright mb-2">Adaptive solar tracking & power</h2>
        <ul className="space-y-2 mb-10">
          {[
            "Dual-sided tracking using light-dependent resistors (LDRs)",
            "Compares light intensity across surfaces to optimize panel exposure",
            "Automatic body rotation for maximum energy collection at low sun angles",
            "Reversible design accommodates rover flips and terrain shifts",
            "Investigated MIT's electrostatic dust-removal tech using electric fields instead of brushes",
          ].map((item) => (
            <li key={item} className="flex gap-2 text-sm text-text-muted leading-relaxed">
              <span className="mt-2 w-1 h-1 rounded-full bg-border shrink-0" />
              {item}
            </li>
          ))}
        </ul>

        {/* Mechanical */}
        <h2 className="text-lg font-semibold text-text-bright mb-2">Mechanical resilience & stress-testing</h2>
        <ul className="space-y-2 mb-10">
          {[
            "Design prioritizes predictable, easy-to-replace components",
            "Modular testing of treads, motors, and solar panel mounts",
            "Inspired by NASA's wheel-spring patent for improved shock absorption",
            "Spring-integrated wheel cutouts for better traction on uneven surfaces",
            "Onboard video documentation of all rover operations",
          ].map((item) => (
            <li key={item} className="flex gap-2 text-sm text-text-muted leading-relaxed">
              <span className="mt-2 w-1 h-1 rounded-full bg-border shrink-0" />
              {item}
            </li>
          ))}
        </ul>

        {/* Cameras */}
        <h2 className="text-lg font-semibold text-text-bright mb-2">Situational awareness</h2>
        <ul className="space-y-2 mb-12">
          {[
            "Each rover has a pivoting camera system",
            "Secondary camera on the claw for tool-perspective operation",
            "Enables remote operation in low-light or obstructed conditions",
            "Supports tarp-over-the-crater testing scenarios in total darkness",
          ].map((item) => (
            <li key={item} className="flex gap-2 text-sm text-text-muted leading-relaxed">
              <span className="mt-2 w-1 h-1 rounded-full bg-border shrink-0" />
              {item}
            </li>
          ))}
        </ul>

        <hr className="border-border mb-12" />

        <h2 className="text-lg font-semibold text-text-bright mb-4">Documentation</h2>
        <div className="space-y-2">
          {[
            "System Architecture Diagram",
            "Communication Protocol Specification",
            "Mechanical Design Report",
            "Software Library Documentation",
          ].map((doc) => (
            <div key={doc} className="flex items-center gap-3 py-2.5 px-4 rounded-md border border-border">
              <svg className="w-4 h-4 text-text-muted shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
              <span className="text-sm text-text">{doc}</span>
              <span className="text-xs text-text-muted ml-auto">Placeholder</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
