import Benefits from "@/components/Benefits";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Pricing from "@/components/Pricing";
import Problem from "@/components/Problem";
import Process from "@/components/Process";
import WhyLuca from "@/components/WhyLuca";

export default function Home() {
  return (
    <div className="min-h-screen bg-ivory overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Benefits />
        <Portfolio />
        <WhyLuca />
        <Process />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
