# Bookmark & Bind — Book Information Website

A single-page, Next.js + TypeScript + Tailwind CSS site for presenting
book-related information, services and topics. Not an e-commerce site —
every enquiry routes to WhatsApp.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Before you launch

1. **Set your WhatsApp number.** Edit `lib/whatsapp.ts` and replace
   `WHATSAPP_NUMBER` with your real number in international format,
   digits only (e.g. `919876543210`).
2. **Update contact details.** Edit the `details` array in
   `components/Contact.tsx` and the info block in `components/Footer.tsx`
   (phone, email, address, working hours).
3. **Swap in your own images.** All images currently point to Unsplash
   URLs (`data/topics.ts`, `data/services.ts`, `data/featuredTopics.ts`,
   and the hero/about images) so the site works out of the box. For
   production, replace these with licensed or your own photography —
   drop files in `public/images/` and update the `image` paths.
4. **Review copy.** Headings, descriptions and the About section copy are
   starting points — adjust to match your actual services.

## Project structure

```text
app/
  layout.tsx        Fonts, metadata, global shell
  page.tsx           Assembles all sections for the single page
  globals.css         Base styles, reveal/spine/ribbon utilities
components/
  Navbar.tsx          Sticky nav, smooth scroll, mobile menu
  Hero.tsx            Hero + featured topics grid
  About.tsx           Split image/content About section
  Services.tsx        Book Services grid (uses ServiceCard)
  ServiceCard.tsx
  BookTopics.tsx       Book Topics / Collections grid (uses TopicCard)
  TopicCard.tsx
  Contact.tsx          Business info + WhatsApp-redirecting form
  Footer.tsx
  Reveal.tsx           Fade-up-on-scroll wrapper
  ReadingRibbon.tsx    Signature scroll-progress bookmark ribbon
  SpineDivider.tsx     Book-spine section divider
data/
  featuredTopics.ts
  topics.ts
  services.ts
lib/
  whatsapp.ts          Central WhatsApp helper — all enquiries go through this
```

## Design tokens (60/30/10)

- **60% — Sandal:** `#F8F1E7` background, `#F3E5CF` cards
- **30% — Brown:** `#4A3428` navbar / footer / headings, `#5C4033` supporting text
- **10% — Gold:** `#C8894A` / `#B87333` buttons, active states, highlights

Fonts: Fraunces (display/serif headings) + Inter (body), loaded via
`next/font/google` in `app/layout.tsx`.
