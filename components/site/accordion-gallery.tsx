"use client";

import { useEffect, useRef, useState, type ComponentType } from "react";

type AccordionGalleryItem = {
  alt?: string;
  image: string;
  label: string;
  link?: string;
};

export type AccordionGalleryProps = {
  accentColor?: string;
  className?: string;
  defaultIndex?: number;
  duration?: number;
  ease?: string;
  expandRatio?: number;
  gap?: number;
  grayscale?: boolean;
  height?: number;
  items: AccordionGalleryItem[];
  overlayColor?: string;
  radius?: number;
  showLabels?: boolean;
  textColor?: string;
  tilt?: number;
  trigger?: "hover" | "click";
  lazy?: boolean;
  lazyRootMargin?: string;
};

export type AccordionGalleryContentProps = Omit<
  AccordionGalleryProps,
  "lazy" | "lazyRootMargin"
>;

export function AccordionGallery({
  lazy = false,
  lazyRootMargin = "600px 0px",
  ...props
}: AccordionGalleryProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [Gallery, setGallery] =
    useState<ComponentType<AccordionGalleryContentProps> | null>(null);

  useEffect(() => {
    const loadGallery = () => {
      void import("@/components/site/accordion-gallery-content").then(
        (module) => setGallery(() => module.AccordionGalleryContent),
      );
    };

    if (!lazy) {
      loadGallery();
      return;
    }

    const element = rootRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        loadGallery();
        observer.disconnect();
      },
      { rootMargin: lazyRootMargin },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [lazy, lazyRootMargin]);

  return (
    <div ref={rootRef} className="min-h-[184px] sm:min-h-[420px]">
      {Gallery ? <Gallery {...props} /> : null}
    </div>
  );
}
