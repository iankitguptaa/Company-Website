import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'What services does Monolith Codes specialize in?',
      answer:
        'Monolith Codes specializes in end-to-end custom software development, web applications, high-converting websites, mobile apps (iOS & Android), UI/UX design, AI solution integrations, cloud infrastructure, and 24/7 technical support.',
    },
    {
      question: 'How long does a typical software project take from start to finish?',
      answer:
        'Project timelines vary based on scope and complexity. Small to medium web projects typically take 2-4 weeks, while complex enterprise SaaS platforms or custom AI integrations range from 6 to 12 weeks. We work in 2-week agile sprints to deliver working milestones rapidly.',
    },
    {
      question: 'What is your engagement and pricing model?',
      answer:
        'We offer flexible engagement models tailored to your budget: Fixed-Price contracts for well-defined project scopes, or Time & Materials / Dedicated Developer Teams for ongoing product development and scaling.',
    },
    {
      question: 'Do you sign Non-Disclosure Agreements (NDA) and transfer full IP ownership?',
      answer:
        'Absolutely. Confidentiality and security are paramount. We sign strict NDAs before project kickoff, and upon project completion, 100% of the source code, intellectual property, and copyright are transferred to your company.',
    },
    {
      question: 'How do we communicate and track project progress?',
      answer:
        'We maintain complete transparency. You will have a dedicated Project Manager, direct Slack/Teams channel communication, weekly video progress demos, and staging environment access to test live features as they are built.',
    },
    {
      question: 'Do you offer ongoing post-launch maintenance and support?',
      answer:
        'Yes! We provide dedicated SLA maintenance packages including 24/7 cloud server monitoring, security updates, bug fixes, feature enhancements, and performance optimization.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="min-h-[85vh] py-28 sm:py-36 bg-[#0a0a0c] border-y border-white/10 scroll-mt-24 flex flex-col justify-center">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-16"
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full glass-pill text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-white">
            <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Got Questions? We Have Answers.
          </h2>
          <p className="text-base sm:text-lg text-[#a1a1a1]">
            Everything you need to know about partnering with Monolith Codes.
          </p>
        </motion.div>

        {/* Accordion List */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="glass-card rounded-2xl border border-white/10 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none group cursor-pointer"
                >
                  <span className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-400 transition-colors pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className={`w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-white ${
                      isOpen ? 'bg-white/15 text-cyan-400' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 pb-6 pt-0 text-sm text-[#a1a1a1] leading-relaxed border-t border-white/5">
                        <p className="pt-4">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>

        {/* Bottom Contact Help Box */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center p-6 rounded-2xl glass-card border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-cyan-400">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Have a specific technical question?</h4>
              <p className="text-xs text-[#a1a1a1]">Our engineering architects are here to help you.</p>
            </div>
          </div>
          <motion.a
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255,255,255,0.4)' }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="px-6 py-2.5 text-xs font-semibold text-black bg-white rounded-full hover:bg-neutral-200 transition-colors whitespace-nowrap cursor-pointer"
          >
            Ask Us Anything
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
