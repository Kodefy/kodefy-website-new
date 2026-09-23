"use client";

import { useEffect, useRef, useState, type ComponentType } from "react";

type GrainientProps = {
  centerX?: number;
  centerY?: number;
  className?: string;
  color1?: string;
  color2?: string;
  color3?: string;
  colorBalance?: number;
  contrast?: number;
  gamma?: number;
  grainAmount?: number;
  grainAnimated?: boolean;
  grainScale?: number;
  noiseScale?: number;
  rotationAmount?: number;
  saturation?: number;
  timeSpeed?: number;
  warpAmplitude?: number;
  warpFrequency?: number;
  warpSpeed?: number;
  warpStrength?: number;
  zoom?: number;
};

export function LazyGrainient({ className, ...props }: GrainientProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [Grainient, setGrainient] = useState<ComponentType<GrainientProps> | null>(
    null,
  );

  useEffect(() => {
    const element = rootRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        void import("@/components/site/grainient").then((module) => {
          setGrainient(() => module.default as ComponentType<GrainientProps>);
        });
        observer.disconnect();
      },
      { rootMargin: "600px 0px" },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={rootRef} className={className}>
      {Grainient ? <Grainient {...props} className="size-full" /> : null}
    </div>
  );
}
