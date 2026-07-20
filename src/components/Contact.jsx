import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Sparkles, Clock, ShieldCheck } from 'lucide-react';

export default function Contact({ prefilledService }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectDetails: prefilledService ? `I am interested in ${prefilledService}. ` : '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', company: '', projectDetails: '' });
    }, 800);
  };

  return (
    <section id="contact" className="py-24 bg-[#0d0d12] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Call-to-Action Banner */}
        <div className="mb-20 glass-card rounded-3xl p-8 sm:p-12 text-white shadow-2xl border border-white/15 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#0070f3]/30 via-[#7928ca]/20 to-[#eb367f]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 text-center max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-xs font-mono text-cyan-300 backdrop-blur-md border border-white/15">
              <Sparkles className="w-3.5 h-3.5" />
              <span>START YOUR DIGITAL TRANSFORMATION</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Let's Build Something Amazing Together.
            </h2>

            <p className="text-base sm:text-lg text-[#a1a1a1] leading-relaxed">
              Have a new software project, an AI solution to deploy, or an existing system to scale? Talk to our senior engineers today for a free technical consultation.
            </p>
          </div>
        </div>

        {/* Contact Form & Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Direct Contact Column */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-2">
                GET IN TOUCH
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                We're ready to discuss your next breakthrough.
              </h3>
              <p className="text-sm text-[#a1a1a1] mt-3 leading-relaxed">
                Fill out the form or reach out directly. Our team responds within 12 hours guaranteed.
              </p>
            </div>

            {/* Cards */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 glass-card rounded-2xl">
                <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-cyan-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-[#a1a1a1]">EMAIL US</div>
                  <a href="mailto:contact@vertexiqtech.com" className="text-sm font-bold text-white hover:text-cyan-400">
                    contact@vertexiqtech.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 glass-card rounded-2xl">
                <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-cyan-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-[#a1a1a1]">CALL US</div>
                  <a href="tel:+15551234567" className="text-sm font-bold text-white hover:text-cyan-400">
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 glass-card rounded-2xl">
                <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-cyan-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-[#a1a1a1]">HEADQUARTERS</div>
                  <p className="text-sm font-bold text-white">
                    Tech Hub Center, Innovation Drive, CA
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 glass-card rounded-2xl space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-white">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span>Rapid 12-Hour SLA Response</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-white">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>NDA Protected & Confidential</span>
              </div>
            </div>
          </div>

          {/* Right Contact Form Column */}
          <div className="lg:col-span-7 glass-card rounded-2xl p-8 shadow-2xl border border-white/15">
            {isSubmitted ? (
              <div className="text-center py-12 space-y-4 animate-fade-in">
                <div className="w-16 h-16 bg-emerald-500/20 border border-emerald-500/40 rounded-full flex items-center justify-center mx-auto text-emerald-400">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold text-white">Message Received!</h4>
                <p className="text-sm text-[#a1a1a1] max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out to VertexIQ Technologies. One of our lead software architects will review your requirements and contact you within 12 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2.5 text-xs font-semibold text-black bg-white rounded-full hover:bg-neutral-200 glow-white"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h4 className="text-xl font-bold text-white mb-2">Request Free Consultation</h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-white font-medium block">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-2.5 text-sm bg-white/5 border border-white/15 rounded-xl text-white placeholder:text-[#a1a1a1]/60 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-white font-medium block">
                      Work Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="w-full px-4 py-2.5 text-sm bg-white/5 border border-white/15 rounded-xl text-white placeholder:text-[#a1a1a1]/60 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-white font-medium block">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-2.5 text-sm bg-white/5 border border-white/15 rounded-xl text-white placeholder:text-[#a1a1a1]/60 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-white font-medium block">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Acme Corp"
                      className="w-full px-4 py-2.5 text-sm bg-white/5 border border-white/15 rounded-xl text-white placeholder:text-[#a1a1a1]/60 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-white font-medium block">
                    Project Details & Goals <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    name="projectDetails"
                    rows={4}
                    required
                    value={formData.projectDetails}
                    onChange={handleChange}
                    placeholder="Describe your project, desired features, timeline, and tech stack preferences..."
                    className="w-full px-4 py-2.5 text-sm bg-white/5 border border-white/15 rounded-xl text-white placeholder:text-[#a1a1a1]/60 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 text-sm font-semibold text-black bg-white rounded-xl hover:bg-neutral-200 transition-all glow-white active:scale-[0.99] disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Sending Inquiry...</span>
                  ) : (
                    <>
                      <span>Submit Consultation Request</span>
                      <Send className="w-4 h-4 text-black" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
