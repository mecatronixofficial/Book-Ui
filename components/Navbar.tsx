"use client";

import { useEffect, useState } from "react";
import { openWhatsApp } from "@/lib/whatsapp";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Book Services", href: "#services" },
  { label: "Book Topics", href: "#topics" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setOpen(false);
    const target = document.querySelector(href);
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

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
          onClick={(e) => handleNavClick(e, "#home")}
          className="font-display text-xl sm:text-2xl font-semibold tracking-wide text-sandal"
        >
          Bookmark <span className="text-gold">&amp;</span> Bind
        </a>

        <ul className="hidden md:flex items-center gap-8 font-body text-[15px]">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative pb-1 transition-colors hover:text-gold ${
                  active === link.href ? "text-gold" : "text-sandal/90"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-[2px] bg-gold transition-all duration-300 ${
                    active === link.href ? "w-full" : "w-0"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => openWhatsApp("your books")}
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-medium text-brown-deep shadow-card transition-transform hover:-translate-y-0.5 hover:bg-gold-dark"
        >
          Enquire on WhatsApp
        </button>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex flex-col justify-center gap-1.5 p-2"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span
            className={`block h-0.5 w-6 bg-sandal transition-transform ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-sandal transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-sandal transition-transform ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-5 pb-5 font-body">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`block rounded-lg px-3 py-3 text-base transition-colors ${
                  active === link.href
                    ? "bg-brown-deep text-gold"
                    : "text-sandal/90 hover:bg-brown-deep"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <button
              onClick={() => {
                setOpen(false);
                openWhatsApp("your books");
              }}
              className="w-full rounded-full bg-gold px-5 py-3 text-sm font-medium text-brown-deep shadow-card"
            >
              Enquire on WhatsApp
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
