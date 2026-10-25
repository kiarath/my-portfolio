import type { ImageMetadata } from 'astro';

export type Tone = 'ink' | 'muted' | 'coral';

export interface CardItem {
  title: string;
  /** A string, or several lines (rendered as separate lines / bullets). */
  body?: string | string[];
  /** Big number shown above the title (e.g. "70%"). */
  big?: string;
}

export interface Persona {
  name: string;
  meta: string;
  quote?: string;
  bio?: string;
  /** Labelled lists (Motivations, Frustrations…) or short label/value pairs. */
  groups: { label: string; items: string[] }[];
}

export type Block =
  | { type: 'lead'; text: string }
  | { type: 'text'; text: string }
  | { type: 'statement'; text: string }
  | { type: 'subhead'; text: string }
  | { type: 'label'; text: string }
  | { type: 'cards'; cols: 2 | 3 | 4; items: CardItem[] }
  | { type: 'columns'; items: { title: string; body: string }[] }
  | { type: 'persona'; persona: Persona }
  | { type: 'personas'; items: Persona[] }
  | { type: 'chips'; items: string[] }
  | { type: 'image'; src: ImageMetadata; alt: string }
  | { type: 'gallery'; cols: 2 | 3; images: { src: ImageMetadata; alt: string }[] }
  | { type: 'quote'; text: string }
  | {
      type: 'bars';
      /** Width of the label column in px (desktop). */
      labelWidth?: number;
      items: { label: string; value: string; ratio: number; tone: Tone }[];
    }
  | { type: 'flow'; steps: { label: string; tone: Tone }[]; legend?: { label: string; tone: Tone }[] }
  | { type: 'sitemap'; root: string; children: { label: string; sub?: string[] }[] }
  | { type: 'swatches'; groups: { label: string; colors: string[] }[] }
  | { type: 'tone'; scale: [string, string, string]; rows: { label: string; position: number; tone: Tone }[] }
  | { type: 'summary'; title: string; body: string; large?: boolean }
  | { type: 'link'; label: string; href: string };

export interface CaseSection {
  id: string;
  /** Small mono label above the title: "context", "01", "result"… */
  kicker: string;
  /** Label shown in the sticky index. */
  nav: string;
  title: string;
  blocks: Block[];
}

export interface CaseStudy {
  slug: string;
  title: string;
  tags: string[];
  summary: string;
  links: { label: string; href: string }[];
  meta: { label: string; value: string }[];
  hero: { src: ImageMetadata; alt: string };
  stats: { value: string; label: string }[];
  sections: CaseSection[];
  /** Link shown after the last section (e.g. full case on Behance). */
  closing?: { label: string; href: string };
  /** Show the coral accent block in the top-right corner (Veggy, Santillana). */
  accent?: boolean;
}

export interface ProjectCard {
  slug: string;
  name: string;
  kind: string;
  description: string;
  /** Spanish versions (language toggle). */
  es: { kind: string; description: string };
  image: ImageMetadata;
  /** Slug of the case study page, when one exists. */
  caseSlug?: string;
  links: { label: string; href: string }[];
  /** Hide the card (e.g. the site is not published yet). */
  hidden?: boolean;
}
