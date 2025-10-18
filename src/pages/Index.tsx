import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Tokenomics } from "@/components/Tokenomics";
import { Roadmap } from "@/components/Roadmap";
import { Community } from "@/components/Community";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <div id="about">
        <About />
      </div>
      <div id="tokenomics">
        <Tokenomics />
      </div>
      <div id="roadmap">
        <Roadmap />
      </div>
      <div id="community">
        <Community />
      </div>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
