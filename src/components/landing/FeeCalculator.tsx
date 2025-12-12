import { useState, useMemo } from 'react';
import { ArrowRight, Calculator } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const tradingPairs = ['BTC/USDT', 'ETH/USDT', 'SOL/USDT', 'Custom'];

const FeeCalculator = () => {
  const [volume, setVolume] = useState([50000]);
  const [selectedPair, setSelectedPair] = useState('BTC/USDT');
  const [orderType, setOrderType] = useState<'maker' | 'taker'>('maker');
  const { ref, isVisible } = useScrollAnimation(0.2);

  const calculations = useMemo(() => {
    const vol = volume[0];
    const determineTier = (v: number) => {
      if (v < 50000) return 'Basic';
      if (v < 500000) return 'Professional';
      if (v < 5000000) return 'VIP';
      return 'Elite';
    };
    const getFeeRate = (tier: string, type: 'maker' | 'taker') => {
      const feeStructure: Record<string, { maker: number; taker: number }> = {
        Basic: { maker: 0.10, taker: 0.15 },
        Professional: { maker: 0.064, taker: 0.084 },
        VIP: { maker: 0.040, taker: 0.060 },
        Elite: { maker: 0.020, taker: 0.030 },
      };
      return feeStructure[tier][type];
    };
    const tier = determineTier(vol);
    const feeRate = getFeeRate(tier, orderType);
    const monthlyFees = (vol * feeRate) / 100;
    const competitorFees = (vol * 0.25) / 100;
    const savings = competitorFees - monthlyFees;
    return { monthlyFees, savings, tier, feeRate };
  }, [volume, orderType]);

  const formatVolume = (val: number) => {
    if (val >= 1000000) return `$${(val / 1000000).toFixed(1)}M`;
    if (val >= 1000) return `$${(val / 1000).toFixed(0)}K`;
    return `$${val}`;
  };

  return (
    <section id="markets" className="py-24">
      <div ref={ref} className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10 md:mb-12">
            <h2 
              className={`text-3xl md:text-5xl font-bold mb-4 md:mb-6 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <span className="text-foreground">Calculate Your</span>{' '}
              <span className="text-primary">Trading Costs</span>
            </h2>
            <p 
              className={`text-muted-foreground text-sm md:text-lg transition-all duration-700 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              See exactly what you'll pay before you trade. No hidden fees, no surprises.
            </p>
          </div>

          {/* Calculator Card */}
          <div 
            className={`glass-card p-6 md:p-8 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {/* Inputs */}
              <div className="space-y-8">
                {/* Volume Slider */}
                <div>
                  <label className="block text-foreground font-medium mb-4">
                    Monthly Trading Volume
                  </label>
                  <Slider
                    value={volume}
                    onValueChange={setVolume}
                    min={0}
                    max={1000000}
                    step={1000}
                    className="mb-4"
                  />
                  <p className="text-xl md:text-2xl font-bold text-primary">{formatVolume(volume[0])}</p>
                </div>

                {/* Trading Pair */}
                <div>
                  <label className="block text-foreground font-medium mb-4">
                    Trading Pair
                  </label>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {tradingPairs.map((pair) => (
                      <button
                        key={pair}
                        onClick={() => setSelectedPair(pair)}
                        className={`px-3 py-2 md:px-4 rounded-lg border transition-all ${
                          selectedPair === pair
                            ? 'border-primary bg-primary/20 text-primary'
                            : 'border-white/20 text-muted-foreground hover:border-white/40'
                        }`}
                      >
                        {pair}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Order Type Toggle */}
                <div>
                  <label className="block text-foreground font-medium mb-4">
                    Order Type
                  </label>
                  <div className="flex gap-2 md:gap-3">
                    <button
                      onClick={() => setOrderType('maker')}
                      className={`flex-1 py-2 md:py-3 rounded-lg border transition-all ${
                        orderType === 'maker'
                          ? 'border-primary bg-primary/20 text-primary'
                          : 'border-white/20 text-muted-foreground hover:border-white/40'
                      }`}
                    >
                      Maker (Limit Orders)
                    </button>
                    <button
                      onClick={() => setOrderType('taker')}
                      className={`flex-1 py-2 md:py-3 rounded-lg border transition-all ${
                        orderType === 'taker'
                          ? 'border-primary bg-primary/20 text-primary'
                          : 'border-white/20 text-muted-foreground hover:border-white/40'
                      }`}
                    >
                      Taker (Market Orders)
                    </button>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="glass-card bg-secondary/50 p-5 md:p-6 rounded-xl flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Calculator className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-xs md:text-sm">Your Tier</p>
                    <p className="text-foreground text-sm md:text-base font-semibold">{calculations.tier}</p>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center py-2 md:py-3 border-b border-white/10">
                    <span className="text-muted-foreground">Fee Rate</span>
                    <span className="text-foreground text-sm md:text-base font-bold">{calculations.feeRate.toFixed(3)}%</span>
                  </div>
                  <div className="flex justify-between items-center py-2 md:py-3 border-b border-white/10">
                    <span className="text-muted-foreground">Monthly Fees</span>
                    <span className="text-foreground font-bold text-lg md:text-xl">
                      ${calculations.monthlyFees.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 md:py-3">
                    <span className="text-muted-foreground">You Save vs Competitors</span>
                    <span className="text-green-400 font-bold text-lg md:text-xl">
                      ${calculations.savings.toFixed(2)}
                    </span>
                  </div>
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group py-2 md:py-3">
                  Start Saving Now
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeeCalculator;
