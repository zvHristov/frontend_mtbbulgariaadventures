import Image from 'next/image';
import Link from 'next/link';
import { Post } from '@/types/post';

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
    return (
      <article className="flex flex-col overflow-hidden rounded-lg shadow-lg">
        <div className="relative h-48">
         
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-xl font-semibold">
            <Link href={`/posts/${post.slug}`} className="hover:underline">
              {post.title}
            </Link>
          </h3>
          <p className="mt-2 text-gray-600">{post.uid}</p>
          <div className="mt-4 flex items-center">
            
            <div className="ml-3">
              <p className="text-sm font-medium">{post.title}</p>
              <p className="text-sm text-gray-500">
                {new Date(post.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </article>
    );
  }