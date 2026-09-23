import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

type FillButtonProps = ComponentPropsWithoutRef<"a"> & {
  variant?: "solid" | "outline";
};

export function FillButton({ className, children, variant = "outline", ...props }: FillButtonProps) {
  return (
    <a
      className={cn(
        "relative isolate inline-flex h-12 items-center justify-center gap-2 overflow-hidden rounded-full border border-(--fill-button-base) px-6 text-base transition-colors duration-200 before:absolute before:inset-0 before:-z-10 before:origin-right before:scale-x-0 before:bg-(--fill-button-base) before:transition-transform before:duration-500 before:ease-out before:content-[''] hover:cursor-pointer hover:before:origin-left hover:before:scale-x-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--fill-button-base)",
        variant === "solid"
          ? "bg-(--fill-button-base) text-(--fill-button-contrast) before:bg-(--fill-button-contrast) hover:text-(--fill-button-base)"
          : "bg-transparent text-(--fill-button-base) hover:text-(--fill-button-contrast)",
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}
