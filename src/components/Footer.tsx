import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface/50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div className="max-w-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 flex items-center justify-center">
                <Image src="/logo.png" alt="METSAnauts" width={32} height={32} className="object-contain" />
              </div>
              <span className="text-sm font-semibold text-text-bright">METSAnauts</span>
            </div>
            <p className="text-sm text-text-muted leading-relaxed">
              A NASA HUNCH engineering team from Ranchview High School, Irving TX. Building rovers and terrain simulations for the HERA program.
            </p>
          </div>

          <div className="flex gap-16">
            <div>
              <p className="tech-label mb-4">Project</p>
              <div className="flex flex-col gap-2.5">
                {[
                  { href: "/mission", label: "Mission" },
                  { href: "/rover-systems", label: "Rover Systems" },
                  { href: "/bothscape", label: "BothScape" },
                  { href: "/innovations", label: "Innovations" },
                ].map((link) => (
                  <Link key={link.href} href={link.href} className="text-sm text-text-muted hover:text-amber transition-colors">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className="tech-label mb-4">More</p>
              <div className="flex flex-col gap-2.5">
                {[
                  { href: "/budget-timeline", label: "Budget & Timeline" },
                  { href: "/research", label: "Research" },
                  { href: "/gallery", label: "Gallery" },
                  { href: "/team", label: "Team" },
                ].map((link) => (
                  <Link key={link.href} href={link.href} className="text-sm text-text-muted hover:text-amber transition-colors">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row justify-between gap-2">
          <p className="text-xs text-text-muted">&copy; 2026 METSAnauts &mdash; NASA HUNCH Program</p>
          <p className="text-xs text-text-muted">HERA Rover & BothScape Simulation Project</p>
        </div>
      </div>
    </footer>
  );
}
