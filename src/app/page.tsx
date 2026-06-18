import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Offers } from "@/components/offers";
import { Services } from "@/components/services";
import { Timeline } from "@/components/timeline";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <Hero />
        <Offers />
        <Projects />
        <Services />
        <Timeline />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
