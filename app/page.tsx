import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import BookTopics from "@/components/BookTopics";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ReadingRibbon from "@/components/ReadingRibbon";

export default function Home() {
  return (
    <>
      <Navbar />
      <ReadingRibbon />
      <main>
        <Hero />
        <About />
        <Services />
        <BookTopics />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
