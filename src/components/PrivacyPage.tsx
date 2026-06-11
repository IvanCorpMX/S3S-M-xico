import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

export const PrivacyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <Helmet>
        <title>Aviso de Privacidad y Términos | S3S México</title>
        <meta name="description" content="Consulta nuestro aviso de privacidad. En S3S México protegemos tus datos personales conforme a la ley mexicana de protección de datos." />
        <link rel="canonical" href="https://www.s3s-mx.com/privacidad" />
      </Helmet>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Aviso de Privacidad</h1>
        <div className="prose prose-lg text-gray-600 space-y-6 leading-relaxed">
          <p className="font-medium text-sm text-gray-500">Última actualización: 10/03/2026</p>
          <p>S3S México, empresa dedicada a soluciones de energía, paneles solares, UPS, generadores y servicios eléctricos es responsable del tratamiento de sus datos personales.</p>
          
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Datos recabados</h2>
          <p>Podemos recabar:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Nombre</li>
            <li>Empresa</li>
            <li>Teléfono</li>
            <li>Correo electrónico</li>
            <li>Dirección del inmueble o instalación</li>
            <li>Información técnica para dimensionamiento de sistemas eléctricos o solares</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Finalidades</h2>
          
          <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">Primarias</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Evaluación de proyectos energéticos</li>
            <li>Elaboración de propuestas y cotizaciones</li>
            <li>Instalación, mantenimiento o soporte técnico</li>
            <li>Atención a clientes</li>
          </ul>

          <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">Secundarias</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Envío de contenido informativo o promocional sobre soluciones energéticas</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Transferencias</h2>
          <p>Sus datos podrán compartirse con empresas del grupo CORP-MX para fines relacionados con los servicios solicitados.</p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Derechos ARCO</h2>
          <p>Para ejercerlos envíe un correo a:</p>
          <p className="font-medium text-brand-orange">
            <a href="mailto:ventas@s3s-mx.com" className="hover:underline">ventas@s3s-mx.com</a>
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Cambios</h2>
          <p>Las actualizaciones a este aviso serán publicadas en el sitio web.</p>
        </div>
      </div>
    </div>
  );
};
export default PrivacyPage;
