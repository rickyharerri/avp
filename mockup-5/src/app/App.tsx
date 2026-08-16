import { useState, useEffect } from "react";
import {
  Instagram,
  Facebook,
  Youtube,
  Twitter,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import heroImage from "@/imports/hero-image.jpg";
import logoImg from "@/imports/logo-no-bg.png";
import cameraIcon from "@/imports/icons/camera.svg";
import clapperboardIcon from "@/imports/icons/clapperboard.svg";
import videoIcon from "@/imports/icons/video.svg";
import webcamIcon from "@/imports/icons/webcam.svg";
import whatWeAreImage from "@/imports/what-we-are.jpg";
import testimonialBg from "@/imports/testimonial-bg.jpg";
import contactUsBg from "@/imports/contact-us.jpg";

import feature1Img from "@/imports/feature-1.jpg";
import feature2Img from "@/imports/feature-2.jpg";
import feature3Img from "@/imports/feature-3.jpg";
import feature4Img from "@/imports/feature-4.jpg";

const PORTFOLIO = [
  {
    name: "Garry & Roman",
    tag: "WEDDING",
    img: feature1Img,
  },
  {
    name: "Simran & Meet",
    tag: "EVENT",
    img: feature2Img,
  },
  {
    name: "One Day Shoot With Ordinary People",
    tag: "",
    img: feature3Img,
  },
  {
    name: "Manpreet & Anmol",
    tag: "FILM",
    img: feature4Img,
  },
];

const SERVICES = [
  {
    icon: cameraIcon,
    title: "Photography",
    desc: "Natural, elegant, and emotion-filled imagery.",
  },
  {
    icon: clapperboardIcon,
    title: "Cinematography",
    desc: "Cinematic films that bring your story to life.",
  },
  {
    icon: videoIcon,
    title: "One Day Stories",
    desc: "Short films capturing the essence of your day.",
  },
  {
    icon: webcamIcon,
    title: "Destination Stories",
    desc: "We travel to capture love in beautiful places.",
  },
];

const NAV_LINKS = ["Home", "About", "Portfolio", "Blog", "Contact", "More"];
const FOOTER_LINKS = ["Home", "About", "Portfolio", "Blog", "Contact"];

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    message: "",
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));

  return (
    <div
      className="min-h-screen bg-cream text-charcoal"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* ── NAVBAR ──────────────────────────────────── */}
      <header className="fixed top-0 inset-x-0 z-50 bg-cream">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="shrink-0">
            <ImageWithFallback
              src={logoImg}
              alt="AVP – Anmol Video Production"
              className={`${isScrolled ? "h-15 w-15" : "h-30 w-30 mt-20"} object-contain transition-all duration-300`}
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((item) =>
              item === "Portfolio" ? (
                <a
                  key={item}
                  href="#"
                  className="flex items-center gap-1 text-[13px] text-charcoal hover:text-green-dark transition-colors"
                >
                  {item}
                  <ChevronDown size={12} strokeWidth={2} />
                </a>
              ) : (
                <a
                  key={item}
                  href="#"
                  className="text-[13px] text-charcoal hover:text-green-dark transition-colors"
                >
                  {item}
                </a>
              )
            )}
          </nav>

          {/* Social icons */}
          <div className="hidden md:flex items-center gap-3.5">
            {[Facebook, Instagram, Youtube, Twitter].map((Icon, i) => (
              <Icon
                key={i}
                size={20}
                strokeWidth={1.5}
                className="cursor-pointer text-charcoal hover:text-green-dark transition-colors"
              />
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-charcoal"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden bg-white border-t border-stone-100 px-6 py-4 flex flex-col gap-3">
            {NAV_LINKS.map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm text-charcoal py-1"
                onClick={() => setMobileOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* ── HERO (full-width bg + left fade) ────────── */}
      <section className="relative pt-16 min-h-screen overflow-hidden">
        {/* Full-width background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        {/* Gradient overlay: solid cream on left → transparent on right */}
        <div
          className="absolute inset-0 hero-bg-gradient-dynamic"
        />
        {/* Content */}
        <div className="hero-text-color relative max-w-7xl mx-auto px-6 flex items-center min-h-[calc(100vh-64px)]">
          <div className="max-w-[520px] py-20">
            <p className="text-[10px] uppercase tracking-[0.28em] text-stone-900 mb-7">
              Wedding Photography &amp; Cinematography
            </p>
            <div className="w-[155px] h-1 bg-green-dark mb-10" />
            <h1
              className="text-5xl md:text-6xl lg:text-[4.25rem] leading-[1.07] font-medium text-charcoal mb-7"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Timeless Stories.
              <br />
              Beautifully Told.
            </h1>
            <p className="text-stone-500 text-[15px] leading-relaxed mb-10 max-w-[400px]">
              We capture authentic moments and unforgettable emotions with a
              cinematic touch, creating timeless memories to cherish for
              generations.
            </p>
            <a
              href="#"
              className="inline-block bg-green-dark text-white text-[11px] tracking-[0.2em] uppercase px-9 py-4 hover:opacity-90 transition-opacity"
            >
              View Portfolio
            </a>
          </div>
        </div>
      </section>

      {/* ── WHAT WE CREATE (white bg, no top border) ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[20px] uppercase tracking-[0.28em] text-stone-900 text-center mb-3">
            What We Create
          </p>
          <div className="w-12 h-1 bg-green-dark mx-auto mb-10" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {SERVICES.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="text-center flex flex-col items-center"
              >
                <div className="mb-5 w-18 h-18 flex items-center justify-center">
                  <img
                    src={Icon}
                    alt={title}
                  />
                </div>
                <h2
                  className="text-[14px] font-medium text-charcoal mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {title}
                </h2>
                <p className="text-stone-900 text-[12px] leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO HIGHLIGHTS ────────────────────── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[20px] uppercase tracking-[0.28em] text-stone-900 text-center mb-10">
            Portfolio Highlights
          </p>
          <div className="w-12 h-1 bg-green-dark mx-auto mb-10" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 mb-10 ">
            {PORTFOLIO.map(({ name, tag, img }) => (
              <div
                key={name}
                className="relative group overflow-hidden"
                style={{ aspectRatio: "3/4" }}
              >
                <img
                  src={img}
                  alt={name}
                  className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4">
                  {tag && (
                    <p className="text-white/65 text-[11px] uppercase tracking-[0.2em] mb-1.5">
                      {tag}
                    </p>
                  )}
                  <p className="text-white text-[15px] font-medium leading-snug">
                    {name}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
             <a
              href="#"
              className="inline-block bg-green-dark text-white text-[11px] tracking-[0.2em] uppercase px-9 py-4 hover:opacity-90 transition-opacity"
            >
              View More
            </a>
          </div>
        </div>
      </section>

      {/* ── ABOUT ───────────────────────────────────── */}
      <section className="py-10 bg-l-cream">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[15px] uppercase tracking-[0.28em] mb-10">
              Hi, We're Anmol Studio
            </p>
<div className="w-52 h-1 bg-green-dark mx-to mb-10" />
            <h2
              className="text-4xl md:text-5xl font-medium text-charcoal line-height-75px mb-16"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              We capture your most meaningful moments with heart and artistry.
            </h2>
            <p className="text-stone-500 text-[14px] leading-relaxed mb-16 max-w-md">
              Based in California, we specialize in motion weddings and
              destination elopements worldwide. Our goal and priority is to
              create timeless visuals that reflect your unique story and
              emotions.Based in California, we specialize in motion weddings and
              destination elopements worldwide. Our goal and priority is to
              create timeless visuals that reflect your unique story and
              emotions.
            </p>
            <a
              href="#"
              className="inline-block bg-green-dark text-white text-[11px] tracking-[0.2em] uppercase px-9 py-4 hover:opacity-90 transition-opacity"
            >
              About Us
            </a>
          </div>
          <div>
            <img
              src={whatWeAreImage}
              alt="Anmol Studio"
              className="w-full h-[720px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL (parallax fixed bg) ─────────── */}
      <section
        className="relative py-32"
        style={{
          backgroundImage: `url(${testimonialBg})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay with opacity */}
        <div className="absolute inset-0 bg-charcoal/80" />
        <div className="relative max-w-2xl mx-auto px-6 text-center">
          <p
            className="text-xl md:text-2xl leading-relaxed italic text-white/90 mb-8"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            "If you are considering them to cover your events don't think
            twice. Thank you everyone at Anmol video production for bringing
            our vision to our wedding to life and gifting us beautiful
            memories to cherish."
          </p>
          <div className="w-8 h-px bg-white/30 mx-auto mb-6" />
          <p className="text-white/45 text-[11px] uppercase tracking-[0.3em]">
            — Amrit
          </p>
        </div>
      </section>

      {/* ── LET'S TELL YOUR STORY ───────────────────── */}
      <section className="bg-l-cream m-7 p-7">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-0 items-stretch">
          <div className="relative min-h-[520px]">
            <img
              src={contactUsBg}
              alt="Wedding couple"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="py-20 px-6 md:pl-16 bg-l-cream">
            <p className="text-[20px] uppercase tracking-[0.28em] text-stone-900 mb-4">
              Let's Tell Your Story
            </p>
            <div className="w-52 h-1 bg-green-dark mx-to mb-10" />
            <p className="text-stone-500 text-[14px] leading-relaxed mb-8 max-w-sm">
              Ready to create your most meaningful memories? Get in touch to
              plan your shoot and celebrate your love story beautifully.
            </p>
            <form
              className="space-y-3.5 max-w-sm"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-2 gap-3.5">
                <input
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInput}
                  className="bg-stone-100 px-4 py-3 text-[13px] text-charcoal placeholder-stone-400 border-0 focus:outline-none focus:ring-1 focus:ring-green-dark"
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInput}
                  className="bg-stone-100 px-4 py-3 text-[13px] text-charcoal placeholder-stone-400 border-0 focus:outline-none focus:ring-1 focus:ring-green-dark"
                />
              </div>
              <input
                name="location"
                type="text"
                placeholder="Location"
                value={formData.location}
                onChange={handleInput}
                className="w-full bg-stone-100 px-4 py-3 text-[13px] text-charcoal placeholder-stone-400 border-0 focus:outline-none focus:ring-1 focus:ring-green-dark"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                value={formData.message}
                onChange={handleInput}
                className="w-full bg-stone-100 px-4 py-3 text-[13px] text-charcoal placeholder-stone-400 border-0 focus:outline-none focus:ring-1 focus:ring-green-dark resize-none"
              />
              <button
                type="submit"
                className="bg-green-dark text-white text-[11px] tracking-[0.2em] uppercase px-8 py-3.5 hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ── FOOTER (dark forest green) ───────────────── */}
      <footer className="bg-green-footer text-white">
        <div className="max-w-7xl mx-auto px-6 py-14 flex flex-col md:flex-row items-start justify-between gap-10">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-3 mb-5">
              <ImageWithFallback
                src={logoImg}
                alt="AVP – Anmol Video Production"
                className="h-14 w-14 object-contain brightness-0 invert"
              />
              <div>
                <p className="text-sm font-semibold tracking-wide text-white">
                  Anmol Video Productions
                </p>
                <p className="text-white/40 text-[11px] mt-0.5">
                  Wedding Photography &amp; Cinematography
                </p>
              </div>
            </div>
            <p className="text-white/45 text-[12px] leading-relaxed mb-6">
              A wedding photography and videography team dedicated to capturing
              your most meaningful moments with heart and artistry.
            </p>
            {/* Social media links */}
            <div className="flex items-center gap-4">
              {[
                { Icon: Instagram, label: "Instagram" },
                { Icon: Facebook, label: "Facebook" },
                { Icon: Youtube, label: "YouTube" },
                { Icon: Twitter, label: "Twitter" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="text-white/45 hover:text-white transition-colors"
                >
                  <Icon size={15} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div className="flex flex-col gap-2.5">
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/30 mb-1">
              Navigation
            </p>
            {FOOTER_LINKS.map((item) => (
              <a
                key={item}
                href="#"
                className="text-[13px] text-white/50 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Contact info */}
          <div className="flex flex-col gap-2.5">
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/30 mb-1">
              Get In Touch
            </p>
            <p className="text-[13px] text-white/50">hello@avpstudio.com</p>
            <p className="text-[13px] text-white/50">California, USA</p>
            <a
              href="#"
              className="mt-2 inline-block border border-white/30 text-white/70 text-[11px] tracking-[0.18em] uppercase px-5 py-2.5 hover:border-white hover:text-white transition-all"
            >
              Book Now
            </a>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
            <p className="text-white/60 text-[11px]">
              © 2026 Anmol Video Productions. All Rights Reserved.
            </p>
            <nav className="hidden md:flex items-center gap-1 text-[11px] text-white/30 ">
              Website developed by <a
                  key="credit"
                  href="https://www.getlogix.com"
                  className="text-[11px] text-white/60 hover:text-white/90 transition-colors"
                >
                  GetLogix Inc.
                </a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
