import SafeImage, { Reveal } from "./SafeImage";
import { about } from "../data/siteData";

export default function About() {
  return (
    <section id="about" className="about section-dark">
      <div className="container about-grid">
        <Reveal className="about-media">
          <div className="about-photo-frame">
            <SafeImage src={about.image.src} alt={about.image.alt} focal="45% 40%" />
          </div>
        </Reveal>

        <div className="about-text">
          <Reveal>
            <p className="eyebrow">ABOUT SOUL SOLAR</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="display-heading">
              {about.headline[0]} <em>{about.headline[1]}</em>
            </h2>
          </Reveal>
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={0.16 + i * 0.06}>
              <p className="body-copy body-copy-light">{p}</p>
            </Reveal>
          ))}
          <Reveal delay={0.3}>
            <ul className="about-points">
              {about.points.map((point) => (
                <li key={point}>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
