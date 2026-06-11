import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { solutionsData } from '../data/solutions';

export const SolutionsSection = () => {
  const navigate = useNavigate();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const prevSlide = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth;
      scrollContainerRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  // Auto-play the carousel every 4 seconds
  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollContainerRef.current.scrollBy({ left: clientWidth, behavior: 'smooth' });
        }
      }
    }, 4000);
    return () => clearInterval(timer);
  }, [isHovered]);
  
  return (
    <section id="soluciones" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="block text-brand-orange font-bold uppercase tracking-widest text-sm mb-4">Nuestras Soluciones</span>
            <h2 className="section-title">Energía Segura y Respaldo Total</h2>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={prevSlide}
              aria-label="Ver solución anterior"
              className="w-12 h-12 rounded-full border-2 border-slate-800 flex items-center justify-center hover:bg-slate-800 hover:text-white transition-colors cursor-pointer"
            >
              <ArrowRight className="w-5 h-5 rotate-180" />
            </button>
            <button 
              onClick={nextSlide}
              aria-label="Ver siguiente solución"
              className="w-12 h-12 rounded-full border-2 border-brand-orange flex items-center justify-center text-brand-orange hover:bg-brand-orange hover:text-white transition-colors cursor-pointer"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div 
          className="relative -mx-4 sm:mx-0"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 px-4 sm:px-0 hide-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {solutionsData.map((sol, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -5 }}
                onClick={() => {
                  navigate(`/solucion/${sol.id}`);
                  window.scrollTo(0, 0);
                }}
                className="w-[85vw] sm:w-full md:w-[calc(50%-12px)] min-w-[85vw] sm:min-w-full md:min-w-[calc(50%-12px)] snap-start shrink-0 card-industrial group cursor-pointer hover:border-brand-orange transition-all flex flex-row overflow-hidden p-0 h-48 md:h-56"
              >
                <div className="h-full aspect-square relative overflow-hidden shrink-0 bg-gray-50">
                  <img 
                    src={sol.images[0]} 
                    alt={`Solución industrial: ${sol.title} para respaldo energético`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-5 md:p-6 flex flex-col flex-grow justify-between min-w-0">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center text-slate-800 group-hover:bg-brand-orange group-hover:text-white transition-all shrink-0 [&>svg]:w-5 [&>svg]:h-5">
                        {sol.icon}
                      </div>
                      <h3 className="text-base md:text-lg font-bold line-clamp-2 leading-tight">{sol.title}</h3>
                    </div>
                    <p className="text-gray-600 text-xs md:text-sm line-clamp-3 md:line-clamp-4 leading-relaxed">{sol.desc}</p>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex flex-wrap gap-1.5 min-w-0">
                      {sol.tags.map((tag, j) => (
                        <span key={j} className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider bg-gray-100 px-2 py-1 rounded whitespace-nowrap">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <ArrowRight className="w-5 h-5 text-brand-orange opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-3" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default SolutionsSection;
