"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/mission", label: "Mission" },
  { href: "/rover-systems", label: "Rover Systems" },
  { href: "/bothscape", label: "BothScape" },
  { href: "/innovations", label: "Innovations" },
  { href: "/budget-timeline", label: "Budget & Timeline" },
  { href: "/research", label: "Research" },
  { href: "/gallery", label: "Gallery" },
  { href: "/team", label: "Team" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/90 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-5">
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center overflow-hidden">
              <Image src="/logo.png" alt="METSAnauts" width={32} height={32} className="object-contain" />
            </div>
            <span className="text-sm font-semibold text-text-bright tracking-wide">METSAnauts</span>
          </Link>

          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-[13px] text-text-muted hover:text-text-bright rounded transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-1.5 text-text-muted hover:text-text-bright"
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
      </div>

      {open && (
        <div className="lg:hidden bg-surface border-b border-border">
          <div className="px-5 py-3 space-y-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2 text-sm text-text-muted hover:text-text-bright rounded transition-colors"
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
