import type { CaseStudy } from '../types';
import hero from '../../assets/projects/ticketera-hero.jpg';
import dashboard from '../../assets/projects/ticketera-dashboard.jpg';
import analytics from '../../assets/projects/ticketera-analytics.jpg';
import empty from '../../assets/projects/ticketera-empty.jpg';
import community from '../../assets/projects/ticketera-community.jpg';
import scanner from '../../assets/projects/ticketera-scanner.jpg';
import app from '../../assets/projects/ticketera-app.jpg';
import checkout from '../../assets/projects/ticketera-checkout.jpg';

export const ticketera: CaseStudy = {
  slug: 'ticketera',
  title: 'Jodify Ticketera',
  tags: ['SaaS B2B', 'Desktop', 'Mobile'],
  summary:
    'A SaaS that lets electronic music promoters sell tickets and see which channel each one came from, with a scanner to run the door on the night of the event.',
  links: [{ label: 'visit website  →', href: 'https://jodify.com.ar/promoters' }],
  meta: [
    { label: 'Role', value: 'UX/UI Designer' },
    { label: 'Year', value: '2026' },
    { label: 'Tools', value: 'Figma, Google Sheets' },
    { label: 'Platforms', value: 'Web, iOS & Android' },
  ],
  hero: {
    src: hero,
    alt: 'Jodify Ticketera: the door scanner, the promoter’s mobile app and the web dashboard',
  },
  stats: [
    { value: '4', label: 'Surfaces: web dashboard, promoter-rep portal, scanner app and checkout' },
    { value: '2', label: 'Delivery milestones in a 12-week MVP' },
    { value: '8', label: 'Scanner results, designed to be used standing at the door' },
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
              body: 'Jodify was already the app for finding electronic music parties in Latin America. Selling the tickets was the next step, and that made the promoter the customer.',
            },
            {
              title: 'The problem',
              body: 'The same party sells through Instagram, WhatsApp, promoter-rep links and sometimes another ticketing site. In the end the promoter sees a total and can’t tell which channel sold.',
            },
            {
              title: 'Objective',
              body: 'Let the promoter understand their sales from one dashboard, and validate every ticket at the door in seconds.',
            },
            {
              title: 'Solution',
              body: 'A SaaS with four surfaces on top of the same sales record: web dashboard, promoter-rep portal, scanner app and checkout.',
            },
          ],
        },
      ],
    },
    {
      id: 'users',
      kicker: '02',
      nav: 'Users',
      title: 'Users',
      blocks: [
        {
          type: 'persona',
          persona: {
            name: 'Martina',
            meta: '26  ·  Student  ·  Ticket buyer',
            bio: 'She goes out once or twice a month, so she researches first and asks friends for recommendations to make each night count. She already used the Jodify app to find parties, and wanted to buy right there.',
            groups: [
              { label: 'Goals', items: ['Buy without leaving the app', 'Have the QR at hand at the door'] },
              {
                label: 'Motivations',
                items: ['Parties that match her taste', 'Making the most of little free time', 'Discovering subgenres and artists'],
              },
              {
                label: 'Frustrations',
                items: ['Searching for parties on Instagram', 'Far-away events that need transport', 'Endless scrolling without filters'],
              },
            ],
          },
        },
        {
          type: 'summary',
          title: 'The promoter, the SaaS customer',
          body: 'Runs several events a month and sells with a team of promoter reps. Needs to know which channel sells to decide where to put the promotion, and to run the door on the night of the event.',
        },
      ],
    },
    {
      id: 'scope',
      kicker: '03',
      nav: 'Scope',
      title: 'Scope',
      blocks: [
        {
          type: 'lead',
          text: 'For the promoter to sell and understand their sales, the MVP needed four surfaces:',
        },
        {
          type: 'cards',
          cols: 2,
          items: [
            {
              title: 'Web dashboard',
              body: 'Dashboard, per-event analytics, event creation wizard, community and payments through Mercado Pago.',
            },
            {
              title: 'Promoter-rep portal',
              body: 'Each rep joins by invitation, sells with their own link and sees only their own sales.',
            },
            {
              title: 'Scanner app',
              body: 'Live sales and QR access control for the night of the event.',
            },
            {
              title: 'Checkout',
              body: 'Buying in the app and on the web, with or without an account, and the QR saved in the profile.',
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
        { type: 'subhead', text: 'The promoter’s journey' },
        {
          type: 'flow',
          steps: [
            { label: 'Create an account', tone: 'ink' },
            { label: 'Link Mercado Pago', tone: 'ink' },
            { label: 'Create the event', tone: 'ink' },
            { label: 'Publish and share', tone: 'ink' },
            { label: 'See sales by channel', tone: 'coral' },
            { label: 'Open the door', tone: 'ink' },
            { label: 'Scan tickets', tone: 'ink' },
          ],
        },
        { type: 'subhead', text: 'The promoter’s dashboard' },
        { type: 'chips', items: ['Dashboard', 'Events', 'Community', 'Scan', 'Support'] },
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
          text: 'I extended the Jodify app’s design system to desktop: Roboto Condensed for titles and figures, Work Sans for text, a dark background and a purple kept for the main action.',
        },
        { type: 'label', text: '01  Dashboard' },
        {
          type: 'text',
          text: 'The month’s numbers sit at the top; below them, the next event with its progress against capacity and the channel behind each ticket.',
        },
        { type: 'image', src: dashboard, alt: 'Promoter dashboard with monthly sales, revenue, unique attendees and the next event’s sales by channel' },
        { type: 'label', text: '02  Event analytics' },
        {
          type: 'text',
          text: 'Sales by channel with the value written next to each bar, the promoter-rep ranking, active ticket tiers and the click funnel up to the buy button.',
        },
        { type: 'image', src: analytics, alt: 'Event analytics: tickets sold against capacity, revenue, sales by channel, rep ranking, ticket tiers and clicks' },
        { type: 'label', text: '03  Empty state' },
        {
          type: 'text',
          text: 'A new promoter sees what will show up here and a single action: publish their first event.',
        },
        { type: 'image', src: empty, alt: 'Empty dashboard with a single call to action to publish the first event' },
        { type: 'label', text: '04  Community' },
        {
          type: 'text',
          text: 'The base each event leaves behind: followers, returning buyers and contacts imported from WhatsApp.',
        },
        { type: 'image', src: community, alt: 'Community: followers over time, returning buyers and the contacts table' },
        { type: 'label', text: '05  Door scanner' },
        {
          type: 'text',
          text: 'Eight results with color, icon and the next action: valid, already scanned, other event, unreadable, outside the time window, not available yet, offline and low battery.',
        },
        { type: 'image', src: scanner, alt: 'The eight scanner results, from a valid ticket to low battery' },
        { type: 'label', text: '06  Promoter app' },
        {
          type: 'text',
          text: 'Live sales and the states that matter that night, like a scanner that isn’t set up yet or an event that already ended, to check standing at the door.',
        },
        { type: 'image', src: app, alt: 'Four screens of the promoter mobile app: live sales, scanner setup, event in progress and finished event' },
        { type: 'label', text: '07  Checkout' },
        {
          type: 'text',
          text: 'You can buy with or without an account and pay with Mercado Pago; the QR then waits in My tickets.',
        },
        { type: 'image', src: checkout, alt: 'Ticket purchase flow in the app: ticket tiers, payment, confirmation and QR' },
      ],
    },
    {
      id: 'review',
      kicker: '06',
      nav: 'Review',
      title: 'Review',
      blocks: [
        {
          type: 'lead',
          text: 'I audited the screens with ui-ux-pro-max and Hallmark, two accessibility and best-practice guides, and measured each point in the file.',
        },
        {
          type: 'cards',
          cols: 2,
          items: [
            { title: 'Can you read the secondary text?' },
            { title: 'Are all the states there?' },
            { title: 'Does color mean something?' },
            { title: 'Does it work standing at the door?' },
          ],
        },
        {
          type: 'cards',
          cols: 2,
          items: [
            { title: 'Contrast', body: 'The secondary gray reaches 2.4:1 on the cards; it moves to #8C8C8C, which gives 5:1.' },
            { title: 'Size', body: 'Some labels are 10 and 11 px; the minimum moves to 12 px on desktop and 13 on mobile.' },
            { title: 'Typefaces', body: 'Analytics mixes six families; it goes back to Roboto Condensed and Work Sans.' },
            { title: 'At the door', body: 'Scanner buttons are 40 px tall; they move to 48.' },
          ],
        },
        {
          type: 'summary',
          title: 'Next iteration',
          body: 'The web dashboards already have an empty state, but still need loading and error states.',
        },
      ],
    },
    {
      id: 'learnings',
      kicker: '07',
      nav: 'Learnings',
      title: 'Learnings',
      blocks: [
        { type: 'lead', text: 'What I take away from designing a SaaS:' },
        {
          type: 'cards',
          cols: 3,
          items: [
            {
              title: 'The dashboard is the product',
              body: 'The promoter needs to understand their sales, and that decided what went into the dashboard and what stayed out.',
            },
            {
              title: 'The empty state comes first',
              body: 'It’s the first thing every new promoter sees, so it got the same care as the full dashboard.',
            },
            {
              title: 'Errors design the operation',
              body: 'The scanner is better explained by its eight results than by its main screen.',
            },
            {
              title: 'Payments set the order',
              body: 'Without Mercado Pago linked there are no sales, so the wizard asks for it before publishing.',
            },
            {
              title: 'Each role sees its own',
              body: 'The same sale feeds the rep’s view and the promoter’s ranking, with different permissions.',
            },
            {
              title: 'A Gantt chart designs too',
              body: 'Estimating each module in days to handoff set what got designed first and what could wait.',
            },
          ],
        },
        {
          type: 'summary',
          title: 'Conclusion',
          body: 'Moving from a consumer app to a SaaS changed the design question: from how Martina finds a party to how a promoter understands their sales and runs their night. It still needs to be measured with real usage, for example how many promoters publish their first event and how long it takes them.',
          large: true,
        },
      ],
    },
  ],
};
