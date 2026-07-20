import React, { useState } from 'react';
import { Cpu, Check } from 'lucide-react';

export default function Technologies() {
  const [activeTab, setActiveTab] = useState('All');

  const categories = ['All', 'Frontend', 'Backend', 'Database'];

  const techStack = [
    {
      name: 'React',
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
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-pill text-xs font-mono text-[#0070f3]">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            MODERN TECH STACK
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Technologies We Master
          </h2>
          <p className="text-sm sm:text-lg text-[#a1a1a1]">
            We leverage industry-standard frameworks, languages, and cloud platforms to construct resilient and maintainable software.
          </p>
        </div>

        {/* Filter Tabs (Mobile Scrollable) */}
        <div className="flex items-center justify-start sm:justify-center gap-2 mb-8 sm:mb-12 overflow-x-auto no-scrollbar py-2 px-1">
          {categories.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-xs font-semibold rounded-full transition-all duration-200 whitespace-nowrap ${
                activeTab === tab
                  ? 'bg-white text-black font-semibold shadow-md'
                  : 'bg-white/5 border border-white/10 text-[#a1a1a1] hover:text-white hover:bg-white/10'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Technology Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {filteredTech.map((tech) => (
            <div
              key={tech.name}
              className="glass-card glass-card-hover rounded-xl p-5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-white">{tech.name}</h3>
                  <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-white/10 border border-white/15 text-[#a1a1a1]">
                    {tech.badge}
                  </span>
                </div>
                <p className="text-xs text-[#a1a1a1] leading-relaxed mb-4">
                  {tech.description}
                </p>
              </div>

              <div className="flex items-center gap-1.5 text-[11px] font-mono text-cyan-400 pt-3 border-t border-white/5">
                <Check className="w-3.5 h-3.5" />
                <span>Production Standard</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
