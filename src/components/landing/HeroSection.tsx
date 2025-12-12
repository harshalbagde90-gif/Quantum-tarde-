import { ArrowRight, Zap, Users, Clock } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import TradingChart from './TradingChart';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useCountUp } from '@/hooks/useCountUp';

const HeroBitcoinAnimation = () => {
  const [ready, setReady] = useState(false);
  const [src, setSrc] = useState('/animation/bitcoin.json');
  useEffect(() => {
    if (customElements.get('lottie-player')) setReady(true);
    else {
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js';
      script.async = true;
      script.onload = () => setReady(true);
      document.body.appendChild(script);
    }
    fetch('/animation/bitcoin.json')
      .then((r) => (r.ok ? r.text() : Promise.reject()))
      .then((t) => {
        if (t && t.trim().length > 0) setSrc('/animation/bitcoin.json');
        else setSrc('/animation/Crypto%20coins%20moving.json');
      })
      .catch(() => setSrc('/animation/Crypto%20coins%20moving.json'));
  }, []);
  return (
    <div className="absolute -top-8 right-8 md:hidden z-10">
      <div className="relative w-16 h-16 rounded-full bg-white/60 ring-1 ring-white/40 shadow-lg backdrop-blur-md overflow-hidden flex items-center justify-center">
        {ready ? (
          <lottie-player
            src={src}
            background="transparent"
            speed="1"
            className="w-14 h-14"
            loop
            autoplay
          ></lottie-player>
        ) : (
          <div className="w-14 h-14 rounded-full bg-muted animate-pulse" />
        )}
      </div>
    </div>
  );
};

const HeroSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  
  const volume = useCountUp(842, 2000, true, isVisible);
  const traders = useCountUp(125, 2000, true, isVisible);
  const responseTime = useCountUp(10, 1500, true, isVisible);

  return (
    <section id="home" className="relative min-h-screen pt-32 md:pt-40 pb-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-80 md:h-80 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      

      <div ref={ref} className="container mx-auto px-3 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 max-w-[340px] md:max-w-none mx-auto relative">
            <h1 className={`text-2xl sm:text-3xl md:text-6xl lg:text-7xl font-bold leading-tight transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <span className="text-foreground">Lightning Speed.</span>
              <br />
              <span className="text-primary">Zero Delays.</span>
            </h1>

            {/* Bitcoin Animation (Mobile Only) */}
            <HeroBitcoinAnimation />

            <p className={`text-xs md:text-lg text-muted-foreground max-w-[340px] md:max-w-lg transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              The next-generation trading platform built for serious traders. Execute trades instantly with institutional-grade infrastructure, real-time market data, and advanced charting tools that give you the edge in volatile markets.
            </p>

            <div className={`flex flex-col sm:flex-row gap-2 md:gap-4 max-w-[320px] md:max-w-none mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-5 md:px-8 py-3 md:py-6 text-sm md:text-lg group animate-glow-pulse w-full sm:w-auto"
              >
                Start Trading Free
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white/20 hover:bg-white/10 text-foreground px-5 md:px-8 py-3 md:py-6 text-sm md:text-lg w-full sm:w-auto"
                onClick={() => document.getElementById('chart')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              >
                View Live Markets
              </Button>
            </div>

            {/* Stats */}
            <div className={`grid grid-cols-3 gap-4 md:gap-6 pt-6 md:pt-8 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex items-center gap-3">
              <div className="w-9 h-9 md:w-12 md:h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <Zap className="text-primary" size={20} />
              </div>
              <div>
                  <p className="text-base md:text-2xl font-bold text-foreground">${volume}.5M</p>
                  <p className="text-muted-foreground text-[10px] md:text-sm">24h Volume</p>
              </div>
            </div>
              
              <div className="flex items-center gap-3">
              <div className="w-9 h-9 md:w-12 md:h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <Users className="text-primary" size={20} />
              </div>
              <div>
                  <p className="text-base md:text-2xl font-bold text-foreground">{traders}K+</p>
                  <p className="text-muted-foreground text-[10px] md:text-sm">Active Traders</p>
              </div>
            </div>
              
              <div className="flex items-center gap-3">
              <div className="w-9 h-9 md:w-12 md:h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <Clock className="text-primary" size={20} />
              </div>
              <div>
                  <p className="text-base md:text-2xl font-bold text-foreground">&lt;{responseTime}ms</p>
                  <p className="text-muted-foreground text-[10px] md:text-sm">Response Time</p>
              </div>
            </div>
            </div>
          </div>

          {/* Right Content - Chart */}
          <div
            className={`transition-all duration-1000 delay-500 mt-10 px-2 sm:px-0 lg:mt-0 lg:absolute lg:top-0 lg:left-auto lg:right-10 lg:z-20 max-w-[320px] sm:max-w-[360px] md:max-w-[700px] mx-auto ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}
            id="chart"
          >
            <TradingChart />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
