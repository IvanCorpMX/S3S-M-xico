import React from 'react';
import { Leaf, Sun, Zap } from 'lucide-react';
import { motion } from 'motion/react';

export const ImpactSection = () => (
  <section className="py-20 bg-brand-orange text-white relative overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay" />
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center mb-16">
        <span className="block font-bold uppercase tracking-widest text-sm mb-4 text-white/80">Nuestro Impacto</span>
        <h2 className="text-3xl md:text-4xl font-black mb-6">Resultados que transforman</h2>
        <p className="text-white/90 max-w-2xl mx-auto text-lg leading-relaxed">
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
          <div className="text-5xl font-black mb-2">84+</div>
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
          <div className="text-5xl font-black mb-2">200+</div>
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
          <div className="text-5xl font-black mb-2">110 kWp</div>
          <div className="text-lg font-medium text-white/90">De Potencia<br/>Instalada</div>
        </motion.div>
      </div>
    </div>
  </section>
);
export default ImpactSection;
