

import { PostsList } from '@/components/posts/PostsList';
import { PostsService } from '@/services/api/posts';


export default async function PostsPage() {
    const initialData = await PostsService.getAll({ page: 1, pageSize: 10 });
    const categories = await PostsService.getCategories();

  console.log(categories, 'dataCategories')
  console.log(initialData, 'initialData')
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">All Posts</h1>
        
        <PostsList 
          initialData={initialData}
          categories={categories}
        />
  
        <div className="mt-8">
          <a 
            href="/api/rss" 
            className="inline-flex items-center text-blue-600 hover:underline"
          >
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M5 3a1 1 0 000 2c5.523 0 10 4.477 10 10a1 1 0 102 0C17 8.373 11.627 3 5 3z" />
              <path d="M4 9a1 1 0 000 2c3.314 0 6 2.686 6 6a1 1 0 102 0c0-4.418-3.582-8-8-8z" />
              <path d="M3 15a2 2 0 114 0 2 2 0 01-4 0z" />
            </svg>
            RSS Feed
          </a>
        </div>
      </div>
    );
  }