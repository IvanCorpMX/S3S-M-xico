import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Logo } from './Logo';
import { solutionsData } from '../data/solutions';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <Logo className="h-12" />
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <div 
              className="relative group h-20 flex items-center"
              onMouseEnter={() => setIsSolutionsOpen(true)}
              onMouseLeave={() => setIsSolutionsOpen(false)}
            >
              <button 
                className={`flex items-center gap-1 text-sm font-semibold hover:text-brand-orange transition-colors ${location.pathname.startsWith('/solucion') ? 'text-brand-orange' : ''}`}
                onClick={() => {
                  if (location.pathname !== '/') {
                    navigate('/');
                    setTimeout(() => {
                      document.getElementById('soluciones')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  } else {
                    document.getElementById('soluciones')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Soluciones <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isSolutionsOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isSolutionsOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-20 left-0 w-64 bg-white shadow-xl border border-gray-100 rounded-xl overflow-hidden py-2"
                  >
                    {solutionsData.map((sol) => (
                      <Link 
                        key={sol.id} 
                        to={`/solucion/${sol.id}`}
                        onClick={() => setIsSolutionsOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors group/item"
                      >
                        <div className="text-gray-500 group-hover/item:text-brand-orange transition-colors">
                          {React.cloneElement(sol.icon as React.ReactElement, { className: "w-5 h-5" })}
                        </div>
                        <span className="text-xs font-bold text-gray-700 tracking-tight">{sol.title}</span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <Link to="/nosotros" className="text-sm font-semibold hover:text-brand-orange transition-colors">Nosotros</Link>
            <Link to="/contacto" className="text-sm font-semibold hover:text-brand-orange transition-colors">Contacto</Link>
            <a href="/brochure.pdf" target="_blank" rel="noopener noreferrer" className="bg-slate-800 text-white px-5 py-2 rounded-lg text-sm font-bold hover:bg-brand-orange transition-all">
              BROCHURE
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2" aria-label="Alternar menú de navegación">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-b border-gray-100 px-4 py-6 flex flex-col gap-4 max-h-[80vh] overflow-y-auto"
          >
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold text-brand-orange uppercase tracking-widest px-2">Soluciones</span>
              {solutionsData.map((sol) => (
                <Link 
                  key={sol.id} 
                  to={`/solucion/${sol.id}`} 
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 bg-gray-50/50"
                >
                  <div className="text-gray-500">{React.cloneElement(sol.icon as React.ReactElement, { className: "w-5 h-5" })}</div>
                  <span className="text-sm font-medium">{sol.title}</span>
                </Link>
              ))}
            </div>
            <div className="h-px bg-gray-100 my-2" />
            <Link to="/nosotros" onClick={() => setIsOpen(false)} className="text-lg font-semibold px-2">Nosotros</Link>
            <Link to="/contacto" onClick={() => setIsOpen(false)} className="text-lg font-semibold px-2">Contacto</Link>
            <a href="/brochure.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center mt-2">Descargar Brochure</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
export default Navbar;
