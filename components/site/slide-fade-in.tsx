"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

import { cn } from "@/lib/utils";

type Direction = "left" | "right";

type SlideFadeInProps = {
  as?: "div" | "li";
  children: ReactNode;
  className?: string;
  delay?: number;
  desktopDirection?: Direction;
  mobileDirection?: Direction;
};

export function SlideFadeIn({
  as = "div",
  children,
  className,
  delay = 0,
  desktopDirection = "right",
  mobileDirection = desktopDirection,
}: SlideFadeInProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const listItemRef = useRef<HTMLLIElement>(null);
  const isInView = useInView(as === "li" ? listItemRef : divRef, {
    once: true,
    amount: 0.3,
  });
  const prefersReducedMotion = useReducedMotion();
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const updateViewport = () => setIsDesktop(mediaQuery.matches);

    updateViewport();
    mediaQuery.addEventListener("change", updateViewport);

    return () => mediaQuery.removeEventListener("change", updateViewport);
  }, []);

  const direction = isDesktop ? desktopDirection : mobileDirection;
  const offset = direction === "right" ? 56 : -56;

  const animationProps = {
    initial: prefersReducedMotion ? false : { opacity: 0, x: offset },
    animate:
      isInView || prefersReducedMotion
        ? { opacity: 1, x: 0 }
        : { opacity: 0, x: offset },
    transition: {
      duration: prefersReducedMotion ? 0 : 0.8,
      ease: [0.16, 0.95, 0.22, 1] as [number, number, number, number],
      delay: prefersReducedMotion ? 0 : delay,
    },
    className: cn(className),
  };

  return as === "li" ? (
    <motion.li ref={listItemRef} {...animationProps}>
      {children}
    </motion.li>
  ) : (
    <motion.div ref={divRef} {...animationProps}>
      {children}
    </motion.div>
  );
}
