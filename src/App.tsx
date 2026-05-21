import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import LegacyFeatures from './components/LegacyFeatures';
import Timeline from './components/Timeline';
import Philosophy from './components/Philosophy';
import TrophyRoom from './components/TrophyRoom';
import FanEnergy from './components/FanEnergy';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <div className="noise"></div>
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <LegacyFeatures />
        <Timeline />
        <Philosophy />
        <TrophyRoom />
        <FanEnergy />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
