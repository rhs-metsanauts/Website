import FadeIn from "@/components/FadeIn";

export default function BlogPage() {
  return (
    <div className="py-20 sm:py-28 px-4 min-h-[80vh] flex flex-col items-center justify-center">
      <div className="max-w-5xl mx-auto w-full text-center">
        <FadeIn>
          <div className="flex items-center gap-3 mb-6 justify-center">
            <div className="h-px w-10 bg-blue/40" />
            <span className="tech-label !text-xs">Blog</span>
            <div className="h-px w-10 bg-blue/40" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-text-bright mb-4 tracking-tight">
            Build Log &amp; Updates
          </h1>
          <p className="text-text-muted mb-20 max-w-lg mx-auto">
            Behind-the-scenes posts about our build process, lessons learned, and progress updates.
          </p>
        </FadeIn>

        <FadeIn delay={120}>
          <div className="flex items-center justify-center">
            <svg
              viewBox="0 0 200 200"
              className="w-52 h-52 sm:w-72 sm:h-72 animate-spin"
              style={{ animationDuration: "12s", animationTimingFunction: "linear" }}
              aria-label="Coming soon"
            >
              <defs>
                <path
                  id="textCircle"
                  d="M 100,100 m -72,0 a 72,72 0 1,1 144,0 a 72,72 0 1,1 -144,0"
                />
              </defs>
              <circle cx="100" cy="100" r="82" fill="none" stroke="#1e3a5f" strokeWidth="1.5" />
              <circle cx="100" cy="100" r="62" fill="none" stroke="#1e3a5f" strokeWidth="0.5" />
              <text
                fill="#60a5fa"
                fontSize="12.5"
                fontFamily="monospace"
                letterSpacing="5.5"
                fontWeight="600"
              >
                <textPath href="#textCircle">COMING SOON · COMING SOON · </textPath>
              </text>
              <text
                x="100"
                y="96"
                textAnchor="middle"
                fill="#e2e8f0"
                fontSize="11"
                fontFamily="monospace"
                letterSpacing="3"
              >
                POSTS
              </text>
              <text
                x="100"
                y="116"
                textAnchor="middle"
                fill="#e2e8f0"
                fontSize="11"
                fontFamily="monospace"
                letterSpacing="3"
              >
                INCOMING
              </text>
            </svg>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
