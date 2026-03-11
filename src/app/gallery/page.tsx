import SectionHeading from "@/components/SectionHeading";
import ImagePlaceholder from "@/components/ImagePlaceholder";

const galleryCategories = [
  {
    title: "Rover Builds",
    items: [
      "V1 Rover Prototype",
      "V2 Rover Assembly",
      "Rocker-Bogie Detail",
      "Half-Tread Wheels Close-up",
      "Robotic Claw Mechanism",
      "Electronics Bay",
    ],
  },
  {
    title: "BothScape Terrain",
    items: [
      "Full Landscape Overview",
      "Moon Region - Shackleton Crater",
      "Mars Region - Ancient Terrain",
      "Terrain Section Detail",
      "Regolith Application",
      "Rover Testing on Terrain",
    ],
  },
  {
    title: "Communication & Software",
    items: [
      "LoRa Module Setup",
      "Control App Interface",
      "Raspberry Pi Wiring",
      "Command Flow Testing",
    ],
  },
  {
    title: "Team & Events",
    items: [
      "Team Photo",
      "Workshop Sessions",
      "NASA HUNCH Meeting",
      "FDR Preparation",
    ],
  },
];

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 starfield">
        <div className="absolute inset-0 bg-gradient-to-b from-space-black/80 to-space-black" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">Gallery</h1>
          <p className="text-lg text-lunar-silver/60">Project photos, renders, and documentation</p>
        </div>
      </section>

      {/* Gallery Sections */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto space-y-20">
          {galleryCategories.map((category) => (
            <div key={category.title}>
              <SectionHeading title={category.title} align="left" />
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {category.items.map((item) => (
                  <ImagePlaceholder
                    key={item}
                    label={item}
                    aspectRatio="aspect-square"
                    className="rounded-lg"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
