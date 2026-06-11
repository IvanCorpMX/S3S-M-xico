import React from 'react';

export const ProcessSection = () => (
  <section id="proceso" className="py-24 bg-slate-900 text-white">
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
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <img 
            src="/images/proceso.webp" 
            alt="Ingenieros de S3S México realizando mantenimiento e instalación de equipos UPS y plantas de luz" 
            className="rounded-3xl shadow-2xl w-full h-auto object-cover"
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
export default ProcessSection;
