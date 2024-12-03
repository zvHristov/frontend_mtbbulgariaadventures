
import Image from 'next/image';
import Link from 'next/link';
import { NewsItem } from '@/types/news';

interface NewsCardProps {
  news: NewsItem;
}

export function NewsCard({ news }: NewsCardProps) {
    return (
      <article className="flex flex-col overflow-hidden rounded-lg shadow-lg">
        <div className="relative h-48">
          <Image
            src={news.coverImage.url}
            alt={news.coverImage.alt}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-1 flex-col p-6">
          <span className="text-sm font-medium text-blue-600">
            {news.category}
          </span>
          <h3 className="mt-2 text-xl font-semibold">
            <Link href={`/news/${news.slug}`} className="hover:underline">
              {news.title}
            </Link>
          </h3>
          <p className="mt-2 text-gray-600">{news.excerpt}</p>
          <time className="mt-4 text-sm text-gray-500">
            {new Date(news.publishedAt).toLocaleDateString()}
          </time>
        </div>
      </article>
    );
  }