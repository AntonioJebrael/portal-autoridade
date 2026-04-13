"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

interface AnimatedCounterProps {
  value: string;
  label: string;
}

export function AnimatedCounter({ value, label }: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const prefersReducedMotion = useReducedMotion();

  // Extract numeric part and suffix
  const match = value.match(/^(\d+)(.*)$/);
  const numericPart = match ? parseInt(match[1], 10) : null;
  const suffix = match ? match[2] : "";

  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!isInView || hasAnimated || numericPart === null || prefersReducedMotion) return;

    setHasAnimated(true);

    const duration = 1500; // ms
    const steps = 30;
    const stepDuration = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current++;
      const progress = current / steps;
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * numericPart));

      if (current >= steps) {
        clearInterval(timer);
        setCount(numericPart);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isInView, hasAnimated, numericPart, prefersReducedMotion]);

  const isNumeric = numericPart !== null;

  return (
    <div
      ref={ref}
      className="text-center py-8 px-4 rounded-2xl border border-white/[0.06] bg-[#0a0a0c]"
    >
      <div className="text-3xl sm:text-4xl font-bold text-gradient-accent mb-2">
        {prefersReducedMotion || !isNumeric
          ? value
          : `${count}${suffix}`}
      </div>
      <div className="text-xs text-zinc-500 font-mono uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}
