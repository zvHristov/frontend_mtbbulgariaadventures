import { PostsService } from '@/services/api/posts';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const rssFeed = await PostsService.generateRssFeed();
    return new NextResponse(rssFeed, {
      headers: {
        'Content-Type': 'application/xml',
      },
    });
  } catch (error: any) {
    return NextResponse.json({ error: 'Failed to generate RSS feed' }, { status: 500 });
  }
}