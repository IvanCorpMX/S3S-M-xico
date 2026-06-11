import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from './Hero';
import ProblemSection from './ProblemSection';
import SolutionsSection from './SolutionsSection';
import AdvancedLightningMap from './AdvancedLightningMap';
import ImpactSection from './ImpactSection';
import SectorsSection from './SectorsSection';
import IsoCertificationSection from './IsoCertificationSection';
import ProcessSection from './ProcessSection';
import Certifications from './Certifications';
import ContactCTA from './ContactCTA';

export const LandingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Paneles Solares en Villahermosa | S3S México | Ingeniería Eléctrica</title>
        <meta name="description" content="Especialistas en Paneles Solares en Villahermosa y Tabasco. Ahorra hasta el 99% en tu recibo de CFE con ingeniería de vanguardia. ¡Pide tu diagnóstico gratuito hoy!" />
        <link rel="canonical" href="https://www.s3s-mx.com/" />
        <meta property="og:title" content="Paneles Solares en Villahermosa | S3S México" />
        <meta property="og:description" content="Reduce tus costos eléctricos hasta un 90% con expertos en ingeniería eléctrica y respaldo energético en Tabasco." />
        <meta property="og:url" content="https://www.s3s-mx.com/" />
      </Helmet>
      <Hero />
      <ProblemSection />
      <SolutionsSection />
      <AdvancedLightningMap />
      <ImpactSection />
      <SectorsSection />
      <IsoCertificationSection />
      <ProcessSection />
      <Certifications />
      <ContactCTA />
    </>
  );
};
export default LandingPage;
