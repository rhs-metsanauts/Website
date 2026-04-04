import { ReactElement } from "react";
import FadeIn from "@/components/FadeIn";

const tagIcons: Record<string, ReactElement> = {
  POWER: (
    <svg className="w-4 h-4 text-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  ),
  COMMS: (
    <svg className="w-4 h-4 text-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
    </svg>
  ),
  SOFTWARE: (
    <svg className="w-4 h-4 text-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
    </svg>
  ),
  NETWORK: (
    <svg className="w-4 h-4 text-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  ),
  MOBILITY: (
    <svg className="w-4 h-4 text-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
    </svg>
  ),
  MECHANICAL: (
    <svg className="w-4 h-4 text-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
    </svg>
  ),
};

const innovations = [
  {
    title: "Bottom-mounted solar panels",
    tag: "POWER",
    desc: "The panels sit on the underside of the rover. Because the rocker-bogie suspension is flexible, the panels can tilt upward to catch sunlight even when the sun sits low on the horizon, even on the lunar south pole. This is the opposite of where most designs place them, and it works because of how the suspension geometry shifts.",
  },
  {
    title: "LoRa fallback communication",
    tag: "COMMS",
    desc: "When the rover moves beyond WiFi range (which happens quickly in field conditions), it automatically falls back to LoRa. This gives astronauts basic command capability up to ~1 km without any manual switching. LoRa is low-power and doesn't need infrastructure. It only needs a transmitter module and a receiver.",
  },
  {
    title: "Astronaut-friendly control app",
    tag: "SOFTWARE",
    desc: "The rover is controlled through a web app designed for people who aren't engineers. Predefined commands cover common tasks. There's also an AI-powered interface that can generate control code dynamically. An astronaut describes what they want the rover to do in plain language, and the system writes the command.",
  },
  {
    title: "Local-only networking",
    tag: "NETWORK",
    desc: "A laptop hosts a LAN that the rover connects to directly. No internet dependency. This matters because HERA simulations don't have external network access, and real lunar missions obviously won't either.",
  },
  {
    title: "Half-tread wheel system",
    tag: "MOBILITY",
    desc: "Rather than bare wheels or full tank treads, we use a half-tread design. It gives meaningfully more grip than wheels alone (important on loose regolith) without the weight and complexity penalty of full treads. Each of the 6 wheels is independently motored.",
  },
  {
    title: "Powered suspension",
    tag: "MECHANICAL",
    desc: "The suspension isn't just passive. It actively adjusts the rover's body position. It can shift to match terrain angles or orient the chassis toward the sun for better solar charging. This dual purpose (terrain adaptation + power optimization) comes from a single mechanical system.",
  },
];

export default function InnovationsPage() {
  return (
    <div className="py-14 sm:py-20 px-3">
      <div className="max-w-[1400px] mx-auto">

        <FadeIn>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-blue/40" />
            <span className="tech-label !text-xs">Innovations</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-text-bright mb-4 tracking-tight leading-[1.08]">
            Key Innovations
          </h1>
          <p className="text-lg text-text-muted mb-14 max-w-2xl">
            What makes our approach different from a standard rover build.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-5">
          {innovations.map((item, i) => (
            <FadeIn key={item.title} delay={i * 70}>
              <div className="group relative glass-card rounded-xl p-6 card-hover h-full overflow-hidden">
                {/* Corner accents on hover */}
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-blue/40 rounded-tl-xl" />
                  <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-blue/40 rounded-tr-xl" />
                  <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-blue/40 rounded-bl-xl" />
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-blue/40 rounded-br-xl" />
                </div>

                {/* Icon + tag */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center">
                    {tagIcons[item.tag]}
                  </div>
                  <span className="tech-label !text-[10px] text-blue">{item.tag}</span>
                </div>

                <h2 className="font-semibold text-text-bright mb-3 text-base">{item.title}</h2>
                <p className="text-sm text-text-muted leading-relaxed">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </div>
  );
}
