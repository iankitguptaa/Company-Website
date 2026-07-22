import React from 'react';
import {
  Code,
  Globe,
  Layout,
  Smartphone,
  Palette,
  TrendingUp,
  Wrench,
  ArrowRight,
  Check,
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function Services({ onOpenConsultation }) {
  const servicesList = [
    {
      id: 'website-dev',
      title: 'Website Development',
      icon: Globe,
      badge: 'Popular',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      description:
        'High-converting, responsive, and SEO-optimized websites built with Next.js and Tailwind to showcase your brand.',
      features: ['Responsive Next.js / React', 'Headless CMS Integration', 'Core Web Vitals 99+', 'SEO & Performance Optimized'],
    },
    {
      id: 'web-app',
      title: 'Web Application Development',
      icon: Layout,
      badge: 'High Impact',
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
      description:
        'Scalable, feature-rich web applications with rich user interfaces, real-time interactivity, and enterprise backend systems.',
      features: ['SaaS Product Build', 'Real-time Dashboards', 'PWAs & Web Apps', 'Secure Authentication'],
    },
    {
      id: 'mobile-app',
      title: 'Mobile App Development',
      icon: Smartphone,
      badge: 'iOS & Android',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
      description:
        'Native and cross-platform mobile apps for iOS and Android delivering smooth performance and intuitive UX.',
      features: ['React Native & Flutter', 'Offline First Sync', 'Push Notifications', 'App Store Publishing'],
    },
    {
      id: 'ui-ux',
      title: 'UI/UX Design',
      icon: Palette,
      badge: 'Design System',
      image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80',
      description:
        'User-centric wireframing, interactive prototyping, and polished design systems that deliver delightful digital experiences.',
      features: ['Figma Design Systems', 'User Research & Wireframes', 'Interactive Prototypes', 'Conversion Rate Optimization'],
    },
    {
      id: 'seo-digital-growth',
      title: 'SEO & Digital Growth',
      icon: TrendingUp,
      badge: 'Growth & Organic',
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=800&q=80',
      description:
        'Data-driven Search Engine Optimization, Technical SEO audits, keyword ranking, content strategy, and organic growth.',
      features: ['Technical & On-Page SEO', 'Keyword & Competitor Analysis', 'Core Web Vitals Optimization', 'Organic Traffic & Conversion Growth'],
    },
    {
      id: 'maintenance',
      title: 'Maintenance & Support',
      icon: Wrench,
      badge: 'Reliability',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
      description:
        'Continuous monitoring, security patches, performance tuning, and 24/7 technical support to keep your software running flawlessly.',
      features: ['24/7 SLA Uptime', 'Security Audit & Updates', 'Performance Optimization', 'Dedicated Support Team'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
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
    <section id="services" className="py-24 bg-[#0a0a0c] border-y border-white/10 relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-3 mb-16"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-pill text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-white">
            <Code className="w-3.5 h-3.5 text-cyan-400" />
            DIVERSE CAPABILITIES
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Designed for Every Need.
          </h2>
          <p className="text-sm sm:text-base text-[#a1a1a1]">
            Explore dedicated workflows custom-tailored for the unique demands of each digital product.
          </p>
        </motion.div>

        {/* Services Dark Glassmorphic Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {servicesList.map((service) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  boxShadow: '0 20px 40px -15px rgba(0, 112, 243, 0.3)',
                  transition: { duration: 0.25, ease: 'easeOut' } 
                }}
                className="group relative rounded-2xl overflow-hidden glass-card glass-card-hover flex flex-col justify-between border border-white/10 hover:border-white/30"
              >
                {/* Background Image Container with Gradient Overlay */}
                <div className="relative h-44 overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.12 }}
                    transition={{ duration: 0.7 }}
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover filter brightness-75 group-hover:brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d12] via-[#0d0d12]/60 to-transparent" />

                  {/* Floating Icon Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <motion.div 
                      whileHover={{ scale: 1.15, rotate: 6 }}
                      className="p-2.5 rounded-xl bg-black/70 backdrop-blur-md border border-white/15 text-white transition-transform"
                    >
                      <IconComponent className="w-5 h-5 text-cyan-400" />
                    </motion.div>
                  </div>

                  <div className="absolute top-4 right-4">
                    <motion.span 
                      whileHover={{ scale: 1.08 }}
                      className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white inline-block"
                    >
                      {service.badge}
                    </motion.span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 space-y-4 relative z-10 flex-grow">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#a1a1a1] leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-1.5 pt-2">
                    {service.features.map((feature, idx) => (
                      <motion.li 
                        key={idx} 
                        whileHover={{ x: 3 }}
                        className="flex items-center gap-2 text-xs text-[#d4d4d4] transition-transform"
                      >
                        <Check className="w-3.5 h-3.5 text-[#0070f3] flex-shrink-0" />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Action */}
                <div className="p-6 pt-0 border-t border-white/5">
                  <button
                    onClick={() => onOpenConsultation(service.title)}
                    className="w-full flex items-center justify-between text-xs font-semibold text-[#a1a1a1] group-hover:text-white transition-colors pt-3 cursor-pointer"
                  >
                    <span>Request Service</span>
                    <span className="flex items-center gap-1 group-hover:translate-x-1.5 transition-transform">
                      Explore Service &gt;
                    </span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
