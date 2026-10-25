import type { CaseStudy } from '../../types';
import { jodify as en } from '../jodify';
import designSystem from '../../../assets/projects/jodify-design-system.jpg';
import finalScreens from '../../../assets/projects/jodify-final.jpg';

export const jodify: CaseStudy = {
  ...en,
  tags: ['iOS', 'Android', 'App móvil', 'Entretenimiento'],
  summary:
    'Una app nativa para que fans de la música electrónica descubran eventos locales en Latinoamérica y se conecten con ellos.',
  links: [
    { label: 'app store  →', href: en.links[0].href },
    { label: 'google play  →', href: en.links[1].href },
    { label: 'ver sitio web', href: en.links[2].href },
    { label: 'ver en behance', href: en.links[3].href },
  ],
  meta: [
    { label: 'Rol', value: 'Diseñadora UX/UI' },
    { label: 'Período', value: 'Feb 2024 – Sep 2026' },
    { label: 'Herramientas', value: 'Figma, sistemas de diseño' },
    { label: 'Plataformas', value: 'iOS, Android' },
  ],
  hero: { ...en.hero, alt: 'Pantalla de inicio de JODIFY en un iPhone, junto a los badges de App Store y Google Play' },
  stats: [
    { value: '100%', label: 'De éxito en las tareas del test de usabilidad (5 de 5 usuarios)' },
    { value: '~40 s', label: 'Para encontrar un evento relevante, frente a 3–5 min de scroll infinito en Instagram o Google' },
    { value: '1ra', label: 'Plataforma que centraliza eventos de música electrónica en Latinoamérica' },
  ],
  sections: [
    {
      id: 'overview',
      kicker: 'contexto',
      nav: 'Resumen',
      title: 'Resumen',
      blocks: [
        {
          type: 'columns',
          items: [
            {
              title: '¿Qué es JODIFY?',
              body: 'JODIFY centraliza los eventos de música electrónica cerca tuyo. Plataformas como RA, DICE y Shotgun no operan en Latinoamérica, así que el público no tenía un lugar específico para descubrir eventos.',
            },
            {
              title: 'El desafío',
              body: 'JODIFY solo existía como web app. El proyecto la adaptó y rediseñó para cumplir los requisitos de App Store y Google Play, con razones claras para elegir la app nativa por sobre la web.',
            },
            {
              title: 'El problema',
              body: 'La música electrónica vive su mejor momento en Latinoamérica, con el mayor crecimiento de ingresos del mundo en 2024. Aun así, encontrar eventos específicos, sobre todo de subgéneros, implica buscar entre Instagram y Google.',
            },
          ],
        },
      ],
    },
    {
      id: 'research',
      kicker: '01',
      nav: 'Investigación',
      title: 'Investigación',
      blocks: [
        {
          type: 'lead',
          text: 'Varias personas guiaron el proyecto, pero “Martina” fue la base para las nuevas funcionalidades y las decisiones de diseño.',
        },
        {
          type: 'persona',
          persona: {
            name: 'Martina',
            meta: '26  ·  Estudiante universitaria  ·  Buen manejo tecnológico',
            bio: 'Una estudiante que hace poco empezó a ir a fiestas de música electrónica. Solo puede salir una o dos veces por mes, así que investiga y pide recomendaciones a sus amigos para aprovechar cada noche.',
            groups: [
              {
                label: 'Motivaciones',
                items: [
                  'Fiestas que coincidan con su gusto musical',
                  'Aprovechar al máximo su poco tiempo libre',
                  'Descubrir nuevos subgéneros y artistas',
                ],
              },
              {
                label: 'Frustraciones',
                items: [
                  'Es difícil encontrar fiestas en Instagram o Google',
                  'Eventos lejanos que requieren transporte extra',
                  'Scroll infinito sin filtros claros',
                ],
              },
            ],
          },
        },
      ],
    },
    {
      id: 'objectives',
      kicker: '02',
      nav: 'Objetivos',
      title: 'Objetivos',
      blocks: [
        {
          type: 'cards',
          cols: 2,
          items: [
            { title: 'Objetivo principal', body: 'Adaptar la web app existente a los requisitos de App Store y Google Play.' },
            {
              title: 'Objetivo secundario',
              body: 'Darle a los usuarios razones de peso para descargar la app nativa: una experiencia rápida, centralizada y basada en la ubicación.',
            },
          ],
        },
        { type: 'subhead', text: 'Necesidades clave de los usuarios' },
        {
          type: 'cards',
          cols: 4,
          items: [
            { title: 'Velocidad', body: 'Encontrar eventos relevantes sin scroll infinito.' },
            { title: 'Filtros', body: 'Por género, subgénero, ubicación y fecha.' },
            { title: 'Ubicación clara', body: 'El barrio visible de un vistazo.' },
            { title: 'Funciones nativas', body: 'Notificaciones y servicios de ubicación.' },
          ],
        },
      ],
    },
    {
      id: 'design-system',
      kicker: '03',
      nav: 'Sistema de diseño',
      title: 'Sistema de diseño',
      blocks: [
        {
          type: 'lead',
          text: 'Se analizó la web app anterior y se la dividió en cuatro componentes. Después, un nuevo sistema de diseño mantuvo la coherencia entre iOS y Android.',
        },
        { type: 'chips', items: ['Branding', 'Búsqueda y filtros', 'Fechas', 'Eventos'] },
        {
          type: 'cards',
          cols: 2,
          items: [
            { title: 'Roboto Condensed', body: 'Títulos y énfasis' },
            { title: 'Work Sans', body: 'Texto y elementos de interfaz' },
          ],
        },
        {
          type: 'text',
          text: 'Componentes: botones y tabs, cards de eventos con etiquetas de ubicación, etiquetas de filtro, carrusel destacado, campos de texto, avatares, notificaciones e íconos de navegación y acción.',
        },
        {
          type: 'image',
          src: designSystem,
          alt: 'Sistema de diseño de JODIFY: botones, tabs, íconos, menús, campos de texto, cards de eventos, avatares, etiquetas y carrusel',
        },
      ],
    },
    {
      id: 'testing',
      kicker: '04',
      nav: 'Testeo',
      title: 'Testeo',
      blocks: [
        { type: 'lead', text: 'Test de usabilidad moderado con 5 participantes que coincidían con el perfil de Martina.' },
        {
          type: 'quote',
          text: '“Es martes y querés planear tu fin de semana. Tenés ganas de ir a una fiesta de ‘Techno’ el sábado, pero no tenés auto y querés encontrar algo en tu zona.”',
        },
        {
          type: 'cards',
          cols: 2,
          items: [
            {
              title: 'Tarea 1: encontrar un evento de “Techno” para este sábado',
              body: 'Evalúa la nueva búsqueda, los filtros y las etiquetas. Resultado: 100% de éxito, todos usaron los filtros para encontrar un evento relevante.',
            },
            {
              title: 'Tarea 2: encontrar un evento en “Palermo”',
              body: 'Evalúa si las cards muestran la información clave con claridad. Resultado: 100% de éxito, todos leyeron la ubicación desde la card sin abrir el detalle.',
            },
          ],
        },
        {
          type: 'statement',
          text: 'Los usuarios encontraron un evento relevante en unos 40 segundos en promedio, frente a 3–5 minutos de scroll infinito en Instagram o Google.',
        },
        {
          type: 'cards',
          cols: 2,
          items: [
            {
              title: '“Es exactamente lo que necesito. Ver el subgénero y el barrio en la card me ahorra muchísimo tiempo.”',
              body: 'Feedback de participante',
            },
            {
              title: '“Sin dudas la descargaría en lugar de usar la web. Se siente más rápida.”',
              body: 'Feedback de participante',
            },
          ],
        },
      ],
    },
    {
      id: 'final-solution',
      kicker: '05',
      nav: 'Solución final',
      title: 'Solución final',
      blocks: [
        {
          type: 'lead',
          text: 'La app nativa de JODIFY para iOS y Android: navegación inferior (Inicio, Buscar, Perfil), un carrusel de eventos destacado y una lista de eventos limpia y filtrable, todo unificado por el nuevo sistema de diseño y listo para el lanzamiento.',
        },
        {
          type: 'cards',
          cols: 2,
          items: [
            { title: 'Filtros inteligentes', body: 'Filtros por género, subgénero, fecha y ubicación para encontrar exactamente lo que se busca.' },
            { title: 'Etiquetas de ubicación', body: 'Etiquetas de barrio en cada card que responden a la preocupación por el transporte.' },
            { title: 'Carrusel destacado', body: 'Eventos destacados y recomendaciones al principio del feed.' },
            { title: 'Experiencia nativa', body: 'Rendimiento rápido, notificaciones push e integración con iOS y Android.' },
          ],
        },
        {
          type: 'image',
          src: finalScreens,
          alt: 'Pantallas finales de JODIFY: detalle de evento, feed de inicio, perfil de artista y notificaciones',
        },
      ],
    },
  ],
};
