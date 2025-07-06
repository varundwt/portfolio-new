import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import MobileNav from './components/MobileNav';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Writing from './components/Writing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LogoSlider from './components/LogoSlider';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Use viewport coordinates for fixed positioning
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900 relative">
      {/* Cursor spotlight effect */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
        }}
      ></div>

      <div className="mx-auto min-h-screen max-w-screen-xl px-4 py-8 font-sans sm:px-6 sm:py-12 md:px-8 md:py-16 lg:px-16 xl:px-24 lg:py-0">
        {/* Mobile Navigation */}
        <MobileNav />
        
        <div className="lg:flex lg:justify-between lg:gap-6 xl:gap-8">
          {/* Left sidebar - Fixed on desktop, normal flow on mobile */}
          <div className="lg:sidebar-container lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-4 xl:py-6 2xl:py-8">
            <div className="space-y-6 lg:space-y-4 xl:space-y-6">
              <Hero />
              <Navbar />
            </div>
            {/* Footer only shows on desktop in sidebar */}
            <div className="hidden lg:block">
              <Footer />
            </div>
          </div>

          {/* Right content - Scrollable */}
          <main className="pt-8 lg:pt-0 lg:w-1/2 lg:py-4 xl:py-6 2xl:py-8 space-y-8 lg:space-y-8 xl:space-y-12">
            <div className="border border-slate-200/10 rounded-lg p-4 lg:border-none lg:p-0">
              <About />
            </div>
            <div className="border border-slate-200/10 rounded-lg p-4 lg:border-none lg:p-0">
              <Experience />
            </div>
            <div className="border border-slate-200/10 rounded-lg p-4 lg:border-none lg:p-0">
              <Projects />
            </div>
            <div className="border border-slate-200/10 rounded-lg p-4 lg:border-none lg:p-0">
              <LogoSlider/>
            </div>
            <div className="border border-slate-200/10 rounded-lg p-4 lg:border-none lg:p-0">
              <Contact />
            </div>
            
            {/* Footer shows at bottom on mobile */}
            <div className="lg:hidden  rounded-lg p-4">
              <Footer />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;