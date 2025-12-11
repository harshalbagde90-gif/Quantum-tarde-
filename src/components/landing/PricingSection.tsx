import { ArrowRight, Check } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const tiers = [
  {
    name: 'Beginner',
    subtitle: 'Perfect for new traders getting started',
    fee: '0.15%',
    volume: '$0 - $50K/month',
    gradient: 'from-green-500 to-emerald-600',
    features: [
      '50+ trading pairs',
      'Basic charting tools',
      'Mobile app access',
      'Email support',
      '$0 minimum deposit',
    ],
  },
  {
    name: 'Professional',
    subtitle: 'For active traders seeking better rates',
    fee: '0.08%',
    volume: '$50K - $500K/month',
    gradient: 'from-blue-500 to-cyan-500',
    popular: true,
    features: [
      '150+ trading pairs',
      'Advanced charting suite',
      'API access (REST)',
      'Priority email support',
      'Margin trading (3x)',
    ],
  },
  {
    name: 'Elite',
    subtitle: 'Premium features for high-volume traders',
    fee: '0.04%',
    volume: '$500K - $5M/month',
    gradient: 'from-purple-500 to-pink-500',
    features: [
      '200+ trading pairs',
      'Professional charting tools',
      'WebSocket API access',
      '24/7 priority support',
      'Margin trading (10x)',
    ],
  },
  {
    name: 'Institutional',
    subtitle: 'Custom solutions for enterprises and funds',
    fee: '0.01%',
    volume: '$5M+/month',
    gradient: 'from-primary to-rose-500',
    features: [
      'OTC trading desk',
      'Dedicated infrastructure',
      'Custom API solutions',
      'White-label options',
      'Margin trading (20x)',
    ],
  },
];

const PricingSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="pricing" className="py-24">
      <div ref={ref} className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 
            className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="text-foreground">The Trading</span>{' '}
            <span className="text-primary">Spectrum</span>
          </h2>
          <p 
            className={`text-muted-foreground text-lg max-w-2xl mx-auto transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Choose the tier that fits your trading volume and unlock exclusive benefits.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((tier, index) => (
            <div
              key={tier.name}
              className={`glass-card overflow-hidden hover-lift group transition-all duration-500 ${
                tier.popular ? 'ring-2 ring-primary' : ''
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Gradient Top Bar */}
              <div className={`h-2 bg-gradient-to-r ${tier.gradient}`} />

              <div className="p-6">
                {tier.popular && (
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full mb-4">
                    Most Popular
                  </span>
                )}

                <h3 className="text-2xl font-bold text-foreground mb-2">{tier.name}</h3>
                <p className="text-muted-foreground text-sm mb-6">{tier.subtitle}</p>

                <div className="mb-6">
                  <p className="text-4xl font-bold text-foreground">
                    {tier.fee}
                    <span className="text-muted-foreground text-base font-normal ml-1">fee</span>
                  </p>
                  <p className="text-muted-foreground text-sm mt-2">{tier.volume}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Check size={16} className="text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="w-full py-3 px-4 rounded-xl border border-white/20 text-foreground font-medium flex items-center justify-center gap-2 hover:bg-white/10 transition-all group-hover:border-primary/50">
                  Get Started
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
