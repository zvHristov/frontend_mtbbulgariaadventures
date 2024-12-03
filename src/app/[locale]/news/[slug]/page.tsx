

import Image from 'next/image';
import { NewsService } from '@/services/api/news';

export default async function NewsItemPage({
    params: { slug },
  }: {
    params: { slug: string };
  }) {
    const news = await NewsService.getBySlug(slug);
  
    return (
      <article className="container mx-auto px-4 py-8">
        <div className="relative h-96 w-full">
         
        </div>
        <div className="mx-auto max-w-3xl">
          <span className="mt-8 text-sm font-medium text-blue-600">
            {news.category}
          </span>
          <h1 className="mt-2 text-4xl font-bold">{news.title}</h1>
          <time className="mt-4 block text-gray-500">
            {new Date(news.publishedAt).toLocaleDateString()}
          </time>
          <div className="prose prose-lg mt-8">{news.content}</div>
        </div>
      </article>
    );
  }