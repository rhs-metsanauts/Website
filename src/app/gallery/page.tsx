import Image from "next/image";
import FadeIn from "@/components/FadeIn";

const fdrPhotos = [
  { src: "/images/fdr/fdr_IMG_2473.jpg", alt: "METSAnauts booth at Johnson Space Center" },
  { src: "/images/fdr/fdr_IMG_2015.jpg", alt: "Rovers and controller setup with ZED cameras" },
  { src: "/images/fdr/fdr_IMG_2014.jpg", alt: "Top-down view of both rovers and terrain board" },
];

const photos = [
  { src: "/images/gallery/IMG_1583.jpg", alt: "Rover with tread wheels on terrain" },
  { src: "/images/gallery/IMG_4146_b.jpg", alt: "Team controlling rover with laptop outdoors" },
  { src: "/images/gallery/rover_overhead.jpg", alt: "Rover overhead view" },
  { src: "/images/gallery/IMG_4147_b.jpg", alt: "Team member with rover on grass" },
  { src: "/images/gallery/IMG_0678.jpg", alt: "Rover prototype overhead on terrain" },
  { src: "/images/gallery/IMG_4146_a.jpg", alt: "Team member walking alongside rover" },
  { src: "/images/gallery/IMG_4147_a.jpg", alt: "Team inspecting rover outdoors" },
  { src: "/images/gallery/IMG_4148_a.jpg", alt: "Rover electronics and wiring close-up" },
  { src: "/images/gallery/IMG_4149_a.jpg", alt: "Rover on grass in front of school" },
  { src: "/images/gallery/IMG_4148_b.jpg", alt: "Team member adjusting rover" },
  { src: "/images/gallery/IMG_4149_b.jpg", alt: "Two team members with rover outdoors" },
  { src: "/images/gallery/team_formal.jpg", alt: "METSAnauts team formal photo" },
];

const videos = [
  { src: "/videos/IMG_2139.mp4", label: "Testing clip 1" },
  { src: "/videos/IMG_2137.mp4", label: "Testing clip 2" },
  { src: "/videos/IMG_2703.mp4", label: "Testing clip 3" },
  { src: "/videos/IMG_2702.mp4", label: "Testing clip 4" },
  { src: "/videos/IMG_2700.mp4", label: "Testing clip 5" },
  { src: "/videos/IMG_2701.mp4", label: "Testing clip 6" },
  { src: "/videos/IMG_2138.mp4", label: "Testing clip 7" },
];

export default function GalleryPage() {
  return (
    <div className="py-14 sm:py-20 px-3">
      <div className="max-w-[1400px] mx-auto">

        <FadeIn>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-blue/40" />
            <span className="tech-label !text-xs">Gallery</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-text-bright mb-3 tracking-tight">
            Photo Archive
          </h1>
          <p className="text-text-muted mb-12 text-base">
            Rovers, terrain, builds, and the team behind it all.
          </p>
        </FadeIn>

        {/* FDR — Johnson Space Center */}
        <FadeIn>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-blue/40" />
            <span className="tech-label !text-xs">FDR · Johnson Space Center</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-text-bright mb-3 tracking-tight">
            FDR at Johnson Space Center
          </h2>
          <p className="text-text-muted mb-10 text-base">
            Presenting our rover to NASA engineers, executives, and astronauts in Houston.
          </p>
        </FadeIn>

        <div className="columns-2 sm:columns-3 gap-3 space-y-3 mb-20">
          {fdrPhotos.map((photo, i) => (
            <FadeIn key={i} delay={Math.min(i * 40, 300)}>
              <div className="group relative w-full overflow-hidden rounded-xl border border-border break-inside-avoid cursor-pointer">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover photo-subtle transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, 33vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <p className="text-xs text-text-muted leading-snug">{photo.alt}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Rover + Team Photos */}
        <FadeIn>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-blue/40" />
            <span className="tech-label !text-xs">Rover &amp; Team</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-text-bright mb-3 tracking-tight">
            Rover &amp; Team
          </h2>
          <p className="text-text-muted mb-10 text-base">
            Build sessions, field testing, and the people behind the project.
          </p>
        </FadeIn>

        <div className="columns-2 sm:columns-3 gap-3 space-y-3">
          {photos.map((photo, i) => (
            <FadeIn key={i} delay={Math.min(i * 40, 300)}>
              <div className="group relative w-full overflow-hidden rounded-xl border border-border break-inside-avoid cursor-pointer">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover photo-subtle transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, 33vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <p className="text-xs text-text-muted leading-snug">{photo.alt}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Testing Videos */}
        <FadeIn>
          <div className="flex items-center gap-3 mt-20 mb-6">
            <div className="h-px w-10 bg-blue/40" />
            <span className="tech-label !text-xs">Testing Videos</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-text-bright mb-3 tracking-tight">
            Testing Videos
          </h2>
          <p className="text-text-muted mb-10 text-base">
            Raw footage from rover testing sessions.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {videos.map((video, i) => (
            <FadeIn key={i} delay={Math.min(i * 40, 300)}>
              <div className="rounded-xl overflow-hidden border border-border bg-bg-card">
                <video
                  src={video.src}
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full aspect-video object-cover"
                />
                <p className="text-xs text-text-muted px-3 py-2">{video.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </div>
  );
}
