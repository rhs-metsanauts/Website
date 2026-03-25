"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/mission", label: "Mission" },
  { href: "/rover-systems", label: "Rover Systems" },
  { href: "/innovations", label: "Innovations" },
  { href: "/research", label: "Research" },
  { href: "/gallery", label: "Gallery" },
  { href: "/team", label: "Team" },
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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-250 ${
        scrolled
          ? "bg-bg/92 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-bg border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 flex items-center justify-center group-hover:opacity-80 transition-opacity">
              <Image src="/logo.png" alt="METSAnauts" width={36} height={36} className="object-contain" />
            </div>
            <div className="flex items-center gap-2.5">
              <span className="text-[15px] font-bold text-text-bright tracking-tight">METSAnauts</span>
              <span className="hidden sm:inline-block tech-label !text-[10px] px-2 py-0.5 rounded border border-accent/25 bg-accent-soft text-accent">
                NASA&nbsp;HUNCH
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link px-3 py-2 text-sm font-medium text-text-muted hover:text-blue transition-colors rounded-md"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-text-muted hover:text-blue rounded-md transition-colors"
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
        <div className="lg:hidden bg-bg border-t border-border">
          <div className="px-6 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2.5 text-sm font-medium text-text-muted hover:text-blue hover:bg-blue-muted rounded-md transition-colors"
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
