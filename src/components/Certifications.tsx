import React from 'react';

export const Certifications = () => {
  const marcas = [
    { name: 'DEHN', logo: '/logos/dehn.png' },
    { name: 'Aurus', logo: '/logos/aurus.png' },
    { name: 'Trinasolar', logo: '/logos/trinasolar.png' },
    { name: 'Generac', logo: '/logos/generac.png' },
    { name: 'APC', logo: '/logos/apc.png' },
    { name: 'Schneider Electric', logo: '/logos/schneider.png' },
    { name: 'Kenjitsu', logo: '/logos/kenjitsu.png' }
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
                    const fallbackEl = (e.target as HTMLImageElement).nextElementSibling;
                    if (fallbackEl) fallbackEl.classList.add('hidden');
                  }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    const fallbackEl = (e.target as HTMLImageElement).nextElementSibling;
                    if (fallbackEl) fallbackEl.classList.remove('hidden');
                  }}
                />
                <span className="text-2xl font-black text-slate-700 italic px-4 hidden">{brand.name}</span>
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
                    const fallbackEl = (e.target as HTMLImageElement).nextElementSibling;
                    if (fallbackEl) fallbackEl.classList.add('hidden');
                  }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    const fallbackEl = (e.target as HTMLImageElement).nextElementSibling;
                    if (fallbackEl) fallbackEl.classList.remove('hidden');
                  }}
                />
                <span className="text-2xl font-black text-slate-700 italic px-4 hidden">{brand.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Certifications;
