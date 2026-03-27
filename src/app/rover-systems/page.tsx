import Image from "next/image";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import FadeIn from "@/components/FadeIn";

export default function RoverSystemsPage() {
  return (
    <div className="py-20 sm:py-28 px-4">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-blue/40" />
            <span className="tech-label !text-xs">Rover Systems</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-text-bright mb-4 tracking-tight">Rover Systems</h1>
          <p className="text-text-muted mb-12">Mechanical, electrical, and software breakdown of the rover fleet.</p>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden border border-border mb-14">
            <Image src="/images/IMG_0678.jpg" alt="Rover on terrain" fill className="object-cover object-top" />
          </div>
        </FadeIn>

        <FadeIn delay={150}>
          <h2 className="text-xl font-bold text-text-bright mb-5">Key design features</h2>
          <div className="overflow-hidden border border-border rounded-xl mb-14">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["Suspension", "Rocker-bogie with active solar tracking. Handles harsh terrain while keeping components upright."],
                  ["Wheels", "Half-tread system for increased grip on coarse regolith and rocky terrain."],
                  ["Solar", "Underside-mounted panels with 60\u00b0 rotation to maximize capture at low sun angles."],
                  ["Motors", "6 independently-controlled DC motors, one per wheel, each with a dedicated controller."],
                  ["Compute", "Raspberry Pi 4B running the control system and sensor processing."],
                  ["Claw", "Robotic sample collection arm with camera for precise remote guidance."],
                ].map(([label, desc]) => (
                  <tr key={label} className="border-b border-border last:border-0 hover:bg-surface transition-colors">
                    <td className="py-3.5 px-5 text-amber font-medium whitespace-nowrap align-top" style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: "0.8rem" }}>{label}</td>
                    <td className="py-3.5 px-5 text-text-muted">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>

        <FadeIn>
          <h2 className="text-xl font-bold text-text-bright mb-3">Communication systems</h2>
          <p className="text-sm text-text-muted mb-6">
            Three protocols cover different ranges and use cases. The system falls back automatically
            from WiFi to LoRa when the rover moves out of range.
          </p>

          <div className="space-y-2 mb-8">
            {[
              { proto: "WiFi", desc: "Local area network hosted on a laptop. No internet needed. Primary link for close operations." },
              { proto: "LoRa", desc: "Long-range radio fallback up to ~1 km. Used when WiFi signal drops." },
              { proto: "BLE", desc: "Bluetooth for close-up video transfer from the claw-mounted camera." },
            ].map((item) => (
              <div key={item.proto} className="flex items-start gap-4 p-4 rounded-xl bg-surface border border-border">
                <span className="text-xs font-semibold text-amber bg-amber-soft px-2.5 py-1 rounded-md shrink-0" style={{ fontFamily: "var(--font-jetbrains), monospace" }}>{item.proto}</span>
                <p className="text-sm text-text">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-sm text-text-muted mb-14 leading-relaxed">
            The control flow runs: <span className="font-medium text-text-bright">Laptop App &rarr; LoRa Transmitter &rarr; LoRa Receiver &rarr; Rover.</span> Commands
            are packaged for reliable transmission, sent wirelessly, and the rover receives and acts
            on them automatically.
          </p>
        </FadeIn>

        <FadeIn>
          <h2 className="text-xl font-bold text-text-bright mb-5">Mobility & suspension</h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-14">
            <div className="bg-surface rounded-xl p-6 border border-border">
              <h3 className="font-semibold text-text-bright mb-3">6-wheel drive</h3>
              <ul className="space-y-2">
                {[
                  "Full control across loose, uneven terrain",
                  "Half-tread design for stability on granular surfaces",
                  "Each wheel has its own dedicated controller",
                ].map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-text-muted">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-amber shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-surface rounded-xl p-6 border border-border">
              <h3 className="font-semibold text-text-bright mb-3">Suspension</h3>
              <ul className="space-y-2">
                {[
                  "Low center of gravity for balance on slopes",
                  "Front wheels climb obstacles, rear holds steady",
                  "Even weight distribution across all wheels",
                  "Adjusts dynamically for terrain",
                ].map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-text-muted">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-amber shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl font-bold text-text-bright mb-3">Robotic claw</h2>
              <p className="text-sm text-text-muted leading-relaxed mb-4">
                Collects loose soil and rocks for mining and sample collection tasks.
                A camera mounted on the claw gives the operator a clear view for precise
                positioning. Controlled via LoRa or WiFi depending on range.
              </p>
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-border">
                <Image src="/images/IMG_1583.jpg" alt="Rover with tread wheels" fill className="object-cover object-center" />
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold text-text-bright mb-3">LDR solar tracking</h2>
              <p className="text-sm text-text-muted leading-relaxed mb-4">
                A light-dependent resistor on the underside reads ambient light levels. The
                Raspberry Pi processes readings to find the strongest direction, then the rover
                repositions itself to maximize solar panel exposure.
              </p>
              <ImagePlaceholder label="LDR system diagram" />
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
