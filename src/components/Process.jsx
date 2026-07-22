import React, { useState } from 'react';
import { GitCommit, ArrowRight, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  const processSteps = [
    {
      step: '01',
      title: 'Discovery',
      subtitle: 'Requirement Analysis & Goals',
      description:
        'We dive deep into your business objectives, target audience, technical needs, and competitive landscape to establish clear project parameters.',
      deliverables: ['Scope Definition Document', 'Technical Requirements Spec', 'Project Budget & Timeline'],
    },
    {
      step: '02',
      title: 'Planning',
      subtitle: 'Architecture & Strategy',
      description:
        'Our software architects lay out the system blueprint, database schemas, API structures, cloud infrastructure choices, and milestone roadmaps.',
      deliverables: ['System Architecture Diagram', 'Database ERD Schema', 'Sprint Breakdown Schedule'],
    },
    {
      step: '03',
      title: 'Design',
      subtitle: 'UI/UX & Prototyping',
      description:
        'We craft pixel-perfect wireframes, responsive UI component libraries, and interactive Figma prototypes aligned with your brand identity.',
      deliverables: ['Figma UI Design System', 'Interactive Clickable Prototype', 'Design Review Approval'],
    },
    {
      step: '04',
      title: 'Development',
      subtitle: 'Agile Code Engineering',
      description:
        'Our engineers write clean, modular, and well-tested code in 2-week agile sprints with continuous code reviews and staging builds.',
      deliverables: ['Modular Codebase', 'REST/GraphQL API Integration', 'Staging Environment Access'],
    },
    {
      step: '05',
      title: 'Testing',
      subtitle: 'QA & Security Audits',
      description:
        'Comprehensive manual and automated testing across devices, browsers, load performance, security vulnerabilities, and edge cases.',
      deliverables: ['QA Test Execution Report', 'Performance Benchmark Audit', 'OWASP Security Verification'],
    },
    {
      step: '06',
      title: 'Deployment',
      subtitle: 'Production Launch',
      description:
        'Zero-downtime deployment to cloud infrastructure (AWS/Vercel/Docker) equipped with SSL, CDN caching, and automated monitoring.',
      deliverables: ['Live Production Deployment', 'Cloud Infrastructure Handover', 'Source Code Repository Access'],
    },
    {
      step: '07',
      title: 'Maintenance',
      subtitle: 'Monitoring & Optimization',
      description:
        'Ongoing technical support, performance tracking, feature enhancements, and system upgrades to ensure continuous growth.',
      deliverables: ['24/7 SLA Technical Support', 'Monthly Analytics & Maintenance', 'Feature Roadmap Scaling'],
    },
  ];

  return (
    <section id="process" className="py-24 bg-[#0d0d12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-16"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-pill text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-white">
            <GitCommit className="w-3.5 h-3.5 text-cyan-400" />
            WORKFLOW METHODOLOGY
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Our 7-Step Development Process
          </h2>
          <p className="text-base sm:text-lg text-[#a1a1a1]">
            A structured, transparent engineering lifecycle designed to turn complex ideas into high-performing software on schedule.
          </p>
        </motion.div>

        {/* Stepper Navigation */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4 mb-10 overflow-x-auto">
          {processSteps.map((item, index) => {
            const isActive = activeStep === index;
            return (
              <button
                key={item.step}
                onClick={() => setActiveStep(index)}
                className={`relative flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs font-semibold transition-colors duration-200 whitespace-nowrap cursor-pointer ${
                  isActive ? 'text-black font-semibold' : 'text-[#a1a1a1] hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeProcessTab"
                    className="absolute inset-0 bg-white rounded-xl shadow-md"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span
                  className={`relative z-10 font-mono text-[11px] px-1.5 py-0.5 rounded transition-colors ${
                    isActive ? 'bg-black/20 text-black font-bold' : 'bg-white/10 text-[#a1a1a1]'
                  }`}
                >
                  {item.step}
                </span>
                <span className="relative z-10">{item.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Step Display Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-2xl p-8 border border-white/15 shadow-2xl"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Info */}
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs font-mono text-cyan-400">
                  <span>Phase {processSteps[activeStep].step} of 07</span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    {processSteps[activeStep].title}
                  </h3>
                  <p className="text-sm font-medium text-[#a1a1a1] mt-1 font-mono">
                    {processSteps[activeStep].subtitle}
                  </p>
                </div>

                <p className="text-sm sm:text-base text-[#d4d4d4] leading-relaxed">
                  {processSteps[activeStep].description}
                </p>

                {/* Deliverables Checklist */}
                <div className="pt-4 space-y-2">
                  <span className="text-xs font-mono text-[#a1a1a1] uppercase tracking-wider block">
                    Key Deliverables:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {processSteps[activeStep].deliverables.map((del, i) => (
                      <motion.div 
                        key={i} 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.08 }}
                        className="flex items-center gap-2 text-xs font-medium text-white bg-white/5 p-2.5 rounded-xl border border-white/10"
                      >
                        <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        <span>{del}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Terminal Box */}
              <div className="lg:col-span-5 bg-black/60 rounded-xl p-6 border border-white/15 space-y-4 font-mono text-xs">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-[#a1a1a1]">PHASE_{processSteps[activeStep].step}_STATUS</span>
                  <span className="text-emerald-400">● ACTIVE</span>
                </div>
                <div className="space-y-2 text-[#d4d4d4]">
                  <div className="flex justify-between">
                    <span>Methodology:</span>
                    <span className="text-cyan-400">Agile Scrum / CI-CD</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Quality Gate:</span>
                    <span className="text-amber-400">Strict Code Review</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Documentation:</span>
                    <span className="text-purple-400">100% Maintained</span>
                  </div>
                </div>
                <div className="pt-4 border-t border-white/10 flex justify-between items-center text-[11px] text-[#a1a1a1]">
                  <span>Inspect workflow phases above.</span>
                  <ArrowRight className="w-4 h-4 text-cyan-400" />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
