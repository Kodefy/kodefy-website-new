"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

type FrameRevealProps = {
  alt: string;
  className?: string;
  src: string;
};

export function FrameReveal({ alt, className, src }: FrameRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setHasEntered(true);
        observer.disconnect();
      },
      { threshold: 0.35 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={elementRef}
      className={cn("relative aspect-[4/5] overflow-hidden", className)}
    >
      <div
        aria-hidden="true"
        className={`absolute right-0 bottom-0 left-0 z-0 w-full bg-white mix-blend-difference transition-[height] duration-1000 ease-in-out motion-reduce:duration-0 ${
          hasEntered ? "h-full" : "h-0"
        }`}
      />
      <img
        src={src}
        alt={alt}
        className={`absolute inset-0 z-10 h-full w-full object-cover transition-transform duration-1000 ease-in-out motion-reduce:delay-0 motion-reduce:duration-0 ${
          hasEntered ? "translate-y-0 scale-100 delay-750" : "translate-y-[200%] scale-200"
        }`}
      />
    </div>
  );
}
