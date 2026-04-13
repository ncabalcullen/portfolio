import Navbar from "@/components/layout/Navbar";
import ScrollProgress from "@/components/ui/ScrollProgress";
import Hero from "@/components/sections/Hero";
import Team from "@/components/sections/Team";
import ServicesBento from "@/components/sections/ServicesBento";
import Projects from "@/components/sections/Projects";
import Process from "@/components/sections/Process";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import MobileDock from "@/components/layout/MobileDock";

export default function Home() {
  return (
    <main className="bg-[#0a0a0f] text-white min-h-screen">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Team />
      <ServicesBento />
      <Projects />
      <Process />
      <FAQ />
      <Contact />
      <Footer />
      <MobileDock />
    </main>
  );
}
