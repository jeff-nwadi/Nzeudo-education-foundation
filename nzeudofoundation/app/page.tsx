import Hero from "@/components/Hero";
import About from "@/components/About";
import Team from "@/components/Team";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Donate from "@/components/Donate";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <About />
      {/* <Team /> */}
      <Gallery />
      <Testimonials />
      <FAQ />
      <Donate />
    </div>
  );
}
