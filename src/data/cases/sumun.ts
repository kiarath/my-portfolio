import type { CaseStudy } from '../types';
import hero from '../../assets/projects/sumun-hero.jpg';
import siteHome from '../../assets/projects/sumun-site.jpg';

export const sumun: CaseStudy = {
  slug: 'sumun',
  title: 'SUMUN',
  tags: ['Web', 'Responsive', 'EdTech', 'AI'],
  summary:
    'Website for SUMUN by Santillana, an educational proposal powered by AI and real-time data, built to explain its three pillars to school leaders, teachers and families.',
  links: [{ label: 'visit website  →', href: 'https://sumunlatam.com' }],
  meta: [
    { label: 'Role', value: 'UX/UI Designer' },
    { label: 'Timeline', value: '2026' },
    { label: 'Tools', value: 'Figma, Responsive Design' },
    { label: 'Platforms', value: 'Web: desktop and mobile' },
  ],
  hero: { src: hero, alt: 'SUMUN home page hero: “Lideramos la nueva revolución educativa con IA y datos”' },
  stats: [
    { value: '3', label: 'Pillars: High-Performance Culture, High Tech and Curricular Intelligence' },
    { value: '4', label: 'Audiences: school leaders, teachers, families and students' },
    { value: '2', label: 'Responsive versions ready for development: desktop (1440 px) and mobile (375 px)' },
  ],
  sections: [
    {
      id: 'overview',
      kicker: 'context',
      nav: 'Overview',
      title: 'Overview',
      blocks: [
        {
          type: 'columns',
          items: [
            {
              title: 'What is SUMUN?',
              body: 'SUMUN combines artificial intelligence, learning data and pedagogical method to help schools achieve deeper, measurable learning. It rests on three pillars, plus an AI Tutor available 24/7 and a library of free resources.',
            },
            {
              title: 'The design challenge',
              body: 'Schools face generative AI and pressure to measure learning beyond exams. The site had to explain a layered proposal clearly, build trust with decision-makers and still feel human to teachers and families.',
            },
            {
              title: 'The problem',
              body: 'Several audiences and abstract ideas, like macro and micro skills or curricular intelligence. Without a clear structure, visitors could not tell what SUMUN is, what it changes and where to go next.',
            },
          ],
        },
      ],
    },
    {
      id: 'audience',
      kicker: '01',
      nav: 'Audience',
      title: 'Audience',
      blocks: [
        {
          type: 'lead',
          text: 'The site speaks to four audiences, each looking for something different. The content hierarchy was designed around those needs.',
        },
        {
          type: 'cards',
          cols: 2,
          items: [
            { title: 'School leaders', body: 'Need evidence to make decisions: real-time pedagogical data and measurable results.' },
            { title: 'Teachers', body: 'Look for support in planning and assessment, with ready-to-use content and tools.' },
            { title: 'Families', body: "Want visibility of their children's progress and resources to get involved." },
            { title: 'Students', body: 'Benefit from personalized 24/7 guidance that builds habits, autonomy and critical thinking.' },
          ],
        },
      ],
    },
    {
      id: 'objectives',
      kicker: '02',
      nav: 'Objectives',
      title: 'Objectives',
      blocks: [
        {
          type: 'cards',
          cols: 2,
          items: [
            {
              title: 'Primary objective',
              body: 'Communicate the SUMUN proposal clearly and consistently, from the home page to each of its three pillars and the AI Tutor.',
            },
            {
              title: 'Secondary objective',
              body: 'Build credibility and invite action: show the people behind SUMUN, share expert voices and free resources, and lead visitors to try the AI demo.',
            },
          ],
        },
        { type: 'subhead', text: 'Key needs' },
        {
          type: 'cards',
          cols: 4,
          items: [
            { title: 'Clarity', body: 'Explain complex ideas in layers: promise, pillar, detail.' },
            { title: 'Trust', body: 'Real people, expert conversations and partners up front.' },
            { title: 'Easy navigation', body: 'Each audience finds its content in a few clicks.' },
            { title: 'Responsive', body: 'Consistent on desktop and mobile, where many families visit.' },
          ],
        },
      ],
    },
    {
      id: 'design-system',
      kicker: '03',
      nav: 'Design system',
      title: 'Design system',
      blocks: [
        {
          type: 'lead',
          text: 'The navigation was organized into four main areas, each answering a different question from the visitor.',
        },
        {
          type: 'cards',
          cols: 4,
          items: [
            { title: 'Product Vision', body: 'Overview, Culture, High Tech, Curricular Intelligence and AI Tutor.' },
            { title: 'Conversaciones Sumun', body: 'Expert voices, featured articles and a filterable blog.' },
            { title: 'About Us', body: 'Team pages, identity (purpose, mission, values) and social impact.' },
            { title: 'Resources & News', body: 'A searchable resource library, news and the AI demo.' },
          ],
        },
        {
          type: 'lead',
          text: 'A visual language that mixes institutional seriousness with warmth: deep teal for trust, orange for energy, and translucent glass-like 3D shapes and flowing ribbons that give the technology a human, organic feel.',
        },
        {
          type: 'swatches',
          groups: [
            { label: 'Primary colors', colors: ['#003D4C', '#0095CD'] },
            { label: 'Secondary colors', colors: ['#F15A2E', '#FF6306', '#006678'] },
          ],
        },
        {
          type: 'cards',
          cols: 2,
          items: [
            { title: 'Manrope', body: 'Headings, body text and most of the interface' },
            { title: 'Figtree', body: 'Supporting UI labels and details' },
          ],
        },
        {
          type: 'text',
          text: 'Components: navigation bar with menus and AI demo button, pillar tabs, benefit cards with product UI fragments, “With / Without SUMUN” comparison blocks, numbered step modules, article cards with category and audience tags, resource cards with filters and pagination, team cards, carousels and footer.',
        },
      ],
    },
    {
      id: 'iteration',
      kicker: '04',
      nav: 'Iteration',
      title: 'Iteration',
      blocks: [
        {
          type: 'lead',
          text: 'The design was refined through review rounds, kept in a dedicated page of the Figma file, and then adapted to mobile.',
        },
        {
          type: 'cards',
          cols: 2,
          items: [
            {
              title: 'Review rounds',
              body: 'Every page was reviewed and refined, including variants such as resource filters, the article template and the blog.',
            },
            {
              title: 'Mobile adaptation',
              body: 'Desktop layouts (1440 px) rethought for 375 px screens: banners, pillars, team carousel, conversations, news and social impact.',
            },
            {
              title: 'Individual team pages',
              body: 'Each leadership member got a detail page, reinforcing the human side of the brand.',
            },
            {
              title: 'Image system',
              body: 'A dedicated page sets standard formats (small, medium, large, wide) so photography stays consistent across cards, banners and sections.',
            },
          ],
        },
      ],
    },
    {
      id: 'final-solution',
      kicker: '05',
      nav: 'Final solution',
      title: 'Final solution',
      blocks: [
        {
          type: 'lead',
          text: 'A complete, responsive website: a home page that tells the story, a system overview, one page per pillar, the AI Tutor, a resource library, the Conversaciones Sumun hub, and the identity, team and social impact pages, all on the same visual language.',
        },
        {
          type: 'cards',
          cols: 2,
          items: [
            {
              title: 'Layered storytelling',
              body: 'Each page adds one level of detail and shows the “With / Without SUMUN” contrast.',
            },
            {
              title: 'Product in context',
              body: 'Progress dashboards, daily goals and the AI Tutor chat appear inside the pages, so visitors see the product, not just read about it.',
            },
            {
              title: 'Thought leadership hub',
              body: 'Conversaciones Sumun features its experts, a highlighted article and a filterable list with category and audience tags.',
            },
            {
              title: 'Resource library',
              body: 'Search, filters by type and audience, and pagination to browse free videos, reports and guides.',
            },
          ],
        },
        { type: 'image', src: siteHome, alt: 'SUMUN home page: hero, value proposition and the three pillar cards' },
        { type: 'subhead', text: 'Deliverables' },
        {
          type: 'columns',
          items: [
            {
              title: 'Complete site system',
              body: 'Home, overview, pillars, AI Tutor, resources, conversations, identity, team and social impact.',
            },
            { title: 'Responsive design', body: 'Desktop (1440 px) and mobile (375 px) versions ready for development.' },
            {
              title: 'Consistent visual language',
              body: 'Reusable components and an image system that keep each page aligned with the brand.',
            },
          ],
        },
      ],
    },
  ],
};
