import type { ReactNode } from "react";

interface MarqueeProps {
  text: ReactNode;
  reverse?: boolean;
  className?: string;
}

export function Marquee({ text, reverse, className }: MarqueeProps) {
  // Repeat the phrase so the strip looks dense
  const items = Array.from({ length: 12 });

  return (
    <div
      className={`overflow-hidden border-y border-border/60 py-3 ${className ?? ""}`}
    >
      <div className={reverse ? "marquee-track-reverse" : "marquee-track"}>
        {/* render twice for seamless loop */}
        {[0, 1].map((set) => (
          <div key={set} className="flex shrink-0">
            {items.map((_, i) => (
              <span
                key={`${set}-${i}`}
                className="font-serif text-foreground/80 text-xl md:text-2xl italic px-6 flex items-center whitespace-nowrap"
              >
                {text}
                <span className="mx-6 text-foreground/40">•</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
