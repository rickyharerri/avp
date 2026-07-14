# practice-app-avp — Project Instructions

> Anmol Video Production, a luxury video production business site (Anmol Video Production), minimalist/editorial, high-end audience.

## Overview

A consumer-facing Video production web based application that is Minimalist, clean, future prrof, search engine ready, fast and reliable. Users browse photography and video production work of Anmol Video Production. Can book or send inquiries without creating an account — booking is completed with contact details. No login or persistent user profiles. Website should have core basic pages and should be an SPA. Pages like Home, Blog, Portfolio, Contact us, Testimonials, services etc.

A fast, SEO-optimized static website for a California US Based Video Production business. The goal is lead generation (calls, Inquiries) and local Google ranking for services + state keyword combinations.

No backend. No database. Phase 1 is purely static HTML/CSS/JS.
Hosted on Cloudflare and Code should be on Github and deploy on cloudflare with Github actions, for free.
Form submissions go to Formspree (third-party) or similar.
Google Analytics 4.


## Design Examples

https://recruit.pearl-idea.co.jp/
https://agentura.framer.website/

## Core Concept

- Visitors browse available services.
- Visitors view recent work and details.
- Visitors book/send inquiry by providing contact info at contact us form.
- A confirmation is shown and sent (e.g. via email) after booking.

## Key Decisions

| Area | Decision | Status |
|------|----------|--------|
| Product type | Portfolio / booking | Confirmed |
| User accounts | None — anonymous browsing & booking | Confirmed |
| Tech stack | Next.js (full-stack) — | Confirmed |
| Newsletter | TBD | Open |
| Hosting | Cloudflare | Confirmed |

## Recommended Stack (proposed)

- **Framework:** Next.js 14 (App Router) with output: 'export'
- **Language:** TypeScript.
- **Styling:** Tailwind CSS.
- **Forms:** Formspree (https://formspree.io/f/<id>)
- **Analytics:** GA4 via `next/script` (loaded only if `NEXT_PUBLIC_GA_ID` is set)
- **SEO:** JSON-LD (`LocalBusiness`, `Service`, `FAQPage`, `BreadcrumbList`), auto `sitemap.xml` + `robots.txt`, per-page metadata
- **Hosting:** Cloudflare
- **SVN:** Github
- **CI/CD:** Github Actions


## Pages / Routes (draft)

- `/` — home / featured services, client testimonials, selected work, contact us form, instagram feed
- `/about-us` - About us
- `/project` - Projects
- `/project/[id]` - Single Project detail
- `/blog` — Blog listing
- `/blog/[id]` — Blog listing detail page
- `/services` — services
- `/contact us` — Inquiry form
- `/testimonials` - Client appreciation 


## Non-Functional Requirements

- Mobile-first, responsive design.
- Fast initial load.
- Accessible (keyboard nav, alt text, semantic HTML).
- No PII stored beyond what's needed for a booking; handle contact data carefully.

## Open Questions

- [ ] Is this physical goods, services, rentals, or event/appointment booking? : Services, Event booking
- [ ] Real payments at checkout, or reservation/inquiry only? : reservation/inquiry only

## Conventions

- Keep this file updated as decisions are made; move items from "Open Questions" into "Key Decisions".

## Target Audiece

Target only Rich audience and present big picture and huge events only