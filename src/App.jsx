import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  UtensilsCrossed,
  Crown,
  Users,
  Coffee,
  Camera as Instagram,
  ArrowUpRight,
  Menu,
  X,
  Heart,
  PartyPopper,
  CakeSlice,
  Sparkles,
  ChevronRight,
  Star,
  Languages,
} from "lucide-react";
import logo from "./assets/rangilo-logo.png";
import hero from "./assets/hero-feast.png";
import "./App.css";

const MAP = "https://l1nk.dev/jcpl6o2",
  INSTA = "https://www.instagram.com/rangilo_rajwado/?hl=en";
const foodImages = [
  hero,
  "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=82",
  "https://images.unsplash.com/photo-1567337710282-00832b415979?auto=format&fit=crop&w=900&q=82",
  "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=82",
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1100&q=82",
];
const nav = [
  ["होम", "home"],
  ["हमारे बारे में", "about"],
  ["रॉयल बुफे", "buffet"],
  ["गैलरी", "gallery"],
  ["विजिट करें", "visit"],
];
const features = [
  [
    UtensilsCrossed,
    "50+ स्वादिष्ट व्यंजन",
    "हर स्वाद और पसंद के लिए स्वादिष्ट व्यंजनों की शानदार वैरायटी।",
  ],
  [
    Crown,
    "रॉयल अनलिमिटेड बुफे",
    "जितना मन चाहे खाइए और हर स्वाद का भरपूर आनंद लीजिए।",
  ],
  [
    Users,
    "फैमिली रेस्टोरेंट",
    "परिवार और दोस्तों के साथ यादगार समय बिताने के लिए एक शानदार जगह।",
  ],
  [
    Coffee,
    "कैफे अनुभव",
    "स्वादिष्ट स्नैक्स और रिफ्रेशिंग बेवरेज के साथ रिलैक्स कीजिए।",
  ],
];
const buffet = [
  "स्वादिष्ट स्टार्टर",
  "लज़ीज़ मेन कोर्स",
  "ताज़ी रोटियां",
  "खुशबूदार राइस डिशेज",
  "फ्रेश सलाद",
  "मीठे डेज़र्ट",
  "रिफ्रेशिंग बेवरेज",
  "और भी बहुत कुछ...",
];
const occasions = [
  [Users, "पारिवारिक भोजन"],
  [Heart, "कपल्स"],
  [PartyPopper, "छोटी-बड़ी सेलिब्रेशन"],
  [Users, "दोस्तों के साथ गेट-टुगेदर"],
  [CakeSlice, "जन्मदिन समारोह"],
  [Sparkles, "खास अवसर"],
];
const galleries = [
  ["बुफे और स्वादिष्ट खाना", 0],
  ["खास व्यंजन", 1],
  ["रेस्टोरेंट का माहौल", 4],
  ["फैमिली मोमेंट्स", 2],
  ["सेलिब्रेशन", 3],
];
const translations = {
  होम: "Home",
  "हमारे बारे में": "About Us",
  "रॉयल बुफे": "Royal Buffet",
  गैलरी: "Gallery",
  "विजिट करें": "Visit Us",
  "लोकेशन देखें": "View Location",
  "मेनू खोलें": "Open menu",
  "मेनू बंद करें": "Close menu",
  "पधारो म्हारे देस": "Welcome to Rajasthan",
  "जहाँ हर स्वाद बने": "Where Every Flavour Becomes",
  "एक शाही अनुभव": "A Royal Experience",
  "राजस्थानी मेहमाननवाज़ी और लज़ीज़ व्यंजनों के साथ आपका स्वागत है रंगीलो राजवाड़ो में।":
    "Welcome to Rangilo Rajwado, where Rajasthani hospitality meets irresistible flavours.",
  "रॉयल अनलिमिटेड बुफे": "Royal Unlimited Buffet",
  "50+ स्वादिष्ट व्यंजन": "50+ Delicious Dishes",
  "Sinchayi Colony, Vedhaynath Colony, Sirohi, Rajasthan":
    "Sinchayi Colony, Vedhaynath Colony, Sirohi, Rajasthan 307001",
  "बुफे देखें": "Explore Buffet",
  "नीचे देखें": "Discover More",
  व्यंजन: "Dishes",
  "हमारी कहानी": "Our Story",
  "एक शाही": "A Royal",
  "भोजन अनुभव": "Dining Experience",
  "रंगीलो राजवाड़ो सिर्फ एक रेस्टोरेंट नहीं, बल्कि स्वाद, परंपरा और यादगार पलों का एक खूबसूरत अनुभव है।":
    "Rangilo Rajwado is more than a restaurant—it is a beautiful celebration of flavour, tradition and unforgettable moments.",
  "यहाँ हर व्यंजन को बेहतरीन स्वाद और गुणवत्ता के साथ तैयार किया जाता है। चाहे आप परिवार के साथ भोजन करने आएं, दोस्तों के साथ समय बिताना हो या किसी खास अवसर को सेलिब्रेट करना हो — रंगीलो राजवाड़ो आपका दिल से स्वागत करता है।":
    "Every dish is prepared with exceptional taste and quality. Whether dining with family, meeting friends or celebrating a special occasion, Rangilo Rajwado welcomes you wholeheartedly.",
  "अतिथि देवो भवः": "The Guest is God",
  "— दिल से मेहमाननवाज़ी": "— Hospitality from the heart",
  "शाही स्वाद": "Royal Flavours",
  "क्यों चुनें हमें": "Why Choose Us",
  "हर पल में शाही एहसास": "A Royal Feeling in Every Moment",
  "बेहतरीन स्वाद, भरपूर वैरायटी और दिल से की गई मेहमाननवाज़ी।":
    "Exceptional flavours, abundant variety and heartfelt hospitality.",
  "हर स्वाद और पसंद के लिए स्वादिष्ट व्यंजनों की शानदार वैरायटी।":
    "A wonderful variety of dishes for every taste and preference.",
  "जितना मन चाहे खाइए और हर स्वाद का भरपूर आनंद लीजिए।":
    "Enjoy unlimited servings and savour every flavour to your heart’s content.",
  "फैमिली रेस्टोरेंट": "Family Restaurant",
  "परिवार और दोस्तों के साथ यादगार समय बिताने के लिए एक शानदार जगह।":
    "A wonderful place to create lasting memories with family and friends.",
  "कैफे अनुभव": "Café Experience",
  "स्वादिष्ट स्नैक्स और रिफ्रेशिंग बेवरेज के साथ रिलैक्स कीजिए।":
    "Relax with delicious snacks and refreshing beverages.",
  "एक बुफे, अनगिनत स्वाद": "One Buffet, Endless Flavours",
  "हमारे रॉयल अनलिमिटेड बुफे में हर प्लेट के साथ स्वाद का एक नया अनुभव आपका इंतज़ार कर रहा है।":
    "A new flavour experience awaits with every plate at our Royal Unlimited Buffet.",
  "लज़ीज़ व्यंजन": "Delicious Dishes",
  "स्वादिष्ट स्टार्टर": "Delicious Starters",
  "लज़ीज़ मेन कोर्स": "Delectable Main Course",
  "ताज़ी रोटियां": "Fresh Breads",
  "खुशबूदार राइस डिशेज": "Aromatic Rice Dishes",
  "फ्रेश सलाद": "Fresh Salads",
  "मीठे डेज़र्ट": "Sweet Desserts",
  "रिफ्रेशिंग बेवरेज": "Refreshing Beverages",
  "और भी बहुत कुछ...": "And Much More...",
  "हमारा स्वादिष्ट Menu देखें": "Explore Our Delicious Menu",
  "अपनों के संग": "With Your Loved Ones",
  "अपनों के संग, अनलिमिटेड स्वाद का आनंद":
    "Unlimited Flavours, Shared with Loved Ones",
  "50+ स्वादिष्ट व्यंजनों वाले हमारे रॉयल Unlimited Buffet का परिवार और दोस्तों के साथ भरपूर आनंद लीजिए। रंगीलो राजवाड़ो में हर विजिट खूबसूरत यादें बनाने का एक मौका है।":
    "Enjoy our Royal Unlimited Buffet of 50+ delicious dishes with family and friends. Every visit to Rangilo Rajwado is an opportunity to create beautiful memories.",
  "पारिवारिक भोजन": "Family Dining",
  कपल्स: "Couples",
  "छोटी-बड़ी सेलिब्रेशन": "Celebrations",
  "दोस्तों के साथ गेट-टुगेदर": "Friends’ Get-togethers",
  "जन्मदिन समारोह": "Birthday Celebrations",
  "खास अवसर": "Special Occasions",
  "हमारी गैलरी": "Our Gallery",
  "शाही अनुभव की एक झलक": "A Glimpse of the Royal Experience",
  "लज़ीज़ खाना, खूबसूरत माहौल और यादगार पल।":
    "Delicious food, beautiful ambience and memorable moments.",
  "बुफे और स्वादिष्ट खाना": "Buffet & Delicious Food",
  "खास व्यंजन": "Signature Dishes",
  "रेस्टोरेंट का माहौल": "Restaurant Ambience",
  "फैमिली मोमेंट्स": "Family Moments",
  सेलिब्रेशन: "Celebrations",
  "हमारी इंस्टाग्राम कम्युनिटी": "Our Instagram Community",
  "हज़ारों फूड लवर्स का": "Loved by Thousands of",
  "पसंदीदा ❤️": "Food Lovers ❤️",
  "स्वादिष्ट खाने, नए अपडेट्स, खास ऑफर्स और रंगीलो राजवाड़ो के खूबसूरत पलों की झलक के लिए हमारे साथ जुड़ें।":
    "Follow us for delicious food, fresh updates, special offers and beautiful moments from Rangilo Rajwado.",
  "इंस्टाग्राम फॉलोअर्स": "Instagram Followers",
  "Instagram पर Follow करें": "Follow on Instagram",
  "आपका स्वागत है": "You’re Always Welcome",
  "हमसे मिलने": "Come Visit",
  आइए: "Us",
  "अपने परिवार और दोस्तों के साथ आइए और स्वाद, खुशी और शाही मेहमाननवाज़ी का अनुभव कीजिए।":
    "Visit with family and friends to experience flavour, joy and royal hospitality.",
  "हमारा पता": "Our Address",
  "Google Maps पर लोकेशन देखें": "View Location on Google Maps",
  "रास्ता देखने के लिए क्लिक करें": "Click for Directions",
  "एक यादगार स्वाद आपका इंतज़ार कर रहा है": "An Unforgettable Feast Awaits",
  "क्या आप एक शाही दावत": "Are You Ready for",
  "के लिए तैयार हैं?": "A Royal Feast?",
  "50+ स्वादिष्ट व्यंजनों के साथ हमारे रॉयल अनलिमिटेड बुफे का आनंद लें।":
    "Enjoy our Royal Unlimited Buffet featuring 50+ delicious dishes.",
  "अच्छा खाना": "Great Food",
  "शानदार यादें": "Beautiful Memories",
  "अनलिमिटेड खुशी": "Unlimited Joy",
  "बुफे एक्सप्लोर करें": "Explore the Buffet",
  "राजस्थान के शाही स्वाद का अनुभव।":
    "Experience the royal flavours of Rajasthan.",
  "हमसे जुड़ें": "Connect With Us",
  "शाही स्वाद • दिल से सेवा": "Royal Flavours • Heartfelt Service",
  "क्यों हम": "Why Us",
  "प्रतिक्रिया": "Feedback",
  "त्वरित लिंक": "Quick Links",
  "रंगीलो राजवाड़ो": "Rangilo Rajwado",
  "रॉयल अनलिमिटेड बुफे • 50+ स्वादिष्ट व्यंजन • कैफे • फैमिली रेस्टोरेंट":
    "Royal Unlimited Buffet • 50+ Delicious Dishes • Café • Family Restaurant",
  "रंगीलो राजवाड़ो इंस्टाग्राम झलक": "Rangilo Rajwado Instagram preview",
  "रंगीलो राजवाड़ो का खूबसूरत माहौल": "Beautiful Rangilo Rajwado ambience",
  "स्वादिष्ट राजस्थानी व्यंजन": "Delicious Rajasthani cuisine",
  "शाही राजस्थानी थाली": "Royal Rajasthani thali",
  "50 से अधिक व्यंजनों वाला अनलिमिटेड बुफे":
    "Unlimited buffet featuring more than 50 dishes",
  "गैलरी फोटो": "Gallery photograph",
  "फोटो बंद करें": "Close photograph",
  "हम तक पहुँचने का आसान रास्ता": "The easiest way to reach us",
  "Google Maps पर खोलें": "Open in Google Maps",
};
const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
};

function Logo() {
  return (
    <a href="#home" className="brand-logo">
      <img src={logo} alt="रंगीलो राजवाड़ो रेस्टोरेंट लोगो" />
      <span>
        <b>Rangilo Rajwado</b>
        <small>UNLIMITED RESTAURANT</small>
      </span>
    </a>
  );
}
function LocationButton({ children = "लोकेशन देखें", light = false }) {
  return (
    <a
      className={`royal-btn ${light ? "light" : ""}`}
      href={MAP}
      target="_blank"
      rel="noreferrer"
    >
      <MapPin size={16} />
      {children}
      <ArrowUpRight size={15} />
    </a>
  );
}
function SectionTitle({ eyebrow, title, subtitle, light = false }) {
  return (
    <motion.div
      {...reveal}
      className={`section-title ${light ? "is-light" : ""}`}
    >
      <span>
        <i /> {eyebrow} <i />
      </span>
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </motion.div>
  );
}
function Ornament() {
  return (
    <div className="ornament" aria-hidden="true">
      <span>◆</span>
      <i></i>
      <Star size={12} />
      <i></i>
      <span>◆</span>
    </div>
  );
}

function App() {
  const [scrolled, setScrolled] = useState(false),
    [open, setOpen] = useState(false),
    [lightbox, setLightbox] = useState(null),
    [lang, setLang] = useState(
      () => localStorage.getItem("rr-language") || "hi",
    );
  useEffect(() => {
    const fn = () => setScrolled(scrollY > 30);
    const smoothNavigate = (event) => {
      const link = event.target.closest('a[href^="#"]');
      if (!link) return;
      const target = document.querySelector(link.getAttribute("href"));
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", `${location.pathname}${location.search}`);
    };
    addEventListener("scroll", fn);
    document.addEventListener("click", smoothNavigate);
    return () => {
      removeEventListener("scroll", fn);
      document.removeEventListener("click", smoothNavigate);
    };
  }, []);
  useEffect(() => {
    const reverse = Object.fromEntries(
      Object.entries(translations).map(([hi, en]) => [en, hi]),
    );
    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
    );
    let node;
    while ((node = walker.nextNode())) {
      const value = node.nodeValue,
        clean = value.trim();
      const next = lang === "en" ? translations[clean] : reverse[clean];
      if (next) node.nodeValue = value.replace(clean, next);
    }
    document.documentElement.lang = lang;
    document.title =
      lang === "hi"
        ? "रंगीलो राजवाड़ो रेस्टोरेंट | Royal Unlimited Buffet, Sirohi"
        : "Rangilo Rajwado Restaurant | Royal Unlimited Buffet, Sirohi";
    localStorage.setItem("rr-language", lang);
  }, [lang]);
  return (
    <div className="site-shell">
      <header className={scrolled ? "scrolled" : ""}>
        <Logo />
        <nav>
          {nav.map(([n, id]) => (
            <a href={id === "gallery" ? "/gallery" : `#${id}`} key={id}>
              {n}
            </a>
          ))}
          <a href="/why-choose-us">क्यों हम</a>
          <a href="/feedback">प्रतिक्रिया</a>
        </nav>
        <div className="header-actions">
          <button
            className="language-toggle"
            onClick={() => setLang(lang === "hi" ? "en" : "hi")}
            aria-label="Change language"
          >
            <Languages />
            <span>{lang === "hi" ? "EN" : "हिं"}</span>
          </button>
          <LocationButton />
        </div>
        <button
          className="hamb"
          aria-label="मेनू खोलें"
          onClick={() => setOpen(true)}
        >
          <Menu />
        </button>
      </header>
      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28 }}
          >
            <button onClick={() => setOpen(false)} aria-label="मेनू बंद करें">
              <X />
            </button>
            <Logo />
            <nav>
              {nav.map(([n, id], i) => (
                <motion.a
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * i }}
                  onClick={() => setOpen(false)}
                  href={id === "gallery" ? "/gallery" : `#${id}`}
                  key={id}
                >
                  {n}
                  <ChevronRight />
                </motion.a>
              ))}
              <a href="/why-choose-us" onClick={() => setOpen(false)}>क्यों हम <ChevronRight /></a>
              <a href="/feedback" onClick={() => setOpen(false)}>प्रतिक्रिया <ChevronRight /></a>
            </nav>
            <div className="mobile-actions">
              <button
                className="language-toggle"
                onClick={() => setLang(lang === "hi" ? "en" : "hi")}
              >
                <Languages />
                <span>{lang === "hi" ? "English" : "हिंदी"}</span>
              </button>
              <LocationButton />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <main>
        <section id="home" className="hero-section">
          <motion.img
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.8 }}
            src={hero}
            alt="शाही राजस्थानी थाली"
          />
          <div className="hero-overlay" />
          <div className="hero-pattern" />
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <span className="welcome">
              पधारो म्हारे देस <i />
            </span>
            <h1>
              जहाँ हर स्वाद बने
              <br />
              <em>एक शाही अनुभव</em> <Crown />
            </h1>
            <div className="hero-highlight">
              <UtensilsCrossed />
              <b>रॉयल अनलिमिटेड बुफे</b>
              <i />
              50+ स्वादिष्ट व्यंजन
            </div>
            <div className="hero-actions">
              <a className="royal-btn" href="#buffet">
                <UtensilsCrossed size={16} />
                बुफे देखें
                <ArrowUpRight size={15} />
              </a>
              <LocationButton light />
            </div>
          </motion.div>
          <motion.div
            className="float-medallion"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
          >
            <span>50+</span>
            <small>व्यंजन</small>
          </motion.div>
          <a className="scroll-mark" href="#about">
            नीचे देखें <span>↓</span>
          </a>
        </section>
        <section id="about" className="about-section section-pad">
          <div className="container about-grid">
            <motion.div {...reveal} className="about-visual">
              <div className="frame-img">
                <img
                  src={foodImages[4]}
                  loading="lazy"
                  alt="रंगीलो राजवाड़ो का खूबसूरत माहौल"
                />
              </div>
              <motion.div
                className="mini-img"
                whileHover={{ rotate: 0, scale: 1.03 }}
              >
                <img
                  src={foodImages[1]}
                  loading="lazy"
                  alt="स्वादिष्ट राजस्थानी व्यंजन"
                />
              </motion.div>
              <div className="seal">
                <Crown />
                <b>शाही स्वाद</b>
                <span>सिरोही</span>
              </div>
            </motion.div>
            <motion.div {...reveal} className="about-copy">
              <span className="micro-title">हमारी कहानी</span>
              <h2>
                एक शाही
                <br />
                <em>भोजन अनुभव</em>
              </h2>
              <Ornament />
              <p>
                रंगीलो राजवाड़ो सिर्फ एक रेस्टोरेंट नहीं, बल्कि स्वाद, परंपरा और
                यादगार पलों का एक खूबसूरत अनुभव है।
              </p>
              <p>
                यहाँ हर व्यंजन को बेहतरीन स्वाद और गुणवत्ता के साथ तैयार किया
                जाता है। चाहे आप परिवार के साथ भोजन करने आएं, दोस्तों के साथ समय
                बिताना हो या किसी खास अवसर को सेलिब्रेट करना हो — रंगीलो
                राजवाड़ो आपका दिल से स्वागत करता है।
              </p>
              <div className="signature">
                अतिथि देवो भवः <span>— दिल से मेहमाननवाज़ी</span>
              </div>
            </motion.div>
          </div>
        </section>
        <section className="why-section section-pad">
          <div className="container">
            <SectionTitle
              eyebrow="क्यों चुनें हमें"
              title="हर पल में शाही एहसास"
              subtitle="बेहतरीन स्वाद, भरपूर वैरायटी और दिल से की गई मेहमाननवाज़ी।"
            />
            <div className="feature-grid">
              {features.map(([Icon, t, d], i) => (
                <motion.article
                  {...reveal}
                  transition={{ ...reveal.transition, delay: i * 0.08 }}
                  whileHover={{ y: -8 }}
                  key={t}
                >
                  <span className="feature-no">0{i + 1}</span>
                  <div className="icon-wrap">
                    <Icon />
                  </div>
                  <h3>{t}</h3>
                  <p>{d}</p>
                  <i className="corner" />
                </motion.article>
              ))}
            </div>
          </div>
        </section>
        <section id="buffet" className="buffet-section section-pad">
          <div className="palace-lines" />
          <div className="container">
            <SectionTitle
              light
              eyebrow="रॉयल अनलिमिटेड बुफे"
              title="एक बुफे, अनगिनत स्वाद"
              subtitle="हमारे रॉयल अनलिमिटेड बुफे में हर प्लेट के साथ स्वाद का एक नया अनुभव आपका इंतज़ार कर रहा है।"
            />
            <div className="buffet-content">
              <motion.div {...reveal} className="buffet-image">
                <img
                  src={hero}
                  loading="lazy"
                  alt="50 से अधिक व्यंजनों वाला अनलिमिटेड बुफे"
                />
                <div className="image-badge">
                  <b>50+</b>
                  <span>लज़ीज़ व्यंजन</span>
                </div>
              </motion.div>
              <div className="buffet-list">
                {buffet.map((x, i) => (
                  <motion.div
                    {...reveal}
                    transition={{ ...reveal.transition, delay: i * 0.05 }}
                    key={x}
                  >
                    <span>
                      {["🥗", "🍲", "🫓", "🍚", "🥬", "🍮", "🥤", "🍽️"][i]}
                    </span>
                    <b>{x}</b>
                    <small>0{i + 1}</small>
                  </motion.div>
                ))}
              </div>
            </div>
            <a className="royal-btn buffet-cta" href="#gallery">
              <UtensilsCrossed size={17} />
              हमारा स्वादिष्ट Menu देखें
              <ArrowUpRight size={16} />
            </a>
          </div>
        </section>
        <section className="experience-section section-pad">
          <div className="container">
            <SectionTitle
              eyebrow="अपनों के संग"
              title="अपनों के संग, अनलिमिटेड स्वाद का आनंद"
              subtitle="50+ स्वादिष्ट व्यंजनों वाले हमारे रॉयल Unlimited Buffet का परिवार और दोस्तों के साथ भरपूर आनंद लीजिए। रंगीलो राजवाड़ो में हर विजिट खूबसूरत यादें बनाने का एक मौका है।"
            />
            <div className="occasion-grid">
              {occasions.map(([Icon, t], i) => (
                <motion.article
                  {...reveal}
                  whileHover={{ scale: 1.025 }}
                  key={t}
                >
                  <Icon />
                  <span>{t}</span>
                  <small>0{i + 1}</small>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
        <section id="gallery" className="gallery-section section-pad">
          <div className="container">
            <SectionTitle
              eyebrow="हमारी गैलरी"
              title="शाही अनुभव की एक झलक"
              subtitle="लज़ीज़ खाना, खूबसूरत माहौल और यादगार पल।"
            />
            <div className="gallery-grid">
              {galleries.map(([t, idx], i) => (
                <motion.button
                  {...reveal}
                  key={t}
                  className={`gallery-item item-${i}`}
                  onClick={() => setLightbox(foodImages[idx])}
                >
                  <img src={foodImages[idx]} loading="lazy" alt={t} />
                  <span>
                    <small>रंगीलो राजवाड़ो</small>
                    <b>{t}</b>
                  </span>
                  <ArrowUpRight />
                </motion.button>
              ))}
            </div>
          </div>
        </section>
        <section className="instagram-section">
          <div className="insta-band">
            {foodImages.slice(0, 4).map((x, i) => (
              <img
                src={x}
                loading="lazy"
                alt="रंगीलो राजवाड़ो इंस्टाग्राम झलक"
                key={i}
              />
            ))}
          </div>
          <motion.div {...reveal} className="insta-card">
            <Instagram />
            <span>हमारी इंस्टाग्राम कम्युनिटी</span>
            <h2>
              हज़ारों फूड लवर्स का
              <br />
              <em>पसंदीदा ❤️</em>
            </h2>
            <p>
              स्वादिष्ट खाने, नए अपडेट्स, खास ऑफर्स और रंगीलो राजवाड़ो के
              खूबसूरत पलों की झलक के लिए हमारे साथ जुड़ें।
            </p>
            <strong>
              4.9K+ <small>इंस्टाग्राम फॉलोअर्स</small>
            </strong>
            <a
              className="royal-btn"
              href={INSTA}
              target="_blank"
              rel="noreferrer"
            >
              <Instagram size={17} />
              Instagram पर Follow करें
              <ArrowUpRight size={16} />
            </a>
          </motion.div>
        </section>
        <section id="visit" className="visit-section section-pad">
          <div className="container visit-grid">
            <motion.div {...reveal}>
              <span className="micro-title">आपका स्वागत है</span>
              <h2>
                हमसे मिलने
                <br />
                <em>आइए</em>
              </h2>
              <p>
                अपने परिवार और दोस्तों के साथ आइए और स्वाद, खुशी और शाही
                मेहमाननवाज़ी का अनुभव कीजिए।
              </p>
              <div className="address">
                <MapPin />
                <div>
                  <small>हमारा पता</small>
                  <b>
                    Sinchayi Colony, Vedhaynath Colony,
                    <br />
                    Sirohi, Rajasthan 307001
                  </b>
                </div>
              </div>
              <LocationButton>Google Maps पर लोकेशन देखें</LocationButton>
            </motion.div>
            <motion.div
              {...reveal}
              className="location-video-card"
            >
              <div className="location-reel">
                <video
                  src="/videos/address-rangilo-rajwado.mp4"
                  controls
                  muted
                  playsInline
                  preload="metadata"
                  aria-label="रंगीलो राजवाड़ो का पता और लोकेशन वीडियो"
                />
                <span>LOCATION REEL</span>
              </div>
              <div className="location-reel-info">
                <span><MapPin /> RANGILO RAJWADO</span>
                <b>हम तक पहुँचने का आसान रास्ता</b>
                <p>Sinchayi Colony, Vedhaynath Colony, Sirohi, Rajasthan 307001</p>
                <a href={MAP} target="_blank" rel="noreferrer">
                  Google Maps पर खोलें <ArrowUpRight />
                </a>
              </div>
            </motion.div>
          </div>
        </section>
        <section className="final-cta">
          <div className="cta-bg" />
          <motion.div {...reveal}>
            <Crown />
            <span>एक यादगार स्वाद आपका इंतज़ार कर रहा है</span>
            <h2>
              क्या आप एक शाही दावत
              <br />
              के लिए तैयार हैं?
            </h2>
            <p>
              50+ स्वादिष्ट व्यंजनों के साथ हमारे रॉयल अनलिमिटेड बुफे का आनंद
              लें।
            </p>
            <strong>
              अच्छा खाना <i /> शानदार यादें <i /> अनलिमिटेड खुशी
            </strong>
            <small>
              <MapPin /> Rangilo Rajwado, Sinchayi Colony, Vedhaynath Colony,
              Sirohi, Rajasthan 307001
            </small>
            <div>
              <a className="royal-btn" href="#buffet">
                <UtensilsCrossed size={16} />
                बुफे एक्सप्लोर करें
              </a>
              <LocationButton light />
            </div>
          </motion.div>
        </section>
      </main>
      <footer>
        <div className="container footer-grid">
          <div>
            <Logo />
            <p>राजस्थान के शाही स्वाद का अनुभव।</p>
            <span>
              रॉयल अनलिमिटेड बुफे • 50+ स्वादिष्ट व्यंजन • कैफे • फैमिली
              रेस्टोरेंट
            </span>
          </div>
          <div>
            <h3>Quick Links</h3>
            {nav.map(([n, id]) => (
              <a key={id} href={id === "gallery" ? "/gallery" : `#${id}`}>
                {n}
              </a>
            ))}
            <a href="/why-choose-us">क्यों हम</a>
            <a href="/feedback">प्रतिक्रिया</a>
          </div>
          <div>
            <h3>हमसे जुड़ें</h3>
            <p>
              <MapPin /> Sinchayi Colony, Vedhaynath Colony,
              <br />
              Sirohi, Rajasthan 307001
            </p>
            <a href={INSTA} target="_blank" rel="noreferrer">
              <Instagram /> @rangilo_rajwado
            </a>
          </div>
        </div>
        <div className="copyright">
          © 2026 Rangilo Rajwado Restaurant{" "}
          <span>शाही स्वाद • दिल से सेवा</span>
        </div>
      </footer>
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <button aria-label="फोटो बंद करें">
              <X />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              src={lightbox}
              alt="गैलरी फोटो"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
export default App;
