"use client";
import { useState, useCallback } from 'react';
import { FilterParams } from '@/types/common';
import { useRouter, useSearchParams } from 'next/navigation';

export function useFilters(initialFilters: FilterParams = {}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [filters, setFilters] = useState<FilterParams>(initialFilters);

  const updateFilters = useCallback((newFilters: Partial<FilterParams>) => {
    setFilters(prev => {
      const updated = { ...prev, ...newFilters };
      const params = new URLSearchParams(searchParams);
      
      Object.entries(updated).forEach(([key, value]) => {
        if (value) {
          params.set(key, Array.isArray(value) ? value.join(',') : value);
        } else {
          params.delete(key);
        }
      });

      router.push(`?${params.toString()}`);
      return updated;
    });
  }, [router, searchParams]);

  return { filters, updateFilters };
}