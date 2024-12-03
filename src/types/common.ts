export interface PaginationParams {
    page: number;
    pageSize: number;
  }
  
  export interface PaginatedResponse<T> {
    data: T[];
    meta: {
      totalItems: number;
      itemCount: number;
      itemsPerPage: number;
      totalPages: number;
      currentPage: number;
    };
  }
  
  export interface FilterParams {
    category?: string;
    search?: string;
    startDate?: string;
    endDate?: string;
    tags?: string[];
  }

  export interface PostCategoriesParams {
    createdAt: string;
    description: string;
    documentId: string;
    id: number;
    name: string;
    publishedAt: string;
    updatedAt: string;
  }


  export interface CookieIF {
    value: string;
    name: string
  }