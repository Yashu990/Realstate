import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, ShieldCheck, CheckCircle2, 
  MapPin, Gavel, Scale, Handshake, TrendingUp, 
  Users, Info, Lock, Zap, Award, Briefcase, HeartHandshake, History,
  ArrowUpRight, Users2, Building2, Landmark, AreaChart, XCircle, CheckCircle,
  Gem, Calendar, Rocket, MessageSquare, Globe2
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Asset Imports
import hero1 from '../assets/hero1.png';
import hero2 from '../assets/hero2.png';
import hero3 from '../assets/hero3.png';
import hero4 from '../assets/hero4.png';
import agentImg from '../assets/agent.png';
import eventImg from '../assets/event.png';
import legalImg from '../assets/legal.png';
import resImg from '../assets/res.png';
import commImg from '../assets/comm.png';
import offImg from '../assets/off.png';
import aboutImg from '../assets/about-img.png';
import chaosImg from '../assets/chaos.png';
import advantageImg from '../assets/advantage.png';
import prop1 from '../assets/prop1.png';
import prop2 from '../assets/prop2.png';
import prop3 from '../assets/prop3.png';

const heroImages = [hero1, hero2, hero3, hero4];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden flex items-center justify-center bg-brand-navy">
      {/* BACKGROUND SLIDER */}
      <div className="absolute inset-0 z-0 bg-brand-navy">
        <AnimatePresence>
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-brand-navy/30 z-10"></div>
            <img 
              src={heroImages[current]} 
              className="w-full h-full object-cover" 
              alt="Premium Land Auctions"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* CONTENT */}
      <div className="container relative z-20 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="inline-flex items-center gap-2 mb-8 bg-brand-gold/10 px-4 py-2 rounded-full border border-brand-gold/20">
             <Gem size={14} className="text-brand-gold" />
             <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-gold">Invitation-Only Platform</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.15] tracking-tight">
             Access India's 1000+ Premium NLCT Properties at 20-50% Below Market Value
          </h1>
          
          <p className="text-base md:text-lg lg:text-xl font-medium text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed">
             Join our exclusive network connecting serious buyers with verified sellers. Your membership fee is fully refundable when you purchase your first property.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/membership" className="btn-pill btn-gold px-12 py-5 !rounded-lg text-sm uppercase flex items-center gap-3 shadow-2xl">
              <span>Apply for Membership</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const StatsBanner = () => (
  <section className="relative py-20 bg-brand-navy overflow-hidden">
    <div className="absolute inset-0 opacity-50 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-fixed"></div>
    <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/60 via-transparent to-transparent"></div>
    
    <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 text-center lg:text-left">
       <span className="text-brand-gold text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Why Partner With Us?</span>
       <h2 className="text-4xl lg:text-5xl font-bold text-white mb-16 italic">Your Premier Real Estate Ally</h2>
       
       <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl">
          {[
            { v: "1000+", l: "Properties Curated" },
            { v: "15+", l: "Years Elevating Real Estate" },
            { v: "₹5,000Cr+", l: "Value Managed" }
          ].map((s, i) => (
            <div key={i} className="flex flex-col gap-2">
               <span className="text-5xl font-black text-white">{s.v}</span>
               <span className="text-[10px] font-black uppercase tracking-widest text-brand-gold/60">{s.l}</span>
            </div>
          ))}
       </div>
    </div>
  </section>
);

const PropertySolutions = () => {
  const solutions = [
    { title: "Residential Properties", img: resImg },
    { title: "Commercial Properties", img: commImg },
    { title: "Offices", img: offImg }
  ];

  return (
    <section className="py-24 bg-white border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <span className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">Complete Real Estate Solutions in Gurgaon</span>
        <h2 className="text-4xl lg:text-5xl font-bold text-brand-navy mb-16 leading-tight">Residential, Commercial &<br/> Investment Property Solutions</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((s, i) => (
            <div key={i} className="relative aspect-[3/4] overflow-hidden rounded-3xl group cursor-pointer shadow-2xl">
              <img src={s.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={s.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-10 left-0 w-full text-center">
                <span className="text-white text-xl font-bold tracking-tight">{s.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PlatformDifferentiation = () => {
  const cards = [
    {
      t: "Institutional Access",
      d: "Direct pipeline to bank-REO inventories and distressed land blocks before they hit public aggregators.",
      img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2070&auto=format&fit=crop",
      icon: <ShieldCheck size={24} />,
      color: "gold"
    },
    {
      t: "Predictive Analytics",
      d: "Proprietary heat-maps identifying high-yield corridors in Gurgaon and NCR with 15-20% projected uplift.",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      icon: <TrendingUp size={24} />,
      color: "teal"
    },
    {
      t: "Platform Infrastructure",
      d: "End-to-end legal, bidding, and title-transfer protocols managed by our dedicated institutional desk.",
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
      icon: <Globe2 size={24} />,
      color: "navy"
    }
  ];

  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-brand-gold text-[10px] font-black uppercase tracking-[0.4em] mb-4 block"
          >
            Platform Differentiation
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-7xl font-black text-brand-navy tracking-tight"
          >
            Why Our Platform is <span className="text-brand-gold italic">Superior.</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, type: "spring", stiffness: 100 }}
              className="group relative flex flex-col h-full bg-zinc-50 rounded-[40px] overflow-hidden border border-zinc-100 shadow-xl hover:shadow-2xl transition-all duration-700"
            >
              {/* Image Container - FIT */}
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={card.img} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                  alt={card.t} 
                />
                <div className="absolute inset-0 bg-brand-navy/20 group-hover:bg-brand-navy/10 transition-colors"></div>
                <div className="absolute top-6 right-6 p-3 bg-white/90 backdrop-blur-md rounded-2xl text-brand-navy shadow-lg">
                  {card.icon}
                </div>
              </div>

              {/* Content Container */}
              <div className="p-10 flex flex-col flex-grow">
                <h3 className="text-2xl font-black text-brand-navy mb-4 group-hover:text-brand-gold transition-colors">{card.t}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed font-medium mb-8 flex-grow">
                  {card.d}
                </p>
                <div className="pt-6 border-t border-zinc-200">
                  <button className="text-brand-navy font-black text-[10px] uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all">
                    Discover More <Zap size={14} className="text-brand-gold" />
                  </button>
                </div>
              </div>
              
              {/* Corner Accent */}
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-brand-gold/5 rounded-tl-[80px] -mr-12 -mb-12 group-hover:scale-150 transition-transform duration-1000"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SuccessGrid = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8, y: 50, rotate: -2 },
    show: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      rotate: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <section className="section-padding bg-white overflow-hidden">
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto px-6 lg:px-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Top Left: Logo/Socials */}
          <motion.div variants={item} className="md:col-span-1 space-y-6">
            <div className="aspect-square bg-brand-navy rounded-3xl p-8 flex flex-col justify-between shadow-2xl">
              <div className="w-12 h-12 bg-brand-gold text-brand-navy rounded-xl flex items-center justify-center text-2xl font-black shadow-lg">V</div>
              <div className="grid grid-cols-2 gap-2">
                {[<MessageSquare />, <Users />, <Handshake />, <Zap />].map((icon, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="aspect-square bg-white/10 rounded-xl flex items-center justify-center text-white hover:bg-brand-gold hover:text-brand-navy transition-colors cursor-pointer"
                  >
                    {icon}
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative group">
              <img src={prop1} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="Properties" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-6 left-6 right-6">
                 <h4 className="text-white font-bold text-xl drop-shadow-md">Tailored Solutions</h4>
                 <span className="text-white/60 text-[10px] font-bold uppercase tracking-widest">Innovative Strategies</span>
              </div>
            </div>
          </motion.div>

          {/* Middle Column */}
          <motion.div variants={item} className="md:col-span-1 space-y-6">
            <div className="aspect-[3/5] rounded-3xl overflow-hidden shadow-2xl relative group">
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="Consulting" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70"></div>
              <div className="absolute bottom-10 left-8 right-8">
                 <h4 className="text-white text-3xl font-bold mb-2 drop-shadow-lg font-serif">Insightful Consulting</h4>
                 <span className="bg-brand-gold text-brand-navy text-[10px] px-3 py-1 rounded-full uppercase tracking-widest font-black shadow-lg">Strategic Investment</span>
              </div>
            </div>
            <motion.div 
               whileHover={{ y: -10, scale: 1.02 }}
               className="aspect-square bg-zinc-50 rounded-3xl p-10 border border-zinc-100 flex flex-col justify-between group hover:bg-brand-navy transition-all duration-500 shadow-lg"
            >
               <div className="w-16 h-16 rounded-full border-4 border-brand-teal border-t-zinc-200 flex items-center justify-center text-xl font-black text-brand-navy group-hover:text-white group-hover:border-brand-gold transition-all duration-500">92%</div>
               <div>
                  <h4 className="text-xl font-black mb-2 text-brand-navy group-hover:text-white transition-colors">Measurable Success</h4>
                  <p className="text-xs text-zinc-500 group-hover:text-white/60 leading-relaxed font-medium">Consistent delivery on high-impact real estate objectives.</p>
               </div>
            </motion.div>
          </motion.div>

          {/* Right Column 1 */}
          <motion.div variants={item} className="md:col-span-1 space-y-6">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl group">
              <img src={prop2} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="Guidance" />
            </div>
            <div className="aspect-[3/5] rounded-3xl overflow-hidden shadow-2xl relative group">
              <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="Expert" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70"></div>
              <div className="absolute bottom-10 left-8 right-8">
                 <h4 className="text-white text-3xl font-bold mb-2 drop-shadow-lg font-serif">Expert Guidance</h4>
                 <span className="bg-brand-navy text-white border border-white/20 text-[10px] px-3 py-1 rounded-full uppercase tracking-widest font-black">Empowering Futures</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column 2: Join Team */}
          <motion.div variants={item} className="md:col-span-1 space-y-6">
             <div className="aspect-[4/6] bg-black rounded-3xl p-10 flex flex-col justify-between text-white relative overflow-hidden group shadow-2xl border border-white/5">
                <div className="relative z-10">
                  <h3 className="text-2xl font-black mb-4 font-serif text-white group-hover:text-brand-gold transition-colors">Join Our Visionary Team</h3>
                </div>
                <div className="flex -space-x-4 relative z-10">
                   {[1, 2, 3].map((_, i) => (
                     <motion.div 
                       key={i} 
                       whileHover={{ y: -8, scale: 1.1, zIndex: 20 }}
                       className="w-14 h-14 rounded-full border-2 border-black overflow-hidden bg-zinc-800 shadow-xl"
                     >
                        <img src={`https://i.pravatar.cc/150?u=${i+20}`} alt="Avatar" />
                     </motion.div>
                   ))}
                </div>
                <Link to="/membership" className="relative z-10 text-brand-gold font-black text-sm underline underline-offset-8 hover:text-white transition-colors tracking-widest uppercase">Explore Careers</Link>
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-1000"></div>
             </div>
             <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl group">
                <img src={prop3} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="Projects" />
             </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

const InvestorEvents = () => {
  const events = [
    { t: "Spring Summit", m: "Q1", d: "Major portfolio discovery and seasonal market entry brief." },
    { t: "Mid-Year Showcase", m: "Q2", d: "Live auction demonstrations and primary asset reveals." },
    { t: "Portfolio Review", m: "Q3", d: "Performance analysis and strategic asset re-allocation." },
    { t: "Annual Gala", m: "Q4", d: "Investor awards and exclusive upcoming mandate preview." }
  ];

  return (
    <section className="section-padding bg-brand-navy text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-50 bg-[url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center bg-fixed"></div>
      <div className="absolute inset-0 bg-brand-navy/40"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-24">
          <span className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block drop-shadow-md">Exclusive Community</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white italic drop-shadow-lg">Quarterly Investor Events</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {events.map((e, i) => (
            <div key={i} className="p-10 bg-white/5 border border-white/10 rounded-3xl hover:bg-brand-gold/10 hover:border-brand-gold/30 transition-all duration-500 group cursor-default backdrop-blur-sm">
              <span className="text-brand-gold font-bold text-xs mb-6 block tracking-widest uppercase">{e.m}</span>
              <h4 className="text-2xl font-bold mb-4 text-white group-hover:text-brand-gold transition-colors">{e.t}</h4>
              <p className="text-sm text-zinc-300 leading-relaxed font-medium group-hover:text-white transition-colors">{e.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Benefits = () => {
  const coreBenefits = [
    { t: "1000+ Premium Properties at 20-50% Discount", d: "Largest curated NLCT portfolio in India with value over ₹5,000 crores.", icon: <Building2 className="text-brand-gold" size={32} /> },
    { t: "Dedicated Personal Agent - Your Property Scout", d: "Expert scout familiar with your budget and goals manages your journey.", icon: <Users2 className="text-brand-gold" size={32} /> },
    { t: "Expert Legal Support & Compliance", d: "Senior advocates handling document verification and 12-month warranties.", icon: <Landmark className="text-brand-gold" size={32} /> },
    { t: "Quarterly Investor Events (4 Per Year)", d: "Networking designed for serious investors. Spring, Mid-Year, Portfolio, Gala.", icon: <Calendar className="text-brand-gold" size={32} /> },
    { t: "Free Lifetime Selling Services", d: "Sell properties purchased through us at zero commission, forever.", icon: <ArrowUpRight className="text-brand-gold" size={32} /> },
    { t: "Verified Buyers & Sellers Platform", d: "Controlled platform for serious investors. No casual browsers.", icon: <ShieldCheck className="text-brand-gold" size={32} /> },
    { t: "Transparent Auction Process", d: "Complete clarity, bidding strategy consultation, and filling management.", icon: <Gavel className="text-brand-gold" size={32} /> },
    { t: "Stress-Free Property Handover", d: "From win to possession, we handle registration and inspection.", icon: <Handshake className="text-brand-gold" size={32} /> },
    { t: "Investment Insights & Analysis", d: "Comprehensive research achieving 15-25% average member ROI.", icon: <AreaChart className="text-brand-gold" size={32} /> }
  ];

  return (
    <section className="section-padding bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center mb-20">
         <h2 className="text-4xl lg:text-5xl font-bold text-brand-navy italic">Platform Infrastructure.</h2>
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {coreBenefits.map((b, i) => (
          <div key={i} className="luxury-card group">
            <div className="w-16 h-16 rounded-2xl bg-zinc-50 flex items-center justify-center mb-8 bg-zinc-900 group-hover:bg-brand-gold transition-colors">{b.icon}</div>
            <h4 className="text-xl font-bold mb-4">{b.t}</h4>
            <p className="text-zinc-500 text-sm leading-relaxed font-medium">{b.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const EnhancedPortfolio = () => {
  const properties = [
    { t: "Trump Tower 2", l: "Sector 69, SPR Road, Gurgaon", p: "₹9.2 Cr", img: prop1, d: "View verified property details, pricing, and location insights." },
    { t: "M3M Jacob & Co Noida", l: "At Sector 94, Noida", p: "₹7.5 Cr", img: prop2, d: "View verified property details, pricing, and location insights." },
    { t: "M3M Paragon 57", l: "Sector 57, Gurugram", p: "₹1.2 Cr", img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1035&auto=format&fit=crop", d: "View verified property details, pricing, and location insights." },
    { t: "Smart World Orchard Street", l: "Sector 61, Gurugram", p: "₹2.5 Cr", img: prop3, d: "View verified property details, pricing, and location insights." },
    { t: "Smart World One DXP Street", l: "Sector 113, Gurugram", p: "₹2.5 Cr", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop", d: "View verified property details, pricing, and location insights." },
    { t: "Elan The Mark", l: "Sector 106, Gurugram", p: "₹1.91 Cr", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop", d: "View verified property details, pricing, and location insights." }
  ];

  return (
    <section className="section-padding bg-white">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 lg:px-12 text-center mb-20"
      >
        <p className="text-zinc-400 font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Exclusively For You</p>
        <h2 className="text-5xl lg:text-7xl font-serif font-black text-brand-dark tracking-tighter">Curated Portfolio</h2>
      </motion.div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
        {properties.map((p, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="group cursor-pointer"
          >
            <div className="aspect-[4/3] overflow-hidden rounded-[32px] mb-8 shadow-2xl relative">
              <img src={p.img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={p.t} />
            </div>
            <h3 className="text-xl font-bold text-brand-navy mb-1">{p.t}</h3>
            <p className="text-xs font-bold text-zinc-400 mb-3">{p.l}</p>
            <p className="text-lg font-black text-brand-dark mb-4">{p.p}</p>
            <p className="text-xs text-zinc-500 leading-relaxed max-w-[260px]">{p.d}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const MarketInsights = () => (
  <section className="section-padding bg-zinc-50/50">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8"
      >
        <div>
           <p className="text-zinc-400 font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Market Insights</p>
           <h2 className="text-4xl lg:text-6xl font-serif font-black text-brand-dark max-w-2xl leading-[1.1]">Expert Perspectives & <br/>Luxury Real Estate Trends</h2>
        </div>
        <Link to="/insights" className="px-8 py-3 bg-brand-navy text-white rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-3 hover:bg-brand-gold hover:text-brand-navy transition-all shadow-xl">
           <span>View All Insights</span>
           <ArrowUpRight size={16} />
        </Link>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-10">
         {/* Main Article */}
         <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 bg-white rounded-[40px] overflow-hidden border border-zinc-100 shadow-xl group"
         >
            <div className="aspect-[16/8] overflow-hidden">
               <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Legal" />
            </div>
            <div className="p-12">
               <span className="bg-brand-dark text-white text-[9px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-8 inline-block">Must Read</span>
               <h3 className="text-3xl lg:text-4xl font-serif font-black mb-6 text-brand-dark group-hover:text-brand-gold transition-colors">Legal Aspects of Property Buying in Gurgaon...</h3>
               <p className="text-zinc-500 text-sm leading-relaxed font-medium line-clamp-2">Purchasing property in Gurgaon represents one of the most significant financial decisions you'll ever make. With the city's booming real estate market, legal due diligence is more critical than ever.</p>
            </div>
         </motion.div>

         {/* Secondary Articles List */}
         <div className="flex flex-col gap-8">
            {[
              { t: "Sector 103 Gurgaon Property Guide...", img: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop" },
              { t: "How to Choose the Best Broker Fir...", img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2070&auto=format&fit=crop" },
              { t: "2BHK vs 3BHK Investment in Gurga...", img: "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=2070&auto=format&fit=crop" }
            ].map((art, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex gap-6 group cursor-pointer items-center"
              >
                 <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0 shadow-lg">
                    <img src={art.img} className="w-full h-full object-cover transition-transform group-hover:scale-110" alt={art.t} />
                 </div>
                 <div>
                    <h4 className="text-sm font-black text-brand-navy leading-snug group-hover:text-brand-gold transition-colors">{art.t}</h4>
                 </div>
              </motion.div>
            ))}
         </div>
      </div>
    </div>
  </section>
);

const AboutConsultancy = () => (
  <section className="section-padding bg-white overflow-hidden">
     <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
           <p className="text-zinc-400 font-bold uppercase tracking-[0.3em] text-[10px] mb-6">About Oak N Stone Inc.</p>
           <h2 className="text-5xl lg:text-7xl font-serif font-black text-brand-dark mb-10 tracking-tighter leading-[0.95]">Leading Real Estate <br/>Consultancy In <br/><span className="text-brand-gold italic">Gurgaon.</span></h2>
           <p className="text-zinc-500 text-sm leading-[1.8] font-medium mb-12 max-w-xl">
             Oak N Stone Inc. is a premier real estate consultancy in Gurgaon with 200+ professionals specializing in luxury residential and commercial properties. Established in 2018 and RERA registered, we serve clients across Sector 67, Golf Course Road, Dwarka Expressway, DLF Phases, and all major Gurgaon locations. Our comprehensive services include property buying and selling consultation, investment advisory, commercial leasing, NRI property services, and legal documentation support.
           </p>
           <button className="px-10 py-4 bg-brand-dark text-white rounded-lg flex items-center gap-4 text-[10px] font-black uppercase tracking-widest hover:bg-brand-gold hover:text-brand-navy transition-all shadow-2xl group">
              <span>Discover More</span>
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-brand-navy/10 transition-colors"><ArrowUpRight size={16} /></div>
           </button>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
           <div className="aspect-square rounded-[60px] overflow-hidden shadow-3xl">
              <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Interior" />
           </div>
           {/* Floating Badge */}
           <motion.div 
             initial={{ scale: 0 }}
             whileInView={{ scale: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.5, type: "spring" }}
             className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[40px] shadow-3xl flex items-center gap-6 border border-zinc-100"
           >
              <div className="w-16 h-16 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold font-bold">15+</div>
              <div>
                 <p className="text-brand-dark font-black text-sm uppercase leading-none mb-1">Years Experience</p>
                 <p className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest">Industry Leadership</p>
              </div>
           </motion.div>
        </motion.div>
     </div>
  </section>
);

const TestimonialSection = () => (
  <section className="py-40 relative bg-brand-navy overflow-hidden">
     <div className="absolute inset-0 opacity-60 bg-[url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
     <div className="absolute inset-0 bg-brand-navy/40"></div>
     
     <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <p className="text-white text-2xl md:text-3xl font-bold leading-relaxed mb-12 italic drop-shadow-lg">
           "I was completely lost when I started looking for a property in Gurgaon. My budget was tight, and I didn't know which sectors were actually good. The PremiumLand team didn't just show me random properties—they sat with me, understood my goals, and found me a perfect asset at 30% below market price."
        </p>
        <div className="flex items-center justify-center gap-4">
           <div className="w-14 h-14 rounded-full bg-brand-gold/20 border border-brand-gold/40 flex items-center justify-center text-brand-gold font-bold text-lg shadow-2xl">PV</div>
           <div className="text-left">
              <p className="text-white font-bold text-base drop-shadow-md">Priya Verma</p>
              <p className="text-brand-gold text-[10px] font-bold uppercase tracking-widest drop-shadow-sm">Premium Member</p>
           </div>
        </div>
     </div>
  </section>
);

const TrustMetrics = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-12 text-center">
        {[
          { v: "1000+", l: "Properties" },
          { v: "₹5K Cr+", l: "Portfolio" },
          { v: "800+", l: "Deals Done" },
          { v: "98%", l: "Satisfied" },
          { v: "15-25%", l: "Avg ROI" }
        ].map((m, i) => (
          <div key={i} className="flex flex-col gap-2">
            <span className="text-5xl font-black text-brand-navy transition-colors hover:text-brand-gold">{m.v}</span>
            <span className="text-[10px] font-black uppercase tracking-widest text-brand-gold">{m.l}</span>
          </div>
        ))}
    </div>
  </section>
);

const Home = () => {
  return (
    <main className="bg-white">
      <Hero />
      <StatsBanner />
      <PropertySolutions />
      <AboutConsultancy />
      <EnhancedPortfolio />
      <PlatformDifferentiation />
      <SuccessGrid />
      <MarketInsights />
      <InvestorEvents />
      <Benefits />
      <TestimonialSection />
      <TrustMetrics />
      
      <section className="section-padding bg-brand-navy text-white text-center rounded-t-[100px] mt-24 relative overflow-hidden">
         <div className="absolute inset-0 opacity-50 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
         <div className="absolute inset-0 bg-brand-navy/60"></div>
         
         <div className="max-w-4xl mx-auto px-6 relative z-10">
            <h3 className="text-5xl lg:text-7xl font-bold mb-12 italic text-white drop-shadow-2xl">Join a Private Network Built for Serious Investors</h3>
            <div className="flex flex-wrap justify-center gap-6">
               <Link to="/membership" className="btn-pill btn-gold px-12 py-5 !rounded-lg text-[12px] font-black uppercase shadow-2xl">Apply for Membership</Link>
               <button className="btn-pill !border-white/20 !text-white !px-12 !py-5 hover:bg-white/10 text-[12px] font-black uppercase">Schedule Consultation</button>
            </div>
         </div>
      </section>
    </main>
  );
};

export default Home;
