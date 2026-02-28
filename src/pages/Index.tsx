import HeroSection from "@/components/HeroSection";
import StorylineSection from "@/components/StorylineSection";
import MissionDetails from "@/components/MissionDetails";
import WhatToExpect from "@/components/WhatToExpect";
import CautionSection from "@/components/CautionSection";
import UsefulLinks from "@/components/UsefulLinks";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <StorylineSection />
      <MissionDetails />
      <WhatToExpect />
      <CautionSection />
      <UsefulLinks />
      <Footer />
    </div>
  );
};

export default Index;
