"use client";

import type { MouseEvent, ReactNode } from "react";
import { openWhatsApp } from "@/lib/whatsapp";

type WhatsAppPageProps = {
  children: ReactNode;
};

export default function WhatsAppPage({ children }: WhatsAppPageProps) {
  const handlePageClick = (event: MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;

    // Buttons and links already have their own WhatsApp action. Let those
    // handlers run without opening a duplicate tab.
    if (target.closest("button, a")) return;

    openWhatsApp("your books");
  };

  return (
    <div onClick={handlePageClick} className="min-h-screen cursor-pointer">
      {children}
    </div>
  );
}
