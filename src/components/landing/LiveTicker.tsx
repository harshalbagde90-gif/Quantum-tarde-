import { TrendingUp, TrendingDown } from 'lucide-react';

const tickerData = [
  { symbol: 'BTC/USDT', price: '67,234.50', change: '+2.3%', isUp: true },
  { symbol: 'ETH/USDT', price: '3,456.78', change: '+1.8%', isUp: true },
  { symbol: 'SOL/USDT', price: '142.33', change: '-0.5%', isUp: false },
  { symbol: 'BNB/USDT', price: '612.45', change: '+3.2%', isUp: true },
  { symbol: 'XRP/USDT', price: '0.5234', change: '+0.9%', isUp: true },
  { symbol: 'ADA/USDT', price: '0.4567', change: '-1.2%', isUp: false },
  { symbol: 'MATIC/USDT', price: '0.8901', change: '+2.1%', isUp: true },
  { symbol: 'DOT/USDT', price: '7.234', change: '+1.5%', isUp: true },
];

const LiveTicker = () => {
  return (
    <div className="fixed top-20 left-0 right-0 z-40 bg-secondary/50 backdrop-blur-sm border-b border-white/5 overflow-hidden">
      <div className="flex animate-ticker">
        {/* Duplicate for seamless loop */}
        {[...tickerData, ...tickerData].map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 px-6 py-2 whitespace-nowrap"
          >
            <span className="text-foreground font-medium text-sm">{item.symbol}</span>
            <span className="text-foreground text-sm">${item.price}</span>
            <span
              className={`flex items-center gap-1 text-xs font-medium ${
                item.isUp ? 'text-green-400' : 'text-red-400'
              }`}
            >
              {item.isUp ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
              {item.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveTicker;
