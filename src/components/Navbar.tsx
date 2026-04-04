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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/60 backdrop-blur-xl border-b border-white/[0.08]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-8">
        <div className="flex items-center h-14">
          {/* Left links */}
          <div className="hidden lg:flex flex-1 items-center justify-end gap-2">
            {leftLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3.5 py-1.5 text-sm font-medium text-text-muted hover:text-white border border-white/10 hover:border-white/20 hover:bg-white/5 rounded-full transition-all duration-150 flex items-center gap-1.5"
              >
                {link.label}
                {link.soon && (
                  <svg
                    viewBox="0 0 28 28"
                    className="w-[18px] h-[18px] animate-spin shrink-0"
                    style={{ animationDuration: "8s", animationTimingFunction: "linear" }}
                  >
                    <defs>
                      <path id="navCircleLeft" d="M 14,14 m -10,0 a 10,10 0 1,1 20,0 a 10,10 0 1,1 -20,0" />
                    </defs>
                    <text fill="#60a5fa" fontSize="5.2" fontFamily="monospace" letterSpacing="1.4">
                      <textPath href="#navCircleLeft">SOON · SOON · </textPath>
                    </text>
                  </svg>
                )}
              </Link>
            ))}
          </div>

          {/* Center logo */}
          <div className="flex flex-1 items-center justify-center">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                <Image src="/logo.png" alt="METSAnauts" width={40} height={40} className="w-full h-full object-cover" />
              </div>
              <span className="text-[15px] font-bold text-text-bright tracking-tight">METSAnauts</span>
            </Link>
          </div>

          {/* Right links */}
          <div className="hidden lg:flex flex-1 items-center justify-start gap-2">
            {rightLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3.5 py-1.5 text-sm font-medium text-text-muted hover:text-white border border-white/10 hover:border-white/20 hover:bg-white/5 rounded-full transition-all duration-150 flex items-center gap-1.5"
              >
                {link.label}
                {link.soon && (
                  <svg
                    viewBox="0 0 28 28"
                    className="w-[18px] h-[18px] animate-spin shrink-0"
                    style={{ animationDuration: "8s", animationTimingFunction: "linear" }}
                  >
                    <defs>
                      <path id="navCircleRight" d="M 14,14 m -10,0 a 10,10 0 1,1 20,0 a 10,10 0 1,1 -20,0" />
                    </defs>
                    <text fill="#60a5fa" fontSize="5.2" fontFamily="monospace" letterSpacing="1.4">
                      <textPath href="#navCircleRight">SOON · SOON · </textPath>
                    </text>
                  </svg>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-text-muted hover:text-white rounded-md transition-colors ml-auto"
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
        <div className="lg:hidden bg-black/80 backdrop-blur-xl border-t border-white/[0.08]">
          <div className="px-6 py-4 space-y-1">
            {[...leftLinks, ...rightLinks].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 px-3.5 py-2.5 text-sm font-medium text-text-muted hover:text-white hover:bg-white/5 rounded-full transition-all duration-150"
              >
                {link.label}
                {link.soon && (
                  <svg
                    viewBox="0 0 28 28"
                    className="w-[18px] h-[18px] animate-spin shrink-0"
                    style={{ animationDuration: "8s", animationTimingFunction: "linear" }}
                  >
                    <defs>
                      <path id="navCircleMobile" d="M 14,14 m -10,0 a 10,10 0 1,1 20,0 a 10,10 0 1,1 -20,0" />
                    </defs>
                    <text fill="#60a5fa" fontSize="5.2" fontFamily="monospace" letterSpacing="1.4">
                      <textPath href="#navCircleMobile">SOON · SOON · </textPath>
                    </text>
                  </svg>
                )}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
