import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navLinks } from "../data/siteData";
import { scrollToId } from "../utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <header className={`navbar ${scrolled || open ? "is-solid" : ""}`}>
      <div className="container nav-row">
        <button className="logo" onClick={() => go("home")} aria-label="Soul Solar, go to top">
          <span className="logo-mark" aria-hidden="true">
            <span className="logo-rays" />
          </span>
          <span className="logo-type">
            <strong>SOUL</strong>
            <small>SOLAR ENERGY &amp; INNOVATION</small>
          </span>
        </button>

        <nav className="nav-links" aria-label="Primary">
          {navLinks.map((l) => (
            <button key={l.id} className="nav-link" onClick={() => go(l.id)}>
              {l.label}
            </button>
          ))}
        </nav>

        <button className="nav-cta" onClick={() => go("contact")}>
          Talk to an Expert <ArrowUpRight size={16} aria-hidden="true" />
        </button>

        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            className="mobile-menu"
            aria-label="Mobile"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            {navLinks.map((l) => (
              <button key={l.id} className="mobile-link" onClick={() => go(l.id)}>
                {l.label}
                <ArrowUpRight size={18} aria-hidden="true" />
              </button>
            ))}
            <button className="mobile-link mobile-cta" onClick={() => go("contact")}>
              Talk to an Expert
              <ArrowUpRight size={18} aria-hidden="true" />
            </button>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
