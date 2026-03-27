import Image from "next/image";
import FadeIn from "@/components/FadeIn";

const photos = [
  { src: "/images/IMG_1583.jpg", alt: "Rover with tread wheels on terrain" },
  { src: "/images/IMG_4146_b.jpg", alt: "Team controlling rover with laptop outdoors" },
  { src: "/images/IMG_4147_b.jpg", alt: "Team member with rover on grass" },
  { src: "/images/IMG_0678.jpg", alt: "Rover prototype overhead on terrain" },
  { src: "/images/IMG_4146_a.jpg", alt: "Team member walking alongside rover" },
  { src: "/images/IMG_4147_a.jpg", alt: "Team inspecting rover outdoors" },
  { src: "/images/IMG_4148_a.jpg", alt: "Rover electronics and wiring close-up" },
  { src: "/images/IMG_4149_a.jpg", alt: "Rover on grass in front of school" },
  { src: "/images/IMG_4148_b.jpg", alt: "Team member adjusting rover" },
  { src: "/images/IMG_4149_b.jpg", alt: "Two team members with rover outdoors" },
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

        <div className="columns-2 sm:columns-3 gap-3 space-y-3">
          {photos.map((photo, i) => (
            <FadeIn key={i} delay={i * 50}>
              <div className="relative w-full overflow-hidden rounded-xl border border-border break-inside-avoid">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 640px) 50vw, 33vw"
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
