import Image from "next/image";
import FadeIn from "@/components/FadeIn";

const specs = [
  ["Suspension", "Rocker-bogie with active solar tracking. Handles harsh terrain while keeping components upright."],
  ["Wheels", "Half-tread system for increased grip on coarse regolith and rocky terrain."],
  ["Solar", "Underside-mounted panels with 60° rotation to maximize capture at low sun angles."],
  ["Motors", "6 independently-controlled DC motors, one per wheel, each with a dedicated controller."],
  ["Compute", "Raspberry Pi 4B running the control system and sensor processing."],
  ["Claw", "Robotic sample collection arm with camera for precise remote guidance."],
];

const commsProtocols = [
  {
    proto: "WiFi",
    range: "~50 m",
    desc: "Local area network hosted on a laptop. No internet needed. Primary link for close operations.",
  },
  {
    proto: "LoRa",
    range: "~1 km",
    desc: "Long-range radio fallback. Used when WiFi signal drops. Low-power, no infrastructure needed.",
  },
  {
    proto: "BLE",
    range: "~10 m",
    desc: "Bluetooth for close-up video transfer from the claw-mounted camera.",
  },
];

export default function RoverSystemsPage() {
  return (
    <div className="py-14 sm:py-20 px-3">
      <div className="max-w-[1400px] mx-auto">

        {/* Header */}
        <FadeIn>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-blue/40" />
            <span className="tech-label !text-xs">Rover Systems</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-text-bright mb-4 tracking-tight leading-[1.08]">
            Rover Systems
          </h1>
          <p className="text-lg text-text-muted mb-12 max-w-2xl">
            Mechanical, electrical, and software breakdown of the rover fleet.
          </p>
        </FadeIn>

        {/* Hero image */}
        <FadeIn delay={100}>
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-border mb-14 shadow-[0_8px_48px_rgba(0,0,0,0.5)]">
            <Image
              src="/images/IMG_0678.jpg"
              alt="Rover on terrain"
              fill
              className="object-cover object-top"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/30 via-transparent to-transparent pointer-events-none" />
          </div>
        </FadeIn>

        {/* Specs table */}
        <FadeIn delay={150}>
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-6 bg-blue/30" />
            <h2 className="text-xl font-bold text-text-bright">Key Design Features</h2>
          </div>
          <div className="overflow-hidden border border-border rounded-xl mb-14">
            <table className="w-full text-sm">
              <tbody>
                {specs.map(([label, desc], i) => (
                  <tr
                    key={label}
                    className={`border-b border-border last:border-0 hover:bg-blue-soft transition-colors ${i % 2 === 0 ? "" : "bg-surface/40"}`}
                  >
                    <td
                      className="py-3.5 px-5 text-blue font-medium whitespace-nowrap align-top w-28"
                      style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: "0.78rem", letterSpacing: "0.06em" }}
                    >
                      {label}
                    </td>
                    <td className="py-3.5 px-5 text-text-muted">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>

        {/* Communication systems */}
        <FadeIn>
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-6 bg-blue/30" />
            <h2 className="text-xl font-bold text-text-bright">Communication Systems</h2>
          </div>
          <p className="text-sm text-text-muted mb-6 ml-9 max-w-2xl">
            Three protocols cover different ranges and use cases. The system falls back automatically
            from WiFi to LoRa when the rover moves out of range.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {commsProtocols.map((item) => (
              <div key={item.proto} className="flex flex-col gap-3 p-5 rounded-xl glass-card glow-border">
                <div className="flex items-center justify-between">
                  <span
                    className="text-xs font-bold text-blue bg-blue-muted px-3 py-1 rounded-md border border-blue/15"
                    style={{ fontFamily: "var(--font-jetbrains), monospace" }}
                  >
                    {item.proto}
                  </span>
                  <span className="tech-label !text-[10px] text-text-dim">{item.range}</span>
                </div>
                <p className="text-sm text-text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="ml-0 p-4 rounded-xl glass-card mb-14">
            <p className="text-sm text-text-muted leading-relaxed">
              Control flow:{" "}
              <span className="font-medium text-text-bright font-mono text-xs">
                Laptop App → LoRa Transmitter → LoRa Receiver → Rover
              </span>
              {" "}— Commands are packaged for reliable transmission, sent wirelessly, and acted on automatically.
            </p>
          </div>

          <div className="space-y-5 mb-14">
            <div className="relative w-full aspect-[900/320] rounded-xl overflow-hidden border border-border bg-bg">
              <Image src="/images/comms_flow.svg" alt="Communication flow diagram" fill className="object-contain" sizes="100vw" />
            </div>
            <div className="relative w-full aspect-[900/400] rounded-xl overflow-hidden border border-border bg-bg">
              <Image src="/images/rover_subsystems.svg" alt="Rover subsystems diagram" fill className="object-contain" sizes="100vw" />
            </div>
          </div>
        </FadeIn>

        {/* Mobility */}
        <FadeIn>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-6 bg-blue/30" />
            <h2 className="text-xl font-bold text-text-bright">Mobility & Suspension</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5 mb-14">
            {[
              {
                title: "6-wheel drive",
                points: [
                  "Full control across loose, uneven terrain",
                  "Half-tread design for stability on granular surfaces",
                  "Each wheel has its own dedicated controller",
                ],
              },
              {
                title: "Suspension",
                points: [
                  "Low center of gravity for balance on slopes",
                  "Front wheels climb obstacles, rear holds steady",
                  "Even weight distribution across all wheels",
                  "Adjusts dynamically for terrain",
                ],
              },
            ].map((card) => (
              <div key={card.title} className="glass-card rounded-xl p-6">
                <h3 className="font-semibold text-text-bright mb-4">{card.title}</h3>
                <ul className="space-y-2.5">
                  {card.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm text-text-muted">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue/60 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Claw + Solar */}
        <FadeIn>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-px w-6 bg-blue/30" />
                <h2 className="text-xl font-bold text-text-bright">Robotic Claw</h2>
              </div>
              <p className="text-sm text-text-muted leading-relaxed mb-4">
                Collects loose soil and rocks for mining and sample collection tasks.
                A camera mounted on the claw gives the operator a clear view for precise
                positioning. Controlled via LoRa or WiFi depending on range.
              </p>
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-border">
                <Image
                  src="/images/rover_overhead.jpg"
                  alt="Rover overhead view"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-px w-6 bg-blue/30" />
                <h2 className="text-xl font-bold text-text-bright">LDR Solar Tracking</h2>
              </div>
              <p className="text-sm text-text-muted leading-relaxed mb-4">
                A light-dependent resistor on the underside reads ambient light levels. The
                Raspberry Pi processes readings to find the strongest direction, then the rover
                repositions itself to maximize solar panel exposure.
              </p>
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-border bg-bg">
                <Image
                  src="/images/rover_electronics.png"
                  alt="Rover electronics components"
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 100vw, 50vw"
                  style={{ filter: "invert(1) saturate(2) brightness(1.3)" }}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </FadeIn>

      </div>
    </div>
  );
}
