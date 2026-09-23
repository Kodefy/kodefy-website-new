"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

type FrameRevealProps = {
  alt: string;
  backgroundClassName?: string;
  className?: string;
  delayMs?: number;
  revealFrom?: "bottom" | "left" | "right" | "top";
  revealFrame?: boolean;
  src: string;
};

export function FrameReveal({
  alt,
  backgroundClassName = "bg-black",
  className,
  delayMs = 0,
  revealFrom = "bottom",
  revealFrame = true,
  src,
}: FrameRevealProps) {
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

  const framePosition =
    revealFrom === "bottom"
      ? "right-0 bottom-0 left-0 w-full"
      : revealFrom === "top"
        ? "top-0 right-0 left-0 w-full"
        : revealFrom === "left"
          ? "top-0 bottom-0 left-0 h-full"
          : "top-0 right-0 bottom-0 h-full";
  const frameSize =
    revealFrom === "bottom" || revealFrom === "top"
      ? revealFrame
        ? hasEntered
          ? "h-full"
          : "h-0"
        : "h-full"
      : revealFrame
        ? hasEntered
          ? "w-full"
          : "w-0"
        : "w-full";
  const frameTransition =
    revealFrom === "bottom" || revealFrom === "top"
      ? "transition-[height]"
      : "transition-[width]";
  const initialClipPath =
    revealFrom === "bottom"
      ? "[clip-path:inset(100%_0_0_0)]"
      : revealFrom === "top"
        ? "[clip-path:inset(0_0_100%_0)]"
        : revealFrom === "left"
          ? "[clip-path:inset(0_100%_0_0)]"
          : "[clip-path:inset(0_0_0_100%)]";

  return (
    <div
      ref={elementRef}
      className={cn("relative aspect-4/5 overflow-hidden", className)}
    >
      <div
        aria-hidden="true"
        className={cn(
          "absolute z-0 duration-1000 ease-in-out motion-reduce:duration-0",
          framePosition,
          frameTransition,
          backgroundClassName,
          frameSize,
        )}
        style={{ transitionDelay: revealFrame && hasEntered ? `${delayMs}ms` : "0ms" }}
      />
      <div
        className={`absolute inset-0 z-10 overflow-hidden transition-[clip-path] duration-1000 ease-in-out motion-reduce:delay-0 motion-reduce:duration-0 ${
          hasEntered
            ? "[clip-path:inset(0_0_0_0)]"
            : initialClipPath
        }`}
        style={{ transitionDelay: hasEntered ? `${delayMs + 750}ms` : "0ms" }}
      >
        <img
          src={src}
          alt={alt}
          className={`h-full w-full object-cover transition-transform duration-1000 ease-in-out motion-reduce:delay-0 motion-reduce:duration-0 ${
            hasEntered ? "scale-100" : "scale-200"
          }`}
          style={{ transitionDelay: hasEntered ? `${delayMs + 750}ms` : "0ms" }}
        />
      </div>
    </div>
  );
}
