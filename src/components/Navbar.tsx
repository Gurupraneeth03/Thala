import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'py-4 bg-deep-black/80 backdrop-blur-md border-b border-white/5' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 bg-csk-yellow rounded-full flex items-center justify-center text-deep-black font-bebas text-xl pt-1">
            7
          </div>
          <span className="font-bebas text-2xl tracking-widest text-white">THALA<span className="text-csk-yellow">.</span></span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {['Legacy', 'Dynasty', 'Trophies', 'Journey'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm uppercase tracking-widest font-medium text-white/70 hover:text-csk-yellow transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <button className="hidden md:block px-6 py-2.5 bg-csk-yellow text-deep-black font-bebas tracking-wider text-lg hover:bg-white transition-colors duration-300">
          Enter Legacy
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
