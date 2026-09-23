"use client";

import type { ComponentType } from "react";

import ReactBitsAccordionGallery from "@/components/AccordionGallery";
import type { AccordionGalleryContentProps } from "@/components/site/accordion-gallery";

const UntypedAccordionGallery =
  ReactBitsAccordionGallery as ComponentType<AccordionGalleryContentProps>;

export function AccordionGalleryContent(props: AccordionGalleryContentProps) {
  return <UntypedAccordionGallery {...props} />;
}
