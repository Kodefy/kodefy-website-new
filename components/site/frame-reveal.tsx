"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

export type FrameRevealImage = {
  alt: string;
  src: string;
};

export type FrameRevealDirection = "bottom" | "left" | "right" | "top";

type FrameRevealProps = {
  /** Controlled carousel index. Leave unset for internal automatic progression. */
  activeIndex?: number;
  /** Alternative text for a single image source. */
  alt?: string;
  /** Tailwind background used by the animated frame before the first image appears. */
  backgroundClassName?: string;
  /** Additional classes for the outer reveal container. */
  className?: string;
  /** Wait time before the initial frame animation begins. */
  delayMs?: number;
  /** Image sequence. Supplying more than one image enables automatic looping. */
  images?: readonly FrameRevealImage[];
  /** Time between carousel images in milliseconds. Defaults to 5000. */
  intervalMs?: number;
  /** Called whenever a carousel image becomes active, including its reveal direction. */
  onActiveIndexChange?: (
    index: number,
    revealFrom: FrameRevealDirection,
  ) => void;
  /** Called once the initial frame and first image reveal have completed. */
  onRevealComplete?: () => void;
  /** Direction from which the initial frame and image reveal. */
  revealFrom?: "bottom" | "left" | "right" | "top";
  /** Set false to show the frame immediately instead of animating its size. */
  revealFrame?: boolean;
  /** Single image source. Use with alt when no image sequence is needed. */
  src?: string;
  /** Changes the carousel image identity for externally controlled rapid transitions. */
  transitionKey?: number;
  /** Direction used by an externally controlled carousel image transition. */
  carouselRevealFrom?: FrameRevealDirection;
};

export function FrameReveal({
  activeIndex,
  alt,
  backgroundClassName = "bg-black",
  className,
  delayMs = 0,
  images,
  intervalMs = 5000,
  onActiveIndexChange,
  onRevealComplete,
  revealFrom = "bottom",
  revealFrame = true,
  src,
  transitionKey,
  carouselRevealFrom = "bottom",
}: FrameRevealProps) {
  const imageItems = images?.length
    ? images
    : src && alt
      ? [{ src, alt }]
      : [];
  const firstImage = imageItems[0];
  const [hasEntered, setHasEntered] = useState(false);
  const [hasInitialRevealCompleted, setHasInitialRevealCompleted] = useState(false);
  const [internalActiveIndex, setInternalActiveIndex] = useState(0);
  const [internalTransitionKey, setInternalTransitionKey] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const activeIndexRef = useRef(0);
  const hasMountedCarouselRef = useRef(false);
  const onActiveIndexChangeRef = useRef(onActiveIndexChange);
  const onRevealCompleteRef = useRef(onRevealComplete);
  const currentActiveIndex = Math.min(
    Math.max(activeIndex ?? internalActiveIndex, 0),
    Math.max(imageItems.length - 1, 0),
  );
  const currentImage = imageItems[currentActiveIndex] ?? firstImage;

  useEffect(() => {
    onActiveIndexChangeRef.current = onActiveIndexChange;
  }, [onActiveIndexChange]);

  useEffect(() => {
    onRevealCompleteRef.current = onRevealComplete;
  }, [onRevealComplete]);

  useEffect(() => {
    activeIndexRef.current = currentActiveIndex;
  }, [currentActiveIndex]);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || !firstImage) return;

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
  }, [firstImage?.src]);

  useEffect(() => {
    if (!hasEntered) return;

    const timer = window.setTimeout(() => {
      setHasInitialRevealCompleted(true);
      onRevealCompleteRef.current?.();
    }, delayMs + 1750);

    return () => window.clearTimeout(timer);
  }, [delayMs, hasEntered]);

  useEffect(() => {
    if (!hasInitialRevealCompleted) return;

    hasMountedCarouselRef.current = true;
  }, [hasInitialRevealCompleted]);

  useEffect(() => {
    if (!hasInitialRevealCompleted || imageItems.length < 2) return;

    const timer = window.setInterval(() => {
      const nextIndex = (activeIndexRef.current + 1) % imageItems.length;

      if (activeIndex === undefined) {
        setInternalActiveIndex(nextIndex);
        setInternalTransitionKey((key) => key + 1);
      }
      onActiveIndexChangeRef.current?.(nextIndex, "bottom");
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [activeIndex, currentActiveIndex, hasInitialRevealCompleted, imageItems.length, intervalMs]);

  if (!firstImage || !currentImage) return null;

  const shouldAnimateCarouselImage = hasMountedCarouselRef.current;
  const resolvedTransitionKey = transitionKey ?? internalTransitionKey;
  const carouselInitialState =
    carouselRevealFrom === "bottom"
      ? { clipPath: "inset(100% 0 0 0)", scale: 1.04, y: "6%" }
      : carouselRevealFrom === "top"
        ? { clipPath: "inset(0 0 100% 0)", scale: 1.04, y: "-6%" }
        : carouselRevealFrom === "left"
          ? { clipPath: "inset(0 100% 0 0)", scale: 1.04, x: "-6%" }
          : { clipPath: "inset(0 0 0 100%)", scale: 1.04, x: "6%" };

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
          hasEntered ? "[clip-path:inset(0_0_0_0)]" : initialClipPath
        }`}
        style={{ transitionDelay: hasEntered ? `${delayMs + 750}ms` : "0ms" }}
      >
        <img
          src={firstImage.src}
          alt={firstImage.alt}
          className={`h-full w-full object-cover transition-transform duration-1000 ease-in-out motion-reduce:delay-0 motion-reduce:duration-0 ${
            hasEntered ? "scale-100" : "scale-200"
          }`}
          style={{ transitionDelay: hasEntered ? `${delayMs + 750}ms` : "0ms" }}
        />
      </div>
      {hasInitialRevealCompleted && imageItems.length > 1 ? (
        <AnimatePresence mode="sync">
          <motion.img
            key={`frame-reveal-image-${currentActiveIndex}-${resolvedTransitionKey}`}
            src={currentImage.src}
            alt={currentImage.alt}
            initial={
              shouldAnimateCarouselImage
                ? carouselInitialState
                : false
            }
            animate={{ clipPath: "inset(0 0 0 0)", scale: 1, y: "0%" }}
            exit={{ opacity: 0.999 }}
            transition={{ duration: 1, ease: [0.16, 0.95, 0.22, 1] }}
            className="absolute inset-0 z-20 h-full w-full object-cover"
          />
        </AnimatePresence>
      ) : null}
    </div>
  );
}
