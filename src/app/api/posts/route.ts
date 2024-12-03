import { NextResponse } from 'next/server';
import { PostsService } from '@/services/api/posts';

export async function GET(request: Request) {
    try {
      const { searchParams } = new URL(request.url);

      console.log(searchParams, 'search params')
      const page = parseInt(searchParams.get('page') || '1');
      const pageSize = parseInt(searchParams.get('pageSize') || '10');
      
      const filters = {
        category: searchParams.get('category') || undefined,
        search: searchParams.get('search') || undefined,
        startDate: searchParams.get('startDate') || undefined,
        endDate: searchParams.get('endDate') || undefined,
        tags: searchParams.get('tags')?.split(',') || undefined,
      };
  
      const posts = await PostsService.getAll(
        { page, pageSize },
        filters
      );
  
      return NextResponse.json(posts);
    } catch (error) {
      return NextResponse.json(
        { error: 'Failed to fetch posts' },
        { status: 500 }
      );
    }
  }