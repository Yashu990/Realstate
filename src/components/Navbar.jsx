import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Gem } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Properties', path: '/properties' },
    { name: 'Services', path: '/services' },
    { name: 'News', path: '/insights' },
    { name: 'Contact', path: '/faq' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-4 bg-[#0a1128] border-b border-[#c5a059]/20 shadow-2xl' : 'py-8 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#c5a059] text-[#0a1128] rounded-lg flex items-center justify-center text-xl font-bold shadow-2xl">
             V
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-white tracking-tighter leading-none">VAULT</span>
            <span className="text-[8px] font-bold tracking-[0.3em] text-[#c5a059] uppercase">PremiumLand Auctions</span>
          </div>
        </Link>
        
        {/* DESKTOP NAV */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`text-[11px] font-bold transition-all uppercase tracking-widest ${scrolled ? 'text-white/70 hover:text-[#c5a059]' : 'text-white/80 hover:text-white'} ${pathname === link.path ? 'text-[#c5a059]' : ''}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <Link to="/membership" className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#c5a059] text-[#0a1128] rounded-lg font-bold text-[10px] uppercase tracking-widest hover:bg-white transition-all shadow-xl">
            <Gem size={14} />
            <span>Join Now</span>
          </Link>
        </div>
        
        {/* MOBILE TOGGLE */}
        <button 
          className="lg:hidden p-2 text-white" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* MOBILE MENU */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#0a1128] border-b border-[#c5a059]/20 p-8 flex flex-col gap-6 text-center shadow-3xl">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)} className="text-sm font-bold text-white/70 hover:text-[#c5a059] py-2 uppercase tracking-widest">{link.name}</Link>
          ))}
          <Link to="/membership" onClick={() => setIsOpen(false)} className="bg-[#c5a059] text-[#0a1128] py-4 rounded-lg font-bold uppercase text-xs tracking-widest">Join as Member</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
