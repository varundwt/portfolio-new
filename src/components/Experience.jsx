import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Senior Next.js Developer',
    company: 'StarClinch',
    period: 'Sep 2024 — Present',
    description:
      'Leading frontend development of the Artist Cockpit at StarClinch using Next.js, React, and Tailwind CSS. Improved performance by 40% with Vite bundling, implemented secure REST/GraphQL APIs, and built cross-platform mobile apps using Capacitor.js. Integrated analytics, multilingual SEO, and data caching via React Query. Advocated accessibility and code quality using ESLint, Prettier, and modular UI design.',
    technologies: [
      'Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Vite', 'GraphQL', 'REST API', 'React Query', 'Capacitor.js', 'Formik', 'Framer Motion', 'Zod', 'Yup', 'Radix UI', 'Axios', 'Next SEO', 'ESLint', 'Prettier'
    ],
    link: 'https://www.starclinch.com'
  },
  {
    role: 'Web Development Lead Instructor',
    company: 'Dunagiri Cybespace',
    period: 'Aug 2021 — Sep 2024',
    description:
      'Taught and mentored 150+ students in modern frontend technologies including React.js, JavaScript, and Next.js. Developed full-stack projects like Styler and Blaze News, emphasizing optimization and clean UI architecture. Established deployment workflows using Netlify and Vercel, and enforced Git-based version control and CI/CD best practices.',
    technologies: [
      'React.js', 'JavaScript', 'HTML5', 'CSS3', 'Redux', 'Netlify', 'Vercel', 'MongoDB', 'Git', 'Jest', 'React Testing Library'
    ],
    link: '#'
  }
];


export default function Experience() {
  return (
    <section id="experience" className="mb-12 scroll-mt-16 md:mb-16 lg:mb-20 xl:mb-24 lg:scroll-mt-24 lg:border-[1px] lg:border-white/10 lg:p-4 xl:p-6 lg:rounded-xl">
      <div className="sticky md:block top-0 z-20 -mx-4 mb-4 w-full lg:w-full lg:pl-4 xl:pl-6 bg-slate-900/75 px-4 py-3 lg:-mx-4 xl:-mx-6 lg:-mr-4 xl:-mr-6 lg:p-0 backdrop-blur">
        <h2 className="section-title text-sm sm:text-base md:text-2xl lg:text-3xl xl:text-4xl font-bold uppercase tracking-widest text-slate-200">
          Experience
        </h2>
      </div>
      
      
      <div className=''>
        <ol className="group/list -mb-8 lg:-mb-12">
          {experiences.map((exp, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-8 lg:mb-12"
            >
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-4 lg:gap-6 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                
                <header className="z-10 mb-2 mt-1 text-xs sm:text-sm font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label={exp.period}>
                  {exp.period}
                </header>
                
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-200">
                    <div>
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-sm sm:text-base lg:text-lg"
                        href={exp.link}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`${exp.role} at ${exp.company} (opens in a new tab)`}
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>
                          {exp.role} · 
                          <span className="inline-block">
                            {exp.company}
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
                        </span>
                      </a>
                    </div>
                  </h3>
                  
                  <p className="mt-2 text-xs sm:text-sm leading-normal">{exp.description}</p>
                  
                  <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                    {exp.technologies.map((tech, techIndex) => (
                      <li key={techIndex} className="mr-1 sm:mr-1.5 mt-1.5 sm:mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-2 sm:px-3 py-0.5 sm:py-1 text-xs font-medium leading-4 sm:leading-5 text-teal-300">
                          {tech}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.li>
          ))}
        </ol>
        
        
      </div>
    </section>
  );
}