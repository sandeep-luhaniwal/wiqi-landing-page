import Hero from "@/src/components/Hero";
import Navbar from "@/src/components/Navbar";
import Features from "@/src/components/Features";
import BuiltReal from "@/src/components/BuiltReal";
import Faq from "@/src/components/Faq";
import Footer from "@/src/components/Footer";
import Experience from "@/src/components/Experience";
import YourEnterTainment from "@/src/components/YourEnterTainment";
import GrowApp from "@/src/components/GrowApp";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <BuiltReal />
      <YourEnterTainment />
      <GrowApp />
      <Experience />
      <Faq />
      <Footer />
    </main>
  );
}
