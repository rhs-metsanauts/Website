import Link from "next/link";
import Image from "next/image";

const allLinks = [
  { href: "/mission", label: "Mission" },
  { href: "/rover-systems", label: "Rover Systems" },
  { href: "/innovations", label: "Innovations" },
  { href: "/research", label: "Research" },
  { href: "/gallery", label: "Gallery" },
  { href: "/team", label: "Team" },
  { href: "/blog", label: "Mission Log" },
  { href: "/bothscape", label: "BothScape" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] py-6 px-6">
      <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5 shrink-0">
          <div className="w-7 h-7 rounded-full overflow-hidden">
            <Image src="/logo.png" alt="METSAnauts" width={28} height={28} className="w-full h-full object-cover" />
          </div>
          <span className="text-sm font-bold text-white">METSAnauts</span>
          <span className="tech-label !text-[9px] text-blue">NASA HUNCH</span>
        </div>

        <div className="flex gap-4 flex-wrap justify-center">
          {allLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs text-white/40 hover:text-white/80 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <p className="text-xs text-white/30 shrink-0">&copy; 2026 Ranchview HS, Irving TX</p>
      </div>
    </footer>
  );
}
