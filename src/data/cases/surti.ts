import type { CaseStudy } from '../types';
import hero from '../../assets/projects/surti-hero.jpg';
import baseApp from '../../assets/projects/surti-base-app.jpg';
import arcorApp from '../../assets/projects/surti-arcor-app.jpg';
import dashboard from '../../assets/projects/surti-dashboard.jpg';
import team from '../../assets/projects/surti-team.jpg';
import newSeller from '../../assets/projects/surti-new-seller.jpg';
import stores from '../../assets/projects/surti-stores.jpg';
import storesAddImport from '../../assets/projects/surti-stores-add-import.jpg';
import inventoryImport from '../../assets/projects/surti-inventory-import.jpg';
import inventoryStore from '../../assets/projects/surti-inventory-store.jpg';
import identity from '../../assets/projects/surti-identity.jpg';
import kpisBefore from '../../assets/projects/surti-kpis-before.jpg';
import kpisAfter from '../../assets/projects/surti-kpis-after.jpg';
import insightsBefore from '../../assets/projects/surti-insights-before.jpg';
import insightsAfter from '../../assets/projects/surti-insights-after.jpg';

export const surti: CaseStudy = {
  slug: 'surti',
  title: 'Surtí',
  tags: ['Mobile', 'Desktop', 'AI'],
  summary:
    'An AI copilot for consumer-goods pre-sales: it helps the sales rep build better orders and gives the supervisor a dashboard to see what the team is doing and what the AI is learning.',
  links: [],
  meta: [
    { label: 'Role', value: 'UX/UI Designer' },
    { label: 'Year', value: '2026' },
    { label: 'Tools', value: 'Figma, Claude' },
    { label: 'Platforms', value: 'Mobile & desktop' },
  ],
  hero: { src: hero, alt: 'Surtí mobile app (day route and route map) next to the supervisor’s web dashboard' },
  stats: [
    { value: '21', label: 'Screens across the mobile app and the web dashboard' },
    { value: '2', label: 'Brands with a single design system and variables with modes' },
    { value: '15', label: 'Design decisions documented with their before and after' },
  ],
  sections: [
    {
      id: 'strategy',
      kicker: '01',
      nav: 'Strategy',
      title: 'Strategy',
      blocks: [
        {
          type: 'cards',
          cols: 2,
          items: [
            {
              title: 'Context',
              body: 'In consumer goods, a pre-sales rep visits dozens of stores a day and builds each order from memory, with only a few minutes per visit and often without signal.',
            },
            {
              title: 'The problem',
              body: 'He can’t remember what each customer bought, promotions change often and supervisors find out late about what happened on the route. Sales are lost and nobody sees them.',
            },
            {
              title: 'Objective',
              body: 'Help the rep sell better in less time, without losing control or the store owner’s trust.',
            },
            {
              title: 'Solution',
              body: 'A copilot that suggests the order and explains why, and a dashboard so the supervisor can see the team and what the AI is learning.',
            },
          ],
        },
      ],
    },
    {
      id: 'research',
      kicker: '02',
      nav: 'Research',
      title: 'Research',
      blocks: [
        {
          type: 'persona',
          persona: {
            name: 'Lucas',
            meta: '29  ·  Pre-sales rep  ·  Downtown area',
            quote: '“I get five minutes per kiosk and I build the order from memory. If I forget something, that sale is lost.”',
            bio: 'He has covered the same area for four years. He uses his phone with one hand, out on the street and in the sun, and often loses signal between one store and the next.',
            groups: [
              {
                label: 'Goals',
                items: ['Hit the sales target', 'Finish the route on time', 'Earn the store owner’s trust'],
              },
              { label: 'Motivations', items: ['Sell more without working longer hours', 'Bring what each store needs'] },
              {
                label: 'Frustrations',
                items: ['Remembering each customer’s history', 'Promotions that change all the time', 'Entering orders without signal'],
              },
            ],
          },
        },
        {
          type: 'summary',
          title: 'Carla, supervisor',
          body: 'Works from her computer, between meetings. She needs to see how the day is going, spot problems in time and manage her team of pre-sales reps.',
        },
      ],
    },
    {
      id: 'scope',
      kicker: '03',
      nav: 'Scope',
      title: 'Scope',
      blocks: [
        { type: 'lead', text: 'To answer what Lucas and Carla need, I defined four core features:' },
        {
          type: 'cards',
          cols: 2,
          items: [
            {
              title: 'Optimized route',
              body: 'The day’s stores in order, as a list or on a map, with an explanation of why that order.',
            },
            {
              title: 'Suggested order',
              body: 'Each product with its reason and its confidence level, to accept, change or remove with a single tap.',
            },
            {
              title: 'Works offline',
              body: 'The order is saved on the phone and sent automatically when the connection comes back.',
            },
            {
              title: 'Supervision dashboard',
              body: 'The team on the route, the AI’s performance, stores, inventory and access codes.',
            },
          ],
        },
      ],
    },
    {
      id: 'structure',
      kicker: '04',
      nav: 'Structure',
      title: 'Structure',
      blocks: [
        { type: 'subhead', text: 'The rep’s journey' },
        {
          type: 'flow',
          steps: [
            { label: 'Open the app', tone: 'ink' },
            { label: 'Sign in with code', tone: 'ink' },
            { label: 'See the route', tone: 'ink' },
            { label: 'Pick a store', tone: 'ink' },
            { label: 'Review suggested order', tone: 'coral' },
            { label: 'Confirm', tone: 'ink' },
            { label: 'Sync', tone: 'ink' },
          ],
        },
        { type: 'subhead', text: 'The supervisor’s dashboard' },
        { type: 'chips', items: ['Daily overview', 'Team', 'Stores', 'Inventory', 'AI insights'] },
      ],
    },
    {
      id: 'design',
      kicker: '05',
      nav: 'Design',
      title: 'Design',
      blocks: [
        {
          type: 'lead',
          text: 'I went from a base system to the Arcor brand without redrawing screens: colors are variables with two modes.',
        },
        { type: 'label', text: '01  Base system for white label' },
        {
          type: 'text',
          text: 'Wireframes turned into UI with its own tokens, Plus Jakarta Sans and reusable AI components.',
        },
        { type: 'image', src: baseApp, alt: 'Base system: day route, store profile, suggested order and order adjustment screens' },
        { type: 'label', text: '02  Applying another system’s palette and styles: Arcor' },
        {
          type: 'text',
          text: 'The same app with Arcor’s palette, to show how versatile the product is. It uses Nunito and Open Sans, square corners and rules for using the phone out on the street.',
        },
        { type: 'image', src: arcorApp, alt: 'The same four mobile screens with the Arcor palette, Nunito and square corners' },
        { type: 'label', text: '03  Web dashboard' },
        {
          type: 'text',
          text: 'One headline figure, the team on the route, the AI’s performance and insights with a direct action.',
        },
        { type: 'image', src: dashboard, alt: 'Daily overview dashboard with sales against target, team on route, AI performance and actionable insights' },
        { type: 'label', text: '04  Team and access codes' },
        {
          type: 'text',
          text: 'Each rep signs in with a personal code. The supervisor sees it masked, can copy it or generate a new one, and adds a new person with their code already created and sent via WhatsApp.',
        },
        { type: 'image', src: team, alt: 'Team: masked codes, route status and last sign-in' },
        { type: 'image', src: newSeller, alt: 'New rep: side panel with the generated access code' },
        { type: 'label', text: '05  Stores and import' },
        {
          type: 'text',
          text: 'Stores are added one by one or from an existing database. When importing, the AI recognizes the file’s columns and flags the one still to be mapped, so the person decides.',
        },
        { type: 'image', src: stores, alt: 'Stores: search, filters, bulk selection and sorting by last visit' },
        { type: 'image', src: storesAddImport, alt: 'Adding a store, and the import dialog with the columns recognized by the AI' },
        { type: 'label', text: '06  Inventory and import' },
        {
          type: 'text',
          text: 'Warehouse stock feeds the suggestions: the AI never suggests products that are out of stock. The import summarizes what changes and sets aside rows with errors before confirming.',
        },
        { type: 'image', src: inventoryImport, alt: 'Inventory import: summary of changes and rows with errors' },
        { type: 'image', src: inventoryStore, alt: 'Warehouse inventory, and the store detail with today’s visit' },
        { type: 'label', text: '07  An identity of its own' },
        {
          type: 'text',
          text: 'Surtí: a wrapped candy as the logo mark, a mini glyph that marks what the AI suggests, and custom line illustrations.',
        },
        { type: 'image', src: identity, alt: 'Surtí logo and line illustrations of a kiosk, a route and an order' },
      ],
    },
    {
      id: 'review',
      kicker: '06',
      nav: 'Review',
      title: 'Review',
      blocks: [
        { type: 'lead', text: 'I reviewed every screen against accessibility and best-practice rules.' },
        {
          type: 'cards',
          cols: 2,
          items: [
            { title: 'Does it look like a generated interface?' },
            { title: 'Is it clear in which order to look?' },
            { title: 'Does color mean something?' },
            { title: 'Does it work one-handed and in the sun?' },
          ],
        },
        { type: 'subhead', text: 'Before and after: daily summary' },
        { type: 'label', text: 'Before' },
        { type: 'image', src: kpisBefore, alt: 'Before: four KPI cards with the same weight' },
        { type: 'label', text: 'After' },
        { type: 'image', src: kpisAfter, alt: 'After: one headline figure with progress bar and two supporting figures' },
        { type: 'subhead', text: 'Before and after: insights' },
        { type: 'label', text: 'Before' },
        { type: 'image', src: insightsBefore, alt: 'Before: insights as three separate cards' },
        { type: 'label', text: 'After' },
        { type: 'image', src: insightsAfter, alt: 'After: insights as a list with category icons and equal-width buttons' },
      ],
    },
    {
      id: 'iteration',
      kicker: '07',
      nav: 'Iteration',
      title: 'Iteration',
      blocks: [
        { type: 'lead', text: 'Changes applied in each review round:' },
        {
          type: 'cards',
          cols: 3,
          items: [
            {
              title: 'A glyph of its own',
              body: 'The sparkle icon gave the AI away. Now a mini candy marks every suggestion.',
            },
            {
              title: 'No template tics',
              body: 'Metadata without middle dots, no decorative bullets and no boxes inside cards.',
            },
            {
              title: 'One headline figure',
              body: 'The wall of four KPIs became one main figure and two supporting ones.',
            },
            {
              title: 'Insights as a list',
              body: 'Category with an icon, one subtitle for the whole section and buttons of equal width.',
            },
            {
              title: 'Reading order',
              body: 'In the store detail, today’s visit became the protagonist.',
            },
            {
              title: 'Code sign-in',
              body: 'Masked personal code, with the option to paste it, and onboarding with a generated code.',
            },
          ],
        },
        {
          type: 'summary',
          title: 'Conclusion',
          body: 'AI gave me speed to build; explicit review criteria were what removed the AI look. Designing for AI is designing trust: explaining each suggestion and letting the person correct it matters more than the suggestion itself. The next step is to validate the flow with real pre-sales reps and supervisors.',
          large: true,
        },
      ],
    },
  ],
};
