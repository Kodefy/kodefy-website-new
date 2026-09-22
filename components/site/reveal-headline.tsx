"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

import { cn } from "@/lib/utils";

type RevealHeadlineProps = {
  characterStagger?: number;
  className?: string;
  delay?: number;
  revealBy?: "word" | "character";
  text: string;
  wordStagger?: number;
};

const revealEase: [number, number, number, number] = [0.16, 0.95, 0.22, 1];

export function RevealHeadline({
  characterStagger = 0.025,
  className,
  delay = 0,
  revealBy = "word",
  text,
  wordStagger = 0.06,
}: RevealHeadlineProps) {
  const items =
    revealBy === "character"
      ? text.split("")
      : text.trim().split(/\s+/).filter(Boolean);
  const rootRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(rootRef, { once: true, amount: 0.35 });
  const prefersReducedMotion = useReducedMotion();
  const stagger = revealBy === "character" ? characterStagger : wordStagger;

  return (
    <span ref={rootRef} className={cn("block overflow-hidden", className)} aria-label={text}>
      <span
        aria-hidden="true"
        className={cn("block", revealBy === "character" && "whitespace-nowrap")}
      >
        {items.map((item, index) => (
          <span
            key={`${index}-${item}`}
            className={cn(
              "inline-block overflow-hidden pb-[0.16em] align-top",
              revealBy === "word" && "mr-[0.22em] last:mr-0",
            )}
          >
            <motion.span
              initial={prefersReducedMotion ? false : { y: "110%" }}
              animate={{ y: isInView || prefersReducedMotion ? "0%" : "110%" }}
              transition={{
                duration: prefersReducedMotion ? 0 : 1.15,
                ease: revealEase,
                delay: prefersReducedMotion ? 0 : delay + index * stagger,
              }}
              className="block transform-gpu [backface-visibility:hidden] will-change-transform"
            >
              {item === " " ? "\u00a0" : item}
            </motion.span>
          </span>
        ))}
      </span>
    </span>
  );
}
