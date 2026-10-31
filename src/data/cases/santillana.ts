import type { CaseStudy } from '../types';
import hero from '../../assets/projects/santillana-hero.jpg';
import map1 from '../../assets/projects/santillana-map-1.jpg';
import map2 from '../../assets/projects/santillana-map-2.jpg';
import mobile1 from '../../assets/projects/santillana-mobile-1.jpg';
import mobile2 from '../../assets/projects/santillana-mobile-2.jpg';
import mobile3 from '../../assets/projects/santillana-mobile-3.jpg';
import firstImpression from '../../assets/projects/santillana-first-impression.jpg';
import step1 from '../../assets/projects/santillana-step-1.jpg';
import step2 from '../../assets/projects/santillana-step-2.jpg';

const live = 'https://dia-del-maestro.santillana.com.co/';

export const santillana: CaseStudy = {
  slug: 'santillana',
  title: 'Día del Maestro',
  tags: ['Web', 'Mobile-first', 'Campaign'],
  accent: true,
  summary:
    'A campaign site for Santillana Colombia where every teacher who registers lights up a point on the map of the country and enters a scholarship draw.',
  links: [{ label: 'view live site  →', href: live }],
  meta: [
    { label: 'Role', value: 'UX/UI Designer' },
    { label: 'Timeline', value: '2 weeks' },
    { label: 'Team', value: 'Marketing & Development' },
    { label: 'Platforms', value: 'Web, responsive' },
  ],
  hero: { src: hero, alt: 'Día del Maestro site on desktop and mobile: hero with teachers and the map of Colombia' },
  stats: [
    { value: '290', label: 'Teachers registered, from every corner of the country' },
    { value: '2.5×', label: 'The estimated goal of 80–100 teachers, more than doubled' },
    { value: '2', label: 'Weeks from brief to launch, with design and development in parallel' },
  ],
  sections: [
    {
      id: 'context',
      kicker: '01',
      nav: 'Context',
      title: 'Context',
      blocks: [
        {
          type: 'cards',
          cols: 2,
          items: [
            {
              icon: 'context',
              title: 'Context',
              body: 'Santillana Colombia wanted to celebrate Teacher’s Day with a site where each teacher who registers lights up a point on the map, leaves a public message and enters a draw for UNIR Master’s scholarships (100% and 70%) and a basket of books.',
            },
            {
              icon: 'problem',
              title: 'The challenge',
              body: 'With many registrations, the dots would pile up and the map would become unreadable. Most teachers would arrive from their phones, but the idea was imagined for desktop. And the map had to lead while still explaining the campaign.',
            },
            {
              icon: 'objective',
              title: 'Objective',
              body: 'Make every teacher visible across the whole country, in a flow simple enough to finish on a phone.',
            },
            {
              icon: 'solution',
              title: 'Solution',
              body: 'A map grouped by department with progressive zoom, a mobile-first responsive layout and an emotional hero that leads into a guided four-step registration.',
            },
          ],
        },
      ],
    },
    {
      id: 'constraints',
      kicker: '02',
      nav: 'Constraints',
      title: 'Constraints',
      blocks: [
        { type: 'lead', text: 'Two weeks and a client with firm requirements shaped most decisions.' },
        {
          type: 'cards',
          cols: 2,
          items: [
            {
              title: 'My role',
              body: 'UX/UI designer, working with marketing to keep the look and feel of the campaign and with development to know what was possible.',
            },
            {
              title: 'Two weeks',
              body: 'Not enough time for a formal study. Research became a quick test with people from the real audience.',
            },
            {
              title: 'A long form',
              body: 'The executives defined the registration form and it could not be shortened.',
            },
            {
              title: 'Share to unlock',
              body: 'Sharing on social media before receiving the distinction was a campaign requirement.',
            },
          ],
        },
        {
          type: 'statement',
          text: 'Inside those limits, I compensated with visible progress, transparency about what becomes public and writing aids.',
        },
      ],
    },
    {
      id: 'the-map',
      kicker: '03',
      nav: 'The map',
      title: 'The map',
      blocks: [
        {
          type: 'lead',
          text: 'The first idea was one dot per teacher. It didn’t hold: capitals like Bogotá would absorb almost every dot while the rest of the country looked empty, the opposite of a campaign about making teachers visible everywhere. So the map works on two levels.',
        },
        { type: 'subhead', text: 'Two-level navigation' },
        {
          type: 'flow',
          steps: [
            { label: 'Country view', tone: 'ink' },
            { label: 'Tap a department', tone: 'ink' },
            { label: 'Card with count and messages', tone: 'ink' },
            { label: 'Explore map', tone: 'coral' },
            { label: 'Individual points', tone: 'ink' },
          ],
        },
        {
          type: 'cards',
          cols: 3,
          items: [
            {
              title: 'Department level',
              body: 'Each department has its own color and a glowing point that signals activity. The overview stays balanced, on desktop and on a phone.',
            },
            {
              title: 'The card',
              body: 'Tapping a department opens a card with the teacher count, avatars and messages, in order of publication.',
            },
            {
              title: 'Zoom level',
              body: '“Explore map” zooms in and reveals each teacher’s individual point. Points separate and the view doesn’t saturate.',
            },
          ],
        },
        {
          type: 'summary',
          title: 'Filter by subject',
          body: 'Santillana asked for a filter by teaching area, so teachers can see how many colleagues work in their field. It lives as a quiet selector at the top left, without competing with the map.',
        },
        {
          type: 'gallery',
          cols: 2,
          images: [
            { src: map1, alt: 'Department view of the map with a glowing point per department' },
            { src: map2, alt: 'Department card for Córdoba with teacher count and messages' },
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
          text: 'Most teachers would open the site from their phones, yet the idea had been imagined for desktop. Everything was rebuilt as responsive, simple and thumb-friendly.',
        },
        {
          type: 'cards',
          cols: 3,
          items: [
            {
              title: 'Card',
              body: 'The floating card becomes a floating window: the map stays visible and the content sits within reach of the thumb.',
            },
            { title: 'Full-screen map', body: 'A full-screen button gives the small map room to be explored.' },
            {
              title: 'San Andrés inset',
              body: 'San Andrés y Providencia gets its own inset, so the islands stay visible and tappable.',
            },
            {
              title: 'Points as targets',
              body: 'The points are the interactive element, so small, adjacent departments in the center of the country weren’t a problem.',
            },
            {
              title: 'Single column',
              body: 'The form stacks in one column; development limits ruled out two columns on mobile.',
            },
            {
              title: 'Reworked hero',
              body: 'Five people become three, and the intro text leaves the glass card and grows, to read at a glance.',
            },
          ],
        },
        {
          type: 'gallery',
          cols: 3,
          images: [
            { src: mobile1, alt: 'Mobile hero with three teachers and the campaign title' },
            { src: mobile2, alt: 'Mobile map with the San Andrés inset and the tip below it' },
            { src: mobile3, alt: 'Mobile department window for Tolima with teacher messages' },
          ],
        },
        { type: 'subhead', text: 'Quick user test' },
        {
          type: 'text',
          text: 'Three teachers aged 40 to 65, the core audience, tried it on their phones. With two weeks in total, this was a quick check rather than a formal study. Their only friction point: the map didn’t read as interactive.',
        },
        {
          type: 'summary',
          title: 'The fix',
          body: 'A short tip below the map: “Tap the departments to see more teachers.” The map was the only friction point on mobile, and the tip resolved it.',
        },
      ],
    },
    {
      id: 'first-impression',
      kicker: '05',
      nav: 'First impression',
      title: 'First impression',
      blocks: [
        {
          type: 'lead',
          text: 'The map had to be the protagonist, but visitors also needed to understand what was happening. The hero opens first and the map peeks right below its curved edge, inviting the scroll.',
        },
        {
          type: 'cards',
          cols: 2,
          items: [
            {
              title: 'Emotion before action',
              body: 'A teacher who arrives on Teacher’s Day should first feel celebrated, and only then be asked for something. That is why the button comes after the intro, not above it.',
            },
            {
              title: 'Two paths',
              body: 'The pink button takes those who came to register; scrolling lets everyone else explore the map first.',
            },
            {
              title: 'Glass with more frost',
              body: 'The cards keep Santillana’s glass language, with higher frost opacity so the text reads clearly over a busy photo.',
            },
            {
              title: 'Social proof',
              body: 'A counter with avatars shows how many colleagues have already signed up, inviting others to be the next one.',
            },
          ],
        },
        { type: 'image', src: firstImpression, alt: 'Desktop hero with glass cards, the pink button and the map peeking below' },
      ],
    },
    {
      id: 'registration',
      kicker: '06',
      nav: 'Registration',
      title: 'Registration',
      blocks: [
        {
          type: 'lead',
          text: 'A guided four-step flow, with progress visible from the start, to make a long form feel manageable.',
        },
        { type: 'label', text: '01  Registration' },
        {
          type: 'text',
          text: '“Step 1 of 4” and a navigation bar show how far she is and what she gets at the end. The form is long by client decision, so a suggested message helps anyone who doesn’t know what to write, and the photo is the only optional field.',
        },
        { type: 'image', src: step1, alt: 'Registration form, step 1 of 4' },
        { type: 'label', text: '02  My point and sharing' },
        {
          type: 'text',
          text: 'A preview of her message, then a prompt to share on social media, which unlocks the distinction. What becomes public is explained in three places: the character counter, the legal note next to the button and this preview.',
        },
        { type: 'image', src: step2, alt: 'Step 2: message preview and share-to-unlock buttons' },
        { type: 'label', text: '03  Celebration' },
        {
          type: 'text',
          text: 'The moment of celebration: she sees her own point on the map and receives her participation certificate.',
        },
        { type: 'label', text: '04  Teacher Kit' },
        { type: 'text', text: 'A final screen with educational PDFs.' },
      ],
    },
    {
      id: 'results',
      kicker: '07',
      nav: 'Results',
      title: 'Results',
      blocks: [
        { type: 'lead', text: 'The campaign estimated between 80 and 100 teachers. It reached 290.' },
        { type: 'subhead', text: 'Registered teachers vs. estimated goal' },
        {
          type: 'bars',
          labelWidth: 260,
          items: [
            { label: 'Estimated goal', value: '80–100', ratio: 0.29, tone: 'muted' },
            { label: 'Registered teachers', value: '290', ratio: 0.83, tone: 'ink' },
          ],
        },
        { type: 'statement', text: '290 teachers registered, more than 2.5 times the estimated goal.' },
        {
          type: 'summary',
          title: 'Conclusion',
          body: 'Santillana was happy with the result and described the numbers as higher than expected. Working inside real constraints (a long form, a share-to-unlock step, a single-column mobile form), the experience held up through visible progress, honest communication about what becomes public and a map that stays readable at any scale. A quick test with three people from the real audience was enough to find, and fix, the only serious friction on mobile.',
        },
      ],
    },
  ],
  closing: { label: 'view live site  →', href: live },
};
