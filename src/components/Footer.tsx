import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-space-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Branding */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-nasa-blue flex items-center justify-center text-white font-bold text-sm">
                M
              </div>
              <span className="text-lg font-bold tracking-wide">
                <span className="text-white">METSA</span>
                <span className="text-accent-cyan">nauts</span>
              </span>
            </div>
            <p className="text-sm text-lunar-silver/70 leading-relaxed">
              A NASA HUNCH engineering team from Ranchview High School, Irving TX.
              Specializing in rover development, autonomous systems, and lunar environment simulation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Navigation</h4>
            <div className="grid grid-cols-2 gap-2">
              {[
                { href: "/mission", label: "Mission" },
                { href: "/rover-systems", label: "Rover Systems" },
                { href: "/bothscape", label: "BothScape" },
                { href: "/innovations", label: "Innovations" },
                { href: "/budget-timeline", label: "Budget & Timeline" },
                { href: "/research", label: "Research" },
                { href: "/gallery", label: "Gallery" },
                { href: "/team", label: "Team" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-lunar-silver/70 hover:text-accent-cyan transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Program */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Program</h4>
            <p className="text-sm text-lunar-silver/70 leading-relaxed">
              NASA HUNCH (High School Students United with NASA to Create Hardware)<br />
              HERA Rover & BothScape Simulation Project<br />
              Ranchview High School, Irving, TX
            </p>
            <div className="mt-4 flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-accent-teal animate-pulse" />
              <span className="text-xs text-lunar-silver/50">FDR 2026</span>
            </div>
          </div>
        </div>

        <div className="section-divider mt-8 mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-lunar-silver/40">
            &copy; 2026 METSAnauts &mdash; NASA HUNCH Program
          </p>
          <p className="text-xs text-lunar-silver/40">
            Lunar & Martian Surface Exploration
          </p>
        </div>
      </div>
    </footer>
  );
}
