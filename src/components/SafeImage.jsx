import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Photo component with graceful fallback.
 * If the external image fails to load, a styled placeholder keeps the layout intact.
 */
export default function SafeImage({ src, alt, className = "", loading = "lazy", focal = "50% 50%" }) {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);

  if (failed) {
    return (
      <div className={`img-fallback ${className}`} role="img" aria-label={alt}>
        <span className="img-fallback-mark">☀</span>
        <span className="img-fallback-label">{alt}</span>
      </div>
    );
  }

  return (
    <img
      className={`photo ${loaded ? "is-loaded" : ""} ${className}`}
      src={src}
      alt={alt}
      loading={loading}
      decoding="async"
      style={{ objectPosition: focal }}
      onLoad={() => setLoaded(true)}
      onError={() => setFailed(true)}
    />
  );
}

/** Scroll-reveal wrapper; respects prefers-reduced-motion via framer-motion config. */
export function Reveal({ children, delay = 0, y = 34, className = "", once = true }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
