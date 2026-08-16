"use client";

import { useEffect, useState } from "react";
import { openWhatsApp } from "@/lib/whatsapp";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-brown text-sandal transition-shadow duration-300 ${
        scrolled ? "shadow-[0_4px_18px_rgba(58,42,31,0.35)]" : ""
      }`}
    >
      <nav
        className="mx-auto flex max-w-8xl items-center justify-between px-5 py-4 sm:px-8"
        aria-label="Primary"
      >
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            document
              .querySelector("#home")
              ?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          className="font-display text-xl sm:text-2xl font-semibold tracking-wide text-sandal"
        >
          Ricebook <span className="text-gold">&amp;</span> Play
        </a>

        <button
          onClick={() => openWhatsApp("your books")}
          className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-medium text-brown-deep shadow-card transition-transform hover:-translate-y-0.5 hover:bg-gold-dark"
        >
          Enquire on WhatsApp
        </button>
      </nav>
    </header>
  );
}
