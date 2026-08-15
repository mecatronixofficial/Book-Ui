"use client";

import Image from "next/image";
import { openWhatsApp } from "@/lib/whatsapp";
import { featuredTopics } from "@/data/featuredTopics";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-4 sm:pt-10">
      {/* Ambient page-corner shapes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-40 -left-32 h-72 w-72 rounded-full bg-brown/5 blur-3xl"
      />

      <div className="mx-auto grid max-w-8xl items-center gap-10 px-5 py-10 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:py-20">
        <Reveal>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-sandal-card px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-brown-soft">
            A digital library, not a store
          </p>
          <h1 className="font-display text-4xl font-semibold leading-[1.08] text-brown-deep sm:text-5xl lg:text-[3.4rem]">
            Discover Knowledge{" "}
            <span className="italic text-gold-dark">Through Books</span>
          </h1>
          <p className="mt-6 max-w-xl font-body text-base leading-relaxed text-brown-soft sm:text-lg">
            Explore useful book topics, reading resources and recommendations
            created for readers, students and knowledge seekers. Every
            enquiry goes straight to a real conversation on WhatsApp.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#topics"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#topics")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group inline-flex items-center gap-2 rounded-full bg-brown px-6 py-3.5 text-sm font-medium text-sandal shadow-card transition-transform hover:-translate-y-0.5"
            >
              Explore Topics
              <span className="transition-transform group-hover:translate-x-1">
                &rarr;
              </span>
            </a>
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
              <p className="font-display text-2xl font-semibold text-brown-deep">10+</p>
              <p>Book categories</p>
            </div>
            <div className="h-8 w-px bg-sandal-line" />
            <div>
              <p className="font-display text-2xl font-semibold text-brown-deep">6</p>
              <p>Guidance services</p>
            </div>
            <div className="h-8 w-px bg-sandal-line" />
            <div>
              <p className="font-display text-2xl font-semibold text-brown-deep">1:1</p>
              <p>WhatsApp support</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="page-corner overflow-hidden rounded-3xl border border-sandal-line bg-sandal-card shadow-card-hover">
              <Image
                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1200&auto=format&fit=crop"
                alt="Stack of open books resting on a wooden table"
                width={640}
                height={760}
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="h-[340px] w-full object-cover sm:h-[440px] lg:h-[520px]"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-sandal-line bg-sandal px-5 py-4 shadow-card sm:block">
              <p className="font-display text-lg font-semibold text-brown-deep">
                &ldquo;A good book is a friend.&rdquo;
              </p>
              <p className="mt-1 text-xs uppercase tracking-wide text-brown-soft">
                Reading, for its own sake
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="mx-auto max-w-8xl px-5 pb-16 sm:px-8 lg:pb-24">
        <Reveal>
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-gold-dark">
                Featured
              </p>
              <h2 className="font-display text-2xl font-semibold text-brown-deep sm:text-3xl">
                Popular Book Topics
              </h2>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredTopics.map((topic, i) => (
            <Reveal key={topic.title} delay={i * 70}>
              <article className="page-corner group flex h-full flex-col overflow-hidden rounded-2xl border border-sandal-line bg-sandal-card shadow-card transition-shadow hover:shadow-card-hover">
                <div className="relative h-44 w-full overflow-hidden">
                  <Image
                    src={topic.image}
                    alt={`${topic.title} book collection`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-lg font-semibold text-brown-deep">
                    {topic.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-brown-soft">
                    {topic.description}
                  </p>
                  <button
                    onClick={() => openWhatsApp(topic.title)}
                    className="mt-4 inline-flex w-fit items-center gap-2 rounded-full border border-gold px-4 py-2 text-xs font-medium text-brown-deep transition-colors hover:bg-gold hover:text-brown-deep"
                  >
                    WhatsApp Enquiry
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
