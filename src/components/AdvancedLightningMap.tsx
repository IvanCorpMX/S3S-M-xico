import React from 'react';
import { Zap, CloudLightning, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export const AdvancedLightningMap = () => {
  return (
    <section className="py-24 bg-slate-950 overflow-hidden relative text-white" id="monitoreo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-orange/10 text-brand-orange text-sm font-bold mb-4"
          >
            <Zap className="w-4 h-4" /> MONITOREO EN TIEMPO REAL
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tighter col-span-full">
            Rastreo de <span className="text-brand-orange">actividad atmosférica</span>
          </h2>
          <p className="text-brand-orange/60 text-xs font-bold uppercase tracking-[0.2em] mb-6">
            Powered by Blitzortung® Network
          </p>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Monitorea descargas eléctricas atmosféricas en milisegundos. Basado en la red global de detección técnica para el sureste de México.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border-4 border-white/5 aspect-video md:aspect-[21/9] bg-black"
        >
          <iframe 
            src="https://embed.windy.com/embed2.html?lat=17.989&lon=-92.948&detailLat=17.989&detailLon=-92.948&width=1200&height=500&zoom=7&level=surface&overlay=radar&product=radar&menu=&message=true&marker=true&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=default&metricTemp=default&radarRange=-1"
            className="w-full h-full grayscale-[0.1] brightness-[0.9]"
            title="Monitoreo de Rayos y Tormentas S3S México"
            loading="lazy"
            style={{ border: 0 }}
          ></iframe>

          <div className="absolute top-6 left-6 z-[40] flex flex-col gap-2">
            <div className="bg-black/80 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
              <span className="text-xs font-bold text-white uppercase tracking-widest">Detección Atmosférica Activa</span>
            </div>
            <div className="bg-black/80 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Región de Cobertura</span>
              <span className="text-xs font-mono text-brand-orange">
                TAB / CHIS / CAMP / VER
              </span>
            </div>
          </div>

          <div className="absolute bottom-6 right-6 z-[40] flex flex-col gap-2 items-end">
            <div className="bg-black/80 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10 text-[10px] font-bold text-brand-orange uppercase tracking-widest">
              Live Data: Windy.com & Blitzortung®
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-12 bg-transparent">
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-brand-orange/20 flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-brand-orange" />
            </div>
            <h4 className="font-bold text-white mb-2">Red de Sensores VLF</h4>
            <p className="text-sm text-gray-400 leading-relaxed">Utilizamos datos de la red Blitzortung para triangular impactos atmosféricos con una precisión que permite anticipar riesgos eléctricos.</p>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
              <CloudLightning className="w-6 h-6 text-blue-400" />
            </div>
            <h4 className="font-bold text-white mb-2">Monitoreo de Impacto</h4>
            <p className="text-sm text-gray-400 leading-relaxed">Visualiza cada rayo en el momento exacto en que ocurre. Ideal para coordinar el mantenimiento de UPS y plantas de emergencia.</p>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6 text-purple-400" />
            </div>
            <h4 className="font-bold text-white mb-2">Protección Industrial</h4>
            <p className="text-sm text-gray-400 leading-relaxed">Identifica zonas de alta actividad y activa protocolos de seguridad para evitar paros de línea causados por disturbios atmosféricos.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AdvancedLightningMap;
