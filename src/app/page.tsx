import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Lineup from "@/components/Lineup";
import Tickets from "@/components/Tickets";
import Merch from "@/components/Merch";
import FAQ from "@/components/FAQ";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Lineup />
      <Tickets />
      <Merch />
      <FAQ />
      <Location />
      <Footer />
    </>
  );
}
