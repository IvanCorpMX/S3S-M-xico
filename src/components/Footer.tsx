import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { Linkedin, Facebook, Instagram, Music, MapPin, Phone, Mail } from 'lucide-react';
import { solutionsData } from '../data/solutions';

export const Footer = () => (
  <footer className="bg-slate-950 text-white py-10 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
        <div className="md:col-span-1 lg:col-span-2">
          <Logo className="h-10 mb-4 brightness-0 invert" />
          <p className="text-gray-400 max-w-sm mb-6 text-sm">
            Líderes en soluciones de respaldo energético y eficiencia industrial en México. Garantizamos la continuidad de tu negocio con tecnología de vanguardia.
          </p>
          <div className="flex gap-4">
            <a href="https://mx.linkedin.com/company/s3s-méxico" target="_blank" rel="noopener noreferrer" aria-label="Visitar perfil de LinkedIn" className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-orange transition-colors cursor-pointer">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://www.facebook.com/S3SMexico" target="_blank" rel="noopener noreferrer" aria-label="Visitar página de Facebook" className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-orange transition-colors cursor-pointer">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="https://www.instagram.com/s3smexico/" target="_blank" rel="noopener noreferrer" aria-label="Visitar perfil de Instagram" className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-orange transition-colors cursor-pointer">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://www.tiktok.com/@s3smexico" target="_blank" rel="noopener noreferrer" aria-label="Visitar perfil de TikTok" className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-orange transition-colors cursor-pointer">
              <Music className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <h5 className="font-bold uppercase tracking-widest text-xs mb-4 text-orange-400">Soluciones</h5>
          <ul className="space-y-2 text-sm text-gray-400">
            {solutionsData.map((sol) => (
              <li key={sol.id}>
                <Link to={`/solucion/${sol.id}`} className="hover:text-brand-orange transition-colors">
                  {sol.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="font-bold uppercase tracking-widest text-xs mb-4 text-orange-400">Contacto</h5>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-brand-orange shrink-0" />
              <a href="tel:+525578777227" className="hover:text-brand-orange transition-colors">+52 55 7877 7227</a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-brand-orange shrink-0" />
              <a href="https://wa.me/5215578777227" target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange transition-colors">+52 1 55 7877 7227</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-brand-orange shrink-0" />
              <a href="mailto:ventas@s3s-mx.com" className="hover:text-white transition-colors">ventas@s3s-mx.com</a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-medium font-sans">
        <p>© 2026 S3S México. Todos los derechos reservados.</p>
        <div className="flex gap-6">
          <Link to="/privacidad" className="hover:text-white transition-colors">Aviso de Privacidad</Link>
        </div>
      </div>
    </div>
  </footer>
);
export default Footer;
