import Image from "next/image";
import FadeIn from "@/components/FadeIn";

export default function BlogPage() {
  return (
    <div className="py-20 sm:py-28 px-4 min-h-[80vh] flex flex-col items-center justify-center">
      <div className="max-w-5xl mx-auto w-full text-center">
        <FadeIn>
          <div className="flex items-center gap-3 mb-6 justify-center">
            <div className="h-px w-10 bg-blue/40" />
            <span className="tech-label !text-xs">Mission Log</span>
            <div className="h-px w-10 bg-blue/40" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-text-bright mb-4 tracking-tight">
            Mission Log
          </h1>
          <p className="text-text-muted mb-20 max-w-lg mx-auto">
            Behind-the-scenes posts about our build process, lessons learned, and progress updates.
          </p>
        </FadeIn>

        <FadeIn delay={120}>
          <div className="flex items-center justify-center">
            <div className="relative flex items-center justify-center w-64 h-64 sm:w-80 sm:h-80">
              {/* Spinning text ring */}
              <svg
                viewBox="0 0 200 200"
                className="absolute inset-0 w-full h-full animate-spin"
                style={{ animationDuration: "12s", animationTimingFunction: "linear" }}
                aria-hidden="true"
              >
                <defs>
                  <path
                    id="textCircle"
                    d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0"
                  />
                </defs>
                <circle cx="100" cy="100" r="90" fill="none" stroke="#1e3a5f" strokeWidth="1.5" />
                <circle cx="100" cy="100" r="66" fill="none" stroke="#1e3a5f" strokeWidth="0.5" />
                <text
                  fill="#60a5fa"
                  fontSize="15"
                  fontFamily="monospace"
                  fontWeight="600"
                >
                  <textPath href="#textCircle" textLength="490" lengthAdjust="spacing">COMING SOON · COMING SOON ·</textPath>
                </text>
              </svg>

              {/* Static logo clipped to circle */}
              <div className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="METSAnauts"
                  width={112}
                  height={112}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
