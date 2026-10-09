import { Plus } from "lucide-react";
import heroImage from "@/imports/what-we-are.jpg?w=1200&format=webp";
import heroSrcSet from "@/imports/what-we-are.jpg?w=600;1200&format=webp&as=srcset";
import storyImage from "@/imports/contact-us.jpg?w=1200&format=webp";
import storySrcSet from "@/imports/contact-us.jpg?w=600;1200&format=webp&as=srcset";

const HEADING_FONT = { fontFamily: "'Playfair Display', serif" };

const SECTION_LINKS = [
  { label: "Our Story", href: "#our-story" },
  { label: "Our Approach", href: "#our-approach" },
  { label: "What to Expect", href: "#what-to-expect" },
  { label: "FAQ", href: "#faq" },
];

const HIGHLIGHTS = [
  { title: "Photo & Film", desc: "One team, one vision" },
  { title: "California Based", desc: "Available worldwide" },
  { title: "Every Celebration", desc: "Weddings, engagements & events" },
  { title: "Personal Approach", desc: "Tailored to your story" },
];

const APPROACH = [
  {
    title: "Authentic Moments",
    desc: "We let real moments unfold naturally — the laughter, the tears and the quiet glances in between.",
  },
  {
    title: "Gentle Direction",
    desc: "When posing is needed, we guide you into natural, flattering positions so you never feel stiff or unsure.",
  },
  {
    title: "Cinematic Storytelling",
    desc: "Light, composition and sound crafted with intention, so your film and photos bring the day back to life.",
  },
  {
    title: "Timeless Editing",
    desc: "A classic, true-to-life finish on every image that will feel just as beautiful decades from now.",
  },
];

const PROCESS = [
  {
    title: "Say Hello",
    desc: "Share your date and vision through our contact form or WhatsApp.",
  },
  {
    title: "Let's Connect",
    desc: "We'll talk through your plans, answer your questions and shape a package that fits.",
  },
  {
    title: "Plan Together",
    desc: "From timelines to must-have shots and locations, we help you prepare with confidence.",
  },
  {
    title: "Your Celebration",
    desc: "We capture every moment with a calm, unobtrusive presence throughout your day.",
  },
  {
    title: "Relive It",
    desc: "Receive your beautifully edited gallery and cinematic film to treasure forever.",
  },
];

const FAQS = [
  {
    q: "Where are you based and do you travel?",
    a: "We're based in California and photograph weddings and events throughout the state. We also love travelling for destination weddings — just tell us where your story is taking place.",
  },
  {
    q: "Do you offer both photography and videography?",
    a: "Yes. Choose photography, cinematography or both together, so one team captures your day with a single, consistent vision.",
  },
  {
    q: "How far in advance should we book?",
    a: "Popular dates fill up early, so we recommend reaching out as soon as you have your date and venue. If your date is close, contact us anyway — we'll do our best to make it work.",
  },
  {
    q: "Do you cover multi-day celebrations?",
    a: "Yes. We're happy to cover multi-day weddings and will plan our coverage around your events, schedule and traditions.",
  },
  {
    q: "When will we receive our photos and film?",
    a: "Delivery timelines depend on your package and are confirmed when you book. We keep you updated throughout, so you always know what to expect.",
  },
  {
    q: "How do we get started?",
    a: "Send us a message through our contact form or WhatsApp with your date, location and a little about your plans. Our team will get back to you as soon as possible.",
  },
];

function SectionLabel({ children, center = false }: { children: string; center?: boolean }) {
  return (
    <>
      <p
        className={`text-[13px] md:text-[15px] uppercase tracking-[0.28em] text-stone-900 mb-4 ${center ? "text-center" : ""}`}
      >
        {children}
      </p>
      <div className={`w-12 h-1 bg-green-dark mb-8 ${center ? "mx-auto" : ""}`} />
    </>
  );
}

export function AboutIntro() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────── */}
      <section className="pt-36 md:pt-40 pb-16 md:pb-20 bg-l-cream">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <SectionLabel>About Us</SectionLabel>
            <h1
              className="text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] font-medium text-charcoal mb-6"
              style={HEADING_FONT}
            >
              Meet Anmol Video Productions
            </h1>
            <p className="text-stone-600 text-[15px] leading-relaxed mb-8 max-w-md">
              A California-based wedding photography and cinematography team
              capturing authentic moments with heart, artistry and a cinematic
              touch.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href="/portfolio/"
                className="inline-block bg-green-dark text-white text-[11px] tracking-[0.2em] uppercase px-8 py-4 hover:opacity-90 transition-opacity"
              >
                View Portfolio
              </a>
              <a
                href="/contact/"
                className="inline-block border border-green-dark text-green-dark text-[11px] tracking-[0.2em] uppercase px-8 py-4 hover:bg-green-dark hover:text-white transition-colors"
              >
                Get in Touch
              </a>
            </div>
            <nav aria-label="On this page" className="flex flex-wrap gap-x-6 gap-y-2">
              {SECTION_LINKS.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  className="text-[12px] uppercase tracking-[0.18em] text-stone-600 border-b border-transparent hover:text-green-dark hover:border-green-dark transition-colors"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
          <div>
            <img
              src={heroImage}
              srcSet={heroSrcSet}
              sizes="(min-width: 768px) 50vw, 100vw"
              alt="Groom portrait captured by Anmol Video Productions"
              className="w-full h-[420px] md:h-[600px] object-cover"
              {...{ fetchpriority: "high" }}
            />
          </div>
        </div>
      </section>

      {/* ── OUR STORY ────────────────────────────────── */}
      <section id="our-story" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            <img
              src={storyImage}
              srcSet={storySrcSet}
              sizes="(min-width: 768px) 50vw, 100vw"
              alt="Wedding couple photographed by Anmol Video Productions"
              loading="lazy"
              decoding="async"
              className="w-full h-[420px] md:h-[620px] object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <SectionLabel>Our Story</SectionLabel>
            <h2
              className="text-3xl md:text-[2.5rem] leading-[1.2] font-medium text-charcoal mb-8"
              style={HEADING_FONT}
            >
              Every love story deserves to be told beautifully.
            </h2>
            <div className="space-y-5 text-stone-600 text-[15px] leading-relaxed max-w-lg">
              <p>
                Anmol Video Productions began with a simple belief: the moments
                that matter most should be remembered exactly as they felt.
                Based in California, we're a team of photographers and
                filmmakers who blend documentary storytelling with a cinematic
                eye.
              </p>
              <p>
                From intimate engagement sessions to grand celebrations and
                destination weddings, no two stories are alike. That's why we
                take the time to understand your traditions, your families and
                the little details that make your day yours.
              </p>
              <p>
                With photography and film under one roof, you get one team, one
                vision and a seamless experience — so you can stay present
                while we take care of the rest.
              </p>
            </div>
            <p className="mt-8 text-[18px] italic text-charcoal" style={HEADING_FONT}>
              — The Anmol Video Productions Team
            </p>
          </div>
        </div>
      </section>

      {/* ── HIGHLIGHTS ───────────────────────────────── */}
      <section className="bg-green-dark text-white">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {HIGHLIGHTS.map(({ title, desc }) => (
            <div key={title}>
              <p className="text-xl md:text-2xl font-medium mb-2" style={HEADING_FONT}>
                {title}
              </p>
              <p className="text-[12px] uppercase tracking-[0.18em] text-white/80">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── OUR APPROACH ─────────────────────────────── */}
      <section id="our-approach" className="py-20 bg-cream scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionLabel center>Our Approach</SectionLabel>
          <h2
            className="text-3xl md:text-[2.5rem] leading-[1.2] font-medium text-charcoal text-center mb-14 max-w-2xl mx-auto"
            style={HEADING_FONT}
          >
            Real moments, gently guided and beautifully crafted.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {APPROACH.map(({ title, desc }, i) => (
              <div key={title} className="bg-white p-8 border-t-2 border-green-dark">
                <p className="text-[13px] tracking-[0.2em] text-green-dark mb-4">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="text-xl font-medium text-charcoal mb-3" style={HEADING_FONT}>
                  {title}
                </h3>
                <p className="text-stone-600 text-[14px] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT TO EXPECT ───────────────────────────── */}
      <section id="what-to-expect" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionLabel center>What to Expect</SectionLabel>
          <h2
            className="text-3xl md:text-[2.5rem] leading-[1.2] font-medium text-charcoal text-center mb-14"
            style={HEADING_FONT}
          >
            Your journey with us
          </h2>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6">
            {PROCESS.map(({ title, desc }, i) => (
              <li key={title} className="relative text-center">
                {i < PROCESS.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="hidden lg:block absolute top-7 left-[calc(50%+2.25rem)] right-[calc(-50%+2.25rem)] h-px bg-stone-300"
                  />
                )}
                <span
                  className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-green-dark text-green-dark text-lg"
                  style={HEADING_FONT}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-medium text-charcoal mb-2" style={HEADING_FONT}>
                  {title}
                </h3>
                <p className="text-stone-600 text-[14px] leading-relaxed max-w-[240px] mx-auto">
                  {desc}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}

export function AboutOutro() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return (
    <>
      {/* ── FAQ ──────────────────────────────────────── */}
      <section id="faq" className="py-20 bg-l-cream scroll-mt-20">
        <div className="max-w-3xl mx-auto px-6">
          <SectionLabel center>FAQ</SectionLabel>
          <h2
            className="text-3xl md:text-[2.5rem] leading-[1.2] font-medium text-charcoal text-center mb-12"
            style={HEADING_FONT}
          >
            Questions couples often ask
          </h2>
          <div className="divide-y divide-stone-300 border-y border-stone-300">
            {FAQS.map(({ q, a }) => (
              <details key={q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-[16px] md:text-[17px] font-medium text-charcoal [&::-webkit-details-marker]:hidden">
                  <span style={HEADING_FONT}>{q}</span>
                  <Plus
                    size={18}
                    strokeWidth={1.5}
                    aria-hidden="true"
                    className="shrink-0 text-green-dark transition-transform duration-200 group-open:rotate-45"
                  />
                </summary>
                <p className="mt-4 text-stone-600 text-[14px] leading-relaxed pr-10">{a}</p>
              </details>
            ))}
          </div>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </section>

      {/* ── CTA ──────────────────────────────────────── */}
      <section className="bg-green-dark text-white">
        <div className="max-w-3xl mx-auto px-6 py-20 text-center">
          <p className="text-[13px] md:text-[15px] uppercase tracking-[0.28em] text-white/80 mb-4">
            Let's Tell Your Story
          </p>
          <div className="w-12 h-1 bg-white/80 mx-auto mb-8" />
          <h2 className="text-3xl md:text-[2.5rem] leading-[1.2] font-medium mb-6" style={HEADING_FONT}>
            Ready to start planning your day?
          </h2>
          <p className="text-white/80 text-[15px] leading-relaxed mb-10">
            Tell us about your celebration and our team will reach out as soon
            as possible.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="/contact/"
              className="inline-block bg-white text-green-dark text-[11px] tracking-[0.2em] uppercase px-8 py-4 hover:opacity-90 transition-opacity"
            >
              Contact Us
            </a>
            <a
              href="/portfolio/"
              className="inline-block border border-white text-white text-[11px] tracking-[0.2em] uppercase px-8 py-4 hover:bg-white hover:text-green-dark transition-colors"
            >
              View Portfolio
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
