import { topics } from "@/data/topics";
import TopicCard from "./TopicCard";
import Reveal from "./Reveal";
import SpineDivider from "./SpineDivider";

export default function BookTopics() {
  return (
    <section id="topics" className="bg-sandal">
      <SpineDivider />
      <div className="mx-auto max-w-8xl px-5 py-14 sm:px-8 lg:py-20">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-gold-dark">
              Book Topics &amp; Collections
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-brown-deep sm:text-4xl">
              Browse by Topic, Not by Price
            </h2>
            <p className="mt-4 text-base leading-relaxed text-brown-soft">
              These are informational categories, not a catalogue to buy
              from. Tap any topic to know more or send a WhatsApp enquiry.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {topics.map((topic, i) => (
            <Reveal key={topic.title} delay={(i % 4) * 60}>
              <TopicCard {...topic} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
