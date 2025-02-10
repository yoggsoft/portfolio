import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'http://manuelreyes.dev',
      lastModified: new Date()
    }
  ]
};
