import { ArrowUpRight } from "lucide-react";
import SafeImage, { Reveal } from "./SafeImage";
import { solutions } from "../data/siteData";

/**
 * "What do you need power for?" — choosing a card scrolls to Contact
 * and pre-selects the enquiry type there.
 */
export default function Solutions({ onSelect }) {
  return (
    <section id="solutions" className="solutions section-amber">
      <div className="container">
        <Reveal>
          <p className="eyebrow eyebrow-dark">FIND YOUR SOLUTION</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="display-heading display-heading-dark">
            WHAT DO YOU <em>NEED POWER FOR?</em>
          </h2>
        </Reveal>

        <div className="solutions-grid">
          {solutions.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <button
                className="solution-card"
                onClick={() => onSelect && onSelect(s.title)}
                aria-label={`Plan power for ${s.title}, go to contact`}
              >
                <div className="solution-media">
                  <SafeImage src={s.image.src} alt={s.image.alt} focal="50% 50%" />
                  <div className="solution-shade" aria-hidden="true" />
                </div>
                <span className="solution-title">{s.title}</span>
                <span className="solution-copy">{s.copy}</span>
                <span className="solution-go">
                  Start this enquiry <ArrowUpRight size={16} aria-hidden="true" />
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
