import type { CaseStudy } from '../types';
import hero from '../../assets/projects/jodify-hero.jpg';
import designSystem from '../../assets/projects/jodify-design-system.jpg';
import finalScreens from '../../assets/projects/jodify-final.jpg';

export const jodify: CaseStudy = {
  slug: 'jodify',
  title: 'Jodify',
  tags: ['iOS', 'Android', 'Mobile app', 'Entertainment'],
  summary:
    'A native app to help electronic music fans discover and connect with local events in Latin America.',
  links: [
    { label: 'app store  →', href: 'https://apps.apple.com/ar/app/jodify/id6618110536' },
    { label: 'google play  →', href: 'https://play.google.com/store/apps/details?id=com.markajodi.jodifyapp&pli=1' },
    { label: 'check website', href: 'https://jodify.com.ar' },
    { label: 'view on behance', href: 'https://www.behance.net/gallery/212675977/Jodify-Diseno-y-lanzamiento-de-app' },
  ],
  meta: [
    { label: 'Role', value: 'UX/UI Designer' },
    { label: 'Timeline', value: 'Feb 2024 – Sep 2026' },
    { label: 'Tools', value: 'Figma, Design Systems' },
    { label: 'Platforms', value: 'iOS, Android' },
  ],
  hero: { src: hero, alt: 'JODIFY app home screen on an iPhone, next to App Store and Google Play badges' },
  stats: [
    { value: '100%', label: 'Task success rate in usability testing (5 of 5 users)' },
    { value: '~40 s', label: 'To find a relevant event, vs 3–5 min of endless scrolling on Instagram or Google' },
    { value: '1st', label: 'Centralized electronic music events platform in Latin America' },
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
              title: 'What is JODIFY?',
              body: "JODIFY centralizes the electronic music events near you. Platforms like RA, DICE and Shotgun don't operate in Latin America, so fans had no dedicated place to discover events.",
            },
            {
              title: 'The challenge',
              body: 'JODIFY only existed as a web app. The project adapted and redesigned it to meet App Store and Google Play requirements, with clear reasons to choose the native app over the web.',
            },
            {
              title: 'The problem',
              body: 'Electronic music is at its peak in Latin America, with the fastest revenue growth worldwide in 2024. Still, finding specific events, especially in subgenres, means digging through Instagram and Google.',
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
        {
          type: 'lead',
          text: 'Several personas guided the project, but “Martina” was the foundation for new features and design decisions.',
        },
        {
          type: 'persona',
          persona: {
            name: 'Martina',
            meta: '26  ·  University student  ·  Good tech skills',
            bio: 'A student who recently started going to electronic music parties. She can only go once or twice a month, so she researches and asks friends for recommendations to make the most of each night.',
            groups: [
              {
                label: 'Motivations',
                items: [
                  'Parties that match her music taste',
                  'Making the most of her limited free time',
                  'Discovering new subgenres and artists',
                ],
              },
              {
                label: 'Frustrations',
                items: [
                  'Hard to find parties on Instagram or Google',
                  'Far-away events that need extra transport',
                  'Endless scrolling without clear filters',
                ],
              },
            ],
          },
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
            { title: 'Primary objective', body: 'Adapt the existing web app to meet App Store and Google Play requirements.' },
            {
              title: 'Secondary objective',
              body: 'Give users compelling reasons to download the native app: a fast, centralized and location-aware experience.',
            },
          ],
        },
        { type: 'subhead', text: 'Key user needs' },
        {
          type: 'cards',
          cols: 4,
          items: [
            { title: 'Speed', body: 'Find relevant events without endless scrolling.' },
            { title: 'Filtering', body: 'Genre, subgenre, location and date filters.' },
            { title: 'Location clarity', body: 'Neighborhood visible at a glance.' },
            { title: 'Native features', body: 'Notifications and location services.' },
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
          text: 'The old web app was analyzed and broken into four components. A new design system then kept iOS and Android consistent.',
        },
        { type: 'chips', items: ['Branding', 'Search & Filters', 'Dates', 'Events'] },
        {
          type: 'cards',
          cols: 2,
          items: [
            { title: 'Roboto Condensed', body: 'Headings and emphasis' },
            { title: 'Work Sans', body: 'Body text and UI elements' },
          ],
        },
        {
          type: 'text',
          text: 'Components: buttons and tabs, event cards with location tags, filter tags, featured carousel, text fields, avatars, notifications, navigation and action icons.',
        },
        {
          type: 'image',
          src: designSystem,
          alt: 'JODIFY design system: buttons, tabs, icons, menus, text fields, event cards, profile avatars, tags and carousel',
        },
      ],
    },
    {
      id: 'testing',
      kicker: '04',
      nav: 'Testing',
      title: 'Testing',
      blocks: [
        { type: 'lead', text: 'Moderated usability test with 5 participants matching Martina’s profile.' },
        {
          type: 'quote',
          text: '“It’s Tuesday, and you want to plan your weekend. You’re in the mood for a ‘Techno’ party on Saturday, but you don’t have a car and want to find something in your area.”',
        },
        {
          type: 'cards',
          cols: 2,
          items: [
            {
              title: 'Task 1: find a “Techno” event for this Saturday',
              body: 'Tests the new search, filters and tags. Result: 100% success, all users used the filters to find a relevant event.',
            },
            {
              title: 'Task 2: find an event in “Palermo”',
              body: 'Tests whether event cards show key info clearly. Result: 100% success, all users read the location from the card without opening details.',
            },
          ],
        },
        {
          type: 'statement',
          text: 'Users found a relevant event in about 40 seconds on average, vs 3–5 minutes of endless scrolling on Instagram or Google.',
        },
        {
          type: 'cards',
          cols: 2,
          items: [
            {
              title: '“This is exactly what I need. Seeing the subgenre and the neighborhood on the card saves so much time.”',
              body: 'Participant feedback',
            },
            {
              title: '“I would definitely download this over using the website. It feels faster.”',
              body: 'Participant feedback',
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
          text: 'The JODIFY native app for iOS and Android: bottom navigation (Home, Search, Profile), a prominent event carousel and a clean, filterable list of events, all unified by the new design system and ready for launch.',
        },
        {
          type: 'cards',
          cols: 2,
          items: [
            { title: 'Smart filtering', body: 'Genre, subgenre, date and location filters help users find exactly what they want.' },
            { title: 'Location tags', body: 'Neighborhood tags on every card address transportation concerns.' },
            { title: 'Featured carousel', body: 'Highlighted events and recommendations at the top of the feed.' },
            { title: 'Native experience', body: 'Fast performance, push notifications and integration with iOS and Android.' },
          ],
        },
        {
          type: 'image',
          src: finalScreens,
          alt: 'Final JODIFY screens: event detail, home feed, artist profile and notifications',
        },
      ],
    },
  ],
};
