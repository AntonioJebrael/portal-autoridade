import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Services } from "@/components/services";
import { Testimonials } from "@/components/testimonials";
import { SocialProof } from "@/components/social-proof";
import { Timeline } from "@/components/timeline";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative noise">
        <Hero />
        <Projects />
        <Services />
        <Testimonials />
        <SocialProof />
        <Timeline />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
