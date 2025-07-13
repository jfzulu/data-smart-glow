import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { MissionVisionSection } from "@/components/mission-vision-section"
import { ServicesSection } from "@/components/services-section"
import { ProcessSection } from "@/components/process-section"
import { FeaturesSection } from "@/components/features-section"
import { TechStackSection } from "@/components/tech-stack-section"
import { PricingSection } from "@/components/pricing-section"
import { Footer } from "@/components/footer"

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <MissionVisionSection />
      <ServicesSection />
      <ProcessSection />
      <FeaturesSection />
      <TechStackSection />
      <PricingSection />
      <Footer />
    </div>
  );
};

export default Index;
