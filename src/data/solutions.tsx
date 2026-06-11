import React from 'react';
import { Activity, Battery, Zap, Sun, ShieldCheck, Wind } from 'lucide-react';
import { Solution } from '../types';

export const solutionsData: Solution[] = [
  {
    id: "calidad-energia",
    icon: <Activity className="w-8 h-8" />,
    title: "Calidad de Energía",
    desc: "Optimización y protección de sistemas eléctricos en Villahermosa. Evita daños por variaciones de voltaje y armónicos en el sureste de México.",
    tags: ["Armónicos", "Diagnóstico", "Telemetría"],
    details: "¿Buscas mejorar la calidad de energía en Villahermosa? En S3S México somos especialistas en el análisis y diagnóstico de redes eléctricas industriales y comerciales en Tabasco y todo el sureste. Implementamos supresores de picos (TVSS) de última generación que actúan en milisegundos para desviar sobretensiones transitorias a tierra, protegiendo equipos críticos como servidores, equipo médico y maquinaria automatizada contra las constantes variaciones de la red eléctrica en la región.",
    specs: [
      "Estudios de Calidad de Energía (Código de Red)",
      "Análisis y Filtrado de Armónicos",
      "Corrección de Factor de Potencia",
      "Instalación de Supresores de Picos Certificados",
      "Telemetría y Monitoreo Eléctrico 24/7"
    ],
    images: [
      "/images/calidad-energia.webp",
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80"
    ],
    highlight: {
      quote: "“Protege tu infraestructura de las variaciones eléctricas del sureste”",
      text: "En zonas de alta humedad y actividad eléctrica como Tabasco, la calidad de energía es crítica para evitar paros no programados y costosas reparaciones en tarjetas electrónicas.",
      callout: "Garantiza la vida útil de tus equipos con ingeniería de precisión."
    }
  },
  {
    id: "respaldo-energia",
    icon: <Battery className="w-8 h-8" />,
    title: "Respaldo de Energía (UPS)",
    desc: "Sistemas UPS de alta confiabilidad en Villahermosa. Energía ininterrumpida para centros de datos, hospitales y procesos críticos en Tabasco.",
    tags: ["UPS", "Baterías", "Mantenimiento"],
    details: "Garantizamos continuidad operativa absoluta con sistemas UPS diseñados para la red eléctrica en el sureste mexicano. En S3S México proveemos soluciones de respaldo de energía que purifican la señal, eliminando picos, variaciones y cortes de voltaje que dañan equipos críticos. Ofrecemos desde sistemas monofásicos para oficinas hasta robustas soluciones trifásicas industriales, respaldadas por pólizas de mantenimiento en Tabasco.",
    specs: [
      "Sistemas UPS Monofásicos y Trifásicos",
      "Baterías de Reemplazo para UPS (VRLA/Litio)",
      "Pólizas de Mantenimiento Preventivo y Correctivo",
      "Dimensionamiento de Cargas Críticas",
      "Soluciones de Respaldo para Sector Salud y TI"
    ],
    images: [
      "/images/ups.webp",
      "https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&q=80"
    ],
    highlight: {
      quote: "“Respaldo instantáneo para operaciones que no pueden fallar”",
      text: "Un apagón de segundos puede corromper bases de datos o detener equipos de diagnóstico médico. Nuestros UPS proporcionan el tiempo necesario para una transición segura a generadores.",
      callout: "Cero segundos de transferencia para protección total."
    }
  },
  {
    id: "generadores-emergencia",
    icon: <Zap className="w-8 h-8" />,
    title: "Generadores de Emergencia",
    desc: "Venta y mantenimiento de plantas de luz en Villahermosa. Potencia estable para industria y comercio en Tabasco y el sureste.",
    tags: ["Plantas de Luz", "Tabasco", "Transferencia"],
    details: "Instalamos plantas de emergencia y generadores eléctricos industriales en Villahermosa diseñados para soportar el clima extremo de Tabasco. Desde generadores diésel de alta capacidad hasta sistemas automáticos de transferencia, nuestras soluciones garantizan que tu negocio mantenga su productividad operativa incluso durante interrupciones prolongadas de la CFE. Ofrecemos servicio técnico especializado y pruebas de carga periódicas.",
    specs: [
      "Generadores Diésel y Gas de Alta Potencia",
      "Tableros de Transferencia Automática (TTA)",
      "Mantenimiento a Motores y Alternadores",
      "Instalaciones Eléctricas de Fuerza",
      "Suministro de Refacciones y Consumibles"
    ],
    images: [
      "/images/generadores.webp",
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80"
    ],
    highlight: {
      quote: "“Potencia de emergencia diseñada para el clima de Tabasco”",
      text: "Nuestros equipos están preparados para operar en condiciones de alta temperatura, garantizando el arranque inmediato cuando falla el suministro principal.",
      callout: "Continuidad total para tu cadena de frío y producción."
    }
  },
  {
    id: "sistemas-fotovoltaicos",
    icon: <Sun className="w-8 h-8" />,
    title: "Paneles Solares",
    desc: "Ahorro energético con paneles solares en Villahermosa. Reduce tu factura de CFE hasta un 99% en Tabasco y el sureste.",
    tags: ["Energía Solar", "Villahermosa", "Incentivos Fiscales"],
    details: "¿Quieres instalar paneles solares en Villahermosa? Tabasco cuenta con uno de los niveles de radiación solar más altos de México, lo que hace de la energía solar la inversión más rentable para empresas y hogares. En S3S México diseñamos sistemas fotovoltaicos interconectados a la red que te permiten generar tu propia electricidad limpia. Aprovecha los beneficios fiscales (100% deducible) y olvídate de los altos costos de luz en la región.",
    specs: [
      "Ingeniería de Sistemas Fotovoltaicos",
      "Instalación de Paneles Solares Tier-1",
      "Trámites de Interconexión CFE (Net Metering)",
      "Monitoreo de Generación vía Mobile App",
      "Mantenimiento y Limpieza de Módulos Solares"
    ],
    images: [
      "/images/solar.webp",
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80"
    ],
    highlight: {
      quote: "“Convierte el sol de Tabasco en activos financieros”",
      text: "La instalación de paneles solares en el sureste mexicano ofrece el retorno de inversión más rápido del país gracias a la alta radiación solar constante.",
      callout: "Ahorra miles de pesos en tu próximo recibo de CFE."
    }
  },
  {
    id: "proteccion",
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Protección Eléctrica",
    desc: "Expertos en tierras físicas y pararrayos en Villahermosa. Protege tu infraestructura contra descargas atmosféricas en el sureste.",
    tags: ["Tierras Físicas", "Pararrayos", "Norma NOM-001"],
    details: "En S3S México somos especialistas en sistemas de tierras físicas y pararrayos en Villahermosa, Tabasco y el sureste mexicano. Dada la alta incidencia de tormentas eléctricas en la región, contar con una red de tierras eficiente y puntas pararrayos certificadas es indispensable para la seguridad humana y la protección de activos. Diseñamos sistemas bajo la norma NOM-001-SEDE-2012 para garantizar la correcta disipación de descargas atmosféricas y evitar daños por fallas a tierra.",
    specs: [
      "Instalación de Sistemas de Tierras Físicas (Delta/Malla)",
      "Sistemas de Pararrayos (Puntas Franklin y Dipolares)",
      "Medición de Resistividad de Terreno (Método Wenner)",
      "Pruebas de Continuidad y Resistencia de Tierra",
      "Dictámenes para Protección Civil y STPS"
    ],
    images: [
      "/images/proteccion.webp",
      "https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?auto=format&fit=crop&q=80"
    ],
    highlight: {
      quote: "“Villahermosa es zona de alta actividad eléctrica atmosférica”",
      text: "Un sistema de pararrayos y una tierra física de baja resistencia son la única defense real contra el impacto directo de rayos en edificios industriales y comerciales.",
      callout: "No arriesgues tu infraestructura; cumple con la normatividad vigente."
    }
  },
  {
    id: "hvac",
    icon: <Wind className="w-8 h-8" />,
    title: "Sistemas HVAC",
    desc: "Sistemas de aire acondicionado de precisión, ventilación y refrigeración industrial en Villahermosa. Climatización eficiente para procesos críticos y de alta exigencia.",
    tags: ["HVAC", "Aire de Precisión", "Mantenimiento"],
    details: "En un ambiente retador y húmedo como el del sureste de México, el control preciso de temperatura y humedad no es un lujo, sino una necesidad operativa absoluta. En S3S México diseñamos, suministramos y mantenemos sistemas HVAC industriales y soluciones de aire acondicionado de precisión. Brindamos soporte dedicado para equipos enfocados en proteger infraestructura crítica como data centers, laboratorios clínicas e instalaciones industriales de gran escala en Tabasco.",
    specs: [
      "Aire Acondicionado de Precisión homologado para Data Centers",
      "Sistemas de Inyección, Extracción y Calidad de Aire Industrial",
      "Ingeniería de Climatización Eficiente y Reducción de Consumo de Energía"
    ],
    images: [
      "/images/hvac.webp",
      "https://images.unsplash.com/photo-1581094288338-2314dddb7eed?auto=format&fit=crop&q=80"
    ],
    highlight: {
      quote: "“Climatización garantizada para entornos de alta exigencia”",
      text: "El calor severo del sureste acorta el ciclo de vida de los componentes electrónicos y de control. Ofrecemos aire acondicionado dedicado para preservar tus activos críticos.",
      callout: "Disminuye fallas operativas con ambientes controlados."
    }
  }
];
