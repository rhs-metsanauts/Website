import Image from "next/image";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import FadeIn from "@/components/FadeIn";

export default function GalleryPage() {
  return (
    <div className="py-20 sm:py-28 px-4">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-blue/40" />
            <span className="tech-label !text-xs">Gallery</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-text-bright mb-12 tracking-tight">Photo Archive</h1>
        </FadeIn>

        {/* Rover builds — real photos */}
        <FadeIn delay={80}>
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-5">
              <span className="tech-label !text-[11px] text-blue">HARDWARE</span>
              <h2 className="text-xl font-bold text-text-bright">Rover builds</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="relative aspect-square rounded-xl overflow-hidden border border-border col-span-1 sm:col-span-2">
                <Image src="/images/IMG_1583.jpg" alt="Rover with tread wheels on terrain" fill className="object-cover object-center" />
              </div>
              <div className="relative aspect-square rounded-xl overflow-hidden border border-border">
                <Image src="/images/IMG_0678.jpg" alt="Rover prototype overhead on terrain" fill className="object-cover object-top" />
              </div>
              <ImagePlaceholder label="Rocker-Bogie Detail" aspectRatio="aspect-square" className="rounded-xl" />
              <ImagePlaceholder label="Claw Mechanism" aspectRatio="aspect-square" className="rounded-xl" />
              <ImagePlaceholder label="Electronics Bay" aspectRatio="aspect-square" className="rounded-xl" />
            </div>
          </div>
        </FadeIn>

        {/* Remaining sections */}
        {[
          { title: "BothScape terrain", tag: "TERRAIN", items: ["Full Landscape", "Moon Region", "Mars Region", "Section Detail", "Regolith Application", "Rover on Terrain"] },
          { title: "Communication & software", tag: "SYSTEMS", items: ["LoRa Module", "Control App UI", "RPi Wiring", "Command Testing"] },
          { title: "Team & events", tag: "TEAM", items: ["Team Photo", "Workshop", "NASA HUNCH Meeting", "FDR Prep"] },
        ].map((section, si) => (
          <FadeIn key={section.title} delay={(si + 1) * 100}>
            <div className="mb-14">
              <div className="flex items-center gap-3 mb-5">
                <span className="tech-label !text-[11px] text-blue">{section.tag}</span>
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
