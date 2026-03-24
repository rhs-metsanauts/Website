import FadeIn from "@/components/FadeIn";

const innovations = [
  {
    title: "Bottom-mounted solar panels",
    tag: "POWER",
    desc: "The panels sit on the underside of the rover. Because the rocker-bogie suspension is flexible, the panels can tilt upward to catch sunlight even when the sun sits low on the horizon \u2014 like on the lunar south pole. This is the opposite of where most designs place them, and it works because of how the suspension geometry shifts.",
  },
  {
    title: "LoRa fallback communication",
    tag: "COMMS",
    desc: "When the rover moves beyond WiFi range (which happens quickly in field conditions), it automatically falls back to LoRa. This gives astronauts basic command capability up to ~1 km without any manual switching. LoRa is low-power and doesn\u2019t need infrastructure \u2014 just a transmitter module and a receiver.",
  },
  {
    title: "Astronaut-friendly control app",
    tag: "SOFTWARE",
    desc: "The rover is controlled through a web app designed for people who aren\u2019t engineers. Predefined commands cover common tasks. There\u2019s also an AI-powered interface that can generate control code dynamically \u2014 an astronaut describes what they want the rover to do in plain language, and the system writes the command.",
  },
  {
    title: "Local-only networking",
    tag: "NETWORK",
    desc: "A laptop hosts a LAN that the rover connects to directly. No internet dependency. This matters because HERA simulations don\u2019t have external network access, and real lunar missions obviously won\u2019t either.",
  },
  {
    title: "Half-tread wheel system",
    tag: "MOBILITY",
    desc: "Rather than bare wheels or full tank treads, we use a half-tread design. It gives meaningfully more grip than wheels alone (important on loose regolith) without the weight and complexity penalty of full treads. Each of the 6 wheels is independently motored.",
  },
  {
    title: "Powered suspension",
    tag: "MECHANICAL",
    desc: "The suspension isn\u2019t just passive \u2014 it actively adjusts the rover\u2019s body position. It can shift to match terrain angles or orient the chassis toward the sun for better solar charging. This dual purpose (terrain adaptation + power optimization) comes from a single mechanical system.",
  },
];

export default function InnovationsPage() {
  return (
    <div className="py-20 sm:py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-amber/40" />
            <span className="tech-label">Section 04</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-text-bright mb-4 tracking-tight">Key Innovations</h1>
          <p className="text-text-muted mb-12">What makes our approach different from a standard rover build.</p>
        </FadeIn>

        <div className="space-y-5">
          {innovations.map((item, i) => (
            <FadeIn key={item.title} delay={i * 80}>
              <div className="bg-surface rounded-xl p-6 border border-border card-hover">
                <span className="tech-label !text-[9px] text-amber/70 mb-2 block">{item.tag}</span>
                <h2 className="font-semibold text-text-bright mb-2">{item.title}</h2>
                <p className="text-sm text-text-muted leading-relaxed">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
