"use client";

import { useEffect, useRef, useState, type PointerEvent } from "react";
import Image from "next/image";

import { SheetClose } from "@/components/ui/sheet";

type DriftPreviewProps = {
  href: string;
  imageSrc: string;
  index: number;
  isMenuOpen: boolean;
  label: string;
};

export function DriftPreview({
  href,
  imageSrc,
  index,
  isMenuOpen,
  label,
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

    preview.style.transform = `translate3d(${x - 128}px, ${y - 160}px, 0) rotate(${rotation}deg)`;
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

  function showPreview(event: PointerEvent<HTMLElement>) {
    if (event.pointerType === "touch") return;

    movePreview(event);
    setIsPreviewVisible(true);
  }

  function hidePreview() {
    setIsPreviewVisible(false);
  }

  useEffect(() => {
    if (!isMenuOpen) {
      setHasEntered(false);
      return;
    }

    let animationFrame = requestAnimationFrame(() => {
      animationFrame = requestAnimationFrame(() => setHasEntered(true));
    });

    return () => cancelAnimationFrame(animationFrame);
  }, [isMenuOpen]);

  useEffect(() => {
    return () => {
      if (animationFrameRef.current !== null) cancelAnimationFrame(animationFrameRef.current);
      if (resetTiltTimeoutRef.current) clearTimeout(resetTiltTimeoutRef.current);
    };
  }, []);

  return (
    <SheetClose
      nativeButton={false}
      render={<a href={href} />}
      onPointerEnter={showPreview}
      onPointerMove={movePreview}
      onPointerLeave={hidePreview}
      className="group relative z-10 flex items-start gap-2 text-5xl leading-none font-extralight tracking-tight text-white transition-colors duration-200 group-hover/menu:text-white/60 hover:!text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:text-6xl lg:text-8xl xl:text-9xl"
    >
      <span
        ref={previewRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-0 hidden will-change-transform lg:block"
        style={{ transform: "translate3d(-9999px, -9999px, 0)" }}
      >
        <span
          className={`relative block h-80 w-64 overflow-hidden transition-[opacity,scale] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-[opacity,scale] motion-reduce:transition-none ${
            isPreviewVisible ? "scale-100 opacity-100" : "scale-75 opacity-0"
          }`}
        >
          <span
            className={`relative block h-full w-full transition-[scale] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-[scale] motion-reduce:transition-none ${
              isPreviewVisible ? "scale-100" : "scale-[1.333333]"
            }`}
          >
            <Image src={imageSrc} alt="" fill sizes="256px" className="object-cover" />
          </span>
        </span>
      </span>

      <span
        className={`flex items-start gap-2 transition-[opacity,translate] duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
          isMenuOpen
            ? hasEntered
              ? "translate-y-0 opacity-100"
              : "translate-y-4 opacity-0"
            : "translate-y-0 opacity-100"
        }`}
        style={{ transitionDelay: isMenuOpen ? `${(index - 1) * 100}ms` : "0ms" }}
      >
        <span>{label}</span>
        <span className="mt-1 text-base font-medium tracking-normal text-white/35">
          {String(index).padStart(2, "0")}
        </span>
      </span>
    </SheetClose>
  );
}
