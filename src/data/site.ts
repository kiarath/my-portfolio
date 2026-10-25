/**
 * Global links and settings.
 * Global links used across the site.
 */
export const site = {
  name: 'Kiara Correa',
  title: 'Kiara Correa — UX/UI & Product Designer',
  description:
    'Product & graphic designer with expertise in UX/UI and visual identity: user research, prototyping and design systems.',
  links: {
    email: 'mailto:kiaracorrea.work@gmail.com',
    linkedin: 'https://www.linkedin.com/in/kiara-correa/',
    /** One resume per language: the active language decides which one opens. */
    resume: {
      en: 'https://drive.google.com/file/d/1kZ580G0D5ZuJrEBjy2N1U_e679s3bFAT/view?usp=sharing',
      es: 'https://drive.google.com/file/d/1NvDeZhtxbmOt-7aTT3WZl2eOwoHsSNvc/view?usp=sharing',
    },
    github: 'https://github.com/kiarath/my-portfolio',
    behance: 'https://www.behance.net/kiaracorrea',
  },
} as const;

export type Lang = 'en' | 'es';

/** UI strings shared by every page. Project case studies are written in English. */
export const ui = {
  en: {
    projects: 'projects',
    resume: 'resume',
    contact: 'contact',
    allProjects: 'All projects',
    nextProject: 'next project',
    letsCreate: 'let’s create',
    footerText:
      "did you like my portfolio or want to share feedback? I'm open to connecting with other professionals in design, technology, and innovation.",
    sendMessage: 'send me a message',
    letsConnect: 'let’s connect',
    checkResume: 'check my resume',
  },
  es: {
    projects: 'proyectos',
    resume: 'cv',
    contact: 'contacto',
    allProjects: 'Todos los proyectos',
    nextProject: 'siguiente proyecto',
    letsCreate: 'creemos algo',
    footerText:
      '¿Te gustó mi portafolio o querés dejarme feedback? Estoy abierta a conectar con otros profesionales del diseño, la tecnología y la innovación.',
    sendMessage: 'enviame un mensaje',
    letsConnect: 'conectemos',
    checkResume: 'mirá mi cv',
  },
} as const;
