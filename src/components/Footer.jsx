import React from 'react';
import { Mail, Phone, MapPin, ArrowUp, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#171717] text-white border-t border-[#2e2e2e] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#2e2e2e]"
        >
          {/* Brand Info (2 columns on large screen) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-black p-1 rounded-lg border border-white/10"
              >
                <img
                  src="/logo.png"
                  alt="Monolith Codes Logo"
                  className="h-8 w-auto object-contain"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/logo.jpg';
                  }}
                />
              </motion.div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white leading-none">
                  Monolith <span className="text-[#0070f3]">Codes</span>
                </span>
                <span className="text-[9px] font-bold tracking-[0.18em] text-[#a1a1a1] uppercase mt-1.5 leading-none">
                  Code<span className="text-[#0070f3]">.</span> Innovate<span className="text-[#0070f3]">.</span> Elevate<span className="text-[#0070f3]">.</span>
                </span>
              </div>
            </div>

            <p className="text-xs text-[#a1a1a1] leading-relaxed max-w-sm">
              Monolith Codes is an IT agency focused on delivering innovative software solutions, web applications, mobile apps, AI engineering, and cloud architecture.
            </p>

            {/* Social Media Links */}
            <div className="flex items-center space-x-3 pt-2">
              <motion.a
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#262626] flex items-center justify-center text-[#a1a1a1] hover:text-white hover:bg-[#333] transition-colors cursor-pointer"
                aria-label="GitHub"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#262626] flex items-center justify-center text-[#a1a1a1] hover:text-white hover:bg-[#0070f3] transition-colors cursor-pointer"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#262626] flex items-center justify-center text-[#a1a1a1] hover:text-white hover:bg-sky-500 transition-colors cursor-pointer"
                aria-label="Twitter / X"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#262626] flex items-center justify-center text-[#a1a1a1] hover:text-white hover:bg-pink-600 transition-colors cursor-pointer"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white">Quick Links</h4>
            <ul className="space-y-2 text-xs text-[#a1a1a1]">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#why-choose-us" className="hover:text-white transition-colors">Why Choose Us</a></li>
              <li><a href="#technologies" className="hover:text-white transition-colors">Technologies</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">Development Process</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <h4 className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white">Our Services</h4>
            <ul className="space-y-2 text-xs text-[#a1a1a1]">
              <li><a href="#services" className="hover:text-white transition-colors">Custom Software</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Website Development</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Web Applications</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Mobile App Dev</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">UI/UX Design</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">AI Solutions</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Cloud Services</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">API Development</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Maintenance & Support</a></li>
            </ul>
          </div>

          {/* Direct Contact Info */}
          <div className="space-y-3">
            <h4 className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white">Contact Info</h4>
            <ul className="space-y-2.5 text-xs text-[#a1a1a1]">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#0070f3]" />
                <a href="mailto:contact@monolithcodes.com" className="hover:text-white transition-colors">contact@monolithcodes.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#0070f3]" />
                <a href="tel:+15551234567" className="hover:text-white transition-colors">+1 (555) 123-4567</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#0070f3] flex-shrink-0 mt-0.5" />
                <span>Tech Hub Center, Innovation Drive, CA</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] sm:text-xs text-[#888888] font-medium tracking-wide">
          <div>
            Copyright © {new Date().getFullYear()} Monolith Codes. All rights reserved.
          </div>
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
