import { Shield, Lock, AlertTriangle, BadgeCheck } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const securityFeatures = [
  {
    icon: Shield,
    title: 'Cold Wallet Storage',
    description: '95% of funds stored offline in military-grade cold storage',
  },
  {
    icon: Lock,
    title: 'Multi-Signature Wallets',
    description: 'Multiple approval layers for all withdrawals',
  },
  {
    icon: AlertTriangle,
    title: 'Real-Time Monitoring',
    description: '24/7 AI-powered fraud detection and prevention',
  },
  {
    icon: BadgeCheck,
    title: 'Insurance Coverage',
    description: '$100M insurance fund protecting user assets',
  },
];

const SecuritySection = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div ref={ref} className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 
            className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="text-foreground">Your Security is Our</span>{' '}
            <span className="text-primary">Priority</span>
          </h2>
        </div>

        {/* Security Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {securityFeatures.map((feature, index) => (
            <div
              key={feature.title}
              className={`glass-card p-6 text-center hover-lift transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6 animate-glow-pulse">
                <feature.icon className="text-primary" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
