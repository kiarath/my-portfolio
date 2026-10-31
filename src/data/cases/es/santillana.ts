import type { CaseStudy } from '../../types';
import { santillana as en } from '../santillana';
import map1 from '../../../assets/projects/santillana-map-1.jpg';
import map2 from '../../../assets/projects/santillana-map-2.jpg';
import mobile1 from '../../../assets/projects/santillana-mobile-1.jpg';
import mobile2 from '../../../assets/projects/santillana-mobile-2.jpg';
import mobile3 from '../../../assets/projects/santillana-mobile-3.jpg';
import firstImpression from '../../../assets/projects/santillana-first-impression.jpg';
import step1 from '../../../assets/projects/santillana-step-1.jpg';
import step2 from '../../../assets/projects/santillana-step-2.jpg';

const live = en.links[0].href;

export const santillana: CaseStudy = {
  ...en,
  tags: ['Web', 'Mobile-first', 'Campaña'],
  summary:
    'Un sitio de campaña para Santillana Colombia donde cada docente que se registra ilumina un punto en el mapa del país y participa del sorteo de becas.',
  links: [{ label: 'ver sitio en vivo  →', href: live }],
  meta: [
    { label: 'Rol', value: 'Diseñadora UX/UI' },
    { label: 'Período', value: '2 semanas' },
    { label: 'Equipo', value: 'Marketing y Desarrollo' },
    { label: 'Plataformas', value: 'Web, responsive' },
  ],
  hero: { ...en.hero, alt: 'Sitio Día del Maestro en escritorio y mobile: hero con docentes y el mapa de Colombia' },
  stats: [
    { value: '290', label: 'Docentes registrados, de todos los rincones del país' },
    { value: '2.5×', label: 'La meta estimada de 80–100 docentes, más que duplicada' },
    { value: '2', label: 'Semanas desde el brief hasta el lanzamiento, con diseño y desarrollo en paralelo' },
  ],
  sections: [
    {
      id: 'context',
      kicker: '01',
      nav: 'Contexto',
      title: 'Contexto',
      blocks: [
        {
          type: 'cards',
          cols: 2,
          items: [
            {
              icon: 'context',
              title: 'Contexto',
              body: 'Santillana Colombia quería celebrar el Día del Maestro con un sitio donde cada docente que se registra ilumina un punto en el mapa, deja un mensaje público y participa del sorteo de becas de Maestría UNIR (100% y 70%) y una canasta de libros.',
            },
            {
              icon: 'problem',
              title: 'El desafío',
              body: 'Con muchos registros, los puntos se iban a amontonar y el mapa se volvería ilegible. La mayoría de los docentes llegaría desde el celular, pero la idea se había pensado para escritorio. Y el mapa tenía que ser protagonista sin dejar de explicar la campaña.',
            },
            {
              icon: 'objective',
              title: 'Objetivo',
              body: 'Hacer visible a cada docente en todo el país, con un flujo lo bastante simple como para completarlo desde el celular.',
            },
            {
              icon: 'solution',
              title: 'Solución',
              body: 'Un mapa agrupado por departamento con zoom progresivo, un layout responsive mobile-first y un hero emotivo que lleva a un registro guiado en cuatro pasos.',
            },
          ],
        },
      ],
    },
    {
      id: 'constraints',
      kicker: '02',
      nav: 'Restricciones',
      title: 'Restricciones',
      blocks: [
        { type: 'lead', text: 'Dos semanas y un cliente con requisitos firmes definieron la mayoría de las decisiones.' },
        {
          type: 'cards',
          cols: 2,
          items: [
            {
              title: 'Mi rol',
              body: 'Diseñadora UX/UI, trabajando con marketing para mantener la estética de la campaña y con desarrollo para saber qué era viable.',
            },
            {
              title: 'Dos semanas',
              body: 'No había tiempo para un estudio formal. La investigación fue un test rápido con personas de la audiencia real.',
            },
            {
              title: 'Un formulario largo',
              body: 'Los directivos definieron el formulario de registro y no se podía acortar.',
            },
            {
              title: 'Compartir para desbloquear',
              body: 'Compartir en redes sociales antes de recibir la distinción era un requisito de la campaña.',
            },
          ],
        },
        {
          type: 'statement',
          text: 'Dentro de esos límites, compensé con progreso visible, transparencia sobre qué se hace público y ayudas para escribir.',
        },
      ],
    },
    {
      id: 'the-map',
      kicker: '03',
      nav: 'El mapa',
      title: 'El mapa',
      blocks: [
        {
          type: 'lead',
          text: 'La primera idea fue un punto por docente. No funcionaba: capitales como Bogotá iban a absorber casi todos los puntos mientras el resto del país se veía vacío, lo opuesto a una campaña sobre hacer visibles a los docentes de todas partes. Por eso el mapa funciona en dos niveles.',
        },
        { type: 'subhead', text: 'Navegación en dos niveles' },
        {
          type: 'flow',
          steps: [
            { label: 'Vista del país', tone: 'ink' },
            { label: 'Toca un departamento', tone: 'ink' },
            { label: 'Card con cantidad y mensajes', tone: 'ink' },
            { label: 'Explorar mapa', tone: 'coral' },
            { label: 'Puntos individuales', tone: 'ink' },
          ],
        },
        {
          type: 'cards',
          cols: 3,
          items: [
            {
              title: 'Nivel departamento',
              body: 'Cada departamento tiene su color y un punto luminoso que indica actividad. La vista general se mantiene equilibrada, en escritorio y en el celular.',
            },
            {
              title: 'La card',
              body: 'Al tocar un departamento se abre una card con la cantidad de docentes, avatares y mensajes, en orden de publicación.',
            },
            {
              title: 'Nivel zoom',
              body: '“Explorar mapa” acerca la vista y revela el punto individual de cada docente. Los puntos se separan y la vista no se satura.',
            },
          ],
        },
        {
          type: 'summary',
          title: 'Filtro por área',
          body: 'Santillana pidió un filtro por área de enseñanza, para que cada docente vea cuántos colegas trabajan en su campo. Vive como un selector discreto arriba a la izquierda, sin competir con el mapa.',
        },
        {
          type: 'gallery',
          cols: 2,
          images: [
            { src: map1, alt: 'Vista por departamento del mapa, con un punto luminoso por departamento' },
            { src: map2, alt: 'Card del departamento de Córdoba con la cantidad de docentes y sus mensajes' },
          ],
        },
      ],
    },
    {
      id: 'mobile',
      kicker: '04',
      nav: 'Mobile',
      title: 'Mobile',
      blocks: [
        {
          type: 'lead',
          text: 'La mayoría de los docentes iba a entrar desde el celular, pero la idea se había pensado para escritorio. Todo se rehízo para que fuera responsive, simple y cómodo de usar con el pulgar.',
        },
        {
          type: 'cards',
          cols: 3,
          items: [
            {
              title: 'Card',
              body: 'La card flotante pasa a ser una ventana flotante: el mapa sigue visible y el contenido queda al alcance del pulgar.',
            },
            { title: 'Mapa en pantalla completa', body: 'Un botón de pantalla completa le da espacio al mapa chico para explorarlo.' },
            {
              title: 'Recuadro de San Andrés',
              body: 'San Andrés y Providencia tiene su propio recuadro, así las islas siguen visibles y se pueden tocar.',
            },
            {
              title: 'Los puntos como objetivo',
              body: 'Los puntos son el elemento interactivo, así que los departamentos chicos y contiguos del centro del país no fueron un problema.',
            },
            {
              title: 'Una sola columna',
              body: 'El formulario se apila en una columna; las limitaciones de desarrollo descartaron dos columnas en mobile.',
            },
            {
              title: 'Hero rediseñado',
              body: 'Cinco personas pasan a ser tres, y el texto de introducción sale de la card de vidrio y crece, para leerse de un vistazo.',
            },
          ],
        },
        {
          type: 'gallery',
          cols: 3,
          images: [
            { src: mobile1, alt: 'Hero en mobile con tres docentes y el título de la campaña' },
            { src: mobile2, alt: 'Mapa en mobile con el recuadro de San Andrés y el tip debajo' },
            { src: mobile3, alt: 'Ventana del departamento de Tolima en mobile con mensajes de docentes' },
          ],
        },
        { type: 'subhead', text: 'Test rápido con usuarios' },
        {
          type: 'text',
          text: 'Tres docentes de 40 a 65 años, la audiencia principal, lo probaron en sus celulares. Con dos semanas en total, fue un chequeo rápido y no un estudio formal. Su único punto de fricción: el mapa no se percibía como interactivo.',
        },
        {
          type: 'summary',
          title: 'La solución',
          body: 'Un tip breve debajo del mapa: “Toca los departamentos para ver más docentes”. El mapa era el único punto de fricción en mobile, y el tip lo resolvió.',
        },
      ],
    },
    {
      id: 'first-impression',
      kicker: '05',
      nav: 'Primera impresión',
      title: 'Primera impresión',
      blocks: [
        {
          type: 'lead',
          text: 'El mapa tenía que ser el protagonista, pero los visitantes también necesitaban entender qué estaba pasando. Primero se abre el hero y el mapa asoma justo debajo de su borde curvo, invitando a scrollear.',
        },
        {
          type: 'cards',
          cols: 2,
          items: [
            {
              title: 'Emoción antes que acción',
              body: 'Un docente que llega el Día del Maestro primero tiene que sentirse celebrado, y recién después recibir un pedido. Por eso el botón va después de la introducción, no arriba.',
            },
            {
              title: 'Dos caminos',
              body: 'El botón rosa lleva a quienes vienen a registrarse; el scroll deja que el resto explore primero el mapa.',
            },
            {
              title: 'Vidrio más esmerilado',
              body: 'Las cards mantienen el lenguaje de vidrio de Santillana, con más opacidad de esmerilado para que el texto se lea bien sobre una foto cargada.',
            },
            {
              title: 'Prueba social',
              body: 'Un contador con avatares muestra cuántos colegas ya se sumaron e invita a ser el próximo.',
            },
          ],
        },
        { type: 'image', src: firstImpression, alt: 'Hero de escritorio con cards de vidrio, el botón rosa y el mapa asomando debajo' },
      ],
    },
    {
      id: 'registration',
      kicker: '06',
      nav: 'Registro',
      title: 'Registro',
      blocks: [
        {
          type: 'lead',
          text: 'Un flujo guiado en cuatro pasos, con el progreso visible desde el inicio, para que un formulario largo se sienta manejable.',
        },
        { type: 'label', text: '01  Registro' },
        {
          type: 'text',
          text: '“Paso 1 de 4” y una barra de navegación muestran en qué punto está y qué recibe al final. El formulario es largo por decisión del cliente, así que un mensaje sugerido ayuda a quien no sabe qué escribir, y la foto es el único campo opcional.',
        },
        { type: 'image', src: step1, alt: 'Formulario de registro, paso 1 de 4' },
        { type: 'label', text: '02  Mi punto y compartir' },
        {
          type: 'text',
          text: 'Una vista previa de su mensaje y luego una invitación a compartir en redes, que desbloquea la distinción. Qué se hace público se explica en tres lugares: el contador de caracteres, la nota legal junto al botón y esta vista previa.',
        },
        { type: 'image', src: step2, alt: 'Paso 2: vista previa del mensaje y botones para compartir y desbloquear' },
        { type: 'label', text: '03  Celebración' },
        {
          type: 'text',
          text: 'El momento de celebración: ve su propio punto en el mapa y recibe su certificado de participación.',
        },
        { type: 'label', text: '04  Kit del Maestro' },
        { type: 'text', text: 'Una pantalla final con PDFs educativos.' },
      ],
    },
    {
      id: 'results',
      kicker: '07',
      nav: 'Resultados',
      title: 'Resultados',
      blocks: [
        { type: 'lead', text: 'La campaña estimaba entre 80 y 100 docentes. Llegó a 290.' },
        { type: 'subhead', text: 'Docentes registrados vs. meta estimada' },
        {
          type: 'bars',
          labelWidth: 260,
          items: [
            { label: 'Meta estimada', value: '80–100', ratio: 0.29, tone: 'muted' },
            { label: 'Docentes registrados', value: '290', ratio: 0.83, tone: 'ink' },
          ],
        },
        { type: 'statement', text: '290 docentes registrados, más de 2,5 veces la meta estimada.' },
        {
          type: 'summary',
          title: 'Conclusión',
          body: 'Santillana quedó conforme con el resultado y calificó los números como superiores a lo esperado. Trabajando dentro de restricciones reales (un formulario largo, un paso de compartir para desbloquear, un formulario de una sola columna en mobile), la experiencia funcionó gracias al progreso visible, la comunicación honesta sobre qué se hace público y un mapa legible a cualquier escala. Un test rápido con tres personas de la audiencia real alcanzó para encontrar, y resolver, la única fricción seria en mobile.',
        },
      ],
    },
  ],
  closing: { label: 'ver sitio en vivo  →', href: live },
};
