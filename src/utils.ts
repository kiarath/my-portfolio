/** Prefixes internal paths with the configured base (needed on GitHub Pages project sites). */
export function url(path = '/'): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  if (/^(https?:|mailto:|tel:|#)/.test(path)) return path;
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

/** True when a link has not been filled in yet. */
export const isPlaceholder = (href: string) => href === '#' || href.includes('example.com');
