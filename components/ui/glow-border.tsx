"use client";

import { cn } from "@/lib/utils";
import type { CSSProperties } from "react";

interface ShineBorderProps {
  borderWidth?: number;
  duration?: number;
  shineColor?: string | string[];
  className?: string;
  style?: CSSProperties;
}

export function ShineBorder({
  borderWidth = 1.5,
  duration = 4,
  shineColor = ["#3B82F6", "#93C5FD", "#3B82F6"],
  className,
  style,
}: ShineBorderProps) {
  const colors = Array.isArray(shineColor) ? shineColor.join(", ") : shineColor;

  return (
    <div
      style={
        {
          "--duration": `${duration}s`,
          padding: `${borderWidth}px`,
          background: `conic-gradient(from var(--border-angle), transparent 0%, ${colors}, transparent 50%)`,
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          animation: `border-spin var(--duration) linear infinite`,
          ...style,
        } as CSSProperties
      }
      className={cn(
        "pointer-events-none absolute inset-0 size-full rounded-[inherit]",
        className
      )}
    />
  );
}
