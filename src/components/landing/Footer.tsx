import { Twitter, MessageCircle, Linkedin, Youtube } from 'lucide-react';

const footerLinks = {
  products: {
    title: 'Products',
    links: ['Spot Trading', 'Margin Trading', 'Futures Trading', 'Staking', 'NFT Marketplace', 'Trading API', 'Mobile App'],
  },
  resources: {
    title: 'Resources',
    links: ['Help Center', 'Trading Guide', 'API Documentation', 'Market Data', 'Trading Fees', 'System Status', 'Blog'],
  },
  company: {
    title: 'Company',
    links: ['About Us', 'Careers', 'Security', 'Privacy Policy', 'Terms of Service', 'Compliance', 'Contact'],
  },
};

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: MessageCircle, href: '#', label: 'Telegram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

const Footer = () => {
  return (
    <footer className="pt-20 pb-8 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-pink-400 flex items-center justify-center">
                <span className="text-foreground font-bold text-xl">Q</span>
              </div>
              <span className="text-xl font-bold text-foreground">
                QUANTUM<span className="text-primary"> TRADE</span>
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-sm">
              A secure, lightning-fast cryptocurrency trading platform built for traders who demand the best execution, lowest fees, and institutional-grade infrastructure.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-white/10 transition-all"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.values(footerLinks).map((column) => (
            <div key={column.title}>
              <h3 className="text-foreground font-semibold mb-6">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="glass-card p-6 mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <div>
                <p className="text-muted-foreground text-sm">Support</p>
                <p className="text-foreground">support@quantumtrade.com</p>
              </div>
              <div className="hidden md:block w-px h-10 bg-white/10" />
              <div>
                <p className="text-muted-foreground text-sm">Response Time</p>
                <p className="text-foreground">&lt;2 hours</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-muted-foreground text-sm">24/7 Live Chat Available</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/10">
          <p className="text-muted-foreground text-sm">
            © 2024 Quantum Trade. All rights reserved.
          </p>
          <p className="text-muted-foreground/60 text-xs text-center md:text-right max-w-xl">
            Risk Warning: Trading cryptocurrencies carries significant risk. Only trade with funds you can afford to lose.
          </p>
        </div>

        {/* Legal Links */}
        <div className="flex justify-center gap-6 mt-6">
          {['Risk Disclosure', 'AML Policy', 'Cookie Policy'].map((link) => (
            <a
              key={link}
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors text-xs"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
