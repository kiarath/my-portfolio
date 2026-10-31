import type { CaseStudy } from '../../types';
import { ticketera as en } from '../ticketera';
import dashboard from '../../../assets/projects/ticketera-dashboard.jpg';
import analytics from '../../../assets/projects/ticketera-analytics.jpg';
import empty from '../../../assets/projects/ticketera-empty.jpg';
import community from '../../../assets/projects/ticketera-community.jpg';
import scanner from '../../../assets/projects/ticketera-scanner.jpg';
import app from '../../../assets/projects/ticketera-app.jpg';
import checkout from '../../../assets/projects/ticketera-checkout.jpg';

export const ticketera: CaseStudy = {
  ...en,
  tags: ['SaaS B2B', 'Desktop', 'Mobile'],
  summary:
    'Un SaaS para que las productoras de música electrónica vendan entradas y sepan de qué canal salió cada una, con un escáner para controlar la puerta la noche del evento.',
  meta: [
    { label: 'Rol', value: 'Diseñadora UX/UI' },
    { label: 'Año', value: '2026' },
    { label: 'Herramientas', value: 'Figma, Google Sheets' },
    { label: 'Plataformas', value: 'Web, iOS y Android' },
  ],
  hero: { ...en.hero, alt: 'Jodify Ticketera: el escáner de la puerta, la app de productoras y el panel web' },
  stats: [
    { value: '4', label: 'Superficies: panel web, portal de RRPP, app con escáner y checkout' },
    { value: '2', label: 'Hitos de entrega en un MVP de 12 semanas' },
    { value: '8', label: 'Resultados del escáner, pensados para usarse de pie en la puerta' },
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
              title: 'Contexto',
              body: 'Jodify ya era la app para descubrir fiestas de electrónica en Latinoamérica. Vender las entradas era el paso siguiente, y con eso la clienta pasó a ser la productora.',
            },
            {
              title: 'El problema',
              body: 'La misma fiesta se vende por Instagram, WhatsApp, links de RRPP y a veces otra ticketera. Al final la productora ve un total y no sabe qué canal vendió.',
            },
            {
              title: 'Objetivo',
              body: 'Que la productora entienda su venta desde un panel y que en la puerta cada entrada se valide en segundos.',
            },
            {
              title: 'Solución',
              body: 'Un SaaS con cuatro superficies sobre el mismo registro de ventas: panel web, portal de RRPP, app con escáner y checkout.',
            },
          ],
        },
      ],
    },
    {
      id: 'users',
      kicker: '02',
      nav: 'Usuarios',
      title: 'Usuarios',
      blocks: [
        {
          type: 'persona',
          persona: {
            name: 'Martina',
            meta: '26  ·  Estudiante  ·  Compradora',
            bio: 'Sale una o dos veces por mes, así que investiga antes y pide recomendaciones para aprovechar cada noche. Ya usaba la app de Jodify para encontrar fiestas, y ahí mismo quería comprar.',
            groups: [
              { label: 'Objetivos', items: ['Comprar sin salir de la app', 'Tener el QR a mano en la puerta'] },
              {
                label: 'Motivaciones',
                items: ['Fiestas que coincidan con su gusto', 'Aprovechar su poco tiempo libre', 'Descubrir subgéneros y artistas'],
              },
              {
                label: 'Frustraciones',
                items: ['Buscar fiestas en Instagram', 'Eventos lejos que piden transporte', 'Scroll infinito sin filtros'],
              },
            ],
          },
        },
        {
          type: 'summary',
          title: 'La productora, clienta del SaaS',
          body: 'Publica varios eventos por mes y vende con un equipo de RRPP. Necesita saber qué canal vende para decidir dónde poner la difusión, y operar la puerta la noche del evento.',
        },
      ],
    },
    {
      id: 'scope',
      kicker: '03',
      nav: 'Alcance',
      title: 'Alcance',
      blocks: [
        {
          type: 'lead',
          text: 'Para que la productora pudiera vender y entender su venta, el MVP necesitaba cuatro superficies:',
        },
        {
          type: 'cards',
          cols: 2,
          items: [
            {
              title: 'Panel web',
              body: 'Dashboard, analítica por evento, wizard de creación, comunidad y cobros con Mercado Pago.',
            },
            {
              title: 'Portal de RRPP',
              body: 'Cada RRPP entra por invitación, vende con su link y ve solo sus ventas.',
            },
            {
              title: 'App con escáner',
              body: 'La venta en curso y el control de acceso por QR para la noche del evento.',
            },
            {
              title: 'Checkout',
              body: 'Compra en app y webapp, con o sin cuenta, y el QR guardado en el perfil.',
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
        { type: 'subhead', text: 'Recorrido de la productora' },
        {
          type: 'flow',
          steps: [
            { label: 'Crear cuenta', tone: 'ink' },
            { label: 'Vincular Mercado Pago', tone: 'ink' },
            { label: 'Crear evento', tone: 'ink' },
            { label: 'Publicar y compartir', tone: 'ink' },
            { label: 'Ver ventas por canal', tone: 'coral' },
            { label: 'Abrir la puerta', tone: 'ink' },
            { label: 'Escanear entradas', tone: 'ink' },
          ],
        },
        { type: 'subhead', text: 'Panel de la productora' },
        { type: 'chips', items: ['Dashboard', 'Eventos', 'Comunidad', 'Escanear', 'Soporte'] },
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
          text: 'Extendí el sistema de la app de Jodify a desktop: Roboto Condensed para títulos y cifras, Work Sans para el texto, fondo oscuro y un violeta reservado para la acción principal.',
        },
        { type: 'label', text: '01  Dashboard' },
        {
          type: 'text',
          text: 'Los números del mes van arriba; abajo, el próximo evento con su avance sobre el aforo y el canal de cada entrada.',
        },
        { type: 'image', src: dashboard, alt: 'Dashboard de la productora con ventas, ingresos y asistentes del mes y las ventas por canal del próximo evento' },
        { type: 'label', text: '02  Analítica del evento' },
        {
          type: 'text',
          text: 'Ventas por canal con el valor escrito al lado, ranking de RRPP, tandas activas y el embudo de clicks hasta el botón comprar.',
        },
        { type: 'image', src: analytics, alt: 'Analítica del evento: entradas contra aforo, ingresos, ventas por canal, ranking de RRPP, tandas y clicks' },
        { type: 'label', text: '03  Estado vacío' },
        {
          type: 'text',
          text: 'La productora nueva ve qué va a aparecer y una sola acción: publicar su primer evento.',
        },
        { type: 'image', src: empty, alt: 'Dashboard vacío con una sola acción para publicar el primer evento' },
        { type: 'label', text: '04  Comunidad' },
        {
          type: 'text',
          text: 'La base que deja cada evento: seguidores, compradores que vuelven y contactos importados desde WhatsApp.',
        },
        { type: 'image', src: community, alt: 'Comunidad: seguidores en el tiempo, compradores recurrentes y tabla de contactos' },
        { type: 'label', text: '05  Escáner de acceso' },
        {
          type: 'text',
          text: 'Ocho resultados con color, ícono y la acción siguiente: válido, ya escaneado, otro evento, ilegible, fuera de horario, no disponible, sin conexión y batería baja.',
        },
        { type: 'image', src: scanner, alt: 'Los ocho resultados del escáner, de entrada válida a batería baja' },
        { type: 'label', text: '06  App de productoras' },
        {
          type: 'text',
          text: 'La venta en curso y los estados que pesan esa noche, como el escáner sin configurar o el evento ya terminado, para mirar de pie en la puerta.',
        },
        { type: 'image', src: app, alt: 'Cuatro pantallas de la app de productoras: venta en curso, escáner sin configurar, evento en curso y evento finalizado' },
        { type: 'label', text: '07  Checkout' },
        {
          type: 'text',
          text: 'Se puede comprar con o sin cuenta y pagar con Mercado Pago; después el QR queda listo en Mis tickets.',
        },
        { type: 'image', src: checkout, alt: 'Flujo de compra de entradas en la app: tandas, pago, confirmación y QR' },
      ],
    },
    {
      id: 'review',
      kicker: '06',
      nav: 'Revisión',
      title: 'Revisión',
      blocks: [
        {
          type: 'lead',
          text: 'Audité las pantallas con ui-ux-pro-max y Hallmark, dos guías de accesibilidad y buenas prácticas, y medí cada punto en el archivo.',
        },
        {
          type: 'cards',
          cols: 2,
          items: [
            { title: '¿Se lee el texto secundario?' },
            { title: '¿Están todos los estados?' },
            { title: '¿El color significa algo?' },
            { title: '¿Funciona de pie en la puerta?' },
          ],
        },
        {
          type: 'cards',
          cols: 2,
          items: [
            { title: 'Contraste', body: 'El gris secundario da 2,4:1 sobre las tarjetas; pasa a #8C8C8C, que da 5:1.' },
            { title: 'Tamaño', body: 'Hay textos de 10 y 11 px; el mínimo pasa a 12 px en desktop y 13 en mobile.' },
            { title: 'Tipografías', body: 'Analítica mezcla seis familias; vuelve a Roboto Condensed y Work Sans.' },
            { title: 'En la puerta', body: 'Los botones del escáner miden 40 px de alto; pasan a 48.' },
          ],
        },
        {
          type: 'summary',
          title: 'Próxima iteración',
          body: 'Los paneles web ya tienen estado vacío, pero les falta carga y error.',
        },
      ],
    },
    {
      id: 'learnings',
      kicker: '07',
      nav: 'Aprendizajes',
      title: 'Aprendizajes',
      blocks: [
        { type: 'lead', text: 'Lo que me llevo de diseñar un SaaS:' },
        {
          type: 'cards',
          cols: 3,
          items: [
            {
              title: 'El dashboard es el producto',
              body: 'La productora necesita entender su venta, y eso decidió qué entró al panel y qué quedó afuera.',
            },
            {
              title: 'El estado vacío va primero',
              body: 'Es lo primero que ve cada productora nueva, así que tuvo el mismo cuidado que el panel lleno.',
            },
            {
              title: 'El error diseña la operación',
              body: 'El escáner se entiende mejor por sus ocho resultados que por su pantalla principal.',
            },
            {
              title: 'El cobro marca el orden',
              body: 'Sin Mercado Pago vinculado no hay venta, así que el wizard lo pide antes de publicar.',
            },
            {
              title: 'Cada rol ve lo suyo',
              body: 'La misma venta alimenta la vista del RRPP y el ranking de la productora, con permisos distintos.',
            },
            {
              title: 'Un Gantt también diseña',
              body: 'Estimar cada módulo en días hasta el handoff ordenó qué se diseñaba primero y qué podía esperar.',
            },
          ],
        },
        {
          type: 'summary',
          title: 'Conclusión',
          body: 'Pasar de una app de consumo a un SaaS cambió la pregunta de diseño: de cómo encuentra Martina una fiesta a cómo entiende una productora su venta y cómo opera su noche. Falta medirlo con uso real, por ejemplo cuántas productoras publican su primer evento y cuánto tardan en hacerlo.',
          large: true,
        },
      ],
    },
  ],
};
