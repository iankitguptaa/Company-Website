import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Technologies from './components/Technologies';
import Process from './components/Process';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ConsultationModal from './components/ConsultationModal';

function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [prefilledService, setPrefilledService] = useState('');

  const handleOpenConsultation = (serviceName = '') => {
    setPrefilledService(serviceName);
    setIsConsultationOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-[#fcfcfc] selection:bg-[#171717] selection:text-[#ffffff] font-sans antialiased">
      {/* Sticky Navigation Header */}
      <Navbar onOpenConsultation={() => handleOpenConsultation()} />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenConsultation={() => handleOpenConsultation()} />
        <Services onOpenConsultation={(service) => handleOpenConsultation(service)} />
        <WhyChooseUs />
        <Technologies />
        <Process />
        <About />
        <Portfolio onOpenConsultation={(service) => handleOpenConsultation(service)} />
        <Testimonials />
        <FAQ />
        <Contact prefilledService={prefilledService} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        selectedService={prefilledService}
      />
    </div>
  );
}

export default App;
