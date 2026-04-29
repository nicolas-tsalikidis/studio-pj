import { useEffect, useRef } from "react";
// Raw SVG markup (loaded as a string at build-time)
import logoMarkup from "@/assets/studio-pj-logo.svg?raw";

interface StudioLogoProps {
  className?: string;
  /** Delay (ms) before the staggered fill animation starts. */
  delay?: number;
  /** Fill color variant — "dark" (default, ink) or "light" (white). */
  variant?: "dark" | "light";
}

export function StudioLogo({ className, delay = 200, variant = "dark" }: StudioLogoProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = window.setTimeout(() => {
      const svg = wrapperRef.current?.querySelector("svg");
      svg?.classList.add("active");
    }, delay);
    return () => window.clearTimeout(t);
  }, [delay]);

  return (
    <div
      ref={wrapperRef}
      className={`studio-logo ${variant === "light" ? "is-light" : ""} ${className ?? ""}`}
      // SVG is a static, trusted, build-time asset — safe to inject.
      dangerouslySetInnerHTML={{ __html: logoMarkup }}
      aria-label="Studio PJ"
      role="img"
    />
  );
}
