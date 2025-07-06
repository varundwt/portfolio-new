import React from 'react';

const logoItems = [
  { 
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', 
    name: 'React' 
  },
  { 
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', 
    name: 'Next.js' 
  },
  { 
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', 
    name: 'TypeScript' 
  },
  { 
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png', 
    name: 'JavaScript' 
  },
  { 
    src: 'https://vitejs.dev/logo.svg', 
    name: 'Vite' 
  },
  
  { 
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png', 
    name: 'Tailwind CSS' 
  },
{ 
    src: 'https://cdn.iconscout.com/icon/free/png-256/free-git-logo-icon-download-in-svg-png-gif-file-formats--brand-development-tools-pack-logos-icons-225996.png?f=webp&w=256', 
    name: 'Git' 
  },
{ 
    src: 'https://cdn.worldvectorlogo.com/logos/github-icon-2.svg', 
    name: 'GitHub' 
  },
  { 
    src: 'https://cdn.worldvectorlogo.com/logos/framer-motion.svg', 
    name: 'Framer Motion' 
  },
  { 
    src: 'https://img.stackshare.io/service/8846/preview.png', 
    name: 'Formik' 
  },
  { 
    src: 'https://miro.medium.com/v2/resize:fit:1080/1*9l9kbbiuFHWVqcjUJZcdYw.png', 
    name: 'Zod' 
  },
  { 
    src: 'https://cdn.iconscout.com/icon/free/png-256/free-postman-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-brand-vol-5-pack-logos-icons-2945092.png?f=webp', 
    name: 'Postman' 
  },
  { 
    src: 'https://avatars.githubusercontent.com/u/75042455?s=48&v=4', 
    name: 'Radix UI' 
  },
  { 
    src: 'https://cdn.prod.website-files.com/5f15081919fdf673994ab5fd/63ed91102c07a790c287d1f4_Postmark%20Logo.svg', 
    name: 'Postmark' 
  },
  { 
    src: 'https://www.chartjs.org/img/chartjs-logo.svg', 
    name: 'Chart.js' 
  },
  { 
    src: 'https://images.seeklogo.com/logo-png/51/1/shadcn-ui-logo-png_seeklogo-519786.png', 
    name: 'ShadCN' 
  },
  { 
    src: 'https://axios-http.com/assets/logo.svg', 
    name: 'Axios' 
  },
  { 
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/lodash/lodash-original.svg', 
    name: 'Lodash' 
  },
  { 
    src: 'https://swiperjs.com/images/swiper-logo.svg', 
    name: 'Swiper' 
  },
 
  { 
    src: 'https://react-hook-form.com/images/logo/react-hook-form-logo-only.svg', 
    name: 'React Hook Form' 
  },
  { 
    src: 'https://nextui.org/favicon.ico', 
    name: 'NextUI' 
  },
  { 
    src: 'https://www.embla-carousel.com/embla-logo.svg', 
    name: 'Embla Carousel' 
  },
  { 
    src: 'https://pngimg.com/d/letter_s_PNG35.png', 
    name: 'Sonner' 
  },
  
];

export default function LogoSlider() {
  return (
    <section id='logoSlider' className="mb-12 scroll-mt-16 md:mb-16 lg:mb-20 xl:mb-24 lg:scroll-mt-24 lg:border-[1px] lg:border-white/10 lg:p-4 xl:p-6 lg:rounded-xl py-8 md:py-12 lg:py-16">
      <div className="sticky md:block top-0 z-20 -mx-4 mb-4 w-full lg:w-full lg:pl-4 xl:pl-6 bg-slate-900/75 px-4 py-3 lg:-mx-4 xl:-mx-6 lg:-mr-4 xl:-mr-6 lg:p-0 backdrop-blur">
        <h2 className="section-title text-sm sm:text-base md:text-2xl lg:text-3xl xl:text-4xl font-bold uppercase tracking-widest text-slate-200">
          Tech Stack
        </h2>
      </div>
      
      {/* Custom Infinite Scroll Container */}
      <div className=" overflow-hidden relative">
        <div 
          className="flex items-center slider-container"
          style={{
            width: 'max-content',
            gap: '2rem', // 64px gap between items
          }}
        >
          {/* First set of logos */}
          {logoItems.map(({ src, name }, idx) => (
            <div key={`first-${idx}`} className="flex-shrink-0 flex flex-col items-center justify-end h-auto my-2" title={name}>
              <img 
                src={src}
                alt={name}
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg object-contain transition-all duration-300 ease-in-out hover:scale-110 cursor-pointer opacity-90 hover:opacity-100"
                loading="lazy"
              />
              <p className='mt-1 sm:mt-2 text-xs sm:text-sm'>{name}</p>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {logoItems.map(({ src, name }, idx) => (
            <div key={`second-${idx}`} className="flex-shrink-0 flex flex-col items-center justify-end h-auto my-2" title={name}>
              <img 
                src={src}
                alt={name}
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain rounded-lg transition-all duration-300 ease-in-out hover:scale-110 cursor-pointer opacity-90 hover:opacity-100"
                loading="lazy"
              />
              <p className='mt-1 sm:mt-2 text-xs sm:text-sm'>{name}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes logoScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .slider-container {
          animation: logoScroll 30s linear infinite;
        }
        
        .slider-container:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}