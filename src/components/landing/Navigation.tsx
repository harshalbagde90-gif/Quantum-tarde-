import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

import { useRef } from 'react';

function Logo3D() {
  const logoRef = useRef<HTMLDivElement>(null);

  // CSS keyframes for rotation
  // We'll use Tailwind's arbitrary values for custom animation
  // But for a precise pause, we use inline styles
  // 1s spin, 5s pause, infinite
  return (
    <div
      ref={logoRef}
      style={{
        perspective: '400px',
        animation: 'logo-spin-pause 6s linear infinite',
      }}
      className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-primary to-pink-400 flex items-center justify-center shadow-lg"
    >
      <span
        className="text-foreground font-bold text-lg md:text-xl"
        style={{
          textShadow: '2px 2px 8px rgba(0,0,0,0.25), 0 1px 0 #fff',
          transform: 'rotateY(15deg) rotateX(10deg)',
          display: 'inline-block',
        }}
      >
        Q
      </span>
      <style>{`
        @keyframes logo-spin-pause {
          0% { transform: rotateY(0deg); }
          16.666% { transform: rotateY(360deg); }
          100% { transform: rotateY(360deg); }
        }
      `}</style>
    </div>
  );
}

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const menuItems = ['Markets', 'Trading', 'Features', 'Pricing', 'About'];
  const links: Record<string, string> = {
    Markets: '#markets',
    Trading: '#pricing',
    Features: '#features',
    Pricing: '#pricing',
    About: '#about',
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isMobileMenuOpen
          ? 'bg-background/95 backdrop-blur-xl'
          : isScrolled 
            ? 'bg-background/80 backdrop-blur-xl border-b border-white/10' 
            : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); document.getElementById('home')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}
            className="flex items-center gap-2"
          >
            <Logo3D />
            <span className="text-base md:text-xl font-bold text-foreground" style={{ fontFamily: 'Domine, serif' }}>
              QUANTUM<span className="text-primary"> TRADE</span>
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item}
                href={links[item]}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium"
              >
                {item}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="ghost"
              className="text-muted-foreground hover:text-foreground"
            >
              Log In
            </Button>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 animate-glow-pulse">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <>
            <div className="fixed inset-0 bg-background/70 backdrop-blur-md" />
            <div className="md:hidden py-6 border-t border-white/10 animate-fade-in relative z-10">
              <button
                className="absolute top-4 right-4 p-2 rounded-lg bg-white/10 text-foreground"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
              <div className="flex flex-col gap-4">
                {menuItems.map((item) => (
                  <a
                    key={item}
                    href={links[item]}
                  className="text-foreground transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground mt-4">
                  Get Started
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
