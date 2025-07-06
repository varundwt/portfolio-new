import React from 'react';
import { motion } from 'framer-motion';

// Import images properly
import starclinchImage from '../assets/starclinch.svg';
import cockpitImage from '../assets/cockpit.jpg';
import pitchbotImage from '../assets/pitchbot.jpg';
import chaipecharchaImage from '../assets/chaipecharcha.png';

const projects = [
  {
    name: 'StarClinch Official Website',
    description:
      'The official StarClinch website showcasing artist services and bookings. Built with Next.js, React, and Tailwind CSS. Features dynamic content integration, multi-language SEO optimization, and seamless responsive design.',
    technologies: [
      'Next.js',  'TypeScript', 'Tailwind CSS', 'NextUI', 'Emotion', 'Swiper', 'React Scroll Parallax', 'Next SEO', 'React Markdown', 
    ],
    link: 'https://starclinch.com',
    featured: true,
    banner: starclinchImage
  },
  {
    name: 'Artist Cockpit',
    description:
      'A Vite-powered React dashboard for artists to manage events, bookings, and analytics. Implements drag-and-drop scheduling with DnD Kit, rich text editing via TipTap, data visualization using Chart.js, and advanced form handling with React Hook Form and Zod validation.',
    technologies: [
       'React', 'JavaScript', 'Tailwind CSS', 'Vite', 'Dnd Kit', 'Radix UI', 'React Hook Form', 'Chart.js', 'TipTap', 'Zod', 'Framer Motion'
    ],
    link: 'https://artist.starclinch.com',
    banner: cockpitImage
  },
  {
    name: 'PitchBot Chrome Extension',
    description:
      'A Chrome Extension for StarClinch Business Associates to filter and pitch artists to clients. Integrates with Pipedrive CRM for deal data pre-filling and supports multi-parameter artist filtering, profile management, and pitching via email or Shortlist App. Built with React, Vite, and Tailwind CSS.',
    technologies: [
      'React', 'JavaScript', 'Tailwind CSS', 'Vite', 'Radix UI', 'Axios', 'React Router DOM'
    ],
    link: '',
    featured: false,
    banner: pitchbotImage
  },
  {
    name: 'Chai Pe Charcha - News Portal',
    description:
      'A Hindi-language news and discussion portal delivering in-depth articles, web stories and video roundups on politics, tech, and lifestyle. Built on WordPress CMS with a custom theme, it features SEO-optimized content, responsive design, dynamic Web Stories, social-share integrations, and performance-boosting plugins for caching and analytics.',
    technologies: [
      'WordPress', 'PHP', 'MySQL', 'HTML5', 'CSS3',
      'JavaScript', 'jQuery', 'Bootstrap', 'Yoast SEO',
      'Cloudflare CDN', 'Google Analytics'
    ],
    link: 'https://chaiprcharcha.in',
    banner: chaipecharchaImage
  }
];

export default function Projects() {
  return (
    <section id="projects" className="mb-12 scroll-mt-16 md:mb-16 lg:mb-20 xl:mb-24 lg:scroll-mt-24 lg:border-[1px] lg:border-white/10 lg:p-4 xl:p-6 lg:rounded-xl">
      <div className="sticky md:block top-0 z-20 -mx-4 mb-4 w-full lg:w-full lg:pl-4 xl:pl-6 bg-slate-900/75 px-4 py-3 lg:-mx-4 xl:-mx-6 lg:-mr-4 xl:-mr-6 lg:p-0 backdrop-blur">
        <h2 className="section-title text-sm sm:text-base md:text-2xl lg:text-3xl xl:text-4xl font-bold uppercase tracking-widest text-slate-200 mt-10">
          Projects
        </h2>
      </div>
      
      <div className=''>
      
        <ul className="group/list -mb-8 lg:-mb-12">
          {projects.map((project, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-8 lg:mb-12"
            >
              <div className="group relative grid gap-3 sm:gap-4 lg:gap-6 pb-1 transition-all sm:grid-cols-8 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                
                <div className="z-10 sm:order-2 sm:col-span-6">
                  <h3>
                    <a
                      className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-sm sm:text-base lg:text-lg"
                      href={project.link}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`${project.name} (opens in a new tab)`}
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <span>
                        {project.name}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="inline-block h-3 w-3 sm:h-4 sm:w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0V6.75a.75.75 0 00-.75-.75H7.75a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </a>
                  </h3>
                  
                  <p className="mt-2 text-xs sm:text-sm leading-normal">{project.description}</p>
                  
                  {project.github && (
                    <a
                      className="relative mt-2 inline-flex items-center text-xs sm:text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300"
                      href={project.github}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`${project.name} on GitHub (opens in a new tab)`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="mr-1 h-2 w-2 sm:h-3 sm:w-3"
                        aria-hidden="true"
                      >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                      </svg>
                      <span>View on GitHub</span>
                    </a>
                  )}
                  
                  <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                    {project.technologies.map((tech, techIndex) => (
                      <li key={techIndex} className="mr-1 sm:mr-1.5 mt-1.5 sm:mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-2 sm:px-3 py-0.5 sm:py-1 text-xs font-medium leading-4 sm:leading-5 text-teal-300">
                          {tech}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="z-10 hidden md:block sm:order-1 sm:col-span-2 sm:translate-y-1">
                  <div className="rounded border border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1">
                    <div className="aspect-video bg-slate-800 rounded  overflow-hidden">
                      <img src={project.banner} alt="" className='w-full h-full object-cover '/>
                    </div>
                  </div>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
        
        
      </div>
    </section>
  );
}