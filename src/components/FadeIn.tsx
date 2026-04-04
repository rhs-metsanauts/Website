"use client";

import { useEffect, useRef, useState } from "react";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
}

export default function FadeIn({ children, className = "", delay = 0, direction = "up" }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.06 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const hiddenTransform = {
    up:    "translateY(24px) scale(0.975)",
    left:  "translateX(-32px)",
    right: "translateX(32px)",
  }[direction];

  const visibleTransform = {
    up:    "translateY(0) scale(1)",
    left:  "translateX(0)",
    right: "translateX(0)",
  }[direction];

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? visibleTransform : hiddenTransform,
        transition: `opacity 0.55s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform 0.55s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
