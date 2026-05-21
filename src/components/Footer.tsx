import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-deep-black border-t border-white/10 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-6 md:mb-0">
            <span className="font-bebas text-3xl tracking-widest text-white opacity-80">THALA<span className="text-csk-yellow">.</span></span>
          </div>
          
          <div className="flex gap-6 mb-6 md:mb-0 font-bebas tracking-widest text-white/50 text-xl">
            <a href="#" className="hover:text-csk-yellow transition-colors">X</a>
            <a href="#" className="hover:text-csk-yellow transition-colors">IG</a>
            <a href="#" className="hover:text-csk-yellow transition-colors">YT</a>
          </div>
          
          <div className="text-white/30 text-sm font-medium uppercase tracking-widest">
            © {new Date().getFullYear()} Legacy Experience. 
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
