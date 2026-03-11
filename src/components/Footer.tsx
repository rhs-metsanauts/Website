import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-6xl mx-auto px-5 py-10">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center overflow-hidden">
                <Image src="/logo.png" alt="METSAnauts" width={28} height={28} className="object-contain" />
              </div>
              <span className="text-sm font-semibold text-text-bright">METSAnauts</span>
            </div>
            <p className="text-sm text-text-muted leading-relaxed">
              NASA HUNCH engineering team. Ranchview High School, Irving TX.
            </p>
          </div>

          <div className="flex gap-12">
            <div>
              <p className="text-xs font-medium text-text-muted uppercase tracking-wider mb-3">Pages</p>
              <div className="flex flex-col gap-1.5">
                {[
                  { href: "/mission", label: "Mission" },
                  { href: "/rover-systems", label: "Rover Systems" },
                  { href: "/bothscape", label: "BothScape" },
                  { href: "/innovations", label: "Innovations" },
                ].map((link) => (
                  <Link key={link.href} href={link.href} className="text-sm text-text-muted hover:text-text-bright transition-colors">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-medium text-text-muted uppercase tracking-wider mb-3">More</p>
              <div className="flex flex-col gap-1.5">
                {[
                  { href: "/budget-timeline", label: "Budget & Timeline" },
                  { href: "/research", label: "Research" },
                  { href: "/gallery", label: "Gallery" },
                  { href: "/team", label: "Team" },
                ].map((link) => (
                  <Link key={link.href} href={link.href} className="text-sm text-text-muted hover:text-text-bright transition-colors">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row justify-between gap-2">
          <p className="text-xs text-text-muted">METSAnauts &mdash; NASA HUNCH Program, 2026</p>
          <p className="text-xs text-text-muted">HERA Rover & BothScape Simulation Project</p>
        </div>
      </div>
    </footer>
  );
}
