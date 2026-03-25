import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface/60">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div className="max-w-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 flex items-center justify-center">
                <Image src="/logo.png" alt="METSAnauts" width={36} height={36} className="object-contain" />
              </div>
              <div>
                <span className="text-sm font-bold text-text-bright tracking-tight block">METSAnauts</span>
                <span className="tech-label !text-[10px] text-accent">NASA HUNCH Program</span>
              </div>
            </div>
            <p className="text-sm text-text-muted leading-relaxed mb-4">
              A NASA HUNCH engineering team from Ranchview High School, Irving TX. Building rovers and terrain simulations for the HERA program.
            </p>
            <div className="flex flex-col gap-2">
              {/* Email */}
              <a
                href="mailto:rhs.metsanauts@gmail.com"
                className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-blue transition-colors"
              >
                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <span className="truncate">rhs.metsanauts@gmail.com</span>
              </a>
              {/* Instagram */}
              <a
                href="https://instagram.com/metsanauts"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-blue transition-colors"
              >
                <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                @metsanauts
              </a>
            </div>
          </div>

          <div className="flex gap-16">
            <div>
              <p className="tech-label mb-4">Project</p>
              <div className="flex flex-col gap-2.5">
                {[
                  { href: "/mission", label: "Mission" },
                  { href: "/rover-systems", label: "Rover Systems" },
                  { href: "/innovations", label: "Innovations" },
                ].map((link) => (
                  <Link key={link.href} href={link.href} className="text-sm text-text-muted hover:text-blue transition-colors">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className="tech-label mb-4">More</p>
              <div className="flex flex-col gap-2.5">
                {[
                  { href: "/research", label: "Research" },
                  { href: "/gallery", label: "Gallery" },
                  { href: "/team", label: "Team" },
                ].map((link) => (
                  <Link key={link.href} href={link.href} className="text-sm text-text-muted hover:text-blue transition-colors">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row justify-between gap-2 items-center">
          <p className="text-xs text-text-muted">&copy; 2026 METSAnauts &mdash; NASA HUNCH Program</p>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 opacity-50">
              <Image src="/logo.png" alt="" width={16} height={16} className="object-contain" />
            </div>
            <p className="text-xs text-text-muted">Ranchview High School, Irving TX</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
