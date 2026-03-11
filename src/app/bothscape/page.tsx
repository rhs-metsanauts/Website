import SectionHeading from "@/components/SectionHeading";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export default function BothScapePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 starfield">
        <div className="absolute inset-0 bg-gradient-to-b from-space-black/80 to-space-black" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">BothScape</h1>
          <p className="text-lg text-lunar-silver/60">Simulation Terrain &mdash; Lunar & Martian Surface</p>
        </div>
      </section>

      {/* Specs Banner */}
      <section className="py-8 bg-space-dark border-y border-white/5">
        <div className="max-w-4xl mx-auto px-4 flex flex-wrap items-center justify-center gap-6 text-center">
          {[
            { label: "Total Area", value: "8 ft × 8 ft" },
            { label: "Section Size", value: "2 ft × 2 ft" },
            { label: "Materials", value: "Foamboard + Regolith" },
          ].map((spec) => (
            <div key={spec.label} className="px-6">
              <div className="text-lg font-bold text-accent-cyan">{spec.value}</div>
              <div className="text-xs text-lunar-silver/50">{spec.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Terrain Regions */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeading title="Terrain Regions" subtitle="Dual-environment simulation for comprehensive testing" />

          <div className="grid md:grid-cols-2 gap-8">
            {/* Moon Region */}
            <div className="rounded-xl overflow-hidden border border-white/5">
              <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">🌑</span>
                  <div>
                    <h3 className="text-xl font-bold text-white">Moon Region</h3>
                    <p className="text-sm text-lunar-silver/50">Shackleton Crater</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {[
                    "Models the lunar south pole with permanent shadow zones",
                    "Reflective walls simulate hydrogen-rich areas detected by probes",
                    "Tests rover navigation in low-light conditions",
                    "Validates power-system behavior under constrained solar input",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-lunar-silver/70">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-lunar-silver shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <ImagePlaceholder label="Moon Region Photo / Render" aspectRatio="aspect-[16/10]" />
            </div>

            {/* Mars Region */}
            <div className="rounded-xl overflow-hidden border border-white/5">
              <div className="bg-gradient-to-r from-red-900/20 to-orange-900/10 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">🔴</span>
                  <div>
                    <h3 className="text-xl font-bold text-white">Mars Region</h3>
                    <p className="text-sm text-lunar-silver/50">Ancient Terrain</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {[
                    "Smoother, more eroded terrain reflecting Mars' older surface",
                    "Regolith mimics basaltic volcanic soil with fine, dusty textures",
                    "Includes ancient channel features and lava plains",
                    "Tests rover endurance on dry, powdery surface conditions",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-lunar-silver/70">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-mars-orange shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <ImagePlaceholder label="Mars Region Photo / Render" aspectRatio="aspect-[16/10]" />
            </div>
          </div>
        </div>
      </section>

      {/* Construction Details */}
      <section className="py-20 bg-space-dark px-4">
        <div className="max-w-4xl mx-auto">
          <SectionHeading title="Construction" subtitle="Materials and build approach" />
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                title: "Foamboard Base",
                desc: "Rigid foamboard sections create the structural foundation for terrain sculpting and elevation changes.",
              },
              {
                title: "Foam Gap Filler",
                desc: "Used to sculpt craters, ridges, and terrain features with realistic topography.",
              },
              {
                title: "Diatomaceous Earth",
                desc: "Applied as regolith simulation material, providing realistic dust and soil textures for rover testing.",
              },
            ].map((mat) => (
              <div key={mat.title} className="p-6 rounded-xl bg-space-gray/50 border border-white/5 text-center">
                <h4 className="text-lg font-bold text-white mb-2">{mat.title}</h4>
                <p className="text-sm text-lunar-silver/60 leading-relaxed">{mat.desc}</p>
              </div>
            ))}
          </div>
          <ImagePlaceholder label="BothScape Construction Progress Photos" className="mt-10" />
        </div>
      </section>
    </>
  );
}
