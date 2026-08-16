"use client";

import Image from "next/image";
import { openWhatsApp } from "@/lib/whatsapp";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-4 ">
      {/* Ambient page-corner shapes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-40 -left-32 h-72 w-72 rounded-full bg-brown/5 blur-3xl"
      />

      <div className="mx-auto grid max-w-8xl items-center gap-10 px-5 py-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:py-10">
        <Reveal>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-sandal-card px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-brown-soft">
            A digital library, not a store
          </p>
          <h1 className="font-display text-4xl font-semibold leading-[1.08] text-brown-deep sm:text-5xl lg:text-[3.4rem]">
            Discover Knowledge
          </h1>
          <p className="mt-6 max-w-xl font-body text-base leading-relaxed text-brown-soft sm:text-lg">
            Explore useful book topics, reading resources and recommendations
            created for readers, students and knowledge seekers. Every
            enquiry goes straight to a real conversation on WhatsApp.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={() => openWhatsApp("your books")}
              className="group inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-medium text-brown-deep shadow-card transition-transform hover:-translate-y-0.5 hover:bg-gold-dark"
            >
              Enquire on WhatsApp
              <span className="transition-transform group-hover:translate-x-1">
                &rarr;
              </span>
            </button>
          </div>

          <div className="mt-10 flex items-center gap-6 text-sm text-brown-soft">
            <div>
              <p className="font-display text-2xl font-semibold text-brown-deep">100+</p>
              <p>Categories</p>
            </div>
            <div className="h-8 w-px bg-sandal-line" />
            <div>
              <p className="font-display text-2xl font-semibold text-brown-deep">500+</p>
              <p>Clients</p>
            </div>
            <div className="h-8 w-px bg-sandal-line" />
            <div>
              <p className="font-display text-2xl font-semibold text-brown-deep">24/7</p>
              <p>WhatsApp support</p>
            </div>
          </div>
        </Reveal>

      </div>

      <div className="mx-auto max-w-8xl px-5 pb-5 sm:px-8 lg:pb-10">
        <Reveal>
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-gold-dark">
                Featured
              </p>
              <h2 className="font-display text-2xl font-semibold text-brown-deep sm:text-3xl">
                Popular Book look our Brand
              </h2>
            </div>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="flex flex-col items-center justify-center gap-3 sm:gap-6">
            <button
              type="button"
              onClick={() => openWhatsApp("your books")}
              aria-label="Enquire on WhatsApp about this collection"
              className="page-corner group relative aspect-[16/6] w-full overflow-hidden rounded-2xl border border-sandal-line bg-sandal-card shadow-card "
            >
              <Image
                src="/banners/banner1.jpeg"
                alt="Featured book banner"
                fill
                sizes="100vw"
                className="object-cover "
              />
            </button>
            <button
              type="button"
              onClick={() => openWhatsApp("your books")}
              aria-label="Enquire on WhatsApp about this collection"
              className="page-corner group relative aspect-[7/5] w-full overflow-hidden rounded-2xl border border-sandal-line bg-sandal-card shadow-card "
            >
              <Image
                src="/banners/banner2.jpeg"
                alt="Featured book banner"
                fill
                sizes="100vw"
                className="object-cover "
              />
            </button>
          </div>

          <div className="mt-8 flex justify-center">
            <button
              onClick={() => openWhatsApp("your books")}
              className="group inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-medium text-brown-deep shadow-card transition-transform hover:-translate-y-0.5 hover:bg-gold-dark"
            >
              Enquire on WhatsApp
              <span className="transition-transform group-hover:translate-x-1">
                &rarr;
              </span>
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
