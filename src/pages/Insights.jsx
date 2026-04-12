import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, PieChart, Activity, Zap, ArrowRight, Download, Globe, Lock, Calendar } from 'lucide-react';

const Insights = () => {
  const reports = [
    { t: "Quarterly Market Report", d: "A deep dive into institutional pricing trends and auction volume surge across NCR.", icon: <BarChart3 size={32} /> },
    { t: "Growth Corridor Discovery", d: "Identifying high-appreciation land blocks and NCLT residential clusters.", icon: <Globe size={32} /> },
    { t: "ROI Benchmarking", d: "Data-led performance analysis comparing market entry vs auction entry (Target 15-25%).", icon: <PieChart size={32} /> }
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="pt-48 pb-24 border-b border-zinc-50 relative overflow-hidden bg-zinc-50/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 mb-8 bg-brand-teal/5 px-5 py-2.5 rounded-full border border-brand-teal/10">
               <div className="w-2.5 h-2.5 rounded-full bg-brand-teal"></div>
               <span className="text-[11px] font-black tracking-[0.3em] uppercase text-brand-teal">Institutional Intel Hub</span>
            </div>
            <h1 className="text-7xl lg:text-[10rem] lg:leading-[0.85] mb-10 font-serif font-black italic tracking-tighter text-brand-dark">Intel Engine.</h1>
            <p className="text-2xl text-zinc-400 font-light leading-relaxed max-w-2xl">
               PremiumLand Auctions provides high-fidelity market reports and growth corridor heat maps reserved for the institutional network.
            </p>
          </div>
        </div>
      </section>

      {/* Events Banner */}
      <section className="py-12 bg-brand-teal text-white overflow-hidden relative">
         <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-10">
           <div className="flex items-center gap-6">
              <Calendar className="text-brand-gold animate-bounce" size={40} />
              <div>
                 <h4 className="text-2xl font-bold tracking-tight">4 Quarterly Investor Events</h4>
                 <p className="text-white/60 text-sm font-medium tracking-widest uppercase">Member-Only Physical Gatherings Per Year</p>
              </div>
           </div>
           <button className="px-8 py-4 bg-white text-brand-teal rounded-full text-[10px] font-black tracking-widest uppercase hover:scale-110 transition-transform shadow-2xl">
              Register for Next Event
           </button>
         </div>
         <div className="absolute top-0 right-0 h-full w-full bg-gradient-to-r from-transparent via-transparent to-white/5 pointer-events-none"></div>
      </section>

      {/* Reports Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-3 gap-12 lg:gap-16">
           {reports.map((v, i) => (
             <motion.div 
               key={i} 
               whileHover={{ y: -10 }}
               className="bg-white p-14 rounded-[60px] border border-zinc-100 group shadow-[0_20px_40px_-15px_rgba(0,0,0,0.02)] hover:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.08)] transition-all duration-700 hover:border-brand-teal/20"
             >
                <div className="w-20 h-20 rounded-[30px] bg-brand-offwhite flex items-center justify-center text-brand-teal mb-14 group-hover:bg-brand-teal group-hover:text-white transition-all duration-500 shadow-sm">
                   {v.icon}
                </div>
                <h3 className="text-3xl font-bold mb-6 font-serif tracking-tight text-brand-dark">{v.t}</h3>
                <p className="text-zinc-500 text-base leading-relaxed mb-12 font-medium opacity-60 group-hover:opacity-100 transition-opacity">{v.d}</p>
                <button className="flex items-center gap-4 text-[11px] font-black tracking-[0.3em] uppercase text-brand-teal group-hover:text-brand-dark transition-colors">
                   <span>Private Access</span>
                   <Lock size={16} />
                </button>
             </motion.div>
           ))}
        </div>
      </section>

      {/* Flagship Featured Insight */}
      <section className="section-padding bg-zinc-50 overflow-hidden">
         <div className="max-w-7xl mx-auto px-6 lg:px-12">
           <div className="bg-brand-dark text-white rounded-[80px] p-16 lg:p-24 overflow-hidden relative shadow-3xl flex flex-col lg:flex-row items-center gap-24 group">
              <div className="absolute top-0 right-0 p-24 opacity-5 pointer-events-none translate-x-32 -translate-y-32 scale-150 rotate-45 group-hover:rotate-90 transition-transform duration-[2000ms]"><Activity size={500} strokeWidth={0.5} /></div>
              
              <div className="lg:w-3/5 relative z-10">
                 <div className="flex items-center gap-4 mb-10 text-brand-gold">
                    <Zap size={24} className="animate-pulse" />
                    <span className="text-xs font-black tracking-[0.4em] uppercase opacity-70">Strategic Market Intelligence</span>
                 </div>
                 <h2 className="text-5xl lg:text-[7rem] font-serif font-black mb-12 leading-[1.05] italic tracking-tight">Dwarka Expressway: <br/><span className="text-brand-gold italic">15% Volume Surge.</span></h2>
                 <p className="text-xl lg:text-2xl text-white/50 mb-16 font-light leading-relaxed max-w-2xl">
                   HEAT-MAP DETECTION: PremiumLand Auctions heat-maps reveal a sudden influx of distressed residential blocks entering the auction loop. Access the full brief for sector intersections.
                 </p>
                 <button className="btn-pill !bg-white !text-brand-dark !px-12 !py-6 flex items-center gap-4 scale-110 origin-left hover:scale-115 active:scale-105 transition-all text-[12px] font-black">
                    <Download size={20} />
                    <span>Download Strategic Briefing</span>
                 </button>
              </div>
              
              <div className="lg:w-2/5 aspect-square bg-white/5 rounded-[60px] border border-white/10 flex items-center justify-center relative shadow-3xl overflow-hidden backdrop-blur-3xl">
                 <div className="p-16 w-full h-full flex flex-col justify-center items-center gap-10 text-center">
                    <Activity className="text-brand-gold/30" size={120} strokeWidth={1} />
                    <div>
                       <p className="text-[10px] font-black uppercase text-white/30 tracking-[0.3em]">Institutional Feed</p>
                    </div>
                 </div>
              </div>
           </div>
         </div>
      </section>
    </div>
  );
};

export default Insights;
