import React, { useState } from 'react';
import { Cpu, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Technologies() {
  const [activeTab, setActiveTab] = useState('All');

  const categories = ['All', 'Frontend', 'Backend', 'Database'];

  const techStack = [
    {
      name: 'React.js',
      category: 'Frontend',
      badge: 'Library',
      description: 'Declarative component-driven UI development for modern web applications.',
    },
    {
      name: 'Next.js',
      category: 'Frontend',
      badge: 'Framework',
      description: 'React framework for Server-Side Rendering, App Router, and static site generation.',
    },
    {
      name: 'Node.js',
      category: 'Backend',
      badge: 'Runtime',
      description: 'Event-driven, asynchronous JavaScript runtime built for scalable network applications.',
    },
    {
      name: 'Express.js',
      category: 'Backend',
      badge: 'Framework',
      description: 'Minimalist, fast web framework for building REST APIs and backend microservices.',
    },
    {
      name: 'Java',
      category: 'Backend',
      badge: 'Language',
      description: 'Robust, object-oriented language for enterprise-grade, mission-critical systems.',
    },
    {
      name: 'Python',
      category: 'Backend',
      badge: 'Language / AI',
      description: 'High-level language powering backend systems, data engineering, and AI/ML algorithms.',
    },
    {
      name: 'MongoDB',
      category: 'Database',
      badge: 'NoSQL',
      description: 'Document-oriented NoSQL database designed for high availability and dynamic schemas.',
    },
    {
      name: 'MySQL',
      category: 'Database',
      badge: 'Relational',
      description: 'Battle-tested relational database management system for structured data consistency.',
    },
    {
      name: 'PostgreSQL',
      category: 'Database',
      badge: 'Relational',
      description: 'Advanced open-source object-relational database with ACID compliance and JSON support.',
    },
    {
      name: 'GitHub',
      category: 'Cloud & DevOps',
      badge: 'CI/CD & Code',
      description: 'Version control, code collaboration, automated GitHub Actions, and deployment workflows.',
    },
  ];

  const filteredTech =
    activeTab === 'All'
      ? techStack
      : techStack.filter((item) => item.category === activeTab);

  return (
    <section id="technologies" className="py-20 sm:py-24 bg-[#0a0a0c] border-y border-white/10 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-pill text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-white">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            MODERN TECH STACK
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Technologies We Master
          </h2>
          <p className="text-sm sm:text-lg text-[#a1a1a1]">
            We leverage industry-standard frameworks, languages, and cloud platforms to construct resilient and maintainable software.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 mb-8 sm:mb-12 overflow-x-auto no-scrollbar py-2 px-1">
          {categories.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-4 py-2 text-xs font-semibold rounded-full transition-colors duration-200 whitespace-nowrap cursor-pointer ${
                  isActive ? 'text-black font-semibold' : 'text-[#a1a1a1] hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTechTab"
                    className="absolute inset-0 bg-white rounded-full shadow-md"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            );
          })}
        </div>

        {/* Technology Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filteredTech.map((tech) => (
              <motion.div
                key={tech.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ 
                  y: -6, 
                  scale: 1.04, 
                  boxShadow: '0 15px 35px -10px rgba(0, 112, 243, 0.3)',
                  transition: { duration: 0.2, ease: 'easeOut' } 
                }}
                className="group glass-card glass-card-hover rounded-xl p-5 flex flex-col justify-between border border-white/10 hover:border-cyan-400/40"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">{tech.name}</h3>
                    <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-white/10 border border-white/15 text-[#a1a1a1] group-hover:border-cyan-400/30 group-hover:text-white transition-colors">
                      {tech.badge}
                    </span>
                  </div>
                  <p className="text-xs text-[#a1a1a1] leading-relaxed mb-4">
                    {tech.description}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-cyan-400 pt-3 border-t border-white/5">
                  <Check className="w-3.5 h-3.5" />
                  <span>Production Standard</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
