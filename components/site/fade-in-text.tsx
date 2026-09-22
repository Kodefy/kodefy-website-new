"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

import { cn } from "@/lib/utils";

type FadeInTextProps = {
  className?: string;
  delay?: number;
  text: string;
};

export function FadeInText({
  className,
  delay = 0,
  text,
}: FadeInTextProps) {
  const rootRef = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(rootRef, { once: true, amount: 0.35 });
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.p
      ref={rootRef}
      initial={prefersReducedMotion ? false : { opacity: 0 }}
      animate={{ opacity: isInView || prefersReducedMotion ? 1 : 0 }}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.9,
        ease: "easeOut",
        delay: prefersReducedMotion ? 0 : delay,
      }}
      className={cn(className)}
    >
      {text}
    </motion.p>
  );
}
