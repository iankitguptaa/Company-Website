import React from 'react';
import {
  Users,
  Layers,
  Zap,
  Maximize2,
  ShieldAlert,
  MessageSquare,
  BadgeDollarSign,
  Headphones,
  Sparkles,
} from 'lucide-react';

export default function WhyChooseUs() {
  const pillars = [
    {
      title: 'Experienced Developers',
      icon: Users,
      desc: 'Senior software engineers and architects with deep domain knowledge across frontend, backend, and cloud.',
    },
    {
      title: 'Modern Tech Stack',
      icon: Layers,
      desc: 'Building with cutting-edge tools including React, Next.js, Node.js, Spring Boot, Python, AWS, and Docker.',
    },
    {
      title: 'Fast Delivery',
      icon: Zap,
      desc: 'Agile sprint workflows ensuring rapid prototyping, continuous integration, and on-time project milestones.',
    },
    {
      title: 'Scalable Architecture',
      icon: Maximize2,
      desc: 'Microservices and cloud-native systems designed to scale seamlessly from 1,000 to millions of concurrent users.',
    },
    {
      title: 'Secure Solutions',
      icon: ShieldAlert,
      desc: 'OWASP compliant code, end-to-end data encryption, and rigorous security practices to protect your data.',
    },
    {
      title: 'Transparent Communication',
      icon: MessageSquare,
      desc: 'Daily Slack updates, weekly demo calls, clear roadmaps, and zero hidden costs or surprises.',
    },
    {
      title: 'Affordable Pricing',
      icon: BadgeDollarSign,
      desc: 'High-caliber software engineering with flexible engagement models tailored to startup and enterprise budgets.',
    },
    {
      title: 'Dedicated Support',
      icon: Headphones,
      desc: 'Post-deployment maintenance, active monitoring, and rapid bug fixes whenever you need help.',
    },
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-[#0d0d12] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full glass-pill text-xs font-mono text-cyan-400">
            <Sparkles className="w-3.5 h-3.5" />
            THE VERTEXIQ ADVANTAGE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Why Choose VertexIQ Technologies?
          </h2>
          <p className="text-base sm:text-lg text-[#a1a1a1]">
            We bridge technical mastery with business acumen to deliver software that doesn't just work — it propels your growth.
          </p>
        </div>

        {/* 8-Grid Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={idx}
                className="glass-card glass-card-hover rounded-2xl p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center mb-4 text-cyan-400">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{pillar.title}</h3>
                  <p className="text-xs text-[#a1a1a1] leading-relaxed">{pillar.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stat Highlights Callout */}
        <div className="mt-14 p-8 rounded-2xl bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-xl border border-white/15 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <h4 className="text-xl font-bold text-white">Ready to turn your vision into scalable code?</h4>
            <p className="text-xs text-[#a1a1a1] mt-1">Our engineering squad is ready to start your project within 48 hours.</p>
          </div>
          <a
            href="#contact"
            className="px-7 py-3.5 text-xs font-bold text-black bg-white rounded-full hover:bg-neutral-200 transition-colors whitespace-nowrap glow-white"
          >
            Start Your Project Today
          </a>
        </div>
      </div>
    </section>
  );
}
