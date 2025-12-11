import React, { useEffect, useRef, memo, useState } from 'react';
import { Maximize } from 'lucide-react';

function TradingChart() {
  const container = useRef<HTMLDivElement>(null);
  const widgetRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [showFs, setShowFs] = useState(false);
  const [isFs, setIsFs] = useState(false);
  const lastPointerTs = useRef<number>(0);
  const [isLandscape, setIsLandscape] = useState<boolean>(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    setIsMobile(mq.matches);
    const listener = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener('change', listener);
    return () => mq.removeEventListener('change', listener);
  }, []);

  useEffect(() => {
    const onFsChange = () => setIsFs(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', onFsChange);
    return () => document.removeEventListener('fullscreenchange', onFsChange);
  }, []);

  useEffect(() => {
    const omq = window.matchMedia('(orientation: landscape)');
    setIsLandscape(omq.matches);
    const onChange = (e: MediaQueryListEvent) => setIsLandscape(e.matches);
    omq.addEventListener('change', onChange);
    return () => omq.removeEventListener('change', onChange);
  }, []);

  const enterFullscreen = (el: HTMLElement | null) => {
    if (!el) return;
    const anyEl = el as any;
    if (anyEl.requestFullscreen) anyEl.requestFullscreen();
    else if (anyEl.webkitRequestFullscreen) anyEl.webkitRequestFullscreen();
    else if (anyEl.msRequestFullscreen) anyEl.msRequestFullscreen();
    try {
      if (isMobile) (screen as any)?.orientation?.lock?.('landscape');
    } catch {}
  };

  const exitFullscreen = () => {
    const anyDoc = document as any;
    if (document.exitFullscreen) document.exitFullscreen();
    else if (anyDoc.webkitExitFullscreen) anyDoc.webkitExitFullscreen();
    else if (anyDoc.msExitFullscreen) anyDoc.msExitFullscreen();
    try {
      (screen as any)?.orientation?.unlock?.();
    } catch {}
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    if (!widgetRef.current) return;
    widgetRef.current.innerHTML = '';
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
    script.type = 'text/javascript';
    script.async = true;
    const config = {
      allow_symbol_change: true,
      calendar: false,
      details: false,
      hide_side_toolbar: true,
      hide_top_toolbar: isMobile,
      hide_legend: isMobile,
      hide_volume: false,
      hotlist: false,
      interval: 'D',
      locale: 'en',
      save_image: true,
      style: '1',
      symbol: 'BINANCE:BTCUSDT',
      theme: 'light',
      timezone: 'Etc/UTC',
      backgroundColor: '#fff',
      gridColor: 'rgba(242, 242, 242, 0.06)',
      watchlist: [],
      withdateranges: false,
      compareSymbols: [],
      studies: [],
      autosize: true,
    } as const;
    script.innerHTML = JSON.stringify(config);
    widgetRef.current.appendChild(script);
  }, [isMobile]);

  return (
    <div 
      className="relative group tradingview-widget-container flex items-start w-full mt-0 ml-0 md:ml-8 md:mt-4 rounded-2xl border border-white/20 bg-background/80 shadow-[0_18px_45px_rgba(15,23,42,0.45)] overflow-hidden backdrop-blur-xl"
      ref={container}
      onMouseEnter={() => setShowFs(true)}
      onMouseLeave={() => setShowFs(false)}
      onClick={() => { setShowFs(true); setTimeout(() => setShowFs(false), 3000); }}
      onTouchStart={() => { setShowFs(true); setTimeout(() => setShowFs(false), 3000); }}
      style={{ aspectRatio: isMobile ? '3/2' : '16/9', minHeight: isMobile ? '200px' : '340px', maxWidth: isMobile ? '100%' : '700px' }}
    >
      <button
        aria-label="Fullscreen"
        onPointerUp={(e) => {
          e.stopPropagation();
          if (isFs) exitFullscreen(); else enterFullscreen(container.current);
        }}
        className={`absolute top-2 right-2 z-50 px-2.5 py-2 rounded-md text-white bg-gradient-to-br from-[#0b0b0d] to-[#1a1a1f] hover:from-[#000000] hover:to-[#121216] ring-1 ring-white/10 hover:ring-primary/30 shadow-lg transition-opacity duration-200 ${showFs || isFs ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} focus:outline-none`}
      >
        <Maximize size={16} />
      </button>
      <div
        className="w-full mx-auto lg:w-full flex items-center justify-center"
        style={{ height: '100%' }}
      >
        <div
          ref={widgetRef}
          className="tradingview-widget-container__widget"
          style={
            isFs && isMobile
              ? (isLandscape
                  ? { height: '100vh', width: 'calc(100vh * 16 / 9)' }
                  : { width: '100vw', height: 'calc(100vw * 9 / 16)' })
              : { height: '100%', width: '100%' }
          }
        ></div>
      </div>
    </div>
  );
}

export default memo(TradingChart);
