import { business } from "./data/siteData";

/** Smooth scroll to a section id without locking the page. */
export function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

/** Build a WhatsApp enquiry URL with a prefilled message ( Nigerian international format ). */
export function whatsappLink(message) {
  const base = `https://wa.me/${business.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
