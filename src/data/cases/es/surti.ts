import type { CaseStudy } from '../../types';
import { surti as en } from '../surti';
import baseApp from '../../../assets/projects/surti-base-app.jpg';
import arcorApp from '../../../assets/projects/surti-arcor-app.jpg';
import dashboard from '../../../assets/projects/surti-dashboard.jpg';
import team from '../../../assets/projects/surti-team.jpg';
import newSeller from '../../../assets/projects/surti-new-seller.jpg';
import stores from '../../../assets/projects/surti-stores.jpg';
import storesAddImport from '../../../assets/projects/surti-stores-add-import.jpg';
import inventoryImport from '../../../assets/projects/surti-inventory-import.jpg';
import inventoryStore from '../../../assets/projects/surti-inventory-store.jpg';
import identity from '../../../assets/projects/surti-identity.jpg';
import kpisBefore from '../../../assets/projects/surti-kpis-before.jpg';
import kpisAfter from '../../../assets/projects/surti-kpis-after.jpg';
import insightsBefore from '../../../assets/projects/surti-insights-before.jpg';
import insightsAfter from '../../../assets/projects/surti-insights-after.jpg';
import ilLucasSurti from '../../../assets/personas/lucas-surti.svg?raw';
import ilCarlaSurti from '../../../assets/personas/carla-surti.svg?raw';

export const surti: CaseStudy = {
  ...en,
  tags: ['Mobile', 'Desktop', 'IA'],
  summary:
    'Un copiloto con IA para la preventa de consumo masivo: ayuda al preventista a armar mejores pedidos y le da a la supervisora un panel para ver qué hace el equipo y qué aprende la IA.',
  meta: [
    { label: 'Rol', value: 'Diseñadora UX/UI' },
    { label: 'Año', value: '2026' },
    { label: 'Herramientas', value: 'Figma, Claude' },
    { label: 'Plataformas', value: 'Mobile y desktop' },
  ],
  hero: { ...en.hero, alt: 'App mobile de Surtí (ruta del día y mapa de ruta) junto al panel web de la supervisora' },
  stats: [
    { value: '21', label: 'Pantallas entre la app mobile y el panel web' },
    { value: '2', label: 'Marcas con un solo sistema de diseño y variables con modos' },
    { value: '15', label: 'Decisiones de diseño documentadas con su antes y después' },
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
              body: 'En consumo masivo, el preventista visita decenas de comercios por día y arma cada pedido de memoria, con pocos minutos por visita y muchas veces sin señal.',
            },
            {
              icon: 'problem',
              title: 'El problema',
              body: 'No recuerda qué compró cada cliente, las promos cambian seguido y la supervisión se entera tarde de lo que pasó en la ruta. Se pierden ventas que nadie ve.',
            },
            {
              icon: 'objective',
              title: 'Objetivo',
              body: 'Ayudar al preventista a vender mejor en menos tiempo, sin que pierda el control ni la confianza del comerciante.',
            },
            {
              icon: 'solution',
              title: 'Solución',
              body: 'Un copiloto que sugiere el pedido y explica por qué, y un panel para que la supervisora vea al equipo y lo que aprende la IA.',
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
            name: 'Lucas',
            illustration: ilLucasSurti,
            meta: '29  ·  Preventista  ·  Zona Centro',
            quote: '“Tengo cinco minutos por kiosco y armo el pedido de memoria. Si me olvido algo, esa venta se pierde.”',
            bio: 'Recorre la misma zona hace cuatro años. Usa el teléfono con una mano, en la calle y con sol, y muchas veces se queda sin señal entre un comercio y otro.',
            groups: [
              {
                label: 'Objetivos',
                items: ['Cumplir el objetivo de venta', 'Terminar la ruta a tiempo', 'Que el comerciante confíe en él'],
              },
              { label: 'Motivaciones', items: ['Vender más sin trabajar más horas', 'Llevar lo que cada comercio necesita'] },
              {
                label: 'Frustraciones',
                items: ['Recordar el historial de cada cliente', 'Promos que cambian todo el tiempo', 'Cargar pedidos sin señal'],
              },
            ],
          },
        },
        {
          type: 'persona',
          persona: {
            name: 'Carla',
            illustration: ilCarlaSurti,
            meta: 'Supervisora de ventas  ·  Equipo Zona Centro',
            bio: 'Trabaja desde la compu, entre reuniones. Necesita ver cómo va el día, detectar problemas a tiempo y gestionar a su equipo de preventistas.',
            groups: [
              { label: 'Objetivos', items: ['Ver cómo va el día de un vistazo', 'Detectar problemas en la ruta cuando todavía hay tiempo', 'Tener al día los accesos y los comercios del equipo'] },
              { label: 'Motivaciones', items: ['Que cada preventista llegue a su objetivo', 'Entender qué le sugiere la IA a su equipo'] },
              { label: 'Frustraciones', items: ['Enterarse tarde de lo que pasó en la ruta', 'Reportes que llegan recién a fin del día', 'Gestionar códigos y comercios a mano'] },
            ],
          },
        },
      ],
    },
    {
      id: 'scope',
      kicker: '03',
      nav: 'Alcance',
      title: 'Alcance',
      blocks: [
        { type: 'lead', text: 'Para responder a lo que necesitan Lucas y Carla, definí cuatro funciones centrales:' },
        {
          type: 'cards',
          cols: 2,
          items: [
            {
              icon: 'route',
              title: 'Ruta optimizada',
              body: 'Los comercios del día en orden, en lista o en mapa, con la explicación de por qué ese orden.',
            },
            {
              icon: 'order',
              title: 'Pedido sugerido',
              body: 'Cada producto con su motivo y su nivel de confianza, para aceptar, cambiar o quitar con un toque.',
            },
            {
              icon: 'offline',
              title: 'Funciona sin señal',
              body: 'El pedido se guarda en el teléfono y se envía solo cuando vuelve la conexión.',
            },
            {
              icon: 'dashboard',
              title: 'Panel de supervisión',
              body: 'El equipo en ruta, el rendimiento de la IA, comercios, inventario y códigos de acceso.',
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
        { type: 'subhead', text: 'Recorrido del preventista' },
        {
          type: 'flow',
          steps: [
            { label: 'Abrir la app', tone: 'ink' },
            { label: 'Ingresar con código', tone: 'ink' },
            { label: 'Ver la ruta', tone: 'ink' },
            { label: 'Elegir comercio', tone: 'ink' },
            { label: 'Revisar pedido sugerido', tone: 'coral' },
            { label: 'Confirmar', tone: 'ink' },
            { label: 'Sincronizar', tone: 'ink' },
          ],
        },
        { type: 'subhead', text: 'Panel de la supervisora' },
        { type: 'chips', items: ['Panel del día', 'Equipo', 'Comercios', 'Inventario', 'Insights IA'] },
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
          text: 'Pasé de un sistema base a la marca Arcor sin rehacer pantallas: los colores son variables con dos modos.',
        },
        { type: 'label', text: '01  Sistema base para marca blanca' },
        {
          type: 'text',
          text: 'Wireframes convertidos en UI con tokens propios, Plus Jakarta Sans y componentes de IA reutilizables.',
        },
        { type: 'image', src: baseApp, alt: 'Sistema base: pantallas de ruta del día, ficha del comercio, pedido sugerido y ajuste del pedido' },
        { type: 'label', text: '02  Aplicando paletas y estilos de otro sistema: Arcor' },
        {
          type: 'text',
          text: 'La misma app con la paleta de Arcor, para demostrar la versatilidad del producto. Se implementó Nunito y Open Sans, esquinas rectas y reglas para usar el teléfono en la calle.',
        },
        { type: 'image', src: arcorApp, alt: 'Las mismas cuatro pantallas mobile con la paleta de Arcor, Nunito y esquinas rectas' },
        { type: 'label', text: '03  Panel web' },
        {
          type: 'text',
          text: 'Una cifra protagonista, el equipo en ruta, el rendimiento de la IA e insights con una acción directa.',
        },
        { type: 'image', src: dashboard, alt: 'Panel del día con ventas contra el objetivo, equipo en ruta, rendimiento de la IA e insights accionables' },
        { type: 'label', text: '04  Equipo y códigos de acceso' },
        {
          type: 'text',
          text: 'Cada preventista entra con un código personal. La supervisora lo ve enmascarado, puede copiarlo o generar uno nuevo, y da de alta a una persona nueva con su código ya creado y enviado por WhatsApp.',
        },
        { type: 'image', src: team, alt: 'Equipo: códigos enmascarados, estado en ruta y último ingreso' },
        { type: 'image', src: newSeller, alt: 'Nuevo preventista: panel lateral con el código generado' },
        { type: 'label', text: '05  Comercios e importación' },
        {
          type: 'text',
          text: 'Los comercios se cargan uno por uno o desde una base existente. Al importar, la IA reconoce las columnas del archivo y marca la que falta asignar, para que la persona decida.',
        },
        { type: 'image', src: stores, alt: 'Comercios: búsqueda, filtros, selección en lote y orden por última visita' },
        { type: 'image', src: storesAddImport, alt: 'Alta de un comercio e importación con las columnas reconocidas por la IA' },
        { type: 'label', text: '06  Inventario e importación' },
        {
          type: 'text',
          text: 'El stock del depósito alimenta las sugerencias: la IA no propone productos agotados. La importación resume qué cambia y separa las filas con error antes de confirmar.',
        },
        { type: 'image', src: inventoryImport, alt: 'Importar inventario: resumen de cambios y filas con error' },
        { type: 'image', src: inventoryStore, alt: 'Inventario del depósito y detalle de comercio con la visita de hoy' },
        { type: 'label', text: '07  Identidad propia' },
        {
          type: 'text',
          text: 'Surtí: un caramelo envuelto como isotipo, un glifo mini que marca lo que sugiere la IA e ilustraciones de línea propias.',
        },
        { type: 'image', src: identity, alt: 'Logo de Surtí e ilustraciones de línea de un kiosco, una ruta y un pedido' },
      ],
    },
    {
      id: 'review',
      kicker: '06',
      nav: 'Revisión',
      title: 'Revisión',
      blocks: [
        { type: 'lead', text: 'Revisé cada pantalla con las reglas para accesibilidad y buenas prácticas.' },
        {
          type: 'cards',
          cols: 2,
          items: [
            { title: '¿Se ve como una interfaz generada?' },
            { title: '¿Se entiende en qué orden mirar?' },
            { title: '¿El color significa algo?' },
            { title: '¿Funciona con una mano y con sol?' },
          ],
        },
        { type: 'subhead', text: 'Antes y después: resumen del día' },
        { type: 'label', text: 'Antes' },
        { type: 'image', src: kpisBefore, alt: 'Antes: cuatro KPIs con el mismo peso' },
        { type: 'label', text: 'Después' },
        { type: 'image', src: kpisAfter, alt: 'Después: una cifra protagonista con barra de avance y dos cifras de apoyo' },
        { type: 'subhead', text: 'Antes y después: insights' },
        { type: 'label', text: 'Antes' },
        { type: 'image', src: insightsBefore, alt: 'Antes: insights en tres tarjetas separadas' },
        { type: 'label', text: 'Después' },
        { type: 'image', src: insightsAfter, alt: 'Después: insights en lista, con ícono de categoría y botones del mismo ancho' },
      ],
    },
    {
      id: 'iteration',
      kicker: '07',
      nav: 'Iteración',
      title: 'Iteración',
      blocks: [
        { type: 'lead', text: 'Cambios aplicados en cada ronda de revisión:' },
        {
          type: 'cards',
          cols: 3,
          items: [
            {
              title: 'Glifo propio',
              body: 'El ícono de destellos delataba la IA. Ahora un caramelo mini marca cada sugerencia.',
            },
            {
              title: 'Sin tics de plantilla',
              body: 'Metadatos sin punto medio, sin puntos decorativos y sin cajas dentro de tarjetas.',
            },
            {
              title: 'Una cifra protagonista',
              body: 'La pared de cuatro KPIs pasó a una cifra principal y dos de apoyo.',
            },
            {
              title: 'Insights en lista',
              body: 'Categoría con ícono, un subtítulo para toda la sección y botones del mismo ancho.',
            },
            {
              title: 'Orden de lectura',
              body: 'En el detalle de comercio, la visita de hoy pasó a ser la protagonista.',
            },
            {
              title: 'Acceso con código',
              body: 'Código personal enmascarado, con opción de pegarlo y alta con código generado.',
            },
          ],
        },
        {
          type: 'summary',
          title: 'Conclusión',
          body: 'La IA me dio velocidad para construir; los criterios explícitos de revisión fueron los que sacaron el look de IA. Diseñar para la IA es diseñar confianza: explicar cada sugerencia y dejar que la persona corrija importa más que la sugerencia en sí. El siguiente paso es validar el flujo con preventistas y supervisores reales.',
          large: true,
        },
      ],
    },
  ],
};
