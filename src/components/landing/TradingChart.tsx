import React, { useEffect, useRef, memo } from 'react';

function TradingChart() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current) return;
    container.current.innerHTML = '';
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
    script.type = 'text/javascript';
    script.async = true;
    script.innerHTML = `{
      "allow_symbol_change": true,
      "calendar": false,
      "details": false,
      "hide_side_toolbar": true,
      "hide_top_toolbar": false,
      "hide_legend": false,
      "hide_volume": false,
      "hotlist": false,
      "interval": "D",
      "locale": "en",
      "save_image": true,
      "style": "1",
      "symbol": "BINANCE:BTCUSDT",
      "theme": "light",
      "timezone": "Etc/UTC",
      "backgroundColor": "#fff",
      "gridColor": "rgba(242, 242, 242, 0.06)",
      "watchlist": [],
      "withdateranges": false,
      "compareSymbols": [],
      "studies": [],
      "autosize": true
    }`;
    container.current.appendChild(script);
  }, []);

  return (
    <div 
      className="tradingview-widget-container flex items-start w-full mt-0 ml-0 md:ml-8 md:mt-4 rounded-2xl border border-white/20 bg-background/80 shadow-[0_18px_45px_rgba(15,23,42,0.45)] overflow-hidden backdrop-blur-xl"
      ref={container}
      style={{ aspectRatio: '16/9', minHeight: '340px', maxWidth: '700px' }}
    >
      <div className="w-11/12 mx-auto lg:w-full" style={{ height: '100%' }}>
        <div className="tradingview-widget-container__widget" style={{ height: '100%', width: '100%' }}></div>
      </div>
    </div>
  );
}

export default memo(TradingChart);
