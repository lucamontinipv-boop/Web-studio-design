"use client";

import { useRef, useState, type CSSProperties, type ReactNode } from "react";

type AutoScrollerProps = {
  children: ReactNode;
  ariaLabel: string;
  speed?: number;
  className?: string;
  trackClassName?: string;
};

export default function AutoScroller({
  children,
  ariaLabel,
  speed = 30,
  className = "",
  trackClassName = "",
}: AutoScrollerProps) {
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [manual, setManual] = useState(false);

  const duration = Math.max(26, Math.min(58, Math.round(1350 / Math.max(speed, 1))));

  const pause = () => {
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    setManual(true);
  };

  const resume = (delay = 3500) => {
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => setManual(false), delay);
  };

  return (
    <div
      className={`auto-scroll-strip relative no-scrollbar ${manual ? "is-manual" : ""} ${className}`}
      aria-label={ariaLabel}
      style={{ "--marquee-duration": `${duration}s` } as CSSProperties}
      onMouseEnter={pause}
      onMouseLeave={() => resume(600)}
      onPointerDown={pause}
      onPointerUp={() => resume(3500)}
      onPointerCancel={() => resume(3500)}
      onTouchStart={pause}
      onTouchEnd={() => resume(3500)}
      onWheel={(event) => {
        if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) pause();
      }}
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
