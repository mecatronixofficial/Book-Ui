"use client";

import Image from "next/image";
import { openWhatsApp } from "@/lib/whatsapp";
import type { Service } from "@/data/services";

export default function ServiceCard({ title, description, image }: Service) {
  return (
    <article
      onClick={() => openWhatsApp(title)}
      className="page-corner group flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-sandal-line bg-sandal shadow-card transition-shadow hover:shadow-card-hover"
    >
      <div className="relative h-40 w-full overflow-hidden">
        <Image
          src={image}
          alt={`${title} illustration`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-semibold text-brown-deep">
          {title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-brown-soft">
          {description}
        </p>
        <button
          onClick={(e) => {
            e.stopPropagation();
            openWhatsApp(title);
          }}
          className="mt-4 inline-flex w-fit items-center gap-2 rounded-full border border-gold px-4 py-2 text-xs font-medium text-brown-deep transition-colors hover:bg-gold"
        >
          Ask on WhatsApp
        </button>
      </div>
    </article>
  );
}
