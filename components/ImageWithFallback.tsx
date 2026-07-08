"use client";

import { useState } from "react";

type ImageWithFallbackProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
  imgClassName?: string;
};

export default function ImageWithFallback({
  src,
  alt,
  width,
  height,
  priority = false,
  className = "",
  imgClassName = "",
}: ImageWithFallbackProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-ink-soft ${className}`}>
      {!failed && (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
          onError={() => setFailed(true)}
          className={`absolute inset-0 h-full w-full object-cover ${imgClassName}`}
        />
      )}
      {failed && (
        <div className="absolute inset-0 flex items-center justify-center">
          <i className="ti ti-photo text-3xl text-white/15" aria-hidden="true" />
        </div>
      )}
    </div>
  );
}
