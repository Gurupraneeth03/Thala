import { motion } from 'framer-motion';
import { Target, Shield, Flame, Users } from 'lucide-react';

const features = [
  {
    title: "ICE-COLD FINISHER",
    desc: "When the required rate climbs, the heart rate drops. Master of taking it deep.",
    icon: Flame,
    delay: 0.1
  },
  {
    title: "CALM LEADERSHIP",
    desc: "Unfazed by pressure, guiding the team with a composed demeanor in chaos.",
    icon: Shield,
    delay: 0.2
  },
  {
    title: "DYNASTY BUILDER",
    desc: "Built a culture of trust and loyalty, creating the most consistent IPL franchise.",
    icon: Target,
    delay: 0.3
  },
  {
    title: "TRUST IN YOUTH",
    desc: "Spotting talent where others see none. Turning rookies into match-winners.",
    icon: Users,
    delay: 0.4
  }
];

const LegacyFeatures = () => {
  return (
    <section className="py-32 bg-deep-black relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-csk-yellow/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-bebas text-5xl md:text-7xl mb-4"
          >
            The Anatomy of a <span className="text-csk-yellow">Legend</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/60 max-w-2xl mx-auto"
          >
            It wasn't just about winning. It was about how he won. The methodology, the madness, the absolute control.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: feature.delay }}
              whileHover={{ y: -10 }}
              className="bg-glass p-8 rounded-2xl relative group overflow-hidden border border-white/10 hover:border-csk-yellow/50 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-csk-yellow/0 to-csk-yellow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="w-14 h-14 rounded-full bg-dark-navy border border-white/10 flex items-center justify-center mb-8 group-hover:bg-csk-yellow/10 group-hover:border-csk-yellow/50 transition-all duration-500">
                <feature.icon className="w-6 h-6 text-white group-hover:text-csk-yellow transition-colors duration-500" />
              </div>
              
              <h3 className="font-bebas text-2xl tracking-wider mb-4 text-white group-hover:text-csk-yellow transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-sm text-white/50 leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                {feature.desc}
              </p>

              {/* Animated bottom border */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-csk-yellow group-hover:w-full transition-all duration-700 ease-out" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LegacyFeatures;
