import { ArrowUpRight } from "lucide-react";
import SafeImage, { Reveal } from "./SafeImage";
import { services } from "../data/siteData";
import { whatsappLink } from "../utils";

export default function Services() {
  return (
    <section id="services" className="services section-light">
      <div className="container">
        <div className="services-header">
          <div>
            <Reveal>
              <p className="eyebrow">WHAT WE DO</p>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="display-heading">
                POWER. PROTECTION. <em>PROGRESS.</em>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.14}>
            <p className="body-copy services-sub">
              Eight ways Soul Solar keeps your home or business powered and
              protected, from equipment supply to installation and care.
            </p>
          </Reveal>
        </div>

        <div className="services-grid">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 4) * 0.07} className={`service-cell span-${s.span}`}>
              <article className="service-card">
                <div className="service-media">
                  <SafeImage src={s.image.src} alt={s.image.alt} focal="50% 45%" />
                  <div className="service-shade" aria-hidden="true" />
                </div>
                <div className="service-body">
                  <h3>{s.title}</h3>
                  <p className="service-short">{s.short}</p>
                  <p className="service-detail">{s.detail}</p>
                  <a
                    className="service-action"
                    href={whatsappLink(`Hello Soul Solar, I am interested in ${s.title.toLowerCase()}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Enquire <ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
