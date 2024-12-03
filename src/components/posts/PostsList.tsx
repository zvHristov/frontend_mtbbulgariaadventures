'use client';

import { useState } from 'react';
import { Post } from '@/types/post';
import { PostCard } from './PostCard';
import { Pagination } from '@/components/common/Pagination';
import { Filters } from '@/components/common/Filters';
import { FilterParams, PaginatedResponse, PostCategoriesParams } from '@/types/common';

interface PostsListProps {
  initialData: PaginatedResponse<Post>;
  categories: PaginatedResponse<PostCategoriesParams>;
}

export function PostsList({ initialData, categories }: PostsListProps) {
    const [data, setData] = useState(initialData);
    const [filters, setFilters] = useState<FilterParams>({});
    const [currentPage, setCurrentPage] = useState(1);
  
    const handleFilterChange = async (newFilters: Partial<FilterParams>) => {
      const updatedFilters = { ...filters, ...newFilters };
      setFilters(updatedFilters);
      
      try {
        const searchParams = new URLSearchParams();
        Object.entries(updatedFilters).forEach(([key, value]) => {
          if (value) searchParams.append(key, value.toString());
        });
        searchParams.append('page', '1'); // Reset to first page on filter change
        
        const response = await fetch(`/api/blog-post?${searchParams.toString()}`);
        const newData = await response.json();
        setData(newData);
        setCurrentPage(1);
      } catch (error) {
        console.error('Failed to fetch filtered posts:', error);
      }
    };
  
    const handlePageChange = async (page: number) => {
      try {
        const searchParams = new URLSearchParams();
        Object.entries(filters).forEach(([key, value]) => {
          if (value) searchParams.append(key, value.toString());
        });
        searchParams.append('page', page.toString());
        
        const response = await fetch(`/api/posts?${searchParams.toString()}`);
        const newData = await response.json();
        setData(newData);
        setCurrentPage(page);
      } catch (error) {
        console.error('Failed to fetch page:', error);
      }
    };
  
    return (
      <div>
        <div className="mb-8">
          <Filters
            categories={categories}
            filters={filters}
            onFilterChange={handleFilterChange}
          />
        </div>
  
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {data && data.data.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
  
        <Pagination
          currentPage={currentPage}
          totalPages={data.meta.totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    );
  }