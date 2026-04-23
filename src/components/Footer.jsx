import React from 'react';
import { Link } from 'react-router-dom';
import { Gem } from 'lucide-react';

const Footer = () => (
  <footer className="py-24 bg-[#0a1128] border-t border-[#c5a059]/10 text-white">
    <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-4 gap-20">
      <div className="col-span-2">
        <Link to="/" className="flex items-center gap-4 mb-10">
           <div className="w-10 h-10 bg-[#c5a059] text-[#0a1128] flex items-center justify-center rounded-lg font-bold shadow-2xl">V</div>
           <div className="flex flex-col text-left">
             <span className="text-2xl font-bold tracking-tighter text-white">VAULT</span>
             <span className="text-[10px] font-bold tracking-[0.3em] text-[#c5a059] uppercase">PremiumLand Auctions</span>
           </div>
        </Link>
        <p className="text-white/40 max-w-sm text-base font-medium leading-relaxed mb-12 text-left">
          India's revolutionary single, controlled platform for serious property investors and verified sellers. Zero hidden fees. Full transparency.
        </p>
      </div>
      
      <div className="text-left">
        <h4 className="text-[10px] font-bold uppercase tracking-[0.5em] mb-10 text-brand-gold">Navigation</h4>
        <ul className="space-y-6 text-xs font-bold text-white/60 tracking-widest">
          <li><Link to="/properties" className="hover:text-white transition-colors uppercase">Inventory Hub</Link></li>
          <li><Link to="/membership" className="hover:text-white transition-colors uppercase">Admission Protocol</Link></li>
          <li><Link to="/about" className="hover:text-white transition-colors uppercase">Private Bank</Link></li>
        </ul>
      </div>
      
      <div className="text-left">
        <h4 className="text-[10px] font-bold uppercase tracking-[0.5em] mb-10 text-brand-gold">Institutional</h4>
        <ul className="space-y-6 text-xs font-bold text-white/60 tracking-widest">
          <li><Link to="/faq" className="hover:text-white transition-colors uppercase">Legal Warrants</Link></li>
          <li><a href="#" className="hover:text-white transition-colors uppercase">Mandate Policy</a></li>
          <li><a href="#" className="hover:text-white transition-colors uppercase">Data Sovereignty</a></li>
        </ul>
      </div>
    </div>
    
    <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
       <p className="text-[10px] text-white/20 font-bold tracking-[0.3em] uppercase">© {new Date().getFullYear()} PremiumLand Auctions. All Rights Reserved.</p>
       <div className="flex gap-12 text-[9px] font-bold tracking-[0.4em] text-white/10 uppercase">
          <a href="#" className="hover:text-white transition-colors">Privacy Protocol</a>
          <a href="#" className="hover:text-white transition-colors">Digital Cookies</a>
       </div>
    </div>
  </footer>
);

export default Footer;
