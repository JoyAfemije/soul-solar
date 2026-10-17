import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Reveal } from "./SafeImage";
import { processSteps } from "../data/siteData";

/** Four-step process with a scroll-drawn connector line. */
export default function Process() {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 55%"] });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="process" className="process">
      <div className="container">
        <Reveal>
          <p className="eyebrow">HOW IT WORKS</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="display-heading">
            FROM POWER PROBLEM <em>TO SOLUTION.</em>
          </h2>
        </Reveal>

        <div className="process-track" ref={ref}>
          {!reduce && (
            <motion.div
              className="process-line"
              aria-hidden="true"
              style={{ scaleY: lineScale }}
            />
          )}
          {processSteps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.08} className="process-step">
              <span className="step-node" aria-hidden="true" />
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
