import type { CaseStudy } from '../../types';
import { veggy as en } from '../veggy';
import dendrogram from '../../../assets/projects/veggy-dendrogram.jpg';
import wfHand from '../../../assets/projects/veggy-wf-hand.jpg';
import wfLow from '../../../assets/projects/veggy-wf-low.jpg';
import wfMid from '../../../assets/projects/veggy-wf-mid.jpg';
import wfHigh from '../../../assets/projects/veggy-wf-high.jpg';
import iteration from '../../../assets/projects/veggy-iteration.jpg';
import ilNadiaVeggy from '../../../assets/personas/nadia-veggy.svg?raw';

export const veggy: CaseStudy = {
  ...en,
  tags: ['Mobile', 'Gastronomía', 'Investigación'],
  summary:
    'Un caso de estudio UX/UI de una app mobile que encuentra restaurantes cercanos con opciones veganas, reseñados por gente que come vegetariano o vegano.',
  links: [{ label: 'ver en behance  →', href: en.links[0].href }],
  meta: [
    { label: 'Rol', value: 'Diseñadora UX/UI e investigadora' },
    { label: 'Período', value: '2023' },
    { label: 'Herramientas', value: 'Figma, investigación con usuarios' },
    { label: 'Plataformas', value: 'Mobile' },
  ],
  hero: { ...en.hero, alt: 'App Veggy: detalle de restaurante y mapa en dos celulares' },
  stats: [
    { value: '95%', label: 'De los usuarios encontró fácil buscar un restaurante en el primer test de usabilidad' },
    { value: '15%', label: 'De los usuarios tuvo dificultades en el segundo test, frente al 35% antes de los cambios de diseño' },
    { value: '2', label: 'Rondas de test de usabilidad, cada una seguida de iteraciones de diseño' },
  ],
  sections: [
    {
      id: 'strategy',
      kicker: '01',
      nav: 'Estrategia',
      title: 'Estrategia',
      blocks: [
        {
          type: 'cards',
          cols: 2,
          items: [
            {
              icon: 'context',
              title: 'Contexto',
              body: 'Cada vez más personas son vegetarianas o veganas, y los restaurantes suman más opciones veggie a sus menús.',
            },
            {
              icon: 'problem',
              title: 'El problema',
              body: 'Muchas de esas opciones existen solo para cubrir la demanda y aparecen como “veggie” en Google Maps o Tripadvisor. Las reseñas suelen venir de personas que no comen vegetariano, así que es difícil encontrar buenos lugares.',
            },
            {
              icon: 'objective',
              title: 'Objetivo',
              body: 'Ayudar a encontrar restaurantes y opciones vegetarianas cerca, con información confiable sobre cada lugar.',
            },
            {
              icon: 'solution',
              title: 'Solución',
              body: 'Usar la geolocalización para mostrar los lugares veggie-friendly más cercanos, con reseñas escritas solo por miembros de la comunidad veggie.',
            },
          ],
        },
      ],
    },
    {
      id: 'research',
      kicker: '02',
      nav: 'Investigación',
      title: 'Investigación',
      blocks: [
        {
          type: 'persona',
          persona: {
            name: 'Nadia',
            illustration: ilNadiaVeggy,
            meta: '26  ·  Programadora  ·  Quiere descubrir restaurantes nuevos',
            quote:
              '“Cuando probamos lugares nuevos, la oferta vegana del menú suele ser limitada y poco variada, así que terminamos yendo siempre a los mismos restaurantes.”',
            bio: 'Trabaja desde casa y disfruta salir a comer con su pareja para cortar la rutina, pero las malas experiencias con opciones veganas escasas y de baja calidad los frenan.',
            groups: [
              {
                label: 'Objetivos',
                items: ['Descubrir nuevos sabores y comidas', 'Salir más de casa', 'Encontrar lugares nuevos para ir con su pareja'],
              },
              { label: 'Motivaciones', items: ['Descubrir nuevos sabores', 'Pasar buenos momentos con su pareja'] },
              {
                label: 'Frustraciones',
                items: [
                  'Casi nunca encuentra información sobre platos veganos específicos',
                  'No confía en reseñas de usuarios no veganos',
                  'Teme llevar a su pareja a un mal restaurante',
                ],
              },
            ],
          },
        },
      ],
    },
    {
      id: 'scope',
      kicker: '03',
      nav: 'Alcance',
      title: 'Alcance: MVP',
      blocks: [
        {
          type: 'lead',
          text: 'Para Nadia, definí cuatro funciones centrales para el producto mínimo viable.',
        },
        {
          type: 'cards',
          cols: 2,
          items: [
            {
              icon: 'pin',
              title: 'Encontrar restaurantes',
              body: 'Lugares veggie-friendly apenas se abre la app, ordenados por distancia, en un mapa con una lista debajo.',
            },
            {
              icon: 'search',
              title: 'Buscar',
              body: 'Una barra de búsqueda por cocina (mexicana, japonesa…) o platos específicos (empanadas, sushi, pizza).',
            },
            {
              icon: 'star',
              title: 'Leer reseñas',
              body: 'Reseñas de usuarios veggie verificados, puntuación con estrellas para lugares y platos, etiquetas vegano/vegetariano y votos de utilidad.',
            },
            {
              icon: 'pencil',
              title: 'Escribir reseñas',
              body: 'Puntuar el lugar, el plato y la experiencia, marcar el plato como vegano o vegetariano y subir fotos.',
            },
          ],
        },
      ],
    },
    {
      id: 'structure',
      kicker: '04',
      nav: 'Estructura',
      title: 'Estructura',
      blocks: [
        {
          type: 'lead',
          text: 'Un dendrograma mostró cómo agrupan la información los usuarios y reveló cinco categorías principales.',
        },
        { type: 'chips', items: ['Buscar / Inicio', 'Inicio / Menú', 'Buscador de restaurantes / Mapa', 'Inicio / Restaurantes', 'Mi perfil'] },
        { type: 'image', src: dendrogram, alt: 'Dendrograma del card sorting, que agrupa las funciones en cinco categorías' },
        { type: 'subhead', text: 'Arquitectura de información' },
        {
          type: 'sitemap',
          root: 'Inicio',
          children: [
            { label: 'Explorar', sub: ['Recomendaciones', 'Filtros', 'Lugares nuevos'] },
            { label: 'Buscar' },
            { label: 'Favoritos' },
            { label: 'Mi perfil', sub: ['Ajustes', 'Datos personales', 'Mis reseñas', 'Lugares favoritos'] },
            { label: 'Mapa', sub: ['Info del restaurante', 'Lista de restaurantes'] },
          ],
        },
        { type: 'subhead', text: 'User flow' },
        {
          type: 'flow',
          steps: [
            { label: 'Abre la app', tone: 'ink' },
            { label: 'Inicia sesión', tone: 'ink' },
            { label: 'Explora', tone: 'ink' },
            { label: 'Elige un restaurante', tone: 'ink' },
            { label: 'Lee reseñas veggie', tone: 'coral' },
            { label: 'Va al restaurante', tone: 'ink' },
            { label: 'Escribe una reseña', tone: 'ink' },
          ],
        },
      ],
    },
    {
      id: 'design',
      kicker: '05',
      nav: 'Diseño',
      title: 'Diseño',
      blocks: [
        {
          type: 'lead',
          text: 'Llevé la estructura a pantallas, desde bocetos a mano hasta la alta fidelidad.',
        },
        { type: 'label', text: '01  Wireframes a mano' },
        {
          type: 'text',
          text: 'Bocetos de las cinco pantallas principales: Inicio, Explorar, Restaurante, Cómo llegar y Escribir reseña.',
        },
        { type: 'image', src: wfHand, alt: 'Wireframes a mano de las cinco pantallas principales' },
        { type: 'label', text: '02  Baja fidelidad' },
        { type: 'text', text: 'Versiones digitales que definen el layout básico y la ubicación de los componentes.' },
        { type: 'image', src: wfLow, alt: 'Wireframes de baja fidelidad' },
        { type: 'label', text: '03  Media fidelidad' },
        {
          type: 'text',
          text: 'Patrones estándar, imágenes en escala de grises y el set de íconos: una versión funcional, pero sin estilo.',
        },
        { type: 'image', src: wfMid, alt: 'Pantallas de media fidelidad en escala de grises' },
        { type: 'label', text: '04  Alta fidelidad' },
        { type: 'text', text: 'El UI kit final: color, tipografía y componentes pulidos.' },
        { type: 'image', src: wfHigh, alt: 'Pantallas de alta fidelidad con el UI kit verde de Veggy' },
      ],
    },
    {
      id: 'validation',
      kicker: '06',
      nav: 'Validación',
      title: 'Validación',
      blocks: [
        {
          type: 'lead',
          text: 'Los usuarios probaron el prototipo de media fidelidad para analizar sus recorridos, encontrar inconsistencias y detectar dificultades en el flujo.',
        },
        {
          type: 'cards',
          cols: 2,
          items: [
            { title: '¿Pudiste encontrar lo que buscabas?' },
            { title: '¿Tuviste alguna dificultad?' },
            { title: '¿Qué tan simple fue usar la app?' },
            { title: '¿Qué tan simple fue encontrar un restaurante?' },
          ],
        },
        { type: 'subhead', text: 'Primer test de usabilidad' },
        {
          type: 'bars',
          labelWidth: 260,
          items: [
            { label: 'Le resultó simple encontrar un restaurante', value: '95%', ratio: 0.83, tone: 'ink' },
            { label: 'Encontró lo que buscaba', value: '65%', ratio: 0.57, tone: 'muted' },
            { label: 'Le resultó fácil usar la app', value: '65%', ratio: 0.57, tone: 'muted' },
            { label: 'Tuvo alguna dificultad', value: '35%', ratio: 0.31, tone: 'coral' },
          ],
        },
        {
          type: 'text',
          text: 'El flujo principal funcionó, lo que validó la arquitectura de Explorar y Mapa. Las funciones secundarias y la navegación general fueron menos intuitivas, así que el siguiente paso fue aclarar Mi perfil y hacer más visibles la búsqueda y los filtros.',
        },
      ],
    },
    {
      id: 'iteration',
      kicker: '07',
      nav: 'Iteración',
      title: 'Iteración',
      blocks: [
        { type: 'lead', text: 'Cambios aplicados después de la primera ronda de feedback:' },
        {
          type: 'cards',
          cols: 3,
          items: [
            { title: 'Animaciones de onboarding', body: 'Animaciones cortas al abrir la app explican cómo usarla.' },
            { title: 'Más info del restaurante', body: 'Los usuarios 1, 2 y 5 extrañaron la dirección y el teléfono.' },
            { title: 'Filtros de reseñas', body: 'El usuario 4 quería filtrar las reseñas.' },
            {
              title: 'Reportar problemas',
              body: '“¿Y si la información está mal?” Se sumó una opción para reportar errores.',
            },
            {
              title: 'A pie o en auto',
              body: 'Los usuarios preguntaban qué indicaciones se mostraban, así que ahora están las dos.',
            },
            { title: 'Correcciones de UI', body: 'Formas más claras de salir de las reseñas y volver entre pantallas.' },
          ],
        },
        { type: 'image', src: iteration, alt: 'Pantallas de Veggy iteradas después del primer test de usabilidad' },
        { type: 'subhead', text: 'Segundo test de usabilidad' },
        {
          type: 'bars',
          labelWidth: 260,
          items: [
            { label: 'Tuvo alguna dificultad (1er test)', value: '35%', ratio: 0.31, tone: 'muted' },
            { label: 'Tuvo alguna dificultad (2do test)', value: '15%', ratio: 0.13, tone: 'ink' },
          ],
        },
        {
          type: 'statement',
          text: 'Los usuarios con dificultades bajaron del 35% al 15%: la fricción se redujo a menos de la mitad.',
        },
        {
          type: 'summary',
          title: 'Conclusión',
          body: 'El primer prototipo confirmó la idea central: al 95% le resultó simple encontrar un restaurante. Igual, que el núcleo funcionara no alcanzaba: los filtros de reseñas, los reportes de errores y las señales de UI más claras, todos salidos del feedback, son lo que hizo que la app diera confianza.',
        },
      ],
    },
  ],
  closing: { label: 'ver caso completo en behance  →', href: en.closing!.href },
};
