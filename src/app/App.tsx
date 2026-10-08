import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
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
import heroImage from "@/imports/hero-image.jpg?w=1920&format=webp";
import heroSrcSet from "@/imports/hero-image.jpg?w=768;1280;1920&format=webp&as=srcset";
import logoImg from "@/imports/logo-no-bg.png?w=240&format=webp";
import cameraIcon from "@/imports/icons/camera.svg";
import clapperboardIcon from "@/imports/icons/clapperboard.svg";
import videoIcon from "@/imports/icons/video.svg";
import webcamIcon from "@/imports/icons/webcam.svg";
import whatWeAreImage from "@/imports/what-we-are.jpg?w=1200&format=webp";
import whatWeAreSrcSet from "@/imports/what-we-are.jpg?w=600;1200&format=webp&as=srcset";
import testimonialBg from "@/imports/testimonial-bg.jpg?w=1920&format=webp&quality=70";
import contactUsBg from "@/imports/contact-us.jpg?w=1200&format=webp";
import contactUsSrcSet from "@/imports/contact-us.jpg?w=600;1200&format=webp&as=srcset";

import feature1Img from "@/imports/feature-1.jpg?w=800&format=webp";
import feature1SrcSet from "@/imports/feature-1.jpg?w=400;800&format=webp&as=srcset";
import feature2Img from "@/imports/feature-2.jpg?w=800&format=webp";
import feature2SrcSet from "@/imports/feature-2.jpg?w=400;800&format=webp&as=srcset";
import feature3Img from "@/imports/feature-3.jpg?w=800&format=webp";
import feature3SrcSet from "@/imports/feature-3.jpg?w=400;800&format=webp&as=srcset";
import feature4Img from "@/imports/feature-4.jpg?w=800&format=webp";
import feature4SrcSet from "@/imports/feature-4.jpg?w=400;800&format=webp&as=srcset";

const PORTFOLIO = [
  {
    name: "Garry & Roman",
    tag: "WEDDING",
    img: feature1Img,
    srcSet: feature1SrcSet,
  },
  {
    name: "Simran & Meet",
    tag: "EVENT",
    img: feature2Img,
    srcSet: feature2SrcSet,
  },
  {
    name: "One Day Shoot With Ordinary People",
    tag: "",
    img: feature3Img,
    srcSet: feature3SrcSet,
  },
  {
    name: "Manpreet & Anmol",
    tag: "FILM",
    img: feature4Img,
    srcSet: feature4SrcSet,
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

export type Page =
  | "home"
  | "about-us"
  | "contact"
  | "portfolio"
  | "portfolio/portfolio-1"
  | "portfolio/portfolio-2"
  | "services"
  | "services/service-1"
  | "services/service-2"
  | "blog";

const PAGE_HEADERS: Record<Exclude<Page, "home">, { title: string; intro: string }> = {
  "about-us": {
    title: "About Anmol Video Productions",
    intro:
      "A California-based wedding photography and cinematography team capturing authentic moments with heart and artistry.",
  },
  portfolio: {
    title: "Our Portfolio",
    intro:
      "Weddings, events and films we've had the honour of capturing across California and beyond.",
  },
  services: {
    title: "Wedding Photography & Cinematography Services",
    intro:
      "From engagement sessions to destination weddings, we create timeless photos and cinematic films tailored to your story.",
  },
  "portfolio/portfolio-1": {
    title: "Portfolio 1",
    intro: "A closer look at one of the stories we've had the honour of capturing.",
  },
  "portfolio/portfolio-2": {
    title: "Portfolio 2",
    intro: "A closer look at one of the stories we've had the honour of capturing.",
  },
  "services/service-1": {
    title: "Service 1",
    intro: "Everything you need to know about this service and how we can help on your day.",
  },
  "services/service-2": {
    title: "Service 2",
    intro: "Everything you need to know about this service and how we can help on your day.",
  },
  blog: {
    title: "Blog",
    intro: "Wedding stories, planning tips and behind-the-scenes moments from our team.",
  },
  contact: {
    title: "Contact Us",
    intro:
      "Tell us about your day and we'll get back to you to plan your shoot.",
  },
};

const NAV_LINKS: { label: string; href: string; children?: { label: string; href: string }[] }[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us/" },
  {
    label: "Portfolio",
    href: "/portfolio/",
    children: [
      { label: "Portfolio 1", href: "/portfolio/portfolio-1/" },
      { label: "Portfolio 2", href: "/portfolio/portfolio-2/" },
    ],
  },
  {
    label: "Services",
    href: "/services/",
    children: [
      { label: "Service 1", href: "/services/service-1/" },
      { label: "Service 2", href: "/services/service-2/" },
    ],
  },
  { label: "Blog", href: "/blog/" },
];
const FOOTER_LINKS = ["Home", "About Us", "Portfolio", "Services", "Blog", "Contact us"];
const SERVICE_LINKS = [
  "Wedding Photography",
  "Wedding Cinematography",
  "Engagement Sessions",
  "Destination Weddings",
  "One Day Stories",
];
const SEO_LINKS = [
  "Best Wedding Shoot in California",
  "Best Wedding Photographer in California",
  "Best Cinematographer in California",
  "Top Engagement Photographer in California",
  "Destination Wedding Photographer California",
];
const WHATSAPP_CHAT_LINK =
  "https://wa.me/15593288351?text=Hi%20Anmol%20Video%20Productions%2C%20I%20would%20like%20to%20book%20a%20session.";
const TESTIMONIALS = [
  {
    quote:
      "If you are considering them to cover your events don't think twice. Thank you everyone at Anmol video production for bringing our vision to our wedding to life and gifting us beautiful memories to cherish.",
    author: "Amrit",
  },
  {
    quote:
      "They captured every emotion so naturally. Our family keeps rewatching the film because it feels like reliving the day all over again.",
    author: "Jasleen",
  },
  {
    quote:
      "Professional, calm, and incredibly creative. The photos and cinematic highlights were beyond what we imagined.",
    author: "Harnoor",
  },
];

const EMPTY_FORM = {
  name: "",
  phone: "",
  email: "",
  sessionType: "",
  eventDate: "",
  city: "",
  guestCount: "",
  message: "",
  website: "",
};

export default function App({ page }: { page: Page }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isTestimonialHovered, setIsTestimonialHovered] = useState(false);
  // Computed after mount so the prerendered HTML doesn't freeze the build date
  const [minEventDate, setMinEventDate] = useState("");

  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const year = tomorrow.getFullYear();
    const month = String(tomorrow.getMonth() + 1).padStart(2, "0");
    const day = String(tomorrow.getDate()).padStart(2, "0");
    setMinEventDate(`${year}-${month}-${day}`);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleInput = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Honeypot: only bots fill the hidden "website" field
    if (formData.website) return;
    setFormStatus("sending");
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          session_type: formData.sessionType,
          event_date: formData.eventDate,
          city: formData.city,
          guest_count: formData.guestCount,
          message: formData.message,
        },
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      );
      setFormStatus("sent");
      setFormData(EMPTY_FORM);
    } catch {
      setFormStatus("error");
    }
  };

  const floatingLabelClass = (hasValue: boolean) =>
    `pointer-events-none absolute left-4 text-stone-600 transition-all duration-200 ${
      hasValue
        ? "top-1.5 translate-y-0 text-[10px]"
        : "top-1/2 -translate-y-1/2 text-[13px]"
    } peer-focus:top-1.5 peer-focus:translate-y-0 peer-focus:text-[10px]`;

  const floatingTextAreaLabelClass = (hasValue: boolean) =>
    `pointer-events-none absolute left-4 text-stone-600 transition-all duration-200 ${
      hasValue
        ? "top-1.5 translate-y-0 text-[10px]"
        : "top-4 text-[13px]"
    } peer-focus:top-1.5 peer-focus:translate-y-0 peer-focus:text-[10px]`;

  const showNextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const showPrevTestimonial = () => {
    setActiveTestimonial(
      (prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
    );
  };

  useEffect(() => {
    if (isTestimonialHovered || TESTIMONIALS.length <= 1) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 4500);

    return () => window.clearInterval(intervalId);
  }, [isTestimonialHovered]);

  return (
    <div
      className="min-h-screen bg-cream text-charcoal"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* ── NAVBAR ──────────────────────────────────── */}
      <header className="fixed top-0 inset-x-0 z-50 bg-cream">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="shrink-0">
            <ImageWithFallback
              src={logoImg}
              alt="AVP – Anmol Video Production"
              className={`${isScrolled || mobileOpen ? "h-15 w-15" : "h-30 w-30 mt-20"} object-contain transition-all duration-300`}
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map(({ label, href, children }) =>
              children ? (
                <div key={label} className="relative group">
                  <a
                    href={href}
                    className="flex items-center gap-1 text-[13px] text-charcoal hover:text-green-dark transition-colors"
                  >
                    {label}
                    <ChevronDown size={12} strokeWidth={2} />
                  </a>
                  <div className="absolute left-0 top-full pt-3 hidden group-hover:block group-focus-within:block">
                    <div className="min-w-44 bg-white shadow-md py-2">
                      {children.map((child) => (
                        <a
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-[13px] text-charcoal hover:text-green-dark transition-colors"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  key={label}
                  href={href}
                  className="text-[13px] text-charcoal hover:text-green-dark transition-colors"
                >
                  {label}
                </a>
              )
            )}
          </nav>

          {/* Social icons + CTA */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-3.5">
              {[Facebook, Instagram, Youtube, Twitter].map((Icon, i) => (
                <Icon
                  key={i}
                  size={20}
                  strokeWidth={1.5}
                  className="cursor-pointer text-charcoal hover:text-green-dark transition-colors"
                />
              ))}
            </div>
            <a
              href="/contact/"
              className="inline-flex items-center bg-green-dark text-white text-[11px] tracking-[0.2em] uppercase px-5 py-2.5 hover:opacity-90 transition-opacity"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile CTA + toggle */}
          <div className="md:hidden flex items-center gap-2.5">
            <a
              href="/contact/"
              className="inline-flex items-center bg-green-dark text-white text-[10px] tracking-[0.16em] uppercase px-3.5 py-2 hover:opacity-90 transition-opacity"
            >
              Contact Us
            </a>
            <button
              className="text-charcoal"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          
        </div>

        {mobileOpen && (
          <div className="md:hidden bg-white border-t border-stone-100 px-6 py-4 flex flex-col gap-3">
            {NAV_LINKS.map(({ label, href, children }) => (
              <div key={label} className="flex flex-col gap-1">
                <a
                  href={href}
                  className="text-sm text-charcoal py-1"
                  onClick={() => setMobileOpen(false)}
                >
                  {label}
                </a>
                {children?.map((child) => (
                  <a
                    key={child.href}
                    href={child.href}
                    className="text-sm text-stone-500 py-1 pl-4"
                    onClick={() => setMobileOpen(false)}
                  >
                    {child.label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        )}
      </header>

      {page !== "home" && (
        <section className="pt-40 pb-16 bg-l-cream text-center">
          <div className="max-w-3xl mx-auto px-6">
            <h1
              className="text-4xl md:text-5xl font-medium text-charcoal mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {PAGE_HEADERS[page].title}
            </h1>
            <div className="w-12 h-1 bg-green-dark mx-auto mb-6" />
            <p className="text-stone-500 text-[15px] leading-relaxed">
              {PAGE_HEADERS[page].intro}
            </p>
          </div>
        </section>
      )}

      {/* ── HERO (full-width bg + left fade) ────────── */}
      {page === "home" && (
      <section className="relative pt-16 min-h-screen overflow-hidden">
        {/* Full-width background image */}
        <img
          src={heroImage}
          srcSet={heroSrcSet}
          sizes="100vw"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
          {...{ fetchpriority: "high" }}
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
              href="/portfolio/"
              className="inline-block bg-green-dark text-white text-[11px] tracking-[0.2em] uppercase px-9 py-4 hover:opacity-90 transition-opacity"
            >
              View Portfolio
            </a>
          </div>
        </div>
      </section>
      )}

      {/* ── WHAT WE CREATE (white bg, no top border) ── */}
      {(page === "home" || page === "services") && (
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
      )}

      {/* ── PORTFOLIO HIGHLIGHTS ────────────────────── */}
      {(page === "home" || page === "portfolio") && (
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[20px] uppercase tracking-[0.28em] text-stone-900 text-center mb-10">
            Portfolio Highlights
          </p>
          <div className="w-12 h-1 bg-green-dark mx-auto mb-10" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 mb-10 ">
            {PORTFOLIO.map(({ name, tag, img, srcSet }) => (
              <div
                key={name}
                className="relative group overflow-hidden"
                style={{ aspectRatio: "3/4" }}
              >
                <img
                  src={img}
                  srcSet={srcSet}
                  sizes="(min-width: 768px) 25vw, 50vw"
                  alt={name}
                  loading="lazy"
                  decoding="async"
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
          {page === "home" && (
          <div className="text-center">
             <a
              href="/portfolio/"
              className="inline-block bg-green-dark text-white text-[11px] tracking-[0.2em] uppercase px-9 py-4 hover:opacity-90 transition-opacity"
            >
              View More
            </a>
          </div>
          )}
        </div>
      </section>
      )}

      {/* ── ABOUT ───────────────────────────────────── */}
      {(page === "home" || page === "about-us") && (
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
            <p className="text-stone-600 text-[14px] leading-relaxed mb-16 max-w-md">
              Based in California, we specialize in motion weddings and
              destination elopements worldwide. Our goal and priority is to
              create timeless visuals that reflect your unique story and
              emotions.Based in California, we specialize in motion weddings and
              destination elopements worldwide. Our goal and priority is to
              create timeless visuals that reflect your unique story and
              emotions.
            </p>
            {page === "home" && (
            <a
              href="/about-us/"
              className="inline-block bg-green-dark text-white text-[11px] tracking-[0.2em] uppercase px-9 py-4 hover:opacity-90 transition-opacity"
            >
              About Us
            </a>
            )}
          </div>
          <div>
            <img
              src={whatWeAreImage}
              srcSet={whatWeAreSrcSet}
              sizes="(min-width: 768px) 50vw, 100vw"
              alt="Anmol Studio"
              loading="lazy"
              decoding="async"
              className="w-full h-[720px] object-cover"
            />
          </div>
        </div>
      </section>
      )}

      {/* ── TESTIMONIAL (parallax fixed bg) ─────────── */}
      {(page === "home" || page === "about-us") && (
      <section
        className="relative min-h-[440px] md:min-h-[500px] flex items-center"
        onMouseEnter={() => setIsTestimonialHovered(true)}
        onMouseLeave={() => setIsTestimonialHovered(false)}
        style={{
          backgroundImage: `url(${testimonialBg})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay with opacity */}
        <div className="absolute inset-0 bg-charcoal/80" />

        <button
          type="button"
          aria-label="Previous testimonial"
          onClick={showPrevTestimonial}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full border border-white/45 bg-white/20 text-white/95 hover:bg-white/30 transition-colors"
        >
          &larr;
        </button>

        <button
          type="button"
          aria-label="Next testimonial"
          onClick={showNextTestimonial}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full border border-white/45 bg-white/20 text-white/95 hover:bg-white/30 transition-colors"
        >
          &rarr;
        </button>

        <div className="relative max-w-2xl mx-auto px-14 md:px-6 text-center">
          <p
            key={activeTestimonial}
            className="min-h-[160px] md:min-h-[180px] flex items-center justify-center text-xl md:text-2xl leading-relaxed italic text-white/90 mb-8"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            "{TESTIMONIALS[activeTestimonial].quote}"
          </p>
          <div className="w-8 h-px bg-white/30 mx-auto mb-6" />
          <p className="text-white/70 text-[11px] uppercase tracking-[0.3em]">
            — {TESTIMONIALS[activeTestimonial].author}
          </p>
        </div>
      </section>
      )}

      {/* ── LET'S TELL YOUR STORY ───────────────────── */}
      {page !== "portfolio" && page !== "about-us" && (
      <section id="contact-us" className="bg-l-cream m-7 p-7 scroll-mt-4">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-0 items-stretch">
          <div className="relative min-h-[520px]">
            <img
              src={contactUsBg}
              srcSet={contactUsSrcSet}
              sizes="(min-width: 768px) 50vw, 100vw"
              alt="Wedding couple"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div id="contact-form" className="py-20 px-6 md:pl-16 bg-l-cream scroll-mt-5">
            <p className="text-[20px] uppercase tracking-[0.28em] text-stone-900 mb-4">
              Let's Tell Your Story
            </p>
            <div className="w-52 h-1 bg-green-dark mx-to mb-10" />
            <p className="text-stone-600 text-[14px] leading-relaxed mb-8 max-w-sm">
              Ready to create your most meaningful memories? Get in touch to
              plan your shoot and celebrate your love story beautifully.
            </p>
            <form
              className="space-y-3.5 max-w-sm"
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="relative">
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    placeholder=" "
                    value={formData.name}
                    onChange={handleInput}
                    className="peer w-full bg-stone-100 px-4 pt-5 pb-2 text-[13px] text-charcoal border-0 focus:outline-none focus:ring-1 focus:ring-green-dark"
                  />
                  <label htmlFor="contact-name" className={floatingLabelClass(Boolean(formData.name))}>
                    Name
                  </label>
                </div>
                <div className="relative">
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    placeholder=" "
                    value={formData.phone}
                    onChange={handleInput}
                    className="peer w-full bg-stone-100 px-4 pt-5 pb-2 text-[13px] text-charcoal border-0 focus:outline-none focus:ring-1 focus:ring-green-dark"
                  />
                  <label htmlFor="contact-phone" className={floatingLabelClass(Boolean(formData.phone))}>
                    Phone
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="relative">
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    placeholder=" "
                    value={formData.email}
                    onChange={handleInput}
                    className="peer w-full bg-stone-100 px-4 pt-5 pb-2 text-[13px] text-charcoal border-0 focus:outline-none focus:ring-1 focus:ring-green-dark"
                  />
                  <label htmlFor="contact-email" className={floatingLabelClass(Boolean(formData.email))}>
                    Email
                  </label>
                </div>

                <div className="relative">
                <input
                  id="contact-guest-count"
                  name="guestCount"
                  type="number"
                  min="0"
                  placeholder=" "
                  value={formData.guestCount}
                  onChange={handleInput}
                  className="peer w-full bg-stone-100 px-4 pt-5 pb-2 text-[13px] text-charcoal border-0 focus:outline-none focus:ring-1 focus:ring-green-dark"
                />
                <label htmlFor="contact-guest-count" className={floatingLabelClass(Boolean(formData.guestCount))}>
                  Estimate Guest Count
                </label>
              </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="relative">
                  <input
                    id="contact-event-date"
                    name="eventDate"
                    type="date"
                    min={minEventDate}
                    value={formData.eventDate}
                    onChange={handleInput}
                    className="peer w-full bg-stone-100 px-4 pt-5 pb-2 text-[13px] text-charcoal border-0 focus:outline-none focus:ring-1 focus:ring-green-dark"
                  />
                  <label htmlFor="contact-event-date" className={floatingLabelClass(true)}>
                    Event Date
                  </label>
                </div>
                <div className="relative">
                  <input
                    id="contact-city"
                    name="city"
                    type="text"
                    placeholder=" "
                    value={formData.city}
                    onChange={handleInput}
                    className="peer w-full bg-stone-100 px-4 pt-5 pb-2 text-[13px] text-charcoal border-0 focus:outline-none focus:ring-1 focus:ring-green-dark"
                  />
                  <label htmlFor="contact-city" className={floatingLabelClass(Boolean(formData.city))}>
                    City
                  </label>
                </div>
              </div>

              
                <div className="relative">
                  <select
                    id="contact-session-type"
                    name="sessionType"
                    value={formData.sessionType}
                    onChange={handleInput}
                    className="peer w-full bg-stone-100 px-4 pt-5 pb-2 text-[13px] text-charcoal border-0 focus:outline-none focus:ring-1 focus:ring-green-dark"
                  >
                    <option value="" disabled />
                    <option value="Wedding">Wedding</option>
                    <option value="Engagement">Engagement</option>
                    <option value="Photo Shoot">Photo Shoot</option>
                    <option value="Other">Other</option>
                  </select>
                  <label
                    htmlFor="contact-session-type"
                    className={floatingLabelClass(Boolean(formData.sessionType))}
                  >
                    What type of session are you looking for?
                  </label>
                </div>




              <div className="relative">
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  placeholder=" "
                  rows={4}
                  value={formData.message}
                  onChange={handleInput}
                  className="peer w-full bg-stone-100 px-4 pt-6 pb-3 text-[13px] text-charcoal border-0 focus:outline-none focus:ring-1 focus:ring-green-dark resize-none"
                />
                <label
                  htmlFor="contact-message"
                  className={floatingTextAreaLabelClass(Boolean(formData.message))}
                >
                  Message
                </label>
              </div>

              <div className="absolute -left-[9999px]" aria-hidden="true">
                <label htmlFor="contact-website">Website</label>
                <input
                  id="contact-website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.website}
                  onChange={handleInput}
                />
              </div>

              <button
                type="submit"
                disabled={formStatus === "sending"}
                className="bg-green-dark text-white text-[11px] tracking-[0.2em] uppercase px-8 py-3.5 hover:opacity-90 transition-opacity disabled:opacity-60"
              >
                {formStatus === "sending" ? "Sending..." : "Send Message"}
              </button>
              <p role="status" aria-live="polite" className="text-[13px] min-h-5">
                {formStatus === "sent" && (
                  <span className="text-green-dark">Thank you! Your message has been sent. We'll be in touch soon.</span>
                )}
                {formStatus === "error" && (
                  <span className="text-red-700">Sorry, something went wrong. Please try again or message us on WhatsApp.</span>
                )}
              </p>
            </form>
          </div>
        </div>
      </section>
      )}

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
                <p className="text-white/70 text-[11px] mt-0.5">
                  Wedding Photography &amp; Cinematography
                </p>
              </div>
            </div>
            <p className="text-white/70 text-[12px] leading-relaxed mb-6">
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
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <Icon size={15} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          {/* <div className="flex flex-col gap-2.5">
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
          </div> */}

          {/* Services links */}
          <div className="flex flex-col gap-2.5">
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/70 mb-1">
              Services
            </p>
            {SERVICE_LINKS.map((item) => (
              <a
                key={item}
                href="/services/"
                className="text-[13px] text-white/50 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* SEO links */}
          <div className="flex flex-col gap-2.5">
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/70 mb-1">
              Popular Searches
            </p>
            {SEO_LINKS.map((item) => (
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
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/70 mb-1">
              Get In Touch
            </p>
            <p className="text-[13px] text-white/50">hello@avpstudio.com</p>
            <p className="text-[13px] text-white/50">California, USA</p>
            <a
              href="/contact/"
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
            <nav className="hidden md:flex items-center gap-1 text-[11px] text-white/70 ">
              Website developed by <a
                  key="credit"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.getlogix.com"
                  className="text-[11px] text-white/90 hover:text-white transition-colors"
                >
                  GetLogix Inc.
                </a>
            </nav>
          </div>
        </div>
      </footer>
      <a
        href={WHATSAPP_CHAT_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed right-5 bottom-5 z-50 flex h-13 w-13 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 lg:hidden"
      >
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
          <path d="M16.75 13.96c.25.13.41.2.46.3.06.11.04.61-.21 1.18-.2.56-1.24 1.1-1.7 1.12-.46.02-.47.36-2.96-.73-2.49-1.09-3.99-3.75-4.11-3.92-.12-.17-.96-1.38-.92-2.61.05-1.22.69-1.8.95-2.04.24-.26.51-.29.68-.26h.47c.15 0 .36-.06.55.45l.69 1.87c.06.13.1.28.01.44l-.27.41-.39.42c-.12.12-.26.25-.12.5.12.26.62 1.09 1.32 1.78.91.88 1.71 1.17 1.95 1.3.24.14.39.12.54-.04l.81-.94c.19-.25.35-.19.58-.11l1.67.88M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10c-1.97 0-3.8-.57-5.35-1.55L2 22l1.55-4.65A9.969 9.969 0 0 1 2 12 10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8c0 1.72.54 3.31 1.46 4.61L4.5 19.5l2.89-.96A7.95 7.95 0 0 0 12 20a8 8 0 0 0 8-8 8 8 0 0 0-8-8z" />
        </svg>
      </a>
    </div>
  );
}
