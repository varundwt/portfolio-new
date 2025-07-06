import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="hero-title text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl"
      >
        <div className='flex justify-start items-end gap-2 sm:gap-4'>
            <a href="/" className="group hover:text-teal-300 transition-colors duration-300">
          Varun Pandey
        </a>
        <a
          href="https://drive.google.com/file/d/1SKVJ-Omu5CaaMXxTaN7hUv1mOjUAH1FJ/view"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-slate-200 hover:scale-110 transition-all duration-300"
          aria-label="Twitter"
        >
          
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 hover:text-teal-300">
  <path fill-rule="evenodd" d="M5.625 1.5H9a3.75 3.75 0 0 1 3.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 0 1 3.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 0 1-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875Zm5.845 17.03a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V12a.75.75 0 0 0-1.5 0v4.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3Z" clip-rule="evenodd" />
  <path d="M14.25 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 16.5 7.5h-1.875a.375.375 0 0 1-.375-.375V5.25Z" />
</svg>

        </a>
        </div>
        
      </motion.h1>
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="hero-subtitle mt-3 ms:text-md font-medium tracking-tight text-slate-200 sm:text-xl md:text-2xl lg:text-xl xl:text-2xl"
      >
        Senior Front-End Engineer
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-4 lg:mt-6 max-w-xs lg:max-w-sm xl:max-w-md leading-normal text-sm sm:text-lg md:text-xl lg:text-base"
      >
        I design and engineer immersive, pixel-perfect interfaces that are not just beautiful but built for accessibility, performance, and real-world impact.
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-6 lg:mt-8 flex items-center gap-4 lg:gap-5"
      >
        <a
          href="https://github.com/varundwt"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-slate-200 hover:scale-110 transition-all duration-300"
          aria-label="GitHub"
        >
          <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
        
        <a
          href="https://www.linkedin.com/in/semiintrovert/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-slate-200 hover:scale-110 transition-all duration-300"
          aria-label="LinkedIn"
        >
          <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
        
        
      </motion.div>
    </div>
  );
}