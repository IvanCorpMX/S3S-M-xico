import React from 'react';
import { Hospital, Building2, Database, ShoppingCart } from 'lucide-react';

export const SectorsSection = () => (
  <section id="sectores" className="py-24 bg-slate-50">
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
          <div key={i} className="text-center group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
            <div className="w-20 h-20 mx-auto bg-slate-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-slate-800 group-hover:text-white transition-all duration-300">
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
export default SectorsSection;
