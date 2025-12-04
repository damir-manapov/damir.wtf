export const baseUrl = 'https://portfolio-blog-starter.vercel.app';

interface SitemapEntry {
  url: string;
  lastModified: string;
}

export default function sitemap(): SitemapEntry[] {
  const today = new Date().toISOString().split('T')[0] ?? '2025-01-01';
  const routes = [''].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: today,
  }));

  return routes;
}
