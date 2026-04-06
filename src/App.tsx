/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
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
  Globe,
  Leaf
} from 'lucide-react';
import { motion, AnimatePresence, useAnimation } from 'motion/react';
import { BrowserRouter, Routes, Route, Link, useNavigate, useLocation, useParams, Navigate } from 'react-router-dom';
import { MapContainer, TileLayer, useMap, Circle, Marker, Polyline } from 'react-leaflet';
import L from 'leaflet';

// Fix Leaflet icon issue
import 'leaflet/dist/leaflet.css';

interface Solution {
  id: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
  tags: string[];
  details: string;
  specs: string[];
  images: string[];
}

const solutionsData: Solution[] = [
  {
    id: "calidad-energia",
    icon: <Activity className="w-8 h-8" />,
    title: "Calidad de Energía",
    desc: "Protege tu inversión en milisegundos. Evita daños por variaciones de voltaje y prolonga la vida útil de tus equipos.",
    tags: ["Supresores de Picos", "Diagnóstico", "Armónicos"],
    details: "¿Qué es un supresor de picos? Es un dispositivo vital de protección contra sobretensiones transitorias. Al interrumpir y desviar la energía excedente a tierra en cuestión de milisegundos, evita daños catastróficos a tus dispositivos conectados. Las sobretensiones son invisibles pero peligrosas; nosotros nos aseguramos de que tu operación nunca se vea afectada.",
    specs: [
      "Evaluación y Diagnóstico detallado",
      "Corrección de Factor de Potencia",
      "Filtros de Armónicos",
      "Supresores de Picos y Telemetría",
      "Puntas Pararrayos y Tierras Físicas"
    ],
    images: [
      "/images/calidad-energia.webp",
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80"
    ]
  },
  {
    id: "respaldo-energia",
    icon: <Battery className="w-8 h-8" />,
    title: "Respaldo de Energía (UPS)",
    desc: "Energía continua e instantánea para que tu operación no se detenga ante ningún apagón.",
    tags: ["UPS", "Baterías", "Mantenimiento"],
    details: "¿Qué es un UPS? Un Uninterruptable Power Supply es tu primera línea de defensa. Permite mantener el flujo de energía eléctrica por medio de baterías cuando el suministro falla. Al mismo tiempo, purifica la corriente protegiendo tus dispositivos contra elevaciones o caídas de tensión, sosteniendo tu funcionamiento sin interrupciones.",
    specs: [
      "Sistemas UPS de alta confiabilidad",
      "Baterías de Respaldo de alta capacidad",
      "Mantenimiento preventivo y correctivo",
      "Protección para equipos críticos"
    ],
    images: [
      "/images/ups.webp",
      "https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&q=80"
    ]
  },
  {
    id: "generadores-emergencia",
    icon: <Zap className="w-8 h-8" />,
    title: "Generadores de Emergencia",
    desc: "Potencia confiable cuando más la necesitas. Soluciones adaptadas a la demanda de tu negocio.",
    tags: ["Diésel", "Gas LP", "Portátiles"],
    details: "¿Qué es una Planta de Emergencia? Es un sistema compuesto por un robusto motor de combustión interna impulsado por diésel, que activa un generador de electricidad de alta capacidad. Estos sistemas son totalmente programables y sincronizables, adaptándose fácilmente a las necesidades de tu negocio para garantizar que nunca te quedes a oscuras.",
    specs: [
      "Generadores Diésel y Gasolina",
      "Generadores a GLP o Gas Natural",
      "Generadores Portátiles",
      "Mantenimiento, Soporte Técnico y Pruebas"
    ],
    images: [
      "/images/generadores.webp",
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80"
    ]
  },
  {
    id: "sistemas-fotovoltaicos",
    icon: <Sun className="w-8 h-8" />,
    title: "Sistemas Fotovoltaicos",
    desc: "Convierte el sol en ahorro. Reduce hasta un 90% tu recibo con energía limpia y renovable.",
    tags: ["Ahorro 90%", "Interconexión CFE", "Incentivos"],
    details: "¿Qué es un panel solar? Son módulos formados por celdas de silicio que captan los rayos UV del sol. La energía generada pasa a un inversor que la transforma en corriente eléctrica, inyectándola directamente a la red de tu hogar o negocio. El resultado: un impacto positivo en el medio ambiente y un ahorro masivo en tus costos operativos.",
    specs: [
      "Diseño e Instalación de paneles solares",
      "Monitoreo y Mantenimiento",
      "Asesoría en Incentivos y financiamiento",
      "Gestión de Trámites ante la CFE"
    ],
    images: [
      "/images/solar.webp",
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80"
    ]
  },
  {
    id: "proteccion",
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Protección Eléctrica",
    desc: "Tierra física y pararrayos para proteger tu infraestructura ante descargas y fallas eléctricas.",
    tags: ["Tierra Física", "Pararrayos", "Seguridad"],
    details: "Protegemos tus instalaciones y equipos contra descargas atmosféricas y variaciones de voltaje mediante sistemas de tierra física y pararrayos de alta eficiencia. Evita daños catastróficos por fenómenos naturales y asegura la integridad de tu personal y tu infraestructura.",
    specs: [
      "Sistemas de Tierra Física",
      "Sistemas de Pararrayos",
      "Estudios de Resistividad",
      "Mantenimiento preventivo"
    ],
    images: [
      "/images/proteccion.webp",
      "https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?auto=format&fit=crop&q=80"
    ]
  }
];

const Logo = ({ className = "h-10" }: { className?: string }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <img 
      src="/logo.png" 
      alt="S3S México - Ingeniería Eléctrica y Respaldo de Energía" 
      className="h-full w-auto object-contain"
      loading="lazy"
      decoding="async"
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
            <button onClick={() => setIsOpen(!isOpen)} className="p-2" aria-label="Alternar menú de navegación">
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
    },
    {
      title: "Protección Eléctrica",
      image: "/images/hero-proteccion.webp",
      tag: "Tierra Física y Pararrayos",
      icon: <ShieldCheck className="w-6 h-6" />
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
                  aria-label={`Ir a la diapositiva ${idx + 1}`}
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
        <span className="block text-orange-400 font-bold uppercase tracking-widest text-sm mb-4">El costo de la inacción</span>
        <h2 className="text-4xl md:text-5xl font-black mb-6">¿Cuánto te cuesta un apagón?</h2>
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
            <h3 className="text-xl font-bold mb-4">{item.title}</h3>
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
          <h3 className="text-lg font-bold text-white mb-2">Contexto Local: Impacto en el Sureste</h3>
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

  // Auto-play del carrusel cada 4 segundos
  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        // Si llegamos al final, volvemos al inicio
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
              className="w-12 h-12 rounded-full border-2 border-brand-grey flex items-center justify-center hover:bg-brand-grey hover:text-white transition-colors"
            >
              <ArrowRight className="w-5 h-5 rotate-180" />
            </button>
            <button 
              onClick={nextSlide}
              aria-label="Ver siguiente solución"
              className="w-12 h-12 rounded-full border-2 border-brand-orange flex items-center justify-center text-brand-orange hover:bg-brand-orange hover:text-white transition-colors"
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
                      <div className="w-10 h-10 bg-industrial-light rounded-lg flex items-center justify-center text-brand-grey group-hover:bg-brand-orange group-hover:text-white transition-all shrink-0 [&>svg]:w-5 [&>svg]:h-5">
                        {sol.icon}
                      </div>
                      <h3 className="text-base md:text-lg font-bold line-clamp-2 leading-tight">{sol.title}</h3>
                    </div>
                    <p className="text-gray-600 text-xs md:text-sm line-clamp-3 md:line-clamp-4 leading-relaxed">{sol.desc}</p>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex flex-wrap gap-1.5 overflow-hidden max-h-[26px]">
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

const SectorsSection = () => (
  <section id="sectores" className="py-24 bg-industrial-light">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <span className="block text-brand-orange font-bold uppercase tracking-widest text-sm mb-4">Especialización por Sector</span>
        <h2 className="section-title">Soluciones a la Medida</h2>
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
            <h3 className="text-xl font-bold mb-2">{sector.name}</h3>
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
            alt="Certificación ISO 27001 en Gestión de Seguridad de la Información" 
            className="w-full h-auto object-contain"
            loading="lazy"
            decoding="async"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
              (e.target as HTMLImageElement).nextElementSibling!.classList.remove('hidden');
            }}
          />
          <Globe className="w-20 h-20 text-brand-orange hidden mx-auto" />
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold text-industrial-dark mb-4">Certificación ISO 27001</h2>
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
          <span className="block text-orange-400 font-bold uppercase tracking-widest text-sm mb-4">Metodología S3S</span>
          <h2 className="text-4xl md:text-5xl font-black mb-8">De la ingeniería a la operación</h2>
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
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <img 
            src="/images/proceso.webp" 
            alt="Ingenieros de S3S México realizando mantenimiento e instalación de equipos UPS y plantas de luz" 
            className="rounded-3xl shadow-2xl"
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-6 -right-6 bg-brand-orange p-8 rounded-2xl shadow-xl">
            <p className="text-4xl font-black mb-1">12+</p>
            <p className="text-xs font-bold uppercase tracking-widest">Años de experiencia</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Certifications = () => {
  const marcas = [
    { name: 'DEHN', logo: '/logos/dehn.png' },
    { name: 'Aurus', logo: '/logos/aurus.png' },
    { name: 'Trinasolar', logo: '/logos/trinasolar.png' },
    { name: 'Generac', logo: '/logos/generac.png' },
    { name: 'APC', logo: '/logos/apc.png' },
    { name: 'Schneider Electric', logo: '/logos/schneider.png' }
  ];

  const certificados = [
    { name: 'Kenjitsu', logo: '/logos/kenjitsu.png' },
    { name: 'Solis', logo: '/logos/solis.png' },
    { name: 'Total Ground', logo: '/logos/totalground.png' },
    { name: 'Cyberpower', logo: '/logos/cyberpower.png' }
  ];

  return (
    <section className="py-16 bg-white border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-[0.3em] mb-12">Marcas que comercializamos</p>
        <div className="relative flex overflow-x-hidden mb-16">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-16 py-4">
            {[...marcas, ...marcas, ...marcas].map((brand, i) => (
              <div key={i} className="flex-shrink-0 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                <img 
                  src={brand.logo} 
                  alt={`Marca aliada: ${brand.name} - Equipos de respaldo energético`}
                  className="h-12 w-auto object-contain" 
                  loading="lazy"
                  decoding="async"
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

        <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-[0.3em] mb-12">Certificados</p>
        <div className="relative flex overflow-x-hidden">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-16 py-4" style={{ animationDirection: 'reverse' }}>
            {[...certificados, ...certificados, ...certificados].map((brand, i) => (
              <div key={i} className="flex-shrink-0 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                <img 
                  src={brand.logo} 
                  alt={`Certificación: ${brand.name} - Estándares de calidad eléctrica`}
                  className="h-12 w-auto object-contain" 
                  loading="lazy"
                  decoding="async"
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
  const [showIframe, setShowIframe] = useState(false);
  const iframeContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (location.state?.selectedService) {
      setFormData(prev => ({ ...prev, servicio: location.state.selectedService }));
    }
  }, [location.state]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShowIframe(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    if (iframeContainerRef.current) {
      observer.observe(iframeContainerRef.current);
    }

    return () => observer.disconnect();
  }, []);

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
          
          <div className="bg-white rounded-3xl p-2 md:p-4 text-brand-grey h-[700px] lg:h-[800px] overflow-hidden shadow-xl">
            <div ref={iframeContainerRef} className="w-full h-full relative rounded-2xl overflow-hidden bg-gray-50 flex items-center justify-center">
              {!showIframe ? (
                <div className="text-gray-400 flex flex-col items-center gap-4">
                  <div className="w-8 h-8 border-4 border-brand-orange border-t-transparent rounded-full animate-spin"></div>
                  <p>Cargando calendario...</p>
                </div>
              ) : (
                <iframe 
                  src="https://outlook.office.com/bookwithme/user/3244eb75e06848859b46bcda659e9019@corp-mx.com?anonymous&ismsaljsauthenabled&ep=plink" 
                  className="absolute top-0 left-0 w-full h-full"
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  title="Agendar Cita con S3S México"
                ></iframe>
              )}
            </div>
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
  <footer className="bg-brand-grey text-white py-10 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <div className="col-span-2">
          <Logo className="h-10 mb-4 brightness-0 invert" />
          <p className="text-gray-400 max-w-sm mb-6 text-sm">
            Líderes en soluciones de respaldo energético y eficiencia industrial en México. Garantizamos la continuidad de tu negocio con tecnología de vanguardia.
          </p>
          <div className="flex gap-4">
            <a href="https://mx.linkedin.com/company/s3s-méxico" target="_blank" rel="noopener noreferrer" aria-label="Visitar perfil de LinkedIn" className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-orange transition-colors cursor-pointer">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://www.facebook.com/S3SMexico" target="_blank" rel="noopener noreferrer" aria-label="Visitar página de Facebook" className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-orange transition-colors cursor-pointer">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="https://www.instagram.com/s3smexico/" target="_blank" rel="noopener noreferrer" aria-label="Visitar perfil de Instagram" className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-orange transition-colors cursor-pointer">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://www.tiktok.com/@s3smexico" target="_blank" rel="noopener noreferrer" aria-label="Visitar perfil de TikTok" className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-orange transition-colors cursor-pointer">
              <Music className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <h5 className="font-bold uppercase tracking-widest text-xs mb-4 text-orange-400">Contacto</h5>
          <ul className="space-y-2 text-sm text-gray-400">
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
      
      <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-medium">
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

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
    <div className="bg-white min-h-screen pb-24">
      {/* Hero Section for the Solution */}
      <div className="bg-industrial-dark text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={solution.images[0]} alt={`Fondo de ${solution.title} - S3S México`} className="w-full h-full object-cover" loading="lazy" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-r from-industrial-dark to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-gray-300 hover:text-brand-orange font-bold mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" /> Volver a soluciones
          </button>
          
          <div className="flex items-center gap-6 mb-6">
            <div className="w-16 h-16 bg-brand-orange rounded-2xl flex items-center justify-center text-white">
              {solution.icon}
            </div>
            <div className="flex flex-wrap gap-2">
              {solution.tags.map((tag, j) => (
                <span key={j} className="text-xs font-bold uppercase tracking-wider bg-white/10 text-white px-3 py-1 rounded-full backdrop-blur-sm border border-white/20">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 max-w-3xl">{solution.title}</h1>
          <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">{solution.desc}</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <div className="prose prose-lg text-gray-600">
              <p className="leading-relaxed">{solution.details}</p>
            </div>
            
            <div className="mt-12">
              <h4 className="text-xl font-bold uppercase tracking-widest text-brand-orange mb-6 flex items-center gap-2">
                <Cpu className="w-6 h-6" /> ¿Qué ofrecemos?
              </h4>
              <ul className="space-y-4">
                {solution.specs.map((spec, i) => (
                  <li key={i} className="flex items-start gap-4 text-gray-700 bg-gray-50 p-4 rounded-xl border border-gray-100">
                    <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" /> 
                    <span className="font-medium text-lg">{spec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="sticky top-24">
            <div className="rounded-3xl overflow-hidden shadow-2xl h-[500px] md:h-[600px]">
              <img src={solution.images[0]} alt={`Detalle de equipo: ${solution.title} instalado por S3S México`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-brand-orange rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
           <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay" />
           <div className="relative z-10">
             <h3 className="text-3xl md:text-4xl font-black mb-6">¿Listo para implementar esta solución?</h3>
             <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">Nuestros expertos están listos para evaluar tus necesidades y diseñar la mejor estrategia para tu empresa.</p>
             <button onClick={() => {
               navigate('/', { state: { selectedService: solution.title } });
               setTimeout(() => {
                 document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
               }, 100);
             }} className="bg-white text-brand-orange px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl">
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
          Somos líderes en soluciones de respaldo energético y eficiencia industrial en México. Con más de 12 años de experiencia, garantizamos la continuidad de tu negocio con tecnología de vanguardia y un equipo de ingenieros altamente capacitados.
        </p>
        <p className="text-lg text-gray-500 leading-relaxed">
          Nuestro compromiso es brindar seguridad y confianza a través de proyectos llave en mano, desde el diseño hasta la puesta en marcha y mantenimiento.
        </p>
      </div>
      <div className="relative">
        <img 
          src="/images/nosotros.webp" 
          alt="Equipo de ingenieros de S3S México trabajando en soluciones de energía industrial" 
          className="rounded-3xl shadow-2xl object-cover w-full h-[400px]"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
        />
        <div className="absolute -bottom-6 -left-6 bg-brand-orange p-6 rounded-2xl shadow-xl text-white">
          <p className="text-3xl font-black mb-1">12+</p>
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
          <a href="https://mx.linkedin.com/company/s3s-méxico" target="_blank" rel="noopener noreferrer" aria-label="Visitar perfil de LinkedIn" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-orange transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="https://www.facebook.com/S3SMexico" target="_blank" rel="noopener noreferrer" aria-label="Visitar página de Facebook" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-orange transition-colors">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="https://www.instagram.com/s3smexico/" target="_blank" rel="noopener noreferrer" aria-label="Visitar perfil de Instagram" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-orange transition-colors">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="https://www.tiktok.com/@s3smexico" target="_blank" rel="noopener noreferrer" aria-label="Visitar perfil de TikTok" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-orange transition-colors">
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

const ImpactSection = () => (
  <section className="py-20 bg-brand-orange text-white relative overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay" />
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center mb-16">
        <span className="block font-bold uppercase tracking-widest text-sm mb-4 text-white/80">Nuestro Impacto</span>
        <h2 className="text-3xl md:text-4xl font-black mb-6">Resultados que transforman</h2>
        <p className="text-white/90 max-w-2xl mx-auto text-lg">
          No solo instalamos equipos, generamos un impacto real en el medio ambiente y en la rentabilidad de tu negocio.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 hover:bg-white/20 transition-colors"
        >
          <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-6">
            <Leaf className="w-8 h-8 text-white" />
          </div>
          <div className="text-5xl font-black mb-2">67+</div>
          <div className="text-lg font-medium text-white/90">Toneladas de CO2<br/>Ahorradas al año</div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 hover:bg-white/20 transition-colors"
        >
          <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-6">
            <Sun className="w-8 h-8 text-white" />
          </div>
          <div className="text-5xl font-black mb-2">70+</div>
          <div className="text-lg font-medium text-white/90">Paneles Solares<br/>Instalados</div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 hover:bg-white/20 transition-colors"
        >
          <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-6">
            <Zap className="w-8 h-8 text-white" />
          </div>
          <div className="text-5xl font-black mb-2">38KW</div>
          <div className="text-lg font-medium text-white/90">De Potencia<br/>Instalada</div>
        </motion.div>
      </div>
    </div>
  </section>
);

const AdvancedLightningMap = () => {
  const [radarTime, setRadarTime] = useState<number | null>(null);
  const [radarPath, setRadarPath] = useState<string | null>(null);
  const [strikes, setStrikes] = useState<{ id: number; lat: number; lng: number; points: [number, number][] }[]>([]);
  const borderControls = useAnimation();

  // Fetch RainViewer data
  useEffect(() => {
    const fetchRadarData = async () => {
      try {
        const response = await fetch('https://api.rainviewer.com/public/weather-maps.json');
        const data = await response.json();
        if (data.radar && data.radar.past.length > 0) {
          const latest = data.radar.past[data.radar.past.length - 1];
          setRadarTime(latest.time);
          setRadarPath(latest.path);
        }
      } catch (error) {
        console.error('Error fetching RainViewer data:', error);
      }
    };

    fetchRadarData();
    const interval = setInterval(fetchRadarData, 120000); // Update every 2 minutes
    return () => clearInterval(interval);
  }, []);

  // Lightning Simulation Engine
  useEffect(() => {
    const triggerStrike = async () => {
      // Random coordinates within Mexico bounds (approx)
      const lat = 14 + Math.random() * 18;
      const lng = -118 + Math.random() * 32;
      
      // Generate jagged points for the bolt
      const points: [number, number][] = [
        [lat + 1.2, lng + (Math.random() - 0.5) * 0.6],
        [lat + 0.8, lng + (Math.random() - 0.5) * 0.4],
        [lat + 0.4, lng + (Math.random() - 0.5) * 0.2],
        [lat, lng]
      ];

      const id = Date.now();
      setStrikes(prev => [...prev, { id, lat, lng, points }]);
      
      // Border flash effect
      borderControls.start({
        borderColor: ['rgba(255,255,255,0.05)', '#ED7824', 'rgba(255,255,255,0.05)'],
        boxShadow: [
          '0 0 50px rgba(0,0,0,0.5)', 
          '0 0 70px rgba(237,120,36,0.4)', 
          '0 0 50px rgba(0,0,0,0.5)'
        ],
        transition: { duration: 0.4 }
      });

      // Remove strike after animation
      setTimeout(() => {
        setStrikes(prev => prev.filter(s => s.id !== id));
      }, 800);
    };

    const interval = setInterval(() => {
      if (Math.random() > 0.7) { // 30% chance every second
        triggerStrike();
      }
    }, 1500);

    return () => clearInterval(interval);
  }, [borderControls]);

  return (
    <section className="py-24 bg-industrial-dark overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-orange/10 text-brand-orange text-sm font-bold mb-4"
          >
            <Zap className="w-4 h-4" /> MONITOREO AVANZADO
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter">
            Radar de Tormentas <span className="text-brand-orange">S3S México</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Monitorea tormentas en tiempo real y protege tu operación antes de que ocurra una falla.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          animate={borderControls}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border-4 border-white/5 aspect-video md:aspect-[21/9] bg-black"
        >
          <MapContainer 
            center={[23.6345, -102.5528]} 
            zoom={5} 
            style={{ height: '100%', width: '100%' }}
            zoomControl={false}
            attributionControl={false}
          >
            {/* CartoDB Dark Matter Base Layer */}
            <TileLayer
              url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
              subdomains="abcd"
            />

            {/* RainViewer Radar Layer */}
            {radarPath && (
              <TileLayer
                url={`https://tilecache.rainviewer.com${radarPath}/256/{z}/{x}/{y}/2/1_1.png`}
                opacity={0.6}
                zIndex={10}
              />
            )}

            {/* Simulated Lightning Bolts */}
            {strikes.map(strike => (
              <React.Fragment key={strike.id}>
                {/* The Bolt Line */}
                <Polyline 
                  positions={strike.points}
                  pathOptions={{ 
                    color: '#fff', 
                    weight: 3, 
                    opacity: 0.9,
                    lineCap: 'round',
                    lineJoin: 'round',
                    dashArray: '1, 0'
                  }}
                />
                {/* Impact Glow */}
                <Circle 
                  center={[strike.lat, strike.lng]}
                  radius={40000}
                  pathOptions={{ 
                    color: '#fff', 
                    fillColor: '#fff', 
                    fillOpacity: 0.9,
                    weight: 2
                  }}
                />
                <Circle 
                  center={[strike.lat, strike.lng]}
                  radius={120000}
                  pathOptions={{ 
                    color: '#ED7824', 
                    fillColor: '#ED7824', 
                    fillOpacity: 0.3,
                    weight: 0
                  }}
                />
              </React.Fragment>
            ))}
          </MapContainer>

          {/* Map UI Overlays */}
          <div className="absolute top-6 left-6 z-[50] flex flex-col gap-2">
            <div className="bg-black/80 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-xs font-bold text-white uppercase tracking-widest">Radar en Vivo</span>
            </div>
            {radarTime && (
              <div className="bg-black/80 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Última Actualización</span>
                <span className="text-xs font-mono text-brand-orange">
                  {new Date(radarTime * 1000).toLocaleTimeString()}
                </span>
              </div>
            )}
          </div>

          <div className="absolute bottom-6 right-6 z-[50] flex flex-col gap-2 items-end">
            <div className="bg-black/80 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              CartoDB Dark Matter + RainViewer API
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <div className="w-12 h-12 rounded-xl bg-brand-orange/20 flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-brand-orange" />
            </div>
            <h4 className="font-bold text-white mb-2">Detección de Rayos en Tiempo Real</h4>
            <p className="text-sm text-gray-400">Anticipa descargas eléctricas y reduce riesgos en tu operación con monitoreo preciso basado en patrones de tormenta.</p>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
              <Globe className="w-6 h-6 text-blue-400" />
            </div>
            <h4 className="font-bold text-white mb-2">Radar de Precipitación (via <a href="https://www.rainviewer.com/" target="_blank" rel="noopener noreferrer" className="text-brand-orange hover:underline">RainViewer</a>)</h4>
            <p className="text-sm text-gray-400">Visualiza tormentas con actualizaciones cada 2 minutos y toma decisiones antes de que el clima impacte tu infraestructura.</p>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6 text-purple-400" />
            </div>
            <h4 className="font-bold text-white mb-2">Análisis de Riesgo Eléctrico</h4>
            <p className="text-sm text-gray-400">Identifica zonas vulnerables y protege tus sistemas con estrategias diseñadas para evitar fallas y pérdidas operativas.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const LandingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero />
      <ProblemSection />
      <SolutionsSection />
      <AdvancedLightningMap />
      <ImpactSection />
      <SectorsSection />
      <IsoCertificationSection />
      <ProcessSection />
      <Certifications />
      <ContactCTA />
    </>
  );
};

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
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </BrowserRouter>
  );
}
