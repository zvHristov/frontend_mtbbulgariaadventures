import { NewsItem } from '@/types/news';
import { BASE_URL } from '@/constants/api';

export const NewsService = {
  async getAll(): Promise<NewsItem[]> {
    const res = await fetch(`${BASE_URL}/api/news`);
    if (!res.ok) throw new Error('Failed to fetch news');
    return res.json();
  },

  async getBySlug(slug: string): Promise<NewsItem> {
    const res = await fetch(`${BASE_URL}/api/news/${slug}`);
    if (!res.ok) throw new Error('Failed to fetch news item');
    return res.json();
  }
};