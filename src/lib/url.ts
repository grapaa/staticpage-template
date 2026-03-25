/**
 * Prefix a path with Astro's base URL.
 * Use this for all internal links so they work correctly
 * when deployed to a subpath (e.g. github.io/repo-name).
 */
export function url(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path}`;
}
