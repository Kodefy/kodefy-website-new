"use client";

import { useEffect, useRef, useState, type ComponentPropsWithoutRef, type PointerEvent } from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";

type DriftPreviewProps = ComponentPropsWithoutRef<"a"> & {
  imageSrc: string;
  imageAlt?: string;
  previewHeight?: number;
  previewWidth?: number;
};

export function DriftPreview({
  children,
  className,
  imageSrc,
  imageAlt = "",
  onPointerEnter,
  onPointerLeave,
  onPointerMove,
  previewHeight = 320,
  previewWidth = 256,
  ...props
}: DriftPreviewProps) {
  const previewRef = useRef<HTMLSpanElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const resetTiltTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hasPositionRef = useRef(false);
  const lastPointerRef = useRef<{ x: number; y: number } | null>(null);
  const positionRef = useRef({ x: 0, y: 0, rotation: 0 });
  const targetRef = useRef({ x: 0, y: 0, rotation: 0 });
  const [hasEntered, setHasEntered] = useState(false);
  const [isPreviewVisible, setIsPreviewVisible] = useState(false);

  function paintPreview() {
    const preview = previewRef.current;
    const { x, y, rotation } = positionRef.current;

    if (!preview) return;

    preview.style.transform = `translate3d(${x - previewWidth / 2}px, ${y - previewHeight / 2}px, 0) rotate(${rotation}deg)`;
  }

  function animatePreview() {
    const position = positionRef.current;
    const target = targetRef.current;

    position.x += (target.x - position.x) * 0.18;
    position.y += (target.y - position.y) * 0.18;
    position.rotation += (target.rotation - position.rotation) * 0.16;
    paintPreview();

    const isSettled =
      Math.abs(target.x - position.x) < 0.2 &&
      Math.abs(target.y - position.y) < 0.2 &&
      Math.abs(target.rotation - position.rotation) < 0.05;

    if (isSettled) {
      position.x = target.x;
      position.y = target.y;
      position.rotation = target.rotation;
      paintPreview();
      animationFrameRef.current = null;
      return;
    }

    animationFrameRef.current = requestAnimationFrame(animatePreview);
  }

  function startPreviewAnimation() {
    if (animationFrameRef.current === null) {
      animationFrameRef.current = requestAnimationFrame(animatePreview);
    }
  }

  function movePreview(event: PointerEvent<HTMLElement>) {
    if (event.pointerType === "touch") return;

    const nextPosition = { x: event.clientX, y: event.clientY };

    if (!hasPositionRef.current) {
      positionRef.current = { ...nextPosition, rotation: 0 };
      targetRef.current = { ...nextPosition, rotation: 0 };
      hasPositionRef.current = true;
      paintPreview();
    } else {
      const previousPosition = lastPointerRef.current ?? nextPosition;
      const horizontalMovement = nextPosition.x - previousPosition.x;

      targetRef.current.x = nextPosition.x;
      targetRef.current.y = nextPosition.y;
      targetRef.current.rotation = Math.max(-8, Math.min(8, horizontalMovement * 0.45));
      startPreviewAnimation();
    }

    lastPointerRef.current = nextPosition;

    if (resetTiltTimeoutRef.current) clearTimeout(resetTiltTimeoutRef.current);
    resetTiltTimeoutRef.current = setTimeout(() => {
      targetRef.current.rotation = 0;
      startPreviewAnimation();
    }, 80);
  }

  function showPreview(event: PointerEvent<HTMLAnchorElement>) {
    if (event.pointerType === "touch") return;

    movePreview(event);
    setIsPreviewVisible(true);
  }

  function hidePreview() {
    setIsPreviewVisible(false);
  }

  useEffect(() => {
    return () => {
      if (animationFrameRef.current !== null) cancelAnimationFrame(animationFrameRef.current);
      if (resetTiltTimeoutRef.current) clearTimeout(resetTiltTimeoutRef.current);
    };
  }, []);

  return (
    <a
      {...props}
      onPointerEnter={(event) => {
        showPreview(event);
        onPointerEnter?.(event);
      }}
      onPointerMove={(event) => {
        movePreview(event);
        onPointerMove?.(event);
      }}
      onPointerLeave={(event) => {
        hidePreview();
        onPointerLeave?.(event);
      }}
      className={cn("relative", className)}
    >
      <span
        ref={previewRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-0 hidden will-change-transform lg:block"
        style={{ transform: "translate3d(-9999px, -9999px, 0)" }}
      >
        <span
          className={`relative block overflow-hidden transition-[opacity,scale] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-[opacity,scale] motion-reduce:transition-none ${
            isPreviewVisible ? "scale-100 opacity-100" : "scale-75 opacity-0"
          }`}
          style={{ height: previewHeight, width: previewWidth }}
        >
          <span
            className={`relative block h-full w-full transition-[scale] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-[scale] motion-reduce:transition-none ${
              isPreviewVisible ? "scale-100" : "scale-[1.333333]"
            }`}
          >
            <Image src={imageSrc} alt={imageAlt} fill sizes={`${previewWidth}px`} className="object-cover" />
          </span>
        </span>
      </span>

      {children}
    </a>
  );
}
