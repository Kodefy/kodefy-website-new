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
  const items = text.trim().split(/\s+/).filter(Boolean);
  const characterTokens = text.split(/(\s+)/).filter(Boolean);
  const rootRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(rootRef, { once: true, amount: 0.35 });
  const prefersReducedMotion = useReducedMotion();
  let characterIndex = 0;

  return (
    <span ref={rootRef} className={cn("block overflow-hidden", className)} aria-label={text}>
      <span aria-hidden="true" className="block">
        {revealBy === "character"
          ? characterTokens.map((token, tokenIndex) => {
              if (/^\s+$/.test(token)) {
                return token.includes("\n") ? (
                  <br key={`${tokenIndex}-break`} />
                ) : (
                  <span key={`${tokenIndex}-space`}> </span>
                );
              }

              return (
                <span
                  key={`${tokenIndex}-${token}`}
                  className="inline-block whitespace-nowrap"
                >
                  {Array.from(token).map((character) => {
                    const index = characterIndex++;

                    return (
                      <span
                        key={`${index}-${character}`}
                        className="inline-block overflow-hidden pb-[0.16em] align-top"
                      >
                        <motion.span
                          initial={prefersReducedMotion ? false : { y: "110%" }}
                          animate={{ y: isInView || prefersReducedMotion ? "0%" : "110%" }}
                          transition={{
                            duration: prefersReducedMotion ? 0 : 1.15,
                            ease: revealEase,
                            delay: prefersReducedMotion
                              ? 0
                              : delay + index * characterStagger,
                          }}
                          className="block transform-gpu [backface-visibility:hidden] will-change-transform"
                        >
                          {character}
                        </motion.span>
                      </span>
                    );
                  })}
                </span>
              );
            })
          : items.map((item, index) => (
              <span
                key={`${index}-${item}`}
                className="mr-[0.22em] inline-block overflow-hidden pb-[0.16em] align-top last:mr-0"
              >
                <motion.span
                  initial={prefersReducedMotion ? false : { y: "110%" }}
                  animate={{ y: isInView || prefersReducedMotion ? "0%" : "110%" }}
                  transition={{
                    duration: prefersReducedMotion ? 0 : 1.15,
                    ease: revealEase,
                    delay: prefersReducedMotion ? 0 : delay + index * wordStagger,
                  }}
                  className="block transform-gpu [backface-visibility:hidden] will-change-transform"
                >
                  {item}
                </motion.span>
              </span>
            ))}
      </span>
    </span>
  );
}
