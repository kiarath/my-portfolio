import type { CaseStudy } from '../types';
import hero from '../../assets/projects/cinear-hero.jpg';
import platform from '../../assets/projects/cinear-platform.jpg';

const behance = 'https://www.behance.net/gallery/185152481/Cine-AR-Rediseno-Web';

export const cinear: CaseStudy = {
  slug: 'cinear',
  title: 'Cine.AR',
  tags: ['Web', 'Entertainment', 'Streaming'],
  summary:
    'A complete web redesign for Cine.AR, an Argentinian-focused free streaming service, enhancing the user experience and showcasing local cinema.',
  links: [{ label: 'view on behance  →', href: behance }],
  meta: [
    { label: 'Role', value: 'UX/UI Designer' },
    { label: 'Timeline', value: '2023' },
    { label: 'Tools', value: 'Figma' },
    { label: 'Platforms', value: 'Web' },
  ],
  hero: { src: hero, alt: 'Redesigned Cine.AR home page on a laptop' },
  stats: [
    { value: '95%', label: 'Success rate in the second tree test, up from 35% with the original structure' },
    { value: '100%', label: 'Of users completed every task (choose and rent a movie) in moderated testing' },
    { value: '8/10', label: 'Users described the original platform as “slow” during research' },
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
              title: 'What is CINE.AR PLAY?',
              body: 'A free streaming platform focused on content produced in Argentina: films, series and documentaries. Originally presented as the “Netflix Criollo”, it features thousands of hours of varied curation.',
            },
            {
              title: 'Why a redesign?',
              body: 'Despite the amount of content, users struggle to navigate and find what they want. The last redesign was in 2017, so research came first to see what could improve.',
            },
            {
              title: 'The problem',
              body: 'Interest in Argentine cinema is growing, helped by international awards. But in a saturated market the web app fell behind Netflix or Prime Video, making it hard to stand out and attract new users.',
            },
          ],
        },
      ],
    },
    {
      id: 'research',
      kicker: '01',
      nav: 'Research',
      title: 'Research',
      blocks: [
        { type: 'lead', text: '10 Argentine users, all regular streaming users.' },
        { type: 'subhead', text: 'Where do they watch Argentine cinema?' },
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
        { type: 'subhead', text: 'Why do they prefer them?' },
        {
          type: 'cards',
          cols: 2,
          items: [
            { title: '“It’s very easy to find movies…”', body: 'Prime Video user' },
            { title: '“…I can find things faster.”', body: 'Netflix user' },
          ],
        },
        { type: 'subhead', text: 'Key findings with the original platform' },
        {
          type: 'cards',
          cols: 3,
          items: [
            { big: '70%', title: '', body: 'first met Cine.AR through the web platform' },
            { big: '8/10', title: '', body: 'described the platform as “slow”' },
            { big: '60%', title: '', body: 'find the interface disorganized' },
            { big: '80%', title: '', body: 'find the video player options limited' },
            { big: '7/10', title: '', body: 'had problems with the page’s slowness' },
          ],
        },
        { type: 'subhead', text: 'User personas' },
        {
          type: 'personas',
          items: [
            {
              name: 'Martina',
              meta: '28  ·  Graphic designer  ·  Good tech level',
              quote: '“I love Argentine cinema, I’ve seen many movies and I’d like to change some things.”',
              groups: [
                { label: 'Goal', items: ['Find inspiration in local films; explore her own culture.'] },
                { label: 'Motivation', items: ['Discover new local productions through films.'] },
                { label: 'Frustration', items: ['Takes long to choose; skeptical about the volume of content on screen.'] },
              ],
            },
            {
              name: 'Cristina',
              meta: '28  ·  Primary school teacher  ·  Good tech level',
              quote: '“Cinema is my perfect escape; I love finding movies from the comfort of my home.”',
              groups: [
                { label: 'Goal', items: ['Find a platform with a wide variety of movies.'] },
                { label: 'Motivation', items: ['Support the national industry; enjoy film premieres.'] },
                { label: 'Frustration', items: ['Hard to navigate for a non-expert; slow to learn.'] },
              ],
            },
          ],
        },
        { type: 'subhead', text: 'User journey: Martina' },
        {
          type: 'text',
          text: 'After a long day at work she wants to relax with an Argentine movie that fits her interests, quickly and easily.',
        },
        {
          type: 'flow',
          steps: [
            { label: 'Open browser', tone: 'ink' },
            { label: 'Go to play.cine.ar', tone: 'ink' },
            { label: 'Click “Log in”', tone: 'ink' },
            { label: 'Enter username and password', tone: 'muted' },
            { label: 'Browse the homepage', tone: 'coral' },
            { label: 'Click on a movie', tone: 'coral' },
            { label: 'Read the synopsis', tone: 'coral' },
            { label: 'Click “Play”', tone: 'muted' },
          ],
          legend: [
            { label: 'smooth', tone: 'ink' },
            { label: 'neutral', tone: 'muted' },
            { label: 'friction', tone: 'coral' },
          ],
        },
        {
          type: 'cards',
          cols: 2,
          items: [
            { title: 'Login', body: 'No “forgot password” option or alternative login methods (e.g. Google).' },
            { title: 'Homepage', body: 'Messy and hard to understand; the user doesn’t know what to choose.' },
            { title: 'Synopsis', body: 'If the user doesn’t like it, they have to go back and repeat the whole selection.' },
            { title: 'Player', body: 'Lacks full controls: subtitles, playback speed and related content.' },
          ],
        },
        { type: 'subhead', text: 'Opportunities identified' },
        {
          type: 'columns',
          items: [
            { title: 'Faster login', body: 'Add more login options.' },
            { title: 'Clearer homepage', body: 'Improve the content hierarchy and speed up movie selection.' },
            { title: 'Fuller player', body: 'Add more options to make it accessible and consistent.' },
          ],
        },
      ],
    },
    {
      id: 'requirements',
      kicker: '02',
      nav: 'Requirements',
      title: 'Requirements',
      blocks: [
        { type: 'subhead', text: 'Needs matrix' },
        {
          type: 'cards',
          cols: 3,
          items: [
            {
              title: 'Speed up login',
              body: ['The user has to type their details every time.', 'Solution: add login options (Google, Facebook).'],
            },
            {
              title: 'Clearer homepage hierarchy',
              body: [
                'The homepage is disorganized and hard to navigate.',
                'Solution: add “Recommendations” at the start and new-content buttons.',
              ],
            },
            {
              title: 'More player options',
              body: [
                'The player lacks basics like subtitles and playback speed.',
                'Solution: add buttons for subtitles, speed and more.',
              ],
            },
          ],
        },
        { type: 'subhead', text: 'Prioritization: feasibility, viability and desirability' },
        {
          type: 'cards',
          cols: 2,
          items: [
            {
              title: 'Priority 1 (high)',
              body: [
                '• Fewer elements on the homepage',
                '• Synopsis visible from the homepage',
                '• Filter by genre',
                '• Faster login (Google/Facebook)',
              ],
            },
            {
              title: 'Priority 2',
              body: ['• “Recommendations” based on user behavior', '• Rename “My List” to “My Favorites”'],
            },
            {
              title: 'Priority 3',
              body: ['• Icons for different user profiles', '• Clear difference between rented and free content'],
            },
            {
              title: 'Priority 4 (low)',
              body: [
                '• “Trends” section',
                '• Trailers before playing',
                '• Better visibility of player options',
                '• Faster search',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'structure',
      kicker: '03',
      nav: 'Structure',
      title: 'Structure',
      blocks: [
        { type: 'lead', text: 'Method: first tree test, then card sorting, then a second tree test.' },
        { type: 'subhead', text: 'Tree testing success rate' },
        {
          type: 'bars',
          labelWidth: 150,
          items: [
            { label: 'Original structure', value: '35%', ratio: 0.365, tone: 'muted' },
            { label: 'New structure', value: '95%', ratio: 0.99, tone: 'ink' },
          ],
        },
        {
          type: 'cards',
          cols: 2,
          items: [
            {
              title: '1st tree test: original structure',
              body: [
                'Success rate: 35%.',
                '60% failed to find a purchased movie: labels like “Mi Sala” were ambiguous.',
                '80% failed to find a comedy: the genre path was unclear and fragmented.',
              ],
            },
            {
              title: '2nd tree test: new structure',
              body: [
                'Success rate: 95%.',
                '90% found a purchased movie (Home → My Purchases).',
                '100% found a comedy (Home → Movies → Comedy).',
              ],
            },
          ],
        },
        {
          type: 'text',
          text: 'Based on the first test, a card sorting exercise produced a new, simplified sitemap.',
        },
        {
          type: 'sitemap',
          root: 'Home',
          children: [
            { label: 'Movies' },
            { label: 'Series' },
            { label: 'My List' },
            { label: 'My Purchases' },
            { label: 'My Profile' },
            { label: 'Help' },
          ],
        },
      ],
    },
    {
      id: 'skeleton',
      kicker: '04',
      nav: 'Skeleton',
      title: 'Skeleton',
      blocks: [
        { type: 'subhead', text: 'Moderated usability testing' },
        {
          type: 'quote',
          text: 'You come back from work and feel like exploring Argentine cinema, so you decide to test this “Cine.Ar” page.',
        },
        {
          type: 'cards',
          cols: 2,
          items: [
            {
              title: 'Task 1: choose a movie',
              body: ['Objective: the user can choose a movie quickly.', 'Success criterion: play a movie.'],
            },
            {
              title: 'Task 2: rent a movie',
              body: ['Objective: the user can rent a movie.', 'Success criterion: complete the payment process.'],
            },
          ],
        },
        {
          type: 'summary',
          large: true,
          title: 'Result: 4 of 4 users completed every task',
          body: '4 users with medium-low tech skills, ages 18–30.',
        },
      ],
    },
    {
      id: 'surface',
      kicker: '05',
      nav: 'Surface',
      title: 'Surface',
      blocks: [
        { type: 'subhead', text: 'The Golden Circle' },
        {
          type: 'cards',
          cols: 3,
          items: [
            {
              title: 'Why?',
              body: 'A streaming service for Argentine movies, series and documentaries, with information, premieres and more.',
            },
            {
              title: 'How?',
              body: 'By democratizing Latin American cinema: helping people connect with their roots through quality content that reflects their reality.',
            },
            {
              title: 'What?',
              body: 'A platform that streamlines search, helping users find movies and documentaries by genre, with recommendations based on their tastes.',
            },
          ],
        },
        { type: 'subhead', text: 'Tone of voice' },
        {
          type: 'text',
          text: 'A timeline set the tone of voice, from friendly to serious, depending on the user’s task.',
        },
        {
          type: 'tone',
          scale: ['Friendly', 'Neutral', 'Serious'],
          rows: [
            { label: 'Onboarding', position: 0, tone: 'ink' },
            { label: 'Choose content', position: 0, tone: 'ink' },
            { label: 'Log in', position: 0.5, tone: 'muted' },
            { label: 'Validate payment', position: 1, tone: 'coral' },
            { label: 'Watch content', position: 0, tone: 'ink' },
          ],
        },
        { type: 'image', src: platform, alt: 'Final Cine.AR interface: featured film, trends and continue watching rows' },
      ],
    },
    {
      id: 'impact',
      kicker: 'result',
      nav: 'Impact',
      title: 'Impact',
      blocks: [
        {
          type: 'lead',
          text: 'The redesign had a direct, measurable impact on the platform’s usability and addressed the core problems found in the initial research.',
        },
        {
          type: 'cards',
          cols: 3,
          items: [
            { title: 'Navigation', body: 'Task success in tree testing rose from 35% to 95%.' },
            { title: 'Core tasks', body: '100% of users completed choosing and renting a movie in moderated testing.' },
            {
              title: 'Data-driven fixes',
              body: 'The interface that 60% of users called disorganized was replaced by a validated, user-centric structure.',
            },
          ],
        },
      ],
    },
  ],
  closing: { label: 'view full case study on behance  →', href: behance },
};
