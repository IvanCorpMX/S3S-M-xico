import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { ArrowLeft, AlertTriangle, Cpu, CheckCircle2, ShieldCheck } from 'lucide-react';
import { solutionsData } from '../data/solutions';

export const SolutionDetail = () => {
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
          <button onClick={() => navigate('/')} className="btn-primary cursor-pointer">Volver al inicio</button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pb-24 text-slate-800">
      <Helmet>
        <title>{solution.title} Industrial en Villahermosa | S3S México</title>
        <meta name="description" content={`Solución profesional de ${solution.title} en Villahermosa y el sur de México. ${solution.desc}`} />
        <link rel="canonical" href={`https://www.s3s-mx.com/solucion/${solution.id}`} />
        <meta property="og:title" content={`${solution.title} | S3S México`} />
        <meta property="og:description" content={solution.desc} />
        <meta property="og:url" content={`https://www.s3s-mx.com/solucion/${solution.id}`} />
      </Helmet>

      {/* Hero Section for the Solution */}
      <div className="bg-slate-900 text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={solution.images[0]} alt={`Fondo de ${solution.title} - S3S México`} className="w-full h-full object-cover" loading="lazy" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-gray-300 hover:text-brand-orange font-bold mb-8 transition-colors cursor-pointer"
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
          <h1 className="text-4xl md:text-6xl font-black mb-6 max-w-3xl leading-tight font-sans">
            {solution.id === 'sistemas-fotovoltaicos' ? "Paneles Solares en Villahermosa" : solution.title}
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">{solution.desc}</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {solution.highlight && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 bg-orange-50 border-l-8 border-brand-orange p-8 md:p-12 rounded-r-3xl shadow-sm"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-black text-slate-800 mb-4 leading-tight italic font-sans">
                  {solution.highlight.quote}
                </h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  {solution.highlight.text}
                </p>
                <div className="inline-block bg-brand-orange text-white px-6 py-3 rounded-xl font-bold text-lg shadow-lg shadow-orange-200">
                  {solution.highlight.callout}
                </div>
              </div>
              <div className="hidden md:block w-px h-32 bg-orange-200" />
              <div className="flex flex-col items-center justify-center text-center px-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md mb-3">
                  <AlertTriangle className="w-8 h-8 text-brand-orange" />
                </div>
                <span className="text-xs font-black uppercase tracking-widest text-brand-orange">Dato Crítico</span>
              </div>
            </div>
          </motion.div>
        )}

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <div className="prose prose-lg text-gray-600 leading-relaxed font-sans">
              <p>{solution.details}</p>
            </div>
            
            <div className="mt-12">
              <h4 className="text-xl font-bold uppercase tracking-widest text-brand-orange mb-6 flex items-center gap-2 font-sans">
                <Cpu className="w-6 h-6" /> ¿Qué ofrecemos?
              </h4>
              <ul className="space-y-4">
                {solution.specs.map((spec, i) => (
                  <li key={i} className="flex items-start gap-4 text-gray-700 bg-gray-50 p-4 rounded-xl border border-gray-100 shadow-sm">
                    <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" /> 
                    <span className="font-medium text-lg leading-snug">{spec}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Acreditación de Representante Autorizado Kenjitsu para Respaldo de Energía (UPS) */}
            {solution.id === 'respaldo-energia' && (
              <div className="mt-12 bg-gradient-to-r from-amber-500/5 to-orange-500/5 border border-amber-500/20 rounded-3xl p-6 md:p-8 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
                <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                  <div className="w-32 h-32 md:w-36 md:h-36 shrink-0 flex items-center justify-center bg-white p-3 rounded-2xl shadow-md border border-amber-100 relative">
                    <img 
                      src="/logos/sello-kenjitsu.png" 
                      alt="Representante Autorizado Kenjitsu de S3S México" 
                      className="max-w-full max-h-full object-contain"
                      loading="lazy"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                        const fallbackEl = (e.target as HTMLImageElement).nextElementSibling;
                        if (fallbackEl) fallbackEl.classList.remove('hidden');
                      }}
                      referrerPolicy="no-referrer"
                    />
                    <div className="hidden flex-col items-center justify-center text-center text-amber-600">
                      <ShieldCheck className="w-12 h-12 mb-1" />
                      <span className="text-[10px] font-black uppercase tracking-tight leading-none">Kenjitsu<br/>Autorizado</span>
                    </div>
                  </div>
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
                      Soporte de Fábrica
                    </span>
                    <h3 className="text-xl font-black text-slate-900 mb-3 font-sans tracking-tight">
                      Representante Autorizado Kenjitsu
                    </h3>
                    <p className="text-gray-650 leading-relaxed text-sm font-sans">
                      Como <strong>Representante Autorizado Kenjitsu</strong>, garantizamos soporte técnico de fábrica permanente, refacciones originales, cobertura de garantías directas y pólizas de mantenimiento certificadas para tu sistema UPS.
                    </p>
                  </div>
                </div>
              </div>
            )}
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
             <h3 className="text-3xl md:text-4xl font-black mb-6 font-sans">¿Listo para implementar esta solución?</h3>
             <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90 leading-relaxed">Nuestros expertos están listos para evaluar tus necesidades y diseñar la mejor estrategia para tu empresa.</p>
             <button onClick={() => {
               navigate('/', { state: { selectedService: solution.title } });
               setTimeout(() => {
                 document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
               }, 100);
             }} className="bg-white text-brand-orange px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl cursor-pointer">
               Solicitar Cotización para {solution.title}
             </button>
           </div>
        </div>
      </div>
    </div>
  );
};
export default SolutionDetail;
