import React from 'react';
import { motion } from 'framer-motion';
import { Search, Activity, Gavel, FileText, Home, LifeBuoy, TrendingUp, ShieldCheck, ArrowRight, Zap } from 'lucide-react';

const Services = () => {
  const steps = [
    { title: "Identification", desc: "Data-led discovery of undervalued institutional land blocks crossing Gurgaon and NCR corridors.", icon: <Search size={28} /> },
    { title: "Pre-Vetting", desc: "Rigorous legal and valuation benchmarking before listing in the private portal.", icon: <Activity size={28} /> },
    { title: "Bidding Roadmap", desc: "Strategic bidding frameworks designed for maximum discount and high closure certainty.", icon: <Gavel size={28} /> },
    { title: "Transaction Loop", desc: "Handling all complex inter-bank and court coordination for members during acquisition.", icon: <FileText size={28} /> },
    { title: "Handover Control", desc: "Smooth physical possession management and corporate compliance transfer protocol.", icon: <Home size={28} /> },
    { title: "Lifecycle Strategy", desc: "Post-purchase advisory, resale network connectivity, and long-term tax planning.", icon: <LifeBuoy size={28} /> }
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="pt-48 pb-24 border-b border-zinc-50 relative overflow-hidden bg-zinc-50/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 mb-8 bg-brand-teal/5 px-5 py-2.5 rounded-full border border-brand-teal/10">
               <div className="w-2.5 h-2.5 rounded-full bg-brand-teal"></div>
               <span className="text-[11px] font-black tracking-[0.3em] uppercase text-brand-teal">Institutional Capacity</span>
            </div>
            <h1 className="text-7xl lg:text-[10rem] lg:leading-[0.85] mb-10 font-serif font-black italic tracking-tighter text-brand-dark">The Execution <br/>Cycle.</h1>
            <p className="text-2xl text-zinc-400 font-light leading-relaxed max-w-2xl">
               We remove structural complexity, not institutional control. From identification to final sovereign possession—we execute the entire lifecycle.
            </p>
          </div>
        </div>
      </section>

      {/* Process Grid */}
      <section className="section-padding bg-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
              {steps.map((step, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ y: -10 }}
                  className="bg-white p-14 rounded-[60px] border border-zinc-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.03)] hover:shadow-[0_50px_100px_-20px_rgba(0,71,67,0.1)] group transition-all duration-700 hover:border-brand-teal/10"
                >
                   <div className="w-20 h-20 rounded-[30px] bg-brand-offwhite flex items-center justify-center text-brand-teal mb-12 group-hover:bg-brand-teal group-hover:text-white group-hover:rotate-6 transition-all duration-500 shadow-sm ring-4 ring-zinc-50">
                      {step.icon}
                   </div>
                   <h3 className="text-3xl font-bold mb-6 font-serif tracking-tight text-brand-dark">{step.title}</h3>
                   <p className="text-zinc-500 text-base leading-relaxed font-medium mb-10 opacity-70 group-hover:opacity-100 transition-opacity">{step.desc}</p>
                   <div className="w-10 h-10 rounded-full border border-zinc-100 flex items-center justify-center text-zinc-300 group-hover:border-brand-teal group-hover:text-brand-teal transition-all">
                      <ArrowRight size={18} />
                   </div>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Advisory Partnership Section */}
      <section className="section-padding bg-brand-dark text-white rounded-t-[100px] mt-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-black/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-32 items-center relative z-10 py-10">
           <div>
              <span className="text-brand-gold text-xs font-black tracking-[0.5em] mb-8 block uppercase">Strategic Alliance</span>
              <h2 className="text-5xl lg:text-7xl font-serif font-black mb-12 leading-tight italic tracking-tighter">Bespoke <br/>Portfolio Design.</h2>
              <p className="text-xl lg:text-2xl text-white/50 mb-14 leading-relaxed font-light">
                 Every institutional investor operates on unique mandates. We design specific acquisition models aligned with your liquidity profile and ROI benchmarks.
              </p>
              <div className="flex flex-wrap gap-6 scale-110 origin-left">
                 <button className="btn-pill !bg-brand-teal hover:!bg-white hover:!text-brand-teal !px-12 !py-6 font-black shadow-2xl">
                    Advisory Briefing
                 </button>
                 <button className="btn-pill !border-white/20 !text-white hover:!bg-white/10 !px-10 !py-6">
                    ROI Framework 2024
                 </button>
              </div>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:rotate-3">
              {[
                { v: "15-25%", l: "Target Strategic ROI", d: "Capitalizing on liquidation distress corridors." },
                { v: "₹2,000 Cr", l: "Active Mandate Base", d: "Managing portfolios for institutional funds." }
              ].map((s, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ scale: 1.05 }}
                  className="p-12 bg-white/5 rounded-[50px] border border-white/10 backdrop-blur-xl shadow-2xl text-center"
                >
                   <p className="text-5xl font-black text-brand-gold mb-4 leading-none">{s.v}</p>
                   <p className="text-[10px] tracking-[0.3em] font-black uppercase text-white/50 mb-6">{s.l}</p>
                   <p className="text-xs text-white/30 font-medium leading-relaxed">{s.d}</p>
                </motion.div>
              ))}
              <div className="col-span-1 md:col-span-2 p-12 bg-brand-teal rounded-[50px] flex items-center gap-10 shadow-3xl shadow-brand-teal/20 border border-white/10">
                <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20"><ShieldCheck size={40} className="text-white" strokeWidth={1.5} /></div>
                <div>
                   <h5 className="font-bold text-2xl tracking-tight mb-2">Sovereign Protection</h5>
                   <p className="text-sm text-white/50 font-medium">Absolute zero physical friction guarantee during asset transition.</p>
                </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
