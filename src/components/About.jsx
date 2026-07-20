import React from 'react';
import { Building2, Award, Users2, Clock, CheckCircle2, ShieldCheck, HeartHandshake, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  const statistics = [
    { label: 'Projects Delivered', value: '50+', sub: 'Custom apps & software', icon: Rocket },
    { label: 'Happy Clients', value: '25+', sub: 'Startups & enterprises', icon: Users2 },
    { label: 'Years Experience', value: '2+', sub: 'Technical excellence', icon: Clock },
    { label: 'Client Satisfaction', value: '99%', sub: 'Verified reviews', icon: Award },
  ];

  const coreValues = [
    { title: 'Engineering Precision', desc: 'Clean architecture, optimized queries, and strict code reviews.' },
    { title: 'Client-Centric Mindset', desc: 'Your business growth is our primary success metric.' },
    { title: 'Rapid Execution', desc: 'Agile sprints designed to deliver usable milestones fast.' },
    { title: 'Future-Proof Tech', desc: 'Leveraging modern web, cloud, and AI technology stacks.' },
  ];

  const statsContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const statItem = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.45, ease: 'easeOut' },
    },
  };

  return (
    <section id="about" className="py-24 bg-[#0a0a0c] border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Left Story Column */}
          <motion.div 
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-pill text-xs font-mono text-[#0070f3]">
              <Building2 className="w-3.5 h-3.5 text-cyan-400" />
              ABOUT VERTEXIQ
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Transforming Ideas Into <br className="hidden sm:inline" />
              <span className="text-gradient-brand">Scalable Digital Products.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#a1a1a1] leading-relaxed">
              VertexIQ Technologies is a modern IT agency focused on delivering innovative software solutions for startups, SMEs, and enterprises. We transform ideas into scalable digital products with clean design, robust architecture, and modern technologies.
            </p>

            <p className="text-sm text-[#a1a1a1] leading-relaxed">
              Whether you need to build an MVP from scratch, refactor legacy infrastructure, deploy custom AI workflows, or launch a mobile app on iOS & Android, our dedicated team of engineers acts as your true technology partner.
            </p>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {coreValues.map((val, idx) => (
                <motion.div 
                  key={idx} 
                  whileHover={{ scale: 1.03, y: -2, boxShadow: '0 10px 25px -5px rgba(0, 112, 243, 0.2)' }}
                  className="flex items-start gap-3 p-3.5 glass-card rounded-xl border border-white/10 hover:border-white/25 transition-colors"
                >
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-white">{val.title}</h4>
                    <p className="text-[11px] text-[#a1a1a1] mt-0.5">{val.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Logo Showcase Frame */}
          <motion.div 
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl glass-card p-8 text-center space-y-6 shadow-2xl border border-white/15">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="inline-block p-4 bg-white rounded-2xl border border-white/20 shadow-lg max-w-[240px] mx-auto transition-transform"
              >
                <img
                  src="/logo.png"
                  alt="VertexIQ Technologies Official Logo"
                  className="w-full h-auto object-contain"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/logo.jpg';
                  }}
                />
              </motion.div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold tracking-tight text-white">VertexIQ Technologies</h3>
                <p className="text-xs text-[#a1a1a1] max-w-sm mx-auto font-mono">
                  Custom Software • Web & Mobile • AI & Cloud Solutions
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-center gap-6 text-xs text-[#d4d4d4] font-mono">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" /> Enterprise Grade
                </span>
                <span className="flex items-center gap-1">
                  <HeartHandshake className="w-4 h-4 text-cyan-400" /> Trusted Partner
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Statistics Grid */}
        <motion.div 
          variants={statsContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-white/10"
        >
          {statistics.map((stat, idx) => {
            const StatIcon = stat.icon;
            return (
              <motion.div
                key={idx}
                variants={statItem}
                whileHover={{ 
                  y: -6, 
                  scale: 1.05, 
                  boxShadow: '0 15px 35px -10px rgba(0, 223, 216, 0.25)',
                  transition: { duration: 0.2, ease: 'easeOut' }
                }}
                className="group glass-card glass-card-hover rounded-2xl p-6 text-center border border-white/10 hover:border-cyan-400/40"
              >
                <motion.div 
                  whileHover={{ scale: 1.2, rotate: 8 }}
                  className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center mx-auto mb-3 text-cyan-400 group-hover:bg-cyan-500/10 group-hover:border-cyan-400/40 transition-colors"
                >
                  <StatIcon className="w-5 h-5" />
                </motion.div>
                <div className="text-3xl sm:text-4xl font-black tracking-tight text-white font-mono group-hover:text-cyan-400 transition-colors">
                  {stat.value}
                </div>
                <div className="text-xs font-bold text-white mt-1">{stat.label}</div>
                <div className="text-[11px] text-[#a1a1a1] font-mono mt-0.5">{stat.sub}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
