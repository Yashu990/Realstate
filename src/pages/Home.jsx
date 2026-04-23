import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowRight, ShieldCheck, CheckCircle2, 
  MapPin, Gavel, Scale, Handshake, TrendingUp, 
  Users, Info, Lock, Zap, Award, Briefcase, HeartHandshake, History,
  ArrowUpRight, Users2, Building2, Landmark, AreaChart, XCircle, CheckCircle,
  Gem, Calendar, Rocket, MessageSquare, Globe2,
  Instagram, Facebook, Linkedin, Youtube
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

// Fallback logic for missing bento assets to prevent build break
const bentoGlassSky = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop";
const bentoNightSky = "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop";
const bentoApartments = "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop";

const heroImages = [hero1, hero2, hero3, hero4];

// Animation Variants
const proReveal = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      duration: 1.2, 
      ease: [0.16, 1, 0.3, 1] 
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const maskReveal = {
  hidden: { clipPath: 'inset(0 0 100% 0)', opacity: 0 },
  visible: { 
    clipPath: 'inset(0 0 0% 0)',
    opacity: 1,
    transition: { 
      duration: 1.5, 
      ease: [0.16, 1, 0.3, 1] 
    }
  }
};

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[700px] w-full overflow-hidden flex items-center justify-center bg-brand-navy">
      {/* BACKGROUND SLIDER */}
      <div className="absolute inset-0 z-0 bg-brand-navy">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
            style={{ y, scale }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/30 via-transparent to-brand-navy/60 z-10"></div>
            <img 
              src={heroImages[current]} 
              className="w-full h-full object-cover" 
              alt="Luxury Real Estate" 
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* CONTENT */}
      <div className="container relative z-20 text-center px-6 max-w-4xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="inline-flex items-center gap-2 mb-8 bg-brand-gold/10 px-4 py-2 rounded-full border border-brand-gold/20"
            variants={proReveal}
          >
             <Gem size={14} className="text-brand-gold" />
             <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-gold">Invitation-Only Platform</span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[1.1] tracking-tight"
            variants={proReveal}
          >
             Premium Properties.<br/><span className="text-brand-gold italic font-serif">Exclusive Deals.</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-white/75 mb-12 max-w-2xl mx-auto font-medium"
            variants={proReveal}
          >
             Access India's 1000+ verified NLCT properties at 20-50% below market value. Membership is limited.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            variants={proReveal}
          >
            <Link to="/membership" className="btn-pill btn-gold px-12 py-5 !rounded-lg text-sm uppercase flex items-center gap-3 shadow-2xl hover:shadow-3xl transition-shadow">
              <span>Apply for Membership</span>
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const StatsBanner = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={containerRef} className="relative py-20 bg-brand-navy overflow-hidden">
      <motion.div 
        className="absolute inset-0 opacity-90 bg-cover bg-center" 
        style={{ backgroundImage: `url(${hero4})`, y }}
      ></motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/30 via-brand-navy/40 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 text-center lg:text-left">
         <motion.span 
           className="text-brand-gold text-[10px] font-black uppercase tracking-[0.4em] mb-4 block"
           variants={proReveal}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
         >
           Why Partner With Us?
         </motion.span>
         <motion.h2 
           className="text-4xl lg:text-5xl font-bold text-white mb-16"
           variants={proReveal}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
         >
           Your Premier Real Estate Ally
         </motion.h2>
         
         <motion.div 
           className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl"
           variants={staggerContainer}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
         >
            {[
              { v: "1000+", l: "Properties Curated" },
              { v: "15+", l: "Years Elevating Real Estate" },
              { v: "₹5,000Cr+", l: "Value Managed" }
            ].map((s, i) => (
              <motion.div 
                key={i} 
                className="flex flex-col gap-2"
                variants={proReveal}
              >
                 <span className="text-5xl font-black text-white">{s.v}</span>
                 <span className="text-[10px] font-black uppercase tracking-widest text-brand-gold/60">{s.l}</span>
              </motion.div>
            ))}
         </motion.div>
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
      d: "Integrated legal-tech and escrow protocols ensuring secure, institutional-grade transaction velocity.",
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
      icon: <Globe2 size={24} />,
      color: "navy"
    }
  ];

  return (
    <section className="section-padding bg-zinc-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-24">
          <motion.span 
            className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block"
            variants={proReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Why This Platform is Superior
          </motion.span>
          <motion.h2 
            className="text-4xl lg:text-6xl font-bold text-brand-navy"
            variants={proReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Platform Differentiation
          </motion.h2>
        </div>

        <motion.div 
          className="grid lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {cards.map((card, i) => (
            <motion.div 
              key={i} 
              className="group relative h-[500px] rounded-[40px] overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-700"
              variants={proReveal}
            >
              {/* Image Background */}
              <img 
                src={card.img} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                alt={card.t} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
              
              {/* Content Overlay */}
              <div className="absolute inset-0 p-12 flex flex-col justify-end">
                <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-8 border border-white/20 group-hover:bg-brand-gold/20 group-hover:border-brand-gold/40 transition-all">
                  <div className="text-brand-gold">{card.icon}</div>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-brand-gold transition-colors">{card.t}</h3>
                <p className="text-white/60 text-sm leading-relaxed font-medium mb-8 max-w-[280px]">
                  {card.d}
                </p>
                <div className="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Learn more <ArrowRight size={14} className="text-brand-gold" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const EnhancedPortfolio = () => {
  const properties = [
    { t: "Trump Tower 2", l: "Sector 69, SPR Road, Gurgaon", p: "₹9.2 Cr", img: prop1, d: "View verified property details, pricing, and location insights." },
    { t: "M3M Jacob & Co Noida", l: "At Sector 94, Noida", p: "₹7.5 Cr", img: prop2, d: "View verified property details, pricing, and location insights." },
    { t: "M3M Paragon 57", l: "Sector 57, Gurugram", p: "₹1.2 Cr", img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1035&auto=format&fit=crop", d: "View verified property details, pricing, and location insights." },
    { t: "The Imperial", l: "Sector 102, Gurgaon", p: "₹3.2 Cr", img: prop3, d: "View verified property details, pricing, and location insights." },
    { t: "Smart World Orchard", l: "Sector 61, Gurgaon", p: "₹2.5 Cr", img: resImg, d: "View verified property details, pricing, and location insights." },
    { t: "Elan The Mark", l: "Sector 106, Gurgaon", p: "₹1.9 Cr", img: offImg, d: "View verified property details, pricing, and location insights." }
  ];

  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div 
          className="text-center mb-24"
          variants={proReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">Institutional Grade Assets</span>
          <h2 className="text-4xl lg:text-6xl font-bold text-brand-navy mb-4">Curated Portfolio</h2>
          <p className="text-zinc-500 font-bold uppercase tracking-widest text-xs">1000+ Premium Properties Handpicked for Serious Investors</p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {properties.map((p, i) => (
            <motion.div 
              key={i} 
              className="group cursor-pointer"
              variants={proReveal}
            >
              <motion.div 
                className="aspect-[4/5] overflow-hidden rounded-[32px] mb-8 shadow-2xl relative"
                whileHover={{ y: -10 }}
                variants={maskReveal}
              >
                <img src={p.img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt={p.t} />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute top-6 left-6 bg-brand-gold text-brand-navy text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest shadow-lg transform -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  Verified Asset
                </div>
              </motion.div>
              <h3 className="text-2xl font-bold text-brand-navy mb-1 group-hover:text-brand-gold transition-colors">{p.t}</h3>
              <p className="text-sm font-bold text-zinc-400 mb-4 flex items-center gap-2">
                <MapPin size={14} className="text-brand-gold" /> {p.l}
              </p>
              <div className="flex items-center justify-between">
                <p className="text-xl font-black text-brand-navy">{p.p}</p>
                <Link to={`/property/${i}`} className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-gold border-b border-brand-gold/30 pb-0.5 hover:border-brand-gold transition-all">View Details</Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const TestimonialSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section ref={containerRef} className="py-32 relative bg-brand-navy overflow-hidden">
       <motion.div 
         className="absolute inset-0 opacity-85 bg-cover bg-center" 
         style={{ backgroundImage: `url(${aboutImg})`, y }}
       ></motion.div>
       <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/50 to-brand-navy/90"></div>
       
       <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10 flex flex-col justify-center">
          <div className="relative mb-12 max-w-4xl">
            <motion.p 
              className="text-white text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed mb-8 opacity-90"
              variants={proReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
               "Being based in Dubai, I wanted to invest in Gurgaon property but was worried about fraud and hidden costs. A friend recommended PremiumLand. Honestly, they made everything so transparent—sent me video tours, explained every single charge beforehand, and even helped me understand RERA compliance. I bought a 3 BHK in Golf Course Extension Road, and they're now managing the rental for me too. Worth every rupee of their fee. Finally found someone trustworthy in real estate!"
            </motion.p>
            <motion.div 
              className="flex items-center gap-4"
              variants={proReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
               <div className="w-14 h-14 rounded-full overflow-hidden border border-brand-gold bg-brand-gold/10">
                  <img src={agentImg} alt="Raj Mehta" className="w-full h-full object-cover" />
               </div>
               <div className="text-left">
                  <p className="text-white font-bold text-lg">Raj Mehta</p>
                  <p className="text-brand-gold/80 text-xs font-bold uppercase tracking-widest mt-1">NRI Investor, Dubai</p>
               </div>
            </motion.div>
          </div>
       </div>
    </section>
  );
};

// Team & Careers Section (Bento Grid)
const TeamCareers = () => (
  <section className="py-24 bg-[#FAF9F6] border-y border-zinc-200 overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        
        {/* Column 1 */}
        <motion.div className="flex flex-col gap-6" variants={proReveal}>
          <motion.div className="rounded-3xl bg-zinc-200 h-80 overflow-hidden shadow-sm" variants={maskReveal}>
            <img src={bentoGlassSky} alt="Glass Skyscrapers" className="w-full h-full object-cover" />
          </motion.div>
          <div className="grid grid-cols-4 gap-3 h-20">
            <a href="#" className="bg-brand-navy rounded-2xl flex items-center justify-center text-white hover:bg-zinc-800 transition-colors shadow-sm"><Instagram size={20} /></a>
            <a href="#" className="bg-brand-navy rounded-2xl flex items-center justify-center text-white hover:bg-zinc-800 transition-colors shadow-sm"><Facebook size={20} /></a>
            <a href="#" className="bg-brand-navy rounded-2xl flex items-center justify-center text-white hover:bg-zinc-800 transition-colors shadow-sm"><Linkedin size={20} /></a>
            <a href="#" className="bg-brand-navy rounded-2xl flex items-center justify-center text-white hover:bg-zinc-800 transition-colors shadow-sm"><Youtube size={20} /></a>
          </div>
          <motion.div className="rounded-3xl bg-zinc-200 h-48 overflow-hidden relative shadow-sm group cursor-pointer border border-zinc-200" variants={maskReveal}>
            <img src={prop1} alt="Modern Office" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-brand-navy/20 to-transparent"></div>
            <div className="absolute top-4 left-4 bg-brand-navy/80 text-white text-[10px] font-bold px-4 py-2 rounded-full border border-white/10 shadow-lg">Innovative Strategies</div>
          </motion.div>
        </motion.div>

        {/* Column 2 */}
        <motion.div className="flex flex-col gap-6" variants={proReveal}>
          <motion.div className="rounded-3xl bg-zinc-200 h-96 overflow-hidden relative shadow-sm group cursor-pointer border border-zinc-200" variants={maskReveal}>
            <img src={bentoApartments} alt="Apartment Complex" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-brand-navy/10"></div>
            <div className="absolute top-4 left-4 bg-brand-navy/80 text-white text-[10px] font-bold px-4 py-2 rounded-full border border-white/10 shadow-lg">Strategic Investment</div>
            <div className="absolute bottom-6 left-6 text-white text-xl font-bold max-w-[150px]">Insightful Consulting</div>
          </motion.div>
          <div className="rounded-3xl bg-brand-navy h-[208px] flex flex-col items-center justify-center shadow-lg relative overflow-hidden">
            <div className="w-24 h-24 rounded-full border-[3px] border-zinc-800 flex items-center justify-center relative shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]">
               <svg className="absolute inset-0 w-full h-full transform -rotate-90">
                 <circle cx="48" cy="48" r="45" stroke="currentColor" strokeWidth="3" fill="transparent" className="text-green-500" strokeDasharray="282" strokeDashoffset="24" strokeLinecap="round" />
               </svg>
               <span className="text-white font-bold text-xl relative z-10">92%</span>
            </div>
          </div>
        </motion.div>

        {/* Column 3 */}
        <motion.div className="flex flex-col gap-6" variants={proReveal}>
          <motion.div className="rounded-3xl bg-zinc-200 h-72 overflow-hidden shadow-sm border border-zinc-200" variants={maskReveal}>
            <img src={prop2} alt="Residential Towers" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div className="rounded-3xl bg-blue-700 h-[304px] overflow-hidden relative shadow-md group cursor-pointer" variants={maskReveal}>
            <img src={bentoNightSky} alt="Night Sky" className="w-full h-full object-cover mix-blend-overlay opacity-90 group-hover:scale-105 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent mix-blend-multiply opacity-50"></div>
            <div className="absolute top-4 left-4 bg-brand-navy/60 text-white text-[10px] font-bold px-4 py-2 rounded-full border border-white/20 shadow-lg">Empowering Futures</div>
          </motion.div>
        </motion.div>

        {/* Column 4 */}
        <motion.div className="flex flex-col gap-6" variants={proReveal}>
          <div className="rounded-3xl bg-brand-navy h-[384px] p-8 relative overflow-hidden shadow-lg flex flex-col justify-between">
            <h3 className="text-[28px] font-bold text-white relative z-10 leading-tight">Join Our Visionary Team</h3>
            <div className="relative z-10">
              <div className="flex -space-x-4 mb-6">
                <div className="w-16 h-16 rounded-full border-2 border-brand-navy bg-white overflow-hidden shadow-xl">
                   <img src={agentImg} className="w-full h-full object-cover scale-150 object-top" alt="Agent 1" />
                </div>
                <div className="w-16 h-16 rounded-full border-2 border-brand-navy bg-white overflow-hidden shadow-xl">
                   <img src={aboutImg} className="w-full h-full object-cover scale-125 object-center" alt="Agent 2" />
                </div>
              </div>
              <Link to="/careers" className="inline-block text-white text-[17px] font-medium border-b-2 border-brand-gold pb-0.5 hover:text-brand-gold transition-colors">
                Explore Careers
              </Link>
            </div>
          </div>
          <motion.div className="rounded-3xl bg-zinc-200 h-44 overflow-hidden relative shadow-sm border border-zinc-200" variants={maskReveal}>
            <img src={hero1} alt="Residence" className="w-full h-full object-cover" />
            <div className="absolute bottom-4 right-4 bg-white/95 shadow-xl rounded-full py-2 px-3 flex items-center gap-2 cursor-pointer hover:bg-white transition-colors border border-zinc-100">
               <span className="text-xs font-bold text-brand-navy pl-1">Contact us</span>
               <div className="w-6 h-6 rounded-full bg-[#6dbf73] flex items-center justify-center text-white shadow-[0_0_10px_rgba(109,191,115,0.5)]"><MessageSquare size={12} fill="currentColor" className="text-white scale-90" /></div>
            </div>
          </motion.div>
        </motion.div>

      </motion.div>
    </div>
  </section>
);

const Home = () => {
  return (
    <main className="bg-white overflow-x-hidden">
      <Hero />
      <StatsBanner />
      <PlatformDifferentiation />
      <EnhancedPortfolio />
      <TestimonialSection />
      <TeamCareers />
      
      {/* FINAL CTA */}
      <motion.section 
        className="py-24 bg-brand-navy text-white text-center overflow-hidden relative"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-cover bg-center opacity-75" style={{ backgroundImage: `url(${agentImg})` }}></div>
        <div className="absolute inset-0 bg-brand-navy/40"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.h3 
            className="text-5xl lg:text-7xl font-bold mb-6"
            variants={proReveal}
            initial="hidden"
            whileInView="visible"
          >
            Ready to Access<br/>Premium Deals?
          </motion.h3>
          <motion.p 
            className="text-white/70 text-lg mb-12 max-w-2xl mx-auto font-medium"
            variants={proReveal}
            initial="hidden"
            whileInView="visible"
          >
            Join thousands of investors already building wealth through PremiumLand's exclusive platform.
          </motion.p>
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            variants={proReveal}
            initial="hidden"
            whileInView="visible"
          >
            <Link to="/membership" className="btn-pill btn-gold px-12 py-5 !rounded-lg text-sm font-black uppercase shadow-2xl">Apply for Membership</Link>
            <a href="tel:+919090112214" className="btn-pill !border-white/20 !text-white !px-12 !py-5 hover:bg-white/10 text-sm font-black uppercase transition-all">Call: +91 909-011-2214</a>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
};

export default Home;
