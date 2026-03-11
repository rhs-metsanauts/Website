export default function InnovationsPage() {
  return (
    <div className="py-16 sm:py-24 px-5">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs text-text-muted uppercase tracking-widest mb-2">Design</p>
        <h1 className="text-3xl font-bold text-text-bright mb-3">Key Innovations</h1>
        <p className="text-text-muted mb-10">What makes our approach different from a standard rover build.</p>

        <div className="space-y-8">
          <div>
            <h2 className="text-base font-semibold text-text-bright mb-1">Bottom-mounted solar panels</h2>
            <p className="text-sm text-text-muted leading-relaxed">
              The panels sit on the underside of the rover. Because the rocker-bogie suspension is
              flexible, the panels can tilt upward to catch sunlight even when the sun sits low on
              the horizon — like on the lunar south pole. This is the opposite of where most designs
              place them, and it works because of how the suspension geometry shifts.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-text-bright mb-1">LoRa fallback communication</h2>
            <p className="text-sm text-text-muted leading-relaxed">
              When the rover moves beyond WiFi range (which happens quickly in field conditions),
              it automatically falls back to LoRa. This gives astronauts basic command capability
              up to ~1 km without any manual switching. LoRa is low-power and doesn&apos;t need
              infrastructure — just a transmitter module and a receiver.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-text-bright mb-1">Astronaut-friendly control app</h2>
            <p className="text-sm text-text-muted leading-relaxed">
              The rover is controlled through a web app designed for people who aren&apos;t engineers.
              Predefined commands cover common tasks. There&apos;s also an AI-powered interface that
              can generate control code dynamically — an astronaut describes what they want the rover
              to do in plain language, and the system writes the command.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-text-bright mb-1">Local-only networking</h2>
            <p className="text-sm text-text-muted leading-relaxed">
              A laptop hosts a LAN that the rover connects to directly. No internet dependency.
              This matters because HERA simulations don&apos;t have external network access, and
              real lunar missions obviously won&apos;t either.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-text-bright mb-1">Half-tread wheel system</h2>
            <p className="text-sm text-text-muted leading-relaxed">
              Rather than bare wheels or full tank treads, we use a half-tread design. It gives
              meaningfully more grip than wheels alone (important on loose regolith) without the
              weight and complexity penalty of full treads. Each of the 6 wheels is independently
              motored.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-text-bright mb-1">Powered suspension</h2>
            <p className="text-sm text-text-muted leading-relaxed">
              The suspension isn&apos;t just passive — it actively adjusts the rover&apos;s body
              position. It can shift to match terrain angles or orient the chassis toward the sun
              for better solar charging. This dual purpose (terrain adaptation + power optimization)
              comes from a single mechanical system.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
