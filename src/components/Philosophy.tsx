import React from 'react';
import { motion } from 'framer-motion';

const Philosophy = () => {
  return (
    <section className="h-screen bg-deep-black flex items-center justify-center relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-white/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-200px" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <h2 className="font-bebas text-6xl md:text-8xl lg:text-9xl text-white tracking-wider leading-none mb-8">
            "Pressure is a <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">privilege."</span>
          </h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex items-center justify-center gap-4 text-white/50 uppercase tracking-[0.3em] text-sm"
          >
            <div className="w-12 h-[1px] bg-csk-yellow" />
            <span>Captain Cool</span>
            <div className="w-12 h-[1px] bg-csk-yellow" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Philosophy;
