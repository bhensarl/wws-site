import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Lineup from "@/components/Lineup";
import Tickets from "@/components/Tickets";
import Merch from "@/components/Merch";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Lineup />
      <Tickets />
      <Merch />
      <FAQ />
      <Contact />
      <Location />
      <Footer />
    </>
  );
}
