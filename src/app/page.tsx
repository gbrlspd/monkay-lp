import { NoiseOverlay } from "@/components/ui/noise-overlay";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero";
import { ProblemSection } from "@/components/sections/problem";
import { SolutionsSection } from "@/components/sections/solutions";
import { ProcessSection } from "@/components/sections/process";
import { StackSection } from "@/components/sections/stack";
import { ContactSection } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <NoiseOverlay />
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionsSection />
        <ProcessSection />
        <StackSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
