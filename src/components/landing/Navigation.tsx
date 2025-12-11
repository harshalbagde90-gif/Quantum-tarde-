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
      className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-pink-400 flex items-center justify-center shadow-lg"
    >
      <span
        className="text-foreground font-bold text-xl"
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

  const menuItems = ['Markets', 'Trading', 'Features', 'Pricing', 'About'];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-xl border-b border-white/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Logo3D />
            <span className="text-xl font-bold text-foreground" style={{ fontFamily: 'Domine, serif' }}>
              QUANTUM<span className="text-primary"> TRADE</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
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
          <div className="md:hidden py-6 border-t border-white/10 animate-fade-in">
            <div className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-muted-foreground hover:text-foreground transition-colors py-2"
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
        )}
      </div>
    </nav>
  );
};

export default Navigation;
