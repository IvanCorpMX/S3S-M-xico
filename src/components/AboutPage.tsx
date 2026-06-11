import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Building2, Activity, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const AboutPage = () => (
  <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen">
    <Helmet>
      <title>Sobre S3S México | Expertos en Ingeniería Eléctrica y Energía Solar</title>
      <meta name="description" content="Conoce a S3S México, empresa líder con más de 12 años de trayectoria. Especialistas en respaldo energético, calidad de energía y paneles solares en Villahermosa, Tabasco y el sureste." />
      <link rel="canonical" href="https://www.s3s-mx.com/nosotros" />
    </Helmet>
    <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
      <div>
        <h2 className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-4">Nuestra Trayectoria</h2>
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 font-sans">Liderazgo en Ingeniería Eléctrica</h1>
        <p className="text-xl text-gray-600 leading-relaxed mb-6 font-sans">
          S3S México nace de la necesidad de ofrecer soluciones de ingeniería eléctrica de alta gama en una región con desafíos energéticos únicos como es el sureste de México. Con base en Villahermosa, Tabasco, hemos consolidado una reputación basada en la precisión técnica y el compromiso absoluto con nuestros clientes.
        </p>
        <p className="text-lg text-gray-500 leading-relaxed mb-6 font-sans">
          Nuestra experiencia de más de 12 años nos ha permitido ejecutar proyectos complejos para el sector salud, la industria petrolera y el comercio a gran escala. No somos solo un proveedor de equipos; somos socios estratégicos que entienden que un solo minuto de energía inestable puede representar pérdidas millonarias o riesgos operativos críticos.
        </p>
        <div className="flex gap-4 items-center p-4 bg-orange-50 rounded-2xl border border-orange-100">
          <div className="w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center text-white shrink-0">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <p className="text-sm font-bold text-gray-800">Certificados bajo normas internacionales y estándares de calidad rigurosos.</p>
        </div>
      </div>
      <div className="relative">
        <img 
          src="/images/nosotros.webp" 
          alt="Instalaciones y equipo técnico de S3S México en Villahermosa" 
          className="rounded-3xl shadow-2xl object-cover w-full h-[500px]"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
        />
        <div className="absolute -bottom-6 -left-6 bg-brand-orange p-6 rounded-2xl shadow-xl text-white">
          <p className="text-3xl font-black mb-1">12+</p>
          <p className="text-xs font-bold uppercase tracking-widest">Años de experiencia</p>
        </div>
      </div>
    </div>

    <div className="grid lg:grid-cols-3 gap-8 mb-24">
      <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
        <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-brand-orange mb-6">
          <Building2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold mb-4">Infraestructura Propia</h3>
        <p className="text-gray-600 leading-relaxed">
          Contamos con oficinas, almacén y equipo técnico especializado en Villahermosa para brindar una respuesta inmediata en todo Tabasco, Chiapas, Campeche y Veracruz.
        </p>
      </div>
      <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
        <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-brand-orange mb-6">
          <Activity className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold mb-4">Ingeniería Certificada</h3>
        <p className="text-gray-600 leading-relaxed">
          Nuestros ingenieros están en constante capacitación y certificados por las marcas líderes que representamos, asegurando instalaciones bajo normativa NOM.
        </p>
      </div>
      <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
        <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-brand-orange mb-6">
          <ShieldCheck className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold mb-4">Compromiso Social</h3>
        <p className="text-gray-600 leading-relaxed">
          Promovemos el uso de energías limpias a través de sistemas fotovoltaicos eficientes, ayudando a reducir la huella de carbono de la industria regional.
        </p>
      </div>
    </div>

    <div className="grid md:grid-cols-2 gap-12 text-slate-800">
      <div className="bg-slate-50 p-10 rounded-3xl">
        <h3 className="text-2xl font-bold mb-4 text-brand-orange">Nuestra Misión</h3>
        <p className="text-gray-700 leading-relaxed">
          Proveer soluciones integrales y confiables en calidad y respaldo de energía, asegurando la continuidad operativa de nuestros clientes a través de tecnología innovadora, ingeniería de excelencia y un servicio al cliente excepcional que supere las expectativas del mercado técnico.
        </p>
      </div>
      <div className="bg-slate-50 p-10 rounded-3xl">
        <h3 className="text-2xl font-bold mb-4 text-brand-orange">Nuestra Visión</h3>
        <p className="text-gray-700 leading-relaxed">
          Ser la empresa referente a nivel nacional en ingeniería eléctrica y respaldo de energía, reconocida por nuestra calidad, innovación y compromiso con el desarrollo sostenible de la industria mexicana, expandiendo nuestro impacto positivo en la eficiencia energética.
        </p>
      </div>
    </div>
  </div>
);
export default AboutPage;
