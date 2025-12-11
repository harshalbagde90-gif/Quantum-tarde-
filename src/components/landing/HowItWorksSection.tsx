import { UserPlus, ShieldCheck, Wallet, TrendingUp } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const steps = [
  {
    icon: UserPlus,
    title: 'Create Your Account',
    description: 'Sign up in under 2 minutes with just your email. No lengthy forms or complicated verification processes to get started with basic trading.',
    number: '01',
  },
  {
    icon: ShieldCheck,
    title: 'Verify & Secure',
    description: 'Complete quick KYC verification and enable two-factor authentication. We prioritize security to protect your funds and comply with global regulations.',
    number: '02',
  },
  {
    icon: Wallet,
    title: 'Deposit Funds',
    description: 'Add funds instantly via bank transfer, credit card, or crypto wallet. Multiple fiat and cryptocurrency deposit options with zero fees.',
    number: '03',
  },
  {
    icon: TrendingUp,
    title: 'Start Trading',
    description: 'Access live markets immediately. Use our intuitive interface or advanced charting tools to place your first trade and join thousands of active traders.',
    number: '04',
  },
];

const HowItWorksSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

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
            <span className="text-foreground">Start Trading in</span>{' '}
            <span className="text-primary">Minutes</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className={`relative transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Connector Line (desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
              )}

              <div className="glass-card p-6 hover-lift h-full">
                {/* Number Badge */}
                <span className="text-5xl font-bold text-primary/20 absolute top-4 right-4">
                  {step.number}
                </span>

                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                  <step.icon className="text-primary" size={28} />
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
