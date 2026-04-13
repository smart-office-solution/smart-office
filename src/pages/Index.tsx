import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import AuditSection from "@/components/landing/AuditSection";
import ProcessSection from "@/components/landing/ProcessSection";
import FinalCtaSection from "@/components/landing/FinalCtaSection";
import Footer from "@/components/landing/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <ProblemSection />
    <SolutionSection />
    <FeaturesSection />
    <BenefitsSection />
    <AuditSection />
    <ProcessSection />
    <FinalCtaSection />
    <Footer />
  </div>
);

export default Index;
