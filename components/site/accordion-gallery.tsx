"use client";

import type { ComponentType } from "react";

import ReactBitsAccordionGallery from "@/components/AccordionGallery";

type AccordionGalleryItem = {
  alt?: string;
  image: string;
  label: string;
  link?: string;
};

type AccordionGalleryProps = {
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
};

const UntypedAccordionGallery =
  ReactBitsAccordionGallery as ComponentType<AccordionGalleryProps>;

export function AccordionGallery(props: AccordionGalleryProps) {
  return <UntypedAccordionGallery {...props} />;
}
