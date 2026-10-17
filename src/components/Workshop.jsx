import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SafeImage, { Reveal } from "./SafeImage";
import { workshop } from "../data/siteData";
import { scrollToId } from "../utils";

/** Immersive workshop section with a subtle scroll-driven image reveal. */
export default function Workshop() {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], reduce ? [1, 1, 1] : [1.14, 1, 1.14]);
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : ["-8%", "8%"]);

  return (
    <section id="workshop" className="workshop" ref={ref}>
      <div className="workshop-media">
        <motion.div className="workshop-media-inner" style={{ y, scale }}>
          <SafeImage src={workshop.image.src} alt={workshop.image.alt} loading="lazy" focal="50% 45%" />
        </motion.div>
        <div className="workshop-scrim" aria-hidden="true" />
      </div>

      <div className="container workshop-content">
        <Reveal>
          <p className="eyebrow eyebrow-light">OUR WORKSHOP · IBADAN</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="display-heading display-heading-light">
            {workshop.headline[0]} <em>{workshop.headline[1]}</em>
          </h2>
        </Reveal>
        <div className="workshop-copy">
          {workshop.paragraphs.map((p, i) => (
            <Reveal key={i} delay={0.16 + i * 0.08}>
              <p className="body-copy body-copy-light">{p}</p>
            </Reveal>
          ))}
          <Reveal delay={0.34}>
            <button className="btn btn-amber" onClick={() => scrollToId("contact")}>
              {workshop.cta} <ArrowUpRight size={18} aria-hidden="true" />
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
