import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import { Reveal } from "./SafeImage";
import { faqs } from "../data/siteData";

/** Accessible accordion — works with mouse, keyboard (native button) and touch. */
export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);
  const reduce = useReducedMotion();

  return (
    <section id="faq" className="faq section-dark">
      <div className="container faq-grid">
        <div className="faq-head">
          <Reveal>
            <p className="eyebrow eyebrow-light">FAQ</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="display-heading display-heading-light">
              QUESTIONS? <em>WE HAVE ANSWERS.</em>
            </h2>
          </Reveal>
        </div>

        <div className="faq-list">
          {faqs.map((faq, i) => {
            const isOpen = openIdx === i;
            return (
              <Reveal key={faq.q} delay={i * 0.05} className="faq-item">
                <h3>
                  <button
                    className="faq-question"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-button-${i}`}
                    onClick={() => setOpenIdx(isOpen ? null : i)}
                  >
                    <span>{faq.q}</span>
                    <motion.span
                      className="faq-icon"
                      animate={{ rotate: isOpen && !reduce ? 45 : 0 }}
                      transition={{ duration: 0.25 }}
                      aria-hidden="true"
                    >
                      <Plus size={20} />
                    </motion.span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${i}`}
                      role="region"
                      aria-labelledby={`faq-button-${i}`}
                      className="faq-panel"
                      initial={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p>{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
