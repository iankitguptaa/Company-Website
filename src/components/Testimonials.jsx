import React from 'react';
import { Star, MessageSquareQuote, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote:
        'VertexIQ Technologies delivered our complex SaaS web app ahead of schedule. Their attention to clean architecture, API speed, and modern UI design completely transformed our user acquisition.',
      name: 'Sarah Jenkins',
      title: 'CTO & Co-Founder',
      company: 'FinPulse Systems',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
      stars: 5,
    },
    {
      id: 2,
      quote:
        'Working with VertexIQ felt like having an elite in-house engineering team. They designed our AI workflow automation pipeline with incredible precision, clear daily communication, and zero hidden costs.',
      name: 'Marcus Vance',
      title: 'Head of Product',
      company: 'OmniStream Media',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      stars: 5,
    },
    {
      id: 3,
      quote:
        'The mobile application they built for iOS and Android achieved a 4.9-star rating on the App Store. VertexIQ handled everything from UI wireframes to AWS deployment seamlessly. Highly recommended!',
      name: 'David Chen',
      title: 'Founder & CEO',
      company: 'HealthConnect Global',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      stars: 5,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section id="testimonials" className="py-24 bg-[#0a0a0c] border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-16"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-pill text-xs font-mono text-cyan-400">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            CLIENT TRUST & FEEDBACK
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            What Our Partners Say
          </h2>
          <p className="text-base sm:text-lg text-[#a1a1a1]">
            Don't just take our word for it — hear from founders and tech executives who scaled their products with VertexIQ.
          </p>
        </motion.div>

        {/* 3 Professional Testimonial Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ 
                y: -8, 
                scale: 1.03,
                boxShadow: '0 20px 40px -15px rgba(0, 112, 243, 0.25)',
                transition: { duration: 0.25, ease: 'easeOut' }
              }}
              className="group glass-card glass-card-hover rounded-2xl p-7 flex flex-col justify-between border border-white/10 hover:border-white/30"
            >
              <div className="space-y-4">
                {/* Rating Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(item.stars)].map((_, i) => (
                    <motion.div key={i} whileHover={{ scale: 1.25, rotate: 10 }}>
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    </motion.div>
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-sm text-[#d4d4d4] leading-relaxed italic group-hover:text-white transition-colors">
                  "{item.quote}"
                </p>
              </div>

              {/* Client Profile Info */}
              <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <motion.img
                    whileHover={{ scale: 1.15 }}
                    src={item.avatar}
                    alt={item.name}
                    className="w-11 h-11 rounded-full object-cover border border-white/15 group-hover:border-cyan-400 transition-colors"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-white flex items-center gap-1 group-hover:text-cyan-400 transition-colors">
                      <span>{item.name}</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    </h4>
                    <p className="text-xs text-[#a1a1a1] font-mono">
                      {item.title}, <span className="text-white font-semibold">{item.company}</span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
