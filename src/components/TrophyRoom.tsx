import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Crown, Medal } from 'lucide-react';

const trophies = [
  { icon: Trophy, count: '5', label: 'IPL Titles', desc: '2010, 2011, 2018, 2021, 2023' },
  { icon: Crown, count: '2', label: 'Champions League T20', desc: '2010, 2014' },
  { icon: Star, count: '10', label: 'Finals Appearances', desc: 'Most by any team in history' },
  { icon: Medal, count: '133', label: 'Wins as Captain', desc: 'Most successful captain in IPL' },
];

const TrophyRoom = () => {
  return (
    <section className="py-32 bg-dark-navy relative overflow-hidden" id="trophies">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-csk-yellow/30 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-24 relative">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-bebas text-6xl md:text-8xl text-white tracking-wider"
          >
            The <span className="text-csk-yellow text-glow">Trophy</span> Room
          </motion.h2>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[100px] bg-csk-yellow/10 blur-[60px] pointer-events-none" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trophies.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -15, rotateY: 10, scale: 1.02 }}
              className="bg-deep-black border border-metallic-gold/30 rounded-xl p-8 relative group overflow-hidden shadow-[0_0_15px_rgba(212,160,23,0.1)] hover:shadow-[0_0_30px_rgba(212,160,23,0.3)] transition-all duration-500 perspective-1000"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-csk-yellow/10 rounded-full blur-[40px] group-hover:bg-csk-yellow/20 transition-all duration-500" />
              
              <div className="text-csk-yellow mb-8 transform group-hover:scale-110 group-hover:translate-z-10 transition-transform duration-500">
                <item.icon size={48} strokeWidth={1.5} />
              </div>
              
              <div className="mb-2">
                <span className="font-bebas text-6xl text-white">{item.count}</span>
              </div>
              
              <h3 className="font-bebas text-2xl tracking-widest text-csk-yellow mb-2">
                {item.label}
              </h3>
              
              <p className="text-sm text-white/50">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrophyRoom;
