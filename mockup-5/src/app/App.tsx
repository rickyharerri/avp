import { useState } from "react";
import {
  Camera,
  Film,
  Clock,
  MapPin,
  Instagram,
  Facebook,
  Youtube,
  Twitter,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import heroImage from "@/imports/ChatGPT_Image_Jul_10__2026__12_24_46_PM.PNG";

const PORTFOLIO = [
  {
    name: "Garry & Roman",
    tag: "WEDDING",
    img: "https://images.unsplash.com/photo-1630526720753-aa4e71acf67d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80",
  },
  {
    name: "Simran & Meet",
    tag: "EVENT",
    img: "https://images.unsplash.com/photo-1633104502699-b2ecf0fee294?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80",
  },
  {
    name: "One Day Shoot With Ordinary People",
    tag: "",
    img: "https://images.unsplash.com/photo-1665960213530-3fb10da1f25e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80",
  },
  {
    name: "Manpreet & Anmol",
    tag: "FILM",
    img: "https://images.unsplash.com/photo-1722953544956-192125062800?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80",
  },
];

const SERVICES = [
  {
    icon: Camera,
    title: "Photography",
    desc: "Natural, elegant, and emotion-filled imagery.",
  },
  {
    icon: Film,
    title: "Cinematography",
    desc: "Cinematic films that bring your story to life.",
  },
  {
    icon: Clock,
    title: "One Day Stories",
    desc: "Short films capturing the essence of your day.",
  },
  {
    icon: MapPin,
    title: "Destination Stories",
    desc: "We travel to capture love in beautiful places.",
  },
];

const NAV_LINKS = ["Home", "About", "Portfolio", "Blog", "Contact", "More"];

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    message: "",
  });

  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));

  return (
    <div
      className="min-h-screen bg-cream text-charcoal"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* ── NAVBAR ────────────────────────────────────── */}
      <header className="fixed top-0 inset-x-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2.5 shrink-0">
            <div className="w-9 h-9 rounded-full border border-green-dark flex items-center justify-center">
              <span
                className="text-[10px] font-semibold tracking-[0.2em] text-green-dark"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                AVP
              </span>
            </div>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((item) =>
              item === "Portfolio" ? (
                <a
                  key={item}
                  href="#"
                  className="flex items-center gap-1 text-sm text-charcoal hover:text-green-dark transition-colors"
                >
                  {item}
                  <ChevronDown size={13} strokeWidth={1.5} />
                </a>
              ) : (
                <a
                  key={item}
                  href="#"
                  className="text-sm text-charcoal hover:text-green-dark transition-colors"
                >
                  {item}
                </a>
              )
            )}
          </nav>

          {/* Social icons */}
          <div className="hidden md:flex items-center gap-3.5 text-charcoal">
            {[Facebook, Instagram, Youtube, Twitter].map((Icon, i) => (
              <Icon
                key={i}
                size={15}
                strokeWidth={1.5}
                className="cursor-pointer hover:text-green-dark transition-colors"
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

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-cream border-t border-stone-200 px-6 py-4 flex flex-col gap-3">
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

      {/* ── HERO ──────────────────────────────────────── */}
      <section className="pt-16 bg-cream">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center min-h-[calc(100vh-64px)]">
          <div className="py-16">
            <p className="text-[10px] uppercase tracking-[0.28em] text-stone-400 mb-7">
              Wedding Photography &amp; Cinematography
            </p>
            <h1
              className="text-5xl md:text-6xl lg:text-7xl leading-[1.08] font-medium text-charcoal mb-7"
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
              className="inline-block bg-green-dark text-white text-[13px] tracking-widest uppercase px-8 py-3.5 hover:bg-opacity-90 transition-all"
            >
              View Portfolio
            </a>
          </div>

          <div className="relative self-stretch flex items-end md:items-center">
            <ImageWithFallback
              src={heroImage}
              alt="Indian wedding couple in traditional attire"
              className="w-full h-[540px] md:h-[680px] object-cover object-top"
            />
          </div>
        </div>
      </section>

      {/* ── WHAT WE CREATE ────────────────────────────── */}
      <section className="py-20 bg-cream border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[10px] uppercase tracking-[0.28em] text-stone-400 text-center mb-14">
            What We Create
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {SERVICES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center flex flex-col items-center">
                <div className="mb-5 w-14 h-14 rounded-full border border-stone-300 flex items-center justify-center">
                  <Icon size={22} strokeWidth={1.25} className="text-stone-400" />
                </div>
                <h3
                  className="text-[15px] font-medium text-charcoal mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {title}
                </h3>
                <p className="text-stone-400 text-[13px] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO HIGHLIGHTS ──────────────────────── */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[10px] uppercase tracking-[0.28em] text-stone-400 text-center mb-10">
            Portfolio Highlights
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 mb-10">
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4">
                  {tag && (
                    <p className="text-white/60 text-[10px] uppercase tracking-[0.2em] mb-1">
                      {tag}
                    </p>
                  )}
                  <p className="text-white text-[13px] font-medium leading-snug">
                    {name}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a
              href="#"
              className="inline-block border border-charcoal text-charcoal text-[13px] tracking-widest uppercase px-10 py-3.5 hover:bg-charcoal hover:text-white transition-all"
            >
              View More
            </a>
          </div>
        </div>
      </section>

      {/* ── ABOUT ─────────────────────────────────────── */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[10px] uppercase tracking-[0.28em] text-stone-400 mb-6">
              Hi, We're Anmol Studio
            </p>
            <h2
              className="text-4xl md:text-5xl font-medium text-charcoal leading-[1.15] mb-7"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              We capture your most meaningful moments with heart and artistry.
            </h2>
            <p className="text-stone-500 text-[14px] leading-relaxed mb-9 max-w-md">
              Based in California, we specialize in motion weddings and
              destination elopements worldwide. Our goal and priority is to
              create timeless visuals that reflect your unique story and
              emotions.
            </p>
            <a
              href="#"
              className="inline-block border border-charcoal text-charcoal text-[13px] tracking-widest uppercase px-8 py-3.5 hover:bg-charcoal hover:text-white transition-all"
            >
              About Us
            </a>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1741201864710-8c031ebd13bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=700&q=80"
              alt="Anmol Studio"
              className="w-full h-[480px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ───────────────────────────────── */}
      <section className="py-24 bg-charcoal">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p
            className="text-xl md:text-2xl leading-relaxed italic text-white/85 mb-8"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            "If you are considering them to cover your events don't think
            twice. Thank you everyone at Anmol video production for bringing
            our vision to our wedding to life and gifting us beautiful
            memories to cherish."
          </p>
          <div className="w-8 h-px bg-white/30 mx-auto mb-6" />
          <p className="text-white/40 text-[11px] uppercase tracking-[0.3em]">
            — Amrit
          </p>
        </div>
      </section>

      {/* ── LET'S TELL YOUR STORY ─────────────────────── */}
      <section className="bg-cream">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-0 items-stretch">
          <div className="relative min-h-[500px]">
            <img
              src="https://images.unsplash.com/photo-1519741196428-6a2175fa2557?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=700&q=80"
              alt="Wedding couple"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="py-20 px-6 md:pl-16">
            <p className="text-[10px] uppercase tracking-[0.28em] text-stone-400 mb-4">
              Let's Tell Your Story
            </p>
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
                className="bg-green-dark text-white text-[13px] tracking-widest uppercase px-8 py-3.5 hover:bg-opacity-90 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────── */}
      <footer className="bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-6 py-14 flex flex-col md:flex-row items-start justify-between gap-10">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center">
                <span
                  className="text-[10px] font-semibold tracking-[0.2em] text-white"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  AVP
                </span>
              </div>
              <p className="text-sm font-medium tracking-wide">
                Anmol Video Productions
              </p>
            </div>
            <p className="text-white/40 text-[12px] leading-relaxed mb-6">
              A wedding photography and videography team based in California,
              dedicated to capturing your most meaningful moments with heart
              and artistry.
            </p>
            <div className="flex items-center gap-4 text-white/40">
              {[Facebook, Instagram, Youtube, Twitter].map((Icon, i) => (
                <Icon
                  key={i}
                  size={14}
                  strokeWidth={1.5}
                  className="cursor-pointer hover:text-white transition-colors"
                />
              ))}
            </div>
          </div>

          {/* Nav */}
          <nav className="flex flex-col gap-2.5">
            {["Home", "About", "Portfolio", "Blog", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[13px] text-white/45 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-5">
            <p className="text-white/25 text-[11px]">
              © Anmol Video Productions. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
