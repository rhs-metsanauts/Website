import ImagePlaceholder from "@/components/ImagePlaceholder";

export default function BothScapePage() {
  return (
    <div className="py-16 sm:py-24 px-5">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs text-text-muted uppercase tracking-widest mb-2">Terrain</p>
        <h1 className="text-3xl font-bold text-text-bright mb-3">BothScape</h1>
        <p className="text-text-muted mb-10">
          8 ft &times; 8 ft simulation terrain &mdash; 2 ft &times; 2 ft modular sections built from
          foamboard, foam gap filler, and diatomaceous earth regolith.
        </p>

        <ImagePlaceholder label="BothScape overview photo" className="mb-12" />

        {/* Moon */}
        <h2 className="text-lg font-semibold text-text-bright mb-2">Moon region &mdash; Shackleton Crater</h2>
        <p className="text-sm text-text-muted leading-relaxed mb-4">
          Models the lunar south pole with permanent shadow zones. Reflective walls simulate
          hydrogen-rich areas detected by probes. Used to test rover navigation in low-light
          conditions and validate power-system behavior under constrained solar input.
        </p>
        <ImagePlaceholder label="Moon region close-up" className="mb-10" />

        {/* Mars */}
        <h2 className="text-lg font-semibold text-text-bright mb-2">Mars region &mdash; ancient terrain</h2>
        <p className="text-sm text-text-muted leading-relaxed mb-4">
          Smoother, more eroded terrain reflecting Mars&apos; older surface. Regolith mimics basaltic
          volcanic soil with fine, dusty textures. Includes ancient channel features and lava plains.
          Tests rover endurance on dry, powdery surfaces.
        </p>
        <ImagePlaceholder label="Mars region close-up" className="mb-12" />

        <hr className="border-border mb-12" />

        {/* Materials */}
        <h2 className="text-lg font-semibold text-text-bright mb-4">Materials</h2>
        <div className="overflow-hidden border border-border rounded-lg">
          <table className="w-full text-sm">
            <tbody>
              {[
                ["Foamboard", "Rigid structural base for sculpting terrain sections and elevation changes."],
                ["Foam gap filler", "Sculpts craters, ridges, and realistic topographical features."],
                ["Diatomaceous earth", "Applied as regolith simulation — realistic dust and soil texture for rover testing."],
              ].map(([mat, desc]) => (
                <tr key={mat} className="border-b border-border last:border-0">
                  <td className="py-3 px-4 text-text-bright font-medium whitespace-nowrap align-top">{mat}</td>
                  <td className="py-3 px-4 text-text-muted">{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
