import React, { useState } from 'react';
import { X, Send, CheckCircle2, Sparkles } from 'lucide-react';

export default function ConsultationModal({ isOpen, onClose, selectedService }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    details: selectedService ? `Requesting consultation for ${selectedService}. ` : '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 800);
  };

  const handleClose = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-fade-in text-white">
      <div className="bg-[#0d0d12] border border-white/20 rounded-2xl w-[92vw] max-w-lg p-5 sm:p-8 space-y-5 sm:space-y-6 shadow-2xl relative max-h-[88vh] overflow-y-auto">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-full text-[#a1a1a1] hover:text-white hover:bg-white/10"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="text-center py-6 sm:py-8 space-y-4 animate-fade-in">
            <div className="w-14 sm:w-16 h-14 sm:h-16 bg-emerald-500/20 border border-emerald-500/40 rounded-full flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle2 className="w-7 sm:w-8 h-7 sm:h-8" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">Consultation Scheduled!</h3>
            <p className="text-xs text-[#a1a1a1] leading-relaxed">
              Our engineering team will review your inquiry and schedule your 1-on-1 discovery call within 12 hours.
            </p>
            <button
              onClick={handleClose}
              className="px-6 py-2.5 text-xs font-semibold text-black bg-white rounded-full hover:bg-neutral-200 glow-white"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center gap-2 pr-6">
              <div className="p-2 rounded-xl bg-white/10 border border-white/15 text-cyan-400 flex-shrink-0">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white">Get Free Consultation</h3>
                <p className="text-[11px] sm:text-xs text-[#a1a1a1]">1-on-1 technical discovery call with our senior architect.</p>
              </div>
            </div>

            {selectedService && (
              <div className="p-2.5 bg-white/5 border border-white/10 rounded-lg text-xs font-mono text-cyan-400 truncate">
                Selected Interest: <span className="text-white font-semibold">{selectedService}</span>
              </div>
            )}

            <div className="space-y-1">
              <label className="text-xs font-mono text-white">Full Name *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="John Doe"
                className="w-full px-3.5 py-2.5 text-sm bg-white/5 border border-white/15 rounded-xl text-white placeholder:text-[#a1a1a1]/50 focus:outline-none focus:ring-2 focus:ring-white/20"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-mono text-white">Work Email *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="john@company.com"
                className="w-full px-3.5 py-2.5 text-sm bg-white/5 border border-white/15 rounded-xl text-white placeholder:text-[#a1a1a1]/50 focus:outline-none focus:ring-2 focus:ring-white/20"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-xs font-mono text-white">Phone</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-3.5 py-2.5 text-sm bg-white/5 border border-white/15 rounded-xl text-white placeholder:text-[#a1a1a1]/50 focus:outline-none focus:ring-2 focus:ring-white/20"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-mono text-white">Company</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Acme Corp"
                  className="w-full px-3.5 py-2.5 text-sm bg-white/5 border border-white/15 rounded-xl text-white placeholder:text-[#a1a1a1]/50 focus:outline-none focus:ring-2 focus:ring-white/20"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-mono text-white">Project Brief *</label>
              <textarea
                rows={3}
                required
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                placeholder="Tell us about your project requirements..."
                className="w-full px-3.5 py-2.5 text-sm bg-white/5 border border-white/15 rounded-xl text-white placeholder:text-[#a1a1a1]/50 focus:outline-none focus:ring-2 focus:ring-white/20 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 px-4 text-xs font-semibold text-black bg-white rounded-xl hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 glow-white active:scale-98"
            >
              {isSubmitting ? 'Submitting...' : 'Confirm Free Consultation'}
              <Send className="w-3.5 h-3.5 text-black" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
