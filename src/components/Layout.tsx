import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Download, Github, Twitter, Facebook, Instagram, Youtube } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import ConversionComponents from './ConversionComponents';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Bikes', path: '/bikes' },
    { name: 'Career', path: '/career' },
    { name: 'Leaderboard', path: '/leaderboard' },
    { name: 'Download', path: '/download' },
    { name: 'News', path: '/news' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-background/95 backdrop-blur-md border-b border-border-custom py-3' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-accent flex items-center justify-center rounded-[3px] transform group-hover:rotate-12 transition-transform">
                <span className="text-background font-display font-black text-xl">TR</span>
              </div>
              <span className="font-display font-black text-2xl tracking-tighter text-white">
                TRAFFIC<span className="text-accent">RIDER</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`font-display text-sm uppercase tracking-widest transition-colors hover:text-accent ${
                    location.pathname === link.path ? 'text-accent' : 'text-white/70'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/download" className="btn-primary py-2 px-4 text-xs">
                Download Now
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white p-2 focus:outline-none"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-surface border-b border-border-custom overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="block px-3 py-4 text-base font-display uppercase tracking-widest text-white hover:bg-accent hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-4">
                  <Link to="/download" className="btn-primary w-full block text-center">
                    Download Free
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-20 md:pt-0">
        {children}
      </main>

      {/* Conversion & Engagement Components */}
      <ConversionComponents />

      {/* Footer */}
      <footer className="bg-surface border-t border-border-custom pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand & Social */}
            <div className="col-span-1 md:col-span-1">
              <Link to="/" className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-accent flex items-center justify-center rounded-[3px]">
                  <span className="text-background font-display font-black text-sm">TR</span>
                </div>
                <span className="font-display font-black text-xl tracking-tighter text-white">
                  TRAFFIC<span className="text-accent">RIDER</span>
                </span>
              </Link>
              <p className="text-white/50 text-sm mb-6 leading-relaxed">
                The next generation of motorcycle racing. Ride through endless highways, upgrade your bikes, and beat the traffic.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-white/50 hover:text-accent transition-colors"><Twitter size={20} /></a>
                <a href="#" className="text-white/50 hover:text-accent transition-colors"><Facebook size={20} /></a>
                <a href="#" className="text-white/50 hover:text-accent transition-colors"><Instagram size={20} /></a>
                <a href="#" className="text-white/50 hover:text-accent transition-colors"><Youtube size={20} /></a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-display text-sm mb-6 tracking-widest">Quick Links</h4>
              <ul className="space-y-4">
                {navLinks.slice(1).map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-white/50 text-sm hover:text-accent transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-white font-display text-sm mb-6 tracking-widest">Support</h4>
              <ul className="space-y-4 text-sm">
                <li><Link to="/about" className="text-white/50 hover:text-accent transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="text-white/50 hover:text-accent transition-colors">Contact Support</Link></li>
                <li><Link to="/privacy" className="text-white/50 hover:text-accent transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-white/50 hover:text-accent transition-colors">Terms of Service</Link></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-white font-display text-sm mb-6 tracking-widest">Stay Updated</h4>
              <p className="text-white/50 text-sm mb-4">Subscribe to get the latest news and bike releases.</p>
              <form className="flex space-x-2">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="bg-background border border-border-custom px-4 py-2 text-sm focus:outline-none focus:border-accent w-full rounded-[3px]"
                />
                <button type="submit" className="btn-primary py-2 px-4 text-xs">Join</button>
              </form>
              <div className="mt-8 flex space-x-4">
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-8" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-8" />
              </div>
            </div>
          </div>

          <div className="border-t border-border-custom pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/30">
            <p>© 2024 Soner Kara. All rights reserved.</p>
            <p className="mt-4 md:mt-0">Developed by Skgames</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
