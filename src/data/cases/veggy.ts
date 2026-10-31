import type { CaseStudy } from '../types';
import hero from '../../assets/projects/veggy-hero.jpg';
import dendrogram from '../../assets/projects/veggy-dendrogram.jpg';
import wfHand from '../../assets/projects/veggy-wf-hand.jpg';
import wfLow from '../../assets/projects/veggy-wf-low.jpg';
import wfMid from '../../assets/projects/veggy-wf-mid.jpg';
import wfHigh from '../../assets/projects/veggy-wf-high.jpg';
import iteration from '../../assets/projects/veggy-iteration.jpg';
import ilNadiaVeggy from '../../assets/personas/nadia-veggy.svg?raw';

const behance = 'https://www.behance.net/gallery/176414951/Vegan-App-UXUI-Case-Study';

export const veggy: CaseStudy = {
  slug: 'veggy',
  title: 'Veggy',
  tags: ['Mobile', 'Food', 'Research'],
  accent: true,
  summary:
    'A UX/UI case study for a mobile app that finds nearby restaurants with vegan options, reviewed by people who actually eat vegetarian or vegan.',
  links: [{ label: 'view on behance  →', href: behance }],
  meta: [
    { label: 'Role', value: 'UX/UI Designer & Researcher' },
    { label: 'Timeline', value: '2023' },
    { label: 'Tools', value: 'Figma, User Research' },
    { label: 'Platforms', value: 'Mobile' },
  ],
  hero: { src: hero, alt: 'Veggy app: restaurant detail and map screens on two phones' },
  stats: [
    { value: '95%', label: 'Of users found it simple to find a restaurant in the first usability test' },
    { value: '15%', label: 'Of users had difficulty in the second test, down from 35% after the design changes' },
    { value: '2', label: 'Rounds of usability testing, each followed by design iterations' },
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
              icon: 'context',
              title: 'Context',
              body: 'More people are vegetarian or vegan, and restaurants are adding more veggie options to their menus.',
            },
            {
              icon: 'problem',
              title: 'The problem',
              body: 'Many of those options exist just to meet demand and appear as “veggie” on Google Maps or Tripadvisor. Reviews often come from people who don’t eat vegetarian food, so good places are hard to find.',
            },
            {
              icon: 'objective',
              title: 'Objective',
              body: 'Help people find vegetarian restaurants and options nearby, with reliable information about each place.',
            },
            {
              icon: 'solution',
              title: 'Solution',
              body: 'Use geolocation to show the closest veggie-friendly places, with reviews written only by members of the veggie community.',
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
            name: 'Nadia',
            illustration: ilNadiaVeggy,
            meta: '26  ·  Programmer  ·  Wants to find new restaurants',
            quote:
              '“When we try new places, the vegan offer on their menus is usually limited and not very varied, so we end up going to the same restaurants.”',
            bio: 'She works from home and enjoys going out to eat with her partner to break the routine, but bad past experiences with limited, low-quality vegan options hold them back.',
            groups: [
              {
                label: 'Goals',
                items: ['Discover new flavors and foods', 'Go out of the house more', 'Find new places to go with her partner'],
              },
              { label: 'Motivations', items: ['Discover new flavors', 'Have good moments with her partner'] },
              {
                label: 'Frustrations',
                items: [
                  'Rarely finds info about specific vegan dishes',
                  'Doesn’t trust reviews from non-vegan users',
                  'Afraid of taking her partner to a bad restaurant',
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
      nav: 'Scope',
      title: 'Scope: MVP',
      blocks: [
        {
          type: 'lead',
          text: 'For Nadia, I defined four core features for the minimum viable product.',
        },
        {
          type: 'cards',
          cols: 2,
          items: [
            {
              icon: 'pin',
              title: 'Find restaurants',
              body: 'Veggie-friendly places as soon as the app opens, sorted by distance, on a map with a list below.',
            },
            {
              icon: 'search',
              title: 'Search',
              body: 'A search bar for cuisines (Mexican, Japanese…) or specific dishes (empanadas, sushi, pizza).',
            },
            {
              icon: 'star',
              title: 'Read reviews',
              body: 'Reviews from verified veggie users, star ratings for places and dishes, vegan/vegetarian labels and helpful votes.',
            },
            {
              icon: 'pencil',
              title: 'Write reviews',
              body: 'Rate the place, the dish and the experience, mark the dish as vegan or vegetarian and upload photos.',
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
        {
          type: 'lead',
          text: 'A dendrogram showed how users group information, revealing five main categories.',
        },
        { type: 'chips', items: ['Search / Home', 'Home / Menu', 'Restaurant search / Map', 'Home / Restaurants', 'My profile'] },
        { type: 'image', src: dendrogram, alt: 'Dendrogram from the card sorting, grouping features into five categories' },
        { type: 'subhead', text: 'Information architecture' },
        {
          type: 'sitemap',
          root: 'Home',
          children: [
            { label: 'Explore', sub: ['Recommendations', 'Filters', 'New places'] },
            { label: 'Search' },
            { label: 'Favorites' },
            { label: 'My profile', sub: ['Settings', 'Personal data', 'My reviews', 'Favorite places'] },
            { label: 'Map', sub: ['Restaurant info', 'Restaurant list'] },
          ],
        },
        { type: 'subhead', text: 'User flow' },
        {
          type: 'flow',
          steps: [
            { label: 'Open app', tone: 'ink' },
            { label: 'Log in', tone: 'ink' },
            { label: 'Explore', tone: 'ink' },
            { label: 'Choose a restaurant', tone: 'ink' },
            { label: 'Check veggie reviews', tone: 'coral' },
            { label: 'Go to the restaurant', tone: 'ink' },
            { label: 'Write a review', tone: 'ink' },
          ],
        },
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
          text: 'I took the structure to screens, from hand-drawn sketches to high fidelity.',
        },
        { type: 'label', text: '01  Hand-drawn wireframes' },
        {
          type: 'text',
          text: 'Sketches of the five core screens: Home, Explore, Restaurant, Directions and Write review.',
        },
        { type: 'image', src: wfHand, alt: 'Hand-drawn wireframes of the five core screens' },
        { type: 'label', text: '02  Low fidelity' },
        { type: 'text', text: 'Digital versions that set the basic layout and component placement.' },
        { type: 'image', src: wfLow, alt: 'Low-fidelity wireframes' },
        { type: 'label', text: '03  Medium fidelity' },
        {
          type: 'text',
          text: 'Standard patterns, grayscale images and the icon set: a functional but unstyled version.',
        },
        { type: 'image', src: wfMid, alt: 'Medium-fidelity grayscale screens' },
        { type: 'label', text: '04  High fidelity' },
        { type: 'text', text: 'The final UI kit: color, typography and polished components.' },
        { type: 'image', src: wfHigh, alt: 'High-fidelity screens with the green Veggy UI kit' },
      ],
    },
    {
      id: 'validation',
      kicker: '06',
      nav: 'Validation',
      title: 'Validation',
      blocks: [
        {
          type: 'lead',
          text: 'Users tested the medium-fidelity prototype, to analyze their paths, find inconsistencies and spot difficulties in the flow.',
        },
        {
          type: 'cards',
          cols: 2,
          items: [
            { title: 'Were you able to find what you were looking for?' },
            { title: 'Did you have any difficulty?' },
            { title: 'How simple was it to use the app?' },
            { title: 'How simple was it to find a restaurant?' },
          ],
        },
        { type: 'subhead', text: 'First usability test' },
        {
          type: 'bars',
          labelWidth: 260,
          items: [
            { label: 'Found it simple to find a restaurant', value: '95%', ratio: 0.83, tone: 'ink' },
            { label: 'Found what they were looking for', value: '65%', ratio: 0.57, tone: 'muted' },
            { label: 'Found the app easy to use', value: '65%', ratio: 0.57, tone: 'muted' },
            { label: 'Had some difficulty', value: '35%', ratio: 0.31, tone: 'coral' },
          ],
        },
        {
          type: 'text',
          text: 'The core flow worked, which validated the Explore and Map architecture. Secondary features and overall navigation were less intuitive, so the next step was to clarify My Profile and make Search and Filters easier to find.',
        },
      ],
    },
    {
      id: 'iteration',
      kicker: '07',
      nav: 'Iteration',
      title: 'Iteration',
      blocks: [
        { type: 'lead', text: 'Changes applied after the first round of feedback:' },
        {
          type: 'cards',
          cols: 3,
          items: [
            { title: 'Onboarding animations', body: 'Short animations at launch explain how to use the app.' },
            { title: 'More restaurant info', body: 'Users 1, 2 and 5 missed addresses and phone numbers.' },
            { title: 'Review filters', body: 'User 4 wanted to filter reviews.' },
            {
              title: 'Report problems',
              body: '“What if the information is wrong?” Added an option to report errors.',
            },
            {
              title: 'Walking or driving',
              body: 'Users asked which directions were shown, so both are now available.',
            },
            { title: 'UI corrections', body: 'Clearer ways to exit reviews and move back between screens.' },
          ],
        },
        { type: 'image', src: iteration, alt: 'Iterated Veggy screens after the first usability test' },
        { type: 'subhead', text: 'Second usability test' },
        {
          type: 'bars',
          labelWidth: 260,
          items: [
            { label: 'Had some difficulty (1st test)', value: '35%', ratio: 0.31, tone: 'muted' },
            { label: 'Had some difficulty (2nd test)', value: '15%', ratio: 0.13, tone: 'ink' },
          ],
        },
        {
          type: 'statement',
          text: 'Users with difficulties dropped from 35% to 15%, cutting friction by more than half.',
        },
        {
          type: 'summary',
          title: 'Conclusion',
          body: 'The first prototype confirmed the core idea: 95% found it simple to find a restaurant. A working core wasn’t enough, though: review filters, error reports and clearer UI cues, all from user feedback, are what made the app easy to trust.',
        },
      ],
    },
  ],
  closing: { label: 'view full case study on behance  →', href: behance },
};
