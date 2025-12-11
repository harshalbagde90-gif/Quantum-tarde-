import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const assets = [
  { name: 'Bitcoin', symbol: 'BTC', color: 'from-orange-400 to-orange-600' },
  { name: 'Ethereum', symbol: 'ETH', color: 'from-blue-400 to-blue-600' },
  { name: 'Solana', symbol: 'SOL', color: 'from-purple-400 to-purple-600' },
  { name: 'Cardano', symbol: 'ADA', color: 'from-blue-300 to-blue-500' },
  { name: 'Polygon', symbol: 'MATIC', color: 'from-violet-400 to-violet-600' },
];

const TrustedAssets = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section className="py-20 border-t border-white/5">
      <div ref={ref} className="container mx-auto px-6">
        <h2 
          className={`text-center text-muted-foreground text-lg mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          Trade Your Favorite Assets
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {assets.map((asset, index) => (
            <div
              key={asset.symbol}
              className={`flex items-center gap-3 transition-all duration-500 hover:scale-110 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${asset.color} flex items-center justify-center shadow-lg`}>
                <span className="text-foreground font-bold text-sm">{asset.symbol.charAt(0)}</span>
              </div>
              <div className="hidden sm:block">
                <p className="text-foreground font-medium">{asset.name}</p>
                <p className="text-muted-foreground text-sm">{asset.symbol}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedAssets;
