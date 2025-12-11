import Navigation from '@/components/landing/Navigation';
import LiveTicker from '@/components/landing/LiveTicker';
import HeroSection from '@/components/landing/HeroSection';
import TrustedAssets from '@/components/landing/TrustedAssets';
import FeaturesSection from '@/components/landing/FeaturesSection';
import PricingSection from '@/components/landing/PricingSection';
import HowItWorksSection from '@/components/landing/HowItWorksSection';
import FeeCalculator from '@/components/landing/FeeCalculator';
import SecuritySection from '@/components/landing/SecuritySection';
import Footer from '@/components/landing/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <LiveTicker />
      <HeroSection />
      <TrustedAssets />
      <FeaturesSection />
      <PricingSection />
      <HowItWorksSection />
      <FeeCalculator />
      <SecuritySection />
      <Footer />
    </div>
  );
};

export default Index;
