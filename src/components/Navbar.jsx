import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ChevronRight, Sparkles } from 'lucide-react';

export default function Navbar({ onOpenConsultation }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = [
        'home',
        'services',
        'why-choose-us',
        'technologies',
        'process',
        'about',
        'portfolio',
        'testimonials',
        'faq',
        'contact',
      ];

      const focalLine = window.scrollY + window.innerHeight * 0.35;

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
        setActiveSection('contact');
        return;
      }

      let currentSection = 'home';

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.getBoundingClientRect().top + window.pageYOffset;
          const height = el.offsetHeight;

          if (focalLine >= top && focalLine < top + height) {
            currentSection = id;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Why Us', href: '#why-choose-us', id: 'why-choose-us' },
    { name: 'Technologies', href: '#technologies', id: 'technologies' },
    { name: 'Process', href: '#process', id: 'process' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Portfolio', href: '#portfolio', id: 'portfolio' },
    { name: 'Testimonials', href: '#testimonials', id: 'testimonials' },
    { name: 'FAQ', href: '#faq', id: 'faq' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e, href, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setActiveSection(id);

    const targetElement = document.querySelector(href);
    if (targetElement) {
      const yOffset = -90;
      const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-3 sm:py-4 px-3 sm:px-6 lg:px-8 transition-all duration-300">
      {/* Floating Glassmorphic Container */}
      <div
        className={`max-w-7xl mx-auto rounded-xl sm:rounded-full transition-all duration-300 border ${
          isScrolled
            ? 'bg-white/[0.08] backdrop-blur-2xl backdrop-saturate-150 border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] py-2 sm:py-2.5 px-3 sm:px-6'
            : 'bg-white/[0.04] backdrop-blur-xl border-white/15 py-2.5 sm:py-3 px-3 sm:px-6'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home', 'home')}
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none rounded-lg p-0.5"
          >
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/10 p-1 sm:p-1.5 backdrop-blur-md transition-transform group-hover:scale-105">
              <img
                src="/logo.png"
                alt="VertexIQ Technologies Logo"
                className="h-6 sm:h-8 w-auto object-contain brightness-110"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/logo.jpg';
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-lg font-bold tracking-tight text-white flex items-center gap-1">
                vertex<span className="text-[#0070f3]">IQ</span>
              </span>
              <span className="text-[7px] sm:text-[9px] tracking-widest uppercase font-mono text-[#a1a1a1]">
                Technologies
              </span>
            </div>
          </a>

          {/* Desktop Glassmorphic Nav Pill List */}
          <nav className="hidden lg:flex items-center space-x-1 bg-black/40 backdrop-blur-xl border border-white/15 px-3 py-1.5 rounded-full shadow-inner">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                  activeSection === link.id
                    ? 'bg-white text-black font-semibold shadow-[0_0_15px_rgba(255,255,255,0.4)]'
                    : 'text-[#a1a1a1] hover:text-white hover:bg-white/10'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Glass Action Button */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-black bg-white/90 hover:bg-white backdrop-blur-md rounded-full transition-all transform active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-3.5 h-3.5 text-black" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:bg-white/10 rounded-xl transition-colors active:scale-95 border border-white/10 bg-white/5"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Glass Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden max-w-7xl mx-auto mt-2 bg-[#0d0d12]/95 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-2xl p-5 transition-all duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.id)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-white text-black font-semibold'
                    : 'text-[#a1a1a1] hover:bg-white/10 hover:text-white'
                }`}
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 opacity-60" />
              </a>
            ))}
            <div className="pt-3 border-t border-white/10 mt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-black bg-white rounded-xl hover:bg-neutral-200 transition-all shadow-md active:scale-98"
              >
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span>Get Free Consultation</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
