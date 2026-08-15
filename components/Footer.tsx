"use client";

import { openWhatsApp } from "@/lib/whatsapp";
import { topics } from "@/data/topics";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Book Services", href: "#services" },
  { label: "Book Topics", href: "#topics" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "YouTube", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-brown-deep text-sandal/85">
      <div className="mx-auto max-w-8xl px-5 py-14 sm:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-xl font-semibold text-sandal">
              Bookmark <span className="text-gold">&amp;</span> Bind
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-sandal/70">
              A book-related information hub for readers, students and
              institutions — no cart, no checkout, just guidance and a
              WhatsApp conversation away.
            </p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-gold-light">
              Navigate
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sandal/75 hover:text-gold">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-gold-light">
              Book Topics
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {topics.slice(0, 5).map((t) => (
                <li key={t.title}>
                  <button
                    onClick={() => openWhatsApp(t.title)}
                    className="text-sandal/75 hover:text-gold"
                  >
                    {t.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-gold-light">
              Contact
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-sandal/75">
              <li>hello@bookmarkandbind.example</li>
              <li>+91 XXXXX XXXXX</li>
              <li>12 Reading Lane, Book Town, India</li>
            </ul>
            <button
              onClick={() => openWhatsApp("your books")}
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-xs font-medium text-brown-deep"
            >
              Chat on WhatsApp
            </button>
            <div className="mt-5 flex gap-4 text-xs text-sandal/70">
              {socials.map((s) => (
                <a key={s.label} href={s.href} className="hover:text-gold">
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-sandal/10 pt-6 text-xs text-sandal/60 sm:flex-row">
          <p>&copy; 2026 Bookmark &amp; Bind. All Rights Reserved.</p>
          <p>Informational content only &mdash; not an online store.</p>
        </div>
      </div>
    </footer>
  );
}
