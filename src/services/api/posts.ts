import { Post } from '@/types/post';
import { BASE_URL } from '@/constants/api';
import { PaginationParams, PaginatedResponse, FilterParams } from '@/types/common';
import qs from 'qs';

export const PostsService = {

    async getAll(
        pagination: PaginationParams,
        filters?: FilterParams,
        locale: string = 'en'
    ): Promise<PaginatedResponse<Post>> {
        const query = qs.stringify({
        pagination,
        filters: {
            ...(filters?.category && { category: filters.category }),
            ...(filters?.search && {
            $or: [
                { title: { $containsi: filters.search } },
                { content: { $containsi: filters.search } },
            ],
            }),
            ...(filters?.startDate && {
            createdAt: { $gte: filters.startDate },
            }),
            ...(filters?.endDate && {
            createdAt: { $lte: filters.endDate },
            }),
            ...(filters?.tags?.length && { tags: { $in: filters.tags } }),
            locale: locale,
        },
        });
        console.log(query, 'query blog-post get all')
        const res = await fetch(`${BASE_URL}/api/blog-posts?${query}`);
        if (!res.ok || !res) throw new Error('Failed to fetch blog-posts');
        return res.json();
    },
    
    async getCategories(): Promise<string[]> {
        const res = await fetch(`${BASE_URL}/api/post-categories`);
        if (!res.ok) throw new Error('Failed to fetch categories');
        return res.json();
        },

        async generateRssFeed(): Promise<string> {
        const res = await fetch(`${BASE_URL}/api/posts/rss`);
        if (!res.ok) throw new Error('Failed to generate RSS feed');
        return res.text();
    },

    async getBySlug(slug: string): Promise<Post> {
        const res = await fetch(`${BASE_URL}/api/blog-posts/slug/${slug}`);
        if (!res.ok) throw new Error('Failed to fetch post');
        return res.json();
    }
};