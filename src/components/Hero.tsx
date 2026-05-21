import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  useEffect(() => {
    // Parallax mouse move effect for the canvas wrapper
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !canvasRef.current) return;
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 20;
      const yPos = (clientY / window.innerHeight - 0.5) * 20;
      
      gsap.to(canvasRef.current, {
        x: xPos,
        y: yPos,
        duration: 1,
        ease: 'power2.out',
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Image sequence scroll animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;

    const frameCount = 28;
    const currentFrame = (index: number) => 
      `/hero-sequence/ezgif-frame-${(index + 1).toString().padStart(3, '0')}.jpg`;

    const images: HTMLImageElement[] = [];
    const sequence = { frame: 0 };

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.push(img);
    }

    const render = () => {
      if (!images[sequence.frame]) return;
      const img = images[sequence.frame];
      
      // We only draw if the image is loaded.
      if (!img.complete) return;

      const hRatio = canvas.width / img.width;
      const vRatio = canvas.height / img.height;
      const ratio = Math.max(hRatio, vRatio);
      const centerShift_x = (canvas.width - img.width * ratio) / 2;
      const centerShift_y = (canvas.height - img.height * ratio) / 2;

      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(
        img,
        0, 0, img.width, img.height,
        centerShift_x, centerShift_y, img.width * ratio, img.height * ratio
      );
    };

    // Pre-render first frame when loaded
    if (images[0]) {
      images[0].onload = render;
    }

    gsap.to(sequence, {
      frame: frameCount - 1,
      snap: 'frame',
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=400', // Slightly longer so there's enough distance to feel the smooth scrub
        scrub: 1,     // Scrub=1 acts as a powerful interpolator for buttery smooth playback
        pin: true,    
      },
      onUpdate: render,
    });

    const handleResize = () => {
      if (!canvas.parentElement) return;
      // Set actual canvas drawing dimensions
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
      render();
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      ScrollTrigger.getAll().forEach(t => t.trigger === containerRef.current && t.kill());
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-deep-black flex items-center pt-20"
      id="hero"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] bg-csk-yellow/10 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[40vw] h-[40vw] bg-metallic-gold/10 rounded-full blur-[100px] mix-blend-screen" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 h-full flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Side: Typography */}
        <motion.div 
          ref={textRef}
          style={{ y: y1, opacity }}
          className="w-full md:w-1/2 flex flex-col justify-center h-full pt-20 md:pt-0"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="text-[4rem] md:text-[6rem] lg:text-[8rem] leading-[0.85] font-bebas text-white mb-6 uppercase">
              The Man Who <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-csk-yellow to-metallic-gold text-glow">Built a Dynasty</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/70 max-w-lg mb-10 font-light border-l-2 border-csk-yellow pl-6">
              5 IPL titles. Countless last-over finishes. One immortal legacy in yellow.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="px-8 py-4 bg-csk-yellow text-deep-black font-bebas text-xl tracking-wider hover:bg-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(249,205,5,0.4)]">
                Enter the Legacy
              </button>
              <button className="px-8 py-4 bg-transparent border border-white/20 text-white font-bebas text-xl tracking-wider hover:bg-white/5 transition-all duration-300">
                Watch the Journey
              </button>
            </div>

            <div className="flex items-center gap-6 text-sm text-white/50 uppercase tracking-widest font-medium">
              <span>19 Seasons</span>
              <span className="w-1.5 h-1.5 rounded-full bg-csk-yellow" />
              <span>5 Titles</span>
              <span className="w-1.5 h-1.5 rounded-full bg-csk-yellow" />
              <span>Millions Inspired</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side: Visual Image Sequence */}
        <motion.div 
          style={{ y: y2 }}
          className="w-full md:w-1/2 h-full flex items-center justify-center relative mt-10 md:mt-0"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative w-full max-w-lg aspect-[3/4] md:aspect-auto md:h-[80vh]"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-transparent to-transparent z-10 md:hidden" />
            <canvas 
              ref={canvasRef} 
              className="w-full h-full rounded-sm box-glow filter brightness-90 contrast-125 object-cover" 
            />
            {/* Glowing rim effect */}
            <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(249,205,5,0.2)] rounded-sm pointer-events-none z-20" />
          </motion.div>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <span className="text-xs uppercase tracking-widest text-white/50 font-medium">Scroll to explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-csk-yellow to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
