/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  ShieldCheck, 
  Battery, 
  Sun, 
  Settings, 
  AlertTriangle, 
  TrendingDown, 
  CheckCircle2, 
  Building2, 
  Hospital, 
  Database, 
  ShoppingCart,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ArrowRight,
  Download,
  FileText,
  Cpu,
  Activity,
  Facebook,
  Instagram,
  Linkedin,
  Music,
  ArrowLeft,
  Flame,
  Globe
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BrowserRouter, Routes, Route, Link, useNavigate, useLocation, useParams } from 'react-router-dom';

interface Solution {
  id: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
  tags: string[];
  details: string;
  specs: string[];
  image: string;
  catalog: {
    name: string;
    size: string;
  };
}

const solutionsData: Solution[] = [
  {
    id: "calidad-energia",
    icon: <Activity className="w-8 h-8" />,
    title: "Calidad de Energía",
    desc: "Estudios y soluciones para un suministro eléctrico estable y eficiente.",
    tags: ["Diagnóstico", "Factor de Potencia", "Armónicos"],
    details: "La calidad de energía es crucial para el funcionamiento eficiente y seguro de cualquier instalación eléctrica. Realizamos estudios detallados para identificar y analizar problemas como fluctuaciones de voltaje, armónicos y otros disturbios eléctricos.",
    specs: [
      "Evaluación y Diagnóstico detallado",
      "Corrección de Factor de Potencia",
      "Filtros de Armónicos",
      "Supresores de Picos y Telemetría",
      "Puntas Pararrayos y Tierras Físicas"
    ],
    // Para cambiar la imagen, reemplaza esta URL por la ruta de tu nueva imagen (ej. "/images/calidad-energia.webp")
    image: "/images/calidad-energia.webp",
    catalog: { name: "brochure.pdf", size: "2.5 MB" }
  },
  {
    id: "respaldo-energia",
    icon: <Battery className="w-8 h-8" />,
    title: "Respaldo de Energía (UPS)",
    desc: "Sistemas de alimentación ininterrumpida para proteger equipos críticos.",
    tags: ["UPS", "Baterías", "Mantenimiento"],
    details: "En un mundo donde la continuidad operativa es crucial, contar con sistemas de respaldo de energía es esencial. Nuestros sistemas UPS están diseñados para proporcionar energía continua en caso de interrupciones, protegiendo datos y manteniendo la operatividad de equipos sensibles.",
    specs: [
      "Sistemas UPS de alta confiabilidad",
      "Baterías de Respaldo de alta capacidad",
      "Mantenimiento preventivo y correctivo",
      "Protección para equipos críticos"
    ],
    // Para cambiar la imagen, reemplaza esta URL por la ruta de tu nueva imagen (ej. "/images/ups.webp")
    image: "/images/ups.webp",
    catalog: { name: "brochure.pdf", size: "2.5 MB" }
  },
  {
    id: "generadores-emergencia",
    icon: <Zap className="w-8 h-8" />,
    title: "Generadores de Emergencia",
    desc: "Suministro eléctrico confiable y continuo en situaciones críticas.",
    tags: ["Diésel", "Gas LP", "Portátiles"],
    details: "Ofrecemos una gama completa de soluciones en generadores de energía que se adaptan a las necesidades específicas de cada cliente. Diseñados para proporcionar energía de respaldo en caso de fallos en el suministro eléctrico principal.",
    specs: [
      "Generadores Diésel y Gasolina",
      "Generadores a GLP o Gas Natural",
      "Generadores Portátiles",
      "Mantenimiento, Soporte Técnico y Pruebas"
    ],
    // Para cambiar la imagen, reemplaza esta URL por la ruta de tu nueva imagen (ej. "/images/generadores.webp")
    image: "/images/generadores.webp",
    catalog: { name: "brochure.pdf", size: "2.5 MB" }
  },
  {
    id: "sistemas-fotovoltaicos",
    icon: <Sun className="w-8 h-8" />,
    title: "Sistemas Fotovoltaicos",
    desc: "Generación de electricidad de manera sostenible y limpia.",
    tags: ["Energía Solar", "Interconexión CFE", "Incentivos"],
    details: "Los sistemas fotovoltaicos son una tecnología avanzada que captan la luz solar y la convierten en electricidad. Diseñamos e instalamos sistemas solares para la generación de energía limpia y renovable, optimizando el consumo y reduciendo costos.",
    specs: [
      "Diseño e Instalación de paneles solares",
      "Monitoreo y Mantenimiento",
      "Asesoría en Incentivos y financiamiento",
      "Gestión de Trámites ante la CFE"
    ],
    // Para cambiar la imagen, reemplaza esta URL por la ruta de tu nueva imagen (ej. "/images/solar.webp")
    image: "/images/solar.webp",
    catalog: { name: "brochure.pdf", size: "2.5 MB" }
  }
];

const Logo = ({ className = "h-10" }: { className?: string }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <img 
      src="/logo.png" 
      alt="S3S México Logo" 
      className="h-full w-auto object-contain"
      onError={(e) => {
        (e.target as HTMLImageElement).style.display = 'none';
        (e.target as HTMLImageElement).nextElementSibling!.classList.remove('hidden');
      }}
    />
    <svg viewBox="0 0 100 100" className="h-full w-auto hidden">
      <circle cx="50" cy="50" r="45" fill="none" stroke="#ED7824" strokeWidth="6" />
      <text 
        x="50" 
        y="65" 
        textAnchor="middle" 
        className="font-black" 
        style={{ fontSize: '42px', fontFamily: 'Arial Black, sans-serif' }}
      >
        <tspan fill="#23272A">S</tspan>
        <tspan fill="#ED7824">3</tspan>
        <tspan fill="#23272A">S</tspan>
      </text>
    </svg>
    <div className="flex flex-col leading-none">
      <span className="text-xl font-black tracking-tighter text-brand-grey">
        S3S <span className="text-brand-orange">MÉXICO</span>
      </span>
    </div>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <Logo className="h-12" />
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#soluciones" onClick={(e) => handleNavClick(e, 'soluciones')} className="text-sm font-semibold hover:text-brand-orange transition-colors">Soluciones</a>
            <Link to="/nosotros" className="text-sm font-semibold hover:text-brand-orange transition-colors">Nosotros</Link>
            <Link to="/contacto" className="text-sm font-semibold hover:text-brand-orange transition-colors">Contacto</Link>
            <a href="/brochure.pdf" target="_blank" rel="noopener noreferrer" className="bg-brand-grey text-white px-5 py-2 rounded-lg text-sm font-bold hover:bg-brand-orange transition-all">
              BROCHURE
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-b border-gray-100 px-4 py-6 flex flex-col gap-4"
          >
            <a href="#soluciones" onClick={(e) => handleNavClick(e, 'soluciones')} className="text-lg font-semibold">Soluciones</a>
            <Link to="/nosotros" onClick={() => setIsOpen(false)} className="text-lg font-semibold">Nosotros</Link>
            <Link to="/contacto" onClick={() => setIsOpen(false)} className="text-lg font-semibold">Contacto</Link>
            <a href="/brochure.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center">Descargar Brochure</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Calidad de Energía",
      image: "/images/hero-calidad.webp",
      tag: "Diagnóstico y Soluciones",
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
      title: "Sistemas Fotovoltaicos",
      image: "/images/hero-solar.webp",
      tag: "Energía Renovable",
      icon: <Sun className="w-6 h-6" />
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
  <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
    <div className="absolute top-0 right-0 w-1/2 h-full bg-industrial-light -z-10 skew-x-12 translate-x-20 hidden lg:block" />
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
          <h1 className="text-5xl md:text-7xl font-black text-industrial-dark leading-[0.9] mb-6">
            TU EMPRESA <br />
            <span className="text-brand-orange">NO PUEDE</span> <br />
            DETENERSE.
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-lg">
            Expertos en ingeniería eléctrica y respaldo energético industrial. Protegemos tu operación contra apagones y fallas críticas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary flex items-center justify-center gap-2"
            >
              Cotizar respaldo energético <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={() => document.getElementById('soluciones')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 rounded-lg font-bold border-2 border-brand-grey hover:bg-brand-grey hover:text-white transition-all"
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
            <div className="absolute inset-0 bg-gradient-to-t from-brand-grey/80 via-transparent to-transparent z-0" />
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
                  className={`w-2 h-2 rounded-full transition-all ${idx === currentSlide ? 'bg-brand-orange w-6' : 'bg-white/50 hover:bg-white'}`}
                />
              ))}
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-orange/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-grey/5 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </div>
  </section>
  );
};

const ProblemSection = () => (
  <section className="py-20 bg-brand-grey text-white overflow-hidden relative">
    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
      <div className="grid grid-cols-12 h-full">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="border-r border-white/20 h-full" />
        ))}
      </div>
    </div>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-orange-400 font-bold uppercase tracking-widest text-sm mb-4">El costo de la inacción</h2>
        <h3 className="text-4xl md:text-5xl font-black mb-6">¿Cuánto te cuesta un apagón?</h3>
        <p className="text-gray-400 max-w-2xl mx-auto">
          No tener un sistema de respaldo es más caro que adquirir uno. Descubre el impacto real de las fallas eléctricas en las empresas mexicanas.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {[
          {
            icon: <TrendingDown className="w-10 h-10 text-orange-500" />,
            title: "Impacto en la Manufactura",
            desc: <>La industria manufacturera pierde hasta <strong>$200 millones de dólares</strong> por cada hora de apagón masivo.</>,
            source: "Cluster Industrial",
            link: "https://clusterindustrial.com.mx/manufactura-mexicana-pierde-200-mdd-por-hora-ante-apagones-y-tormentas/"
          },
          {
            icon: <AlertTriangle className="w-10 h-10 text-orange-500" />,
            title: "Rentabilidad y Ventas",
            desc: <>Los problemas de suministro eléctrico provocan una caída de hasta el <strong>5% en las ventas anuales</strong> de las empresas en México.</>,
            source: "Global Energy",
            link: "https://globalenergy.mx/noticias/industria-mexicana-pierde-hasta-200mdd-por-hora-en-apagones/"
          },
          {
            icon: <Settings className="w-10 h-10 text-orange-500" />,
            title: "Costo de Inactividad por Minuto",
            desc: <>El costo promedio por minuto de tiempo de inactividad para una empresa es de aproximadamente <strong>$5,600 USD</strong>.</>,
            source: "Energy & Commerce",
            link: "https://energyandcommerce.com.mx/el-costo-oculto-de-los-apagones-industriales-en-mexico/"
          }
        ].map((item, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm flex flex-col"
          >
            <div className="mb-6">{item.icon}</div>
            <h4 className="text-xl font-bold mb-4">{item.title}</h4>
            <p className="text-gray-300 leading-relaxed mb-6 flex-grow">{item.desc}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-xs text-gray-500 hover:text-brand-orange transition-colors mt-auto">
              Fuente: {item.source}
            </a>
          </motion.div>
        ))}
      </div>

      <div className="bg-brand-orange/10 border border-brand-orange/20 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
        <div className="w-16 h-16 bg-brand-orange/20 rounded-full flex items-center justify-center shrink-0">
          <MapPin className="w-8 h-8 text-brand-orange" />
        </div>
        <div>
          <h4 className="text-lg font-bold text-white mb-2">Contexto Local: Impacto en el Sureste</h4>
          <p className="text-gray-300 text-sm leading-relaxed mb-2">
            Más de <strong>130,000 comercios</strong> reportaron pérdidas significativas por fallas eléctricas recientes en la región. La prevención es clave para la continuidad operativa.
          </p>
          <a href="https://oem.com.mx/elheraldodetabasco/local/cfe-dejo-perdidas-por-apagones-a-130-mil-comercios-durante-2024-en-tabasco-22234260" target="_blank" rel="noopener noreferrer" className="text-xs text-brand-orange hover:text-white transition-colors">
            Fuente: El Heraldo de Tabasco
          </a>
        </div>
      </div>
    </div>
  </section>
);

const SolutionsSection = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % solutionsData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + solutionsData.length) % solutionsData.length);
  };

  // Auto-play del carrusel cada 4 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(timer);
  }, []);
  
  return (
    <section id="soluciones" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-4">Nuestras Soluciones</h2>
            <h3 className="section-title">Energía Segura y Respaldo Total</h3>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border-2 border-brand-grey flex items-center justify-center hover:bg-brand-grey hover:text-white transition-colors"
            >
              <ArrowRight className="w-5 h-5 rotate-180" />
            </button>
            <button 
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border-2 border-brand-grey flex items-center justify-center hover:bg-brand-grey hover:text-white transition-colors"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="relative">
          <div 
            className="flex transition-transform duration-500 ease-in-out gap-6"
            style={{ transform: `translateX(calc(-${currentIndex * 100}% - ${currentIndex * 24}px))` }}
          >
            {solutionsData.map((sol, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -5 }}
                onClick={() => {
                  navigate(`/solucion/${sol.id}`);
                  window.scrollTo(0, 0);
                }}
                className="w-full md:min-w-[calc(50%-12px)] lg:min-w-[calc(50%-12px)] shrink-0 card-industrial group cursor-pointer hover:border-brand-orange transition-all flex flex-row items-center overflow-hidden p-0"
              >
                <div className="p-6 md:p-8 flex flex-col flex-grow w-3/5 md:w-2/3">
                  <div className="w-12 h-12 bg-industrial-light rounded-xl flex items-center justify-center mb-4 text-brand-grey group-hover:bg-brand-orange group-hover:text-white transition-all">
                    {sol.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-3">{sol.title}</h4>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed flex-grow">{sol.desc}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {sol.tags.map((tag, j) => (
                      <span key={j} className="text-[10px] font-bold uppercase tracking-wider bg-gray-100 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-50 flex items-center text-xs font-bold text-brand-orange opacity-0 group-hover:opacity-100 transition-opacity">
                    MÁS INFORMACIÓN <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
                <div className="w-2/5 md:w-1/3 p-4 pl-0 shrink-0 flex items-center justify-center">
                  <div className="w-full aspect-square relative overflow-hidden rounded-xl">
                    <img 
                      src={sol.image} 
                      alt={sol.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
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

const SectorsSection = () => (
  <section id="sectores" className="py-24 bg-industrial-light">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-4">Especialización por Sector</h2>
        <h3 className="section-title">Soluciones a la Medida</h3>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { icon: <Hospital className="w-10 h-10" />, name: "Hospitales", desc: "Energía crítica para quirófanos y terapia intensiva." },
          { icon: <Building2 className="w-10 h-10" />, name: "Industria", desc: "Respaldo para líneas de producción continua." },
          { icon: <Database className="w-10 h-10" />, name: "Data Centers", desc: "Protección de servidores y uptime garantizado." },
          { icon: <ShoppingCart className="w-10 h-10" />, name: "Retail", desc: "Continuidad en puntos de venta y refrigeración." }
        ].map((sector, i) => (
          <div key={i} className="text-center group">
            <div className="w-20 h-20 mx-auto bg-industrial-light rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-grey group-hover:text-white transition-all duration-300">
              {sector.icon}
            </div>
            <h4 className="text-xl font-bold mb-2">{sector.name}</h4>
            <p className="text-gray-500 text-sm leading-relaxed">{sector.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const IsoCertificationSection = () => (
  <section className="py-16 bg-white border-y border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
        <div className="w-64 md:w-80 shrink-0">
          <img 
            src="/logos/iso27001.png" 
            alt="ISO 27001" 
            className="w-full h-auto object-contain"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
              (e.target as HTMLImageElement).nextElementSibling!.classList.remove('hidden');
            }}
          />
          <Globe className="w-20 h-20 text-brand-orange hidden mx-auto" />
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-3xl font-bold text-industrial-dark mb-4">Certificación ISO 27001</h3>
          <p className="text-gray-600 max-w-2xl text-lg">
            Estamos certificados en ISO 27001, garantizando los más altos estándares en la gestión de la seguridad de la información para proteger los datos y la operación de nuestros clientes.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const ProcessSection = () => (
  <section id="proceso" className="py-24 bg-brand-grey text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-orange-400 font-bold uppercase tracking-widest text-sm mb-4">Metodología S3S</h2>
          <h3 className="text-4xl md:text-5xl font-black mb-8">De la ingeniería a la operación</h3>
          <div className="space-y-8">
            {[
              { step: "01", title: "Levantamiento Técnico", desc: "Análisis de cargas y diagnóstico de calidad de energía en sitio." },
              { step: "02", title: "Diseño de Ingeniería", desc: "Propuesta técnica optimizada con las mejores marcas del mercado." },
              { step: "03", title: "Instalación y Puesta en Marcha", desc: "Ejecución por ingenieros certificados bajo normativas internacionales." },
              { step: "04", title: "Mantenimiento Proactivo", desc: "Monitoreo y visitas preventivas para asegurar el respaldo." }
            ].map((item, i) => (
              <div key={i} className="flex gap-6">
                <span className="text-4xl font-black text-white/20">{item.step}</span>
                <div>
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <img 
            src="/images/proceso.webp" 
            alt="Engineering Process" 
            className="rounded-3xl shadow-2xl"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-6 -right-6 bg-brand-orange p-8 rounded-2xl shadow-xl">
            <p className="text-4xl font-black mb-1">4+</p>
            <p className="text-xs font-bold uppercase tracking-widest">Años de experiencia</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Certifications = () => {
  const brands = [
    { name: 'DEHN', logo: '/logos/dehn.png' },
    { name: 'Aurus', logo: '/logos/aurus.png' },
    { name: 'Total Ground', logo: '/logos/totalground.png' },
    { name: 'Trinasolar', logo: '/logos/trinasolar.png' },
    { name: 'Solis', logo: '/logos/solis.png' },
    { name: 'Generac', logo: '/logos/generac.png' },
    { name: 'Tripp-Lite', logo: '/logos/tripplite.png' },
    { name: 'APC', logo: '/logos/apc.png' },
    { name: 'Schneider Electric', logo: '/logos/schneider.png' }
  ];

  return (
    <section className="py-16 bg-white border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-[0.3em]">Certificaciones y Alianzas</p>
      </div>
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-16 py-4">
          {[...brands, ...brands].map((brand, i) => (
            <div key={i} className="flex-shrink-0 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <img 
                src={brand.logo} 
                alt={brand.name} 
                className="h-12 w-auto object-contain" 
                onLoad={(e) => {
                  (e.target as HTMLImageElement).nextElementSibling!.classList.add('hidden');
                }}
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  (e.target as HTMLImageElement).nextElementSibling!.classList.remove('hidden');
                }}
              />
              <span className="text-2xl font-black text-brand-grey italic px-4 hidden">{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactCTA = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    servicio: location.state?.selectedService || 'Calidad de Energía',
    mensaje: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (location.state?.selectedService) {
      setFormData(prev => ({ ...prev, servicio: location.state.selectedService }));
    }
  }, [location.state]);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.nombre.trim()) newErrors.nombre = 'El nombre es requerido';
    if (!formData.empresa.trim()) newErrors.empresa = 'La empresa es requerida';
    if (!formData.email.trim()) {
      newErrors.email = 'El correo es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'El correo no es válido';
    }
    if (!formData.mensaje.trim()) newErrors.mensaje = 'El mensaje es requerido';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ nombre: '', empresa: '', email: '', servicio: 'Calidad de Energía', mensaje: '' });
      }, 3000);
    }
  };

  return (
  <section id="contacto" className="py-24 bg-white relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-industrial-dark rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              ¿LISTO PARA <br />
              <span className="text-brand-orange">ASEGURAR</span> <br />
              TU ENERGÍA?
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              No esperes al próximo apagón. Obtén una consultoría técnica gratuita hoy mismo.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-brand-orange" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold">Llámanos</p>
                  <p className="font-bold">+52 993 980 0601</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-brand-orange" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold">WhatsApp</p>
                  <p className="font-bold">+52 1 55 7877 7227</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-brand-orange" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold">Email</p>
                  <p className="font-bold">ventas@s3s-mx.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-3xl p-0 text-brand-grey h-[600px] overflow-hidden shadow-xl">
            {/* 
              Para cambiar el calendario de Microsoft Bookings en el futuro:
              1. Ve a tu panel de Microsoft Bookings
              2. Copia el enlace de tu página de reservas
              3. Reemplaza la URL en el atributo 'src' del iframe de abajo
            */}
            <iframe 
              src="https://outlook.office.com/bookwithme/user/d60d482122d6426d8e38f7285ba9b2a7@corp-mx.com?anonymous&ep=plink" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              title="Agendar Cita con S3S México"
            ></iframe>
          </div>
        </div>
        
        {/* Decorative background circle */}
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-brand-orange/10 rounded-full blur-3xl" />
      </div>
    </div>
  </section>
  );
};

const Footer = () => (
  <footer className="bg-brand-grey text-white py-20 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-3 gap-12 mb-16">
        <div className="col-span-2">
          <Logo className="h-14 mb-6 brightness-0 invert" />
          <p className="text-gray-400 max-w-sm mb-8">
            Líderes en soluciones de respaldo energético y eficiencia industrial en México. Garantizamos la continuidad de tu negocio con tecnología de vanguardia.
          </p>
          <div className="flex gap-4">
            <a href="https://mx.linkedin.com/company/s3s-méxico" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-orange transition-colors cursor-pointer">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://www.facebook.com/S3SMexico" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-orange transition-colors cursor-pointer">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/s3smexico/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-orange transition-colors cursor-pointer">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://www.tiktok.com/@s3smexico" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-orange transition-colors cursor-pointer">
              <Music className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h5 className="font-bold uppercase tracking-widest text-xs mb-6 text-orange-400">Contacto</h5>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-brand-orange shrink-0" />
              <span>+52 993 980 0601</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-brand-orange shrink-0" />
              <span>+52 1 55 7877 7227 (WhatsApp)</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-brand-orange shrink-0" />
              <span>ventas@s3s-mx.com</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-medium">
        <p>© 2026 S3S México. Todos los derechos reservados.</p>
        <div className="flex gap-6">
          <Link to="/privacidad" className="hover:text-white transition-colors">Aviso de Privacidad</Link>
        </div>
      </div>
    </div>
  </footer>
);

const SolutionDetail = () => {
  const { id } = useParams();
  const solution = solutionsData.find(s => s.id === id);
  const navigate = useNavigate();

  if (!solution) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Solución no encontrada</h2>
          <button onClick={() => navigate('/')} className="btn-primary">Volver al inicio</button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <button 
        onClick={() => navigate('/')}
        className="flex items-center gap-2 text-gray-500 hover:text-brand-orange font-bold mb-8 transition-colors"
      >
        <ArrowLeft className="w-5 h-5" /> Volver a soluciones
      </button>
      
      <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
        <div className="flex items-center gap-6 mb-8">
          <div className="w-20 h-20 bg-industrial-light rounded-2xl flex items-center justify-center text-brand-orange">
            {solution.icon}
          </div>
          <div>
            <h1 className="text-4xl font-black text-industrial-dark mb-2">{solution.title}</h1>
            <div className="flex flex-wrap gap-2">
              {solution.tags.map((tag, j) => (
                <span key={j} className="text-xs font-bold uppercase tracking-wider bg-brand-orange/10 text-brand-orange px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Descripción General</h3>
            <p className="text-gray-600 leading-relaxed text-lg">{solution.details}</p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold uppercase tracking-widest text-brand-orange mb-4 flex items-center gap-2">
              <Cpu className="w-5 h-5" /> Especificaciones Técnicas
            </h4>
            <ul className="grid sm:grid-cols-2 gap-4">
              {solution.specs.map((spec, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700 bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" /> 
                  <span className="font-medium">{spec}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-industrial-light p-6 rounded-2xl border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="bg-white p-3 rounded-xl shadow-sm">
                <FileText className="w-8 h-8 text-brand-orange" />
              </div>
              <div>
                <p className="font-bold text-industrial-dark text-lg">{solution.catalog.name}</p>
                <p className="text-sm text-gray-500">Documento PDF • {solution.catalog.size}</p>
              </div>
            </div>
            <a 
              href={`/${solution.catalog.name}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl font-bold bg-white border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white transition-all flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <Download className="w-5 h-5" /> Descargar Ficha
            </a>
          </div>

          <div className="pt-8 border-t border-gray-100">
            <button 
              onClick={() => {
                navigate('/', { state: { selectedService: solution.title } });
                setTimeout(() => {
                  document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="btn-primary w-full text-lg py-5"
            >
              Solicitar Cotización para {solution.title}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutPage = () => (
  <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen">
    <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
      <div>
        <h2 className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-4">Nuestra Historia</h2>
        <h1 className="text-4xl md:text-6xl font-black text-industrial-dark mb-6">¿Quiénes Somos?</h1>
        <p className="text-xl text-gray-600 leading-relaxed mb-6">
          Somos líderes en soluciones de respaldo energético y eficiencia industrial en México. Con más de 4 años de experiencia, garantizamos la continuidad de tu negocio con tecnología de vanguardia y un equipo de ingenieros altamente capacitados.
        </p>
        <p className="text-lg text-gray-500 leading-relaxed">
          Nuestro compromiso es brindar seguridad y confianza a través de proyectos llave en mano, desde el diseño hasta la puesta en marcha y mantenimiento.
        </p>
      </div>
      <div className="relative">
        <img 
          src="/images/nosotros.webp" 
          alt="Equipo S3S México" 
          className="rounded-3xl shadow-2xl object-cover w-full h-[400px]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute -bottom-6 -left-6 bg-brand-orange p-6 rounded-2xl shadow-xl text-white">
          <p className="text-3xl font-black mb-1">4+</p>
          <p className="text-xs font-bold uppercase tracking-widest">Años de experiencia</p>
        </div>
      </div>
    </div>
    <div className="grid md:grid-cols-2 gap-12 mt-24">
      <div className="bg-industrial-light p-10 rounded-3xl">
        <h3 className="text-2xl font-bold mb-4 text-brand-orange">Nuestra Misión</h3>
        <p className="text-gray-700 leading-relaxed">
          Proveer soluciones integrales y confiables en calidad y respaldo de energía, asegurando la continuidad operativa de nuestros clientes a través de tecnología innovadora, ingeniería de excelencia y un servicio al cliente excepcional.
        </p>
      </div>
      <div className="bg-industrial-light p-10 rounded-3xl">
        <h3 className="text-2xl font-bold mb-4 text-brand-orange">Nuestra Visión</h3>
        <p className="text-gray-700 leading-relaxed">
          Ser la empresa referente a nivel nacional en ingeniería eléctrica y respaldo de energía, reconocida por nuestra calidad, innovación y compromiso con el desarrollo sostenible de la industria mexicana.
        </p>
      </div>
    </div>
  </div>
);

const ContactPage = () => (
  <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen">
    <div className="text-center mb-16">
      <h2 className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-4">Estamos para ayudarte</h2>
      <h1 className="text-4xl md:text-6xl font-black text-industrial-dark mb-6">Contáctanos</h1>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Comunícate con nuestros expertos para obtener asesoría personalizada y asegurar la continuidad de tu operación.
      </p>
    </div>

    <div className="max-w-3xl mx-auto space-y-8">
      <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
        <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-industrial-light rounded-full flex items-center justify-center">
              <Phone className="w-5 h-5 text-brand-orange" />
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase font-bold">Llámanos</p>
              <p className="font-bold text-lg">+52 993 980 0601</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-industrial-light rounded-full flex items-center justify-center">
              <Phone className="w-5 h-5 text-brand-orange" />
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase font-bold">WhatsApp</p>
              <p className="font-bold text-lg">+52 1 55 7877 7227</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-industrial-light rounded-full flex items-center justify-center">
              <Mail className="w-5 h-5 text-brand-orange" />
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase font-bold">Email</p>
              <p className="font-bold text-lg">ventas@s3s-mx.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-industrial-dark text-white p-8 rounded-3xl shadow-lg">
        <h3 className="text-2xl font-bold mb-6">Nuestras Redes Sociales</h3>
        <div className="flex gap-4">
          <a href="https://mx.linkedin.com/company/s3s-méxico" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-orange transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="https://www.facebook.com/S3SMexico" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-orange transition-colors">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="https://www.instagram.com/s3smexico/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-orange transition-colors">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="https://www.tiktok.com/@s3smexico" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-orange transition-colors">
            <Music className="w-6 h-6" />
          </a>
        </div>
      </div>

      <div className="h-[400px] md:h-[500px] w-full rounded-3xl overflow-hidden shadow-lg border border-gray-100 relative group">
        <iframe 
          src="https://maps.google.com/maps?q=S3S%20Mexico,%20Cto.%20Las%20Violetas%201-1,%20Pino%20Su%C3%A1rez,%2086168%20Villahermosa,%20Tab.&t=&z=15&ie=UTF8&iwloc=&output=embed" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación S3S México"
        ></iframe>
        <a 
          href="https://maps.app.goo.gl/e3x6iadCC94dYXrU9" 
          target="_blank" 
          rel="noopener noreferrer"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white text-brand-orange font-bold px-6 py-3 rounded-full shadow-xl opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2"
        >
          <MapPin className="w-5 h-5" /> Abrir en Google Maps
        </a>
      </div>
    </div>
  </div>
);

const LandingPage = () => (
  <>
    <Hero />
    <ProblemSection />
    <SolutionsSection />
    <SectorsSection />
    <IsoCertificationSection />
    <ProcessSection />
    <Certifications />
    <ContactCTA />
  </>
);

const FloatingWhatsApp = () => (
  <a 
    href="https://wa.me/5215578777227" 
    target="_blank" 
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
    aria-label="Contactar por WhatsApp"
  >
    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  </a>
);

const PrivacyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-brand-black mb-8">Aviso de Privacidad</h1>
        <div className="prose prose-lg text-gray-600 space-y-6">
          <p className="font-medium">Última actualización: 10/03/2026</p>
          <p>S3S México, empresa dedicada a soluciones de energía, paneles solares, UPS, generadores y servicios eléctricos es responsable del tratamiento de sus datos personales.</p>
          
          <h2 className="text-2xl font-bold text-brand-black mt-10 mb-4">Datos recabados</h2>
          <p>Podemos recabar:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Nombre</li>
            <li>Empresa</li>
            <li>Teléfono</li>
            <li>Correo electrónico</li>
            <li>Dirección del inmueble o instalación</li>
            <li>Información técnica para dimensionamiento de sistemas eléctricos o solares</li>
          </ul>

          <h2 className="text-2xl font-bold text-brand-black mt-10 mb-4">Finalidades</h2>
          
          <h3 className="text-xl font-semibold text-brand-black mt-6 mb-3">Primarias</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Evaluación de proyectos energéticos</li>
            <li>Elaboración de propuestas y cotizaciones</li>
            <li>Instalación, mantenimiento o soporte técnico</li>
            <li>Atención a clientes</li>
          </ul>

          <h3 className="text-xl font-semibold text-brand-black mt-6 mb-3">Secundarias</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Envío de contenido informativo o promocional sobre soluciones energéticas</li>
          </ul>

          <h2 className="text-2xl font-bold text-brand-black mt-10 mb-4">Transferencias</h2>
          <p>Sus datos podrán compartirse con empresas del grupo CORP-MX para fines relacionados con los servicios solicitados.</p>

          <h2 className="text-2xl font-bold text-brand-black mt-10 mb-4">Derechos ARCO</h2>
          <p>Para ejercerlos envíe un correo a:</p>
          <p className="font-medium text-brand-orange">
            <a href="mailto:ventas@s3s-mx.com" className="hover:underline">ventas@s3s-mx.com</a>
          </p>

          <h2 className="text-2xl font-bold text-brand-black mt-10 mb-4">Cambios</h2>
          <p>Las actualizaciones a este aviso serán publicadas en el sitio web.</p>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen font-sans selection:bg-brand-orange selection:text-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/solucion/:id" element={<SolutionDetail />} />
            <Route path="/nosotros" element={<AboutPage />} />
            <Route path="/contacto" element={<ContactPage />} />
            <Route path="/privacidad" element={<PrivacyPage />} />
          </Routes>
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </BrowserRouter>
  );
}
