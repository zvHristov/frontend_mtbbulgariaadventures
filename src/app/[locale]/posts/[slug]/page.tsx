import Image from 'next/image';
import { PostsService } from '@/services/api/posts';
import Head from 'next/head';

export default async function PostPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const post = await PostsService.getBySlug(slug);
console.log(post, 'post')
  if (!post) {
    return <div>Post not found</div>;
  }
  return (
    <>
       <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.slug} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.title} />
        <meta property="og:image" content={post.title} />
      </Head>
      <article className="container mx-auto px-4 py-8">
        <div className="relative h-96 w-full">
    
        </div>
        <div className="mx-auto max-w-3xl">
          <h1 className="mt-8 text-4xl font-bold">{post.title}</h1>
          <div className="mt-4 flex items-center">
          
            <div className="ml-4">
              <p className="font-medium">{post.title}</p>
              <time className="text-gray-500">
                {new Date(post.createdAt).toLocaleDateString()}
              </time>
            </div>
          </div>
          <div className="prose prose-lg mt-8">{post.title}</div>
        </div>
      </article>
    </>
  );
}