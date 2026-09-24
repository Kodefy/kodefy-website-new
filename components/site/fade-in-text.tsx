"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, type ReactNode, type RefObject } from "react";

import { cn } from "@/lib/utils";

type FadeInTextProps = {
  as?: "p" | "li";
  className?: string;
  children?: ReactNode;
  delay?: number;
  text: string;
};

export function FadeInText({
  as = "p",
  className,
  children,
  delay = 0,
  text,
}: FadeInTextProps) {
  const rootRef = useRef<HTMLElement>(null);
  const isInView = useInView(rootRef, { once: true, amount: 0.35 });
  const prefersReducedMotion = useReducedMotion();

  const animation = {
    initial: prefersReducedMotion ? false : { opacity: 0 },
    animate: { opacity: isInView || prefersReducedMotion ? 1 : 0 },
    transition: {
      duration: prefersReducedMotion ? 0 : 0.9,
      ease: "easeOut" as const,
      delay: prefersReducedMotion ? 0 : delay,
    },
    className: cn(className),
  };

  if (as === "li") {
    return (
      <motion.li ref={rootRef as RefObject<HTMLLIElement>} {...animation}>
        {children ?? text}
      </motion.li>
    );
  }

  return (
    <motion.p ref={rootRef as RefObject<HTMLParagraphElement>} {...animation}>
      {children ?? text}
    </motion.p>
  );
}
