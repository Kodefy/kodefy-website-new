import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

type FillButtonProps = ComponentPropsWithoutRef<"a"> & {
  variant?: "solid" | "outline";
};

export function FillButton({ className, children, variant = "outline", ...props }: FillButtonProps) {
  return (
    <a
      className={cn(
        "relative isolate inline-flex h-12 items-center justify-center gap-2 overflow-hidden rounded-full border px-6 text-base transition-colors duration-200 before:absolute before:inset-0 before:-z-10 before:origin-right before:scale-x-0 before:transition-transform before:duration-500 before:ease-out before:content-[''] hover:before:origin-left hover:before:scale-x-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white",
        variant === "solid"
          ? "border-white bg-white text-black before:bg-black hover:text-white"
          : "border-white/30 bg-transparent text-white before:bg-white hover:text-black",
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}
