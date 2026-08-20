import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ReadingRibbon from "@/components/ReadingRibbon";
import WhatsAppPage from "@/components/WhatsAppPage";

export default function Home() {
  return (
    <WhatsAppPage>
      <Navbar />
      <main>
        <Hero />
      </main>
    </WhatsAppPage>
  );
}
