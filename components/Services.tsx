import { services } from "@/data/services";
import ServiceCard from "./ServiceCard";
import Reveal from "./Reveal";
import SpineDivider from "./SpineDivider";

export default function Services() {
  return (
    <section id="services" className="bg-sandal-card/50">
      <SpineDivider />
      <div className="mx-auto max-w-8xl px-5 py-14 sm:px-8 lg:py-20">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-gold-dark">
              Book Services
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-brown-deep sm:text-4xl">
              Guidance for Every Kind of Reader
            </h2>
            <p className="mt-4 text-base leading-relaxed text-brown-soft">
              From a single recommendation to bulk requirements for an
              institution — pick a service below and send us your question
              directly on WhatsApp.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 60}>
              <ServiceCard {...service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
