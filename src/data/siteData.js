// Central data file for Soul Solar Energy & Innovation.
// Edit business content, service info and images here — components read from this file.

const pexels = (id, w = 1280) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export const business = {
  name: "Soul Solar Energy & Innovation",
  shortName: "Soul Solar",
  location: "Ibadan, Oyo State, Nigeria",
  serviceArea: "Serving customers across Nigeria",
  phone: "09014109822",
  phoneHref: "tel:09014109822",
  whatsappDisplay: "08109139733",
  whatsappNumber: "2348109139733", // Nigerian international format
  whatsappHref: "https://wa.me/2348109139733",
};

export const navLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Workshop", id: "workshop" },
  { label: "How It Works", id: "process" },
  { label: "FAQ", id: "faq" },
  { label: "Contact", id: "contact" },
];

export const hero = {
  headline: ["POWER", "YOUR WORLD."],
  copy: "Reliable solar energy and security solutions for homes, businesses and properties across Nigeria.",
  primaryCta: "Find Your Solar Solution",
  secondaryCta: "Explore Our Services",
  location: "Based in Ibadan · Serving Nigeria",
  image: {
    src: pexels(8783541, 1600),
    alt: "Aerial photograph of a large rooftop solar panel array",
  },
};

export const intro = {
  headline: ["ENERGY SHOULD", "WORK FOR YOU."],
  paragraphs: [
    "Soul Solar Energy & Innovation supplies, installs and maintains solar energy and security solutions for residential and commercial customers across Nigeria.",
    "From solar panels, batteries and inverters to complete installations, CCTV and maintenance, we help homes and businesses take control of their power.",
  ],
  highlights: [
    { title: "Solar Energy Solutions", icon: "Sun" },
    { title: "Professional Installation", icon: "Wrench" },
    { title: "Service Across Nigeria", icon: "MapPin" },
  ],
  image: {
    src: pexels(38021376, 1400),
    alt: "Solar panels installed on the roofs of residential homes",
  },
};

export const about = {
  headline: ["WE DON'T JUST", "SELL POWER."],
  paragraphs: [
    "Soul Solar Energy & Innovation is a solar energy and security solutions business based in Ibadan, Oyo State. We supply quality equipment, carry out professional installations and provide maintenance for homes, offices, shops and commercial properties.",
    "Our work is grounded in professional solar training and hands-on installation experience, supported by a physical workshop where equipment and systems are prepared and examined.",
  ],
  points: [
    "Professional solar training and certification",
    "Equipment sales paired with installation services",
    "Home services and commercial projects",
    "Nationwide service coverage from Ibadan",
  ],
  image: {
    src: pexels(35237908, 1400),
    alt: "Worker installing solar panels on a residential roof",
  },
};

export const services = [
  {
    num: "01",
    title: "Solar Panel Sales",
    short: "Quality solar panels for dependable renewable energy.",
    detail: "Panels supplied for new systems and system upgrades, matched to your energy needs.",
    image: { src: pexels(13223714, 1000), alt: "Solar panels on a rooftop under a clear blue sky" },
    span: "lg",
  },
  {
    num: "02",
    title: "Solar Installation",
    short: "Professional installation for homes and businesses.",
    detail: "Complete solar system installation carried out with care and precision.",
    image: { src: pexels(9875422, 1000), alt: "Technicians installing solar panels on a rooftop" },
    span: "lg",
  },
  {
    num: "03",
    title: "Solar Inverters",
    short: "Reliable inverters for everyday energy needs.",
    detail: "Inverter supply and installation for stable, usable power from your solar system.",
    image: { src: pexels(38171183, 1000), alt: "Close-up of a solar inverter unit" },
    span: "sm",
  },
  {
    num: "04",
    title: "Solar Batteries",
    short: "Storage for essential appliances when sunlight is unavailable.",
    detail: "Batteries supplied and installed so your critical loads keep running day and night.",
    image: { src: pexels(37929911, 1000), alt: "Home solar battery and inverter system mounted on a wall" },
    span: "sm",
  },
  {
    num: "05",
    title: "CCTV Installation",
    short: "Professional camera security for your property.",
    detail: "CCTV systems installed for homes, offices, shops and commercial spaces.",
    image: { src: pexels(27658186, 1000), alt: "Security cameras mounted on a pole outdoors" },
    span: "sm",
  },
  {
    num: "06",
    title: "Solar Streetlights",
    short: "Solar lighting for streets, compounds and estates.",
    detail: "Stand-alone solar street lighting for outdoor spaces, estates and roads.",
    image: { src: pexels(32915849, 1000), alt: "Solar street light against green foliage" },
    span: "sm",
  },
  {
    num: "07",
    title: "Solar Maintenance",
    short: "Inspection, servicing and troubleshooting.",
    detail: "Keep your existing system healthy with inspection, servicing and repairs.",
    image: { src: pexels(33694016, 1000), alt: "Technician repairing an electronic circuit board" },
    span: "sm",
  },
  {
    num: "08",
    title: "Solar Marketing",
    short: "Solar product and energy-solution marketing.",
    detail: "Marketing support connecting solar products and solutions with customers.",
    image: { src: pexels(33537433, 1000), alt: "Wide field of solar panels generating clean energy" },
    span: "feature",
  },
];

export const solutions = [
  {
    num: "01",
    title: "Home",
    copy: "Solar power designed around your everyday household needs.",
    image: { src: pexels(12243093, 900), alt: "Solar panels installed on a suburban family home" },
  },
  {
    num: "02",
    title: "Business",
    copy: "Keep your business running with dependable energy solutions.",
    image: { src: pexels(22032343, 900), alt: "Commercial building fitted with solar panels" },
  },
  {
    num: "03",
    title: "Office",
    copy: "Reliable power for productive working environments.",
    image: { src: pexels(17762230, 900), alt: "Close-up of solar panels mounted on a tiled roof" },
  },
  {
    num: "04",
    title: "Security",
    copy: "CCTV and solar-powered security solutions for your property.",
    image: { src: pexels(18124167, 900), alt: "CCTV camera installed on the eaves of a building" },
  },
];

export const workshop = {
  headline: ["WHERE THE", "WORK HAPPENS."],
  paragraphs: [
    "Soul Solar runs a physical workshop in Ibadan, the practical heart of the business, where solar equipment, energy components and installation work come together.",
    "Systems are prepared, equipment is examined and real installation work happens here, so customers get closer to the technology powering their homes and businesses.",
  ],
  cta: "Contact the Workshop",
  image: {
    src: pexels(14875937, 1600),
    alt: "Nigerian solar engineer in a hardhat and safety vest",
  },
};

export const processSteps = [
  {
    num: "01",
    title: "Tell Us What You Need",
    copy: "Contact Soul Solar by phone or WhatsApp and explain your energy or security needs.",
  },
  {
    num: "02",
    title: "Assessment",
    copy: "We understand your requirements and identify a suitable solution for your property.",
  },
  {
    num: "03",
    title: "Installation or Supply",
    copy: "The appropriate equipment is supplied, and installation is arranged where required.",
  },
  {
    num: "04",
    title: "Support and Maintenance",
    copy: "You can always contact Soul Solar for maintenance and related services.",
  },
];

export const whyChoose = {
  headline: ["PRACTICAL SOLUTIONS.", "PROFESSIONAL SERVICE."],
  items: [
    {
      icon: "Award",
      title: "Solar Training & Certification",
      copy: "Professional solar training and certification behind the work we deliver.",
    },
    {
      icon: "PackageCheck",
      title: "Sales + Installation",
      copy: "Equipment supply and installation services from the same team.",
    },
    {
      icon: "Warehouse",
      title: "Physical Workshop",
      copy: "A real workshop in Ibadan supporting practical installation and equipment work.",
    },
    {
      icon: "Home",
      title: "Home & Business Services",
      copy: "Residential installations and commercial projects, including home visits.",
    },
    {
      icon: "MapPinned",
      title: "Nationwide Coverage",
      copy: "Based in Ibadan, serving customers across Nigeria.",
    },
  ],
};

export const faqs = [
  {
    q: "Does Soul Solar install solar systems for homes?",
    a: "Yes. We install solar systems for homes as well as offices, shops and commercial properties. Contact us with your location and needs, and we will arrange an assessment.",
  },
  {
    q: "Do you sell solar panels, batteries, and inverters?",
    a: "Yes. We supply solar panels, batteries, inverters and related equipment. If you are not sure what you need, talk to us first and we will help identify a suitable solution.",
  },
  {
    q: "Where does Soul Solar operate?",
    a: "We are based in Ibadan, Oyo State, with a physical workshop, and we serve customers across Nigeria.",
  },
  {
    q: "Can you maintain an existing solar installation?",
    a: "Yes. We offer maintenance, inspection and troubleshooting for existing solar systems. Reach out with a description of the issue and we will advise on the next step.",
  },
  {
    q: "Do you install CCTV?",
    a: "Yes. CCTV installation is one of our security solutions for homes, offices and commercial properties.",
  },
  {
    q: "Can I contact you before deciding what equipment to buy?",
    a: "Absolutely, we encourage it. Call or message us on WhatsApp, describe what you need power for, and we will help you work out the right solution before any purchase.",
  },
];

export const contact = {
  headline: ["READY FOR", "BETTER POWER?"],
  copy: "Tell us what you need. Let's find the right solution for your home or business.",
};

export const serviceOptions = services.map((s) => s.title);
