import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Process } from "@/components/Process";
import { Ready } from "@/components/Ready";
import { Values } from "@/components/Values";
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
        <About />
        <Process />
        <Ready />
        <Values />
        <Work />
        <Areas />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
