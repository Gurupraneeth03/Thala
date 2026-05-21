import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const timelineData = [
  { year: '2008', title: 'THE BEGINNING', desc: 'The inception of a legacy. A young captain taking charge of a new franchise.' },
  { year: '2010', title: 'FIRST BLOOD', desc: 'The maiden IPL victory. The roar of the lion echoed across the cricketing world.' },
  { year: '2011', title: 'BACK TO BACK', desc: 'Defending the title. Proving that the first win was no fluke.' },
  { year: '2018', title: 'THE COMEBACK', desc: 'Returning after two years. The Dad\'s Army defying all odds to lift the trophy.' },
  { year: '2021', title: 'REDEMPTION', desc: 'Bouncing back from the lowest low to conquer the league once again.' },
  { year: '2023', title: 'IMMORTALITY', desc: 'A fairytale finish. 5th title, cementing the status of the greatest captain.' },
];

const Timeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !scrollRef.current) return;

    const sections = gsap.utils.toArray('.timeline-item');
    
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + scrollRef.current?.offsetWidth
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="h-screen bg-dark-navy relative overflow-hidden flex items-center" 
      id="dynasty"
    >
      <div className="absolute top-10 left-10 md:top-20 md:left-20 z-10">
        <h2 className="font-bebas text-6xl md:text-8xl text-white/10 uppercase">Timeline</h2>
      </div>

      <div ref={scrollRef} className="flex h-full items-center pl-[10vw] md:pl-[20vw] gap-20 pr-[20vw]">
        {timelineData.map((item, idx) => (
          <div 
            key={idx} 
            className="timeline-item flex-shrink-0 w-[80vw] md:w-[40vw] flex flex-col relative group cursor-pointer"
          >
            {/* The line */}
            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white/20 -z-10 group-hover:bg-csk-yellow/50 transition-colors duration-500" />
            
            {/* The dot */}
            <div className="w-4 h-4 rounded-full bg-white absolute top-1/2 left-0 -translate-y-1/2 group-hover:bg-csk-yellow group-hover:scale-150 group-hover:box-glow transition-all duration-500" />

            <div className="pb-12 opacity-50 group-hover:opacity-100 transition-opacity duration-500 transform group-hover:-translate-y-4">
              <h3 className="font-bebas text-5xl md:text-7xl text-white group-hover:text-csk-yellow transition-colors duration-300">
                {item.year}
              </h3>
            </div>

            <div className="pt-12 opacity-50 group-hover:opacity-100 transition-opacity duration-500 transform group-hover:translate-y-4">
              <h4 className="font-bebas text-3xl tracking-widest mb-3">{item.title}</h4>
              <p className="text-white/60 font-light max-w-sm">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
