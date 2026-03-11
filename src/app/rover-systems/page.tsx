import ImagePlaceholder from "@/components/ImagePlaceholder";

export default function RoverSystemsPage() {
  return (
    <div className="py-16 sm:py-24 px-5">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs text-text-muted uppercase tracking-widest mb-2">Systems</p>
        <h1 className="text-3xl font-bold text-text-bright mb-3">Rover Systems</h1>
        <p className="text-text-muted mb-10">Mechanical, electrical, and software breakdown of the rover fleet.</p>

        <ImagePlaceholder label="Rover CAD render or assembled photo" className="mb-12" />

        {/* Design features */}
        <h2 className="text-lg font-semibold text-text-bright mb-4">Key design features</h2>
        <div className="overflow-hidden border border-border rounded-lg mb-12">
          <table className="w-full text-sm">
            <tbody>
              {[
                ["Suspension", "Rocker-bogie with active solar tracking. Handles harsh terrain while keeping components upright."],
                ["Wheels", "Half-tread system for increased grip on coarse regolith and rocky terrain."],
                ["Solar", "Underside-mounted panels with 60° rotation to maximize capture at low sun angles."],
                ["Motors", "6 independently-controlled DC motors, one per wheel, each with a dedicated controller."],
                ["Compute", "Raspberry Pi 4B running the control system and sensor processing."],
                ["Claw", "Robotic sample collection arm with camera for precise remote guidance."],
              ].map(([label, desc]) => (
                <tr key={label} className="border-b border-border last:border-0">
                  <td className="py-3 px-4 text-text-bright font-medium whitespace-nowrap align-top">{label}</td>
                  <td className="py-3 px-4 text-text-muted">{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <hr className="border-border mb-12" />

        {/* Communication */}
        <h2 className="text-lg font-semibold text-text-bright mb-2">Communication systems</h2>
        <p className="text-sm text-text-muted mb-6">
          Three protocols cover different ranges and use cases. The system falls back automatically
          from WiFi to LoRa when the rover moves out of range.
        </p>

        <div className="space-y-1 mb-8">
          <div className="flex items-start gap-4 p-3 rounded-md bg-surface">
            <span className="text-xs font-mono text-text-muted w-14 shrink-0 pt-0.5">WiFi</span>
            <p className="text-sm text-text">Local area network hosted on a laptop. No internet needed. Primary link for close operations.</p>
          </div>
          <div className="flex items-start gap-4 p-3 rounded-md">
            <span className="text-xs font-mono text-text-muted w-14 shrink-0 pt-0.5">LoRa</span>
            <p className="text-sm text-text">Long-range radio fallback up to ~1 km. Used when WiFi signal drops.</p>
          </div>
          <div className="flex items-start gap-4 p-3 rounded-md bg-surface">
            <span className="text-xs font-mono text-text-muted w-14 shrink-0 pt-0.5">BLE</span>
            <p className="text-sm text-text">Bluetooth for close-up video transfer from the claw-mounted camera.</p>
          </div>
        </div>

        <p className="text-sm text-text-muted mb-12 leading-relaxed">
          The control flow runs: <span className="text-text">Laptop App → LoRa Transmitter → LoRa Receiver → Rover.</span> Commands
          are packaged for reliable transmission, sent wirelessly, and the rover receives and acts
          on them automatically. The app is designed for astronauts with no technical knowledge.
        </p>

        <hr className="border-border mb-12" />

        {/* Mobility */}
        <h2 className="text-lg font-semibold text-text-bright mb-4">Mobility & suspension</h2>
        <div className="grid sm:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-sm font-medium text-text-bright mb-2">6-wheel drive</h3>
            <ul className="space-y-2">
              {[
                "Full control across loose, uneven terrain",
                "Half-tread design for stability on granular surfaces",
                "Each wheel has its own dedicated controller",
              ].map((item) => (
                <li key={item} className="flex gap-2 text-sm text-text-muted">
                  <span className="mt-2 w-1 h-1 rounded-full bg-border shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium text-text-bright mb-2">Suspension</h3>
            <ul className="space-y-2">
              {[
                "Low center of gravity for balance on slopes",
                "Front wheels climb obstacles, rear holds steady",
                "Even weight distribution across all wheels",
                "Adjusts dynamically for terrain",
              ].map((item) => (
                <li key={item} className="flex gap-2 text-sm text-text-muted">
                  <span className="mt-2 w-1 h-1 rounded-full bg-border shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-border mb-12" />

        {/* Claw & LDR */}
        <div className="grid sm:grid-cols-2 gap-8">
          <div>
            <h2 className="text-lg font-semibold text-text-bright mb-2">Robotic claw</h2>
            <p className="text-sm text-text-muted leading-relaxed mb-3">
              Collects loose soil and rocks for mining and sample collection tasks.
              A camera mounted on the claw gives the operator a clear view for precise
              positioning. Controlled via LoRa or WiFi depending on range.
            </p>
            <ImagePlaceholder label="Claw close-up" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-text-bright mb-2">LDR solar tracking</h2>
            <p className="text-sm text-text-muted leading-relaxed mb-3">
              A light-dependent resistor on the underside reads ambient light levels. The
              Raspberry Pi processes readings to find the strongest direction, then the rover
              repositions itself to maximize solar panel exposure.
            </p>
            <ImagePlaceholder label="LDR system diagram" />
          </div>
        </div>
      </div>
    </div>
  );
}
