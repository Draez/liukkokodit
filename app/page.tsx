import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Why } from "@/components/Why";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Work } from "@/components/Work";
import { Areas } from "@/components/Areas";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="sisalto">
        <Hero />
        <Why />
        <Services />
        <Process />
        <Work />
        <Areas />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
