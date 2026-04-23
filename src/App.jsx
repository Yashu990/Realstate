import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Membership from './pages/Membership';
import Services from './pages/Services';
import Insights from './pages/Insights';
import Properties from './pages/Properties';
import FAQ from './pages/FAQ';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  return null;
};

const ContactSection = () => (
  <section className="section-padding bg-zinc-50 relative overflow-hidden">
    {/* Decorative blur */}
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-3xl -z-10 -translate-y-1/2 translate-x-1/2"></div>
    
    <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-24 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-brand-gold text-[10px] font-black tracking-[0.4em] mb-6 block uppercase">Confidential Intake</span>
        <h2 className="text-5xl lg:text-7xl font-bold mb-10 tracking-tighter leading-tight text-brand-navy">Institutional <br/><span className="font-normal italic">Engagement.</span></h2>
        <p className="text-lg text-zinc-500 font-medium mb-12 max-w-sm leading-relaxed">Our advisors are available for confidential strategy discussions regarding large-scale land banking and NCLT portfolios.</p>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="bg-white p-12 lg:p-16 shadow-2xl rounded-5xl border border-zinc-100"
      >
         <div className="grid grid-cols-2 gap-6 mb-6">
            <input type="text" placeholder="First Name" className="w-full p-5 bg-zinc-50 border-none rounded-2xl outline-none focus:ring-2 focus:ring-brand-gold/20 transition-all text-sm font-medium" />
            <input type="text" placeholder="Last Name" className="w-full p-5 bg-zinc-50 border-none rounded-2xl outline-none focus:ring-2 focus:ring-brand-gold/20 transition-all text-sm font-medium" />
         </div>
         <input type="email" placeholder="Institutional Email" className="w-full p-5 bg-zinc-50 border-none rounded-2xl mb-6 outline-none focus:ring-2 focus:ring-brand-gold/20 transition-all text-sm font-medium" />
         <textarea placeholder="Portfolio mandate details..." className="w-full p-5 bg-zinc-50 border-none rounded-2xl mb-10 min-h-[140px] outline-none focus:ring-2 focus:ring-brand-gold/20 transition-all text-sm font-medium"></textarea>
         <button className="btn-pill btn-primary !bg-brand-navy w-full !py-6 shadow-2xl shadow-[0_20px_50px_rgba(10,17,40,0.2)] font-black uppercase text-xs tracking-widest">
            <span>Request Confidential Prospectus</span>
         </button>
      </motion.div>
    </div>
  </section>
);

const App = () => {
  return (
    <div className="min-h-screen bg-white selection:bg-brand-teal selection:text-white">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/services" element={<Services />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;
