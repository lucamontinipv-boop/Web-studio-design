type ImageWithFallbackProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
  imgClassName?: string;
};

/**
 * Static image wrapper. Removing React state here avoids hydrating every
 * project image solely to support a rare error fallback.
 */
export default function ImageWithFallback({
  src,
  alt,
  width,
  height,
  priority = false,
  className = "",
  imgClassName = "",
}: ImageWithFallbackProps) {
  return (
    <div className={`relative overflow-hidden bg-ink-soft ${className}`}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        className={`absolute inset-0 h-full w-full object-cover ${imgClassName}`}
      />
    </div>
  );
}
