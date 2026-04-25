"use client";

import { motion, useReducedMotion } from "framer-motion";

type Direction = "up" | "down" | "left" | "right";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  delay?: number;
  direction?: Direction;
  className?: string;
}

export function AnimateOnScroll({
  children,
  delay = 0,
  className,
}: AnimateOnScrollProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 1, x: 0, y: 0 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
