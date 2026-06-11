import React from 'react';
import { TrendingDown, AlertTriangle, Settings, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export const ProblemSection = () => (
  <section className="py-20 bg-slate-900 text-white overflow-hidden relative">
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
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-xs text-gray-500 hover:text-brand-orange transition-colors mt-auto cursor-pointer">
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
          <a href="https://oem.com.mx/elheraldodetabasco/local/cfe-dejo-perdidas-por-apagones-a-130-mil-comercios-durante-2024-en-tabasco-22234260" target="_blank" rel="noopener noreferrer" className="text-xs text-brand-orange hover:text-white transition-colors cursor-pointer">
            Fuente: El Heraldo de Tabasco
          </a>
        </div>
      </div>
    </div>
  </section>
);
export default ProblemSection;
