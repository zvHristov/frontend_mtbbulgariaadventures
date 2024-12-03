
'use client';
import { FilterParams, PostCategoriesParams, PaginatedResponse } from '@/types/common';

interface FiltersProps {
  categories: PaginatedResponse<PostCategoriesParams>;
  filters: FilterParams;
  onFilterChange: (filters: Partial<FilterParams>) => void;
}

export function Filters({ categories, filters, onFilterChange }: FiltersProps) {
    return (
      <div className="space-y-4 p-4 border rounded-lg">
        <div>
          <input
            type="text"
            placeholder="Search..."
            value={filters.search || ''}
            onChange={(e) => onFilterChange({ search: e.target.value })}
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        
        <div>
          <select
            value={filters.category || ''}
            onChange={(e) => onFilterChange({ category: e.target.value })}
            className="w-full px-4 py-2 border rounded"
          >
            <option value="">All Categories</option>
            {categories?.data.map((category: PostCategoriesParams) => (
              <option key={category.id} value={category.description}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        
        <div className="flex space-x-4">
          <input
            type="date"
            value={filters.startDate || ''}
            onChange={(e) => onFilterChange({ startDate: e.target.value })}
            className="flex-1 px-4 py-2 border rounded"
          />
          <input
            type="date"
            value={filters.endDate || ''}
            onChange={(e) => onFilterChange({ endDate: e.target.value })}
            className="flex-1 px-4 py-2 border rounded"
          />
        </div>
      </div>
    );
  }