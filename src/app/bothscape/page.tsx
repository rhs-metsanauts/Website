import Image from "next/image";
import FadeIn from "@/components/FadeIn";

export default function BothScapePage() {
  return (
    <div className="py-20 sm:py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-amber/40" />
            <span className="tech-label !text-xs">Section 03</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-text-bright mb-4 tracking-tight">BothScape</h1>
          <p className="text-text-muted mb-12">
            8 ft &times; 8 ft simulation terrain 2 ft &times; 2 ft modular sections built from
            foamboard, foam gap filler, and diatomaceous earth regolith.
          </p>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden border border-border mb-14">
            <Image src="/images/IMG_4560.jpg" alt="BothScape overview photo" fill className="object-cover object-top" />
          </div>
        </FadeIn>

        <FadeIn>
          <div className="flex items-center gap-3 mb-3">
            <span className="tech-label !text-[11px] text-amber/70">Lunar</span>
            <div className="h-px flex-1 bg-border" />
          </div>
          <h2 className="text-xl font-bold text-text-bright mb-3">Moon region Shackleton Crater</h2>
          <p className="text-sm text-text-muted leading-relaxed mb-4">
            Models the lunar south pole with permanent shadow zones. Reflective walls simulate
            hydrogen-rich areas detected by probes. Used to test rover navigation in low-light
            conditions and validate power-system behavior under constrained solar input.
          </p>
          <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden border border-border mb-14">
            <Image src="/images/IMG_4561.jpg" alt="Moon region close-up" fill className="object-cover object-top" />
          </div>
        </FadeIn>

        <FadeIn>
          <div className="flex items-center gap-3 mb-3">
            <span className="tech-label !text-[11px] text-amber/70">Martian</span>
            <div className="h-px flex-1 bg-border" />
          </div>
          <h2 className="text-xl font-bold text-text-bright mb-3">Mars region ancient terrain</h2>
          <p className="text-sm text-text-muted leading-relaxed mb-4">
            Smoother, more eroded terrain reflecting Mars&apos; older surface. Regolith mimics basaltic
            volcanic soil with fine, dusty textures. Includes ancient channel features and lava plains.
            Tests rover endurance on dry, powdery surfaces.
          </p>
          <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden border border-border mb-14">
            <Image src="/images/IMG_4562.jpg" alt="Mars region close-up" fill className="object-cover object-top" />
          </div>
        </FadeIn>

        <FadeIn>
          <h2 className="text-xl font-bold text-text-bright mb-5">Materials</h2>
          <div className="overflow-hidden border border-border rounded-xl">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["Foamboard", "Rigid structural base for sculpting terrain sections and elevation changes."],
                  ["Foam gap filler", "Sculpts craters, ridges, and realistic topographical features."],
                  ["Diatomaceous earth", "Applied as regolith simulation \u2014 realistic dust and soil texture for rover testing."],
                ].map(([mat, desc]) => (
                  <tr key={mat} className="border-b border-border last:border-0 hover:bg-surface transition-colors">
                    <td className="py-3.5 px-5 text-amber font-medium whitespace-nowrap align-top" style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: "0.8rem" }}>{mat}</td>
                    <td className="py-3.5 px-5 text-text-muted">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
