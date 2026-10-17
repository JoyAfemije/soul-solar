import { Sun, Wrench, MapPin, ArrowRight } from "lucide-react";
import SafeImage, { Reveal } from "./SafeImage";
import { intro } from "../data/siteData";
import { scrollToId } from "../utils";

const icons = { Sun, Wrench, MapPin };

export default function Intro() {
  return (
    <section id="intro" className="intro section-light">
      <div className="container intro-grid">
        <div className="intro-text">
          <Reveal>
            <p className="eyebrow">SOUL SOLAR</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="display-heading">
              {intro.headline[0]} <em>{intro.headline[1]}</em>
            </h2>
          </Reveal>
          {intro.paragraphs.map((p, i) => (
            <Reveal key={i} delay={0.15 + i * 0.06}>
              <p className="body-copy">{p}</p>
            </Reveal>
          ))}
          <Reveal delay={0.28}>
            <button className="text-link" onClick={() => scrollToId("about")}>
              Discover Soul Solar <ArrowRight size={16} aria-hidden="true" />
            </button>
          </Reveal>

          <Reveal delay={0.34}>
            <ul className="intro-highlights">
              {intro.highlights.map((h) => {
                const Icon = icons[h.icon];
                return (
                  <li key={h.title}>
                    <Icon size={18} aria-hidden="true" />
                    <span>{h.title}</span>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>

        <Reveal className="intro-media" delay={0.1}>
          <SafeImage src={intro.image.src} alt={intro.image.alt} focal="50% 45%" />
        </Reveal>
      </div>
    </section>
  );
}
