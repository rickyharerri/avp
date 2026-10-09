import heroImage from "@/imports/hero-image.jpg?w=1920&format=webp";
import heroSrcSet from "@/imports/hero-image.jpg?w=768;1280;1920&format=webp&as=srcset";

const HEADING_FONT = { fontFamily: "'Playfair Display', serif" };

type ComingSoonContent = {
  label: string;
  title: string;
  message: string;
  teasers: string[];
};

const PORTFOLIO: ComingSoonContent = {
  label: "Portfolio",
  title: "Our gallery of love stories is being curated",
  message:
    "We're hand-picking our favourite weddings, engagements and cinematic films to share with you. Every story deserves to be shown at its best — and we can't wait for you to see them.",
  teasers: ["Full wedding galleries", "Cinematic highlight films", "Engagement & pre-wedding stories"],
};

const SERVICES: ComingSoonContent = {
  label: "Services",
  title: "Our services & collections are on their way",
  message:
    "We're putting the finishing touches on detailed guides to our photography, cinematography and destination wedding collections. Until then, reach out and we'll share options tailored to your celebration.",
  teasers: ["Wedding photography & films", "Engagement sessions", "Destination & multi-day coverage"],
};

const BLOG: ComingSoonContent = {
  label: "Blog",
  title: "Stories from behind the lens are coming soon",
  message:
    "Real weddings, planning tips and behind-the-scenes moments from our team — a journal for couples dreaming up their perfect day. Our first stories are being written now.",
  teasers: ["Real wedding features", "Planning tips & timelines", "Behind-the-scenes moments"],
};

const CONTENT: Record<string, ComingSoonContent> = {
  portfolio: PORTFOLIO,
  "portfolio/portfolio-1": PORTFOLIO,
  "portfolio/portfolio-2": PORTFOLIO,
  services: SERVICES,
  "services/service-1": SERVICES,
  "services/service-2": SERVICES,
  blog: BLOG,
};

export function isComingSoon(page: string) {
  return page in CONTENT;
}

export function ComingSoon({ page, whatsappLink }: { page: string; whatsappLink: string }) {
  const { label, title, message, teasers } = CONTENT[page];

  return (
    <section className="relative overflow-hidden min-h-[calc(100vh-4rem)] flex items-center pt-36 pb-24">
      <img
        src={heroImage}
        srcSet={heroSrcSet}
        sizes="100vw"
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center"
        {...{ fetchpriority: "high" }}
      />
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(238, 234, 226, 0.92)" }} />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <p className="text-[13px] md:text-[15px] uppercase tracking-[0.28em] text-stone-900 mb-4">
          {label} &middot; Coming Soon
        </p>
        <div className="w-12 h-1 bg-green-dark mx-auto mb-8" />
        <h1
          className="text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.15] font-medium text-charcoal mb-6"
          style={HEADING_FONT}
        >
          {title}
        </h1>
        <p className="text-stone-700 text-[15px] md:text-[16px] leading-relaxed max-w-2xl mx-auto mb-10">
          {message}
        </p>

        <p className="text-[11px] uppercase tracking-[0.25em] text-stone-600 mb-4">
          What to look forward to
        </p>
        <ul className="flex flex-wrap justify-center gap-3 mb-12">
          {teasers.map((item) => (
            <li
              key={item}
              className="bg-white/80 border border-stone-300 px-4 py-2 text-[13px] text-charcoal"
            >
              {item}
            </li>
          ))}
        </ul>

        <p className="text-[18px] italic text-charcoal mb-6" style={HEADING_FONT}>
          Can't wait? We'd love to hear about your story.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <a
            href="/contact/"
            className="inline-block bg-green-dark text-white text-[11px] tracking-[0.2em] uppercase px-8 py-4 hover:opacity-90 transition-opacity"
          >
            Contact Us
          </a>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-green-dark text-green-dark text-[11px] tracking-[0.2em] uppercase px-8 py-4 hover:bg-green-dark hover:text-white transition-colors"
          >
            Chat on WhatsApp
          </a>
        </div>
        <a
          href="/"
          className="text-[12px] uppercase tracking-[0.18em] text-stone-600 border-b border-transparent hover:text-green-dark hover:border-green-dark transition-colors"
        >
          &larr; Back to Home
        </a>
      </div>
    </section>
  );
}
