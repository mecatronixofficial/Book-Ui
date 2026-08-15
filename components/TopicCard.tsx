"use client";

import Image from "next/image";
import { openWhatsApp } from "@/lib/whatsapp";
import type { Topic } from "@/data/topics";

export default function TopicCard({
  title,
  description,
  image,
  ctaLabel,
}: Topic) {
  return (
    <article className="page-corner group flex h-full flex-col overflow-hidden rounded-2xl border border-sandal-line bg-sandal-card shadow-card transition-shadow hover:shadow-card-hover">
      <button
        onClick={() => openWhatsApp(title)}
        className="relative block h-40 w-full overflow-hidden text-left"
        aria-label={`Ask about ${title} books on WhatsApp`}
      >
        <Image
          src={image}
          alt={`${title} books`}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </button>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-semibold text-brown-deep">
          {title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-brown-soft">
          {description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2.5">
          <button
            onClick={() => openWhatsApp(title)}
            className="inline-flex items-center gap-1.5 rounded-full bg-brown px-4 py-2 text-xs font-medium text-sandal transition-transform hover:-translate-y-0.5"
          >
            Know More
          </button>
          <button
            onClick={() => openWhatsApp(title)}
            className="inline-flex items-center gap-1.5 rounded-full border border-gold px-4 py-2 text-xs font-medium text-brown-deep transition-colors hover:bg-gold"
          >
            {ctaLabel}
          </button>
        </div>
      </div>
    </article>
  );
}
