import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="mb-12 scroll-mt-16 md:mb-16 lg:mb-20 xl:mb-24 lg:scroll-mt-24 lg:border-[1px] lg:border-white/10 lg:p-4 xl:p-6 lg:rounded-xl">
      <div className="sticky md:block top-0 z-20 -mx-4 mb-4 w-full lg:w-full lg:pl-4 xl:pl-6 bg-slate-900/75 px-4 py-3 lg:-mx-4 xl:-mx-6 lg:-mr-4 xl:-mr-6 lg:p-0 backdrop-blur">
        <h2 className="section-title text-sm sm:text-base md:text-2xl lg:text-3xl xl:text-4xl font-bold uppercase tracking-widest text-slate-200">
          About Me
        </h2>
      </div>
      
      <div className=''>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="mb-4 text-sm md:text-base">
           I’m a developer passionate about building performant, scalable, and visually striking user interfaces that prioritize both usability and accessibility. With a strong foundation in modern frontend technologies, I specialize in creating experiences that are not only functional but polished to the last pixel.
          </p>
          
          <p className="mb-4 text-sm md:text-base">
            Currently, I'm a Senior Front-End Developer at <span className='text-white'>StarClinch</span>, where I architect and lead development of large-scale web applications using <span className='text-white'>Next.js, React, and Tailwind CSS.</span> My recent work includes building the Artist Cockpit — a robust artist management platform — and optimizing app performance by over 40% using cutting-edge bundling techniques like Vite.
          </p>
          
          <p className="mb-4 text-sm md:text-base">
            Previously, I served as a Lead Instructor at <span className='text-white'>Dunagiri Cyberspace</span>, where I mentored over 150 aspiring developers in JavaScript, React, and full-stack best practices, while also developing production-ready apps like <span className='text-white'>Chai Pe Charcha, Starclinch, Artist Cockpit & Pitchbot.</span> 
          </p>          
          <p className='mb-4 text-sm md:text-base'>
            Outside of work, I’m often experimenting with new design-to-code workflows, contributing to side projects, or refining my skills in system design and web performance. When I’m not in front of a screen, you’ll probably find me on a mountain trail, deep in a history book, or enjoying a quiet moment in Dehradun.
          </p>
        </motion.div>
      </div>
    </section>
  );
}