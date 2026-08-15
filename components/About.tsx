"use client";

import Image from "next/image";
import { openWhatsApp } from "@/lib/whatsapp";
import Reveal from "./Reveal";
import SpineDivider from "./SpineDivider";

const points = [
  "Guidance across many types and genres of books",
  "Clear, practical book-related information",
  "Personalised recommendations based on your interest",
  "Support for educational and academic resources",
  "Help with special or hard-to-find book enquiries",
  "Direct, human support through WhatsApp",
];

export default function About() {
  return (
    <section id="about" className="bg-sandal">
      <SpineDivider />
      <div className="mx-auto max-w-8xl px-5 py-14 sm:px-8 lg:py-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="page-corner relative overflow-hidden rounded-3xl border border-sandal-line shadow-card">
              <Image
                src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1100&auto=format&fit=crop"
                alt="Rows of bookshelves inside a quiet library"
                width={640}
                height={620}
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="h-[320px] w-full object-cover sm:h-[400px] lg:h-[460px]"
              />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-gold-dark">
              About Us
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-brown-deep sm:text-4xl">
              A Quiet Corner for Book-Related Guidance
            </h2>
            <p className="mt-5 text-base leading-relaxed text-brown-soft">
              We built this space for readers, students, parents and
              institutions who want dependable, book-related information
              without wading through a marketplace. Think of it as a
              knowledgeable friend at the library desk — someone you can ask
              about any book, topic or reading need, and get pointed in the
              right direction.
            </p>
            <p className="mt-4 text-base leading-relaxed text-brown-soft">
              Whether you&apos;re choosing a textbook, preparing for a
              competitive exam, picking a first story for your child, or
              simply looking for what to read next, we&apos;re here to guide
              you — one conversation at a time, on WhatsApp.
            </p>

            <ul className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-2.5 text-sm text-brown-soft"
                >
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
                  {point}
                </li>
              ))}
            </ul>

            <button
              onClick={() => openWhatsApp("your books")}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-brown px-6 py-3.5 text-sm font-medium text-sandal shadow-card transition-transform hover:-translate-y-0.5"
            >
              Contact on WhatsApp
              <span>&rarr;</span>
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
