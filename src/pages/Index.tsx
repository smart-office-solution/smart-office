import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import SystemSection from "@/components/landing/SystemSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import AuditSection from "@/components/landing/AuditSection";
import ProcessSection from "@/components/landing/ProcessSection";
import PricingSection from "@/components/landing/PricingSection";
import FAQSection from "@/components/landing/FAQSection";
import FinalCtaSection from "@/components/landing/FinalCtaSection";
import Footer from "@/components/landing/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <ProblemSection />
    <SolutionSection />
    <FeaturesSection />
    <SystemSection />
    <BenefitsSection />
    <AuditSection />
    <ProcessSection />
    <PricingSection />
    <FAQSection />
    <FinalCtaSection />
    <Footer />
  </div>
);

export default Index;
