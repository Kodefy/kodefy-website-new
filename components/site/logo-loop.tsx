"use client";

import type { ComponentType, CSSProperties } from "react";

import ReactBitsLogoLoop from "@/components/LogoLoop";

type LogoLoopItem = {
  alt?: string;
  href?: string;
  logo?: string;
  name?: string;
  src?: string;
};

type LogoLoopProps = {
  ariaLabel?: string;
  className?: string;
  direction?: "left" | "right" | "up" | "down";
  fadeOut?: boolean;
  fadeOutColor?: string;
  gap?: number;
  hoverSpeed?: number;
  logoHeight?: number;
  logos: readonly LogoLoopItem[];
  pauseOnHover?: boolean;
  scaleOnHover?: boolean;
  speed?: number;
  style?: CSSProperties;
  width?: number | string;
};

const UntypedLogoLoop = ReactBitsLogoLoop as ComponentType<LogoLoopProps>;

export function LogoLoop(props: LogoLoopProps) {
  const logos = props.logos.map(({ logo, ...item }) => ({
    ...item,
    src: item.src ?? logo,
  }));

  return <UntypedLogoLoop {...props} logos={logos} />;
}
