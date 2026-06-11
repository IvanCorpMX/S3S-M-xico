import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MapPin, Linkedin, Facebook, Instagram, Music } from 'lucide-react';

export const ContactPage = () => (
  <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen text-slate-800">
    <Helmet>
      <title>Contacto con S3S México | Consultoría Eléctrica en Villahermosa</title>
      <meta name="description" content="¿Necesitas asegurar tu energía o cotizar paneles solares? Contáctanos para asesoría técnica personalizada en Villahermosa, Tabasco y todo el sureste mexicano." />
      <link rel="canonical" href="https://www.s3s-mx.com/contacto" />
    </Helmet>
    <div className="text-center mb-16">
      <h2 className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-4">Estamos para ayudarte</h2>
      <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 font-sans">Contáctanos</h1>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto font-sans leading-relaxed">
        Comunícate con nuestros expertos para obtener asesoría personalizada y asegurar la continuidad de tu operación.
      </p>
    </div>

    <div className="max-w-3xl mx-auto space-y-8">
      <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
        <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center">
              <Phone className="w-5 h-5 text-brand-orange" />
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase font-bold">Llámanos</p>
              <a href="tel:+525578777227" className="font-bold text-lg hover:text-brand-orange transition-colors">+52 55 7877 7227</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center">
              <Phone className="w-5 h-5 text-brand-orange" />
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase font-bold">WhatsApp</p>
              <a href="https://wa.me/5215578777227" target="_blank" rel="noopener noreferrer" className="font-bold text-lg hover:text-brand-orange transition-colors">+52 1 55 7877 7227</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center">
              <Mail className="w-5 h-5 text-brand-orange" />
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase font-bold">Email</p>
              <a href="mailto:ventas@s3s-mx.com" className="font-bold text-lg hover:text-brand-orange transition-colors">ventas@s3s-mx.com</a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-lg">
        <h3 className="text-2xl font-bold mb-6">Nuestras Redes Sociales</h3>
        <div className="flex gap-4">
          <a href="https://mx.linkedin.com/company/s3s-méxico" target="_blank" rel="noopener noreferrer" aria-label="Visitar perfil de LinkedIn" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-orange transition-colors cursor-pointer">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="https://www.facebook.com/S3SMexico" target="_blank" rel="noopener noreferrer" aria-label="Visitar página de Facebook" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-orange transition-colors cursor-pointer">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="https://www.instagram.com/s3smexico/" target="_blank" rel="noopener noreferrer" aria-label="Visitar perfil de Instagram" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-orange transition-colors cursor-pointer">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="https://www.tiktok.com/@s3smexico" target="_blank" rel="noopener noreferrer" aria-label="Visitar perfil de TikTok" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-orange transition-colors cursor-pointer">
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
          className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white text-brand-orange font-bold px-6 py-3 rounded-full shadow-xl opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 cursor-pointer"
        >
          <MapPin className="w-5 h-5" /> Abrir en Google Maps
        </a>
      </div>
    </div>
  </div>
);
export default ContactPage;
