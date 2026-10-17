import { useState } from "react";
import { MotionConfig } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import About from "./components/About";
import Services from "./components/Services";
import Solutions from "./components/Solutions";
import Workshop from "./components/Workshop";
import Process from "./components/Process";
import WhyChooseUs from "./components/WhyChooseUs";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { scrollToId } from "./utils";
import "./App.css";

export default function App() {
  const [prefillService, setPrefillService] = useState("");

  const chooseSolution = (title) => {
    setPrefillService(`${title} solution`);
    scrollToId("contact");
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="site">
        <Navbar />
        <main>
          <Hero />
          <Intro />
          <About />
          <Services />
          <Solutions onSelect={chooseSolution} />
          <Workshop />
          <Process />
          <WhyChooseUs />
          <FAQ />
          <Contact prefillService={prefillService} />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
