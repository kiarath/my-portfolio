import type { CaseStudy } from '../../types';
import { cinear as en } from '../cinear';
import platform from '../../../assets/projects/cinear-platform.jpg';
import ilMartinaCinear from '../../../assets/personas/martina-cinear.svg?raw';
import ilCristinaCinear from '../../../assets/personas/cristina-cinear.svg?raw';

export const cinear: CaseStudy = {
  ...en,
  tags: ['Web', 'Entretenimiento', 'Streaming'],
  summary:
    'Un rediseño web para Cine.AR, el servicio gratuito de streaming de cine argentino, para que encontrar una película sea más rápido y el cine local gane protagonismo.',
  links: [{ label: 'ver en behance  →', href: en.links[0].href }],
  meta: [
    { label: 'Rol', value: 'Diseñadora UX/UI' },
    { label: 'Período', value: '2023' },
    { label: 'Herramientas', value: 'Figma' },
    { label: 'Plataformas', value: 'Web' },
  ],
  hero: { ...en.hero, alt: 'Home rediseñada de Cine.AR en una laptop' },
  stats: [
    { value: '95%', label: 'De éxito en el segundo tree test, frente al 35% con la estructura original' },
    { value: '100%', label: 'De los usuarios completó todas las tareas (elegir y alquilar una película) en el test moderado' },
    { value: '8/10', label: 'Usuarios describieron la plataforma original como “lenta” durante la investigación' },
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
              title: '¿Qué es CINE.AR PLAY?',
              body: 'Una plataforma de streaming gratuita centrada en contenido producido en Argentina: películas, series y documentales. Presentada originalmente como el “Netflix criollo”, ofrece miles de horas de contenido variado.',
            },
            {
              title: '¿Por qué un rediseño?',
              body: 'A pesar de la cantidad de contenido, a los usuarios les cuesta navegar y encontrar lo que buscan. El último rediseño fue en 2017, así que primero se investigó qué se podía mejorar.',
            },
            {
              title: 'El problema',
              body: 'El interés por el cine argentino crece, impulsado por premios internacionales. Pero en un mercado saturado, la web app quedó detrás de Netflix o Prime Video, y le costaba destacarse y atraer nuevos usuarios.',
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
        { type: 'lead', text: '10 usuarios argentinos, todos usuarios habituales de plataformas de streaming.' },
        { type: 'subhead', text: '¿Dónde miran cine argentino?' },
        {
          type: 'bars',
          labelWidth: 140,
          items: [
            { label: 'Netflix', value: '40%', ratio: 0.667, tone: 'ink' },
            { label: 'Prime Video', value: '30%', ratio: 0.5, tone: 'ink' },
            { label: 'Max', value: '20%', ratio: 0.333, tone: 'ink' },
            { label: 'MUBI', value: '10%', ratio: 0.167, tone: 'ink' },
            { label: 'Cine.AR', value: '0%', ratio: 0.006, tone: 'coral' },
          ],
        },
        { type: 'subhead', text: '¿Por qué las prefieren?' },
        {
          type: 'cards',
          cols: 2,
          items: [
            { title: '“Es muy fácil encontrar películas…”', body: 'Usuario de Prime Video' },
            { title: '“…encuentro las cosas más rápido.”', body: 'Usuario de Netflix' },
          ],
        },
        { type: 'subhead', text: 'Lo que mostró la investigación sobre la plataforma original' },
        {
          type: 'cards',
          cols: 3,
          items: [
            { big: '70%', title: '', body: 'conoció Cine.AR a través de la plataforma web' },
            { big: '8/10', title: '', body: 'describió la plataforma como “lenta”' },
            { big: '60%', title: '', body: 'considera que la interfaz es desordenada' },
            { big: '80%', title: '', body: 'considera limitadas las opciones del reproductor' },
            { big: '7/10', title: '', body: 'tuvo problemas por la lentitud de la página' },
          ],
        },
        { type: 'subhead', text: 'User personas' },
        {
          type: 'personas',
          items: [
            {
              name: 'Martina',
              illustration: ilMartinaCinear,
              meta: '28  ·  Diseñadora gráfica  ·  Buen nivel tecnológico',
              quote: '“Me encanta el cine argentino, vi muchas películas y me gustaría cambiar algunas cosas.”',
              groups: [
                { label: 'Objetivo', items: ['Inspirarse con películas locales; explorar su propia cultura.'] },
                { label: 'Motivación', items: ['Descubrir nuevas producciones locales a través del cine.'] },
                { label: 'Frustración', items: ['Tarda mucho en elegir; desconfía del volumen de contenido en pantalla.'] },
              ],
            },
            {
              name: 'Cristina',
              illustration: ilCristinaCinear,
              meta: '28  ·  Maestra de primaria  ·  Buen nivel tecnológico',
              quote: '“El cine es mi escape perfecto; me encanta encontrar películas desde la comodidad de mi casa.”',
              groups: [
                { label: 'Objetivo', items: ['Encontrar una plataforma con mucha variedad de películas.'] },
                { label: 'Motivación', items: ['Apoyar a la industria nacional; disfrutar de los estrenos.'] },
                { label: 'Frustración', items: ['Difícil de navegar para alguien no experto; cuesta aprender a usarla.'] },
              ],
            },
          ],
        },
        { type: 'subhead', text: 'User journey: Martina' },
        {
          type: 'text',
          text: 'Después de un largo día de trabajo, quiere relajarse con una película argentina que vaya con sus intereses, de forma rápida y simple.',
        },
        {
          type: 'flow',
          steps: [
            { label: 'Abre el navegador', tone: 'ink' },
            { label: 'Entra a play.cine.ar', tone: 'ink' },
            { label: 'Hace clic en “Ingresar”', tone: 'ink' },
            { label: 'Escribe usuario y contraseña', tone: 'muted' },
            { label: 'Recorre la home', tone: 'coral' },
            { label: 'Hace clic en una película', tone: 'coral' },
            { label: 'Lee la sinopsis', tone: 'coral' },
            { label: 'Hace clic en “Reproducir”', tone: 'muted' },
          ],
          legend: [
            { label: 'fluido', tone: 'ink' },
            { label: 'neutral', tone: 'muted' },
            { label: 'fricción', tone: 'coral' },
          ],
        },
        {
          type: 'cards',
          cols: 2,
          items: [
            { title: 'Ingreso', body: 'No hay opción de “olvidé mi contraseña” ni métodos de ingreso alternativos (por ejemplo, Google).' },
            { title: 'Home', body: 'Desordenada y difícil de entender; el usuario no sabe qué elegir.' },
            { title: 'Sinopsis', body: 'Si no le gusta, tiene que volver atrás y repetir toda la selección.' },
            { title: 'Reproductor', body: 'Le faltan controles completos: subtítulos, velocidad de reproducción y contenido relacionado.' },
          ],
        },
        { type: 'subhead', text: 'Oportunidades detectadas' },
        {
          type: 'columns',
          items: [
            { title: 'Ingreso más rápido', body: 'Sumar más opciones de ingreso.' },
            { title: 'Home más clara', body: 'Mejorar la jerarquía del contenido y agilizar la elección de una película.' },
            { title: 'Reproductor más completo', body: 'Sumar opciones para que sea accesible y coherente.' },
          ],
        },
      ],
    },
    {
      id: 'requirements',
      kicker: '02',
      nav: 'Requisitos',
      title: 'Requisitos',
      blocks: [
        { type: 'subhead', text: 'Matriz de necesidades' },
        {
          type: 'cards',
          cols: 3,
          items: [
            {
              title: 'Agilizar el ingreso',
              body: ['El usuario tiene que escribir sus datos cada vez.', 'Solución: sumar opciones de ingreso (Google, Facebook).'],
            },
            {
              title: 'Jerarquía más clara en la home',
              body: [
                'La home está desordenada y es difícil de navegar.',
                'Solución: sumar “Recomendaciones” al inicio y botones de contenido nuevo.',
              ],
            },
            {
              title: 'Más opciones en el reproductor',
              body: [
                'Al reproductor le faltan básicos como subtítulos y velocidad de reproducción.',
                'Solución: sumar botones de subtítulos, velocidad y más.',
              ],
            },
          ],
        },
        { type: 'subhead', text: 'Priorización: factibilidad, viabilidad y deseabilidad' },
        {
          type: 'cards',
          cols: 2,
          items: [
            {
              title: 'Prioridad 1 (alta)',
              body: [
                '• Menos elementos en la home',
                '• Sinopsis visible desde la home',
                '• Filtro por género',
                '• Ingreso más rápido (Google/Facebook)',
              ],
            },
            {
              title: 'Prioridad 2',
              body: ['• “Recomendaciones” según el comportamiento del usuario', '• Renombrar “Mi Lista” como “Mis Favoritos”'],
            },
            {
              title: 'Prioridad 3',
              body: ['• Íconos para distintos perfiles de usuario', '• Diferencia clara entre contenido alquilado y gratuito'],
            },
            {
              title: 'Prioridad 4 (baja)',
              body: [
                '• Sección “Tendencias”',
                '• Tráilers antes de reproducir',
                '• Mejor visibilidad de las opciones del reproductor',
                '• Búsqueda más rápida',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'structure',
      kicker: '03',
      nav: 'Estructura',
      title: 'Estructura',
      blocks: [
        { type: 'lead', text: 'Método: primero un tree test, después un card sorting y luego un segundo tree test.' },
        { type: 'subhead', text: 'Tasa de éxito en tree testing' },
        {
          type: 'bars',
          labelWidth: 150,
          items: [
            { label: 'Estructura original', value: '35%', ratio: 0.365, tone: 'muted' },
            { label: 'Nueva estructura', value: '95%', ratio: 0.99, tone: 'ink' },
          ],
        },
        {
          type: 'cards',
          cols: 2,
          items: [
            {
              title: '1er tree test: estructura original',
              body: [
                'Tasa de éxito: 35%.',
                'El 60% no pudo encontrar una película comprada: etiquetas como “Mi Sala” eran ambiguas.',
                'El 80% no pudo encontrar una comedia: el camino por género era confuso y fragmentado.',
              ],
            },
            {
              title: '2do tree test: nueva estructura',
              body: [
                'Tasa de éxito: 95%.',
                'El 90% encontró una película comprada (Inicio → Mis Compras).',
                'El 100% encontró una comedia (Inicio → Películas → Comedia).',
              ],
            },
          ],
        },
        {
          type: 'text',
          text: 'A partir del primer test, un card sorting dio como resultado un sitemap nuevo y simplificado.',
        },
        {
          type: 'sitemap',
          root: 'Inicio',
          children: [
            { label: 'Películas' },
            { label: 'Series' },
            { label: 'Mi Lista' },
            { label: 'Mis Compras' },
            { label: 'Mi Perfil' },
            { label: 'Ayuda' },
          ],
        },
      ],
    },
    {
      id: 'skeleton',
      kicker: '04',
      nav: 'Esqueleto',
      title: 'Esqueleto',
      blocks: [
        { type: 'subhead', text: 'Test de usabilidad moderado' },
        {
          type: 'quote',
          text: 'Volvés del trabajo y tenés ganas de explorar el cine argentino, así que decidís probar esta página de “Cine.Ar”.',
        },
        {
          type: 'cards',
          cols: 2,
          items: [
            {
              title: 'Tarea 1: elegir una película',
              body: ['Objetivo: que el usuario pueda elegir una película rápido.', 'Criterio de éxito: reproducir una película.'],
            },
            {
              title: 'Tarea 2: alquilar una película',
              body: ['Objetivo: que el usuario pueda alquilar una película.', 'Criterio de éxito: completar el proceso de pago.'],
            },
          ],
        },
        {
          type: 'summary',
          large: true,
          title: 'Resultado: 4 de 4 usuarios completaron todas las tareas',
          body: '4 usuarios con habilidades tecnológicas medias-bajas, de 18 a 30 años.',
        },
      ],
    },
    {
      id: 'surface',
      kicker: '05',
      nav: 'Superficie',
      title: 'Superficie',
      blocks: [
        { type: 'subhead', text: 'El Círculo Dorado' },
        {
          type: 'cards',
          cols: 3,
          items: [
            {
              title: '¿Por qué?',
              body: 'Un servicio de streaming de películas, series y documentales argentinos, con información, estrenos y más.',
            },
            {
              title: '¿Cómo?',
              body: 'Democratizando el cine latinoamericano: ayudando a las personas a conectar con sus raíces a través de contenido de calidad que refleje su realidad.',
            },
            {
              title: '¿Qué?',
              body: 'Una plataforma que hace más rápida la búsqueda: películas y documentales por género, con recomendaciones según el gusto de cada persona.',
            },
          ],
        },
        { type: 'subhead', text: 'Tono de voz' },
        {
          type: 'text',
          text: 'Una línea de tiempo definió el tono de voz, de cercano a formal, según la tarea del usuario.',
        },
        {
          type: 'tone',
          scale: ['Cercano', 'Neutral', 'Formal'],
          rows: [
            { label: 'Onboarding', position: 0, tone: 'ink' },
            { label: 'Elegir contenido', position: 0, tone: 'ink' },
            { label: 'Ingresar', position: 0.5, tone: 'muted' },
            { label: 'Validar el pago', position: 1, tone: 'coral' },
            { label: 'Ver contenido', position: 0, tone: 'ink' },
          ],
        },
        { type: 'image', src: platform, alt: 'Interfaz final de Cine.AR: película destacada, tendencias y fila de seguir viendo' },
      ],
    },
    {
      id: 'impact',
      kicker: 'resultado',
      nav: 'Impacto',
      title: 'Impacto',
      blocks: [
        {
          type: 'lead',
          text: 'El rediseño resolvió los problemas que había encontrado la investigación, y los tests midieron la diferencia.',
        },
        {
          type: 'cards',
          cols: 3,
          items: [
            { title: 'Navegación', body: 'El éxito en el tree testing pasó del 35% al 95%.' },
            { title: 'Tareas principales', body: 'El 100% de los usuarios eligió y alquiló una película en el test moderado.' },
            {
              title: 'Cambios con datos detrás',
              body: 'La interfaz que el 60% de los usuarios consideraba desordenada pasó a ser una estructura validada en los tests.',
            },
          ],
        },
      ],
    },
  ],
  closing: { label: 'ver caso completo en behance  →', href: en.closing!.href },
};
