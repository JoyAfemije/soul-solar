import { Phone, MessageCircle, MapPin } from "lucide-react";
import { business, navLinks, services } from "../data/siteData";
import { scrollToId, whatsappLink } from "../utils";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <button className="logo" onClick={() => scrollToId("home")} aria-label="Soul Solar, go to top">
              <span className="logo-mark" aria-hidden="true">
                <span className="logo-rays" />
              </span>
              <span className="logo-type">
                <strong>SOUL</strong>
                <small>SOLAR ENERGY &amp; INNOVATION</small>
              </span>
            </button>
            <p className="footer-desc">
              Solar panels, batteries and inverters, with professional installation, CCTV,
              maintenance and a real workshop in Ibadan.
            </p>
          </div>

          <nav className="footer-col" aria-label="Footer navigation">
            <small>NAVIGATE</small>
            {navLinks.map((l) => (
              <button key={l.id} onClick={() => scrollToId(l.id)}>{l.label}</button>
            ))}
          </nav>

          <div className="footer-col">
            <small>SERVICES</small>
            {services.map((s) => (
              <button key={s.num} onClick={() => scrollToId("services")}>{s.title}</button>
            ))}
          </div>

          <div className="footer-col">
            <small>CONTACT</small>
            <a href={business.phoneHref}><Phone size={14} aria-hidden="true" /> {business.phone}</a>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={14} aria-hidden="true" /> WhatsApp {business.whatsappDisplay}
            </a>
            <span className="footer-location">
              <MapPin size={14} aria-hidden="true" /> Ibadan, Oyo State, Nigeria
            </span>
            <span className="footer-serve">Serving customers across Nigeria.</span>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {business.name}.</span>
          <span className="footer-tagline">POWER · PROTECTION · PROGRESS</span>
        </div>
      </div>
    </footer>
  );
}
