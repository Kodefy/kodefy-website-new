"use client";

import Lenis from "lenis";
import { useEffect } from "react";

export function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      anchors: {
        duration: 1.05,
      },
      lerp: 0.1,
      respectReducedMotion: true,
    });

    return () => lenis.destroy();
  }, []);

  return null;
}
