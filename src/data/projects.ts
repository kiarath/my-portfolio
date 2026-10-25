import type { CaseStudy, ProjectCard } from './types';
import { site } from './site';
import { jodify } from './cases/jodify';
import { sumun } from './cases/sumun';
import { cinear } from './cases/cinear';
import { veggy } from './cases/veggy';
import { santillana } from './cases/santillana';
import * as es from './cases/es';

import imgSumun from '../assets/projects/card-sumun.jpg';
import imgJodify from '../assets/projects/card-jodify.jpg';
import imgLar from '../assets/projects/card-lar.jpg';
import imgPiscineria from '../assets/projects/card-piscineria.jpg';
import imgCinear from '../assets/projects/card-cinear.jpg';
import imgFranpa from '../assets/projects/card-franpa.jpg';
import imgOrrisk from '../assets/projects/card-orrisk.jpg';
import imgEsigsa from '../assets/projects/card-esigsa.jpg';
import imgTripan from '../assets/projects/card-tripan.jpg';
import imgSantillana from '../assets/projects/card-santillana.jpg';
import imgPortfolio from '../assets/projects/card-portfolio.jpg';
import imgVeggy from '../assets/projects/card-veggy.jpg';
import imgRacing from '../assets/projects/card-racing-patagonia.jpg';
import imgPubliflex from '../assets/projects/card-publiflex.jpg';

/** Case studies with their own page, in "next project" order. */
export const cases: CaseStudy[] = [sumun, jodify, cinear, santillana, veggy];

/** Spanish version of each case, by slug. */
export const casesEs: Record<string, CaseStudy> = es;

/** Home grid, in the order of the Figma design. Cards with `hidden: true` are not shown. */
export const projects: ProjectCard[] = [
  {
    slug: 'sumun',
    name: 'SUMUN by Santillana',
    kind: 'AI Educational Platform',
    description:
      'Design of the website for SUMUN, an educational proposal powered by AI and real-time data, built to explain its three pillars to school leaders, teachers and families.',
    es: {
      kind: 'Plataforma educativa con IA',
      description:
        'Diseño del sitio web de SUMUN, una propuesta educativa impulsada por IA y datos en tiempo real, pensado para explicar sus tres pilares a directivos, docentes y familias.',
    },
    image: imgSumun,
    caseSlug: 'sumun',
    links: [{ label: 'visit website', href: 'https://sumunlatam.com' }],
  },
  {
    slug: 'jodify',
    name: 'Jodify',
    kind: 'App for music events & ticket sale',
    description:
      'Design and launch of a native mobile application to help electronic music fans discover and connect with local music events in Latin America.',
    es: {
      kind: 'App de eventos de música y venta de entradas',
      description:
        'Diseño y lanzamiento de una app mobile nativa para que fans de la música electrónica descubran eventos locales en Latinoamérica y se conecten con ellos.',
    },
    image: imgJodify,
    caseSlug: 'jodify',
    links: [
      { label: 'app store', href: 'https://apps.apple.com/ar/app/jodify/id6618110536' },
      { label: 'google play', href: 'https://play.google.com/store/apps/details?id=com.markajodi.jodifyapp&pli=1' },
    ],
  },
  {
    slug: 'lar',
    name: 'LAR by Greystar',
    kind: 'Rental Housing B2C',
    description:
      'Led the redesign of the LAR Group website, rethinking its structure, visual identity and key flows (district search, community highlights, rental requirements and FAQs) to make finding and renting a home simpler.',
    es: {
      kind: 'Alquiler de viviendas B2C',
      description:
        'Lideré el rediseño del sitio de LAR Group: repensé su estructura, identidad visual y flujos clave (búsqueda por distrito, comunidades destacadas, requisitos de alquiler y preguntas frecuentes) para que encontrar y alquilar un hogar sea más simple.',
    },
    image: imgLar,
    links: [{ label: 'visit website', href: 'https://largroup.cl' }],
  },
  {
    slug: 'piscineria',
    name: 'Piscinería',
    kind: 'E-commerce',
    description:
      'Design of the e-commerce website for Piscinería, a pool and spa company with more than 60 years in the market.',
    es: {
      kind: 'E-commerce',
      description:
        'Diseño del e-commerce de Piscinería, una empresa de piscinas y spas con más de 60 años en el mercado.',
    },
    image: imgPiscineria,
    links: [{ label: 'visit website', href: 'https://piscineria.com' }],
    hidden: true, // site not published yet
  },
  {
    slug: 'cinear',
    name: 'Cine.AR',
    kind: 'Streaming Service',
    description:
      'A complete web redesign for Cine.AR, an Argentinian-focused free streaming service, enhancing user experience and showcasing local cinema.',
    es: {
      kind: 'Servicio de streaming',
      description:
        'Un rediseño web completo para Cine.AR, el servicio de streaming gratuito de cine argentino, para mejorar la experiencia de usuario y poner en valor el cine local.',
    },
    image: imgCinear,
    caseSlug: 'cinear',
    links: [],
  },
  {
    slug: 'franpa',
    name: 'Franpa Mining Solutions',
    kind: 'Corporate Website',
    // TODO (Kiara): review — the Figma card repeats the Piscinería text.
    description:
      'Corporate website for Franpa, a company that connects the mining sector with a global network of suppliers of components and spare parts for heavy machinery.',
    es: {
      kind: 'Sitio corporativo',
      description:
        'Sitio corporativo de Franpa, una empresa que conecta al sector minero con una red global de proveedores de componentes y repuestos para maquinaria pesada.',
    },
    image: imgFranpa,
    links: [{ label: 'visit website', href: 'https://franpamining.com' }],
  },
  {
    slug: 'orrisk',
    name: 'Orrisk',
    kind: 'Corporate Website',
    // TODO (Kiara): review — the Figma card repeats the Piscinería text.
    description:
      'Corporate website for Orrisk, a Chilean energy management consultancy with more than 30 years helping companies understand and optimize their operation in the electricity market.',
    es: {
      kind: 'Sitio corporativo',
      description:
        'Sitio corporativo de Orrisk, una consultora chilena de gestión energética con más de 30 años ayudando a empresas a entender y optimizar su operación en el mercado eléctrico.',
    },
    image: imgOrrisk,
    links: [{ label: 'visit website', href: 'https://orrisk.cl' }],
  },
  {
    slug: 'esigsa',
    name: 'Esigsa',
    kind: 'Corporate Website',
    // TODO (Kiara): review — the Figma card repeats the Cine.AR text.
    description:
      'Corporate website for Esigsa, a manufacturer and integrator of low and medium voltage electrical equipment built to international standards.',
    es: {
      kind: 'Sitio corporativo',
      description:
        'Sitio corporativo de Esigsa, fabricante e integrador de equipos eléctricos de baja y media tensión con estándares internacionales.',
    },
    image: imgEsigsa,
    links: [{ label: 'visit website', href: 'https://esigsa.cl' }],
  },
  {
    slug: 'tripan',
    name: 'Tripan',
    kind: 'Corporate Website',
    // TODO (Kiara): review — the Figma card repeats the Cine.AR text.
    description:
      'Corporate website for Tripan, a forestry company with more than 40 years of experience in sustainable forests and silviculture services.',
    es: {
      kind: 'Sitio corporativo',
      description:
        'Sitio corporativo de Tripan, una empresa forestal con más de 40 años de experiencia en bosques sustentables y servicios de silvicultura.',
    },
    image: imgTripan,
    links: [{ label: 'visit website', href: '#' }],
    hidden: true, // site not published yet
  },
  {
    slug: 'santillana',
    name: 'Santillana',
    kind: 'Campaign for Teachers Day',
    description:
      'Campaign site for Teacher’s Day in Colombia: every teacher who registers lights up a point on the map of the country. 290 teachers joined, against a goal of 80–100.',
    es: {
      kind: 'Campaña por el Día del Maestro',
      description:
        'Sitio de campaña por el Día del Maestro en Colombia: cada docente que se registra ilumina un punto en el mapa del país. Se sumaron 290 docentes, frente a una meta de 80–100.',
    },
    image: imgSantillana,
    caseSlug: 'santillana',
    links: [{ label: 'visit website', href: 'https://dia-del-maestro.santillana.com.co/' }],
  },
  {
    slug: 'portfolio',
    name: 'This Portfolio!',
    kind: 'Astro Web Design',
    description:
      'Design and build of this portfolio: a fast, lightweight Astro site with an interactive Figma-style animation to showcase my work and how I use AI.',
    es: {
      kind: 'Diseño web en Astro',
      description:
        'Diseño y desarrollo de este portafolio: un sitio en Astro rápido y liviano, con una animación interactiva estilo Figma para mostrar mi trabajo y cómo uso la IA.',
    },
    image: imgPortfolio,
    links: [{ label: 'explore github', href: site.links.github }],
  },
  {
    slug: 'veggy',
    name: 'Veggy',
    kind: 'Guide for local food places',
    description:
      'A comprehensive UX/UI case study for a mobile app that helps users discover local restaurants with vegan options, making plant-based dining accessible.',
    es: {
      kind: 'Guía de lugares para comer',
      description:
        'Un caso de estudio UX/UI completo de una app mobile que ayuda a descubrir restaurantes locales con opciones veganas, para que comer a base de plantas sea accesible.',
    },
    image: imgVeggy,
    caseSlug: 'veggy',
    links: [],
  },
  {
    slug: 'racing-patagonia',
    name: 'Racing Patagonia',
    kind: 'Event & Ticket Management',
    description:
      'Design of the websites for Racing Patagonia, organizer of international races in Chilean Patagonia like Patagonian International Marathon and Ultra Paine, focused on race info and registration.',
    es: {
      kind: 'Gestión de eventos y venta de entradas',
      description:
        'Diseño de los sitios web de Racing Patagonia, organizadora de carreras internacionales en la Patagonia chilena como Patagonian International Marathon y Ultra Paine, enfocados en la información de las carreras y la inscripción.',
    },
    image: imgRacing, // TODO: placeholder — replace card-racing-patagonia.jpg with the Figma image
    links: [{ label: 'visit website', href: '#' }],
    hidden: true, // site not published yet
  },
  {
    slug: 'publiflex',
    name: 'Publiflex',
    kind: 'Corporate Website',
    description:
      'Design of the corporate website for Publiflex, a Chilean manufacturer of custom printed packaging tapes, presenting its product line and printing services to businesses.',
    es: {
      kind: 'Sitio corporativo',
      description:
        'Diseño del sitio corporativo de Publiflex, fabricante chilena de cintas de embalaje impresas a medida, que presenta su línea de productos y servicios de impresión a empresas.',
    },
    image: imgPubliflex, // TODO: placeholder — replace card-publiflex.jpg with the Figma image
    links: [{ label: 'visit website', href: '#' }],
    hidden: true, // site not published yet
  },
];
