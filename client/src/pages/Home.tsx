import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import FeaturesSection from "@/components/FeaturesSection";
import AISection from "@/components/AISection";
import VisionCompanySection from "@/components/VisionCompanySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ProblemSection />
      <FeaturesSection />
      <AISection />
      <VisionCompanySection />
      <ContactSection />
      <Footer />
    </div>
  );
}
