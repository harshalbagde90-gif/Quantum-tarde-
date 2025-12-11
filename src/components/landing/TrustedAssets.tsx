import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useEffect, useState } from 'react';

const TrustedAssets = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (customElements.get('lottie-player')) {
      setReady(true);
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js';
    script.async = true;
    script.onload = () => setReady(true);
    document.body.appendChild(script);
  }, []);

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

        <div
          className={`flex items-center justify-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          {ready ? (
            <lottie-player
              src="/animation/Crypto%20coins%20moving.json"
              background="transparent"
              speed="1"
              className="w-[420px] h-[420px] max-w-[85vw] max-h-[85vw] md:w-[280px] md:h-[280px]"
              loop
              autoplay
            ></lottie-player>
          ) : (
            <div className="w-[420px] h-[420px] max-w-[85vw] max-h-[85vw] md:w-64 md:h-64 rounded-full bg-muted animate-pulse" />
          )}
        </div>
      </div>
    </section>
  );
};

export default TrustedAssets;
