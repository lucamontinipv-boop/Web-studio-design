import type { CSSProperties, ReactNode } from "react";

type AutoScrollerProps = {
  children: ReactNode;
  ariaLabel: string;
  speed?: number;
  direction?: "left" | "right";
  resumeDelay?: number;
  className?: string;
  trackClassName?: string;
};

/**
 * CSS-only marquee. It remains horizontally scrollable and pauses on hover,
 * focus and active interaction without shipping a React client component.
 */
export default function AutoScroller({
  children,
  ariaLabel,
  speed = 30,
  direction = "left",
  className = "",
  trackClassName = "",
}: AutoScrollerProps) {
  const duration = Math.max(24, Math.min(62, Math.round(1400 / Math.max(speed, 1))));

  return (
    <div
      className={`auto-scroll-strip relative no-scrollbar ${className}`}
      aria-label={ariaLabel}
      tabIndex={0}
      data-direction={direction}
      style={{ "--marquee-duration": `${duration}s` } as CSSProperties}
    >
      <div className="auto-scroll-track">
        <div className={`auto-scroll-cycle ${trackClassName}`}>{children}</div>
        <div className={`auto-scroll-cycle ${trackClassName}`} aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
