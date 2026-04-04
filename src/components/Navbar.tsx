"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const leftLinks: { href: string; label: string; soon?: boolean }[] = [
  { href: "/", label: "Home" },
  { href: "/mission", label: "Mission" },
  { href: "/rover-systems", label: "Rover Systems" },
  { href: "/innovations", label: "Innovations" },
];

const rightLinks: { href: string; label: string; soon?: boolean }[] = [
  { href: "/research", label: "Research" },
  { href: "/gallery", label: "Gallery" },
  { href: "/team", label: "Team" },
  { href: "/blog", label: "Mission Log" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 pt-2">
      {/* Floating bar */}
      <div
        className={`relative max-w-[1400px] mx-auto h-14 flex items-center pt-12 px-3 rounded-2xl border transition-all duration-300 ${
          scrolled
            ? "bg-black/80 backdrop-blur-xl border-white/15"
            : "bg-black/50 backdrop-blur-md border-white/10"
        }`}
      >
        {/* Left links — Home aligns to left content edge */}
        <div className="hidden lg:flex flex-1 items-center justify-start gap-6">
          {leftLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="inline-flex items-center px-5 py-2 text-base font-medium text-white/80 hover:text-white bg-white/8 hover:bg-white/15 border border-white/30 hover:border-white/50 rounded-full transition-all duration-150 whitespace-nowrap"
              style={{ boxShadow: "inset 0 -2px 0 rgba(91,156,246,0.55)" }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Center logo — absolute so left/right groups don't squeeze it */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
              <Image src="/logo.png" alt="METSAnauts" width={40} height={40} className="w-full h-full object-cover" />
            </div>
            <span className="text-base font-bold text-white tracking-tight">METSAnauts</span>
          </Link>
        </div>

        {/* Right links — Mission Log aligns to right content edge */}
        <div className="hidden lg:flex flex-1 items-center justify-end gap-6">
          {rightLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="inline-flex items-center px-5 py-2 text-base font-medium text-white/80 hover:text-white bg-white/8 hover:bg-white/15 border border-white/30 hover:border-white/50 rounded-full transition-all duration-150 whitespace-nowrap"
              style={{ boxShadow: "inset 0 -2px 0 rgba(91,156,246,0.55)" }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-white/70 hover:text-white rounded-md transition-colors ml-auto"
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="mt-2 rounded-2xl lg:hidden bg-black/90 backdrop-blur-xl border border-white/10">
          <div className="px-6 py-4 space-y-1">
            {[...leftLinks, ...rightLinks].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center px-4 py-2.5 text-sm font-medium text-white/70 hover:text-white hover:bg-white/8 rounded-full transition-all duration-150"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
