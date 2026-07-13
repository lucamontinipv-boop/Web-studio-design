import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
};

/**
 * Static wrapper kept for API compatibility.
 * Content is visible in the initial HTML, so above-the-fold text never waits
 * for hydration or IntersectionObserver before it can paint.
 */
export default function Reveal({ children, className = "" }: RevealProps) {
  return <div className={className}>{children}</div>;
}
