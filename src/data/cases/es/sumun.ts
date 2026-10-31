import type { CaseStudy } from '../../types';
import { sumun as en } from '../sumun';
import siteHome from '../../../assets/projects/sumun-site.jpg';

export const sumun: CaseStudy = {
  ...en,
  tags: ['Web', 'Responsive', 'EdTech', 'IA'],
  summary:
    'Sitio web de SUMUN by Santillana, una propuesta educativa impulsada por IA y datos en tiempo real, pensado para explicar sus tres pilares a directivos, docentes y familias.',
  links: [{ label: 'ver sitio  →', href: en.links[0].href }],
  meta: [
    { label: 'Rol', value: 'Diseñadora UX/UI' },
    { label: 'Período', value: '2026' },
    { label: 'Herramientas', value: 'Figma, diseño responsive' },
    { label: 'Plataformas', value: 'Web: escritorio y mobile' },
  ],
  hero: { ...en.hero, alt: 'Hero de la home de SUMUN: “Lideramos la nueva revolución educativa con IA y datos”' },
  stats: [
    { value: '3', label: 'Pilares: Cultura de Alto Desempeño, High Tech e Inteligencia Curricular' },
    { value: '4', label: 'Audiencias: directivos, docentes, familias y estudiantes' },
    { value: '2', label: 'Versiones responsive listas para desarrollo: escritorio (1440 px) y mobile (375 px)' },
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
              title: '¿Qué es SUMUN?',
              body: 'SUMUN combina inteligencia artificial, datos de aprendizaje y método pedagógico para ayudar a los colegios a lograr aprendizajes más profundos y medibles. Se apoya en tres pilares, más un Tutor IA disponible 24/7 y una biblioteca de recursos gratuitos.',
            },
            {
              title: 'El desafío de diseño',
              body: 'Los colegios enfrentan la IA generativa y la presión por medir el aprendizaje más allá de los exámenes. El sitio tenía que explicar una propuesta con varias capas de forma clara, generar confianza en quienes deciden y, aun así, sentirse humano para docentes y familias.',
            },
            {
              title: 'El problema',
              body: 'Varias audiencias e ideas abstractas, como macro y micro habilidades o inteligencia curricular. Sin una estructura clara, los visitantes no podían entender qué es SUMUN, qué cambia y adónde ir después.',
            },
          ],
        },
      ],
    },
    {
      id: 'audience',
      kicker: '01',
      nav: 'Audiencia',
      title: 'Audiencia',
      blocks: [
        {
          type: 'lead',
          text: 'El sitio le habla a cuatro audiencias que buscan cosas distintas. La jerarquía de contenido se diseñó en función de esas necesidades.',
        },
        {
          type: 'cards',
          cols: 2,
          items: [
            { title: 'Directivos', body: 'Necesitan evidencia para decidir: datos pedagógicos en tiempo real y resultados medibles.' },
            { title: 'Docentes', body: 'Buscan apoyo para planificar y evaluar, con contenidos y herramientas listos para usar.' },
            { title: 'Familias', body: 'Quieren ver el progreso de sus hijos y tener recursos para involucrarse.' },
            { title: 'Estudiantes', body: 'Reciben acompañamiento personalizado 24/7 que desarrolla hábitos, autonomía y pensamiento crítico.' },
          ],
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
            {
              title: 'Objetivo principal',
              body: 'Comunicar la propuesta de SUMUN de forma clara y coherente, desde la home hasta cada uno de sus tres pilares y el Tutor IA.',
            },
            {
              title: 'Objetivo secundario',
              body: 'Generar credibilidad e invitar a la acción: mostrar a las personas detrás de SUMUN, compartir voces expertas y recursos gratuitos, y llevar a los visitantes a probar la demo de IA.',
            },
          ],
        },
        { type: 'subhead', text: 'Lo que necesitaba el sitio' },
        {
          type: 'cards',
          cols: 4,
          items: [
            { title: 'Claridad', body: 'Explicar ideas complejas por capas: promesa, pilar, detalle.' },
            { title: 'Confianza', body: 'Personas reales, conversaciones con expertos y aliados en primer plano.' },
            { title: 'Navegación simple', body: 'Cada audiencia encuentra su contenido en pocos clics.' },
            { title: 'Responsive', body: 'Coherente en escritorio y en mobile, desde donde entran muchas familias.' },
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
          text: 'La navegación se organizó en cuatro áreas principales, cada una responde a una pregunta distinta del visitante.',
        },
        {
          type: 'cards',
          cols: 4,
          items: [
            { title: 'Visión del producto', body: 'Visión general, Cultura, High Tech, Inteligencia Curricular y Tutor IA.' },
            { title: 'Conversaciones Sumun', body: 'Voces expertas, artículos destacados y un blog con filtros.' },
            { title: 'Nosotros', body: 'Páginas del equipo, identidad (propósito, misión, valores) e impacto social.' },
            { title: 'Recursos y Noticias', body: 'Una biblioteca de recursos con buscador, noticias y la demo de IA.' },
          ],
        },
        {
          type: 'lead',
          text: 'Un lenguaje visual que combina la seriedad institucional con calidez: azul petróleo para la confianza, naranja para la energía, y formas 3D translúcidas tipo vidrio y cintas que hacen que la tecnología se sienta menos fría.',
        },
        {
          type: 'swatches',
          groups: [
            { label: 'Colores primarios', colors: ['#003D4C', '#0095CD'] },
            { label: 'Colores secundarios', colors: ['#F15A2E', '#FF6306', '#006678'] },
          ],
        },
        {
          type: 'cards',
          cols: 2,
          items: [
            { title: 'Manrope', body: 'Títulos, texto y la mayor parte de la interfaz' },
            { title: 'Figtree', body: 'Etiquetas de interfaz y detalles' },
          ],
        },
        {
          type: 'text',
          text: 'Componentes: barra de navegación con menús y botón de demo de IA, tabs de pilares, cards de beneficios con fragmentos de la interfaz del producto, bloques comparativos “Con / Sin SUMUN”, módulos de pasos numerados, cards de artículos con etiquetas de categoría y audiencia, cards de recursos con filtros y paginación, cards del equipo, carruseles y footer.',
        },
      ],
    },
    {
      id: 'iteration',
      kicker: '04',
      nav: 'Iteración',
      title: 'Iteración',
      blocks: [
        {
          type: 'lead',
          text: 'El diseño se refinó en rondas de revisión, documentadas en una página propia del archivo de Figma, y después se adaptó a mobile.',
        },
        {
          type: 'cards',
          cols: 2,
          items: [
            {
              title: 'Rondas de revisión',
              body: 'Se revisó y ajustó cada página, incluidas variantes como los filtros de recursos, la plantilla de artículo y el blog.',
            },
            {
              title: 'Adaptación a mobile',
              body: 'Los layouts de escritorio (1440 px) se repensaron para pantallas de 375 px: banners, pilares, carrusel del equipo, conversaciones, noticias e impacto social.',
            },
            {
              title: 'Páginas individuales del equipo',
              body: 'Cada integrante del liderazgo tuvo su página de detalle, reforzando el lado humano de la marca.',
            },
            {
              title: 'Sistema de imágenes',
              body: 'Una página dedicada define formatos estándar (chico, mediano, grande, ancho) para que la fotografía sea coherente en cards, banners y secciones.',
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
          text: 'Un sitio completo y responsive: una home que cuenta la historia, una visión general del sistema, una página por pilar, el Tutor IA, una biblioteca de recursos, el hub Conversaciones Sumun y las páginas de identidad, equipo e impacto social, todo con el mismo lenguaje visual.',
        },
        {
          type: 'cards',
          cols: 2,
          items: [
            {
              title: 'Relato por capas',
              body: 'Cada página suma un nivel de detalle y muestra el contraste “Con / Sin SUMUN”.',
            },
            {
              title: 'El producto en contexto',
              body: 'Los dashboards de progreso, las metas diarias y el chat del Tutor IA aparecen dentro de las páginas, así los visitantes ven el producto funcionando en lugar de leer una descripción.',
            },
            {
              title: 'Hub de conversaciones',
              body: 'Conversaciones Sumun presenta a sus expertos, un artículo destacado y una lista filtrable con etiquetas de categoría y audiencia.',
            },
            {
              title: 'Biblioteca de recursos',
              body: 'Búsqueda, filtros por tipo y audiencia, y paginación para explorar videos, informes y guías gratuitas.',
            },
          ],
        },
        { type: 'image', src: siteHome, alt: 'Home de SUMUN: hero, propuesta de valor y las cards de los tres pilares' },
        { type: 'subhead', text: 'Entregables' },
        {
          type: 'columns',
          items: [
            {
              title: 'Sistema de sitio completo',
              body: 'Home, visión general, pilares, Tutor IA, recursos, conversaciones, identidad, equipo e impacto social.',
            },
            { title: 'Diseño responsive', body: 'Versiones de escritorio (1440 px) y mobile (375 px) listas para desarrollo.' },
            {
              title: 'Lenguaje visual coherente',
              body: 'Componentes reutilizables y un sistema de imágenes que mantienen cada página alineada con la marca.',
            },
          ],
        },
      ],
    },
  ],
};
