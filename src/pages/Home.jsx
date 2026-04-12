import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, ShieldCheck, CheckCircle2, 
  MapPin, Gavel, Scale, Handshake, TrendingUp, 
  Users, Info, Lock, Zap, Award, Briefcase, HeartHandshake, History,
  ArrowUpRight, Users2, Building2, Landmark, AreaChart, XCircle, CheckCircle,
  Gem, Calendar, Rocket, MessageSquare
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
            <div className="absolute inset-0 bg-brand-navy/60 z-10"></div>
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
    <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-fixed"></div>
    <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-transparent"></div>
    
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

const PlatformDifferentiation = () => (
  <section className="section-padding bg-zinc-50 overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="text-center mb-24">
        <span className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">Platform Differentiation</span>
        <h2 className="text-4xl lg:text-5xl font-bold text-brand-navy">Why This Platform is Superior</h2>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-16 items-stretch">
        {/* TRADITIONAL */}
        <div className="bg-white p-12 rounded-[40px] border border-zinc-200 shadow-xl relative overflow-hidden group">
          <img src={chaosImg} className="absolute inset-0 w-full h-full object-cover opacity-[0.03] group-hover:opacity-[0.07] transition-opacity" alt="Chaos" />
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-10 text-zinc-400">Traditional Real Estate Problems</h3>
            <ul className="space-y-6">
              {[
                { t: "Middlemen", d: "Too many brokers taking extra cuts." },
                { t: "High Commissions", d: "Standard 2-5% adds massive hidden costs." },
                { t: "Delays", d: "Communication breakdowns across multiple agents." },
                { t: "Confusion", d: "Fragmented support from different vendors." }
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <XCircle size={20} className="text-red-400 shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-zinc-600">{item.t}</p>
                    <p className="text-xs text-zinc-400">{item.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* PREMIUM LAND ADVANTAGE */}
        <div className="bg-brand-navy p-12 rounded-[40px] shadow-3xl relative overflow-hidden group text-white">
          <img src={advantageImg} className="absolute inset-0 w-full h-full object-cover opacity-[0.05] group-hover:opacity-[0.1] transition-opacity" alt="Advantage" />
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-10 text-brand-gold">PremiumLand Advantage</h3>
            <ul className="space-y-6">
              {[
                { t: "Direct Transactions", d: "Connected directly with verified sellers." },
                { t: "No Intermediaries", d: "No brokers. No sub-agents. No middlemen." },
                { t: "Full Support", d: "Integrated legal and transaction team." },
                { t: "Transparent System", d: "Full visibility at every single step." }
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <CheckCircle size={20} className="text-brand-gold shrink-0 mt-1" />
                  <div>
                    <p className="font-bold">{item.t}</p>
                    <p className="text-xs text-white/40">{item.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const InvestorBenefits = () => {
  const categories = [
    {
      title: "For Buyers",
      items: [
        "Discounted property access",
        "No agent commission",
        "Direct negotiation",
        "Full legal support",
        "Networking opportunities"
      ],
      icon: <Users2 size={40} className="text-brand-gold" />
    },
    {
      title: "For Sellers",
      items: [
        "Free property listing",
        "Verified serious buyers",
        "Faster sales cycle",
        "Zero commission",
        "Full support protocol"
      ],
      icon: <Building2 size={40} className="text-brand-gold" />
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16">
          {categories.map((cat, i) => (
            <div key={i} className="p-16 bg-zinc-50 rounded-[40px] border border-zinc-100 hover:border-brand-gold/30 transition-all flex flex-col gap-8">
               <div className="p-5 bg-white rounded-2xl shadow-sm w-fit">{cat.icon}</div>
               <h3 className="text-4xl font-bold text-brand-navy">{cat.title}</h3>
               <ul className="space-y-5">
                 {cat.items.map((item, idx) => (
                   <li key={idx} className="flex items-center gap-4 text-base font-bold text-zinc-600">
                     <div className="w-1.5 h-1.5 rounded-full bg-brand-gold"></div>
                     {item}
                   </li>
                 ))}
               </ul>
            </div>
          ))}
        </div>
      </div>
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
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-24">
          <span className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">Exclusive Community</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white italic">Quarterly Investor Events</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {events.map((e, i) => (
            <div key={i} className="p-10 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-all group">
              <span className="text-brand-gold font-bold text-sm mb-4 block underline underline-offset-8 decoration-white/10">{e.m}</span>
              <h4 className="text-2xl font-bold mb-4">{e.t}</h4>
              <p className="text-xs text-white/40 leading-relaxed font-medium">{e.d}</p>
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

const CuratedPortfolio = () => {
  const properties = [
    { t: "Trump Tower 2", l: "Sector 69, Gurgaon", p: "₹9 Cr", img: prop1 },
    { t: "M3M Jacob & Co", l: "Sector 94, Noida", p: "₹7.5 Cr", img: prop2 },
    { t: "The Imperial", l: "Sector 102, Gurgaon", p: "₹3.2 Cr", img: prop3 },
    { t: "Smart World Orchard", l: "Sector 61, Gurgaon", p: "₹2.5 Cr", img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1035&auto=format&fit=crop" },
    { t: "Elan The Mark", l: "Sector 106, Gurgaon", p: "₹1.9 Cr", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" },
    { t: "Westin Residences", l: "Sector 103, Gurgaon", p: "₹6.1 Cr", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop" },
    { t: "Godrej Miraya", l: "Sector 43, Gurgaon", p: "₹9.2 Cr", img: "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=2070&auto=format&fit=crop" },
    { t: "Silverglades Legacy", l: "Sector 63A, Gurgaon", p: "₹6.5 Cr", img: "https://images.unsplash.com/photo-1560184897-ae75f418493e?q=80&w=2070&auto=format&fit=crop" },
    { t: "DLF Privana", l: "Sector 76, Gurgaon", p: "₹8.8 Cr", img: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop" }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-navy mb-4">Curated Portfolio</h2>
          <p className="text-zinc-400 font-bold uppercase tracking-widest text-[10px]">Institutional Grade Assets</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {properties.map((p, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden rounded-[40px] mb-8 shadow-2xl relative">
                <img src={p.img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={p.t} />
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-1">{p.t}</h3>
              <p className="text-sm font-bold text-zinc-400 mb-3">{p.l}</p>
              <p className="text-lg font-black text-brand-gold">{p.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialSection = () => (
  <section className="py-40 relative bg-brand-navy overflow-hidden">
     <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
     <div className="absolute inset-0 bg-brand-navy/80"></div>
     
     <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <p className="text-white text-xl md:text-2xl font-medium leading-relaxed mb-12 italic opacity-90">
           "I was completely lost when I started looking for a property in Gurgaon. My budget was tight, and I didn't know which sectors were actually good. The PremiumLand team didn't just show me random properties—they sat with me, understood my goals, and found me a perfect asset at 30% below market price."
        </p>
        <div className="flex items-center justify-center gap-4">
           <div className="w-12 h-12 rounded-full bg-brand-gold/20 border border-brand-gold/30 flex items-center justify-center text-brand-gold font-bold">PV</div>
           <div className="text-left">
              <p className="text-white font-bold text-sm">Priya Verma</p>
              <p className="text-brand-gold text-[10px] font-bold uppercase tracking-widest">Premium Member</p>
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
      <PlatformDifferentiation />
      <CuratedPortfolio />
      <InvestorBenefits />
      <InvestorEvents />
      <Benefits />
      <TestimonialSection />
      <TrustMetrics />
      
      <section className="section-padding bg-brand-navy text-white text-center rounded-t-[100px] mt-24">
         <div className="max-w-4xl mx-auto px-6">
            <h3 className="text-5xl lg:text-7xl font-bold mb-12 italic">Join a Private Network Built for Serious Investors</h3>
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
