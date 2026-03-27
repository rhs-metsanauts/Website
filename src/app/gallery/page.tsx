import Image from "next/image";
import FadeIn from "@/components/FadeIn";

const photos = [
  { src: "/images/IMG_1583.jpg", alt: "Rover with tread wheels on terrain", wide: true },
  { src: "/images/IMG_0678.jpg", alt: "Rover prototype overhead on terrain", wide: false },
  { src: "/images/IMG_1583.jpg", alt: "Rover with tread wheels", wide: false },
  { src: "/images/IMG_0678.jpg", alt: "Rover prototype on terrain", wide: true },
  { src: "/images/IMG_1583.jpg", alt: "Rover build detail", wide: false },
  { src: "/images/IMG_0678.jpg", alt: "Rover electronics overhead", wide: false },
];

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

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {photos.map((photo, i) => (
            <FadeIn key={i} delay={i * 60}>
              <div className={`relative rounded-xl overflow-hidden border border-border ${photo.wide ? "aspect-[4/3]" : "aspect-square"}`}>
                <Image src={photo.src} alt={photo.alt} fill className="object-cover" sizes="(max-width: 640px) 50vw, 33vw" />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
