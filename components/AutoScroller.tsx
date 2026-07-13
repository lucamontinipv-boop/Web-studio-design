"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

type AutoScrollerProps = {
  children: ReactNode;
  ariaLabel: string;
  speed?: number;
  direction?: "left" | "right";
  resumeDelay?: number;
  className?: string;
  trackClassName?: string;
};

export default function AutoScroller({
  children,
  ariaLabel,
  speed = 30,
  direction = "left",
  resumeDelay = 4800,
  className = "",
  trackClassName = "",
}: AutoScrollerProps) {
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [manual, setManual] = useState(false);

  const duration = Math.max(24, Math.min(62, Math.round(1400 / Math.max(speed, 1))));

  useEffect(() => {
    return () => {
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    };
  }, []);

  const pause = () => {
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    setManual(true);
  };

  const resume = (delay = resumeDelay) => {
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => setManual(false), delay);
  };

  return (
    <div
      className={`auto-scroll-strip relative no-scrollbar ${manual ? "is-manual" : ""} ${className}`}
      aria-label={ariaLabel}
      tabIndex={0}
      data-direction={direction}
      style={{ "--marquee-duration": `${duration}s` } as CSSProperties}
      onMouseEnter={pause}
      onMouseLeave={() => resume(700)}
      onFocus={pause}
      onBlur={() => resume(900)}
      onPointerDown={pause}
      onPointerUp={() => resume()}
      onPointerCancel={() => resume()}
      onTouchStart={pause}
      onTouchEnd={() => resume()}
      onScroll={() => {
        pause();
        resume();
      }}
      onWheel={(event) => {
        if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) {
          pause();
          resume();
        }
      }}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          pause();
          resume();
        }
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
