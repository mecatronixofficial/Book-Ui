"use client";

import { useEffect, useState } from "react";

/**
 * The site's signature element: a slim ribbon bookmark fixed to the right
 * edge of the viewport. As the visitor scrolls, the ribbon's tab travels
 * down the page — the same way a physical bookmark marks how far you've
 * read through a book. Purely decorative, hidden on small screens where
 * space is tight and it would compete with the thumb.
 */
export default function ReadingRibbon() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? scrollTop / docHeight : 0;
      setProgress(Math.min(1, Math.max(0, pct)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="hidden lg:block fixed right-6 top-24 bottom-10 w-[3px] z-40"
    >
      <div className="relative h-full w-full rounded-full bg-brown/10">
        <div
          className="absolute left-0 top-0 w-full rounded-full bg-gold transition-[height] duration-150 ease-out"
          style={{ height: `${progress * 100}%` }}
        />
        <div
          className="absolute -left-[7px] w-4 h-5 bg-gold shadow-card transition-[top] duration-150 ease-out"
          style={{
            top: `calc(${progress * 100}% - 2px)`,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 78%, 0 100%)",
          }}
        />
      </div>
    </div>
  );
}
