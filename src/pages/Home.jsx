import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
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

const heroImages = [hero1, hero2, hero3, hero4];

// FALLBACK IMAGES
const bentoGlassSky = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop";
const bentoNightSky = "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop";
const bentoApartments = "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop";

// PREMIUM ANIMATION VARIANTS
const proReveal = {
  hidden: { opacity: 0, y: 100, filter: 'blur(10px)' },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: 'blur(0px)',
    transition: { 
      duration: 1.4, 
      ease: [0.16, 1, 0.3, 1] 
    }
  }
};

const maskReveal = {
  hidden: { clipPath: 'inset(100% 0 0 0)', opacity: 0, scale: 1.2 },
  visible: { 
    clipPath: 'inset(0% 0 0 0)', 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 1.8, 
      ease: [0.16, 1, 0.3, 1] 
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
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

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-brand-navy">
      {/* IMMERSIVE BG SLIDER */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
            style={{ y, scale, opacity }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/40 via-transparent to-brand-navy/80 z-10"></div>
            <img 
              src={heroImages[current]} 
              className="w-full h-full object-cover" 
              alt="Luxury" 
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* FLOATING CONTENT */}
      <div className="container relative z-20 text-center px-6 max-w-5xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="inline-flex items-center gap-2 mb-10 bg-brand-gold/10 px-6 py-2.5 rounded-full border border-brand-gold/30 backdrop-blur-md"
            variants={proReveal}
          >
             <Gem size={14} className="text-brand-gold animate-pulse" />
             <span className="text-[10px] font-black tracking-[0.3em] uppercase text-brand-gold">The Private Reserve</span>
          </motion.div>
          
          <motion.h1 
            className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-8 leading-[0.95] tracking-tighter"
            variants={proReveal}
          >
             Premium Assets.<br/><span className="text-brand-gold italic font-serif">Curated Daily.</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-white/60 mb-14 max-w-2xl mx-auto font-medium"
            variants={proReveal}
          >
             Access India's 1000+ verified NLCT properties at 20-50% below market value.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
            variants={proReveal}
          >
            <Link to="/membership" className="group relative overflow-hidden bg-brand-gold text-brand-navy px-14 py-6 rounded-2xl font-black uppercase text-sm tracking-widest transition-transform hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(197,165,114,0.3)]">
              <span className="relative z-10">Apply for Access</span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30">Scroll to Explore</span>
        <div className="w-px h-20 bg-gradient-to-b from-brand-gold to-transparent"></div>
      </motion.div>
    </section>
  );
};

const StatsBanner = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section ref={containerRef} className="relative py-32 bg-brand-navy overflow-hidden">
      <motion.div 
        className="absolute inset-0 opacity-80 bg-cover bg-center" 
        style={{ backgroundImage: `url(${hero4})`, y, scale: 1.1 }}
      ></motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/60 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
         <motion.div
           variants={staggerContainer}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
         >
           <motion.span variants={proReveal} className="text-brand-gold text-[10px] font-black uppercase tracking-[0.5em] mb-6 block">Institutional Strength</motion.span>
           <motion.h2 variants={proReveal} className="text-5xl lg:text-7xl font-bold text-white mb-20 max-w-3xl leading-tight">Your Premier<br/>Real Estate Ally</motion.h2>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-5xl">
              {[
                { v: "1000+", l: "Properties Curated" },
                { v: "15+", l: "Years of Excellence" },
                { v: "₹5,000Cr+", l: "Portfolio Value" }
              ].map((s, i) => (
                <motion.div key={i} variants={proReveal} className="flex flex-col gap-4 border-l border-white/10 pl-10">
                   <span className="text-6xl font-black text-white tracking-tighter">{s.v}</span>
                   <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-gold/60">{s.l}</span>
                </motion.div>
              ))}
           </div>
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
      icon: <ShieldCheck size={32} />,
    },
    {
      t: "Predictive Analytics",
      d: "Proprietary heat-maps identifying high-yield corridors in Gurgaon and NCR with 15-20% projected uplift.",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      icon: <TrendingUp size={32} />,
    },
    {
      t: "Platform Infrastructure",
      d: "Integrated legal-tech and escrow protocols ensuring secure, institutional-grade transaction velocity.",
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
      icon: <Globe2 size={32} />,
    }
  ];

  return (
    <section className="py-40 bg-zinc-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div 
          className="text-center mb-32"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.span variants={proReveal} className="text-brand-gold text-[10px] font-black uppercase tracking-[0.5em] mb-6 block">Superior Methodology</motion.span>
          <motion.h2 variants={proReveal} className="text-5xl lg:text-8xl font-bold text-brand-navy tracking-tighter">Why This Platform<br/>is Superior</motion.h2>
        </motion.div>

        <motion.div 
          className="grid lg:grid-cols-3 gap-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {cards.map((card, i) => (
            <motion.div 
              key={i} 
              className="group relative h-[650px] rounded-[50px] overflow-hidden shadow-2xl"
              variants={maskReveal}
            >
              <img 
                src={card.img} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" 
                alt={card.t} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="absolute inset-0 p-16 flex flex-col justify-end translate-y-10 group-hover:translate-y-0 transition-transform duration-700">
                <div className="w-20 h-20 rounded-3xl bg-white/10 backdrop-blur-xl flex items-center justify-center mb-10 border border-white/20 group-hover:bg-brand-gold group-hover:text-brand-navy transition-all duration-500">
                  <div className="text-brand-gold group-hover:text-inherit">{card.icon}</div>
                </div>
                <h3 className="text-4xl font-bold text-white mb-6 leading-tight">{card.t}</h3>
                <p className="text-white/60 text-base leading-relaxed font-medium mb-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  {card.d}
                </p>
                <div className="flex items-center gap-4 text-brand-gold font-black text-[10px] uppercase tracking-[0.4em] opacity-0 group-hover:opacity-100 transition-all duration-700">
                  Explore Vector <ArrowRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const PlatformInfrastructure = () => {
  const advantages = [
    { title: "1000+ Premium Properties", desc: "20-50% Discount. Largest curated NLCT portfolio in India with value over ₹5,000 crores.", icon: <Building2 size={32} />, img: hero1 },
    { title: "Dedicated Personal Agent", desc: "Your Property Scout. Expert familiar with your budget and goals manages your journey.", icon: <Users2 size={32} />, img: agentImg },
    { title: "Expert Legal Support", desc: "Compliance & Senior advocates handling document verification and 12-month warranties.", icon: <Landmark size={32} />, img: legalImg },
    { title: "Quarterly Investor Events", desc: "4 Per Year. Networking designed for serious investors. Spring, Mid-Year, Portfolio, Gala.", icon: <Calendar size={32} />, img: eventImg },
    { title: "Free Lifetime Selling", desc: "Zero commission forever on properties purchased through our exclusive platform.", icon: <ArrowUpRight size={32} />, img: aboutImg },
    { title: "Verified Buyers & Sellers", desc: "Controlled platform for serious investors. No casual browsers or window shoppers.", icon: <ShieldCheck size={32} />, img: prop1 },
    { title: "Transparent Auction Process", desc: "Complete clarity, bidding strategy consultation, and filling management.", icon: <Gavel size={32} />, img: prop2 },
    { title: "Stress-Free Handover", desc: "From win to possession, we handle registration, inspection and documentation.", icon: <Handshake size={32} />, img: agentImg },
    { title: "Investment Insights", desc: "Comprehensive research achieving 15-25% average member ROI through data.", icon: <TrendingUp size={32} />, img: prop3 }
  ];

  return (
    <section className="py-40 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div 
          className="text-center mb-32"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.span variants={proReveal} className="text-brand-gold text-[10px] font-black uppercase tracking-[0.5em] mb-6 block">Foundation & Trust</motion.span>
          <motion.h2 variants={proReveal} className="text-5xl lg:text-8xl font-bold text-brand-navy tracking-tighter">Platform Infrastructure</motion.h2>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
        >
          {advantages.map((adv, i) => (
            <motion.div 
              key={i}
              className="group relative h-[450px] rounded-[40px] overflow-hidden border border-zinc-100 bg-zinc-50"
              variants={proReveal}
            >
              <div className="absolute inset-0 bg-white">
                <motion.img 
                  src={adv.img} 
                  alt={adv.title} 
                  className="w-full h-full object-cover opacity-[0.03] grayscale transition-all duration-1000 group-hover:scale-110 group-hover:opacity-10"
                  variants={maskReveal}
                />
              </div>
              
              <div className="relative p-16 h-full flex flex-col justify-between group-hover:bg-brand-navy transition-colors duration-700">
                <div className="w-20 h-20 rounded-3xl bg-brand-navy text-brand-gold flex items-center justify-center group-hover:bg-brand-gold group-hover:text-brand-navy transition-all duration-500 shadow-2xl">
                  {adv.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-black text-brand-navy mb-4 group-hover:text-white transition-colors tracking-tight">{adv.title}</h3>
                  <p className="text-sm text-zinc-500 font-medium leading-relaxed group-hover:text-white/60 transition-colors">{adv.desc}</p>
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
    { t: "Trump Tower 2", l: "Sector 69, Gurgaon", p: "₹9.2 Cr", img: prop1, tag: "Exclusive" },
    { t: "M3M Jacob & Co", l: "Sector 94, Noida", p: "₹7.5 Cr", img: prop2, tag: "Distressed" },
    { t: "The Imperial", l: "Sector 102, Gurgaon", p: "₹3.2 Cr", img: prop3, tag: "Verified" },
    { t: "Smart World Orchard", l: "Sector 61, Gurgaon", p: "₹2.5 Cr", img: resImg, tag: "Auction" },
    { t: "Elan The Mark", l: "Sector 106, Gurgaon", p: "₹1.9 Cr", img: offImg, tag: "High Yield" },
    { t: "Westin Residences", l: "Sector 103, Gurgaon", p: "₹6.1 Cr", img: hero2, tag: "Rare Block" }
  ];

  return (
    <section className="py-40 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-end mb-32 gap-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="max-w-2xl">
            <motion.span variants={proReveal} className="text-brand-gold text-[10px] font-black uppercase tracking-[0.5em] mb-6 block">Current Inventory</motion.span>
            <motion.h2 variants={proReveal} className="text-5xl lg:text-8xl font-bold text-brand-navy tracking-tighter leading-none">Curated Portfolio</motion.h2>
          </div>
          <motion.div variants={proReveal}>
             <Link to="/properties" className="btn-pill !bg-brand-navy text-white px-12 py-5 !rounded-full text-xs font-black tracking-widest uppercase hover:bg-brand-gold hover:text-brand-navy transition-all duration-500">View All 1000+ Assets</Link>
          </motion.div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {properties.map((p, i) => (
            <motion.div key={i} className="group cursor-pointer" variants={proReveal}>
              <motion.div 
                className="aspect-[3/4] overflow-hidden rounded-[60px] mb-10 shadow-3xl relative"
                variants={maskReveal}
              >
                <img src={p.img} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" alt={p.t} />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute top-10 left-10 bg-brand-gold text-brand-navy text-[10px] font-black px-6 py-2.5 rounded-full uppercase tracking-widest shadow-2xl">
                  {p.tag}
                </div>
              </motion.div>
              <div className="px-6">
                <h3 className="text-3xl font-black text-brand-navy mb-2 group-hover:text-brand-gold transition-colors tracking-tight">{p.t}</h3>
                <p className="text-base font-bold text-zinc-400 mb-6 flex items-center gap-2">
                  <MapPin size={16} className="text-brand-gold" /> {p.l}
                </p>
                <div className="flex items-center justify-between border-t border-zinc-100 pt-6">
                  <p className="text-2xl font-black text-brand-navy">{p.p}</p>
                  <ArrowUpRight size={24} className="text-brand-gold transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
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
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section ref={containerRef} className="py-48 relative bg-brand-navy overflow-hidden">
       <motion.div 
         className="absolute inset-0 opacity-40 bg-cover bg-center" 
         style={{ backgroundImage: `url(${aboutImg})`, y, scale: 1.2 }}
       ></motion.div>
       <div className="absolute inset-0 bg-gradient-to-b from-brand-navy via-brand-navy/40 to-brand-navy"></div>
       
       <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            <div className="w-24 h-24 rounded-full border border-brand-gold/30 flex items-center justify-center mb-12">
               <span className="text-brand-gold text-5xl font-serif">"</span>
            </div>
            <p className="text-white text-3xl md:text-5xl font-medium leading-[1.2] mb-16 tracking-tight">
               "Being based in Dubai, I wanted to invest in Gurgaon property but was worried about fraud. PremiumLand made everything so transparent—sent me video tours, explained every single charge, and helped me understand RERA. Finally found someone trustworthy."
            </p>
            <div className="flex items-center gap-6">
               <div className="w-20 h-20 rounded-[25px] overflow-hidden border-2 border-brand-gold shadow-2xl">
                  <img src={agentImg} alt="Investor" className="w-full h-full object-cover" />
               </div>
               <div>
                  <p className="text-white font-black text-xl tracking-tight">Raj Mehta</p>
                  <p className="text-brand-gold text-xs font-black uppercase tracking-[0.3em] mt-1">NRI Investor, Dubai</p>
               </div>
            </div>
          </motion.div>
       </div>
    </section>
  );
};

const TeamCareers = () => (
  <section className="py-40 bg-[#FAF9F6] border-y border-zinc-200 overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Column 1 */}
        <motion.div className="flex flex-col gap-8" variants={proReveal}>
          <motion.div className="rounded-[50px] bg-zinc-200 h-[500px] overflow-hidden shadow-2xl" variants={maskReveal}>
            <img src={bentoGlassSky} alt="Architecture" className="w-full h-full object-cover" />
          </motion.div>
          <div className="grid grid-cols-4 gap-4 h-24">
            <a href="#" className="bg-brand-navy rounded-[25px] flex items-center justify-center text-white hover:bg-brand-gold hover:text-brand-navy transition-all shadow-xl"><Instagram size={24} /></a>
            <a href="#" className="bg-brand-navy rounded-[25px] flex items-center justify-center text-white hover:bg-brand-gold hover:text-brand-navy transition-all shadow-xl"><Facebook size={24} /></a>
            <a href="#" className="bg-brand-navy rounded-[25px] flex items-center justify-center text-white hover:bg-brand-gold hover:text-brand-navy transition-all shadow-xl"><Linkedin size={24} /></a>
            <a href="#" className="bg-brand-navy rounded-[25px] flex items-center justify-center text-white hover:bg-brand-gold hover:text-brand-navy transition-all shadow-xl"><Youtube size={24} /></a>
          </div>
        </motion.div>

        {/* Column 2 */}
        <motion.div className="flex flex-col gap-8" variants={proReveal}>
          <motion.div className="rounded-[50px] bg-zinc-200 h-[650px] overflow-hidden relative group cursor-pointer shadow-2xl" variants={maskReveal}>
            <img src={bentoApartments} alt="Estate" className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent"></div>
            <div className="absolute bottom-10 left-10 text-white text-3xl font-black max-w-[200px] leading-tight">Insightful Consulting</div>
          </motion.div>
        </motion.div>

        {/* Column 3 */}
        <motion.div className="flex flex-col gap-8" variants={proReveal}>
          <motion.div className="rounded-[50px] bg-zinc-200 h-80 overflow-hidden shadow-2xl" variants={maskReveal}>
            <img src={prop2} alt="Asset" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div className="rounded-[50px] bg-blue-700 h-96 overflow-hidden relative group cursor-pointer shadow-2xl" variants={maskReveal}>
            <img src={bentoNightSky} alt="Vision" className="w-full h-full object-cover opacity-80" />
            <div className="absolute inset-0 bg-brand-navy/40 flex items-center justify-center p-10 text-center">
               <span className="text-white text-xl font-bold leading-relaxed tracking-tight group-hover:scale-110 transition-transform duration-700">Empowering The Future of Real Estate</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Column 4 */}
        <motion.div className="flex flex-col gap-8" variants={proReveal}>
          <div className="rounded-[50px] bg-brand-navy h-[450px] p-12 relative overflow-hidden shadow-3xl flex flex-col justify-between">
            <h3 className="text-4xl font-black text-white leading-tight tracking-tight">Join Our Visionary Team</h3>
            <div>
              <div className="flex -space-x-6 mb-10">
                {[agentImg, aboutImg, hero1].map((img, i) => (
                  <div key={i} className="w-20 h-20 rounded-full border-4 border-brand-navy overflow-hidden shadow-2xl">
                     <img src={img} className="w-full h-full object-cover" alt="Team" />
                  </div>
                ))}
              </div>
              <Link to="/careers" className="inline-flex items-center gap-4 text-brand-gold text-lg font-black uppercase tracking-widest group">
                Apply Now <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
          <motion.div className="rounded-[50px] bg-brand-gold h-48 flex items-center justify-center relative overflow-hidden group shadow-2xl" variants={maskReveal}>
             <div className="absolute inset-0 bg-brand-navy -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
             <span className="text-brand-navy font-black text-lg tracking-widest relative z-10 group-hover:text-white transition-colors">CONTACT US</span>
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
      <PlatformInfrastructure />
      <EnhancedPortfolio />
      <TestimonialSection />
      <TeamCareers />
      
      {/* MEGA CTA */}
      <motion.section 
        className="py-48 bg-brand-navy text-white text-center overflow-hidden relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-cover bg-center opacity-40 grayscale" style={{ backgroundImage: `url(${hero1})` }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/60 via-brand-navy to-brand-navy"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.h3 
            className="text-7xl md:text-9xl font-black mb-10 tracking-tighter leading-none"
            variants={proReveal}
            initial="hidden"
            whileInView="visible"
          >
            Ready for<br/><span className="text-brand-gold italic">Victory?</span>
          </motion.h3>
          <motion.p 
            className="text-white/50 text-xl mb-16 max-w-2xl mx-auto font-medium"
            variants={proReveal}
            initial="hidden"
            whileInView="visible"
          >
            Join the most exclusive real estate network in India today.
          </motion.p>
          <motion.div 
            className="flex flex-wrap justify-center gap-8"
            variants={proReveal}
            initial="hidden"
            whileInView="visible"
          >
            <Link to="/membership" className="bg-brand-gold text-brand-navy px-16 py-7 rounded-[30px] font-black uppercase text-sm tracking-[0.3em] shadow-3xl hover:scale-105 transition-transform">Apply Today</Link>
            <a href="tel:+919090112214" className="border-2 border-white/20 text-white px-16 py-7 rounded-[30px] font-black uppercase text-sm tracking-[0.3em] hover:bg-white/10 transition-all">Direct Line</a>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
};

export default Home;
