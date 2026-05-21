import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: '5', label: 'IPL Titles', suffix: '×' },
  { value: '250', label: 'Matches', suffix: '+' },
  { value: '1', label: 'Most Successful Captain', suffix: '' },
  { value: 'Millions', label: 'Inspired', suffix: '' }
];

const Counter = ({ value, suffix }: { value: string, suffix: string }) => {
  return (
    <span className="font-bebas text-5xl md:text-7xl lg:text-8xl text-csk-yellow text-glow">
      {value}{suffix}
    </span>
  );
};

const SocialProof = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-dark-navy relative overflow-hidden border-y border-white/5" id="legacy">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 mix-blend-overlay"></div>
      
      <div className="container mx-auto px-6" ref={ref}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
              className="flex flex-col items-center justify-center text-center"
            >
              <Counter value={stat.value} suffix={stat.suffix} />
              <div className="mt-4 text-white/60 font-medium tracking-widest uppercase text-xs md:text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
