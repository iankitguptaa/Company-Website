import React, { useState } from 'react';
import { ExternalLink, Layers, X, Sparkles, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Portfolio({ onOpenConsultation }) {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Web Apps', 'AI Solutions', 'Mobile Apps', 'SaaS'];

  const projects = [
    {
      id: 1,
      title: 'Enterprise AI Knowledge Platform',
      category: 'AI Solutions',
      client: 'FinTech Enterprise',
      summary: 'Custom RAG search platform integrating LLMs for 50k+ internal financial documents.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      tech: ['React', 'Next.js', 'Python', 'OpenAI API', 'AWS'],
      metrics: '85% Faster Document Retrieval',
      details:
        'Developed an automated knowledge ingestion pipeline that indexes complex PDFs, spreadsheets, and audit logs. Leveraged vector embeddings and custom UI controls to deliver millisecond search capabilities.',
    },
    {
      id: 2,
      title: 'Scalable E-Commerce Microservices Engine',
      category: 'Web Apps',
      client: 'Global Retailer',
      summary: 'High-speed headless commerce platform processing 10,000+ daily transactions with zero latency.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      tech: ['Next.js', 'Node.js', 'Spring Boot', 'PostgreSQL', 'Docker'],
      metrics: '99.99% Uptime & 2.1x Sales Conversion',
      details:
        'Re-engineered a legacy monolithic store into modular microservices using Spring Boot and Node.js. Optimized front-end rendering with Next.js App Router for 99+ Core Web Vitals score.',
    },
    {
      id: 3,
      title: 'Telehealth & Patient Mobile Application',
      category: 'Mobile Apps',
      client: 'Healthcare Startup',
      summary: 'HIPAA-compliant cross-platform mobile app for live video consultations and lab reports.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
      tech: ['React Native', 'Node.js', 'Express.js', 'MongoDB', 'AWS'],
      metrics: '100,000+ Downloads on iOS & Android',
      details:
        'Built secure WebRTC video calls, end-to-end encrypted medical record storage, automated appointment scheduling, and push notification reminders.',
    },
    {
      id: 4,
      title: 'Cloud DevOps & Analytics SaaS Dashboard',
      category: 'SaaS',
      client: 'SaaS Platform',
      summary: 'Real-time telemetry and infrastructure monitoring dashboard with automated alerting.',
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80',
      tech: ['React', 'Express.js', 'PostgreSQL', 'Docker', 'AWS'],
      metrics: '40% Reduction in Incident Response Time',
      details:
        'Designed real-time WebSocket data charts, customized notification rules, multi-tenant RBAC security, and automated cloud backup management.',
    },
    {
      id: 5,
      title: 'Smart Logistics & Fleet Tracking App',
      category: 'Mobile Apps',
      client: 'Supply Chain Group',
      summary: 'Real-time GPS tracking app for fleet managers and drivers with route optimization.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
      tech: ['React Native', 'Java', 'Spring Boot', 'MySQL', 'Docker'],
      metrics: '18% Fuel Cost Savings per Route',
      details:
        'Integrated live mapping APIs, automated driver dispatching workflows, proof-of-delivery signature captures, and offline data sync.',
    },
    {
      id: 6,
      title: 'Automated AI Customer Service Bot',
      category: 'AI Solutions',
      client: 'Telco Corporation',
      summary: 'Natural language conversation agent supporting multilingual support ticket resolution.',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
      tech: ['Python', 'Node.js', 'MongoDB', 'OpenAI', 'GitHub Actions'],
      metrics: '70% Instant Ticket Resolution',
      details:
        'Deployed intent recognition models trained on customer support history to autonomously resolve billing inquiries, plan upgrades, and service troubleshooting.',
    },
  ];

  const filteredProjects =
    activeTab === 'All'
      ? projects
      : projects.filter((item) => item.category === activeTab);

  return (
    <section id="portfolio" className="py-20 sm:py-24 bg-[#0d0d12] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-pill text-xs font-mono text-[#0070f3]">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            FEATURED PROJECTS
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Proven Track Record of Work
          </h2>
          <p className="text-sm sm:text-lg text-[#a1a1a1]">
            Explore case studies of custom web applications, AI models, mobile apps, and enterprise software built by VertexIQ.
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
                    layoutId="activePortfolioTab"
                    className="absolute inset-0 bg-white rounded-full shadow-md"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.35 }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  boxShadow: '0 20px 40px -15px rgba(0, 112, 243, 0.3)',
                  transition: { duration: 0.25, ease: 'easeOut' }
                }}
                className="group glass-card glass-card-hover rounded-2xl overflow-hidden flex flex-col justify-between border border-white/10 hover:border-cyan-400/40"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative h-44 sm:h-48 overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.12 }}
                      transition={{ duration: 0.7 }}
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover filter brightness-90 group-hover:brightness-100"
                    />
                    <div className="absolute top-3 left-3 bg-black/80 text-white font-mono text-[10px] font-semibold px-2.5 py-1 rounded-full backdrop-blur-md border border-white/15">
                      {project.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 sm:p-6 space-y-3">
                    <div className="text-xs font-mono text-[#a1a1a1]">{project.client}</div>
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-400 transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-xs text-[#a1a1a1] leading-relaxed">
                      {project.summary}
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tech.map((t, i) => (
                        <motion.span
                          key={i}
                          whileHover={{ scale: 1.08 }}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-[#d4d4d4] border border-white/10 group-hover:border-white/20 transition-colors"
                        >
                          {t}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Bar */}
                <div className="p-5 sm:p-6 pt-0 border-t border-transparent">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedProject(project)}
                    className="w-full inline-flex items-center justify-between py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white hover:text-black border border-white/10 text-xs font-semibold text-white transition-all cursor-pointer"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Case Study Mobile-Friendly Dark Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.92, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 15 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#0d0d12] border border-white/20 rounded-2xl w-[92vw] max-w-2xl p-5 sm:p-8 space-y-5 sm:space-y-6 max-h-[88vh] overflow-y-auto shadow-2xl relative text-white"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full text-[#a1a1a1] hover:text-white hover:bg-white/10 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </motion.button>

              <div className="space-y-1.5 sm:space-y-2 pr-8">
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-white/10 text-cyan-400">
                  {selectedProject.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">{selectedProject.title}</h3>
                <p className="text-xs font-mono text-[#a1a1a1]">Client: {selectedProject.client}</p>
              </div>

              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-40 sm:h-56 object-cover rounded-xl border border-white/15"
              />

              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-mono text-[#a1a1a1] uppercase tracking-wider mb-1">Key Outcome Metric</h4>
                  <p className="text-sm sm:text-base font-bold text-emerald-400 bg-emerald-950/40 p-3 rounded-xl border border-emerald-500/30">
                    ⚡ {selectedProject.metrics}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono text-[#a1a1a1] uppercase tracking-wider mb-1">Architecture & Solution</h4>
                  <p className="text-xs sm:text-sm text-[#d4d4d4] leading-relaxed">{selectedProject.details}</p>
                </div>

                <div>
                  <h4 className="text-xs font-mono text-[#a1a1a1] uppercase tracking-wider mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {selectedProject.tech.map((t, i) => (
                      <span key={i} className="text-xs font-mono px-2.5 py-1 rounded bg-white/5 border border-white/10 text-white">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row justify-end gap-2.5">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-full sm:w-auto px-4 py-2.5 text-xs font-semibold text-[#a1a1a1] bg-white/5 rounded-full hover:bg-white/10 text-center cursor-pointer"
                >
                  Close
                </button>
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => {
                    setSelectedProject(null);
                    onOpenConsultation(selectedProject.title);
                  }}
                  className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-black bg-white rounded-full hover:bg-neutral-200 shadow-[0_0_20px_rgba(255,255,255,0.3)] text-center cursor-pointer"
                >
                  Build Similar Solution
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
