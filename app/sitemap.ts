import { MetadataRoute } from 'next';
import { terms } from '@/data/terms';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://codewords.vercel.app';

  const termUrls = terms.map((term) => ({
    url: `${baseUrl}/term/${term.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    ...termUrls,
  ];
}
