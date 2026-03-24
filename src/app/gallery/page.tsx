import ImagePlaceholder from "@/components/ImagePlaceholder";
import FadeIn from "@/components/FadeIn";

export default function GalleryPage() {
  return (
    <div className="py-20 sm:py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-amber/40" />
            <span className="tech-label">Gallery</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-text-bright mb-12 tracking-tight">Photo Archive</h1>
        </FadeIn>

        {[
          { title: "Rover builds", tag: "HARDWARE", items: ["V1 Prototype", "V2 Assembly", "Rocker-Bogie Detail", "Half-Tread Wheels", "Claw Mechanism", "Electronics Bay"] },
          { title: "BothScape terrain", tag: "TERRAIN", items: ["Full Landscape", "Moon Region", "Mars Region", "Section Detail", "Regolith Application", "Rover on Terrain"] },
          { title: "Communication & software", tag: "SYSTEMS", items: ["LoRa Module", "Control App UI", "RPi Wiring", "Command Testing"] },
          { title: "Team & events", tag: "TEAM", items: ["Team Photo", "Workshop", "NASA HUNCH Meeting", "FDR Prep"] },
        ].map((section, si) => (
          <FadeIn key={section.title} delay={si * 100}>
            <div className="mb-14">
              <div className="flex items-center gap-3 mb-5">
                <span className="tech-label !text-[9px] text-amber/70">{section.tag}</span>
                <h2 className="text-xl font-bold text-text-bright">{section.title}</h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {section.items.map((label) => (
                  <ImagePlaceholder key={label} label={label} aspectRatio="aspect-square" className="rounded-xl" />
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
