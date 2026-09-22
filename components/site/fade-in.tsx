"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { Children, useRef, type ReactNode } from "react";

import { cn } from "@/lib/utils";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
};

export function FadeIn({
  children,
  className,
  delay = 0,
  stagger,
}: FadeInProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(rootRef, { once: true, amount: 0.35 });
  const prefersReducedMotion = useReducedMotion();
  const shouldStaggerChildren = stagger !== undefined;

  return (
    <motion.div
      ref={rootRef}
      initial={
        prefersReducedMotion || shouldStaggerChildren ? false : { opacity: 0 }
      }
      animate={
        shouldStaggerChildren
          ? undefined
          : { opacity: isInView || prefersReducedMotion ? 1 : 0 }
      }
      transition={{
        duration: prefersReducedMotion ? 0 : 0.9,
        ease: "easeOut",
        delay: shouldStaggerChildren || prefersReducedMotion ? 0 : delay,
      }}
      className={cn(className)}
    >
      {shouldStaggerChildren
        ? Children.toArray(children).map((child, index) => (
            <motion.div
              key={index}
              initial={prefersReducedMotion ? false : { opacity: 0 }}
              animate={{ opacity: isInView || prefersReducedMotion ? 1 : 0 }}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.9,
                ease: "easeOut",
                delay: prefersReducedMotion ? 0 : delay + index * (stagger ?? 0),
              }}
            >
              {child}
            </motion.div>
          ))
        : children}
    </motion.div>
  );
}
