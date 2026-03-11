import ImagePlaceholder from "@/components/ImagePlaceholder";

export default function GalleryPage() {
  return (
    <div className="py-16 sm:py-24 px-5">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs text-text-muted uppercase tracking-widest mb-2">Media</p>
        <h1 className="text-3xl font-bold text-text-bright mb-10">Gallery</h1>

        <h2 className="text-base font-semibold text-text-bright mb-4">Rover builds</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-12">
          {["V1 Prototype", "V2 Assembly", "Rocker-Bogie Detail", "Half-Tread Wheels", "Claw Mechanism", "Electronics Bay"].map((label) => (
            <ImagePlaceholder key={label} label={label} aspectRatio="aspect-square" className="rounded" />
          ))}
        </div>

        <h2 className="text-base font-semibold text-text-bright mb-4">BothScape terrain</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-12">
          {["Full Landscape", "Moon Region", "Mars Region", "Section Detail", "Regolith Application", "Rover on Terrain"].map((label) => (
            <ImagePlaceholder key={label} label={label} aspectRatio="aspect-square" className="rounded" />
          ))}
        </div>

        <h2 className="text-base font-semibold text-text-bright mb-4">Communication & software</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-12">
          {["LoRa Module", "Control App UI", "RPi Wiring", "Command Testing"].map((label) => (
            <ImagePlaceholder key={label} label={label} aspectRatio="aspect-square" className="rounded" />
          ))}
        </div>

        <h2 className="text-base font-semibold text-text-bright mb-4">Team & events</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {["Team Photo", "Workshop", "NASA HUNCH Meeting", "FDR Prep"].map((label) => (
            <ImagePlaceholder key={label} label={label} aspectRatio="aspect-square" className="rounded" />
          ))}
        </div>
      </div>
    </div>
  );
}
