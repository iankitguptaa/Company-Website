import React from 'react';
import { ArrowRight, Sparkles, Terminal, CheckCircle2, ShieldCheck, Zap, Server, Code, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero({ onOpenConsultation }) {
  const heroStats = [
    { value: '50+', label: 'PROJECTS DELIVERED' },
    { value: '25+', label: 'HAPPY CLIENTS' },
    { value: '2+', label: 'YEARS EXPERIENCE' },
    { value: '99%', label: 'CLIENT SATISFACTION' },
  ];

  return (
    <section id="home" className="relative min-h-[90vh] flex flex-col justify-between pt-28 sm:pt-36 pb-16 sm:pb-20 overflow-hidden bg-[#08080c]">
      {/* Full-Bleed Iconic IT Software Engineering Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1.05, opacity: 0.9 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=2400&q=80"
          alt="IT Software Development & Code Background"
          className="w-full h-full object-cover object-center filter contrast-125 brightness-90"
        />
        {/* Soft Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#08080c]/85 via-[#08080c]/60 to-[#08080c]" />
        <motion.div 
          animate={{ 
            opacity: [0.15, 0.25, 0.15],
            scale: [1, 1.05, 1] 
          }} 
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,112,243,0.18)_0%,rgba(8,8,12,0.85)_80%)]" 
        />
        <div className="absolute inset-0 bg-dark-grid opacity-20 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-grow flex flex-col justify-center py-6 sm:py-8">
        <div className="text-center max-w-4xl mx-auto space-y-5 sm:space-y-7">
          {/* Top Capsule Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full border border-white/25 bg-black/60 backdrop-blur-md text-[10px] sm:text-xs font-mono text-[#d4d4d4] shadow-2xl max-w-full"
          >
            <Code className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 animate-pulse" />
            <span className="text-white font-semibold uppercase tracking-wider sm:tracking-widest truncate">
              CUSTOM SOFTWARE & DIGITAL SOLUTIONS AGENCY
            </span>
          </motion.div>

          {/* Huge Bold White Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            className="text-3xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-tight sm:leading-[1.05] drop-shadow-2xl"
          >
            Building Digital Products That <br className="hidden sm:inline" />
            <span className="text-gradient-brand">Drive Business Growth.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="text-sm sm:text-lg md:text-xl text-[#d4d4d4] max-w-2xl mx-auto font-normal leading-relaxed drop-shadow-md px-2"
          >
            We help startups and businesses build scalable websites, web applications, and mobile apps.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2 sm:pt-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255,255,255,0.45)' }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenConsultation}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 text-sm font-semibold text-black bg-white rounded-full transition-all group shadow-2xl cursor-pointer"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          {/* Code Terminal Mockup Window */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 sm:mt-12 max-w-3xl mx-auto text-left"
          >
            <div className="rounded-xl sm:rounded-2xl border border-white/20 bg-[#0d0d12]/95 text-white shadow-2xl backdrop-blur-2xl overflow-hidden hover:border-white/35 transition-colors">
              <div className="flex items-center justify-between px-3.5 sm:px-4 py-2.5 sm:py-3 bg-[#08080c] border-b border-white/10">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#ff5f56]" />
                  <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#27c93f]" />
                  <span className="ml-1 sm:ml-2 font-mono text-[10px] sm:text-xs text-[#a1a1a1]">monolith-cli v2.4</span>
                </div>
                <span className="text-[10px] sm:text-xs font-mono text-cyan-400 flex items-center gap-1">
                  <Cpu className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> High-Performance Engine
                </span>
              </div>

              <div className="p-4 sm:p-5 font-mono text-[11px] sm:text-xs leading-relaxed text-[#d4d4d4] space-y-2 overflow-x-auto">
                <div className="flex items-center gap-2 text-emerald-400">
                  <Terminal className="w-4 h-4 flex-shrink-0" />
                  <span className="whitespace-nowrap">$ npx monolith init --stack fullstack-cloud-ai</span>
                </div>
                <div className="text-[#a1a1a1] text-[10px] sm:text-xs">
                  ✔ Deploying React, Next.js, Node.js & Spring Boot microservices...<br />
                  ✔ AWS Cloud Infrastructure online with 99.99% uptime guarantee.
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Hero Stats Row */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative z-10 border-t border-white/15 bg-black/70 backdrop-blur-md py-6 sm:py-8"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
            {heroStats.map((stat, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ scale: 1.05 }}
                className="space-y-0.5 sm:space-y-1 p-2 rounded-xl transition-colors hover:bg-white/5"
              >
                <div className="text-2xl sm:text-5xl font-black text-white tracking-tight font-mono drop-shadow">
                  {stat.value}
                </div>
                <div className="text-[9px] sm:text-xs font-mono text-[#a1a1a1] tracking-wider sm:tracking-widest uppercase font-semibold">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
