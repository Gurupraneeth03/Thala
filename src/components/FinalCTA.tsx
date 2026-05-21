import React from 'react';
import { motion } from 'framer-motion';

const FinalCTA = () => {
  return (
    <section className="h-screen bg-deep-black relative flex items-center justify-center overflow-hidden">
      {/* Background Hero Silhouette & Spotlight */}
      <div className="absolute inset-0 z-0 flex items-end justify-center opacity-30">
        <div className="absolute top-0 w-[80vw] h-[80vw] bg-csk-yellow/10 rounded-full blur-[150px] pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="font-bebas text-7xl md:text-9xl text-white mb-6 uppercase leading-none">
            Legends Retire. <br/>
            <span className="text-csk-yellow">Legacy Remains.</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto mb-12 font-light">
            Relive the captaincy era that changed IPL forever.
          </p>
          
          <button className="px-12 py-5 bg-csk-yellow text-deep-black font-bebas text-2xl tracking-widest hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-[0_0_40px_rgba(249,205,5,0.3)] hover:shadow-[0_0_60px_rgba(249,205,5,0.5)]">
            Enter the Legacy
          </button>
        </motion.div>
      </div>
      
      {/* Cinematic Fade at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-deep-black to-transparent z-20" />
    </section>
  );
};

export default FinalCTA;
