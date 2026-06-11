import React, { useState, useEffect } from 'react';
import { Activity, Battery, Zap, Sun, ShieldCheck, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Calidad de Energía",
      image: "/images/hero-calidad.webp",
      tag: "Armónicos y Diagnóstico",
      icon: <Activity className="w-6 h-6" />
    },
    {
      title: "Respaldo de Energía (UPS)",
      image: "/images/hero-ups.webp",
      tag: "Protección Continua",
      icon: <Battery className="w-6 h-6" />
    },
    {
      title: "Generadores de Emergencia",
      image: "/images/hero-generadores.webp",
      tag: "Potencia de Respaldo",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Paneles Solares",
      image: "/images/hero-solar.webp",
      tag: "Energía Renovable en Tabasco",
      icon: <Sun className="w-6 h-6" />
    },
    {
      title: "Protección Eléctrica",
      image: "/images/hero-proteccion.webp",
      tag: "Tierra Física y Supresores de Picos",
      icon: <ShieldCheck className="w-6 h-6" />
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 -z-10 skew-x-12 translate-x-20 hidden lg:block" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-brand-orange text-xs font-bold uppercase tracking-widest mb-6">
              <ShieldCheck className="w-4 h-4" /> Continuidad Operativa Garantizada
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[0.9] mb-6">
              <span className="block text-brand-orange text-lg md:text-xl font-bold uppercase tracking-[0.2em] mb-4">Paneles Solares en Villahermosa</span>
              TU EMPRESA <br />
              <span className="text-brand-orange">NO PUEDE</span> <br />
              DETENERSE.
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-lg">
              Ingeniería eléctrica y <strong>paneles solares en Villahermosa</strong>. Protegemos tu operación contra apagones y fallas críticas en todo el sur de México.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary flex items-center justify-center gap-2 cursor-pointer"
              >
                Cotizar respaldo energético <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => document.getElementById('soluciones')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 rounded-lg font-bold border-2 border-slate-700 hover:bg-slate-700 hover:text-white transition-all cursor-pointer"
              >
                Ver Soluciones
              </button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white h-[400px] md:h-[500px]">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  src={slides[currentSlide].image} 
                  alt={slides[currentSlide].title} 
                  className="absolute inset-0 w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent z-0" />
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end text-white z-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`text-${currentSlide}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-xs font-bold uppercase tracking-widest text-brand-orange mb-1">{slides[currentSlide].tag}</p>
                    <p className="text-2xl font-black">{slides[currentSlide].title}</p>
                  </motion.div>
                </AnimatePresence>
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={`icon-${currentSlide}`}
                    initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.5, rotate: 90 }}
                    transition={{ duration: 0.3 }}
                    className="bg-brand-orange p-3 rounded-full shrink-0 ml-4"
                  >
                    {slides[currentSlide].icon}
                  </motion.div>
                </AnimatePresence>
              </div>
              
              {/* Slide indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {slides.map((_, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    aria-label={`Ir a la diapositiva ${idx + 1}`}
                    className={`w-2 h-2 rounded-full transition-all cursor-pointer ${idx === currentSlide ? 'bg-brand-orange w-6' : 'bg-white/50 hover:bg-white'}`}
                  />
                ))}
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-orange/10 rounded-full blur-2xl z-[-1]" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-slate-900/5 rounded-full blur-3xl z-[-1]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
