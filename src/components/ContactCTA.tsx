import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export const ContactCTA = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    servicio: 'Calidad de Energía',
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
      { 
        rootMargin: '400px',
        threshold: 0.1 
      }
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
        <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                ¿LISTO PARA <br />
                <span className="text-brand-orange">ASEGURAR</span> <br />
                TU ENERGÍA?
              </h2>
              <p className="text-gray-400 text-lg mb-12 max-w-md leading-relaxed">
                Agenda un diagnóstico técnico sin costo o solicita un presupuesto inmediato para tu empresa.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6 max-w-md">
                <div>
                  <label htmlFor="nombre" className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Nombre Completo</label>
                  <input 
                    type="text" 
                    id="nombre"
                    value={formData.nombre}
                    onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white focus:outline-none focus:border-brand-orange transition-colors"
                    placeholder="Ej. Ing. Carlos Mendoza"
                  />
                  {errors.nombre && <p className="text-brand-orange text-xs mt-1 font-semibold">{errors.nombre}</p>}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="empresa" className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Empresa</label>
                    <input 
                      type="text" 
                      id="empresa"
                      value={formData.empresa}
                      onChange={(e) => setFormData({...formData, empresa: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-orange transition-colors"
                      placeholder="Nombre de tu empresa"
                    />
                    {errors.empresa && <p className="text-brand-orange text-xs mt-1 font-semibold">{errors.empresa}</p>}
                  </div>
                  <div>
                    <label htmlFor="servicio" className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Solución de Interés</label>
                    <select 
                      id="servicio"
                      value={formData.servicio}
                      onChange={(e) => setFormData({...formData, servicio: e.target.value})}
                      className="w-full bg-slate-800 border border-white/10 rounded-xl px-2 py-3 text-white focus:outline-none focus:border-brand-orange transition-colors"
                    >
                      <option value="Calidad de Energía">Calidad de Energía</option>
                      <option value="Respaldo de Energía (UPS)">Respaldo de Energía (UPS)</option>
                      <option value="Generadores de Emergencia">Plantas de Emergencia</option>
                      <option value="Paneles Solares">Paneles Solares</option>
                      <option value="Protección Eléctrica">Protección Eléctrica</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Correo Corporativo</label>
                  <input 
                    type="email" 
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white focus:outline-none focus:border-brand-orange transition-colors"
                    placeholder="carlos@tuempresa.com"
                  />
                  {errors.email && <p className="text-brand-orange text-xs mt-1 font-semibold">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Mensaje o Requerimiento</label>
                  <textarea 
                    id="mensaje"
                    rows={4}
                    value={formData.mensaje}
                    onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white focus:outline-none focus:border-brand-orange transition-colors resize-none"
                    placeholder="Describe brevemente tus necesidades o capacidad requerida..."
                  ></textarea>
                  {errors.mensaje && <p className="text-brand-orange text-xs mt-1 font-semibold">{errors.errors_mensaje || errors.mensaje}</p>}
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitted}
                  className="w-full bg-brand-orange hover:bg-orange-600 text-white font-bold h-14 rounded-xl transition-all cursor-pointer shadow-lg shadow-orange-500/20 flex items-center justify-center"
                >
                  {isSubmitted ? '¡Mensaje Enviado!' : 'Enviar Solicitud'}
                </button>
              </form>
            </div>
            
            <div className="bg-white rounded-3xl p-2 md:p-4 text-slate-800 h-[700px] lg:h-[850px] xl:h-[900px] shadow-xl">
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
                    referrerPolicy="no-referrer-when-downgrade"
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
export default ContactCTA;
