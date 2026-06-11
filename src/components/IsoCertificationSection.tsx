import React from 'react';
import { Globe } from 'lucide-react';

export const IsoCertificationSection = () => (
  <section className="py-16 bg-white border-y border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
        <div className="w-64 md:w-80 shrink-0 text-center">
          <img 
            src="/logos/iso27001.png" 
            alt="Certificación ISO 27001 en Gestión de Seguridad de la Información" 
            className="w-full h-auto object-contain mx-auto"
            loading="lazy"
            decoding="async"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
              const nextEl = (e.target as HTMLImageElement).nextElementSibling;
              if (nextEl) nextEl.classList.remove('hidden');
            }}
          />
          <Globe className="w-20 h-20 text-brand-orange hidden mx-auto" />
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold text-slate-950 mb-4">Certificación ISO 27001</h2>
          <p className="text-gray-600 max-w-2xl text-lg leading-relaxed">
            Estamos certificados en ISO 27001, garantizando los más altos estándares en la gestión de la seguridad de la información para proteger los datos y la operación de nuestros clientes.
          </p>
        </div>
      </div>
    </div>
  </section>
);
export default IsoCertificationSection;
