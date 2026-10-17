import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SafeImage from "./SafeImage";
import { hero } from "../data/siteData";
import { scrollToId } from "../utils";

const EASE = [0.22, 1, 0.36, 1];

export default function Hero() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const imgY = useTransform(scrollY, [0, 700], [0, reduce ? 0 : 120]);
  const imgScale = useTransform(scrollY, [0, 700], [1.06, reduce ? 1.06 : 1.16]);

  return (
    <section id="home" className="hero">
      <div className="hero-media">
        <motion.div className="hero-media-inner" style={reduce ? undefined : { y: imgY, scale: imgScale }}>
          <SafeImage
            src={hero.image.src}
            alt={hero.image.alt}
            loading="eager"
            focal="50% 40%"
            className="hero-photo"
          />
        </motion.div>
        <div className="hero-scrim" aria-hidden="true" />
      </div>

      <div className="container hero-content">
        <motion.p className="hero-location" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9, duration: 0.6 }}>
          <span className="location-dot" aria-hidden="true" />
          {hero.location}
        </motion.p>

        <h1 className="hero-headline">
          <span className="hero-line">
            <motion.span
              className="hero-word"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.15, duration: 0.9, ease: EASE }}
            >
              {hero.headline[0]}
            </motion.span>
          </span>
          <span className="hero-line">
            <motion.span
              className="hero-word hero-word-amber"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.3, duration: 0.9, ease: EASE }}
            >
              {hero.headline[1]}
            </motion.span>
          </span>
        </h1>

        <motion.p
          className="hero-copy"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.8, ease: EASE }}
        >
          {hero.copy}
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8, ease: EASE }}
        >
          <button className="btn btn-amber" onClick={() => scrollToId("solutions")}>
            {hero.primaryCta} <ArrowUpRight size={18} aria-hidden="true" />
          </button>
          <button className="btn btn-ghost" onClick={() => scrollToId("services")}>
            {hero.secondaryCta}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
