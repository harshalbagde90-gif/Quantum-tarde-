import { ArrowRight, Zap, Users, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TradingChart from './TradingChart';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useCountUp } from '@/hooks/useCountUp';

const HeroSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  
  const volume = useCountUp(842, 2000, true, isVisible);
  const traders = useCountUp(125, 2000, true, isVisible);
  const responseTime = useCountUp(10, 1500, true, isVisible);

  return (
    <section className="relative min-h-screen pt-40 pb-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      {/* Promo Banner */}
      <div className="absolute top-28 left-0 right-0 flex justify-center">
        <div className="glass-card px-4 py-2 flex items-center gap-2 animate-fade-in">
          <span className="text-primary">✨</span>
          <span className="text-muted-foreground text-sm">Trade with 0.01% Fees - Limited Time Offer</span>
          <ArrowRight size={14} className="text-primary" />
        </div>
      </div>

      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold leading-tight transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <span className="text-foreground">Lightning Speed.</span>
              <br />
              <span className="text-primary">Zero Delays.</span>
            </h1>

            <p className={`text-lg text-muted-foreground max-w-lg transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              The next-generation trading platform built for serious traders. Execute trades instantly with institutional-grade infrastructure, real-time market data, and advanced charting tools that give you the edge in volatile markets.
            </p>

            <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg group animate-glow-pulse"
              >
                Start Trading Free
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white/20 hover:bg-white/10 text-foreground px-8 py-6 text-lg"
              >
                View Live Markets
              </Button>
            </div>

            {/* Stats */}
            <div className={`grid grid-cols-3 gap-6 pt-8 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Zap className="text-primary" size={24} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">${volume}.5M</p>
                  <p className="text-muted-foreground text-sm">24h Volume</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Users className="text-primary" size={24} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{traders}K+</p>
                  <p className="text-muted-foreground text-sm">Active Traders</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Clock className="text-primary" size={24} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">&lt;{responseTime}ms</p>
                  <p className="text-muted-foreground text-sm">Response Time</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Chart */}
          <div
            className={`transition-all duration-1000 delay-500 mt-10 px-2 sm:px-0 lg:mt-0 lg:absolute lg:top-0 lg:left-[40%] lg:z-20 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}
            style={{ maxWidth: '700px' }}
          >
            <TradingChart />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
