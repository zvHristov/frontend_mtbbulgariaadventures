
import { NewsService } from '@/services/api/news';
import { NewsCard } from '@/components/news/NewsCars';

export default async function NewsPage() {
  const news = await NewsService.getAll();
console.log(news, 'news all')
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">Latest News</h1>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {/* {news.map((item) => (
          <NewsCard key={item.id} news={item} />
        ))} */}
      </div>
    </div>
  );
}