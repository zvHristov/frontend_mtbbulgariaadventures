export interface NewsItem {
    id: number;
    title: string;
    slug: string;
    content: string;
    excerpt: string;
    coverImage: {
      url: string;
      alt: string;
    };
    publishedAt: string;
    category: string;
  }