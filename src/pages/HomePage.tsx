import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SiteLayout from '../components/layout/SiteLayout';
import { scrollToSection } from '../utils/scrollToSection';
import CtaSection from '../components/sections/CtaSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import HeroSection from '../components/sections/HeroSection';
import HowItWorksSection from '../components/sections/HowItWorksSection';
import InteractiveDemoSection from '../components/sections/InteractiveDemoSection';
import ScreenshotsSection from '../components/sections/ScreenshotsSection';
import TrustSection from '../components/sections/TrustSection';

function HomePage() {
  const location = useLocation();

  useEffect(() => {
    const sectionId = (location.state as { scrollTo?: string } | null)?.scrollTo;
    if (!sectionId) return;

    requestAnimationFrame(() => scrollToSection(sectionId));
  }, [location]);

  return (
    <SiteLayout>
      <HeroSection />
      <HowItWorksSection />
      <InteractiveDemoSection />
      <FeaturesSection />
      <ScreenshotsSection />
      <TrustSection />
      <CtaSection />
    </SiteLayout>
  );
}

export default HomePage;
