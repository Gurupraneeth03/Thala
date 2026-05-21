import React from 'react';
import { motion } from 'framer-motion';

const FanEnergy = () => {
  return (
    <section className="py-24 bg-csk-yellow text-deep-black relative overflow-hidden flex flex-col items-center justify-center min-h-[60vh]">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDBMODggWk04IDBMMCA4IFoiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIxIj48L3BhdGg+Cjwvc3ZnPg==')] mix-blend-overlay" />
      
      {/* Marquee */}
      <div className="w-full overflow-hidden whitespace-nowrap rotate-[-2deg] scale-110 mb-12 relative z-10 border-y-4 border-deep-black py-4 bg-csk-yellow">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="inline-block"
        >
          {[...Array(10)].map((_, i) => (
            <span key={i} className="font-bebas text-6xl md:text-8xl tracking-widest mx-8 uppercase">
              Thala for a reason •
            </span>
          ))}
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center mt-12">
        <motion.h3 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-bebas text-5xl md:text-7xl mb-6 uppercase"
        >
          The Yellow Army
        </motion.h3>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl font-medium max-w-2xl mx-auto opacity-80"
        >
          More than just fans. A cult, a religion, an emotion that turns every away game into a home game.
        </motion.p>
      </div>

      {/* Confetti / Particle effect (css only representation) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-deep-black rounded-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-5%`,
            }}
            animate={{
              y: ['0vh', '100vh'],
              x: [`${Math.random() * 20 - 10}vw`, `${Math.random() * 20 - 10}vw`],
              rotate: [0, 360],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default FanEnergy;
