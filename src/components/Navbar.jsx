import React from 'react';
import { motion } from 'framer-motion';
import { useScrollSpy } from '../hooks/useScrollSpy';

export default function Navbar() {
  const sections = ['about', 'experience', 'projects', 'logoSlider', 'contact'];
  const activeSection = useScrollSpy(sections, 100);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const sectionLabels = {
    about: 'About',
    experience: 'Experience', 
    projects: 'Projects',
    logoSlider: 'Tech Stack',
    
    contact: 'Contact'
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="nav hidden lg:block"
      aria-label="In-page jump links"
    >
      <ul className="mt-4 lg:mt-6 xl:mt-8 w-max space-y-0.5 lg:space-y-1">
        {sections.map((section) => (
          <li key={section}>
            <button
              className={`nav-link group ${activeSection === section ? 'active' : ''}`}
              onClick={() => scrollToSection(section)}
              aria-label={`Go to ${sectionLabels[section]} section`}
            >
              <span 
                className={`nav-link-line ${
                  activeSection === section 
                    ? 'w-12 sm:w-16 bg-slate-200' 
                    : 'w-6 sm:w-8 bg-slate-600 group-hover:w-12 sm:group-hover:w-16 group-hover:bg-slate-200'
                }`}
              ></span>
              <span 
                className={`nav-link-text ${
                  activeSection === section 
                    ? 'text-slate-200' 
                    : 'text-slate-500 group-hover:text-slate-200'
                }`}
              >
                {sectionLabels[section]}
              </span>
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-4 lg:mt-6 xl:mt-8">
          <a
            className="inline-flex items-center font-medium leading-tight text-slate-200 text-sm sm:text-base lg:text-lg xl:text-xl group p-1.5 lg:p-2 hover:bg-[#183340] rounded-md transition-all duration-300"
            aria-label="View Full Résumé"
            href="https://drive.google.com/file/d/1SKVJ-Omu5CaaMXxTaN7hUv1mOjUAH1FJ/view"
            target="_blank"
            rel="noreferrer noopener"
          >
            <span>
              <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                View Full
              </span>
              <span className="whitespace-nowrap">
                <span className="border-b border-transparent pb-px pl-1 transition group-hover:border-teal-300 motion-reduce:transition-none">
                  Résumé
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0V6.75a.75.75 0 00-.75-.75H7.75a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </span>
          </a>
        </div>
    </motion.nav>
  );
}