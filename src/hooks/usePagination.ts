"use client";
import { useState } from 'react';
import { PaginationParams } from '@/types/common';

export function usePagination(initialPage = 1, initialPageSize = 10) {
  const [pagination, setPagination] = useState<PaginationParams>({
    page: initialPage,
    pageSize: initialPageSize,
  });

  const setPage = (page: number) => {
    setPagination(prev => ({ ...prev, page }));
  };

  const setPageSize = (pageSize: number) => {
    setPagination(prev => ({ ...prev, pageSize, page: 1 }));
  };

  return { pagination, setPage, setPageSize };
}