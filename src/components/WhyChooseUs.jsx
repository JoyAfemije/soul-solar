import { Award, PackageCheck, Warehouse, Home, MapPinned } from "lucide-react";
import { Reveal } from "./SafeImage";
import { whyChoose } from "../data/siteData";

const icons = { Award, PackageCheck, Warehouse, Home, MapPinned };

export default function WhyChooseUs() {
  return (
    <section id="why" className="why section-light">
      <div className="container why-grid">
        <div className="why-head">
          <Reveal>
            <p className="eyebrow">WHY SOUL SOLAR</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="display-heading">
              {whyChoose.headline[0]} <em>{whyChoose.headline[1]}</em>
            </h2>
          </Reveal>
        </div>

        <ul className="why-list">
          {whyChoose.items.map((item, i) => {
            const Icon = icons[item.icon];
            return (
              <Reveal key={item.title} delay={i * 0.06} className="why-item">
                <span className="why-icon"><Icon size={20} aria-hidden="true" /></span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
