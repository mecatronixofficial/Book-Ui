"use client";

import { useState } from "react";
import { openWhatsAppWithMessage, WHATSAPP_NUMBER } from "@/lib/whatsapp";
import Reveal from "./Reveal";
import SpineDivider from "./SpineDivider";

const details = [
  { label: "Business", value: "Bookmark & Bind" },
  { label: "Phone", value: "+91 XXXXX XXXXX" },
  { label: "WhatsApp", value: `+${WHATSAPP_NUMBER}` },
  { label: "Email", value: "hello@bookmarkandbind.example" },
  { label: "Address", value: "12 Reading Lane, Book Town, India" },
  { label: "Working Hours", value: "Mon – Sat, 10:00 AM – 7:00 PM" },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    topic: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const lines = [
      "Hello,",
      "",
      `Name: ${form.name || "-"}`,
      `Phone: ${form.phone || "-"}`,
      `Interested Topic: ${form.topic || "-"}`,
      "",
      "Message:",
      form.message || "-",
    ];

    openWhatsAppWithMessage(lines.join("\n"));
  };

  return (
    <section id="contact" className="bg-sandal-card/50">
      <SpineDivider />
      <div className="mx-auto max-w-8xl px-5 py-14 sm:px-8 lg:py-20">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-gold-dark">
              Contact
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-brown-deep sm:text-4xl">
              Let&apos;s Find Your Next Book
            </h2>
            <p className="mt-4 text-base leading-relaxed text-brown-soft">
              Reach out directly, or fill the short form below — it opens
              WhatsApp with your message ready to send.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-14">
          <Reveal className="lg:col-span-2">
            <div className="rounded-2xl border border-sandal-line bg-sandal p-7 shadow-card">
              <dl className="space-y-5">
                {details.map((d) => (
                  <div key={d.label}>
                    <dt className="text-xs font-medium uppercase tracking-[0.14em] text-gold-dark">
                      {d.label}
                    </dt>
                    <dd className="mt-1 font-body text-base text-brown-deep">
                      {d.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-sandal-line bg-sandal p-7 shadow-card"
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-medium text-brown-deep"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full rounded-xl border border-sandal-line bg-sandal-card px-4 py-3 text-sm text-brown-deep placeholder:text-brown-soft/60 focus:border-gold focus:outline-none"
                  />
                </div>
                <div className="sm:col-span-1">
                  <label
                    htmlFor="phone"
                    className="mb-1.5 block text-sm font-medium text-brown-deep"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="98765 43210"
                    className="w-full rounded-xl border border-sandal-line bg-sandal-card px-4 py-3 text-sm text-brown-deep placeholder:text-brown-soft/60 focus:border-gold focus:outline-none"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="topic"
                    className="mb-1.5 block text-sm font-medium text-brown-deep"
                  >
                    Interested Book / Topic
                  </label>
                  <input
                    id="topic"
                    name="topic"
                    type="text"
                    value={form.topic}
                    onChange={handleChange}
                    placeholder="e.g. Children's Books"
                    className="w-full rounded-xl border border-sandal-line bg-sandal-card px-4 py-3 text-sm text-brown-deep placeholder:text-brown-soft/60 focus:border-gold focus:outline-none"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium text-brown-deep"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us what you're looking for..."
                    className="w-full resize-none rounded-xl border border-sandal-line bg-sandal-card px-4 py-3 text-sm text-brown-deep placeholder:text-brown-soft/60 focus:border-gold focus:outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-medium text-brown-deep shadow-card transition-transform hover:-translate-y-0.5 hover:bg-gold-dark sm:w-auto"
              >
                Send via WhatsApp
              </button>
              <p className="mt-3 text-xs text-brown-soft">
                This form doesn&apos;t store your details anywhere — it only
                opens WhatsApp with your message pre-filled.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
