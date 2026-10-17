import { useEffect, useState } from "react";
import { Phone, MessageCircle, ArrowUpRight, CheckCircle2, AlertCircle, MapPin } from "lucide-react";
import { Reveal } from "./SafeImage";
import { business, contact, serviceOptions, solutions } from "../data/siteData";
import { whatsappLink } from "../utils";

const EMPTY_FORM = { name: "", phone: "", service: "", message: "" };

export default function Contact({ prefillService }) {
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  // Prefill "Service of interest" when the visitor picks a solution type.
  useEffect(() => {
    if (prefillService) {
      setForm((f) => ({ ...f, service: prefillService }));
      setSent(false);
    }
  }, [prefillService]);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    const digits = form.phone.replace(/[^0-9]/g, "");
    if (!digits) e.phone = "Please enter your phone number.";
    else if (digits.length < 7 || digits.length > 15) e.phone = "Please enter a valid phone number.";
    if (!form.service) e.service = "Please choose what you need.";
    if (!form.message.trim()) e.message = "Please describe what you need briefly.";
    return e;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0 || !form.phone) {
      setSent(false);
      return;
    }
    const text =
      `Hello Soul Solar, my name is ${form.name.trim()} (${form.phone.trim()}).\n` +
      `I am interested in: ${form.service}.\n` +
      `${form.message.trim()}`;
    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  const set = (key) => (ev) => {
    setForm((f) => ({ ...f, [key]: ev.target.value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  return (
    <section id="contact" className="contact section-deep">
      <div className="container contact-grid">
        <div className="contact-intro">
          <Reveal>
            <p className="eyebrow eyebrow-light">CONTACT SOUL SOLAR</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="display-heading display-heading-light">
              {contact.headline[0]} <em>{contact.headline[1]}</em>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="body-copy body-copy-light">{contact.copy}</p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="contact-cards">
              <a className="contact-card" href={business.phoneHref}>
                <span className="contact-card-icon"><Phone size={20} aria-hidden="true" /></span>
                <span className="contact-card-label">CALL NOW</span>
                <span className="contact-card-value">{business.phone}</span>
              </a>
              <a className="contact-card contact-card-whatsapp" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                <span className="contact-card-icon"><MessageCircle size={20} aria-hidden="true" /></span>
                <span className="contact-card-label">CHAT ON WHATSAPP</span>
                <span className="contact-card-value">{business.whatsappDisplay}</span>
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <p className="contact-meta">
              <MapPin size={15} aria-hidden="true" />
              {business.location} · {business.serviceArea}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.12} className="contact-form-wrap">
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <h3 className="form-title">Send an enquiry</h3>

            <div className="field">
              <label htmlFor="cf-name">Name</label>
              <input
                id="cf-name"
                type="text"
                autoComplete="name"
                placeholder="Your name"
                value={form.name}
                onChange={set("name")}
                aria-invalid={!!errors.name}
              />
              {errors.name && <p className="field-error" role="alert">{errors.name}</p>}
            </div>

            <div className="field">
              <label htmlFor="cf-phone">Phone number</label>
              <input
                id="cf-phone"
                type="tel"
                autoComplete="tel"
                placeholder="e.g. 08012345678"
                value={form.phone}
                onChange={set("phone")}
                aria-invalid={!!errors.phone}
              />
              {errors.phone && <p className="field-error" role="alert">{errors.phone}</p>}
            </div>

            <div className="field">
              <label htmlFor="cf-service">Service of interest</label>
              <select id="cf-service" value={form.service} onChange={set("service")} aria-invalid={!!errors.service}>
                <option value="">Select a service…</option>
                {serviceOptions.map((s) => <option key={s} value={s}>{s}</option>)}
                {solutions.map((s) => <option key={s.title} value={`${s.title} solution`}>{s.title} solution</option>)}
              </select>
              {errors.service && <p className="field-error" role="alert">{errors.service}</p>}
            </div>

            <div className="field">
              <label htmlFor="cf-message">What do you need?</label>
              <textarea
                id="cf-message"
                rows={4}
                placeholder="Briefly describe your home, business or security need…"
                value={form.message}
                onChange={set("message")}
                aria-invalid={!!errors.message}
              />
              {errors.message && <p className="field-error" role="alert">{errors.message}</p>}
            </div>

            <button type="submit" className="btn btn-amber btn-block">
              Send via WhatsApp <ArrowUpRight size={18} aria-hidden="true" />
            </button>

            {sent ? (
              <p className="form-status form-status-ok" role="status">
                <CheckCircle2 size={16} aria-hidden="true" />
                Your enquiry opened in WhatsApp. Press send there and Soul Solar will reply.
              </p>
            ) : (
              <p className="form-hint">
                There is no server behind this form yet. Pressing the button opens WhatsApp with your
                details filled in, ready for you to send.
              </p>
            )}
            {Object.keys(errors).length > 0 && (
              <p className="form-status form-status-error" role="alert">
                <AlertCircle size={16} aria-hidden="true" />
                Please fix the highlighted fields above.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
