import { Globe, Zap, Lock, BarChart3, Smartphone, DollarSign } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const features = [
  {
    icon: Globe,
    title: 'Global Liquidity Network',
    description: 'Access deep liquidity across 200+ trading pairs instantly. Our smart order routing connects you to multiple exchanges simultaneously, ensuring the best execution price for every trade.',
  },
  {
    icon: Zap,
    title: 'Ultra-Low Latency Execution',
    description: 'Execute trades in milliseconds with our optimized matching engine. Never miss opportunities in fast-moving markets with sub-10ms response times and 99.99% uptime guarantee.',
  },
  {
    icon: Lock,
    title: 'Bank-Grade Security',
    description: 'Multi-layer security protecting your assets 24/7. Features cold wallet storage, two-factor authentication, withdrawal whitelisting, and real-time fraud detection powered by AI algorithms.',
  },
  {
    icon: BarChart3,
    title: 'Advanced Trading Tools',
    description: 'Professional charting with 100+ technical indicators, drawing tools, and custom timeframes. Set up automated strategies with algorithmic trading support and backtesting capabilities.',
  },
  {
    icon: Smartphone,
    title: 'Trade Anywhere, Anytime',
    description: 'Seamless experience across desktop, mobile, and tablet. Sync your watchlists, alerts, and strategies across all devices with cloud-based portfolio management.',
  },
  {
    icon: DollarSign,
    title: 'Competitive Fee Structure',
    description: 'Industry-leading fees starting at 0.01% for makers. Volume-based discounts, zero deposit fees, and transparent pricing with no hidden charges. Keep more of your profits.',
  },
];

const FeaturesSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="features" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div ref={ref} className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 
            className={`text-3xl md:text-5xl font-bold mb-4 md:mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="text-foreground">Engineered for</span>{' '}
            <span className="text-primary">Traders.</span>
          </h2>
          <p 
            className={`text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Our advanced infrastructure ensures instant execution and maximum uptime across all market conditions.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`glass-card p-6 md:p-8 hover-lift group cursor-pointer transition-all duration-500 hover:border-primary/30 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-primary/30 transition-colors group-hover:animate-glow-pulse">
                <feature.icon className="text-primary" size={24} />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 md:mb-4">{feature.title}</h3>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
